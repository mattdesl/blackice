require('raf.js')

var THREE = require('three')
var Renderer = require('./lib/renderer')
var createFont = require('./lib/create-font')
var xtend = require('xtend')
var getContext = require('webgl-context')
var noop = function(){}

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
        cb = cb || noop
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

module.exports.setup = function(cb) {
    cb = cb || noop
    var gl = getContext()
    if (!gl) {
        fallback()
        cb(new Error('no WebGL supported'))
    } else {
        cb(null)
    } 
}

function fallback() {
    var img = new Image()
    img.onload = function() {
        document.body.appendChild(img)
        var parent = document.createElement('div')
        parent.style.width = '100%'
        parent.style.height = '100%'
        parent.style.position = 'absolute'
        parent.style.top = parent.style.left = '0'
        parent.style['text-align'] = 'center'

        var text = document.createElement('div')
        text.textContent = 'Sorry, your browser does not support WebGL'
        text.style.color = 'white'
        text.style['margin-top'] = '25%'
        text.style['font-family'] = 'Helvetica, sans-serif'
        text.style['font-size'] = '26px'

        parent.appendChild(text)
        document.body.appendChild(parent)
    }
    img.src = 'img/no-webgl.jpg'
    img.style.width = '100%'
    img.style.opacity = '0.5'
    center(img)
}

function center(el) {
    el.style.position = 'absolute'
    el.style.top = '0'
    el.style.left = '0'
    el.style.left = '0'
    el.style.bottom = '0'
    el.style.margin = 'auto'
}