require('raf.js')

var THREE = require('three')
var Renderer = require('./lib/renderer')
var createFont = require('./lib/create-font')
var xtend = require('xtend')

module.exports = function(opt) {
    opt = opt||{}
    var app = require('canvas-app')(render, xtend({
        context: 'webgl',
        contextAttributes: { antialias: false, alpha: false },
        retina: true,
        onResize: handleResize
    }, opt))

    
    var renderer

    app.load = function(cb) {
        cb = cb || function() {}
        var gl = app.context
        createFont(gl, function(err, font) {
            renderer = Renderer({
                gl: gl, 
                width: app.width, 
                height: app.height,
                font: font
            })
            cb(err)
        })
    }

    return app

    function render(gl, width, height, dt) {
        if (renderer)
            renderer.draw(dt)
    }

    function handleResize(width, height) {
        if (renderer)
            renderer.resize(width, height)
    }

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
}