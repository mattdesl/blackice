var THREE = require('three')

var RigScene = require('./RigScene')
var OrbitController = require('./three-orbit-camera')(THREE)
var Effects = require('./setup-effects')

var TweenMax = require('gsap')
var animateLabels = require('./animate-labels')
var hideLabels = animateLabels.hideAll

var clamp = require('clamp')
var pluck = require('plucker')
var number = require('as-number')
var smoothstep = require('smoothstep')
var lerp = require('lerp')
var unlerp = require('unlerp')

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

        var t = unlerp(0.6, 1.4, controller.phi)
        t = smoothstep(1.4, 0.45, t)
        var range = clamp(t, 0, 1)
        water.alpha = range||0
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
        camera.position.x = -60
        camera.position.z = -40
        camera.position.y = 38
        camera.lookAt(new THREE.Vector3())

        controller = new OrbitController(camera)
        controller.userPan = false
        controller.userPanSpeed = 0.0
        controller.zoomSpeed = 0.1
        controller.rotateSpeed = 0.2
        controller.minDistance = 30
        controller.maxDistance = 200.0
        controller.maxPolarAngle = 90 * Math.PI/180
        controller.minPolarAngle = 40 * Math.PI/180
        controller.center.set( 0, 5, 0 )
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

        hideLabels(labels)
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