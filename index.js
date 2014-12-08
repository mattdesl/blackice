var app = require('canvas-app')(render, {
    context: 'webgl',
    contextAttributes: { antialias: false, alpha: false },
    retina: true,
    onResize: handleResize
})

var THREE = require('three')
var Renderer = require('./lib/renderer')
var createFont = require('./lib/create-font')


var renderer

function render(gl, width, height, dt) {
    if (renderer)
        renderer.draw(dt)
}

function handleResize(width, height) {
    if (renderer)
        renderer.resize(width, height)
}

require('raf.js')
require('domready')(function() {
    document.body.style.margin = '0'
    document.body.style.overflow = 'hidden'
    app.canvas.style.display = 'block'

    document.body.appendChild(app.canvas)

    var gl = app.context
    createFont(gl, function(err, font) {
        if (err)
            console.error(err)

        renderer = Renderer({
            gl: gl, 
            width: app.width, 
            height: app.height,
            font: font
        }) 
        app.start()
    })
})





function setupSmoothTex(gl, t) {
    t.minFilter = gl.LINEAR_MIPMAP_LINEAR
    t.magFilter = gl.LINEAR

    var ext = (gl.getExtension('EXT_texture_filter_anisotropic') 
                    || gl.getExtension("MOZ_EXT_texture_filter_anisotropic"));
    if (ext) {
        var maxAnistrophy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(16, maxAnistrophy));
    }

    t.generateMipmap()
}

function setupNearestTex(gl, t) {
    t.minFilter = t.magFilter = gl.NEAREST
}