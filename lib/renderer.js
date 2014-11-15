var THREE = require('three')

var RigScene = require('./RigScene')
var OrbitController = require('./three-orbit-camera')(THREE)
var TextRenderer = require('./TextRenderer')
var Effects = require('./setup-effects')

var TweenMax = require('gsap')
var createFeatures = require('./feature-points')

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

        controller.update()
        
        scene.update(dt)
        effects.render(dt)


        features.forEach(function(f) {
            var min = 90 * Math.PI/180

            //signed distance
            var x = f.theta, 
                y = controller.theta
            var abdist = Math.abs(x - y)
            var dist = Math.min((2 * Math.PI) - abdist, abdist)

            var alpha = 1.0 - clamp(dist / min, 0, 1)
            f.opacity = smoothstep(0.0, 0.25, alpha)

            if (dist < min) {
                if (!f.showing) 
                    animateInFeature(f)
            } else {
                if (f.showing) {
                    // console.log("ANIM OUT", f.theta, controller.theta, f.showing)
                    animateOutFeature(f)
                }
            }
        })

        textRenderer.time = time
    }

    function animateInFeature(feature) {
        feature.showing = true
        feature.fade = 0
        // TweenMax.to(feature.object.scale, 1.0, {
        //     y: 1.0,
        //     ease: "easeOutExpo"
        // })
        TweenMax.killTweensOf(feature)
        TweenMax.to(feature, 1, {
            fade: 1.0,
            ease: "easeOutQuart"
        })
    }

    function animateOutFeature(feature) {
        if (feature.animatingOut)
            return

        feature.animatingOut = true
        TweenMax.to(feature, 1.0, {
            fade: 0,
            onComplete: hideFeature.bind(null, feature)
        })
    }

    function hideFeature(feature) {
        feature.animatingOut = false
        feature.showing = false
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

        controller = new OrbitController(camera)
        controller.userPan = false
        controller.userPanSpeed = 0.0
        controller.zoomSpeed = 0.001
        controller.rotateSpeed = 0.2
        controller.minDistance = 30
        controller.maxDistance = 200.0
        controller.maxPolarAngle = 88 * Math.PI/180
        controller.minPolarAngle = 40 * Math.PI/180
        controller.center.set( 0, 4, 0 )

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

        var delay = 1

        // TweenMax.staggerFromTo(features, 1.0, {
        //     fade: 0
        // }, { 
        //     delay: delay,
        //     fade: 1.0,
        //     ease: "easeOutExpo"
        // }, 0.05)

        // var objects = features.map(pluck('object.scale'))
        // TweenMax.staggerFromTo(objects, 1.0, {
        //     y: 0,
        // }, {
        //     delay: delay,
        //     y: 1,
        //     ease: "easeOutExpo"
        // }, 0.05)
    }

    function animateOutFeatures(features) {

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