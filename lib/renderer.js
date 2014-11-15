var THREE = require('three')

var RigScene = require('./RigScene')
var OrbitController = require('./three-orbit-camera')(THREE)
var TextRenderer = require('./TextRenderer')
var Effects = require('./setup-effects')

var TweenLite = require('gsap')
var createFeatures = require('./feature-points')

var number = require('as-number')

module.exports = function(opt) {
    opt = opt||{}

    var Font = opt.font

    if (!Font || !Font.textures)
        throw new Error('must specify font with textures')

    var renderer,
        scene,
        camera,
        cameraController,
        features,
        textRenderer,
        water,
        effects,
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

        cameraController.update()
        
        scene.update(dt)
        effects.render(dt)

        textRenderer.time = time
    }

    function setup(gl, width, height) {
        renderer = new THREE.WebGLRenderer({ 
            canvas: gl.canvas,
            antialias: false
        })
        renderer.setClearColor(0xffffff, 0)

        opt.fov = number(opt.fov, 50)
        camera = new THREE.PerspectiveCamera(opt.fov, width/height, 0.5, 20000)
        camera.position.z = 50
        camera.position.y = 20
        camera.lookAt(new THREE.Vector3())

        cameraController = new OrbitController(camera)
        cameraController.userPan = false
        cameraController.userPanSpeed = 0.0
        cameraController.zoomSpeed = 0.001
        cameraController.rotateSpeed = 0.2
        cameraController.minDistance = 30
        cameraController.maxDistance = 200.0
        cameraController.maxPolarAngle = 88 * Math.PI/180
        cameraController.minPolarAngle = 40 * Math.PI/180
        cameraController.center.set( 0, 4, 0 )

        scene = RigScene()

        textRenderer = TextRenderer(gl, {
            font: Font,
            textures: Font.textures
        })

        water = require('./setup-water')(renderer, camera, scene)
        
        scene.cubeMap = water.cubeMap
        scene.updateMaterial()

        effects = Effects({
            renderer: renderer,
            scene: scene,
            camera: camera,
            width: width,
            height: height
        })

        features = createFeatures(scene)
        effects.setText(textRenderer, features)


        TweenMax.staggerFromTo(features, 1.0, {
            fade: 0
        }, { 
            delay: 1.0,
            fade: 1.0,
            ease: "easeOutExpo"
        }, 0.05)
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