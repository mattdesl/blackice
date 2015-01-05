var THREE = require('three')

var RigScene = require('./RigScene')
var OrbitController = require('./three-orbit-camera')(THREE)
var Effects = require('./setup-effects')

var TweenMax = require('gsap')
var animateLabels = require('./animate-labels')

var clamp = require('clamp')
var pluck = require('plucker')
var number = require('as-number')
var smoothstep = require('smoothstep')

module.exports = function(opt) {
    opt = opt||{}

    var Font = opt.font

    if (!Font || !Font.textures)
        throw new Error('must specify font with textures')

    var renderer,
        scene,
        camera,
        controller,
        features,
        water,
        effects,
        labels = [],
        time = 0

    if (!opt.gl)
        throw new Error('must specify GL context')

    setup(opt.gl, opt.width||0, opt.height||0)

    function draw(dt) {
        time +=  Math.min(dt, 30) / 1000
        renderer.resetAttributes()
        renderer.resetGLState()

        water.material.uniforms.time.value = time * 0.1
        water.render()

        controller.update()
        
        scene.update(dt)
        effects.render(dt)

        animateLabels(controller, labels)
    }

    function setup(gl, width, height) {
        renderer = new THREE.WebGLRenderer({ 
            canvas: gl.canvas,
            antialias: false,
            alpha: false
        })
        renderer.setClearColor(0xffffff, 0)
        renderer.shadowMapType = THREE.BasicShadowMap
        // renderer.shadowMapEnabled = true

        opt.fov = number(opt.fov, 50)
        camera = new THREE.PerspectiveCamera(opt.fov, width/height, 0.5, 20000)
        camera.position.z = 50
        camera.position.y = 20
        camera.lookAt(new THREE.Vector3())

        controller = new OrbitController(camera)
        controller.userPan = false
        controller.userPanSpeed = 0.0
        controller.zoomSpeed = 0.1
        controller.rotateSpeed = 0.2
        controller.minDistance = 30
        controller.maxDistance = 200.0
        controller.maxPolarAngle = 88 * Math.PI/180
        controller.minPolarAngle = 40 * Math.PI/180
        controller.center.set( 0, 4, 0 )

        scene = RigScene()

        water = require('./setup-water')(renderer, camera, scene)
        
        scene.cubeMap = water.cubeMap
        scene.updateMaterial()

        var pass = require('./create-text-pass')({
            renderer: renderer,
            scene: scene,
            camera: camera,
            font: Font
        })

        labels = pass.groups

        effects = Effects({
            renderer: renderer,
            scene: scene,
            camera: camera,
            width: width,
            blur: false,
            height: height,
            renderPass: pass
        })
    }

    function handleResize(width, height) {
        renderer.setSize(width, height)
        camera.aspect = width/height
        camera.updateProjectionMatrix()

        effects.resize(width, height)
    }

    return {
        draw: draw,
        resize: handleResize
    }
}