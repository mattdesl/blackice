var app = require('canvas-app')(render, {
    context: 'webgl',
    contextAttributes: { antialias: false },
    onResize: handleResize
})

var THREE = require('three')
var RigScene = require('./lib/RigScene')
var OrbitController = require('./lib/three-orbit-camera')(THREE)
var TextRenderer = require('./lib/TextRenderer')
var createTexture = require('gl-texture2d')
var lerp = require('lerp')

var img = require('img')

var Font = require('./fonts/Exo2SemiBold.json')
var fontImage = 'fonts/Exo2SemiBold.png'
var createFeatures = require('./lib/feature-points')
var EffectComposer = require('three-effectcomposer')(THREE)
var Effects = require('./lib/setup-effects')


var renderer,
    scene,
    camera,
    cameraController,
    features,
    textRenderer,
    fontTextures,
    water,
    effects,
    time = 0

function render(gl, width, height, dt) {
    time +=  dt / 1000
    renderer.resetAttributes()
    renderer.resetGLState()

    water.material.uniforms.time.value = time * 0.1
    water.render()

    cameraController.update()
    
    effects.render(dt)
    // renderer.render(scene, camera)

    // gl.disable(gl.)
    // gl.clearColor(0,0,0,1)
    // gl.clear(gl.COLOR_BUFFER_BIT)
    
    
    // textRenderer.begin()
    // features.forEach(function(spot) {
    //     textRenderer.draw(camera, spot.text, spot.object, Math.sin(time)/2+0.5)
    // })
    // textRenderer.end()
}

function setup(gl, width, height) {
    renderer = new THREE.WebGLRenderer({ 
        canvas: gl.canvas ,
        antialias: false
    })
    renderer.setClearColor(0xffffff, 0)

    camera = new THREE.PerspectiveCamera(50, width/height, 0.5, 20000)
    camera.position.z = 50
    camera.position.y = 20
    camera.lookAt(new THREE.Vector3())

    cameraController = new OrbitController(camera)
    cameraController.userPan = false
    cameraController.userPanSpeed = 0.0
    cameraController.minDistance = 30
    cameraController.maxDistance = 200.0
    cameraController.maxPolarAngle = 88 * Math.PI/180
    cameraController.minPolarAngle = 40 * Math.PI/180
    cameraController.center.set( 0, 4, 0 )

    scene = RigScene()

    features = createFeatures(scene)

    textRenderer = TextRenderer(gl, {
        font: Font,
        textures: fontTextures
    })

    water = require('./lib/setup-water')(renderer, camera, scene)

    effects = Effects({
        renderer: renderer,
        scene: scene,
        camera: camera,
        width: width,
        height: height
    })

    effects.setText(textRenderer, features)
}

function handleResize(width, height) {
    renderer.setSize(width, height)
    camera.aspect = width/height
    camera.updateProjectionMatrix()

    effects.resize(width, height)
}

require('raf.js')
require('domready')(function() {
    document.body.style.margin = '0'
    document.body.style.overflow = 'hidden'
    app.canvas.style.display = 'block'

    document.body.appendChild(app.canvas)

    img(fontImage, function(err, res) {
        if (err)
            console.error("cannot load font image at "+fontImage)
        fontTextures = [res].map(function(i) {
            var t = createTexture(app.context, i)

            t.minFilter = gl.LINEAR_MIPMAP_LINEAR
            t.magFilter = gl.LINEAR

            var ext = (gl.getExtension('EXT_texture_filter_anisotropic') 
                            || gl.getExtension("MOZ_EXT_texture_filter_anisotropic"));
            if (ext) {
                var maxAnistrophy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(16, maxAnistrophy));
            }

            t.generateMipmap()
            return t
        })
        setup(app.context, app.width, app.height)    
        app.start()
    })
})