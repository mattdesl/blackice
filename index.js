var app = require('canvas-app')(render, {
    context: 'webgl',
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

var renderer,
    scene,
    camera,
    cameraController,
    features,
    textRenderer,
    fontTextures,
    water,
    time = 0

function render(gl, width, height, dt) {
    time +=  dt / 1000
    renderer.resetAttributes()
    renderer.resetGLState()

    water.material.uniforms.time.value = time * 0.1
    water.render()

    cameraController.update()
    renderer.render(scene, camera)

    textRenderer.begin()
    features.forEach(function(spot) {
        textRenderer.draw(camera, spot.text, spot.object, Math.sin(time)/2+0.5)
    })
    textRenderer.end()
}

function setup(gl, width, height) {
    renderer = new THREE.WebGLRenderer({ canvas: gl.canvas })
    renderer.setClearColor(0xffffff, 0)

    camera = new THREE.PerspectiveCamera(50, width/height, 0.5, 20000)
    camera.position.z = 50
    camera.position.y = 20
    camera.lookAt(new THREE.Vector3())

    cameraController = new OrbitController(camera)
    cameraController.userPan = false
    cameraController.userPanSpeed = 0.0
    cameraController.minDistance = 30
    cameraController.maxDistance = 50.0
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
}

function handleResize(width, height) {
    renderer.setSize(width, height)
    camera.aspect = width/height
    camera.updateProjectionMatrix()
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
            t.generateMipmap()
            return t
        })
        setup(app.context, app.width, app.height)    
        app.start()
    })
})