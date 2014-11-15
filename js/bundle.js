(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./index.js":[function(require,module,exports){
(function (global){
var app = require('canvas-app')(render, {
    context: 'webgl',
    contextAttributes: { antialias: false },
    onResize: handleResize
})

var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)

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
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/create-font":"/projects/blackice/lib/create-font.js","./lib/renderer":"/projects/blackice/lib/renderer.js","canvas-app":"/projects/blackice/node_modules/canvas-app/index.js","domready":"/projects/blackice/node_modules/domready/ready.js","raf.js":"/projects/blackice/node_modules/raf.js/raf.js"}],"/projects/blackice/fonts/Exo2SemiBold.json":[function(require,module,exports){
module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports={"pages":["Exo2SemiBold.png"],"chars":[{"id":32,"x":0,"y":0,"width":0,"height":0,"xoffset":0,"yoffset":33,"xadvance":7,"page":0,"chnl":0},{"id":41,"x":0,"y":0,"width":20,"height":41,"xoffset":-4,"yoffset":3,"xadvance":12,"page":0,"chnl":0},{"id":40,"x":20,"y":0,"width":19,"height":41,"xoffset":-3,"yoffset":3,"xadvance":12,"page":0,"chnl":0},{"id":124,"x":39,"y":0,"width":13,"height":40,"xoffset":-2,"yoffset":3,"xadvance":8,"page":0,"chnl":0},{"id":125,"x":52,"y":0,"width":18,"height":40,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":123,"x":70,"y":0,"width":18,"height":40,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":36,"x":88,"y":0,"width":25,"height":39,"xoffset":-3,"yoffset":3,"xadvance":18,"page":0,"chnl":0},{"id":93,"x":113,"y":0,"width":17,"height":39,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":91,"x":130,"y":0,"width":17,"height":39,"xoffset":-2,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":81,"x":147,"y":0,"width":28,"height":39,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":106,"x":175,"y":0,"width":16,"height":38,"xoffset":-4,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":92,"x":191,"y":0,"width":26,"height":34,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":47,"x":217,"y":0,"width":26,"height":34,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":102,"x":243,"y":0,"width":23,"height":33,"xoffset":-4,"yoffset":5,"xadvance":13,"page":0,"chnl":0},{"id":38,"x":266,"y":0,"width":32,"height":32,"xoffset":-3,"yoffset":6,"xadvance":25,"page":0,"chnl":0},{"id":35,"x":298,"y":0,"width":30,"height":32,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":37,"x":328,"y":0,"width":36,"height":32,"xoffset":-3,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":63,"x":364,"y":0,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":16,"page":0,"chnl":0},{"id":33,"x":388,"y":0,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":48,"x":402,"y":0,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":57,"x":428,"y":0,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":56,"x":453,"y":0,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":55,"x":479,"y":0,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":54,"x":0,"y":41,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":53,"x":26,"y":41,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":52,"x":50,"y":41,"width":27,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":51,"x":77,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":50,"x":102,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":49,"x":127,"y":41,"width":19,"height":32,"xoffset":-4,"yoffset":6,"xadvance":13,"page":0,"chnl":0},{"id":121,"x":146,"y":41,"width":27,"height":32,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":113,"x":173,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":112,"x":198,"y":41,"width":25,"height":32,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":108,"x":223,"y":41,"width":17,"height":32,"xoffset":-2,"yoffset":6,"xadvance":10,"page":0,"chnl":0},{"id":107,"x":240,"y":41,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":105,"x":264,"y":41,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":8,"page":0,"chnl":0},{"id":104,"x":278,"y":41,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":103,"x":302,"y":41,"width":27,"height":32,"xoffset":-4,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":100,"x":329,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":98,"x":354,"y":41,"width":25,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":90,"x":379,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":89,"x":404,"y":41,"width":28,"height":32,"xoffset":-4,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":88,"x":432,"y":41,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":87,"x":461,"y":41,"width":39,"height":32,"xoffset":-4,"yoffset":6,"xadvance":31,"page":0,"chnl":0},{"id":86,"x":0,"y":73,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":85,"x":29,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":21,"page":0,"chnl":0},{"id":84,"x":56,"y":73,"width":28,"height":32,"xoffset":-4,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":83,"x":84,"y":73,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":82,"x":109,"y":73,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":80,"x":135,"y":73,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":79,"x":161,"y":73,"width":28,"height":32,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":78,"x":189,"y":73,"width":28,"height":32,"xoffset":-2,"yoffset":6,"xadvance":23,"page":0,"chnl":0},{"id":77,"x":217,"y":73,"width":34,"height":32,"xoffset":-2,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":76,"x":251,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":75,"x":275,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":74,"x":302,"y":73,"width":18,"height":32,"xoffset":-4,"yoffset":6,"xadvance":11,"page":0,"chnl":0},{"id":73,"x":320,"y":73,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":72,"x":334,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":71,"x":361,"y":73,"width":27,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":70,"x":388,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":69,"x":412,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":68,"x":436,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":21,"page":0,"chnl":0},{"id":67,"x":463,"y":73,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":66,"x":0,"y":105,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":65,"x":26,"y":105,"width":30,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":64,"x":56,"y":105,"width":29,"height":31,"xoffset":-2,"yoffset":9,"xadvance":24,"page":0,"chnl":0},{"id":116,"x":85,"y":105,"width":22,"height":30,"xoffset":-4,"yoffset":8,"xadvance":13,"page":0,"chnl":0},{"id":59,"x":107,"y":105,"width":14,"height":29,"xoffset":-2,"yoffset":14,"xadvance":8,"page":0,"chnl":0},{"id":122,"x":121,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":120,"x":145,"y":105,"width":26,"height":26,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":119,"x":171,"y":105,"width":36,"height":26,"xoffset":-4,"yoffset":12,"xadvance":27,"page":0,"chnl":0},{"id":118,"x":207,"y":105,"width":27,"height":26,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":117,"x":234,"y":105,"width":24,"height":26,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":115,"x":258,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":114,"x":282,"y":105,"width":20,"height":26,"xoffset":-2,"yoffset":12,"xadvance":13,"page":0,"chnl":0},{"id":111,"x":302,"y":105,"width":25,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":110,"x":327,"y":105,"width":24,"height":26,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":109,"x":351,"y":105,"width":33,"height":26,"xoffset":-2,"yoffset":12,"xadvance":28,"page":0,"chnl":0},{"id":101,"x":384,"y":105,"width":25,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":99,"x":409,"y":105,"width":23,"height":26,"xoffset":-3,"yoffset":12,"xadvance":16,"page":0,"chnl":0},{"id":97,"x":432,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":43,"x":456,"y":105,"width":24,"height":24,"xoffset":-3,"yoffset":11,"xadvance":17,"page":0,"chnl":0},{"id":62,"x":480,"y":105,"width":23,"height":24,"xoffset":-2,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":60,"x":0,"y":137,"width":23,"height":24,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":58,"x":23,"y":137,"width":14,"height":24,"xoffset":-3,"yoffset":14,"xadvance":8,"page":0,"chnl":0},{"id":42,"x":37,"y":137,"width":21,"height":21,"xoffset":-3,"yoffset":6,"xadvance":14,"page":0,"chnl":0},{"id":61,"x":58,"y":137,"width":24,"height":20,"xoffset":-2,"yoffset":13,"xadvance":19,"page":0,"chnl":0},{"id":94,"x":82,"y":137,"width":23,"height":19,"xoffset":-4,"yoffset":8,"xadvance":14,"page":0,"chnl":0},{"id":44,"x":105,"y":137,"width":14,"height":19,"xoffset":-3,"yoffset":24,"xadvance":8,"page":0,"chnl":0},{"id":39,"x":119,"y":137,"width":13,"height":17,"xoffset":-3,"yoffset":6,"xadvance":7,"page":0,"chnl":0},{"id":96,"x":132,"y":137,"width":18,"height":17,"xoffset":-4,"yoffset":5,"xadvance":11,"page":0,"chnl":0},{"id":34,"x":150,"y":137,"width":18,"height":17,"xoffset":-3,"yoffset":6,"xadvance":12,"page":0,"chnl":0},{"id":126,"x":168,"y":137,"width":22,"height":14,"xoffset":-2,"yoffset":17,"xadvance":17,"page":0,"chnl":0},{"id":46,"x":190,"y":137,"width":14,"height":14,"xoffset":-3,"yoffset":24,"xadvance":8,"page":0,"chnl":0},{"id":95,"x":204,"y":137,"width":24,"height":13,"xoffset":-2,"yoffset":28,"xadvance":18,"page":0,"chnl":0},{"id":45,"x":228,"y":137,"width":19,"height":13,"xoffset":-2,"yoffset":18,"xadvance":14,"page":0,"chnl":0}],"kernings":[],"info":{"face":"Exo 2 Semi Bold","size":32,"bold":0,"italic":0,"charset":"","unicode":0,"stretchH":100,"smooth":1,"aa":1,"padding":[4,4,4,4],"spacing":[-8,-8]},"common":{"lineHeight":40,"base":33,"scaleW":512,"scaleH":512,"pages":1,"packed":0}}
},{}],"/projects/blackice/lib/RigScene.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var inherits = require('inherits')
var mixes = require('mixes')
var Base = THREE.Scene

var YOFF = -2

function RigScene(opt) {
    if (!(this instanceof RigScene))
        return new RigScene(opt)
    Base.call(this)
    this.fog = new THREE.FogExp2( 0x0b0516, 0.00015 );


    // var box = new THREE.Mesh(
    //     new THREE.BoxGeometry(20, 20, 10),
    //     new THREE.MeshBasicMaterial({ color: 0xaaaaaa, wireframe: false })
    // )

    // this.add(box)


    this.time = 0
    this.cubeMap = null
    this.updateMaterial()

    var loader = new THREE.OBJLoader()
    loader.load('model/blockout.obj', function(object) {
        var s = 0.3
        console.log(object)
        object.scale.set(s,s,s)
        object.position.y -= YOFF
        this.mesh = object
        this.add(object)

        this.mesh.traverse(function(child) {
            if (child instanceof THREE.Mesh) 
                child.material = this.material
        }.bind(this))
    }.bind(this))
}

inherits(RigScene, Base)

mixes(RigScene, {

    updateMaterial: function() {
        this.material = new THREE.MeshLambertMaterial({
            color: 0xaaaaaa,
            reflectivity: 0.4,
            envMap: this.cubeMap
        })

    },

    update: function(dt) {
        this.time += Math.min(dt, 30)/1000
        var m = this.mesh
        if (!m)
            return
        var anim = Math.sin(this.time)

        // m.position.y = YOFF + anim*0.2
        // m.position.x = Math.sin(this.time*0.1)*0.05
        // m.position.z = Math.sin(this.time*0.2)*0.1
        // m.rotation.x = anim*0.03
        // m.rotation.y = Math.sin(this.time*Math.cos(this.time*0.1))*0.005
    }
})

module.exports = RigScene
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"inherits":"/projects/blackice/node_modules/inherits/inherits_browser.js","mixes":"/projects/blackice/node_modules/mixes/index.js"}],"/projects/blackice/lib/TextPass.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var EffectComposer = require('three-effectcomposer')(THREE)
var inherits = require('inherits')
var Base = EffectComposer.RenderPass

function TextPass() {
    var args = Array.prototype.slice.call(arguments)
    Base.apply(this, args)

    this.text = null
    this.features = null
}

inherits(TextPass, Base)

TextPass.prototype.render = function( renderer, writeBuffer, readBuffer, delta ) {
    Base.prototype.render.call(this, renderer, writeBuffer, readBuffer, delta)

    if (this.text && this.features) {
        this.text.begin()
        this.features.forEach(function(spot) {
            this.text.fade = spot.fade
            this.text.draw(this.camera, spot.text, spot.object)
        }, this)
        this.text.end()

        renderer.resetGLState()
        renderer.resetAttributes()
    }
}

module.exports = TextPass
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"inherits":"/projects/blackice/node_modules/inherits/inherits_browser.js","three-effectcomposer":"/projects/blackice/node_modules/three-effectcomposer/index.js"}],"/projects/blackice/lib/TextRenderer.js":[function(require,module,exports){
var createText = require("gl-sprite-text");
var mat4 = require("gl-mat4");
var Renderer = require("gl-sprites");
var defaultShader = require("gl-basic-shader");
var modelTransform = mat4.create();

var sprite = {
    texture: null,
    position: [0, 0],
    shape: [0, 0],
    color: [1, 0, 0, 0.5],
    texcoord: [0, 0, 1, 1]
};

var off = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
};

var WHITE = [1, 1, 1, 1];
var BORDER = [0.5, 0.5, 0.5, 1];
var BGFILL = [0.1, 0.1, 0.1, 0.99];
var SDF_PADDING = -4;
var tmpVec = new THREE.Vector3();
var glslify = require("glslify");
var sdfShader = require("glslify/adapter.js")("\n#define GLSLIFY 1\n\nattribute vec4 position;\nattribute vec4 color;\nattribute vec2 texcoord0;\nuniform mat4 projection;\nuniform mat4 view;\nuniform mat4 model;\nvarying vec4 v_col;\nvarying vec2 v_tex0;\nvarying float animOffset;\nvoid main() {\n  gl_Position = projection * view * model * position;\n  v_col = color;\n  v_tex0 = texcoord0;\n  gl_PointSize = 1.0;\n  animOffset = position.x;\n}", "\n#define GLSLIFY 1\n\n#ifdef GL_ES\n\nprecision mediump float;\n#endif\n\nvarying vec4 v_col;\nvarying vec2 v_tex0;\nvarying float animOffset;\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float fade;\nconst float smoothing = 1.0 / 32.0;\nconst vec2 shadowOffset = vec2(-1.0 / 512.0);\nconst vec4 glowColor = vec4(vec3(0.1), 1.0);\nconst float glowMin = 0.4;\nconst float glowMax = 0.8;\nvec4 a_x_blur(sampler2D tex, vec2 uv, vec2 blur, vec2 direction) {\n  vec4 sum = vec4(0.0);\n  sum += texture2D(tex, vec2(uv.x - 4.0 * blur.x * direction.x, uv.y - 4.0 * blur.y * direction.y)) * 0.0162162162;\n  sum += texture2D(tex, vec2(uv.x - 3.0 * blur.x * direction.x, uv.y - 3.0 * blur.y * direction.y)) * 0.0540540541;\n  sum += texture2D(tex, vec2(uv.x - 2.0 * blur.x * direction.x, uv.y - 2.0 * blur.y * direction.y)) * 0.1216216216;\n  sum += texture2D(tex, vec2(uv.x - 1.0 * blur.x * direction.x, uv.y - 1.0 * blur.y * direction.y)) * 0.1945945946;\n  sum += texture2D(tex, vec2(uv.x, uv.y)) * 0.2270270270;\n  sum += texture2D(tex, vec2(uv.x + 1.0 * blur.x * direction.x, uv.y + 1.0 * blur.y * direction.y)) * 0.1945945946;\n  sum += texture2D(tex, vec2(uv.x + 2.0 * blur.x * direction.x, uv.y + 2.0 * blur.y * direction.y)) * 0.1216216216;\n  sum += texture2D(tex, vec2(uv.x + 3.0 * blur.x * direction.x, uv.y + 3.0 * blur.y * direction.y)) * 0.0540540541;\n  sum += texture2D(tex, vec2(uv.x + 4.0 * blur.x * direction.x, uv.y + 4.0 * blur.y * direction.y)) * 0.0162162162;\n  return sum;\n}\nvoid main() {\n  float anim = mod(fade, animOffset);\n  vec4 smoothColor = vec4(0.0);\n  vec4 texColor = texture2D(texture0, v_tex0);\n  float dst = texColor.a;\n  float smoothAmt = mix(1.5, smoothing, anim);\n  float alpha = smoothstep(0.5 - smoothAmt, 0.5 + smoothAmt, dst);\n  vec4 base = v_col * vec4(alpha);\n  float glowDst = texture2D(texture0, v_tex0 + shadowOffset).a;\n  vec4 glow = glowColor * smoothstep(glowMin, glowMax, glowDst);\n  float mask = 1.0 - alpha;\n  smoothColor = mix(base, glow, mask);\n  smoothColor.rgb *= smoothColor.a;\n  gl_FragColor = smoothColor;\n  gl_FragColor = mix(vec4(vec3(1.0), 0.0), gl_FragColor, anim);\n  if(gl_FragColor.a < 0.1)\n    discard;\n  \n}", [{"name":"projection","type":"mat4"},{"name":"view","type":"mat4"},{"name":"model","type":"mat4"},{"name":"texture0","type":"sampler2D"},{"name":"texture1","type":"sampler2D"},{"name":"fade","type":"float"}], [{"name":"position","type":"vec4"},{"name":"color","type":"vec4"},{"name":"texcoord0","type":"vec2"}]);

function TextRenderer(gl, opt) {
    if (!(this instanceof TextRenderer))
        return new TextRenderer(gl, opt);

    opt = opt || {};
    this.gl = gl;

    this.sprites = Renderer(gl, {
        capacity: 10
    });

    this.shader = sdfShader(gl);

    this.element = createText(gl, {
        font: opt.font,
        text: "lorem ipsum dolor sit amit",
        textures: opt.textures
    });

    this.projection = mat4.create();
    this.scale = mat4.create();
    this.fade = 0;
    var s = 0.05;
    mat4.scale(this.scale, this.scale, [s, -s, s]);
}

TextRenderer.prototype.begin = function() {
    var gl = this.gl;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.frontFace(gl.CCW);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);
    gl.colorMask(true, true, true, true);
    gl.disable(gl.STENCIL_TEST);
    gl.activeTexture(gl.TEXTURE0);
    gl.depthMask(true);
    this.shader.bind();
    var tex = this.element.textures[0];
    tex.bind();
};

TextRenderer.prototype.end = function() {
    var gl = this.gl;
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
};

TextRenderer.prototype.draw = function(camera, text, object3d) {
    var gl = this.gl;
    this.element.textures[0].bind(0);
    this.shader.uniforms.fade = this.fade;
    mat4.multiply(modelTransform, object3d.matrix.elements, this.scale);
    this.sprites.projection = camera.projectionMatrix.elements;
    this.sprites.view = camera.matrixWorldInverse.elements;
    this.sprites.model = modelTransform;
    this.element.text = text;
    this.element.clearLayout();
    var b = this.element.getBounds(undefined, off);
    var pad = [8, 4];
    var border = 1;
    this.sprites.begin();
    this.sprites.updateMatrices();
    this.sprites.color = BGFILL;
    this.sprites.color = BORDER;
    this.sprites.end();
    mat4.translate(modelTransform, modelTransform, [0, 0, 0.1]);
    this.shader.bind();
    this.shader.uniforms.projection = camera.projectionMatrix.elements;
    this.shader.uniforms.view = camera.matrixWorldInverse.elements;
    this.shader.uniforms.model = modelTransform;
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    this.element.batch.color = WHITE;
    this.element.draw(this.shader, SDF_PADDING, SDF_PADDING);
};

module.exports = TextRenderer;
},{"gl-basic-shader":"/projects/blackice/node_modules/gl-basic-shader/index.js","gl-mat4":"/projects/blackice/node_modules/gl-mat4/index.js","gl-sprite-text":"/projects/blackice/node_modules/gl-sprite-text/index.js","gl-sprites":"/projects/blackice/node_modules/gl-sprites/index.js","glslify":"/projects/blackice/node_modules/glslify/browser.js","glslify/adapter.js":"/projects/blackice/node_modules/glslify/adapter.js"}],"/projects/blackice/lib/create-font.js":[function(require,module,exports){
var Font = require('../fonts/Exo2SemiBold.json')
var fontImage = 'fonts/Exo2SemiBold.png'
var img = require('img')
var createTexture = require('gl-texture2d')

module.exports = function(gl, cb) {
    img(fontImage, function(err, res) {
        if (err) {
            cb(err)
            return
        }

        Font.textures = [res].map(function(i) {
            var t = createTexture(gl, i)

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
        
        cb(null, Font)
    })
}
},{"../fonts/Exo2SemiBold.json":"/projects/blackice/fonts/Exo2SemiBold.json","gl-texture2d":"/projects/blackice/node_modules/gl-texture2d/texture.js","img":"/projects/blackice/node_modules/img/index.js"}],"/projects/blackice/lib/feature-points.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var number = require('as-number')    

var lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel eleifend massa, laoreet efficitur dui. Sed euismod velit id leo euismod rutrum. Cras fringilla vehicula dolor vel congue. Cras congue sed nulla nec faucibus. Sed lacinia tellus non quam tempus iaculis. Maecenas scelerisque mi vel erat scelerisque mollis. Phasellus pulvinar malesuada risus. Nam nec lacus luctus, ultrices lacus non, ornare purus. Aliquam purus elit, mattis a est quis, mollis interdum mauris. Donec ex lectus, vehicula nec orci lobortis, semper aliquam nisi. Mauris tincidunt lorem et commodo fringilla.'
lipsum = lipsum.split('.').map(function(s) {
    return s.substring(0, Math.min(30, s.length))
}).filter(function(s) {
    return s.trim().length>1
})

module.exports = function(parent, n) {
    n = number(n, 10)
    var points = []
    for (var i=0; i<n; i++) {
        
        var r = Math.random() * 2.0 * Math.PI
        var z = (Math.random() * 2.0) - 1.0
        var scale = 15
        var zScale = Math.sqrt(1.0-z*z) * scale
        // var h = 2, l = 1.5
        // var zScale = lerp(l, h, Math.random())

        points.push(new THREE.Vector3(
            Math.cos(r)*zScale,
            Math.sin(r)*zScale + scale,
            z * scale
        ))
    }

    return points.map(function(v, i) {
        var dir = v.clone().sub(new THREE.Vector3(0,v.y,0)).normalize()
        var object = new THREE.Object3D()
        // var object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({color:0xff0000}))
        parent.add(object)
        object.visible = false

        object.position.copy(v)

        object.rotation.x = 0

        var dx = v.x,
            dz = v.z
        object.rotation.y = -Math.atan2(dz, dx)

        return {
            direction: dir,
            origin: v,
            fade: 0.0,
            object: object,
            text: lipsum[ i % lipsum.length ]
        }
    })
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"as-number":"/projects/blackice/node_modules/as-number/index.js"}],"/projects/blackice/lib/renderer.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)

var RigScene = require('./RigScene')
var OrbitController = require('./three-orbit-camera')(THREE)
var TextRenderer = require('./TextRenderer')
var Effects = require('./setup-effects')

var TweenLite = (typeof window !== "undefined" ? window.TweenMax : typeof global !== "undefined" ? global.TweenMax : null)
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
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./RigScene":"/projects/blackice/lib/RigScene.js","./TextRenderer":"/projects/blackice/lib/TextRenderer.js","./feature-points":"/projects/blackice/lib/feature-points.js","./setup-effects":"/projects/blackice/lib/setup-effects.js","./setup-water":"/projects/blackice/lib/setup-water.js","./three-orbit-camera":"/projects/blackice/lib/three-orbit-camera/index.js","as-number":"/projects/blackice/node_modules/as-number/index.js"}],"/projects/blackice/lib/setup-effects.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var EffectComposer = require('three-effectcomposer')(THREE)
var createFXAA = require('three-shader-fxaa')(THREE)
var createBlur = require('./shaders/blur')
var createLens = require('./shaders/lens')
var createEmpty = require('./shaders/pass')
var TextPass = require('./TextPass')

module.exports = Effects

function Effects(opt) {
    if (!(this instanceof Effects)) 
        return new Effects(opt)
    opt = opt||{}


    var parameters = { 
        minFilter: THREE.LinearFilter, 
        magFilter: THREE.LinearFilter, 
        format: THREE.RGBFormat, 
        stencilBuffer: false 
    }
    var width = opt.width
    var height = opt.height
    var renderTarget = new THREE.WebGLRenderTarget(width, height, parameters);

    this.composer = new EffectComposer(opt.renderer, renderTarget)

    this.textPass = new TextPass(opt.scene, opt.camera)
    this.composer.addPass(this.textPass)
    
    this.shaders = []
    this.noiseDelay = 33
    this.noiseTime = 0

    // this.shaders.push(new EffectComposer.ShaderPass(createEmpty()))


    var fxaaShader = new EffectComposer.ShaderPass(createFXAA())
    this.shaders.push(fxaaShader)

    if (opt.blur !== false) {
        var blur = createBlur()
        var iterations = 1;
        for (var i=0; i<iterations; i++) {
            var r = (i+1)*2;

            var horiz = new EffectComposer.ShaderPass( blur );
            horiz.uniforms.radius.value = r
            horiz.uniforms.strength.value = 1
            horiz.uniforms.dir.value.set(1,0)

            var vert = new EffectComposer.ShaderPass( blur );
            vert.uniforms.radius.value = r
            vert.uniforms.strength.value = 1
            vert.uniforms.dir.value.set(0,1)

            this.shaders.push(horiz, vert)
        }
    }

    var lensPass = new EffectComposer.ShaderPass(createLens())
    this.shaders.push(lensPass)

    lensPass.uniforms.tLookup.value = loadTexture('img/lookup.png', { filter: THREE.LinearFilter })

    this.shaders.forEach(function(pass, i, self) {
        this.composer.addPass(pass)
        if (i === self.length-1)
            pass.renderToScreen = true
    }, this)  
    if (opt.width && opt.height) 
        this.resize(opt.width, opt.height)
}


function loadTexture(path, opt) {
    return THREE.ImageUtils.loadTexture(path, undefined, function(tex) {
        if (opt.filter) tex.minFilter = tex.magFilter = opt.filter
        if (opt.wrap) tex.wrapS = tex.wrapT = opt.wrap
    })
}

require('mixes')(Effects, {

    setText: function(textRenderer, features) {
        this.textPass.text = textRenderer
        this.textPass.features = features
    },

    render: function(dt) {
        this.noiseTime += dt
        if (this.noiseTime > this.noiseDelay) {
            this.noiseTime = 0
            this.shaders.forEach(function(pass) {
                if (pass.uniforms.tick)
                    pass.uniforms.tick.value += 0.005
            })
        }

        this.composer.render()
    },

    resize: function(width, height) {
        width *= 2
        height *= 2
        this.composer.setSize(width, height)
        this.shaders.forEach(function(pass) {
            var dpr = 1
            // var dpr = (window.devicePixelRatio||1)
            if (pass.uniforms.resolution)
                pass.uniforms.resolution.value.set(width*dpr, height*dpr)
        })
    }
})
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./TextPass":"/projects/blackice/lib/TextPass.js","./shaders/blur":"/projects/blackice/lib/shaders/blur.js","./shaders/lens":"/projects/blackice/lib/shaders/lens.js","./shaders/pass":"/projects/blackice/lib/shaders/pass.js","mixes":"/projects/blackice/node_modules/mixes/index.js","three-effectcomposer":"/projects/blackice/node_modules/three-effectcomposer/index.js","three-shader-fxaa":"/projects/blackice/node_modules/three-shader-fxaa/index.js"}],"/projects/blackice/lib/setup-water.js":[function(require,module,exports){
var cubeShader = {

    uniforms: THREE.UniformsUtils.merge( [
        { "tCube": { type: "t", value: null },
        "tFlip": { type: "f", value: - 1 } },
        THREE.UniformsLib[ "fog" ]
    ] ),

    vertexShader: [

        "varying vec3 vWorldPosition;",

        THREE.ShaderChunk[ "logdepthbuf_pars_vertex" ],

        "void main() {",

        "   vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
        "   vWorldPosition = worldPosition.xyz;",

        "   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            THREE.ShaderChunk[ "logdepthbuf_vertex" ],

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform samplerCube tCube;",
        "uniform float tFlip;",

        "varying vec3 vWorldPosition;",
        THREE.ShaderChunk[ "logdepthbuf_pars_fragment" ],
        THREE.ShaderChunk[ "fog_pars_fragment" ],
        "void main() {",
        "   gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
            THREE.ShaderChunk[ "logdepthbuf_fragment" ],
            THREE.ShaderChunk[ "fog_fragment" ],
        "}"

    ].join("\n")

}
module.exports = function(renderer, camera, scene) {
    var light = new THREE.HemisphereLight(0xbbe9ff, 0x080820, 1)
    light.position.set(-1, 1, -1)
    scene.add(light)

    var waterNormals = new THREE.ImageUtils.loadTexture('img/waternormals5.jpg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping

    var water = new THREE.Water(renderer, camera, scene, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: waterNormals,
        alpha: 0.9,
        sunDirection: light.position.clone().normalize(),
        sunColor: 0xffffff,
        waterColor: 0x020d15,
        distortionScale: 80.0,
    })

    var mirrorMesh = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(5000, 5000),
        water.material
    )

    mirrorMesh.add(water)
    mirrorMesh.rotation.x = -Math.PI * 0.5
    scene.add(mirrorMesh)


    // load skybox

    var cubeMap = new THREE.CubeTexture([])
    cubeMap.format = THREE.RGBFormat
    cubeMap.flipY = false

    var loader = new THREE.ImageLoader()
    loader.load('img/cloudy_night2.jpg', function(image) {

        var getSide = function(x, y) {

            var size = 1024

            var canvas = document.createElement('canvas')
            canvas.width = size
            canvas.height = size

            var context = canvas.getContext('2d')
            context.drawImage(image, -x * size, -y * size)

            return canvas

        }

        cubeMap.images[0] = getSide(2, 1) // px
        cubeMap.images[1] = getSide(0, 1) // nx
        cubeMap.images[2] = getSide(1, 0) // py
        cubeMap.images[3] = getSide(1, 2) // ny
        cubeMap.images[4] = getSide(1, 1) // pz
        cubeMap.images[5] = getSide(3, 1) // nz
        cubeMap.needsUpdate = true

    })

    cubeShader.uniforms.tCube.value = cubeMap

    var skyBoxMaterial = new THREE.ShaderMaterial({
        fragmentShader: cubeShader.fragmentShader,
        vertexShader: cubeShader.vertexShader,
        uniforms: cubeShader.uniforms,
        // depthWrite: false,
        side: THREE.BackSide,
        fog: true,
    })

    var skyBox = new THREE.Mesh(
        new THREE.BoxGeometry(5000, 5000, 5000),
        skyBoxMaterial
    )
    
    water.cubeMap = cubeMap

    scene.add(skyBox)
    return water
}
},{}],"/projects/blackice/lib/shaders/blur.js":[function(require,module,exports){
var glslify = require("glslify");
var source = require("glslify/simple-adapter.js")("\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}", "\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform float radius;\nuniform vec2 dir;\nuniform float strength;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvec4 a_x_blur(sampler2D tex, vec2 uv, vec2 blur, vec2 direction) {\n  vec4 sum = vec4(0.0);\n  sum += texture2D(tex, vec2(uv.x - 4.0 * blur.x * direction.x, uv.y - 4.0 * blur.y * direction.y)) * 0.0162162162;\n  sum += texture2D(tex, vec2(uv.x - 3.0 * blur.x * direction.x, uv.y - 3.0 * blur.y * direction.y)) * 0.0540540541;\n  sum += texture2D(tex, vec2(uv.x - 2.0 * blur.x * direction.x, uv.y - 2.0 * blur.y * direction.y)) * 0.1216216216;\n  sum += texture2D(tex, vec2(uv.x - 1.0 * blur.x * direction.x, uv.y - 1.0 * blur.y * direction.y)) * 0.1945945946;\n  sum += texture2D(tex, vec2(uv.x, uv.y)) * 0.2270270270;\n  sum += texture2D(tex, vec2(uv.x + 1.0 * blur.x * direction.x, uv.y + 1.0 * blur.y * direction.y)) * 0.1945945946;\n  sum += texture2D(tex, vec2(uv.x + 2.0 * blur.x * direction.x, uv.y + 2.0 * blur.y * direction.y)) * 0.1216216216;\n  sum += texture2D(tex, vec2(uv.x + 3.0 * blur.x * direction.x, uv.y + 3.0 * blur.y * direction.y)) * 0.0540540541;\n  sum += texture2D(tex, vec2(uv.x + 4.0 * blur.x * direction.x, uv.y + 4.0 * blur.y * direction.y)) * 0.0162162162;\n  return sum;\n}\nvoid main() {\n  vec2 blurAmt = vec2(radius) / resolution;\n  vec4 sum = a_x_blur(tDiffuse, vUv, blurAmt, dir);\n  vec2 p = (gl_FragCoord.xy / resolution.xy - 0.5);\n  p.x *= resolution.x / resolution.y;\n  float len = smoothstep(0.5, 1.2, length(p));\n  vec3 orig = texture2D(tDiffuse, vUv).rgb;\n  gl_FragColor.rgb = mix(orig, sum.rgb, len + 0.1);\n  gl_FragColor.a = 1.0;\n}", [{"name":"resolution","type":"vec2"},{"name":"radius","type":"float"},{"name":"dir","type":"vec2"},{"name":"strength","type":"float"},{"name":"tDiffuse","type":"sampler2D"}], []);
module.exports = require("./create")(source);
},{"./create":"/projects/blackice/lib/shaders/create.js","glslify":"/projects/blackice/node_modules/glslify/browser.js","glslify/simple-adapter.js":"/projects/blackice/node_modules/glslify/simple-adapter.js"}],"/projects/blackice/lib/shaders/create.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var threeify = require('three-glslify')(THREE)
var xtend = require('xtend') 
 
module.exports = function(source) {
    return function(opt) {
        return xtend(threeify(source), opt)
    }
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"three-glslify":"/projects/blackice/node_modules/three-glslify/index.js","xtend":"/projects/blackice/node_modules/xtend/immutable.js"}],"/projects/blackice/lib/shaders/lens.js":[function(require,module,exports){
var glslify = require("glslify");
var source = require("glslify/simple-adapter.js")("\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}", "\n#define GLSLIFY 1\n\nuniform float tick;\nuniform sampler2D tDiffuse;\nuniform sampler2D tLookup;\nuniform sampler2D tOverlay;\nvarying vec2 vUv;\nuniform vec2 overlayResolution;\nhighp float a_x_random(vec2 co) {\n  highp float a = 12.9898;\n  highp float b = 78.233;\n  highp float c = 43758.5453;\n  highp float dt = dot(co.xy, vec2(a, b));\n  highp float sn = mod(dt, 3.14);\n  return fract(sin(sn) * c);\n}\nvec3 b_x_blendOverlay(vec3 base, vec3 blend) {\n  return vec3(base.r < 0.5 ? (2.0 * base.r * blend.r) : (1.0 - 2.0 * (1.0 - base.r) * (1.0 - blend.r)), base.g < 0.5 ? (2.0 * base.g * blend.g) : (1.0 - 2.0 * (1.0 - base.g) * (1.0 - blend.g)), base.b < 0.5 ? (2.0 * base.b * blend.b) : (1.0 - 2.0 * (1.0 - base.b) * (1.0 - blend.b)));\n}\nfloat c_x_luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\nfloat c_x_luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}\n#define LUT_FLIP_Y\n\nvec4 e_x_lookup(in vec4 textureColor, in sampler2D lookupTable) {\n  \n  #ifndef LUT_NO_CLAMP\n  textureColor = clamp(textureColor, 0.0, 1.0);\n  #endif\n  mediump float blueColor = textureColor.b * 63.0;\n  mediump vec2 quad1;\n  quad1.y = floor(floor(blueColor) / 8.0);\n  quad1.x = floor(blueColor) - (quad1.y * 8.0);\n  mediump vec2 quad2;\n  quad2.y = floor(ceil(blueColor) / 8.0);\n  quad2.x = ceil(blueColor) - (quad2.y * 8.0);\n  highp vec2 texPos1;\n  texPos1.x = (quad1.x * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.r);\n  texPos1.y = (quad1.y * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.g);\n  #ifdef LUT_FLIP_Y\n  texPos1.y = 1.0 - texPos1.y;\n  #endif\n  highp vec2 texPos2;\n  texPos2.x = (quad2.x * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.r);\n  texPos2.y = (quad2.y * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.g);\n  #ifdef LUT_FLIP_Y\n  texPos2.y = 1.0 - texPos2.y;\n  #endif\n  lowp vec4 newColor1 = texture2D(lookupTable, texPos1);\n  lowp vec4 newColor2 = texture2D(lookupTable, texPos2);\n  lowp vec4 newColor = mix(newColor1, newColor2, fract(blueColor));\n  return newColor;\n}\nvoid main() {\n  vec3 texColor = texture2D(tDiffuse, vUv).rgb;\n  float noiseMap = smoothstep(c_x_luma(texColor), 0.5, 0.0);\n  vec2 tUv = vUv + tick;\n  vec3 noise = vec3(a_x_random(tUv), a_x_random(tUv * 1.5), a_x_random(tUv * 0.5));\n  vec3 noiseColor = mix(noise, vec3(0.5), noiseMap);\n  vec3 color = mix(texColor, b_x_blendOverlay(texColor, noise), 0.15);\n  vec3 corrected = e_x_lookup(vec4(color, 1.0), tLookup).rgb;\n  color = mix(color, corrected, 0.9);\n  gl_FragColor = vec4(color, 1.0);\n}", [{"name":"tick","type":"float"},{"name":"tDiffuse","type":"sampler2D"},{"name":"tLookup","type":"sampler2D"},{"name":"tOverlay","type":"sampler2D"},{"name":"overlayResolution","type":"vec2"}], []);
module.exports = require("./create")(source);
},{"./create":"/projects/blackice/lib/shaders/create.js","glslify":"/projects/blackice/node_modules/glslify/browser.js","glslify/simple-adapter.js":"/projects/blackice/node_modules/glslify/simple-adapter.js"}],"/projects/blackice/lib/shaders/pass.js":[function(require,module,exports){
var glslify = require("glslify");
var source = require("glslify/simple-adapter.js")("\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}", "\n#define GLSLIFY 1\n\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\n  gl_FragColor = texture2D(tDiffuse, vUv);\n}", [{"name":"tDiffuse","type":"sampler2D"}], []);
module.exports = require("./create")(source);
},{"./create":"/projects/blackice/lib/shaders/create.js","glslify":"/projects/blackice/node_modules/glslify/browser.js","glslify/simple-adapter.js":"/projects/blackice/node_modules/glslify/simple-adapter.js"}],"/projects/blackice/lib/three-orbit-camera/index.js":[function(require,module,exports){
(function (global){
var inherits = require('inherits')
var TweenMax = (typeof window !== "undefined" ? window.TweenMax : typeof global !== "undefined" ? global.TweenMax : null)

module.exports = function(THREE) {
    if (!THREE.MOUSE)
        THREE.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 };

    /**
     * @author qiao / https://github.com/qiao
     * @author mrdoob / http://mrdoob.com
     * @author alteredq / http://alteredqualia.com/
     * @author WestLangley / http://github.com/WestLangley
     * @author erich666 / http://erichaines.com
     */
    /*global THREE, console */

    // This set of controls performs orbiting, dollying (zooming), and panning. It maintains
    // the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
    // supported.
    //
    //    Orbit - left mouse / touch: one finger move
    //    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
    //    Pan - right mouse, or arrow keys / touch: three finter swipe
    //
    // This is a drop-in replacement for (most) TrackballControls used in examples.
    // That is, include this js file and wherever you see:
    //      controls = new THREE.TrackballControls( camera );
    //      controls.target.z = 150;
    // Simple substitute "OrbitControls" and the control should work as-is.

    function OrbitControls( object, domElement ) {

        this.object = object;
        this.domElement = ( domElement !== undefined ) ? domElement : document;

        // API

        // Set to false to disable this control
        this.enabled = true;

        // "target" sets the location of focus, where the control orbits around
        // and where it pans with respect to.
        this.target = new THREE.Vector3();

        // center is old, deprecated; use "target" instead
        this.center = this.target;

        // This option actually enables dollying in and out; left as "zoom" for
        // backwards compatibility
        this.noZoom = false;
        this.zoomSpeed = 1.0;

        // Limits to how far you can dolly in and out
        this.minDistance = 0;
        this.maxDistance = Infinity;

        // Set to true to disable this control
        this.noRotate = false;
        this.rotateSpeed = 1.0;

        // Set to true to disable this control
        this.noPan = false;
        this.keyPanSpeed = 7.0; // pixels moved per arrow key push

        // Set to true to automatically rotate around the target
        this.autoRotate = false;
        this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

        // How far you can orbit vertically, upper and lower limits.
        // Range is 0 to Math.PI radians.
        this.minPolarAngle = 0; // radians
        this.maxPolarAngle = Math.PI; // radians

        // Set to true to disable use of the keys
        this.noKeys = false;

        // The four arrow keys
        this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

        this.constrainDelta = { x: 0, y: 0 };

        ////////////
        // internals

        var scope = this;

        var EPS = 0.000001;

        var rotateStart = new THREE.Vector2();
        var rotateEnd = new THREE.Vector2();
        var rotateDelta = new THREE.Vector2();

        var panStart = new THREE.Vector2();
        var panEnd = new THREE.Vector2();
        var panDelta = new THREE.Vector2();
        var panOffset = new THREE.Vector3();

        var offset = new THREE.Vector3();

        var dollyStart = new THREE.Vector2();
        var dollyEnd = new THREE.Vector2();
        var dollyDelta = new THREE.Vector2();

        var phiDelta = 0;
        var thetaDelta = 0;
        var scale = 1;
        var pan = new THREE.Vector3();

        var lastPosition = new THREE.Vector3();

        var STATE = { NONE : -1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };

        var state = STATE.NONE;

        // for reset

        this.target0 = this.target.clone();
        this.position0 = this.object.position.clone();

        // so camera.up is the orbit axis

        var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
        var quatInverse = quat.clone().inverse();

        // events

        var changeEvent = { type: 'change' };
        var startEvent = { type: 'start'};
        var endEvent = { type: 'end'};

        this.rotateLeft = function ( angle ) {

            if ( angle === undefined ) {

                angle = getAutoRotationAngle();

            }

            thetaDelta -= angle;

        };

        this.rotateUp = function ( angle ) {

            if ( angle === undefined ) {

                angle = getAutoRotationAngle();

            }

            phiDelta -= angle;

        };

        // pass in distance in world space to move left
        this.panLeft = function ( distance ) {

            var te = this.object.matrix.elements;

            // get X column of matrix
            panOffset.set( te[ 0 ], te[ 1 ], te[ 2 ] );
            panOffset.multiplyScalar( - distance );
            
            pan.add( panOffset );

        };

        // pass in distance in world space to move up
        this.panUp = function ( distance ) {

            var te = this.object.matrix.elements;

            // get Y column of matrix
            panOffset.set( te[ 4 ], te[ 5 ], te[ 6 ] );
            panOffset.multiplyScalar( distance );
            
            pan.add( panOffset );

        };
        
        // pass in x,y of change desired in pixel space,
        // right and down are positive
        this.pan = function ( deltaX, deltaY ) {

            var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

            if ( scope.object.fov !== undefined ) {

                // perspective
                var position = scope.object.position;
                var offset = position.clone().sub( scope.target );
                var targetDistance = offset.length();

                // half of the fov is center to top of screen
                targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

                // we actually don't use screenWidth, since perspective camera is fixed to screen height
                scope.panLeft( 2 * deltaX * targetDistance / element.clientHeight );
                scope.panUp( 2 * deltaY * targetDistance / element.clientHeight );

            } else if ( scope.object.top !== undefined ) {

                // orthographic
                scope.panLeft( deltaX * (scope.object.right - scope.object.left) / element.clientWidth );
                scope.panUp( deltaY * (scope.object.top - scope.object.bottom) / element.clientHeight );

            } else {

                // camera neither orthographic or perspective
                console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

            }

        };

        this.dollyIn = function ( dollyScale ) {

            if ( dollyScale === undefined ) {

                dollyScale = getZoomScale();

            }

            scale /= dollyScale;

        };

        this.dollyOut = function ( dollyScale ) {

            if ( dollyScale === undefined ) {

                dollyScale = getZoomScale();

            }

            scale *= dollyScale;

        };

        this.update = function () {

            var position = this.object.position;

            // // rotating across whole screen goes 360 degrees around
            scope.rotateLeft( 2 * Math.PI * scope.constrainDelta.x / window.innerWidth * scope.rotateSpeed );

            // // rotating up and down along whole screen attempts to go 360, but limited to 180
            scope.rotateUp( 2 * Math.PI * scope.constrainDelta.y / window.innerHeight * scope.rotateSpeed );

            offset.copy( position ).sub( this.target );

            // rotate offset to "y-axis-is-up" space
            offset.applyQuaternion( quat );

            // angle from z-axis around y-axis

            var theta = Math.atan2( offset.x, offset.z );

            // angle from y-axis

            var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

            if ( this.autoRotate ) {

                this.rotateLeft( getAutoRotationAngle() );

            }

            theta += thetaDelta;
            phi += phiDelta;

            // restrict phi to be between desired limits
            phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

            // restrict phi to be betwee EPS and PI-EPS
            phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

            var radius = offset.length() * scale;

            // restrict radius to be between desired limits
            radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );
            
            // move target to panned location
            this.target.add( pan );

            offset.x = radius * Math.sin( phi ) * Math.sin( theta );
            offset.y = radius * Math.cos( phi );
            offset.z = radius * Math.sin( phi ) * Math.cos( theta );

            // rotate offset back to "camera-up-vector-is-up" space
            offset.applyQuaternion( quatInverse );

            position.copy( this.target ).add( offset );

            this.object.lookAt( this.target );

            thetaDelta = 0;
            phiDelta = 0;
            scale = 1;
            pan.set( 0, 0, 0 );

            if ( lastPosition.distanceToSquared( this.object.position ) > EPS ) {

                this.dispatchEvent( changeEvent );

                lastPosition.copy( this.object.position );

            }

        };


        this.reset = function () {

            state = STATE.NONE;

            this.target.copy( this.target0 );
            this.object.position.copy( this.position0 );

            this.update();

        };

        function getAutoRotationAngle() {

            return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

        }

        function getZoomScale() {

            return Math.pow( 0.95, scope.zoomSpeed );

        }

        function onMouseDown( event ) {

            if ( scope.enabled === false ) return;
            event.preventDefault();

            if ( event.button === 0 ) {
                if ( scope.noRotate === true ) return;

                state = STATE.ROTATE;

                rotateStart.set( event.clientX, event.clientY );

            } else if ( event.button === 1 ) {
                if ( scope.noZoom === true ) return;

                state = STATE.DOLLY;

                dollyStart.set( event.clientX, event.clientY );

            } else if ( event.button === 2 ) {
                if ( scope.noPan === true ) return;

                state = STATE.PAN;

                panStart.set( event.clientX, event.clientY );

            }

            scope.domElement.addEventListener( 'mousemove', onMouseMove, false );
            scope.domElement.addEventListener( 'mouseup', onMouseUp, false );
            scope.dispatchEvent( startEvent );

        }

        function onMouseMove( event ) {

            if ( scope.enabled === false ) return;

            event.preventDefault();

            var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

            if ( state === STATE.ROTATE ) {

                if ( scope.noRotate === true ) return;

                rotateEnd.set( event.clientX, event.clientY );
                rotateDelta.subVectors( rotateEnd, rotateStart );

                scope.constrainDelta.x = rotateDelta.x;
                scope.constrainDelta.y = rotateDelta.y;
                
                TweenMax.killTweensOf(scope.constrainDelta);
                TweenMax.to(scope.constrainDelta, 0.50, {
                    x: 0,
                    y: 0,
                    ease: 'easeOutQuad',
                    delay: 0.0
                });

                rotateStart.copy( rotateEnd );

            } else if ( state === STATE.DOLLY ) {

                if ( scope.noZoom === true ) return;

                dollyEnd.set( event.clientX, event.clientY );
                dollyDelta.subVectors( dollyEnd, dollyStart );

                if ( dollyDelta.y > 0 ) {

                    scope.dollyIn();

                } else {

                    scope.dollyOut();

                }

                dollyStart.copy( dollyEnd );

            } else if ( state === STATE.PAN ) {

                if ( scope.noPan === true ) return;

                panEnd.set( event.clientX, event.clientY );
                panDelta.subVectors( panEnd, panStart );
                
                scope.pan( panDelta.x, panDelta.y );

                panStart.copy( panEnd );

            }

            scope.update();

        }

        function onMouseUp( /* event */ ) {

            if ( scope.enabled === false ) return;

            scope.domElement.removeEventListener( 'mousemove', onMouseMove, false );
            scope.domElement.removeEventListener( 'mouseup', onMouseUp, false );
            scope.dispatchEvent( endEvent );
            state = STATE.NONE;

        }

        function onMouseWheel( event ) {

            if ( scope.enabled === false || scope.noZoom === true ) return;

            event.preventDefault();
            event.stopPropagation();

            var delta = 0;

            if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

                delta = event.wheelDelta;

            } else if ( event.detail !== undefined ) { // Firefox

                delta = - event.detail;

            }

            if ( delta > 0 ) {

                scope.dollyOut();

            } else {

                scope.dollyIn();

            }

            scope.update();
            scope.dispatchEvent( startEvent );
            scope.dispatchEvent( endEvent );

        }

        function onKeyDown( event ) {

            if ( scope.enabled === false || scope.noKeys === true || scope.noPan === true ) return;
            
            switch ( event.keyCode ) {

                case scope.keys.UP:
                    scope.pan( 0, scope.keyPanSpeed );
                    scope.update();
                    break;

                case scope.keys.BOTTOM:
                    scope.pan( 0, - scope.keyPanSpeed );
                    scope.update();
                    break;

                case scope.keys.LEFT:
                    scope.pan( scope.keyPanSpeed, 0 );
                    scope.update();
                    break;

                case scope.keys.RIGHT:
                    scope.pan( - scope.keyPanSpeed, 0 );
                    scope.update();
                    break;

            }

        }

        function touchstart( event ) {

            if ( scope.enabled === false ) return;

            switch ( event.touches.length ) {

                case 1: // one-fingered touch: rotate

                    if ( scope.noRotate === true ) return;

                    state = STATE.TOUCH_ROTATE;

                    rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                    break;

                case 2: // two-fingered touch: dolly

                    if ( scope.noZoom === true ) return;

                    state = STATE.TOUCH_DOLLY;

                    var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                    var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                    var distance = Math.sqrt( dx * dx + dy * dy );
                    dollyStart.set( 0, distance );
                    break;

                case 3: // three-fingered touch: pan

                    if ( scope.noPan === true ) return;

                    state = STATE.TOUCH_PAN;

                    panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                    break;

                default:

                    state = STATE.NONE;

            }

            scope.dispatchEvent( startEvent );

        }

        function touchmove( event ) {

            if ( scope.enabled === false ) return;

            event.preventDefault();
            event.stopPropagation();

            var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

            switch ( event.touches.length ) {

                case 1: // one-fingered touch: rotate

                    if ( scope.noRotate === true ) return;
                    if ( state !== STATE.TOUCH_ROTATE ) return;

                    rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                    rotateDelta.subVectors( rotateEnd, rotateStart );

                    // rotating across whole screen goes 360 degrees around
                    scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
                    // rotating up and down along whole screen attempts to go 360, but limited to 180
                    scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

                    rotateStart.copy( rotateEnd );

                    scope.update();
                    break;

                case 2: // two-fingered touch: dolly

                    if ( scope.noZoom === true ) return;
                    if ( state !== STATE.TOUCH_DOLLY ) return;

                    var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                    var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                    var distance = Math.sqrt( dx * dx + dy * dy );

                    dollyEnd.set( 0, distance );
                    dollyDelta.subVectors( dollyEnd, dollyStart );

                    if ( dollyDelta.y > 0 ) {

                        scope.dollyOut();

                    } else {

                        scope.dollyIn();

                    }

                    dollyStart.copy( dollyEnd );

                    scope.update();
                    break;

                case 3: // three-fingered touch: pan

                    if ( scope.noPan === true ) return;
                    if ( state !== STATE.TOUCH_PAN ) return;

                    panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                    panDelta.subVectors( panEnd, panStart );
                    
                    scope.pan( panDelta.x, panDelta.y );

                    panStart.copy( panEnd );

                    scope.update();
                    break;

                default:

                    state = STATE.NONE;

            }

        }

        function touchend( /* event */ ) {

            if ( scope.enabled === false ) return;

            scope.dispatchEvent( endEvent );
            state = STATE.NONE;

        }

        this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
        this.domElement.addEventListener( 'mousedown', onMouseDown, false );
        this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
        this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

        this.domElement.addEventListener( 'touchstart', touchstart, false );
        this.domElement.addEventListener( 'touchend', touchend, false );
        this.domElement.addEventListener( 'touchmove', touchmove, false );

        window.addEventListener( 'keydown', onKeyDown, false );

        // force an update at start
        this.update();

    };

    inherits(OrbitControls, THREE.EventDispatcher)
    return OrbitControls
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"inherits":"/projects/blackice/node_modules/inherits/inherits_browser.js"}],"/projects/blackice/node_modules/as-number/index.js":[function(require,module,exports){
module.exports = function numtype(num, def) {
	return typeof num === 'number'
		? num 
		: (typeof def === 'number' ? def : 0)
}
},{}],"/projects/blackice/node_modules/browserify/node_modules/buffer/index.js":[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new TypeError('must start with number, buffer, array or string')

  if (this.length > kMaxLength)
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
      'size: 0x' + kMaxLength.toString(16) + ' bytes')

  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
    throw new TypeError('Arguments must be Buffers')

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length >>> 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function (encoding, start, end) {
  var loweredCase = false

  start = start >>> 0
  end = end === undefined || end === Infinity ? this.length : end >>> 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase)
          throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function (b) {
  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max)
      str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(byte)) throw new Error('Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0)
    throw new RangeError('offset is not uint')
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80))
    return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  if (end < start) throw new TypeError('sourceEnd < sourceStart')
  if (target_start < 0 || target_start >= target.length)
    throw new TypeError('targetStart out of bounds')
  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new TypeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","ieee754":"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","is-array":"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js"}],"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js":[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js":[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js":[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],"/projects/blackice/node_modules/canvas-app/index.js":[function(require,module,exports){
var isGL = require('is-webgl-context');
var getGL = require('webgl-context');
var debounce = require('debounce');
var addEvent = require('add-event-listener');

function isCanvasContext(obj) {
    var ctx2d = typeof CanvasRenderingContext2D !== 'undefined' && obj instanceof CanvasRenderingContext2D;
    return obj && (ctx2d || isGL(obj));
}

function CanvasApp(render, options) {
    if (!(this instanceof CanvasApp))
        return new CanvasApp(render, options);

    //allow options to be passed as first argument
    if (typeof render === 'object' && render) {
        options = render;
        render = null;
    }

    render = typeof render === 'function' ? render : options.onRender;

    options = options||{};
    options.retina = typeof options.retina === "boolean" ? options.retina : true;
    
    var hasWidth = typeof options.width === "number", 
        hasHeight = typeof options.height === "number";

    //if either width or height is specified, don't auto-resize to the window...
    if (hasWidth || hasHeight) 
        options.ignoreResize = true;

    options.width = hasWidth ? options.width : window.innerWidth;
    options.height = hasHeight ? options.height : window.innerHeight;

    var DPR = options.retina ? (window.devicePixelRatio||1) : 1; 

    //setup the canvas
    var canvas,
        context,
        attribs = options.contextAttributes||{};

    this.isWebGL = false;

    //if user provided a context object
    if (isCanvasContext(options.context)) {
        context = options.context;
        canvas = context.canvas;
    }

    //otherwise allow for a string to set one up
    if (!canvas)
        canvas = options.canvas || document.createElement("canvas");

    canvas.width = options.width * DPR;
    canvas.height = options.height * DPR;

    if (!context) {
        if (options.context === "webgl" || options.context === "experimental-webgl") {
            context = getGL({ canvas: canvas, attributes: attribs });
            if (!context) {
                throw "WebGL Context Not Supported -- try enabling it or using a different browser";
            }
        } else {
            context = canvas.getContext(options.context||"2d", attribs);
        }
    }

    this.isWebGL = isGL(context);

    if (options.retina) {
        canvas.style.width = options.width + 'px';
        canvas.style.height = options.height + 'px';
    }

    this.running = false;
    this.width = options.width;
    this.height = options.height;
    this.canvas = canvas;
    this.context = context;
    this.onResize = options.onResize;
    this._DPR = DPR;
    this._retina = options.retina;
    this._once = options.once;
    this._ignoreResize = options.ignoreResize;
    this._lastFrame = null;
    this._then = Date.now();

    //FPS counter
    this.fps = 60;
    this._frames = 0;
    this._prevTime = this._then;

    if (!this._ignoreResize) {
        options.resizeDebounce = typeof options.resizeDebounce === 'number'
                    ? options.resizeDebounce : 50;
        addEvent(window, "resize", debounce(function() {
            this.resize(window.innerWidth, window.innerHeight);
        }.bind(this), options.resizeDebounce, false));

        addEvent(window, "orientationchange", function() {
            this.resize(window.innerWidth, window.innerHeight);
        }.bind(this));
    }

    if (typeof render === "function") {
        this.onRender = render.bind(this);   
    } else {
        //dummy render function
        this.onRender = function (context, width, height, dt) { };
    }

    this.renderOnce = function() {
        var now = Date.now();
        var dt = (now-this._then);

        this._frames++;
        if (now > this._prevTime + 1000) {
            this.fps = Math.round((this._frames * 1000) / (now - this._prevTime));

            this._prevTime = now;
            this._frames = 0;
        }

        if (!this.isWebGL) {
            this.context.save();
            this.context.scale(this._DPR, this._DPR);
        } else {
            this.context.viewport(0, 0, this.width * this._DPR, this.height * this._DPR);
        }
        
        this.onRender(this.context, this.width, this.height, dt);

        if (!this.isWebGL)
            this.context.restore();

        this._then = now;
    };

    this._renderHandler = function() {
        if (!this.running) 
            return;
        
        if (!this._once) {
            this._lastFrame = requestAnimationFrame(this._renderHandler);
        }

        this.renderOnce();
    }.bind(this);

    if (typeof options.onReady === "function") {
        options.onReady.call(this, context, this.width, this.height);
    }
}

Object.defineProperty(CanvasApp.prototype, 'retinaEnabled', {

    set: function(v) {
        this._retina = v;
        this._DPR = this._retina ? (window.devicePixelRatio||1) : 1;
        this.resize(this.width, this.height);
    },

    get: function() {
        return this._retina;
    }
});

Object.defineProperty(CanvasApp.prototype, 'deviceWidth', {

    get: function() {
        return this.width * this._DPR;
    }
});

Object.defineProperty(CanvasApp.prototype, 'deviceHeight', {

    get: function() {
        return this.height * this._DPR;
    }
});

CanvasApp.prototype.resetFPS = function() {
    this._frames = 0;
    this._prevTime = Date.now();
    this._then = this._prevTime;
    this.fps = 60;
};

CanvasApp.prototype.start = function() {
    if (this.running)
        return;
    
    if (this._lastFrame) 
        cancelAnimationFrame(this._lastFrame);

    //reset FPS counter
    this.resetFPS();

    this.running = true;
    this._lastFrame = requestAnimationFrame(this._renderHandler);
};

CanvasApp.prototype.stop = function() {
    if (this._lastFrame) {
        cancelAnimationFrame(this._lastFrame);
        this._lastFrame = null;
    }
    this.running = false;
};

CanvasApp.prototype.resize = function(width, height) {
    var canvas = this.canvas;

    this.width = width;
    this.height = height;
    canvas.width = this.width * this._DPR;
    canvas.height = this.height * this._DPR;

    if (this._retina) {
        canvas.style.width = this.width + 'px';
        canvas.style.height = this.height + 'px';
    }

    if (this._once)
        requestAnimationFrame(this._renderHandler);
    if (typeof this.onResize === "function")
        this.onResize(this.width, this.height);
};

module.exports = CanvasApp;
},{"add-event-listener":"/projects/blackice/node_modules/canvas-app/node_modules/add-event-listener/index.js","debounce":"/projects/blackice/node_modules/canvas-app/node_modules/debounce/index.js","is-webgl-context":"/projects/blackice/node_modules/canvas-app/node_modules/is-webgl-context/index.js","webgl-context":"/projects/blackice/node_modules/canvas-app/node_modules/webgl-context/index.js"}],"/projects/blackice/node_modules/canvas-app/node_modules/add-event-listener/index.js":[function(require,module,exports){
addEventListener.removeEventListener = removeEventListener
addEventListener.addEventListener = addEventListener

module.exports = addEventListener

var Events = null

function addEventListener(el, eventName, listener, useCapture) {
  Events = Events || (
    document.addEventListener ?
    {add: stdAttach, rm: stdDetach} :
    {add: oldIEAttach, rm: oldIEDetach}
  )
  
  return Events.add(el, eventName, listener, useCapture)
}

function removeEventListener(el, eventName, listener, useCapture) {
  Events = Events || (
    document.addEventListener ?
    {add: stdAttach, rm: stdDetach} :
    {add: oldIEAttach, rm: oldIEDetach}
  )
  
  return Events.rm(el, eventName, listener, useCapture)
}

function stdAttach(el, eventName, listener, useCapture) {
  el.addEventListener(eventName, listener, useCapture)
}

function stdDetach(el, eventName, listener, useCapture) {
  el.removeEventListener(eventName, listener, useCapture)
}

function oldIEAttach(el, eventName, listener, useCapture) {
  if(useCapture) {
    throw new Error('cannot useCapture in oldIE')
  }

  el.attachEvent('on' + eventName, listener)
}

function oldIEDetach(el, eventName, listener, useCapture) {
  el.detachEvent('on' + eventName, listener)
}

},{}],"/projects/blackice/node_modules/canvas-app/node_modules/debounce/index.js":[function(require,module,exports){

/**
 * Module dependencies.
 */

var now = require('date-now');

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = now() - timestamp;

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function debounced() {
    context = this;
    args = arguments;
    timestamp = now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};

},{"date-now":"/projects/blackice/node_modules/canvas-app/node_modules/debounce/node_modules/date-now/index.js"}],"/projects/blackice/node_modules/canvas-app/node_modules/debounce/node_modules/date-now/index.js":[function(require,module,exports){
module.exports = Date.now || now

function now() {
    return new Date().getTime()
}

},{}],"/projects/blackice/node_modules/canvas-app/node_modules/is-webgl-context/index.js":[function(require,module,exports){
module.exports = function(ctx) {
	if (!ctx) return false
	var gl = ctx
	//compatibility with Chrome WebGL Inspector Addon
	if (typeof ctx.rawgl !== 'undefined')
		gl = ctx.rawgl
	if (typeof WebGLRenderingContext !== 'undefined' && gl instanceof WebGLRenderingContext)
		return true
	return false
}
},{}],"/projects/blackice/node_modules/canvas-app/node_modules/webgl-context/index.js":[function(require,module,exports){
module.exports = function(opts) {
    opts = opts||{};
    var canvas = opts.canvas || document.createElement("canvas");
    if (typeof opts.width === "number")
        canvas.width = opts.width;
    if (typeof opts.height === "number")
        canvas.height = opts.height;
    
    var attribs = (opts.attributes || opts.attribs || {});
    try {
        gl = (canvas.getContext('webgl', attribs) || canvas.getContext('experimental-webgl', attribs));
    } catch (e) {
        gl = null;
    }
    return gl;
};
},{}],"/projects/blackice/node_modules/domready/ready.js":[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? fn() : fns.push(fn)
  }

});

},{}],"/projects/blackice/node_modules/gl-basic-shader/index.js":[function(require,module,exports){
var identity = require('gl-mat4/identity')
var createShader = require('gl-shader-core')

var POSITION_ATTRIBUTE = 'position',
    NORMAL_ATTRIBUTE = 'normal',
    COLOR_ATTRIBUTE = 'color',
    TEXCOORD_ATTRIBUTE = 'texcoord';


module.exports = function(gl, options) {
    options = options||{}
    options.texcoord = typeof options.texcoord === 'number' 
                ? options.texcoord : (options.texcoord||0)
        
    var shaderSource = module.exports.generate(options),
        vert = shaderSource.vertex,
        frag = shaderSource.fragment,
        uniforms = shaderSource.uniforms,
        attribs = shaderSource.attributes
    
    var shader = createShader(gl, vert, frag, uniforms, attribs)
    shader.bind()
    for (var i=0; i<options.texcoord; i++) 
        shader.uniforms['texture'+i] = i

    var arr = identity( new Float32Array(16) )
    shader.uniforms.projection = arr
    shader.uniforms.model = arr
    shader.uniforms.view = arr
    shader.uniforms.tint = options.tint || [1, 1, 1, 1]

    return shader
}

module.exports.generate = function(options) {
    options = options||{}
    options.texcoord = typeof options.texcoord === 'number' 
                ? options.texcoord : (options.texcoord||0)

    var vert = typeof options.vertex === 'string'
            ? options.vertex : createVertexShader(options.normal, options.color, options.texcoord)
    var frag = typeof options.fragment === 'string'
            ? options.fragment : createFragmentShader(options.color, options.texcoord)

    var uniforms = [
        { type: 'mat4', name: 'projection' },
        { type: 'mat4', name: 'view' },
        { type: 'mat4', name: 'model' },
        { type: 'vec4', name: 'tint' }
    ]

    //Similar to old school pipeline, we will use fixed locations
    //http://www.opengl.org/sdk/docs/tutorials/ClockworkCoders/attributes.php
    var attribs = [
        { type: 'vec4', name: POSITION_ATTRIBUTE, location: 0 }
    ]

    if (options.normal)
        attribs.push({ type: 'vec3', name: NORMAL_ATTRIBUTE, location: 1 })
    if (options.color)
        attribs.push({ type: 'vec4', name: COLOR_ATTRIBUTE, location: 2 })

    var idx = 3
    for (var i=0; i<options.texcoord; i++) {
        uniforms.push({ type: 'sampler2D', name: 'texture'+i })
        attribs.push({ type: 'vec2', name: TEXCOORD_ATTRIBUTE+i, location: idx++ })
    }

    return { vertex: vert, fragment: frag, uniforms: uniforms, attributes: attribs }
}


function createVertexShader(hasNormals, hasColors, numTexCoords) {
    numTexCoords = numTexCoords || 0;
    var shader = "";
    shader += "attribute vec4 "+POSITION_ATTRIBUTE+";\n"
         + (hasNormals ? "attribute vec3 " + NORMAL_ATTRIBUTE + ";\n" : "")
         + (hasColors ? "attribute vec4 " + COLOR_ATTRIBUTE + ";\n" : "");

    var i;

    for (i = 0; i < numTexCoords; i++) {
        shader += "attribute vec2 " + TEXCOORD_ATTRIBUTE + i + ";\n";
    }

    shader += "uniform mat4 projection;\n";
    shader += "uniform mat4 view;\n";
    shader += "uniform mat4 model;\n";
    
    shader += (hasColors ? "varying vec4 v_col;\n" : "");

    for (i = 0; i < numTexCoords; i++) {
        shader += "varying vec2 v_tex" + i + ";\n";
    }

    shader += "\nvoid main() {\n" + "   gl_Position = projection * view * model * " + POSITION_ATTRIBUTE + ";\n"
            + (hasColors ? "   v_col = " + COLOR_ATTRIBUTE + ";\n" : "");

    for (i = 0; i < numTexCoords; i++) {
        shader += "   v_tex" + i + " = " + TEXCOORD_ATTRIBUTE + i + ";\n";
    }
    shader += "   gl_PointSize = 1.0;\n";
    shader += "}\n";

    return shader;
}

function createFragmentShader(hasColors, numTexCoords) {
    numTexCoords = numTexCoords || 0;
    var shader = "#ifdef GL_ES\n" + "precision mediump float;\n" + "#endif\n\n";
 
    if (hasColors) 
        shader += "varying vec4 v_col;\n";

    var i;
    for (i = 0; i < numTexCoords; i++) {
        shader += "varying vec2 v_tex" + i + ";\n";
        shader += "uniform sampler2D texture" + i + ";\n";
    }
    shader += "uniform vec4 tint;\n";

    shader += "\nvoid main() {\n" + "   gl_FragColor = ";

    if (hasColors)
        shader += "v_col"

    if (hasColors && numTexCoords > 0) 
        shader += " * ";
    else if (!hasColors && !numTexCoords)
        shader += "vec4(1.0)"

    for (i = 0; i < numTexCoords; i++) {
        if (i == numTexCoords - 1) {
                shader += " texture2D(texture" + i + ",  v_tex" + i + ")";
        } else {
                shader += " texture2D(texture" + i + ",  v_tex" + i + ") *";
        }
    }

    shader += " * tint"
    shader += ";\n}";
    return shader;
}
},{"gl-mat4/identity":"/projects/blackice/node_modules/gl-mat4/identity.js","gl-shader-core":"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/shader-core.js"}],"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/lib/create-attributes.js":[function(require,module,exports){
'use strict'

module.exports = createAttributeWrapper

//Shader attribute class
function ShaderAttribute(gl, program, location, dimension, name, constFunc, relink) {
  this._gl = gl
  this._program = program
  this._location = location
  this._dimension = dimension
  this._name = name
  this._constFunc = constFunc
  this._relink = relink
}

var proto = ShaderAttribute.prototype

proto.pointer = function setAttribPointer(type, normalized, stride, offset) {
  var gl = this._gl
  gl.vertexAttribPointer(this._location, this._dimension, type||gl.FLOAT, !!normalized, stride||0, offset||0)
  this._gl.enableVertexAttribArray(this._location)
}

Object.defineProperty(proto, 'location', {
  get: function() {
    return this._location
  }
  , set: function(v) {
    if(v !== this._location) {
      this._location = v
      this._gl.bindAttribLocation(this._program, v, this._name)
      this._gl.linkProgram(this._program)
      this._relink()
    }
  }
})


//Adds a vector attribute to obj
function addVectorAttribute(gl, program, location, dimension, obj, name, doLink) {
  var constFuncArgs = [ 'gl', 'v' ]
  var varNames = []
  for(var i=0; i<dimension; ++i) {
    constFuncArgs.push('x'+i)
    varNames.push('x'+i)
  }
  constFuncArgs.push([
    'if(x0.length===void 0){return gl.vertexAttrib', dimension, 'f(v,', varNames.join(), ')}else{return gl.vertexAttrib', dimension, 'fv(v,x0)}'
  ].join(''))
  var constFunc = Function.apply(undefined, constFuncArgs)
  var attr = new ShaderAttribute(gl, program, location, dimension, name, constFunc, doLink)
  Object.defineProperty(obj, name, {
    set: function(x) {
      gl.disableVertexAttribArray(attr._location)
      constFunc(gl, attr._location, x)
      return x
    }
    , get: function() {
      return attr
    }
    , enumerable: true
  })
}

//Create shims for attributes
function createAttributeWrapper(gl, program, attributes, doLink) {
  var obj = {}
  for(var i=0, n=attributes.length; i<n; ++i) {
    var a = attributes[i]
    var name = a.name
    var type = a.type
    var location = gl.getAttribLocation(program, name)
    
    switch(type) {
      case 'bool':
      case 'int':
      case 'float':
        addVectorAttribute(gl, program, location, 1, obj, name, doLink)
      break
      
      default:
        if(type.indexOf('vec') >= 0) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid data type for attribute ' + name + ': ' + type)
          }
          addVectorAttribute(gl, program, location, d, obj, name, doLink)
        } else {
          throw new Error('gl-shader: Unknown data type for attribute ' + name + ': ' + type)
        }
      break
    }
  }
  return obj
}
},{}],"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/lib/create-uniforms.js":[function(require,module,exports){
'use strict'

var dup = require('dup')
var coallesceUniforms = require('./reflect')

module.exports = createUniformWrapper

//Binds a function and returns a value
function identity(x) {
  var c = new Function('y', 'return function(){return y}')
  return c(x)
}

//Create shims for uniforms
function createUniformWrapper(gl, program, uniforms, locations) {

  function makeGetter(index) {
    var proc = new Function('gl', 'prog', 'locations', 
      'return function(){return gl.getUniform(prog,locations[' + index + '])}') 
    return proc(gl, program, locations)
  }

  function makePropSetter(path, index, type) {
    switch(type) {
      case 'bool':
      case 'int':
      case 'sampler2D':
      case 'samplerCube':
        return 'gl.uniform1i(locations[' + index + '],obj' + path + ')'
      case 'float':
        return 'gl.uniform1f(locations[' + index + '],obj' + path + ')'
      default:
        var vidx = type.indexOf('vec')
        if(0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid data type')
          }
          switch(type.charAt(0)) {
            case 'b':
            case 'i':
              return 'gl.uniform' + d + 'iv(locations[' + index + '],obj' + path + ')'
            case 'v':
              return 'gl.uniform' + d + 'fv(locations[' + index + '],obj' + path + ')'
            default:
              throw new Error('gl-shader: Unrecognized data type for vector ' + name + ': ' + type)
          }
        } else if(type.indexOf('mat') === 0 && type.length === 4) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid uniform dimension type for matrix ' + name + ': ' + type)
          }
          return 'gl.uniformMatrix' + d + 'fv(locations[' + index + '],false,obj' + path + ')'
        } else {
          throw new Error('gl-shader: Unknown uniform data type for ' + name + ': ' + type)
        }
      break
    }
  }

  function enumerateIndices(prefix, type) {
    if(typeof type !== 'object') {
      return [ [prefix, type] ]
    }
    var indices = []
    for(var id in type) {
      var prop = type[id]
      var tprefix = prefix
      if(parseInt(id) + '' === id) {
        tprefix += '[' + id + ']'
      } else {
        tprefix += '.' + id
      }
      if(typeof prop === 'object') {
        indices.push.apply(indices, enumerateIndices(tprefix, prop))
      } else {
        indices.push([tprefix, prop])
      }
    }
    return indices
  }

  function makeSetter(type) {
    var code = [ 'return function updateProperty(obj){' ]
    var indices = enumerateIndices('', type)
    for(var i=0; i<indices.length; ++i) {
      var item = indices[i]
      var path = item[0]
      var idx  = item[1]
      if(locations[idx]) {
        code.push(makePropSetter(path, idx, uniforms[idx].type))
      }
    }
    code.push('return obj}')
    var proc = new Function('gl', 'prog', 'locations', code.join('\n'))
    return proc(gl, program, locations)
  }

  function defaultValue(type) {
    switch(type) {
      case 'bool':
        return false
      case 'int':
      case 'sampler2D':
      case 'samplerCube':
        return 0
      case 'float':
        return 0.0
      default:
        var vidx = type.indexOf('vec')
        if(0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid data type')
          }
          if(type.charAt(0) === 'b') {
            return dup(d, false)
          }
          return dup(d)
        } else if(type.indexOf('mat') === 0 && type.length === 4) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid uniform dimension type for matrix ' + name + ': ' + type)
          }
          return dup([d,d])
        } else {
          throw new Error('gl-shader: Unknown uniform data type for ' + name + ': ' + type)
        }
      break
    }
  }

  function storeProperty(obj, prop, type) {
    if(typeof type === 'object') {
      var child = processObject(type)
      Object.defineProperty(obj, prop, {
        get: identity(child),
        set: makeSetter(type),
        enumerable: true,
        configurable: false
      })
    } else {
      if(locations[type]) {
        Object.defineProperty(obj, prop, {
          get: makeGetter(type),
          set: makeSetter(type),
          enumerable: true,
          configurable: false
        })
      } else {
        obj[prop] = defaultValue(uniforms[type].type)
      }
    }
  }

  function processObject(obj) {
    var result
    if(Array.isArray(obj)) {
      result = new Array(obj.length)
      for(var i=0; i<obj.length; ++i) {
        storeProperty(result, i, obj[i])
      }
    } else {
      result = {}
      for(var id in obj) {
        storeProperty(result, id, obj[id])
      }
    }
    return result
  }

  //Return data
  var coallesced = coallesceUniforms(uniforms, true)
  return {
    get: identity(processObject(coallesced)),
    set: makeSetter(coallesced),
    enumerable: true,
    configurable: true
  }
}

},{"./reflect":"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/lib/reflect.js","dup":"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/node_modules/dup/dup.js"}],"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/lib/reflect.js":[function(require,module,exports){
'use strict'

module.exports = makeReflectTypes

//Construct type info for reflection.
//
// This iterates over the flattened list of uniform type values and smashes them into a JSON object.
//
// The leaves of the resulting object are either indices or type strings representing primitive glslify types
function makeReflectTypes(uniforms, useIndex) {
  var obj = {}
  for(var i=0; i<uniforms.length; ++i) {
    var n = uniforms[i].name
    var parts = n.split(".")
    var o = obj
    for(var j=0; j<parts.length; ++j) {
      var x = parts[j].split("[")
      if(x.length > 1) {
        if(!(x[0] in o)) {
          o[x[0]] = []
        }
        o = o[x[0]]
        for(var k=1; k<x.length; ++k) {
          var y = parseInt(x[k])
          if(k<x.length-1 || j<parts.length-1) {
            if(!(y in o)) {
              if(k < x.length-1) {
                o[y] = []
              } else {
                o[y] = {}
              }
            }
            o = o[y]
          } else {
            if(useIndex) {
              o[y] = i
            } else {
              o[y] = uniforms[i].type
            }
          }
        }
      } else if(j < parts.length-1) {
        if(!(x[0] in o)) {
          o[x[0]] = {}
        }
        o = o[x[0]]
      } else {
        if(useIndex) {
          o[x[0]] = i
        } else {
          o[x[0]] = uniforms[i].type
        }
      }
    }
  }
  return obj
}
},{}],"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/node_modules/dup/dup.js":[function(require,module,exports){
"use strict"

function dupe_array(count, value, i) {
  var c = count[i]|0
  if(c <= 0) {
    return []
  }
  var result = new Array(c), j
  if(i === count.length-1) {
    for(j=0; j<c; ++j) {
      result[j] = value
    }
  } else {
    for(j=0; j<c; ++j) {
      result[j] = dupe_array(count, value, i+1)
    }
  }
  return result
}

function dupe_number(count, value) {
  var result, i
  result = new Array(count)
  for(i=0; i<count; ++i) {
    result[i] = value
  }
  return result
}

function dupe(count, value) {
  if(typeof value === "undefined") {
    value = 0
  }
  switch(typeof count) {
    case "number":
      if(count > 0) {
        return dupe_number(count|0, value)
      }
    break
    case "object":
      if(typeof (count.length) === "number") {
        return dupe_array(count, value, 0)
      }
    break
  }
  return []
}

module.exports = dupe
},{}],"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/shader-core.js":[function(require,module,exports){
'use strict'

var createUniformWrapper = require('./lib/create-uniforms')
var createAttributeWrapper = require('./lib/create-attributes')
var makeReflect = require('./lib/reflect')

//Shader object
function Shader(gl, prog, vertShader, fragShader) {
  this.gl = gl
  this.handle = prog
  this.attributes = null
  this.uniforms = null
  this.types = null
  this.vertexShader = vertShader
  this.fragmentShader = fragShader
}

//Binds the shader
Shader.prototype.bind = function() {
  this.gl.useProgram(this.handle)
}

//Destroy shader, release resources
Shader.prototype.dispose = function() {
  var gl = this.gl
  gl.deleteShader(this.vertexShader)
  gl.deleteShader(this.fragmentShader)
  gl.deleteProgram(this.handle)
}

Shader.prototype.updateExports = function(uniforms, attributes) {
  var locations = new Array(uniforms.length)
  var program = this.handle
  var gl = this.gl

  var doLink = relinkUniforms.bind(void 0,
    gl,
    program,
    locations,
    uniforms
  )
  doLink()

  this.types = {
    uniforms: makeReflect(uniforms),
    attributes: makeReflect(attributes)
  }

  this.attributes = createAttributeWrapper(
    gl,
    program,
    attributes,
    doLink
  )

  Object.defineProperty(this, 'uniforms', createUniformWrapper(
    gl,
    program,
    uniforms,
    locations
  ))
}

//Relinks all uniforms
function relinkUniforms(gl, program, locations, uniforms) {
  for(var i=0; i<uniforms.length; ++i) {
    locations[i] = gl.getUniformLocation(program, uniforms[i].name)
  }
}

//Compiles and links a shader program with the given attribute and vertex list
function createShader(
    gl
  , vertSource
  , fragSource
  , uniforms
  , attributes) {
  
  //Compile vertex shader
  var vertShader = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(vertShader, vertSource)
  gl.compileShader(vertShader)
  if(!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
    var errLog = gl.getShaderInfoLog(vertShader)
    console.error('gl-shader: Error compling vertex shader:', errLog)
    throw new Error('gl-shader: Error compiling vertex shader:' + errLog)
  }
  
  //Compile fragment shader
  var fragShader = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(fragShader, fragSource)
  gl.compileShader(fragShader)
  if(!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
    var errLog = gl.getShaderInfoLog(fragShader)
    console.error('gl-shader: Error compiling fragment shader:', errLog)
    throw new Error('gl-shader: Error compiling fragment shader:' + errLog)
  }
  
  //Link program
  var program = gl.createProgram()
  gl.attachShader(program, fragShader)
  gl.attachShader(program, vertShader)

  //Optional default attriubte locations
  attributes.forEach(function(a) {
    if (typeof a.location === 'number') 
      gl.bindAttribLocation(program, a.location, a.name)
  })

  gl.linkProgram(program)
  if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var errLog = gl.getProgramInfoLog(program)
    console.error('gl-shader: Error linking shader program:', errLog)
    throw new Error('gl-shader: Error linking shader program:' + errLog)
  }
  
  //Return final linked shader object
  var shader = new Shader(
    gl,
    program,
    vertShader,
    fragShader
  )
  shader.updateExports(uniforms, attributes)

  return shader
}

module.exports = createShader

},{"./lib/create-attributes":"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/lib/create-attributes.js","./lib/create-uniforms":"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/lib/create-uniforms.js","./lib/reflect":"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/lib/reflect.js"}],"/projects/blackice/node_modules/gl-mat4/adjoint.js":[function(require,module,exports){
module.exports = adjoint;

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/clone.js":[function(require,module,exports){
module.exports = clone;

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
    var out = new Float32Array(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/copy.js":[function(require,module,exports){
module.exports = copy;

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/create.js":[function(require,module,exports){
module.exports = create;

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/determinant.js":[function(require,module,exports){
module.exports = determinant;

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};
},{}],"/projects/blackice/node_modules/gl-mat4/fromQuat.js":[function(require,module,exports){
module.exports = fromQuat;

/**
 * Creates a matrix from a quaternion rotation.
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @returns {mat4} out
 */
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/fromRotationTranslation.js":[function(require,module,exports){
module.exports = fromRotationTranslation;

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/frustum.js":[function(require,module,exports){
module.exports = frustum;

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/identity.js":[function(require,module,exports){
module.exports = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/index.js":[function(require,module,exports){
module.exports = {
  create: require('./create')
  , clone: require('./clone')
  , copy: require('./copy')
  , identity: require('./identity')
  , transpose: require('./transpose')
  , invert: require('./invert')
  , adjoint: require('./adjoint')
  , determinant: require('./determinant')
  , multiply: require('./multiply')
  , translate: require('./translate')
  , scale: require('./scale')
  , rotate: require('./rotate')
  , rotateX: require('./rotateX')
  , rotateY: require('./rotateY')
  , rotateZ: require('./rotateZ')
  , fromRotationTranslation: require('./fromRotationTranslation')
  , fromQuat: require('./fromQuat')
  , frustum: require('./frustum')
  , perspective: require('./perspective')
  , ortho: require('./ortho')
  , lookAt: require('./lookAt')
  , str: require('./str')
}
},{"./adjoint":"/projects/blackice/node_modules/gl-mat4/adjoint.js","./clone":"/projects/blackice/node_modules/gl-mat4/clone.js","./copy":"/projects/blackice/node_modules/gl-mat4/copy.js","./create":"/projects/blackice/node_modules/gl-mat4/create.js","./determinant":"/projects/blackice/node_modules/gl-mat4/determinant.js","./fromQuat":"/projects/blackice/node_modules/gl-mat4/fromQuat.js","./fromRotationTranslation":"/projects/blackice/node_modules/gl-mat4/fromRotationTranslation.js","./frustum":"/projects/blackice/node_modules/gl-mat4/frustum.js","./identity":"/projects/blackice/node_modules/gl-mat4/identity.js","./invert":"/projects/blackice/node_modules/gl-mat4/invert.js","./lookAt":"/projects/blackice/node_modules/gl-mat4/lookAt.js","./multiply":"/projects/blackice/node_modules/gl-mat4/multiply.js","./ortho":"/projects/blackice/node_modules/gl-mat4/ortho.js","./perspective":"/projects/blackice/node_modules/gl-mat4/perspective.js","./rotate":"/projects/blackice/node_modules/gl-mat4/rotate.js","./rotateX":"/projects/blackice/node_modules/gl-mat4/rotateX.js","./rotateY":"/projects/blackice/node_modules/gl-mat4/rotateY.js","./rotateZ":"/projects/blackice/node_modules/gl-mat4/rotateZ.js","./scale":"/projects/blackice/node_modules/gl-mat4/scale.js","./str":"/projects/blackice/node_modules/gl-mat4/str.js","./translate":"/projects/blackice/node_modules/gl-mat4/translate.js","./transpose":"/projects/blackice/node_modules/gl-mat4/transpose.js"}],"/projects/blackice/node_modules/gl-mat4/invert.js":[function(require,module,exports){
module.exports = invert;

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/lookAt.js":[function(require,module,exports){
module.exports = lookAt;

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 &&
        Math.abs(eyey - centery) < 0.000001 &&
        Math.abs(eyez - centerz) < 0.000001) {
        return mat4.identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/multiply.js":[function(require,module,exports){
module.exports = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/ortho.js":[function(require,module,exports){
module.exports = ortho;

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/perspective.js":[function(require,module,exports){
module.exports = perspective;

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/rotate.js":[function(require,module,exports){
module.exports = rotate;

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < 0.000001) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/rotateX.js":[function(require,module,exports){
module.exports = rotateX;

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/rotateY.js":[function(require,module,exports){
module.exports = rotateY;

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/rotateZ.js":[function(require,module,exports){
module.exports = rotateZ;

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/scale.js":[function(require,module,exports){
module.exports = scale;

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/str.js":[function(require,module,exports){
module.exports = str;

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};
},{}],"/projects/blackice/node_modules/gl-mat4/translate.js":[function(require,module,exports){
module.exports = translate;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/transpose.js":[function(require,module,exports){
module.exports = transpose;

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};
},{}],"/projects/blackice/node_modules/gl-sprite-text/index.js":[function(require,module,exports){
var Base = require('fontpath-simple-renderer')
var inherits = require('inherits')
var bmfont2fontpath = require('fontpath-bmfont')
var texcoord = require('texcoord')
var xtend = require('xtend')
var createTexture = require('gl-texture2d')

var Batch = require('gl-sprite-batch')

var tmpPos = [0, 0],
    tmpShape = [0, 0],
    tmp1 = [0, 0],
    tmp2 = [0, 0]
var DEFAULT_TEXCOORD = [0, 0, 1, 1]
var maxInitialCapacity = 500

function texcoordGlyph(glyph, atlas, out) {
    tmp1[0] = glyph.x
    tmp1[1] = glyph.y
    tmp2[0] = glyph.width
    tmp2[1] = glyph.height
    return texcoord(tmp1, tmp2, atlas, out)
}

function TextRenderer(gl, opt) {
    if (!(this instanceof TextRenderer))
        return new TextRenderer(gl, opt)
    opt = opt||{}

    if (!opt.font) 
        throw new Error('must specify bmfont at creation time')

    //if the font has Image/ndarray array
    if (!opt.textures && Array.isArray(opt.font.images)) {
        opt.textures = opt.font.images.map(function(img) {
            return createTexture(gl, img)
        })
    }

    opt.font = bmfont2fontpath(opt.font)

    Base.call(this, opt)

    this.textures = opt.textures || []
    this.gl = gl
    if (!gl)
        throw new Error("must specify gl context")
    
    //assume text will be used dynamically 
    if (typeof opt.dynamic !== 'boolean')
        opt.dynamic = true

    var batch = opt.batch
    if (!batch)
        this.defaultBatch = Batch(gl, opt)
    this.batch = batch || this.defaultBatch

    if (typeof opt.wrapWidth !== 'number')
        this.layout()
}

inherits(TextRenderer, Base)

TextRenderer.prototype.dispose = function(textures) {
    if (this.defaultBatch)
        this.defaultBatch.dispose()
    if (textures) {
        this.textures.forEach(function(t) {
            if (typeof t.dispose === 'function')
                t.dispose()
        })
    }
    return this
}

TextRenderer.prototype.uncache = function() {
    this._cache = false
    this.batch.clear()
    return this
}

TextRenderer.prototype.cache = function(x, y, start, end) {
    // if (this.underline || this.font.pages.length > 1)
    //     throw new Error('currently cached text does not support underlines or multiple texture pages')
    
    this._cache = true
    this.batch.ensureCapacity(this.text.length)
    this.batch.clear()
    this._build(x, y, start, end)
    return this
}

TextRenderer.prototype.draw = function(shader, x, y, start, end) {
    var batch = this.batch
    batch.bind(shader)

    //if we're drawing dynamically
    if (!this._cache) {
        batch.clear()
        this._build(x, y, start, end)
    }
    
    batch.draw()
    batch.unbind()
    return this
}

TextRenderer.prototype._build = function(x, y, start, end) {
    var result = this.render(x, y, start, end)

    var batch = this.batch

    //underlines currently not supported with cache()
    if (!this._cache) {
        batch.texcoord = DEFAULT_TEXCOORD
        batch.texture = null

        for (i = 0; i < result.underlines.length; i++) {
            var underline = result.underlines[i]
            batch.position = underline.position
            batch.shape = underline.size
            batch.push()
        }
    }

    //now draw our glyphs into the batch...
    for (i = 0; i < result.glyphs.length; i++) {
        var g = result.glyphs[i]
        this._drawGlyph(batch, g)
    }
}

TextRenderer.prototype._drawGlyph = function(batch, data) {
    //... we could sort these by texture page to reduce draws
    var glyph = data.glyph
    var img = this.textures[glyph.page]
    tmpPos[0] = data.position[0]+glyph.hbx
    tmpPos[1] = data.position[1]+glyph.hby - this.font.descender
    tmpShape[0] = glyph.width * data.scale[0]
    tmpShape[1] = glyph.height * data.scale[1]
    
    batch.texture = img
    texcoordGlyph(glyph, img && img.shape, batch.texcoord)
    batch.position = tmpPos
    batch.shape = tmpShape
    batch.push()
}

module.exports = TextRenderer
},{"fontpath-bmfont":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-bmfont/index.js","fontpath-simple-renderer":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/index.js","gl-sprite-batch":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/index.js","gl-texture2d":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-texture2d/texture.js","inherits":"/projects/blackice/node_modules/gl-sprite-text/node_modules/inherits/inherits_browser.js","texcoord":"/projects/blackice/node_modules/gl-sprite-text/node_modules/texcoord/index.js","xtend":"/projects/blackice/node_modules/gl-sprite-text/node_modules/xtend/immutable.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-bmfont/index.js":[function(require,module,exports){
function glyph(data) {
    return {
        page: data.page,
        hbx: data.xoffset,
        hby: data.yoffset,
        width: data.width,
        height: data.height,
        xoff: data.xadvance,
        x: data.x,
        y: data.y
    }
}

function glyphs(chars) {
    var out = {}
    chars.forEach(function(c) {
        out[String.fromCharCode(c.id)] = glyph(c)
    })
    return out
}

module.exports = function(bmfont) {
    return {
        pages: bmfont.pages,
        resolution: 72,
        size: bmfont.info.size,
        units_per_EM: 1,
        bitmap: true,
        family_name: bmfont.info.face,
        height: bmfont.common.lineHeight,
        descender: bmfont.common.base,
        ascender: bmfont.common.base,
        glyphs: glyphs(bmfont.chars),
        kerning: bmfont.kernings.map(function(k) {
            return [String.fromCharCode(k.first),String.fromCharCode(k.second),k.amount]
        })
    }
}
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/index.js":[function(require,module,exports){
var Base = require('fontpath-renderer')
var inherits = require('inherits')

//TODO: Eventually lots of this code will just replace fontpath-renderer...

function FontpathRenderer(options) {
    if (!(this instanceof FontpathRenderer))
        return new FontpathRenderer(options)
    Base.call(this, options)

    this.data = {
        glyphs: [],
        underlines: []
    }
}

inherits(FontpathRenderer, Base)

FontpathRenderer.prototype.renderGlyph = function(i, glyph, scale, x, y) {
    this.data.glyphs.push(new Glyph(i, glyph, 
                this.text.charCodeAt(i), 
                [ scale, this.font.bitmap ? scale : -scale ],
                [ x, y ]))
}

FontpathRenderer.prototype.renderUnderline = function(x, y, width, height) {
    this.data.underlines.push(new Underline(
        [ x, y ],
        [ width, height ]
    ))
}

FontpathRenderer.prototype.render = function(x, y, start, end) {
    //new data for result
    this.data.glyphs.length = 0
    this.data.underlines.length = 0
    Base.prototype.render.call(this, x, y, start, end)
    return this.data
}

function Glyph(index, glyph, charCode, scale, position) {
    this.glyph = glyph
    this.index = index
    this.charCode = charCode
    this.position = position
    this.scale = scale
}

function Underline(position, size) {
    this.position = position
    this.size = size
}

module.exports = FontpathRenderer
},{"fontpath-renderer":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/index.js","inherits":"/projects/blackice/node_modules/gl-sprite-text/node_modules/inherits/inherits_browser.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/index.js":[function(require,module,exports){
var GlyphIterator = require('fontpath-glyph-iterator');
var WordWrap = require('fontpath-wordwrap');

var tmpBounds = { x: 0, y: 0, width: 0, height: 0, glyphs: 0 };

function TextRenderer(options) {
    if (!(this instanceof TextRenderer))
        return new TextRenderer(options);
    options = options||{}

    this.iterator = new GlyphIterator(options.font, options.fontSize);
    this.wordwrap = new WordWrap();

    this.align = 'left';
    this.underline = false;

    this.underlineThickness = undefined;
    this.underlinePosition = undefined;
    this._text = "";

    if (typeof options.align === 'string')
        this.align = options.align;
    if (typeof options.underline === 'boolean')
        this.underline = options.underline;
    if (typeof options.underlineThickness === 'number')
        this.underlineThickness = options.underlineThickness;
    if (typeof options.underlinePosition === 'number')
        this.underlinePosition = options.underlinePosition;
    if (typeof options.text === 'string')
        this.text = options.text;
    if (typeof options.lineHeight === 'number')
        this.lineHeight = options.lineHeight;
    if (typeof options.letterSpacing === 'number')
        this.letterSpacing = options.letterSpacing;
    if (typeof options.wrapMode === 'string')
        this.wordwrap.mode = options.wrapMode;
    if (typeof options.wrapWidth === 'number')
        this.layout(options.wrapWidth);
}

//Internally we will use integers to avoid string comparison for each glyph
var LEFT_ALIGN = 0, CENTER_ALIGN = 1, RIGHT_ALIGN = 2;
var ALIGN_ARRAY = [
    'left', 
    'center', 
    'right'
];
    
Object.defineProperties(TextRenderer.prototype, {
    /**
     * If the new font differs from the last, the text layout is cleared
     * and placed onto a single line. Users must manually re-layout the text 
     * for word wrapping.
     */
    "font": {
        get: function() {
            return this.iterator.font;
        },
        set: function(val) {
            var oldFont = this.iterator.font;
            this.iterator.font = val;
            if (oldFont !== this.iterator.font)
                this.clearLayout();
        },
    },

    /**
     * If the new font size differs from the last, the text layout is cleared
     * and placed onto a single line. Users must manually re-layout the text 
     * for word wrapping.
     */
    "fontSize": {
        get: function() {
            return this.iterator.fontSize;
        },
        set: function(val) {
            var oldSize = this.iterator.fontSize;

            this.iterator.fontSize = val;

            if (oldSize !== this.iterator.fontSize)
                this.clearLayout();
        },
    },
    "lineHeight": {
        get: function() {
            return this.iterator.lineHeight;
        },
        set: function(val) {
            this.iterator.lineHeight = val;
        },
    },
    "letterSpacing": {
         get: function() {
            return this.iterator.letterSpacing;
        },
        set: function(val) {
            this.iterator.letterSpacing = val;
        },
    },

    /**
     * If the new text is different from the last, the layout (i.e. word-wrapping)
     * is cleared and the result is a single line of text (similar to HTML5 canvas text
     * rendering).
     * 
     * The text then needs to be re-wordwrapped with a call to `layout()`.
     */
    "text": {
        get: function() {
            return this._text;
        },

        set: function(text) {
            text = text||"";

            var old = this._text;
            this._text = text;
            this.wordwrap.text = this.text;

            if (this._text !== old) 
                this.clearLayout();
        }
    }
});

/**
 * Clears the text layout and word-wrapping, placing all of it on a single line.
 */
TextRenderer.prototype.clearLayout = function() {
    this.wordwrap.text = this.text;
    this.wordwrap.empty();

    if (this.iterator.font) //font might not have been passed at constructor
        this.wordwrap.clearLayout(this.iterator);
};

/**
 * Calls the word wrapper to layout the current text string,
 * based on the wrap width and any current wordwrapping options.
 *
 * This is called when the text is changed. 
 * 
 * @return {[type]} [description]
 */
TextRenderer.prototype.layout = function(wrapWidth) {
    this.wordwrap.text = this.text;
    this.wordwrap.empty();
    this.wordwrap.layout(this.iterator, wrapWidth);
};

/**
 * "Renders" this glyph at the given location. This may involve filling
 * a VBO with vertex data, or it may be a direct call to draw a bitmap glyph
 * or shape outline.
 * @return {[type]} [description]
 */
TextRenderer.prototype.renderGlyph = function() {

};

TextRenderer.prototype.renderUnderline = function() {

};

/**
 * Returns the bounds of the current text layout. 
 *
 * The height does not extend past the baseline of the
 * last line; unless `includeUnderline` is true, in which
 * case the underline's position and height is included
 * in the calculation. 
 *
 * The bounding y position is offset so that the box has an upper-left
 * origin, for parity with HTML5 canvas rendering.
 * 
 * @param {Boolean} includeUnderline whether to include the underline in the calculation, default false
 * @param {Object} out an optional {width, height} object for re-use
 * @return {Object} a size with { width, height } properties
 */
TextRenderer.prototype.getBounds = function (includeUnderline, out) {
    if (!out)
        out = { x: 0, y: 0, width: 0, height: 0 };

    var wordwrapper = this.wordwrap;
    var itr = this.iterator;

    //tighten the bounding box around the first line..
    var firstLineHeight = 0;
    if (wordwrapper.lines.length > 0) {
        var firstLine = wordwrapper.lines[0];
        itr.getBounds(this.text, firstLine.start, firstLine.end, undefined, tmpBounds);
        firstLineHeight = tmpBounds.height;
    }

    out.width = wordwrapper.getMaxLineWidth();   
    out.height = Math.max(0, wordwrapper.lines.length-1) * itr.getLineGap() + firstLineHeight;

    out.x = 0;
    out.y = -out.height;

    if (includeUnderline) {
        var underlineHeight = this.computeUnderlineHeight();
        var underlinePosition = this.computeUnderlinePosition();
        var underlineOff = underlinePosition+underlineHeight/2;
        out.height += underlineOff;
    }

    return out;
};

/**
 * Computes the scaled underline height as pixels, based on 
 * the explicit `underlineHeight` (in pixels). If `underlineHeight` is
 * undefined or null, it will try to use the font's non-zero underline height, 
 * otherwise default to 1/8 of the font's EM square.
 * 
 * @return {Number} the pixel height of the underline 
 */
TextRenderer.prototype.computeUnderlineHeight = function () {
    var font = this.font;
    var scale = this.iterator.fontScale;
    if (this.underlineThickness===0||this.underlineThickness) {
        return this.underlineThickness; 
    } else if (font.underline_thickness) {
        return font.underline_thickness * scale; 
    } else if (font.bitmap)
        return font.size/8;
    else
        return (font.units_per_EM/8)*scale;
};

/**
 * Computes the scaled underline height as pixels, based on 
 * the explicit `underlinePosition` (in pixels). If `underlinePosition` is
 * undefined or null, it will try to use the font's non-zero underline position, 
 * otherwise default to 1/4 of the font's EM square.
 *
 * This is the Y offset from the text baseline to the center of the underline 
 * bar, in pixels. It is generally a positive value.
 * 
 * @return {Number} the pixel position of the underline 
 */
TextRenderer.prototype.computeUnderlinePosition = function () {
    var font = this.font;
    var scale = this.iterator.fontScale;
        
    if (this.underlinePosition===0||this.underlinePosition) {
        return this.underlinePosition; 
    } else if (font.underline_position) {
        return -font.underline_position * scale; 
    } else if (font.bitmap) {
        return font.size/4;
    } else {
        return (font.units_per_EM/4)*scale;
    }
};

/**
 * Gets the descent of the current font (assumes its size 
 * is already set). This is an absolute (positive) value.
 * 
 * @return {[type]} [description]
 */
TextRenderer.prototype.getDescender = function () {
    return Math.abs(this.iterator.fontScale * this.iterator.font.descender);
};

/**
 * Gets the descent of the current font (assumes its size 
 * is already set). This is an absolute (positive) value.
 * 
 * @return {[type]} [description]
 */
TextRenderer.prototype.getAscender = function () {
    return Math.abs(this.iterator.fontScale * this.iterator.font.ascender);
};

//Signals for subclasses to optionally implmeent
//This may be useful to stop/start paths with different fills
TextRenderer.prototype.onBegin = function() { }
TextRenderer.prototype.onEnd = function() { }
TextRenderer.prototype.onBeginLine = function(lineIndex) { }
TextRenderer.prototype.onEndLine = function(lineIndex) { }

/**
 * Renders the current text layout, where lower-left is 
 * the origin. Multiple lines will be positioned above the
 * origin.
 */
TextRenderer.prototype.render = function (x, y, start, end) {
    x = x||0;
    y = y||0;

    var text = this.text;
    var wordwrapper = this.wordwrap;

    //if we have nothing to draw
    if (!text || wordwrapper.lines.length === 0)
        return;

    //default start/end params
    start = start||0;
    end = typeof end === "number" ? end : text.length;

    var itr = this.iterator;
    var scale = itr.fontScale;
    var font = itr.font;
    var underline = this.underline;

    //used for alignment...
    var maxLineWidth = wordwrapper.getMaxLineWidth();
    
    y -= Math.max(0, wordwrapper.lines.length-1) * itr.getLineGap();


    //use numbers to avoid str compare for each glyph
    var alignType = ALIGN_ARRAY.indexOf(this.align||"");
    if (alignType===-1)
        alignType = LEFT_ALIGN;

    var underlineX = 0;
    var underlineStartX = 0;
    var underlineY = 0;
    var underlineWidth = 0;

    var underlineStarted = false;

    //Try to use user-specified underline settings, otherwise use the font if possible,
    //otherwise just use a rough default based on EM square.    
    var underlinePos = this.computeUnderlinePosition();
    var underlineHeight = this.computeUnderlineHeight();

    this.onBegin();
    
    //set the origin and pen position
    itr.begin(x, y);
    for (var k=0; k<wordwrapper.lines.length; k++) {
        var line = wordwrapper.lines[k];
        underlineStarted = false;

        var lastAdvance = 0;

        var lineX = itr.pen.x;
        var lineY = itr.pen.y;

        this.onBeginLine(k);

        //TODO: use multiple Nodes inside a single line
        //a node will have attributes like font, size, color, 
        //letter-spacing, underline, etc.
        //This will affect the line height, as it will have to be the max of all nodes.

        for (var i=line.start; i<line.end; i++) {
            var chr = text.charAt(i);

            //Step the iterator, moving forward based on kerning from last char
            var glyph = itr.step(text, i);

            if (!glyph)
                continue;

            //within desired range
            if (i >= start && i < end) {
                var tx = itr.pen.x;
                var ty = itr.pen.y;

                if (alignType === CENTER_ALIGN) {
                    tx += (maxLineWidth-line.width)/2;
                } else if (alignType === RIGHT_ALIGN) {
                    tx += (maxLineWidth-line.width);
                }

                if (!underlineStarted) {
                    underlineX = tx;
                    underlineStartX = tx;
                    underlineY = ty + underlinePos;
                    underlineWidth = 0;
                    underlineStarted = true;
                } else {
                    underlineWidth = tx - underlineStartX;
                }

                this.renderGlyph(i, glyph, scale, tx, ty);
            }

            //Advance the iterator to the next glyph in the string
            var newAdvance = itr.advance(glyph);

            if (i >= start && i < end)
                lastAdvance = newAdvance;
        }

        this.onEndLine(k);

        if (underline) {
            underlineWidth += lastAdvance;
            this.renderUnderline(underlineX, underlineY-underlineHeight/2, underlineWidth, underlineHeight);
        }
        
        //Steps down a line...
        if (k < wordwrapper.lines.length-1) {
            itr.advanceLine();
        }
    }

    //finish the iterator...
    itr.end();
    this.onEnd();
};

module.exports = TextRenderer;
},{"fontpath-glyph-iterator":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-glyph-iterator/index.js","fontpath-wordwrap":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-wordwrap/index.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-glyph-iterator/index.js":[function(require,module,exports){
var util = require('fontpath-util');

var DEFAULT_TAB_WIDTH = 4;

function GlyphIterator(font, fontSize) {
    this._fontSize = undefined;
    this._fontScale = undefined;
    this._font = undefined;
    this.fontScale = 1.0;
    this.kerning = true;
    this.letterSpacing = 0;
    this.lineHeight = undefined;
    
    this.fontSize = typeof fontSize === 'number'
            ? fontSize
            : (font ? font.size : undefined);
    this.font = font;

    //Number of spaces for a tab character
    this.tabWidth = DEFAULT_TAB_WIDTH;
    this._tabGlyph = null;

    this.origin = { x: 0, y: 0 };
    this.pen = { x: 0, y: 0 };
}

Object.defineProperty(GlyphIterator.prototype, "font", {
    get: function() {
        return this._font;
    },

    set: function(font) {
        this._font = font;

        //Determine the new scaling factor...
        if (font) {
            this.fontScale = util.getPxScale(font, this.fontSize);

            //Updates the tab glyph
            this.tabWidth = this._tabWidth;
        }
    },
});

//There might be a better way of handling tab width using FreeType ? 
Object.defineProperty(GlyphIterator.prototype, "tabWidth", {

    get: function() {
        return this._tabWidth;
    },

    set: function(val) {
        this._tabWidth = val===0 || val ? val : DEFAULT_TAB_WIDTH;
        this._tabGlyph = {};

        var spaceGlyph = this.font ? this.font.glyphs[" "] : null;
        if (spaceGlyph) {
            this._tabGlyph = {};
            for (var k in spaceGlyph) {
                this._tabGlyph[k] = spaceGlyph[k];
            }
            if (this._tabGlyph.xoff)
                this._tabGlyph.xoff *= this._tabWidth;
        }
    },
});

Object.defineProperty(GlyphIterator.prototype, "fontSize", {
    get: function() {
        if (typeof this._fontSize !== 'number')
            return this.font.bitmap 
                ? this.font.size 
                : util.pointToPixel(this.font.size)
        return this._fontSize;
    },

    set: function(val) {
        this._fontSize = val;

        //If the font is already set, determine the new scaling factor
        if (this._font) {
            this.fontScale = util.getPxScale(this._font, this._fontSize);
        }
    },
});

GlyphIterator.prototype.getKerning = function(left, right) {
    var font = this.font;

    if (!font || !font.kerning)
        return 0;

    var table = this.kerningTable;

    for (var i=0; i<font.kerning.length; i++) {
        var k = font.kerning[i];
        if (k[0] === left && k[1] === right) 
            return k[2];
    }
    return 0;
};

GlyphIterator.prototype.begin = function(x, y) {
    this.origin.x = x||0;
    this.origin.y = y||0;

    this.pen.x = this.origin.x;
    this.pen.y = this.origin.y;
};

GlyphIterator.prototype.end = function() {
    //.. mainly for consistency with begin()
    //Might be useful later on
};

GlyphIterator.prototype.getLineGap = function() {
    //Line height handling is a mess in browsers.
    //Maybe the best solution is to encourage users to 
    //specify pixel line heights if they want to match browser standards,
    //otherwise it's unreasonable to expect the line gaps to line up exactly
    //across all browsers. Example of the disaster:
    //http://lists.w3.org/Archives/Public/www-style/2008Jan/0413.html

    //For reference, some baseline-to-baseline calculations:
    //http://www.microsoft.com/typography/otspec/recom.htm
    //freetype.org/freetype2/docs/reference/ft2-base_interface.html
    //http://www.freetype.org/freetype2/docs/glyphs/glyphs-3.html

    //Unfortunately none of these are producing line-heights that avoid overlapping
    //or resemble browser rendering in any way. 

    // If CSS uses 1em or 1, the browser offsets the line by the 
    // font's pixel size. If an exact pixel line-height is specified,
    // the browser will use that + a computed "linegap." 
    // If 'auto' is specified for line-height, the calculations seem
    // much more complex and browser/platform dependent (not included here).
    
    var font = this.font,
        scale = this.fontScale;
    var gap = (font.height - font.ascender + Math.abs(font.descender)) * scale;    
    var lineHeight = this.lineHeight;
    
    lineHeight = (lineHeight===0||lineHeight) 
            ? (lineHeight + gap)
            : this.fontSize;
    return lineHeight;
};

GlyphIterator.prototype.translate = function(x, y) {
    this.origin.x += x||0;
    this.origin.y += y||0;

    this.pen.x += x||0;
    this.pen.y += y||0;
};

GlyphIterator.prototype.step = function(text, index) {
    var scale = this.fontScale,
        font = this._font;

    var chr = text.charAt(index); 

    if (chr === '\t' && this._tabGlyph) {
        return this._tabGlyph;
    }

    //Skip missing characters...
    if (!(chr in font.glyphs))
        return;
    
    var glyph = font.glyphs[chr];

    //If we have a char to the left, determine its kerning
    if (index > 0 && this.kerning) {
        var kern = this.getKerning(text.charAt(index-1), chr);
        this.pen.x += (kern*scale);
    }

    return glyph;
};

GlyphIterator.prototype.advanceLine = function() {
    this.pen.y += this.getLineGap();
    this.pen.x = this.origin.x;
};

/**
 * Called after step. 
 */
GlyphIterator.prototype.advance = function(glyph) {
    var advance = (glyph.xoff * this.fontScale);
    // Advance to next pen position
    this.pen.x += advance + this.letterSpacing;
    return advance;
};

/**
 * This is a utility function that provides the bounds of the given
 * text (from start and end positions) as if they were laid out horizontally,
 * left to right.
 *
 * For convenience, this will not alter the current pen and origin positions.
 * This way it can be utilized inside a glyph iteration (i.e. for rendering).
 *
 * If `availableWidth` is specified, this will break before reaching the specified
 * pixel width, to ensure that all glyphs will fit inside the bounds. 
 *
 * The return object also includes a `glyphs` property, which is the number of glyphs
 * that are visible within the returned bounds. 
 *
 * If `out` is specified (an object with x, y, width, height, and glyph properties),
 * it will be re-used. Otherwise a new object is created.
 * 
 * @param {String} text the text to check
 * @param {Number} start the start position, defaults to 0
 * @param {Number} end the end position, exclusive, defaults to text length
 * @param {Number} availableWidth the width before stopping the bound check
 * @param {Object} out an object to re-use for the return value
 * @return {Object} the bounds and glyph count {x,y,width,height,glyphs}
 */
GlyphIterator.prototype.getBounds = function(text, start, end, availableWidth, out) {
    if (!out)
        out = { x:0, y:0, width: 0, height: 0, glyphs: 0 };

    var checkWidth = availableWidth===0||availableWidth;

    start = start||0;
    end = end===0||end ? end : text.length;

    var maxHeight = 0;

    out.x = 0;
    out.y = 0;
    out.glyphs = 0;

    var oldPenX = this.pen.x,
        oldPenY = this.pen.y,
        oldOriginX = this.origin.x,
        oldOriginY = this.origin.y;


    var font = this.font;
    this.begin();
    for (var i=start; i<end; i++) {
        var chr = text.charAt(i);

        //step the iterator
        var glyph = this.step(text, i);

        //if the glyph is valid, we can advance past it and calculate new height
        if (glyph) {
            var height = (glyph.height)*this.fontScale;

            out.y = Math.max(out.y, this.fontScale*(glyph.height-glyph.hby));

            maxHeight = Math.max(maxHeight, height);
            var lastAdvance = this.advance(glyph);

            //if we're past the available width
            var newWidth = this.pen.x - this.origin.x;
            if (checkWidth && (newWidth - availableWidth > 0.001)) {
                this.pen.x -= lastAdvance;
                break;
            }

            out.glyphs++;
        }
    }
    this.end();

    out.width = this.pen.x - this.origin.x;
    out.height = maxHeight;

    this.pen.x = oldPenX;
    this.pen.y = oldPenY;
    this.origin.x = oldOriginX;
    this.origin.y = oldOriginY;

    return out;
};

module.exports = GlyphIterator;
},{"fontpath-util":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-util/index.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-util/index.js":[function(require,module,exports){
// module.exports.pointsToPixels = function(pointSize, resolution) {
// 	resolution = typeof resolution === "number" ? resolution : 72;
// 	return pointSize * resolution / 72;
// };

// module.exports.coordToPixel = function(coord, pixelSize, emSize) {
// 	emSize = typeof emSize === "number" ? emSize : 2048;
// 	return coord * pixelSize / emSize;
// };

/**
 * Converts a pt size to px size, namely useful for matching
 * size with CSS styles. If no DPI is specified, 96 is assumed
 * (as it leads to correct rendering in all browsers).
 * 
 * @param  {Number} fontSize the desired font size in points
 * @param  {Number} dpi      the expected DPI, generally 96 for browsers
 * @return {Number}          the rounded pixel font size
 */
module.exports.pointToPixel = function(fontSize, dpi) {
    dpi = dpi||dpi===0 ? dpi : 96;
    fontSize = fontSize * dpi / 72;
    return Math.round(fontSize);
};

/**
 * For the given font and (pixel) font size, this method returns the
 * scale that will need to be applied to EM units (i.e. font paths) 
 * to have the font render at the expected size (i.e. to match the browser).
 *
 * If no font size is specified, we will use the default font size (which is in points)
 * and convert it to pixels. 
 * 
 * @param  {Font} font     a font object from the fontpath tool
 * @param  {Number} fontSize the desired font size, defaults to the font's default size
 * @return {Number} returns the scale for this font size         
 */
module.exports.getPxScale = function(font, fontSize) {
    if (font.bitmap)
        return 1.0;

    //If no fontSize is specified, it will just fall back to using the font's own size with 96 DPI.
    fontSize = typeof fontSize === "number" ? fontSize : this.pointToPixel(font.size);

    //Takes in a font size in PIXELS and gives us the expected scaling factor
    var sz = font.units_per_EM/64;
    sz = (sz/font.size * fontSize);

    return ((font.resolution * 1/72 * sz) / font.units_per_EM);
};

/**
 * For the given font and (point) font size, this method returns the
 * scale that will need to be applied to EM units (i.e. font paths) 
 * to have the font render at the expected size (i.e. to match the browser).
 * 
 * If no font size is specified, we will use the default font size.
 * 
 * @param  {Font} font       a font object from the fontpath tool
 * @param  {Number} fontSize the desired font size, defaults to the font's default size
 * @return {Number}          the scale for this font size
 */
module.exports.getPtScale = function(font, fontSize) {
    fontSize = typeof fontSize === "number" ? fontSize : font.size;
    fontSize = this.pointToPixel(fontSize);
    return this.getPxScale(font, fontSize);
};

},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-wordwrap/index.js":[function(require,module,exports){
var tmpBounds = { x: 0, y: 0, width: 0, height: 0, glyphs: 0 };

function isWhitespace(chr) {
	return chr===' '
		|| chr==='\n'
		|| chr==='\r'
		|| chr==='\t';
}

function idxOf(text, chr, start, end) {
	var idx = text.indexOf(chr, start);
	if (idx === -1 || idx > end)
		return end;
	return idx;
}

function WordWrap(text) {
	/**
	 * The text being operated on.
	 * @param {String} text
	 */
	this.text = text||"";

	/**
	 * An array of lines representing the state of this word wrapper.
	 * @param {Array} lines
	 */
	this.lines = [];

	/** 
	 * The newline character to break on, default '\n'
	 * @param {String} newline
	 */
	this.newline = '\n';

	/**
	 * Whether to clip non-breaking text (nowrap and pre)
	 * if the wrapWidth is too small. 
	 *  
	 * @param {Boolean} clip
	 */
	this.clip = false;

	/**
	 * The mode for wordwrapping: 'pre', 'normal', or 'nowrap'.
	 *
	 * You can also use the `PRE`, `NORMAL`, and `NOWRAP` constants
	 * in `WordWrap.Mode`.
	 * 
	 * @param {String} mode
	 */
	this.mode = WordWrap.Mode.NORMAL;
}

WordWrap.Mode = {
	PRE: 'pre',       //whitespace isn't collapsed
	NORMAL: 'normal', //whitespace is collapsed
	NOWRAP: 'nowrap'  //only break on '\n'
};

/**
 * Clears any multi-line layout by placing all the text in a single Line object.
 * 
 * @param {GlyphIterator} iterator the iterator to use 
 * @method  clearLayout
 */
WordWrap.prototype.clearLayout = function(iterator) {
	this.lines.length = 0;
	
	if (this.text.length > 0) {
		iterator.getBounds(this.text, 0, this.text.length, undefined, tmpBounds);
		
		var line = new WordWrap.Line(0, this.text.length, tmpBounds.width);
		this.lines.push(line);
	}
};

/**
 * Resets the word wrapper by emptying all current lines.
 * @method  empty
 */
WordWrap.prototype.empty = function() {
	this.lines.length = 0;
};

/**
 * Word-wraps the given text into multiple lines.
 * @param  {[type]} iterator [description]
 * @param  {[type]} width    [description]
 * @param  {[type]} start    [description]
 * @param  {[type]} end      [description]
 * @return {[type]}          [description]
 */
WordWrap.prototype.layout = function(iterator, wrapWidth, start, end) {
	var text = this.text;

	var lines = this.lines;

	start = Math.max(0, start||0);
	end = (end===0||end) ? end : text.length;

	iterator.begin();

	//default wrap width...
	wrapWidth = (wrapWidth===0 || wrapWidth) ? wrapWidth : Number.MAX_VALUE;

	//<pre> mode just uses a simple algorithm...
	if (this.mode === WordWrap.Mode.PRE) {
		var lineStart = start;
		for (var i=start; i<end; i++) {
			var chr = text.charAt(i);

			//If we've reached a newline, then step down a line
			//Or if we've reached the EOF
			if ( chr === this.newline || i===end-1) {
				var availableWidth = this.clip ? wrapWidth : undefined;
				iterator.getBounds(text, lineStart, i+1, availableWidth, tmpBounds);
				lines.push( new WordWrap.Line(lineStart, lineStart+tmpBounds.glyphs, tmpBounds.width) );
				lineStart = i+1;
			}
		}
	} 
	//'normal' mode uses LibGDX's word wrapping algorithm:
	//https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/BitmapFontCache.java
	else {
		//if 'nowrap' is specified, we only wrap on newline chars
		
		var testWidth = wrapWidth;
		if (this.mode === WordWrap.Mode.NOWRAP) {
			testWidth = Number.MAX_VALUE;
		}

		while (start < end) {
			//get next newline position
			var newLine = idxOf(text, this.newline, start, end);

			//eat whitespace at start of line
			while (start < newLine) {
				if (!isWhitespace( text.charAt(start) ))
					break;
				start++;
			}

			//determine visible # of glyphs for the available width
			iterator.getBounds(text, start, newLine, testWidth, tmpBounds)

			var lineEnd = start + tmpBounds.glyphs;
			var nextStart = lineEnd + this.newline.length;

			//if we had to cut the line before the next newline...
			if (lineEnd < newLine) {
				//find char to break on
				while (lineEnd > start) {
					if (isWhitespace(text.charAt(lineEnd)))
						break;
					lineEnd--;
				}
				if (lineEnd === start) {
					if (nextStart > start + this.newline.length) nextStart--;
					lineEnd = nextStart; // If no characters to break, show all.
				} else {
					nextStart = lineEnd;
					//eat whitespace at end of line
					while (lineEnd > start) {
						if (!isWhitespace(text.charAt(lineEnd - this.newline.length)))
							break;
						lineEnd--;
					}
				}
			}

			if (lineEnd > start) {
				//to clip, use the original wrap width (unaltered by mode)
				var availableWidth = this.clip ? wrapWidth : undefined;
				iterator.getBounds(text, start, lineEnd, availableWidth, tmpBounds);
				var lineWidth = tmpBounds.width;

				var rLineEnd = this.clip ? start+tmpBounds.glyphs : lineEnd;
				lines.push( new WordWrap.Line(start, rLineEnd, lineWidth) );
			}
			start = nextStart;

		}
	}

	iterator.end();
};

/**
 * A convenience method to return the maximum width of all current lines.
 * This is useful for aligning blocks of text.
 *
 * @method  getMaxLineWidth
 * @return {Number} the maximum width of all lines
 */
WordWrap.prototype.getMaxLineWidth = function() {
	var maxWidth = 0;
	for (var i=0; i<this.lines.length; i++) {
		var line = this.lines[i];
		maxWidth = Math.max(line.width, maxWidth);
	}
	return maxWidth;
};

/**
 * The Line object holds the start and end indices into the string,
 * and the width as computed by GlyphIterator.
 * 
 * @class  WordWrap.Line
 * @param {Number} start the start index, inclusive
 * @param {Number} end   the end index, exclusive
 * @param {Number} width the computed width of this line
 */
WordWrap.Line = function(start, end, width) {
	this.start = start;
	this.end = end;
	this.width = width;
};

module.exports = WordWrap;
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/common.js":[function(require,module,exports){
var createVAO = require('gl-aliased-vao') //TODO: improve this with gl-vao
var createBuffer = require('gl-buffer')

module.exports.floatsPerVertex = 5

function createIndices(capacity) {
    var numIndices = capacity * 6
    var indices = new Uint16Array(numIndices)

    for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {
        indices[i + 0] = j + 0
        indices[i + 1] = j + 1
        indices[i + 2] = j + 2
        indices[i + 3] = j + 0
        indices[i + 4] = j + 2
        indices[i + 5] = j + 3
    }
    return indices
}

module.exports.mixins = {

    create: function create(opt) {
        opt = opt||{}
        this.clear()

        //dispose before building...
        if (this.vao)
            this.dispose()

        var capacity = typeof opt.capacity === 'number' ? opt.capacity : 100

        // 65535 is max index, so 65535 / 6 = 10922.
        if (capacity > 10922)
            throw new Error("Can't have more than 10922 quads per batch: " + capacity)

        this._capacity = capacity

        //the total number of floats in our batch
        var numVerts = capacity * 4 * module.exports.floatsPerVertex

        this.vertices = new Float32Array(numVerts)
        this.indices = createIndices(capacity)

        var gl = this.gl
        var usage = opt.dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW
        this.vertexBuffer = createBuffer(gl, this.vertices, gl.ARRAY_BUFFER, usage)
        this.indexBuffer = createBuffer(gl, this.indices, gl.ELEMENT_ARRAY_BUFFER, gl.STATIC_DRAW)

        var stride = 5 * 4
        this.vao = createVAO(gl, [{ //position XY
            name: 'position',
            buffer: this.vertexBuffer,
            size: 2,
            stride: stride
        }, { //texcoord UV
            name: 'texcoord0',
            buffer: this.vertexBuffer,
            size: 2,
            offset: 2 * 4,
            stride: stride
        }, { //color (packed) C
            name: 'color',
            buffer: this.vertexBuffer,
            size: 4,
            stride: stride,
            offset: 4 * 4,
            type: gl.UNSIGNED_BYTE,
            normalized: true
        }], this.indexBuffer)
        return this
    },

    ensureCapacity: function(capacity) {
        if (this.capacity < capacity)
            this.create({ capacity: capacity })
        return this
    }
}
},{"gl-aliased-vao":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/index.js","gl-buffer":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/buffer.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/index.js":[function(require,module,exports){
var colorToFloat = require('./pack-rgba-float')
var mixes = require('mixes')
var premult = require('premultiplied-rgba')
var WhiteTex = require('gl-white-texture')

var vertNumFloats = require('./common').floatsPerVertex

//Temporary arrays to avoid GC thrashing
var position = [0, 0],
    shape = [0, 0],
    texcoord = [0, 0, 0, 0],
    color = [0, 0, 0, 0]

var tmp4 = [0, 0, 0, 0],
    rotOrigin = [0, 0],
    tmp2 = [0, 0]

function SpriteBatch(gl, opt) {
    if (!(this instanceof SpriteBatch))
        return new SpriteBatch(gl, opt)
    if (!gl)
        throw new Error("must specify gl context")
    this.gl = gl
    opt = opt || {}
    
    this._bound = false
    this.idx = 0

    //no transform means identity
    this.transform = null

    //white texture is akin to "no texture" (without switching shaders)
    this._defaultTexture = WhiteTex(gl)
    this._lastTexture = this._defaultTexture
    this._texture = this._defaultTexture
    this.texture = null

    this.mode = typeof opt.mode === 'number' ? opt.mode : gl.TRIANGLES
    this.premultiplied = opt.premultiplied || false

    this._dirty = true
    this.create(opt)

    //set default attributes
    this.defaults()
}

//mix in create() and ensureCapacity() functions
mixes(SpriteBatch, require('./common').mixins)

mixes(SpriteBatch, {

    capacity: {
        get: function() {
            return this._capacity
        }
    },

    texture: {
        get: function() {
            return this._texture
        },

        set: function(tex) {
            this._texture = tex || this._defaultTexture
        }
    },

    dispose: function() {
        if (this.vertexBuffer)
            this.vertexBuffer.dispose()
        if (this.indexBuffer)
            this.indexBuffer.dispose()
        if (this.vao)
            this.vao.dispose()
    },

    clear: function() {
        this.idx = 0
        return this
    },

    bind: function(shader) {
        shader.bind()
        this.vao.bind(shader)
        this._bound = true
    },

    unbind: function() {
        this.vao.unbind()
        this._bound = false
    },

    defaults: function() {
        this.position = copy2(position, 0, 0)
        this.texcoord = copy4(texcoord, 0, 0, 1, 1)
        this.color = copy4(color, 1, 1, 1, 1)
        this.shape = copy2(shape, 0, 0)
        return this
    },

    push: function(sprite) {
        //if we are defining attributes on the fly
        if (sprite) {
            this.texture = sprite.texture
            this.position = sprite.position || copy2(position, 0, 0)
            this.texcoord = sprite.texcoord || copy4(texcoord, 0, 0, 1, 1)
            this.color = sprite.color || copy4(color, 1, 1, 1, 1)
            this.shape = sprite.shape || copy2(shape, 0, 0)
        }

        if (this.texture !== this._lastTexture) {
            //new texture, flush previous data
            if (this._bound)
                this.flush()
            this._lastTexture = this.texture
        } else if (this.idx === this.vertices.length) {
            //if we AREN'T bound, we need to stop pushing vertex data!
            if (!this._bound)
                return this

            //if we ARE bound, we can flush the batch and continue drawing
            this.flush()
        }

        this._dirty = true

        //get RGBA components and pack into a single float
        var colorRGBA = this.premultiplied ? premult(this.color, tmp4) : this.color
        var c = colorToFloat(colorRGBA)

        var u1 = this.texcoord[0],
            v1 = this.texcoord[1],
            u2 = this.texcoord[2],
            v2 = this.texcoord[3]

        var x = this.position[0],
            y = this.position[1],
            width = this.shape[0],
            height = this.shape[1]

        this._vert(x, y, u1, v1, c)
        this._vert(x+width, y, u2, v1, c)
        this._vert(x+width, y+height, u2, v2, c)
        this._vert(x, y+height, u1, v2, c)
        
        return this
    },

    _vert: function(x1, y1, u1, v1, c) {
        var idx = this.idx,
            verts = this.vertices,
            transform = this.transform

        if (transform) {
            var x = x1, y = y1
            x1 = transform[0] * x + transform[4] * y + transform[12]
            y1 = transform[1] * x + transform[5] * y + transform[13]
        }

        //xy
        verts[idx++] = x1
        verts[idx++] = y1
        //uv
        verts[idx++] = u1
        verts[idx++] = v1
        //color
        verts[idx++] = c
        this.idx = idx
    },

    flush: function() {
        this.draw()
        return this.clear()
    },

    draw: function() {
        //If we've reached a new texture or capacity
        //while not bound, then we will just clear the batch
        //to zero and draw nothing
        if (this.idx === 0 || !this._bound)
            return this

        var gl = this.gl
        
        if (this._dirty) {
            var view = this.vertices.subarray(0, this.idx)
            this.vertexBuffer.update(view, 0)
            this._dirty = false
        }

        if (this._lastTexture)
            this._lastTexture.bind()
        this._lastTexture = this.texture

        var sprites = (this.idx / (vertNumFloats * 4))
        if (sprites > 0)
            this.vao.draw(this.mode, sprites * 6, 0)
        return this
    },
})

module.exports = SpriteBatch

//TODO: will use modular gl-matrix for these...
function copy2(out, x, y) {
    out[0] = x
    out[1] = y
    return out
}

function copy4(out, x, y, z, w) {
    out[0] = x
    out[1] = y
    out[2] = z
    out[3] = w
    return out
}

function copyVec2(out, vec) {
    return copy2(out, vec[0], vec[1])
}

function transformMat4(out, a, m) {
    var x = a[0], 
        y = a[1]
    out[0] = m[0] * x + m[4] * y + m[12]
    out[1] = m[1] * x + m[5] * y + m[13]
    return out
}
},{"./common":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/common.js","./pack-rgba-float":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/pack-rgba-float.js","gl-white-texture":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/index.js","mixes":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/mixes/index.js","premultiplied-rgba":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/premultiplied-rgba/index.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/index.js":[function(require,module,exports){
var createVAOEmulated = require("./lib/vao-emulated.js")

function createVAO(gl, attributes, elements, elementsType) {
  var vao = createVAOEmulated(gl)
  vao.update(attributes, elements, elementsType)
  return vao
}

module.exports = createVAO
},{"./lib/vao-emulated.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/lib/vao-emulated.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/lib/do-bind.js":[function(require,module,exports){
function getAttributeLocation(name, shader) {
    if (!name)
        return null
    var attr = shader.attributes
    if (attr[name]) 
        return attr[name].location
    return null
}

var nattribs = null
var bound = null

function doBind(gl, elements, attributes, shader) {
    if (elements) {
        elements.bind()
    } else {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)
    }
    if (nattribs === null) {
      nattribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS) | 0
      bound = new Array(nattribs)
    }

    if (attributes) {
        if (attributes.length > nattribs) {
            throw new Error("gl-vao: Too many vertex attributes")
        }

        var lastBound = null

        for (i=0; i<nattribs; i++)
          bound[i] = false

        //now bind aliased attributes
        for (i=0; i<attributes.length; i++) {
            var attrib = attributes[i]
            var loc = getAttributeLocation(attrib.name, shader)
            if (loc === null)
                continue

            bound[loc] = true

            if(attrib.buffer) {
              var buffer = attrib.buffer
              var size = attrib.size || 4
              var type = attrib.type || gl.FLOAT
              var normalized = !!attrib.normalized
              var stride = attrib.stride || 0
              var offset = attrib.offset || 0
              if (lastBound !== buffer) {
                buffer.bind()
                lastBound = buffer
              }
              gl.enableVertexAttribArray(loc)
              gl.vertexAttribPointer(loc, size, type, normalized, stride, offset)
            } else {
              if(typeof attrib === "number") {
                gl.vertexAttrib1f(loc, attrib)
              } else if(attrib.length === 1) {
                gl.vertexAttrib1f(loc, attrib[0])
              } else if(attrib.length === 2) {
                gl.vertexAttrib2f(loc, attrib[0], attrib[1])
              } else if(attrib.length === 3) {
                gl.vertexAttrib3f(loc, attrib[0], attrib[1], attrib[2])
              } else if(attrib.length === 4) {
                gl.vertexAttrib4f(loc, attrib[0], attrib[1], attrib[2], attrib[3])
              } else {
                throw new Error("gl-vao: Invalid vertex attribute")
              }
              gl.disableVertexAttribArray(loc)
            }

        }
        
        for (i=0; i<nattribs; i++) {
          if (!bound[i])
            gl.disableVertexAttribArray(i)
        }
    } else {
      gl.bindBuffer(gl.ARRAY_BUFFER, null)
      for(var i=0; i<nattribs; ++i) {
        gl.disableVertexAttribArray(i)
      }
    }
}

module.exports = doBind
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/lib/vao-emulated.js":[function(require,module,exports){
var bindAttribs = require("./do-bind.js")

function VAOEmulated(gl) {
  this.gl = gl
  this._elements = null
  this._attributes = null
  this._elementsType = gl.UNSIGNED_SHORT
}

VAOEmulated.prototype.bind = function(shader) {
  if (!shader)
    throw new Error('must associate shader with vertex array')
  bindAttribs(this.gl, this._elements, this._attributes, shader)
}

VAOEmulated.prototype.update = function(attributes, elements, elementsType) {
  this._elements = elements
  this._attributes = attributes
  this._elementsType = elementsType || this.gl.UNSIGNED_SHORT
}

VAOEmulated.prototype.dispose = function() { }
VAOEmulated.prototype.unbind = function() {
  bindAttribs(this.gl)
}

VAOEmulated.prototype.draw = function(mode, count, offset) {
  offset = offset || 0
  var gl = this.gl
  if(this._elements) {
    gl.drawElements(mode, count, this._elementsType, offset)
  } else {
    gl.drawArrays(mode, offset, count)
  }
}

function createVAOEmulated(gl) {
  return new VAOEmulated(gl)
}

module.exports = createVAOEmulated
},{"./do-bind.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/lib/do-bind.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/buffer.js":[function(require,module,exports){
"use strict"

var pool = require("typedarray-pool")
var ops = require("ndarray-ops")
var ndarray = require("ndarray")
var webglew = require("webglew")

var SUPPORTED_TYPES = [
  "uint8",
  "uint8_clamped",
  "uint16",
  "uint32",
  "int8",
  "int16",
  "int32",
  "float32" ]

function GLBuffer(gl, type, handle, length, usage) {
  this.gl = gl
  this.type = type
  this.handle = handle
  this.length = length
  this.usage = usage
}

var proto = GLBuffer.prototype

proto.bind = function() {
  this.gl.bindBuffer(this.type, this.handle)
}

proto.dispose = function() {
  this.gl.deleteBuffer(this.handle)
}

function updateTypeArray(gl, type, len, usage, data, offset) {
  var dataLen = data.length * data.BYTES_PER_ELEMENT 
  if(offset < 0) {
    gl.bufferData(type, data, usage)
    return dataLen
  }
  if(dataLen + offset > len) {
    throw new Error("gl-buffer: If resizing buffer, must not specify offset")
  }
  gl.bufferSubData(type, offset, data)
  return len
}

function makeScratchTypeArray(array, dtype) {
  var res = pool.malloc(array.length, dtype)
  var n = array.length
  for(var i=0; i<n; ++i) {
    res[i] = array[i]
  }
  return res
}

function isPacked(shape, stride) {
  var n = 1
  for(var i=stride.length-1; i>=0; --i) {
    if(stride[i] !== n) {
      return false
    }
    n *= shape[i]
  }
  return true
}

proto.update = function(array, offset) {
  if(typeof offset !== "number") {
    offset = -1
  }
  this.bind()
  if(typeof array === "object" && typeof array.shape !== "undefined") { //ndarray
    var dtype = array.dtype
    if(SUPPORTED_TYPES.indexOf(dtype) < 0) {
      dtype = "float32"
    }
    if(this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
      var wgl = webglew(this.gl)
      var ext = wgl.OES_element_index_uint
      if(ext && dtype !== "uint16") {
        dtype = "uint32"
      } else {
        dtype = "uint16"
      }
    }
    if(dtype === array.dtype && isPacked(array.shape, array.stride)) {
      if(array.offset === 0 && array.data.length === array.shape[0]) {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array.data, offset)
      } else {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array.data.subarray(array.offset, array.shape[0]), offset)
      }
    } else {
      var tmp = pool.malloc(array.size, dtype)
      var ndt = ndarray(tmp, array.shape)
      ops.assign(ndt, array)
      if(offset < 0) {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, tmp, offset)  
      } else {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, tmp.subarray(0, array.size), offset)  
      }
      pool.free(tmp)
    }
  } else if(Array.isArray(array)) { //Vanilla array
    var t
    if(this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
      t = makeScratchTypeArray(array, "uint16")
    } else {
      t = makeScratchTypeArray(array, "float32")
    }
    if(offset < 0) {
      this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, t, offset)
    } else {
      this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, t.subarray(0, array.length), offset)
    }
    pool.free(t)
  } else if(typeof array === "object" && typeof array.length === "number") { //Typed array
    this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array, offset)
  } else if(typeof array === "number" || array === undefined) { //Number/default
    if(offset >= 0) {
      throw new Error("gl-buffer: Cannot specify offset when resizing buffer")
    }
    array = array | 0
    if(array <= 0) {
      array = 1
    }
    this.gl.bufferData(this.type, array|0, this.usage)
    this.length = array
  } else { //Error, case should not happen
    throw new Error("gl-buffer: Invalid data type")
  }
}

function createBuffer(gl, data, type, usage) {
  webglew(gl)
  type = type || gl.ARRAY_BUFFER
  usage = usage || gl.DYNAMIC_DRAW
  if(type !== gl.ARRAY_BUFFER && type !== gl.ELEMENT_ARRAY_BUFFER) {
    throw new Error("gl-buffer: Invalid type for webgl buffer, must be either gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER")
  }
  if(usage !== gl.DYNAMIC_DRAW && usage !== gl.STATIC_DRAW && usage !== gl.STREAM_DRAW) {
    throw new Error("gl-buffer: Invalid usage for buffer, must be either gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW")
  }
  var handle = gl.createBuffer()
  var result = new GLBuffer(gl, type, handle, 0, usage)
  result.update(data)
  return result
}

module.exports = createBuffer
},{"ndarray":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/ndarray/ndarray.js","ndarray-ops":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/ndarray-ops.js","typedarray-pool":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/typedarray-pool/pool.js","webglew":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/webglew/webglew.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/ndarray-ops.js":[function(require,module,exports){
"use strict"

var compile = require("cwise-compiler")

var EmptyProc = {
  body: "",
  args: [],
  thisVars: [],
  localVars: []
}

function fixup(x) {
  if(!x) {
    return EmptyProc
  }
  for(var i=0; i<x.args.length; ++i) {
    var a = x.args[i]
    if(i === 0) {
      x.args[i] = {name: a, lvalue:true, rvalue: !!x.rvalue, count:x.count||1 }
    } else {
      x.args[i] = {name: a, lvalue:false, rvalue:true, count: 1}
    }
  }
  if(!x.thisVars) {
    x.thisVars = []
  }
  if(!x.localVars) {
    x.localVars = []
  }
  return x
}

function pcompile(user_args) {
  return compile({
    args:     user_args.args,
    pre:      fixup(user_args.pre),
    body:     fixup(user_args.body),
    post:     fixup(user_args.proc),
    funcName: user_args.funcName
  })
}

function makeOp(user_args) {
  var args = []
  for(var i=0; i<user_args.args.length; ++i) {
    args.push("a"+i)
  }
  var wrapper = new Function("P", [
    "return function ", user_args.funcName, "_ndarrayops(", args.join(","), ") {P(", args.join(","), ");return a0}"
  ].join(""))
  return wrapper(pcompile(user_args))
}

var assign_ops = {
  add:  "+",
  sub:  "-",
  mul:  "*",
  div:  "/",
  mod:  "%",
  band: "&",
  bor:  "|",
  bxor: "^",
  lshift: "<<",
  rshift: ">>",
  rrshift: ">>>"
}
;(function(){
  for(var id in assign_ops) {
    var op = assign_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a","b","c"],
             body: "a=b"+op+"c"},
      funcName: id
    })
    exports[id+"eq"] = makeOp({
      args: ["array","array"],
      body: {args:["a","b"],
             body:"a"+op+"=b"},
      rvalue: true,
      funcName: id+"eq"
    })
    exports[id+"s"] = makeOp({
      args: ["array", "array", "scalar"],
      body: {args:["a","b","s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"seq"] = makeOp({
      args: ["array","scalar"],
      body: {args:["a","s"],
             body:"a"+op+"=s"},
      rvalue: true,
      funcName: id+"seq"
    })
  }
})();

var unary_ops = {
  not: "!",
  bnot: "~",
  neg: "-",
  recip: "1.0/"
}
;(function(){
  for(var id in unary_ops) {
    var op = unary_ops[id]
    exports[id] = makeOp({
      args: ["array", "array"],
      body: {args:["a","b"],
             body:"a="+op+"b"},
      funcName: id
    })
    exports[id+"eq"] = makeOp({
      args: ["array"],
      body: {args:["a"],
             body:"a="+op+"a"},
      rvalue: true,
      count: 2,
      funcName: id+"eq"
    })
  }
})();

var binary_ops = {
  and: "&&",
  or: "||",
  eq: "===",
  neq: "!==",
  lt: "<",
  gt: ">",
  leq: "<=",
  geq: ">="
}
;(function() {
  for(var id in binary_ops) {
    var op = binary_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a", "b", "c"],
             body:"a=b"+op+"c"},
      funcName: id
    })
    exports[id+"s"] = makeOp({
      args: ["array","array","scalar"],
      body: {args:["a", "b", "s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"eq"] = makeOp({
      args: ["array", "array"],
      body: {args:["a", "b"],
             body:"a=a"+op+"b"},
      rvalue:true,
      count:2,
      funcName: id+"eq"
    })
    exports[id+"seq"] = makeOp({
      args: ["array", "scalar"],
      body: {args:["a","s"],
             body:"a=a"+op+"s"},
      rvalue:true,
      count:2,
      funcName: id+"seq"
    })
  }
})();

var math_unary = [
  "abs",
  "acos",
  "asin",
  "atan",
  "ceil",
  "cos",
  "exp",
  "floor",
  "log",
  "round",
  "sin",
  "sqrt",
  "tan"
]
;(function() {
  for(var i=0; i<math_unary.length; ++i) {
    var f = math_unary[i]
    exports[f] = makeOp({
                    args: ["array", "array"],
                    pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                    body: {args:["a","b"], body:"a=this_f(b)", thisVars:["this_f"]},
                    funcName: f
                  })
    exports[f+"eq"] = makeOp({
                      args: ["array"],
                      pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                      body: {args: ["a"], body:"a=this_f(a)", thisVars:["this_f"]},
                      rvalue: true,
                      count: 2,
                      funcName: f+"eq"
                    })
  }
})();

var math_comm = [
  "max",
  "min",
  "atan2",
  "pow"
]
;(function(){
  for(var i=0; i<math_comm.length; ++i) {
    var f= math_comm[i]
    exports[f] = makeOp({
                  args:["array", "array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
                  funcName: f
                })
    exports[f+"s"] = makeOp({
                  args:["array", "array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
                  funcName: f+"s"
                  })
    exports[f+"eq"] = makeOp({ args:["array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
                  rvalue: true,
                  count: 2,
                  funcName: f+"eq"
                  })
    exports[f+"seq"] = makeOp({ args:["array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
                  rvalue:true,
                  count:2,
                  funcName: f+"seq"
                  })
  }
})();

var math_noncomm = [
  "atan2",
  "pow"
]
;(function(){
  for(var i=0; i<math_noncomm.length; ++i) {
    var f= math_noncomm[i]
    exports[f+"op"] = makeOp({
                  args:["array", "array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
                  funcName: f+"op"
                })
    exports[f+"ops"] = makeOp({
                  args:["array", "array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
                  funcName: f+"ops"
                  })
    exports[f+"opeq"] = makeOp({ args:["array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
                  rvalue: true,
                  count: 2,
                  funcName: f+"opeq"
                  })
    exports[f+"opseq"] = makeOp({ args:["array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
                  rvalue:true,
                  count:2,
                  funcName: f+"opseq"
                  })
  }
})();

exports.any = compile({
  args:["array"],
  pre: EmptyProc,
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "if(a){return true}", localVars: [], thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return false"},
  funcName: "any"
})

exports.all = compile({
  args:["array"],
  pre: EmptyProc,
  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1}], body: "if(!x){return false}", localVars: [], thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return true"},
  funcName: "all"
})

exports.sum = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s+=a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "sum"
})

exports.prod = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=1"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s*=a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "prod"
})

exports.norm2squared = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norm2squared"
})
  
exports.norm2 = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return Math.sqrt(this_s)"},
  funcName: "norm2"
})
  

exports.norminf = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:4}], body:"if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norminf"
})

exports.norm1 = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:3}], body: "this_s+=a<0?-a:a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norm1"
})

exports.sup = compile({
  args: [ "array" ],
  pre:
   { body: "this_h=-Infinity",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] },
  body:
   { body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
     thisVars: [ "this_h" ],
     localVars: [] },
  post:
   { body: "return this_h",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] }
 })

exports.inf = compile({
  args: [ "array" ],
  pre:
   { body: "this_h=Infinity",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] },
  body:
   { body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
     thisVars: [ "this_h" ],
     localVars: [] },
  post:
   { body: "return this_h",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] }
 })

exports.argmin = compile({
  args:["index","array","shape"],
  pre:{
    body:"{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
    args:[
      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
      ],
    thisVars:["this_i","this_v"],
    localVars:[]},
  body:{
    body:"{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
    args:[
      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
    thisVars:["this_i","this_v"],
    localVars:["_inline_1_k"]},
  post:{
    body:"{return this_i}",
    args:[],
    thisVars:["this_i"],
    localVars:[]}
})

exports.argmax = compile({
  args:["index","array","shape"],
  pre:{
    body:"{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
    args:[
      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
      ],
    thisVars:["this_i","this_v"],
    localVars:[]},
  body:{
    body:"{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
    args:[
      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
    thisVars:["this_i","this_v"],
    localVars:["_inline_1_k"]},
  post:{
    body:"{return this_i}",
    args:[],
    thisVars:["this_i"],
    localVars:[]}
})  

exports.random = makeOp({
  args: ["array"],
  pre: {args:[], body:"this_f=Math.random", thisVars:["this_f"]},
  body: {args: ["a"], body:"a=this_f()", thisVars:["this_f"]},
  funcName: "random"
})

exports.assign = makeOp({
  args:["array", "array"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assign" })

exports.assigns = makeOp({
  args:["array", "scalar"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assigns" })


exports.equals = compile({
  args:["array", "array"],
  pre: EmptyProc,
  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1},
               {name:"y", lvalue:false, rvalue:true, count:1}], 
        body: "if(x!==y){return false}", 
        localVars: [], 
        thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return true"},
  funcName: "equals"
})



},{"cwise-compiler":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/node_modules/cwise-compiler/compiler.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/node_modules/cwise-compiler/compiler.js":[function(require,module,exports){
"use strict"

var createThunk = require("./lib/thunk.js")

function Procedure() {
  this.argTypes = []
  this.shimArgs = []
  this.arrayArgs = []
  this.scalarArgs = []
  this.offsetArgs = []
  this.offsetArgIndex = []
  this.indexArgs = []
  this.shapeArgs = []
  this.funcName = ""
  this.pre = null
  this.body = null
  this.post = null
  this.debug = false
}

function compileCwise(user_args) {
  //Create procedure
  var proc = new Procedure()
  
  //Parse blocks
  proc.pre    = user_args.pre
  proc.body   = user_args.body
  proc.post   = user_args.post

  //Parse arguments
  var proc_args = user_args.args.slice(0)
  proc.argTypes = proc_args
  for(var i=0; i<proc_args.length; ++i) {
    var arg_type = proc_args[i]
    if(arg_type === "array") {
      proc.arrayArgs.push(i)
      proc.shimArgs.push("array" + i)
      if(i < proc.pre.args.length && proc.pre.args[i].count>0) {
        throw new Error("cwise: pre() block may not reference array args")
      }
      if(i < proc.post.args.length && proc.post.args[i].count>0) {
        throw new Error("cwise: post() block may not reference array args")
      }
    } else if(arg_type === "scalar") {
      proc.scalarArgs.push(i)
      proc.shimArgs.push("scalar" + i)
    } else if(arg_type === "index") {
      proc.indexArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].count > 0) {
        throw new Error("cwise: pre() block may not reference array index")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array index")
      }
      if(i < proc.post.args.length && proc.post.args[i].count > 0) {
        throw new Error("cwise: post() block may not reference array index")
      }
    } else if(arg_type === "shape") {
      proc.shapeArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].lvalue) {
        throw new Error("cwise: pre() block may not write to array shape")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array shape")
      }
      if(i < proc.post.args.length && proc.post.args[i].lvalue) {
        throw new Error("cwise: post() block may not write to array shape")
      }
    } else if(typeof arg_type === "object" && arg_type.offset) {
      proc.argTypes[i] = "offset"
      proc.offsetArgs.push({ array: arg_type.array, offset:arg_type.offset })
      proc.offsetArgIndex.push(i)
    } else {
      throw new Error("cwise: Unknown argument type " + proc_args[i])
    }
  }
  
  //Make sure at least one array argument was specified
  if(proc.arrayArgs.length <= 0) {
    throw new Error("cwise: No array arguments specified")
  }
  
  //Make sure arguments are correct
  if(proc.pre.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in pre() block")
  }
  if(proc.body.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in body() block")
  }
  if(proc.post.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in post() block")
  }

  //Check debug flag
  proc.debug = !!user_args.printCode || !!user_args.debug
  
  //Retrieve name
  proc.funcName = user_args.funcName || "cwise"
  
  //Read in block size
  proc.blockSize = user_args.blockSize || 64

  return createThunk(proc)
}

module.exports = compileCwise

},{"./lib/thunk.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/node_modules/cwise-compiler/lib/thunk.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/node_modules/cwise-compiler/lib/compile.js":[function(require,module,exports){
"use strict"

var uniq = require("uniq")

function innerFill(order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , has_index = proc.indexArgs.length>0
    , code = []
    , vars = []
    , idx=0, pidx=0, i, j
  for(i=0; i<dimension; ++i) {
    vars.push(["i",i,"=0"].join(""))
  }
  //Compute scan deltas
  for(j=0; j<nargs; ++j) {
    for(i=0; i<dimension; ++i) {
      pidx = idx
      idx = order[i]
      if(i === 0) {
        vars.push(["d",j,"s",i,"=t",j,"p",idx].join(""))
      } else {
        vars.push(["d",j,"s",i,"=(t",j,"p",idx,"-s",pidx,"*t",j,"p",pidx,")"].join(""))
      }
    }
  }
  code.push("var " + vars.join(","))
  //Scan loop
  for(i=dimension-1; i>=0; --i) {
    idx = order[i]
    code.push(["for(i",i,"=0;i",i,"<s",idx,";++i",i,"){"].join(""))
  }
  //Push body of inner loop
  code.push(body)
  //Advance scan pointers
  for(i=0; i<dimension; ++i) {
    pidx = idx
    idx = order[i]
    for(j=0; j<nargs; ++j) {
      code.push(["p",j,"+=d",j,"s",i].join(""))
    }
    if(has_index) {
      if(i > 0) {
        code.push(["index[",pidx,"]-=s",pidx].join(""))
      }
      code.push(["++index[",idx,"]"].join(""))
    }
    code.push("}")
  }
  return code.join("\n")
}

function outerFill(matched, order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , blockSize = proc.blockSize
    , has_index = proc.indexArgs.length > 0
    , code = []
  for(var i=0; i<nargs; ++i) {
    code.push(["var offset",i,"=p",i].join(""))
  }
  //Generate matched loops
  for(var i=matched; i<dimension; ++i) {
    code.push(["for(var j"+i+"=SS[", order[i], "]|0;j", i, ">0;){"].join(""))
    code.push(["if(j",i,"<",blockSize,"){"].join(""))
    code.push(["s",order[i],"=j",i].join(""))
    code.push(["j",i,"=0"].join(""))
    code.push(["}else{s",order[i],"=",blockSize].join(""))
    code.push(["j",i,"-=",blockSize,"}"].join(""))
    if(has_index) {
      code.push(["index[",order[i],"]=j",i].join(""))
    }
  }
  for(var i=0; i<nargs; ++i) {
    var indexStr = ["offset"+i]
    for(var j=matched; j<dimension; ++j) {
      indexStr.push(["j",j,"*t",i,"p",order[j]].join(""))
    }
    code.push(["p",i,"=(",indexStr.join("+"),")"].join(""))
  }
  code.push(innerFill(order, proc, body))
  for(var i=matched; i<dimension; ++i) {
    code.push("}")
  }
  return code.join("\n")
}

//Count the number of compatible inner orders
function countMatches(orders) {
  var matched = 0, dimension = orders[0].length
  while(matched < dimension) {
    for(var j=1; j<orders.length; ++j) {
      if(orders[j][matched] !== orders[0][matched]) {
        return matched
      }
    }
    ++matched
  }
  return matched
}

//Processes a block according to the given data types
function processBlock(block, proc, dtypes) {
  var code = block.body
  var pre = []
  var post = []
  for(var i=0; i<block.args.length; ++i) {
    var carg = block.args[i]
    if(carg.count <= 0) {
      continue
    }
    var re = new RegExp(carg.name, "g")
    var ptrStr = ""
    var arrNum = proc.arrayArgs.indexOf(i)
    switch(proc.argTypes[i]) {
      case "offset":
        var offArgIndex = proc.offsetArgIndex.indexOf(i)
        var offArg = proc.offsetArgs[offArgIndex]
        arrNum = offArg.array
        ptrStr = "+q" + offArgIndex
      case "array":
        ptrStr = "p" + arrNum + ptrStr
        var localStr = "l" + i
        var arrStr = "a" + arrNum
        if(carg.count === 1) {
          if(dtypes[arrNum] === "generic") {
            if(carg.lvalue) {
              pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join(""))
              code = code.replace(re, localStr)
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            } else {
              code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
            }
          } else {
            code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
          }
        } else if(dtypes[arrNum] === "generic") {
          pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join(""))
          code = code.replace(re, localStr)
          if(carg.lvalue) {
            post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
          }
        } else {
          pre.push(["var ", localStr, "=", arrStr, "[", ptrStr, "]"].join(""))
          code = code.replace(re, localStr)
          if(carg.lvalue) {
            post.push([arrStr, "[", ptrStr, "]=", localStr].join(""))
          }
        }
      break
      case "scalar":
        code = code.replace(re, "Y" + proc.scalarArgs.indexOf(i))
      break
      case "index":
        code = code.replace(re, "index")
      break
      case "shape":
        code = code.replace(re, "shape")
      break
    }
  }
  return [pre.join("\n"), code, post.join("\n")].join("\n").trim()
}

function typeSummary(dtypes) {
  var summary = new Array(dtypes.length)
  var allEqual = true
  for(var i=0; i<dtypes.length; ++i) {
    var t = dtypes[i]
    var digits = t.match(/\d+/)
    if(!digits) {
      digits = ""
    } else {
      digits = digits[0]
    }
    if(t.charAt(0) === 0) {
      summary[i] = "u" + t.charAt(1) + digits
    } else {
      summary[i] = t.charAt(0) + digits
    }
    if(i > 0) {
      allEqual = allEqual && summary[i] === summary[i-1]
    }
  }
  if(allEqual) {
    return summary[0]
  }
  return summary.join("")
}

//Generates a cwise operator
function generateCWiseOp(proc, typesig) {

  //Compute dimension
  var dimension = typesig[1].length|0
  var orders = new Array(proc.arrayArgs.length)
  var dtypes = new Array(proc.arrayArgs.length)

  //First create arguments for procedure
  var arglist = ["SS"]
  var code = ["'use strict'"]
  var vars = []
  
  for(var j=0; j<dimension; ++j) {
    vars.push(["s", j, "=SS[", j, "]"].join(""))
  }
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    arglist.push("a"+i)
    arglist.push("t"+i)
    arglist.push("p"+i)
    dtypes[i] = typesig[2*i]
    orders[i] = typesig[2*i+1]
    
    for(var j=0; j<dimension; ++j) {
      vars.push(["t",i,"p",j,"=t",i,"[",j,"]"].join(""))
    }
  }
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    arglist.push("Y" + i)
  }
  if(proc.shapeArgs.length > 0) {
    vars.push("shape=SS.slice(0)")
  }
  if(proc.indexArgs.length > 0) {
    var zeros = new Array(dimension)
    for(var i=0; i<dimension; ++i) {
      zeros[i] = "0"
    }
    vars.push(["index=[", zeros.join(","), "]"].join(""))
  }
  for(var i=0; i<proc.offsetArgs.length; ++i) {
    var off_arg = proc.offsetArgs[i]
    var init_string = []
    for(var j=0; j<off_arg.offset.length; ++j) {
      if(off_arg.offset[j] === 0) {
        continue
      } else if(off_arg.offset[j] === 1) {
        init_string.push(["t", off_arg.array, "p", j].join(""))      
      } else {
        init_string.push([off_arg.offset[j], "*t", off_arg.array, "p", j].join(""))
      }
    }
    if(init_string.length === 0) {
      vars.push("q" + i + "=0")
    } else {
      vars.push(["q", i, "=", init_string.join("+")].join(""))
    }
  }

  //Prepare this variables
  var thisVars = uniq([].concat(proc.pre.thisVars)
                      .concat(proc.body.thisVars)
                      .concat(proc.post.thisVars))
  vars = vars.concat(thisVars)
  code.push("var " + vars.join(","))
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    code.push("p"+i+"|=0")
  }
  
  //Inline prelude
  if(proc.pre.body.length > 3) {
    code.push(processBlock(proc.pre, proc, dtypes))
  }

  //Process body
  var body = processBlock(proc.body, proc, dtypes)
  var matched = countMatches(orders)
  if(matched < dimension) {
    code.push(outerFill(matched, orders[0], proc, body))
  } else {
    code.push(innerFill(orders[0], proc, body))
  }

  //Inline epilog
  if(proc.post.body.length > 3) {
    code.push(processBlock(proc.post, proc, dtypes))
  }
  
  if(proc.debug) {
    console.log("Generated cwise routine for ", typesig, ":\n\n", code.join("\n"))
  }
  
  var loopName = [(proc.funcName||"unnamed"), "_cwise_loop_", orders[0].join("s"),"m",matched,typeSummary(dtypes)].join("")
  var f = new Function(["function ",loopName,"(", arglist.join(","),"){", code.join("\n"),"} return ", loopName].join(""))
  return f()
}
module.exports = generateCWiseOp
},{"uniq":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/node_modules/cwise-compiler/node_modules/uniq/uniq.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/node_modules/cwise-compiler/lib/thunk.js":[function(require,module,exports){
"use strict"

var compile = require("./compile.js")

function createThunk(proc) {
  var code = ["'use strict'", "var CACHED={}"]
  var vars = []
  var thunkName = proc.funcName + "_cwise_thunk"
  
  //Build thunk
  code.push(["return function ", thunkName, "(", proc.shimArgs.join(","), "){"].join(""))
  var typesig = []
  var string_typesig = []
  var proc_args = [["array",proc.arrayArgs[0],".shape"].join("")]
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    var j = proc.arrayArgs[i]
    vars.push(["t", j, "=array", j, ".dtype,",
               "r", j, "=array", j, ".order"].join(""))
    typesig.push("t" + j)
    typesig.push("r" + j)
    string_typesig.push("t"+j)
    string_typesig.push("r"+j+".join()")
    proc_args.push("array" + j + ".data")
    proc_args.push("array" + j + ".stride")
    proc_args.push("array" + j + ".offset|0")
  }
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    proc_args.push("scalar" + proc.scalarArgs[i])
  }
  vars.push(["type=[", string_typesig.join(","), "].join()"].join(""))
  vars.push("proc=CACHED[type]")
  code.push("var " + vars.join(","))
  
  code.push(["if(!proc){",
             "CACHED[type]=proc=compile([", typesig.join(","), "])}",
             "return proc(", proc_args.join(","), ")}"].join(""))

  if(proc.debug) {
    console.log("Generated thunk:", code.join("\n"))
  }
  
  //Compile thunk
  var thunk = new Function("compile", code.join("\n"))
  return thunk(compile.bind(undefined, proc))
}

module.exports = createThunk

},{"./compile.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/node_modules/cwise-compiler/lib/compile.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/node_modules/cwise-compiler/node_modules/uniq/uniq.js":[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/typedarray-pool/node_modules/bit-twiddle/twiddle.js":[function(require,module,exports){
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

"use strict"; "use restrict";

//Number of bits in an integer
var INT_BITS = 32;

//Constants
exports.INT_BITS  = INT_BITS;
exports.INT_MAX   =  0x7fffffff;
exports.INT_MIN   = -1<<(INT_BITS-1);

//Returns -1, 0, +1 depending on sign of x
exports.sign = function(v) {
  return (v > 0) - (v < 0);
}

//Computes absolute value of integer
exports.abs = function(v) {
  var mask = v >> (INT_BITS-1);
  return (v ^ mask) - mask;
}

//Computes minimum of integers x and y
exports.min = function(x, y) {
  return y ^ ((x ^ y) & -(x < y));
}

//Computes maximum of integers x and y
exports.max = function(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

//Checks if a number is a power of two
exports.isPow2 = function(v) {
  return !(v & (v-1)) && (!!v);
}

//Computes log base 2 of v
exports.log2 = function(v) {
  var r, shift;
  r =     (v > 0xFFFF) << 4; v >>>= r;
  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
  return r | (v >> 1);
}

//Computes log base 10 of v
exports.log10 = function(v) {
  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
}

//Counts number of bits
exports.popCount = function(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function(v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}

//Rounds down to previous power of 2
exports.prevPow2 = function(v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v>>>1);
}

//Computes parity of word
exports.parity = function(v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return (0x6996 >>> v) & 1;
}

var REVERSE_TABLE = new Array(256);

(function(tab) {
  for(var i=0; i<256; ++i) {
    var v = i, r = i, s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = (r << s) & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function(v) {
  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
           REVERSE_TABLE[(v >>> 24) & 0xff];
}

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function(x, y) {
  x &= 0xFFFF;
  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y &= 0xFFFF;
  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

//Extracts the nth interleaved component
exports.deinterleave2 = function(v, n) {
  v = (v >>> n) & 0x55555555;
  v = (v | (v >>> 1))  & 0x33333333;
  v = (v | (v >>> 2))  & 0x0F0F0F0F;
  v = (v | (v >>> 4))  & 0x00FF00FF;
  v = (v | (v >>> 16)) & 0x000FFFF;
  return (v << 16) >> 16;
}


//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function(x, y, z) {
  x &= 0x3FF;
  x  = (x | (x<<16)) & 4278190335;
  x  = (x | (x<<8))  & 251719695;
  x  = (x | (x<<4))  & 3272356035;
  x  = (x | (x<<2))  & 1227133513;

  y &= 0x3FF;
  y  = (y | (y<<16)) & 4278190335;
  y  = (y | (y<<8))  & 251719695;
  y  = (y | (y<<4))  & 3272356035;
  y  = (y | (y<<2))  & 1227133513;
  x |= (y << 1);
  
  z &= 0x3FF;
  z  = (z | (z<<16)) & 4278190335;
  z  = (z | (z<<8))  & 251719695;
  z  = (z | (z<<4))  & 3272356035;
  z  = (z | (z<<2))  & 1227133513;
  
  return x | (z << 2);
}

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function(v, n) {
  v = (v >>> n)       & 1227133513;
  v = (v | (v>>>2))   & 3272356035;
  v = (v | (v>>>4))   & 251719695;
  v = (v | (v>>>8))   & 4278190335;
  v = (v | (v>>>16))  & 0x3FF;
  return (v<<22)>>22;
}

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function(v) {
  var t = v | (v - 1);
  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
}


},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/typedarray-pool/node_modules/dup/dup.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/node_modules/dup/dup.js")
},{"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/node_modules/dup/dup.js":"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/node_modules/dup/dup.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/typedarray-pool/pool.js":[function(require,module,exports){
(function (global,Buffer){
'use strict'

var bits = require('bit-twiddle')
var dup = require('dup')

//Legacy pool support
if(!global.__TYPEDARRAY_POOL) {
  global.__TYPEDARRAY_POOL = {
      UINT8   : dup([32, 0])
    , UINT16  : dup([32, 0])
    , UINT32  : dup([32, 0])
    , INT8    : dup([32, 0])
    , INT16   : dup([32, 0])
    , INT32   : dup([32, 0])
    , FLOAT   : dup([32, 0])
    , DOUBLE  : dup([32, 0])
    , DATA    : dup([32, 0])
    , UINT8C  : dup([32, 0])
    , BUFFER  : dup([32, 0])
  }
}

var hasUint8C = (typeof Uint8ClampedArray) !== 'undefined'
var POOL = global.__TYPEDARRAY_POOL

//Upgrade pool
if(!POOL.UINT8C) {
  POOL.UINT8C = dup([32, 0])
}
if(!POOL.BUFFER) {
  POOL.BUFFER = dup([32, 0])
}

//New technique: Only allocate from ArrayBufferView and Buffer
var DATA    = POOL.DATA
  , BUFFER  = POOL.BUFFER

exports.free = function free(array) {
  if(Buffer.isBuffer(array)) {
    BUFFER[bits.log2(array.length)].push(array)
  } else {
    if(Object.prototype.toString.call(array) !== '[object ArrayBuffer]') {
      array = array.buffer
    }
    if(!array) {
      return
    }
    var n = array.length || array.byteLength
    var log_n = bits.log2(n)|0
    DATA[log_n].push(array)
  }
}

function freeArrayBuffer(buffer) {
  if(!buffer) {
    return
  }
  var n = buffer.length || buffer.byteLength
  var log_n = bits.log2(n)
  DATA[log_n].push(buffer)
}

function freeTypedArray(array) {
  freeArrayBuffer(array.buffer)
}

exports.freeUint8 =
exports.freeUint16 =
exports.freeUint32 =
exports.freeInt8 =
exports.freeInt16 =
exports.freeInt32 =
exports.freeFloat32 = 
exports.freeFloat =
exports.freeFloat64 = 
exports.freeDouble = 
exports.freeUint8Clamped = 
exports.freeDataView = freeTypedArray

exports.freeArrayBuffer = freeArrayBuffer

exports.freeBuffer = function freeBuffer(array) {
  BUFFER[bits.log2(array.length)].push(array)
}

exports.malloc = function malloc(n, dtype) {
  if(dtype === undefined || dtype === 'arraybuffer') {
    return mallocArrayBuffer(n)
  } else {
    switch(dtype) {
      case 'uint8':
        return mallocUint8(n)
      case 'uint16':
        return mallocUint16(n)
      case 'uint32':
        return mallocUint32(n)
      case 'int8':
        return mallocInt8(n)
      case 'int16':
        return mallocInt16(n)
      case 'int32':
        return mallocInt32(n)
      case 'float':
      case 'float32':
        return mallocFloat(n)
      case 'double':
      case 'float64':
        return mallocDouble(n)
      case 'uint8_clamped':
        return mallocUint8Clamped(n)
      case 'buffer':
        return mallocBuffer(n)
      case 'data':
      case 'dataview':
        return mallocDataView(n)

      default:
        return null
    }
  }
  return null
}

function mallocArrayBuffer(n) {
  var n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var d = DATA[log_n]
  if(d.length > 0) {
    return d.pop()
  }
  return new ArrayBuffer(n)
}
exports.mallocArrayBuffer = mallocArrayBuffer

function mallocUint8(n) {
  return new Uint8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocUint8 = mallocUint8

function mallocUint16(n) {
  return new Uint16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocUint16 = mallocUint16

function mallocUint32(n) {
  return new Uint32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocUint32 = mallocUint32

function mallocInt8(n) {
  return new Int8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocInt8 = mallocInt8

function mallocInt16(n) {
  return new Int16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocInt16 = mallocInt16

function mallocInt32(n) {
  return new Int32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocInt32 = mallocInt32

function mallocFloat(n) {
  return new Float32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocFloat32 = exports.mallocFloat = mallocFloat

function mallocDouble(n) {
  return new Float64Array(mallocArrayBuffer(8*n), 0, n)
}
exports.mallocFloat64 = exports.mallocDouble = mallocDouble

function mallocUint8Clamped(n) {
  if(hasUint8C) {
    return new Uint8ClampedArray(mallocArrayBuffer(n), 0, n)
  } else {
    return mallocUint8(n)
  }
}
exports.mallocUint8Clamped = mallocUint8Clamped

function mallocDataView(n) {
  return new DataView(mallocArrayBuffer(n), 0, n)
}
exports.mallocDataView = mallocDataView

function mallocBuffer(n) {
  n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var cache = BUFFER[log_n]
  if(cache.length > 0) {
    return cache.pop()
  }
  return new Buffer(n)
}
exports.mallocBuffer = mallocBuffer

exports.clearCache = function clearCache() {
  for(var i=0; i<32; ++i) {
    POOL.UINT8[i].length = 0
    POOL.UINT16[i].length = 0
    POOL.UINT32[i].length = 0
    POOL.INT8[i].length = 0
    POOL.INT16[i].length = 0
    POOL.INT32[i].length = 0
    POOL.FLOAT[i].length = 0
    POOL.DOUBLE[i].length = 0
    POOL.UINT8C[i].length = 0
    DATA[i].length = 0
    BUFFER[i].length = 0
  }
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"bit-twiddle":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/typedarray-pool/node_modules/bit-twiddle/twiddle.js","buffer":"/projects/blackice/node_modules/browserify/node_modules/buffer/index.js","dup":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/typedarray-pool/node_modules/dup/dup.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/webglew/node_modules/weakmap/weakmap.js":[function(require,module,exports){
/* (The MIT License)
 *
 * Copyright (c) 2012 Brandon Benvie <http://bbenvie.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the 'Software'), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included with all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY  CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Original WeakMap implementation by Gozala @ https://gist.github.com/1269991
// Updated and bugfixed by Raynos @ https://gist.github.com/1638059
// Expanded by Benvie @ https://github.com/Benvie/harmony-collections

void function(global, undefined_, undefined){
  var getProps = Object.getOwnPropertyNames,
      defProp  = Object.defineProperty,
      toSource = Function.prototype.toString,
      create   = Object.create,
      hasOwn   = Object.prototype.hasOwnProperty,
      funcName = /^\n?function\s?(\w*)?_?\(/;


  function define(object, key, value){
    if (typeof key === 'function') {
      value = key;
      key = nameOf(value).replace(/_$/, '');
    }
    return defProp(object, key, { configurable: true, writable: true, value: value });
  }

  function nameOf(func){
    return typeof func !== 'function'
          ? '' : 'name' in func
          ? func.name : toSource.call(func).match(funcName)[1];
  }

  // ############
  // ### Data ###
  // ############

  var Data = (function(){
    var dataDesc = { value: { writable: true, value: undefined } },
        datalock = 'return function(k){if(k===s)return l}',
        uids     = create(null),

        createUID = function(){
          var key = Math.random().toString(36).slice(2);
          return key in uids ? createUID() : uids[key] = key;
        },

        globalID = createUID(),

        storage = function(obj){
          if (hasOwn.call(obj, globalID))
            return obj[globalID];

          if (!Object.isExtensible(obj))
            throw new TypeError("Object must be extensible");

          var store = create(null);
          defProp(obj, globalID, { value: store });
          return store;
        };

    // common per-object storage area made visible by patching getOwnPropertyNames'
    define(Object, function getOwnPropertyNames(obj){
      var props = getProps(obj);
      if (hasOwn.call(obj, globalID))
        props.splice(props.indexOf(globalID), 1);
      return props;
    });

    function Data(){
      var puid = createUID(),
          secret = {};

      this.unlock = function(obj){
        var store = storage(obj);
        if (hasOwn.call(store, puid))
          return store[puid](secret);

        var data = create(null, dataDesc);
        defProp(store, puid, {
          value: new Function('s', 'l', datalock)(secret, data)
        });
        return data;
      }
    }

    define(Data.prototype, function get(o){ return this.unlock(o).value });
    define(Data.prototype, function set(o, v){ this.unlock(o).value = v });

    return Data;
  }());


  var WM = (function(data){
    var validate = function(key){
      if (key == null || typeof key !== 'object' && typeof key !== 'function')
        throw new TypeError("Invalid WeakMap key");
    }

    var wrap = function(collection, value){
      var store = data.unlock(collection);
      if (store.value)
        throw new TypeError("Object is already a WeakMap");
      store.value = value;
    }

    var unwrap = function(collection){
      var storage = data.unlock(collection).value;
      if (!storage)
        throw new TypeError("WeakMap is not generic");
      return storage;
    }

    var initialize = function(weakmap, iterable){
      if (iterable !== null && typeof iterable === 'object' && typeof iterable.forEach === 'function') {
        iterable.forEach(function(item, i){
          if (item instanceof Array && item.length === 2)
            set.call(weakmap, iterable[i][0], iterable[i][1]);
        });
      }
    }


    function WeakMap(iterable){
      if (this === global || this == null || this === WeakMap.prototype)
        return new WeakMap(iterable);

      wrap(this, new Data);
      initialize(this, iterable);
    }

    function get(key){
      validate(key);
      var value = unwrap(this).get(key);
      return value === undefined_ ? undefined : value;
    }

    function set(key, value){
      validate(key);
      // store a token for explicit undefined so that "has" works correctly
      unwrap(this).set(key, value === undefined ? undefined_ : value);
    }

    function has(key){
      validate(key);
      return unwrap(this).get(key) !== undefined;
    }

    function delete_(key){
      validate(key);
      var data = unwrap(this),
          had = data.get(key) !== undefined;
      data.set(key, undefined);
      return had;
    }

    function toString(){
      unwrap(this);
      return '[object WeakMap]';
    }

    try {
      var src = ('return '+delete_).replace('e_', '\\u0065'),
          del = new Function('unwrap', 'validate', src)(unwrap, validate);
    } catch (e) {
      var del = delete_;
    }

    var src = (''+Object).split('Object');
    var stringifier = function toString(){
      return src[0] + nameOf(this) + src[1];
    };

    define(stringifier, stringifier);

    var prep = { __proto__: [] } instanceof Array
      ? function(f){ f.__proto__ = stringifier }
      : function(f){ define(f, stringifier) };

    prep(WeakMap);

    [toString, get, set, has, del].forEach(function(method){
      define(WeakMap.prototype, method);
      prep(method);
    });

    return WeakMap;
  }(new Data));

  var defaultCreator = Object.create
    ? function(){ return Object.create(null) }
    : function(){ return {} };

  function createStorage(creator){
    var weakmap = new WM;
    creator || (creator = defaultCreator);

    function storage(object, value){
      if (value || arguments.length === 2) {
        weakmap.set(object, value);
      } else {
        value = weakmap.get(object);
        if (value === undefined) {
          value = creator(object);
          weakmap.set(object, value);
        }
      }
      return value;
    }

    return storage;
  }


  if (typeof module !== 'undefined') {
    module.exports = WM;
  } else if (typeof exports !== 'undefined') {
    exports.WeakMap = WM;
  } else if (!('WeakMap' in global)) {
    global.WeakMap = WM;
  }

  WM.createStorage = createStorage;
  if (global.WeakMap)
    global.WeakMap.createStorage = createStorage;
}((0, eval)('this'));

},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/webglew/webglew.js":[function(require,module,exports){
'use strict'

var weakMap = typeof WeakMap === 'undefined' ? require('weakmap') : WeakMap

var WebGLEWStruct = new weakMap()

function baseName(ext_name) {
  return ext_name.replace(/^[A-Z]+_/, '')
}

function initWebGLEW(gl) {
  var struct = WebGLEWStruct.get(gl)
  if(struct) {
    return struct
  }
  var extensions = {}
  var supported = gl.getSupportedExtensions()
  for(var i=0; i<supported.length; ++i) {
    var extName = supported[i]

    //Skip MOZ_ extensions
    if(extName.indexOf('MOZ_') === 0) {
      continue
    }
    var ext = gl.getExtension(supported[i])
    if(!ext) {
      continue
    }
    while(true) {
      extensions[extName] = ext
      var base = baseName(extName)
      if(base === extName) {
        break
      }
      extName = base
    }
  }
  WebGLEWStruct.set(gl, extensions)
  return extensions
}
module.exports = initWebGLEW
},{"weakmap":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/webglew/node_modules/weakmap/weakmap.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/index.js":[function(require,module,exports){
var create = require('gl-texture2d')
var ndarray = require('ndarray')

module.exports = function(gl) {
    //fill an array with 0xff
    var data = Array.apply(null, new Array(16))
            .map(Number.prototype.valueOf, 0xFF);
    //create a 2D ndarray
    var array = ndarray(new Uint8Array(data), [2, 2, 4])
    return create(gl, array)
}
},{"gl-texture2d":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/texture.js","ndarray":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/ndarray/ndarray.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/node_modules/ndarray-ops/ndarray-ops.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/ndarray-ops.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/ndarray-ops.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/ndarray-ops/ndarray-ops.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/node_modules/typedarray-pool/pool.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/typedarray-pool/pool.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/typedarray-pool/pool.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/typedarray-pool/pool.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/node_modules/webglew/webglew.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/webglew/webglew.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/webglew/webglew.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/node_modules/webglew/webglew.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/texture.js":[function(require,module,exports){
'use strict'

var ndarray = require('ndarray')
var ops     = require('ndarray-ops')
var pool    = require('typedarray-pool')
var webglew = require('webglew')

module.exports = createTexture2D

var linearTypes = null
var filterTypes = null
var wrapTypes   = null

function lazyInitLinearTypes(gl) {
  linearTypes = [
    gl.LINEAR,
    gl.NEAREST_MIPMAP_LINEAR,
    gl.LINEAR_MIPMAP_NEAREST,
    gl.LINEAR_MIPMAP_NEAREST
  ]
  filterTypes = [
    gl.NEAREST,
    gl.LINEAR,
    gl.NEAREST_MIPMAP_NEAREST,
    gl.NEAREST_MIPMAP_LINEAR,
    gl.LINEAR_MIPMAP_NEAREST,
    gl.LINEAR_MIPMAP_LINEAR
  ]
  wrapTypes = [
    gl.REPEAT,
    gl.CLAMP_TO_EDGE,
    gl.MIRRORED_REPEAT
  ]
}

var convertFloatToUint8 = function(out, inp) {
  ops.muls(out, inp, 255.0)
}

function reshapeTexture(tex, w, h) {
  var gl = tex.gl
  var maxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  if(w < 0 || w > maxSize || h < 0 || h > maxSize) {
    throw new Error('gl-texture2d: Invalid texture size')
  }
  tex._shape = [w, h]
  tex.bind()
  gl.texImage2D(gl.TEXTURE_2D, 0, tex.format, w, h, 0, tex.format, tex.type, null)
  tex._mipLevels = [0]
  return tex
}

function Texture2D(gl, handle, width, height, format, type) {
  this.gl = gl
  this.handle = handle
  this.format = format
  this.type = type
  this._shape = [width, height]
  this._mipLevels = [0]
  this._magFilter = gl.NEAREST
  this._minFilter = gl.NEAREST
  this._wrapS = gl.CLAMP_TO_EDGE
  this._wrapT = gl.CLAMP_TO_EDGE
  this._anisoSamples = 1

  var parent = this
  var wrapVector = [this._wrapS, this._wrapT]
  Object.defineProperties(wrapVector, [
    {
      get: function() {
        return parent._wrapS
      },
      set: function(v) {
        return parent.wrapS = v
      }
    },
    {
      get: function() {
        return parent._wrapT
      },
      set: function(v) {
        return parent.wrapT = v
      }
    }
  ])
  this._wrapVector = wrapVector

  var shapeVector = [this._shape[0], this._shape[1]]
  Object.defineProperties(shapeVector, [
    {
      get: function() {
        return parent._shape[0]
      },
      set: function(v) {
        return parent.width = v
      }
    },
    {
      get: function() {
        return parent._shape[1]
      },
      set: function(v) {
        return parent.height = v
      }
    }
  ])
  this._shapeVector = shapeVector
}

var proto = Texture2D.prototype

Object.defineProperties(proto, {
  minFilter: {
    get: function() {
      return this._minFilter
    },
    set: function(v) {
      this.bind()
      var gl = this.gl
      if(this.type === gl.FLOAT && linearTypes.indexOf(v) >= 0) {
        if(!webglew(gl).texture_float_linear) {
          v = gl.NEAREST
        }
      }
      if(filterTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown filter mode ' + v)
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, v)
      return this._minFilter = v
    }
  },
  magFilter: {
    get: function() {
      return this._magFilter
    },
    set: function(v) {
      this.bind()
      var gl = this.gl
      if(this.type === gl.FLOAT && linearTypes.indexOf(v) >= 0) {
        if(!webglew(gl).texture_float_linear) {
          v = gl.NEAREST
        }
      }
      if(filterTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown filter mode ' + v)
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, v)
      return this._magFilter = v
    }
  },
  mipSamples: {
    get: function() {
      return this._anisoSamples
    },
    set: function(i) {
      var psamples = this._anisoSamples
      this._anisoSamples = Math.max(i, 1)|0
      if(psamples !== this._anisoSamples) {
        var ext = webglew(this.gl).EXT_texture_filter_anisotropic
        if(ext) {
          this.gl.texParameterf(this.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, this._anisoSamples)
        }
      }
      return this._anisoSamples
    }
  },
  wrapS: {
    get: function() {
      return this._wrapS
    },
    set: function(v) {
      this.bind()
      if(wrapTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown wrap mode ' + v)
      }
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, v)
      return this._wrapS = v
    }
  },
  wrapT: {
    get: function() {
      return this._wrapT
    },
    set: function(v) {
      this.bind()
      if(wrapTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown wrap mode ' + v)
      }
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, v)
      return this._wrapT = v
    }
  },
  wrap: {
    get: function() {
      return this._wrapVector
    },
    set: function(v) {
      if(!Array.isArray(v)) {
        v = [v,v]
      }
      if(v.length !== 2) {
        throw new Error('gl-texture2d: Must specify wrap mode for rows and columns')
      }
      for(var i=0; i<2; ++i) {
        if(wrapTypes.indexOf(v[i]) < 0) {
          throw new Error('gl-texture2d: Unknown wrap mode ' + v)
        }
      }
      this._wrapS = v[0]
      this._wrapT = v[1]

      var gl = this.gl
      this.bind()
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._wrapS)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._wrapT)

      return v
    }
  },
  shape: {
    get: function() {
      return this._shapeVector
    }, 
    set: function(x) {
      if(!Array.isArray(x)) {
        x = [x|0,x|0]
      } else {
        if(x.length !== 2) {
          throw new Error('gl-texture2d: Invalid texture shape')
        }
      }
      reshapeTexture(this, x[0]|0, x[1]|0)
      return [x[0]|0, x[1]|0]
    }
  },
  width: {
    get: function() {
      return this._shape[0]
    },
    set: function(w) {
      w = w|0
      reshapeTexture(this, w, this._shape[1])
      return w
    }
  },
  height: {
    get: function() {
      return this._shape[1]
    },
    set: function(h) {
      h = h|0
      reshapeTexture(this, this._shape[0], h)
      return h
    }
  }
})

proto.bind = function(unit) {
  var gl = this.gl
  if(unit !== undefined) {
    gl.activeTexture(gl.TEXTURE0 + (unit|0))
  }
  gl.bindTexture(gl.TEXTURE_2D, this.handle)
  if(unit !== undefined) {
    return (unit|0)
  }
  return gl.getParameter(gl.ACTIVE_TEXTURE) - gl.TEXTURE0
}

proto.dispose = function() {
  this.gl.deleteTexture(this.handle)
}

proto.generateMipmap = function() {
  this.bind()
  this.gl.generateMipmap(this.gl.TEXTURE_2D)
  
  //Update mip levels
  var l = Math.min(this._shape[0], this._shape[1])
  for(var i=0; l>0; ++i, l>>>=1) {
    if(this._mipLevels.indexOf(i) < 0) {
      this._mipLevels.push(i)
    }
  }
}

proto.setPixels = function(data, x_off, y_off, mip_level) {
  var gl = this.gl
  this.bind()
  if(Array.isArray(x_off)) {
    mip_level = y_off
    y_off = x_off[1]|0
    x_off = x_off[0]|0
  } else {
    x_off = x_off || 0
    y_off = y_off || 0
  }
  mip_level = mip_level || 0
  if(data instanceof HTMLCanvasElement ||
     data instanceof ImageData ||
     data instanceof HTMLImageElement ||
     data instanceof HTMLVideoElement) {
    var needsMip = this._mipLevels.indexOf(mip_level) < 0
    if(needsMip) {
      gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, data)
      this._mipLevels.push(mip_level)
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, this.format, this.type, data)
    }
  } else if(data.shape && data.stride && data.data) {
    if(data.shape.length < 2 ||
       x_off + data.shape[1] > this._shape[1]>>>mip_level ||
       y_off + data.shape[0] > this._shape[0]>>>mip_level ||
       x_off < 0 ||
       y_off < 0) {
      throw new Error('gl-texture2d: Texture dimensions are out of bounds')
    }
    texSubImageArray(gl, x_off, y_off, mip_level, this.format, this.type, this._mipLevels, data)
  } else {
    throw new Error('gl-texture2d: Unsupported data type')
  }
}


function isPacked(shape, stride) {
  if(shape.length === 3) {
    return  (stride[2] === 1) && 
            (stride[1] === shape[0]*shape[2]) &&
            (stride[0] === shape[2])
  }
  return  (stride[0] === 1) && 
          (stride[1] === shape[0])
}

function texSubImageArray(gl, x_off, y_off, mip_level, cformat, ctype, mipLevels, array) {
  var dtype = array.dtype
  var shape = array.shape.slice()
  if(shape.length < 2 || shape.length > 3) {
    throw new Error('gl-texture2d: Invalid ndarray, must be 2d or 3d')
  }
  var type = 0, format = 0
  var packed = isPacked(shape, array.stride.slice())
  if(dtype === 'float32') {
    type = gl.FLOAT
  } else if(dtype === 'float64') {
    type = gl.FLOAT
    packed = false
    dtype = 'float32'
  } else if(dtype === 'uint8') {
    type = gl.UNSIGNED_BYTE
  } else {
    type = gl.UNSIGNED_BYTE
    packed = false
    dtype = 'uint8'
  }
  var channels = 1
  if(shape.length === 2) {
    format = gl.LUMINANCE
    shape = [shape[0], shape[1], 1]
    array = ndarray(array.data, shape, [array.stride[0], array.stride[1], 1], array.offset)
  } else if(shape.length === 3) {
    if(shape[2] === 1) {
      format = gl.ALPHA
    } else if(shape[2] === 2) {
      format = gl.LUMINANCE_ALPHA
    } else if(shape[2] === 3) {
      format = gl.RGB
    } else if(shape[2] === 4) {
      format = gl.RGBA
    } else {
      throw new Error('gl-texture2d: Invalid shape for pixel coords')
    }
    channels = shape[2]
  } else {
    throw new Error('gl-texture2d: Invalid shape for texture')
  }
  //For 1-channel textures allow conversion between formats
  if((format  === gl.LUMINANCE || format  === gl.ALPHA) &&
     (cformat === gl.LUMINANCE || cformat === gl.ALPHA)) {
    format = cformat
  }
  if(format !== cformat) {
    throw new Error('gl-texture2d: Incompatible texture format for setPixels')
  }
  var size = array.size
  var needsMip = mipLevels.indexOf(mip_level) < 0
  if(needsMip) {
    mipLevels.push(mip_level)
  }
  if(type === ctype && packed) {
    //Array data types are compatible, can directly copy into texture
    if(array.offset === 0 && array.data.length === size) {
      if(needsMip) {
        gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, array.data)
      } else {
        gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, array.data)
      }
    } else {
      if(needsMip) {
        gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, array.data.subarray(array.offset, array.offset+size))
      } else {
        gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, array.data.subarray(array.offset, array.offset+size))
      }
    }
  } else {
    //Need to do type conversion to pack data into buffer
    var pack_buffer
    if(ctype === gl.FLOAT) {
      pack_buffer = pool.mallocFloat32(size)
    } else {
      pack_buffer = pool.mallocUint8(size)
    }
    var pack_view = ndarray(pack_buffer, shape, [shape[2], shape[2]*shape[0], 1])
    if(type === gl.FLOAT && ctype === gl.UNSIGNED_BYTE) {
      convertFloatToUint8(pack_view, array)
    } else {
      ops.assign(pack_view, array)
    }
    if(needsMip) {
      gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, pack_buffer.subarray(0, size))
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, pack_buffer.subarray(0, size))
    }
    if(ctype === gl.FLOAT) {
      pool.freeFloat32(pack_buffer)
    } else {
      pool.freeUint8(pack_buffer)
    }
  }
}

function initTexture(gl) {
  var tex = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, tex)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  return tex
}

function createTextureShape(gl, width, height, format, type) {
  var maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  if(width < 0 || width > maxTextureSize || height < 0 || height  > maxTextureSize) {
    throw new Error('gl-texture2d: Invalid texture shape')
  }
  if(type === gl.FLOAT && !webglew(gl).texture_float) {
    throw new Error('gl-texture2d: Floating point textures not supported on this platform')
  }
  var tex = initTexture(gl)
  gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, 0, format, type, null)
  return new Texture2D(gl, tex, width, height, format, type)
}

function createTextureDOM(gl, element, format, type) {
  var tex = initTexture(gl)
  gl.texImage2D(gl.TEXTURE_2D, 0, format, format, type, element)
  return new Texture2D(gl, tex, element.width|0, element.height|0, format, type)
}

//Creates a texture from an ndarray
function createTextureArray(gl, array) {
  var dtype = array.dtype
  var shape = array.shape.slice()
  var maxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  if(shape[0] < 0 || shape[0] > maxSize || shape[1] < 0 || shape[1] > maxSize) {
    throw new Error('gl-texture2d: Invalid texture size')
  }
  var packed = isPacked(shape, array.stride.slice())
  var type = 0
  if(dtype === 'float32') {
    type = gl.FLOAT
  } else if(dtype === 'float64') {
    type = gl.FLOAT
    packed = false
    dtype = 'float32'
  } else if(dtype === 'uint8') {
    type = gl.UNSIGNED_BYTE
  } else {
    type = gl.UNSIGNED_BYTE
    packed = false
    dtype = 'uint8'
  }
  var format = 0
  if(shape.length === 2) {
    format = gl.LUMINANCE
    shape = [shape[0], shape[1], 1]
    array = ndarray(array.data, shape, [array.stride[0], array.stride[1], 1], array.offset)
  } else if(shape.length === 3) {
    if(shape[2] === 1) {
      format = gl.ALPHA
    } else if(shape[2] === 2) {
      format = gl.LUMINANCE_ALPHA
    } else if(shape[2] === 3) {
      format = gl.RGB
    } else if(shape[2] === 4) {
      format = gl.RGBA
    } else {
      throw new Error('gl-texture2d: Invalid shape for pixel coords')
    }
  } else {
    throw new Error('gl-texture2d: Invalid shape for texture')
  }
  if(type === gl.FLOAT && !webglew(gl).texture_float) {
    type = gl.UNSIGNED_BYTE
    packed = false
  }
  var buffer, buf_store
  var size = array.size
  if(!packed) {
    var stride = [shape[2], shape[2]*shape[0], 1]
    buf_store = pool.malloc(size, dtype)
    var buf_array = ndarray(buf_store, shape, stride, 0)
    if((dtype === 'float32' || dtype === 'float64') && type === gl.UNSIGNED_BYTE) {
      convertFloatToUint8(buf_array, array)
    } else {
      ops.assign(buf_array, array)
    }
    buffer = buf_store.subarray(0, size)
  } else if (array.offset === 0 && array.data.length === size) {
    buffer = array.data
  } else {
    buffer = array.data.subarray(array.offset, array.offset + size)
  }
  var tex = initTexture(gl)
  gl.texImage2D(gl.TEXTURE_2D, 0, format, shape[0], shape[1], 0, format, type, buffer)
  if(!packed) {
    pool.free(buf_store)
  }
  return new Texture2D(gl, tex, shape[0], shape[1], format, type)
}

function createTexture2D(gl) {
  if(arguments.length <= 1) {
    throw new Error('gl-texture2d: Missing arguments for texture2d constructor')
  }
  if(!linearTypes) {
    lazyInitLinearTypes(gl)
  }
  if(typeof arguments[1] === 'number') {
    return createTextureShape(gl, arguments[1], arguments[2], arguments[3]||gl.RGBA, arguments[4]||gl.UNSIGNED_BYTE)
  }
  if(Array.isArray(arguments[1])) {
    return createTextureShape(gl, arguments[1][0]|0, arguments[1][1]|0, arguments[2]||gl.RGBA, arguments[3]||gl.UNSIGNED_BYTE)
  }
  if(typeof arguments[1] === 'object') {
    var obj = arguments[1]
    if(obj instanceof HTMLCanvasElement ||
       obj instanceof HTMLImageElement ||
       obj instanceof HTMLVideoElement ||
       obj instanceof ImageData) {
      return createTextureDOM(gl, obj, arguments[2]||gl.RGBA, arguments[3]||gl.UNSIGNED_BYTE)
    } else if(obj.shape && obj.data && obj.stride) {
      return createTextureArray(gl, obj)
    }
  }
  throw new Error('gl-texture2d: Invalid arguments for texture2d constructor')
}

},{"ndarray":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/ndarray/ndarray.js","ndarray-ops":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/node_modules/ndarray-ops/ndarray-ops.js","typedarray-pool":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/node_modules/typedarray-pool/pool.js","webglew":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/node_modules/webglew/webglew.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/ndarray/ndarray.js":[function(require,module,exports){
(function (Buffer){
var iota = require("iota-array")

var arrayMethods = [
  "concat",
  "join",
  "slice",
  "toString",
  "indexOf",
  "lastIndexOf",
  "forEach",
  "every",
  "some",
  "filter",
  "map",
  "reduce",
  "reduceRight"
]

var hasTypedArrays  = ((typeof Float64Array) !== "undefined")
var hasBuffer       = ((typeof Buffer) !== "undefined")

function compare1st(a, b) {
  return a[0] - b[0]
}

function order() {
  var stride = this.stride
  var terms = new Array(stride.length)
  var i
  for(i=0; i<terms.length; ++i) {
    terms[i] = [Math.abs(stride[i]), i]
  }
  terms.sort(compare1st)
  var result = new Array(terms.length)
  for(i=0; i<result.length; ++i) {
    result[i] = terms[i][1]
  }
  return result
}

function compileConstructor(dtype, dimension) {
  var className = ["View", dimension, "d", dtype].join("")
  if(dimension < 0) {
    className = "View_Nil" + dtype
  }
  var useGetters = (dtype === "generic")
  
  if(dimension === -1) {
    //Special case for trivial arrays
    var code = 
      "function "+className+"(a){this.data=a;};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new "+className+"(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_"+className+"(a){return new "+className+"(a);}"
    var procedure = new Function(code)
    return procedure()
  } else if(dimension === 0) {
    //Special case for 0d arrays
    var code =
      "function "+className+"(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function "+className+"_copy() {\
return new "+className+"(this.data,this.offset)\
};\
proto.pick=function "+className+"_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function "+className+"_get(){\
return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
"};\
proto.set=function "+className+"_set(v){\
return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
};\
return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}"
    var procedure = new Function("TrivialArray", code)
    return procedure(CACHED_CONSTRUCTORS[dtype][0])
  }

  var code = ["'use strict'"]
    
  //Create constructor for view
  var indices = iota(dimension)
  var args = indices.map(function(i) { return "i"+i })
  var index_str = "this.offset+" + indices.map(function(i) {
        return "this._stride" + i + "*i" + i
      }).join("+")
  code.push("function "+className+"(a,"+
    indices.map(function(i) {
      return "b"+i
    }).join(",") + "," +
    indices.map(function(i) {
      return "c"+i
    }).join(",") + ",d){this.data=a")
  for(var i=0; i<dimension; ++i) {
    code.push("this._shape"+i+"=b"+i+"|0")
  }
  for(var i=0; i<dimension; ++i) {
    code.push("this._stride"+i+"=c"+i+"|0")
  }
  code.push("this.offset=d|0}",
    "var proto="+className+".prototype",
    "proto.dtype='"+dtype+"'",
    "proto.dimension="+dimension)
  
  //view.stride and view.shape
  var strideClassName = "VStride" + dimension + "d" + dtype
  var shapeClassName = "VShape" + dimension + "d" + dtype
  var props = {"stride":strideClassName, "shape":shapeClassName}
  for(var prop in props) {
    var arrayName = props[prop]
    code.push(
      "function " + arrayName + "(v) {this._v=v} var aproto=" + arrayName + ".prototype",
      "aproto.length="+dimension)
    
    var array_elements = []
    for(var i=0; i<dimension; ++i) {
      array_elements.push(["this._v._", prop, i].join(""))
    }
    code.push(
      "aproto.toJSON=function " + arrayName + "_toJSON(){return [" + array_elements.join(",") + "]}",
      "aproto.valueOf=aproto.toString=function " + arrayName + "_toString(){return [" + array_elements.join(",") + "].join()}")
    
    for(var i=0; i<dimension; ++i) {
      code.push("Object.defineProperty(aproto,"+i+",{get:function(){return this._v._"+prop+i+"},set:function(v){return this._v._"+prop+i+"=v|0},enumerable:true})")
    }
    for(var i=0; i<arrayMethods.length; ++i) {
      if(arrayMethods[i] in Array.prototype) {
        code.push("aproto."+arrayMethods[i]+"=Array.prototype."+arrayMethods[i])
      }
    }
    code.push(["Object.defineProperty(proto,'",prop,"',{get:function ", arrayName, "_get(){return new ", arrayName, "(this)},set: function ", arrayName, "_set(v){"].join(""))
    for(var i=0; i<dimension; ++i) {
      code.push("this._"+prop+i+"=v["+i+"]|0")
    }
    code.push("return v}})")
  }
  
  //view.size:
  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return "+indices.map(function(i) { return "this._shape"+i }).join("*"),
"}})")

  //view.order:
  if(dimension === 1) {
    code.push("proto.order=[0]")
  } else {
    code.push("Object.defineProperty(proto,'order',{get:")
    if(dimension < 4) {
      code.push("function "+className+"_order(){")
      if(dimension === 2) {
        code.push("return (Math.abs(this._stride0)>Math.abs(this._stride1))?[1,0]:[0,1]}})")
      } else if(dimension === 3) {
        code.push(
"var s0=Math.abs(this._stride0),s1=Math.abs(this._stride1),s2=Math.abs(this._stride2);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})")
      }
    } else {
      code.push("ORDER})")
    }
  }
  
  //view.set(i0, ..., v):
  code.push(
"proto.set=function "+className+"_set("+args.join(",")+",v){")
  if(useGetters) {
    code.push("return this.data.set("+index_str+",v)}")
  } else {
    code.push("return this.data["+index_str+"]=v}")
  }
  
  //view.get(i0, ...):
  code.push("proto.get=function "+className+"_get("+args.join(",")+"){")
  if(useGetters) {
    code.push("return this.data.get("+index_str+")}")
  } else {
    code.push("return this.data["+index_str+"]}")
  }
  
  //view.index:
  code.push(
    "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}")

  //view.hi():
  code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
    indices.map(function(i) {
      return ["(typeof i",i,"!=='number'||i",i,"<0)?this._shape", i, ":i", i,"|0"].join("")
    }).join(",")+","+
    indices.map(function(i) {
      return "this._stride"+i
    }).join(",")+",this.offset)}")
  
  //view.lo():
  var a_vars = indices.map(function(i) { return "a"+i+"=this._shape"+i })
  var c_vars = indices.map(function(i) { return "c"+i+"=this._stride"+i })
  code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","))
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'&&i"+i+">=0){\
d=i"+i+"|0;\
b+=c"+i+"*d;\
a"+i+"-=d}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a"+i
    }).join(",")+","+
    indices.map(function(i) {
      return "c"+i
    }).join(",")+",b)}")
  
  //view.step():
  code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
    indices.map(function(i) {
      return "a"+i+"=this._shape"+i
    }).join(",")+","+
    indices.map(function(i) {
      return "b"+i+"=this._stride"+i
    }).join(",")+",c=this.offset,d=0,ceil=Math.ceil")
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'){\
d=i"+i+"|0;\
if(d<0){\
c+=b"+i+"*(a"+i+"-1);\
a"+i+"=ceil(-a"+i+"/d)\
}else{\
a"+i+"=ceil(a"+i+"/d)\
}\
b"+i+"*=d\
}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a" + i
    }).join(",")+","+
    indices.map(function(i) {
      return "b" + i
    }).join(",")+",c)}")
  
  //view.transpose():
  var tShape = new Array(dimension)
  var tStride = new Array(dimension)
  for(var i=0; i<dimension; ++i) {
    tShape[i] = "a[i"+i+"]"
    tStride[i] = "b[i"+i+"]"
  }
  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}")
  
  //view.pick():
  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset")
  for(var i=0; i<dimension; ++i) {
    code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this._stride"+i+"*i"+i+")|0}else{a.push(this._shape"+i+");b.push(this._stride"+i+")}")
  }
  code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}")
    
  //Add return statement
  code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
    indices.map(function(i) {
      return "shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "stride["+i+"]"
    }).join(",")+",offset)}")

  //Compile procedure
  var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"))
  return procedure(CACHED_CONSTRUCTORS[dtype], order)
}

function arrayDType(data) {
  if(hasBuffer) {
    if(Buffer.isBuffer(data)) {
      return "buffer"
    }
  }
  if(hasTypedArrays) {
    switch(Object.prototype.toString.call(data)) {
      case "[object Float64Array]":
        return "float64"
      case "[object Float32Array]":
        return "float32"
      case "[object Int8Array]":
        return "int8"
      case "[object Int16Array]":
        return "int16"
      case "[object Int32Array]":
        return "int32"
      case "[object Uint8Array]":
        return "uint8"
      case "[object Uint16Array]":
        return "uint16"
      case "[object Uint32Array]":
        return "uint32"
      case "[object Uint8ClampedArray]":
        return "uint8_clamped"
    }
  }
  if(Array.isArray(data)) {
    return "array"
  }
  return "generic"
}

var CACHED_CONSTRUCTORS = {
  "float32":[],
  "float64":[],
  "int8":[],
  "int16":[],
  "int32":[],
  "uint8":[],
  "uint16":[],
  "uint32":[],
  "array":[],
  "uint8_clamped":[],
  "buffer":[],
  "generic":[]
}

;(function() {
  for(var id in CACHED_CONSTRUCTORS) {
    CACHED_CONSTRUCTORS[id].push(compileConstructor(id, -1))
  }
});

function wrappedNDArrayCtor(data, shape, stride, offset) {
  if(data === undefined) {
    var ctor = CACHED_CONSTRUCTORS.array[0]
    return ctor([])
  } else if(typeof data === "number") {
    data = [data]
  }
  if(shape === undefined) {
    shape = [ data.length ]
  }
  var d = shape.length
  if(stride === undefined) {
    stride = new Array(d)
    for(var i=d-1, sz=1; i>=0; --i) {
      stride[i] = sz
      sz *= shape[i]
    }
  }
  if(offset === undefined) {
    offset = 0
    for(var i=0; i<d; ++i) {
      if(stride[i] < 0) {
        offset -= (shape[i]-1)*stride[i]
      }
    }
  }
  var dtype = arrayDType(data)
  var ctor_list = CACHED_CONSTRUCTORS[dtype]
  while(ctor_list.length <= d+1) {
    ctor_list.push(compileConstructor(dtype, ctor_list.length-1))
  }
  var ctor = ctor_list[d+1]
  return ctor(data, shape, stride, offset)
}

module.exports = wrappedNDArrayCtor
}).call(this,require("buffer").Buffer)
},{"buffer":"/projects/blackice/node_modules/browserify/node_modules/buffer/index.js","iota-array":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/ndarray/node_modules/iota-array/iota.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/ndarray/node_modules/iota-array/iota.js":[function(require,module,exports){
"use strict"

function iota(n) {
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    result[i] = i
  }
  return result
}

module.exports = iota
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/mixes/index.js":[function(require,module,exports){
var xtend = require('xtend')

var defaults = {
	enumerable: true,
	configurable: true
}

function mix(obj, entries) {
	for (var k in entries) {
		if (!entries.hasOwnProperty(k))
			continue
		var f = entries[k]
		if (typeof f === 'function') {
			obj[k] = f
		} else if (f && typeof f === 'object') {
			var def = xtend(defaults, f)
			Object.defineProperty(obj, k, def);
		}
	}
}

module.exports = function mixes(ctor, entries) {
	mix(ctor.prototype, entries)
}

module.exports.mix = mix
},{"xtend":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/xtend/immutable.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/ndarray/ndarray.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/ndarray/ndarray.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/ndarray/ndarray.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/ndarray/ndarray.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/number-util/index.js":[function(require,module,exports){
var int8 = new Int8Array(4);
var int32 = new Int32Array(int8.buffer, 0, 1);
var float32 = new Float32Array(int8.buffer, 0, 1);

/**
 * A singleton for number utilities. 
 * @class NumberUtil
 */
var NumberUtil = function() {

};


/**
 * Returns a float representation of the given int bits. ArrayBuffer
 * is used for the conversion.
 *
 * @method  intBitsToFloat
 * @static
 * @param  {Number} i the int to cast
 * @return {Number}   the float
 */
NumberUtil.intBitsToFloat = function(i) {
	int32[0] = i;
	return float32[0];
};

/**
 * Returns the int bits from the given float. ArrayBuffer is used
 * for the conversion.
 *
 * @method  floatToIntBits
 * @static
 * @param  {Number} f the float to cast
 * @return {Number}   the int bits
 */
NumberUtil.floatToIntBits = function(f) {
	float32[0] = f;
	return int32[0];
};

/**
 * Encodes ABGR int as a float, with slight precision loss.
 *
 * @method  intToFloatColor
 * @static
 * @param {Number} value an ABGR packed integer
 */
NumberUtil.intToFloatColor = function(value) {
	return NumberUtil.intBitsToFloat( value & 0xfeffffff );
};

/**
 * Returns a float encoded ABGR value from the given RGBA
 * bytes (0 - 255). Useful for saving bandwidth in vertex data.
 *
 * @method  colorToFloat
 * @static
 * @param {Number} r the Red byte (0 - 255)
 * @param {Number} g the Green byte (0 - 255)
 * @param {Number} b the Blue byte (0 - 255)
 * @param {Number} a the Alpha byte (0 - 255)
 * @return {Float32}  a Float32 of the RGBA color
 */
NumberUtil.colorToFloat = function(r, g, b, a) {
	var bits = (a << 24 | b << 16 | g << 8 | r);
	return NumberUtil.intToFloatColor(bits);
};

/**
 * Returns true if the number is a power-of-two.
 *
 * @method  isPowerOfTwo
 * @param  {Number}  n the number to test
 * @return {Boolean}   true if power-of-two
 */
NumberUtil.isPowerOfTwo = function(n) {
	return (n & (n - 1)) === 0;
};

/**
 * Returns the next highest power-of-two from the specified number. 
 * 
 * @param  {Number} n the number to test
 * @return {Number}   the next highest power of two
 */
NumberUtil.nextPowerOfTwo = function(n) {
	n--;
	n |= n >> 1;
	n |= n >> 2;
	n |= n >> 4;
	n |= n >> 8;
	n |= n >> 16;
	return n+1;
};

module.exports = NumberUtil;
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/premultiplied-rgba/index.js":[function(require,module,exports){
function premultiply(rgba, out) {
	if (!out || typeof out === 'number')
		out = [0,0,0,0]
	out[0] = rgba[0] * rgba[3]
	out[1] = rgba[1] * rgba[3]
	out[2] = rgba[2] * rgba[3]
	out[3] = rgba[3]
	return out
}
module.exports = premultiply
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/xtend/immutable.js":[function(require,module,exports){
module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/pack-rgba-float.js":[function(require,module,exports){
var packColor = require('number-util').colorToFloat

module.exports = function colorToFloat(rgba) {
    return packColor(
        ~~(rgba[0] * 255),
        ~~(rgba[1] * 255),
        ~~(rgba[2] * 255),
        ~~(rgba[3] * 255)
    )
}
},{"number-util":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/number-util/index.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-texture2d/texture.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/texture.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/texture.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/node_modules/gl-texture2d/texture.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/texcoord/index.js":[function(require,module,exports){
module.exports = function texcoord(position, shape, texShape, out) {
    if (!out)
        out = [0, 0, 1, 1]

    position = position || [0, 0]
    shape = shape || [1, 1]

    texShape = texShape || shape

    var invWidth = 1 / texShape[0]
    var invHeight = 1 / texShape[1]
    var x = position[0],
        y = position[1],
        w = shape[0],
        h = shape[1]

    out[0] = x * invWidth
    out[1] = y * invHeight
    out[2] = (x + w) * invWidth
    out[3] = (y + h) * invHeight
    return out
}
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/xtend/immutable.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/xtend/immutable.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/xtend/immutable.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/xtend/immutable.js"}],"/projects/blackice/node_modules/gl-sprites/copy.js":[function(require,module,exports){
//will use gl-vec2/copy at some point..
module.exports.vec2 = function copy2(out, x, y) {
    out[0] = x
    out[1] = y
    return out
}

module.exports.vec3 = function copy3(vec, x, y, z) {
    vec[0] = x
    vec[1] = y
    vec[2] = z
    return vec
}
},{}],"/projects/blackice/node_modules/gl-sprites/index.js":[function(require,module,exports){
var mixes = require('mixes')
var createShader = require('gl-basic-shader')
var createBatch = require('gl-sprite-batch')
var copy2 = require('./copy').vec2
var number = require('as-number')
var xtend = require('xtend')
var texcoord = require('texcoord')
var mat4 = require('./mat4')

var ZERO = [0, 0]
var TEXCOORD_DEFAULT = [0, 0, 1, 1]

var tmp1 = [0, 0],
    tmp2 = [0, 0],
    tmpUV = [0, 0, 1, 1]

function SpriteRenderer(gl, opt) {
    if (!(this instanceof SpriteRenderer))
        return new SpriteRenderer(gl, opt)
    opt = opt||{}

    this._blendSrc = number(opt.blendSrc, gl.SRC_ALPHA)
    this._blendDst = number(opt.blendDst, gl.ONE_MINUS_SRC_ALPHA)
    this._blendEnabled = opt.blend !== false

    this.gl = gl
    this.shader = opt.shader || createShader(gl, {
        color: true,
        texcoord: true
    })
    this.batch = opt.batch || createBatch(gl, xtend({ 
        dynamic: true,
        premultiplied: true 
    }, opt))

    this._bound = false
    this.projection = mat4.create()
    this.view = mat4.create()
    this.model = mat4.create()
    this.transform = mat4.create()
    this.transformStack = []

    this.color = [1, 1, 1, 1]
}

mixes(SpriteRenderer, {

    transform: {
        get: function() {
            return this.batch.transform
        },

        set: function(transform) {
            this.batch.transform = transform
        }
    },

    clear: function() {
        this.batch.clear()
        return this
    },

    ortho: function(width, height) {
        mat4.ortho(this.projection, 0, width, height, 0, 0, 1)
        this.updateMatrices()
        return this
    },

    solid: function() {
        this.batch.texture = null
        return this
    },

    image: function(image, uv) {
        this.batch.texture = image
        this.batch.texcoord = uv || TEXCOORD_DEFAULT
        return this
    },

    defaults: function() {
        this.batch.defaults()
        this.batch.color = this.color
        return this
    },

    flush: function() {
        this.batch.flush()
        return this
    },

    fillRect: function(x, y, width, height) {
        this.solid().defaults()
        this.rect(x, y, width, height)
        return this
    },  

    //just pushes a single quad with current attributes
    rect: function(x, y, width, height) {
        this.batch.color = this.color
        this.batch.position[0] = x||0
        this.batch.position[1] = y||0
        this.batch.shape[0] = width||0
        this.batch.shape[1] = height||0
        this.batch.push()
    },

    stroke: function(x, y, width, height, thickness) {
        this.batch.color = this.color
        thickness = number(thickness, 1)
        this.rect(x+thickness, y, width-thickness*2, thickness)
        this.rect(x, y, thickness, height)
        this.rect(x+thickness, y+height-thickness, width-thickness*2, thickness)
        this.rect(x+width-thickness, y, thickness, height)
    },

    strokeRect: function(x, y, width, height, thickness) {
        this.solid().defaults()
        this.stroke(x, y, width, height, thickness)
        return this
    },

    fillText: function(text, x, y, start, end) {
        var oldTransform = text.batch.transform,
            oldColor = text.batch.color,
            wasBound = this._bound

        if (wasBound) { 
        //TODO: we could always assume dynamic and remove this condition
            this.draw()
            this.unbind()
            this.clear()
        }
        text.batch.color = this.color
        text.batch.transform = this.transform
        text.draw(this.shader, x, y, start, end)
        text.batch.color = oldColor
        text.batch.transform = oldTransform
        if (wasBound) {
            this.bind()
        }
    }, 

    drawImage: function(image, x, y, width, height) {
        "use strict";
        width = number(width, image.shape ? image.shape[0] : 0)
        height = number(height, image.shape ? image.shape[1] : 0)

        var uv = TEXCOORD_DEFAULT

        if (arguments.length >= 9) {
            var texSize = image.shape 
            var clipPos = copy2(tmp1, arguments[1], arguments[2])
            var clipSize = copy2(tmp2, arguments[3], arguments[4])

            //get UV coordinates, storing in our temp array as to not 
            //change constant default
            uv = texcoord(clipPos, clipSize, texSize, tmpUV)

            x = arguments[5]
            y = arguments[6]
            width = arguments[7]
            height = arguments[8]
        }

        this.defaults()
        // this.batch.rotation = rotation||0
        // if (rotationOrigin)
        //     this.batch.rotationOrigin = rotationOrigin
        this.image(image, uv)
        this.rect(x, y, width, height)
        return this
    },

    sprite: function(sprite) {
        this.batch.push(sprite)
        return this
    },

    updateMatrices: function() {
        this.shader.bind()
        this.shader.uniforms.projection = this.projection
        this.shader.uniforms.view = this.view
        this.shader.uniforms.model = this.model
    },

    bind: function() {
        var gl = this.gl
        if (this._blendEnabled) {
            gl.enable(gl.BLEND)
            gl.blendFunc(this._blendSrc, this._blendDst)
        }

        this._bound = true
        this.batch.bind(this.shader)
        this.solid()
        return this
    },

    draw: function() {
        this.batch.draw()
        return this
    },

    unbind: function() {
        this.batch.unbind()
        this._bound = false
        return this
    },

    begin: function() {
        this.bind()
        this.clear()
        return this
    },

    end: function() {
        this.draw()
        this.unbind()
        return this
    }
})

mixes(SpriteRenderer, require('./transforms'))

module.exports = SpriteRenderer
},{"./copy":"/projects/blackice/node_modules/gl-sprites/copy.js","./mat4":"/projects/blackice/node_modules/gl-sprites/mat4.js","./transforms":"/projects/blackice/node_modules/gl-sprites/transforms.js","as-number":"/projects/blackice/node_modules/gl-sprites/node_modules/as-number/index.js","gl-basic-shader":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-basic-shader/index.js","gl-sprite-batch":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-sprite-batch/index.js","mixes":"/projects/blackice/node_modules/gl-sprites/node_modules/mixes/index.js","texcoord":"/projects/blackice/node_modules/gl-sprites/node_modules/texcoord/index.js","xtend":"/projects/blackice/node_modules/gl-sprites/node_modules/xtend/immutable.js"}],"/projects/blackice/node_modules/gl-sprites/mat4.js":[function(require,module,exports){
//to reduce bundle size, we'll only grab what we need
module.exports = {
    ortho: require('gl-mat4/ortho'),
    identity: require('gl-mat4/identity'),
    create: require('gl-mat4/create'),
    scale: require('gl-mat4/scale'),
    rotateZ: require('gl-mat4/rotateZ'),
    rotateY: require('gl-mat4/rotateY'),
    rotateX: require('gl-mat4/rotateX'),
    translate: require('gl-mat4/translate'),
    clone: require('gl-mat4/clone'),
    multiply: require('gl-mat4/multiply')
}

},{"gl-mat4/clone":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/clone.js","gl-mat4/create":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/create.js","gl-mat4/identity":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/identity.js","gl-mat4/multiply":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/multiply.js","gl-mat4/ortho":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/ortho.js","gl-mat4/rotateX":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/rotateX.js","gl-mat4/rotateY":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/rotateY.js","gl-mat4/rotateZ":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/rotateZ.js","gl-mat4/scale":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/scale.js","gl-mat4/translate":"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/translate.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/as-number/index.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/as-number/index.js")
},{"/projects/blackice/node_modules/as-number/index.js":"/projects/blackice/node_modules/as-number/index.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-basic-shader/index.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-basic-shader/index.js")
},{"/projects/blackice/node_modules/gl-basic-shader/index.js":"/projects/blackice/node_modules/gl-basic-shader/index.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/clone.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-mat4/clone.js")
},{"/projects/blackice/node_modules/gl-mat4/clone.js":"/projects/blackice/node_modules/gl-mat4/clone.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/create.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-mat4/create.js")
},{"/projects/blackice/node_modules/gl-mat4/create.js":"/projects/blackice/node_modules/gl-mat4/create.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/identity.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-mat4/identity.js")
},{"/projects/blackice/node_modules/gl-mat4/identity.js":"/projects/blackice/node_modules/gl-mat4/identity.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/multiply.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-mat4/multiply.js")
},{"/projects/blackice/node_modules/gl-mat4/multiply.js":"/projects/blackice/node_modules/gl-mat4/multiply.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/ortho.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-mat4/ortho.js")
},{"/projects/blackice/node_modules/gl-mat4/ortho.js":"/projects/blackice/node_modules/gl-mat4/ortho.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/rotateX.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-mat4/rotateX.js")
},{"/projects/blackice/node_modules/gl-mat4/rotateX.js":"/projects/blackice/node_modules/gl-mat4/rotateX.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/rotateY.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-mat4/rotateY.js")
},{"/projects/blackice/node_modules/gl-mat4/rotateY.js":"/projects/blackice/node_modules/gl-mat4/rotateY.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/rotateZ.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-mat4/rotateZ.js")
},{"/projects/blackice/node_modules/gl-mat4/rotateZ.js":"/projects/blackice/node_modules/gl-mat4/rotateZ.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/scale.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-mat4/scale.js")
},{"/projects/blackice/node_modules/gl-mat4/scale.js":"/projects/blackice/node_modules/gl-mat4/scale.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-mat4/translate.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-mat4/translate.js")
},{"/projects/blackice/node_modules/gl-mat4/translate.js":"/projects/blackice/node_modules/gl-mat4/translate.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/gl-sprite-batch/index.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/index.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/index.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/index.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/mixes/index.js":[function(require,module,exports){
var xtend = require('xtend')

var defaults = {
	enumerable: true,
	configurable: true
}

function mix(obj, entries) {
	for (var k in entries) {
		if (!entries.hasOwnProperty(k))
			continue
		var f = entries[k]
		if (typeof f === 'function') {
			obj[k] = f
		} else if (typeof f === 'object') {
			var def = xtend(defaults, f)
			Object.defineProperty(obj, k, def);
		}
	}
}

module.exports = function mixes(ctor, entries) {
	mix(ctor.prototype, entries)
}

module.exports.mix = mix
},{"xtend":"/projects/blackice/node_modules/gl-sprites/node_modules/mixes/node_modules/xtend/immutable.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/mixes/node_modules/xtend/immutable.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/xtend/immutable.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/xtend/immutable.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/xtend/immutable.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/texcoord/index.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/texcoord/index.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/texcoord/index.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/texcoord/index.js"}],"/projects/blackice/node_modules/gl-sprites/node_modules/xtend/immutable.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprites/node_modules/mixes/node_modules/xtend/immutable.js")
},{"/projects/blackice/node_modules/gl-sprites/node_modules/mixes/node_modules/xtend/immutable.js":"/projects/blackice/node_modules/gl-sprites/node_modules/mixes/node_modules/xtend/immutable.js"}],"/projects/blackice/node_modules/gl-sprites/transforms.js":[function(require,module,exports){
var mat4 = require('./mat4')
var copy3 = require('./copy').vec3
var number = require('as-number')

var tmpVec3 = [0, 0, 0]

module.exports = {

    save: function() {
        this.transformStack.push(mat4.clone(this.transform))
        return this
    },

    restore: function() {
        if (this.transformStack.length > 0) {
            var t = this.transformStack.pop()
            this.transform = t
        }
        return this
    },

    scale: function(x, y) {
        x = number(x, 1)
        y = number(y, 1)
        mat4.scale(this.transform, this.transform, copy3(tmpVec3, x, y, 1))
        return this
    },

    translate: function(x, y) {
        x = x||0
        y = y||0
        mat4.translate(this.transform, this.transform, copy3(tmpVec3, x, y, 0))
        return this
    },

    rotateZ: function(rad) {
        rad = rad||0
        mat4.rotateZ(this.transform, this.transform, rad)
        return this
    },

    rotateY: function(rad) {
        rad = rad||0
        mat4.rotateY(this.transform, this.transform, rad)
        return this
    },

    rotateX: function(rad) {
        rad = rad||0
        mat4.rotateX(this.transform, this.transform, rad)
        return this
    },

    transformMat4: function(matrix4x4) {
        mat4.multiply(this.transform, this.transform, matrix4x4)
        return this
    },

    rotate: function(rad) {
        this.rotateZ(rad)
        return this
    },

    identity: function() {
        mat4.identity(this.transform)
        return this
    }

}
},{"./copy":"/projects/blackice/node_modules/gl-sprites/copy.js","./mat4":"/projects/blackice/node_modules/gl-sprites/mat4.js","as-number":"/projects/blackice/node_modules/gl-sprites/node_modules/as-number/index.js"}],"/projects/blackice/node_modules/gl-texture2d/texture.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-texture2d/texture.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-texture2d/texture.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-texture2d/texture.js"}],"/projects/blackice/node_modules/glslify/adapter.js":[function(require,module,exports){
module.exports = programify

var shader = require('gl-shader-core')

function programify(vertex, fragment, uniforms, attributes) {
  return function(gl) {
    return shader(gl, vertex, fragment, uniforms, attributes)
  }
}

},{"gl-shader-core":"/projects/blackice/node_modules/glslify/node_modules/gl-shader-core/shader-core.js"}],"/projects/blackice/node_modules/glslify/browser.js":[function(require,module,exports){
module.exports = noop

function noop() {
  throw new Error(
      'You should bundle your code ' +
      'using `glslify` as a transform.'
  )
}

},{}],"/projects/blackice/node_modules/glslify/node_modules/gl-shader-core/shader-core.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/shader-core.js")
},{"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/shader-core.js":"/projects/blackice/node_modules/gl-basic-shader/node_modules/gl-shader-core/shader-core.js"}],"/projects/blackice/node_modules/glslify/simple-adapter.js":[function(require,module,exports){
module.exports = programify

function programify(vertex, fragment, uniforms, attributes) {
  return {
    vertex: vertex, 
    fragment: fragment,
    uniforms: uniforms, 
    attributes: attributes
  };
}

},{}],"/projects/blackice/node_modules/img/index.js":[function(require,module,exports){
module.exports = img;

function img (src, opt, callback) {
  if (typeof opt === 'function') {
    callback = opt
    opt = null
  }


  var el = document.createElement('img');
  var locked;

  el.onload = function () {
    if (locked) return;
    locked = true;

    callback && callback(undefined, el);
  };

  el.onerror = function (err) {
    if (locked) return;
    locked = true;

    callback && callback(new Error('Unable to load "' + src + '"'), el);
  };
  
  if (opt && opt.crossOrigin)
    el.crossOrigin = opt.crossOrigin;

  el.src = src;

  return el;
}

},{}],"/projects/blackice/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/inherits/inherits_browser.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/inherits/inherits_browser.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/inherits/inherits_browser.js"}],"/projects/blackice/node_modules/mixes/index.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/mixes/index.js")
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/mixes/index.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/mixes/index.js"}],"/projects/blackice/node_modules/raf.js/raf.js":[function(require,module,exports){
/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */

(function(window) {
	var lastTime = 0,
		vendors = ['webkit', 'moz'],
		requestAnimationFrame = window.requestAnimationFrame,
		cancelAnimationFrame = window.cancelAnimationFrame,
		i = vendors.length;

	// try to un-prefix existing raf
	while (--i >= 0 && !requestAnimationFrame) {
		requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
		cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'];
	}

	// polyfill with setTimeout fallback
	// heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
	if (!requestAnimationFrame || !cancelAnimationFrame) {
		requestAnimationFrame = function(callback) {
			var now = +new Date(), nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function() {
				callback(lastTime = nextTime);
			}, nextTime - now);
		};

		cancelAnimationFrame = clearTimeout;
	}

	// export to window
	window.requestAnimationFrame = requestAnimationFrame;
	window.cancelAnimationFrame = cancelAnimationFrame;
}(window));

},{}],"/projects/blackice/node_modules/three-effectcomposer/index.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE) {
  var CopyShader = EffectComposer.CopyShader = require('three-copyshader')
    , RenderPass = EffectComposer.RenderPass = require('./lib/renderpass')(THREE)
    , ShaderPass = EffectComposer.ShaderPass = require('./lib/shaderpass')(THREE, EffectComposer)
    , MaskPass = EffectComposer.MaskPass = require('./lib/maskpass')(THREE)
    , ClearMaskPass = EffectComposer.ClearMaskPass = require('./lib/clearmaskpass')(THREE)

  function EffectComposer( renderer, renderTarget ) {
    this.renderer = renderer;

    if ( renderTarget === undefined ) {
      var width = window.innerWidth || 1;
      var height = window.innerHeight || 1;
      var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

      renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );
    }

    this.renderTarget1 = renderTarget;
    this.renderTarget2 = renderTarget.clone();

    this.writeBuffer = this.renderTarget1;
    this.readBuffer = this.renderTarget2;

    this.passes = [];

    this.copyPass = new ShaderPass( CopyShader );
  };

  EffectComposer.prototype = {
    swapBuffers: function() {

      var tmp = this.readBuffer;
      this.readBuffer = this.writeBuffer;
      this.writeBuffer = tmp;

    },

    addPass: function ( pass ) {

      this.passes.push( pass );

    },

    insertPass: function ( pass, index ) {

      this.passes.splice( index, 0, pass );

    },

    render: function ( delta ) {

      this.writeBuffer = this.renderTarget1;
      this.readBuffer = this.renderTarget2;

      var maskActive = false;

      var pass, i, il = this.passes.length;

      for ( i = 0; i < il; i ++ ) {

        pass = this.passes[ i ];

        if ( !pass.enabled ) continue;

        pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

        if ( pass.needsSwap ) {

          if ( maskActive ) {

            var context = this.renderer.context;

            context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

            this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

            context.stencilFunc( context.EQUAL, 1, 0xffffffff );

          }

          this.swapBuffers();

        }

        if ( pass instanceof MaskPass ) {

          maskActive = true;

        } else if ( pass instanceof ClearMaskPass ) {

          maskActive = false;

        }

      }

    },

    reset: function ( renderTarget ) {

      if ( renderTarget === undefined ) {

        renderTarget = this.renderTarget1.clone();

        renderTarget.width = window.innerWidth;
        renderTarget.height = window.innerHeight;

      }

      this.renderTarget1 = renderTarget;
      this.renderTarget2 = renderTarget.clone();

      this.writeBuffer = this.renderTarget1;
      this.readBuffer = this.renderTarget2;

    },

    setSize: function ( width, height ) {

      var renderTarget = this.renderTarget1.clone();

      renderTarget.width = width;
      renderTarget.height = height;

      this.reset( renderTarget );

    }

  };

  // shared ortho camera

  EffectComposer.camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );

  EffectComposer.quad = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), null );

  EffectComposer.scene = new THREE.Scene();
  EffectComposer.scene.add( EffectComposer.quad );

  return EffectComposer
};
},{"./lib/clearmaskpass":"/projects/blackice/node_modules/three-effectcomposer/lib/clearmaskpass.js","./lib/maskpass":"/projects/blackice/node_modules/three-effectcomposer/lib/maskpass.js","./lib/renderpass":"/projects/blackice/node_modules/three-effectcomposer/lib/renderpass.js","./lib/shaderpass":"/projects/blackice/node_modules/three-effectcomposer/lib/shaderpass.js","three-copyshader":"/projects/blackice/node_modules/three-effectcomposer/node_modules/three-copyshader/index.js"}],"/projects/blackice/node_modules/three-effectcomposer/lib/clearmaskpass.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE) {
  function ClearMaskPass() {
    if (!(this instanceof ClearMaskPass)) return new ClearMaskPass(scene, camera);
    this.enabled = true;
  };

  ClearMaskPass.prototype = {
    render: function ( renderer, writeBuffer, readBuffer, delta ) {
      var context = renderer.context;
      context.disable( context.STENCIL_TEST );
    }
  };

  return ClearMaskPass
};
},{}],"/projects/blackice/node_modules/three-effectcomposer/lib/maskpass.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE) {
  function MaskPass( scene, camera ) {
    if (!(this instanceof MaskPass)) return new MaskPass(scene, camera);

    this.scene = scene;
    this.camera = camera;

    this.enabled = true;
    this.clear = true;
    this.needsSwap = false;

    this.inverse = false;
  };

  MaskPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta ) {

      var context = renderer.context;

      // don't update color or depth

      context.colorMask( false, false, false, false );
      context.depthMask( false );

      // set up stencil

      var writeValue, clearValue;

      if ( this.inverse ) {

        writeValue = 0;
        clearValue = 1;

      } else {

        writeValue = 1;
        clearValue = 0;

      }

      context.enable( context.STENCIL_TEST );
      context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
      context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
      context.clearStencil( clearValue );

      // draw into the stencil buffer

      renderer.render( this.scene, this.camera, readBuffer, this.clear );
      renderer.render( this.scene, this.camera, writeBuffer, this.clear );

      // re-enable update of color and depth

      context.colorMask( true, true, true, true );
      context.depthMask( true );

      // only render where stencil is set to 1

      context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
      context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

    }

  };

  return MaskPass
};

},{}],"/projects/blackice/node_modules/three-effectcomposer/lib/renderpass.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE) {
  function RenderPass( scene, camera, overrideMaterial, clearColor, clearAlpha ) {
    if (!(this instanceof RenderPass)) return new RenderPass(scene, camera, overrideMaterial, clearColor, clearAlpha);

    this.scene = scene;
    this.camera = camera;

    this.overrideMaterial = overrideMaterial;

    this.clearColor = clearColor;
    this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

    this.oldClearColor = new THREE.Color();
    this.oldClearAlpha = 1;

    this.enabled = true;
    this.clear = true;
    this.needsSwap = false;

  };

  RenderPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta ) {

      this.scene.overrideMaterial = this.overrideMaterial;

      if ( this.clearColor ) {

        this.oldClearColor.copy( renderer.getClearColor() );
        this.oldClearAlpha = renderer.getClearAlpha();

        renderer.setClearColor( this.clearColor, this.clearAlpha );

      }

      renderer.render( this.scene, this.camera, readBuffer, this.clear );

      if ( this.clearColor ) {

        renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

      }

      this.scene.overrideMaterial = null;

    }

  };

  return RenderPass;

};

},{}],"/projects/blackice/node_modules/three-effectcomposer/lib/shaderpass.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE, EffectComposer) {
  function ShaderPass( shader, textureID ) {
    if (!(this instanceof ShaderPass)) return new ShaderPass(shader, textureID);

    this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

    this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

    this.material = new THREE.ShaderMaterial( {

      uniforms: this.uniforms,
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader

    } );

    this.renderToScreen = false;

    this.enabled = true;
    this.needsSwap = true;
    this.clear = false;

  };

  ShaderPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta ) {

      if ( this.uniforms[ this.textureID ] ) {

        this.uniforms[ this.textureID ].value = readBuffer;

      }

      EffectComposer.quad.material = this.material;

      if ( this.renderToScreen ) {

        renderer.render( EffectComposer.scene, EffectComposer.camera );

      } else {

        renderer.render( EffectComposer.scene, EffectComposer.camera, writeBuffer, this.clear );

      }

    }

  };

  return ShaderPass;

};
},{}],"/projects/blackice/node_modules/three-effectcomposer/node_modules/three-copyshader/index.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

module.exports = {
  uniforms: {
    "tDiffuse": { type: "t", value: null },
    "opacity":  { type: "f", value: 1.0 }
  },
  vertexShader: [
    "varying vec2 vUv;",

    "void main() {",

      "vUv = uv;",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

    "}"
  ].join("\n"),
  fragmentShader: [
    "uniform float opacity;",

    "uniform sampler2D tDiffuse;",

    "varying vec2 vUv;",

    "void main() {",

      "vec4 texel = texture2D( tDiffuse, vUv );",
      "gl_FragColor = opacity * texel;",

    "}"
  ].join("\n")
};

},{}],"/projects/blackice/node_modules/three-glslify/index.js":[function(require,module,exports){
var createTypes = require('./types')


module.exports = function(THREE) {

    var types = createTypes(THREE) 

    return function create(glShader, opts) {
        opts = opts||{}

        if (typeof opts.colors === 'string')
            opts.colors = [opts.colors]
        
        var tUniforms = types( glShader.uniforms, opts.colors )
        var tAttribs = types( glShader.attributes, opts.colors )
            
        //clear the attribute arrays
        for (var k in tAttribs) {
            tAttribs[k].value = []
        }

        return {
            vertexShader: glShader.vertex,
            fragmentShader: glShader.fragment,
            uniforms: tUniforms,
            attributes: tAttribs
        }
    }
}
},{"./types":"/projects/blackice/node_modules/three-glslify/types.js"}],"/projects/blackice/node_modules/three-glslify/types.js":[function(require,module,exports){
var typeMap = {
    'int': 'i',
    'float': 'f',
    'ivec2': 'i2',
    'ivec3': 'i3',
    'ivec4': 'i4',
    'vec2': 'v2',
    'vec3': 'v3',
    'vec4': 'v4',
    'mat4': 'm4',
    'mat3': 'm3',
    'sampler2D': 't',
    'samplerCube': 't'
}

function create(THREE) {
    function newInstance(type, isArray) {
        switch (type) {
            case 'float': 
            case 'int':
                return 0
            case 'vec2':
            case 'ivec2':
                return new THREE.Vector2()
            case 'vec3':
            case 'ivec3':
                return new THREE.Vector3()
            case 'vec4':
            case 'ivec4':
                return new THREE.Vector4()
            case 'mat4':
                return new THREE.Matrix4()
            case 'mat3':
                return new THREE.Matrix3()
            case 'samplerCube':
            case 'sampler2D':
                return new THREE.Texture()
            default:
                return undefined
        }
    }

    function defaultValue(type, isArray, arrayLen) {
        if (isArray) {
            //ThreeJS flattens ivec3 type
            //(we don't support 'fv' type)
            if (type === 'ivec3')
                arrayLen *= 3
            var ar = new Array(arrayLen)
            for (var i=0; i<ar.length; i++)
                ar[i] = newInstance(type, isArray)
            return ar
        }  
        return newInstance(type)
    }

    function getType(type, isArray) {
        if (!isArray)
            return typeMap[type]

        if (type === 'int')
            return 'iv1'
        else if (type === 'float')
            return 'fv1'
        else
            return typeMap[type]+'v'
    }

    return function setupUniforms(glUniforms, colorNames) {
        if (!Array.isArray(colorNames))
            colorNames = Array.prototype.slice.call(arguments, 1)

        var result = {}
        var arrays = {}

        //map uniform types
        glUniforms.forEach(function(uniform) {
            var name = uniform.name
            var isArray = /(.+)\[[0-9]+\]/.exec(name)

            //special case: colors...
            if (colorNames && colorNames.indexOf(name) !== -1) {
                if (isArray)
                    throw new Error("array of color uniforms not supported")
                if (uniform.type !== 'vec3')
                    throw new Error("ThreeJS expects vec3 for Color uniforms") 
                result[name] = {
                    type: 'c',
                    value: new THREE.Color()
                }
                return
            }

            if (isArray) {
                name = isArray[1]
                if (name in arrays) 
                    arrays[name].count++ 
                else
                    arrays[name] = { count: 1, type: uniform.type }
            }
            result[name] = { 
                type: getType(uniform.type, isArray), 
                value: isArray ? null : defaultValue(uniform.type) 
            }
        })

        //now clean up any array values
        for (var k in result) {
            var u = result[k]
            if (k in arrays) { //is an array
                var a = arrays[k]
                u.value = defaultValue(a.type, true, a.count)
            }
        }
        return result
    }
}

module.exports = create
},{}],"/projects/blackice/node_modules/three-shader-fxaa/index.js":[function(require,module,exports){
var glslify = require("glslify");
var threeify = require("three-glslify");
var source = require("glslify/simple-adapter.js")("\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\nuniform vec2 resolution;\nvoid a_x_texcoords(vec2 fragCoord, vec2 resolution, out vec2 v_rgbNW, out vec2 v_rgbNE, out vec2 v_rgbSW, out vec2 v_rgbSE, out vec2 v_rgbM) {\n  vec2 inverseVP = 1.0 / resolution.xy;\n  v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n  v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n  v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n  v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n  v_rgbM = vec2(fragCoord * inverseVP);\n}\nvoid main() {\n  vUv = uv;\n  vec2 fragCoord = uv * resolution;\n  a_x_texcoords(fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}", "\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\nuniform vec2 resolution;\nuniform sampler2D tDiffuse;\n#ifndef FXAA_REDUCE_MIN\n\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n\n#endif\n\n#ifndef FXAA_REDUCE_MUL\n\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n\n#endif\n\n#ifndef FXAA_SPAN_MAX\n\n#define FXAA_SPAN_MAX     8.0\n\n#endif\n\nvec4 a_x_fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution, vec2 v_rgbNW, vec2 v_rgbNE, vec2 v_rgbSW, vec2 v_rgbSE, vec2 v_rgbM) {\n  vec4 color;\n  mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n  vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n  vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n  vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n  vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n  vec4 texColor = texture2D(tex, v_rgbM);\n  vec3 rgbM = texColor.xyz;\n  vec3 luma = vec3(0.299, 0.587, 0.114);\n  float lumaNW = dot(rgbNW, luma);\n  float lumaNE = dot(rgbNE, luma);\n  float lumaSW = dot(rgbSW, luma);\n  float lumaSE = dot(rgbSE, luma);\n  float lumaM = dot(rgbM, luma);\n  float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n  float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n  mediump vec2 dir;\n  dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n  dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n  float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n  float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n  dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), dir * rcpDirMin)) * inverseVP;\n  vec3 rgbA = 0.5 * (texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz + texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n  vec3 rgbB = rgbA * 0.5 + 0.25 * (texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz + texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n  float lumaB = dot(rgbB, luma);\n  if((lumaB < lumaMin) || (lumaB > lumaMax))\n    color = vec4(rgbA, texColor.a);\n  else\n    color = vec4(rgbB, texColor.a);\n  return color;\n}\nvoid main() {\n  vec2 fragCoord = vUv * resolution;\n  gl_FragColor = a_x_fxaa(tDiffuse, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", [{"name":"resolution","type":"vec2"},{"name":"resolution","type":"vec2"},{"name":"tDiffuse","type":"sampler2D"}], []);

module.exports = function(THREE) {
    var createShader = threeify(THREE);

    return function() {
        return createShader(source);
    };
};
},{"glslify":"/projects/blackice/node_modules/glslify/browser.js","glslify/simple-adapter.js":"/projects/blackice/node_modules/glslify/simple-adapter.js","three-glslify":"/projects/blackice/node_modules/three-glslify/index.js"}],"/projects/blackice/node_modules/xtend/immutable.js":[function(require,module,exports){
module.exports=require("/projects/blackice/node_modules/gl-sprites/node_modules/xtend/immutable.js")
},{"/projects/blackice/node_modules/gl-sprites/node_modules/xtend/immutable.js":"/projects/blackice/node_modules/gl-sprites/node_modules/xtend/immutable.js"}]},{},["./index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImZvbnRzL0V4bzJTZW1pQm9sZC5qc29uIiwibGliL1JpZ1NjZW5lLmpzIiwibGliL1RleHRQYXNzLmpzIiwibGliL1RleHRSZW5kZXJlci5qcyIsImxpYi9jcmVhdGUtZm9udC5qcyIsImxpYi9mZWF0dXJlLXBvaW50cy5qcyIsImxpYi9yZW5kZXJlci5qcyIsImxpYi9zZXR1cC1lZmZlY3RzLmpzIiwibGliL3NldHVwLXdhdGVyLmpzIiwibGliL3NoYWRlcnMvYmx1ci5qcyIsImxpYi9zaGFkZXJzL2NyZWF0ZS5qcyIsImxpYi9zaGFkZXJzL2xlbnMuanMiLCJsaWIvc2hhZGVycy9wYXNzLmpzIiwibGliL3RocmVlLW9yYml0LWNhbWVyYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9hcy1udW1iZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXMtYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jYW52YXMtYXBwL25vZGVfbW9kdWxlcy9hZGQtZXZlbnQtbGlzdGVuZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvZGVib3VuY2UvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvZGVib3VuY2Uvbm9kZV9tb2R1bGVzL2RhdGUtbm93L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvbm9kZV9tb2R1bGVzL2lzLXdlYmdsLWNvbnRleHQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvd2ViZ2wtY29udGV4dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kb21yZWFkeS9yZWFkeS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1iYXNpYy1zaGFkZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9saWIvY3JlYXRlLWF0dHJpYnV0ZXMuanMiLCJub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9saWIvY3JlYXRlLXVuaWZvcm1zLmpzIiwibm9kZV9tb2R1bGVzL2dsLWJhc2ljLXNoYWRlci9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyLWNvcmUvbGliL3JlZmxlY3QuanMiLCJub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9ub2RlX21vZHVsZXMvZHVwL2R1cC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1iYXNpYy1zaGFkZXIvbm9kZV9tb2R1bGVzL2dsLXNoYWRlci1jb3JlL3NoYWRlci1jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2RldGVybWluYW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJvbVF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUm90YXRpb25UcmFuc2xhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2ZydXN0dW0uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbG9va0F0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9vcnRoby5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3BlcnNwZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVaLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zdHIuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc3Bvc2UuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLWJtZm9udC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtc2ltcGxlLXJlbmRlcmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXJlbmRlcmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC1nbHlwaC1pdGVyYXRvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtc2ltcGxlLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC1yZW5kZXJlci9ub2RlX21vZHVsZXMvZm9udHBhdGgtdXRpbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtc2ltcGxlLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC1yZW5kZXJlci9ub2RlX21vZHVsZXMvZm9udHBhdGgtd29yZHdyYXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9jb21tb24uanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1hbGlhc2VkLXZhby9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1hbGlhc2VkLXZhby9saWIvZG8tYmluZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1hbGlhc2VkLXZhby9saWIvdmFvLWVtdWxhdGVkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9idWZmZXIuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9uZGFycmF5LW9wcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9jb21waWxlci5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9saWIvY29tcGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9saWIvdGh1bmsuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9ub2RlX21vZHVsZXMvY3dpc2UtY29tcGlsZXIvbm9kZV9tb2R1bGVzL3VuaXEvdW5pcS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9ub2RlX21vZHVsZXMvYml0LXR3aWRkbGUvdHdpZGRsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9ub2RlX21vZHVsZXMvZHVwL2R1cC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9wb29sLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvd2ViZ2xldy9ub2RlX21vZHVsZXMvd2Vha21hcC93ZWFrbWFwLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvd2ViZ2xldy93ZWJnbGV3LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtd2hpdGUtdGV4dHVyZS9ub2RlX21vZHVsZXMvZ2wtdGV4dHVyZTJkL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9uZGFycmF5LW9wcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC13aGl0ZS10ZXh0dXJlL25vZGVfbW9kdWxlcy9nbC10ZXh0dXJlMmQvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9wb29sLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC9ub2RlX21vZHVsZXMvd2ViZ2xldy93ZWJnbGV3LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL25kYXJyYXkvbmRhcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC13aGl0ZS10ZXh0dXJlL25vZGVfbW9kdWxlcy9uZGFycmF5L25vZGVfbW9kdWxlcy9pb3RhLWFycmF5L2lvdGEuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvbWl4ZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvbmRhcnJheS9uZGFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL251bWJlci11dGlsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL3ByZW11bHRpcGxpZWQtcmdiYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9wYWNrLXJnYmEtZmxvYXQuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy90ZXhjb29yZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbWF0NC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9hcy1udW1iZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL2dsLW1hdDQvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1tYXQ0L211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL2dsLW1hdDQvb3J0aG8uanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVYLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVouanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvbWl4ZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvbWl4ZXMvbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy90ZXhjb29yZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy90cmFuc2Zvcm1zLmpzIiwibm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xpZnkvYWRhcHRlci5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsaWZ5L2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvZ2xzbGlmeS9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyLWNvcmUvc2hhZGVyLWNvcmUuanMiLCJub2RlX21vZHVsZXMvZ2xzbGlmeS9zaW1wbGUtYWRhcHRlci5qcyIsIm5vZGVfbW9kdWxlcy9pbWcvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9taXhlcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYWYuanMvcmFmLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL2xpYi9jbGVhcm1hc2twYXNzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL2xpYi9tYXNrcGFzcy5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1lZmZlY3Rjb21wb3Nlci9saWIvcmVuZGVycGFzcy5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1lZmZlY3Rjb21wb3Nlci9saWIvc2hhZGVycGFzcy5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1lZmZlY3Rjb21wb3Nlci9ub2RlX21vZHVsZXMvdGhyZWUtY29weXNoYWRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1nbHNsaWZ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWdsc2xpZnkvdHlwZXMuanMiLCJub2RlX21vZHVsZXMvdGhyZWUtc2hhZGVyLWZ4YWEvaW5kZXguanMiLCJub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdnBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5aUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgYXBwID0gcmVxdWlyZSgnY2FudmFzLWFwcCcpKHJlbmRlciwge1xuICAgIGNvbnRleHQ6ICd3ZWJnbCcsXG4gICAgY29udGV4dEF0dHJpYnV0ZXM6IHsgYW50aWFsaWFzOiBmYWxzZSB9LFxuICAgIG9uUmVzaXplOiBoYW5kbGVSZXNpemVcbn0pXG5cbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG5cbnZhciBSZW5kZXJlciA9IHJlcXVpcmUoJy4vbGliL3JlbmRlcmVyJylcbnZhciBjcmVhdGVGb250ID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLWZvbnQnKVxuXG5cbnZhciByZW5kZXJlclxuXG5mdW5jdGlvbiByZW5kZXIoZ2wsIHdpZHRoLCBoZWlnaHQsIGR0KSB7XG4gICAgaWYgKHJlbmRlcmVyKVxuICAgICAgICByZW5kZXJlci5kcmF3KGR0KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGlmIChyZW5kZXJlcilcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpXG59XG5cbnJlcXVpcmUoJ3JhZi5qcycpXG5yZXF1aXJlKCdkb21yZWFkeScpKGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgYXBwLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAuY2FudmFzKVxuXG4gICAgdmFyIGdsID0gYXBwLmNvbnRleHRcbiAgICBjcmVhdGVGb250KGdsLCBmdW5jdGlvbihlcnIsIGZvbnQpIHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuXG4gICAgICAgIHJlbmRlcmVyID0gUmVuZGVyZXIoe1xuICAgICAgICAgICAgZ2w6IGdsLCBcbiAgICAgICAgICAgIHdpZHRoOiBhcHAud2lkdGgsIFxuICAgICAgICAgICAgaGVpZ2h0OiBhcHAuaGVpZ2h0LFxuICAgICAgICAgICAgZm9udDogZm9udFxuICAgICAgICB9KSBcbiAgICAgICAgYXBwLnN0YXJ0KClcbiAgICB9KVxufSlcblxuXG5cblxuXG5mdW5jdGlvbiBzZXR1cFNtb290aFRleChnbCwgdCkge1xuICAgIHQubWluRmlsdGVyID0gZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICB0Lm1hZ0ZpbHRlciA9IGdsLkxJTkVBUlxuXG4gICAgdmFyIGV4dCA9IChnbC5nZXRFeHRlbnNpb24oJ0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycpIFxuICAgICAgICAgICAgICAgICAgICB8fCBnbC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpKTtcbiAgICBpZiAoZXh0KSB7XG4gICAgICAgIHZhciBtYXhBbmlzdHJvcGh5ID0gZ2wuZ2V0UGFyYW1ldGVyKGV4dC5NQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJmKGdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgTWF0aC5taW4oMTYsIG1heEFuaXN0cm9waHkpKTtcbiAgICB9XG5cbiAgICB0LmdlbmVyYXRlTWlwbWFwKClcbn1cblxuZnVuY3Rpb24gc2V0dXBOZWFyZXN0VGV4KGdsLCB0KSB7XG4gICAgdC5taW5GaWx0ZXIgPSB0Lm1hZ0ZpbHRlciA9IGdsLk5FQVJFU1Rcbn1cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIm1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPXtcInBhZ2VzXCI6W1wiRXhvMlNlbWlCb2xkLnBuZ1wiXSxcImNoYXJzXCI6W3tcImlkXCI6MzIsXCJ4XCI6MCxcInlcIjowLFwid2lkdGhcIjowLFwiaGVpZ2h0XCI6MCxcInhvZmZzZXRcIjowLFwieW9mZnNldFwiOjMzLFwieGFkdmFuY2VcIjo3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0MSxcInhcIjowLFwieVwiOjAsXCJ3aWR0aFwiOjIwLFwiaGVpZ2h0XCI6NDEsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MyxcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQwLFwieFwiOjIwLFwieVwiOjAsXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6NDEsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MyxcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyNCxcInhcIjozOSxcInlcIjowLFwid2lkdGhcIjoxMyxcImhlaWdodFwiOjQwLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjMsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyNSxcInhcIjo1MixcInlcIjowLFwid2lkdGhcIjoxOCxcImhlaWdodFwiOjQwLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMjMsXCJ4XCI6NzAsXCJ5XCI6MCxcIndpZHRoXCI6MTgsXCJoZWlnaHRcIjo0MCxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjoxMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MzYsXCJ4XCI6ODgsXCJ5XCI6MCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjozLFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTMsXCJ4XCI6MTEzLFwieVwiOjAsXCJ3aWR0aFwiOjE3LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NCxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkxLFwieFwiOjEzMCxcInlcIjowLFwid2lkdGhcIjoxNyxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MSxcInhcIjoxNDcsXCJ5XCI6MCxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA2LFwieFwiOjE3NSxcInlcIjowLFwid2lkdGhcIjoxNixcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkyLFwieFwiOjE5MSxcInlcIjowLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjM0LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0NyxcInhcIjoyMTcsXCJ5XCI6MCxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTAyLFwieFwiOjI0MyxcInlcIjowLFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjMzLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjUsXCJ4YWR2YW5jZVwiOjEzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozOCxcInhcIjoyNjYsXCJ5XCI6MCxcIndpZHRoXCI6MzIsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyNSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MzUsXCJ4XCI6Mjk4LFwieVwiOjAsXCJ3aWR0aFwiOjMwLFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjM3LFwieFwiOjMyOCxcInlcIjowLFwid2lkdGhcIjozNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2MyxcInhcIjozNjQsXCJ5XCI6MCxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MzMsXCJ4XCI6Mzg4LFwieVwiOjAsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6OSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDgsXCJ4XCI6NDAyLFwieVwiOjAsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU3LFwieFwiOjQyOCxcInlcIjowLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1NixcInhcIjo0NTMsXCJ5XCI6MCxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTUsXCJ4XCI6NDc5LFwieVwiOjAsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU0LFwieFwiOjAsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjUzLFwieFwiOjI2LFwieVwiOjQxLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1MixcInhcIjo1MCxcInlcIjo0MSxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTEsXCJ4XCI6NzcsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjUwLFwieFwiOjEwMixcInlcIjo0MSxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDksXCJ4XCI6MTI3LFwieVwiOjQxLFwid2lkdGhcIjoxOSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjEzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMjEsXCJ4XCI6MTQ2LFwieVwiOjQxLFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTEzLFwieFwiOjE3MyxcInlcIjo0MSxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExMixcInhcIjoxOTgsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDgsXCJ4XCI6MjIzLFwieVwiOjQxLFwid2lkdGhcIjoxNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjEwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDcsXCJ4XCI6MjQwLFwieVwiOjQxLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDUsXCJ4XCI6MjY0LFwieVwiOjQxLFwid2lkdGhcIjoxNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwNCxcInhcIjoyNzgsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwMyxcInhcIjozMDIsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDAsXCJ4XCI6MzI5LFwieVwiOjQxLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo5OCxcInhcIjozNTQsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkwLFwieFwiOjM3OSxcInlcIjo0MSxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODksXCJ4XCI6NDA0LFwieVwiOjQxLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4OCxcInhcIjo0MzIsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjg3LFwieFwiOjQ2MSxcInlcIjo0MSxcIndpZHRoXCI6MzksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjozMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODYsXCJ4XCI6MCxcInlcIjo3MyxcIndpZHRoXCI6MjksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODUsXCJ4XCI6MjksXCJ5XCI6NzMsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjg0LFwieFwiOjU2LFwieVwiOjczLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MyxcInhcIjo4NCxcInlcIjo3MyxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODIsXCJ4XCI6MTA5LFwieVwiOjczLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MCxcInhcIjoxMzUsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjc5LFwieFwiOjE2MSxcInlcIjo3MyxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzgsXCJ4XCI6MTg5LFwieVwiOjczLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3NyxcInhcIjoyMTcsXCJ5XCI6NzMsXCJ3aWR0aFwiOjM0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjc2LFwieFwiOjI1MSxcInlcIjo3MyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzUsXCJ4XCI6Mjc1LFwieVwiOjczLFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3NCxcInhcIjozMDIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjczLFwieFwiOjMyMCxcInlcIjo3MyxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3MixcInhcIjozMzQsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjcxLFwieFwiOjM2MSxcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzAsXCJ4XCI6Mzg4LFwieVwiOjczLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2OSxcInhcIjo0MTIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjY4LFwieFwiOjQzNixcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjcsXCJ4XCI6NDYzLFwieVwiOjczLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NixcInhcIjowLFwieVwiOjEwNSxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjUsXCJ4XCI6MjYsXCJ5XCI6MTA1LFwid2lkdGhcIjozMCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NCxcInhcIjo1NixcInlcIjoxMDUsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzEsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6OSxcInhhZHZhbmNlXCI6MjQsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExNixcInhcIjo4NSxcInlcIjoxMDUsXCJ3aWR0aFwiOjIyLFwiaGVpZ2h0XCI6MzAsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6OCxcInhhZHZhbmNlXCI6MTMsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU5LFwieFwiOjEwNyxcInlcIjoxMDUsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MjksXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTQsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyMixcInhcIjoxMjEsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTIwLFwieFwiOjE0NSxcInlcIjoxMDUsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTksXCJ4XCI6MTcxLFwieVwiOjEwNSxcIndpZHRoXCI6MzYsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExOCxcInhcIjoyMDcsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTE3LFwieFwiOjIzNCxcInlcIjoxMDUsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTUsXCJ4XCI6MjU4LFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExNCxcInhcIjoyODIsXCJ5XCI6MTA1LFwid2lkdGhcIjoyMCxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTExLFwieFwiOjMwMixcInlcIjoxMDUsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTAsXCJ4XCI6MzI3LFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwOSxcInhcIjozNTEsXCJ5XCI6MTA1LFwid2lkdGhcIjozMyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoyOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTAxLFwieFwiOjM4NCxcInlcIjoxMDUsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo5OSxcInhcIjo0MDksXCJ5XCI6MTA1LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTcsXCJ4XCI6NDMyLFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQzLFwieFwiOjQ1NixcInlcIjoxMDUsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTEsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2MixcInhcIjo0ODAsXCJ5XCI6MTA1LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjI0LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjAsXCJ4XCI6MCxcInlcIjoxMzcsXCJ3aWR0aFwiOjIzLFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1OCxcInhcIjoyMyxcInlcIjoxMzcsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTQsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQyLFwieFwiOjM3LFwieVwiOjEzNyxcIndpZHRoXCI6MjEsXCJoZWlnaHRcIjoyMSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjEsXCJ4XCI6NTgsXCJ5XCI6MTM3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjIwLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEzLFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTQsXCJ4XCI6ODIsXCJ5XCI6MTM3LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjE5LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjgsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0NCxcInhcIjoxMDUsXCJ5XCI6MTM3LFwid2lkdGhcIjoxNCxcImhlaWdodFwiOjE5LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjI0LFwieGFkdmFuY2VcIjo4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozOSxcInhcIjoxMTksXCJ5XCI6MTM3LFwid2lkdGhcIjoxMyxcImhlaWdodFwiOjE3LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjk2LFwieFwiOjEzMixcInlcIjoxMzcsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjM0LFwieFwiOjE1MCxcInlcIjoxMzcsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyNixcInhcIjoxNjgsXCJ5XCI6MTM3LFwid2lkdGhcIjoyMixcImhlaWdodFwiOjE0LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjE3LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDYsXCJ4XCI6MTkwLFwieVwiOjEzNyxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjoxNCxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoyNCxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTUsXCJ4XCI6MjA0LFwieVwiOjEzNyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoxMyxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoyOCxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQ1LFwieFwiOjIyOCxcInlcIjoxMzcsXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6MTMsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTgsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH1dLFwia2VybmluZ3NcIjpbXSxcImluZm9cIjp7XCJmYWNlXCI6XCJFeG8gMiBTZW1pIEJvbGRcIixcInNpemVcIjozMixcImJvbGRcIjowLFwiaXRhbGljXCI6MCxcImNoYXJzZXRcIjpcIlwiLFwidW5pY29kZVwiOjAsXCJzdHJldGNoSFwiOjEwMCxcInNtb290aFwiOjEsXCJhYVwiOjEsXCJwYWRkaW5nXCI6WzQsNCw0LDRdLFwic3BhY2luZ1wiOlstOCwtOF19LFwiY29tbW9uXCI6e1wibGluZUhlaWdodFwiOjQwLFwiYmFzZVwiOjMzLFwic2NhbGVXXCI6NTEyLFwic2NhbGVIXCI6NTEyLFwicGFnZXNcIjoxLFwicGFja2VkXCI6MH19IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBtaXhlcyA9IHJlcXVpcmUoJ21peGVzJylcbnZhciBCYXNlID0gVEhSRUUuU2NlbmVcblxudmFyIFlPRkYgPSAtMlxuXG5mdW5jdGlvbiBSaWdTY2VuZShvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmlnU2NlbmUpKVxuICAgICAgICByZXR1cm4gbmV3IFJpZ1NjZW5lKG9wdClcbiAgICBCYXNlLmNhbGwodGhpcylcbiAgICB0aGlzLmZvZyA9IG5ldyBUSFJFRS5Gb2dFeHAyKCAweDBiMDUxNiwgMC4wMDAxNSApO1xuXG5cbiAgICAvLyB2YXIgYm94ID0gbmV3IFRIUkVFLk1lc2goXG4gICAgLy8gICAgIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyMCwgMjAsIDEwKSxcbiAgICAvLyAgICAgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4YWFhYWFhLCB3aXJlZnJhbWU6IGZhbHNlIH0pXG4gICAgLy8gKVxuXG4gICAgLy8gdGhpcy5hZGQoYm94KVxuXG5cbiAgICB0aGlzLnRpbWUgPSAwXG4gICAgdGhpcy5jdWJlTWFwID0gbnVsbFxuICAgIHRoaXMudXBkYXRlTWF0ZXJpYWwoKVxuXG4gICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5PQkpMb2FkZXIoKVxuICAgIGxvYWRlci5sb2FkKCdtb2RlbC9ibG9ja291dC5vYmonLCBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgdmFyIHMgPSAwLjNcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0KVxuICAgICAgICBvYmplY3Quc2NhbGUuc2V0KHMscyxzKVxuICAgICAgICBvYmplY3QucG9zaXRpb24ueSAtPSBZT0ZGXG4gICAgICAgIHRoaXMubWVzaCA9IG9iamVjdFxuICAgICAgICB0aGlzLmFkZChvYmplY3QpXG5cbiAgICAgICAgdGhpcy5tZXNoLnRyYXZlcnNlKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKSBcbiAgICAgICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgIH0uYmluZCh0aGlzKSlcbn1cblxuaW5oZXJpdHMoUmlnU2NlbmUsIEJhc2UpXG5cbm1peGVzKFJpZ1NjZW5lLCB7XG5cbiAgICB1cGRhdGVNYXRlcmlhbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcjogMHhhYWFhYWEsXG4gICAgICAgICAgICByZWZsZWN0aXZpdHk6IDAuNCxcbiAgICAgICAgICAgIGVudk1hcDogdGhpcy5jdWJlTWFwXG4gICAgICAgIH0pXG5cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbihkdCkge1xuICAgICAgICB0aGlzLnRpbWUgKz0gTWF0aC5taW4oZHQsIDMwKS8xMDAwXG4gICAgICAgIHZhciBtID0gdGhpcy5tZXNoXG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB2YXIgYW5pbSA9IE1hdGguc2luKHRoaXMudGltZSlcblxuICAgICAgICAvLyBtLnBvc2l0aW9uLnkgPSBZT0ZGICsgYW5pbSowLjJcbiAgICAgICAgLy8gbS5wb3NpdGlvbi54ID0gTWF0aC5zaW4odGhpcy50aW1lKjAuMSkqMC4wNVxuICAgICAgICAvLyBtLnBvc2l0aW9uLnogPSBNYXRoLnNpbih0aGlzLnRpbWUqMC4yKSowLjFcbiAgICAgICAgLy8gbS5yb3RhdGlvbi54ID0gYW5pbSowLjAzXG4gICAgICAgIC8vIG0ucm90YXRpb24ueSA9IE1hdGguc2luKHRoaXMudGltZSpNYXRoLmNvcyh0aGlzLnRpbWUqMC4xKSkqMC4wMDVcbiAgICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ1NjZW5lXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5USFJFRSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVEhSRUUgOiBudWxsKVxudmFyIEVmZmVjdENvbXBvc2VyID0gcmVxdWlyZSgndGhyZWUtZWZmZWN0Y29tcG9zZXInKShUSFJFRSlcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBCYXNlID0gRWZmZWN0Q29tcG9zZXIuUmVuZGVyUGFzc1xuXG5mdW5jdGlvbiBUZXh0UGFzcygpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICBCYXNlLmFwcGx5KHRoaXMsIGFyZ3MpXG5cbiAgICB0aGlzLnRleHQgPSBudWxsXG4gICAgdGhpcy5mZWF0dXJlcyA9IG51bGxcbn1cblxuaW5oZXJpdHMoVGV4dFBhc3MsIEJhc2UpXG5cblRleHRQYXNzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcbiAgICBCYXNlLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzLCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhKVxuXG4gICAgaWYgKHRoaXMudGV4dCAmJiB0aGlzLmZlYXR1cmVzKSB7XG4gICAgICAgIHRoaXMudGV4dC5iZWdpbigpXG4gICAgICAgIHRoaXMuZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbihzcG90KSB7XG4gICAgICAgICAgICB0aGlzLnRleHQuZmFkZSA9IHNwb3QuZmFkZVxuICAgICAgICAgICAgdGhpcy50ZXh0LmRyYXcodGhpcy5jYW1lcmEsIHNwb3QudGV4dCwgc3BvdC5vYmplY3QpXG4gICAgICAgIH0sIHRoaXMpXG4gICAgICAgIHRoaXMudGV4dC5lbmQoKVxuXG4gICAgICAgIHJlbmRlcmVyLnJlc2V0R0xTdGF0ZSgpXG4gICAgICAgIHJlbmRlcmVyLnJlc2V0QXR0cmlidXRlcygpXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRQYXNzXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCJ2YXIgY3JlYXRlVGV4dCA9IHJlcXVpcmUoXCJnbC1zcHJpdGUtdGV4dFwiKTtcbnZhciBtYXQ0ID0gcmVxdWlyZShcImdsLW1hdDRcIik7XG52YXIgUmVuZGVyZXIgPSByZXF1aXJlKFwiZ2wtc3ByaXRlc1wiKTtcbnZhciBkZWZhdWx0U2hhZGVyID0gcmVxdWlyZShcImdsLWJhc2ljLXNoYWRlclwiKTtcbnZhciBtb2RlbFRyYW5zZm9ybSA9IG1hdDQuY3JlYXRlKCk7XG5cbnZhciBzcHJpdGUgPSB7XG4gICAgdGV4dHVyZTogbnVsbCxcbiAgICBwb3NpdGlvbjogWzAsIDBdLFxuICAgIHNoYXBlOiBbMCwgMF0sXG4gICAgY29sb3I6IFsxLCAwLCAwLCAwLjVdLFxuICAgIHRleGNvb3JkOiBbMCwgMCwgMSwgMV1cbn07XG5cbnZhciBvZmYgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxufTtcblxudmFyIFdISVRFID0gWzEsIDEsIDEsIDFdO1xudmFyIEJPUkRFUiA9IFswLjUsIDAuNSwgMC41LCAxXTtcbnZhciBCR0ZJTEwgPSBbMC4xLCAwLjEsIDAuMSwgMC45OV07XG52YXIgU0RGX1BBRERJTkcgPSAtNDtcbnZhciB0bXBWZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xudmFyIGdsc2xpZnkgPSByZXF1aXJlKFwiZ2xzbGlmeVwiKTtcbnZhciBzZGZTaGFkZXIgPSByZXF1aXJlKFwiZ2xzbGlmeS9hZGFwdGVyLmpzXCIpKFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG5hdHRyaWJ1dGUgdmVjNCBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjNCBjb2xvcjtcXG5hdHRyaWJ1dGUgdmVjMiB0ZXhjb29yZDA7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxudW5pZm9ybSBtYXQ0IG1vZGVsO1xcbnZhcnlpbmcgdmVjNCB2X2NvbDtcXG52YXJ5aW5nIHZlYzIgdl90ZXgwO1xcbnZhcnlpbmcgZmxvYXQgYW5pbU9mZnNldDtcXG52b2lkIG1haW4oKSB7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogbW9kZWwgKiBwb3NpdGlvbjtcXG4gIHZfY29sID0gY29sb3I7XFxuICB2X3RleDAgPSB0ZXhjb29yZDA7XFxuICBnbF9Qb2ludFNpemUgPSAxLjA7XFxuICBhbmltT2Zmc2V0ID0gcG9zaXRpb24ueDtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG4jaWZkZWYgR0xfRVNcXG5cXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG4jZW5kaWZcXG5cXG52YXJ5aW5nIHZlYzQgdl9jb2w7XFxudmFyeWluZyB2ZWMyIHZfdGV4MDtcXG52YXJ5aW5nIGZsb2F0IGFuaW1PZmZzZXQ7XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTA7XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTE7XFxudW5pZm9ybSBmbG9hdCBmYWRlO1xcbmNvbnN0IGZsb2F0IHNtb290aGluZyA9IDEuMCAvIDMyLjA7XFxuY29uc3QgdmVjMiBzaGFkb3dPZmZzZXQgPSB2ZWMyKC0xLjAgLyA1MTIuMCk7XFxuY29uc3QgdmVjNCBnbG93Q29sb3IgPSB2ZWM0KHZlYzMoMC4xKSwgMS4wKTtcXG5jb25zdCBmbG9hdCBnbG93TWluID0gMC40O1xcbmNvbnN0IGZsb2F0IGdsb3dNYXggPSAwLjg7XFxudmVjNCBhX3hfYmx1cihzYW1wbGVyMkQgdGV4LCB2ZWMyIHV2LCB2ZWMyIGJsdXIsIHZlYzIgZGlyZWN0aW9uKSB7XFxuICB2ZWM0IHN1bSA9IHZlYzQoMC4wKTtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSA0LjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDQuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjAxNjIxNjIxNjI7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54IC0gMy4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgLSAzLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4wNTQwNTQwNTQxO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDIuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gMi4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTIxNjIxNjIxNjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSAxLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDEuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjE5NDU5NDU5NDY7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54LCB1di55KSkgKiAwLjIyNzAyNzAyNzA7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgMS4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyAxLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xOTQ1OTQ1OTQ2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCArIDIuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55ICsgMi4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTIxNjIxNjIxNjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyAzLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDMuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjA1NDA1NDA1NDE7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgNC4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyA0LjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4wMTYyMTYyMTYyO1xcbiAgcmV0dXJuIHN1bTtcXG59XFxudm9pZCBtYWluKCkge1xcbiAgZmxvYXQgYW5pbSA9IG1vZChmYWRlLCBhbmltT2Zmc2V0KTtcXG4gIHZlYzQgc21vb3RoQ29sb3IgPSB2ZWM0KDAuMCk7XFxuICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUwLCB2X3RleDApO1xcbiAgZmxvYXQgZHN0ID0gdGV4Q29sb3IuYTtcXG4gIGZsb2F0IHNtb290aEFtdCA9IG1peCgxLjUsIHNtb290aGluZywgYW5pbSk7XFxuICBmbG9hdCBhbHBoYSA9IHNtb290aHN0ZXAoMC41IC0gc21vb3RoQW10LCAwLjUgKyBzbW9vdGhBbXQsIGRzdCk7XFxuICB2ZWM0IGJhc2UgPSB2X2NvbCAqIHZlYzQoYWxwaGEpO1xcbiAgZmxvYXQgZ2xvd0RzdCA9IHRleHR1cmUyRCh0ZXh0dXJlMCwgdl90ZXgwICsgc2hhZG93T2Zmc2V0KS5hO1xcbiAgdmVjNCBnbG93ID0gZ2xvd0NvbG9yICogc21vb3Roc3RlcChnbG93TWluLCBnbG93TWF4LCBnbG93RHN0KTtcXG4gIGZsb2F0IG1hc2sgPSAxLjAgLSBhbHBoYTtcXG4gIHNtb290aENvbG9yID0gbWl4KGJhc2UsIGdsb3csIG1hc2spO1xcbiAgc21vb3RoQ29sb3IucmdiICo9IHNtb290aENvbG9yLmE7XFxuICBnbF9GcmFnQ29sb3IgPSBzbW9vdGhDb2xvcjtcXG4gIGdsX0ZyYWdDb2xvciA9IG1peCh2ZWM0KHZlYzMoMS4wKSwgMC4wKSwgZ2xfRnJhZ0NvbG9yLCBhbmltKTtcXG4gIGlmKGdsX0ZyYWdDb2xvci5hIDwgMC4xKVxcbiAgICBkaXNjYXJkO1xcbiAgXFxufVwiLCBbe1wibmFtZVwiOlwicHJvamVjdGlvblwiLFwidHlwZVwiOlwibWF0NFwifSx7XCJuYW1lXCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJtYXQ0XCJ9LHtcIm5hbWVcIjpcIm1vZGVsXCIsXCJ0eXBlXCI6XCJtYXQ0XCJ9LHtcIm5hbWVcIjpcInRleHR1cmUwXCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn0se1wibmFtZVwiOlwidGV4dHVyZTFcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifSx7XCJuYW1lXCI6XCJmYWRlXCIsXCJ0eXBlXCI6XCJmbG9hdFwifV0sIFt7XCJuYW1lXCI6XCJwb3NpdGlvblwiLFwidHlwZVwiOlwidmVjNFwifSx7XCJuYW1lXCI6XCJjb2xvclwiLFwidHlwZVwiOlwidmVjNFwifSx7XCJuYW1lXCI6XCJ0ZXhjb29yZDBcIixcInR5cGVcIjpcInZlYzJcIn1dKTtcblxuZnVuY3Rpb24gVGV4dFJlbmRlcmVyKGdsLCBvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGV4dFJlbmRlcmVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0UmVuZGVyZXIoZ2wsIG9wdCk7XG5cbiAgICBvcHQgPSBvcHQgfHwge307XG4gICAgdGhpcy5nbCA9IGdsO1xuXG4gICAgdGhpcy5zcHJpdGVzID0gUmVuZGVyZXIoZ2wsIHtcbiAgICAgICAgY2FwYWNpdHk6IDEwXG4gICAgfSk7XG5cbiAgICB0aGlzLnNoYWRlciA9IHNkZlNoYWRlcihnbCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVUZXh0KGdsLCB7XG4gICAgICAgIGZvbnQ6IG9wdC5mb250LFxuICAgICAgICB0ZXh0OiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWl0XCIsXG4gICAgICAgIHRleHR1cmVzOiBvcHQudGV4dHVyZXNcbiAgICB9KTtcblxuICAgIHRoaXMucHJvamVjdGlvbiA9IG1hdDQuY3JlYXRlKCk7XG4gICAgdGhpcy5zY2FsZSA9IG1hdDQuY3JlYXRlKCk7XG4gICAgdGhpcy5mYWRlID0gMDtcbiAgICB2YXIgcyA9IDAuMDU7XG4gICAgbWF0NC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlLCBbcywgLXMsIHNdKTtcbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5iZWdpbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XG4gICAgZ2wuZGVwdGhGdW5jKGdsLkxFUVVBTCk7XG4gICAgZ2wuZnJvbnRGYWNlKGdsLkNDVyk7XG4gICAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XG4gICAgZ2wuY3VsbEZhY2UoZ2wuRlJPTlQpO1xuICAgIGdsLmNvbG9yTWFzayh0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICBnbC5kaXNhYmxlKGdsLlNURU5DSUxfVEVTVCk7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG4gICAgZ2wuZGVwdGhNYXNrKHRydWUpO1xuICAgIHRoaXMuc2hhZGVyLmJpbmQoKTtcbiAgICB2YXIgdGV4ID0gdGhpcy5lbGVtZW50LnRleHR1cmVzWzBdO1xuICAgIHRleC5iaW5kKCk7XG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XG4gICAgZ2wuY3VsbEZhY2UoZ2wuQkFDSyk7XG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjYW1lcmEsIHRleHQsIG9iamVjdDNkKSB7XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICB0aGlzLmVsZW1lbnQudGV4dHVyZXNbMF0uYmluZCgwKTtcbiAgICB0aGlzLnNoYWRlci51bmlmb3Jtcy5mYWRlID0gdGhpcy5mYWRlO1xuICAgIG1hdDQubXVsdGlwbHkobW9kZWxUcmFuc2Zvcm0sIG9iamVjdDNkLm1hdHJpeC5lbGVtZW50cywgdGhpcy5zY2FsZSk7XG4gICAgdGhpcy5zcHJpdGVzLnByb2plY3Rpb24gPSBjYW1lcmEucHJvamVjdGlvbk1hdHJpeC5lbGVtZW50cztcbiAgICB0aGlzLnNwcml0ZXMudmlldyA9IGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UuZWxlbWVudHM7XG4gICAgdGhpcy5zcHJpdGVzLm1vZGVsID0gbW9kZWxUcmFuc2Zvcm07XG4gICAgdGhpcy5lbGVtZW50LnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuZWxlbWVudC5jbGVhckxheW91dCgpO1xuICAgIHZhciBiID0gdGhpcy5lbGVtZW50LmdldEJvdW5kcyh1bmRlZmluZWQsIG9mZik7XG4gICAgdmFyIHBhZCA9IFs4LCA0XTtcbiAgICB2YXIgYm9yZGVyID0gMTtcbiAgICB0aGlzLnNwcml0ZXMuYmVnaW4oKTtcbiAgICB0aGlzLnNwcml0ZXMudXBkYXRlTWF0cmljZXMoKTtcbiAgICB0aGlzLnNwcml0ZXMuY29sb3IgPSBCR0ZJTEw7XG4gICAgdGhpcy5zcHJpdGVzLmNvbG9yID0gQk9SREVSO1xuICAgIHRoaXMuc3ByaXRlcy5lbmQoKTtcbiAgICBtYXQ0LnRyYW5zbGF0ZShtb2RlbFRyYW5zZm9ybSwgbW9kZWxUcmFuc2Zvcm0sIFswLCAwLCAwLjFdKTtcbiAgICB0aGlzLnNoYWRlci5iaW5kKCk7XG4gICAgdGhpcy5zaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbiA9IGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4LmVsZW1lbnRzO1xuICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLnZpZXcgPSBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlLmVsZW1lbnRzO1xuICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLm1vZGVsID0gbW9kZWxUcmFuc2Zvcm07XG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgdGhpcy5lbGVtZW50LmJhdGNoLmNvbG9yID0gV0hJVEU7XG4gICAgdGhpcy5lbGVtZW50LmRyYXcodGhpcy5zaGFkZXIsIFNERl9QQURESU5HLCBTREZfUEFERElORyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRSZW5kZXJlcjsiLCJ2YXIgRm9udCA9IHJlcXVpcmUoJy4uL2ZvbnRzL0V4bzJTZW1pQm9sZC5qc29uJylcbnZhciBmb250SW1hZ2UgPSAnZm9udHMvRXhvMlNlbWlCb2xkLnBuZydcbnZhciBpbWcgPSByZXF1aXJlKCdpbWcnKVxudmFyIGNyZWF0ZVRleHR1cmUgPSByZXF1aXJlKCdnbC10ZXh0dXJlMmQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGdsLCBjYikge1xuICAgIGltZyhmb250SW1hZ2UsIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNiKGVycilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgRm9udC50ZXh0dXJlcyA9IFtyZXNdLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGNyZWF0ZVRleHR1cmUoZ2wsIGkpXG5cbiAgICAgICAgICAgIHQubWluRmlsdGVyID0gZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICAgICAgICAgIHQubWFnRmlsdGVyID0gZ2wuTElORUFSXG5cbiAgICAgICAgICAgIHZhciBleHQgPSAoZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWMnKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBnbC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpKTtcbiAgICAgICAgICAgIGlmIChleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4QW5pc3Ryb3BoeSA9IGdsLmdldFBhcmFtZXRlcihleHQuTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJmKGdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgTWF0aC5taW4oMTYsIG1heEFuaXN0cm9waHkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5nZW5lcmF0ZU1pcG1hcCgpXG4gICAgICAgICAgICByZXR1cm4gdFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgY2IobnVsbCwgRm9udClcbiAgICB9KVxufSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG52YXIgbnVtYmVyID0gcmVxdWlyZSgnYXMtbnVtYmVyJykgICAgXG5cbnZhciBsaXBzdW0gPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgdmVsIGVsZWlmZW5kIG1hc3NhLCBsYW9yZWV0IGVmZmljaXR1ciBkdWkuIFNlZCBldWlzbW9kIHZlbGl0IGlkIGxlbyBldWlzbW9kIHJ1dHJ1bS4gQ3JhcyBmcmluZ2lsbGEgdmVoaWN1bGEgZG9sb3IgdmVsIGNvbmd1ZS4gQ3JhcyBjb25ndWUgc2VkIG51bGxhIG5lYyBmYXVjaWJ1cy4gU2VkIGxhY2luaWEgdGVsbHVzIG5vbiBxdWFtIHRlbXB1cyBpYWN1bGlzLiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBtaSB2ZWwgZXJhdCBzY2VsZXJpc3F1ZSBtb2xsaXMuIFBoYXNlbGx1cyBwdWx2aW5hciBtYWxlc3VhZGEgcmlzdXMuIE5hbSBuZWMgbGFjdXMgbHVjdHVzLCB1bHRyaWNlcyBsYWN1cyBub24sIG9ybmFyZSBwdXJ1cy4gQWxpcXVhbSBwdXJ1cyBlbGl0LCBtYXR0aXMgYSBlc3QgcXVpcywgbW9sbGlzIGludGVyZHVtIG1hdXJpcy4gRG9uZWMgZXggbGVjdHVzLCB2ZWhpY3VsYSBuZWMgb3JjaSBsb2JvcnRpcywgc2VtcGVyIGFsaXF1YW0gbmlzaS4gTWF1cmlzIHRpbmNpZHVudCBsb3JlbSBldCBjb21tb2RvIGZyaW5naWxsYS4nXG5saXBzdW0gPSBsaXBzdW0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBzLnN1YnN0cmluZygwLCBNYXRoLm1pbigzMCwgcy5sZW5ndGgpKVxufSkuZmlsdGVyKGZ1bmN0aW9uKHMpIHtcbiAgICByZXR1cm4gcy50cmltKCkubGVuZ3RoPjFcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGFyZW50LCBuKSB7XG4gICAgbiA9IG51bWJlcihuLCAxMClcbiAgICB2YXIgcG9pbnRzID0gW11cbiAgICBmb3IgKHZhciBpPTA7IGk8bjsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAyLjAgKiBNYXRoLlBJXG4gICAgICAgIHZhciB6ID0gKE1hdGgucmFuZG9tKCkgKiAyLjApIC0gMS4wXG4gICAgICAgIHZhciBzY2FsZSA9IDE1XG4gICAgICAgIHZhciB6U2NhbGUgPSBNYXRoLnNxcnQoMS4wLXoqeikgKiBzY2FsZVxuICAgICAgICAvLyB2YXIgaCA9IDIsIGwgPSAxLjVcbiAgICAgICAgLy8gdmFyIHpTY2FsZSA9IGxlcnAobCwgaCwgTWF0aC5yYW5kb20oKSlcblxuICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICAgIE1hdGguY29zKHIpKnpTY2FsZSxcbiAgICAgICAgICAgIE1hdGguc2luKHIpKnpTY2FsZSArIHNjYWxlLFxuICAgICAgICAgICAgeiAqIHNjYWxlXG4gICAgICAgICkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBvaW50cy5tYXAoZnVuY3Rpb24odiwgaSkge1xuICAgICAgICB2YXIgZGlyID0gdi5jbG9uZSgpLnN1YihuZXcgVEhSRUUuVmVjdG9yMygwLHYueSwwKSkubm9ybWFsaXplKClcbiAgICAgICAgdmFyIG9iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpXG4gICAgICAgIC8vIHZhciBvYmplY3QgPSBuZXcgVEhSRUUuTWVzaChzcGhlcmUsIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6MHhmZjAwMDB9KSlcbiAgICAgICAgcGFyZW50LmFkZChvYmplY3QpXG4gICAgICAgIG9iamVjdC52aXNpYmxlID0gZmFsc2VcblxuICAgICAgICBvYmplY3QucG9zaXRpb24uY29weSh2KVxuXG4gICAgICAgIG9iamVjdC5yb3RhdGlvbi54ID0gMFxuXG4gICAgICAgIHZhciBkeCA9IHYueCxcbiAgICAgICAgICAgIGR6ID0gdi56XG4gICAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gLU1hdGguYXRhbjIoZHosIGR4KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcixcbiAgICAgICAgICAgIG9yaWdpbjogdixcbiAgICAgICAgICAgIGZhZGU6IDAuMCxcbiAgICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgICAgdGV4dDogbGlwc3VtWyBpICUgbGlwc3VtLmxlbmd0aCBdXG4gICAgICAgIH1cbiAgICB9KVxufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcblxudmFyIFJpZ1NjZW5lID0gcmVxdWlyZSgnLi9SaWdTY2VuZScpXG52YXIgT3JiaXRDb250cm9sbGVyID0gcmVxdWlyZSgnLi90aHJlZS1vcmJpdC1jYW1lcmEnKShUSFJFRSlcbnZhciBUZXh0UmVuZGVyZXIgPSByZXF1aXJlKCcuL1RleHRSZW5kZXJlcicpXG52YXIgRWZmZWN0cyA9IHJlcXVpcmUoJy4vc2V0dXAtZWZmZWN0cycpXG5cbnZhciBUd2VlbkxpdGUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5Ud2Vlbk1heCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVHdlZW5NYXggOiBudWxsKVxudmFyIGNyZWF0ZUZlYXR1cmVzID0gcmVxdWlyZSgnLi9mZWF0dXJlLXBvaW50cycpXG5cbnZhciBudW1iZXIgPSByZXF1aXJlKCdhcy1udW1iZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdCkge1xuICAgIG9wdCA9IG9wdHx8e31cblxuICAgIHZhciBGb250ID0gb3B0LmZvbnRcblxuICAgIGlmICghRm9udCB8fCAhRm9udC50ZXh0dXJlcylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgZm9udCB3aXRoIHRleHR1cmVzJylcblxuICAgIHZhciByZW5kZXJlcixcbiAgICAgICAgc2NlbmUsXG4gICAgICAgIGNhbWVyYSxcbiAgICAgICAgY2FtZXJhQ29udHJvbGxlcixcbiAgICAgICAgZmVhdHVyZXMsXG4gICAgICAgIHRleHRSZW5kZXJlcixcbiAgICAgICAgd2F0ZXIsXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIHRpbWUgPSAwXG5cbiAgICBpZiAoIW9wdC5nbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgR0wgY29udGV4dCcpXG5cbiAgICBzZXR1cChvcHQuZ2wsIG9wdC53aWR0aHx8MCwgb3B0LmhlaWdodHx8MClcblxuICAgIGZ1bmN0aW9uIGRyYXcoZHQpIHtcbiAgICAgICAgdGltZSArPSAgTWF0aC5taW4oZHQsIDMwKSAvIDEwMDBcbiAgICAgICAgcmVuZGVyZXIucmVzZXRBdHRyaWJ1dGVzKClcbiAgICAgICAgcmVuZGVyZXIucmVzZXRHTFN0YXRlKClcblxuICAgICAgICB3YXRlci5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdGltZSAqIDAuMVxuICAgICAgICB3YXRlci5yZW5kZXIoKVxuXG4gICAgICAgIGNhbWVyYUNvbnRyb2xsZXIudXBkYXRlKClcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLnVwZGF0ZShkdClcbiAgICAgICAgZWZmZWN0cy5yZW5kZXIoZHQpXG5cbiAgICAgICAgdGV4dFJlbmRlcmVyLnRpbWUgPSB0aW1lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXAoZ2wsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IFxuICAgICAgICAgICAgY2FudmFzOiBnbC5jYW52YXMsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYsIDApXG5cbiAgICAgICAgb3B0LmZvdiA9IG51bWJlcihvcHQuZm92LCA1MClcbiAgICAgICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKG9wdC5mb3YsIHdpZHRoL2hlaWdodCwgMC41LCAyMDAwMClcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSA1MFxuICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDIwXG4gICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoKSlcblxuICAgICAgICBjYW1lcmFDb250cm9sbGVyID0gbmV3IE9yYml0Q29udHJvbGxlcihjYW1lcmEpXG4gICAgICAgIGNhbWVyYUNvbnRyb2xsZXIudXNlclBhbiA9IGZhbHNlXG4gICAgICAgIGNhbWVyYUNvbnRyb2xsZXIudXNlclBhblNwZWVkID0gMC4wXG4gICAgICAgIGNhbWVyYUNvbnRyb2xsZXIuem9vbVNwZWVkID0gMC4wMDFcbiAgICAgICAgY2FtZXJhQ29udHJvbGxlci5yb3RhdGVTcGVlZCA9IDAuMlxuICAgICAgICBjYW1lcmFDb250cm9sbGVyLm1pbkRpc3RhbmNlID0gMzBcbiAgICAgICAgY2FtZXJhQ29udHJvbGxlci5tYXhEaXN0YW5jZSA9IDIwMC4wXG4gICAgICAgIGNhbWVyYUNvbnRyb2xsZXIubWF4UG9sYXJBbmdsZSA9IDg4ICogTWF0aC5QSS8xODBcbiAgICAgICAgY2FtZXJhQ29udHJvbGxlci5taW5Qb2xhckFuZ2xlID0gNDAgKiBNYXRoLlBJLzE4MFxuICAgICAgICBjYW1lcmFDb250cm9sbGVyLmNlbnRlci5zZXQoIDAsIDQsIDAgKVxuXG4gICAgICAgIHNjZW5lID0gUmlnU2NlbmUoKVxuXG4gICAgICAgIHRleHRSZW5kZXJlciA9IFRleHRSZW5kZXJlcihnbCwge1xuICAgICAgICAgICAgZm9udDogRm9udCxcbiAgICAgICAgICAgIHRleHR1cmVzOiBGb250LnRleHR1cmVzXG4gICAgICAgIH0pXG5cbiAgICAgICAgd2F0ZXIgPSByZXF1aXJlKCcuL3NldHVwLXdhdGVyJykocmVuZGVyZXIsIGNhbWVyYSwgc2NlbmUpXG4gICAgICAgIFxuICAgICAgICBzY2VuZS5jdWJlTWFwID0gd2F0ZXIuY3ViZU1hcFxuICAgICAgICBzY2VuZS51cGRhdGVNYXRlcmlhbCgpXG5cbiAgICAgICAgZWZmZWN0cyA9IEVmZmVjdHMoe1xuICAgICAgICAgICAgcmVuZGVyZXI6IHJlbmRlcmVyLFxuICAgICAgICAgICAgc2NlbmU6IHNjZW5lLFxuICAgICAgICAgICAgY2FtZXJhOiBjYW1lcmEsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9KVxuXG4gICAgICAgIGZlYXR1cmVzID0gY3JlYXRlRmVhdHVyZXMoc2NlbmUpXG4gICAgICAgIGVmZmVjdHMuc2V0VGV4dCh0ZXh0UmVuZGVyZXIsIGZlYXR1cmVzKVxuXG5cbiAgICAgICAgVHdlZW5NYXguc3RhZ2dlckZyb21UbyhmZWF0dXJlcywgMS4wLCB7XG4gICAgICAgICAgICBmYWRlOiAwXG4gICAgICAgIH0sIHsgXG4gICAgICAgICAgICBkZWxheTogMS4wLFxuICAgICAgICAgICAgZmFkZTogMS4wLFxuICAgICAgICAgICAgZWFzZTogXCJlYXNlT3V0RXhwb1wiXG4gICAgICAgIH0sIDAuMDUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgICAgICBjYW1lcmEuYXNwZWN0ID0gd2lkdGgvaGVpZ2h0XG4gICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KClcblxuICAgICAgICBlZmZlY3RzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRyYXc6IGRyYXcsXG4gICAgICAgIHJlc2l6ZTogaGFuZGxlUmVzaXplXG4gICAgfVxufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciBFZmZlY3RDb21wb3NlciA9IHJlcXVpcmUoJ3RocmVlLWVmZmVjdGNvbXBvc2VyJykoVEhSRUUpXG52YXIgY3JlYXRlRlhBQSA9IHJlcXVpcmUoJ3RocmVlLXNoYWRlci1meGFhJykoVEhSRUUpXG52YXIgY3JlYXRlQmx1ciA9IHJlcXVpcmUoJy4vc2hhZGVycy9ibHVyJylcbnZhciBjcmVhdGVMZW5zID0gcmVxdWlyZSgnLi9zaGFkZXJzL2xlbnMnKVxudmFyIGNyZWF0ZUVtcHR5ID0gcmVxdWlyZSgnLi9zaGFkZXJzL3Bhc3MnKVxudmFyIFRleHRQYXNzID0gcmVxdWlyZSgnLi9UZXh0UGFzcycpXG5cbm1vZHVsZS5leHBvcnRzID0gRWZmZWN0c1xuXG5mdW5jdGlvbiBFZmZlY3RzKG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFZmZlY3RzKSkgXG4gICAgICAgIHJldHVybiBuZXcgRWZmZWN0cyhvcHQpXG4gICAgb3B0ID0gb3B0fHx7fVxuXG5cbiAgICB2YXIgcGFyYW1ldGVycyA9IHsgXG4gICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIFxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwgXG4gICAgICAgIHN0ZW5jaWxCdWZmZXI6IGZhbHNlIFxuICAgIH1cbiAgICB2YXIgd2lkdGggPSBvcHQud2lkdGhcbiAgICB2YXIgaGVpZ2h0ID0gb3B0LmhlaWdodFxuICAgIHZhciByZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQod2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyk7XG5cbiAgICB0aGlzLmNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKG9wdC5yZW5kZXJlciwgcmVuZGVyVGFyZ2V0KVxuXG4gICAgdGhpcy50ZXh0UGFzcyA9IG5ldyBUZXh0UGFzcyhvcHQuc2NlbmUsIG9wdC5jYW1lcmEpXG4gICAgdGhpcy5jb21wb3Nlci5hZGRQYXNzKHRoaXMudGV4dFBhc3MpXG4gICAgXG4gICAgdGhpcy5zaGFkZXJzID0gW11cbiAgICB0aGlzLm5vaXNlRGVsYXkgPSAzM1xuICAgIHRoaXMubm9pc2VUaW1lID0gMFxuXG4gICAgLy8gdGhpcy5zaGFkZXJzLnB1c2gobmV3IEVmZmVjdENvbXBvc2VyLlNoYWRlclBhc3MoY3JlYXRlRW1wdHkoKSkpXG5cblxuICAgIHZhciBmeGFhU2hhZGVyID0gbmV3IEVmZmVjdENvbXBvc2VyLlNoYWRlclBhc3MoY3JlYXRlRlhBQSgpKVxuICAgIHRoaXMuc2hhZGVycy5wdXNoKGZ4YWFTaGFkZXIpXG5cbiAgICBpZiAob3B0LmJsdXIgIT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBibHVyID0gY3JlYXRlQmx1cigpXG4gICAgICAgIHZhciBpdGVyYXRpb25zID0gMTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSAoaSsxKSoyO1xuXG4gICAgICAgICAgICB2YXIgaG9yaXogPSBuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyggYmx1ciApO1xuICAgICAgICAgICAgaG9yaXoudW5pZm9ybXMucmFkaXVzLnZhbHVlID0gclxuICAgICAgICAgICAgaG9yaXoudW5pZm9ybXMuc3RyZW5ndGgudmFsdWUgPSAxXG4gICAgICAgICAgICBob3Jpei51bmlmb3Jtcy5kaXIudmFsdWUuc2V0KDEsMClcblxuICAgICAgICAgICAgdmFyIHZlcnQgPSBuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyggYmx1ciApO1xuICAgICAgICAgICAgdmVydC51bmlmb3Jtcy5yYWRpdXMudmFsdWUgPSByXG4gICAgICAgICAgICB2ZXJ0LnVuaWZvcm1zLnN0cmVuZ3RoLnZhbHVlID0gMVxuICAgICAgICAgICAgdmVydC51bmlmb3Jtcy5kaXIudmFsdWUuc2V0KDAsMSlcblxuICAgICAgICAgICAgdGhpcy5zaGFkZXJzLnB1c2goaG9yaXosIHZlcnQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGVuc1Bhc3MgPSBuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyhjcmVhdGVMZW5zKCkpXG4gICAgdGhpcy5zaGFkZXJzLnB1c2gobGVuc1Bhc3MpXG5cbiAgICBsZW5zUGFzcy51bmlmb3Jtcy50TG9va3VwLnZhbHVlID0gbG9hZFRleHR1cmUoJ2ltZy9sb29rdXAucG5nJywgeyBmaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciB9KVxuXG4gICAgdGhpcy5zaGFkZXJzLmZvckVhY2goZnVuY3Rpb24ocGFzcywgaSwgc2VsZikge1xuICAgICAgICB0aGlzLmNvbXBvc2VyLmFkZFBhc3MocGFzcylcbiAgICAgICAgaWYgKGkgPT09IHNlbGYubGVuZ3RoLTEpXG4gICAgICAgICAgICBwYXNzLnJlbmRlclRvU2NyZWVuID0gdHJ1ZVxuICAgIH0sIHRoaXMpICBcbiAgICBpZiAob3B0LndpZHRoICYmIG9wdC5oZWlnaHQpIFxuICAgICAgICB0aGlzLnJlc2l6ZShvcHQud2lkdGgsIG9wdC5oZWlnaHQpXG59XG5cblxuZnVuY3Rpb24gbG9hZFRleHR1cmUocGF0aCwgb3B0KSB7XG4gICAgcmV0dXJuIFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUocGF0aCwgdW5kZWZpbmVkLCBmdW5jdGlvbih0ZXgpIHtcbiAgICAgICAgaWYgKG9wdC5maWx0ZXIpIHRleC5taW5GaWx0ZXIgPSB0ZXgubWFnRmlsdGVyID0gb3B0LmZpbHRlclxuICAgICAgICBpZiAob3B0LndyYXApIHRleC53cmFwUyA9IHRleC53cmFwVCA9IG9wdC53cmFwXG4gICAgfSlcbn1cblxucmVxdWlyZSgnbWl4ZXMnKShFZmZlY3RzLCB7XG5cbiAgICBzZXRUZXh0OiBmdW5jdGlvbih0ZXh0UmVuZGVyZXIsIGZlYXR1cmVzKSB7XG4gICAgICAgIHRoaXMudGV4dFBhc3MudGV4dCA9IHRleHRSZW5kZXJlclxuICAgICAgICB0aGlzLnRleHRQYXNzLmZlYXR1cmVzID0gZmVhdHVyZXNcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbihkdCkge1xuICAgICAgICB0aGlzLm5vaXNlVGltZSArPSBkdFxuICAgICAgICBpZiAodGhpcy5ub2lzZVRpbWUgPiB0aGlzLm5vaXNlRGVsYXkpIHtcbiAgICAgICAgICAgIHRoaXMubm9pc2VUaW1lID0gMFxuICAgICAgICAgICAgdGhpcy5zaGFkZXJzLmZvckVhY2goZnVuY3Rpb24ocGFzcykge1xuICAgICAgICAgICAgICAgIGlmIChwYXNzLnVuaWZvcm1zLnRpY2spXG4gICAgICAgICAgICAgICAgICAgIHBhc3MudW5pZm9ybXMudGljay52YWx1ZSArPSAwLjAwNVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcG9zZXIucmVuZGVyKClcbiAgICB9LFxuXG4gICAgcmVzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoICo9IDJcbiAgICAgICAgaGVpZ2h0ICo9IDJcbiAgICAgICAgdGhpcy5jb21wb3Nlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIHRoaXMuc2hhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhc3MpIHtcbiAgICAgICAgICAgIHZhciBkcHIgPSAxXG4gICAgICAgICAgICAvLyB2YXIgZHByID0gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKVxuICAgICAgICAgICAgaWYgKHBhc3MudW5pZm9ybXMucmVzb2x1dGlvbilcbiAgICAgICAgICAgICAgICBwYXNzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KHdpZHRoKmRwciwgaGVpZ2h0KmRwcilcbiAgICAgICAgfSlcbiAgICB9XG59KVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwidmFyIGN1YmVTaGFkZXIgPSB7XG5cbiAgICB1bmlmb3JtczogVEhSRUUuVW5pZm9ybXNVdGlscy5tZXJnZSggW1xuICAgICAgICB7IFwidEN1YmVcIjogeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgXCJ0RmxpcFwiOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogLSAxIH0gfSxcbiAgICAgICAgVEhSRUUuVW5pZm9ybXNMaWJbIFwiZm9nXCIgXVxuICAgIF0gKSxcblxuICAgIHZlcnRleFNoYWRlcjogW1xuXG4gICAgICAgIFwidmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1wiLFxuXG4gICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImxvZ2RlcHRoYnVmX3BhcnNfdmVydGV4XCIgXSxcblxuICAgICAgICBcInZvaWQgbWFpbigpIHtcIixcblxuICAgICAgICBcIiAgIHZlYzQgd29ybGRQb3NpdGlvbiA9IG1vZGVsTWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxuICAgICAgICBcIiAgIHZXb3JsZFBvc2l0aW9uID0gd29ybGRQb3NpdGlvbi54eXo7XCIsXG5cbiAgICAgICAgXCIgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXG5cbiAgICAgICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImxvZ2RlcHRoYnVmX3ZlcnRleFwiIF0sXG5cbiAgICAgICAgXCJ9XCJcblxuICAgIF0uam9pbihcIlxcblwiKSxcblxuICAgIGZyYWdtZW50U2hhZGVyOiBbXG5cbiAgICAgICAgXCJ1bmlmb3JtIHNhbXBsZXJDdWJlIHRDdWJlO1wiLFxuICAgICAgICBcInVuaWZvcm0gZmxvYXQgdEZsaXA7XCIsXG5cbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XCIsXG4gICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImxvZ2RlcHRoYnVmX3BhcnNfZnJhZ21lbnRcIiBdLFxuICAgICAgICBUSFJFRS5TaGFkZXJDaHVua1sgXCJmb2dfcGFyc19mcmFnbWVudFwiIF0sXG4gICAgICAgIFwidm9pZCBtYWluKCkge1wiLFxuICAgICAgICBcIiAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmVDdWJlKCB0Q3ViZSwgdmVjMyggdEZsaXAgKiB2V29ybGRQb3NpdGlvbi54LCB2V29ybGRQb3NpdGlvbi55eiApICk7XCIsXG4gICAgICAgICAgICBUSFJFRS5TaGFkZXJDaHVua1sgXCJsb2dkZXB0aGJ1Zl9mcmFnbWVudFwiIF0sXG4gICAgICAgICAgICBUSFJFRS5TaGFkZXJDaHVua1sgXCJmb2dfZnJhZ21lbnRcIiBdLFxuICAgICAgICBcIn1cIlxuXG4gICAgXS5qb2luKFwiXFxuXCIpXG5cbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVuZGVyZXIsIGNhbWVyYSwgc2NlbmUpIHtcbiAgICB2YXIgbGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KDB4YmJlOWZmLCAweDA4MDgyMCwgMSlcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoLTEsIDEsIC0xKVxuICAgIHNjZW5lLmFkZChsaWdodClcblxuICAgIHZhciB3YXRlck5vcm1hbHMgPSBuZXcgVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSgnaW1nL3dhdGVybm9ybWFsczUuanBnJylcbiAgICB3YXRlck5vcm1hbHMud3JhcFMgPSB3YXRlck5vcm1hbHMud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZ1xuXG4gICAgdmFyIHdhdGVyID0gbmV3IFRIUkVFLldhdGVyKHJlbmRlcmVyLCBjYW1lcmEsIHNjZW5lLCB7XG4gICAgICAgIHRleHR1cmVXaWR0aDogNTEyLFxuICAgICAgICB0ZXh0dXJlSGVpZ2h0OiA1MTIsXG4gICAgICAgIHdhdGVyTm9ybWFsczogd2F0ZXJOb3JtYWxzLFxuICAgICAgICBhbHBoYTogMC45LFxuICAgICAgICBzdW5EaXJlY3Rpb246IGxpZ2h0LnBvc2l0aW9uLmNsb25lKCkubm9ybWFsaXplKCksXG4gICAgICAgIHN1bkNvbG9yOiAweGZmZmZmZixcbiAgICAgICAgd2F0ZXJDb2xvcjogMHgwMjBkMTUsXG4gICAgICAgIGRpc3RvcnRpb25TY2FsZTogODAuMCxcbiAgICB9KVxuXG4gICAgdmFyIG1pcnJvck1lc2ggPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoNTAwMCwgNTAwMCksXG4gICAgICAgIHdhdGVyLm1hdGVyaWFsXG4gICAgKVxuXG4gICAgbWlycm9yTWVzaC5hZGQod2F0ZXIpXG4gICAgbWlycm9yTWVzaC5yb3RhdGlvbi54ID0gLU1hdGguUEkgKiAwLjVcbiAgICBzY2VuZS5hZGQobWlycm9yTWVzaClcblxuXG4gICAgLy8gbG9hZCBza3lib3hcblxuICAgIHZhciBjdWJlTWFwID0gbmV3IFRIUkVFLkN1YmVUZXh0dXJlKFtdKVxuICAgIGN1YmVNYXAuZm9ybWF0ID0gVEhSRUUuUkdCRm9ybWF0XG4gICAgY3ViZU1hcC5mbGlwWSA9IGZhbHNlXG5cbiAgICB2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkltYWdlTG9hZGVyKClcbiAgICBsb2FkZXIubG9hZCgnaW1nL2Nsb3VkeV9uaWdodDIuanBnJywgZnVuY3Rpb24oaW1hZ2UpIHtcblxuICAgICAgICB2YXIgZ2V0U2lkZSA9IGZ1bmN0aW9uKHgsIHkpIHtcblxuICAgICAgICAgICAgdmFyIHNpemUgPSAxMDI0XG5cbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZVxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemVcblxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIC14ICogc2l6ZSwgLXkgKiBzaXplKVxuXG4gICAgICAgICAgICByZXR1cm4gY2FudmFzXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1YmVNYXAuaW1hZ2VzWzBdID0gZ2V0U2lkZSgyLCAxKSAvLyBweFxuICAgICAgICBjdWJlTWFwLmltYWdlc1sxXSA9IGdldFNpZGUoMCwgMSkgLy8gbnhcbiAgICAgICAgY3ViZU1hcC5pbWFnZXNbMl0gPSBnZXRTaWRlKDEsIDApIC8vIHB5XG4gICAgICAgIGN1YmVNYXAuaW1hZ2VzWzNdID0gZ2V0U2lkZSgxLCAyKSAvLyBueVxuICAgICAgICBjdWJlTWFwLmltYWdlc1s0XSA9IGdldFNpZGUoMSwgMSkgLy8gcHpcbiAgICAgICAgY3ViZU1hcC5pbWFnZXNbNV0gPSBnZXRTaWRlKDMsIDEpIC8vIG56XG4gICAgICAgIGN1YmVNYXAubmVlZHNVcGRhdGUgPSB0cnVlXG5cbiAgICB9KVxuXG4gICAgY3ViZVNoYWRlci51bmlmb3Jtcy50Q3ViZS52YWx1ZSA9IGN1YmVNYXBcblxuICAgIHZhciBza3lCb3hNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBjdWJlU2hhZGVyLmZyYWdtZW50U2hhZGVyLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGN1YmVTaGFkZXIudmVydGV4U2hhZGVyLFxuICAgICAgICB1bmlmb3JtczogY3ViZVNoYWRlci51bmlmb3JtcyxcbiAgICAgICAgLy8gZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICAgIHNpZGU6IFRIUkVFLkJhY2tTaWRlLFxuICAgICAgICBmb2c6IHRydWUsXG4gICAgfSlcblxuICAgIHZhciBza3lCb3ggPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgbmV3IFRIUkVFLkJveEdlb21ldHJ5KDUwMDAsIDUwMDAsIDUwMDApLFxuICAgICAgICBza3lCb3hNYXRlcmlhbFxuICAgIClcbiAgICBcbiAgICB3YXRlci5jdWJlTWFwID0gY3ViZU1hcFxuXG4gICAgc2NlbmUuYWRkKHNreUJveClcbiAgICByZXR1cm4gd2F0ZXJcbn0iLCJ2YXIgZ2xzbGlmeSA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoXCJnbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzXCIpKFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG51bmlmb3JtIGZsb2F0IHJhZGl1cztcXG51bmlmb3JtIHZlYzIgZGlyO1xcbnVuaWZvcm0gZmxvYXQgc3RyZW5ndGg7XFxudW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG52ZWM0IGFfeF9ibHVyKHNhbXBsZXIyRCB0ZXgsIHZlYzIgdXYsIHZlYzIgYmx1ciwgdmVjMiBkaXJlY3Rpb24pIHtcXG4gIHZlYzQgc3VtID0gdmVjNCgwLjApO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDQuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gNC4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMDE2MjE2MjE2MjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSAzLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDMuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjA1NDA1NDA1NDE7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54IC0gMi4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgLSAyLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xMjE2MjE2MjE2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDEuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gMS4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTk0NTk0NTk0NjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LngsIHV2LnkpKSAqIDAuMjI3MDI3MDI3MDtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyAxLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDEuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjE5NDU5NDU5NDY7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgMi4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyAyLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xMjE2MjE2MjE2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCArIDMuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55ICsgMy4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMDU0MDU0MDU0MTtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyA0LjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDQuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjAxNjIxNjIxNjI7XFxuICByZXR1cm4gc3VtO1xcbn1cXG52b2lkIG1haW4oKSB7XFxuICB2ZWMyIGJsdXJBbXQgPSB2ZWMyKHJhZGl1cykgLyByZXNvbHV0aW9uO1xcbiAgdmVjNCBzdW0gPSBhX3hfYmx1cih0RGlmZnVzZSwgdlV2LCBibHVyQW10LCBkaXIpO1xcbiAgdmVjMiBwID0gKGdsX0ZyYWdDb29yZC54eSAvIHJlc29sdXRpb24ueHkgLSAwLjUpO1xcbiAgcC54ICo9IHJlc29sdXRpb24ueCAvIHJlc29sdXRpb24ueTtcXG4gIGZsb2F0IGxlbiA9IHNtb290aHN0ZXAoMC41LCAxLjIsIGxlbmd0aChwKSk7XFxuICB2ZWMzIG9yaWcgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmdiO1xcbiAgZ2xfRnJhZ0NvbG9yLnJnYiA9IG1peChvcmlnLCBzdW0ucmdiLCBsZW4gKyAwLjEpO1xcbiAgZ2xfRnJhZ0NvbG9yLmEgPSAxLjA7XFxufVwiLCBbe1wibmFtZVwiOlwicmVzb2x1dGlvblwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJyYWRpdXNcIixcInR5cGVcIjpcImZsb2F0XCJ9LHtcIm5hbWVcIjpcImRpclwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJzdHJlbmd0aFwiLFwidHlwZVwiOlwiZmxvYXRcIn0se1wibmFtZVwiOlwidERpZmZ1c2VcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifV0sIFtdKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vY3JlYXRlXCIpKHNvdXJjZSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciB0aHJlZWlmeSA9IHJlcXVpcmUoJ3RocmVlLWdsc2xpZnknKShUSFJFRSlcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJykgXG4gXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiBmdW5jdGlvbihvcHQpIHtcbiAgICAgICAgcmV0dXJuIHh0ZW5kKHRocmVlaWZ5KHNvdXJjZSksIG9wdClcbiAgICB9XG59XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCJ2YXIgZ2xzbGlmeSA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoXCJnbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzXCIpKFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIGZsb2F0IHRpY2s7XFxudW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxudW5pZm9ybSBzYW1wbGVyMkQgdExvb2t1cDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0T3ZlcmxheTtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gdmVjMiBvdmVybGF5UmVzb2x1dGlvbjtcXG5oaWdocCBmbG9hdCBhX3hfcmFuZG9tKHZlYzIgY28pIHtcXG4gIGhpZ2hwIGZsb2F0IGEgPSAxMi45ODk4O1xcbiAgaGlnaHAgZmxvYXQgYiA9IDc4LjIzMztcXG4gIGhpZ2hwIGZsb2F0IGMgPSA0Mzc1OC41NDUzO1xcbiAgaGlnaHAgZmxvYXQgZHQgPSBkb3QoY28ueHksIHZlYzIoYSwgYikpO1xcbiAgaGlnaHAgZmxvYXQgc24gPSBtb2QoZHQsIDMuMTQpO1xcbiAgcmV0dXJuIGZyYWN0KHNpbihzbikgKiBjKTtcXG59XFxudmVjMyBiX3hfYmxlbmRPdmVybGF5KHZlYzMgYmFzZSwgdmVjMyBibGVuZCkge1xcbiAgcmV0dXJuIHZlYzMoYmFzZS5yIDwgMC41ID8gKDIuMCAqIGJhc2UuciAqIGJsZW5kLnIpIDogKDEuMCAtIDIuMCAqICgxLjAgLSBiYXNlLnIpICogKDEuMCAtIGJsZW5kLnIpKSwgYmFzZS5nIDwgMC41ID8gKDIuMCAqIGJhc2UuZyAqIGJsZW5kLmcpIDogKDEuMCAtIDIuMCAqICgxLjAgLSBiYXNlLmcpICogKDEuMCAtIGJsZW5kLmcpKSwgYmFzZS5iIDwgMC41ID8gKDIuMCAqIGJhc2UuYiAqIGJsZW5kLmIpIDogKDEuMCAtIDIuMCAqICgxLjAgLSBiYXNlLmIpICogKDEuMCAtIGJsZW5kLmIpKSk7XFxufVxcbmZsb2F0IGNfeF9sdW1hKHZlYzMgY29sb3IpIHtcXG4gIHJldHVybiBkb3QoY29sb3IsIHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCkpO1xcbn1cXG5mbG9hdCBjX3hfbHVtYSh2ZWM0IGNvbG9yKSB7XFxuICByZXR1cm4gZG90KGNvbG9yLnJnYiwgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSk7XFxufVxcbiNkZWZpbmUgTFVUX0ZMSVBfWVxcblxcbnZlYzQgZV94X2xvb2t1cChpbiB2ZWM0IHRleHR1cmVDb2xvciwgaW4gc2FtcGxlcjJEIGxvb2t1cFRhYmxlKSB7XFxuICBcXG4gICNpZm5kZWYgTFVUX05PX0NMQU1QXFxuICB0ZXh0dXJlQ29sb3IgPSBjbGFtcCh0ZXh0dXJlQ29sb3IsIDAuMCwgMS4wKTtcXG4gICNlbmRpZlxcbiAgbWVkaXVtcCBmbG9hdCBibHVlQ29sb3IgPSB0ZXh0dXJlQ29sb3IuYiAqIDYzLjA7XFxuICBtZWRpdW1wIHZlYzIgcXVhZDE7XFxuICBxdWFkMS55ID0gZmxvb3IoZmxvb3IoYmx1ZUNvbG9yKSAvIDguMCk7XFxuICBxdWFkMS54ID0gZmxvb3IoYmx1ZUNvbG9yKSAtIChxdWFkMS55ICogOC4wKTtcXG4gIG1lZGl1bXAgdmVjMiBxdWFkMjtcXG4gIHF1YWQyLnkgPSBmbG9vcihjZWlsKGJsdWVDb2xvcikgLyA4LjApO1xcbiAgcXVhZDIueCA9IGNlaWwoYmx1ZUNvbG9yKSAtIChxdWFkMi55ICogOC4wKTtcXG4gIGhpZ2hwIHZlYzIgdGV4UG9zMTtcXG4gIHRleFBvczEueCA9IChxdWFkMS54ICogMC4xMjUpICsgMC41IC8gNTEyLjAgKyAoKDAuMTI1IC0gMS4wIC8gNTEyLjApICogdGV4dHVyZUNvbG9yLnIpO1xcbiAgdGV4UG9zMS55ID0gKHF1YWQxLnkgKiAwLjEyNSkgKyAwLjUgLyA1MTIuMCArICgoMC4xMjUgLSAxLjAgLyA1MTIuMCkgKiB0ZXh0dXJlQ29sb3IuZyk7XFxuICAjaWZkZWYgTFVUX0ZMSVBfWVxcbiAgdGV4UG9zMS55ID0gMS4wIC0gdGV4UG9zMS55O1xcbiAgI2VuZGlmXFxuICBoaWdocCB2ZWMyIHRleFBvczI7XFxuICB0ZXhQb3MyLnggPSAocXVhZDIueCAqIDAuMTI1KSArIDAuNSAvIDUxMi4wICsgKCgwLjEyNSAtIDEuMCAvIDUxMi4wKSAqIHRleHR1cmVDb2xvci5yKTtcXG4gIHRleFBvczIueSA9IChxdWFkMi55ICogMC4xMjUpICsgMC41IC8gNTEyLjAgKyAoKDAuMTI1IC0gMS4wIC8gNTEyLjApICogdGV4dHVyZUNvbG9yLmcpO1xcbiAgI2lmZGVmIExVVF9GTElQX1lcXG4gIHRleFBvczIueSA9IDEuMCAtIHRleFBvczIueTtcXG4gICNlbmRpZlxcbiAgbG93cCB2ZWM0IG5ld0NvbG9yMSA9IHRleHR1cmUyRChsb29rdXBUYWJsZSwgdGV4UG9zMSk7XFxuICBsb3dwIHZlYzQgbmV3Q29sb3IyID0gdGV4dHVyZTJEKGxvb2t1cFRhYmxlLCB0ZXhQb3MyKTtcXG4gIGxvd3AgdmVjNCBuZXdDb2xvciA9IG1peChuZXdDb2xvcjEsIG5ld0NvbG9yMiwgZnJhY3QoYmx1ZUNvbG9yKSk7XFxuICByZXR1cm4gbmV3Q29sb3I7XFxufVxcbnZvaWQgbWFpbigpIHtcXG4gIHZlYzMgdGV4Q29sb3IgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmdiO1xcbiAgZmxvYXQgbm9pc2VNYXAgPSBzbW9vdGhzdGVwKGNfeF9sdW1hKHRleENvbG9yKSwgMC41LCAwLjApO1xcbiAgdmVjMiB0VXYgPSB2VXYgKyB0aWNrO1xcbiAgdmVjMyBub2lzZSA9IHZlYzMoYV94X3JhbmRvbSh0VXYpLCBhX3hfcmFuZG9tKHRVdiAqIDEuNSksIGFfeF9yYW5kb20odFV2ICogMC41KSk7XFxuICB2ZWMzIG5vaXNlQ29sb3IgPSBtaXgobm9pc2UsIHZlYzMoMC41KSwgbm9pc2VNYXApO1xcbiAgdmVjMyBjb2xvciA9IG1peCh0ZXhDb2xvciwgYl94X2JsZW5kT3ZlcmxheSh0ZXhDb2xvciwgbm9pc2UpLCAwLjE1KTtcXG4gIHZlYzMgY29ycmVjdGVkID0gZV94X2xvb2t1cCh2ZWM0KGNvbG9yLCAxLjApLCB0TG9va3VwKS5yZ2I7XFxuICBjb2xvciA9IG1peChjb2xvciwgY29ycmVjdGVkLCAwLjkpO1xcbiAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwgMS4wKTtcXG59XCIsIFt7XCJuYW1lXCI6XCJ0aWNrXCIsXCJ0eXBlXCI6XCJmbG9hdFwifSx7XCJuYW1lXCI6XCJ0RGlmZnVzZVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9LHtcIm5hbWVcIjpcInRMb29rdXBcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifSx7XCJuYW1lXCI6XCJ0T3ZlcmxheVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9LHtcIm5hbWVcIjpcIm92ZXJsYXlSZXNvbHV0aW9uXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9XSwgW10pO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jcmVhdGVcIikoc291cmNlKTsiLCJ2YXIgZ2xzbGlmeSA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoXCJnbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzXCIpKFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZvaWQgbWFpbigpIHtcXG4gIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXG59XCIsIFt7XCJuYW1lXCI6XCJ0RGlmZnVzZVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9XSwgW10pO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jcmVhdGVcIikoc291cmNlKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG52YXIgVHdlZW5NYXggPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5Ud2Vlbk1heCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVHdlZW5NYXggOiBudWxsKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gICAgaWYgKCFUSFJFRS5NT1VTRSlcbiAgICAgICAgVEhSRUUuTU9VU0UgPSB7IExFRlQ6IDAsIE1JRERMRTogMSwgUklHSFQ6IDIgfTtcblxuICAgIC8qKlxuICAgICAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gICAgICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuICAgICAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gICAgICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gICAgICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuICAgICAqL1xuICAgIC8qZ2xvYmFsIFRIUkVFLCBjb25zb2xlICovXG5cbiAgICAvLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy4gSXQgbWFpbnRhaW5zXG4gICAgLy8gdGhlIFwidXBcIiBkaXJlY3Rpb24gYXMgK1ksIHVubGlrZSB0aGUgVHJhY2tiYWxsQ29udHJvbHMuIFRvdWNoIG9uIHRhYmxldCBhbmQgcGhvbmVzIGlzXG4gICAgLy8gc3VwcG9ydGVkLlxuICAgIC8vXG4gICAgLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuICAgIC8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4gICAgLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG4gICAgLy9cbiAgICAvLyBUaGlzIGlzIGEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3IgKG1vc3QpIFRyYWNrYmFsbENvbnRyb2xzIHVzZWQgaW4gZXhhbXBsZXMuXG4gICAgLy8gVGhhdCBpcywgaW5jbHVkZSB0aGlzIGpzIGZpbGUgYW5kIHdoZXJldmVyIHlvdSBzZWU6XG4gICAgLy8gICAgICBjb250cm9scyA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyggY2FtZXJhICk7XG4gICAgLy8gICAgICBjb250cm9scy50YXJnZXQueiA9IDE1MDtcbiAgICAvLyBTaW1wbGUgc3Vic3RpdHV0ZSBcIk9yYml0Q29udHJvbHNcIiBhbmQgdGhlIGNvbnRyb2wgc2hvdWxkIHdvcmsgYXMtaXMuXG5cbiAgICBmdW5jdGlvbiBPcmJpdENvbnRyb2xzKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cbiAgICAgICAgLy8gQVBJXG5cbiAgICAgICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIGNvbnRyb2wgb3JiaXRzIGFyb3VuZFxuICAgICAgICAvLyBhbmQgd2hlcmUgaXQgcGFucyB3aXRoIHJlc3BlY3QgdG8uXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICAvLyBjZW50ZXIgaXMgb2xkLCBkZXByZWNhdGVkOyB1c2UgXCJ0YXJnZXRcIiBpbnN0ZWFkXG4gICAgICAgIHRoaXMuY2VudGVyID0gdGhpcy50YXJnZXQ7XG5cbiAgICAgICAgLy8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvclxuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB0aGlzLm5vWm9vbSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuICAgICAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXRcbiAgICAgICAgdGhpcy5taW5EaXN0YW5jZSA9IDA7XG4gICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuICAgICAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuICAgICAgICB0aGlzLm5vUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICAgICAgdGhpcy5ub1BhbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmtleVBhblNwZWVkID0gNy4wOyAvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcbiAgICAgICAgdGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG4gICAgICAgIC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgICAgICAvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cbiAgICAgICAgdGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuICAgICAgICB0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcbiAgICAgICAgdGhpcy5ub0tleXMgPSBmYWxzZTtcblxuICAgICAgICAvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG4gICAgICAgIHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cbiAgICAgICAgdGhpcy5jb25zdHJhaW5EZWx0YSA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIC8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBpbnRlcm5hbHNcblxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzO1xuXG4gICAgICAgIHZhciBFUFMgPSAwLjAwMDAwMTtcblxuICAgICAgICB2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgICAgICB2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICAgICAgdmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICAgICAgdmFyIHBoaURlbHRhID0gMDtcbiAgICAgICAgdmFyIHRoZXRhRGVsdGEgPSAwO1xuICAgICAgICB2YXIgc2NhbGUgPSAxO1xuICAgICAgICB2YXIgcGFuID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICB2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICB2YXIgU1RBVEUgPSB7IE5PTkUgOiAtMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuICAgICAgICB2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgIC8vIGZvciByZXNldFxuXG4gICAgICAgIHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblxuICAgICAgICAvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblxuICAgICAgICB2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcbiAgICAgICAgdmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuICAgICAgICAvLyBldmVudHNcblxuICAgICAgICB2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG4gICAgICAgIHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnfTtcbiAgICAgICAgdmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJ307XG5cbiAgICAgICAgdGhpcy5yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcblxuICAgICAgICAgICAgaWYgKCBhbmdsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgYW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoZXRhRGVsdGEgLT0gYW5nbGU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvdGF0ZVVwID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcblxuICAgICAgICAgICAgaWYgKCBhbmdsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgYW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBoaURlbHRhIC09IGFuZ2xlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIGxlZnRcbiAgICAgICAgdGhpcy5wYW5MZWZ0ID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuICAgICAgICAgICAgdmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xuXG4gICAgICAgICAgICAvLyBnZXQgWCBjb2x1bW4gb2YgbWF0cml4XG4gICAgICAgICAgICBwYW5PZmZzZXQuc2V0KCB0ZVsgMCBdLCB0ZVsgMSBdLCB0ZVsgMiBdICk7XG4gICAgICAgICAgICBwYW5PZmZzZXQubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFuLmFkZCggcGFuT2Zmc2V0ICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgdXBcbiAgICAgICAgdGhpcy5wYW5VcCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cbiAgICAgICAgICAgIHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcblxuICAgICAgICAgICAgLy8gZ2V0IFkgY29sdW1uIG9mIG1hdHJpeFxuICAgICAgICAgICAgcGFuT2Zmc2V0LnNldCggdGVbIDQgXSwgdGVbIDUgXSwgdGVbIDYgXSApO1xuICAgICAgICAgICAgcGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYW4uYWRkKCBwYW5PZmZzZXQgKTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gcGFzcyBpbiB4LHkgb2YgY2hhbmdlIGRlc2lyZWQgaW4gcGl4ZWwgc3BhY2UsXG4gICAgICAgIC8vIHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuICAgICAgICB0aGlzLnBhbiA9IGZ1bmN0aW9uICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm9iamVjdC5mb3YgIT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIC8vIHBlcnNwZWN0aXZlXG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwb3NpdGlvbi5jbG9uZSgpLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG4gICAgICAgICAgICAgICAgdGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG4gICAgICAgICAgICAgICAgLy8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuICAgICAgICAgICAgICAgIHNjb3BlLnBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG4gICAgICAgICAgICAgICAgc2NvcGUucGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdC50b3AgIT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIC8vIG9ydGhvZ3JhcGhpY1xuICAgICAgICAgICAgICAgIHNjb3BlLnBhbkxlZnQoIGRlbHRhWCAqIChzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCkgLyBlbGVtZW50LmNsaWVudFdpZHRoICk7XG4gICAgICAgICAgICAgICAgc2NvcGUucGFuVXAoIGRlbHRhWSAqIChzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSkgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG9yIHBlcnNwZWN0aXZlXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kb2xseUluID0gZnVuY3Rpb24gKCBkb2xseVNjYWxlICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIGRvbGx5U2NhbGUgPSBnZXRab29tU2NhbGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kb2xseU91dCA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2xseVNjYWxlID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICBkb2xseVNjYWxlID0gZ2V0Wm9vbVNjYWxlKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLm9iamVjdC5wb3NpdGlvbjtcblxuICAgICAgICAgICAgLy8gLy8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuICAgICAgICAgICAgc2NvcGUucm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiBzY29wZS5jb25zdHJhaW5EZWx0YS54IC8gd2luZG93LmlubmVyV2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG4gICAgICAgICAgICAvLyAvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHNjb3BlLmNvbnN0cmFpbkRlbHRhLnkgLyB3aW5kb3cuaW5uZXJIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG4gICAgICAgICAgICBvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHRoaXMudGFyZ2V0ICk7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuICAgICAgICAgICAgb2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG4gICAgICAgICAgICAvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cbiAgICAgICAgICAgIHZhciB0aGV0YSA9IE1hdGguYXRhbjIoIG9mZnNldC54LCBvZmZzZXQueiApO1xuXG4gICAgICAgICAgICAvLyBhbmdsZSBmcm9tIHktYXhpc1xuXG4gICAgICAgICAgICB2YXIgcGhpID0gTWF0aC5hdGFuMiggTWF0aC5zcXJ0KCBvZmZzZXQueCAqIG9mZnNldC54ICsgb2Zmc2V0LnogKiBvZmZzZXQueiApLCBvZmZzZXQueSApO1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMuYXV0b1JvdGF0ZSApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoZXRhICs9IHRoZXRhRGVsdGE7XG4gICAgICAgICAgICBwaGkgKz0gcGhpRGVsdGE7XG5cbiAgICAgICAgICAgIC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG4gICAgICAgICAgICBwaGkgPSBNYXRoLm1heCggdGhpcy5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhQb2xhckFuZ2xlLCBwaGkgKSApO1xuXG4gICAgICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlIEVQUyBhbmQgUEktRVBTXG4gICAgICAgICAgICBwaGkgPSBNYXRoLm1heCggRVBTLCBNYXRoLm1pbiggTWF0aC5QSSAtIEVQUywgcGhpICkgKTtcblxuICAgICAgICAgICAgdmFyIHJhZGl1cyA9IG9mZnNldC5sZW5ndGgoKSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICAgICAgcmFkaXVzID0gTWF0aC5tYXgoIHRoaXMubWluRGlzdGFuY2UsIE1hdGgubWluKCB0aGlzLm1heERpc3RhbmNlLCByYWRpdXMgKSApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFkZCggcGFuICk7XG5cbiAgICAgICAgICAgIG9mZnNldC54ID0gcmFkaXVzICogTWF0aC5zaW4oIHBoaSApICogTWF0aC5zaW4oIHRoZXRhICk7XG4gICAgICAgICAgICBvZmZzZXQueSA9IHJhZGl1cyAqIE1hdGguY29zKCBwaGkgKTtcbiAgICAgICAgICAgIG9mZnNldC56ID0gcmFkaXVzICogTWF0aC5zaW4oIHBoaSApICogTWF0aC5jb3MoIHRoZXRhICk7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuICAgICAgICAgICAgb2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuICAgICAgICAgICAgcG9zaXRpb24uY29weSggdGhpcy50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5sb29rQXQoIHRoaXMudGFyZ2V0ICk7XG5cbiAgICAgICAgICAgIHRoZXRhRGVsdGEgPSAwO1xuICAgICAgICAgICAgcGhpRGVsdGEgPSAwO1xuICAgICAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgICAgICAgcGFuLnNldCggMCwgMCwgMCApO1xuXG4gICAgICAgICAgICBpZiAoIGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggdGhpcy5vYmplY3QucG9zaXRpb24gKSA+IEVQUyApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuICAgICAgICAgICAgICAgIGxhc3RQb3NpdGlvbi5jb3B5KCB0aGlzLm9iamVjdC5wb3NpdGlvbiApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICAgICAgdGhpcy50YXJnZXQuY29weSggdGhpcy50YXJnZXQwICk7XG4gICAgICAgICAgICB0aGlzLm9iamVjdC5wb3NpdGlvbi5jb3B5KCB0aGlzLnBvc2l0aW9uMCApO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCBldmVudC5idXR0b24gPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG4gICAgICAgICAgICAgICAgcm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gMSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cbiAgICAgICAgICAgICAgICBkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IDIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuUEFOO1xuXG4gICAgICAgICAgICAgICAgcGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgcm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuICAgICAgICAgICAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmNvbnN0cmFpbkRlbHRhLnggPSByb3RhdGVEZWx0YS54O1xuICAgICAgICAgICAgICAgIHNjb3BlLmNvbnN0cmFpbkRlbHRhLnkgPSByb3RhdGVEZWx0YS55O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZihzY29wZS5jb25zdHJhaW5EZWx0YSk7XG4gICAgICAgICAgICAgICAgVHdlZW5NYXgudG8oc2NvcGUuY29uc3RyYWluRGVsdGEsIDAuNTAsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgZWFzZTogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAuMFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG4gICAgICAgICAgICAgICAgZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5SW4oKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlPdXQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG4gICAgICAgICAgICAgICAgcGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNjb3BlLnBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG4gICAgICAgICAgICAgICAgcGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VVcCggLyogZXZlbnQgKi8gKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHZhciBkZWx0YSA9IDA7XG5cbiAgICAgICAgICAgIGlmICggZXZlbnQud2hlZWxEZWx0YSAhPT0gdW5kZWZpbmVkICkgeyAvLyBXZWJLaXQgLyBPcGVyYSAvIEV4cGxvcmVyIDlcblxuICAgICAgICAgICAgICAgIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuZGV0YWlsICE9PSB1bmRlZmluZWQgKSB7IC8vIEZpcmVmb3hcblxuICAgICAgICAgICAgICAgIGRlbHRhID0gLSBldmVudC5kZXRhaWw7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBkZWx0YSA+IDAgKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5kb2xseU91dCgpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlJbigpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub0tleXMgPT09IHRydWUgfHwgc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHNjb3BlLmtleXMuVVA6XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0b3VjaHN0YXJ0KCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgc3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuICAgICAgICAgICAgICAgICAgICByb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuICAgICAgICAgICAgICAgICAgICBkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNobW92ZSggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICByb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgICAgICAgICByb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuICAgICAgICAgICAgICAgICAgICBzY29wZS5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuICAgICAgICAgICAgICAgICAgICBkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5kb2xseU91dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5SW4oKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgICAgICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuICAgICAgICAgICAgICAgICAgICBwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0b3VjaGVuZCggLyogZXZlbnQgKi8gKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBmdW5jdGlvbiAoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9LCBmYWxzZSApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7IC8vIGZpcmVmb3hcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0LCBmYWxzZSApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdG91Y2hlbmQsIGZhbHNlICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdG91Y2htb3ZlLCBmYWxzZSApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuICAgICAgICAvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgIH07XG5cbiAgICBpbmhlcml0cyhPcmJpdENvbnRyb2xzLCBUSFJFRS5FdmVudERpc3BhdGNoZXIpXG4gICAgcmV0dXJuIE9yYml0Q29udHJvbHNcbn1cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbnVtdHlwZShudW0sIGRlZikge1xuXHRyZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcidcblx0XHQ/IG51bSBcblx0XHQ6ICh0eXBlb2YgZGVmID09PSAnbnVtYmVyJyA/IGRlZiA6IDApXG59IiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzLWFycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxudmFyIGtNYXhMZW5ndGggPSAweDNmZmZmZmZmXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIE5vdGU6XG4gKlxuICogLSBJbXBsZW1lbnRhdGlvbiBtdXN0IHN1cHBvcnQgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMuXG4gKiAgIEZpcmVmb3ggNC0yOSBsYWNrZWQgc3VwcG9ydCwgZml4ZWQgaW4gRmlyZWZveCAzMCsuXG4gKiAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG4gKlxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXkgd2lsbFxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgd2lsbCB3b3JrIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSAoZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoMSkuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gc3ViamVjdCA+IDAgPyBzdWJqZWN0ID4+PiAwIDogMFxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcpXG4gICAgICBzdWJqZWN0ID0gYmFzZTY0Y2xlYW4oc3ViamVjdClcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBzdWJqZWN0ICE9PSBudWxsKSB7IC8vIGFzc3VtZSBvYmplY3QgaXMgYXJyYXktbGlrZVxuICAgIGlmIChzdWJqZWN0LnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkoc3ViamVjdC5kYXRhKSlcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0LmRhdGFcbiAgICBsZW5ndGggPSArc3ViamVjdC5sZW5ndGggPiAwID8gTWF0aC5mbG9vcigrc3ViamVjdC5sZW5ndGgpIDogMFxuICB9IGVsc2VcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHN0YXJ0IHdpdGggbnVtYmVyLCBidWZmZXIsIGFycmF5IG9yIHN0cmluZycpXG5cbiAgaWYgKHRoaXMubGVuZ3RoID4ga01heExlbmd0aClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gKChzdWJqZWN0W2ldICUgMjU2KSArIDI1NikgJSAyNTZcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuICYmIGFbaV0gPT09IGJbaV07IGkrKykge31cbiAgaWYgKGkgIT09IGxlbikge1xuICAgIHggPSBhW2ldXG4gICAgeSA9IGJbaV1cbiAgfVxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdFssIGxlbmd0aF0pJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0b3RhbExlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoID4+PiAxXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vLyBwcmUtc2V0IGZvciB2YWx1ZXMgdGhhdCBtYXkgZXhpc3QgaW4gdGhlIGZ1dHVyZVxuQnVmZmVyLnByb3RvdHlwZS5sZW5ndGggPSB1bmRlZmluZWRcbkJ1ZmZlci5wcm90b3R5cGUucGFyZW50ID0gdW5kZWZpbmVkXG5cbi8vIHRvU3RyaW5nKGVuY29kaW5nLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA9PT0gSW5maW5pdHkgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG4gIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmIChlbmQgPD0gc3RhcnQpIHJldHVybiAnJ1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGJpbmFyeVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSlcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKGIpIHtcbiAgaWYoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpXG4gICAgICBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpXG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihieXRlKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBiaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSB1dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBiaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBhc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuO1xuICAgIGlmIChzdGFydCA8IDApXG4gICAgICBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMClcbiAgICAgIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydClcbiAgICBlbmQgPSBzdGFydFxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpXG4gICAgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdidWZmZXIgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKGVuZCA8IHN0YXJ0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGlmICh0YXJnZXRfc3RhcnQgPCAwIHx8IHRhcmdldF9zdGFydCA+PSB0YXJnZXQubGVuZ3RoKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHNvdXJjZS5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiBzb3VyY2UubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDAgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSB1dGY4VG9CeXRlcyh2YWx1ZS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuY29uc3RydWN0b3IgPSBCdWZmZXJcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmVxdWFscyA9IEJQLmVxdWFsc1xuICBhcnIuY29tcGFyZSA9IEJQLmNvbXBhcmVcbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLXpdL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKSB7XG4gICAgICBieXRlQXJyYXkucHVzaChiKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG4iLCJ2YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSClcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG4iLCJcbi8qKlxuICogaXNBcnJheVxuICovXG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiB0b1N0cmluZ1xuICovXG5cbnZhciBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBgdmFsYFxuICogaXMgYW4gYXJyYXkuXG4gKlxuICogZXhhbXBsZTpcbiAqXG4gKiAgICAgICAgaXNBcnJheShbXSk7XG4gKiAgICAgICAgLy8gPiB0cnVlXG4gKiAgICAgICAgaXNBcnJheShhcmd1bWVudHMpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqICAgICAgICBpc0FycmF5KCcnKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKlxuICogQHBhcmFtIHttaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtib29sfVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiAhISB2YWwgJiYgJ1tvYmplY3QgQXJyYXldJyA9PSBzdHIuY2FsbCh2YWwpO1xufTtcbiIsInZhciBpc0dMID0gcmVxdWlyZSgnaXMtd2ViZ2wtY29udGV4dCcpO1xudmFyIGdldEdMID0gcmVxdWlyZSgnd2ViZ2wtY29udGV4dCcpO1xudmFyIGRlYm91bmNlID0gcmVxdWlyZSgnZGVib3VuY2UnKTtcbnZhciBhZGRFdmVudCA9IHJlcXVpcmUoJ2FkZC1ldmVudC1saXN0ZW5lcicpO1xuXG5mdW5jdGlvbiBpc0NhbnZhc0NvbnRleHQob2JqKSB7XG4gICAgdmFyIGN0eDJkID0gdHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHJldHVybiBvYmogJiYgKGN0eDJkIHx8IGlzR0wob2JqKSk7XG59XG5cbmZ1bmN0aW9uIENhbnZhc0FwcChyZW5kZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ2FudmFzQXBwKSlcbiAgICAgICAgcmV0dXJuIG5ldyBDYW52YXNBcHAocmVuZGVyLCBvcHRpb25zKTtcblxuICAgIC8vYWxsb3cgb3B0aW9ucyB0byBiZSBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnRcbiAgICBpZiAodHlwZW9mIHJlbmRlciA9PT0gJ29iamVjdCcgJiYgcmVuZGVyKSB7XG4gICAgICAgIG9wdGlvbnMgPSByZW5kZXI7XG4gICAgICAgIHJlbmRlciA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVuZGVyID0gdHlwZW9mIHJlbmRlciA9PT0gJ2Z1bmN0aW9uJyA/IHJlbmRlciA6IG9wdGlvbnMub25SZW5kZXI7XG5cbiAgICBvcHRpb25zID0gb3B0aW9uc3x8e307XG4gICAgb3B0aW9ucy5yZXRpbmEgPSB0eXBlb2Ygb3B0aW9ucy5yZXRpbmEgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5yZXRpbmEgOiB0cnVlO1xuICAgIFxuICAgIHZhciBoYXNXaWR0aCA9IHR5cGVvZiBvcHRpb25zLndpZHRoID09PSBcIm51bWJlclwiLCBcbiAgICAgICAgaGFzSGVpZ2h0ID0gdHlwZW9mIG9wdGlvbnMuaGVpZ2h0ID09PSBcIm51bWJlclwiO1xuXG4gICAgLy9pZiBlaXRoZXIgd2lkdGggb3IgaGVpZ2h0IGlzIHNwZWNpZmllZCwgZG9uJ3QgYXV0by1yZXNpemUgdG8gdGhlIHdpbmRvdy4uLlxuICAgIGlmIChoYXNXaWR0aCB8fCBoYXNIZWlnaHQpIFxuICAgICAgICBvcHRpb25zLmlnbm9yZVJlc2l6ZSA9IHRydWU7XG5cbiAgICBvcHRpb25zLndpZHRoID0gaGFzV2lkdGggPyBvcHRpb25zLndpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG4gICAgb3B0aW9ucy5oZWlnaHQgPSBoYXNIZWlnaHQgPyBvcHRpb25zLmhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHZhciBEUFIgPSBvcHRpb25zLnJldGluYSA/ICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSkgOiAxOyBcblxuICAgIC8vc2V0dXAgdGhlIGNhbnZhc1xuICAgIHZhciBjYW52YXMsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGF0dHJpYnMgPSBvcHRpb25zLmNvbnRleHRBdHRyaWJ1dGVzfHx7fTtcblxuICAgIHRoaXMuaXNXZWJHTCA9IGZhbHNlO1xuXG4gICAgLy9pZiB1c2VyIHByb3ZpZGVkIGEgY29udGV4dCBvYmplY3RcbiAgICBpZiAoaXNDYW52YXNDb250ZXh0KG9wdGlvbnMuY29udGV4dCkpIHtcbiAgICAgICAgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dDtcbiAgICAgICAgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgfVxuXG4gICAgLy9vdGhlcndpc2UgYWxsb3cgZm9yIGEgc3RyaW5nIHRvIHNldCBvbmUgdXBcbiAgICBpZiAoIWNhbnZhcylcbiAgICAgICAgY2FudmFzID0gb3B0aW9ucy5jYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgIGNhbnZhcy53aWR0aCA9IG9wdGlvbnMud2lkdGggKiBEUFI7XG4gICAgY2FudmFzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICogRFBSO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRleHQgPT09IFwid2ViZ2xcIiB8fCBvcHRpb25zLmNvbnRleHQgPT09IFwiZXhwZXJpbWVudGFsLXdlYmdsXCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBnZXRHTCh7IGNhbnZhczogY2FudmFzLCBhdHRyaWJ1dGVzOiBhdHRyaWJzIH0pO1xuICAgICAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJXZWJHTCBDb250ZXh0IE5vdCBTdXBwb3J0ZWQgLS0gdHJ5IGVuYWJsaW5nIGl0IG9yIHVzaW5nIGEgZGlmZmVyZW50IGJyb3dzZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChvcHRpb25zLmNvbnRleHR8fFwiMmRcIiwgYXR0cmlicyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlzV2ViR0wgPSBpc0dMKGNvbnRleHQpO1xuXG4gICAgaWYgKG9wdGlvbnMucmV0aW5hKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xuICAgIH1cblxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm9uUmVzaXplID0gb3B0aW9ucy5vblJlc2l6ZTtcbiAgICB0aGlzLl9EUFIgPSBEUFI7XG4gICAgdGhpcy5fcmV0aW5hID0gb3B0aW9ucy5yZXRpbmE7XG4gICAgdGhpcy5fb25jZSA9IG9wdGlvbnMub25jZTtcbiAgICB0aGlzLl9pZ25vcmVSZXNpemUgPSBvcHRpb25zLmlnbm9yZVJlc2l6ZTtcbiAgICB0aGlzLl9sYXN0RnJhbWUgPSBudWxsO1xuICAgIHRoaXMuX3RoZW4gPSBEYXRlLm5vdygpO1xuXG4gICAgLy9GUFMgY291bnRlclxuICAgIHRoaXMuZnBzID0gNjA7XG4gICAgdGhpcy5fZnJhbWVzID0gMDtcbiAgICB0aGlzLl9wcmV2VGltZSA9IHRoaXMuX3RoZW47XG5cbiAgICBpZiAoIXRoaXMuX2lnbm9yZVJlc2l6ZSkge1xuICAgICAgICBvcHRpb25zLnJlc2l6ZURlYm91bmNlID0gdHlwZW9mIG9wdGlvbnMucmVzaXplRGVib3VuY2UgPT09ICdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5yZXNpemVEZWJvdW5jZSA6IDUwO1xuICAgICAgICBhZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIGRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgb3B0aW9ucy5yZXNpemVEZWJvdW5jZSwgZmFsc2UpKTtcblxuICAgICAgICBhZGRFdmVudCh3aW5kb3csIFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlbmRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMub25SZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTsgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICAvL2R1bW15IHJlbmRlciBmdW5jdGlvblxuICAgICAgICB0aGlzLm9uUmVuZGVyID0gZnVuY3Rpb24gKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQsIGR0KSB7IH07XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJPbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgZHQgPSAobm93LXRoaXMuX3RoZW4pO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lcysrO1xuICAgICAgICBpZiAobm93ID4gdGhpcy5fcHJldlRpbWUgKyAxMDAwKSB7XG4gICAgICAgICAgICB0aGlzLmZwcyA9IE1hdGgucm91bmQoKHRoaXMuX2ZyYW1lcyAqIDEwMDApIC8gKG5vdyAtIHRoaXMuX3ByZXZUaW1lKSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3ByZXZUaW1lID0gbm93O1xuICAgICAgICAgICAgdGhpcy5fZnJhbWVzID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc1dlYkdMKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKHRoaXMuX0RQUiwgdGhpcy5fRFBSKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC52aWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoICogdGhpcy5fRFBSLCB0aGlzLmhlaWdodCAqIHRoaXMuX0RQUik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMub25SZW5kZXIodGhpcy5jb250ZXh0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgZHQpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc1dlYkdMKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcblxuICAgICAgICB0aGlzLl90aGVuID0gbm93O1xuICAgIH07XG5cbiAgICB0aGlzLl9yZW5kZXJIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5fb25jZSkge1xuICAgICAgICAgICAgdGhpcy5fbGFzdEZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JlbmRlckhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJPbmNlKCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uUmVhZHkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvcHRpb25zLm9uUmVhZHkuY2FsbCh0aGlzLCBjb250ZXh0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FudmFzQXBwLnByb3RvdHlwZSwgJ3JldGluYUVuYWJsZWQnLCB7XG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgdGhpcy5fcmV0aW5hID0gdjtcbiAgICAgICAgdGhpcy5fRFBSID0gdGhpcy5fcmV0aW5hID8gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKSA6IDE7XG4gICAgICAgIHRoaXMucmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JldGluYTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENhbnZhc0FwcC5wcm90b3R5cGUsICdkZXZpY2VXaWR0aCcsIHtcblxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5fRFBSO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FudmFzQXBwLnByb3RvdHlwZSwgJ2RldmljZUhlaWdodCcsIHtcblxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodCAqIHRoaXMuX0RQUjtcbiAgICB9XG59KTtcblxuQ2FudmFzQXBwLnByb3RvdHlwZS5yZXNldEZQUyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2ZyYW1lcyA9IDA7XG4gICAgdGhpcy5fcHJldlRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX3RoZW4gPSB0aGlzLl9wcmV2VGltZTtcbiAgICB0aGlzLmZwcyA9IDYwO1xufTtcblxuQ2FudmFzQXBwLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJ1bm5pbmcpXG4gICAgICAgIHJldHVybjtcbiAgICBcbiAgICBpZiAodGhpcy5fbGFzdEZyYW1lKSBcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fbGFzdEZyYW1lKTtcblxuICAgIC8vcmVzZXQgRlBTIGNvdW50ZXJcbiAgICB0aGlzLnJlc2V0RlBTKCk7XG5cbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRoaXMuX2xhc3RGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9yZW5kZXJIYW5kbGVyKTtcbn07XG5cbkNhbnZhc0FwcC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9sYXN0RnJhbWUpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fbGFzdEZyYW1lKTtcbiAgICAgICAgdGhpcy5fbGFzdEZyYW1lID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG59O1xuXG5DYW52YXNBcHAucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXM7XG5cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuX0RQUjtcbiAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLl9EUFI7XG5cbiAgICBpZiAodGhpcy5fcmV0aW5hKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vbmNlKVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fcmVuZGVySGFuZGxlcik7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9uUmVzaXplID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHRoaXMub25SZXNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNBcHA7IiwiYWRkRXZlbnRMaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lclxuYWRkRXZlbnRMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lclxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZEV2ZW50TGlzdGVuZXJcblxudmFyIEV2ZW50cyA9IG51bGxcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICBFdmVudHMgPSBFdmVudHMgfHwgKFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgP1xuICAgIHthZGQ6IHN0ZEF0dGFjaCwgcm06IHN0ZERldGFjaH0gOlxuICAgIHthZGQ6IG9sZElFQXR0YWNoLCBybTogb2xkSUVEZXRhY2h9XG4gIClcbiAgXG4gIHJldHVybiBFdmVudHMuYWRkKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKVxufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIEV2ZW50cyA9IEV2ZW50cyB8fCAoXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA/XG4gICAge2FkZDogc3RkQXR0YWNoLCBybTogc3RkRGV0YWNofSA6XG4gICAge2FkZDogb2xkSUVBdHRhY2gsIHJtOiBvbGRJRURldGFjaH1cbiAgKVxuICBcbiAgcmV0dXJuIEV2ZW50cy5ybShlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSlcbn1cblxuZnVuY3Rpb24gc3RkQXR0YWNoKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSlcbn1cblxuZnVuY3Rpb24gc3RkRGV0YWNoKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSlcbn1cblxuZnVuY3Rpb24gb2xkSUVBdHRhY2goZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgaWYodXNlQ2FwdHVyZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IHVzZUNhcHR1cmUgaW4gb2xkSUUnKVxuICB9XG5cbiAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpXG59XG5cbmZ1bmN0aW9uIG9sZElFRGV0YWNoKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyKVxufVxuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIG5vdyA9IHJlcXVpcmUoJ2RhdGUtbm93Jyk7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICogYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICogTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gKiBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICpcbiAqIEBzb3VyY2UgdW5kZXJzY29yZS5qc1xuICogQHNlZSBodHRwOi8vdW5zY3JpcHRhYmxlLmNvbS8yMDA5LzAzLzIwL2RlYm91bmNpbmctamF2YXNjcmlwdC1tZXRob2RzL1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb24gdG8gd3JhcFxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVvdXQgaW4gbXMgKGAxMDBgKVxuICogQHBhcmFtIHtCb29sZWFufSB3aGV0aGVyIHRvIGV4ZWN1dGUgYXQgdGhlIGJlZ2lubmluZyAoYGZhbHNlYClcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpe1xuICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG4gIGlmIChudWxsID09IHdhaXQpIHdhaXQgPSAxMDA7XG5cbiAgZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgdmFyIGxhc3QgPSBub3coKSAtIHRpbWVzdGFtcDtcblxuICAgIGlmIChsYXN0IDwgd2FpdCAmJiBsYXN0ID4gMCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHRpbWVzdGFtcCA9IG5vdygpO1xuICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGlmICghdGltZW91dCkgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBEYXRlLm5vdyB8fCBub3dcblxuZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjdHgpIHtcblx0aWYgKCFjdHgpIHJldHVybiBmYWxzZVxuXHR2YXIgZ2wgPSBjdHhcblx0Ly9jb21wYXRpYmlsaXR5IHdpdGggQ2hyb21lIFdlYkdMIEluc3BlY3RvciBBZGRvblxuXHRpZiAodHlwZW9mIGN0eC5yYXdnbCAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0Z2wgPSBjdHgucmF3Z2xcblx0aWYgKHR5cGVvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgIT09ICd1bmRlZmluZWQnICYmIGdsIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJpbmdDb250ZXh0KVxuXHRcdHJldHVybiB0cnVlXG5cdHJldHVybiBmYWxzZVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICAgIG9wdHMgPSBvcHRzfHx7fTtcbiAgICB2YXIgY2FudmFzID0gb3B0cy5jYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBpZiAodHlwZW9mIG9wdHMud2lkdGggPT09IFwibnVtYmVyXCIpXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG9wdHMud2lkdGg7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmhlaWdodCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG9wdHMuaGVpZ2h0O1xuICAgIFxuICAgIHZhciBhdHRyaWJzID0gKG9wdHMuYXR0cmlidXRlcyB8fCBvcHRzLmF0dHJpYnMgfHwge30pO1xuICAgIHRyeSB7XG4gICAgICAgIGdsID0gKGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcsIGF0dHJpYnMpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnLCBhdHRyaWJzKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBnbCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBnbDtcbn07IiwiLyohXG4gICogZG9tcmVhZHkgKGMpIER1c3RpbiBEaWF6IDIwMTQgLSBMaWNlbnNlIE1JVFxuICAqL1xuIWZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKSB7XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JykgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgdGhpc1tuYW1lXSA9IGRlZmluaXRpb24oKVxuXG59KCdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZm5zID0gW10sIGxpc3RlbmVyXG4gICAgLCBkb2MgPSBkb2N1bWVudFxuICAgICwgaGFjayA9IGRvYy5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGxcbiAgICAsIGRvbUNvbnRlbnRMb2FkZWQgPSAnRE9NQ29udGVudExvYWRlZCdcbiAgICAsIGxvYWRlZCA9IChoYWNrID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KGRvYy5yZWFkeVN0YXRlKVxuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyKVxuICAgIGxvYWRlZCA9IDFcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBmbnMuc2hpZnQoKSkgbGlzdGVuZXIoKVxuICB9KVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBmbigpIDogZm5zLnB1c2goZm4pXG4gIH1cblxufSk7XG4iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCdnbC1tYXQ0L2lkZW50aXR5JylcbnZhciBjcmVhdGVTaGFkZXIgPSByZXF1aXJlKCdnbC1zaGFkZXItY29yZScpXG5cbnZhciBQT1NJVElPTl9BVFRSSUJVVEUgPSAncG9zaXRpb24nLFxuICAgIE5PUk1BTF9BVFRSSUJVVEUgPSAnbm9ybWFsJyxcbiAgICBDT0xPUl9BVFRSSUJVVEUgPSAnY29sb3InLFxuICAgIFRFWENPT1JEX0FUVFJJQlVURSA9ICd0ZXhjb29yZCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihnbCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zfHx7fVxuICAgIG9wdGlvbnMudGV4Y29vcmQgPSB0eXBlb2Ygb3B0aW9ucy50ZXhjb29yZCA9PT0gJ251bWJlcicgXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLnRleGNvb3JkIDogKG9wdGlvbnMudGV4Y29vcmR8fDApXG4gICAgICAgIFxuICAgIHZhciBzaGFkZXJTb3VyY2UgPSBtb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZShvcHRpb25zKSxcbiAgICAgICAgdmVydCA9IHNoYWRlclNvdXJjZS52ZXJ0ZXgsXG4gICAgICAgIGZyYWcgPSBzaGFkZXJTb3VyY2UuZnJhZ21lbnQsXG4gICAgICAgIHVuaWZvcm1zID0gc2hhZGVyU291cmNlLnVuaWZvcm1zLFxuICAgICAgICBhdHRyaWJzID0gc2hhZGVyU291cmNlLmF0dHJpYnV0ZXNcbiAgICBcbiAgICB2YXIgc2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCB2ZXJ0LCBmcmFnLCB1bmlmb3JtcywgYXR0cmlicylcbiAgICBzaGFkZXIuYmluZCgpXG4gICAgZm9yICh2YXIgaT0wOyBpPG9wdGlvbnMudGV4Y29vcmQ7IGkrKykgXG4gICAgICAgIHNoYWRlci51bmlmb3Jtc1sndGV4dHVyZScraV0gPSBpXG5cbiAgICB2YXIgYXJyID0gaWRlbnRpdHkoIG5ldyBGbG9hdDMyQXJyYXkoMTYpIClcbiAgICBzaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbiA9IGFyclxuICAgIHNoYWRlci51bmlmb3Jtcy5tb2RlbCA9IGFyclxuICAgIHNoYWRlci51bmlmb3Jtcy52aWV3ID0gYXJyXG4gICAgc2hhZGVyLnVuaWZvcm1zLnRpbnQgPSBvcHRpb25zLnRpbnQgfHwgWzEsIDEsIDEsIDFdXG5cbiAgICByZXR1cm4gc2hhZGVyXG59XG5cbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zfHx7fVxuICAgIG9wdGlvbnMudGV4Y29vcmQgPSB0eXBlb2Ygb3B0aW9ucy50ZXhjb29yZCA9PT0gJ251bWJlcicgXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLnRleGNvb3JkIDogKG9wdGlvbnMudGV4Y29vcmR8fDApXG5cbiAgICB2YXIgdmVydCA9IHR5cGVvZiBvcHRpb25zLnZlcnRleCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gb3B0aW9ucy52ZXJ0ZXggOiBjcmVhdGVWZXJ0ZXhTaGFkZXIob3B0aW9ucy5ub3JtYWwsIG9wdGlvbnMuY29sb3IsIG9wdGlvbnMudGV4Y29vcmQpXG4gICAgdmFyIGZyYWcgPSB0eXBlb2Ygb3B0aW9ucy5mcmFnbWVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gb3B0aW9ucy5mcmFnbWVudCA6IGNyZWF0ZUZyYWdtZW50U2hhZGVyKG9wdGlvbnMuY29sb3IsIG9wdGlvbnMudGV4Y29vcmQpXG5cbiAgICB2YXIgdW5pZm9ybXMgPSBbXG4gICAgICAgIHsgdHlwZTogJ21hdDQnLCBuYW1lOiAncHJvamVjdGlvbicgfSxcbiAgICAgICAgeyB0eXBlOiAnbWF0NCcsIG5hbWU6ICd2aWV3JyB9LFxuICAgICAgICB7IHR5cGU6ICdtYXQ0JywgbmFtZTogJ21vZGVsJyB9LFxuICAgICAgICB7IHR5cGU6ICd2ZWM0JywgbmFtZTogJ3RpbnQnIH1cbiAgICBdXG5cbiAgICAvL1NpbWlsYXIgdG8gb2xkIHNjaG9vbCBwaXBlbGluZSwgd2Ugd2lsbCB1c2UgZml4ZWQgbG9jYXRpb25zXG4gICAgLy9odHRwOi8vd3d3Lm9wZW5nbC5vcmcvc2RrL2RvY3MvdHV0b3JpYWxzL0Nsb2Nrd29ya0NvZGVycy9hdHRyaWJ1dGVzLnBocFxuICAgIHZhciBhdHRyaWJzID0gW1xuICAgICAgICB7IHR5cGU6ICd2ZWM0JywgbmFtZTogUE9TSVRJT05fQVRUUklCVVRFLCBsb2NhdGlvbjogMCB9XG4gICAgXVxuXG4gICAgaWYgKG9wdGlvbnMubm9ybWFsKVxuICAgICAgICBhdHRyaWJzLnB1c2goeyB0eXBlOiAndmVjMycsIG5hbWU6IE5PUk1BTF9BVFRSSUJVVEUsIGxvY2F0aW9uOiAxIH0pXG4gICAgaWYgKG9wdGlvbnMuY29sb3IpXG4gICAgICAgIGF0dHJpYnMucHVzaCh7IHR5cGU6ICd2ZWM0JywgbmFtZTogQ09MT1JfQVRUUklCVVRFLCBsb2NhdGlvbjogMiB9KVxuXG4gICAgdmFyIGlkeCA9IDNcbiAgICBmb3IgKHZhciBpPTA7IGk8b3B0aW9ucy50ZXhjb29yZDsgaSsrKSB7XG4gICAgICAgIHVuaWZvcm1zLnB1c2goeyB0eXBlOiAnc2FtcGxlcjJEJywgbmFtZTogJ3RleHR1cmUnK2kgfSlcbiAgICAgICAgYXR0cmlicy5wdXNoKHsgdHlwZTogJ3ZlYzInLCBuYW1lOiBURVhDT09SRF9BVFRSSUJVVEUraSwgbG9jYXRpb246IGlkeCsrIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdmVydGV4OiB2ZXJ0LCBmcmFnbWVudDogZnJhZywgdW5pZm9ybXM6IHVuaWZvcm1zLCBhdHRyaWJ1dGVzOiBhdHRyaWJzIH1cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIoaGFzTm9ybWFscywgaGFzQ29sb3JzLCBudW1UZXhDb29yZHMpIHtcbiAgICBudW1UZXhDb29yZHMgPSBudW1UZXhDb29yZHMgfHwgMDtcbiAgICB2YXIgc2hhZGVyID0gXCJcIjtcbiAgICBzaGFkZXIgKz0gXCJhdHRyaWJ1dGUgdmVjNCBcIitQT1NJVElPTl9BVFRSSUJVVEUrXCI7XFxuXCJcbiAgICAgICAgICsgKGhhc05vcm1hbHMgPyBcImF0dHJpYnV0ZSB2ZWMzIFwiICsgTk9STUFMX0FUVFJJQlVURSArIFwiO1xcblwiIDogXCJcIilcbiAgICAgICAgICsgKGhhc0NvbG9ycyA/IFwiYXR0cmlidXRlIHZlYzQgXCIgKyBDT0xPUl9BVFRSSUJVVEUgKyBcIjtcXG5cIiA6IFwiXCIpO1xuXG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVGV4Q29vcmRzOyBpKyspIHtcbiAgICAgICAgc2hhZGVyICs9IFwiYXR0cmlidXRlIHZlYzIgXCIgKyBURVhDT09SRF9BVFRSSUJVVEUgKyBpICsgXCI7XFxuXCI7XG4gICAgfVxuXG4gICAgc2hhZGVyICs9IFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxuXCI7XG4gICAgc2hhZGVyICs9IFwidW5pZm9ybSBtYXQ0IHZpZXc7XFxuXCI7XG4gICAgc2hhZGVyICs9IFwidW5pZm9ybSBtYXQ0IG1vZGVsO1xcblwiO1xuICAgIFxuICAgIHNoYWRlciArPSAoaGFzQ29sb3JzID8gXCJ2YXJ5aW5nIHZlYzQgdl9jb2w7XFxuXCIgOiBcIlwiKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UZXhDb29yZHM7IGkrKykge1xuICAgICAgICBzaGFkZXIgKz0gXCJ2YXJ5aW5nIHZlYzIgdl90ZXhcIiArIGkgKyBcIjtcXG5cIjtcbiAgICB9XG5cbiAgICBzaGFkZXIgKz0gXCJcXG52b2lkIG1haW4oKSB7XFxuXCIgKyBcIiAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIFwiICsgUE9TSVRJT05fQVRUUklCVVRFICsgXCI7XFxuXCJcbiAgICAgICAgICAgICsgKGhhc0NvbG9ycyA/IFwiICAgdl9jb2wgPSBcIiArIENPTE9SX0FUVFJJQlVURSArIFwiO1xcblwiIDogXCJcIik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVGV4Q29vcmRzOyBpKyspIHtcbiAgICAgICAgc2hhZGVyICs9IFwiICAgdl90ZXhcIiArIGkgKyBcIiA9IFwiICsgVEVYQ09PUkRfQVRUUklCVVRFICsgaSArIFwiO1xcblwiO1xuICAgIH1cbiAgICBzaGFkZXIgKz0gXCIgICBnbF9Qb2ludFNpemUgPSAxLjA7XFxuXCI7XG4gICAgc2hhZGVyICs9IFwifVxcblwiO1xuXG4gICAgcmV0dXJuIHNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoaGFzQ29sb3JzLCBudW1UZXhDb29yZHMpIHtcbiAgICBudW1UZXhDb29yZHMgPSBudW1UZXhDb29yZHMgfHwgMDtcbiAgICB2YXIgc2hhZGVyID0gXCIjaWZkZWYgR0xfRVNcXG5cIiArIFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuXCIgKyBcIiNlbmRpZlxcblxcblwiO1xuIFxuICAgIGlmIChoYXNDb2xvcnMpIFxuICAgICAgICBzaGFkZXIgKz0gXCJ2YXJ5aW5nIHZlYzQgdl9jb2w7XFxuXCI7XG5cbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVGV4Q29vcmRzOyBpKyspIHtcbiAgICAgICAgc2hhZGVyICs9IFwidmFyeWluZyB2ZWMyIHZfdGV4XCIgKyBpICsgXCI7XFxuXCI7XG4gICAgICAgIHNoYWRlciArPSBcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmVcIiArIGkgKyBcIjtcXG5cIjtcbiAgICB9XG4gICAgc2hhZGVyICs9IFwidW5pZm9ybSB2ZWM0IHRpbnQ7XFxuXCI7XG5cbiAgICBzaGFkZXIgKz0gXCJcXG52b2lkIG1haW4oKSB7XFxuXCIgKyBcIiAgIGdsX0ZyYWdDb2xvciA9IFwiO1xuXG4gICAgaWYgKGhhc0NvbG9ycylcbiAgICAgICAgc2hhZGVyICs9IFwidl9jb2xcIlxuXG4gICAgaWYgKGhhc0NvbG9ycyAmJiBudW1UZXhDb29yZHMgPiAwKSBcbiAgICAgICAgc2hhZGVyICs9IFwiICogXCI7XG4gICAgZWxzZSBpZiAoIWhhc0NvbG9ycyAmJiAhbnVtVGV4Q29vcmRzKVxuICAgICAgICBzaGFkZXIgKz0gXCJ2ZWM0KDEuMClcIlxuXG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRleENvb3JkczsgaSsrKSB7XG4gICAgICAgIGlmIChpID09IG51bVRleENvb3JkcyAtIDEpIHtcbiAgICAgICAgICAgICAgICBzaGFkZXIgKz0gXCIgdGV4dHVyZTJEKHRleHR1cmVcIiArIGkgKyBcIiwgIHZfdGV4XCIgKyBpICsgXCIpXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hhZGVyICs9IFwiIHRleHR1cmUyRCh0ZXh0dXJlXCIgKyBpICsgXCIsICB2X3RleFwiICsgaSArIFwiKSAqXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaGFkZXIgKz0gXCIgKiB0aW50XCJcbiAgICBzaGFkZXIgKz0gXCI7XFxufVwiO1xuICAgIHJldHVybiBzaGFkZXI7XG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXR0cmlidXRlV3JhcHBlclxuXG4vL1NoYWRlciBhdHRyaWJ1dGUgY2xhc3NcbmZ1bmN0aW9uIFNoYWRlckF0dHJpYnV0ZShnbCwgcHJvZ3JhbSwgbG9jYXRpb24sIGRpbWVuc2lvbiwgbmFtZSwgY29uc3RGdW5jLCByZWxpbmspIHtcbiAgdGhpcy5fZ2wgPSBnbFxuICB0aGlzLl9wcm9ncmFtID0gcHJvZ3JhbVxuICB0aGlzLl9sb2NhdGlvbiA9IGxvY2F0aW9uXG4gIHRoaXMuX2RpbWVuc2lvbiA9IGRpbWVuc2lvblxuICB0aGlzLl9uYW1lID0gbmFtZVxuICB0aGlzLl9jb25zdEZ1bmMgPSBjb25zdEZ1bmNcbiAgdGhpcy5fcmVsaW5rID0gcmVsaW5rXG59XG5cbnZhciBwcm90byA9IFNoYWRlckF0dHJpYnV0ZS5wcm90b3R5cGVcblxucHJvdG8ucG9pbnRlciA9IGZ1bmN0aW9uIHNldEF0dHJpYlBvaW50ZXIodHlwZSwgbm9ybWFsaXplZCwgc3RyaWRlLCBvZmZzZXQpIHtcbiAgdmFyIGdsID0gdGhpcy5fZ2xcbiAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLl9sb2NhdGlvbiwgdGhpcy5fZGltZW5zaW9uLCB0eXBlfHxnbC5GTE9BVCwgISFub3JtYWxpemVkLCBzdHJpZGV8fDAsIG9mZnNldHx8MClcbiAgdGhpcy5fZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5fbG9jYXRpb24pXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xvY2F0aW9uJywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvblxuICB9XG4gICwgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgaWYodiAhPT0gdGhpcy5fbG9jYXRpb24pIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uID0gdlxuICAgICAgdGhpcy5fZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHRoaXMuX3Byb2dyYW0sIHYsIHRoaXMuX25hbWUpXG4gICAgICB0aGlzLl9nbC5saW5rUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKVxuICAgICAgdGhpcy5fcmVsaW5rKClcbiAgICB9XG4gIH1cbn0pXG5cblxuLy9BZGRzIGEgdmVjdG9yIGF0dHJpYnV0ZSB0byBvYmpcbmZ1bmN0aW9uIGFkZFZlY3RvckF0dHJpYnV0ZShnbCwgcHJvZ3JhbSwgbG9jYXRpb24sIGRpbWVuc2lvbiwgb2JqLCBuYW1lLCBkb0xpbmspIHtcbiAgdmFyIGNvbnN0RnVuY0FyZ3MgPSBbICdnbCcsICd2JyBdXG4gIHZhciB2YXJOYW1lcyA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29uc3RGdW5jQXJncy5wdXNoKCd4JytpKVxuICAgIHZhck5hbWVzLnB1c2goJ3gnK2kpXG4gIH1cbiAgY29uc3RGdW5jQXJncy5wdXNoKFtcbiAgICAnaWYoeDAubGVuZ3RoPT09dm9pZCAwKXtyZXR1cm4gZ2wudmVydGV4QXR0cmliJywgZGltZW5zaW9uLCAnZih2LCcsIHZhck5hbWVzLmpvaW4oKSwgJyl9ZWxzZXtyZXR1cm4gZ2wudmVydGV4QXR0cmliJywgZGltZW5zaW9uLCAnZnYodix4MCl9J1xuICBdLmpvaW4oJycpKVxuICB2YXIgY29uc3RGdW5jID0gRnVuY3Rpb24uYXBwbHkodW5kZWZpbmVkLCBjb25zdEZ1bmNBcmdzKVxuICB2YXIgYXR0ciA9IG5ldyBTaGFkZXJBdHRyaWJ1dGUoZ2wsIHByb2dyYW0sIGxvY2F0aW9uLCBkaW1lbnNpb24sIG5hbWUsIGNvbnN0RnVuYywgZG9MaW5rKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgc2V0OiBmdW5jdGlvbih4KSB7XG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5fbG9jYXRpb24pXG4gICAgICBjb25zdEZ1bmMoZ2wsIGF0dHIuX2xvY2F0aW9uLCB4KVxuICAgICAgcmV0dXJuIHhcbiAgICB9XG4gICAgLCBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGF0dHJcbiAgICB9XG4gICAgLCBlbnVtZXJhYmxlOiB0cnVlXG4gIH0pXG59XG5cbi8vQ3JlYXRlIHNoaW1zIGZvciBhdHRyaWJ1dGVzXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVXcmFwcGVyKGdsLCBwcm9ncmFtLCBhdHRyaWJ1dGVzLCBkb0xpbmspIHtcbiAgdmFyIG9iaiA9IHt9XG4gIGZvcih2YXIgaT0wLCBuPWF0dHJpYnV0ZXMubGVuZ3RoOyBpPG47ICsraSkge1xuICAgIHZhciBhID0gYXR0cmlidXRlc1tpXVxuICAgIHZhciBuYW1lID0gYS5uYW1lXG4gICAgdmFyIHR5cGUgPSBhLnR5cGVcbiAgICB2YXIgbG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKVxuICAgIFxuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlICdib29sJzpcbiAgICAgIGNhc2UgJ2ludCc6XG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICAgIGFkZFZlY3RvckF0dHJpYnV0ZShnbCwgcHJvZ3JhbSwgbG9jYXRpb24sIDEsIG9iaiwgbmFtZSwgZG9MaW5rKVxuICAgICAgYnJlYWtcbiAgICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYodHlwZS5pbmRleE9mKCd2ZWMnKSA+PSAwKSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCBkYXRhIHR5cGUgZm9yIGF0dHJpYnV0ZSAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBhZGRWZWN0b3JBdHRyaWJ1dGUoZ2wsIHByb2dyYW0sIGxvY2F0aW9uLCBkLCBvYmosIG5hbWUsIGRvTGluaylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogVW5rbm93biBkYXRhIHR5cGUgZm9yIGF0dHJpYnV0ZSAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqXG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBkdXAgPSByZXF1aXJlKCdkdXAnKVxudmFyIGNvYWxsZXNjZVVuaWZvcm1zID0gcmVxdWlyZSgnLi9yZWZsZWN0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVVbmlmb3JtV3JhcHBlclxuXG4vL0JpbmRzIGEgZnVuY3Rpb24gYW5kIHJldHVybnMgYSB2YWx1ZVxuZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICB2YXIgYyA9IG5ldyBGdW5jdGlvbigneScsICdyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4geX0nKVxuICByZXR1cm4gYyh4KVxufVxuXG4vL0NyZWF0ZSBzaGltcyBmb3IgdW5pZm9ybXNcbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1XcmFwcGVyKGdsLCBwcm9ncmFtLCB1bmlmb3JtcywgbG9jYXRpb25zKSB7XG5cbiAgZnVuY3Rpb24gbWFrZUdldHRlcihpbmRleCkge1xuICAgIHZhciBwcm9jID0gbmV3IEZ1bmN0aW9uKCdnbCcsICdwcm9nJywgJ2xvY2F0aW9ucycsIFxuICAgICAgJ3JldHVybiBmdW5jdGlvbigpe3JldHVybiBnbC5nZXRVbmlmb3JtKHByb2csbG9jYXRpb25zWycgKyBpbmRleCArICddKX0nKSBcbiAgICByZXR1cm4gcHJvYyhnbCwgcHJvZ3JhbSwgbG9jYXRpb25zKVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVByb3BTZXR0ZXIocGF0aCwgaW5kZXgsIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICBjYXNlICdpbnQnOlxuICAgICAgY2FzZSAnc2FtcGxlcjJEJzpcbiAgICAgIGNhc2UgJ3NhbXBsZXJDdWJlJzpcbiAgICAgICAgcmV0dXJuICdnbC51bmlmb3JtMWkobG9jYXRpb25zWycgKyBpbmRleCArICddLG9iaicgKyBwYXRoICsgJyknXG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICAgIHJldHVybiAnZ2wudW5pZm9ybTFmKGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHZpZHggPSB0eXBlLmluZGV4T2YoJ3ZlYycpXG4gICAgICAgIGlmKDAgPD0gdmlkeCAmJiB2aWR4IDw9IDEgJiYgdHlwZS5sZW5ndGggPT09IDQgKyB2aWR4KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCBkYXRhIHR5cGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzd2l0Y2godHlwZS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgY2FzZSAnaSc6XG4gICAgICAgICAgICAgIHJldHVybiAnZ2wudW5pZm9ybScgKyBkICsgJ2l2KGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgIHJldHVybiAnZ2wudW5pZm9ybScgKyBkICsgJ2Z2KGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IFVucmVjb2duaXplZCBkYXRhIHR5cGUgZm9yIHZlY3RvciAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKHR5cGUuaW5kZXhPZignbWF0JykgPT09IDAgJiYgdHlwZS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICB2YXIgZCA9IHR5cGUuY2hhckNvZGVBdCh0eXBlLmxlbmd0aC0xKSAtIDQ4XG4gICAgICAgICAgaWYoZCA8IDIgfHwgZCA+IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBJbnZhbGlkIHVuaWZvcm0gZGltZW5zaW9uIHR5cGUgZm9yIG1hdHJpeCAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm1NYXRyaXgnICsgZCArICdmdihsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sZmFsc2Usb2JqJyArIHBhdGggKyAnKSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogVW5rbm93biB1bmlmb3JtIGRhdGEgdHlwZSBmb3IgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbnVtZXJhdGVJbmRpY2VzKHByZWZpeCwgdHlwZSkge1xuICAgIGlmKHR5cGVvZiB0eXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFsgW3ByZWZpeCwgdHlwZV0gXVxuICAgIH1cbiAgICB2YXIgaW5kaWNlcyA9IFtdXG4gICAgZm9yKHZhciBpZCBpbiB0eXBlKSB7XG4gICAgICB2YXIgcHJvcCA9IHR5cGVbaWRdXG4gICAgICB2YXIgdHByZWZpeCA9IHByZWZpeFxuICAgICAgaWYocGFyc2VJbnQoaWQpICsgJycgPT09IGlkKSB7XG4gICAgICAgIHRwcmVmaXggKz0gJ1snICsgaWQgKyAnXSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRwcmVmaXggKz0gJy4nICsgaWRcbiAgICAgIH1cbiAgICAgIGlmKHR5cGVvZiBwcm9wID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpbmRpY2VzLnB1c2guYXBwbHkoaW5kaWNlcywgZW51bWVyYXRlSW5kaWNlcyh0cHJlZml4LCBwcm9wKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGljZXMucHVzaChbdHByZWZpeCwgcHJvcF0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG4gIH1cblxuICBmdW5jdGlvbiBtYWtlU2V0dGVyKHR5cGUpIHtcbiAgICB2YXIgY29kZSA9IFsgJ3JldHVybiBmdW5jdGlvbiB1cGRhdGVQcm9wZXJ0eShvYmopeycgXVxuICAgIHZhciBpbmRpY2VzID0gZW51bWVyYXRlSW5kaWNlcygnJywgdHlwZSlcbiAgICBmb3IodmFyIGk9MDsgaTxpbmRpY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgaXRlbSA9IGluZGljZXNbaV1cbiAgICAgIHZhciBwYXRoID0gaXRlbVswXVxuICAgICAgdmFyIGlkeCAgPSBpdGVtWzFdXG4gICAgICBpZihsb2NhdGlvbnNbaWR4XSkge1xuICAgICAgICBjb2RlLnB1c2gobWFrZVByb3BTZXR0ZXIocGF0aCwgaWR4LCB1bmlmb3Jtc1tpZHhdLnR5cGUpKVxuICAgICAgfVxuICAgIH1cbiAgICBjb2RlLnB1c2goJ3JldHVybiBvYmp9JylcbiAgICB2YXIgcHJvYyA9IG5ldyBGdW5jdGlvbignZ2wnLCAncHJvZycsICdsb2NhdGlvbnMnLCBjb2RlLmpvaW4oJ1xcbicpKVxuICAgIHJldHVybiBwcm9jKGdsLCBwcm9ncmFtLCBsb2NhdGlvbnMpXG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0VmFsdWUodHlwZSkge1xuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlICdib29sJzpcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBjYXNlICdpbnQnOlxuICAgICAgY2FzZSAnc2FtcGxlcjJEJzpcbiAgICAgIGNhc2UgJ3NhbXBsZXJDdWJlJzpcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgICAgcmV0dXJuIDAuMFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHZpZHggPSB0eXBlLmluZGV4T2YoJ3ZlYycpXG4gICAgICAgIGlmKDAgPD0gdmlkeCAmJiB2aWR4IDw9IDEgJiYgdHlwZS5sZW5ndGggPT09IDQgKyB2aWR4KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCBkYXRhIHR5cGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZih0eXBlLmNoYXJBdCgwKSA9PT0gJ2InKSB7XG4gICAgICAgICAgICByZXR1cm4gZHVwKGQsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHVwKGQpXG4gICAgICAgIH0gZWxzZSBpZih0eXBlLmluZGV4T2YoJ21hdCcpID09PSAwICYmIHR5cGUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCB1bmlmb3JtIGRpbWVuc2lvbiB0eXBlIGZvciBtYXRyaXggJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGR1cChbZCxkXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogVW5rbm93biB1bmlmb3JtIGRhdGEgdHlwZSBmb3IgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9yZVByb3BlcnR5KG9iaiwgcHJvcCwgdHlwZSkge1xuICAgIGlmKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkID0gcHJvY2Vzc09iamVjdCh0eXBlKVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xuICAgICAgICBnZXQ6IGlkZW50aXR5KGNoaWxkKSxcbiAgICAgICAgc2V0OiBtYWtlU2V0dGVyKHR5cGUpLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihsb2NhdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xuICAgICAgICAgIGdldDogbWFrZUdldHRlcih0eXBlKSxcbiAgICAgICAgICBzZXQ6IG1ha2VTZXR0ZXIodHlwZSksXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbcHJvcF0gPSBkZWZhdWx0VmFsdWUodW5pZm9ybXNbdHlwZV0udHlwZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzT2JqZWN0KG9iaikge1xuICAgIHZhciByZXN1bHRcbiAgICBpZihBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShvYmoubGVuZ3RoKVxuICAgICAgZm9yKHZhciBpPTA7IGk8b2JqLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0b3JlUHJvcGVydHkocmVzdWx0LCBpLCBvYmpbaV0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHt9XG4gICAgICBmb3IodmFyIGlkIGluIG9iaikge1xuICAgICAgICBzdG9yZVByb3BlcnR5KHJlc3VsdCwgaWQsIG9ialtpZF0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vUmV0dXJuIGRhdGFcbiAgdmFyIGNvYWxsZXNjZWQgPSBjb2FsbGVzY2VVbmlmb3Jtcyh1bmlmb3JtcywgdHJ1ZSlcbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGlkZW50aXR5KHByb2Nlc3NPYmplY3QoY29hbGxlc2NlZCkpLFxuICAgIHNldDogbWFrZVNldHRlcihjb2FsbGVzY2VkKSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBtYWtlUmVmbGVjdFR5cGVzXG5cbi8vQ29uc3RydWN0IHR5cGUgaW5mbyBmb3IgcmVmbGVjdGlvbi5cbi8vXG4vLyBUaGlzIGl0ZXJhdGVzIG92ZXIgdGhlIGZsYXR0ZW5lZCBsaXN0IG9mIHVuaWZvcm0gdHlwZSB2YWx1ZXMgYW5kIHNtYXNoZXMgdGhlbSBpbnRvIGEgSlNPTiBvYmplY3QuXG4vL1xuLy8gVGhlIGxlYXZlcyBvZiB0aGUgcmVzdWx0aW5nIG9iamVjdCBhcmUgZWl0aGVyIGluZGljZXMgb3IgdHlwZSBzdHJpbmdzIHJlcHJlc2VudGluZyBwcmltaXRpdmUgZ2xzbGlmeSB0eXBlc1xuZnVuY3Rpb24gbWFrZVJlZmxlY3RUeXBlcyh1bmlmb3JtcywgdXNlSW5kZXgpIHtcbiAgdmFyIG9iaiA9IHt9XG4gIGZvcih2YXIgaT0wOyBpPHVuaWZvcm1zLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIG4gPSB1bmlmb3Jtc1tpXS5uYW1lXG4gICAgdmFyIHBhcnRzID0gbi5zcGxpdChcIi5cIilcbiAgICB2YXIgbyA9IG9ialxuICAgIGZvcih2YXIgaj0wOyBqPHBhcnRzLmxlbmd0aDsgKytqKSB7XG4gICAgICB2YXIgeCA9IHBhcnRzW2pdLnNwbGl0KFwiW1wiKVxuICAgICAgaWYoeC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmKCEoeFswXSBpbiBvKSkge1xuICAgICAgICAgIG9beFswXV0gPSBbXVxuICAgICAgICB9XG4gICAgICAgIG8gPSBvW3hbMF1dXG4gICAgICAgIGZvcih2YXIgaz0xOyBrPHgubGVuZ3RoOyArK2spIHtcbiAgICAgICAgICB2YXIgeSA9IHBhcnNlSW50KHhba10pXG4gICAgICAgICAgaWYoazx4Lmxlbmd0aC0xIHx8IGo8cGFydHMubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgIGlmKCEoeSBpbiBvKSkge1xuICAgICAgICAgICAgICBpZihrIDwgeC5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgIG9beV0gPSBbXVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9beV0gPSB7fVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvID0gb1t5XVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZih1c2VJbmRleCkge1xuICAgICAgICAgICAgICBvW3ldID0gaVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb1t5XSA9IHVuaWZvcm1zW2ldLnR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZihqIDwgcGFydHMubGVuZ3RoLTEpIHtcbiAgICAgICAgaWYoISh4WzBdIGluIG8pKSB7XG4gICAgICAgICAgb1t4WzBdXSA9IHt9XG4gICAgICAgIH1cbiAgICAgICAgbyA9IG9beFswXV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKHVzZUluZGV4KSB7XG4gICAgICAgICAgb1t4WzBdXSA9IGlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvW3hbMF1dID0gdW5pZm9ybXNbaV0udHlwZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiBkdXBlX2FycmF5KGNvdW50LCB2YWx1ZSwgaSkge1xuICB2YXIgYyA9IGNvdW50W2ldfDBcbiAgaWYoYyA8PSAwKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShjKSwgalxuICBpZihpID09PSBjb3VudC5sZW5ndGgtMSkge1xuICAgIGZvcihqPTA7IGo8YzsgKytqKSB7XG4gICAgICByZXN1bHRbal0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3Ioaj0wOyBqPGM7ICsraikge1xuICAgICAgcmVzdWx0W2pdID0gZHVwZV9hcnJheShjb3VudCwgdmFsdWUsIGkrMSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBkdXBlX251bWJlcihjb3VudCwgdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCwgaVxuICByZXN1bHQgPSBuZXcgQXJyYXkoY291bnQpXG4gIGZvcihpPTA7IGk8Y291bnQ7ICsraSkge1xuICAgIHJlc3VsdFtpXSA9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBkdXBlKGNvdW50LCB2YWx1ZSkge1xuICBpZih0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YWx1ZSA9IDBcbiAgfVxuICBzd2l0Y2godHlwZW9mIGNvdW50KSB7XG4gICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgaWYoY291bnQgPiAwKSB7XG4gICAgICAgIHJldHVybiBkdXBlX251bWJlcihjb3VudHwwLCB2YWx1ZSlcbiAgICAgIH1cbiAgICBicmVha1xuICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgIGlmKHR5cGVvZiAoY291bnQubGVuZ3RoKSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gZHVwZV9hcnJheShjb3VudCwgdmFsdWUsIDApXG4gICAgICB9XG4gICAgYnJlYWtcbiAgfVxuICByZXR1cm4gW11cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkdXBlIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGVVbmlmb3JtV3JhcHBlciA9IHJlcXVpcmUoJy4vbGliL2NyZWF0ZS11bmlmb3JtcycpXG52YXIgY3JlYXRlQXR0cmlidXRlV3JhcHBlciA9IHJlcXVpcmUoJy4vbGliL2NyZWF0ZS1hdHRyaWJ1dGVzJylcbnZhciBtYWtlUmVmbGVjdCA9IHJlcXVpcmUoJy4vbGliL3JlZmxlY3QnKVxuXG4vL1NoYWRlciBvYmplY3RcbmZ1bmN0aW9uIFNoYWRlcihnbCwgcHJvZywgdmVydFNoYWRlciwgZnJhZ1NoYWRlcikge1xuICB0aGlzLmdsID0gZ2xcbiAgdGhpcy5oYW5kbGUgPSBwcm9nXG4gIHRoaXMuYXR0cmlidXRlcyA9IG51bGxcbiAgdGhpcy51bmlmb3JtcyA9IG51bGxcbiAgdGhpcy50eXBlcyA9IG51bGxcbiAgdGhpcy52ZXJ0ZXhTaGFkZXIgPSB2ZXJ0U2hhZGVyXG4gIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBmcmFnU2hhZGVyXG59XG5cbi8vQmluZHMgdGhlIHNoYWRlclxuU2hhZGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmhhbmRsZSlcbn1cblxuLy9EZXN0cm95IHNoYWRlciwgcmVsZWFzZSByZXNvdXJjZXNcblNoYWRlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZ2wgPSB0aGlzLmdsXG4gIGdsLmRlbGV0ZVNoYWRlcih0aGlzLnZlcnRleFNoYWRlcilcbiAgZ2wuZGVsZXRlU2hhZGVyKHRoaXMuZnJhZ21lbnRTaGFkZXIpXG4gIGdsLmRlbGV0ZVByb2dyYW0odGhpcy5oYW5kbGUpXG59XG5cblNoYWRlci5wcm90b3R5cGUudXBkYXRlRXhwb3J0cyA9IGZ1bmN0aW9uKHVuaWZvcm1zLCBhdHRyaWJ1dGVzKSB7XG4gIHZhciBsb2NhdGlvbnMgPSBuZXcgQXJyYXkodW5pZm9ybXMubGVuZ3RoKVxuICB2YXIgcHJvZ3JhbSA9IHRoaXMuaGFuZGxlXG4gIHZhciBnbCA9IHRoaXMuZ2xcblxuICB2YXIgZG9MaW5rID0gcmVsaW5rVW5pZm9ybXMuYmluZCh2b2lkIDAsXG4gICAgZ2wsXG4gICAgcHJvZ3JhbSxcbiAgICBsb2NhdGlvbnMsXG4gICAgdW5pZm9ybXNcbiAgKVxuICBkb0xpbmsoKVxuXG4gIHRoaXMudHlwZXMgPSB7XG4gICAgdW5pZm9ybXM6IG1ha2VSZWZsZWN0KHVuaWZvcm1zKSxcbiAgICBhdHRyaWJ1dGVzOiBtYWtlUmVmbGVjdChhdHRyaWJ1dGVzKVxuICB9XG5cbiAgdGhpcy5hdHRyaWJ1dGVzID0gY3JlYXRlQXR0cmlidXRlV3JhcHBlcihcbiAgICBnbCxcbiAgICBwcm9ncmFtLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAgZG9MaW5rXG4gIClcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3VuaWZvcm1zJywgY3JlYXRlVW5pZm9ybVdyYXBwZXIoXG4gICAgZ2wsXG4gICAgcHJvZ3JhbSxcbiAgICB1bmlmb3JtcyxcbiAgICBsb2NhdGlvbnNcbiAgKSlcbn1cblxuLy9SZWxpbmtzIGFsbCB1bmlmb3Jtc1xuZnVuY3Rpb24gcmVsaW5rVW5pZm9ybXMoZ2wsIHByb2dyYW0sIGxvY2F0aW9ucywgdW5pZm9ybXMpIHtcbiAgZm9yKHZhciBpPTA7IGk8dW5pZm9ybXMubGVuZ3RoOyArK2kpIHtcbiAgICBsb2NhdGlvbnNbaV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdW5pZm9ybXNbaV0ubmFtZSlcbiAgfVxufVxuXG4vL0NvbXBpbGVzIGFuZCBsaW5rcyBhIHNoYWRlciBwcm9ncmFtIHdpdGggdGhlIGdpdmVuIGF0dHJpYnV0ZSBhbmQgdmVydGV4IGxpc3RcbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcihcbiAgICBnbFxuICAsIHZlcnRTb3VyY2VcbiAgLCBmcmFnU291cmNlXG4gICwgdW5pZm9ybXNcbiAgLCBhdHRyaWJ1dGVzKSB7XG4gIFxuICAvL0NvbXBpbGUgdmVydGV4IHNoYWRlclxuICB2YXIgdmVydFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKVxuICBnbC5zaGFkZXJTb3VyY2UodmVydFNoYWRlciwgdmVydFNvdXJjZSlcbiAgZ2wuY29tcGlsZVNoYWRlcih2ZXJ0U2hhZGVyKVxuICBpZighZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHZlcnRTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIHZhciBlcnJMb2cgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHZlcnRTaGFkZXIpXG4gICAgY29uc29sZS5lcnJvcignZ2wtc2hhZGVyOiBFcnJvciBjb21wbGluZyB2ZXJ0ZXggc2hhZGVyOicsIGVyckxvZylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgY29tcGlsaW5nIHZlcnRleCBzaGFkZXI6JyArIGVyckxvZylcbiAgfVxuICBcbiAgLy9Db21waWxlIGZyYWdtZW50IHNoYWRlclxuICB2YXIgZnJhZ1NoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpXG4gIGdsLnNoYWRlclNvdXJjZShmcmFnU2hhZGVyLCBmcmFnU291cmNlKVxuICBnbC5jb21waWxlU2hhZGVyKGZyYWdTaGFkZXIpXG4gIGlmKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoZnJhZ1NoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgdmFyIGVyckxvZyA9IGdsLmdldFNoYWRlckluZm9Mb2coZnJhZ1NoYWRlcilcbiAgICBjb25zb2xlLmVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGNvbXBpbGluZyBmcmFnbWVudCBzaGFkZXI6JywgZXJyTG9nKVxuICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBFcnJvciBjb21waWxpbmcgZnJhZ21lbnQgc2hhZGVyOicgKyBlcnJMb2cpXG4gIH1cbiAgXG4gIC8vTGluayBwcm9ncmFtXG4gIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnU2hhZGVyKVxuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydFNoYWRlcilcblxuICAvL09wdGlvbmFsIGRlZmF1bHQgYXR0cml1YnRlIGxvY2F0aW9uc1xuICBhdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24oYSkge1xuICAgIGlmICh0eXBlb2YgYS5sb2NhdGlvbiA9PT0gJ251bWJlcicpIFxuICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGEubG9jYXRpb24sIGEubmFtZSlcbiAgfSlcblxuICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxuICBpZighZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICB2YXIgZXJyTG9nID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSlcbiAgICBjb25zb2xlLmVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGxpbmtpbmcgc2hhZGVyIHByb2dyYW06JywgZXJyTG9nKVxuICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBFcnJvciBsaW5raW5nIHNoYWRlciBwcm9ncmFtOicgKyBlcnJMb2cpXG4gIH1cbiAgXG4gIC8vUmV0dXJuIGZpbmFsIGxpbmtlZCBzaGFkZXIgb2JqZWN0XG4gIHZhciBzaGFkZXIgPSBuZXcgU2hhZGVyKFxuICAgIGdsLFxuICAgIHByb2dyYW0sXG4gICAgdmVydFNoYWRlcixcbiAgICBmcmFnU2hhZGVyXG4gIClcbiAgc2hhZGVyLnVwZGF0ZUV4cG9ydHModW5pZm9ybXMsIGF0dHJpYnV0ZXMpXG5cbiAgcmV0dXJuIHNoYWRlclxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNoYWRlclxuIiwibW9kdWxlLmV4cG9ydHMgPSBhZGpvaW50O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIG91dFswXSAgPSAgKGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzFdICA9IC0oYTAxICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbMl0gID0gIChhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFszXSAgPSAtKGEwMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTExICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzRdICA9IC0oYTEwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgICBvdXRbNV0gID0gIChhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICAgIG91dFs2XSAgPSAtKGEwMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTEwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzddICA9ICAoYTAwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbOF0gID0gIChhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkpO1xuICAgIG91dFs5XSAgPSAtKGEwMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSk7XG4gICAgb3V0WzEwXSA9ICAoYTAwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICAgIG91dFsxMl0gPSAtKGExMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSk7XG4gICAgb3V0WzEzXSA9ICAoYTAwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpKTtcbiAgICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIG91dFsxNV0gPSAgKGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQ0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDRcbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBkZXRlcm1pbmFudDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdLFxuXG4gICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxuICAgICAgICBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXG4gICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxuICAgICAgICBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXG4gICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxuICAgICAgICBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXG4gICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxuICAgICAgICBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgcmV0dXJuIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUXVhdDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHl4ID0geSAqIHgyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgenggPSB6ICogeDIsXG4gICAgICAgIHp5ID0geiAqIHkyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICAgIG91dFsxXSA9IHl4ICsgd3o7XG4gICAgb3V0WzJdID0genggLSB3eTtcbiAgICBvdXRbM10gPSAwO1xuXG4gICAgb3V0WzRdID0geXggLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0geHggLSB6ejtcbiAgICBvdXRbNl0gPSB6eSArIHd4O1xuICAgIG91dFs3XSA9IDA7XG5cbiAgICBvdXRbOF0gPSB6eCArIHd5O1xuICAgIG91dFs5XSA9IHp5IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICAgIG91dFsxMV0gPSAwO1xuXG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICB2YXIgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgcSwgdikge1xuICAgIC8vIFF1YXRlcm5pb24gbWF0aFxuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeHkgPSB4ICogeTIsXG4gICAgICAgIHh6ID0geCAqIHoyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgeXogPSB5ICogejIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtICh5eSArIHp6KTtcbiAgICBvdXRbMV0gPSB4eSArIHd6O1xuICAgIG91dFsyXSA9IHh6IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4eSAtIHd6O1xuICAgIG91dFs1XSA9IDEgLSAoeHggKyB6eik7XG4gICAgb3V0WzZdID0geXogKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHh6ICsgd3k7XG4gICAgb3V0WzldID0geXogLSB3eDtcbiAgICBvdXRbMTBdID0gMSAtICh4eCArIHl5KTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gdlswXTtcbiAgICBvdXRbMTNdID0gdlsxXTtcbiAgICBvdXRbMTRdID0gdlsyXTtcbiAgICBvdXRbMTVdID0gMTtcbiAgICBcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZydXN0dW07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZnJ1c3R1bSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZydXN0dW0ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KSxcbiAgICAgICAgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAobmVhciAqIDIpICogcmw7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAobmVhciAqIDIpICogdGI7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gICAgb3V0WzldID0gKHRvcCArIGJvdHRvbSkgKiB0YjtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoZmFyICogbmVhciAqIDIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBpZGVudGl0eTogcmVxdWlyZSgnLi9pZGVudGl0eScpXG4gICwgdHJhbnNwb3NlOiByZXF1aXJlKCcuL3RyYW5zcG9zZScpXG4gICwgaW52ZXJ0OiByZXF1aXJlKCcuL2ludmVydCcpXG4gICwgYWRqb2ludDogcmVxdWlyZSgnLi9hZGpvaW50JylcbiAgLCBkZXRlcm1pbmFudDogcmVxdWlyZSgnLi9kZXRlcm1pbmFudCcpXG4gICwgbXVsdGlwbHk6IHJlcXVpcmUoJy4vbXVsdGlwbHknKVxuICAsIHRyYW5zbGF0ZTogcmVxdWlyZSgnLi90cmFuc2xhdGUnKVxuICAsIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJylcbiAgLCByb3RhdGU6IHJlcXVpcmUoJy4vcm90YXRlJylcbiAgLCByb3RhdGVYOiByZXF1aXJlKCcuL3JvdGF0ZVgnKVxuICAsIHJvdGF0ZVk6IHJlcXVpcmUoJy4vcm90YXRlWScpXG4gICwgcm90YXRlWjogcmVxdWlyZSgnLi9yb3RhdGVaJylcbiAgLCBmcm9tUm90YXRpb25UcmFuc2xhdGlvbjogcmVxdWlyZSgnLi9mcm9tUm90YXRpb25UcmFuc2xhdGlvbicpXG4gICwgZnJvbVF1YXQ6IHJlcXVpcmUoJy4vZnJvbVF1YXQnKVxuICAsIGZydXN0dW06IHJlcXVpcmUoJy4vZnJ1c3R1bScpXG4gICwgcGVyc3BlY3RpdmU6IHJlcXVpcmUoJy4vcGVyc3BlY3RpdmUnKVxuICAsIG9ydGhvOiByZXF1aXJlKCcuL29ydGhvJylcbiAgLCBsb29rQXQ6IHJlcXVpcmUoJy4vbG9va0F0JylcbiAgLCBzdHI6IHJlcXVpcmUoJy4vc3RyJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGludmVydDtcblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdLFxuXG4gICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxuICAgICAgICBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXG4gICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxuICAgICAgICBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXG4gICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxuICAgICAgICBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXG4gICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxuICAgICAgICBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzIsXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgICAgICBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgICBpZiAoIWRldCkgeyBcbiAgICAgICAgcmV0dXJuIG51bGw7IFxuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgICBvdXRbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgICBvdXRbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcbiAgICBvdXRbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcbiAgICBvdXRbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xuICAgIG91dFsxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gbG9va0F0O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGxvb2stYXQgbWF0cml4IHdpdGggdGhlIGdpdmVuIGV5ZSBwb3NpdGlvbiwgZm9jYWwgcG9pbnQsIGFuZCB1cCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbG9va0F0KG91dCwgZXllLCBjZW50ZXIsIHVwKSB7XG4gICAgdmFyIHgwLCB4MSwgeDIsIHkwLCB5MSwgeTIsIHowLCB6MSwgejIsIGxlbixcbiAgICAgICAgZXlleCA9IGV5ZVswXSxcbiAgICAgICAgZXlleSA9IGV5ZVsxXSxcbiAgICAgICAgZXlleiA9IGV5ZVsyXSxcbiAgICAgICAgdXB4ID0gdXBbMF0sXG4gICAgICAgIHVweSA9IHVwWzFdLFxuICAgICAgICB1cHogPSB1cFsyXSxcbiAgICAgICAgY2VudGVyeCA9IGNlbnRlclswXSxcbiAgICAgICAgY2VudGVyeSA9IGNlbnRlclsxXSxcbiAgICAgICAgY2VudGVyeiA9IGNlbnRlclsyXTtcblxuICAgIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCAwLjAwMDAwMSAmJlxuICAgICAgICBNYXRoLmFicyhleWV5IC0gY2VudGVyeSkgPCAwLjAwMDAwMSAmJlxuICAgICAgICBNYXRoLmFicyhleWV6IC0gY2VudGVyeikgPCAwLjAwMDAwMSkge1xuICAgICAgICByZXR1cm4gbWF0NC5pZGVudGl0eShvdXQpO1xuICAgIH1cblxuICAgIHowID0gZXlleCAtIGNlbnRlcng7XG4gICAgejEgPSBleWV5IC0gY2VudGVyeTtcbiAgICB6MiA9IGV5ZXogLSBjZW50ZXJ6O1xuXG4gICAgbGVuID0gMSAvIE1hdGguc3FydCh6MCAqIHowICsgejEgKiB6MSArIHoyICogejIpO1xuICAgIHowICo9IGxlbjtcbiAgICB6MSAqPSBsZW47XG4gICAgejIgKj0gbGVuO1xuXG4gICAgeDAgPSB1cHkgKiB6MiAtIHVweiAqIHoxO1xuICAgIHgxID0gdXB6ICogejAgLSB1cHggKiB6MjtcbiAgICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gICAgbGVuID0gTWF0aC5zcXJ0KHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4Mik7XG4gICAgaWYgKCFsZW4pIHtcbiAgICAgICAgeDAgPSAwO1xuICAgICAgICB4MSA9IDA7XG4gICAgICAgIHgyID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZW4gPSAxIC8gbGVuO1xuICAgICAgICB4MCAqPSBsZW47XG4gICAgICAgIHgxICo9IGxlbjtcbiAgICAgICAgeDIgKj0gbGVuO1xuICAgIH1cblxuICAgIHkwID0gejEgKiB4MiAtIHoyICogeDE7XG4gICAgeTEgPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgICB5MiA9IHowICogeDEgLSB6MSAqIHgwO1xuXG4gICAgbGVuID0gTWF0aC5zcXJ0KHkwICogeTAgKyB5MSAqIHkxICsgeTIgKiB5Mik7XG4gICAgaWYgKCFsZW4pIHtcbiAgICAgICAgeTAgPSAwO1xuICAgICAgICB5MSA9IDA7XG4gICAgICAgIHkyID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZW4gPSAxIC8gbGVuO1xuICAgICAgICB5MCAqPSBsZW47XG4gICAgICAgIHkxICo9IGxlbjtcbiAgICAgICAgeTIgKj0gbGVuO1xuICAgIH1cblxuICAgIG91dFswXSA9IHgwO1xuICAgIG91dFsxXSA9IHkwO1xuICAgIG91dFsyXSA9IHowO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0geDE7XG4gICAgb3V0WzVdID0geTE7XG4gICAgb3V0WzZdID0gejE7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4MjtcbiAgICBvdXRbOV0gPSB5MjtcbiAgICBvdXRbMTBdID0gejI7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IC0oeDAgKiBleWV4ICsgeDEgKiBleWV5ICsgeDIgKiBleWV6KTtcbiAgICBvdXRbMTNdID0gLSh5MCAqIGV5ZXggKyB5MSAqIGV5ZXkgKyB5MiAqIGV5ZXopO1xuICAgIG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDQnc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgICAvLyBDYWNoZSBvbmx5IHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIHNlY29uZCBtYXRyaXhcbiAgICB2YXIgYjAgID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXTsgIFxuICAgIG91dFswXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbMV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzJdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFszXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYls0XTsgYjEgPSBiWzVdOyBiMiA9IGJbNl07IGIzID0gYls3XTtcbiAgICBvdXRbNF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzVdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFs2XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbN10gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbOF07IGIxID0gYls5XTsgYjIgPSBiWzEwXTsgYjMgPSBiWzExXTtcbiAgICBvdXRbOF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzldID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsxMF0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzExXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYlsxMl07IGIxID0gYlsxM107IGIyID0gYlsxNF07IGIzID0gYlsxNV07XG4gICAgb3V0WzEyXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbMTNdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsxNF0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzE1XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IG9ydGhvO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG9ydGhvZ29uYWwgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG9ydGhvKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCksXG4gICAgICAgIGJ0ID0gMSAvIChib3R0b20gLSB0b3ApLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gLTIgKiBscjtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IC0yICogYnQ7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMiAqIG5mO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICAgIG91dFsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xuICAgIG91dFsxNF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHBlcnNwZWN0aXZlO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3Z5IFZlcnRpY2FsIGZpZWxkIG9mIHZpZXcgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdCBBc3BlY3QgcmF0aW8uIHR5cGljYWxseSB2aWV3cG9ydCB3aWR0aC9oZWlnaHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlKG91dCwgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgZiA9IDEuMCAvIE1hdGgudGFuKGZvdnkgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IGYgLyBhc3BlY3Q7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSBmO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxMV0gPSAtMTtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gKDIgKiBmYXIgKiBuZWFyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAwO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXQ0IGJ5IHRoZSBnaXZlbiBhbmdsZVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcGFyYW0ge3ZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgICB2YXIgeCA9IGF4aXNbMF0sIHkgPSBheGlzWzFdLCB6ID0gYXhpc1syXSxcbiAgICAgICAgbGVuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiksXG4gICAgICAgIHMsIGMsIHQsXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjMsXG4gICAgICAgIGIwMCwgYjAxLCBiMDIsXG4gICAgICAgIGIxMCwgYjExLCBiMTIsXG4gICAgICAgIGIyMCwgYjIxLCBiMjI7XG5cbiAgICBpZiAoTWF0aC5hYnMobGVuKSA8IDAuMDAwMDAxKSB7IHJldHVybiBudWxsOyB9XG4gICAgXG4gICAgbGVuID0gMSAvIGxlbjtcbiAgICB4ICo9IGxlbjtcbiAgICB5ICo9IGxlbjtcbiAgICB6ICo9IGxlbjtcblxuICAgIHMgPSBNYXRoLnNpbihyYWQpO1xuICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICAgIHQgPSAxIC0gYztcblxuICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcbiAgICBiMDAgPSB4ICogeCAqIHQgKyBjOyBiMDEgPSB5ICogeCAqIHQgKyB6ICogczsgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHM7IGIxMSA9IHkgKiB5ICogdCArIGM7IGIxMiA9IHogKiB5ICogdCArIHggKiBzO1xuICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzOyBiMjEgPSB5ICogeiAqIHQgLSB4ICogczsgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAgIC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyO1xuICAgIG91dFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMjtcbiAgICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gICAgb3V0WzNdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyO1xuICAgIG91dFs0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMjtcbiAgICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gICAgb3V0WzZdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyO1xuICAgIG91dFs3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMjtcbiAgICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gICAgb3V0WzldID0gYTAxICogYjIwICsgYTExICogYjIxICsgYTIxICogYjIyO1xuICAgIG91dFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XG4gICAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVg7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFswXSAgPSBhWzBdO1xuICAgICAgICBvdXRbMV0gID0gYVsxXTtcbiAgICAgICAgb3V0WzJdICA9IGFbMl07XG4gICAgICAgIG91dFszXSAgPSBhWzNdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgKyBhMjEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEyMCAqIGMgLSBhMTAgKiBzO1xuICAgIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICAgIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgICBvdXRbMTFdID0gYTIzICogYyAtIGExMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVZO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM10sXG4gICAgICAgIGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgICAgICBvdXRbNF0gID0gYVs0XTtcbiAgICAgICAgb3V0WzVdICA9IGFbNV07XG4gICAgICAgIG91dFs2XSAgPSBhWzZdO1xuICAgICAgICBvdXRbN10gID0gYVs3XTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBjIC0gYTIwICogcztcbiAgICBvdXRbMV0gPSBhMDEgKiBjIC0gYTIxICogcztcbiAgICBvdXRbMl0gPSBhMDIgKiBjIC0gYTIyICogcztcbiAgICBvdXRbM10gPSBhMDMgKiBjIC0gYTIzICogcztcbiAgICBvdXRbOF0gPSBhMDAgKiBzICsgYTIwICogYztcbiAgICBvdXRbOV0gPSBhMDEgKiBzICsgYTIxICogYztcbiAgICBvdXRbMTBdID0gYTAyICogcyArIGEyMiAqIGM7XG4gICAgb3V0WzExXSA9IGEwMyAqIHMgKyBhMjMgKiBjO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWjtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbOF0gID0gYVs4XTtcbiAgICAgICAgb3V0WzldICA9IGFbOV07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgKyBhMTEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgKyBhMTIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICAgIG91dFs0XSA9IGExMCAqIGMgLSBhMDAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgLSBhMDEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgLSBhMDMgKiBzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGU7XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdGhlIHZlYzMgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICoqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl07XG5cbiAgICBvdXRbMF0gPSBhWzBdICogeDtcbiAgICBvdXRbMV0gPSBhWzFdICogeDtcbiAgICBvdXRbMl0gPSBhWzJdICogeDtcbiAgICBvdXRbM10gPSBhWzNdICogeDtcbiAgICBvdXRbNF0gPSBhWzRdICogeTtcbiAgICBvdXRbNV0gPSBhWzVdICogeTtcbiAgICBvdXRbNl0gPSBhWzZdICogeTtcbiAgICBvdXRbN10gPSBhWzddICogeTtcbiAgICBvdXRbOF0gPSBhWzhdICogejtcbiAgICBvdXRbOV0gPSBhWzldICogejtcbiAgICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICAgIG91dFsxMV0gPSBhWzExXSAqIHo7XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc3RyO1xuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBtYXQgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ21hdDQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgYVs0XSArICcsICcgKyBhWzVdICsgJywgJyArIGFbNl0gKyAnLCAnICsgYVs3XSArICcsICcgK1xuICAgICAgICAgICAgICAgICAgICBhWzhdICsgJywgJyArIGFbOV0gKyAnLCAnICsgYVsxMF0gKyAnLCAnICsgYVsxMV0gKyAnLCAnICsgXG4gICAgICAgICAgICAgICAgICAgIGFbMTJdICsgJywgJyArIGFbMTNdICsgJywgJyArIGFbMTRdICsgJywgJyArIGFbMTVdICsgJyknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zbGF0ZTtcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl0sXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjM7XG5cbiAgICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgICAgIG91dFsxMl0gPSBhWzBdICogeCArIGFbNF0gKiB5ICsgYVs4XSAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVszXSAqIHggKyBhWzddICogeSArIGFbMTFdICogeiArIGFbMTVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMF0gPSBhMDA7IG91dFsxXSA9IGEwMTsgb3V0WzJdID0gYTAyOyBvdXRbM10gPSBhMDM7XG4gICAgICAgIG91dFs0XSA9IGExMDsgb3V0WzVdID0gYTExOyBvdXRbNl0gPSBhMTI7IG91dFs3XSA9IGExMztcbiAgICAgICAgb3V0WzhdID0gYTIwOyBvdXRbOV0gPSBhMjE7IG91dFsxMF0gPSBhMjI7IG91dFsxMV0gPSBhMjM7XG5cbiAgICAgICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhMDIgKiB4ICsgYTEyICogeSArIGEyMiAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNwb3NlO1xuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIHZhciBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICAgICAgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhMDE7XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhMDI7XG4gICAgICAgIG91dFs5XSA9IGExMjtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYTAzO1xuICAgICAgICBvdXRbMTNdID0gYTEzO1xuICAgICAgICBvdXRbMTRdID0gYTIzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dFswXSA9IGFbMF07XG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhWzFdO1xuICAgICAgICBvdXRbNV0gPSBhWzVdO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYVsyXTtcbiAgICAgICAgb3V0WzldID0gYVs2XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhWzNdO1xuICAgICAgICBvdXRbMTNdID0gYVs3XTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBvdXQ7XG59OyIsInZhciBCYXNlID0gcmVxdWlyZSgnZm9udHBhdGgtc2ltcGxlLXJlbmRlcmVyJylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBibWZvbnQyZm9udHBhdGggPSByZXF1aXJlKCdmb250cGF0aC1ibWZvbnQnKVxudmFyIHRleGNvb3JkID0gcmVxdWlyZSgndGV4Y29vcmQnKVxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGNyZWF0ZVRleHR1cmUgPSByZXF1aXJlKCdnbC10ZXh0dXJlMmQnKVxuXG52YXIgQmF0Y2ggPSByZXF1aXJlKCdnbC1zcHJpdGUtYmF0Y2gnKVxuXG52YXIgdG1wUG9zID0gWzAsIDBdLFxuICAgIHRtcFNoYXBlID0gWzAsIDBdLFxuICAgIHRtcDEgPSBbMCwgMF0sXG4gICAgdG1wMiA9IFswLCAwXVxudmFyIERFRkFVTFRfVEVYQ09PUkQgPSBbMCwgMCwgMSwgMV1cbnZhciBtYXhJbml0aWFsQ2FwYWNpdHkgPSA1MDBcblxuZnVuY3Rpb24gdGV4Y29vcmRHbHlwaChnbHlwaCwgYXRsYXMsIG91dCkge1xuICAgIHRtcDFbMF0gPSBnbHlwaC54XG4gICAgdG1wMVsxXSA9IGdseXBoLnlcbiAgICB0bXAyWzBdID0gZ2x5cGgud2lkdGhcbiAgICB0bXAyWzFdID0gZ2x5cGguaGVpZ2h0XG4gICAgcmV0dXJuIHRleGNvb3JkKHRtcDEsIHRtcDIsIGF0bGFzLCBvdXQpXG59XG5cbmZ1bmN0aW9uIFRleHRSZW5kZXJlcihnbCwgb3B0KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRleHRSZW5kZXJlcikpXG4gICAgICAgIHJldHVybiBuZXcgVGV4dFJlbmRlcmVyKGdsLCBvcHQpXG4gICAgb3B0ID0gb3B0fHx7fVxuXG4gICAgaWYgKCFvcHQuZm9udCkgXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbXVzdCBzcGVjaWZ5IGJtZm9udCBhdCBjcmVhdGlvbiB0aW1lJylcblxuICAgIC8vaWYgdGhlIGZvbnQgaGFzIEltYWdlL25kYXJyYXkgYXJyYXlcbiAgICBpZiAoIW9wdC50ZXh0dXJlcyAmJiBBcnJheS5pc0FycmF5KG9wdC5mb250LmltYWdlcykpIHtcbiAgICAgICAgb3B0LnRleHR1cmVzID0gb3B0LmZvbnQuaW1hZ2VzLm1hcChmdW5jdGlvbihpbWcpIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVUZXh0dXJlKGdsLCBpbWcpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb3B0LmZvbnQgPSBibWZvbnQyZm9udHBhdGgob3B0LmZvbnQpXG5cbiAgICBCYXNlLmNhbGwodGhpcywgb3B0KVxuXG4gICAgdGhpcy50ZXh0dXJlcyA9IG9wdC50ZXh0dXJlcyB8fCBbXVxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIGlmICghZ2wpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm11c3Qgc3BlY2lmeSBnbCBjb250ZXh0XCIpXG4gICAgXG4gICAgLy9hc3N1bWUgdGV4dCB3aWxsIGJlIHVzZWQgZHluYW1pY2FsbHkgXG4gICAgaWYgKHR5cGVvZiBvcHQuZHluYW1pYyAhPT0gJ2Jvb2xlYW4nKVxuICAgICAgICBvcHQuZHluYW1pYyA9IHRydWVcblxuICAgIHZhciBiYXRjaCA9IG9wdC5iYXRjaFxuICAgIGlmICghYmF0Y2gpXG4gICAgICAgIHRoaXMuZGVmYXVsdEJhdGNoID0gQmF0Y2goZ2wsIG9wdClcbiAgICB0aGlzLmJhdGNoID0gYmF0Y2ggfHwgdGhpcy5kZWZhdWx0QmF0Y2hcblxuICAgIGlmICh0eXBlb2Ygb3B0LndyYXBXaWR0aCAhPT0gJ251bWJlcicpXG4gICAgICAgIHRoaXMubGF5b3V0KClcbn1cblxuaW5oZXJpdHMoVGV4dFJlbmRlcmVyLCBCYXNlKVxuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbih0ZXh0dXJlcykge1xuICAgIGlmICh0aGlzLmRlZmF1bHRCYXRjaClcbiAgICAgICAgdGhpcy5kZWZhdWx0QmF0Y2guZGlzcG9zZSgpXG4gICAgaWYgKHRleHR1cmVzKSB7XG4gICAgICAgIHRoaXMudGV4dHVyZXMuZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHQuZGlzcG9zZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICB0LmRpc3Bvc2UoKVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xufVxuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLnVuY2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jYWNoZSA9IGZhbHNlXG4gICAgdGhpcy5iYXRjaC5jbGVhcigpXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5jYWNoZSA9IGZ1bmN0aW9uKHgsIHksIHN0YXJ0LCBlbmQpIHtcbiAgICAvLyBpZiAodGhpcy51bmRlcmxpbmUgfHwgdGhpcy5mb250LnBhZ2VzLmxlbmd0aCA+IDEpXG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvcignY3VycmVudGx5IGNhY2hlZCB0ZXh0IGRvZXMgbm90IHN1cHBvcnQgdW5kZXJsaW5lcyBvciBtdWx0aXBsZSB0ZXh0dXJlIHBhZ2VzJylcbiAgICBcbiAgICB0aGlzLl9jYWNoZSA9IHRydWVcbiAgICB0aGlzLmJhdGNoLmVuc3VyZUNhcGFjaXR5KHRoaXMudGV4dC5sZW5ndGgpXG4gICAgdGhpcy5iYXRjaC5jbGVhcigpXG4gICAgdGhpcy5fYnVpbGQoeCwgeSwgc3RhcnQsIGVuZClcbiAgICByZXR1cm4gdGhpc1xufVxuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihzaGFkZXIsIHgsIHksIHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgYmF0Y2ggPSB0aGlzLmJhdGNoXG4gICAgYmF0Y2guYmluZChzaGFkZXIpXG5cbiAgICAvL2lmIHdlJ3JlIGRyYXdpbmcgZHluYW1pY2FsbHlcbiAgICBpZiAoIXRoaXMuX2NhY2hlKSB7XG4gICAgICAgIGJhdGNoLmNsZWFyKClcbiAgICAgICAgdGhpcy5fYnVpbGQoeCwgeSwgc3RhcnQsIGVuZClcbiAgICB9XG4gICAgXG4gICAgYmF0Y2guZHJhdygpXG4gICAgYmF0Y2gudW5iaW5kKClcbiAgICByZXR1cm4gdGhpc1xufVxuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLl9idWlsZCA9IGZ1bmN0aW9uKHgsIHksIHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZW5kZXIoeCwgeSwgc3RhcnQsIGVuZClcblxuICAgIHZhciBiYXRjaCA9IHRoaXMuYmF0Y2hcblxuICAgIC8vdW5kZXJsaW5lcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCB3aXRoIGNhY2hlKClcbiAgICBpZiAoIXRoaXMuX2NhY2hlKSB7XG4gICAgICAgIGJhdGNoLnRleGNvb3JkID0gREVGQVVMVF9URVhDT09SRFxuICAgICAgICBiYXRjaC50ZXh0dXJlID0gbnVsbFxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZXN1bHQudW5kZXJsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHVuZGVybGluZSA9IHJlc3VsdC51bmRlcmxpbmVzW2ldXG4gICAgICAgICAgICBiYXRjaC5wb3NpdGlvbiA9IHVuZGVybGluZS5wb3NpdGlvblxuICAgICAgICAgICAgYmF0Y2guc2hhcGUgPSB1bmRlcmxpbmUuc2l6ZVxuICAgICAgICAgICAgYmF0Y2gucHVzaCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL25vdyBkcmF3IG91ciBnbHlwaHMgaW50byB0aGUgYmF0Y2guLi5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcmVzdWx0LmdseXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZyA9IHJlc3VsdC5nbHlwaHNbaV1cbiAgICAgICAgdGhpcy5fZHJhd0dseXBoKGJhdGNoLCBnKVxuICAgIH1cbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5fZHJhd0dseXBoID0gZnVuY3Rpb24oYmF0Y2gsIGRhdGEpIHtcbiAgICAvLy4uLiB3ZSBjb3VsZCBzb3J0IHRoZXNlIGJ5IHRleHR1cmUgcGFnZSB0byByZWR1Y2UgZHJhd3NcbiAgICB2YXIgZ2x5cGggPSBkYXRhLmdseXBoXG4gICAgdmFyIGltZyA9IHRoaXMudGV4dHVyZXNbZ2x5cGgucGFnZV1cbiAgICB0bXBQb3NbMF0gPSBkYXRhLnBvc2l0aW9uWzBdK2dseXBoLmhieFxuICAgIHRtcFBvc1sxXSA9IGRhdGEucG9zaXRpb25bMV0rZ2x5cGguaGJ5IC0gdGhpcy5mb250LmRlc2NlbmRlclxuICAgIHRtcFNoYXBlWzBdID0gZ2x5cGgud2lkdGggKiBkYXRhLnNjYWxlWzBdXG4gICAgdG1wU2hhcGVbMV0gPSBnbHlwaC5oZWlnaHQgKiBkYXRhLnNjYWxlWzFdXG4gICAgXG4gICAgYmF0Y2gudGV4dHVyZSA9IGltZ1xuICAgIHRleGNvb3JkR2x5cGgoZ2x5cGgsIGltZyAmJiBpbWcuc2hhcGUsIGJhdGNoLnRleGNvb3JkKVxuICAgIGJhdGNoLnBvc2l0aW9uID0gdG1wUG9zXG4gICAgYmF0Y2guc2hhcGUgPSB0bXBTaGFwZVxuICAgIGJhdGNoLnB1c2goKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRSZW5kZXJlciIsImZ1bmN0aW9uIGdseXBoKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYWdlOiBkYXRhLnBhZ2UsXG4gICAgICAgIGhieDogZGF0YS54b2Zmc2V0LFxuICAgICAgICBoYnk6IGRhdGEueW9mZnNldCxcbiAgICAgICAgd2lkdGg6IGRhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogZGF0YS5oZWlnaHQsXG4gICAgICAgIHhvZmY6IGRhdGEueGFkdmFuY2UsXG4gICAgICAgIHg6IGRhdGEueCxcbiAgICAgICAgeTogZGF0YS55XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnbHlwaHMoY2hhcnMpIHtcbiAgICB2YXIgb3V0ID0ge31cbiAgICBjaGFycy5mb3JFYWNoKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgb3V0W1N0cmluZy5mcm9tQ2hhckNvZGUoYy5pZCldID0gZ2x5cGgoYylcbiAgICB9KVxuICAgIHJldHVybiBvdXRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihibWZvbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYWdlczogYm1mb250LnBhZ2VzLFxuICAgICAgICByZXNvbHV0aW9uOiA3MixcbiAgICAgICAgc2l6ZTogYm1mb250LmluZm8uc2l6ZSxcbiAgICAgICAgdW5pdHNfcGVyX0VNOiAxLFxuICAgICAgICBiaXRtYXA6IHRydWUsXG4gICAgICAgIGZhbWlseV9uYW1lOiBibWZvbnQuaW5mby5mYWNlLFxuICAgICAgICBoZWlnaHQ6IGJtZm9udC5jb21tb24ubGluZUhlaWdodCxcbiAgICAgICAgZGVzY2VuZGVyOiBibWZvbnQuY29tbW9uLmJhc2UsXG4gICAgICAgIGFzY2VuZGVyOiBibWZvbnQuY29tbW9uLmJhc2UsXG4gICAgICAgIGdseXBoczogZ2x5cGhzKGJtZm9udC5jaGFycyksXG4gICAgICAgIGtlcm5pbmc6IGJtZm9udC5rZXJuaW5ncy5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgcmV0dXJuIFtTdHJpbmcuZnJvbUNoYXJDb2RlKGsuZmlyc3QpLFN0cmluZy5mcm9tQ2hhckNvZGUoay5zZWNvbmQpLGsuYW1vdW50XVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJ2YXIgQmFzZSA9IHJlcXVpcmUoJ2ZvbnRwYXRoLXJlbmRlcmVyJylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcblxuLy9UT0RPOiBFdmVudHVhbGx5IGxvdHMgb2YgdGhpcyBjb2RlIHdpbGwganVzdCByZXBsYWNlIGZvbnRwYXRoLXJlbmRlcmVyLi4uXG5cbmZ1bmN0aW9uIEZvbnRwYXRoUmVuZGVyZXIob3B0aW9ucykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGb250cGF0aFJlbmRlcmVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBGb250cGF0aFJlbmRlcmVyKG9wdGlvbnMpXG4gICAgQmFzZS5jYWxsKHRoaXMsIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgIGdseXBoczogW10sXG4gICAgICAgIHVuZGVybGluZXM6IFtdXG4gICAgfVxufVxuXG5pbmhlcml0cyhGb250cGF0aFJlbmRlcmVyLCBCYXNlKVxuXG5Gb250cGF0aFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJHbHlwaCA9IGZ1bmN0aW9uKGksIGdseXBoLCBzY2FsZSwgeCwgeSkge1xuICAgIHRoaXMuZGF0YS5nbHlwaHMucHVzaChuZXcgR2x5cGgoaSwgZ2x5cGgsIFxuICAgICAgICAgICAgICAgIHRoaXMudGV4dC5jaGFyQ29kZUF0KGkpLCBcbiAgICAgICAgICAgICAgICBbIHNjYWxlLCB0aGlzLmZvbnQuYml0bWFwID8gc2NhbGUgOiAtc2NhbGUgXSxcbiAgICAgICAgICAgICAgICBbIHgsIHkgXSkpXG59XG5cbkZvbnRwYXRoUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlclVuZGVybGluZSA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmRhdGEudW5kZXJsaW5lcy5wdXNoKG5ldyBVbmRlcmxpbmUoXG4gICAgICAgIFsgeCwgeSBdLFxuICAgICAgICBbIHdpZHRoLCBoZWlnaHQgXVxuICAgICkpXG59XG5cbkZvbnRwYXRoUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKHgsIHksIHN0YXJ0LCBlbmQpIHtcbiAgICAvL25ldyBkYXRhIGZvciByZXN1bHRcbiAgICB0aGlzLmRhdGEuZ2x5cGhzLmxlbmd0aCA9IDBcbiAgICB0aGlzLmRhdGEudW5kZXJsaW5lcy5sZW5ndGggPSAwXG4gICAgQmFzZS5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcywgeCwgeSwgc3RhcnQsIGVuZClcbiAgICByZXR1cm4gdGhpcy5kYXRhXG59XG5cbmZ1bmN0aW9uIEdseXBoKGluZGV4LCBnbHlwaCwgY2hhckNvZGUsIHNjYWxlLCBwb3NpdGlvbikge1xuICAgIHRoaXMuZ2x5cGggPSBnbHlwaFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuY2hhckNvZGUgPSBjaGFyQ29kZVxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2NhbGUgPSBzY2FsZVxufVxuXG5mdW5jdGlvbiBVbmRlcmxpbmUocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm9udHBhdGhSZW5kZXJlciIsInZhciBHbHlwaEl0ZXJhdG9yID0gcmVxdWlyZSgnZm9udHBhdGgtZ2x5cGgtaXRlcmF0b3InKTtcbnZhciBXb3JkV3JhcCA9IHJlcXVpcmUoJ2ZvbnRwYXRoLXdvcmR3cmFwJyk7XG5cbnZhciB0bXBCb3VuZHMgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsIGdseXBoczogMCB9O1xuXG5mdW5jdGlvbiBUZXh0UmVuZGVyZXIob3B0aW9ucykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUZXh0UmVuZGVyZXIpKVxuICAgICAgICByZXR1cm4gbmV3IFRleHRSZW5kZXJlcihvcHRpb25zKTtcbiAgICBvcHRpb25zID0gb3B0aW9uc3x8e31cblxuICAgIHRoaXMuaXRlcmF0b3IgPSBuZXcgR2x5cGhJdGVyYXRvcihvcHRpb25zLmZvbnQsIG9wdGlvbnMuZm9udFNpemUpO1xuICAgIHRoaXMud29yZHdyYXAgPSBuZXcgV29yZFdyYXAoKTtcblxuICAgIHRoaXMuYWxpZ24gPSAnbGVmdCc7XG4gICAgdGhpcy51bmRlcmxpbmUgPSBmYWxzZTtcblxuICAgIHRoaXMudW5kZXJsaW5lVGhpY2tuZXNzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudW5kZXJsaW5lUG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdGV4dCA9IFwiXCI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYWxpZ24gPT09ICdzdHJpbmcnKVxuICAgICAgICB0aGlzLmFsaWduID0gb3B0aW9ucy5hbGlnbjtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudW5kZXJsaW5lID09PSAnYm9vbGVhbicpXG4gICAgICAgIHRoaXMudW5kZXJsaW5lID0gb3B0aW9ucy51bmRlcmxpbmU7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnVuZGVybGluZVRoaWNrbmVzcyA9PT0gJ251bWJlcicpXG4gICAgICAgIHRoaXMudW5kZXJsaW5lVGhpY2tuZXNzID0gb3B0aW9ucy51bmRlcmxpbmVUaGlja25lc3M7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnVuZGVybGluZVBvc2l0aW9uID09PSAnbnVtYmVyJylcbiAgICAgICAgdGhpcy51bmRlcmxpbmVQb3NpdGlvbiA9IG9wdGlvbnMudW5kZXJsaW5lUG9zaXRpb247XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnRleHQgPT09ICdzdHJpbmcnKVxuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmxpbmVIZWlnaHQgPT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLmxpbmVIZWlnaHQgPSBvcHRpb25zLmxpbmVIZWlnaHQ7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmxldHRlclNwYWNpbmcgPT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLmxldHRlclNwYWNpbmcgPSBvcHRpb25zLmxldHRlclNwYWNpbmc7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyYXBNb2RlID09PSAnc3RyaW5nJylcbiAgICAgICAgdGhpcy53b3Jkd3JhcC5tb2RlID0gb3B0aW9ucy53cmFwTW9kZTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JhcFdpZHRoID09PSAnbnVtYmVyJylcbiAgICAgICAgdGhpcy5sYXlvdXQob3B0aW9ucy53cmFwV2lkdGgpO1xufVxuXG4vL0ludGVybmFsbHkgd2Ugd2lsbCB1c2UgaW50ZWdlcnMgdG8gYXZvaWQgc3RyaW5nIGNvbXBhcmlzb24gZm9yIGVhY2ggZ2x5cGhcbnZhciBMRUZUX0FMSUdOID0gMCwgQ0VOVEVSX0FMSUdOID0gMSwgUklHSFRfQUxJR04gPSAyO1xudmFyIEFMSUdOX0FSUkFZID0gW1xuICAgICdsZWZ0JywgXG4gICAgJ2NlbnRlcicsIFxuICAgICdyaWdodCdcbl07XG4gICAgXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhUZXh0UmVuZGVyZXIucHJvdG90eXBlLCB7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIG5ldyBmb250IGRpZmZlcnMgZnJvbSB0aGUgbGFzdCwgdGhlIHRleHQgbGF5b3V0IGlzIGNsZWFyZWRcbiAgICAgKiBhbmQgcGxhY2VkIG9udG8gYSBzaW5nbGUgbGluZS4gVXNlcnMgbXVzdCBtYW51YWxseSByZS1sYXlvdXQgdGhlIHRleHQgXG4gICAgICogZm9yIHdvcmQgd3JhcHBpbmcuXG4gICAgICovXG4gICAgXCJmb250XCI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yLmZvbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB2YXIgb2xkRm9udCA9IHRoaXMuaXRlcmF0b3IuZm9udDtcbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IuZm9udCA9IHZhbDtcbiAgICAgICAgICAgIGlmIChvbGRGb250ICE9PSB0aGlzLml0ZXJhdG9yLmZvbnQpXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckxheW91dCgpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbmV3IGZvbnQgc2l6ZSBkaWZmZXJzIGZyb20gdGhlIGxhc3QsIHRoZSB0ZXh0IGxheW91dCBpcyBjbGVhcmVkXG4gICAgICogYW5kIHBsYWNlZCBvbnRvIGEgc2luZ2xlIGxpbmUuIFVzZXJzIG11c3QgbWFudWFsbHkgcmUtbGF5b3V0IHRoZSB0ZXh0IFxuICAgICAqIGZvciB3b3JkIHdyYXBwaW5nLlxuICAgICAqL1xuICAgIFwiZm9udFNpemVcIjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3IuZm9udFNpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB2YXIgb2xkU2l6ZSA9IHRoaXMuaXRlcmF0b3IuZm9udFNpemU7XG5cbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IuZm9udFNpemUgPSB2YWw7XG5cbiAgICAgICAgICAgIGlmIChvbGRTaXplICE9PSB0aGlzLml0ZXJhdG9yLmZvbnRTaXplKVxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJMYXlvdXQoKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvci5saW5lSGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRvci5saW5lSGVpZ2h0ID0gdmFsO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJsZXR0ZXJTcGFjaW5nXCI6IHtcbiAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvci5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRvci5sZXR0ZXJTcGFjaW5nID0gdmFsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbmV3IHRleHQgaXMgZGlmZmVyZW50IGZyb20gdGhlIGxhc3QsIHRoZSBsYXlvdXQgKGkuZS4gd29yZC13cmFwcGluZylcbiAgICAgKiBpcyBjbGVhcmVkIGFuZCB0aGUgcmVzdWx0IGlzIGEgc2luZ2xlIGxpbmUgb2YgdGV4dCAoc2ltaWxhciB0byBIVE1MNSBjYW52YXMgdGV4dFxuICAgICAqIHJlbmRlcmluZykuXG4gICAgICogXG4gICAgICogVGhlIHRleHQgdGhlbiBuZWVkcyB0byBiZSByZS13b3Jkd3JhcHBlZCB3aXRoIGEgY2FsbCB0byBgbGF5b3V0KClgLlxuICAgICAqL1xuICAgIFwidGV4dFwiOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0fHxcIlwiO1xuXG4gICAgICAgICAgICB2YXIgb2xkID0gdGhpcy5fdGV4dDtcbiAgICAgICAgICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgICAgICAgICAgdGhpcy53b3Jkd3JhcC50ZXh0ID0gdGhpcy50ZXh0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fdGV4dCAhPT0gb2xkKSBcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyTGF5b3V0KCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiBDbGVhcnMgdGhlIHRleHQgbGF5b3V0IGFuZCB3b3JkLXdyYXBwaW5nLCBwbGFjaW5nIGFsbCBvZiBpdCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmNsZWFyTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy53b3Jkd3JhcC50ZXh0ID0gdGhpcy50ZXh0O1xuICAgIHRoaXMud29yZHdyYXAuZW1wdHkoKTtcblxuICAgIGlmICh0aGlzLml0ZXJhdG9yLmZvbnQpIC8vZm9udCBtaWdodCBub3QgaGF2ZSBiZWVuIHBhc3NlZCBhdCBjb25zdHJ1Y3RvclxuICAgICAgICB0aGlzLndvcmR3cmFwLmNsZWFyTGF5b3V0KHRoaXMuaXRlcmF0b3IpO1xufTtcblxuLyoqXG4gKiBDYWxscyB0aGUgd29yZCB3cmFwcGVyIHRvIGxheW91dCB0aGUgY3VycmVudCB0ZXh0IHN0cmluZyxcbiAqIGJhc2VkIG9uIHRoZSB3cmFwIHdpZHRoIGFuZCBhbnkgY3VycmVudCB3b3Jkd3JhcHBpbmcgb3B0aW9ucy5cbiAqXG4gKiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSB0ZXh0IGlzIGNoYW5nZWQuIFxuICogXG4gKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbih3cmFwV2lkdGgpIHtcbiAgICB0aGlzLndvcmR3cmFwLnRleHQgPSB0aGlzLnRleHQ7XG4gICAgdGhpcy53b3Jkd3JhcC5lbXB0eSgpO1xuICAgIHRoaXMud29yZHdyYXAubGF5b3V0KHRoaXMuaXRlcmF0b3IsIHdyYXBXaWR0aCk7XG59O1xuXG4vKipcbiAqIFwiUmVuZGVyc1wiIHRoaXMgZ2x5cGggYXQgdGhlIGdpdmVuIGxvY2F0aW9uLiBUaGlzIG1heSBpbnZvbHZlIGZpbGxpbmdcbiAqIGEgVkJPIHdpdGggdmVydGV4IGRhdGEsIG9yIGl0IG1heSBiZSBhIGRpcmVjdCBjYWxsIHRvIGRyYXcgYSBiaXRtYXAgZ2x5cGhcbiAqIG9yIHNoYXBlIG91dGxpbmUuXG4gKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJHbHlwaCA9IGZ1bmN0aW9uKCkge1xuXG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlclVuZGVybGluZSA9IGZ1bmN0aW9uKCkge1xuXG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJvdW5kcyBvZiB0aGUgY3VycmVudCB0ZXh0IGxheW91dC4gXG4gKlxuICogVGhlIGhlaWdodCBkb2VzIG5vdCBleHRlbmQgcGFzdCB0aGUgYmFzZWxpbmUgb2YgdGhlXG4gKiBsYXN0IGxpbmU7IHVubGVzcyBgaW5jbHVkZVVuZGVybGluZWAgaXMgdHJ1ZSwgaW4gd2hpY2hcbiAqIGNhc2UgdGhlIHVuZGVybGluZSdzIHBvc2l0aW9uIGFuZCBoZWlnaHQgaXMgaW5jbHVkZWRcbiAqIGluIHRoZSBjYWxjdWxhdGlvbi4gXG4gKlxuICogVGhlIGJvdW5kaW5nIHkgcG9zaXRpb24gaXMgb2Zmc2V0IHNvIHRoYXQgdGhlIGJveCBoYXMgYW4gdXBwZXItbGVmdFxuICogb3JpZ2luLCBmb3IgcGFyaXR5IHdpdGggSFRNTDUgY2FudmFzIHJlbmRlcmluZy5cbiAqIFxuICogQHBhcmFtIHtCb29sZWFufSBpbmNsdWRlVW5kZXJsaW5lIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgdW5kZXJsaW5lIGluIHRoZSBjYWxjdWxhdGlvbiwgZGVmYXVsdCBmYWxzZVxuICogQHBhcmFtIHtPYmplY3R9IG91dCBhbiBvcHRpb25hbCB7d2lkdGgsIGhlaWdodH0gb2JqZWN0IGZvciByZS11c2VcbiAqIEByZXR1cm4ge09iamVjdH0gYSBzaXplIHdpdGggeyB3aWR0aCwgaGVpZ2h0IH0gcHJvcGVydGllc1xuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uIChpbmNsdWRlVW5kZXJsaW5lLCBvdXQpIHtcbiAgICBpZiAoIW91dClcbiAgICAgICAgb3V0ID0geyB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG5cbiAgICB2YXIgd29yZHdyYXBwZXIgPSB0aGlzLndvcmR3cmFwO1xuICAgIHZhciBpdHIgPSB0aGlzLml0ZXJhdG9yO1xuXG4gICAgLy90aWdodGVuIHRoZSBib3VuZGluZyBib3ggYXJvdW5kIHRoZSBmaXJzdCBsaW5lLi5cbiAgICB2YXIgZmlyc3RMaW5lSGVpZ2h0ID0gMDtcbiAgICBpZiAod29yZHdyYXBwZXIubGluZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgZmlyc3RMaW5lID0gd29yZHdyYXBwZXIubGluZXNbMF07XG4gICAgICAgIGl0ci5nZXRCb3VuZHModGhpcy50ZXh0LCBmaXJzdExpbmUuc3RhcnQsIGZpcnN0TGluZS5lbmQsIHVuZGVmaW5lZCwgdG1wQm91bmRzKTtcbiAgICAgICAgZmlyc3RMaW5lSGVpZ2h0ID0gdG1wQm91bmRzLmhlaWdodDtcbiAgICB9XG5cbiAgICBvdXQud2lkdGggPSB3b3Jkd3JhcHBlci5nZXRNYXhMaW5lV2lkdGgoKTsgICBcbiAgICBvdXQuaGVpZ2h0ID0gTWF0aC5tYXgoMCwgd29yZHdyYXBwZXIubGluZXMubGVuZ3RoLTEpICogaXRyLmdldExpbmVHYXAoKSArIGZpcnN0TGluZUhlaWdodDtcblxuICAgIG91dC54ID0gMDtcbiAgICBvdXQueSA9IC1vdXQuaGVpZ2h0O1xuXG4gICAgaWYgKGluY2x1ZGVVbmRlcmxpbmUpIHtcbiAgICAgICAgdmFyIHVuZGVybGluZUhlaWdodCA9IHRoaXMuY29tcHV0ZVVuZGVybGluZUhlaWdodCgpO1xuICAgICAgICB2YXIgdW5kZXJsaW5lUG9zaXRpb24gPSB0aGlzLmNvbXB1dGVVbmRlcmxpbmVQb3NpdGlvbigpO1xuICAgICAgICB2YXIgdW5kZXJsaW5lT2ZmID0gdW5kZXJsaW5lUG9zaXRpb24rdW5kZXJsaW5lSGVpZ2h0LzI7XG4gICAgICAgIG91dC5oZWlnaHQgKz0gdW5kZXJsaW5lT2ZmO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBzY2FsZWQgdW5kZXJsaW5lIGhlaWdodCBhcyBwaXhlbHMsIGJhc2VkIG9uIFxuICogdGhlIGV4cGxpY2l0IGB1bmRlcmxpbmVIZWlnaHRgIChpbiBwaXhlbHMpLiBJZiBgdW5kZXJsaW5lSGVpZ2h0YCBpc1xuICogdW5kZWZpbmVkIG9yIG51bGwsIGl0IHdpbGwgdHJ5IHRvIHVzZSB0aGUgZm9udCdzIG5vbi16ZXJvIHVuZGVybGluZSBoZWlnaHQsIFxuICogb3RoZXJ3aXNlIGRlZmF1bHQgdG8gMS84IG9mIHRoZSBmb250J3MgRU0gc3F1YXJlLlxuICogXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBwaXhlbCBoZWlnaHQgb2YgdGhlIHVuZGVybGluZSBcbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5jb21wdXRlVW5kZXJsaW5lSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmb250ID0gdGhpcy5mb250O1xuICAgIHZhciBzY2FsZSA9IHRoaXMuaXRlcmF0b3IuZm9udFNjYWxlO1xuICAgIGlmICh0aGlzLnVuZGVybGluZVRoaWNrbmVzcz09PTB8fHRoaXMudW5kZXJsaW5lVGhpY2tuZXNzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuZGVybGluZVRoaWNrbmVzczsgXG4gICAgfSBlbHNlIGlmIChmb250LnVuZGVybGluZV90aGlja25lc3MpIHtcbiAgICAgICAgcmV0dXJuIGZvbnQudW5kZXJsaW5lX3RoaWNrbmVzcyAqIHNjYWxlOyBcbiAgICB9IGVsc2UgaWYgKGZvbnQuYml0bWFwKVxuICAgICAgICByZXR1cm4gZm9udC5zaXplLzg7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gKGZvbnQudW5pdHNfcGVyX0VNLzgpKnNjYWxlO1xufTtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgc2NhbGVkIHVuZGVybGluZSBoZWlnaHQgYXMgcGl4ZWxzLCBiYXNlZCBvbiBcbiAqIHRoZSBleHBsaWNpdCBgdW5kZXJsaW5lUG9zaXRpb25gIChpbiBwaXhlbHMpLiBJZiBgdW5kZXJsaW5lUG9zaXRpb25gIGlzXG4gKiB1bmRlZmluZWQgb3IgbnVsbCwgaXQgd2lsbCB0cnkgdG8gdXNlIHRoZSBmb250J3Mgbm9uLXplcm8gdW5kZXJsaW5lIHBvc2l0aW9uLCBcbiAqIG90aGVyd2lzZSBkZWZhdWx0IHRvIDEvNCBvZiB0aGUgZm9udCdzIEVNIHNxdWFyZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBZIG9mZnNldCBmcm9tIHRoZSB0ZXh0IGJhc2VsaW5lIHRvIHRoZSBjZW50ZXIgb2YgdGhlIHVuZGVybGluZSBcbiAqIGJhciwgaW4gcGl4ZWxzLiBJdCBpcyBnZW5lcmFsbHkgYSBwb3NpdGl2ZSB2YWx1ZS5cbiAqIFxuICogQHJldHVybiB7TnVtYmVyfSB0aGUgcGl4ZWwgcG9zaXRpb24gb2YgdGhlIHVuZGVybGluZSBcbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5jb21wdXRlVW5kZXJsaW5lUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZvbnQgPSB0aGlzLmZvbnQ7XG4gICAgdmFyIHNjYWxlID0gdGhpcy5pdGVyYXRvci5mb250U2NhbGU7XG4gICAgICAgIFxuICAgIGlmICh0aGlzLnVuZGVybGluZVBvc2l0aW9uPT09MHx8dGhpcy51bmRlcmxpbmVQb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy51bmRlcmxpbmVQb3NpdGlvbjsgXG4gICAgfSBlbHNlIGlmIChmb250LnVuZGVybGluZV9wb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gLWZvbnQudW5kZXJsaW5lX3Bvc2l0aW9uICogc2NhbGU7IFxuICAgIH0gZWxzZSBpZiAoZm9udC5iaXRtYXApIHtcbiAgICAgICAgcmV0dXJuIGZvbnQuc2l6ZS80O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoZm9udC51bml0c19wZXJfRU0vNCkqc2NhbGU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkZXNjZW50IG9mIHRoZSBjdXJyZW50IGZvbnQgKGFzc3VtZXMgaXRzIHNpemUgXG4gKiBpcyBhbHJlYWR5IHNldCkuIFRoaXMgaXMgYW4gYWJzb2x1dGUgKHBvc2l0aXZlKSB2YWx1ZS5cbiAqIFxuICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZ2V0RGVzY2VuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLml0ZXJhdG9yLmZvbnRTY2FsZSAqIHRoaXMuaXRlcmF0b3IuZm9udC5kZXNjZW5kZXIpO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkZXNjZW50IG9mIHRoZSBjdXJyZW50IGZvbnQgKGFzc3VtZXMgaXRzIHNpemUgXG4gKiBpcyBhbHJlYWR5IHNldCkuIFRoaXMgaXMgYW4gYWJzb2x1dGUgKHBvc2l0aXZlKSB2YWx1ZS5cbiAqIFxuICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZ2V0QXNjZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuaXRlcmF0b3IuZm9udFNjYWxlICogdGhpcy5pdGVyYXRvci5mb250LmFzY2VuZGVyKTtcbn07XG5cbi8vU2lnbmFscyBmb3Igc3ViY2xhc3NlcyB0byBvcHRpb25hbGx5IGltcGxtZWVudFxuLy9UaGlzIG1heSBiZSB1c2VmdWwgdG8gc3RvcC9zdGFydCBwYXRocyB3aXRoIGRpZmZlcmVudCBmaWxsc1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5vbkJlZ2luID0gZnVuY3Rpb24oKSB7IH1cblRleHRSZW5kZXJlci5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbigpIHsgfVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5vbkJlZ2luTGluZSA9IGZ1bmN0aW9uKGxpbmVJbmRleCkgeyB9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLm9uRW5kTGluZSA9IGZ1bmN0aW9uKGxpbmVJbmRleCkgeyB9XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY3VycmVudCB0ZXh0IGxheW91dCwgd2hlcmUgbG93ZXItbGVmdCBpcyBcbiAqIHRoZSBvcmlnaW4uIE11bHRpcGxlIGxpbmVzIHdpbGwgYmUgcG9zaXRpb25lZCBhYm92ZSB0aGVcbiAqIG9yaWdpbi5cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgIHggPSB4fHwwO1xuICAgIHkgPSB5fHwwO1xuXG4gICAgdmFyIHRleHQgPSB0aGlzLnRleHQ7XG4gICAgdmFyIHdvcmR3cmFwcGVyID0gdGhpcy53b3Jkd3JhcDtcblxuICAgIC8vaWYgd2UgaGF2ZSBub3RoaW5nIHRvIGRyYXdcbiAgICBpZiAoIXRleHQgfHwgd29yZHdyYXBwZXIubGluZXMubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm47XG5cbiAgICAvL2RlZmF1bHQgc3RhcnQvZW5kIHBhcmFtc1xuICAgIHN0YXJ0ID0gc3RhcnR8fDA7XG4gICAgZW5kID0gdHlwZW9mIGVuZCA9PT0gXCJudW1iZXJcIiA/IGVuZCA6IHRleHQubGVuZ3RoO1xuXG4gICAgdmFyIGl0ciA9IHRoaXMuaXRlcmF0b3I7XG4gICAgdmFyIHNjYWxlID0gaXRyLmZvbnRTY2FsZTtcbiAgICB2YXIgZm9udCA9IGl0ci5mb250O1xuICAgIHZhciB1bmRlcmxpbmUgPSB0aGlzLnVuZGVybGluZTtcblxuICAgIC8vdXNlZCBmb3IgYWxpZ25tZW50Li4uXG4gICAgdmFyIG1heExpbmVXaWR0aCA9IHdvcmR3cmFwcGVyLmdldE1heExpbmVXaWR0aCgpO1xuICAgIFxuICAgIHkgLT0gTWF0aC5tYXgoMCwgd29yZHdyYXBwZXIubGluZXMubGVuZ3RoLTEpICogaXRyLmdldExpbmVHYXAoKTtcblxuXG4gICAgLy91c2UgbnVtYmVycyB0byBhdm9pZCBzdHIgY29tcGFyZSBmb3IgZWFjaCBnbHlwaFxuICAgIHZhciBhbGlnblR5cGUgPSBBTElHTl9BUlJBWS5pbmRleE9mKHRoaXMuYWxpZ258fFwiXCIpO1xuICAgIGlmIChhbGlnblR5cGU9PT0tMSlcbiAgICAgICAgYWxpZ25UeXBlID0gTEVGVF9BTElHTjtcblxuICAgIHZhciB1bmRlcmxpbmVYID0gMDtcbiAgICB2YXIgdW5kZXJsaW5lU3RhcnRYID0gMDtcbiAgICB2YXIgdW5kZXJsaW5lWSA9IDA7XG4gICAgdmFyIHVuZGVybGluZVdpZHRoID0gMDtcblxuICAgIHZhciB1bmRlcmxpbmVTdGFydGVkID0gZmFsc2U7XG5cbiAgICAvL1RyeSB0byB1c2UgdXNlci1zcGVjaWZpZWQgdW5kZXJsaW5lIHNldHRpbmdzLCBvdGhlcndpc2UgdXNlIHRoZSBmb250IGlmIHBvc3NpYmxlLFxuICAgIC8vb3RoZXJ3aXNlIGp1c3QgdXNlIGEgcm91Z2ggZGVmYXVsdCBiYXNlZCBvbiBFTSBzcXVhcmUuICAgIFxuICAgIHZhciB1bmRlcmxpbmVQb3MgPSB0aGlzLmNvbXB1dGVVbmRlcmxpbmVQb3NpdGlvbigpO1xuICAgIHZhciB1bmRlcmxpbmVIZWlnaHQgPSB0aGlzLmNvbXB1dGVVbmRlcmxpbmVIZWlnaHQoKTtcblxuICAgIHRoaXMub25CZWdpbigpO1xuICAgIFxuICAgIC8vc2V0IHRoZSBvcmlnaW4gYW5kIHBlbiBwb3NpdGlvblxuICAgIGl0ci5iZWdpbih4LCB5KTtcbiAgICBmb3IgKHZhciBrPTA7IGs8d29yZHdyYXBwZXIubGluZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGxpbmUgPSB3b3Jkd3JhcHBlci5saW5lc1trXTtcbiAgICAgICAgdW5kZXJsaW5lU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBsYXN0QWR2YW5jZSA9IDA7XG5cbiAgICAgICAgdmFyIGxpbmVYID0gaXRyLnBlbi54O1xuICAgICAgICB2YXIgbGluZVkgPSBpdHIucGVuLnk7XG5cbiAgICAgICAgdGhpcy5vbkJlZ2luTGluZShrKTtcblxuICAgICAgICAvL1RPRE86IHVzZSBtdWx0aXBsZSBOb2RlcyBpbnNpZGUgYSBzaW5nbGUgbGluZVxuICAgICAgICAvL2Egbm9kZSB3aWxsIGhhdmUgYXR0cmlidXRlcyBsaWtlIGZvbnQsIHNpemUsIGNvbG9yLCBcbiAgICAgICAgLy9sZXR0ZXItc3BhY2luZywgdW5kZXJsaW5lLCBldGMuXG4gICAgICAgIC8vVGhpcyB3aWxsIGFmZmVjdCB0aGUgbGluZSBoZWlnaHQsIGFzIGl0IHdpbGwgaGF2ZSB0byBiZSB0aGUgbWF4IG9mIGFsbCBub2Rlcy5cblxuICAgICAgICBmb3IgKHZhciBpPWxpbmUuc3RhcnQ7IGk8bGluZS5lbmQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNociA9IHRleHQuY2hhckF0KGkpO1xuXG4gICAgICAgICAgICAvL1N0ZXAgdGhlIGl0ZXJhdG9yLCBtb3ZpbmcgZm9yd2FyZCBiYXNlZCBvbiBrZXJuaW5nIGZyb20gbGFzdCBjaGFyXG4gICAgICAgICAgICB2YXIgZ2x5cGggPSBpdHIuc3RlcCh0ZXh0LCBpKTtcblxuICAgICAgICAgICAgaWYgKCFnbHlwaClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy93aXRoaW4gZGVzaXJlZCByYW5nZVxuICAgICAgICAgICAgaWYgKGkgPj0gc3RhcnQgJiYgaSA8IGVuZCkge1xuICAgICAgICAgICAgICAgIHZhciB0eCA9IGl0ci5wZW4ueDtcbiAgICAgICAgICAgICAgICB2YXIgdHkgPSBpdHIucGVuLnk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxpZ25UeXBlID09PSBDRU5URVJfQUxJR04pIHtcbiAgICAgICAgICAgICAgICAgICAgdHggKz0gKG1heExpbmVXaWR0aC1saW5lLndpZHRoKS8yO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxpZ25UeXBlID09PSBSSUdIVF9BTElHTikge1xuICAgICAgICAgICAgICAgICAgICB0eCArPSAobWF4TGluZVdpZHRoLWxpbmUud2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdW5kZXJsaW5lU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVYID0gdHg7XG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVN0YXJ0WCA9IHR4O1xuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVZID0gdHkgKyB1bmRlcmxpbmVQb3M7XG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lV2lkdGggPSB0eCAtIHVuZGVybGluZVN0YXJ0WDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdseXBoKGksIGdseXBoLCBzY2FsZSwgdHgsIHR5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9BZHZhbmNlIHRoZSBpdGVyYXRvciB0byB0aGUgbmV4dCBnbHlwaCBpbiB0aGUgc3RyaW5nXG4gICAgICAgICAgICB2YXIgbmV3QWR2YW5jZSA9IGl0ci5hZHZhbmNlKGdseXBoKTtcblxuICAgICAgICAgICAgaWYgKGkgPj0gc3RhcnQgJiYgaSA8IGVuZClcbiAgICAgICAgICAgICAgICBsYXN0QWR2YW5jZSA9IG5ld0FkdmFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uRW5kTGluZShrKTtcblxuICAgICAgICBpZiAodW5kZXJsaW5lKSB7XG4gICAgICAgICAgICB1bmRlcmxpbmVXaWR0aCArPSBsYXN0QWR2YW5jZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVW5kZXJsaW5lKHVuZGVybGluZVgsIHVuZGVybGluZVktdW5kZXJsaW5lSGVpZ2h0LzIsIHVuZGVybGluZVdpZHRoLCB1bmRlcmxpbmVIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL1N0ZXBzIGRvd24gYSBsaW5lLi4uXG4gICAgICAgIGlmIChrIDwgd29yZHdyYXBwZXIubGluZXMubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgIGl0ci5hZHZhbmNlTGluZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9maW5pc2ggdGhlIGl0ZXJhdG9yLi4uXG4gICAgaXRyLmVuZCgpO1xuICAgIHRoaXMub25FbmQoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dFJlbmRlcmVyOyIsInZhciB1dGlsID0gcmVxdWlyZSgnZm9udHBhdGgtdXRpbCcpO1xuXG52YXIgREVGQVVMVF9UQUJfV0lEVEggPSA0O1xuXG5mdW5jdGlvbiBHbHlwaEl0ZXJhdG9yKGZvbnQsIGZvbnRTaXplKSB7XG4gICAgdGhpcy5fZm9udFNpemUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZm9udFNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2ZvbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb250U2NhbGUgPSAxLjA7XG4gICAgdGhpcy5rZXJuaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxldHRlclNwYWNpbmcgPSAwO1xuICAgIHRoaXMubGluZUhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICBcbiAgICB0aGlzLmZvbnRTaXplID0gdHlwZW9mIGZvbnRTaXplID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgPyBmb250U2l6ZVxuICAgICAgICAgICAgOiAoZm9udCA/IGZvbnQuc2l6ZSA6IHVuZGVmaW5lZCk7XG4gICAgdGhpcy5mb250ID0gZm9udDtcblxuICAgIC8vTnVtYmVyIG9mIHNwYWNlcyBmb3IgYSB0YWIgY2hhcmFjdGVyXG4gICAgdGhpcy50YWJXaWR0aCA9IERFRkFVTFRfVEFCX1dJRFRIO1xuICAgIHRoaXMuX3RhYkdseXBoID0gbnVsbDtcblxuICAgIHRoaXMub3JpZ2luID0geyB4OiAwLCB5OiAwIH07XG4gICAgdGhpcy5wZW4gPSB7IHg6IDAsIHk6IDAgfTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEdseXBoSXRlcmF0b3IucHJvdG90eXBlLCBcImZvbnRcIiwge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb250O1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKGZvbnQpIHtcbiAgICAgICAgdGhpcy5fZm9udCA9IGZvbnQ7XG5cbiAgICAgICAgLy9EZXRlcm1pbmUgdGhlIG5ldyBzY2FsaW5nIGZhY3Rvci4uLlxuICAgICAgICBpZiAoZm9udCkge1xuICAgICAgICAgICAgdGhpcy5mb250U2NhbGUgPSB1dGlsLmdldFB4U2NhbGUoZm9udCwgdGhpcy5mb250U2l6ZSk7XG5cbiAgICAgICAgICAgIC8vVXBkYXRlcyB0aGUgdGFiIGdseXBoXG4gICAgICAgICAgICB0aGlzLnRhYldpZHRoID0gdGhpcy5fdGFiV2lkdGg7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG5cbi8vVGhlcmUgbWlnaHQgYmUgYSBiZXR0ZXIgd2F5IG9mIGhhbmRsaW5nIHRhYiB3aWR0aCB1c2luZyBGcmVlVHlwZSA/IFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEdseXBoSXRlcmF0b3IucHJvdG90eXBlLCBcInRhYldpZHRoXCIsIHtcblxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YWJXaWR0aDtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdGhpcy5fdGFiV2lkdGggPSB2YWw9PT0wIHx8IHZhbCA/IHZhbCA6IERFRkFVTFRfVEFCX1dJRFRIO1xuICAgICAgICB0aGlzLl90YWJHbHlwaCA9IHt9O1xuXG4gICAgICAgIHZhciBzcGFjZUdseXBoID0gdGhpcy5mb250ID8gdGhpcy5mb250LmdseXBoc1tcIiBcIl0gOiBudWxsO1xuICAgICAgICBpZiAoc3BhY2VHbHlwaCkge1xuICAgICAgICAgICAgdGhpcy5fdGFiR2x5cGggPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gc3BhY2VHbHlwaCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhYkdseXBoW2tdID0gc3BhY2VHbHlwaFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl90YWJHbHlwaC54b2ZmKVxuICAgICAgICAgICAgICAgIHRoaXMuX3RhYkdseXBoLnhvZmYgKj0gdGhpcy5fdGFiV2lkdGg7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShHbHlwaEl0ZXJhdG9yLnByb3RvdHlwZSwgXCJmb250U2l6ZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9mb250U2l6ZSAhPT0gJ251bWJlcicpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb250LmJpdG1hcCBcbiAgICAgICAgICAgICAgICA/IHRoaXMuZm9udC5zaXplIFxuICAgICAgICAgICAgICAgIDogdXRpbC5wb2ludFRvUGl4ZWwodGhpcy5mb250LnNpemUpXG4gICAgICAgIHJldHVybiB0aGlzLl9mb250U2l6ZTtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdGhpcy5fZm9udFNpemUgPSB2YWw7XG5cbiAgICAgICAgLy9JZiB0aGUgZm9udCBpcyBhbHJlYWR5IHNldCwgZGV0ZXJtaW5lIHRoZSBuZXcgc2NhbGluZyBmYWN0b3JcbiAgICAgICAgaWYgKHRoaXMuX2ZvbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9udFNjYWxlID0gdXRpbC5nZXRQeFNjYWxlKHRoaXMuX2ZvbnQsIHRoaXMuX2ZvbnRTaXplKTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuZ2V0S2VybmluZyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIGZvbnQgPSB0aGlzLmZvbnQ7XG5cbiAgICBpZiAoIWZvbnQgfHwgIWZvbnQua2VybmluZylcbiAgICAgICAgcmV0dXJuIDA7XG5cbiAgICB2YXIgdGFibGUgPSB0aGlzLmtlcm5pbmdUYWJsZTtcblxuICAgIGZvciAodmFyIGk9MDsgaTxmb250Lmtlcm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGsgPSBmb250Lmtlcm5pbmdbaV07XG4gICAgICAgIGlmIChrWzBdID09PSBsZWZ0ICYmIGtbMV0gPT09IHJpZ2h0KSBcbiAgICAgICAgICAgIHJldHVybiBrWzJdO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmJlZ2luID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMub3JpZ2luLnggPSB4fHwwO1xuICAgIHRoaXMub3JpZ2luLnkgPSB5fHwwO1xuXG4gICAgdGhpcy5wZW4ueCA9IHRoaXMub3JpZ2luLng7XG4gICAgdGhpcy5wZW4ueSA9IHRoaXMub3JpZ2luLnk7XG59O1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbigpIHtcbiAgICAvLy4uIG1haW5seSBmb3IgY29uc2lzdGVuY3kgd2l0aCBiZWdpbigpXG4gICAgLy9NaWdodCBiZSB1c2VmdWwgbGF0ZXIgb25cbn07XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmdldExpbmVHYXAgPSBmdW5jdGlvbigpIHtcbiAgICAvL0xpbmUgaGVpZ2h0IGhhbmRsaW5nIGlzIGEgbWVzcyBpbiBicm93c2Vycy5cbiAgICAvL01heWJlIHRoZSBiZXN0IHNvbHV0aW9uIGlzIHRvIGVuY291cmFnZSB1c2VycyB0byBcbiAgICAvL3NwZWNpZnkgcGl4ZWwgbGluZSBoZWlnaHRzIGlmIHRoZXkgd2FudCB0byBtYXRjaCBicm93c2VyIHN0YW5kYXJkcyxcbiAgICAvL290aGVyd2lzZSBpdCdzIHVucmVhc29uYWJsZSB0byBleHBlY3QgdGhlIGxpbmUgZ2FwcyB0byBsaW5lIHVwIGV4YWN0bHlcbiAgICAvL2Fjcm9zcyBhbGwgYnJvd3NlcnMuIEV4YW1wbGUgb2YgdGhlIGRpc2FzdGVyOlxuICAgIC8vaHR0cDovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMDhKYW4vMDQxMy5odG1sXG5cbiAgICAvL0ZvciByZWZlcmVuY2UsIHNvbWUgYmFzZWxpbmUtdG8tYmFzZWxpbmUgY2FsY3VsYXRpb25zOlxuICAgIC8vaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3R5cG9ncmFwaHkvb3RzcGVjL3JlY29tLmh0bVxuICAgIC8vZnJlZXR5cGUub3JnL2ZyZWV0eXBlMi9kb2NzL3JlZmVyZW5jZS9mdDItYmFzZV9pbnRlcmZhY2UuaHRtbFxuICAgIC8vaHR0cDovL3d3dy5mcmVldHlwZS5vcmcvZnJlZXR5cGUyL2RvY3MvZ2x5cGhzL2dseXBocy0zLmh0bWxcblxuICAgIC8vVW5mb3J0dW5hdGVseSBub25lIG9mIHRoZXNlIGFyZSBwcm9kdWNpbmcgbGluZS1oZWlnaHRzIHRoYXQgYXZvaWQgb3ZlcmxhcHBpbmdcbiAgICAvL29yIHJlc2VtYmxlIGJyb3dzZXIgcmVuZGVyaW5nIGluIGFueSB3YXkuIFxuXG4gICAgLy8gSWYgQ1NTIHVzZXMgMWVtIG9yIDEsIHRoZSBicm93c2VyIG9mZnNldHMgdGhlIGxpbmUgYnkgdGhlIFxuICAgIC8vIGZvbnQncyBwaXhlbCBzaXplLiBJZiBhbiBleGFjdCBwaXhlbCBsaW5lLWhlaWdodCBpcyBzcGVjaWZpZWQsXG4gICAgLy8gdGhlIGJyb3dzZXIgd2lsbCB1c2UgdGhhdCArIGEgY29tcHV0ZWQgXCJsaW5lZ2FwLlwiIFxuICAgIC8vIElmICdhdXRvJyBpcyBzcGVjaWZpZWQgZm9yIGxpbmUtaGVpZ2h0LCB0aGUgY2FsY3VsYXRpb25zIHNlZW1cbiAgICAvLyBtdWNoIG1vcmUgY29tcGxleCBhbmQgYnJvd3Nlci9wbGF0Zm9ybSBkZXBlbmRlbnQgKG5vdCBpbmNsdWRlZCBoZXJlKS5cbiAgICBcbiAgICB2YXIgZm9udCA9IHRoaXMuZm9udCxcbiAgICAgICAgc2NhbGUgPSB0aGlzLmZvbnRTY2FsZTtcbiAgICB2YXIgZ2FwID0gKGZvbnQuaGVpZ2h0IC0gZm9udC5hc2NlbmRlciArIE1hdGguYWJzKGZvbnQuZGVzY2VuZGVyKSkgKiBzY2FsZTsgICAgXG4gICAgdmFyIGxpbmVIZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQ7XG4gICAgXG4gICAgbGluZUhlaWdodCA9IChsaW5lSGVpZ2h0PT09MHx8bGluZUhlaWdodCkgXG4gICAgICAgICAgICA/IChsaW5lSGVpZ2h0ICsgZ2FwKVxuICAgICAgICAgICAgOiB0aGlzLmZvbnRTaXplO1xuICAgIHJldHVybiBsaW5lSGVpZ2h0O1xufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMub3JpZ2luLnggKz0geHx8MDtcbiAgICB0aGlzLm9yaWdpbi55ICs9IHl8fDA7XG5cbiAgICB0aGlzLnBlbi54ICs9IHh8fDA7XG4gICAgdGhpcy5wZW4ueSArPSB5fHwwO1xufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKHRleHQsIGluZGV4KSB7XG4gICAgdmFyIHNjYWxlID0gdGhpcy5mb250U2NhbGUsXG4gICAgICAgIGZvbnQgPSB0aGlzLl9mb250O1xuXG4gICAgdmFyIGNociA9IHRleHQuY2hhckF0KGluZGV4KTsgXG5cbiAgICBpZiAoY2hyID09PSAnXFx0JyAmJiB0aGlzLl90YWJHbHlwaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFiR2x5cGg7XG4gICAgfVxuXG4gICAgLy9Ta2lwIG1pc3NpbmcgY2hhcmFjdGVycy4uLlxuICAgIGlmICghKGNociBpbiBmb250LmdseXBocykpXG4gICAgICAgIHJldHVybjtcbiAgICBcbiAgICB2YXIgZ2x5cGggPSBmb250LmdseXBoc1tjaHJdO1xuXG4gICAgLy9JZiB3ZSBoYXZlIGEgY2hhciB0byB0aGUgbGVmdCwgZGV0ZXJtaW5lIGl0cyBrZXJuaW5nXG4gICAgaWYgKGluZGV4ID4gMCAmJiB0aGlzLmtlcm5pbmcpIHtcbiAgICAgICAgdmFyIGtlcm4gPSB0aGlzLmdldEtlcm5pbmcodGV4dC5jaGFyQXQoaW5kZXgtMSksIGNocik7XG4gICAgICAgIHRoaXMucGVuLnggKz0gKGtlcm4qc2NhbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBnbHlwaDtcbn07XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmFkdmFuY2VMaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wZW4ueSArPSB0aGlzLmdldExpbmVHYXAoKTtcbiAgICB0aGlzLnBlbi54ID0gdGhpcy5vcmlnaW4ueDtcbn07XG5cbi8qKlxuICogQ2FsbGVkIGFmdGVyIHN0ZXAuIFxuICovXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5hZHZhbmNlID0gZnVuY3Rpb24oZ2x5cGgpIHtcbiAgICB2YXIgYWR2YW5jZSA9IChnbHlwaC54b2ZmICogdGhpcy5mb250U2NhbGUpO1xuICAgIC8vIEFkdmFuY2UgdG8gbmV4dCBwZW4gcG9zaXRpb25cbiAgICB0aGlzLnBlbi54ICs9IGFkdmFuY2UgKyB0aGlzLmxldHRlclNwYWNpbmc7XG4gICAgcmV0dXJuIGFkdmFuY2U7XG59O1xuXG4vKipcbiAqIFRoaXMgaXMgYSB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgdGhlIGJvdW5kcyBvZiB0aGUgZ2l2ZW5cbiAqIHRleHQgKGZyb20gc3RhcnQgYW5kIGVuZCBwb3NpdGlvbnMpIGFzIGlmIHRoZXkgd2VyZSBsYWlkIG91dCBob3Jpem9udGFsbHksXG4gKiBsZWZ0IHRvIHJpZ2h0LlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgdGhpcyB3aWxsIG5vdCBhbHRlciB0aGUgY3VycmVudCBwZW4gYW5kIG9yaWdpbiBwb3NpdGlvbnMuXG4gKiBUaGlzIHdheSBpdCBjYW4gYmUgdXRpbGl6ZWQgaW5zaWRlIGEgZ2x5cGggaXRlcmF0aW9uIChpLmUuIGZvciByZW5kZXJpbmcpLlxuICpcbiAqIElmIGBhdmFpbGFibGVXaWR0aGAgaXMgc3BlY2lmaWVkLCB0aGlzIHdpbGwgYnJlYWsgYmVmb3JlIHJlYWNoaW5nIHRoZSBzcGVjaWZpZWRcbiAqIHBpeGVsIHdpZHRoLCB0byBlbnN1cmUgdGhhdCBhbGwgZ2x5cGhzIHdpbGwgZml0IGluc2lkZSB0aGUgYm91bmRzLiBcbiAqXG4gKiBUaGUgcmV0dXJuIG9iamVjdCBhbHNvIGluY2x1ZGVzIGEgYGdseXBoc2AgcHJvcGVydHksIHdoaWNoIGlzIHRoZSBudW1iZXIgb2YgZ2x5cGhzXG4gKiB0aGF0IGFyZSB2aXNpYmxlIHdpdGhpbiB0aGUgcmV0dXJuZWQgYm91bmRzLiBcbiAqXG4gKiBJZiBgb3V0YCBpcyBzcGVjaWZpZWQgKGFuIG9iamVjdCB3aXRoIHgsIHksIHdpZHRoLCBoZWlnaHQsIGFuZCBnbHlwaCBwcm9wZXJ0aWVzKSxcbiAqIGl0IHdpbGwgYmUgcmUtdXNlZC4gT3RoZXJ3aXNlIGEgbmV3IG9iamVjdCBpcyBjcmVhdGVkLlxuICogXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dCB0aGUgdGV4dCB0byBjaGVja1xuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IHRoZSBzdGFydCBwb3NpdGlvbiwgZGVmYXVsdHMgdG8gMFxuICogQHBhcmFtIHtOdW1iZXJ9IGVuZCB0aGUgZW5kIHBvc2l0aW9uLCBleGNsdXNpdmUsIGRlZmF1bHRzIHRvIHRleHQgbGVuZ3RoXG4gKiBAcGFyYW0ge051bWJlcn0gYXZhaWxhYmxlV2lkdGggdGhlIHdpZHRoIGJlZm9yZSBzdG9wcGluZyB0aGUgYm91bmQgY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBvdXQgYW4gb2JqZWN0IHRvIHJlLXVzZSBmb3IgdGhlIHJldHVybiB2YWx1ZVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgYm91bmRzIGFuZCBnbHlwaCBjb3VudCB7eCx5LHdpZHRoLGhlaWdodCxnbHlwaHN9XG4gKi9cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uKHRleHQsIHN0YXJ0LCBlbmQsIGF2YWlsYWJsZVdpZHRoLCBvdXQpIHtcbiAgICBpZiAoIW91dClcbiAgICAgICAgb3V0ID0geyB4OjAsIHk6MCwgd2lkdGg6IDAsIGhlaWdodDogMCwgZ2x5cGhzOiAwIH07XG5cbiAgICB2YXIgY2hlY2tXaWR0aCA9IGF2YWlsYWJsZVdpZHRoPT09MHx8YXZhaWxhYmxlV2lkdGg7XG5cbiAgICBzdGFydCA9IHN0YXJ0fHwwO1xuICAgIGVuZCA9IGVuZD09PTB8fGVuZCA/IGVuZCA6IHRleHQubGVuZ3RoO1xuXG4gICAgdmFyIG1heEhlaWdodCA9IDA7XG5cbiAgICBvdXQueCA9IDA7XG4gICAgb3V0LnkgPSAwO1xuICAgIG91dC5nbHlwaHMgPSAwO1xuXG4gICAgdmFyIG9sZFBlblggPSB0aGlzLnBlbi54LFxuICAgICAgICBvbGRQZW5ZID0gdGhpcy5wZW4ueSxcbiAgICAgICAgb2xkT3JpZ2luWCA9IHRoaXMub3JpZ2luLngsXG4gICAgICAgIG9sZE9yaWdpblkgPSB0aGlzLm9yaWdpbi55O1xuXG5cbiAgICB2YXIgZm9udCA9IHRoaXMuZm9udDtcbiAgICB0aGlzLmJlZ2luKCk7XG4gICAgZm9yICh2YXIgaT1zdGFydDsgaTxlbmQ7IGkrKykge1xuICAgICAgICB2YXIgY2hyID0gdGV4dC5jaGFyQXQoaSk7XG5cbiAgICAgICAgLy9zdGVwIHRoZSBpdGVyYXRvclxuICAgICAgICB2YXIgZ2x5cGggPSB0aGlzLnN0ZXAodGV4dCwgaSk7XG5cbiAgICAgICAgLy9pZiB0aGUgZ2x5cGggaXMgdmFsaWQsIHdlIGNhbiBhZHZhbmNlIHBhc3QgaXQgYW5kIGNhbGN1bGF0ZSBuZXcgaGVpZ2h0XG4gICAgICAgIGlmIChnbHlwaCkge1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IChnbHlwaC5oZWlnaHQpKnRoaXMuZm9udFNjYWxlO1xuXG4gICAgICAgICAgICBvdXQueSA9IE1hdGgubWF4KG91dC55LCB0aGlzLmZvbnRTY2FsZSooZ2x5cGguaGVpZ2h0LWdseXBoLmhieSkpO1xuXG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBNYXRoLm1heChtYXhIZWlnaHQsIGhlaWdodCk7XG4gICAgICAgICAgICB2YXIgbGFzdEFkdmFuY2UgPSB0aGlzLmFkdmFuY2UoZ2x5cGgpO1xuXG4gICAgICAgICAgICAvL2lmIHdlJ3JlIHBhc3QgdGhlIGF2YWlsYWJsZSB3aWR0aFxuICAgICAgICAgICAgdmFyIG5ld1dpZHRoID0gdGhpcy5wZW4ueCAtIHRoaXMub3JpZ2luLng7XG4gICAgICAgICAgICBpZiAoY2hlY2tXaWR0aCAmJiAobmV3V2lkdGggLSBhdmFpbGFibGVXaWR0aCA+IDAuMDAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuLnggLT0gbGFzdEFkdmFuY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG91dC5nbHlwaHMrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVuZCgpO1xuXG4gICAgb3V0LndpZHRoID0gdGhpcy5wZW4ueCAtIHRoaXMub3JpZ2luLng7XG4gICAgb3V0LmhlaWdodCA9IG1heEhlaWdodDtcblxuICAgIHRoaXMucGVuLnggPSBvbGRQZW5YO1xuICAgIHRoaXMucGVuLnkgPSBvbGRQZW5ZO1xuICAgIHRoaXMub3JpZ2luLnggPSBvbGRPcmlnaW5YO1xuICAgIHRoaXMub3JpZ2luLnkgPSBvbGRPcmlnaW5ZO1xuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2x5cGhJdGVyYXRvcjsiLCIvLyBtb2R1bGUuZXhwb3J0cy5wb2ludHNUb1BpeGVscyA9IGZ1bmN0aW9uKHBvaW50U2l6ZSwgcmVzb2x1dGlvbikge1xuLy8gXHRyZXNvbHV0aW9uID0gdHlwZW9mIHJlc29sdXRpb24gPT09IFwibnVtYmVyXCIgPyByZXNvbHV0aW9uIDogNzI7XG4vLyBcdHJldHVybiBwb2ludFNpemUgKiByZXNvbHV0aW9uIC8gNzI7XG4vLyB9O1xuXG4vLyBtb2R1bGUuZXhwb3J0cy5jb29yZFRvUGl4ZWwgPSBmdW5jdGlvbihjb29yZCwgcGl4ZWxTaXplLCBlbVNpemUpIHtcbi8vIFx0ZW1TaXplID0gdHlwZW9mIGVtU2l6ZSA9PT0gXCJudW1iZXJcIiA/IGVtU2l6ZSA6IDIwNDg7XG4vLyBcdHJldHVybiBjb29yZCAqIHBpeGVsU2l6ZSAvIGVtU2l6ZTtcbi8vIH07XG5cbi8qKlxuICogQ29udmVydHMgYSBwdCBzaXplIHRvIHB4IHNpemUsIG5hbWVseSB1c2VmdWwgZm9yIG1hdGNoaW5nXG4gKiBzaXplIHdpdGggQ1NTIHN0eWxlcy4gSWYgbm8gRFBJIGlzIHNwZWNpZmllZCwgOTYgaXMgYXNzdW1lZFxuICogKGFzIGl0IGxlYWRzIHRvIGNvcnJlY3QgcmVuZGVyaW5nIGluIGFsbCBicm93c2VycykuXG4gKiBcbiAqIEBwYXJhbSAge051bWJlcn0gZm9udFNpemUgdGhlIGRlc2lyZWQgZm9udCBzaXplIGluIHBvaW50c1xuICogQHBhcmFtICB7TnVtYmVyfSBkcGkgICAgICB0aGUgZXhwZWN0ZWQgRFBJLCBnZW5lcmFsbHkgOTYgZm9yIGJyb3dzZXJzXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgIHRoZSByb3VuZGVkIHBpeGVsIGZvbnQgc2l6ZVxuICovXG5tb2R1bGUuZXhwb3J0cy5wb2ludFRvUGl4ZWwgPSBmdW5jdGlvbihmb250U2l6ZSwgZHBpKSB7XG4gICAgZHBpID0gZHBpfHxkcGk9PT0wID8gZHBpIDogOTY7XG4gICAgZm9udFNpemUgPSBmb250U2l6ZSAqIGRwaSAvIDcyO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZvbnRTaXplKTtcbn07XG5cbi8qKlxuICogRm9yIHRoZSBnaXZlbiBmb250IGFuZCAocGl4ZWwpIGZvbnQgc2l6ZSwgdGhpcyBtZXRob2QgcmV0dXJucyB0aGVcbiAqIHNjYWxlIHRoYXQgd2lsbCBuZWVkIHRvIGJlIGFwcGxpZWQgdG8gRU0gdW5pdHMgKGkuZS4gZm9udCBwYXRocykgXG4gKiB0byBoYXZlIHRoZSBmb250IHJlbmRlciBhdCB0aGUgZXhwZWN0ZWQgc2l6ZSAoaS5lLiB0byBtYXRjaCB0aGUgYnJvd3NlcikuXG4gKlxuICogSWYgbm8gZm9udCBzaXplIGlzIHNwZWNpZmllZCwgd2Ugd2lsbCB1c2UgdGhlIGRlZmF1bHQgZm9udCBzaXplICh3aGljaCBpcyBpbiBwb2ludHMpXG4gKiBhbmQgY29udmVydCBpdCB0byBwaXhlbHMuIFxuICogXG4gKiBAcGFyYW0gIHtGb250fSBmb250ICAgICBhIGZvbnQgb2JqZWN0IGZyb20gdGhlIGZvbnRwYXRoIHRvb2xcbiAqIEBwYXJhbSAge051bWJlcn0gZm9udFNpemUgdGhlIGRlc2lyZWQgZm9udCBzaXplLCBkZWZhdWx0cyB0byB0aGUgZm9udCdzIGRlZmF1bHQgc2l6ZVxuICogQHJldHVybiB7TnVtYmVyfSByZXR1cm5zIHRoZSBzY2FsZSBmb3IgdGhpcyBmb250IHNpemUgICAgICAgICBcbiAqL1xubW9kdWxlLmV4cG9ydHMuZ2V0UHhTY2FsZSA9IGZ1bmN0aW9uKGZvbnQsIGZvbnRTaXplKSB7XG4gICAgaWYgKGZvbnQuYml0bWFwKVxuICAgICAgICByZXR1cm4gMS4wO1xuXG4gICAgLy9JZiBubyBmb250U2l6ZSBpcyBzcGVjaWZpZWQsIGl0IHdpbGwganVzdCBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGZvbnQncyBvd24gc2l6ZSB3aXRoIDk2IERQSS5cbiAgICBmb250U2l6ZSA9IHR5cGVvZiBmb250U2l6ZSA9PT0gXCJudW1iZXJcIiA/IGZvbnRTaXplIDogdGhpcy5wb2ludFRvUGl4ZWwoZm9udC5zaXplKTtcblxuICAgIC8vVGFrZXMgaW4gYSBmb250IHNpemUgaW4gUElYRUxTIGFuZCBnaXZlcyB1cyB0aGUgZXhwZWN0ZWQgc2NhbGluZyBmYWN0b3JcbiAgICB2YXIgc3ogPSBmb250LnVuaXRzX3Blcl9FTS82NDtcbiAgICBzeiA9IChzei9mb250LnNpemUgKiBmb250U2l6ZSk7XG5cbiAgICByZXR1cm4gKChmb250LnJlc29sdXRpb24gKiAxLzcyICogc3opIC8gZm9udC51bml0c19wZXJfRU0pO1xufTtcblxuLyoqXG4gKiBGb3IgdGhlIGdpdmVuIGZvbnQgYW5kIChwb2ludCkgZm9udCBzaXplLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZVxuICogc2NhbGUgdGhhdCB3aWxsIG5lZWQgdG8gYmUgYXBwbGllZCB0byBFTSB1bml0cyAoaS5lLiBmb250IHBhdGhzKSBcbiAqIHRvIGhhdmUgdGhlIGZvbnQgcmVuZGVyIGF0IHRoZSBleHBlY3RlZCBzaXplIChpLmUuIHRvIG1hdGNoIHRoZSBicm93c2VyKS5cbiAqIFxuICogSWYgbm8gZm9udCBzaXplIGlzIHNwZWNpZmllZCwgd2Ugd2lsbCB1c2UgdGhlIGRlZmF1bHQgZm9udCBzaXplLlxuICogXG4gKiBAcGFyYW0gIHtGb250fSBmb250ICAgICAgIGEgZm9udCBvYmplY3QgZnJvbSB0aGUgZm9udHBhdGggdG9vbFxuICogQHBhcmFtICB7TnVtYmVyfSBmb250U2l6ZSB0aGUgZGVzaXJlZCBmb250IHNpemUsIGRlZmF1bHRzIHRvIHRoZSBmb250J3MgZGVmYXVsdCBzaXplXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgIHRoZSBzY2FsZSBmb3IgdGhpcyBmb250IHNpemVcbiAqL1xubW9kdWxlLmV4cG9ydHMuZ2V0UHRTY2FsZSA9IGZ1bmN0aW9uKGZvbnQsIGZvbnRTaXplKSB7XG4gICAgZm9udFNpemUgPSB0eXBlb2YgZm9udFNpemUgPT09IFwibnVtYmVyXCIgPyBmb250U2l6ZSA6IGZvbnQuc2l6ZTtcbiAgICBmb250U2l6ZSA9IHRoaXMucG9pbnRUb1BpeGVsKGZvbnRTaXplKTtcbiAgICByZXR1cm4gdGhpcy5nZXRQeFNjYWxlKGZvbnQsIGZvbnRTaXplKTtcbn07XG4iLCJ2YXIgdG1wQm91bmRzID0geyB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwLCBnbHlwaHM6IDAgfTtcblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKGNocikge1xuXHRyZXR1cm4gY2hyPT09JyAnXG5cdFx0fHwgY2hyPT09J1xcbidcblx0XHR8fCBjaHI9PT0nXFxyJ1xuXHRcdHx8IGNocj09PSdcXHQnO1xufVxuXG5mdW5jdGlvbiBpZHhPZih0ZXh0LCBjaHIsIHN0YXJ0LCBlbmQpIHtcblx0dmFyIGlkeCA9IHRleHQuaW5kZXhPZihjaHIsIHN0YXJ0KTtcblx0aWYgKGlkeCA9PT0gLTEgfHwgaWR4ID4gZW5kKVxuXHRcdHJldHVybiBlbmQ7XG5cdHJldHVybiBpZHg7XG59XG5cbmZ1bmN0aW9uIFdvcmRXcmFwKHRleHQpIHtcblx0LyoqXG5cdCAqIFRoZSB0ZXh0IGJlaW5nIG9wZXJhdGVkIG9uLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuXHQgKi9cblx0dGhpcy50ZXh0ID0gdGV4dHx8XCJcIjtcblxuXHQvKipcblx0ICogQW4gYXJyYXkgb2YgbGluZXMgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBvZiB0aGlzIHdvcmQgd3JhcHBlci5cblx0ICogQHBhcmFtIHtBcnJheX0gbGluZXNcblx0ICovXG5cdHRoaXMubGluZXMgPSBbXTtcblxuXHQvKiogXG5cdCAqIFRoZSBuZXdsaW5lIGNoYXJhY3RlciB0byBicmVhayBvbiwgZGVmYXVsdCAnXFxuJ1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmV3bGluZVxuXHQgKi9cblx0dGhpcy5uZXdsaW5lID0gJ1xcbic7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdG8gY2xpcCBub24tYnJlYWtpbmcgdGV4dCAobm93cmFwIGFuZCBwcmUpXG5cdCAqIGlmIHRoZSB3cmFwV2lkdGggaXMgdG9vIHNtYWxsLiBcblx0ICogIFxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGNsaXBcblx0ICovXG5cdHRoaXMuY2xpcCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBUaGUgbW9kZSBmb3Igd29yZHdyYXBwaW5nOiAncHJlJywgJ25vcm1hbCcsIG9yICdub3dyYXAnLlxuXHQgKlxuXHQgKiBZb3UgY2FuIGFsc28gdXNlIHRoZSBgUFJFYCwgYE5PUk1BTGAsIGFuZCBgTk9XUkFQYCBjb25zdGFudHNcblx0ICogaW4gYFdvcmRXcmFwLk1vZGVgLlxuXHQgKiBcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1vZGVcblx0ICovXG5cdHRoaXMubW9kZSA9IFdvcmRXcmFwLk1vZGUuTk9STUFMO1xufVxuXG5Xb3JkV3JhcC5Nb2RlID0ge1xuXHRQUkU6ICdwcmUnLCAgICAgICAvL3doaXRlc3BhY2UgaXNuJ3QgY29sbGFwc2VkXG5cdE5PUk1BTDogJ25vcm1hbCcsIC8vd2hpdGVzcGFjZSBpcyBjb2xsYXBzZWRcblx0Tk9XUkFQOiAnbm93cmFwJyAgLy9vbmx5IGJyZWFrIG9uICdcXG4nXG59O1xuXG4vKipcbiAqIENsZWFycyBhbnkgbXVsdGktbGluZSBsYXlvdXQgYnkgcGxhY2luZyBhbGwgdGhlIHRleHQgaW4gYSBzaW5nbGUgTGluZSBvYmplY3QuXG4gKiBcbiAqIEBwYXJhbSB7R2x5cGhJdGVyYXRvcn0gaXRlcmF0b3IgdGhlIGl0ZXJhdG9yIHRvIHVzZSBcbiAqIEBtZXRob2QgIGNsZWFyTGF5b3V0XG4gKi9cbldvcmRXcmFwLnByb3RvdHlwZS5jbGVhckxheW91dCA9IGZ1bmN0aW9uKGl0ZXJhdG9yKSB7XG5cdHRoaXMubGluZXMubGVuZ3RoID0gMDtcblx0XG5cdGlmICh0aGlzLnRleHQubGVuZ3RoID4gMCkge1xuXHRcdGl0ZXJhdG9yLmdldEJvdW5kcyh0aGlzLnRleHQsIDAsIHRoaXMudGV4dC5sZW5ndGgsIHVuZGVmaW5lZCwgdG1wQm91bmRzKTtcblx0XHRcblx0XHR2YXIgbGluZSA9IG5ldyBXb3JkV3JhcC5MaW5lKDAsIHRoaXMudGV4dC5sZW5ndGgsIHRtcEJvdW5kcy53aWR0aCk7XG5cdFx0dGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuXHR9XG59O1xuXG4vKipcbiAqIFJlc2V0cyB0aGUgd29yZCB3cmFwcGVyIGJ5IGVtcHR5aW5nIGFsbCBjdXJyZW50IGxpbmVzLlxuICogQG1ldGhvZCAgZW1wdHlcbiAqL1xuV29yZFdyYXAucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMubGluZXMubGVuZ3RoID0gMDtcbn07XG5cbi8qKlxuICogV29yZC13cmFwcyB0aGUgZ2l2ZW4gdGV4dCBpbnRvIG11bHRpcGxlIGxpbmVzLlxuICogQHBhcmFtICB7W3R5cGVdfSBpdGVyYXRvciBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IHdpZHRoICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gc3RhcnQgICAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSBlbmQgICAgICBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuV29yZFdyYXAucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCB3cmFwV2lkdGgsIHN0YXJ0LCBlbmQpIHtcblx0dmFyIHRleHQgPSB0aGlzLnRleHQ7XG5cblx0dmFyIGxpbmVzID0gdGhpcy5saW5lcztcblxuXHRzdGFydCA9IE1hdGgubWF4KDAsIHN0YXJ0fHwwKTtcblx0ZW5kID0gKGVuZD09PTB8fGVuZCkgPyBlbmQgOiB0ZXh0Lmxlbmd0aDtcblxuXHRpdGVyYXRvci5iZWdpbigpO1xuXG5cdC8vZGVmYXVsdCB3cmFwIHdpZHRoLi4uXG5cdHdyYXBXaWR0aCA9ICh3cmFwV2lkdGg9PT0wIHx8IHdyYXBXaWR0aCkgPyB3cmFwV2lkdGggOiBOdW1iZXIuTUFYX1ZBTFVFO1xuXG5cdC8vPHByZT4gbW9kZSBqdXN0IHVzZXMgYSBzaW1wbGUgYWxnb3JpdGhtLi4uXG5cdGlmICh0aGlzLm1vZGUgPT09IFdvcmRXcmFwLk1vZGUuUFJFKSB7XG5cdFx0dmFyIGxpbmVTdGFydCA9IHN0YXJ0O1xuXHRcdGZvciAodmFyIGk9c3RhcnQ7IGk8ZW5kOyBpKyspIHtcblx0XHRcdHZhciBjaHIgPSB0ZXh0LmNoYXJBdChpKTtcblxuXHRcdFx0Ly9JZiB3ZSd2ZSByZWFjaGVkIGEgbmV3bGluZSwgdGhlbiBzdGVwIGRvd24gYSBsaW5lXG5cdFx0XHQvL09yIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIEVPRlxuXHRcdFx0aWYgKCBjaHIgPT09IHRoaXMubmV3bGluZSB8fCBpPT09ZW5kLTEpIHtcblx0XHRcdFx0dmFyIGF2YWlsYWJsZVdpZHRoID0gdGhpcy5jbGlwID8gd3JhcFdpZHRoIDogdW5kZWZpbmVkO1xuXHRcdFx0XHRpdGVyYXRvci5nZXRCb3VuZHModGV4dCwgbGluZVN0YXJ0LCBpKzEsIGF2YWlsYWJsZVdpZHRoLCB0bXBCb3VuZHMpO1xuXHRcdFx0XHRsaW5lcy5wdXNoKCBuZXcgV29yZFdyYXAuTGluZShsaW5lU3RhcnQsIGxpbmVTdGFydCt0bXBCb3VuZHMuZ2x5cGhzLCB0bXBCb3VuZHMud2lkdGgpICk7XG5cdFx0XHRcdGxpbmVTdGFydCA9IGkrMTtcblx0XHRcdH1cblx0XHR9XG5cdH0gXG5cdC8vJ25vcm1hbCcgbW9kZSB1c2VzIExpYkdEWCdzIHdvcmQgd3JhcHBpbmcgYWxnb3JpdGhtOlxuXHQvL2h0dHBzOi8vZ2l0aHViLmNvbS9saWJnZHgvbGliZ2R4L2Jsb2IvbWFzdGVyL2dkeC9zcmMvY29tL2JhZGxvZ2ljL2dkeC9ncmFwaGljcy9nMmQvQml0bWFwRm9udENhY2hlLmphdmFcblx0ZWxzZSB7XG5cdFx0Ly9pZiAnbm93cmFwJyBpcyBzcGVjaWZpZWQsIHdlIG9ubHkgd3JhcCBvbiBuZXdsaW5lIGNoYXJzXG5cdFx0XG5cdFx0dmFyIHRlc3RXaWR0aCA9IHdyYXBXaWR0aDtcblx0XHRpZiAodGhpcy5tb2RlID09PSBXb3JkV3JhcC5Nb2RlLk5PV1JBUCkge1xuXHRcdFx0dGVzdFdpZHRoID0gTnVtYmVyLk1BWF9WQUxVRTtcblx0XHR9XG5cblx0XHR3aGlsZSAoc3RhcnQgPCBlbmQpIHtcblx0XHRcdC8vZ2V0IG5leHQgbmV3bGluZSBwb3NpdGlvblxuXHRcdFx0dmFyIG5ld0xpbmUgPSBpZHhPZih0ZXh0LCB0aGlzLm5ld2xpbmUsIHN0YXJ0LCBlbmQpO1xuXG5cdFx0XHQvL2VhdCB3aGl0ZXNwYWNlIGF0IHN0YXJ0IG9mIGxpbmVcblx0XHRcdHdoaWxlIChzdGFydCA8IG5ld0xpbmUpIHtcblx0XHRcdFx0aWYgKCFpc1doaXRlc3BhY2UoIHRleHQuY2hhckF0KHN0YXJ0KSApKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRzdGFydCsrO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2RldGVybWluZSB2aXNpYmxlICMgb2YgZ2x5cGhzIGZvciB0aGUgYXZhaWxhYmxlIHdpZHRoXG5cdFx0XHRpdGVyYXRvci5nZXRCb3VuZHModGV4dCwgc3RhcnQsIG5ld0xpbmUsIHRlc3RXaWR0aCwgdG1wQm91bmRzKVxuXG5cdFx0XHR2YXIgbGluZUVuZCA9IHN0YXJ0ICsgdG1wQm91bmRzLmdseXBocztcblx0XHRcdHZhciBuZXh0U3RhcnQgPSBsaW5lRW5kICsgdGhpcy5uZXdsaW5lLmxlbmd0aDtcblxuXHRcdFx0Ly9pZiB3ZSBoYWQgdG8gY3V0IHRoZSBsaW5lIGJlZm9yZSB0aGUgbmV4dCBuZXdsaW5lLi4uXG5cdFx0XHRpZiAobGluZUVuZCA8IG5ld0xpbmUpIHtcblx0XHRcdFx0Ly9maW5kIGNoYXIgdG8gYnJlYWsgb25cblx0XHRcdFx0d2hpbGUgKGxpbmVFbmQgPiBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChpc1doaXRlc3BhY2UodGV4dC5jaGFyQXQobGluZUVuZCkpKVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0bGluZUVuZC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsaW5lRW5kID09PSBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChuZXh0U3RhcnQgPiBzdGFydCArIHRoaXMubmV3bGluZS5sZW5ndGgpIG5leHRTdGFydC0tO1xuXHRcdFx0XHRcdGxpbmVFbmQgPSBuZXh0U3RhcnQ7IC8vIElmIG5vIGNoYXJhY3RlcnMgdG8gYnJlYWssIHNob3cgYWxsLlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5leHRTdGFydCA9IGxpbmVFbmQ7XG5cdFx0XHRcdFx0Ly9lYXQgd2hpdGVzcGFjZSBhdCBlbmQgb2YgbGluZVxuXHRcdFx0XHRcdHdoaWxlIChsaW5lRW5kID4gc3RhcnQpIHtcblx0XHRcdFx0XHRcdGlmICghaXNXaGl0ZXNwYWNlKHRleHQuY2hhckF0KGxpbmVFbmQgLSB0aGlzLm5ld2xpbmUubGVuZ3RoKSkpXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0bGluZUVuZC0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobGluZUVuZCA+IHN0YXJ0KSB7XG5cdFx0XHRcdC8vdG8gY2xpcCwgdXNlIHRoZSBvcmlnaW5hbCB3cmFwIHdpZHRoICh1bmFsdGVyZWQgYnkgbW9kZSlcblx0XHRcdFx0dmFyIGF2YWlsYWJsZVdpZHRoID0gdGhpcy5jbGlwID8gd3JhcFdpZHRoIDogdW5kZWZpbmVkO1xuXHRcdFx0XHRpdGVyYXRvci5nZXRCb3VuZHModGV4dCwgc3RhcnQsIGxpbmVFbmQsIGF2YWlsYWJsZVdpZHRoLCB0bXBCb3VuZHMpO1xuXHRcdFx0XHR2YXIgbGluZVdpZHRoID0gdG1wQm91bmRzLndpZHRoO1xuXG5cdFx0XHRcdHZhciByTGluZUVuZCA9IHRoaXMuY2xpcCA/IHN0YXJ0K3RtcEJvdW5kcy5nbHlwaHMgOiBsaW5lRW5kO1xuXHRcdFx0XHRsaW5lcy5wdXNoKCBuZXcgV29yZFdyYXAuTGluZShzdGFydCwgckxpbmVFbmQsIGxpbmVXaWR0aCkgKTtcblx0XHRcdH1cblx0XHRcdHN0YXJ0ID0gbmV4dFN0YXJ0O1xuXG5cdFx0fVxuXHR9XG5cblx0aXRlcmF0b3IuZW5kKCk7XG59O1xuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgbWV0aG9kIHRvIHJldHVybiB0aGUgbWF4aW11bSB3aWR0aCBvZiBhbGwgY3VycmVudCBsaW5lcy5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBhbGlnbmluZyBibG9ja3Mgb2YgdGV4dC5cbiAqXG4gKiBAbWV0aG9kICBnZXRNYXhMaW5lV2lkdGhcbiAqIEByZXR1cm4ge051bWJlcn0gdGhlIG1heGltdW0gd2lkdGggb2YgYWxsIGxpbmVzXG4gKi9cbldvcmRXcmFwLnByb3RvdHlwZS5nZXRNYXhMaW5lV2lkdGggPSBmdW5jdGlvbigpIHtcblx0dmFyIG1heFdpZHRoID0gMDtcblx0Zm9yICh2YXIgaT0wOyBpPHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgbGluZSA9IHRoaXMubGluZXNbaV07XG5cdFx0bWF4V2lkdGggPSBNYXRoLm1heChsaW5lLndpZHRoLCBtYXhXaWR0aCk7XG5cdH1cblx0cmV0dXJuIG1heFdpZHRoO1xufTtcblxuLyoqXG4gKiBUaGUgTGluZSBvYmplY3QgaG9sZHMgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kaWNlcyBpbnRvIHRoZSBzdHJpbmcsXG4gKiBhbmQgdGhlIHdpZHRoIGFzIGNvbXB1dGVkIGJ5IEdseXBoSXRlcmF0b3IuXG4gKiBcbiAqIEBjbGFzcyAgV29yZFdyYXAuTGluZVxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IHRoZSBzdGFydCBpbmRleCwgaW5jbHVzaXZlXG4gKiBAcGFyYW0ge051bWJlcn0gZW5kICAgdGhlIGVuZCBpbmRleCwgZXhjbHVzaXZlXG4gKiBAcGFyYW0ge051bWJlcn0gd2lkdGggdGhlIGNvbXB1dGVkIHdpZHRoIG9mIHRoaXMgbGluZVxuICovXG5Xb3JkV3JhcC5MaW5lID0gZnVuY3Rpb24oc3RhcnQsIGVuZCwgd2lkdGgpIHtcblx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHR0aGlzLmVuZCA9IGVuZDtcblx0dGhpcy53aWR0aCA9IHdpZHRoO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXb3JkV3JhcDsiLCJ2YXIgY3JlYXRlVkFPID0gcmVxdWlyZSgnZ2wtYWxpYXNlZC12YW8nKSAvL1RPRE86IGltcHJvdmUgdGhpcyB3aXRoIGdsLXZhb1xudmFyIGNyZWF0ZUJ1ZmZlciA9IHJlcXVpcmUoJ2dsLWJ1ZmZlcicpXG5cbm1vZHVsZS5leHBvcnRzLmZsb2F0c1BlclZlcnRleCA9IDVcblxuZnVuY3Rpb24gY3JlYXRlSW5kaWNlcyhjYXBhY2l0eSkge1xuICAgIHZhciBudW1JbmRpY2VzID0gY2FwYWNpdHkgKiA2XG4gICAgdmFyIGluZGljZXMgPSBuZXcgVWludDE2QXJyYXkobnVtSW5kaWNlcylcblxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIGluZGljZXNbaSArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1tpICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW2kgKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbaSArIDNdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1tpICsgNF0gPSBqICsgMlxuICAgICAgICBpbmRpY2VzW2kgKyA1XSA9IGogKyAzXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cbm1vZHVsZS5leHBvcnRzLm1peGlucyA9IHtcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKG9wdCkge1xuICAgICAgICBvcHQgPSBvcHR8fHt9XG4gICAgICAgIHRoaXMuY2xlYXIoKVxuXG4gICAgICAgIC8vZGlzcG9zZSBiZWZvcmUgYnVpbGRpbmcuLi5cbiAgICAgICAgaWYgKHRoaXMudmFvKVxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKClcblxuICAgICAgICB2YXIgY2FwYWNpdHkgPSB0eXBlb2Ygb3B0LmNhcGFjaXR5ID09PSAnbnVtYmVyJyA/IG9wdC5jYXBhY2l0eSA6IDEwMFxuXG4gICAgICAgIC8vIDY1NTM1IGlzIG1heCBpbmRleCwgc28gNjU1MzUgLyA2ID0gMTA5MjIuXG4gICAgICAgIGlmIChjYXBhY2l0eSA+IDEwOTIyKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaGF2ZSBtb3JlIHRoYW4gMTA5MjIgcXVhZHMgcGVyIGJhdGNoOiBcIiArIGNhcGFjaXR5KVxuXG4gICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gY2FwYWNpdHlcblxuICAgICAgICAvL3RoZSB0b3RhbCBudW1iZXIgb2YgZmxvYXRzIGluIG91ciBiYXRjaFxuICAgICAgICB2YXIgbnVtVmVydHMgPSBjYXBhY2l0eSAqIDQgKiBtb2R1bGUuZXhwb3J0cy5mbG9hdHNQZXJWZXJ0ZXhcblxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShudW1WZXJ0cylcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyhjYXBhY2l0eSlcblxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsXG4gICAgICAgIHZhciB1c2FnZSA9IG9wdC5keW5hbWljID8gZ2wuRFlOQU1JQ19EUkFXIDogZ2wuU1RBVElDX0RSQVdcbiAgICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBjcmVhdGVCdWZmZXIoZ2wsIHRoaXMudmVydGljZXMsIGdsLkFSUkFZX0JVRkZFUiwgdXNhZ2UpXG4gICAgICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBjcmVhdGVCdWZmZXIoZ2wsIHRoaXMuaW5kaWNlcywgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGdsLlNUQVRJQ19EUkFXKVxuXG4gICAgICAgIHZhciBzdHJpZGUgPSA1ICogNFxuICAgICAgICB0aGlzLnZhbyA9IGNyZWF0ZVZBTyhnbCwgW3sgLy9wb3NpdGlvbiBYWVxuICAgICAgICAgICAgbmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy52ZXJ0ZXhCdWZmZXIsXG4gICAgICAgICAgICBzaXplOiAyLFxuICAgICAgICAgICAgc3RyaWRlOiBzdHJpZGVcbiAgICAgICAgfSwgeyAvL3RleGNvb3JkIFVWXG4gICAgICAgICAgICBuYW1lOiAndGV4Y29vcmQwJyxcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy52ZXJ0ZXhCdWZmZXIsXG4gICAgICAgICAgICBzaXplOiAyLFxuICAgICAgICAgICAgb2Zmc2V0OiAyICogNCxcbiAgICAgICAgICAgIHN0cmlkZTogc3RyaWRlXG4gICAgICAgIH0sIHsgLy9jb2xvciAocGFja2VkKSBDXG4gICAgICAgICAgICBuYW1lOiAnY29sb3InLFxuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnZlcnRleEJ1ZmZlcixcbiAgICAgICAgICAgIHNpemU6IDQsXG4gICAgICAgICAgICBzdHJpZGU6IHN0cmlkZSxcbiAgICAgICAgICAgIG9mZnNldDogNCAqIDQsXG4gICAgICAgICAgICB0eXBlOiBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgICAgICAgbm9ybWFsaXplZDogdHJ1ZVxuICAgICAgICB9XSwgdGhpcy5pbmRleEJ1ZmZlcilcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZW5zdXJlQ2FwYWNpdHk6IGZ1bmN0aW9uKGNhcGFjaXR5KSB7XG4gICAgICAgIGlmICh0aGlzLmNhcGFjaXR5IDwgY2FwYWNpdHkpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZSh7IGNhcGFjaXR5OiBjYXBhY2l0eSB9KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJ2YXIgY29sb3JUb0Zsb2F0ID0gcmVxdWlyZSgnLi9wYWNrLXJnYmEtZmxvYXQnKVxudmFyIG1peGVzID0gcmVxdWlyZSgnbWl4ZXMnKVxudmFyIHByZW11bHQgPSByZXF1aXJlKCdwcmVtdWx0aXBsaWVkLXJnYmEnKVxudmFyIFdoaXRlVGV4ID0gcmVxdWlyZSgnZ2wtd2hpdGUtdGV4dHVyZScpXG5cbnZhciB2ZXJ0TnVtRmxvYXRzID0gcmVxdWlyZSgnLi9jb21tb24nKS5mbG9hdHNQZXJWZXJ0ZXhcblxuLy9UZW1wb3JhcnkgYXJyYXlzIHRvIGF2b2lkIEdDIHRocmFzaGluZ1xudmFyIHBvc2l0aW9uID0gWzAsIDBdLFxuICAgIHNoYXBlID0gWzAsIDBdLFxuICAgIHRleGNvb3JkID0gWzAsIDAsIDAsIDBdLFxuICAgIGNvbG9yID0gWzAsIDAsIDAsIDBdXG5cbnZhciB0bXA0ID0gWzAsIDAsIDAsIDBdLFxuICAgIHJvdE9yaWdpbiA9IFswLCAwXSxcbiAgICB0bXAyID0gWzAsIDBdXG5cbmZ1bmN0aW9uIFNwcml0ZUJhdGNoKGdsLCBvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU3ByaXRlQmF0Y2gpKVxuICAgICAgICByZXR1cm4gbmV3IFNwcml0ZUJhdGNoKGdsLCBvcHQpXG4gICAgaWYgKCFnbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibXVzdCBzcGVjaWZ5IGdsIGNvbnRleHRcIilcbiAgICB0aGlzLmdsID0gZ2xcbiAgICBvcHQgPSBvcHQgfHwge31cbiAgICBcbiAgICB0aGlzLl9ib3VuZCA9IGZhbHNlXG4gICAgdGhpcy5pZHggPSAwXG5cbiAgICAvL25vIHRyYW5zZm9ybSBtZWFucyBpZGVudGl0eVxuICAgIHRoaXMudHJhbnNmb3JtID0gbnVsbFxuXG4gICAgLy93aGl0ZSB0ZXh0dXJlIGlzIGFraW4gdG8gXCJubyB0ZXh0dXJlXCIgKHdpdGhvdXQgc3dpdGNoaW5nIHNoYWRlcnMpXG4gICAgdGhpcy5fZGVmYXVsdFRleHR1cmUgPSBXaGl0ZVRleChnbClcbiAgICB0aGlzLl9sYXN0VGV4dHVyZSA9IHRoaXMuX2RlZmF1bHRUZXh0dXJlXG4gICAgdGhpcy5fdGV4dHVyZSA9IHRoaXMuX2RlZmF1bHRUZXh0dXJlXG4gICAgdGhpcy50ZXh0dXJlID0gbnVsbFxuXG4gICAgdGhpcy5tb2RlID0gdHlwZW9mIG9wdC5tb2RlID09PSAnbnVtYmVyJyA/IG9wdC5tb2RlIDogZ2wuVFJJQU5HTEVTXG4gICAgdGhpcy5wcmVtdWx0aXBsaWVkID0gb3B0LnByZW11bHRpcGxpZWQgfHwgZmFsc2VcblxuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZVxuICAgIHRoaXMuY3JlYXRlKG9wdClcblxuICAgIC8vc2V0IGRlZmF1bHQgYXR0cmlidXRlc1xuICAgIHRoaXMuZGVmYXVsdHMoKVxufVxuXG4vL21peCBpbiBjcmVhdGUoKSBhbmQgZW5zdXJlQ2FwYWNpdHkoKSBmdW5jdGlvbnNcbm1peGVzKFNwcml0ZUJhdGNoLCByZXF1aXJlKCcuL2NvbW1vbicpLm1peGlucylcblxubWl4ZXMoU3ByaXRlQmF0Y2gsIHtcblxuICAgIGNhcGFjaXR5OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0ZXh0dXJlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24odGV4KSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlID0gdGV4IHx8IHRoaXMuX2RlZmF1bHRUZXh0dXJlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzcG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnZlcnRleEJ1ZmZlcilcbiAgICAgICAgICAgIHRoaXMudmVydGV4QnVmZmVyLmRpc3Bvc2UoKVxuICAgICAgICBpZiAodGhpcy5pbmRleEJ1ZmZlcilcbiAgICAgICAgICAgIHRoaXMuaW5kZXhCdWZmZXIuZGlzcG9zZSgpXG4gICAgICAgIGlmICh0aGlzLnZhbylcbiAgICAgICAgICAgIHRoaXMudmFvLmRpc3Bvc2UoKVxuICAgIH0sXG5cbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaWR4ID0gMFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBiaW5kOiBmdW5jdGlvbihzaGFkZXIpIHtcbiAgICAgICAgc2hhZGVyLmJpbmQoKVxuICAgICAgICB0aGlzLnZhby5iaW5kKHNoYWRlcilcbiAgICAgICAgdGhpcy5fYm91bmQgPSB0cnVlXG4gICAgfSxcblxuICAgIHVuYmluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudmFvLnVuYmluZCgpXG4gICAgICAgIHRoaXMuX2JvdW5kID0gZmFsc2VcbiAgICB9LFxuXG4gICAgZGVmYXVsdHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gY29weTIocG9zaXRpb24sIDAsIDApXG4gICAgICAgIHRoaXMudGV4Y29vcmQgPSBjb3B5NCh0ZXhjb29yZCwgMCwgMCwgMSwgMSlcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvcHk0KGNvbG9yLCAxLCAxLCAxLCAxKVxuICAgICAgICB0aGlzLnNoYXBlID0gY29weTIoc2hhcGUsIDAsIDApXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHB1c2g6IGZ1bmN0aW9uKHNwcml0ZSkge1xuICAgICAgICAvL2lmIHdlIGFyZSBkZWZpbmluZyBhdHRyaWJ1dGVzIG9uIHRoZSBmbHlcbiAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gc3ByaXRlLnRleHR1cmVcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBzcHJpdGUucG9zaXRpb24gfHwgY29weTIocG9zaXRpb24sIDAsIDApXG4gICAgICAgICAgICB0aGlzLnRleGNvb3JkID0gc3ByaXRlLnRleGNvb3JkIHx8IGNvcHk0KHRleGNvb3JkLCAwLCAwLCAxLCAxKVxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IHNwcml0ZS5jb2xvciB8fCBjb3B5NChjb2xvciwgMSwgMSwgMSwgMSlcbiAgICAgICAgICAgIHRoaXMuc2hhcGUgPSBzcHJpdGUuc2hhcGUgfHwgY29weTIoc2hhcGUsIDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50ZXh0dXJlICE9PSB0aGlzLl9sYXN0VGV4dHVyZSkge1xuICAgICAgICAgICAgLy9uZXcgdGV4dHVyZSwgZmx1c2ggcHJldmlvdXMgZGF0YVxuICAgICAgICAgICAgaWYgKHRoaXMuX2JvdW5kKVxuICAgICAgICAgICAgICAgIHRoaXMuZmx1c2goKVxuICAgICAgICAgICAgdGhpcy5fbGFzdFRleHR1cmUgPSB0aGlzLnRleHR1cmVcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkeCA9PT0gdGhpcy52ZXJ0aWNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vaWYgd2UgQVJFTidUIGJvdW5kLCB3ZSBuZWVkIHRvIHN0b3AgcHVzaGluZyB2ZXJ0ZXggZGF0YSFcbiAgICAgICAgICAgIGlmICghdGhpcy5fYm91bmQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNcblxuICAgICAgICAgICAgLy9pZiB3ZSBBUkUgYm91bmQsIHdlIGNhbiBmbHVzaCB0aGUgYmF0Y2ggYW5kIGNvbnRpbnVlIGRyYXdpbmdcbiAgICAgICAgICAgIHRoaXMuZmx1c2goKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlXG5cbiAgICAgICAgLy9nZXQgUkdCQSBjb21wb25lbnRzIGFuZCBwYWNrIGludG8gYSBzaW5nbGUgZmxvYXRcbiAgICAgICAgdmFyIGNvbG9yUkdCQSA9IHRoaXMucHJlbXVsdGlwbGllZCA/IHByZW11bHQodGhpcy5jb2xvciwgdG1wNCkgOiB0aGlzLmNvbG9yXG4gICAgICAgIHZhciBjID0gY29sb3JUb0Zsb2F0KGNvbG9yUkdCQSlcblxuICAgICAgICB2YXIgdTEgPSB0aGlzLnRleGNvb3JkWzBdLFxuICAgICAgICAgICAgdjEgPSB0aGlzLnRleGNvb3JkWzFdLFxuICAgICAgICAgICAgdTIgPSB0aGlzLnRleGNvb3JkWzJdLFxuICAgICAgICAgICAgdjIgPSB0aGlzLnRleGNvb3JkWzNdXG5cbiAgICAgICAgdmFyIHggPSB0aGlzLnBvc2l0aW9uWzBdLFxuICAgICAgICAgICAgeSA9IHRoaXMucG9zaXRpb25bMV0sXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMuc2hhcGVbMF0sXG4gICAgICAgICAgICBoZWlnaHQgPSB0aGlzLnNoYXBlWzFdXG5cbiAgICAgICAgdGhpcy5fdmVydCh4LCB5LCB1MSwgdjEsIGMpXG4gICAgICAgIHRoaXMuX3ZlcnQoeCt3aWR0aCwgeSwgdTIsIHYxLCBjKVxuICAgICAgICB0aGlzLl92ZXJ0KHgrd2lkdGgsIHkraGVpZ2h0LCB1MiwgdjIsIGMpXG4gICAgICAgIHRoaXMuX3ZlcnQoeCwgeStoZWlnaHQsIHUxLCB2MiwgYylcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIF92ZXJ0OiBmdW5jdGlvbih4MSwgeTEsIHUxLCB2MSwgYykge1xuICAgICAgICB2YXIgaWR4ID0gdGhpcy5pZHgsXG4gICAgICAgICAgICB2ZXJ0cyA9IHRoaXMudmVydGljZXMsXG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVxuXG4gICAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHZhciB4ID0geDEsIHkgPSB5MVxuICAgICAgICAgICAgeDEgPSB0cmFuc2Zvcm1bMF0gKiB4ICsgdHJhbnNmb3JtWzRdICogeSArIHRyYW5zZm9ybVsxMl1cbiAgICAgICAgICAgIHkxID0gdHJhbnNmb3JtWzFdICogeCArIHRyYW5zZm9ybVs1XSAqIHkgKyB0cmFuc2Zvcm1bMTNdXG4gICAgICAgIH1cblxuICAgICAgICAvL3h5XG4gICAgICAgIHZlcnRzW2lkeCsrXSA9IHgxXG4gICAgICAgIHZlcnRzW2lkeCsrXSA9IHkxXG4gICAgICAgIC8vdXZcbiAgICAgICAgdmVydHNbaWR4KytdID0gdTFcbiAgICAgICAgdmVydHNbaWR4KytdID0gdjFcbiAgICAgICAgLy9jb2xvclxuICAgICAgICB2ZXJ0c1tpZHgrK10gPSBjXG4gICAgICAgIHRoaXMuaWR4ID0gaWR4XG4gICAgfSxcblxuICAgIGZsdXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXIoKVxuICAgIH0sXG5cbiAgICBkcmF3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9JZiB3ZSd2ZSByZWFjaGVkIGEgbmV3IHRleHR1cmUgb3IgY2FwYWNpdHlcbiAgICAgICAgLy93aGlsZSBub3QgYm91bmQsIHRoZW4gd2Ugd2lsbCBqdXN0IGNsZWFyIHRoZSBiYXRjaFxuICAgICAgICAvL3RvIHplcm8gYW5kIGRyYXcgbm90aGluZ1xuICAgICAgICBpZiAodGhpcy5pZHggPT09IDAgfHwgIXRoaXMuX2JvdW5kKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcblxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsXG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fZGlydHkpIHtcbiAgICAgICAgICAgIHZhciB2aWV3ID0gdGhpcy52ZXJ0aWNlcy5zdWJhcnJheSgwLCB0aGlzLmlkeClcbiAgICAgICAgICAgIHRoaXMudmVydGV4QnVmZmVyLnVwZGF0ZSh2aWV3LCAwKVxuICAgICAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2xhc3RUZXh0dXJlKVxuICAgICAgICAgICAgdGhpcy5fbGFzdFRleHR1cmUuYmluZCgpXG4gICAgICAgIHRoaXMuX2xhc3RUZXh0dXJlID0gdGhpcy50ZXh0dXJlXG5cbiAgICAgICAgdmFyIHNwcml0ZXMgPSAodGhpcy5pZHggLyAodmVydE51bUZsb2F0cyAqIDQpKVxuICAgICAgICBpZiAoc3ByaXRlcyA+IDApXG4gICAgICAgICAgICB0aGlzLnZhby5kcmF3KHRoaXMubW9kZSwgc3ByaXRlcyAqIDYsIDApXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gU3ByaXRlQmF0Y2hcblxuLy9UT0RPOiB3aWxsIHVzZSBtb2R1bGFyIGdsLW1hdHJpeCBmb3IgdGhlc2UuLi5cbmZ1bmN0aW9uIGNvcHkyKG91dCwgeCwgeSkge1xuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBjb3B5NChvdXQsIHgsIHksIHosIHcpIHtcbiAgICBvdXRbMF0gPSB4XG4gICAgb3V0WzFdID0geVxuICAgIG91dFsyXSA9IHpcbiAgICBvdXRbM10gPSB3XG4gICAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBjb3B5VmVjMihvdXQsIHZlYykge1xuICAgIHJldHVybiBjb3B5MihvdXQsIHZlY1swXSwgdmVjWzFdKVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSwgXG4gICAgICAgIHkgPSBhWzFdXG4gICAgb3V0WzBdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bMTJdXG4gICAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bMTNdXG4gICAgcmV0dXJuIG91dFxufSIsInZhciBjcmVhdGVWQU9FbXVsYXRlZCA9IHJlcXVpcmUoXCIuL2xpYi92YW8tZW11bGF0ZWQuanNcIilcblxuZnVuY3Rpb24gY3JlYXRlVkFPKGdsLCBhdHRyaWJ1dGVzLCBlbGVtZW50cywgZWxlbWVudHNUeXBlKSB7XG4gIHZhciB2YW8gPSBjcmVhdGVWQU9FbXVsYXRlZChnbClcbiAgdmFvLnVwZGF0ZShhdHRyaWJ1dGVzLCBlbGVtZW50cywgZWxlbWVudHNUeXBlKVxuICByZXR1cm4gdmFvXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVkFPIiwiZnVuY3Rpb24gZ2V0QXR0cmlidXRlTG9jYXRpb24obmFtZSwgc2hhZGVyKSB7XG4gICAgaWYgKCFuYW1lKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIHZhciBhdHRyID0gc2hhZGVyLmF0dHJpYnV0ZXNcbiAgICBpZiAoYXR0cltuYW1lXSkgXG4gICAgICAgIHJldHVybiBhdHRyW25hbWVdLmxvY2F0aW9uXG4gICAgcmV0dXJuIG51bGxcbn1cblxudmFyIG5hdHRyaWJzID0gbnVsbFxudmFyIGJvdW5kID0gbnVsbFxuXG5mdW5jdGlvbiBkb0JpbmQoZ2wsIGVsZW1lbnRzLCBhdHRyaWJ1dGVzLCBzaGFkZXIpIHtcbiAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgICAgZWxlbWVudHMuYmluZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbClcbiAgICB9XG4gICAgaWYgKG5hdHRyaWJzID09PSBudWxsKSB7XG4gICAgICBuYXR0cmlicyA9IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX0FUVFJJQlMpIHwgMFxuICAgICAgYm91bmQgPSBuZXcgQXJyYXkobmF0dHJpYnMpXG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID4gbmF0dHJpYnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdsLXZhbzogVG9vIG1hbnkgdmVydGV4IGF0dHJpYnV0ZXNcIilcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsYXN0Qm91bmQgPSBudWxsXG5cbiAgICAgICAgZm9yIChpPTA7IGk8bmF0dHJpYnM7IGkrKylcbiAgICAgICAgICBib3VuZFtpXSA9IGZhbHNlXG5cbiAgICAgICAgLy9ub3cgYmluZCBhbGlhc2VkIGF0dHJpYnV0ZXNcbiAgICAgICAgZm9yIChpPTA7IGk8YXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGF0dHJpYiA9IGF0dHJpYnV0ZXNbaV1cbiAgICAgICAgICAgIHZhciBsb2MgPSBnZXRBdHRyaWJ1dGVMb2NhdGlvbihhdHRyaWIubmFtZSwgc2hhZGVyKVxuICAgICAgICAgICAgaWYgKGxvYyA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgICAgICBib3VuZFtsb2NdID0gdHJ1ZVxuXG4gICAgICAgICAgICBpZihhdHRyaWIuYnVmZmVyKSB7XG4gICAgICAgICAgICAgIHZhciBidWZmZXIgPSBhdHRyaWIuYnVmZmVyXG4gICAgICAgICAgICAgIHZhciBzaXplID0gYXR0cmliLnNpemUgfHwgNFxuICAgICAgICAgICAgICB2YXIgdHlwZSA9IGF0dHJpYi50eXBlIHx8IGdsLkZMT0FUXG4gICAgICAgICAgICAgIHZhciBub3JtYWxpemVkID0gISFhdHRyaWIubm9ybWFsaXplZFxuICAgICAgICAgICAgICB2YXIgc3RyaWRlID0gYXR0cmliLnN0cmlkZSB8fCAwXG4gICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBhdHRyaWIub2Zmc2V0IHx8IDBcbiAgICAgICAgICAgICAgaWYgKGxhc3RCb3VuZCAhPT0gYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLmJpbmQoKVxuICAgICAgICAgICAgICAgIGxhc3RCb3VuZCA9IGJ1ZmZlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvYylcbiAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihsb2MsIHNpemUsIHR5cGUsIG5vcm1hbGl6ZWQsIHN0cmlkZSwgb2Zmc2V0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYodHlwZW9mIGF0dHJpYiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYjFmKGxvYywgYXR0cmliKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYoYXR0cmliLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYjFmKGxvYywgYXR0cmliWzBdKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYoYXR0cmliLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYjJmKGxvYywgYXR0cmliWzBdLCBhdHRyaWJbMV0pXG4gICAgICAgICAgICAgIH0gZWxzZSBpZihhdHRyaWIubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliM2YobG9jLCBhdHRyaWJbMF0sIGF0dHJpYlsxXSwgYXR0cmliWzJdKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYoYXR0cmliLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYjRmKGxvYywgYXR0cmliWzBdLCBhdHRyaWJbMV0sIGF0dHJpYlsyXSwgYXR0cmliWzNdKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdsLXZhbzogSW52YWxpZCB2ZXJ0ZXggYXR0cmlidXRlXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvYylcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGk9MDsgaTxuYXR0cmliczsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFib3VuZFtpXSlcbiAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpKVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKVxuICAgICAgZm9yKHZhciBpPTA7IGk8bmF0dHJpYnM7ICsraSkge1xuICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaSlcbiAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9CaW5kIiwidmFyIGJpbmRBdHRyaWJzID0gcmVxdWlyZShcIi4vZG8tYmluZC5qc1wiKVxuXG5mdW5jdGlvbiBWQU9FbXVsYXRlZChnbCkge1xuICB0aGlzLmdsID0gZ2xcbiAgdGhpcy5fZWxlbWVudHMgPSBudWxsXG4gIHRoaXMuX2F0dHJpYnV0ZXMgPSBudWxsXG4gIHRoaXMuX2VsZW1lbnRzVHlwZSA9IGdsLlVOU0lHTkVEX1NIT1JUXG59XG5cblZBT0VtdWxhdGVkLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oc2hhZGVyKSB7XG4gIGlmICghc2hhZGVyKVxuICAgIHRocm93IG5ldyBFcnJvcignbXVzdCBhc3NvY2lhdGUgc2hhZGVyIHdpdGggdmVydGV4IGFycmF5JylcbiAgYmluZEF0dHJpYnModGhpcy5nbCwgdGhpcy5fZWxlbWVudHMsIHRoaXMuX2F0dHJpYnV0ZXMsIHNoYWRlcilcbn1cblxuVkFPRW11bGF0ZWQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZXMsIGVsZW1lbnRzLCBlbGVtZW50c1R5cGUpIHtcbiAgdGhpcy5fZWxlbWVudHMgPSBlbGVtZW50c1xuICB0aGlzLl9hdHRyaWJ1dGVzID0gYXR0cmlidXRlc1xuICB0aGlzLl9lbGVtZW50c1R5cGUgPSBlbGVtZW50c1R5cGUgfHwgdGhpcy5nbC5VTlNJR05FRF9TSE9SVFxufVxuXG5WQU9FbXVsYXRlZC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB9XG5WQU9FbXVsYXRlZC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24oKSB7XG4gIGJpbmRBdHRyaWJzKHRoaXMuZ2wpXG59XG5cblZBT0VtdWxhdGVkLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24obW9kZSwgY291bnQsIG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfHwgMFxuICB2YXIgZ2wgPSB0aGlzLmdsXG4gIGlmKHRoaXMuX2VsZW1lbnRzKSB7XG4gICAgZ2wuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0aGlzLl9lbGVtZW50c1R5cGUsIG9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBnbC5kcmF3QXJyYXlzKG1vZGUsIG9mZnNldCwgY291bnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVkFPRW11bGF0ZWQoZ2wpIHtcbiAgcmV0dXJuIG5ldyBWQU9FbXVsYXRlZChnbClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVWQU9FbXVsYXRlZCIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBwb29sID0gcmVxdWlyZShcInR5cGVkYXJyYXktcG9vbFwiKVxudmFyIG9wcyA9IHJlcXVpcmUoXCJuZGFycmF5LW9wc1wiKVxudmFyIG5kYXJyYXkgPSByZXF1aXJlKFwibmRhcnJheVwiKVxudmFyIHdlYmdsZXcgPSByZXF1aXJlKFwid2ViZ2xld1wiKVxuXG52YXIgU1VQUE9SVEVEX1RZUEVTID0gW1xuICBcInVpbnQ4XCIsXG4gIFwidWludDhfY2xhbXBlZFwiLFxuICBcInVpbnQxNlwiLFxuICBcInVpbnQzMlwiLFxuICBcImludDhcIixcbiAgXCJpbnQxNlwiLFxuICBcImludDMyXCIsXG4gIFwiZmxvYXQzMlwiIF1cblxuZnVuY3Rpb24gR0xCdWZmZXIoZ2wsIHR5cGUsIGhhbmRsZSwgbGVuZ3RoLCB1c2FnZSkge1xuICB0aGlzLmdsID0gZ2xcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLmhhbmRsZSA9IGhhbmRsZVxuICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICB0aGlzLnVzYWdlID0gdXNhZ2Vcbn1cblxudmFyIHByb3RvID0gR0xCdWZmZXIucHJvdG90eXBlXG5cbnByb3RvLmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMudHlwZSwgdGhpcy5oYW5kbGUpXG59XG5cbnByb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5oYW5kbGUpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVR5cGVBcnJheShnbCwgdHlwZSwgbGVuLCB1c2FnZSwgZGF0YSwgb2Zmc2V0KSB7XG4gIHZhciBkYXRhTGVuID0gZGF0YS5sZW5ndGggKiBkYXRhLkJZVEVTX1BFUl9FTEVNRU5UIFxuICBpZihvZmZzZXQgPCAwKSB7XG4gICAgZ2wuYnVmZmVyRGF0YSh0eXBlLCBkYXRhLCB1c2FnZSlcbiAgICByZXR1cm4gZGF0YUxlblxuICB9XG4gIGlmKGRhdGFMZW4gKyBvZmZzZXQgPiBsZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IElmIHJlc2l6aW5nIGJ1ZmZlciwgbXVzdCBub3Qgc3BlY2lmeSBvZmZzZXRcIilcbiAgfVxuICBnbC5idWZmZXJTdWJEYXRhKHR5cGUsIG9mZnNldCwgZGF0YSlcbiAgcmV0dXJuIGxlblxufVxuXG5mdW5jdGlvbiBtYWtlU2NyYXRjaFR5cGVBcnJheShhcnJheSwgZHR5cGUpIHtcbiAgdmFyIHJlcyA9IHBvb2wubWFsbG9jKGFycmF5Lmxlbmd0aCwgZHR5cGUpXG4gIHZhciBuID0gYXJyYXkubGVuZ3RoXG4gIGZvcih2YXIgaT0wOyBpPG47ICsraSkge1xuICAgIHJlc1tpXSA9IGFycmF5W2ldXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBpc1BhY2tlZChzaGFwZSwgc3RyaWRlKSB7XG4gIHZhciBuID0gMVxuICBmb3IodmFyIGk9c3RyaWRlLmxlbmd0aC0xOyBpPj0wOyAtLWkpIHtcbiAgICBpZihzdHJpZGVbaV0gIT09IG4pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBuICo9IHNoYXBlW2ldXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxucHJvdG8udXBkYXRlID0gZnVuY3Rpb24oYXJyYXksIG9mZnNldCkge1xuICBpZih0eXBlb2Ygb2Zmc2V0ICE9PSBcIm51bWJlclwiKSB7XG4gICAgb2Zmc2V0ID0gLTFcbiAgfVxuICB0aGlzLmJpbmQoKVxuICBpZih0eXBlb2YgYXJyYXkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGFycmF5LnNoYXBlICE9PSBcInVuZGVmaW5lZFwiKSB7IC8vbmRhcnJheVxuICAgIHZhciBkdHlwZSA9IGFycmF5LmR0eXBlXG4gICAgaWYoU1VQUE9SVEVEX1RZUEVTLmluZGV4T2YoZHR5cGUpIDwgMCkge1xuICAgICAgZHR5cGUgPSBcImZsb2F0MzJcIlxuICAgIH1cbiAgICBpZih0aGlzLnR5cGUgPT09IHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIpIHtcbiAgICAgIHZhciB3Z2wgPSB3ZWJnbGV3KHRoaXMuZ2wpXG4gICAgICB2YXIgZXh0ID0gd2dsLk9FU19lbGVtZW50X2luZGV4X3VpbnRcbiAgICAgIGlmKGV4dCAmJiBkdHlwZSAhPT0gXCJ1aW50MTZcIikge1xuICAgICAgICBkdHlwZSA9IFwidWludDMyXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR0eXBlID0gXCJ1aW50MTZcIlxuICAgICAgfVxuICAgIH1cbiAgICBpZihkdHlwZSA9PT0gYXJyYXkuZHR5cGUgJiYgaXNQYWNrZWQoYXJyYXkuc2hhcGUsIGFycmF5LnN0cmlkZSkpIHtcbiAgICAgIGlmKGFycmF5Lm9mZnNldCA9PT0gMCAmJiBhcnJheS5kYXRhLmxlbmd0aCA9PT0gYXJyYXkuc2hhcGVbMF0pIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgYXJyYXkuZGF0YSwgb2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgYXJyYXkuZGF0YS5zdWJhcnJheShhcnJheS5vZmZzZXQsIGFycmF5LnNoYXBlWzBdKSwgb2Zmc2V0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdG1wID0gcG9vbC5tYWxsb2MoYXJyYXkuc2l6ZSwgZHR5cGUpXG4gICAgICB2YXIgbmR0ID0gbmRhcnJheSh0bXAsIGFycmF5LnNoYXBlKVxuICAgICAgb3BzLmFzc2lnbihuZHQsIGFycmF5KVxuICAgICAgaWYob2Zmc2V0IDwgMCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCB0bXAsIG9mZnNldCkgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgdG1wLnN1YmFycmF5KDAsIGFycmF5LnNpemUpLCBvZmZzZXQpICBcbiAgICAgIH1cbiAgICAgIHBvb2wuZnJlZSh0bXApXG4gICAgfVxuICB9IGVsc2UgaWYoQXJyYXkuaXNBcnJheShhcnJheSkpIHsgLy9WYW5pbGxhIGFycmF5XG4gICAgdmFyIHRcbiAgICBpZih0aGlzLnR5cGUgPT09IHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIpIHtcbiAgICAgIHQgPSBtYWtlU2NyYXRjaFR5cGVBcnJheShhcnJheSwgXCJ1aW50MTZcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdCA9IG1ha2VTY3JhdGNoVHlwZUFycmF5KGFycmF5LCBcImZsb2F0MzJcIilcbiAgICB9XG4gICAgaWYob2Zmc2V0IDwgMCkge1xuICAgICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgdCwgb2Zmc2V0KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCB0LnN1YmFycmF5KDAsIGFycmF5Lmxlbmd0aCksIG9mZnNldClcbiAgICB9XG4gICAgcG9vbC5mcmVlKHQpXG4gIH0gZWxzZSBpZih0eXBlb2YgYXJyYXkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGFycmF5Lmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyAvL1R5cGVkIGFycmF5XG4gICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgYXJyYXksIG9mZnNldClcbiAgfSBlbHNlIGlmKHR5cGVvZiBhcnJheSA9PT0gXCJudW1iZXJcIiB8fCBhcnJheSA9PT0gdW5kZWZpbmVkKSB7IC8vTnVtYmVyL2RlZmF1bHRcbiAgICBpZihvZmZzZXQgPj0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtYnVmZmVyOiBDYW5ub3Qgc3BlY2lmeSBvZmZzZXQgd2hlbiByZXNpemluZyBidWZmZXJcIilcbiAgICB9XG4gICAgYXJyYXkgPSBhcnJheSB8IDBcbiAgICBpZihhcnJheSA8PSAwKSB7XG4gICAgICBhcnJheSA9IDFcbiAgICB9XG4gICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMudHlwZSwgYXJyYXl8MCwgdGhpcy51c2FnZSlcbiAgICB0aGlzLmxlbmd0aCA9IGFycmF5XG4gIH0gZWxzZSB7IC8vRXJyb3IsIGNhc2Ugc2hvdWxkIG5vdCBoYXBwZW5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IEludmFsaWQgZGF0YSB0eXBlXCIpXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKGdsLCBkYXRhLCB0eXBlLCB1c2FnZSkge1xuICB3ZWJnbGV3KGdsKVxuICB0eXBlID0gdHlwZSB8fCBnbC5BUlJBWV9CVUZGRVJcbiAgdXNhZ2UgPSB1c2FnZSB8fCBnbC5EWU5BTUlDX0RSQVdcbiAgaWYodHlwZSAhPT0gZ2wuQVJSQVlfQlVGRkVSICYmIHR5cGUgIT09IGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtYnVmZmVyOiBJbnZhbGlkIHR5cGUgZm9yIHdlYmdsIGJ1ZmZlciwgbXVzdCBiZSBlaXRoZXIgZ2wuQVJSQVlfQlVGRkVSIG9yIGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSXCIpXG4gIH1cbiAgaWYodXNhZ2UgIT09IGdsLkRZTkFNSUNfRFJBVyAmJiB1c2FnZSAhPT0gZ2wuU1RBVElDX0RSQVcgJiYgdXNhZ2UgIT09IGdsLlNUUkVBTV9EUkFXKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtYnVmZmVyOiBJbnZhbGlkIHVzYWdlIGZvciBidWZmZXIsIG11c3QgYmUgZWl0aGVyIGdsLkRZTkFNSUNfRFJBVywgZ2wuU1RBVElDX0RSQVcgb3IgZ2wuU1RSRUFNX0RSQVdcIilcbiAgfVxuICB2YXIgaGFuZGxlID0gZ2wuY3JlYXRlQnVmZmVyKClcbiAgdmFyIHJlc3VsdCA9IG5ldyBHTEJ1ZmZlcihnbCwgdHlwZSwgaGFuZGxlLCAwLCB1c2FnZSlcbiAgcmVzdWx0LnVwZGF0ZShkYXRhKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQnVmZmVyIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGNvbXBpbGUgPSByZXF1aXJlKFwiY3dpc2UtY29tcGlsZXJcIilcblxudmFyIEVtcHR5UHJvYyA9IHtcbiAgYm9keTogXCJcIixcbiAgYXJnczogW10sXG4gIHRoaXNWYXJzOiBbXSxcbiAgbG9jYWxWYXJzOiBbXVxufVxuXG5mdW5jdGlvbiBmaXh1cCh4KSB7XG4gIGlmKCF4KSB7XG4gICAgcmV0dXJuIEVtcHR5UHJvY1xuICB9XG4gIGZvcih2YXIgaT0wOyBpPHguYXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBhID0geC5hcmdzW2ldXG4gICAgaWYoaSA9PT0gMCkge1xuICAgICAgeC5hcmdzW2ldID0ge25hbWU6IGEsIGx2YWx1ZTp0cnVlLCBydmFsdWU6ICEheC5ydmFsdWUsIGNvdW50OnguY291bnR8fDEgfVxuICAgIH0gZWxzZSB7XG4gICAgICB4LmFyZ3NbaV0gPSB7bmFtZTogYSwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6IDF9XG4gICAgfVxuICB9XG4gIGlmKCF4LnRoaXNWYXJzKSB7XG4gICAgeC50aGlzVmFycyA9IFtdXG4gIH1cbiAgaWYoIXgubG9jYWxWYXJzKSB7XG4gICAgeC5sb2NhbFZhcnMgPSBbXVxuICB9XG4gIHJldHVybiB4XG59XG5cbmZ1bmN0aW9uIHBjb21waWxlKHVzZXJfYXJncykge1xuICByZXR1cm4gY29tcGlsZSh7XG4gICAgYXJnczogICAgIHVzZXJfYXJncy5hcmdzLFxuICAgIHByZTogICAgICBmaXh1cCh1c2VyX2FyZ3MucHJlKSxcbiAgICBib2R5OiAgICAgZml4dXAodXNlcl9hcmdzLmJvZHkpLFxuICAgIHBvc3Q6ICAgICBmaXh1cCh1c2VyX2FyZ3MucHJvYyksXG4gICAgZnVuY05hbWU6IHVzZXJfYXJncy5mdW5jTmFtZVxuICB9KVxufVxuXG5mdW5jdGlvbiBtYWtlT3AodXNlcl9hcmdzKSB7XG4gIHZhciBhcmdzID0gW11cbiAgZm9yKHZhciBpPTA7IGk8dXNlcl9hcmdzLmFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICBhcmdzLnB1c2goXCJhXCIraSlcbiAgfVxuICB2YXIgd3JhcHBlciA9IG5ldyBGdW5jdGlvbihcIlBcIiwgW1xuICAgIFwicmV0dXJuIGZ1bmN0aW9uIFwiLCB1c2VyX2FyZ3MuZnVuY05hbWUsIFwiX25kYXJyYXlvcHMoXCIsIGFyZ3Muam9pbihcIixcIiksIFwiKSB7UChcIiwgYXJncy5qb2luKFwiLFwiKSwgXCIpO3JldHVybiBhMH1cIlxuICBdLmpvaW4oXCJcIikpXG4gIHJldHVybiB3cmFwcGVyKHBjb21waWxlKHVzZXJfYXJncykpXG59XG5cbnZhciBhc3NpZ25fb3BzID0ge1xuICBhZGQ6ICBcIitcIixcbiAgc3ViOiAgXCItXCIsXG4gIG11bDogIFwiKlwiLFxuICBkaXY6ICBcIi9cIixcbiAgbW9kOiAgXCIlXCIsXG4gIGJhbmQ6IFwiJlwiLFxuICBib3I6ICBcInxcIixcbiAgYnhvcjogXCJeXCIsXG4gIGxzaGlmdDogXCI8PFwiLFxuICByc2hpZnQ6IFwiPj5cIixcbiAgcnJzaGlmdDogXCI+Pj5cIlxufVxuOyhmdW5jdGlvbigpe1xuICBmb3IodmFyIGlkIGluIGFzc2lnbl9vcHMpIHtcbiAgICB2YXIgb3AgPSBhc3NpZ25fb3BzW2lkXVxuICAgIGV4cG9ydHNbaWRdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsXCJhcnJheVwiLFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLFxuICAgICAgICAgICAgIGJvZHk6IFwiYT1iXCIrb3ArXCJjXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wiZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSxcbiAgICAgICAgICAgICBib2R5OlwiYVwiK29wK1wiPWJcIn0sXG4gICAgICBydmFsdWU6IHRydWUsXG4gICAgICBmdW5jTmFtZTogaWQrXCJlcVwiXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wic1wiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLCBcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwic1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1iXCIrb3ArXCJzXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkK1wic1wiXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wic2VxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsXCJzY2FsYXJcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJzXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhXCIrb3ArXCI9c1wifSxcbiAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgIGZ1bmNOYW1lOiBpZCtcInNlcVwiXG4gICAgfSlcbiAgfVxufSkoKTtcblxudmFyIHVuYXJ5X29wcyA9IHtcbiAgbm90OiBcIiFcIixcbiAgYm5vdDogXCJ+XCIsXG4gIG5lZzogXCItXCIsXG4gIHJlY2lwOiBcIjEuMC9cIlxufVxuOyhmdW5jdGlvbigpe1xuICBmb3IodmFyIGlkIGluIHVuYXJ5X29wcykge1xuICAgIHZhciBvcCA9IHVuYXJ5X29wc1tpZF1cbiAgICBleHBvcnRzW2lkXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1cIitvcCtcImJcIn0sXG4gICAgICBmdW5jTmFtZTogaWRcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9XCIrb3ArXCJhXCJ9LFxuICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgY291bnQ6IDIsXG4gICAgICBmdW5jTmFtZTogaWQrXCJlcVwiXG4gICAgfSlcbiAgfVxufSkoKTtcblxudmFyIGJpbmFyeV9vcHMgPSB7XG4gIGFuZDogXCImJlwiLFxuICBvcjogXCJ8fFwiLFxuICBlcTogXCI9PT1cIixcbiAgbmVxOiBcIiE9PVwiLFxuICBsdDogXCI8XCIsXG4gIGd0OiBcIj5cIixcbiAgbGVxOiBcIjw9XCIsXG4gIGdlcTogXCI+PVwiXG59XG47KGZ1bmN0aW9uKCkge1xuICBmb3IodmFyIGlkIGluIGJpbmFyeV9vcHMpIHtcbiAgICB2YXIgb3AgPSBiaW5hcnlfb3BzW2lkXVxuICAgIGV4cG9ydHNbaWRdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsXCJhcnJheVwiLFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiLCBcImNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9YlwiK29wK1wiY1wifSxcbiAgICAgIGZ1bmNOYW1lOiBpZFxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcInNcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcImFycmF5XCIsXCJzY2FsYXJcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiLCBcInNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9YlwiK29wK1wic1wifSxcbiAgICAgIGZ1bmNOYW1lOiBpZCtcInNcIlxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcImVxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1hXCIrb3ArXCJiXCJ9LFxuICAgICAgcnZhbHVlOnRydWUsXG4gICAgICBjb3VudDoyLFxuICAgICAgZnVuY05hbWU6IGlkK1wiZXFcIlxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcInNlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcInNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9YVwiK29wK1wic1wifSxcbiAgICAgIHJ2YWx1ZTp0cnVlLFxuICAgICAgY291bnQ6MixcbiAgICAgIGZ1bmNOYW1lOiBpZCtcInNlcVwiXG4gICAgfSlcbiAgfVxufSkoKTtcblxudmFyIG1hdGhfdW5hcnkgPSBbXG4gIFwiYWJzXCIsXG4gIFwiYWNvc1wiLFxuICBcImFzaW5cIixcbiAgXCJhdGFuXCIsXG4gIFwiY2VpbFwiLFxuICBcImNvc1wiLFxuICBcImV4cFwiLFxuICBcImZsb29yXCIsXG4gIFwibG9nXCIsXG4gIFwicm91bmRcIixcbiAgXCJzaW5cIixcbiAgXCJzcXJ0XCIsXG4gIFwidGFuXCJcbl1cbjsoZnVuY3Rpb24oKSB7XG4gIGZvcih2YXIgaT0wOyBpPG1hdGhfdW5hcnkubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgZiA9IG1hdGhfdW5hcnlbaV1cbiAgICBleHBvcnRzW2ZdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJlcVwiXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICAgICAgYXJnczogW1wiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6IFtcImFcIl0sIGJvZHk6XCJhPXRoaXNfZihhKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMixcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcImVxXCJcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgfVxufSkoKTtcblxudmFyIG1hdGhfY29tbSA9IFtcbiAgXCJtYXhcIixcbiAgXCJtaW5cIixcbiAgXCJhdGFuMlwiLFxuICBcInBvd1wiXG5dXG47KGZ1bmN0aW9uKCl7XG4gIGZvcih2YXIgaT0wOyBpPG1hdGhfY29tbS5sZW5ndGg7ICsraSkge1xuICAgIHZhciBmPSBtYXRoX2NvbW1baV1cbiAgICBleHBvcnRzW2ZdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLCBib2R5OlwiYT10aGlzX2YoYixjKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGZcbiAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcInNcIl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLCBib2R5OlwiYT10aGlzX2YoYixjKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJzXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wiZXFcIl0gPSBtYWtlT3AoeyBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihhLGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBydmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjb3VudDogMixcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wiZXFcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJzZXFcIl0gPSBtYWtlT3AoeyBhcmdzOltcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYSxiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgcnZhbHVlOnRydWUsXG4gICAgICAgICAgICAgICAgICBjb3VudDoyLFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJzZXFcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgfVxufSkoKTtcblxudmFyIG1hdGhfbm9uY29tbSA9IFtcbiAgXCJhdGFuMlwiLFxuICBcInBvd1wiXG5dXG47KGZ1bmN0aW9uKCl7XG4gIGZvcih2YXIgaT0wOyBpPG1hdGhfbm9uY29tbS5sZW5ndGg7ICsraSkge1xuICAgIHZhciBmPSBtYXRoX25vbmNvbW1baV1cbiAgICBleHBvcnRzW2YrXCJvcFwiXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwiY1wiXSwgYm9keTpcImE9dGhpc19mKGMsYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wib3BcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wib3BzXCJdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwiY1wiXSwgYm9keTpcImE9dGhpc19mKGMsYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wib3BzXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wib3BlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGIsYSlcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OiAyLFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJvcGVxXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wib3BzZXFcIl0gPSBtYWtlT3AoeyBhcmdzOltcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYixhKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgcnZhbHVlOnRydWUsXG4gICAgICAgICAgICAgICAgICBjb3VudDoyLFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJvcHNlcVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICB9XG59KSgpO1xuXG5leHBvcnRzLmFueSA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IEVtcHR5UHJvYyxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIGJvZHk6IFwiaWYoYSl7cmV0dXJuIHRydWV9XCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltdLCBib2R5OlwicmV0dXJuIGZhbHNlXCJ9LFxuICBmdW5jTmFtZTogXCJhbnlcIlxufSlcblxuZXhwb3J0cy5hbGwgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiBFbXB0eVByb2MsXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcInhcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBib2R5OiBcImlmKCF4KXtyZXR1cm4gZmFsc2V9XCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltdLCBib2R5OlwicmV0dXJuIHRydWVcIn0sXG4gIGZ1bmNOYW1lOiBcImFsbFwiXG59KVxuXG5leHBvcnRzLnN1bSA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgYm9keTogXCJ0aGlzX3MrPWFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcInN1bVwiXG59KVxuXG5leHBvcnRzLnByb2QgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MVwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIGJvZHk6IFwidGhpc19zKj1hXCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gdGhpc19zXCJ9LFxuICBmdW5jTmFtZTogXCJwcm9kXCJcbn0pXG5cbmV4cG9ydHMubm9ybTJzcXVhcmVkID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6Mn1dLCBib2R5OiBcInRoaXNfcys9YSphXCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gdGhpc19zXCJ9LFxuICBmdW5jTmFtZTogXCJub3JtMnNxdWFyZWRcIlxufSlcbiAgXG5leHBvcnRzLm5vcm0yID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6Mn1dLCBib2R5OiBcInRoaXNfcys9YSphXCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gTWF0aC5zcXJ0KHRoaXNfcylcIn0sXG4gIGZ1bmNOYW1lOiBcIm5vcm0yXCJcbn0pXG4gIFxuXG5leHBvcnRzLm5vcm1pbmYgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDo0fV0sIGJvZHk6XCJpZigtYT50aGlzX3Mpe3RoaXNfcz0tYX1lbHNlIGlmKGE+dGhpc19zKXt0aGlzX3M9YX1cIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcIm5vcm1pbmZcIlxufSlcblxuZXhwb3J0cy5ub3JtMSA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjN9XSwgYm9keTogXCJ0aGlzX3MrPWE8MD8tYTphXCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gdGhpc19zXCJ9LFxuICBmdW5jTmFtZTogXCJub3JtMVwiXG59KVxuXG5leHBvcnRzLnN1cCA9IGNvbXBpbGUoe1xuICBhcmdzOiBbIFwiYXJyYXlcIiBdLFxuICBwcmU6XG4gICB7IGJvZHk6IFwidGhpc19oPS1JbmZpbml0eVwiLFxuICAgICBhcmdzOiBbXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH0sXG4gIGJvZHk6XG4gICB7IGJvZHk6IFwiaWYoX2lubGluZV8xX2FyZzBfPnRoaXNfaCl0aGlzX2g9X2lubGluZV8xX2FyZzBfXCIsXG4gICAgIGFyZ3M6IFt7XCJuYW1lXCI6XCJfaW5saW5lXzFfYXJnMF9cIixcImx2YWx1ZVwiOmZhbHNlLFwicnZhbHVlXCI6dHJ1ZSxcImNvdW50XCI6Mn0gXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH0sXG4gIHBvc3Q6XG4gICB7IGJvZHk6IFwicmV0dXJuIHRoaXNfaFwiLFxuICAgICBhcmdzOiBbXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH1cbiB9KVxuXG5leHBvcnRzLmluZiA9IGNvbXBpbGUoe1xuICBhcmdzOiBbIFwiYXJyYXlcIiBdLFxuICBwcmU6XG4gICB7IGJvZHk6IFwidGhpc19oPUluZmluaXR5XCIsXG4gICAgIGFyZ3M6IFtdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfSxcbiAgYm9keTpcbiAgIHsgYm9keTogXCJpZihfaW5saW5lXzFfYXJnMF88dGhpc19oKXRoaXNfaD1faW5saW5lXzFfYXJnMF9cIixcbiAgICAgYXJnczogW3tcIm5hbWVcIjpcIl9pbmxpbmVfMV9hcmcwX1wiLFwibHZhbHVlXCI6ZmFsc2UsXCJydmFsdWVcIjp0cnVlLFwiY291bnRcIjoyfSBdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfSxcbiAgcG9zdDpcbiAgIHsgYm9keTogXCJyZXR1cm4gdGhpc19oXCIsXG4gICAgIGFyZ3M6IFtdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfVxuIH0pXG5cbmV4cG9ydHMuYXJnbWluID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiaW5kZXhcIixcImFycmF5XCIsXCJzaGFwZVwiXSxcbiAgcHJlOntcbiAgICBib2R5Olwie3RoaXNfdj1JbmZpbml0eTt0aGlzX2k9X2lubGluZV8wX2FyZzJfLnNsaWNlKDApfVwiLFxuICAgIGFyZ3M6W1xuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMF9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOmZhbHNlLGNvdW50OjB9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMV9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOmZhbHNlLGNvdW50OjB9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMl9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6MX1cbiAgICAgIF0sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCIsXCJ0aGlzX3ZcIl0sXG4gICAgbG9jYWxWYXJzOltdfSxcbiAgYm9keTp7XG4gICAgYm9keTpcIntpZihfaW5saW5lXzFfYXJnMV88dGhpc192KXt0aGlzX3Y9X2lubGluZV8xX2FyZzFfO2Zvcih2YXIgX2lubGluZV8xX2s9MDtfaW5saW5lXzFfazxfaW5saW5lXzFfYXJnMF8ubGVuZ3RoOysrX2lubGluZV8xX2spe3RoaXNfaVtfaW5saW5lXzFfa109X2lubGluZV8xX2FyZzBfW19pbmxpbmVfMV9rXX19fVwiLFxuICAgIGFyZ3M6W1xuICAgICAge25hbWU6XCJfaW5saW5lXzFfYXJnMF9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6Mn0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMV9hcmcxX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoyfV0sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCIsXCJ0aGlzX3ZcIl0sXG4gICAgbG9jYWxWYXJzOltcIl9pbmxpbmVfMV9rXCJdfSxcbiAgcG9zdDp7XG4gICAgYm9keTpcIntyZXR1cm4gdGhpc19pfVwiLFxuICAgIGFyZ3M6W10sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCJdLFxuICAgIGxvY2FsVmFyczpbXX1cbn0pXG5cbmV4cG9ydHMuYXJnbWF4ID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiaW5kZXhcIixcImFycmF5XCIsXCJzaGFwZVwiXSxcbiAgcHJlOntcbiAgICBib2R5Olwie3RoaXNfdj0tSW5maW5pdHk7dGhpc19pPV9pbmxpbmVfMF9hcmcyXy5zbGljZSgwKX1cIixcbiAgICBhcmdzOltcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzBfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTpmYWxzZSxjb3VudDowfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzFfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTpmYWxzZSxjb3VudDowfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzJfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjF9XG4gICAgICBdLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiLFwidGhpc192XCJdLFxuICAgIGxvY2FsVmFyczpbXX0sXG4gIGJvZHk6e1xuICAgIGJvZHk6XCJ7aWYoX2lubGluZV8xX2FyZzFfPnRoaXNfdil7dGhpc192PV9pbmxpbmVfMV9hcmcxXztmb3IodmFyIF9pbmxpbmVfMV9rPTA7X2lubGluZV8xX2s8X2lubGluZV8xX2FyZzBfLmxlbmd0aDsrK19pbmxpbmVfMV9rKXt0aGlzX2lbX2lubGluZV8xX2tdPV9pbmxpbmVfMV9hcmcwX1tfaW5saW5lXzFfa119fX1cIixcbiAgICBhcmdzOltcbiAgICAgIHtuYW1lOlwiX2lubGluZV8xX2FyZzBfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjJ9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzFfYXJnMV9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6Mn1dLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiLFwidGhpc192XCJdLFxuICAgIGxvY2FsVmFyczpbXCJfaW5saW5lXzFfa1wiXX0sXG4gIHBvc3Q6e1xuICAgIGJvZHk6XCJ7cmV0dXJuIHRoaXNfaX1cIixcbiAgICBhcmdzOltdLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiXSxcbiAgICBsb2NhbFZhcnM6W119XG59KSAgXG5cbmV4cG9ydHMucmFuZG9tID0gbWFrZU9wKHtcbiAgYXJnczogW1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5yYW5kb21cIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgYm9keToge2FyZ3M6IFtcImFcIl0sIGJvZHk6XCJhPXRoaXNfZigpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gIGZ1bmNOYW1lOiBcInJhbmRvbVwiXG59KVxuXG5leHBvcnRzLmFzc2lnbiA9IG1ha2VPcCh7XG4gIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIl0sIGJvZHk6XCJhPWJcIn0sXG4gIGZ1bmNOYW1lOiBcImFzc2lnblwiIH0pXG5cbmV4cG9ydHMuYXNzaWducyA9IG1ha2VPcCh7XG4gIGFyZ3M6W1wiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCJdLCBib2R5OlwiYT1iXCJ9LFxuICBmdW5jTmFtZTogXCJhc3NpZ25zXCIgfSlcblxuXG5leHBvcnRzLmVxdWFscyA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gIHByZTogRW1wdHlQcm9jLFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJ4XCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9LFxuICAgICAgICAgICAgICAge25hbWU6XCJ5XCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgXG4gICAgICAgIGJvZHk6IFwiaWYoeCE9PXkpe3JldHVybiBmYWxzZX1cIiwgXG4gICAgICAgIGxvY2FsVmFyczogW10sIFxuICAgICAgICB0aGlzVmFyczogW119LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXSwgYm9keTpcInJldHVybiB0cnVlXCJ9LFxuICBmdW5jTmFtZTogXCJlcXVhbHNcIlxufSlcblxuXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgY3JlYXRlVGh1bmsgPSByZXF1aXJlKFwiLi9saWIvdGh1bmsuanNcIilcblxuZnVuY3Rpb24gUHJvY2VkdXJlKCkge1xuICB0aGlzLmFyZ1R5cGVzID0gW11cbiAgdGhpcy5zaGltQXJncyA9IFtdXG4gIHRoaXMuYXJyYXlBcmdzID0gW11cbiAgdGhpcy5zY2FsYXJBcmdzID0gW11cbiAgdGhpcy5vZmZzZXRBcmdzID0gW11cbiAgdGhpcy5vZmZzZXRBcmdJbmRleCA9IFtdXG4gIHRoaXMuaW5kZXhBcmdzID0gW11cbiAgdGhpcy5zaGFwZUFyZ3MgPSBbXVxuICB0aGlzLmZ1bmNOYW1lID0gXCJcIlxuICB0aGlzLnByZSA9IG51bGxcbiAgdGhpcy5ib2R5ID0gbnVsbFxuICB0aGlzLnBvc3QgPSBudWxsXG4gIHRoaXMuZGVidWcgPSBmYWxzZVxufVxuXG5mdW5jdGlvbiBjb21waWxlQ3dpc2UodXNlcl9hcmdzKSB7XG4gIC8vQ3JlYXRlIHByb2NlZHVyZVxuICB2YXIgcHJvYyA9IG5ldyBQcm9jZWR1cmUoKVxuICBcbiAgLy9QYXJzZSBibG9ja3NcbiAgcHJvYy5wcmUgICAgPSB1c2VyX2FyZ3MucHJlXG4gIHByb2MuYm9keSAgID0gdXNlcl9hcmdzLmJvZHlcbiAgcHJvYy5wb3N0ICAgPSB1c2VyX2FyZ3MucG9zdFxuXG4gIC8vUGFyc2UgYXJndW1lbnRzXG4gIHZhciBwcm9jX2FyZ3MgPSB1c2VyX2FyZ3MuYXJncy5zbGljZSgwKVxuICBwcm9jLmFyZ1R5cGVzID0gcHJvY19hcmdzXG4gIGZvcih2YXIgaT0wOyBpPHByb2NfYXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBhcmdfdHlwZSA9IHByb2NfYXJnc1tpXVxuICAgIGlmKGFyZ190eXBlID09PSBcImFycmF5XCIpIHtcbiAgICAgIHByb2MuYXJyYXlBcmdzLnB1c2goaSlcbiAgICAgIHByb2Muc2hpbUFyZ3MucHVzaChcImFycmF5XCIgKyBpKVxuICAgICAgaWYoaSA8IHByb2MucHJlLmFyZ3MubGVuZ3RoICYmIHByb2MucHJlLmFyZ3NbaV0uY291bnQ+MCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcHJlKCkgYmxvY2sgbWF5IG5vdCByZWZlcmVuY2UgYXJyYXkgYXJnc1wiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MucG9zdC5hcmdzLmxlbmd0aCAmJiBwcm9jLnBvc3QuYXJnc1tpXS5jb3VudD4wKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwb3N0KCkgYmxvY2sgbWF5IG5vdCByZWZlcmVuY2UgYXJyYXkgYXJnc1wiKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihhcmdfdHlwZSA9PT0gXCJzY2FsYXJcIikge1xuICAgICAgcHJvYy5zY2FsYXJBcmdzLnB1c2goaSlcbiAgICAgIHByb2Muc2hpbUFyZ3MucHVzaChcInNjYWxhclwiICsgaSlcbiAgICB9IGVsc2UgaWYoYXJnX3R5cGUgPT09IFwiaW5kZXhcIikge1xuICAgICAgcHJvYy5pbmRleEFyZ3MucHVzaChpKVxuICAgICAgaWYoaSA8IHByb2MucHJlLmFyZ3MubGVuZ3RoICYmIHByb2MucHJlLmFyZ3NbaV0uY291bnQgPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwcmUoKSBibG9jayBtYXkgbm90IHJlZmVyZW5jZSBhcnJheSBpbmRleFwiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MuYm9keS5hcmdzLmxlbmd0aCAmJiBwcm9jLmJvZHkuYXJnc1tpXS5sdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IGJvZHkoKSBibG9jayBtYXkgbm90IHdyaXRlIHRvIGFycmF5IGluZGV4XCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5wb3N0LmFyZ3MubGVuZ3RoICYmIHByb2MucG9zdC5hcmdzW2ldLmNvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcG9zdCgpIGJsb2NrIG1heSBub3QgcmVmZXJlbmNlIGFycmF5IGluZGV4XCIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGFyZ190eXBlID09PSBcInNoYXBlXCIpIHtcbiAgICAgIHByb2Muc2hhcGVBcmdzLnB1c2goaSlcbiAgICAgIGlmKGkgPCBwcm9jLnByZS5hcmdzLmxlbmd0aCAmJiBwcm9jLnByZS5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcHJlKCkgYmxvY2sgbWF5IG5vdCB3cml0ZSB0byBhcnJheSBzaGFwZVwiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MuYm9keS5hcmdzLmxlbmd0aCAmJiBwcm9jLmJvZHkuYXJnc1tpXS5sdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IGJvZHkoKSBibG9jayBtYXkgbm90IHdyaXRlIHRvIGFycmF5IHNoYXBlXCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5wb3N0LmFyZ3MubGVuZ3RoICYmIHByb2MucG9zdC5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcG9zdCgpIGJsb2NrIG1heSBub3Qgd3JpdGUgdG8gYXJyYXkgc2hhcGVcIilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodHlwZW9mIGFyZ190eXBlID09PSBcIm9iamVjdFwiICYmIGFyZ190eXBlLm9mZnNldCkge1xuICAgICAgcHJvYy5hcmdUeXBlc1tpXSA9IFwib2Zmc2V0XCJcbiAgICAgIHByb2Mub2Zmc2V0QXJncy5wdXNoKHsgYXJyYXk6IGFyZ190eXBlLmFycmF5LCBvZmZzZXQ6YXJnX3R5cGUub2Zmc2V0IH0pXG4gICAgICBwcm9jLm9mZnNldEFyZ0luZGV4LnB1c2goaSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFVua25vd24gYXJndW1lbnQgdHlwZSBcIiArIHByb2NfYXJnc1tpXSlcbiAgICB9XG4gIH1cbiAgXG4gIC8vTWFrZSBzdXJlIGF0IGxlYXN0IG9uZSBhcnJheSBhcmd1bWVudCB3YXMgc3BlY2lmaWVkXG4gIGlmKHByb2MuYXJyYXlBcmdzLmxlbmd0aCA8PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IE5vIGFycmF5IGFyZ3VtZW50cyBzcGVjaWZpZWRcIilcbiAgfVxuICBcbiAgLy9NYWtlIHN1cmUgYXJndW1lbnRzIGFyZSBjb3JyZWN0XG4gIGlmKHByb2MucHJlLmFyZ3MubGVuZ3RoID4gcHJvY19hcmdzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBUb28gbWFueSBhcmd1bWVudHMgaW4gcHJlKCkgYmxvY2tcIilcbiAgfVxuICBpZihwcm9jLmJvZHkuYXJncy5sZW5ndGggPiBwcm9jX2FyZ3MubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFRvbyBtYW55IGFyZ3VtZW50cyBpbiBib2R5KCkgYmxvY2tcIilcbiAgfVxuICBpZihwcm9jLnBvc3QuYXJncy5sZW5ndGggPiBwcm9jX2FyZ3MubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFRvbyBtYW55IGFyZ3VtZW50cyBpbiBwb3N0KCkgYmxvY2tcIilcbiAgfVxuXG4gIC8vQ2hlY2sgZGVidWcgZmxhZ1xuICBwcm9jLmRlYnVnID0gISF1c2VyX2FyZ3MucHJpbnRDb2RlIHx8ICEhdXNlcl9hcmdzLmRlYnVnXG4gIFxuICAvL1JldHJpZXZlIG5hbWVcbiAgcHJvYy5mdW5jTmFtZSA9IHVzZXJfYXJncy5mdW5jTmFtZSB8fCBcImN3aXNlXCJcbiAgXG4gIC8vUmVhZCBpbiBibG9jayBzaXplXG4gIHByb2MuYmxvY2tTaXplID0gdXNlcl9hcmdzLmJsb2NrU2l6ZSB8fCA2NFxuXG4gIHJldHVybiBjcmVhdGVUaHVuayhwcm9jKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGVDd2lzZVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHVuaXEgPSByZXF1aXJlKFwidW5pcVwiKVxuXG5mdW5jdGlvbiBpbm5lckZpbGwob3JkZXIsIHByb2MsIGJvZHkpIHtcbiAgdmFyIGRpbWVuc2lvbiA9IG9yZGVyLmxlbmd0aFxuICAgICwgbmFyZ3MgPSBwcm9jLmFycmF5QXJncy5sZW5ndGhcbiAgICAsIGhhc19pbmRleCA9IHByb2MuaW5kZXhBcmdzLmxlbmd0aD4wXG4gICAgLCBjb2RlID0gW11cbiAgICAsIHZhcnMgPSBbXVxuICAgICwgaWR4PTAsIHBpZHg9MCwgaSwgalxuICBmb3IoaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgdmFycy5wdXNoKFtcImlcIixpLFwiPTBcIl0uam9pbihcIlwiKSlcbiAgfVxuICAvL0NvbXB1dGUgc2NhbiBkZWx0YXNcbiAgZm9yKGo9MDsgajxuYXJnczsgKytqKSB7XG4gICAgZm9yKGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgcGlkeCA9IGlkeFxuICAgICAgaWR4ID0gb3JkZXJbaV1cbiAgICAgIGlmKGkgPT09IDApIHtcbiAgICAgICAgdmFycy5wdXNoKFtcImRcIixqLFwic1wiLGksXCI9dFwiLGosXCJwXCIsaWR4XS5qb2luKFwiXCIpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFycy5wdXNoKFtcImRcIixqLFwic1wiLGksXCI9KHRcIixqLFwicFwiLGlkeCxcIi1zXCIscGlkeCxcIip0XCIsaixcInBcIixwaWR4LFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb2RlLnB1c2goXCJ2YXIgXCIgKyB2YXJzLmpvaW4oXCIsXCIpKVxuICAvL1NjYW4gbG9vcFxuICBmb3IoaT1kaW1lbnNpb24tMTsgaT49MDsgLS1pKSB7XG4gICAgaWR4ID0gb3JkZXJbaV1cbiAgICBjb2RlLnB1c2goW1wiZm9yKGlcIixpLFwiPTA7aVwiLGksXCI8c1wiLGlkeCxcIjsrK2lcIixpLFwiKXtcIl0uam9pbihcIlwiKSlcbiAgfVxuICAvL1B1c2ggYm9keSBvZiBpbm5lciBsb29wXG4gIGNvZGUucHVzaChib2R5KVxuICAvL0FkdmFuY2Ugc2NhbiBwb2ludGVyc1xuICBmb3IoaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgcGlkeCA9IGlkeFxuICAgIGlkeCA9IG9yZGVyW2ldXG4gICAgZm9yKGo9MDsgajxuYXJnczsgKytqKSB7XG4gICAgICBjb2RlLnB1c2goW1wicFwiLGosXCIrPWRcIixqLFwic1wiLGldLmpvaW4oXCJcIikpXG4gICAgfVxuICAgIGlmKGhhc19pbmRleCkge1xuICAgICAgaWYoaSA+IDApIHtcbiAgICAgICAgY29kZS5wdXNoKFtcImluZGV4W1wiLHBpZHgsXCJdLT1zXCIscGlkeF0uam9pbihcIlwiKSlcbiAgICAgIH1cbiAgICAgIGNvZGUucHVzaChbXCIrK2luZGV4W1wiLGlkeCxcIl1cIl0uam9pbihcIlwiKSlcbiAgICB9XG4gICAgY29kZS5wdXNoKFwifVwiKVxuICB9XG4gIHJldHVybiBjb2RlLmpvaW4oXCJcXG5cIilcbn1cblxuZnVuY3Rpb24gb3V0ZXJGaWxsKG1hdGNoZWQsIG9yZGVyLCBwcm9jLCBib2R5KSB7XG4gIHZhciBkaW1lbnNpb24gPSBvcmRlci5sZW5ndGhcbiAgICAsIG5hcmdzID0gcHJvYy5hcnJheUFyZ3MubGVuZ3RoXG4gICAgLCBibG9ja1NpemUgPSBwcm9jLmJsb2NrU2l6ZVxuICAgICwgaGFzX2luZGV4ID0gcHJvYy5pbmRleEFyZ3MubGVuZ3RoID4gMFxuICAgICwgY29kZSA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPG5hcmdzOyArK2kpIHtcbiAgICBjb2RlLnB1c2goW1widmFyIG9mZnNldFwiLGksXCI9cFwiLGldLmpvaW4oXCJcIikpXG4gIH1cbiAgLy9HZW5lcmF0ZSBtYXRjaGVkIGxvb3BzXG4gIGZvcih2YXIgaT1tYXRjaGVkOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFtcImZvcih2YXIgalwiK2krXCI9U1NbXCIsIG9yZGVyW2ldLCBcIl18MDtqXCIsIGksIFwiPjA7KXtcIl0uam9pbihcIlwiKSlcbiAgICBjb2RlLnB1c2goW1wiaWYoalwiLGksXCI8XCIsYmxvY2tTaXplLFwiKXtcIl0uam9pbihcIlwiKSlcbiAgICBjb2RlLnB1c2goW1wic1wiLG9yZGVyW2ldLFwiPWpcIixpXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJqXCIsaSxcIj0wXCJdLmpvaW4oXCJcIikpXG4gICAgY29kZS5wdXNoKFtcIn1lbHNle3NcIixvcmRlcltpXSxcIj1cIixibG9ja1NpemVdLmpvaW4oXCJcIikpXG4gICAgY29kZS5wdXNoKFtcImpcIixpLFwiLT1cIixibG9ja1NpemUsXCJ9XCJdLmpvaW4oXCJcIikpXG4gICAgaWYoaGFzX2luZGV4KSB7XG4gICAgICBjb2RlLnB1c2goW1wiaW5kZXhbXCIsb3JkZXJbaV0sXCJdPWpcIixpXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgfVxuICBmb3IodmFyIGk9MDsgaTxuYXJnczsgKytpKSB7XG4gICAgdmFyIGluZGV4U3RyID0gW1wib2Zmc2V0XCIraV1cbiAgICBmb3IodmFyIGo9bWF0Y2hlZDsgajxkaW1lbnNpb247ICsraikge1xuICAgICAgaW5kZXhTdHIucHVzaChbXCJqXCIsaixcIip0XCIsaSxcInBcIixvcmRlcltqXV0uam9pbihcIlwiKSlcbiAgICB9XG4gICAgY29kZS5wdXNoKFtcInBcIixpLFwiPShcIixpbmRleFN0ci5qb2luKFwiK1wiKSxcIilcIl0uam9pbihcIlwiKSlcbiAgfVxuICBjb2RlLnB1c2goaW5uZXJGaWxsKG9yZGVyLCBwcm9jLCBib2R5KSlcbiAgZm9yKHZhciBpPW1hdGNoZWQ7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXCJ9XCIpXG4gIH1cbiAgcmV0dXJuIGNvZGUuam9pbihcIlxcblwiKVxufVxuXG4vL0NvdW50IHRoZSBudW1iZXIgb2YgY29tcGF0aWJsZSBpbm5lciBvcmRlcnNcbmZ1bmN0aW9uIGNvdW50TWF0Y2hlcyhvcmRlcnMpIHtcbiAgdmFyIG1hdGNoZWQgPSAwLCBkaW1lbnNpb24gPSBvcmRlcnNbMF0ubGVuZ3RoXG4gIHdoaWxlKG1hdGNoZWQgPCBkaW1lbnNpb24pIHtcbiAgICBmb3IodmFyIGo9MTsgajxvcmRlcnMubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmKG9yZGVyc1tqXVttYXRjaGVkXSAhPT0gb3JkZXJzWzBdW21hdGNoZWRdKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVkXG4gICAgICB9XG4gICAgfVxuICAgICsrbWF0Y2hlZFxuICB9XG4gIHJldHVybiBtYXRjaGVkXG59XG5cbi8vUHJvY2Vzc2VzIGEgYmxvY2sgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBkYXRhIHR5cGVzXG5mdW5jdGlvbiBwcm9jZXNzQmxvY2soYmxvY2ssIHByb2MsIGR0eXBlcykge1xuICB2YXIgY29kZSA9IGJsb2NrLmJvZHlcbiAgdmFyIHByZSA9IFtdXG4gIHZhciBwb3N0ID0gW11cbiAgZm9yKHZhciBpPTA7IGk8YmxvY2suYXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjYXJnID0gYmxvY2suYXJnc1tpXVxuICAgIGlmKGNhcmcuY291bnQgPD0gMCkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChjYXJnLm5hbWUsIFwiZ1wiKVxuICAgIHZhciBwdHJTdHIgPSBcIlwiXG4gICAgdmFyIGFyck51bSA9IHByb2MuYXJyYXlBcmdzLmluZGV4T2YoaSlcbiAgICBzd2l0Y2gocHJvYy5hcmdUeXBlc1tpXSkge1xuICAgICAgY2FzZSBcIm9mZnNldFwiOlxuICAgICAgICB2YXIgb2ZmQXJnSW5kZXggPSBwcm9jLm9mZnNldEFyZ0luZGV4LmluZGV4T2YoaSlcbiAgICAgICAgdmFyIG9mZkFyZyA9IHByb2Mub2Zmc2V0QXJnc1tvZmZBcmdJbmRleF1cbiAgICAgICAgYXJyTnVtID0gb2ZmQXJnLmFycmF5XG4gICAgICAgIHB0clN0ciA9IFwiK3FcIiArIG9mZkFyZ0luZGV4XG4gICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgcHRyU3RyID0gXCJwXCIgKyBhcnJOdW0gKyBwdHJTdHJcbiAgICAgICAgdmFyIGxvY2FsU3RyID0gXCJsXCIgKyBpXG4gICAgICAgIHZhciBhcnJTdHIgPSBcImFcIiArIGFyck51bVxuICAgICAgICBpZihjYXJnLmNvdW50ID09PSAxKSB7XG4gICAgICAgICAgaWYoZHR5cGVzW2Fyck51bV0gPT09IFwiZ2VuZXJpY1wiKSB7XG4gICAgICAgICAgICBpZihjYXJnLmx2YWx1ZSkge1xuICAgICAgICAgICAgICBwcmUucHVzaChbXCJ2YXIgXCIsIGxvY2FsU3RyLCBcIj1cIiwgYXJyU3RyLCBcIi5nZXQoXCIsIHB0clN0ciwgXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIGxvY2FsU3RyKVxuICAgICAgICAgICAgICBwb3N0LnB1c2goW2FyclN0ciwgXCIuc2V0KFwiLCBwdHJTdHIsIFwiLFwiLCBsb2NhbFN0cixcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFthcnJTdHIsIFwiLmdldChcIiwgcHRyU3RyLCBcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgW2FyclN0ciwgXCJbXCIsIHB0clN0ciwgXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYoZHR5cGVzW2Fyck51bV0gPT09IFwiZ2VuZXJpY1wiKSB7XG4gICAgICAgICAgcHJlLnB1c2goW1widmFyIFwiLCBsb2NhbFN0ciwgXCI9XCIsIGFyclN0ciwgXCIuZ2V0KFwiLCBwdHJTdHIsIFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIGxvY2FsU3RyKVxuICAgICAgICAgIGlmKGNhcmcubHZhbHVlKSB7XG4gICAgICAgICAgICBwb3N0LnB1c2goW2FyclN0ciwgXCIuc2V0KFwiLCBwdHJTdHIsIFwiLFwiLCBsb2NhbFN0cixcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJlLnB1c2goW1widmFyIFwiLCBsb2NhbFN0ciwgXCI9XCIsIGFyclN0ciwgXCJbXCIsIHB0clN0ciwgXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgbG9jYWxTdHIpXG4gICAgICAgICAgaWYoY2FyZy5sdmFsdWUpIHtcbiAgICAgICAgICAgIHBvc3QucHVzaChbYXJyU3RyLCBcIltcIiwgcHRyU3RyLCBcIl09XCIsIGxvY2FsU3RyXS5qb2luKFwiXCIpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJzY2FsYXJcIjpcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgXCJZXCIgKyBwcm9jLnNjYWxhckFyZ3MuaW5kZXhPZihpKSlcbiAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiaW5kZXhcIjpcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgXCJpbmRleFwiKVxuICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJzaGFwZVwiOlxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBcInNoYXBlXCIpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gW3ByZS5qb2luKFwiXFxuXCIpLCBjb2RlLCBwb3N0LmpvaW4oXCJcXG5cIildLmpvaW4oXCJcXG5cIikudHJpbSgpXG59XG5cbmZ1bmN0aW9uIHR5cGVTdW1tYXJ5KGR0eXBlcykge1xuICB2YXIgc3VtbWFyeSA9IG5ldyBBcnJheShkdHlwZXMubGVuZ3RoKVxuICB2YXIgYWxsRXF1YWwgPSB0cnVlXG4gIGZvcih2YXIgaT0wOyBpPGR0eXBlcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciB0ID0gZHR5cGVzW2ldXG4gICAgdmFyIGRpZ2l0cyA9IHQubWF0Y2goL1xcZCsvKVxuICAgIGlmKCFkaWdpdHMpIHtcbiAgICAgIGRpZ2l0cyA9IFwiXCJcbiAgICB9IGVsc2Uge1xuICAgICAgZGlnaXRzID0gZGlnaXRzWzBdXG4gICAgfVxuICAgIGlmKHQuY2hhckF0KDApID09PSAwKSB7XG4gICAgICBzdW1tYXJ5W2ldID0gXCJ1XCIgKyB0LmNoYXJBdCgxKSArIGRpZ2l0c1xuICAgIH0gZWxzZSB7XG4gICAgICBzdW1tYXJ5W2ldID0gdC5jaGFyQXQoMCkgKyBkaWdpdHNcbiAgICB9XG4gICAgaWYoaSA+IDApIHtcbiAgICAgIGFsbEVxdWFsID0gYWxsRXF1YWwgJiYgc3VtbWFyeVtpXSA9PT0gc3VtbWFyeVtpLTFdXG4gICAgfVxuICB9XG4gIGlmKGFsbEVxdWFsKSB7XG4gICAgcmV0dXJuIHN1bW1hcnlbMF1cbiAgfVxuICByZXR1cm4gc3VtbWFyeS5qb2luKFwiXCIpXG59XG5cbi8vR2VuZXJhdGVzIGEgY3dpc2Ugb3BlcmF0b3JcbmZ1bmN0aW9uIGdlbmVyYXRlQ1dpc2VPcChwcm9jLCB0eXBlc2lnKSB7XG5cbiAgLy9Db21wdXRlIGRpbWVuc2lvblxuICB2YXIgZGltZW5zaW9uID0gdHlwZXNpZ1sxXS5sZW5ndGh8MFxuICB2YXIgb3JkZXJzID0gbmV3IEFycmF5KHByb2MuYXJyYXlBcmdzLmxlbmd0aClcbiAgdmFyIGR0eXBlcyA9IG5ldyBBcnJheShwcm9jLmFycmF5QXJncy5sZW5ndGgpXG5cbiAgLy9GaXJzdCBjcmVhdGUgYXJndW1lbnRzIGZvciBwcm9jZWR1cmVcbiAgdmFyIGFyZ2xpc3QgPSBbXCJTU1wiXVxuICB2YXIgY29kZSA9IFtcIid1c2Ugc3RyaWN0J1wiXVxuICB2YXIgdmFycyA9IFtdXG4gIFxuICBmb3IodmFyIGo9MDsgajxkaW1lbnNpb247ICsraikge1xuICAgIHZhcnMucHVzaChbXCJzXCIsIGosIFwiPVNTW1wiLCBqLCBcIl1cIl0uam9pbihcIlwiKSlcbiAgfVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLmFycmF5QXJncy5sZW5ndGg7ICsraSkge1xuICAgIGFyZ2xpc3QucHVzaChcImFcIitpKVxuICAgIGFyZ2xpc3QucHVzaChcInRcIitpKVxuICAgIGFyZ2xpc3QucHVzaChcInBcIitpKVxuICAgIGR0eXBlc1tpXSA9IHR5cGVzaWdbMippXVxuICAgIG9yZGVyc1tpXSA9IHR5cGVzaWdbMippKzFdXG4gICAgXG4gICAgZm9yKHZhciBqPTA7IGo8ZGltZW5zaW9uOyArK2opIHtcbiAgICAgIHZhcnMucHVzaChbXCJ0XCIsaSxcInBcIixqLFwiPXRcIixpLFwiW1wiLGosXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgfVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2Muc2NhbGFyQXJncy5sZW5ndGg7ICsraSkge1xuICAgIGFyZ2xpc3QucHVzaChcIllcIiArIGkpXG4gIH1cbiAgaWYocHJvYy5zaGFwZUFyZ3MubGVuZ3RoID4gMCkge1xuICAgIHZhcnMucHVzaChcInNoYXBlPVNTLnNsaWNlKDApXCIpXG4gIH1cbiAgaWYocHJvYy5pbmRleEFyZ3MubGVuZ3RoID4gMCkge1xuICAgIHZhciB6ZXJvcyA9IG5ldyBBcnJheShkaW1lbnNpb24pXG4gICAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICAgIHplcm9zW2ldID0gXCIwXCJcbiAgICB9XG4gICAgdmFycy5wdXNoKFtcImluZGV4PVtcIiwgemVyb3Muam9pbihcIixcIiksIFwiXVwiXS5qb2luKFwiXCIpKVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2Mub2Zmc2V0QXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBvZmZfYXJnID0gcHJvYy5vZmZzZXRBcmdzW2ldXG4gICAgdmFyIGluaXRfc3RyaW5nID0gW11cbiAgICBmb3IodmFyIGo9MDsgajxvZmZfYXJnLm9mZnNldC5sZW5ndGg7ICsraikge1xuICAgICAgaWYob2ZmX2FyZy5vZmZzZXRbal0gPT09IDApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSBpZihvZmZfYXJnLm9mZnNldFtqXSA9PT0gMSkge1xuICAgICAgICBpbml0X3N0cmluZy5wdXNoKFtcInRcIiwgb2ZmX2FyZy5hcnJheSwgXCJwXCIsIGpdLmpvaW4oXCJcIikpICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0X3N0cmluZy5wdXNoKFtvZmZfYXJnLm9mZnNldFtqXSwgXCIqdFwiLCBvZmZfYXJnLmFycmF5LCBcInBcIiwgal0uam9pbihcIlwiKSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoaW5pdF9zdHJpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXJzLnB1c2goXCJxXCIgKyBpICsgXCI9MFwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXJzLnB1c2goW1wicVwiLCBpLCBcIj1cIiwgaW5pdF9zdHJpbmcuam9pbihcIitcIildLmpvaW4oXCJcIikpXG4gICAgfVxuICB9XG5cbiAgLy9QcmVwYXJlIHRoaXMgdmFyaWFibGVzXG4gIHZhciB0aGlzVmFycyA9IHVuaXEoW10uY29uY2F0KHByb2MucHJlLnRoaXNWYXJzKVxuICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQocHJvYy5ib2R5LnRoaXNWYXJzKVxuICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQocHJvYy5wb3N0LnRoaXNWYXJzKSlcbiAgdmFycyA9IHZhcnMuY29uY2F0KHRoaXNWYXJzKVxuICBjb2RlLnB1c2goXCJ2YXIgXCIgKyB2YXJzLmpvaW4oXCIsXCIpKVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLmFycmF5QXJncy5sZW5ndGg7ICsraSkge1xuICAgIGNvZGUucHVzaChcInBcIitpK1wifD0wXCIpXG4gIH1cbiAgXG4gIC8vSW5saW5lIHByZWx1ZGVcbiAgaWYocHJvYy5wcmUuYm9keS5sZW5ndGggPiAzKSB7XG4gICAgY29kZS5wdXNoKHByb2Nlc3NCbG9jayhwcm9jLnByZSwgcHJvYywgZHR5cGVzKSlcbiAgfVxuXG4gIC8vUHJvY2VzcyBib2R5XG4gIHZhciBib2R5ID0gcHJvY2Vzc0Jsb2NrKHByb2MuYm9keSwgcHJvYywgZHR5cGVzKVxuICB2YXIgbWF0Y2hlZCA9IGNvdW50TWF0Y2hlcyhvcmRlcnMpXG4gIGlmKG1hdGNoZWQgPCBkaW1lbnNpb24pIHtcbiAgICBjb2RlLnB1c2gob3V0ZXJGaWxsKG1hdGNoZWQsIG9yZGVyc1swXSwgcHJvYywgYm9keSkpXG4gIH0gZWxzZSB7XG4gICAgY29kZS5wdXNoKGlubmVyRmlsbChvcmRlcnNbMF0sIHByb2MsIGJvZHkpKVxuICB9XG5cbiAgLy9JbmxpbmUgZXBpbG9nXG4gIGlmKHByb2MucG9zdC5ib2R5Lmxlbmd0aCA+IDMpIHtcbiAgICBjb2RlLnB1c2gocHJvY2Vzc0Jsb2NrKHByb2MucG9zdCwgcHJvYywgZHR5cGVzKSlcbiAgfVxuICBcbiAgaWYocHJvYy5kZWJ1Zykge1xuICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIGN3aXNlIHJvdXRpbmUgZm9yIFwiLCB0eXBlc2lnLCBcIjpcXG5cXG5cIiwgY29kZS5qb2luKFwiXFxuXCIpKVxuICB9XG4gIFxuICB2YXIgbG9vcE5hbWUgPSBbKHByb2MuZnVuY05hbWV8fFwidW5uYW1lZFwiKSwgXCJfY3dpc2VfbG9vcF9cIiwgb3JkZXJzWzBdLmpvaW4oXCJzXCIpLFwibVwiLG1hdGNoZWQsdHlwZVN1bW1hcnkoZHR5cGVzKV0uam9pbihcIlwiKVxuICB2YXIgZiA9IG5ldyBGdW5jdGlvbihbXCJmdW5jdGlvbiBcIixsb29wTmFtZSxcIihcIiwgYXJnbGlzdC5qb2luKFwiLFwiKSxcIil7XCIsIGNvZGUuam9pbihcIlxcblwiKSxcIn0gcmV0dXJuIFwiLCBsb29wTmFtZV0uam9pbihcIlwiKSlcbiAgcmV0dXJuIGYoKVxufVxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZUNXaXNlT3AiLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgY29tcGlsZSA9IHJlcXVpcmUoXCIuL2NvbXBpbGUuanNcIilcblxuZnVuY3Rpb24gY3JlYXRlVGh1bmsocHJvYykge1xuICB2YXIgY29kZSA9IFtcIid1c2Ugc3RyaWN0J1wiLCBcInZhciBDQUNIRUQ9e31cIl1cbiAgdmFyIHZhcnMgPSBbXVxuICB2YXIgdGh1bmtOYW1lID0gcHJvYy5mdW5jTmFtZSArIFwiX2N3aXNlX3RodW5rXCJcbiAgXG4gIC8vQnVpbGQgdGh1bmtcbiAgY29kZS5wdXNoKFtcInJldHVybiBmdW5jdGlvbiBcIiwgdGh1bmtOYW1lLCBcIihcIiwgcHJvYy5zaGltQXJncy5qb2luKFwiLFwiKSwgXCIpe1wiXS5qb2luKFwiXCIpKVxuICB2YXIgdHlwZXNpZyA9IFtdXG4gIHZhciBzdHJpbmdfdHlwZXNpZyA9IFtdXG4gIHZhciBwcm9jX2FyZ3MgPSBbW1wiYXJyYXlcIixwcm9jLmFycmF5QXJnc1swXSxcIi5zaGFwZVwiXS5qb2luKFwiXCIpXVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLmFycmF5QXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBqID0gcHJvYy5hcnJheUFyZ3NbaV1cbiAgICB2YXJzLnB1c2goW1widFwiLCBqLCBcIj1hcnJheVwiLCBqLCBcIi5kdHlwZSxcIixcbiAgICAgICAgICAgICAgIFwiclwiLCBqLCBcIj1hcnJheVwiLCBqLCBcIi5vcmRlclwiXS5qb2luKFwiXCIpKVxuICAgIHR5cGVzaWcucHVzaChcInRcIiArIGopXG4gICAgdHlwZXNpZy5wdXNoKFwiclwiICsgailcbiAgICBzdHJpbmdfdHlwZXNpZy5wdXNoKFwidFwiK2opXG4gICAgc3RyaW5nX3R5cGVzaWcucHVzaChcInJcIitqK1wiLmpvaW4oKVwiKVxuICAgIHByb2NfYXJncy5wdXNoKFwiYXJyYXlcIiArIGogKyBcIi5kYXRhXCIpXG4gICAgcHJvY19hcmdzLnB1c2goXCJhcnJheVwiICsgaiArIFwiLnN0cmlkZVwiKVxuICAgIHByb2NfYXJncy5wdXNoKFwiYXJyYXlcIiArIGogKyBcIi5vZmZzZXR8MFwiKVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2Muc2NhbGFyQXJncy5sZW5ndGg7ICsraSkge1xuICAgIHByb2NfYXJncy5wdXNoKFwic2NhbGFyXCIgKyBwcm9jLnNjYWxhckFyZ3NbaV0pXG4gIH1cbiAgdmFycy5wdXNoKFtcInR5cGU9W1wiLCBzdHJpbmdfdHlwZXNpZy5qb2luKFwiLFwiKSwgXCJdLmpvaW4oKVwiXS5qb2luKFwiXCIpKVxuICB2YXJzLnB1c2goXCJwcm9jPUNBQ0hFRFt0eXBlXVwiKVxuICBjb2RlLnB1c2goXCJ2YXIgXCIgKyB2YXJzLmpvaW4oXCIsXCIpKVxuICBcbiAgY29kZS5wdXNoKFtcImlmKCFwcm9jKXtcIixcbiAgICAgICAgICAgICBcIkNBQ0hFRFt0eXBlXT1wcm9jPWNvbXBpbGUoW1wiLCB0eXBlc2lnLmpvaW4oXCIsXCIpLCBcIl0pfVwiLFxuICAgICAgICAgICAgIFwicmV0dXJuIHByb2MoXCIsIHByb2NfYXJncy5qb2luKFwiLFwiKSwgXCIpfVwiXS5qb2luKFwiXCIpKVxuXG4gIGlmKHByb2MuZGVidWcpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRlZCB0aHVuazpcIiwgY29kZS5qb2luKFwiXFxuXCIpKVxuICB9XG4gIFxuICAvL0NvbXBpbGUgdGh1bmtcbiAgdmFyIHRodW5rID0gbmV3IEZ1bmN0aW9uKFwiY29tcGlsZVwiLCBjb2RlLmpvaW4oXCJcXG5cIikpXG4gIHJldHVybiB0aHVuayhjb21waWxlLmJpbmQodW5kZWZpbmVkLCBwcm9jKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVUaHVua1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gdW5pcXVlX3ByZWQobGlzdCwgY29tcGFyZSkge1xuICB2YXIgcHRyID0gMVxuICAgICwgbGVuID0gbGlzdC5sZW5ndGhcbiAgICAsIGE9bGlzdFswXSwgYj1saXN0WzBdXG4gIGZvcih2YXIgaT0xOyBpPGxlbjsgKytpKSB7XG4gICAgYiA9IGFcbiAgICBhID0gbGlzdFtpXVxuICAgIGlmKGNvbXBhcmUoYSwgYikpIHtcbiAgICAgIGlmKGkgPT09IHB0cikge1xuICAgICAgICBwdHIrK1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgbGlzdFtwdHIrK10gPSBhXG4gICAgfVxuICB9XG4gIGxpc3QubGVuZ3RoID0gcHRyXG4gIHJldHVybiBsaXN0XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZV9lcShsaXN0KSB7XG4gIHZhciBwdHIgPSAxXG4gICAgLCBsZW4gPSBsaXN0Lmxlbmd0aFxuICAgICwgYT1saXN0WzBdLCBiID0gbGlzdFswXVxuICBmb3IodmFyIGk9MTsgaTxsZW47ICsraSwgYj1hKSB7XG4gICAgYiA9IGFcbiAgICBhID0gbGlzdFtpXVxuICAgIGlmKGEgIT09IGIpIHtcbiAgICAgIGlmKGkgPT09IHB0cikge1xuICAgICAgICBwdHIrK1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgbGlzdFtwdHIrK10gPSBhXG4gICAgfVxuICB9XG4gIGxpc3QubGVuZ3RoID0gcHRyXG4gIHJldHVybiBsaXN0XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZShsaXN0LCBjb21wYXJlLCBzb3J0ZWQpIHtcbiAgaWYobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbGlzdFxuICB9XG4gIGlmKGNvbXBhcmUpIHtcbiAgICBpZighc29ydGVkKSB7XG4gICAgICBsaXN0LnNvcnQoY29tcGFyZSlcbiAgICB9XG4gICAgcmV0dXJuIHVuaXF1ZV9wcmVkKGxpc3QsIGNvbXBhcmUpXG4gIH1cbiAgaWYoIXNvcnRlZCkge1xuICAgIGxpc3Quc29ydCgpXG4gIH1cbiAgcmV0dXJuIHVuaXF1ZV9lcShsaXN0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXF1ZVxuIiwiLyoqXG4gKiBCaXQgdHdpZGRsaW5nIGhhY2tzIGZvciBKYXZhU2NyaXB0LlxuICpcbiAqIEF1dGhvcjogTWlrb2xhIEx5c2Vua29cbiAqXG4gKiBQb3J0ZWQgZnJvbSBTdGFuZm9yZCBiaXQgdHdpZGRsaW5nIGhhY2sgbGlicmFyeTpcbiAqICAgIGh0dHA6Ly9ncmFwaGljcy5zdGFuZm9yZC5lZHUvfnNlYW5kZXIvYml0aGFja3MuaHRtbFxuICovXG5cblwidXNlIHN0cmljdFwiOyBcInVzZSByZXN0cmljdFwiO1xuXG4vL051bWJlciBvZiBiaXRzIGluIGFuIGludGVnZXJcbnZhciBJTlRfQklUUyA9IDMyO1xuXG4vL0NvbnN0YW50c1xuZXhwb3J0cy5JTlRfQklUUyAgPSBJTlRfQklUUztcbmV4cG9ydHMuSU5UX01BWCAgID0gIDB4N2ZmZmZmZmY7XG5leHBvcnRzLklOVF9NSU4gICA9IC0xPDwoSU5UX0JJVFMtMSk7XG5cbi8vUmV0dXJucyAtMSwgMCwgKzEgZGVwZW5kaW5nIG9uIHNpZ24gb2YgeFxuZXhwb3J0cy5zaWduID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gKHYgPiAwKSAtICh2IDwgMCk7XG59XG5cbi8vQ29tcHV0ZXMgYWJzb2x1dGUgdmFsdWUgb2YgaW50ZWdlclxuZXhwb3J0cy5hYnMgPSBmdW5jdGlvbih2KSB7XG4gIHZhciBtYXNrID0gdiA+PiAoSU5UX0JJVFMtMSk7XG4gIHJldHVybiAodiBeIG1hc2spIC0gbWFzaztcbn1cblxuLy9Db21wdXRlcyBtaW5pbXVtIG9mIGludGVnZXJzIHggYW5kIHlcbmV4cG9ydHMubWluID0gZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4geSBeICgoeCBeIHkpICYgLSh4IDwgeSkpO1xufVxuXG4vL0NvbXB1dGVzIG1heGltdW0gb2YgaW50ZWdlcnMgeCBhbmQgeVxuZXhwb3J0cy5tYXggPSBmdW5jdGlvbih4LCB5KSB7XG4gIHJldHVybiB4IF4gKCh4IF4geSkgJiAtKHggPCB5KSk7XG59XG5cbi8vQ2hlY2tzIGlmIGEgbnVtYmVyIGlzIGEgcG93ZXIgb2YgdHdvXG5leHBvcnRzLmlzUG93MiA9IGZ1bmN0aW9uKHYpIHtcbiAgcmV0dXJuICEodiAmICh2LTEpKSAmJiAoISF2KTtcbn1cblxuLy9Db21wdXRlcyBsb2cgYmFzZSAyIG9mIHZcbmV4cG9ydHMubG9nMiA9IGZ1bmN0aW9uKHYpIHtcbiAgdmFyIHIsIHNoaWZ0O1xuICByID0gICAgICh2ID4gMHhGRkZGKSA8PCA0OyB2ID4+Pj0gcjtcbiAgc2hpZnQgPSAodiA+IDB4RkYgICkgPDwgMzsgdiA+Pj49IHNoaWZ0OyByIHw9IHNoaWZ0O1xuICBzaGlmdCA9ICh2ID4gMHhGICAgKSA8PCAyOyB2ID4+Pj0gc2hpZnQ7IHIgfD0gc2hpZnQ7XG4gIHNoaWZ0ID0gKHYgPiAweDMgICApIDw8IDE7IHYgPj4+PSBzaGlmdDsgciB8PSBzaGlmdDtcbiAgcmV0dXJuIHIgfCAodiA+PiAxKTtcbn1cblxuLy9Db21wdXRlcyBsb2cgYmFzZSAxMCBvZiB2XG5leHBvcnRzLmxvZzEwID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gICh2ID49IDEwMDAwMDAwMDApID8gOSA6ICh2ID49IDEwMDAwMDAwMCkgPyA4IDogKHYgPj0gMTAwMDAwMDApID8gNyA6XG4gICAgICAgICAgKHYgPj0gMTAwMDAwMCkgPyA2IDogKHYgPj0gMTAwMDAwKSA/IDUgOiAodiA+PSAxMDAwMCkgPyA0IDpcbiAgICAgICAgICAodiA+PSAxMDAwKSA/IDMgOiAodiA+PSAxMDApID8gMiA6ICh2ID49IDEwKSA/IDEgOiAwO1xufVxuXG4vL0NvdW50cyBudW1iZXIgb2YgYml0c1xuZXhwb3J0cy5wb3BDb3VudCA9IGZ1bmN0aW9uKHYpIHtcbiAgdiA9IHYgLSAoKHYgPj4+IDEpICYgMHg1NTU1NTU1NSk7XG4gIHYgPSAodiAmIDB4MzMzMzMzMzMpICsgKCh2ID4+PiAyKSAmIDB4MzMzMzMzMzMpO1xuICByZXR1cm4gKCh2ICsgKHYgPj4+IDQpICYgMHhGMEYwRjBGKSAqIDB4MTAxMDEwMSkgPj4+IDI0O1xufVxuXG4vL0NvdW50cyBudW1iZXIgb2YgdHJhaWxpbmcgemVyb3NcbmZ1bmN0aW9uIGNvdW50VHJhaWxpbmdaZXJvcyh2KSB7XG4gIHZhciBjID0gMzI7XG4gIHYgJj0gLXY7XG4gIGlmICh2KSBjLS07XG4gIGlmICh2ICYgMHgwMDAwRkZGRikgYyAtPSAxNjtcbiAgaWYgKHYgJiAweDAwRkYwMEZGKSBjIC09IDg7XG4gIGlmICh2ICYgMHgwRjBGMEYwRikgYyAtPSA0O1xuICBpZiAodiAmIDB4MzMzMzMzMzMpIGMgLT0gMjtcbiAgaWYgKHYgJiAweDU1NTU1NTU1KSBjIC09IDE7XG4gIHJldHVybiBjO1xufVxuZXhwb3J0cy5jb3VudFRyYWlsaW5nWmVyb3MgPSBjb3VudFRyYWlsaW5nWmVyb3M7XG5cbi8vUm91bmRzIHRvIG5leHQgcG93ZXIgb2YgMlxuZXhwb3J0cy5uZXh0UG93MiA9IGZ1bmN0aW9uKHYpIHtcbiAgdiArPSB2ID09PSAwO1xuICAtLXY7XG4gIHYgfD0gdiA+Pj4gMTtcbiAgdiB8PSB2ID4+PiAyO1xuICB2IHw9IHYgPj4+IDQ7XG4gIHYgfD0gdiA+Pj4gODtcbiAgdiB8PSB2ID4+PiAxNjtcbiAgcmV0dXJuIHYgKyAxO1xufVxuXG4vL1JvdW5kcyBkb3duIHRvIHByZXZpb3VzIHBvd2VyIG9mIDJcbmV4cG9ydHMucHJldlBvdzIgPSBmdW5jdGlvbih2KSB7XG4gIHYgfD0gdiA+Pj4gMTtcbiAgdiB8PSB2ID4+PiAyO1xuICB2IHw9IHYgPj4+IDQ7XG4gIHYgfD0gdiA+Pj4gODtcbiAgdiB8PSB2ID4+PiAxNjtcbiAgcmV0dXJuIHYgLSAodj4+PjEpO1xufVxuXG4vL0NvbXB1dGVzIHBhcml0eSBvZiB3b3JkXG5leHBvcnRzLnBhcml0eSA9IGZ1bmN0aW9uKHYpIHtcbiAgdiBePSB2ID4+PiAxNjtcbiAgdiBePSB2ID4+PiA4O1xuICB2IF49IHYgPj4+IDQ7XG4gIHYgJj0gMHhmO1xuICByZXR1cm4gKDB4Njk5NiA+Pj4gdikgJiAxO1xufVxuXG52YXIgUkVWRVJTRV9UQUJMRSA9IG5ldyBBcnJheSgyNTYpO1xuXG4oZnVuY3Rpb24odGFiKSB7XG4gIGZvcih2YXIgaT0wOyBpPDI1NjsgKytpKSB7XG4gICAgdmFyIHYgPSBpLCByID0gaSwgcyA9IDc7XG4gICAgZm9yICh2ID4+Pj0gMTsgdjsgdiA+Pj49IDEpIHtcbiAgICAgIHIgPDw9IDE7XG4gICAgICByIHw9IHYgJiAxO1xuICAgICAgLS1zO1xuICAgIH1cbiAgICB0YWJbaV0gPSAociA8PCBzKSAmIDB4ZmY7XG4gIH1cbn0pKFJFVkVSU0VfVEFCTEUpO1xuXG4vL1JldmVyc2UgYml0cyBpbiBhIDMyIGJpdCB3b3JkXG5leHBvcnRzLnJldmVyc2UgPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiAgKFJFVkVSU0VfVEFCTEVbIHYgICAgICAgICAmIDB4ZmZdIDw8IDI0KSB8XG4gICAgICAgICAgKFJFVkVSU0VfVEFCTEVbKHYgPj4+IDgpICAmIDB4ZmZdIDw8IDE2KSB8XG4gICAgICAgICAgKFJFVkVSU0VfVEFCTEVbKHYgPj4+IDE2KSAmIDB4ZmZdIDw8IDgpICB8XG4gICAgICAgICAgIFJFVkVSU0VfVEFCTEVbKHYgPj4+IDI0KSAmIDB4ZmZdO1xufVxuXG4vL0ludGVybGVhdmUgYml0cyBvZiAyIGNvb3JkaW5hdGVzIHdpdGggMTYgYml0cy4gIFVzZWZ1bCBmb3IgZmFzdCBxdWFkdHJlZSBjb2Rlc1xuZXhwb3J0cy5pbnRlcmxlYXZlMiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgeCAmPSAweEZGRkY7XG4gIHggPSAoeCB8ICh4IDw8IDgpKSAmIDB4MDBGRjAwRkY7XG4gIHggPSAoeCB8ICh4IDw8IDQpKSAmIDB4MEYwRjBGMEY7XG4gIHggPSAoeCB8ICh4IDw8IDIpKSAmIDB4MzMzMzMzMzM7XG4gIHggPSAoeCB8ICh4IDw8IDEpKSAmIDB4NTU1NTU1NTU7XG5cbiAgeSAmPSAweEZGRkY7XG4gIHkgPSAoeSB8ICh5IDw8IDgpKSAmIDB4MDBGRjAwRkY7XG4gIHkgPSAoeSB8ICh5IDw8IDQpKSAmIDB4MEYwRjBGMEY7XG4gIHkgPSAoeSB8ICh5IDw8IDIpKSAmIDB4MzMzMzMzMzM7XG4gIHkgPSAoeSB8ICh5IDw8IDEpKSAmIDB4NTU1NTU1NTU7XG5cbiAgcmV0dXJuIHggfCAoeSA8PCAxKTtcbn1cblxuLy9FeHRyYWN0cyB0aGUgbnRoIGludGVybGVhdmVkIGNvbXBvbmVudFxuZXhwb3J0cy5kZWludGVybGVhdmUyID0gZnVuY3Rpb24odiwgbikge1xuICB2ID0gKHYgPj4+IG4pICYgMHg1NTU1NTU1NTtcbiAgdiA9ICh2IHwgKHYgPj4+IDEpKSAgJiAweDMzMzMzMzMzO1xuICB2ID0gKHYgfCAodiA+Pj4gMikpICAmIDB4MEYwRjBGMEY7XG4gIHYgPSAodiB8ICh2ID4+PiA0KSkgICYgMHgwMEZGMDBGRjtcbiAgdiA9ICh2IHwgKHYgPj4+IDE2KSkgJiAweDAwMEZGRkY7XG4gIHJldHVybiAodiA8PCAxNikgPj4gMTY7XG59XG5cblxuLy9JbnRlcmxlYXZlIGJpdHMgb2YgMyBjb29yZGluYXRlcywgZWFjaCB3aXRoIDEwIGJpdHMuICBVc2VmdWwgZm9yIGZhc3Qgb2N0cmVlIGNvZGVzXG5leHBvcnRzLmludGVybGVhdmUzID0gZnVuY3Rpb24oeCwgeSwgeikge1xuICB4ICY9IDB4M0ZGO1xuICB4ICA9ICh4IHwgKHg8PDE2KSkgJiA0Mjc4MTkwMzM1O1xuICB4ICA9ICh4IHwgKHg8PDgpKSAgJiAyNTE3MTk2OTU7XG4gIHggID0gKHggfCAoeDw8NCkpICAmIDMyNzIzNTYwMzU7XG4gIHggID0gKHggfCAoeDw8MikpICAmIDEyMjcxMzM1MTM7XG5cbiAgeSAmPSAweDNGRjtcbiAgeSAgPSAoeSB8ICh5PDwxNikpICYgNDI3ODE5MDMzNTtcbiAgeSAgPSAoeSB8ICh5PDw4KSkgICYgMjUxNzE5Njk1O1xuICB5ICA9ICh5IHwgKHk8PDQpKSAgJiAzMjcyMzU2MDM1O1xuICB5ICA9ICh5IHwgKHk8PDIpKSAgJiAxMjI3MTMzNTEzO1xuICB4IHw9ICh5IDw8IDEpO1xuICBcbiAgeiAmPSAweDNGRjtcbiAgeiAgPSAoeiB8ICh6PDwxNikpICYgNDI3ODE5MDMzNTtcbiAgeiAgPSAoeiB8ICh6PDw4KSkgICYgMjUxNzE5Njk1O1xuICB6ICA9ICh6IHwgKHo8PDQpKSAgJiAzMjcyMzU2MDM1O1xuICB6ICA9ICh6IHwgKHo8PDIpKSAgJiAxMjI3MTMzNTEzO1xuICBcbiAgcmV0dXJuIHggfCAoeiA8PCAyKTtcbn1cblxuLy9FeHRyYWN0cyBudGggaW50ZXJsZWF2ZWQgY29tcG9uZW50IG9mIGEgMy10dXBsZVxuZXhwb3J0cy5kZWludGVybGVhdmUzID0gZnVuY3Rpb24odiwgbikge1xuICB2ID0gKHYgPj4+IG4pICAgICAgICYgMTIyNzEzMzUxMztcbiAgdiA9ICh2IHwgKHY+Pj4yKSkgICAmIDMyNzIzNTYwMzU7XG4gIHYgPSAodiB8ICh2Pj4+NCkpICAgJiAyNTE3MTk2OTU7XG4gIHYgPSAodiB8ICh2Pj4+OCkpICAgJiA0Mjc4MTkwMzM1O1xuICB2ID0gKHYgfCAodj4+PjE2KSkgICYgMHgzRkY7XG4gIHJldHVybiAodjw8MjIpPj4yMjtcbn1cblxuLy9Db21wdXRlcyBuZXh0IGNvbWJpbmF0aW9uIGluIGNvbGV4aWNvZ3JhcGhpYyBvcmRlciAodGhpcyBpcyBtaXN0YWtlbmx5IGNhbGxlZCBuZXh0UGVybXV0YXRpb24gb24gdGhlIGJpdCB0d2lkZGxpbmcgaGFja3MgcGFnZSlcbmV4cG9ydHMubmV4dENvbWJpbmF0aW9uID0gZnVuY3Rpb24odikge1xuICB2YXIgdCA9IHYgfCAodiAtIDEpO1xuICByZXR1cm4gKHQgKyAxKSB8ICgoKH50ICYgLX50KSAtIDEpID4+PiAoY291bnRUcmFpbGluZ1plcm9zKHYpICsgMSkpO1xufVxuXG4iLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1iYXNpYy1zaGFkZXIvbm9kZV9tb2R1bGVzL2dsLXNoYWRlci1jb3JlL25vZGVfbW9kdWxlcy9kdXAvZHVwLmpzXCIpIiwiKGZ1bmN0aW9uIChnbG9iYWwsQnVmZmVyKXtcbid1c2Ugc3RyaWN0J1xuXG52YXIgYml0cyA9IHJlcXVpcmUoJ2JpdC10d2lkZGxlJylcbnZhciBkdXAgPSByZXF1aXJlKCdkdXAnKVxuXG4vL0xlZ2FjeSBwb29sIHN1cHBvcnRcbmlmKCFnbG9iYWwuX19UWVBFREFSUkFZX1BPT0wpIHtcbiAgZ2xvYmFsLl9fVFlQRURBUlJBWV9QT09MID0ge1xuICAgICAgVUlOVDggICA6IGR1cChbMzIsIDBdKVxuICAgICwgVUlOVDE2ICA6IGR1cChbMzIsIDBdKVxuICAgICwgVUlOVDMyICA6IGR1cChbMzIsIDBdKVxuICAgICwgSU5UOCAgICA6IGR1cChbMzIsIDBdKVxuICAgICwgSU5UMTYgICA6IGR1cChbMzIsIDBdKVxuICAgICwgSU5UMzIgICA6IGR1cChbMzIsIDBdKVxuICAgICwgRkxPQVQgICA6IGR1cChbMzIsIDBdKVxuICAgICwgRE9VQkxFICA6IGR1cChbMzIsIDBdKVxuICAgICwgREFUQSAgICA6IGR1cChbMzIsIDBdKVxuICAgICwgVUlOVDhDICA6IGR1cChbMzIsIDBdKVxuICAgICwgQlVGRkVSICA6IGR1cChbMzIsIDBdKVxuICB9XG59XG5cbnZhciBoYXNVaW50OEMgPSAodHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSAhPT0gJ3VuZGVmaW5lZCdcbnZhciBQT09MID0gZ2xvYmFsLl9fVFlQRURBUlJBWV9QT09MXG5cbi8vVXBncmFkZSBwb29sXG5pZighUE9PTC5VSU5UOEMpIHtcbiAgUE9PTC5VSU5UOEMgPSBkdXAoWzMyLCAwXSlcbn1cbmlmKCFQT09MLkJVRkZFUikge1xuICBQT09MLkJVRkZFUiA9IGR1cChbMzIsIDBdKVxufVxuXG4vL05ldyB0ZWNobmlxdWU6IE9ubHkgYWxsb2NhdGUgZnJvbSBBcnJheUJ1ZmZlclZpZXcgYW5kIEJ1ZmZlclxudmFyIERBVEEgICAgPSBQT09MLkRBVEFcbiAgLCBCVUZGRVIgID0gUE9PTC5CVUZGRVJcblxuZXhwb3J0cy5mcmVlID0gZnVuY3Rpb24gZnJlZShhcnJheSkge1xuICBpZihCdWZmZXIuaXNCdWZmZXIoYXJyYXkpKSB7XG4gICAgQlVGRkVSW2JpdHMubG9nMihhcnJheS5sZW5ndGgpXS5wdXNoKGFycmF5KVxuICB9IGVsc2Uge1xuICAgIGlmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnJheSkgIT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcbiAgICAgIGFycmF5ID0gYXJyYXkuYnVmZmVyXG4gICAgfVxuICAgIGlmKCFhcnJheSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBuID0gYXJyYXkubGVuZ3RoIHx8IGFycmF5LmJ5dGVMZW5ndGhcbiAgICB2YXIgbG9nX24gPSBiaXRzLmxvZzIobil8MFxuICAgIERBVEFbbG9nX25dLnB1c2goYXJyYXkpXG4gIH1cbn1cblxuZnVuY3Rpb24gZnJlZUFycmF5QnVmZmVyKGJ1ZmZlcikge1xuICBpZighYnVmZmVyKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG4gPSBidWZmZXIubGVuZ3RoIHx8IGJ1ZmZlci5ieXRlTGVuZ3RoXG4gIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKVxuICBEQVRBW2xvZ19uXS5wdXNoKGJ1ZmZlcilcbn1cblxuZnVuY3Rpb24gZnJlZVR5cGVkQXJyYXkoYXJyYXkpIHtcbiAgZnJlZUFycmF5QnVmZmVyKGFycmF5LmJ1ZmZlcilcbn1cblxuZXhwb3J0cy5mcmVlVWludDggPVxuZXhwb3J0cy5mcmVlVWludDE2ID1cbmV4cG9ydHMuZnJlZVVpbnQzMiA9XG5leHBvcnRzLmZyZWVJbnQ4ID1cbmV4cG9ydHMuZnJlZUludDE2ID1cbmV4cG9ydHMuZnJlZUludDMyID1cbmV4cG9ydHMuZnJlZUZsb2F0MzIgPSBcbmV4cG9ydHMuZnJlZUZsb2F0ID1cbmV4cG9ydHMuZnJlZUZsb2F0NjQgPSBcbmV4cG9ydHMuZnJlZURvdWJsZSA9IFxuZXhwb3J0cy5mcmVlVWludDhDbGFtcGVkID0gXG5leHBvcnRzLmZyZWVEYXRhVmlldyA9IGZyZWVUeXBlZEFycmF5XG5cbmV4cG9ydHMuZnJlZUFycmF5QnVmZmVyID0gZnJlZUFycmF5QnVmZmVyXG5cbmV4cG9ydHMuZnJlZUJ1ZmZlciA9IGZ1bmN0aW9uIGZyZWVCdWZmZXIoYXJyYXkpIHtcbiAgQlVGRkVSW2JpdHMubG9nMihhcnJheS5sZW5ndGgpXS5wdXNoKGFycmF5KVxufVxuXG5leHBvcnRzLm1hbGxvYyA9IGZ1bmN0aW9uIG1hbGxvYyhuLCBkdHlwZSkge1xuICBpZihkdHlwZSA9PT0gdW5kZWZpbmVkIHx8IGR0eXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgcmV0dXJuIG1hbGxvY0FycmF5QnVmZmVyKG4pXG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoKGR0eXBlKSB7XG4gICAgICBjYXNlICd1aW50OCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NVaW50OChuKVxuICAgICAgY2FzZSAndWludDE2JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY1VpbnQxNihuKVxuICAgICAgY2FzZSAndWludDMyJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY1VpbnQzMihuKVxuICAgICAgY2FzZSAnaW50OCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NJbnQ4KG4pXG4gICAgICBjYXNlICdpbnQxNic6XG4gICAgICAgIHJldHVybiBtYWxsb2NJbnQxNihuKVxuICAgICAgY2FzZSAnaW50MzInOlxuICAgICAgICByZXR1cm4gbWFsbG9jSW50MzIobilcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgICByZXR1cm4gbWFsbG9jRmxvYXQobilcbiAgICAgIGNhc2UgJ2RvdWJsZSc6XG4gICAgICBjYXNlICdmbG9hdDY0JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0RvdWJsZShuKVxuICAgICAgY2FzZSAndWludDhfY2xhbXBlZCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NVaW50OENsYW1wZWQobilcbiAgICAgIGNhc2UgJ2J1ZmZlcic6XG4gICAgICAgIHJldHVybiBtYWxsb2NCdWZmZXIobilcbiAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgY2FzZSAnZGF0YXZpZXcnOlxuICAgICAgICByZXR1cm4gbWFsbG9jRGF0YVZpZXcobilcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbWFsbG9jQXJyYXlCdWZmZXIobikge1xuICB2YXIgbiA9IGJpdHMubmV4dFBvdzIobilcbiAgdmFyIGxvZ19uID0gYml0cy5sb2cyKG4pXG4gIHZhciBkID0gREFUQVtsb2dfbl1cbiAgaWYoZC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGQucG9wKClcbiAgfVxuICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKG4pXG59XG5leHBvcnRzLm1hbGxvY0FycmF5QnVmZmVyID0gbWFsbG9jQXJyYXlCdWZmZXJcblxuZnVuY3Rpb24gbWFsbG9jVWludDgobikge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIobiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY1VpbnQ4ID0gbWFsbG9jVWludDhcblxuZnVuY3Rpb24gbWFsbG9jVWludDE2KG4pIHtcbiAgcmV0dXJuIG5ldyBVaW50MTZBcnJheShtYWxsb2NBcnJheUJ1ZmZlcigyKm4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NVaW50MTYgPSBtYWxsb2NVaW50MTZcblxuZnVuY3Rpb24gbWFsbG9jVWludDMyKG4pIHtcbiAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig0Km4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NVaW50MzIgPSBtYWxsb2NVaW50MzJcblxuZnVuY3Rpb24gbWFsbG9jSW50OChuKSB7XG4gIHJldHVybiBuZXcgSW50OEFycmF5KG1hbGxvY0FycmF5QnVmZmVyKG4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NJbnQ4ID0gbWFsbG9jSW50OFxuXG5mdW5jdGlvbiBtYWxsb2NJbnQxNihuKSB7XG4gIHJldHVybiBuZXcgSW50MTZBcnJheShtYWxsb2NBcnJheUJ1ZmZlcigyKm4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NJbnQxNiA9IG1hbGxvY0ludDE2XG5cbmZ1bmN0aW9uIG1hbGxvY0ludDMyKG4pIHtcbiAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDQqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0ludDMyID0gbWFsbG9jSW50MzJcblxuZnVuY3Rpb24gbWFsbG9jRmxvYXQobikge1xuICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig0Km4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NGbG9hdDMyID0gZXhwb3J0cy5tYWxsb2NGbG9hdCA9IG1hbGxvY0Zsb2F0XG5cbmZ1bmN0aW9uIG1hbGxvY0RvdWJsZShuKSB7XG4gIHJldHVybiBuZXcgRmxvYXQ2NEFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDgqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0Zsb2F0NjQgPSBleHBvcnRzLm1hbGxvY0RvdWJsZSA9IG1hbGxvY0RvdWJsZVxuXG5mdW5jdGlvbiBtYWxsb2NVaW50OENsYW1wZWQobikge1xuICBpZihoYXNVaW50OEMpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KG1hbGxvY0FycmF5QnVmZmVyKG4pLCAwLCBuKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBtYWxsb2NVaW50OChuKVxuICB9XG59XG5leHBvcnRzLm1hbGxvY1VpbnQ4Q2xhbXBlZCA9IG1hbGxvY1VpbnQ4Q2xhbXBlZFxuXG5mdW5jdGlvbiBtYWxsb2NEYXRhVmlldyhuKSB7XG4gIHJldHVybiBuZXcgRGF0YVZpZXcobWFsbG9jQXJyYXlCdWZmZXIobiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0RhdGFWaWV3ID0gbWFsbG9jRGF0YVZpZXdcblxuZnVuY3Rpb24gbWFsbG9jQnVmZmVyKG4pIHtcbiAgbiA9IGJpdHMubmV4dFBvdzIobilcbiAgdmFyIGxvZ19uID0gYml0cy5sb2cyKG4pXG4gIHZhciBjYWNoZSA9IEJVRkZFUltsb2dfbl1cbiAgaWYoY2FjaGUubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBjYWNoZS5wb3AoKVxuICB9XG4gIHJldHVybiBuZXcgQnVmZmVyKG4pXG59XG5leHBvcnRzLm1hbGxvY0J1ZmZlciA9IG1hbGxvY0J1ZmZlclxuXG5leHBvcnRzLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbiBjbGVhckNhY2hlKCkge1xuICBmb3IodmFyIGk9MDsgaTwzMjsgKytpKSB7XG4gICAgUE9PTC5VSU5UOFtpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5VSU5UMTZbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuVUlOVDMyW2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLklOVDhbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuSU5UMTZbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuSU5UMzJbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuRkxPQVRbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuRE9VQkxFW2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLlVJTlQ4Q1tpXS5sZW5ndGggPSAwXG4gICAgREFUQVtpXS5sZW5ndGggPSAwXG4gICAgQlVGRkVSW2ldLmxlbmd0aCA9IDBcbiAgfVxufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwiLyogKFRoZSBNSVQgTGljZW5zZSlcclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEyIEJyYW5kb24gQmVudmllIDxodHRwOi8vYmJlbnZpZS5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmRcclxuICogYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXHJcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiAqIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCB3aXRoIGFsbCBjb3BpZXMgb3JcclxuICogc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkdcclxuICogQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXHJcbiAqIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgIENMQUlNLFxyXG4gKiBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8vIE9yaWdpbmFsIFdlYWtNYXAgaW1wbGVtZW50YXRpb24gYnkgR296YWxhIEAgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTI2OTk5MVxyXG4vLyBVcGRhdGVkIGFuZCBidWdmaXhlZCBieSBSYXlub3MgQCBodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xNjM4MDU5XHJcbi8vIEV4cGFuZGVkIGJ5IEJlbnZpZSBAIGh0dHBzOi8vZ2l0aHViLmNvbS9CZW52aWUvaGFybW9ueS1jb2xsZWN0aW9uc1xyXG5cclxudm9pZCBmdW5jdGlvbihnbG9iYWwsIHVuZGVmaW5lZF8sIHVuZGVmaW5lZCl7XHJcbiAgdmFyIGdldFByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXHJcbiAgICAgIGRlZlByb3AgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LFxyXG4gICAgICB0b1NvdXJjZSA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyxcclxuICAgICAgY3JlYXRlICAgPSBPYmplY3QuY3JlYXRlLFxyXG4gICAgICBoYXNPd24gICA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXHJcbiAgICAgIGZ1bmNOYW1lID0gL15cXG4/ZnVuY3Rpb25cXHM/KFxcdyopP18/XFwoLztcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGRlZmluZShvYmplY3QsIGtleSwgdmFsdWUpe1xyXG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdmFsdWUgPSBrZXk7XHJcbiAgICAgIGtleSA9IG5hbWVPZih2YWx1ZSkucmVwbGFjZSgvXyQvLCAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVmUHJvcChvYmplY3QsIGtleSwgeyBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBuYW1lT2YoZnVuYyl7XHJcbiAgICByZXR1cm4gdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbidcclxuICAgICAgICAgID8gJycgOiAnbmFtZScgaW4gZnVuY1xyXG4gICAgICAgICAgPyBmdW5jLm5hbWUgOiB0b1NvdXJjZS5jYWxsKGZ1bmMpLm1hdGNoKGZ1bmNOYW1lKVsxXTtcclxuICB9XHJcblxyXG4gIC8vICMjIyMjIyMjIyMjI1xyXG4gIC8vICMjIyBEYXRhICMjI1xyXG4gIC8vICMjIyMjIyMjIyMjI1xyXG5cclxuICB2YXIgRGF0YSA9IChmdW5jdGlvbigpe1xyXG4gICAgdmFyIGRhdGFEZXNjID0geyB2YWx1ZTogeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9IH0sXHJcbiAgICAgICAgZGF0YWxvY2sgPSAncmV0dXJuIGZ1bmN0aW9uKGspe2lmKGs9PT1zKXJldHVybiBsfScsXHJcbiAgICAgICAgdWlkcyAgICAgPSBjcmVhdGUobnVsbCksXHJcblxyXG4gICAgICAgIGNyZWF0ZVVJRCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIga2V5ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XHJcbiAgICAgICAgICByZXR1cm4ga2V5IGluIHVpZHMgPyBjcmVhdGVVSUQoKSA6IHVpZHNba2V5XSA9IGtleTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnbG9iYWxJRCA9IGNyZWF0ZVVJRCgpLFxyXG5cclxuICAgICAgICBzdG9yYWdlID0gZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgIGlmIChoYXNPd24uY2FsbChvYmosIGdsb2JhbElEKSlcclxuICAgICAgICAgICAgcmV0dXJuIG9ialtnbG9iYWxJRF07XHJcblxyXG4gICAgICAgICAgaWYgKCFPYmplY3QuaXNFeHRlbnNpYmxlKG9iaikpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgbXVzdCBiZSBleHRlbnNpYmxlXCIpO1xyXG5cclxuICAgICAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZShudWxsKTtcclxuICAgICAgICAgIGRlZlByb3Aob2JqLCBnbG9iYWxJRCwgeyB2YWx1ZTogc3RvcmUgfSk7XHJcbiAgICAgICAgICByZXR1cm4gc3RvcmU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAvLyBjb21tb24gcGVyLW9iamVjdCBzdG9yYWdlIGFyZWEgbWFkZSB2aXNpYmxlIGJ5IHBhdGNoaW5nIGdldE93blByb3BlcnR5TmFtZXMnXHJcbiAgICBkZWZpbmUoT2JqZWN0LCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iail7XHJcbiAgICAgIHZhciBwcm9wcyA9IGdldFByb3BzKG9iaik7XHJcbiAgICAgIGlmIChoYXNPd24uY2FsbChvYmosIGdsb2JhbElEKSlcclxuICAgICAgICBwcm9wcy5zcGxpY2UocHJvcHMuaW5kZXhPZihnbG9iYWxJRCksIDEpO1xyXG4gICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBEYXRhKCl7XHJcbiAgICAgIHZhciBwdWlkID0gY3JlYXRlVUlEKCksXHJcbiAgICAgICAgICBzZWNyZXQgPSB7fTtcclxuXHJcbiAgICAgIHRoaXMudW5sb2NrID0gZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICB2YXIgc3RvcmUgPSBzdG9yYWdlKG9iaik7XHJcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKHN0b3JlLCBwdWlkKSlcclxuICAgICAgICAgIHJldHVybiBzdG9yZVtwdWlkXShzZWNyZXQpO1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IGNyZWF0ZShudWxsLCBkYXRhRGVzYyk7XHJcbiAgICAgICAgZGVmUHJvcChzdG9yZSwgcHVpZCwge1xyXG4gICAgICAgICAgdmFsdWU6IG5ldyBGdW5jdGlvbigncycsICdsJywgZGF0YWxvY2spKHNlY3JldCwgZGF0YSlcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZShEYXRhLnByb3RvdHlwZSwgZnVuY3Rpb24gZ2V0KG8peyByZXR1cm4gdGhpcy51bmxvY2sobykudmFsdWUgfSk7XHJcbiAgICBkZWZpbmUoRGF0YS5wcm90b3R5cGUsIGZ1bmN0aW9uIHNldChvLCB2KXsgdGhpcy51bmxvY2sobykudmFsdWUgPSB2IH0pO1xyXG5cclxuICAgIHJldHVybiBEYXRhO1xyXG4gIH0oKSk7XHJcblxyXG5cclxuICB2YXIgV00gPSAoZnVuY3Rpb24oZGF0YSl7XHJcbiAgICB2YXIgdmFsaWRhdGUgPSBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBpZiAoa2V5ID09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIGtleSAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBXZWFrTWFwIGtleVwiKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd3JhcCA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24sIHZhbHVlKXtcclxuICAgICAgdmFyIHN0b3JlID0gZGF0YS51bmxvY2soY29sbGVjdGlvbik7XHJcbiAgICAgIGlmIChzdG9yZS52YWx1ZSlcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGlzIGFscmVhZHkgYSBXZWFrTWFwXCIpO1xyXG4gICAgICBzdG9yZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB1bndyYXAgPSBmdW5jdGlvbihjb2xsZWN0aW9uKXtcclxuICAgICAgdmFyIHN0b3JhZ2UgPSBkYXRhLnVubG9jayhjb2xsZWN0aW9uKS52YWx1ZTtcclxuICAgICAgaWYgKCFzdG9yYWdlKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJXZWFrTWFwIGlzIG5vdCBnZW5lcmljXCIpO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHdlYWttYXAsIGl0ZXJhYmxlKXtcclxuICAgICAgaWYgKGl0ZXJhYmxlICE9PSBudWxsICYmIHR5cGVvZiBpdGVyYWJsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGl0ZXJhYmxlLmZvckVhY2ggPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBpdGVyYWJsZS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpe1xyXG4gICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBBcnJheSAmJiBpdGVtLmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgc2V0LmNhbGwod2Vha21hcCwgaXRlcmFibGVbaV1bMF0sIGl0ZXJhYmxlW2ldWzFdKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBXZWFrTWFwKGl0ZXJhYmxlKXtcclxuICAgICAgaWYgKHRoaXMgPT09IGdsb2JhbCB8fCB0aGlzID09IG51bGwgfHwgdGhpcyA9PT0gV2Vha01hcC5wcm90b3R5cGUpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBXZWFrTWFwKGl0ZXJhYmxlKTtcclxuXHJcbiAgICAgIHdyYXAodGhpcywgbmV3IERhdGEpO1xyXG4gICAgICBpbml0aWFsaXplKHRoaXMsIGl0ZXJhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXQoa2V5KXtcclxuICAgICAgdmFsaWRhdGUoa2V5KTtcclxuICAgICAgdmFyIHZhbHVlID0gdW53cmFwKHRoaXMpLmdldChrZXkpO1xyXG4gICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZF8gPyB1bmRlZmluZWQgOiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XHJcbiAgICAgIHZhbGlkYXRlKGtleSk7XHJcbiAgICAgIC8vIHN0b3JlIGEgdG9rZW4gZm9yIGV4cGxpY2l0IHVuZGVmaW5lZCBzbyB0aGF0IFwiaGFzXCIgd29ya3MgY29ycmVjdGx5XHJcbiAgICAgIHVud3JhcCh0aGlzKS5zZXQoa2V5LCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkXyA6IHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXMoa2V5KXtcclxuICAgICAgdmFsaWRhdGUoa2V5KTtcclxuICAgICAgcmV0dXJuIHVud3JhcCh0aGlzKS5nZXQoa2V5KSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZV8oa2V5KXtcclxuICAgICAgdmFsaWRhdGUoa2V5KTtcclxuICAgICAgdmFyIGRhdGEgPSB1bndyYXAodGhpcyksXHJcbiAgICAgICAgICBoYWQgPSBkYXRhLmdldChrZXkpICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgIGRhdGEuc2V0KGtleSwgdW5kZWZpbmVkKTtcclxuICAgICAgcmV0dXJuIGhhZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b1N0cmluZygpe1xyXG4gICAgICB1bndyYXAodGhpcyk7XHJcbiAgICAgIHJldHVybiAnW29iamVjdCBXZWFrTWFwXSc7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIHNyYyA9ICgncmV0dXJuICcrZGVsZXRlXykucmVwbGFjZSgnZV8nLCAnXFxcXHUwMDY1JyksXHJcbiAgICAgICAgICBkZWwgPSBuZXcgRnVuY3Rpb24oJ3Vud3JhcCcsICd2YWxpZGF0ZScsIHNyYykodW53cmFwLCB2YWxpZGF0ZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHZhciBkZWwgPSBkZWxldGVfO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzcmMgPSAoJycrT2JqZWN0KS5zcGxpdCgnT2JqZWN0Jyk7XHJcbiAgICB2YXIgc3RyaW5naWZpZXIgPSBmdW5jdGlvbiB0b1N0cmluZygpe1xyXG4gICAgICByZXR1cm4gc3JjWzBdICsgbmFtZU9mKHRoaXMpICsgc3JjWzFdO1xyXG4gICAgfTtcclxuXHJcbiAgICBkZWZpbmUoc3RyaW5naWZpZXIsIHN0cmluZ2lmaWVyKTtcclxuXHJcbiAgICB2YXIgcHJlcCA9IHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXlcclxuICAgICAgPyBmdW5jdGlvbihmKXsgZi5fX3Byb3RvX18gPSBzdHJpbmdpZmllciB9XHJcbiAgICAgIDogZnVuY3Rpb24oZil7IGRlZmluZShmLCBzdHJpbmdpZmllcikgfTtcclxuXHJcbiAgICBwcmVwKFdlYWtNYXApO1xyXG5cclxuICAgIFt0b1N0cmluZywgZ2V0LCBzZXQsIGhhcywgZGVsXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCl7XHJcbiAgICAgIGRlZmluZShXZWFrTWFwLnByb3RvdHlwZSwgbWV0aG9kKTtcclxuICAgICAgcHJlcChtZXRob2QpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFdlYWtNYXA7XHJcbiAgfShuZXcgRGF0YSkpO1xyXG5cclxuICB2YXIgZGVmYXVsdENyZWF0b3IgPSBPYmplY3QuY3JlYXRlXHJcbiAgICA/IGZ1bmN0aW9uKCl7IHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpIH1cclxuICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHt9IH07XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0b3JhZ2UoY3JlYXRvcil7XHJcbiAgICB2YXIgd2Vha21hcCA9IG5ldyBXTTtcclxuICAgIGNyZWF0b3IgfHwgKGNyZWF0b3IgPSBkZWZhdWx0Q3JlYXRvcik7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcmFnZShvYmplY3QsIHZhbHVlKXtcclxuICAgICAgaWYgKHZhbHVlIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICB3ZWFrbWFwLnNldChvYmplY3QsIHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZSA9IHdlYWttYXAuZ2V0KG9iamVjdCk7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHZhbHVlID0gY3JlYXRvcihvYmplY3QpO1xyXG4gICAgICAgICAgd2Vha21hcC5zZXQob2JqZWN0LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RvcmFnZTtcclxuICB9XHJcblxyXG5cclxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gV007XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGV4cG9ydHMuV2Vha01hcCA9IFdNO1xyXG4gIH0gZWxzZSBpZiAoISgnV2Vha01hcCcgaW4gZ2xvYmFsKSkge1xyXG4gICAgZ2xvYmFsLldlYWtNYXAgPSBXTTtcclxuICB9XHJcblxyXG4gIFdNLmNyZWF0ZVN0b3JhZ2UgPSBjcmVhdGVTdG9yYWdlO1xyXG4gIGlmIChnbG9iYWwuV2Vha01hcClcclxuICAgIGdsb2JhbC5XZWFrTWFwLmNyZWF0ZVN0b3JhZ2UgPSBjcmVhdGVTdG9yYWdlO1xyXG59KCgwLCBldmFsKSgndGhpcycpKTtcclxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3ZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnd2Vha21hcCcpIDogV2Vha01hcFxuXG52YXIgV2ViR0xFV1N0cnVjdCA9IG5ldyB3ZWFrTWFwKClcblxuZnVuY3Rpb24gYmFzZU5hbWUoZXh0X25hbWUpIHtcbiAgcmV0dXJuIGV4dF9uYW1lLnJlcGxhY2UoL15bQS1aXStfLywgJycpXG59XG5cbmZ1bmN0aW9uIGluaXRXZWJHTEVXKGdsKSB7XG4gIHZhciBzdHJ1Y3QgPSBXZWJHTEVXU3RydWN0LmdldChnbClcbiAgaWYoc3RydWN0KSB7XG4gICAgcmV0dXJuIHN0cnVjdFxuICB9XG4gIHZhciBleHRlbnNpb25zID0ge31cbiAgdmFyIHN1cHBvcnRlZCA9IGdsLmdldFN1cHBvcnRlZEV4dGVuc2lvbnMoKVxuICBmb3IodmFyIGk9MDsgaTxzdXBwb3J0ZWQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgZXh0TmFtZSA9IHN1cHBvcnRlZFtpXVxuXG4gICAgLy9Ta2lwIE1PWl8gZXh0ZW5zaW9uc1xuICAgIGlmKGV4dE5hbWUuaW5kZXhPZignTU9aXycpID09PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICB2YXIgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKHN1cHBvcnRlZFtpXSlcbiAgICBpZighZXh0KSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICBleHRlbnNpb25zW2V4dE5hbWVdID0gZXh0XG4gICAgICB2YXIgYmFzZSA9IGJhc2VOYW1lKGV4dE5hbWUpXG4gICAgICBpZihiYXNlID09PSBleHROYW1lKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBleHROYW1lID0gYmFzZVxuICAgIH1cbiAgfVxuICBXZWJHTEVXU3RydWN0LnNldChnbCwgZXh0ZW5zaW9ucylcbiAgcmV0dXJuIGV4dGVuc2lvbnNcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5pdFdlYkdMRVciLCJ2YXIgY3JlYXRlID0gcmVxdWlyZSgnZ2wtdGV4dHVyZTJkJylcbnZhciBuZGFycmF5ID0gcmVxdWlyZSgnbmRhcnJheScpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZ2wpIHtcbiAgICAvL2ZpbGwgYW4gYXJyYXkgd2l0aCAweGZmXG4gICAgdmFyIGRhdGEgPSBBcnJheS5hcHBseShudWxsLCBuZXcgQXJyYXkoMTYpKVxuICAgICAgICAgICAgLm1hcChOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YsIDB4RkYpO1xuICAgIC8vY3JlYXRlIGEgMkQgbmRhcnJheVxuICAgIHZhciBhcnJheSA9IG5kYXJyYXkobmV3IFVpbnQ4QXJyYXkoZGF0YSksIFsyLCAyLCA0XSlcbiAgICByZXR1cm4gY3JlYXRlKGdsLCBhcnJheSlcbn0iLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25kYXJyYXktb3BzLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy90eXBlZGFycmF5LXBvb2wvcG9vbC5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvd2ViZ2xldy93ZWJnbGV3LmpzXCIpIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBuZGFycmF5ID0gcmVxdWlyZSgnbmRhcnJheScpXG52YXIgb3BzICAgICA9IHJlcXVpcmUoJ25kYXJyYXktb3BzJylcbnZhciBwb29sICAgID0gcmVxdWlyZSgndHlwZWRhcnJheS1wb29sJylcbnZhciB3ZWJnbGV3ID0gcmVxdWlyZSgnd2ViZ2xldycpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVGV4dHVyZTJEXG5cbnZhciBsaW5lYXJUeXBlcyA9IG51bGxcbnZhciBmaWx0ZXJUeXBlcyA9IG51bGxcbnZhciB3cmFwVHlwZXMgICA9IG51bGxcblxuZnVuY3Rpb24gbGF6eUluaXRMaW5lYXJUeXBlcyhnbCkge1xuICBsaW5lYXJUeXBlcyA9IFtcbiAgICBnbC5MSU5FQVIsXG4gICAgZ2wuTkVBUkVTVF9NSVBNQVBfTElORUFSLFxuICAgIGdsLkxJTkVBUl9NSVBNQVBfTkVBUkVTVCxcbiAgICBnbC5MSU5FQVJfTUlQTUFQX05FQVJFU1RcbiAgXVxuICBmaWx0ZXJUeXBlcyA9IFtcbiAgICBnbC5ORUFSRVNULFxuICAgIGdsLkxJTkVBUixcbiAgICBnbC5ORUFSRVNUX01JUE1BUF9ORUFSRVNULFxuICAgIGdsLk5FQVJFU1RfTUlQTUFQX0xJTkVBUixcbiAgICBnbC5MSU5FQVJfTUlQTUFQX05FQVJFU1QsXG4gICAgZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgXVxuICB3cmFwVHlwZXMgPSBbXG4gICAgZ2wuUkVQRUFULFxuICAgIGdsLkNMQU1QX1RPX0VER0UsXG4gICAgZ2wuTUlSUk9SRURfUkVQRUFUXG4gIF1cbn1cblxudmFyIGNvbnZlcnRGbG9hdFRvVWludDggPSBmdW5jdGlvbihvdXQsIGlucCkge1xuICBvcHMubXVscyhvdXQsIGlucCwgMjU1LjApXG59XG5cbmZ1bmN0aW9uIHJlc2hhcGVUZXh0dXJlKHRleCwgdywgaCkge1xuICB2YXIgZ2wgPSB0ZXguZ2xcbiAgdmFyIG1heFNpemUgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSlcbiAgaWYodyA8IDAgfHwgdyA+IG1heFNpemUgfHwgaCA8IDAgfHwgaCA+IG1heFNpemUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCB0ZXh0dXJlIHNpemUnKVxuICB9XG4gIHRleC5fc2hhcGUgPSBbdywgaF1cbiAgdGV4LmJpbmQoKVxuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIHRleC5mb3JtYXQsIHcsIGgsIDAsIHRleC5mb3JtYXQsIHRleC50eXBlLCBudWxsKVxuICB0ZXguX21pcExldmVscyA9IFswXVxuICByZXR1cm4gdGV4XG59XG5cbmZ1bmN0aW9uIFRleHR1cmUyRChnbCwgaGFuZGxlLCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUpIHtcbiAgdGhpcy5nbCA9IGdsXG4gIHRoaXMuaGFuZGxlID0gaGFuZGxlXG4gIHRoaXMuZm9ybWF0ID0gZm9ybWF0XG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5fc2hhcGUgPSBbd2lkdGgsIGhlaWdodF1cbiAgdGhpcy5fbWlwTGV2ZWxzID0gWzBdXG4gIHRoaXMuX21hZ0ZpbHRlciA9IGdsLk5FQVJFU1RcbiAgdGhpcy5fbWluRmlsdGVyID0gZ2wuTkVBUkVTVFxuICB0aGlzLl93cmFwUyA9IGdsLkNMQU1QX1RPX0VER0VcbiAgdGhpcy5fd3JhcFQgPSBnbC5DTEFNUF9UT19FREdFXG4gIHRoaXMuX2FuaXNvU2FtcGxlcyA9IDFcblxuICB2YXIgcGFyZW50ID0gdGhpc1xuICB2YXIgd3JhcFZlY3RvciA9IFt0aGlzLl93cmFwUywgdGhpcy5fd3JhcFRdXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHdyYXBWZWN0b3IsIFtcbiAgICB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGFyZW50Ll93cmFwU1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gcGFyZW50LndyYXBTID0gdlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fd3JhcFRcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC53cmFwVCA9IHZcbiAgICAgIH1cbiAgICB9XG4gIF0pXG4gIHRoaXMuX3dyYXBWZWN0b3IgPSB3cmFwVmVjdG9yXG5cbiAgdmFyIHNoYXBlVmVjdG9yID0gW3RoaXMuX3NoYXBlWzBdLCB0aGlzLl9zaGFwZVsxXV1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc2hhcGVWZWN0b3IsIFtcbiAgICB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGFyZW50Ll9zaGFwZVswXVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gcGFyZW50LndpZHRoID0gdlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fc2hhcGVbMV1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5oZWlnaHQgPSB2XG4gICAgICB9XG4gICAgfVxuICBdKVxuICB0aGlzLl9zaGFwZVZlY3RvciA9IHNoYXBlVmVjdG9yXG59XG5cbnZhciBwcm90byA9IFRleHR1cmUyRC5wcm90b3R5cGVcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocHJvdG8sIHtcbiAgbWluRmlsdGVyOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9taW5GaWx0ZXJcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgIGlmKHRoaXMudHlwZSA9PT0gZ2wuRkxPQVQgJiYgbGluZWFyVHlwZXMuaW5kZXhPZih2KSA+PSAwKSB7XG4gICAgICAgIGlmKCF3ZWJnbGV3KGdsKS50ZXh0dXJlX2Zsb2F0X2xpbmVhcikge1xuICAgICAgICAgIHYgPSBnbC5ORUFSRVNUXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGZpbHRlclR5cGVzLmluZGV4T2YodikgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbmtub3duIGZpbHRlciBtb2RlICcgKyB2KVxuICAgICAgfVxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIHYpXG4gICAgICByZXR1cm4gdGhpcy5fbWluRmlsdGVyID0gdlxuICAgIH1cbiAgfSxcbiAgbWFnRmlsdGVyOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYWdGaWx0ZXJcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgIGlmKHRoaXMudHlwZSA9PT0gZ2wuRkxPQVQgJiYgbGluZWFyVHlwZXMuaW5kZXhPZih2KSA+PSAwKSB7XG4gICAgICAgIGlmKCF3ZWJnbGV3KGdsKS50ZXh0dXJlX2Zsb2F0X2xpbmVhcikge1xuICAgICAgICAgIHYgPSBnbC5ORUFSRVNUXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGZpbHRlclR5cGVzLmluZGV4T2YodikgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbmtub3duIGZpbHRlciBtb2RlICcgKyB2KVxuICAgICAgfVxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIHYpXG4gICAgICByZXR1cm4gdGhpcy5fbWFnRmlsdGVyID0gdlxuICAgIH1cbiAgfSxcbiAgbWlwU2FtcGxlczoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYW5pc29TYW1wbGVzXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKGkpIHtcbiAgICAgIHZhciBwc2FtcGxlcyA9IHRoaXMuX2FuaXNvU2FtcGxlc1xuICAgICAgdGhpcy5fYW5pc29TYW1wbGVzID0gTWF0aC5tYXgoaSwgMSl8MFxuICAgICAgaWYocHNhbXBsZXMgIT09IHRoaXMuX2FuaXNvU2FtcGxlcykge1xuICAgICAgICB2YXIgZXh0ID0gd2ViZ2xldyh0aGlzLmdsKS5FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcbiAgICAgICAgaWYoZXh0KSB7XG4gICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJmKHRoaXMuZ2wuVEVYVFVSRV8yRCwgZXh0LlRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCB0aGlzLl9hbmlzb1NhbXBsZXMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9hbmlzb1NhbXBsZXNcbiAgICB9XG4gIH0sXG4gIHdyYXBTOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwU1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICB0aGlzLmJpbmQoKVxuICAgICAgaWYod3JhcFR5cGVzLmluZGV4T2YodikgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbmtub3duIHdyYXAgbW9kZSAnICsgdilcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1MsIHYpXG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFMgPSB2XG4gICAgfVxuICB9LFxuICB3cmFwVDoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFRcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIGlmKHdyYXBUeXBlcy5pbmRleE9mKHYpIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biB3cmFwIG1vZGUgJyArIHYpXG4gICAgICB9XG4gICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9ULCB2KVxuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBUID0gdlxuICAgIH1cbiAgfSxcbiAgd3JhcDoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFZlY3RvclxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICBpZighQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICB2ID0gW3Ysdl1cbiAgICAgIH1cbiAgICAgIGlmKHYubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBNdXN0IHNwZWNpZnkgd3JhcCBtb2RlIGZvciByb3dzIGFuZCBjb2x1bW5zJylcbiAgICAgIH1cbiAgICAgIGZvcih2YXIgaT0wOyBpPDI7ICsraSkge1xuICAgICAgICBpZih3cmFwVHlwZXMuaW5kZXhPZih2W2ldKSA8IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biB3cmFwIG1vZGUgJyArIHYpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3dyYXBTID0gdlswXVxuICAgICAgdGhpcy5fd3JhcFQgPSB2WzFdXG5cbiAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgIHRoaXMuYmluZCgpXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCB0aGlzLl93cmFwUylcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIHRoaXMuX3dyYXBUKVxuXG4gICAgICByZXR1cm4gdlxuICAgIH1cbiAgfSxcbiAgc2hhcGU6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NoYXBlVmVjdG9yXG4gICAgfSwgXG4gICAgc2V0OiBmdW5jdGlvbih4KSB7XG4gICAgICBpZighQXJyYXkuaXNBcnJheSh4KSkge1xuICAgICAgICB4ID0gW3h8MCx4fDBdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZih4Lmxlbmd0aCAhPT0gMikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHRleHR1cmUgc2hhcGUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNoYXBlVGV4dHVyZSh0aGlzLCB4WzBdfDAsIHhbMV18MClcbiAgICAgIHJldHVybiBbeFswXXwwLCB4WzFdfDBdXG4gICAgfVxuICB9LFxuICB3aWR0aDoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2hhcGVbMF1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odykge1xuICAgICAgdyA9IHd8MFxuICAgICAgcmVzaGFwZVRleHR1cmUodGhpcywgdywgdGhpcy5fc2hhcGVbMV0pXG4gICAgICByZXR1cm4gd1xuICAgIH1cbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaGFwZVsxXVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihoKSB7XG4gICAgICBoID0gaHwwXG4gICAgICByZXNoYXBlVGV4dHVyZSh0aGlzLCB0aGlzLl9zaGFwZVswXSwgaClcbiAgICAgIHJldHVybiBoXG4gICAgfVxuICB9XG59KVxuXG5wcm90by5iaW5kID0gZnVuY3Rpb24odW5pdCkge1xuICB2YXIgZ2wgPSB0aGlzLmdsXG4gIGlmKHVuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyAodW5pdHwwKSlcbiAgfVxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLmhhbmRsZSlcbiAgaWYodW5pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICh1bml0fDApXG4gIH1cbiAgcmV0dXJuIGdsLmdldFBhcmFtZXRlcihnbC5BQ1RJVkVfVEVYVFVSRSkgLSBnbC5URVhUVVJFMFxufVxuXG5wcm90by5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLmhhbmRsZSlcbn1cblxucHJvdG8uZ2VuZXJhdGVNaXBtYXAgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5iaW5kKClcbiAgdGhpcy5nbC5nZW5lcmF0ZU1pcG1hcCh0aGlzLmdsLlRFWFRVUkVfMkQpXG4gIFxuICAvL1VwZGF0ZSBtaXAgbGV2ZWxzXG4gIHZhciBsID0gTWF0aC5taW4odGhpcy5fc2hhcGVbMF0sIHRoaXMuX3NoYXBlWzFdKVxuICBmb3IodmFyIGk9MDsgbD4wOyArK2ksIGw+Pj49MSkge1xuICAgIGlmKHRoaXMuX21pcExldmVscy5pbmRleE9mKGkpIDwgMCkge1xuICAgICAgdGhpcy5fbWlwTGV2ZWxzLnB1c2goaSlcbiAgICB9XG4gIH1cbn1cblxucHJvdG8uc2V0UGl4ZWxzID0gZnVuY3Rpb24oZGF0YSwgeF9vZmYsIHlfb2ZmLCBtaXBfbGV2ZWwpIHtcbiAgdmFyIGdsID0gdGhpcy5nbFxuICB0aGlzLmJpbmQoKVxuICBpZihBcnJheS5pc0FycmF5KHhfb2ZmKSkge1xuICAgIG1pcF9sZXZlbCA9IHlfb2ZmXG4gICAgeV9vZmYgPSB4X29mZlsxXXwwXG4gICAgeF9vZmYgPSB4X29mZlswXXwwXG4gIH0gZWxzZSB7XG4gICAgeF9vZmYgPSB4X29mZiB8fCAwXG4gICAgeV9vZmYgPSB5X29mZiB8fCAwXG4gIH1cbiAgbWlwX2xldmVsID0gbWlwX2xldmVsIHx8IDBcbiAgaWYoZGF0YSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50IHx8XG4gICAgIGRhdGEgaW5zdGFuY2VvZiBJbWFnZURhdGEgfHxcbiAgICAgZGF0YSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHxcbiAgICAgZGF0YSBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICB2YXIgbmVlZHNNaXAgPSB0aGlzLl9taXBMZXZlbHMuaW5kZXhPZihtaXBfbGV2ZWwpIDwgMFxuICAgIGlmKG5lZWRzTWlwKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIHRoaXMuZm9ybWF0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBkYXRhKVxuICAgICAgdGhpcy5fbWlwTGV2ZWxzLnB1c2gobWlwX2xldmVsKVxuICAgIH0gZWxzZSB7XG4gICAgICBnbC50ZXhTdWJJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgeF9vZmYsIHlfb2ZmLCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBkYXRhKVxuICAgIH1cbiAgfSBlbHNlIGlmKGRhdGEuc2hhcGUgJiYgZGF0YS5zdHJpZGUgJiYgZGF0YS5kYXRhKSB7XG4gICAgaWYoZGF0YS5zaGFwZS5sZW5ndGggPCAyIHx8XG4gICAgICAgeF9vZmYgKyBkYXRhLnNoYXBlWzFdID4gdGhpcy5fc2hhcGVbMV0+Pj5taXBfbGV2ZWwgfHxcbiAgICAgICB5X29mZiArIGRhdGEuc2hhcGVbMF0gPiB0aGlzLl9zaGFwZVswXT4+Pm1pcF9sZXZlbCB8fFxuICAgICAgIHhfb2ZmIDwgMCB8fFxuICAgICAgIHlfb2ZmIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFRleHR1cmUgZGltZW5zaW9ucyBhcmUgb3V0IG9mIGJvdW5kcycpXG4gICAgfVxuICAgIHRleFN1YkltYWdlQXJyYXkoZ2wsIHhfb2ZmLCB5X29mZiwgbWlwX2xldmVsLCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCB0aGlzLl9taXBMZXZlbHMsIGRhdGEpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVuc3VwcG9ydGVkIGRhdGEgdHlwZScpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBpc1BhY2tlZChzaGFwZSwgc3RyaWRlKSB7XG4gIGlmKHNoYXBlLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiAgKHN0cmlkZVsyXSA9PT0gMSkgJiYgXG4gICAgICAgICAgICAoc3RyaWRlWzFdID09PSBzaGFwZVswXSpzaGFwZVsyXSkgJiZcbiAgICAgICAgICAgIChzdHJpZGVbMF0gPT09IHNoYXBlWzJdKVxuICB9XG4gIHJldHVybiAgKHN0cmlkZVswXSA9PT0gMSkgJiYgXG4gICAgICAgICAgKHN0cmlkZVsxXSA9PT0gc2hhcGVbMF0pXG59XG5cbmZ1bmN0aW9uIHRleFN1YkltYWdlQXJyYXkoZ2wsIHhfb2ZmLCB5X29mZiwgbWlwX2xldmVsLCBjZm9ybWF0LCBjdHlwZSwgbWlwTGV2ZWxzLCBhcnJheSkge1xuICB2YXIgZHR5cGUgPSBhcnJheS5kdHlwZVxuICB2YXIgc2hhcGUgPSBhcnJheS5zaGFwZS5zbGljZSgpXG4gIGlmKHNoYXBlLmxlbmd0aCA8IDIgfHwgc2hhcGUubGVuZ3RoID4gMykge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIG5kYXJyYXksIG11c3QgYmUgMmQgb3IgM2QnKVxuICB9XG4gIHZhciB0eXBlID0gMCwgZm9ybWF0ID0gMFxuICB2YXIgcGFja2VkID0gaXNQYWNrZWQoc2hhcGUsIGFycmF5LnN0cmlkZS5zbGljZSgpKVxuICBpZihkdHlwZSA9PT0gJ2Zsb2F0MzInKSB7XG4gICAgdHlwZSA9IGdsLkZMT0FUXG4gIH0gZWxzZSBpZihkdHlwZSA9PT0gJ2Zsb2F0NjQnKSB7XG4gICAgdHlwZSA9IGdsLkZMT0FUXG4gICAgcGFja2VkID0gZmFsc2VcbiAgICBkdHlwZSA9ICdmbG9hdDMyJ1xuICB9IGVsc2UgaWYoZHR5cGUgPT09ICd1aW50OCcpIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICB9IGVsc2Uge1xuICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG4gICAgcGFja2VkID0gZmFsc2VcbiAgICBkdHlwZSA9ICd1aW50OCdcbiAgfVxuICB2YXIgY2hhbm5lbHMgPSAxXG4gIGlmKHNoYXBlLmxlbmd0aCA9PT0gMikge1xuICAgIGZvcm1hdCA9IGdsLkxVTUlOQU5DRVxuICAgIHNoYXBlID0gW3NoYXBlWzBdLCBzaGFwZVsxXSwgMV1cbiAgICBhcnJheSA9IG5kYXJyYXkoYXJyYXkuZGF0YSwgc2hhcGUsIFthcnJheS5zdHJpZGVbMF0sIGFycmF5LnN0cmlkZVsxXSwgMV0sIGFycmF5Lm9mZnNldClcbiAgfSBlbHNlIGlmKHNoYXBlLmxlbmd0aCA9PT0gMykge1xuICAgIGlmKHNoYXBlWzJdID09PSAxKSB7XG4gICAgICBmb3JtYXQgPSBnbC5BTFBIQVxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gMikge1xuICAgICAgZm9ybWF0ID0gZ2wuTFVNSU5BTkNFX0FMUEhBXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSAzKSB7XG4gICAgICBmb3JtYXQgPSBnbC5SR0JcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDQpIHtcbiAgICAgIGZvcm1hdCA9IGdsLlJHQkFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgc2hhcGUgZm9yIHBpeGVsIGNvb3JkcycpXG4gICAgfVxuICAgIGNoYW5uZWxzID0gc2hhcGVbMl1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBzaGFwZSBmb3IgdGV4dHVyZScpXG4gIH1cbiAgLy9Gb3IgMS1jaGFubmVsIHRleHR1cmVzIGFsbG93IGNvbnZlcnNpb24gYmV0d2VlbiBmb3JtYXRzXG4gIGlmKChmb3JtYXQgID09PSBnbC5MVU1JTkFOQ0UgfHwgZm9ybWF0ICA9PT0gZ2wuQUxQSEEpICYmXG4gICAgIChjZm9ybWF0ID09PSBnbC5MVU1JTkFOQ0UgfHwgY2Zvcm1hdCA9PT0gZ2wuQUxQSEEpKSB7XG4gICAgZm9ybWF0ID0gY2Zvcm1hdFxuICB9XG4gIGlmKGZvcm1hdCAhPT0gY2Zvcm1hdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbmNvbXBhdGlibGUgdGV4dHVyZSBmb3JtYXQgZm9yIHNldFBpeGVscycpXG4gIH1cbiAgdmFyIHNpemUgPSBhcnJheS5zaXplXG4gIHZhciBuZWVkc01pcCA9IG1pcExldmVscy5pbmRleE9mKG1pcF9sZXZlbCkgPCAwXG4gIGlmKG5lZWRzTWlwKSB7XG4gICAgbWlwTGV2ZWxzLnB1c2gobWlwX2xldmVsKVxuICB9XG4gIGlmKHR5cGUgPT09IGN0eXBlICYmIHBhY2tlZCkge1xuICAgIC8vQXJyYXkgZGF0YSB0eXBlcyBhcmUgY29tcGF0aWJsZSwgY2FuIGRpcmVjdGx5IGNvcHkgaW50byB0ZXh0dXJlXG4gICAgaWYoYXJyYXkub2Zmc2V0ID09PSAwICYmIGFycmF5LmRhdGEubGVuZ3RoID09PSBzaXplKSB7XG4gICAgICBpZihuZWVkc01pcCkge1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgY2Zvcm1hdCwgc2hhcGVbMF0sIHNoYXBlWzFdLCAwLCBjZm9ybWF0LCBjdHlwZSwgYXJyYXkuZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCB4X29mZiwgeV9vZmYsIHNoYXBlWzBdLCBzaGFwZVsxXSwgY2Zvcm1hdCwgY3R5cGUsIGFycmF5LmRhdGEpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKG5lZWRzTWlwKSB7XG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCBjZm9ybWF0LCBzaGFwZVswXSwgc2hhcGVbMV0sIDAsIGNmb3JtYXQsIGN0eXBlLCBhcnJheS5kYXRhLnN1YmFycmF5KGFycmF5Lm9mZnNldCwgYXJyYXkub2Zmc2V0K3NpemUpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIHhfb2ZmLCB5X29mZiwgc2hhcGVbMF0sIHNoYXBlWzFdLCBjZm9ybWF0LCBjdHlwZSwgYXJyYXkuZGF0YS5zdWJhcnJheShhcnJheS5vZmZzZXQsIGFycmF5Lm9mZnNldCtzaXplKSlcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy9OZWVkIHRvIGRvIHR5cGUgY29udmVyc2lvbiB0byBwYWNrIGRhdGEgaW50byBidWZmZXJcbiAgICB2YXIgcGFja19idWZmZXJcbiAgICBpZihjdHlwZSA9PT0gZ2wuRkxPQVQpIHtcbiAgICAgIHBhY2tfYnVmZmVyID0gcG9vbC5tYWxsb2NGbG9hdDMyKHNpemUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhY2tfYnVmZmVyID0gcG9vbC5tYWxsb2NVaW50OChzaXplKVxuICAgIH1cbiAgICB2YXIgcGFja192aWV3ID0gbmRhcnJheShwYWNrX2J1ZmZlciwgc2hhcGUsIFtzaGFwZVsyXSwgc2hhcGVbMl0qc2hhcGVbMF0sIDFdKVxuICAgIGlmKHR5cGUgPT09IGdsLkZMT0FUICYmIGN0eXBlID09PSBnbC5VTlNJR05FRF9CWVRFKSB7XG4gICAgICBjb252ZXJ0RmxvYXRUb1VpbnQ4KHBhY2tfdmlldywgYXJyYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wcy5hc3NpZ24ocGFja192aWV3LCBhcnJheSlcbiAgICB9XG4gICAgaWYobmVlZHNNaXApIHtcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCBjZm9ybWF0LCBzaGFwZVswXSwgc2hhcGVbMV0sIDAsIGNmb3JtYXQsIGN0eXBlLCBwYWNrX2J1ZmZlci5zdWJhcnJheSgwLCBzaXplKSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIHhfb2ZmLCB5X29mZiwgc2hhcGVbMF0sIHNoYXBlWzFdLCBjZm9ybWF0LCBjdHlwZSwgcGFja19idWZmZXIuc3ViYXJyYXkoMCwgc2l6ZSkpXG4gICAgfVxuICAgIGlmKGN0eXBlID09PSBnbC5GTE9BVCkge1xuICAgICAgcG9vbC5mcmVlRmxvYXQzMihwYWNrX2J1ZmZlcilcbiAgICB9IGVsc2Uge1xuICAgICAgcG9vbC5mcmVlVWludDgocGFja19idWZmZXIpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRUZXh0dXJlKGdsKSB7XG4gIHZhciB0ZXggPSBnbC5jcmVhdGVUZXh0dXJlKClcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4KVxuICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVClcbiAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpXG4gIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpXG4gIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpXG4gIHJldHVybiB0ZXhcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZVNoYXBlKGdsLCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUpIHtcbiAgdmFyIG1heFRleHR1cmVTaXplID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpXG4gIGlmKHdpZHRoIDwgMCB8fCB3aWR0aCA+IG1heFRleHR1cmVTaXplIHx8IGhlaWdodCA8IDAgfHwgaGVpZ2h0ICA+IG1heFRleHR1cmVTaXplKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgdGV4dHVyZSBzaGFwZScpXG4gIH1cbiAgaWYodHlwZSA9PT0gZ2wuRkxPQVQgJiYgIXdlYmdsZXcoZ2wpLnRleHR1cmVfZmxvYXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogRmxvYXRpbmcgcG9pbnQgdGV4dHVyZXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIHBsYXRmb3JtJylcbiAgfVxuICB2YXIgdGV4ID0gaW5pdFRleHR1cmUoZ2wpXG4gIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpXG4gIHJldHVybiBuZXcgVGV4dHVyZTJEKGdsLCB0ZXgsIHdpZHRoLCBoZWlnaHQsIGZvcm1hdCwgdHlwZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZURPTShnbCwgZWxlbWVudCwgZm9ybWF0LCB0eXBlKSB7XG4gIHZhciB0ZXggPSBpbml0VGV4dHVyZShnbClcbiAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBmb3JtYXQsIGZvcm1hdCwgdHlwZSwgZWxlbWVudClcbiAgcmV0dXJuIG5ldyBUZXh0dXJlMkQoZ2wsIHRleCwgZWxlbWVudC53aWR0aHwwLCBlbGVtZW50LmhlaWdodHwwLCBmb3JtYXQsIHR5cGUpXG59XG5cbi8vQ3JlYXRlcyBhIHRleHR1cmUgZnJvbSBhbiBuZGFycmF5XG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlQXJyYXkoZ2wsIGFycmF5KSB7XG4gIHZhciBkdHlwZSA9IGFycmF5LmR0eXBlXG4gIHZhciBzaGFwZSA9IGFycmF5LnNoYXBlLnNsaWNlKClcbiAgdmFyIG1heFNpemUgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSlcbiAgaWYoc2hhcGVbMF0gPCAwIHx8IHNoYXBlWzBdID4gbWF4U2l6ZSB8fCBzaGFwZVsxXSA8IDAgfHwgc2hhcGVbMV0gPiBtYXhTaXplKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgdGV4dHVyZSBzaXplJylcbiAgfVxuICB2YXIgcGFja2VkID0gaXNQYWNrZWQoc2hhcGUsIGFycmF5LnN0cmlkZS5zbGljZSgpKVxuICB2YXIgdHlwZSA9IDBcbiAgaWYoZHR5cGUgPT09ICdmbG9hdDMyJykge1xuICAgIHR5cGUgPSBnbC5GTE9BVFxuICB9IGVsc2UgaWYoZHR5cGUgPT09ICdmbG9hdDY0Jykge1xuICAgIHR5cGUgPSBnbC5GTE9BVFxuICAgIHBhY2tlZCA9IGZhbHNlXG4gICAgZHR5cGUgPSAnZmxvYXQzMidcbiAgfSBlbHNlIGlmKGR0eXBlID09PSAndWludDgnKSB7XG4gICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEVcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICAgIHBhY2tlZCA9IGZhbHNlXG4gICAgZHR5cGUgPSAndWludDgnXG4gIH1cbiAgdmFyIGZvcm1hdCA9IDBcbiAgaWYoc2hhcGUubGVuZ3RoID09PSAyKSB7XG4gICAgZm9ybWF0ID0gZ2wuTFVNSU5BTkNFXG4gICAgc2hhcGUgPSBbc2hhcGVbMF0sIHNoYXBlWzFdLCAxXVxuICAgIGFycmF5ID0gbmRhcnJheShhcnJheS5kYXRhLCBzaGFwZSwgW2FycmF5LnN0cmlkZVswXSwgYXJyYXkuc3RyaWRlWzFdLCAxXSwgYXJyYXkub2Zmc2V0KVxuICB9IGVsc2UgaWYoc2hhcGUubGVuZ3RoID09PSAzKSB7XG4gICAgaWYoc2hhcGVbMl0gPT09IDEpIHtcbiAgICAgIGZvcm1hdCA9IGdsLkFMUEhBXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSAyKSB7XG4gICAgICBmb3JtYXQgPSBnbC5MVU1JTkFOQ0VfQUxQSEFcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDMpIHtcbiAgICAgIGZvcm1hdCA9IGdsLlJHQlxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gNCkge1xuICAgICAgZm9ybWF0ID0gZ2wuUkdCQVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBzaGFwZSBmb3IgcGl4ZWwgY29vcmRzJylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgc2hhcGUgZm9yIHRleHR1cmUnKVxuICB9XG4gIGlmKHR5cGUgPT09IGdsLkZMT0FUICYmICF3ZWJnbGV3KGdsKS50ZXh0dXJlX2Zsb2F0KSB7XG4gICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEVcbiAgICBwYWNrZWQgPSBmYWxzZVxuICB9XG4gIHZhciBidWZmZXIsIGJ1Zl9zdG9yZVxuICB2YXIgc2l6ZSA9IGFycmF5LnNpemVcbiAgaWYoIXBhY2tlZCkge1xuICAgIHZhciBzdHJpZGUgPSBbc2hhcGVbMl0sIHNoYXBlWzJdKnNoYXBlWzBdLCAxXVxuICAgIGJ1Zl9zdG9yZSA9IHBvb2wubWFsbG9jKHNpemUsIGR0eXBlKVxuICAgIHZhciBidWZfYXJyYXkgPSBuZGFycmF5KGJ1Zl9zdG9yZSwgc2hhcGUsIHN0cmlkZSwgMClcbiAgICBpZigoZHR5cGUgPT09ICdmbG9hdDMyJyB8fCBkdHlwZSA9PT0gJ2Zsb2F0NjQnKSAmJiB0eXBlID09PSBnbC5VTlNJR05FRF9CWVRFKSB7XG4gICAgICBjb252ZXJ0RmxvYXRUb1VpbnQ4KGJ1Zl9hcnJheSwgYXJyYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wcy5hc3NpZ24oYnVmX2FycmF5LCBhcnJheSlcbiAgICB9XG4gICAgYnVmZmVyID0gYnVmX3N0b3JlLnN1YmFycmF5KDAsIHNpemUpXG4gIH0gZWxzZSBpZiAoYXJyYXkub2Zmc2V0ID09PSAwICYmIGFycmF5LmRhdGEubGVuZ3RoID09PSBzaXplKSB7XG4gICAgYnVmZmVyID0gYXJyYXkuZGF0YVxuICB9IGVsc2Uge1xuICAgIGJ1ZmZlciA9IGFycmF5LmRhdGEuc3ViYXJyYXkoYXJyYXkub2Zmc2V0LCBhcnJheS5vZmZzZXQgKyBzaXplKVxuICB9XG4gIHZhciB0ZXggPSBpbml0VGV4dHVyZShnbClcbiAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBmb3JtYXQsIHNoYXBlWzBdLCBzaGFwZVsxXSwgMCwgZm9ybWF0LCB0eXBlLCBidWZmZXIpXG4gIGlmKCFwYWNrZWQpIHtcbiAgICBwb29sLmZyZWUoYnVmX3N0b3JlKVxuICB9XG4gIHJldHVybiBuZXcgVGV4dHVyZTJEKGdsLCB0ZXgsIHNoYXBlWzBdLCBzaGFwZVsxXSwgZm9ybWF0LCB0eXBlKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlMkQoZ2wpIHtcbiAgaWYoYXJndW1lbnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IE1pc3NpbmcgYXJndW1lbnRzIGZvciB0ZXh0dXJlMmQgY29uc3RydWN0b3InKVxuICB9XG4gIGlmKCFsaW5lYXJUeXBlcykge1xuICAgIGxhenlJbml0TGluZWFyVHlwZXMoZ2wpXG4gIH1cbiAgaWYodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gY3JlYXRlVGV4dHVyZVNoYXBlKGdsLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdfHxnbC5SR0JBLCBhcmd1bWVudHNbNF18fGdsLlVOU0lHTkVEX0JZVEUpXG4gIH1cbiAgaWYoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMV0pKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVRleHR1cmVTaGFwZShnbCwgYXJndW1lbnRzWzFdWzBdfDAsIGFyZ3VtZW50c1sxXVsxXXwwLCBhcmd1bWVudHNbMl18fGdsLlJHQkEsIGFyZ3VtZW50c1szXXx8Z2wuVU5TSUdORURfQllURSlcbiAgfVxuICBpZih0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBvYmogPSBhcmd1bWVudHNbMV1cbiAgICBpZihvYmogaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCB8fFxuICAgICAgIG9iaiBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHxcbiAgICAgICBvYmogaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50IHx8XG4gICAgICAgb2JqIGluc3RhbmNlb2YgSW1hZ2VEYXRhKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVGV4dHVyZURPTShnbCwgb2JqLCBhcmd1bWVudHNbMl18fGdsLlJHQkEsIGFyZ3VtZW50c1szXXx8Z2wuVU5TSUdORURfQllURSlcbiAgICB9IGVsc2UgaWYob2JqLnNoYXBlICYmIG9iai5kYXRhICYmIG9iai5zdHJpZGUpIHtcbiAgICAgIHJldHVybiBjcmVhdGVUZXh0dXJlQXJyYXkoZ2wsIG9iailcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgYXJndW1lbnRzIGZvciB0ZXh0dXJlMmQgY29uc3RydWN0b3InKVxufVxuIiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xudmFyIGlvdGEgPSByZXF1aXJlKFwiaW90YS1hcnJheVwiKVxuXG52YXIgYXJyYXlNZXRob2RzID0gW1xuICBcImNvbmNhdFwiLFxuICBcImpvaW5cIixcbiAgXCJzbGljZVwiLFxuICBcInRvU3RyaW5nXCIsXG4gIFwiaW5kZXhPZlwiLFxuICBcImxhc3RJbmRleE9mXCIsXG4gIFwiZm9yRWFjaFwiLFxuICBcImV2ZXJ5XCIsXG4gIFwic29tZVwiLFxuICBcImZpbHRlclwiLFxuICBcIm1hcFwiLFxuICBcInJlZHVjZVwiLFxuICBcInJlZHVjZVJpZ2h0XCJcbl1cblxudmFyIGhhc1R5cGVkQXJyYXlzICA9ICgodHlwZW9mIEZsb2F0NjRBcnJheSkgIT09IFwidW5kZWZpbmVkXCIpXG52YXIgaGFzQnVmZmVyICAgICAgID0gKCh0eXBlb2YgQnVmZmVyKSAhPT0gXCJ1bmRlZmluZWRcIilcblxuZnVuY3Rpb24gY29tcGFyZTFzdChhLCBiKSB7XG4gIHJldHVybiBhWzBdIC0gYlswXVxufVxuXG5mdW5jdGlvbiBvcmRlcigpIHtcbiAgdmFyIHN0cmlkZSA9IHRoaXMuc3RyaWRlXG4gIHZhciB0ZXJtcyA9IG5ldyBBcnJheShzdHJpZGUubGVuZ3RoKVxuICB2YXIgaVxuICBmb3IoaT0wOyBpPHRlcm1zLmxlbmd0aDsgKytpKSB7XG4gICAgdGVybXNbaV0gPSBbTWF0aC5hYnMoc3RyaWRlW2ldKSwgaV1cbiAgfVxuICB0ZXJtcy5zb3J0KGNvbXBhcmUxc3QpXG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkodGVybXMubGVuZ3RoKVxuICBmb3IoaT0wOyBpPHJlc3VsdC5sZW5ndGg7ICsraSkge1xuICAgIHJlc3VsdFtpXSA9IHRlcm1zW2ldWzFdXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBjb21waWxlQ29uc3RydWN0b3IoZHR5cGUsIGRpbWVuc2lvbikge1xuICB2YXIgY2xhc3NOYW1lID0gW1wiVmlld1wiLCBkaW1lbnNpb24sIFwiZFwiLCBkdHlwZV0uam9pbihcIlwiKVxuICBpZihkaW1lbnNpb24gPCAwKSB7XG4gICAgY2xhc3NOYW1lID0gXCJWaWV3X05pbFwiICsgZHR5cGVcbiAgfVxuICB2YXIgdXNlR2V0dGVycyA9IChkdHlwZSA9PT0gXCJnZW5lcmljXCIpXG4gIFxuICBpZihkaW1lbnNpb24gPT09IC0xKSB7XG4gICAgLy9TcGVjaWFsIGNhc2UgZm9yIHRyaXZpYWwgYXJyYXlzXG4gICAgdmFyIGNvZGUgPSBcbiAgICAgIFwiZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiKGEpe3RoaXMuZGF0YT1hO307XFxcbnZhciBwcm90bz1cIitjbGFzc05hbWUrXCIucHJvdG90eXBlO1xcXG5wcm90by5kdHlwZT0nXCIrZHR5cGUrXCInO1xcXG5wcm90by5pbmRleD1mdW5jdGlvbigpe3JldHVybiAtMX07XFxcbnByb3RvLnNpemU9MDtcXFxucHJvdG8uZGltZW5zaW9uPS0xO1xcXG5wcm90by5zaGFwZT1wcm90by5zdHJpZGU9cHJvdG8ub3JkZXI9W107XFxcbnByb3RvLmxvPXByb3RvLmhpPXByb3RvLnRyYW5zcG9zZT1wcm90by5zdGVwPVxcXG5mdW5jdGlvbigpe3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSk7fTtcXFxucHJvdG8uZ2V0PXByb3RvLnNldD1mdW5jdGlvbigpe307XFxcbnByb3RvLnBpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH07XFxcbnJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfXCIrY2xhc3NOYW1lK1wiKGEpe3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKGEpO31cIlxuICAgIHZhciBwcm9jZWR1cmUgPSBuZXcgRnVuY3Rpb24oY29kZSlcbiAgICByZXR1cm4gcHJvY2VkdXJlKClcbiAgfSBlbHNlIGlmKGRpbWVuc2lvbiA9PT0gMCkge1xuICAgIC8vU3BlY2lhbCBjYXNlIGZvciAwZCBhcnJheXNcbiAgICB2YXIgY29kZSA9XG4gICAgICBcImZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIihhLGQpIHtcXFxudGhpcy5kYXRhID0gYTtcXFxudGhpcy5vZmZzZXQgPSBkXFxcbn07XFxcbnZhciBwcm90bz1cIitjbGFzc05hbWUrXCIucHJvdG90eXBlO1xcXG5wcm90by5kdHlwZT0nXCIrZHR5cGUrXCInO1xcXG5wcm90by5pbmRleD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm9mZnNldH07XFxcbnByb3RvLmRpbWVuc2lvbj0wO1xcXG5wcm90by5zaXplPTE7XFxcbnByb3RvLnNoYXBlPVxcXG5wcm90by5zdHJpZGU9XFxcbnByb3RvLm9yZGVyPVtdO1xcXG5wcm90by5sbz1cXFxucHJvdG8uaGk9XFxcbnByb3RvLnRyYW5zcG9zZT1cXFxucHJvdG8uc3RlcD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfY29weSgpIHtcXFxucmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLHRoaXMub2Zmc2V0KVxcXG59O1xcXG5wcm90by5waWNrPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9waWNrKCl7XFxcbnJldHVybiBUcml2aWFsQXJyYXkodGhpcy5kYXRhKTtcXFxufTtcXFxucHJvdG8udmFsdWVPZj1wcm90by5nZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2dldCgpe1xcXG5yZXR1cm4gXCIrKHVzZUdldHRlcnMgPyBcInRoaXMuZGF0YS5nZXQodGhpcy5vZmZzZXQpXCIgOiBcInRoaXMuZGF0YVt0aGlzLm9mZnNldF1cIikrXG5cIn07XFxcbnByb3RvLnNldD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfc2V0KHYpe1xcXG5yZXR1cm4gXCIrKHVzZUdldHRlcnMgPyBcInRoaXMuZGF0YS5zZXQodGhpcy5vZmZzZXQsdilcIiA6IFwidGhpcy5kYXRhW3RoaXMub2Zmc2V0XT12XCIpK1wiXFxcbn07XFxcbnJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfXCIrY2xhc3NOYW1lK1wiKGEsYixjLGQpe3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKGEsZCl9XCJcbiAgICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKFwiVHJpdmlhbEFycmF5XCIsIGNvZGUpXG4gICAgcmV0dXJuIHByb2NlZHVyZShDQUNIRURfQ09OU1RSVUNUT1JTW2R0eXBlXVswXSlcbiAgfVxuXG4gIHZhciBjb2RlID0gW1wiJ3VzZSBzdHJpY3QnXCJdXG4gICAgXG4gIC8vQ3JlYXRlIGNvbnN0cnVjdG9yIGZvciB2aWV3XG4gIHZhciBpbmRpY2VzID0gaW90YShkaW1lbnNpb24pXG4gIHZhciBhcmdzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gXCJpXCIraSB9KVxuICB2YXIgaW5kZXhfc3RyID0gXCJ0aGlzLm9mZnNldCtcIiArIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgcmV0dXJuIFwidGhpcy5fc3RyaWRlXCIgKyBpICsgXCIqaVwiICsgaVxuICAgICAgfSkuam9pbihcIitcIilcbiAgY29kZS5wdXNoKFwiZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiKGEsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiYlwiK2lcbiAgICB9KS5qb2luKFwiLFwiKSArIFwiLFwiICtcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJjXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpICsgXCIsZCl7dGhpcy5kYXRhPWFcIilcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXCJ0aGlzLl9zaGFwZVwiK2krXCI9YlwiK2krXCJ8MFwiKVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFwidGhpcy5fc3RyaWRlXCIraStcIj1jXCIraStcInwwXCIpXG4gIH1cbiAgY29kZS5wdXNoKFwidGhpcy5vZmZzZXQ9ZHwwfVwiLFxuICAgIFwidmFyIHByb3RvPVwiK2NsYXNzTmFtZStcIi5wcm90b3R5cGVcIixcbiAgICBcInByb3RvLmR0eXBlPSdcIitkdHlwZStcIidcIixcbiAgICBcInByb3RvLmRpbWVuc2lvbj1cIitkaW1lbnNpb24pXG4gIFxuICAvL3ZpZXcuc3RyaWRlIGFuZCB2aWV3LnNoYXBlXG4gIHZhciBzdHJpZGVDbGFzc05hbWUgPSBcIlZTdHJpZGVcIiArIGRpbWVuc2lvbiArIFwiZFwiICsgZHR5cGVcbiAgdmFyIHNoYXBlQ2xhc3NOYW1lID0gXCJWU2hhcGVcIiArIGRpbWVuc2lvbiArIFwiZFwiICsgZHR5cGVcbiAgdmFyIHByb3BzID0ge1wic3RyaWRlXCI6c3RyaWRlQ2xhc3NOYW1lLCBcInNoYXBlXCI6c2hhcGVDbGFzc05hbWV9XG4gIGZvcih2YXIgcHJvcCBpbiBwcm9wcykge1xuICAgIHZhciBhcnJheU5hbWUgPSBwcm9wc1twcm9wXVxuICAgIGNvZGUucHVzaChcbiAgICAgIFwiZnVuY3Rpb24gXCIgKyBhcnJheU5hbWUgKyBcIih2KSB7dGhpcy5fdj12fSB2YXIgYXByb3RvPVwiICsgYXJyYXlOYW1lICsgXCIucHJvdG90eXBlXCIsXG4gICAgICBcImFwcm90by5sZW5ndGg9XCIrZGltZW5zaW9uKVxuICAgIFxuICAgIHZhciBhcnJheV9lbGVtZW50cyA9IFtdXG4gICAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICAgIGFycmF5X2VsZW1lbnRzLnB1c2goW1widGhpcy5fdi5fXCIsIHByb3AsIGldLmpvaW4oXCJcIikpXG4gICAgfVxuICAgIGNvZGUucHVzaChcbiAgICAgIFwiYXByb3RvLnRvSlNPTj1mdW5jdGlvbiBcIiArIGFycmF5TmFtZSArIFwiX3RvSlNPTigpe3JldHVybiBbXCIgKyBhcnJheV9lbGVtZW50cy5qb2luKFwiLFwiKSArIFwiXX1cIixcbiAgICAgIFwiYXByb3RvLnZhbHVlT2Y9YXByb3RvLnRvU3RyaW5nPWZ1bmN0aW9uIFwiICsgYXJyYXlOYW1lICsgXCJfdG9TdHJpbmcoKXtyZXR1cm4gW1wiICsgYXJyYXlfZWxlbWVudHMuam9pbihcIixcIikgKyBcIl0uam9pbigpfVwiKVxuICAgIFxuICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICBjb2RlLnB1c2goXCJPYmplY3QuZGVmaW5lUHJvcGVydHkoYXByb3RvLFwiK2krXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl92Ll9cIitwcm9wK2krXCJ9LHNldDpmdW5jdGlvbih2KXtyZXR1cm4gdGhpcy5fdi5fXCIrcHJvcCtpK1wiPXZ8MH0sZW51bWVyYWJsZTp0cnVlfSlcIilcbiAgICB9XG4gICAgZm9yKHZhciBpPTA7IGk8YXJyYXlNZXRob2RzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZihhcnJheU1ldGhvZHNbaV0gaW4gQXJyYXkucHJvdG90eXBlKSB7XG4gICAgICAgIGNvZGUucHVzaChcImFwcm90by5cIithcnJheU1ldGhvZHNbaV0rXCI9QXJyYXkucHJvdG90eXBlLlwiK2FycmF5TWV0aG9kc1tpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29kZS5wdXNoKFtcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywnXCIscHJvcCxcIicse2dldDpmdW5jdGlvbiBcIiwgYXJyYXlOYW1lLCBcIl9nZXQoKXtyZXR1cm4gbmV3IFwiLCBhcnJheU5hbWUsIFwiKHRoaXMpfSxzZXQ6IGZ1bmN0aW9uIFwiLCBhcnJheU5hbWUsIFwiX3NldCh2KXtcIl0uam9pbihcIlwiKSlcbiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgY29kZS5wdXNoKFwidGhpcy5fXCIrcHJvcCtpK1wiPXZbXCIraStcIl18MFwiKVxuICAgIH1cbiAgICBjb2RlLnB1c2goXCJyZXR1cm4gdn19KVwiKVxuICB9XG4gIFxuICAvL3ZpZXcuc2l6ZTpcbiAgY29kZS5wdXNoKFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCdzaXplJyx7Z2V0OmZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9zaXplKCl7XFxcbnJldHVybiBcIitpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBcInRoaXMuX3NoYXBlXCIraSB9KS5qb2luKFwiKlwiKSxcblwifX0pXCIpXG5cbiAgLy92aWV3Lm9yZGVyOlxuICBpZihkaW1lbnNpb24gPT09IDEpIHtcbiAgICBjb2RlLnB1c2goXCJwcm90by5vcmRlcj1bMF1cIilcbiAgfSBlbHNlIHtcbiAgICBjb2RlLnB1c2goXCJPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sJ29yZGVyJyx7Z2V0OlwiKVxuICAgIGlmKGRpbWVuc2lvbiA8IDQpIHtcbiAgICAgIGNvZGUucHVzaChcImZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9vcmRlcigpe1wiKVxuICAgICAgaWYoZGltZW5zaW9uID09PSAyKSB7XG4gICAgICAgIGNvZGUucHVzaChcInJldHVybiAoTWF0aC5hYnModGhpcy5fc3RyaWRlMCk+TWF0aC5hYnModGhpcy5fc3RyaWRlMSkpP1sxLDBdOlswLDFdfX0pXCIpXG4gICAgICB9IGVsc2UgaWYoZGltZW5zaW9uID09PSAzKSB7XG4gICAgICAgIGNvZGUucHVzaChcblwidmFyIHMwPU1hdGguYWJzKHRoaXMuX3N0cmlkZTApLHMxPU1hdGguYWJzKHRoaXMuX3N0cmlkZTEpLHMyPU1hdGguYWJzKHRoaXMuX3N0cmlkZTIpO1xcXG5pZihzMD5zMSl7XFxcbmlmKHMxPnMyKXtcXFxucmV0dXJuIFsyLDEsMF07XFxcbn1lbHNlIGlmKHMwPnMyKXtcXFxucmV0dXJuIFsxLDIsMF07XFxcbn1lbHNle1xcXG5yZXR1cm4gWzEsMCwyXTtcXFxufVxcXG59ZWxzZSBpZihzMD5zMil7XFxcbnJldHVybiBbMiwwLDFdO1xcXG59ZWxzZSBpZihzMj5zMSl7XFxcbnJldHVybiBbMCwxLDJdO1xcXG59ZWxzZXtcXFxucmV0dXJuIFswLDIsMV07XFxcbn19fSlcIilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29kZS5wdXNoKFwiT1JERVJ9KVwiKVxuICAgIH1cbiAgfVxuICBcbiAgLy92aWV3LnNldChpMCwgLi4uLCB2KTpcbiAgY29kZS5wdXNoKFxuXCJwcm90by5zZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3NldChcIithcmdzLmpvaW4oXCIsXCIpK1wiLHYpe1wiKVxuICBpZih1c2VHZXR0ZXJzKSB7XG4gICAgY29kZS5wdXNoKFwicmV0dXJuIHRoaXMuZGF0YS5zZXQoXCIraW5kZXhfc3RyK1wiLHYpfVwiKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGFbXCIraW5kZXhfc3RyK1wiXT12fVwiKVxuICB9XG4gIFxuICAvL3ZpZXcuZ2V0KGkwLCAuLi4pOlxuICBjb2RlLnB1c2goXCJwcm90by5nZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2dldChcIithcmdzLmpvaW4oXCIsXCIpK1wiKXtcIilcbiAgaWYodXNlR2V0dGVycykge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGEuZ2V0KFwiK2luZGV4X3N0citcIil9XCIpXG4gIH0gZWxzZSB7XG4gICAgY29kZS5wdXNoKFwicmV0dXJuIHRoaXMuZGF0YVtcIitpbmRleF9zdHIrXCJdfVwiKVxuICB9XG4gIFxuICAvL3ZpZXcuaW5kZXg6XG4gIGNvZGUucHVzaChcbiAgICBcInByb3RvLmluZGV4PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9pbmRleChcIiwgYXJncy5qb2luKCksIFwiKXtyZXR1cm4gXCIraW5kZXhfc3RyK1wifVwiKVxuXG4gIC8vdmlldy5oaSgpOlxuICBjb2RlLnB1c2goXCJwcm90by5oaT1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfaGkoXCIrYXJncy5qb2luKFwiLFwiKStcIil7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBbXCIodHlwZW9mIGlcIixpLFwiIT09J251bWJlcid8fGlcIixpLFwiPDApP3RoaXMuX3NoYXBlXCIsIGksIFwiOmlcIiwgaSxcInwwXCJdLmpvaW4oXCJcIilcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJ0aGlzLl9zdHJpZGVcIitpXG4gICAgfSkuam9pbihcIixcIikrXCIsdGhpcy5vZmZzZXQpfVwiKVxuICBcbiAgLy92aWV3LmxvKCk6XG4gIHZhciBhX3ZhcnMgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBcImFcIitpK1wiPXRoaXMuX3NoYXBlXCIraSB9KVxuICB2YXIgY192YXJzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gXCJjXCIraStcIj10aGlzLl9zdHJpZGVcIitpIH0pXG4gIGNvZGUucHVzaChcInByb3RvLmxvPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9sbyhcIithcmdzLmpvaW4oXCIsXCIpK1wiKXt2YXIgYj10aGlzLm9mZnNldCxkPTAsXCIrYV92YXJzLmpvaW4oXCIsXCIpK1wiLFwiK2NfdmFycy5qb2luKFwiLFwiKSlcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXG5cImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInJiZpXCIraStcIj49MCl7XFxcbmQ9aVwiK2krXCJ8MDtcXFxuYis9Y1wiK2krXCIqZDtcXFxuYVwiK2krXCItPWR9XCIpXG4gIH1cbiAgY29kZS5wdXNoKFwicmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImFcIitpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiY1wiK2lcbiAgICB9KS5qb2luKFwiLFwiKStcIixiKX1cIilcbiAgXG4gIC8vdmlldy5zdGVwKCk6XG4gIGNvZGUucHVzaChcInByb3RvLnN0ZXA9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3N0ZXAoXCIrYXJncy5qb2luKFwiLFwiKStcIil7dmFyIFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImFcIitpK1wiPXRoaXMuX3NoYXBlXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImJcIitpK1wiPXRoaXMuX3N0cmlkZVwiK2lcbiAgICB9KS5qb2luKFwiLFwiKStcIixjPXRoaXMub2Zmc2V0LGQ9MCxjZWlsPU1hdGguY2VpbFwiKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcblwiaWYodHlwZW9mIGlcIitpK1wiPT09J251bWJlcicpe1xcXG5kPWlcIitpK1wifDA7XFxcbmlmKGQ8MCl7XFxcbmMrPWJcIitpK1wiKihhXCIraStcIi0xKTtcXFxuYVwiK2krXCI9Y2VpbCgtYVwiK2krXCIvZClcXFxufWVsc2V7XFxcbmFcIitpK1wiPWNlaWwoYVwiK2krXCIvZClcXFxufVxcXG5iXCIraStcIio9ZFxcXG59XCIpXG4gIH1cbiAgY29kZS5wdXNoKFwicmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImFcIiArIGlcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJiXCIgKyBpXG4gICAgfSkuam9pbihcIixcIikrXCIsYyl9XCIpXG4gIFxuICAvL3ZpZXcudHJhbnNwb3NlKCk6XG4gIHZhciB0U2hhcGUgPSBuZXcgQXJyYXkoZGltZW5zaW9uKVxuICB2YXIgdFN0cmlkZSA9IG5ldyBBcnJheShkaW1lbnNpb24pXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgdFNoYXBlW2ldID0gXCJhW2lcIitpK1wiXVwiXG4gICAgdFN0cmlkZVtpXSA9IFwiYltpXCIraStcIl1cIlxuICB9XG4gIGNvZGUucHVzaChcInByb3RvLnRyYW5zcG9zZT1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfdHJhbnNwb3NlKFwiK2FyZ3MrXCIpe1wiK1xuICAgIGFyZ3MubWFwKGZ1bmN0aW9uKG4saWR4KSB7IHJldHVybiBuICsgXCI9KFwiICsgbiArIFwiPT09dW5kZWZpbmVkP1wiICsgaWR4ICsgXCI6XCIgKyBuICsgXCJ8MClcIn0pLmpvaW4oXCI7XCIpLFxuICAgIFwidmFyIGE9dGhpcy5zaGFwZSxiPXRoaXMuc3RyaWRlO3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSxcIit0U2hhcGUuam9pbihcIixcIikrXCIsXCIrdFN0cmlkZS5qb2luKFwiLFwiKStcIix0aGlzLm9mZnNldCl9XCIpXG4gIFxuICAvL3ZpZXcucGljaygpOlxuICBjb2RlLnB1c2goXCJwcm90by5waWNrPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9waWNrKFwiK2FyZ3MrXCIpe3ZhciBhPVtdLGI9W10sYz10aGlzLm9mZnNldFwiKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInJiZpXCIraStcIj49MCl7Yz0oYyt0aGlzLl9zdHJpZGVcIitpK1wiKmlcIitpK1wiKXwwfWVsc2V7YS5wdXNoKHRoaXMuX3NoYXBlXCIraStcIik7Yi5wdXNoKHRoaXMuX3N0cmlkZVwiK2krXCIpfVwiKVxuICB9XG4gIGNvZGUucHVzaChcInZhciBjdG9yPUNUT1JfTElTVFthLmxlbmd0aCsxXTtyZXR1cm4gY3Rvcih0aGlzLmRhdGEsYSxiLGMpfVwiKVxuICAgIFxuICAvL0FkZCByZXR1cm4gc3RhdGVtZW50XG4gIGNvZGUucHVzaChcInJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfXCIrY2xhc3NOYW1lK1wiKGRhdGEsc2hhcGUsc3RyaWRlLG9mZnNldCl7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIoZGF0YSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJzaGFwZVtcIitpK1wiXVwiXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwic3RyaWRlW1wiK2krXCJdXCJcbiAgICB9KS5qb2luKFwiLFwiKStcIixvZmZzZXQpfVwiKVxuXG4gIC8vQ29tcGlsZSBwcm9jZWR1cmVcbiAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbihcIkNUT1JfTElTVFwiLCBcIk9SREVSXCIsIGNvZGUuam9pbihcIlxcblwiKSlcbiAgcmV0dXJuIHByb2NlZHVyZShDQUNIRURfQ09OU1RSVUNUT1JTW2R0eXBlXSwgb3JkZXIpXG59XG5cbmZ1bmN0aW9uIGFycmF5RFR5cGUoZGF0YSkge1xuICBpZihoYXNCdWZmZXIpIHtcbiAgICBpZihCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICAgIHJldHVybiBcImJ1ZmZlclwiXG4gICAgfVxuICB9XG4gIGlmKGhhc1R5cGVkQXJyYXlzKSB7XG4gICAgc3dpdGNoKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKSkge1xuICAgICAgY2FzZSBcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJmbG9hdDY0XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiZmxvYXQzMlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBJbnQ4QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImludDhcIlxuICAgICAgY2FzZSBcIltvYmplY3QgSW50MTZBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiaW50MTZcIlxuICAgICAgY2FzZSBcIltvYmplY3QgSW50MzJBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiaW50MzJcIlxuICAgICAgY2FzZSBcIltvYmplY3QgVWludDhBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwidWludDhcIlxuICAgICAgY2FzZSBcIltvYmplY3QgVWludDE2QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcInVpbnQxNlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBVaW50MzJBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwidWludDMyXCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJ1aW50OF9jbGFtcGVkXCJcbiAgICB9XG4gIH1cbiAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHJldHVybiBcImFycmF5XCJcbiAgfVxuICByZXR1cm4gXCJnZW5lcmljXCJcbn1cblxudmFyIENBQ0hFRF9DT05TVFJVQ1RPUlMgPSB7XG4gIFwiZmxvYXQzMlwiOltdLFxuICBcImZsb2F0NjRcIjpbXSxcbiAgXCJpbnQ4XCI6W10sXG4gIFwiaW50MTZcIjpbXSxcbiAgXCJpbnQzMlwiOltdLFxuICBcInVpbnQ4XCI6W10sXG4gIFwidWludDE2XCI6W10sXG4gIFwidWludDMyXCI6W10sXG4gIFwiYXJyYXlcIjpbXSxcbiAgXCJ1aW50OF9jbGFtcGVkXCI6W10sXG4gIFwiYnVmZmVyXCI6W10sXG4gIFwiZ2VuZXJpY1wiOltdXG59XG5cbjsoZnVuY3Rpb24oKSB7XG4gIGZvcih2YXIgaWQgaW4gQ0FDSEVEX0NPTlNUUlVDVE9SUykge1xuICAgIENBQ0hFRF9DT05TVFJVQ1RPUlNbaWRdLnB1c2goY29tcGlsZUNvbnN0cnVjdG9yKGlkLCAtMSkpXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB3cmFwcGVkTkRBcnJheUN0b3IoZGF0YSwgc2hhcGUsIHN0cmlkZSwgb2Zmc2V0KSB7XG4gIGlmKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdG9yID0gQ0FDSEVEX0NPTlNUUlVDVE9SUy5hcnJheVswXVxuICAgIHJldHVybiBjdG9yKFtdKVxuICB9IGVsc2UgaWYodHlwZW9mIGRhdGEgPT09IFwibnVtYmVyXCIpIHtcbiAgICBkYXRhID0gW2RhdGFdXG4gIH1cbiAgaWYoc2hhcGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHNoYXBlID0gWyBkYXRhLmxlbmd0aCBdXG4gIH1cbiAgdmFyIGQgPSBzaGFwZS5sZW5ndGhcbiAgaWYoc3RyaWRlID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpZGUgPSBuZXcgQXJyYXkoZClcbiAgICBmb3IodmFyIGk9ZC0xLCBzej0xOyBpPj0wOyAtLWkpIHtcbiAgICAgIHN0cmlkZVtpXSA9IHN6XG4gICAgICBzeiAqPSBzaGFwZVtpXVxuICAgIH1cbiAgfVxuICBpZihvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIG9mZnNldCA9IDBcbiAgICBmb3IodmFyIGk9MDsgaTxkOyArK2kpIHtcbiAgICAgIGlmKHN0cmlkZVtpXSA8IDApIHtcbiAgICAgICAgb2Zmc2V0IC09IChzaGFwZVtpXS0xKSpzdHJpZGVbaV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIGR0eXBlID0gYXJyYXlEVHlwZShkYXRhKVxuICB2YXIgY3Rvcl9saXN0ID0gQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV1cbiAgd2hpbGUoY3Rvcl9saXN0Lmxlbmd0aCA8PSBkKzEpIHtcbiAgICBjdG9yX2xpc3QucHVzaChjb21waWxlQ29uc3RydWN0b3IoZHR5cGUsIGN0b3JfbGlzdC5sZW5ndGgtMSkpXG4gIH1cbiAgdmFyIGN0b3IgPSBjdG9yX2xpc3RbZCsxXVxuICByZXR1cm4gY3RvcihkYXRhLCBzaGFwZSwgc3RyaWRlLCBvZmZzZXQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHBlZE5EQXJyYXlDdG9yXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gaW90YShuKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobilcbiAgZm9yKHZhciBpPTA7IGk8bjsgKytpKSB7XG4gICAgcmVzdWx0W2ldID0gaVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpb3RhIiwidmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxuXG52YXIgZGVmYXVsdHMgPSB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufVxuXG5mdW5jdGlvbiBtaXgob2JqLCBlbnRyaWVzKSB7XG5cdGZvciAodmFyIGsgaW4gZW50cmllcykge1xuXHRcdGlmICghZW50cmllcy5oYXNPd25Qcm9wZXJ0eShrKSlcblx0XHRcdGNvbnRpbnVlXG5cdFx0dmFyIGYgPSBlbnRyaWVzW2tdXG5cdFx0aWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRvYmpba10gPSBmXG5cdFx0fSBlbHNlIGlmIChmICYmIHR5cGVvZiBmID09PSAnb2JqZWN0Jykge1xuXHRcdFx0dmFyIGRlZiA9IHh0ZW5kKGRlZmF1bHRzLCBmKVxuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgaywgZGVmKTtcblx0XHR9XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtaXhlcyhjdG9yLCBlbnRyaWVzKSB7XG5cdG1peChjdG9yLnByb3RvdHlwZSwgZW50cmllcylcbn1cblxubW9kdWxlLmV4cG9ydHMubWl4ID0gbWl4IiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtd2hpdGUtdGV4dHVyZS9ub2RlX21vZHVsZXMvbmRhcnJheS9uZGFycmF5LmpzXCIpIiwidmFyIGludDggPSBuZXcgSW50OEFycmF5KDQpO1xudmFyIGludDMyID0gbmV3IEludDMyQXJyYXkoaW50OC5idWZmZXIsIDAsIDEpO1xudmFyIGZsb2F0MzIgPSBuZXcgRmxvYXQzMkFycmF5KGludDguYnVmZmVyLCAwLCAxKTtcblxuLyoqXG4gKiBBIHNpbmdsZXRvbiBmb3IgbnVtYmVyIHV0aWxpdGllcy4gXG4gKiBAY2xhc3MgTnVtYmVyVXRpbFxuICovXG52YXIgTnVtYmVyVXRpbCA9IGZ1bmN0aW9uKCkge1xuXG59O1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGZsb2F0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBpbnQgYml0cy4gQXJyYXlCdWZmZXJcbiAqIGlzIHVzZWQgZm9yIHRoZSBjb252ZXJzaW9uLlxuICpcbiAqIEBtZXRob2QgIGludEJpdHNUb0Zsb2F0XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGkgdGhlIGludCB0byBjYXN0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgdGhlIGZsb2F0XG4gKi9cbk51bWJlclV0aWwuaW50Qml0c1RvRmxvYXQgPSBmdW5jdGlvbihpKSB7XG5cdGludDMyWzBdID0gaTtcblx0cmV0dXJuIGZsb2F0MzJbMF07XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGludCBiaXRzIGZyb20gdGhlIGdpdmVuIGZsb2F0LiBBcnJheUJ1ZmZlciBpcyB1c2VkXG4gKiBmb3IgdGhlIGNvbnZlcnNpb24uXG4gKlxuICogQG1ldGhvZCAgZmxvYXRUb0ludEJpdHNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSAge051bWJlcn0gZiB0aGUgZmxvYXQgdG8gY2FzdFxuICogQHJldHVybiB7TnVtYmVyfSAgIHRoZSBpbnQgYml0c1xuICovXG5OdW1iZXJVdGlsLmZsb2F0VG9JbnRCaXRzID0gZnVuY3Rpb24oZikge1xuXHRmbG9hdDMyWzBdID0gZjtcblx0cmV0dXJuIGludDMyWzBdO1xufTtcblxuLyoqXG4gKiBFbmNvZGVzIEFCR1IgaW50IGFzIGEgZmxvYXQsIHdpdGggc2xpZ2h0IHByZWNpc2lvbiBsb3NzLlxuICpcbiAqIEBtZXRob2QgIGludFRvRmxvYXRDb2xvclxuICogQHN0YXRpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIGFuIEFCR1IgcGFja2VkIGludGVnZXJcbiAqL1xuTnVtYmVyVXRpbC5pbnRUb0Zsb2F0Q29sb3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gTnVtYmVyVXRpbC5pbnRCaXRzVG9GbG9hdCggdmFsdWUgJiAweGZlZmZmZmZmICk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBmbG9hdCBlbmNvZGVkIEFCR1IgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gUkdCQVxuICogYnl0ZXMgKDAgLSAyNTUpLiBVc2VmdWwgZm9yIHNhdmluZyBiYW5kd2lkdGggaW4gdmVydGV4IGRhdGEuXG4gKlxuICogQG1ldGhvZCAgY29sb3JUb0Zsb2F0XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge051bWJlcn0gciB0aGUgUmVkIGJ5dGUgKDAgLSAyNTUpXG4gKiBAcGFyYW0ge051bWJlcn0gZyB0aGUgR3JlZW4gYnl0ZSAoMCAtIDI1NSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIHRoZSBCbHVlIGJ5dGUgKDAgLSAyNTUpXG4gKiBAcGFyYW0ge051bWJlcn0gYSB0aGUgQWxwaGEgYnl0ZSAoMCAtIDI1NSlcbiAqIEByZXR1cm4ge0Zsb2F0MzJ9ICBhIEZsb2F0MzIgb2YgdGhlIFJHQkEgY29sb3JcbiAqL1xuTnVtYmVyVXRpbC5jb2xvclRvRmxvYXQgPSBmdW5jdGlvbihyLCBnLCBiLCBhKSB7XG5cdHZhciBiaXRzID0gKGEgPDwgMjQgfCBiIDw8IDE2IHwgZyA8PCA4IHwgcik7XG5cdHJldHVybiBOdW1iZXJVdGlsLmludFRvRmxvYXRDb2xvcihiaXRzKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBudW1iZXIgaXMgYSBwb3dlci1vZi10d28uXG4gKlxuICogQG1ldGhvZCAgaXNQb3dlck9mVHdvXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICBuIHRoZSBudW1iZXIgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gICB0cnVlIGlmIHBvd2VyLW9mLXR3b1xuICovXG5OdW1iZXJVdGlsLmlzUG93ZXJPZlR3byA9IGZ1bmN0aW9uKG4pIHtcblx0cmV0dXJuIChuICYgKG4gLSAxKSkgPT09IDA7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgaGlnaGVzdCBwb3dlci1vZi10d28gZnJvbSB0aGUgc3BlY2lmaWVkIG51bWJlci4gXG4gKiBcbiAqIEBwYXJhbSAge051bWJlcn0gbiB0aGUgbnVtYmVyIHRvIHRlc3RcbiAqIEByZXR1cm4ge051bWJlcn0gICB0aGUgbmV4dCBoaWdoZXN0IHBvd2VyIG9mIHR3b1xuICovXG5OdW1iZXJVdGlsLm5leHRQb3dlck9mVHdvID0gZnVuY3Rpb24obikge1xuXHRuLS07XG5cdG4gfD0gbiA+PiAxO1xuXHRuIHw9IG4gPj4gMjtcblx0biB8PSBuID4+IDQ7XG5cdG4gfD0gbiA+PiA4O1xuXHRuIHw9IG4gPj4gMTY7XG5cdHJldHVybiBuKzE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlclV0aWw7IiwiZnVuY3Rpb24gcHJlbXVsdGlwbHkocmdiYSwgb3V0KSB7XG5cdGlmICghb3V0IHx8IHR5cGVvZiBvdXQgPT09ICdudW1iZXInKVxuXHRcdG91dCA9IFswLDAsMCwwXVxuXHRvdXRbMF0gPSByZ2JhWzBdICogcmdiYVszXVxuXHRvdXRbMV0gPSByZ2JhWzFdICogcmdiYVszXVxuXHRvdXRbMl0gPSByZ2JhWzJdICogcmdiYVszXVxuXHRvdXRbM10gPSByZ2JhWzNdXG5cdHJldHVybiBvdXRcbn1cbm1vZHVsZS5leHBvcnRzID0gcHJlbXVsdGlwbHkiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwidmFyIHBhY2tDb2xvciA9IHJlcXVpcmUoJ251bWJlci11dGlsJykuY29sb3JUb0Zsb2F0XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29sb3JUb0Zsb2F0KHJnYmEpIHtcbiAgICByZXR1cm4gcGFja0NvbG9yKFxuICAgICAgICB+fihyZ2JhWzBdICogMjU1KSxcbiAgICAgICAgfn4ocmdiYVsxXSAqIDI1NSksXG4gICAgICAgIH5+KHJnYmFbMl0gKiAyNTUpLFxuICAgICAgICB+fihyZ2JhWzNdICogMjU1KVxuICAgIClcbn0iLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC13aGl0ZS10ZXh0dXJlL25vZGVfbW9kdWxlcy9nbC10ZXh0dXJlMmQvdGV4dHVyZS5qc1wiKSIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZXhjb29yZChwb3NpdGlvbiwgc2hhcGUsIHRleFNoYXBlLCBvdXQpIHtcbiAgICBpZiAoIW91dClcbiAgICAgICAgb3V0ID0gWzAsIDAsIDEsIDFdXG5cbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uIHx8IFswLCAwXVxuICAgIHNoYXBlID0gc2hhcGUgfHwgWzEsIDFdXG5cbiAgICB0ZXhTaGFwZSA9IHRleFNoYXBlIHx8IHNoYXBlXG5cbiAgICB2YXIgaW52V2lkdGggPSAxIC8gdGV4U2hhcGVbMF1cbiAgICB2YXIgaW52SGVpZ2h0ID0gMSAvIHRleFNoYXBlWzFdXG4gICAgdmFyIHggPSBwb3NpdGlvblswXSxcbiAgICAgICAgeSA9IHBvc2l0aW9uWzFdLFxuICAgICAgICB3ID0gc2hhcGVbMF0sXG4gICAgICAgIGggPSBzaGFwZVsxXVxuXG4gICAgb3V0WzBdID0geCAqIGludldpZHRoXG4gICAgb3V0WzFdID0geSAqIGludkhlaWdodFxuICAgIG91dFsyXSA9ICh4ICsgdykgKiBpbnZXaWR0aFxuICAgIG91dFszXSA9ICh5ICsgaCkgKiBpbnZIZWlnaHRcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzXCIpIiwiLy93aWxsIHVzZSBnbC12ZWMyL2NvcHkgYXQgc29tZSBwb2ludC4uXG5tb2R1bGUuZXhwb3J0cy52ZWMyID0gZnVuY3Rpb24gY29weTIob3V0LCB4LCB5KSB7XG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICByZXR1cm4gb3V0XG59XG5cbm1vZHVsZS5leHBvcnRzLnZlYzMgPSBmdW5jdGlvbiBjb3B5Myh2ZWMsIHgsIHksIHopIHtcbiAgICB2ZWNbMF0gPSB4XG4gICAgdmVjWzFdID0geVxuICAgIHZlY1syXSA9IHpcbiAgICByZXR1cm4gdmVjXG59IiwidmFyIG1peGVzID0gcmVxdWlyZSgnbWl4ZXMnKVxudmFyIGNyZWF0ZVNoYWRlciA9IHJlcXVpcmUoJ2dsLWJhc2ljLXNoYWRlcicpXG52YXIgY3JlYXRlQmF0Y2ggPSByZXF1aXJlKCdnbC1zcHJpdGUtYmF0Y2gnKVxudmFyIGNvcHkyID0gcmVxdWlyZSgnLi9jb3B5JykudmVjMlxudmFyIG51bWJlciA9IHJlcXVpcmUoJ2FzLW51bWJlcicpXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgdGV4Y29vcmQgPSByZXF1aXJlKCd0ZXhjb29yZCcpXG52YXIgbWF0NCA9IHJlcXVpcmUoJy4vbWF0NCcpXG5cbnZhciBaRVJPID0gWzAsIDBdXG52YXIgVEVYQ09PUkRfREVGQVVMVCA9IFswLCAwLCAxLCAxXVxuXG52YXIgdG1wMSA9IFswLCAwXSxcbiAgICB0bXAyID0gWzAsIDBdLFxuICAgIHRtcFVWID0gWzAsIDAsIDEsIDFdXG5cbmZ1bmN0aW9uIFNwcml0ZVJlbmRlcmVyKGdsLCBvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU3ByaXRlUmVuZGVyZXIpKVxuICAgICAgICByZXR1cm4gbmV3IFNwcml0ZVJlbmRlcmVyKGdsLCBvcHQpXG4gICAgb3B0ID0gb3B0fHx7fVxuXG4gICAgdGhpcy5fYmxlbmRTcmMgPSBudW1iZXIob3B0LmJsZW5kU3JjLCBnbC5TUkNfQUxQSEEpXG4gICAgdGhpcy5fYmxlbmREc3QgPSBudW1iZXIob3B0LmJsZW5kRHN0LCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxuICAgIHRoaXMuX2JsZW5kRW5hYmxlZCA9IG9wdC5ibGVuZCAhPT0gZmFsc2VcblxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2hhZGVyID0gb3B0LnNoYWRlciB8fCBjcmVhdGVTaGFkZXIoZ2wsIHtcbiAgICAgICAgY29sb3I6IHRydWUsXG4gICAgICAgIHRleGNvb3JkOiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLmJhdGNoID0gb3B0LmJhdGNoIHx8IGNyZWF0ZUJhdGNoKGdsLCB4dGVuZCh7IFxuICAgICAgICBkeW5hbWljOiB0cnVlLFxuICAgICAgICBwcmVtdWx0aXBsaWVkOiB0cnVlIFxuICAgIH0sIG9wdCkpXG5cbiAgICB0aGlzLl9ib3VuZCA9IGZhbHNlXG4gICAgdGhpcy5wcm9qZWN0aW9uID0gbWF0NC5jcmVhdGUoKVxuICAgIHRoaXMudmlldyA9IG1hdDQuY3JlYXRlKClcbiAgICB0aGlzLm1vZGVsID0gbWF0NC5jcmVhdGUoKVxuICAgIHRoaXMudHJhbnNmb3JtID0gbWF0NC5jcmVhdGUoKVxuICAgIHRoaXMudHJhbnNmb3JtU3RhY2sgPSBbXVxuXG4gICAgdGhpcy5jb2xvciA9IFsxLCAxLCAxLCAxXVxufVxuXG5taXhlcyhTcHJpdGVSZW5kZXJlciwge1xuXG4gICAgdHJhbnNmb3JtOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXRjaC50cmFuc2Zvcm1cbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgdGhpcy5iYXRjaC50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmF0Y2guY2xlYXIoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBvcnRobzogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgICBtYXQ0Lm9ydGhvKHRoaXMucHJvamVjdGlvbiwgMCwgd2lkdGgsIGhlaWdodCwgMCwgMCwgMSlcbiAgICAgICAgdGhpcy51cGRhdGVNYXRyaWNlcygpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHNvbGlkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5iYXRjaC50ZXh0dXJlID0gbnVsbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBpbWFnZTogZnVuY3Rpb24oaW1hZ2UsIHV2KSB7XG4gICAgICAgIHRoaXMuYmF0Y2gudGV4dHVyZSA9IGltYWdlXG4gICAgICAgIHRoaXMuYmF0Y2gudGV4Y29vcmQgPSB1diB8fCBURVhDT09SRF9ERUZBVUxUXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGRlZmF1bHRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5iYXRjaC5kZWZhdWx0cygpXG4gICAgICAgIHRoaXMuYmF0Y2guY29sb3IgPSB0aGlzLmNvbG9yXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGZsdXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5iYXRjaC5mbHVzaCgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGZpbGxSZWN0OiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuc29saWQoKS5kZWZhdWx0cygpXG4gICAgICAgIHRoaXMucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sICBcblxuICAgIC8vanVzdCBwdXNoZXMgYSBzaW5nbGUgcXVhZCB3aXRoIGN1cnJlbnQgYXR0cmlidXRlc1xuICAgIHJlY3Q6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5iYXRjaC5jb2xvciA9IHRoaXMuY29sb3JcbiAgICAgICAgdGhpcy5iYXRjaC5wb3NpdGlvblswXSA9IHh8fDBcbiAgICAgICAgdGhpcy5iYXRjaC5wb3NpdGlvblsxXSA9IHl8fDBcbiAgICAgICAgdGhpcy5iYXRjaC5zaGFwZVswXSA9IHdpZHRofHwwXG4gICAgICAgIHRoaXMuYmF0Y2guc2hhcGVbMV0gPSBoZWlnaHR8fDBcbiAgICAgICAgdGhpcy5iYXRjaC5wdXNoKClcbiAgICB9LFxuXG4gICAgc3Ryb2tlOiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0aGlja25lc3MpIHtcbiAgICAgICAgdGhpcy5iYXRjaC5jb2xvciA9IHRoaXMuY29sb3JcbiAgICAgICAgdGhpY2tuZXNzID0gbnVtYmVyKHRoaWNrbmVzcywgMSlcbiAgICAgICAgdGhpcy5yZWN0KHgrdGhpY2tuZXNzLCB5LCB3aWR0aC10aGlja25lc3MqMiwgdGhpY2tuZXNzKVxuICAgICAgICB0aGlzLnJlY3QoeCwgeSwgdGhpY2tuZXNzLCBoZWlnaHQpXG4gICAgICAgIHRoaXMucmVjdCh4K3RoaWNrbmVzcywgeStoZWlnaHQtdGhpY2tuZXNzLCB3aWR0aC10aGlja25lc3MqMiwgdGhpY2tuZXNzKVxuICAgICAgICB0aGlzLnJlY3QoeCt3aWR0aC10aGlja25lc3MsIHksIHRoaWNrbmVzcywgaGVpZ2h0KVxuICAgIH0sXG5cbiAgICBzdHJva2VSZWN0OiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0aGlja25lc3MpIHtcbiAgICAgICAgdGhpcy5zb2xpZCgpLmRlZmF1bHRzKClcbiAgICAgICAgdGhpcy5zdHJva2UoeCwgeSwgd2lkdGgsIGhlaWdodCwgdGhpY2tuZXNzKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBmaWxsVGV4dDogZnVuY3Rpb24odGV4dCwgeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgICAgICB2YXIgb2xkVHJhbnNmb3JtID0gdGV4dC5iYXRjaC50cmFuc2Zvcm0sXG4gICAgICAgICAgICBvbGRDb2xvciA9IHRleHQuYmF0Y2guY29sb3IsXG4gICAgICAgICAgICB3YXNCb3VuZCA9IHRoaXMuX2JvdW5kXG5cbiAgICAgICAgaWYgKHdhc0JvdW5kKSB7IFxuICAgICAgICAvL1RPRE86IHdlIGNvdWxkIGFsd2F5cyBhc3N1bWUgZHluYW1pYyBhbmQgcmVtb3ZlIHRoaXMgY29uZGl0aW9uXG4gICAgICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICAgICAgdGhpcy51bmJpbmQoKVxuICAgICAgICAgICAgdGhpcy5jbGVhcigpXG4gICAgICAgIH1cbiAgICAgICAgdGV4dC5iYXRjaC5jb2xvciA9IHRoaXMuY29sb3JcbiAgICAgICAgdGV4dC5iYXRjaC50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVxuICAgICAgICB0ZXh0LmRyYXcodGhpcy5zaGFkZXIsIHgsIHksIHN0YXJ0LCBlbmQpXG4gICAgICAgIHRleHQuYmF0Y2guY29sb3IgPSBvbGRDb2xvclxuICAgICAgICB0ZXh0LmJhdGNoLnRyYW5zZm9ybSA9IG9sZFRyYW5zZm9ybVxuICAgICAgICBpZiAod2FzQm91bmQpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCgpXG4gICAgICAgIH1cbiAgICB9LCBcblxuICAgIGRyYXdJbWFnZTogZnVuY3Rpb24oaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHdpZHRoID0gbnVtYmVyKHdpZHRoLCBpbWFnZS5zaGFwZSA/IGltYWdlLnNoYXBlWzBdIDogMClcbiAgICAgICAgaGVpZ2h0ID0gbnVtYmVyKGhlaWdodCwgaW1hZ2Uuc2hhcGUgPyBpbWFnZS5zaGFwZVsxXSA6IDApXG5cbiAgICAgICAgdmFyIHV2ID0gVEVYQ09PUkRfREVGQVVMVFxuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDkpIHtcbiAgICAgICAgICAgIHZhciB0ZXhTaXplID0gaW1hZ2Uuc2hhcGUgXG4gICAgICAgICAgICB2YXIgY2xpcFBvcyA9IGNvcHkyKHRtcDEsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKVxuICAgICAgICAgICAgdmFyIGNsaXBTaXplID0gY29weTIodG1wMiwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0pXG5cbiAgICAgICAgICAgIC8vZ2V0IFVWIGNvb3JkaW5hdGVzLCBzdG9yaW5nIGluIG91ciB0ZW1wIGFycmF5IGFzIHRvIG5vdCBcbiAgICAgICAgICAgIC8vY2hhbmdlIGNvbnN0YW50IGRlZmF1bHRcbiAgICAgICAgICAgIHV2ID0gdGV4Y29vcmQoY2xpcFBvcywgY2xpcFNpemUsIHRleFNpemUsIHRtcFVWKVxuXG4gICAgICAgICAgICB4ID0gYXJndW1lbnRzWzVdXG4gICAgICAgICAgICB5ID0gYXJndW1lbnRzWzZdXG4gICAgICAgICAgICB3aWR0aCA9IGFyZ3VtZW50c1s3XVxuICAgICAgICAgICAgaGVpZ2h0ID0gYXJndW1lbnRzWzhdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlZmF1bHRzKClcbiAgICAgICAgLy8gdGhpcy5iYXRjaC5yb3RhdGlvbiA9IHJvdGF0aW9ufHwwXG4gICAgICAgIC8vIGlmIChyb3RhdGlvbk9yaWdpbilcbiAgICAgICAgLy8gICAgIHRoaXMuYmF0Y2gucm90YXRpb25PcmlnaW4gPSByb3RhdGlvbk9yaWdpblxuICAgICAgICB0aGlzLmltYWdlKGltYWdlLCB1dilcbiAgICAgICAgdGhpcy5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHNwcml0ZTogZnVuY3Rpb24oc3ByaXRlKSB7XG4gICAgICAgIHRoaXMuYmF0Y2gucHVzaChzcHJpdGUpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHVwZGF0ZU1hdHJpY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGFkZXIuYmluZCgpXG4gICAgICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLnByb2plY3Rpb24gPSB0aGlzLnByb2plY3Rpb25cbiAgICAgICAgdGhpcy5zaGFkZXIudW5pZm9ybXMudmlldyA9IHRoaXMudmlld1xuICAgICAgICB0aGlzLnNoYWRlci51bmlmb3Jtcy5tb2RlbCA9IHRoaXMubW9kZWxcbiAgICB9LFxuXG4gICAgYmluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgICAgaWYgKHRoaXMuX2JsZW5kRW5hYmxlZCkge1xuICAgICAgICAgICAgZ2wuZW5hYmxlKGdsLkJMRU5EKVxuICAgICAgICAgICAgZ2wuYmxlbmRGdW5jKHRoaXMuX2JsZW5kU3JjLCB0aGlzLl9ibGVuZERzdClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JvdW5kID0gdHJ1ZVxuICAgICAgICB0aGlzLmJhdGNoLmJpbmQodGhpcy5zaGFkZXIpXG4gICAgICAgIHRoaXMuc29saWQoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBkcmF3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5iYXRjaC5kcmF3KClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgdW5iaW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5iYXRjaC51bmJpbmQoKVxuICAgICAgICB0aGlzLl9ib3VuZCA9IGZhbHNlXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGJlZ2luOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5iaW5kKClcbiAgICAgICAgdGhpcy5jbGVhcigpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgIHRoaXMudW5iaW5kKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59KVxuXG5taXhlcyhTcHJpdGVSZW5kZXJlciwgcmVxdWlyZSgnLi90cmFuc2Zvcm1zJykpXG5cbm1vZHVsZS5leHBvcnRzID0gU3ByaXRlUmVuZGVyZXIiLCIvL3RvIHJlZHVjZSBidW5kbGUgc2l6ZSwgd2UnbGwgb25seSBncmFiIHdoYXQgd2UgbmVlZFxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb3J0aG86IHJlcXVpcmUoJ2dsLW1hdDQvb3J0aG8nKSxcbiAgICBpZGVudGl0eTogcmVxdWlyZSgnZ2wtbWF0NC9pZGVudGl0eScpLFxuICAgIGNyZWF0ZTogcmVxdWlyZSgnZ2wtbWF0NC9jcmVhdGUnKSxcbiAgICBzY2FsZTogcmVxdWlyZSgnZ2wtbWF0NC9zY2FsZScpLFxuICAgIHJvdGF0ZVo6IHJlcXVpcmUoJ2dsLW1hdDQvcm90YXRlWicpLFxuICAgIHJvdGF0ZVk6IHJlcXVpcmUoJ2dsLW1hdDQvcm90YXRlWScpLFxuICAgIHJvdGF0ZVg6IHJlcXVpcmUoJ2dsLW1hdDQvcm90YXRlWCcpLFxuICAgIHRyYW5zbGF0ZTogcmVxdWlyZSgnZ2wtbWF0NC90cmFuc2xhdGUnKSxcbiAgICBjbG9uZTogcmVxdWlyZSgnZ2wtbWF0NC9jbG9uZScpLFxuICAgIG11bHRpcGx5OiByZXF1aXJlKCdnbC1tYXQ0L211bHRpcGx5Jylcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2FzLW51bWJlci9pbmRleC5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLWJhc2ljLXNoYWRlci9pbmRleC5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLW1hdDQvY2xvbmUuanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLW1hdDQvaWRlbnRpdHkuanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1tYXQ0L211bHRpcGx5LmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtbWF0NC9vcnRoby5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWC5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWS5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWi5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLW1hdDQvc2NhbGUuanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvaW5kZXguanNcIikiLCJ2YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG5cbnZhciBkZWZhdWx0cyA9IHtcblx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59XG5cbmZ1bmN0aW9uIG1peChvYmosIGVudHJpZXMpIHtcblx0Zm9yICh2YXIgayBpbiBlbnRyaWVzKSB7XG5cdFx0aWYgKCFlbnRyaWVzLmhhc093blByb3BlcnR5KGspKVxuXHRcdFx0Y29udGludWVcblx0XHR2YXIgZiA9IGVudHJpZXNba11cblx0XHRpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdG9ialtrXSA9IGZcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBmID09PSAnb2JqZWN0Jykge1xuXHRcdFx0dmFyIGRlZiA9IHh0ZW5kKGRlZmF1bHRzLCBmKVxuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgaywgZGVmKTtcblx0XHR9XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtaXhlcyhjdG9yLCBlbnRyaWVzKSB7XG5cdG1peChjdG9yLnByb3RvdHlwZSwgZW50cmllcylcbn1cblxubW9kdWxlLmV4cG9ydHMubWl4ID0gbWl4IiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy90ZXhjb29yZC9pbmRleC5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL21peGVzL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcIikiLCJ2YXIgbWF0NCA9IHJlcXVpcmUoJy4vbWF0NCcpXG52YXIgY29weTMgPSByZXF1aXJlKCcuL2NvcHknKS52ZWMzXG52YXIgbnVtYmVyID0gcmVxdWlyZSgnYXMtbnVtYmVyJylcblxudmFyIHRtcFZlYzMgPSBbMCwgMCwgMF1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBzYXZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1TdGFjay5wdXNoKG1hdDQuY2xvbmUodGhpcy50cmFuc2Zvcm0pKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICByZXN0b3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnRyYW5zZm9ybVN0YWNrLnBvcCgpXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBzY2FsZTogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICB4ID0gbnVtYmVyKHgsIDEpXG4gICAgICAgIHkgPSBudW1iZXIoeSwgMSlcbiAgICAgICAgbWF0NC5zY2FsZSh0aGlzLnRyYW5zZm9ybSwgdGhpcy50cmFuc2Zvcm0sIGNvcHkzKHRtcFZlYzMsIHgsIHksIDEpKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgeCA9IHh8fDBcbiAgICAgICAgeSA9IHl8fDBcbiAgICAgICAgbWF0NC50cmFuc2xhdGUodGhpcy50cmFuc2Zvcm0sIHRoaXMudHJhbnNmb3JtLCBjb3B5Myh0bXBWZWMzLCB4LCB5LCAwKSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgcm90YXRlWjogZnVuY3Rpb24ocmFkKSB7XG4gICAgICAgIHJhZCA9IHJhZHx8MFxuICAgICAgICBtYXQ0LnJvdGF0ZVoodGhpcy50cmFuc2Zvcm0sIHRoaXMudHJhbnNmb3JtLCByYWQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHJvdGF0ZVk6IGZ1bmN0aW9uKHJhZCkge1xuICAgICAgICByYWQgPSByYWR8fDBcbiAgICAgICAgbWF0NC5yb3RhdGVZKHRoaXMudHJhbnNmb3JtLCB0aGlzLnRyYW5zZm9ybSwgcmFkKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICByb3RhdGVYOiBmdW5jdGlvbihyYWQpIHtcbiAgICAgICAgcmFkID0gcmFkfHwwXG4gICAgICAgIG1hdDQucm90YXRlWCh0aGlzLnRyYW5zZm9ybSwgdGhpcy50cmFuc2Zvcm0sIHJhZClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgdHJhbnNmb3JtTWF0NDogZnVuY3Rpb24obWF0cml4NHg0KSB7XG4gICAgICAgIG1hdDQubXVsdGlwbHkodGhpcy50cmFuc2Zvcm0sIHRoaXMudHJhbnNmb3JtLCBtYXRyaXg0eDQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHJvdGF0ZTogZnVuY3Rpb24ocmFkKSB7XG4gICAgICAgIHRoaXMucm90YXRlWihyYWQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGlkZW50aXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbWF0NC5pZGVudGl0eSh0aGlzLnRyYW5zZm9ybSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbn0iLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtdGV4dHVyZTJkL3RleHR1cmUuanNcIikiLCJtb2R1bGUuZXhwb3J0cyA9IHByb2dyYW1pZnlcblxudmFyIHNoYWRlciA9IHJlcXVpcmUoJ2dsLXNoYWRlci1jb3JlJylcblxuZnVuY3Rpb24gcHJvZ3JhbWlmeSh2ZXJ0ZXgsIGZyYWdtZW50LCB1bmlmb3JtcywgYXR0cmlidXRlcykge1xuICByZXR1cm4gZnVuY3Rpb24oZ2wpIHtcbiAgICByZXR1cm4gc2hhZGVyKGdsLCB2ZXJ0ZXgsIGZyYWdtZW50LCB1bmlmb3JtcywgYXR0cmlidXRlcylcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBub29wXG5cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdZb3Ugc2hvdWxkIGJ1bmRsZSB5b3VyIGNvZGUgJyArXG4gICAgICAndXNpbmcgYGdsc2xpZnlgIGFzIGEgdHJhbnNmb3JtLidcbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9zaGFkZXItY29yZS5qc1wiKSIsIm1vZHVsZS5leHBvcnRzID0gcHJvZ3JhbWlmeVxuXG5mdW5jdGlvbiBwcm9ncmFtaWZ5KHZlcnRleCwgZnJhZ21lbnQsIHVuaWZvcm1zLCBhdHRyaWJ1dGVzKSB7XG4gIHJldHVybiB7XG4gICAgdmVydGV4OiB2ZXJ0ZXgsIFxuICAgIGZyYWdtZW50OiBmcmFnbWVudCxcbiAgICB1bmlmb3JtczogdW5pZm9ybXMsIFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW1nO1xuXG5mdW5jdGlvbiBpbWcgKHNyYywgb3B0LCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gb3B0XG4gICAgb3B0ID0gbnVsbFxuICB9XG5cblxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgdmFyIGxvY2tlZDtcblxuICBlbC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxvY2tlZCkgcmV0dXJuO1xuICAgIGxvY2tlZCA9IHRydWU7XG5cbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh1bmRlZmluZWQsIGVsKTtcbiAgfTtcblxuICBlbC5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChsb2NrZWQpIHJldHVybjtcbiAgICBsb2NrZWQgPSB0cnVlO1xuXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobmV3IEVycm9yKCdVbmFibGUgdG8gbG9hZCBcIicgKyBzcmMgKyAnXCInKSwgZWwpO1xuICB9O1xuICBcbiAgaWYgKG9wdCAmJiBvcHQuY3Jvc3NPcmlnaW4pXG4gICAgZWwuY3Jvc3NPcmlnaW4gPSBvcHQuY3Jvc3NPcmlnaW47XG5cbiAgZWwuc3JjID0gc3JjO1xuXG4gIHJldHVybiBlbDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvbWl4ZXMvaW5kZXguanNcIikiLCIvKlxyXG4gKiByYWYuanNcclxuICogaHR0cHM6Ly9naXRodWIuY29tL25ncnltYW4vcmFmLmpzXHJcbiAqXHJcbiAqIG9yaWdpbmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXJcclxuICogaW5zcGlyZWQgZnJvbSBwYXVsX2lyaXNoIGdpc3QgYW5kIHBvc3RcclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzIG5ncnltYW5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4gKi9cclxuXHJcbihmdW5jdGlvbih3aW5kb3cpIHtcclxuXHR2YXIgbGFzdFRpbWUgPSAwLFxyXG5cdFx0dmVuZG9ycyA9IFsnd2Via2l0JywgJ21veiddLFxyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcclxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lLFxyXG5cdFx0aSA9IHZlbmRvcnMubGVuZ3RoO1xyXG5cclxuXHQvLyB0cnkgdG8gdW4tcHJlZml4IGV4aXN0aW5nIHJhZlxyXG5cdHdoaWxlICgtLWkgPj0gMCAmJiAhcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXTtcclxuXHR9XHJcblxyXG5cdC8vIHBvbHlmaWxsIHdpdGggc2V0VGltZW91dCBmYWxsYmFja1xyXG5cdC8vIGhlYXZpbHkgaW5zcGlyZWQgZnJvbSBAZGFyaXVzIGdpc3QgbW9kOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MSNjb21tZW50LTgzNzk0NVxyXG5cdGlmICghcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICFjYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdFx0dmFyIG5vdyA9ICtuZXcgRGF0ZSgpLCBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XHJcblx0XHRcdHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpO1xyXG5cdFx0XHR9LCBuZXh0VGltZSAtIG5vdyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xyXG5cdH1cclxuXHJcblx0Ly8gZXhwb3J0IHRvIHdpbmRvd1xyXG5cdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcbn0od2luZG93KSk7XHJcbiIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gIHZhciBDb3B5U2hhZGVyID0gRWZmZWN0Q29tcG9zZXIuQ29weVNoYWRlciA9IHJlcXVpcmUoJ3RocmVlLWNvcHlzaGFkZXInKVxuICAgICwgUmVuZGVyUGFzcyA9IEVmZmVjdENvbXBvc2VyLlJlbmRlclBhc3MgPSByZXF1aXJlKCcuL2xpYi9yZW5kZXJwYXNzJykoVEhSRUUpXG4gICAgLCBTaGFkZXJQYXNzID0gRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyA9IHJlcXVpcmUoJy4vbGliL3NoYWRlcnBhc3MnKShUSFJFRSwgRWZmZWN0Q29tcG9zZXIpXG4gICAgLCBNYXNrUGFzcyA9IEVmZmVjdENvbXBvc2VyLk1hc2tQYXNzID0gcmVxdWlyZSgnLi9saWIvbWFza3Bhc3MnKShUSFJFRSlcbiAgICAsIENsZWFyTWFza1Bhc3MgPSBFZmZlY3RDb21wb3Nlci5DbGVhck1hc2tQYXNzID0gcmVxdWlyZSgnLi9saWIvY2xlYXJtYXNrcGFzcycpKFRIUkVFKVxuXG4gIGZ1bmN0aW9uIEVmZmVjdENvbXBvc2VyKCByZW5kZXJlciwgcmVuZGVyVGFyZ2V0ICkge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgIGlmICggcmVuZGVyVGFyZ2V0ID09PSB1bmRlZmluZWQgKSB7XG4gICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAxO1xuICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCAxO1xuICAgICAgdmFyIHBhcmFtZXRlcnMgPSB7IG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBtYWdGaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgZm9ybWF0OiBUSFJFRS5SR0JGb3JtYXQsIHN0ZW5jaWxCdWZmZXI6IGZhbHNlIH07XG5cbiAgICAgIHJlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggd2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyApO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcbiAgICB0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcblxuICAgIHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XG4gICAgdGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xuXG4gICAgdGhpcy5wYXNzZXMgPSBbXTtcblxuICAgIHRoaXMuY29weVBhc3MgPSBuZXcgU2hhZGVyUGFzcyggQ29weVNoYWRlciApO1xuICB9O1xuXG4gIEVmZmVjdENvbXBvc2VyLnByb3RvdHlwZSA9IHtcbiAgICBzd2FwQnVmZmVyczogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciB0bXAgPSB0aGlzLnJlYWRCdWZmZXI7XG4gICAgICB0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLndyaXRlQnVmZmVyO1xuICAgICAgdGhpcy53cml0ZUJ1ZmZlciA9IHRtcDtcblxuICAgIH0sXG5cbiAgICBhZGRQYXNzOiBmdW5jdGlvbiAoIHBhc3MgKSB7XG5cbiAgICAgIHRoaXMucGFzc2VzLnB1c2goIHBhc3MgKTtcblxuICAgIH0sXG5cbiAgICBpbnNlcnRQYXNzOiBmdW5jdGlvbiAoIHBhc3MsIGluZGV4ICkge1xuXG4gICAgICB0aGlzLnBhc3Nlcy5zcGxpY2UoIGluZGV4LCAwLCBwYXNzICk7XG5cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoIGRlbHRhICkge1xuXG4gICAgICB0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xuICAgICAgdGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xuXG4gICAgICB2YXIgbWFza0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICB2YXIgcGFzcywgaSwgaWwgPSB0aGlzLnBhc3Nlcy5sZW5ndGg7XG5cbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgaWw7IGkgKysgKSB7XG5cbiAgICAgICAgcGFzcyA9IHRoaXMucGFzc2VzWyBpIF07XG5cbiAgICAgICAgaWYgKCAhcGFzcy5lbmFibGVkICkgY29udGludWU7XG5cbiAgICAgICAgcGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEsIG1hc2tBY3RpdmUgKTtcblxuICAgICAgICBpZiAoIHBhc3MubmVlZHNTd2FwICkge1xuXG4gICAgICAgICAgaWYgKCBtYXNrQWN0aXZlICkge1xuXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMucmVuZGVyZXIuY29udGV4dDtcblxuICAgICAgICAgICAgY29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5OT1RFUVVBTCwgMSwgMHhmZmZmZmZmZiApO1xuXG4gICAgICAgICAgICB0aGlzLmNvcHlQYXNzLnJlbmRlciggdGhpcy5yZW5kZXJlciwgdGhpcy53cml0ZUJ1ZmZlciwgdGhpcy5yZWFkQnVmZmVyLCBkZWx0YSApO1xuXG4gICAgICAgICAgICBjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnN3YXBCdWZmZXJzKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcGFzcyBpbnN0YW5jZW9mIE1hc2tQYXNzICkge1xuXG4gICAgICAgICAgbWFza0FjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIGlmICggcGFzcyBpbnN0YW5jZW9mIENsZWFyTWFza1Bhc3MgKSB7XG5cbiAgICAgICAgICBtYXNrQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICggcmVuZGVyVGFyZ2V0ICkge1xuXG4gICAgICBpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgIHJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0MS5jbG9uZSgpO1xuXG4gICAgICAgIHJlbmRlclRhcmdldC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICByZW5kZXJUYXJnZXQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcbiAgICAgIHRoaXMucmVuZGVyVGFyZ2V0MiA9IHJlbmRlclRhcmdldC5jbG9uZSgpO1xuXG4gICAgICB0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xuICAgICAgdGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xuXG4gICAgfSxcblxuICAgIHNldFNpemU6IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcblxuICAgICAgdmFyIHJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0MS5jbG9uZSgpO1xuXG4gICAgICByZW5kZXJUYXJnZXQud2lkdGggPSB3aWR0aDtcbiAgICAgIHJlbmRlclRhcmdldC5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgIHRoaXMucmVzZXQoIHJlbmRlclRhcmdldCApO1xuXG4gICAgfVxuXG4gIH07XG5cbiAgLy8gc2hhcmVkIG9ydGhvIGNhbWVyYVxuXG4gIEVmZmVjdENvbXBvc2VyLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC0xLCAxLCAxLCAtMSwgMCwgMSApO1xuXG4gIEVmZmVjdENvbXBvc2VyLnF1YWQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoIDIsIDIgKSwgbnVsbCApO1xuXG4gIEVmZmVjdENvbXBvc2VyLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIEVmZmVjdENvbXBvc2VyLnNjZW5lLmFkZCggRWZmZWN0Q29tcG9zZXIucXVhZCApO1xuXG4gIHJldHVybiBFZmZlY3RDb21wb3NlclxufTsiLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuICBmdW5jdGlvbiBDbGVhck1hc2tQYXNzKCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDbGVhck1hc2tQYXNzKSkgcmV0dXJuIG5ldyBDbGVhck1hc2tQYXNzKHNjZW5lLCBjYW1lcmEpO1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gIH07XG5cbiAgQ2xlYXJNYXNrUGFzcy5wcm90b3R5cGUgPSB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XG4gICAgICBjb250ZXh0LmRpc2FibGUoIGNvbnRleHQuU1RFTkNJTF9URVNUICk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDbGVhck1hc2tQYXNzXG59OyIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gIGZ1bmN0aW9uIE1hc2tQYXNzKCBzY2VuZSwgY2FtZXJhICkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYXNrUGFzcykpIHJldHVybiBuZXcgTWFza1Bhc3Moc2NlbmUsIGNhbWVyYSk7XG5cbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG5cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXIgPSB0cnVlO1xuICAgIHRoaXMubmVlZHNTd2FwID0gZmFsc2U7XG5cbiAgICB0aGlzLmludmVyc2UgPSBmYWxzZTtcbiAgfTtcblxuICBNYXNrUGFzcy5wcm90b3R5cGUgPSB7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcblxuICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xuXG4gICAgICAvLyBkb24ndCB1cGRhdGUgY29sb3Igb3IgZGVwdGhcblxuICAgICAgY29udGV4dC5jb2xvck1hc2soIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlICk7XG4gICAgICBjb250ZXh0LmRlcHRoTWFzayggZmFsc2UgKTtcblxuICAgICAgLy8gc2V0IHVwIHN0ZW5jaWxcblxuICAgICAgdmFyIHdyaXRlVmFsdWUsIGNsZWFyVmFsdWU7XG5cbiAgICAgIGlmICggdGhpcy5pbnZlcnNlICkge1xuXG4gICAgICAgIHdyaXRlVmFsdWUgPSAwO1xuICAgICAgICBjbGVhclZhbHVlID0gMTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB3cml0ZVZhbHVlID0gMTtcbiAgICAgICAgY2xlYXJWYWx1ZSA9IDA7XG5cbiAgICAgIH1cblxuICAgICAgY29udGV4dC5lbmFibGUoIGNvbnRleHQuU1RFTkNJTF9URVNUICk7XG4gICAgICBjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSApO1xuICAgICAgY29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5BTFdBWVMsIHdyaXRlVmFsdWUsIDB4ZmZmZmZmZmYgKTtcbiAgICAgIGNvbnRleHQuY2xlYXJTdGVuY2lsKCBjbGVhclZhbHVlICk7XG5cbiAgICAgIC8vIGRyYXcgaW50byB0aGUgc3RlbmNpbCBidWZmZXJcblxuICAgICAgcmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xuICAgICAgcmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgd3JpdGVCdWZmZXIsIHRoaXMuY2xlYXIgKTtcblxuICAgICAgLy8gcmUtZW5hYmxlIHVwZGF0ZSBvZiBjb2xvciBhbmQgZGVwdGhcblxuICAgICAgY29udGV4dC5jb2xvck1hc2soIHRydWUsIHRydWUsIHRydWUsIHRydWUgKTtcbiAgICAgIGNvbnRleHQuZGVwdGhNYXNrKCB0cnVlICk7XG5cbiAgICAgIC8vIG9ubHkgcmVuZGVyIHdoZXJlIHN0ZW5jaWwgaXMgc2V0IHRvIDFcblxuICAgICAgY29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5FUVVBTCwgMSwgMHhmZmZmZmZmZiApOyAgLy8gZHJhdyBpZiA9PSAxXG4gICAgICBjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAsIGNvbnRleHQuS0VFUCApO1xuXG4gICAgfVxuXG4gIH07XG5cbiAgcmV0dXJuIE1hc2tQYXNzXG59O1xuIiwiLyoqXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcbiAgZnVuY3Rpb24gUmVuZGVyUGFzcyggc2NlbmUsIGNhbWVyYSwgb3ZlcnJpZGVNYXRlcmlhbCwgY2xlYXJDb2xvciwgY2xlYXJBbHBoYSApIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVuZGVyUGFzcykpIHJldHVybiBuZXcgUmVuZGVyUGFzcyhzY2VuZSwgY2FtZXJhLCBvdmVycmlkZU1hdGVyaWFsLCBjbGVhckNvbG9yLCBjbGVhckFscGhhKTtcblxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMub3ZlcnJpZGVNYXRlcmlhbCA9IG92ZXJyaWRlTWF0ZXJpYWw7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3IgPSBjbGVhckNvbG9yO1xuICAgIHRoaXMuY2xlYXJBbHBoYSA9ICggY2xlYXJBbHBoYSAhPT0gdW5kZWZpbmVkICkgPyBjbGVhckFscGhhIDogMTtcblxuICAgIHRoaXMub2xkQ2xlYXJDb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgIHRoaXMub2xkQ2xlYXJBbHBoYSA9IDE7XG5cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXIgPSB0cnVlO1xuICAgIHRoaXMubmVlZHNTd2FwID0gZmFsc2U7XG5cbiAgfTtcblxuICBSZW5kZXJQYXNzLnByb3RvdHlwZSA9IHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xuXG4gICAgICB0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSB0aGlzLm92ZXJyaWRlTWF0ZXJpYWw7XG5cbiAgICAgIGlmICggdGhpcy5jbGVhckNvbG9yICkge1xuXG4gICAgICAgIHRoaXMub2xkQ2xlYXJDb2xvci5jb3B5KCByZW5kZXJlci5nZXRDbGVhckNvbG9yKCkgKTtcbiAgICAgICAgdGhpcy5vbGRDbGVhckFscGhhID0gcmVuZGVyZXIuZ2V0Q2xlYXJBbHBoYSgpO1xuXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMuY2xlYXJDb2xvciwgdGhpcy5jbGVhckFscGhhICk7XG5cbiAgICAgIH1cblxuICAgICAgcmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xuXG4gICAgICBpZiAoIHRoaXMuY2xlYXJDb2xvciApIHtcblxuICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLm9sZENsZWFyQ29sb3IsIHRoaXMub2xkQ2xlYXJBbHBoYSApO1xuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XG5cbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gUmVuZGVyUGFzcztcblxufTtcbiIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFLCBFZmZlY3RDb21wb3Nlcikge1xuICBmdW5jdGlvbiBTaGFkZXJQYXNzKCBzaGFkZXIsIHRleHR1cmVJRCApIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2hhZGVyUGFzcykpIHJldHVybiBuZXcgU2hhZGVyUGFzcyhzaGFkZXIsIHRleHR1cmVJRCk7XG5cbiAgICB0aGlzLnRleHR1cmVJRCA9ICggdGV4dHVyZUlEICE9PSB1bmRlZmluZWQgKSA/IHRleHR1cmVJRCA6IFwidERpZmZ1c2VcIjtcblxuICAgIHRoaXMudW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBzaGFkZXIudW5pZm9ybXMgKTtcblxuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcblxuICAgICAgdW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG4gICAgICB2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXG4gICAgICBmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyXG5cbiAgICB9ICk7XG5cbiAgICB0aGlzLnJlbmRlclRvU2NyZWVuID0gZmFsc2U7XG5cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyID0gZmFsc2U7XG5cbiAgfTtcblxuICBTaGFkZXJQYXNzLnByb3RvdHlwZSA9IHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xuXG4gICAgICBpZiAoIHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0gKSB7XG5cbiAgICAgICAgdGhpcy51bmlmb3Jtc1sgdGhpcy50ZXh0dXJlSUQgXS52YWx1ZSA9IHJlYWRCdWZmZXI7XG5cbiAgICAgIH1cblxuICAgICAgRWZmZWN0Q29tcG9zZXIucXVhZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XG5cbiAgICAgIGlmICggdGhpcy5yZW5kZXJUb1NjcmVlbiApIHtcblxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIEVmZmVjdENvbXBvc2VyLnNjZW5lLCBFZmZlY3RDb21wb3Nlci5jYW1lcmEgKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIEVmZmVjdENvbXBvc2VyLnNjZW5lLCBFZmZlY3RDb21wb3Nlci5jYW1lcmEsIHdyaXRlQnVmZmVyLCB0aGlzLmNsZWFyICk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9O1xuXG4gIHJldHVybiBTaGFkZXJQYXNzO1xuXG59OyIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqXG4gKiBGdWxsLXNjcmVlbiB0ZXh0dXJlZCBxdWFkIHNoYWRlclxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB1bmlmb3Jtczoge1xuICAgIFwidERpZmZ1c2VcIjogeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcbiAgICBcIm9wYWNpdHlcIjogIHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfVxuICB9LFxuICB2ZXJ0ZXhTaGFkZXI6IFtcbiAgICBcInZhcnlpbmcgdmVjMiB2VXY7XCIsXG5cbiAgICBcInZvaWQgbWFpbigpIHtcIixcblxuICAgICAgXCJ2VXYgPSB1djtcIixcbiAgICAgIFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxuXG4gICAgXCJ9XCJcbiAgXS5qb2luKFwiXFxuXCIpLFxuICBmcmFnbWVudFNoYWRlcjogW1xuICAgIFwidW5pZm9ybSBmbG9hdCBvcGFjaXR5O1wiLFxuXG4gICAgXCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcIixcblxuICAgIFwidmFyeWluZyB2ZWMyIHZVdjtcIixcblxuICAgIFwidm9pZCBtYWluKCkge1wiLFxuXG4gICAgICBcInZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCB2VXYgKTtcIixcbiAgICAgIFwiZ2xfRnJhZ0NvbG9yID0gb3BhY2l0eSAqIHRleGVsO1wiLFxuXG4gICAgXCJ9XCJcbiAgXS5qb2luKFwiXFxuXCIpXG59O1xuIiwidmFyIGNyZWF0ZVR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuXG4gICAgdmFyIHR5cGVzID0gY3JlYXRlVHlwZXMoVEhSRUUpIFxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZShnbFNoYWRlciwgb3B0cykge1xuICAgICAgICBvcHRzID0gb3B0c3x8e31cblxuICAgICAgICBpZiAodHlwZW9mIG9wdHMuY29sb3JzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIG9wdHMuY29sb3JzID0gW29wdHMuY29sb3JzXVxuICAgICAgICBcbiAgICAgICAgdmFyIHRVbmlmb3JtcyA9IHR5cGVzKCBnbFNoYWRlci51bmlmb3Jtcywgb3B0cy5jb2xvcnMgKVxuICAgICAgICB2YXIgdEF0dHJpYnMgPSB0eXBlcyggZ2xTaGFkZXIuYXR0cmlidXRlcywgb3B0cy5jb2xvcnMgKVxuICAgICAgICAgICAgXG4gICAgICAgIC8vY2xlYXIgdGhlIGF0dHJpYnV0ZSBhcnJheXNcbiAgICAgICAgZm9yICh2YXIgayBpbiB0QXR0cmlicykge1xuICAgICAgICAgICAgdEF0dHJpYnNba10udmFsdWUgPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogZ2xTaGFkZXIudmVydGV4LFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdsU2hhZGVyLmZyYWdtZW50LFxuICAgICAgICAgICAgdW5pZm9ybXM6IHRVbmlmb3JtcyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRBdHRyaWJzXG4gICAgICAgIH1cbiAgICB9XG59IiwidmFyIHR5cGVNYXAgPSB7XG4gICAgJ2ludCc6ICdpJyxcbiAgICAnZmxvYXQnOiAnZicsXG4gICAgJ2l2ZWMyJzogJ2kyJyxcbiAgICAnaXZlYzMnOiAnaTMnLFxuICAgICdpdmVjNCc6ICdpNCcsXG4gICAgJ3ZlYzInOiAndjInLFxuICAgICd2ZWMzJzogJ3YzJyxcbiAgICAndmVjNCc6ICd2NCcsXG4gICAgJ21hdDQnOiAnbTQnLFxuICAgICdtYXQzJzogJ20zJyxcbiAgICAnc2FtcGxlcjJEJzogJ3QnLFxuICAgICdzYW1wbGVyQ3ViZSc6ICd0J1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoVEhSRUUpIHtcbiAgICBmdW5jdGlvbiBuZXdJbnN0YW5jZSh0eXBlLCBpc0FycmF5KSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZmxvYXQnOiBcbiAgICAgICAgICAgIGNhc2UgJ2ludCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIGNhc2UgJ3ZlYzInOlxuICAgICAgICAgICAgY2FzZSAnaXZlYzInOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMigpXG4gICAgICAgICAgICBjYXNlICd2ZWMzJzpcbiAgICAgICAgICAgIGNhc2UgJ2l2ZWMzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjMoKVxuICAgICAgICAgICAgY2FzZSAndmVjNCc6XG4gICAgICAgICAgICBjYXNlICdpdmVjNCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5WZWN0b3I0KClcbiAgICAgICAgICAgIGNhc2UgJ21hdDQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpXG4gICAgICAgICAgICBjYXNlICdtYXQzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDMoKVxuICAgICAgICAgICAgY2FzZSAnc2FtcGxlckN1YmUnOlxuICAgICAgICAgICAgY2FzZSAnc2FtcGxlcjJEJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlRleHR1cmUoKVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0VmFsdWUodHlwZSwgaXNBcnJheSwgYXJyYXlMZW4pIHtcbiAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgIC8vVGhyZWVKUyBmbGF0dGVucyBpdmVjMyB0eXBlXG4gICAgICAgICAgICAvLyh3ZSBkb24ndCBzdXBwb3J0ICdmdicgdHlwZSlcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnaXZlYzMnKVxuICAgICAgICAgICAgICAgIGFycmF5TGVuICo9IDNcbiAgICAgICAgICAgIHZhciBhciA9IG5ldyBBcnJheShhcnJheUxlbilcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxhci5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBhcltpXSA9IG5ld0luc3RhbmNlKHR5cGUsIGlzQXJyYXkpXG4gICAgICAgICAgICByZXR1cm4gYXJcbiAgICAgICAgfSAgXG4gICAgICAgIHJldHVybiBuZXdJbnN0YW5jZSh0eXBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFR5cGUodHlwZSwgaXNBcnJheSkge1xuICAgICAgICBpZiAoIWlzQXJyYXkpXG4gICAgICAgICAgICByZXR1cm4gdHlwZU1hcFt0eXBlXVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnaW50JylcbiAgICAgICAgICAgIHJldHVybiAnaXYxJ1xuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnZmxvYXQnKVxuICAgICAgICAgICAgcmV0dXJuICdmdjEnXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0eXBlTWFwW3R5cGVdKyd2J1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBzZXR1cFVuaWZvcm1zKGdsVW5pZm9ybXMsIGNvbG9yTmFtZXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbG9yTmFtZXMpKVxuICAgICAgICAgICAgY29sb3JOYW1lcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgICAgICB2YXIgcmVzdWx0ID0ge31cbiAgICAgICAgdmFyIGFycmF5cyA9IHt9XG5cbiAgICAgICAgLy9tYXAgdW5pZm9ybSB0eXBlc1xuICAgICAgICBnbFVuaWZvcm1zLmZvckVhY2goZnVuY3Rpb24odW5pZm9ybSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB1bmlmb3JtLm5hbWVcbiAgICAgICAgICAgIHZhciBpc0FycmF5ID0gLyguKylcXFtbMC05XStcXF0vLmV4ZWMobmFtZSlcblxuICAgICAgICAgICAgLy9zcGVjaWFsIGNhc2U6IGNvbG9ycy4uLlxuICAgICAgICAgICAgaWYgKGNvbG9yTmFtZXMgJiYgY29sb3JOYW1lcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcnJheSBvZiBjb2xvciB1bmlmb3JtcyBub3Qgc3VwcG9ydGVkXCIpXG4gICAgICAgICAgICAgICAgaWYgKHVuaWZvcm0udHlwZSAhPT0gJ3ZlYzMnKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaHJlZUpTIGV4cGVjdHMgdmVjMyBmb3IgQ29sb3IgdW5pZm9ybXNcIikgXG4gICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYycsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gaXNBcnJheVsxXVxuICAgICAgICAgICAgICAgIGlmIChuYW1lIGluIGFycmF5cykgXG4gICAgICAgICAgICAgICAgICAgIGFycmF5c1tuYW1lXS5jb3VudCsrIFxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlzW25hbWVdID0geyBjb3VudDogMSwgdHlwZTogdW5pZm9ybS50eXBlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHsgXG4gICAgICAgICAgICAgICAgdHlwZTogZ2V0VHlwZSh1bmlmb3JtLnR5cGUsIGlzQXJyYXkpLCBcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXNBcnJheSA/IG51bGwgOiBkZWZhdWx0VmFsdWUodW5pZm9ybS50eXBlKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvL25vdyBjbGVhbiB1cCBhbnkgYXJyYXkgdmFsdWVzXG4gICAgICAgIGZvciAodmFyIGsgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgdSA9IHJlc3VsdFtrXVxuICAgICAgICAgICAgaWYgKGsgaW4gYXJyYXlzKSB7IC8vaXMgYW4gYXJyYXlcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGFycmF5c1trXVxuICAgICAgICAgICAgICAgIHUudmFsdWUgPSBkZWZhdWx0VmFsdWUoYS50eXBlLCB0cnVlLCBhLmNvdW50KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlIiwidmFyIGdsc2xpZnkgPSByZXF1aXJlKFwiZ2xzbGlmeVwiKTtcbnZhciB0aHJlZWlmeSA9IHJlcXVpcmUoXCJ0aHJlZS1nbHNsaWZ5XCIpO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoXCJnbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzXCIpKFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZhcnlpbmcgdmVjMiB2X3JnYk5XO1xcbnZhcnlpbmcgdmVjMiB2X3JnYk5FO1xcbnZhcnlpbmcgdmVjMiB2X3JnYlNXO1xcbnZhcnlpbmcgdmVjMiB2X3JnYlNFO1xcbnZhcnlpbmcgdmVjMiB2X3JnYk07XFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxudm9pZCBhX3hfdGV4Y29vcmRzKHZlYzIgZnJhZ0Nvb3JkLCB2ZWMyIHJlc29sdXRpb24sIG91dCB2ZWMyIHZfcmdiTlcsIG91dCB2ZWMyIHZfcmdiTkUsIG91dCB2ZWMyIHZfcmdiU1csIG91dCB2ZWMyIHZfcmdiU0UsIG91dCB2ZWMyIHZfcmdiTSkge1xcbiAgdmVjMiBpbnZlcnNlVlAgPSAxLjAgLyByZXNvbHV0aW9uLnh5O1xcbiAgdl9yZ2JOVyA9IChmcmFnQ29vcmQgKyB2ZWMyKC0xLjAsIC0xLjApKSAqIGludmVyc2VWUDtcXG4gIHZfcmdiTkUgPSAoZnJhZ0Nvb3JkICsgdmVjMigxLjAsIC0xLjApKSAqIGludmVyc2VWUDtcXG4gIHZfcmdiU1cgPSAoZnJhZ0Nvb3JkICsgdmVjMigtMS4wLCAxLjApKSAqIGludmVyc2VWUDtcXG4gIHZfcmdiU0UgPSAoZnJhZ0Nvb3JkICsgdmVjMigxLjAsIDEuMCkpICogaW52ZXJzZVZQO1xcbiAgdl9yZ2JNID0gdmVjMihmcmFnQ29vcmQgKiBpbnZlcnNlVlApO1xcbn1cXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG4gIHZlYzIgZnJhZ0Nvb3JkID0gdXYgKiByZXNvbHV0aW9uO1xcbiAgYV94X3RleGNvb3JkcyhmcmFnQ29vcmQsIHJlc29sdXRpb24sIHZfcmdiTlcsIHZfcmdiTkUsIHZfcmdiU1csIHZfcmdiU0UsIHZfcmdiTSk7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cIiwgXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxudmFyeWluZyB2ZWMyIHZfcmdiTlc7XFxudmFyeWluZyB2ZWMyIHZfcmdiTkU7XFxudmFyeWluZyB2ZWMyIHZfcmdiU1c7XFxudmFyeWluZyB2ZWMyIHZfcmdiU0U7XFxudmFyeWluZyB2ZWMyIHZfcmdiTTtcXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXG4jaWZuZGVmIEZYQUFfUkVEVUNFX01JTlxcblxcbiNkZWZpbmUgRlhBQV9SRURVQ0VfTUlOICAgKDEuMC8gMTI4LjApXFxuXFxuI2VuZGlmXFxuXFxuI2lmbmRlZiBGWEFBX1JFRFVDRV9NVUxcXG5cXG4jZGVmaW5lIEZYQUFfUkVEVUNFX01VTCAgICgxLjAgLyA4LjApXFxuXFxuI2VuZGlmXFxuXFxuI2lmbmRlZiBGWEFBX1NQQU5fTUFYXFxuXFxuI2RlZmluZSBGWEFBX1NQQU5fTUFYICAgICA4LjBcXG5cXG4jZW5kaWZcXG5cXG52ZWM0IGFfeF9meGFhKHNhbXBsZXIyRCB0ZXgsIHZlYzIgZnJhZ0Nvb3JkLCB2ZWMyIHJlc29sdXRpb24sIHZlYzIgdl9yZ2JOVywgdmVjMiB2X3JnYk5FLCB2ZWMyIHZfcmdiU1csIHZlYzIgdl9yZ2JTRSwgdmVjMiB2X3JnYk0pIHtcXG4gIHZlYzQgY29sb3I7XFxuICBtZWRpdW1wIHZlYzIgaW52ZXJzZVZQID0gdmVjMigxLjAgLyByZXNvbHV0aW9uLngsIDEuMCAvIHJlc29sdXRpb24ueSk7XFxuICB2ZWMzIHJnYk5XID0gdGV4dHVyZTJEKHRleCwgdl9yZ2JOVykueHl6O1xcbiAgdmVjMyByZ2JORSA9IHRleHR1cmUyRCh0ZXgsIHZfcmdiTkUpLnh5ejtcXG4gIHZlYzMgcmdiU1cgPSB0ZXh0dXJlMkQodGV4LCB2X3JnYlNXKS54eXo7XFxuICB2ZWMzIHJnYlNFID0gdGV4dHVyZTJEKHRleCwgdl9yZ2JTRSkueHl6O1xcbiAgdmVjNCB0ZXhDb2xvciA9IHRleHR1cmUyRCh0ZXgsIHZfcmdiTSk7XFxuICB2ZWMzIHJnYk0gPSB0ZXhDb2xvci54eXo7XFxuICB2ZWMzIGx1bWEgPSB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpO1xcbiAgZmxvYXQgbHVtYU5XID0gZG90KHJnYk5XLCBsdW1hKTtcXG4gIGZsb2F0IGx1bWFORSA9IGRvdChyZ2JORSwgbHVtYSk7XFxuICBmbG9hdCBsdW1hU1cgPSBkb3QocmdiU1csIGx1bWEpO1xcbiAgZmxvYXQgbHVtYVNFID0gZG90KHJnYlNFLCBsdW1hKTtcXG4gIGZsb2F0IGx1bWFNID0gZG90KHJnYk0sIGx1bWEpO1xcbiAgZmxvYXQgbHVtYU1pbiA9IG1pbihsdW1hTSwgbWluKG1pbihsdW1hTlcsIGx1bWFORSksIG1pbihsdW1hU1csIGx1bWFTRSkpKTtcXG4gIGZsb2F0IGx1bWFNYXggPSBtYXgobHVtYU0sIG1heChtYXgobHVtYU5XLCBsdW1hTkUpLCBtYXgobHVtYVNXLCBsdW1hU0UpKSk7XFxuICBtZWRpdW1wIHZlYzIgZGlyO1xcbiAgZGlyLnggPSAtKChsdW1hTlcgKyBsdW1hTkUpIC0gKGx1bWFTVyArIGx1bWFTRSkpO1xcbiAgZGlyLnkgPSAoKGx1bWFOVyArIGx1bWFTVykgLSAobHVtYU5FICsgbHVtYVNFKSk7XFxuICBmbG9hdCBkaXJSZWR1Y2UgPSBtYXgoKGx1bWFOVyArIGx1bWFORSArIGx1bWFTVyArIGx1bWFTRSkgKiAoMC4yNSAqIEZYQUFfUkVEVUNFX01VTCksIEZYQUFfUkVEVUNFX01JTik7XFxuICBmbG9hdCByY3BEaXJNaW4gPSAxLjAgLyAobWluKGFicyhkaXIueCksIGFicyhkaXIueSkpICsgZGlyUmVkdWNlKTtcXG4gIGRpciA9IG1pbih2ZWMyKEZYQUFfU1BBTl9NQVgsIEZYQUFfU1BBTl9NQVgpLCBtYXgodmVjMigtRlhBQV9TUEFOX01BWCwgLUZYQUFfU1BBTl9NQVgpLCBkaXIgKiByY3BEaXJNaW4pKSAqIGludmVyc2VWUDtcXG4gIHZlYzMgcmdiQSA9IDAuNSAqICh0ZXh0dXJlMkQodGV4LCBmcmFnQ29vcmQgKiBpbnZlcnNlVlAgKyBkaXIgKiAoMS4wIC8gMy4wIC0gMC41KSkueHl6ICsgdGV4dHVyZTJEKHRleCwgZnJhZ0Nvb3JkICogaW52ZXJzZVZQICsgZGlyICogKDIuMCAvIDMuMCAtIDAuNSkpLnh5eik7XFxuICB2ZWMzIHJnYkIgPSByZ2JBICogMC41ICsgMC4yNSAqICh0ZXh0dXJlMkQodGV4LCBmcmFnQ29vcmQgKiBpbnZlcnNlVlAgKyBkaXIgKiAtMC41KS54eXogKyB0ZXh0dXJlMkQodGV4LCBmcmFnQ29vcmQgKiBpbnZlcnNlVlAgKyBkaXIgKiAwLjUpLnh5eik7XFxuICBmbG9hdCBsdW1hQiA9IGRvdChyZ2JCLCBsdW1hKTtcXG4gIGlmKChsdW1hQiA8IGx1bWFNaW4pIHx8IChsdW1hQiA+IGx1bWFNYXgpKVxcbiAgICBjb2xvciA9IHZlYzQocmdiQSwgdGV4Q29sb3IuYSk7XFxuICBlbHNlXFxuICAgIGNvbG9yID0gdmVjNChyZ2JCLCB0ZXhDb2xvci5hKTtcXG4gIHJldHVybiBjb2xvcjtcXG59XFxudm9pZCBtYWluKCkge1xcbiAgdmVjMiBmcmFnQ29vcmQgPSB2VXYgKiByZXNvbHV0aW9uO1xcbiAgZ2xfRnJhZ0NvbG9yID0gYV94X2Z4YWEodERpZmZ1c2UsIGZyYWdDb29yZCwgcmVzb2x1dGlvbiwgdl9yZ2JOVywgdl9yZ2JORSwgdl9yZ2JTVywgdl9yZ2JTRSwgdl9yZ2JNKTtcXG59XCIsIFt7XCJuYW1lXCI6XCJyZXNvbHV0aW9uXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9LHtcIm5hbWVcIjpcInJlc29sdXRpb25cIixcInR5cGVcIjpcInZlYzJcIn0se1wibmFtZVwiOlwidERpZmZ1c2VcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifV0sIFtdKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuICAgIHZhciBjcmVhdGVTaGFkZXIgPSB0aHJlZWlmeShUSFJFRSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVTaGFkZXIoc291cmNlKTtcbiAgICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcIikiXX0=
