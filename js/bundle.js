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
module.exports=module.exports={"pages":["Exo2SemiBold.png"],"chars":[{"id":32,"x":0,"y":0,"width":0,"height":0,"xoffset":0,"yoffset":33,"xadvance":7,"page":0,"chnl":0},{"id":41,"x":0,"y":0,"width":20,"height":41,"xoffset":-4,"yoffset":3,"xadvance":12,"page":0,"chnl":0},{"id":40,"x":20,"y":0,"width":19,"height":41,"xoffset":-3,"yoffset":3,"xadvance":12,"page":0,"chnl":0},{"id":124,"x":39,"y":0,"width":13,"height":40,"xoffset":-2,"yoffset":3,"xadvance":8,"page":0,"chnl":0},{"id":125,"x":52,"y":0,"width":18,"height":40,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":123,"x":70,"y":0,"width":18,"height":40,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":36,"x":88,"y":0,"width":25,"height":39,"xoffset":-3,"yoffset":3,"xadvance":18,"page":0,"chnl":0},{"id":93,"x":113,"y":0,"width":17,"height":39,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":91,"x":130,"y":0,"width":17,"height":39,"xoffset":-2,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":81,"x":147,"y":0,"width":28,"height":39,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":106,"x":175,"y":0,"width":16,"height":38,"xoffset":-4,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":92,"x":191,"y":0,"width":26,"height":34,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":47,"x":217,"y":0,"width":26,"height":34,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":102,"x":243,"y":0,"width":23,"height":33,"xoffset":-4,"yoffset":5,"xadvance":13,"page":0,"chnl":0},{"id":38,"x":266,"y":0,"width":32,"height":32,"xoffset":-3,"yoffset":6,"xadvance":25,"page":0,"chnl":0},{"id":35,"x":298,"y":0,"width":30,"height":32,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":37,"x":328,"y":0,"width":36,"height":32,"xoffset":-3,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":63,"x":364,"y":0,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":16,"page":0,"chnl":0},{"id":33,"x":388,"y":0,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":48,"x":402,"y":0,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":57,"x":428,"y":0,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":56,"x":453,"y":0,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":55,"x":479,"y":0,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":54,"x":0,"y":41,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":53,"x":26,"y":41,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":52,"x":50,"y":41,"width":27,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":51,"x":77,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":50,"x":102,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":49,"x":127,"y":41,"width":19,"height":32,"xoffset":-4,"yoffset":6,"xadvance":13,"page":0,"chnl":0},{"id":121,"x":146,"y":41,"width":27,"height":32,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":113,"x":173,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":112,"x":198,"y":41,"width":25,"height":32,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":108,"x":223,"y":41,"width":17,"height":32,"xoffset":-2,"yoffset":6,"xadvance":10,"page":0,"chnl":0},{"id":107,"x":240,"y":41,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":105,"x":264,"y":41,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":8,"page":0,"chnl":0},{"id":104,"x":278,"y":41,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":103,"x":302,"y":41,"width":27,"height":32,"xoffset":-4,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":100,"x":329,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":98,"x":354,"y":41,"width":25,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":90,"x":379,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":89,"x":404,"y":41,"width":28,"height":32,"xoffset":-4,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":88,"x":432,"y":41,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":87,"x":461,"y":41,"width":39,"height":32,"xoffset":-4,"yoffset":6,"xadvance":31,"page":0,"chnl":0},{"id":86,"x":0,"y":73,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":85,"x":29,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":21,"page":0,"chnl":0},{"id":84,"x":56,"y":73,"width":28,"height":32,"xoffset":-4,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":83,"x":84,"y":73,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":82,"x":109,"y":73,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":80,"x":135,"y":73,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":79,"x":161,"y":73,"width":28,"height":32,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":78,"x":189,"y":73,"width":28,"height":32,"xoffset":-2,"yoffset":6,"xadvance":23,"page":0,"chnl":0},{"id":77,"x":217,"y":73,"width":34,"height":32,"xoffset":-2,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":76,"x":251,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":75,"x":275,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":74,"x":302,"y":73,"width":18,"height":32,"xoffset":-4,"yoffset":6,"xadvance":11,"page":0,"chnl":0},{"id":73,"x":320,"y":73,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":72,"x":334,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":71,"x":361,"y":73,"width":27,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":70,"x":388,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":69,"x":412,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":68,"x":436,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":21,"page":0,"chnl":0},{"id":67,"x":463,"y":73,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":66,"x":0,"y":105,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":65,"x":26,"y":105,"width":30,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":64,"x":56,"y":105,"width":29,"height":31,"xoffset":-2,"yoffset":9,"xadvance":24,"page":0,"chnl":0},{"id":116,"x":85,"y":105,"width":22,"height":30,"xoffset":-4,"yoffset":8,"xadvance":13,"page":0,"chnl":0},{"id":59,"x":107,"y":105,"width":14,"height":29,"xoffset":-2,"yoffset":14,"xadvance":8,"page":0,"chnl":0},{"id":122,"x":121,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":120,"x":145,"y":105,"width":26,"height":26,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":119,"x":171,"y":105,"width":36,"height":26,"xoffset":-4,"yoffset":12,"xadvance":27,"page":0,"chnl":0},{"id":118,"x":207,"y":105,"width":27,"height":26,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":117,"x":234,"y":105,"width":24,"height":26,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":115,"x":258,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":114,"x":282,"y":105,"width":20,"height":26,"xoffset":-2,"yoffset":12,"xadvance":13,"page":0,"chnl":0},{"id":111,"x":302,"y":105,"width":25,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":110,"x":327,"y":105,"width":24,"height":26,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":109,"x":351,"y":105,"width":33,"height":26,"xoffset":-2,"yoffset":12,"xadvance":28,"page":0,"chnl":0},{"id":101,"x":384,"y":105,"width":25,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":99,"x":409,"y":105,"width":23,"height":26,"xoffset":-3,"yoffset":12,"xadvance":16,"page":0,"chnl":0},{"id":97,"x":432,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":43,"x":456,"y":105,"width":24,"height":24,"xoffset":-3,"yoffset":11,"xadvance":17,"page":0,"chnl":0},{"id":62,"x":480,"y":105,"width":23,"height":24,"xoffset":-2,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":60,"x":0,"y":137,"width":23,"height":24,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":58,"x":23,"y":137,"width":14,"height":24,"xoffset":-3,"yoffset":14,"xadvance":8,"page":0,"chnl":0},{"id":42,"x":37,"y":137,"width":21,"height":21,"xoffset":-3,"yoffset":6,"xadvance":14,"page":0,"chnl":0},{"id":61,"x":58,"y":137,"width":24,"height":20,"xoffset":-2,"yoffset":13,"xadvance":19,"page":0,"chnl":0},{"id":94,"x":82,"y":137,"width":23,"height":19,"xoffset":-4,"yoffset":8,"xadvance":14,"page":0,"chnl":0},{"id":44,"x":105,"y":137,"width":14,"height":19,"xoffset":-3,"yoffset":24,"xadvance":8,"page":0,"chnl":0},{"id":39,"x":119,"y":137,"width":13,"height":17,"xoffset":-3,"yoffset":6,"xadvance":7,"page":0,"chnl":0},{"id":96,"x":132,"y":137,"width":18,"height":17,"xoffset":-4,"yoffset":5,"xadvance":11,"page":0,"chnl":0},{"id":34,"x":150,"y":137,"width":18,"height":17,"xoffset":-3,"yoffset":6,"xadvance":12,"page":0,"chnl":0},{"id":126,"x":168,"y":137,"width":22,"height":14,"xoffset":-2,"yoffset":17,"xadvance":17,"page":0,"chnl":0},{"id":46,"x":190,"y":137,"width":14,"height":14,"xoffset":-3,"yoffset":24,"xadvance":8,"page":0,"chnl":0},{"id":95,"x":204,"y":137,"width":24,"height":13,"xoffset":-2,"yoffset":28,"xadvance":18,"page":0,"chnl":0},{"id":45,"x":228,"y":137,"width":19,"height":13,"xoffset":-2,"yoffset":18,"xadvance":14,"page":0,"chnl":0}],"kernings":[],"info":{"face":"Exo 2 Semi Bold","size":32,"bold":0,"italic":0,"charset":"","unicode":0,"stretchH":100,"smooth":1,"aa":1,"padding":[4,4,4,4],"spacing":[-8,-8]},"common":{"lineHeight":40,"base":33,"scaleW":512,"scaleH":512,"pages":1,"packed":0}}
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
var TweenLite = (typeof window !== "undefined" ? window.TweenMax : typeof global !== "undefined" ? global.TweenMax : null)

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

                // rotating across whole screen goes 360 degrees around
                scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

                // rotating up and down along whole screen attempts to go 360, but limited to 180
                scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

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
module.exports=require("/projects/blackice/node_modules/gl-sprites/node_modules/mixes/node_modules/xtend/immutable.js")
},{"/projects/blackice/node_modules/gl-sprites/node_modules/mixes/node_modules/xtend/immutable.js":"/projects/blackice/node_modules/gl-sprites/node_modules/mixes/node_modules/xtend/immutable.js"}]},{},["./index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImZvbnRzL0V4bzJTZW1pQm9sZC5qc29uIiwibGliL1JpZ1NjZW5lLmpzIiwibGliL1RleHRQYXNzLmpzIiwibGliL1RleHRSZW5kZXJlci5qcyIsImxpYi9jcmVhdGUtZm9udC5qcyIsImxpYi9mZWF0dXJlLXBvaW50cy5qcyIsImxpYi9yZW5kZXJlci5qcyIsImxpYi9zZXR1cC1lZmZlY3RzLmpzIiwibGliL3NldHVwLXdhdGVyLmpzIiwibGliL3NoYWRlcnMvYmx1ci5qcyIsImxpYi9zaGFkZXJzL2NyZWF0ZS5qcyIsImxpYi9zaGFkZXJzL2xlbnMuanMiLCJsaWIvc2hhZGVycy9wYXNzLmpzIiwibGliL3RocmVlLW9yYml0LWNhbWVyYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9hcy1udW1iZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXMtYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jYW52YXMtYXBwL25vZGVfbW9kdWxlcy9hZGQtZXZlbnQtbGlzdGVuZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvZGVib3VuY2UvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvZGVib3VuY2Uvbm9kZV9tb2R1bGVzL2RhdGUtbm93L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvbm9kZV9tb2R1bGVzL2lzLXdlYmdsLWNvbnRleHQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvd2ViZ2wtY29udGV4dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kb21yZWFkeS9yZWFkeS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1iYXNpYy1zaGFkZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9saWIvY3JlYXRlLWF0dHJpYnV0ZXMuanMiLCJub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9saWIvY3JlYXRlLXVuaWZvcm1zLmpzIiwibm9kZV9tb2R1bGVzL2dsLWJhc2ljLXNoYWRlci9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyLWNvcmUvbGliL3JlZmxlY3QuanMiLCJub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9ub2RlX21vZHVsZXMvZHVwL2R1cC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1iYXNpYy1zaGFkZXIvbm9kZV9tb2R1bGVzL2dsLXNoYWRlci1jb3JlL3NoYWRlci1jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2RldGVybWluYW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJvbVF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUm90YXRpb25UcmFuc2xhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2ZydXN0dW0uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbG9va0F0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9vcnRoby5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3BlcnNwZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVaLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zdHIuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc3Bvc2UuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLWJtZm9udC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtc2ltcGxlLXJlbmRlcmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXJlbmRlcmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC1nbHlwaC1pdGVyYXRvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtc2ltcGxlLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC1yZW5kZXJlci9ub2RlX21vZHVsZXMvZm9udHBhdGgtdXRpbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtc2ltcGxlLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC1yZW5kZXJlci9ub2RlX21vZHVsZXMvZm9udHBhdGgtd29yZHdyYXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9jb21tb24uanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1hbGlhc2VkLXZhby9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1hbGlhc2VkLXZhby9saWIvZG8tYmluZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1hbGlhc2VkLXZhby9saWIvdmFvLWVtdWxhdGVkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9idWZmZXIuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9uZGFycmF5LW9wcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9jb21waWxlci5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9saWIvY29tcGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9saWIvdGh1bmsuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9ub2RlX21vZHVsZXMvY3dpc2UtY29tcGlsZXIvbm9kZV9tb2R1bGVzL3VuaXEvdW5pcS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9ub2RlX21vZHVsZXMvYml0LXR3aWRkbGUvdHdpZGRsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9ub2RlX21vZHVsZXMvZHVwL2R1cC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9wb29sLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvd2ViZ2xldy9ub2RlX21vZHVsZXMvd2Vha21hcC93ZWFrbWFwLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvd2ViZ2xldy93ZWJnbGV3LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtd2hpdGUtdGV4dHVyZS9ub2RlX21vZHVsZXMvZ2wtdGV4dHVyZTJkL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9uZGFycmF5LW9wcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC13aGl0ZS10ZXh0dXJlL25vZGVfbW9kdWxlcy9nbC10ZXh0dXJlMmQvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9wb29sLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC9ub2RlX21vZHVsZXMvd2ViZ2xldy93ZWJnbGV3LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL25kYXJyYXkvbmRhcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC13aGl0ZS10ZXh0dXJlL25vZGVfbW9kdWxlcy9uZGFycmF5L25vZGVfbW9kdWxlcy9pb3RhLWFycmF5L2lvdGEuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvbWl4ZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvbmRhcnJheS9uZGFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL251bWJlci11dGlsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL3ByZW11bHRpcGxpZWQtcmdiYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9wYWNrLXJnYmEtZmxvYXQuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy90ZXhjb29yZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbWF0NC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9hcy1udW1iZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL2dsLW1hdDQvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1tYXQ0L211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL2dsLW1hdDQvb3J0aG8uanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVYLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVouanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvbWl4ZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvbWl4ZXMvbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy90ZXhjb29yZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL3RyYW5zZm9ybXMuanMiLCJub2RlX21vZHVsZXMvZ2wtdGV4dHVyZTJkL3RleHR1cmUuanMiLCJub2RlX21vZHVsZXMvZ2xzbGlmeS9hZGFwdGVyLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xpZnkvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsaWZ5L25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9zaGFkZXItY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzIiwibm9kZV9tb2R1bGVzL2ltZy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL21peGVzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhZi5qcy9yYWYuanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvbGliL2NsZWFybWFza3Bhc3MuanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvbGliL21hc2twYXNzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL2xpYi9yZW5kZXJwYXNzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL2xpYi9zaGFkZXJwYXNzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL25vZGVfbW9kdWxlcy90aHJlZS1jb3B5c2hhZGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWdsc2xpZnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZ2xzbGlmeS90eXBlcy5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zaGFkZXItZnhhYS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDelJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU1BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBOztBQ0FBOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgYXBwID0gcmVxdWlyZSgnY2FudmFzLWFwcCcpKHJlbmRlciwge1xuICAgIGNvbnRleHQ6ICd3ZWJnbCcsXG4gICAgY29udGV4dEF0dHJpYnV0ZXM6IHsgYW50aWFsaWFzOiBmYWxzZSB9LFxuICAgIG9uUmVzaXplOiBoYW5kbGVSZXNpemVcbn0pXG5cbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG5cbnZhciBSZW5kZXJlciA9IHJlcXVpcmUoJy4vbGliL3JlbmRlcmVyJylcbnZhciBjcmVhdGVGb250ID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLWZvbnQnKVxuXG5cbnZhciByZW5kZXJlclxuXG5mdW5jdGlvbiByZW5kZXIoZ2wsIHdpZHRoLCBoZWlnaHQsIGR0KSB7XG4gICAgaWYgKHJlbmRlcmVyKVxuICAgICAgICByZW5kZXJlci5kcmF3KGR0KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGlmIChyZW5kZXJlcilcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpXG59XG5cbnJlcXVpcmUoJ3JhZi5qcycpXG5yZXF1aXJlKCdkb21yZWFkeScpKGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgYXBwLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAuY2FudmFzKVxuXG4gICAgdmFyIGdsID0gYXBwLmNvbnRleHRcbiAgICBjcmVhdGVGb250KGdsLCBmdW5jdGlvbihlcnIsIGZvbnQpIHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuXG4gICAgICAgIHJlbmRlcmVyID0gUmVuZGVyZXIoe1xuICAgICAgICAgICAgZ2w6IGdsLCBcbiAgICAgICAgICAgIHdpZHRoOiBhcHAud2lkdGgsIFxuICAgICAgICAgICAgaGVpZ2h0OiBhcHAuaGVpZ2h0LFxuICAgICAgICAgICAgZm9udDogZm9udFxuICAgICAgICB9KSBcbiAgICAgICAgYXBwLnN0YXJ0KClcbiAgICB9KVxufSlcblxuXG5cblxuXG5mdW5jdGlvbiBzZXR1cFNtb290aFRleChnbCwgdCkge1xuICAgIHQubWluRmlsdGVyID0gZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICB0Lm1hZ0ZpbHRlciA9IGdsLkxJTkVBUlxuXG4gICAgdmFyIGV4dCA9IChnbC5nZXRFeHRlbnNpb24oJ0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycpIFxuICAgICAgICAgICAgICAgICAgICB8fCBnbC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpKTtcbiAgICBpZiAoZXh0KSB7XG4gICAgICAgIHZhciBtYXhBbmlzdHJvcGh5ID0gZ2wuZ2V0UGFyYW1ldGVyKGV4dC5NQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJmKGdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgTWF0aC5taW4oMTYsIG1heEFuaXN0cm9waHkpKTtcbiAgICB9XG5cbiAgICB0LmdlbmVyYXRlTWlwbWFwKClcbn1cblxuZnVuY3Rpb24gc2V0dXBOZWFyZXN0VGV4KGdsLCB0KSB7XG4gICAgdC5taW5GaWx0ZXIgPSB0Lm1hZ0ZpbHRlciA9IGdsLk5FQVJFU1Rcbn1cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIm1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPXtcInBhZ2VzXCI6W1wiRXhvMlNlbWlCb2xkLnBuZ1wiXSxcImNoYXJzXCI6W3tcImlkXCI6MzIsXCJ4XCI6MCxcInlcIjowLFwid2lkdGhcIjowLFwiaGVpZ2h0XCI6MCxcInhvZmZzZXRcIjowLFwieW9mZnNldFwiOjMzLFwieGFkdmFuY2VcIjo3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0MSxcInhcIjowLFwieVwiOjAsXCJ3aWR0aFwiOjIwLFwiaGVpZ2h0XCI6NDEsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MyxcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQwLFwieFwiOjIwLFwieVwiOjAsXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6NDEsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MyxcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyNCxcInhcIjozOSxcInlcIjowLFwid2lkdGhcIjoxMyxcImhlaWdodFwiOjQwLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjMsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyNSxcInhcIjo1MixcInlcIjowLFwid2lkdGhcIjoxOCxcImhlaWdodFwiOjQwLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMjMsXCJ4XCI6NzAsXCJ5XCI6MCxcIndpZHRoXCI6MTgsXCJoZWlnaHRcIjo0MCxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjoxMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MzYsXCJ4XCI6ODgsXCJ5XCI6MCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjozLFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTMsXCJ4XCI6MTEzLFwieVwiOjAsXCJ3aWR0aFwiOjE3LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NCxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkxLFwieFwiOjEzMCxcInlcIjowLFwid2lkdGhcIjoxNyxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MSxcInhcIjoxNDcsXCJ5XCI6MCxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA2LFwieFwiOjE3NSxcInlcIjowLFwid2lkdGhcIjoxNixcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkyLFwieFwiOjE5MSxcInlcIjowLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjM0LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0NyxcInhcIjoyMTcsXCJ5XCI6MCxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTAyLFwieFwiOjI0MyxcInlcIjowLFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjMzLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjUsXCJ4YWR2YW5jZVwiOjEzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozOCxcInhcIjoyNjYsXCJ5XCI6MCxcIndpZHRoXCI6MzIsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyNSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MzUsXCJ4XCI6Mjk4LFwieVwiOjAsXCJ3aWR0aFwiOjMwLFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjM3LFwieFwiOjMyOCxcInlcIjowLFwid2lkdGhcIjozNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2MyxcInhcIjozNjQsXCJ5XCI6MCxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MzMsXCJ4XCI6Mzg4LFwieVwiOjAsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6OSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDgsXCJ4XCI6NDAyLFwieVwiOjAsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU3LFwieFwiOjQyOCxcInlcIjowLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1NixcInhcIjo0NTMsXCJ5XCI6MCxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTUsXCJ4XCI6NDc5LFwieVwiOjAsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU0LFwieFwiOjAsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjUzLFwieFwiOjI2LFwieVwiOjQxLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1MixcInhcIjo1MCxcInlcIjo0MSxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTEsXCJ4XCI6NzcsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjUwLFwieFwiOjEwMixcInlcIjo0MSxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDksXCJ4XCI6MTI3LFwieVwiOjQxLFwid2lkdGhcIjoxOSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjEzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMjEsXCJ4XCI6MTQ2LFwieVwiOjQxLFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTEzLFwieFwiOjE3MyxcInlcIjo0MSxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExMixcInhcIjoxOTgsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDgsXCJ4XCI6MjIzLFwieVwiOjQxLFwid2lkdGhcIjoxNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjEwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDcsXCJ4XCI6MjQwLFwieVwiOjQxLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDUsXCJ4XCI6MjY0LFwieVwiOjQxLFwid2lkdGhcIjoxNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwNCxcInhcIjoyNzgsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwMyxcInhcIjozMDIsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDAsXCJ4XCI6MzI5LFwieVwiOjQxLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo5OCxcInhcIjozNTQsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkwLFwieFwiOjM3OSxcInlcIjo0MSxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODksXCJ4XCI6NDA0LFwieVwiOjQxLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4OCxcInhcIjo0MzIsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjg3LFwieFwiOjQ2MSxcInlcIjo0MSxcIndpZHRoXCI6MzksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjozMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODYsXCJ4XCI6MCxcInlcIjo3MyxcIndpZHRoXCI6MjksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODUsXCJ4XCI6MjksXCJ5XCI6NzMsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjg0LFwieFwiOjU2LFwieVwiOjczLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MyxcInhcIjo4NCxcInlcIjo3MyxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODIsXCJ4XCI6MTA5LFwieVwiOjczLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MCxcInhcIjoxMzUsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjc5LFwieFwiOjE2MSxcInlcIjo3MyxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzgsXCJ4XCI6MTg5LFwieVwiOjczLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3NyxcInhcIjoyMTcsXCJ5XCI6NzMsXCJ3aWR0aFwiOjM0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjc2LFwieFwiOjI1MSxcInlcIjo3MyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzUsXCJ4XCI6Mjc1LFwieVwiOjczLFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3NCxcInhcIjozMDIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjczLFwieFwiOjMyMCxcInlcIjo3MyxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3MixcInhcIjozMzQsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjcxLFwieFwiOjM2MSxcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzAsXCJ4XCI6Mzg4LFwieVwiOjczLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2OSxcInhcIjo0MTIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjY4LFwieFwiOjQzNixcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjcsXCJ4XCI6NDYzLFwieVwiOjczLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NixcInhcIjowLFwieVwiOjEwNSxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjUsXCJ4XCI6MjYsXCJ5XCI6MTA1LFwid2lkdGhcIjozMCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NCxcInhcIjo1NixcInlcIjoxMDUsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzEsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6OSxcInhhZHZhbmNlXCI6MjQsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExNixcInhcIjo4NSxcInlcIjoxMDUsXCJ3aWR0aFwiOjIyLFwiaGVpZ2h0XCI6MzAsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6OCxcInhhZHZhbmNlXCI6MTMsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU5LFwieFwiOjEwNyxcInlcIjoxMDUsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MjksXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTQsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyMixcInhcIjoxMjEsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTIwLFwieFwiOjE0NSxcInlcIjoxMDUsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTksXCJ4XCI6MTcxLFwieVwiOjEwNSxcIndpZHRoXCI6MzYsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExOCxcInhcIjoyMDcsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTE3LFwieFwiOjIzNCxcInlcIjoxMDUsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTUsXCJ4XCI6MjU4LFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExNCxcInhcIjoyODIsXCJ5XCI6MTA1LFwid2lkdGhcIjoyMCxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTExLFwieFwiOjMwMixcInlcIjoxMDUsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTAsXCJ4XCI6MzI3LFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwOSxcInhcIjozNTEsXCJ5XCI6MTA1LFwid2lkdGhcIjozMyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoyOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTAxLFwieFwiOjM4NCxcInlcIjoxMDUsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo5OSxcInhcIjo0MDksXCJ5XCI6MTA1LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTcsXCJ4XCI6NDMyLFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQzLFwieFwiOjQ1NixcInlcIjoxMDUsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTEsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2MixcInhcIjo0ODAsXCJ5XCI6MTA1LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjI0LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjAsXCJ4XCI6MCxcInlcIjoxMzcsXCJ3aWR0aFwiOjIzLFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1OCxcInhcIjoyMyxcInlcIjoxMzcsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTQsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQyLFwieFwiOjM3LFwieVwiOjEzNyxcIndpZHRoXCI6MjEsXCJoZWlnaHRcIjoyMSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjEsXCJ4XCI6NTgsXCJ5XCI6MTM3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjIwLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEzLFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTQsXCJ4XCI6ODIsXCJ5XCI6MTM3LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjE5LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjgsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0NCxcInhcIjoxMDUsXCJ5XCI6MTM3LFwid2lkdGhcIjoxNCxcImhlaWdodFwiOjE5LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjI0LFwieGFkdmFuY2VcIjo4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozOSxcInhcIjoxMTksXCJ5XCI6MTM3LFwid2lkdGhcIjoxMyxcImhlaWdodFwiOjE3LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjk2LFwieFwiOjEzMixcInlcIjoxMzcsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjM0LFwieFwiOjE1MCxcInlcIjoxMzcsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyNixcInhcIjoxNjgsXCJ5XCI6MTM3LFwid2lkdGhcIjoyMixcImhlaWdodFwiOjE0LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjE3LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDYsXCJ4XCI6MTkwLFwieVwiOjEzNyxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjoxNCxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoyNCxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTUsXCJ4XCI6MjA0LFwieVwiOjEzNyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoxMyxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoyOCxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQ1LFwieFwiOjIyOCxcInlcIjoxMzcsXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6MTMsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTgsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH1dLFwia2VybmluZ3NcIjpbXSxcImluZm9cIjp7XCJmYWNlXCI6XCJFeG8gMiBTZW1pIEJvbGRcIixcInNpemVcIjozMixcImJvbGRcIjowLFwiaXRhbGljXCI6MCxcImNoYXJzZXRcIjpcIlwiLFwidW5pY29kZVwiOjAsXCJzdHJldGNoSFwiOjEwMCxcInNtb290aFwiOjEsXCJhYVwiOjEsXCJwYWRkaW5nXCI6WzQsNCw0LDRdLFwic3BhY2luZ1wiOlstOCwtOF19LFwiY29tbW9uXCI6e1wibGluZUhlaWdodFwiOjQwLFwiYmFzZVwiOjMzLFwic2NhbGVXXCI6NTEyLFwic2NhbGVIXCI6NTEyLFwicGFnZXNcIjoxLFwicGFja2VkXCI6MH19IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBtaXhlcyA9IHJlcXVpcmUoJ21peGVzJylcbnZhciBCYXNlID0gVEhSRUUuU2NlbmVcblxudmFyIFlPRkYgPSAtMlxuXG5mdW5jdGlvbiBSaWdTY2VuZShvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmlnU2NlbmUpKVxuICAgICAgICByZXR1cm4gbmV3IFJpZ1NjZW5lKG9wdClcbiAgICBCYXNlLmNhbGwodGhpcylcbiAgICB0aGlzLmZvZyA9IG5ldyBUSFJFRS5Gb2dFeHAyKCAweDBiMDUxNiwgMC4wMDAxNSApO1xuXG5cbiAgICAvLyB2YXIgYm94ID0gbmV3IFRIUkVFLk1lc2goXG4gICAgLy8gICAgIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyMCwgMjAsIDEwKSxcbiAgICAvLyAgICAgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4YWFhYWFhLCB3aXJlZnJhbWU6IGZhbHNlIH0pXG4gICAgLy8gKVxuXG4gICAgLy8gdGhpcy5hZGQoYm94KVxuXG5cbiAgICB0aGlzLnRpbWUgPSAwXG4gICAgdGhpcy5jdWJlTWFwID0gbnVsbFxuICAgIHRoaXMudXBkYXRlTWF0ZXJpYWwoKVxuXG4gICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5PQkpMb2FkZXIoKVxuICAgIGxvYWRlci5sb2FkKCdtb2RlbC9ibG9ja291dC5vYmonLCBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgdmFyIHMgPSAwLjNcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0KVxuICAgICAgICBvYmplY3Quc2NhbGUuc2V0KHMscyxzKVxuICAgICAgICBvYmplY3QucG9zaXRpb24ueSAtPSBZT0ZGXG4gICAgICAgIHRoaXMubWVzaCA9IG9iamVjdFxuICAgICAgICB0aGlzLmFkZChvYmplY3QpXG5cbiAgICAgICAgdGhpcy5tZXNoLnRyYXZlcnNlKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKSBcbiAgICAgICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgIH0uYmluZCh0aGlzKSlcbn1cblxuaW5oZXJpdHMoUmlnU2NlbmUsIEJhc2UpXG5cbm1peGVzKFJpZ1NjZW5lLCB7XG5cbiAgICB1cGRhdGVNYXRlcmlhbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcjogMHhhYWFhYWEsXG4gICAgICAgICAgICByZWZsZWN0aXZpdHk6IDAuNCxcbiAgICAgICAgICAgIGVudk1hcDogdGhpcy5jdWJlTWFwXG4gICAgICAgIH0pXG5cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbihkdCkge1xuICAgICAgICB0aGlzLnRpbWUgKz0gTWF0aC5taW4oZHQsIDMwKS8xMDAwXG4gICAgICAgIHZhciBtID0gdGhpcy5tZXNoXG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB2YXIgYW5pbSA9IE1hdGguc2luKHRoaXMudGltZSlcblxuICAgICAgICAvLyBtLnBvc2l0aW9uLnkgPSBZT0ZGICsgYW5pbSowLjJcbiAgICAgICAgLy8gbS5wb3NpdGlvbi54ID0gTWF0aC5zaW4odGhpcy50aW1lKjAuMSkqMC4wNVxuICAgICAgICAvLyBtLnBvc2l0aW9uLnogPSBNYXRoLnNpbih0aGlzLnRpbWUqMC4yKSowLjFcbiAgICAgICAgLy8gbS5yb3RhdGlvbi54ID0gYW5pbSowLjAzXG4gICAgICAgIC8vIG0ucm90YXRpb24ueSA9IE1hdGguc2luKHRoaXMudGltZSpNYXRoLmNvcyh0aGlzLnRpbWUqMC4xKSkqMC4wMDVcbiAgICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ1NjZW5lXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5USFJFRSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVEhSRUUgOiBudWxsKVxudmFyIEVmZmVjdENvbXBvc2VyID0gcmVxdWlyZSgndGhyZWUtZWZmZWN0Y29tcG9zZXInKShUSFJFRSlcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBCYXNlID0gRWZmZWN0Q29tcG9zZXIuUmVuZGVyUGFzc1xuXG5mdW5jdGlvbiBUZXh0UGFzcygpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICBCYXNlLmFwcGx5KHRoaXMsIGFyZ3MpXG5cbiAgICB0aGlzLnRleHQgPSBudWxsXG4gICAgdGhpcy5mZWF0dXJlcyA9IG51bGxcbn1cblxuaW5oZXJpdHMoVGV4dFBhc3MsIEJhc2UpXG5cblRleHRQYXNzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcbiAgICBCYXNlLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzLCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhKVxuXG4gICAgaWYgKHRoaXMudGV4dCAmJiB0aGlzLmZlYXR1cmVzKSB7XG4gICAgICAgIHRoaXMudGV4dC5iZWdpbigpXG4gICAgICAgIHRoaXMuZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbihzcG90KSB7XG4gICAgICAgICAgICB0aGlzLnRleHQuZmFkZSA9IHNwb3QuZmFkZVxuICAgICAgICAgICAgdGhpcy50ZXh0LmRyYXcodGhpcy5jYW1lcmEsIHNwb3QudGV4dCwgc3BvdC5vYmplY3QpXG4gICAgICAgIH0sIHRoaXMpXG4gICAgICAgIHRoaXMudGV4dC5lbmQoKVxuXG4gICAgICAgIHJlbmRlcmVyLnJlc2V0R0xTdGF0ZSgpXG4gICAgICAgIHJlbmRlcmVyLnJlc2V0QXR0cmlidXRlcygpXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRQYXNzXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCJ2YXIgY3JlYXRlVGV4dCA9IHJlcXVpcmUoXCJnbC1zcHJpdGUtdGV4dFwiKTtcbnZhciBtYXQ0ID0gcmVxdWlyZShcImdsLW1hdDRcIik7XG52YXIgUmVuZGVyZXIgPSByZXF1aXJlKFwiZ2wtc3ByaXRlc1wiKTtcbnZhciBkZWZhdWx0U2hhZGVyID0gcmVxdWlyZShcImdsLWJhc2ljLXNoYWRlclwiKTtcbnZhciBtb2RlbFRyYW5zZm9ybSA9IG1hdDQuY3JlYXRlKCk7XG5cbnZhciBzcHJpdGUgPSB7XG4gICAgdGV4dHVyZTogbnVsbCxcbiAgICBwb3NpdGlvbjogWzAsIDBdLFxuICAgIHNoYXBlOiBbMCwgMF0sXG4gICAgY29sb3I6IFsxLCAwLCAwLCAwLjVdLFxuICAgIHRleGNvb3JkOiBbMCwgMCwgMSwgMV1cbn07XG5cbnZhciBvZmYgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxufTtcblxudmFyIFdISVRFID0gWzEsIDEsIDEsIDFdO1xudmFyIEJPUkRFUiA9IFswLjUsIDAuNSwgMC41LCAxXTtcbnZhciBCR0ZJTEwgPSBbMC4xLCAwLjEsIDAuMSwgMC45OV07XG52YXIgU0RGX1BBRERJTkcgPSAtNDtcbnZhciB0bXBWZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xudmFyIGdsc2xpZnkgPSByZXF1aXJlKFwiZ2xzbGlmeVwiKTtcbnZhciBzZGZTaGFkZXIgPSByZXF1aXJlKFwiZ2xzbGlmeS9hZGFwdGVyLmpzXCIpKFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG5hdHRyaWJ1dGUgdmVjNCBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjNCBjb2xvcjtcXG5hdHRyaWJ1dGUgdmVjMiB0ZXhjb29yZDA7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxudW5pZm9ybSBtYXQ0IG1vZGVsO1xcbnZhcnlpbmcgdmVjNCB2X2NvbDtcXG52YXJ5aW5nIHZlYzIgdl90ZXgwO1xcbnZhcnlpbmcgZmxvYXQgYW5pbU9mZnNldDtcXG52b2lkIG1haW4oKSB7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogbW9kZWwgKiBwb3NpdGlvbjtcXG4gIHZfY29sID0gY29sb3I7XFxuICB2X3RleDAgPSB0ZXhjb29yZDA7XFxuICBnbF9Qb2ludFNpemUgPSAxLjA7XFxuICBhbmltT2Zmc2V0ID0gcG9zaXRpb24ueDtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG4jaWZkZWYgR0xfRVNcXG5cXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG4jZW5kaWZcXG5cXG52YXJ5aW5nIHZlYzQgdl9jb2w7XFxudmFyeWluZyB2ZWMyIHZfdGV4MDtcXG52YXJ5aW5nIGZsb2F0IGFuaW1PZmZzZXQ7XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTA7XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTE7XFxudW5pZm9ybSBmbG9hdCBmYWRlO1xcbmNvbnN0IGZsb2F0IHNtb290aGluZyA9IDEuMCAvIDMyLjA7XFxuY29uc3QgdmVjMiBzaGFkb3dPZmZzZXQgPSB2ZWMyKC0xLjAgLyA1MTIuMCk7XFxuY29uc3QgdmVjNCBnbG93Q29sb3IgPSB2ZWM0KHZlYzMoMC4xKSwgMS4wKTtcXG5jb25zdCBmbG9hdCBnbG93TWluID0gMC40O1xcbmNvbnN0IGZsb2F0IGdsb3dNYXggPSAwLjg7XFxudmVjNCBhX3hfYmx1cihzYW1wbGVyMkQgdGV4LCB2ZWMyIHV2LCB2ZWMyIGJsdXIsIHZlYzIgZGlyZWN0aW9uKSB7XFxuICB2ZWM0IHN1bSA9IHZlYzQoMC4wKTtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSA0LjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDQuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjAxNjIxNjIxNjI7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54IC0gMy4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgLSAzLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4wNTQwNTQwNTQxO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDIuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gMi4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTIxNjIxNjIxNjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSAxLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDEuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjE5NDU5NDU5NDY7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54LCB1di55KSkgKiAwLjIyNzAyNzAyNzA7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgMS4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyAxLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xOTQ1OTQ1OTQ2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCArIDIuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55ICsgMi4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTIxNjIxNjIxNjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyAzLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDMuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjA1NDA1NDA1NDE7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgNC4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyA0LjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4wMTYyMTYyMTYyO1xcbiAgcmV0dXJuIHN1bTtcXG59XFxudm9pZCBtYWluKCkge1xcbiAgZmxvYXQgYW5pbSA9IG1vZChmYWRlLCBhbmltT2Zmc2V0KTtcXG4gIHZlYzQgc21vb3RoQ29sb3IgPSB2ZWM0KDAuMCk7XFxuICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUwLCB2X3RleDApO1xcbiAgZmxvYXQgZHN0ID0gdGV4Q29sb3IuYTtcXG4gIGZsb2F0IHNtb290aEFtdCA9IG1peCgxLjUsIHNtb290aGluZywgYW5pbSk7XFxuICBmbG9hdCBhbHBoYSA9IHNtb290aHN0ZXAoMC41IC0gc21vb3RoQW10LCAwLjUgKyBzbW9vdGhBbXQsIGRzdCk7XFxuICB2ZWM0IGJhc2UgPSB2X2NvbCAqIHZlYzQoYWxwaGEpO1xcbiAgZmxvYXQgZ2xvd0RzdCA9IHRleHR1cmUyRCh0ZXh0dXJlMCwgdl90ZXgwICsgc2hhZG93T2Zmc2V0KS5hO1xcbiAgdmVjNCBnbG93ID0gZ2xvd0NvbG9yICogc21vb3Roc3RlcChnbG93TWluLCBnbG93TWF4LCBnbG93RHN0KTtcXG4gIGZsb2F0IG1hc2sgPSAxLjAgLSBhbHBoYTtcXG4gIHNtb290aENvbG9yID0gbWl4KGJhc2UsIGdsb3csIG1hc2spO1xcbiAgc21vb3RoQ29sb3IucmdiICo9IHNtb290aENvbG9yLmE7XFxuICBnbF9GcmFnQ29sb3IgPSBzbW9vdGhDb2xvcjtcXG4gIGdsX0ZyYWdDb2xvciA9IG1peCh2ZWM0KHZlYzMoMS4wKSwgMC4wKSwgZ2xfRnJhZ0NvbG9yLCBhbmltKTtcXG4gIGlmKGdsX0ZyYWdDb2xvci5hIDwgMC4xKVxcbiAgICBkaXNjYXJkO1xcbiAgXFxufVwiLCBbe1wibmFtZVwiOlwicHJvamVjdGlvblwiLFwidHlwZVwiOlwibWF0NFwifSx7XCJuYW1lXCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJtYXQ0XCJ9LHtcIm5hbWVcIjpcIm1vZGVsXCIsXCJ0eXBlXCI6XCJtYXQ0XCJ9LHtcIm5hbWVcIjpcInRleHR1cmUwXCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn0se1wibmFtZVwiOlwidGV4dHVyZTFcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifSx7XCJuYW1lXCI6XCJmYWRlXCIsXCJ0eXBlXCI6XCJmbG9hdFwifV0sIFt7XCJuYW1lXCI6XCJwb3NpdGlvblwiLFwidHlwZVwiOlwidmVjNFwifSx7XCJuYW1lXCI6XCJjb2xvclwiLFwidHlwZVwiOlwidmVjNFwifSx7XCJuYW1lXCI6XCJ0ZXhjb29yZDBcIixcInR5cGVcIjpcInZlYzJcIn1dKTtcblxuZnVuY3Rpb24gVGV4dFJlbmRlcmVyKGdsLCBvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGV4dFJlbmRlcmVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0UmVuZGVyZXIoZ2wsIG9wdCk7XG5cbiAgICBvcHQgPSBvcHQgfHwge307XG4gICAgdGhpcy5nbCA9IGdsO1xuXG4gICAgdGhpcy5zcHJpdGVzID0gUmVuZGVyZXIoZ2wsIHtcbiAgICAgICAgY2FwYWNpdHk6IDEwXG4gICAgfSk7XG5cbiAgICB0aGlzLnNoYWRlciA9IHNkZlNoYWRlcihnbCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVUZXh0KGdsLCB7XG4gICAgICAgIGZvbnQ6IG9wdC5mb250LFxuICAgICAgICB0ZXh0OiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWl0XCIsXG4gICAgICAgIHRleHR1cmVzOiBvcHQudGV4dHVyZXNcbiAgICB9KTtcblxuICAgIHRoaXMucHJvamVjdGlvbiA9IG1hdDQuY3JlYXRlKCk7XG4gICAgdGhpcy5zY2FsZSA9IG1hdDQuY3JlYXRlKCk7XG4gICAgdGhpcy5mYWRlID0gMDtcbiAgICB2YXIgcyA9IDAuMDU7XG4gICAgbWF0NC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlLCBbcywgLXMsIHNdKTtcbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5iZWdpbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XG4gICAgZ2wuZGVwdGhGdW5jKGdsLkxFUVVBTCk7XG4gICAgZ2wuZnJvbnRGYWNlKGdsLkNDVyk7XG4gICAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XG4gICAgZ2wuY3VsbEZhY2UoZ2wuRlJPTlQpO1xuICAgIGdsLmNvbG9yTWFzayh0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICBnbC5kaXNhYmxlKGdsLlNURU5DSUxfVEVTVCk7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG4gICAgZ2wuZGVwdGhNYXNrKHRydWUpO1xuICAgIHRoaXMuc2hhZGVyLmJpbmQoKTtcbiAgICB2YXIgdGV4ID0gdGhpcy5lbGVtZW50LnRleHR1cmVzWzBdO1xuICAgIHRleC5iaW5kKCk7XG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XG4gICAgZ2wuY3VsbEZhY2UoZ2wuQkFDSyk7XG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjYW1lcmEsIHRleHQsIG9iamVjdDNkKSB7XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICB0aGlzLmVsZW1lbnQudGV4dHVyZXNbMF0uYmluZCgwKTtcbiAgICB0aGlzLnNoYWRlci51bmlmb3Jtcy5mYWRlID0gdGhpcy5mYWRlO1xuICAgIG1hdDQubXVsdGlwbHkobW9kZWxUcmFuc2Zvcm0sIG9iamVjdDNkLm1hdHJpeC5lbGVtZW50cywgdGhpcy5zY2FsZSk7XG4gICAgdGhpcy5zcHJpdGVzLnByb2plY3Rpb24gPSBjYW1lcmEucHJvamVjdGlvbk1hdHJpeC5lbGVtZW50cztcbiAgICB0aGlzLnNwcml0ZXMudmlldyA9IGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UuZWxlbWVudHM7XG4gICAgdGhpcy5zcHJpdGVzLm1vZGVsID0gbW9kZWxUcmFuc2Zvcm07XG4gICAgdGhpcy5lbGVtZW50LnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuZWxlbWVudC5jbGVhckxheW91dCgpO1xuICAgIHZhciBiID0gdGhpcy5lbGVtZW50LmdldEJvdW5kcyh1bmRlZmluZWQsIG9mZik7XG4gICAgdmFyIHBhZCA9IFs4LCA0XTtcbiAgICB2YXIgYm9yZGVyID0gMTtcbiAgICB0aGlzLnNwcml0ZXMuYmVnaW4oKTtcbiAgICB0aGlzLnNwcml0ZXMudXBkYXRlTWF0cmljZXMoKTtcbiAgICB0aGlzLnNwcml0ZXMuY29sb3IgPSBCR0ZJTEw7XG4gICAgdGhpcy5zcHJpdGVzLmNvbG9yID0gQk9SREVSO1xuICAgIHRoaXMuc3ByaXRlcy5lbmQoKTtcbiAgICBtYXQ0LnRyYW5zbGF0ZShtb2RlbFRyYW5zZm9ybSwgbW9kZWxUcmFuc2Zvcm0sIFswLCAwLCAwLjFdKTtcbiAgICB0aGlzLnNoYWRlci5iaW5kKCk7XG4gICAgdGhpcy5zaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbiA9IGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4LmVsZW1lbnRzO1xuICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLnZpZXcgPSBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlLmVsZW1lbnRzO1xuICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLm1vZGVsID0gbW9kZWxUcmFuc2Zvcm07XG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgdGhpcy5lbGVtZW50LmJhdGNoLmNvbG9yID0gV0hJVEU7XG4gICAgdGhpcy5lbGVtZW50LmRyYXcodGhpcy5zaGFkZXIsIFNERl9QQURESU5HLCBTREZfUEFERElORyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRSZW5kZXJlcjsiLCJ2YXIgRm9udCA9IHJlcXVpcmUoJy4uL2ZvbnRzL0V4bzJTZW1pQm9sZC5qc29uJylcbnZhciBmb250SW1hZ2UgPSAnZm9udHMvRXhvMlNlbWlCb2xkLnBuZydcbnZhciBpbWcgPSByZXF1aXJlKCdpbWcnKVxudmFyIGNyZWF0ZVRleHR1cmUgPSByZXF1aXJlKCdnbC10ZXh0dXJlMmQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGdsLCBjYikge1xuICAgIGltZyhmb250SW1hZ2UsIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNiKGVycilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgRm9udC50ZXh0dXJlcyA9IFtyZXNdLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGNyZWF0ZVRleHR1cmUoZ2wsIGkpXG5cbiAgICAgICAgICAgIHQubWluRmlsdGVyID0gZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICAgICAgICAgIHQubWFnRmlsdGVyID0gZ2wuTElORUFSXG5cbiAgICAgICAgICAgIHZhciBleHQgPSAoZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWMnKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBnbC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpKTtcbiAgICAgICAgICAgIGlmIChleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4QW5pc3Ryb3BoeSA9IGdsLmdldFBhcmFtZXRlcihleHQuTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJmKGdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgTWF0aC5taW4oMTYsIG1heEFuaXN0cm9waHkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5nZW5lcmF0ZU1pcG1hcCgpXG4gICAgICAgICAgICByZXR1cm4gdFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgY2IobnVsbCwgRm9udClcbiAgICB9KVxufSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG52YXIgbnVtYmVyID0gcmVxdWlyZSgnYXMtbnVtYmVyJykgICAgXG5cbnZhciBsaXBzdW0gPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgdmVsIGVsZWlmZW5kIG1hc3NhLCBsYW9yZWV0IGVmZmljaXR1ciBkdWkuIFNlZCBldWlzbW9kIHZlbGl0IGlkIGxlbyBldWlzbW9kIHJ1dHJ1bS4gQ3JhcyBmcmluZ2lsbGEgdmVoaWN1bGEgZG9sb3IgdmVsIGNvbmd1ZS4gQ3JhcyBjb25ndWUgc2VkIG51bGxhIG5lYyBmYXVjaWJ1cy4gU2VkIGxhY2luaWEgdGVsbHVzIG5vbiBxdWFtIHRlbXB1cyBpYWN1bGlzLiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBtaSB2ZWwgZXJhdCBzY2VsZXJpc3F1ZSBtb2xsaXMuIFBoYXNlbGx1cyBwdWx2aW5hciBtYWxlc3VhZGEgcmlzdXMuIE5hbSBuZWMgbGFjdXMgbHVjdHVzLCB1bHRyaWNlcyBsYWN1cyBub24sIG9ybmFyZSBwdXJ1cy4gQWxpcXVhbSBwdXJ1cyBlbGl0LCBtYXR0aXMgYSBlc3QgcXVpcywgbW9sbGlzIGludGVyZHVtIG1hdXJpcy4gRG9uZWMgZXggbGVjdHVzLCB2ZWhpY3VsYSBuZWMgb3JjaSBsb2JvcnRpcywgc2VtcGVyIGFsaXF1YW0gbmlzaS4gTWF1cmlzIHRpbmNpZHVudCBsb3JlbSBldCBjb21tb2RvIGZyaW5naWxsYS4nXG5saXBzdW0gPSBsaXBzdW0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBzLnN1YnN0cmluZygwLCBNYXRoLm1pbigzMCwgcy5sZW5ndGgpKVxufSkuZmlsdGVyKGZ1bmN0aW9uKHMpIHtcbiAgICByZXR1cm4gcy50cmltKCkubGVuZ3RoPjFcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGFyZW50LCBuKSB7XG4gICAgbiA9IG51bWJlcihuLCAxMClcbiAgICB2YXIgcG9pbnRzID0gW11cbiAgICBmb3IgKHZhciBpPTA7IGk8bjsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAyLjAgKiBNYXRoLlBJXG4gICAgICAgIHZhciB6ID0gKE1hdGgucmFuZG9tKCkgKiAyLjApIC0gMS4wXG4gICAgICAgIHZhciBzY2FsZSA9IDE1XG4gICAgICAgIHZhciB6U2NhbGUgPSBNYXRoLnNxcnQoMS4wLXoqeikgKiBzY2FsZVxuICAgICAgICAvLyB2YXIgaCA9IDIsIGwgPSAxLjVcbiAgICAgICAgLy8gdmFyIHpTY2FsZSA9IGxlcnAobCwgaCwgTWF0aC5yYW5kb20oKSlcblxuICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICAgIE1hdGguY29zKHIpKnpTY2FsZSxcbiAgICAgICAgICAgIE1hdGguc2luKHIpKnpTY2FsZSArIHNjYWxlLFxuICAgICAgICAgICAgeiAqIHNjYWxlXG4gICAgICAgICkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBvaW50cy5tYXAoZnVuY3Rpb24odiwgaSkge1xuICAgICAgICB2YXIgZGlyID0gdi5jbG9uZSgpLnN1YihuZXcgVEhSRUUuVmVjdG9yMygwLHYueSwwKSkubm9ybWFsaXplKClcbiAgICAgICAgdmFyIG9iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpXG4gICAgICAgIC8vIHZhciBvYmplY3QgPSBuZXcgVEhSRUUuTWVzaChzcGhlcmUsIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6MHhmZjAwMDB9KSlcbiAgICAgICAgcGFyZW50LmFkZChvYmplY3QpXG4gICAgICAgIG9iamVjdC52aXNpYmxlID0gZmFsc2VcblxuICAgICAgICBvYmplY3QucG9zaXRpb24uY29weSh2KVxuXG4gICAgICAgIG9iamVjdC5yb3RhdGlvbi54ID0gMFxuXG4gICAgICAgIHZhciBkeCA9IHYueCxcbiAgICAgICAgICAgIGR6ID0gdi56XG4gICAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gLU1hdGguYXRhbjIoZHosIGR4KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcixcbiAgICAgICAgICAgIG9yaWdpbjogdixcbiAgICAgICAgICAgIGZhZGU6IDAuMCxcbiAgICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgICAgdGV4dDogbGlwc3VtWyBpICUgbGlwc3VtLmxlbmd0aCBdXG4gICAgICAgIH1cbiAgICB9KVxufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcblxudmFyIFJpZ1NjZW5lID0gcmVxdWlyZSgnLi9SaWdTY2VuZScpXG52YXIgT3JiaXRDb250cm9sbGVyID0gcmVxdWlyZSgnLi90aHJlZS1vcmJpdC1jYW1lcmEnKShUSFJFRSlcbnZhciBUZXh0UmVuZGVyZXIgPSByZXF1aXJlKCcuL1RleHRSZW5kZXJlcicpXG52YXIgRWZmZWN0cyA9IHJlcXVpcmUoJy4vc2V0dXAtZWZmZWN0cycpXG5cbnZhciBUd2VlbkxpdGUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5Ud2Vlbk1heCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVHdlZW5NYXggOiBudWxsKVxudmFyIGNyZWF0ZUZlYXR1cmVzID0gcmVxdWlyZSgnLi9mZWF0dXJlLXBvaW50cycpXG5cbnZhciBudW1iZXIgPSByZXF1aXJlKCdhcy1udW1iZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdCkge1xuICAgIG9wdCA9IG9wdHx8e31cblxuICAgIHZhciBGb250ID0gb3B0LmZvbnRcblxuICAgIGlmICghRm9udCB8fCAhRm9udC50ZXh0dXJlcylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgZm9udCB3aXRoIHRleHR1cmVzJylcblxuICAgIHZhciByZW5kZXJlcixcbiAgICAgICAgc2NlbmUsXG4gICAgICAgIGNhbWVyYSxcbiAgICAgICAgY2FtZXJhQ29udHJvbGxlcixcbiAgICAgICAgZmVhdHVyZXMsXG4gICAgICAgIHRleHRSZW5kZXJlcixcbiAgICAgICAgd2F0ZXIsXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIHRpbWUgPSAwXG5cbiAgICBpZiAoIW9wdC5nbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgR0wgY29udGV4dCcpXG5cbiAgICBzZXR1cChvcHQuZ2wsIG9wdC53aWR0aHx8MCwgb3B0LmhlaWdodHx8MClcblxuICAgIGZ1bmN0aW9uIGRyYXcoZHQpIHtcbiAgICAgICAgdGltZSArPSAgTWF0aC5taW4oZHQsIDMwKSAvIDEwMDBcbiAgICAgICAgcmVuZGVyZXIucmVzZXRBdHRyaWJ1dGVzKClcbiAgICAgICAgcmVuZGVyZXIucmVzZXRHTFN0YXRlKClcblxuICAgICAgICB3YXRlci5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdGltZSAqIDAuMVxuICAgICAgICB3YXRlci5yZW5kZXIoKVxuXG4gICAgICAgIGNhbWVyYUNvbnRyb2xsZXIudXBkYXRlKClcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLnVwZGF0ZShkdClcbiAgICAgICAgZWZmZWN0cy5yZW5kZXIoZHQpXG5cbiAgICAgICAgdGV4dFJlbmRlcmVyLnRpbWUgPSB0aW1lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXAoZ2wsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IFxuICAgICAgICAgICAgY2FudmFzOiBnbC5jYW52YXMsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYsIDApXG5cbiAgICAgICAgb3B0LmZvdiA9IG51bWJlcihvcHQuZm92LCA1MClcbiAgICAgICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKG9wdC5mb3YsIHdpZHRoL2hlaWdodCwgMC41LCAyMDAwMClcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSA1MFxuICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDIwXG4gICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoKSlcblxuICAgICAgICBjYW1lcmFDb250cm9sbGVyID0gbmV3IE9yYml0Q29udHJvbGxlcihjYW1lcmEpXG4gICAgICAgIGNhbWVyYUNvbnRyb2xsZXIudXNlclBhbiA9IGZhbHNlXG4gICAgICAgIGNhbWVyYUNvbnRyb2xsZXIudXNlclBhblNwZWVkID0gMC4wXG4gICAgICAgIGNhbWVyYUNvbnRyb2xsZXIubWluRGlzdGFuY2UgPSAzMFxuICAgICAgICBjYW1lcmFDb250cm9sbGVyLm1heERpc3RhbmNlID0gMjAwLjBcbiAgICAgICAgY2FtZXJhQ29udHJvbGxlci5tYXhQb2xhckFuZ2xlID0gODggKiBNYXRoLlBJLzE4MFxuICAgICAgICBjYW1lcmFDb250cm9sbGVyLm1pblBvbGFyQW5nbGUgPSA0MCAqIE1hdGguUEkvMTgwXG4gICAgICAgIGNhbWVyYUNvbnRyb2xsZXIuY2VudGVyLnNldCggMCwgNCwgMCApXG5cbiAgICAgICAgc2NlbmUgPSBSaWdTY2VuZSgpXG5cbiAgICAgICAgdGV4dFJlbmRlcmVyID0gVGV4dFJlbmRlcmVyKGdsLCB7XG4gICAgICAgICAgICBmb250OiBGb250LFxuICAgICAgICAgICAgdGV4dHVyZXM6IEZvbnQudGV4dHVyZXNcbiAgICAgICAgfSlcblxuICAgICAgICB3YXRlciA9IHJlcXVpcmUoJy4vc2V0dXAtd2F0ZXInKShyZW5kZXJlciwgY2FtZXJhLCBzY2VuZSlcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLmN1YmVNYXAgPSB3YXRlci5jdWJlTWFwXG4gICAgICAgIHNjZW5lLnVwZGF0ZU1hdGVyaWFsKClcblxuICAgICAgICBlZmZlY3RzID0gRWZmZWN0cyh7XG4gICAgICAgICAgICByZW5kZXJlcjogcmVuZGVyZXIsXG4gICAgICAgICAgICBzY2VuZTogc2NlbmUsXG4gICAgICAgICAgICBjYW1lcmE6IGNhbWVyYSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH0pXG5cbiAgICAgICAgZmVhdHVyZXMgPSBjcmVhdGVGZWF0dXJlcyhzY2VuZSlcbiAgICAgICAgZWZmZWN0cy5zZXRUZXh0KHRleHRSZW5kZXJlciwgZmVhdHVyZXMpXG5cblxuICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbVRvKGZlYXR1cmVzLCAxLjAsIHtcbiAgICAgICAgICAgIGZhZGU6IDBcbiAgICAgICAgfSwgeyBcbiAgICAgICAgICAgIGRlbGF5OiAxLjAsXG4gICAgICAgICAgICBmYWRlOiAxLjAsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VPdXRFeHBvXCJcbiAgICAgICAgfSwgMC4wNSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aWR0aC9oZWlnaHRcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKVxuXG4gICAgICAgIGVmZmVjdHMucmVzaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhdzogZHJhdyxcbiAgICAgICAgcmVzaXplOiBoYW5kbGVSZXNpemVcbiAgICB9XG59XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5USFJFRSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVEhSRUUgOiBudWxsKVxudmFyIEVmZmVjdENvbXBvc2VyID0gcmVxdWlyZSgndGhyZWUtZWZmZWN0Y29tcG9zZXInKShUSFJFRSlcbnZhciBjcmVhdGVGWEFBID0gcmVxdWlyZSgndGhyZWUtc2hhZGVyLWZ4YWEnKShUSFJFRSlcbnZhciBjcmVhdGVCbHVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL2JsdXInKVxudmFyIGNyZWF0ZUxlbnMgPSByZXF1aXJlKCcuL3NoYWRlcnMvbGVucycpXG52YXIgY3JlYXRlRW1wdHkgPSByZXF1aXJlKCcuL3NoYWRlcnMvcGFzcycpXG52YXIgVGV4dFBhc3MgPSByZXF1aXJlKCcuL1RleHRQYXNzJylcblxubW9kdWxlLmV4cG9ydHMgPSBFZmZlY3RzXG5cbmZ1bmN0aW9uIEVmZmVjdHMob3B0KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVmZmVjdHMpKSBcbiAgICAgICAgcmV0dXJuIG5ldyBFZmZlY3RzKG9wdClcbiAgICBvcHQgPSBvcHR8fHt9XG5cblxuICAgIHZhciBwYXJhbWV0ZXJzID0geyBcbiAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIFxuICAgICAgICBtYWdGaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgXG4gICAgICAgIGZvcm1hdDogVEhSRUUuUkdCRm9ybWF0LCBcbiAgICAgICAgc3RlbmNpbEJ1ZmZlcjogZmFsc2UgXG4gICAgfVxuICAgIHZhciB3aWR0aCA9IG9wdC53aWR0aFxuICAgIHZhciBoZWlnaHQgPSBvcHQuaGVpZ2h0XG4gICAgdmFyIHJlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCh3aWR0aCwgaGVpZ2h0LCBwYXJhbWV0ZXJzKTtcblxuICAgIHRoaXMuY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIob3B0LnJlbmRlcmVyLCByZW5kZXJUYXJnZXQpXG5cbiAgICB0aGlzLnRleHRQYXNzID0gbmV3IFRleHRQYXNzKG9wdC5zY2VuZSwgb3B0LmNhbWVyYSlcbiAgICB0aGlzLmNvbXBvc2VyLmFkZFBhc3ModGhpcy50ZXh0UGFzcylcbiAgICBcbiAgICB0aGlzLnNoYWRlcnMgPSBbXVxuICAgIHRoaXMubm9pc2VEZWxheSA9IDMzXG4gICAgdGhpcy5ub2lzZVRpbWUgPSAwXG5cbiAgICAvLyB0aGlzLnNoYWRlcnMucHVzaChuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyhjcmVhdGVFbXB0eSgpKSlcblxuXG4gICAgdmFyIGZ4YWFTaGFkZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyhjcmVhdGVGWEFBKCkpXG4gICAgdGhpcy5zaGFkZXJzLnB1c2goZnhhYVNoYWRlcilcblxuICAgIGlmIChvcHQuYmx1ciAhPT0gZmFsc2UpIHtcbiAgICAgICAgdmFyIGJsdXIgPSBjcmVhdGVCbHVyKClcbiAgICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAxO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8aXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgciA9IChpKzEpKjI7XG5cbiAgICAgICAgICAgIHZhciBob3JpeiA9IG5ldyBFZmZlY3RDb21wb3Nlci5TaGFkZXJQYXNzKCBibHVyICk7XG4gICAgICAgICAgICBob3Jpei51bmlmb3Jtcy5yYWRpdXMudmFsdWUgPSByXG4gICAgICAgICAgICBob3Jpei51bmlmb3Jtcy5zdHJlbmd0aC52YWx1ZSA9IDFcbiAgICAgICAgICAgIGhvcml6LnVuaWZvcm1zLmRpci52YWx1ZS5zZXQoMSwwKVxuXG4gICAgICAgICAgICB2YXIgdmVydCA9IG5ldyBFZmZlY3RDb21wb3Nlci5TaGFkZXJQYXNzKCBibHVyICk7XG4gICAgICAgICAgICB2ZXJ0LnVuaWZvcm1zLnJhZGl1cy52YWx1ZSA9IHJcbiAgICAgICAgICAgIHZlcnQudW5pZm9ybXMuc3RyZW5ndGgudmFsdWUgPSAxXG4gICAgICAgICAgICB2ZXJ0LnVuaWZvcm1zLmRpci52YWx1ZS5zZXQoMCwxKVxuXG4gICAgICAgICAgICB0aGlzLnNoYWRlcnMucHVzaChob3JpeiwgdmVydClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsZW5zUGFzcyA9IG5ldyBFZmZlY3RDb21wb3Nlci5TaGFkZXJQYXNzKGNyZWF0ZUxlbnMoKSlcbiAgICB0aGlzLnNoYWRlcnMucHVzaChsZW5zUGFzcylcblxuICAgIGxlbnNQYXNzLnVuaWZvcm1zLnRMb29rdXAudmFsdWUgPSBsb2FkVGV4dHVyZSgnaW1nL2xvb2t1cC5wbmcnLCB7IGZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyIH0pXG5cbiAgICB0aGlzLnNoYWRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXNzLCBpLCBzZWxmKSB7XG4gICAgICAgIHRoaXMuY29tcG9zZXIuYWRkUGFzcyhwYXNzKVxuICAgICAgICBpZiAoaSA9PT0gc2VsZi5sZW5ndGgtMSlcbiAgICAgICAgICAgIHBhc3MucmVuZGVyVG9TY3JlZW4gPSB0cnVlXG4gICAgfSwgdGhpcykgIFxuICAgIGlmIChvcHQud2lkdGggJiYgb3B0LmhlaWdodCkgXG4gICAgICAgIHRoaXMucmVzaXplKG9wdC53aWR0aCwgb3B0LmhlaWdodClcbn1cblxuXG5mdW5jdGlvbiBsb2FkVGV4dHVyZShwYXRoLCBvcHQpIHtcbiAgICByZXR1cm4gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZShwYXRoLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHRleCkge1xuICAgICAgICBpZiAob3B0LmZpbHRlcikgdGV4Lm1pbkZpbHRlciA9IHRleC5tYWdGaWx0ZXIgPSBvcHQuZmlsdGVyXG4gICAgICAgIGlmIChvcHQud3JhcCkgdGV4LndyYXBTID0gdGV4LndyYXBUID0gb3B0LndyYXBcbiAgICB9KVxufVxuXG5yZXF1aXJlKCdtaXhlcycpKEVmZmVjdHMsIHtcblxuICAgIHNldFRleHQ6IGZ1bmN0aW9uKHRleHRSZW5kZXJlciwgZmVhdHVyZXMpIHtcbiAgICAgICAgdGhpcy50ZXh0UGFzcy50ZXh0ID0gdGV4dFJlbmRlcmVyXG4gICAgICAgIHRoaXMudGV4dFBhc3MuZmVhdHVyZXMgPSBmZWF0dXJlc1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKGR0KSB7XG4gICAgICAgIHRoaXMubm9pc2VUaW1lICs9IGR0XG4gICAgICAgIGlmICh0aGlzLm5vaXNlVGltZSA+IHRoaXMubm9pc2VEZWxheSkge1xuICAgICAgICAgICAgdGhpcy5ub2lzZVRpbWUgPSAwXG4gICAgICAgICAgICB0aGlzLnNoYWRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3MudW5pZm9ybXMudGljaylcbiAgICAgICAgICAgICAgICAgICAgcGFzcy51bmlmb3Jtcy50aWNrLnZhbHVlICs9IDAuMDA1XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wb3Nlci5yZW5kZXIoKVxuICAgIH0sXG5cbiAgICByZXNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGggKj0gMlxuICAgICAgICBoZWlnaHQgKj0gMlxuICAgICAgICB0aGlzLmNvbXBvc2VyLnNldFNpemUod2lkdGgsIGhlaWdodClcbiAgICAgICAgdGhpcy5zaGFkZXJzLmZvckVhY2goZnVuY3Rpb24ocGFzcykge1xuICAgICAgICAgICAgdmFyIGRwciA9IDFcbiAgICAgICAgICAgIC8vIHZhciBkcHIgPSAod2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpXG4gICAgICAgICAgICBpZiAocGFzcy51bmlmb3Jtcy5yZXNvbHV0aW9uKVxuICAgICAgICAgICAgICAgIHBhc3MudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQod2lkdGgqZHByLCBoZWlnaHQqZHByKVxuICAgICAgICB9KVxuICAgIH1cbn0pXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCJ2YXIgY3ViZVNoYWRlciA9IHtcblxuICAgIHVuaWZvcm1zOiBUSFJFRS5Vbmlmb3Jtc1V0aWxzLm1lcmdlKCBbXG4gICAgICAgIHsgXCJ0Q3ViZVwiOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxuICAgICAgICBcInRGbGlwXCI6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiAtIDEgfSB9LFxuICAgICAgICBUSFJFRS5Vbmlmb3Jtc0xpYlsgXCJmb2dcIiBdXG4gICAgXSApLFxuXG4gICAgdmVydGV4U2hhZGVyOiBbXG5cbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XCIsXG5cbiAgICAgICAgVEhSRUUuU2hhZGVyQ2h1bmtbIFwibG9nZGVwdGhidWZfcGFyc192ZXJ0ZXhcIiBdLFxuXG4gICAgICAgIFwidm9pZCBtYWluKCkge1wiLFxuXG4gICAgICAgIFwiICAgdmVjNCB3b3JsZFBvc2l0aW9uID0gbW9kZWxNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXG4gICAgICAgIFwiICAgdldvcmxkUG9zaXRpb24gPSB3b3JsZFBvc2l0aW9uLnh5ejtcIixcblxuICAgICAgICBcIiAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcblxuICAgICAgICAgICAgVEhSRUUuU2hhZGVyQ2h1bmtbIFwibG9nZGVwdGhidWZfdmVydGV4XCIgXSxcblxuICAgICAgICBcIn1cIlxuXG4gICAgXS5qb2luKFwiXFxuXCIpLFxuXG4gICAgZnJhZ21lbnRTaGFkZXI6IFtcblxuICAgICAgICBcInVuaWZvcm0gc2FtcGxlckN1YmUgdEN1YmU7XCIsXG4gICAgICAgIFwidW5pZm9ybSBmbG9hdCB0RmxpcDtcIixcblxuICAgICAgICBcInZhcnlpbmcgdmVjMyB2V29ybGRQb3NpdGlvbjtcIixcbiAgICAgICAgVEhSRUUuU2hhZGVyQ2h1bmtbIFwibG9nZGVwdGhidWZfcGFyc19mcmFnbWVudFwiIF0sXG4gICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImZvZ19wYXJzX2ZyYWdtZW50XCIgXSxcbiAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgIFwiICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZUN1YmUoIHRDdWJlLCB2ZWMzKCB0RmxpcCAqIHZXb3JsZFBvc2l0aW9uLngsIHZXb3JsZFBvc2l0aW9uLnl6ICkgKTtcIixcbiAgICAgICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImxvZ2RlcHRoYnVmX2ZyYWdtZW50XCIgXSxcbiAgICAgICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImZvZ19mcmFnbWVudFwiIF0sXG4gICAgICAgIFwifVwiXG5cbiAgICBdLmpvaW4oXCJcXG5cIilcblxufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZW5kZXJlciwgY2FtZXJhLCBzY2VuZSkge1xuICAgIHZhciBsaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHhiYmU5ZmYsIDB4MDgwODIwLCAxKVxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgtMSwgMSwgLTEpXG4gICAgc2NlbmUuYWRkKGxpZ2h0KVxuXG4gICAgdmFyIHdhdGVyTm9ybWFscyA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCdpbWcvd2F0ZXJub3JtYWxzNS5qcGcnKVxuICAgIHdhdGVyTm9ybWFscy53cmFwUyA9IHdhdGVyTm9ybWFscy53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nXG5cbiAgICB2YXIgd2F0ZXIgPSBuZXcgVEhSRUUuV2F0ZXIocmVuZGVyZXIsIGNhbWVyYSwgc2NlbmUsIHtcbiAgICAgICAgdGV4dHVyZVdpZHRoOiA1MTIsXG4gICAgICAgIHRleHR1cmVIZWlnaHQ6IDUxMixcbiAgICAgICAgd2F0ZXJOb3JtYWxzOiB3YXRlck5vcm1hbHMsXG4gICAgICAgIGFscGhhOiAwLjksXG4gICAgICAgIHN1bkRpcmVjdGlvbjogbGlnaHQucG9zaXRpb24uY2xvbmUoKS5ub3JtYWxpemUoKSxcbiAgICAgICAgc3VuQ29sb3I6IDB4ZmZmZmZmLFxuICAgICAgICB3YXRlckNvbG9yOiAweDAyMGQxNSxcbiAgICAgICAgZGlzdG9ydGlvblNjYWxlOiA4MC4wLFxuICAgIH0pXG5cbiAgICB2YXIgbWlycm9yTWVzaCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSg1MDAwLCA1MDAwKSxcbiAgICAgICAgd2F0ZXIubWF0ZXJpYWxcbiAgICApXG5cbiAgICBtaXJyb3JNZXNoLmFkZCh3YXRlcilcbiAgICBtaXJyb3JNZXNoLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAqIDAuNVxuICAgIHNjZW5lLmFkZChtaXJyb3JNZXNoKVxuXG5cbiAgICAvLyBsb2FkIHNreWJveFxuXG4gICAgdmFyIGN1YmVNYXAgPSBuZXcgVEhSRUUuQ3ViZVRleHR1cmUoW10pXG4gICAgY3ViZU1hcC5mb3JtYXQgPSBUSFJFRS5SR0JGb3JtYXRcbiAgICBjdWJlTWFwLmZsaXBZID0gZmFsc2VcblxuICAgIHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKVxuICAgIGxvYWRlci5sb2FkKCdpbWcvY2xvdWR5X25pZ2h0Mi5qcGcnLCBmdW5jdGlvbihpbWFnZSkge1xuXG4gICAgICAgIHZhciBnZXRTaWRlID0gZnVuY3Rpb24oeCwgeSkge1xuXG4gICAgICAgICAgICB2YXIgc2l6ZSA9IDEwMjRcblxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBzaXplXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZVxuXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgLXggKiBzaXplLCAteSAqIHNpemUpXG5cbiAgICAgICAgICAgIHJldHVybiBjYW52YXNcblxuICAgICAgICB9XG5cbiAgICAgICAgY3ViZU1hcC5pbWFnZXNbMF0gPSBnZXRTaWRlKDIsIDEpIC8vIHB4XG4gICAgICAgIGN1YmVNYXAuaW1hZ2VzWzFdID0gZ2V0U2lkZSgwLCAxKSAvLyBueFxuICAgICAgICBjdWJlTWFwLmltYWdlc1syXSA9IGdldFNpZGUoMSwgMCkgLy8gcHlcbiAgICAgICAgY3ViZU1hcC5pbWFnZXNbM10gPSBnZXRTaWRlKDEsIDIpIC8vIG55XG4gICAgICAgIGN1YmVNYXAuaW1hZ2VzWzRdID0gZ2V0U2lkZSgxLCAxKSAvLyBwelxuICAgICAgICBjdWJlTWFwLmltYWdlc1s1XSA9IGdldFNpZGUoMywgMSkgLy8gbnpcbiAgICAgICAgY3ViZU1hcC5uZWVkc1VwZGF0ZSA9IHRydWVcblxuICAgIH0pXG5cbiAgICBjdWJlU2hhZGVyLnVuaWZvcm1zLnRDdWJlLnZhbHVlID0gY3ViZU1hcFxuXG4gICAgdmFyIHNreUJveE1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGN1YmVTaGFkZXIuZnJhZ21lbnRTaGFkZXIsXG4gICAgICAgIHZlcnRleFNoYWRlcjogY3ViZVNoYWRlci52ZXJ0ZXhTaGFkZXIsXG4gICAgICAgIHVuaWZvcm1zOiBjdWJlU2hhZGVyLnVuaWZvcm1zLFxuICAgICAgICAvLyBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgICAgc2lkZTogVEhSRUUuQmFja1NpZGUsXG4gICAgICAgIGZvZzogdHJ1ZSxcbiAgICB9KVxuXG4gICAgdmFyIHNreUJveCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNTAwMCwgNTAwMCwgNTAwMCksXG4gICAgICAgIHNreUJveE1hdGVyaWFsXG4gICAgKVxuICAgIFxuICAgIHdhdGVyLmN1YmVNYXAgPSBjdWJlTWFwXG5cbiAgICBzY2VuZS5hZGQoc2t5Qm94KVxuICAgIHJldHVybiB3YXRlclxufSIsInZhciBnbHNsaWZ5ID0gcmVxdWlyZShcImdsc2xpZnlcIik7XG52YXIgc291cmNlID0gcmVxdWlyZShcImdsc2xpZnkvc2ltcGxlLWFkYXB0ZXIuanNcIikoXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxudm9pZCBtYWluKCkge1xcbiAgdlV2ID0gdXY7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cIiwgXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnVuaWZvcm0gZmxvYXQgcmFkaXVzO1xcbnVuaWZvcm0gdmVjMiBkaXI7XFxudW5pZm9ybSBmbG9hdCBzdHJlbmd0aDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZlYzQgYV94X2JsdXIoc2FtcGxlcjJEIHRleCwgdmVjMiB1diwgdmVjMiBibHVyLCB2ZWMyIGRpcmVjdGlvbikge1xcbiAgdmVjNCBzdW0gPSB2ZWM0KDAuMCk7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54IC0gNC4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgLSA0LjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4wMTYyMTYyMTYyO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDMuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gMy4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMDU0MDU0MDU0MTtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSAyLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDIuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjEyMTYyMTYyMTY7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54IC0gMS4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgLSAxLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xOTQ1OTQ1OTQ2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCwgdXYueSkpICogMC4yMjcwMjcwMjcwO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCArIDEuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55ICsgMS4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTk0NTk0NTk0NjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyAyLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDIuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjEyMTYyMTYyMTY7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgMy4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyAzLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4wNTQwNTQwNTQxO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCArIDQuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55ICsgNC4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMDE2MjE2MjE2MjtcXG4gIHJldHVybiBzdW07XFxufVxcbnZvaWQgbWFpbigpIHtcXG4gIHZlYzIgYmx1ckFtdCA9IHZlYzIocmFkaXVzKSAvIHJlc29sdXRpb247XFxuICB2ZWM0IHN1bSA9IGFfeF9ibHVyKHREaWZmdXNlLCB2VXYsIGJsdXJBbXQsIGRpcik7XFxuICB2ZWMyIHAgPSAoZ2xfRnJhZ0Nvb3JkLnh5IC8gcmVzb2x1dGlvbi54eSAtIDAuNSk7XFxuICBwLnggKj0gcmVzb2x1dGlvbi54IC8gcmVzb2x1dGlvbi55O1xcbiAgZmxvYXQgbGVuID0gc21vb3Roc3RlcCgwLjUsIDEuMiwgbGVuZ3RoKHApKTtcXG4gIHZlYzMgb3JpZyA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KS5yZ2I7XFxuICBnbF9GcmFnQ29sb3IucmdiID0gbWl4KG9yaWcsIHN1bS5yZ2IsIGxlbiArIDAuMSk7XFxuICBnbF9GcmFnQ29sb3IuYSA9IDEuMDtcXG59XCIsIFt7XCJuYW1lXCI6XCJyZXNvbHV0aW9uXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9LHtcIm5hbWVcIjpcInJhZGl1c1wiLFwidHlwZVwiOlwiZmxvYXRcIn0se1wibmFtZVwiOlwiZGlyXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9LHtcIm5hbWVcIjpcInN0cmVuZ3RoXCIsXCJ0eXBlXCI6XCJmbG9hdFwifSx7XCJuYW1lXCI6XCJ0RGlmZnVzZVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9XSwgW10pO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jcmVhdGVcIikoc291cmNlKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5USFJFRSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVEhSRUUgOiBudWxsKVxudmFyIHRocmVlaWZ5ID0gcmVxdWlyZSgndGhyZWUtZ2xzbGlmeScpKFRIUkVFKVxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKSBcbiBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc291cmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9wdCkge1xuICAgICAgICByZXR1cm4geHRlbmQodGhyZWVpZnkoc291cmNlKSwgb3B0KVxuICAgIH1cbn1cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsInZhciBnbHNsaWZ5ID0gcmVxdWlyZShcImdsc2xpZnlcIik7XG52YXIgc291cmNlID0gcmVxdWlyZShcImdsc2xpZnkvc2ltcGxlLWFkYXB0ZXIuanNcIikoXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxudm9pZCBtYWluKCkge1xcbiAgdlV2ID0gdXY7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cIiwgXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gZmxvYXQgdGljaztcXG51bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXG51bmlmb3JtIHNhbXBsZXIyRCB0TG9va3VwO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRPdmVybGF5O1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSB2ZWMyIG92ZXJsYXlSZXNvbHV0aW9uO1xcbmhpZ2hwIGZsb2F0IGFfeF9yYW5kb20odmVjMiBjbykge1xcbiAgaGlnaHAgZmxvYXQgYSA9IDEyLjk4OTg7XFxuICBoaWdocCBmbG9hdCBiID0gNzguMjMzO1xcbiAgaGlnaHAgZmxvYXQgYyA9IDQzNzU4LjU0NTM7XFxuICBoaWdocCBmbG9hdCBkdCA9IGRvdChjby54eSwgdmVjMihhLCBiKSk7XFxuICBoaWdocCBmbG9hdCBzbiA9IG1vZChkdCwgMy4xNCk7XFxuICByZXR1cm4gZnJhY3Qoc2luKHNuKSAqIGMpO1xcbn1cXG52ZWMzIGJfeF9ibGVuZE92ZXJsYXkodmVjMyBiYXNlLCB2ZWMzIGJsZW5kKSB7XFxuICByZXR1cm4gdmVjMyhiYXNlLnIgPCAwLjUgPyAoMi4wICogYmFzZS5yICogYmxlbmQucikgOiAoMS4wIC0gMi4wICogKDEuMCAtIGJhc2UucikgKiAoMS4wIC0gYmxlbmQucikpLCBiYXNlLmcgPCAwLjUgPyAoMi4wICogYmFzZS5nICogYmxlbmQuZykgOiAoMS4wIC0gMi4wICogKDEuMCAtIGJhc2UuZykgKiAoMS4wIC0gYmxlbmQuZykpLCBiYXNlLmIgPCAwLjUgPyAoMi4wICogYmFzZS5iICogYmxlbmQuYikgOiAoMS4wIC0gMi4wICogKDEuMCAtIGJhc2UuYikgKiAoMS4wIC0gYmxlbmQuYikpKTtcXG59XFxuZmxvYXQgY194X2x1bWEodmVjMyBjb2xvcikge1xcbiAgcmV0dXJuIGRvdChjb2xvciwgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSk7XFxufVxcbmZsb2F0IGNfeF9sdW1hKHZlYzQgY29sb3IpIHtcXG4gIHJldHVybiBkb3QoY29sb3IucmdiLCB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpKTtcXG59XFxuI2RlZmluZSBMVVRfRkxJUF9ZXFxuXFxudmVjNCBlX3hfbG9va3VwKGluIHZlYzQgdGV4dHVyZUNvbG9yLCBpbiBzYW1wbGVyMkQgbG9va3VwVGFibGUpIHtcXG4gIFxcbiAgI2lmbmRlZiBMVVRfTk9fQ0xBTVBcXG4gIHRleHR1cmVDb2xvciA9IGNsYW1wKHRleHR1cmVDb2xvciwgMC4wLCAxLjApO1xcbiAgI2VuZGlmXFxuICBtZWRpdW1wIGZsb2F0IGJsdWVDb2xvciA9IHRleHR1cmVDb2xvci5iICogNjMuMDtcXG4gIG1lZGl1bXAgdmVjMiBxdWFkMTtcXG4gIHF1YWQxLnkgPSBmbG9vcihmbG9vcihibHVlQ29sb3IpIC8gOC4wKTtcXG4gIHF1YWQxLnggPSBmbG9vcihibHVlQ29sb3IpIC0gKHF1YWQxLnkgKiA4LjApO1xcbiAgbWVkaXVtcCB2ZWMyIHF1YWQyO1xcbiAgcXVhZDIueSA9IGZsb29yKGNlaWwoYmx1ZUNvbG9yKSAvIDguMCk7XFxuICBxdWFkMi54ID0gY2VpbChibHVlQ29sb3IpIC0gKHF1YWQyLnkgKiA4LjApO1xcbiAgaGlnaHAgdmVjMiB0ZXhQb3MxO1xcbiAgdGV4UG9zMS54ID0gKHF1YWQxLnggKiAwLjEyNSkgKyAwLjUgLyA1MTIuMCArICgoMC4xMjUgLSAxLjAgLyA1MTIuMCkgKiB0ZXh0dXJlQ29sb3Iucik7XFxuICB0ZXhQb3MxLnkgPSAocXVhZDEueSAqIDAuMTI1KSArIDAuNSAvIDUxMi4wICsgKCgwLjEyNSAtIDEuMCAvIDUxMi4wKSAqIHRleHR1cmVDb2xvci5nKTtcXG4gICNpZmRlZiBMVVRfRkxJUF9ZXFxuICB0ZXhQb3MxLnkgPSAxLjAgLSB0ZXhQb3MxLnk7XFxuICAjZW5kaWZcXG4gIGhpZ2hwIHZlYzIgdGV4UG9zMjtcXG4gIHRleFBvczIueCA9IChxdWFkMi54ICogMC4xMjUpICsgMC41IC8gNTEyLjAgKyAoKDAuMTI1IC0gMS4wIC8gNTEyLjApICogdGV4dHVyZUNvbG9yLnIpO1xcbiAgdGV4UG9zMi55ID0gKHF1YWQyLnkgKiAwLjEyNSkgKyAwLjUgLyA1MTIuMCArICgoMC4xMjUgLSAxLjAgLyA1MTIuMCkgKiB0ZXh0dXJlQ29sb3IuZyk7XFxuICAjaWZkZWYgTFVUX0ZMSVBfWVxcbiAgdGV4UG9zMi55ID0gMS4wIC0gdGV4UG9zMi55O1xcbiAgI2VuZGlmXFxuICBsb3dwIHZlYzQgbmV3Q29sb3IxID0gdGV4dHVyZTJEKGxvb2t1cFRhYmxlLCB0ZXhQb3MxKTtcXG4gIGxvd3AgdmVjNCBuZXdDb2xvcjIgPSB0ZXh0dXJlMkQobG9va3VwVGFibGUsIHRleFBvczIpO1xcbiAgbG93cCB2ZWM0IG5ld0NvbG9yID0gbWl4KG5ld0NvbG9yMSwgbmV3Q29sb3IyLCBmcmFjdChibHVlQ29sb3IpKTtcXG4gIHJldHVybiBuZXdDb2xvcjtcXG59XFxudm9pZCBtYWluKCkge1xcbiAgdmVjMyB0ZXhDb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KS5yZ2I7XFxuICBmbG9hdCBub2lzZU1hcCA9IHNtb290aHN0ZXAoY194X2x1bWEodGV4Q29sb3IpLCAwLjUsIDAuMCk7XFxuICB2ZWMyIHRVdiA9IHZVdiArIHRpY2s7XFxuICB2ZWMzIG5vaXNlID0gdmVjMyhhX3hfcmFuZG9tKHRVdiksIGFfeF9yYW5kb20odFV2ICogMS41KSwgYV94X3JhbmRvbSh0VXYgKiAwLjUpKTtcXG4gIHZlYzMgbm9pc2VDb2xvciA9IG1peChub2lzZSwgdmVjMygwLjUpLCBub2lzZU1hcCk7XFxuICB2ZWMzIGNvbG9yID0gbWl4KHRleENvbG9yLCBiX3hfYmxlbmRPdmVybGF5KHRleENvbG9yLCBub2lzZSksIDAuMTUpO1xcbiAgdmVjMyBjb3JyZWN0ZWQgPSBlX3hfbG9va3VwKHZlYzQoY29sb3IsIDEuMCksIHRMb29rdXApLnJnYjtcXG4gIGNvbG9yID0gbWl4KGNvbG9yLCBjb3JyZWN0ZWQsIDAuOSk7XFxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLCAxLjApO1xcbn1cIiwgW3tcIm5hbWVcIjpcInRpY2tcIixcInR5cGVcIjpcImZsb2F0XCJ9LHtcIm5hbWVcIjpcInREaWZmdXNlXCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn0se1wibmFtZVwiOlwidExvb2t1cFwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9LHtcIm5hbWVcIjpcInRPdmVybGF5XCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn0se1wibmFtZVwiOlwib3ZlcmxheVJlc29sdXRpb25cIixcInR5cGVcIjpcInZlYzJcIn1dLCBbXSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2NyZWF0ZVwiKShzb3VyY2UpOyIsInZhciBnbHNsaWZ5ID0gcmVxdWlyZShcImdsc2xpZnlcIik7XG52YXIgc291cmNlID0gcmVxdWlyZShcImdsc2xpZnkvc2ltcGxlLWFkYXB0ZXIuanNcIikoXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxudm9pZCBtYWluKCkge1xcbiAgdlV2ID0gdXY7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cIiwgXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudm9pZCBtYWluKCkge1xcbiAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpO1xcbn1cIiwgW3tcIm5hbWVcIjpcInREaWZmdXNlXCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn1dLCBbXSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2NyZWF0ZVwiKShzb3VyY2UpOyIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBUd2VlbkxpdGUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5Ud2Vlbk1heCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVHdlZW5NYXggOiBudWxsKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gICAgaWYgKCFUSFJFRS5NT1VTRSlcbiAgICAgICAgVEhSRUUuTU9VU0UgPSB7IExFRlQ6IDAsIE1JRERMRTogMSwgUklHSFQ6IDIgfTtcblxuICAgIC8qKlxuICAgICAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gICAgICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuICAgICAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gICAgICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gICAgICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuICAgICAqL1xuICAgIC8qZ2xvYmFsIFRIUkVFLCBjb25zb2xlICovXG5cbiAgICAvLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy4gSXQgbWFpbnRhaW5zXG4gICAgLy8gdGhlIFwidXBcIiBkaXJlY3Rpb24gYXMgK1ksIHVubGlrZSB0aGUgVHJhY2tiYWxsQ29udHJvbHMuIFRvdWNoIG9uIHRhYmxldCBhbmQgcGhvbmVzIGlzXG4gICAgLy8gc3VwcG9ydGVkLlxuICAgIC8vXG4gICAgLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuICAgIC8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4gICAgLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG4gICAgLy9cbiAgICAvLyBUaGlzIGlzIGEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3IgKG1vc3QpIFRyYWNrYmFsbENvbnRyb2xzIHVzZWQgaW4gZXhhbXBsZXMuXG4gICAgLy8gVGhhdCBpcywgaW5jbHVkZSB0aGlzIGpzIGZpbGUgYW5kIHdoZXJldmVyIHlvdSBzZWU6XG4gICAgLy8gICAgICBjb250cm9scyA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyggY2FtZXJhICk7XG4gICAgLy8gICAgICBjb250cm9scy50YXJnZXQueiA9IDE1MDtcbiAgICAvLyBTaW1wbGUgc3Vic3RpdHV0ZSBcIk9yYml0Q29udHJvbHNcIiBhbmQgdGhlIGNvbnRyb2wgc2hvdWxkIHdvcmsgYXMtaXMuXG5cbiAgICBmdW5jdGlvbiBPcmJpdENvbnRyb2xzKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cbiAgICAgICAgLy8gQVBJXG5cbiAgICAgICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIGNvbnRyb2wgb3JiaXRzIGFyb3VuZFxuICAgICAgICAvLyBhbmQgd2hlcmUgaXQgcGFucyB3aXRoIHJlc3BlY3QgdG8uXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICAvLyBjZW50ZXIgaXMgb2xkLCBkZXByZWNhdGVkOyB1c2UgXCJ0YXJnZXRcIiBpbnN0ZWFkXG4gICAgICAgIHRoaXMuY2VudGVyID0gdGhpcy50YXJnZXQ7XG5cbiAgICAgICAgLy8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvclxuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB0aGlzLm5vWm9vbSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuICAgICAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXRcbiAgICAgICAgdGhpcy5taW5EaXN0YW5jZSA9IDA7XG4gICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuICAgICAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuICAgICAgICB0aGlzLm5vUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICAgICAgdGhpcy5ub1BhbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmtleVBhblNwZWVkID0gNy4wOyAvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcbiAgICAgICAgdGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG4gICAgICAgIC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgICAgICAvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cbiAgICAgICAgdGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuICAgICAgICB0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcbiAgICAgICAgdGhpcy5ub0tleXMgPSBmYWxzZTtcblxuICAgICAgICAvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG4gICAgICAgIHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cbiAgICAgICAgLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIGludGVybmFsc1xuXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXM7XG5cbiAgICAgICAgdmFyIEVQUyA9IDAuMDAwMDAxO1xuXG4gICAgICAgIHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgICAgIHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICB2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICB2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgICAgICB2YXIgcGhpRGVsdGEgPSAwO1xuICAgICAgICB2YXIgdGhldGFEZWx0YSA9IDA7XG4gICAgICAgIHZhciBzY2FsZSA9IDE7XG4gICAgICAgIHZhciBwYW4gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgICAgIHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgICAgIHZhciBTVEFURSA9IHsgTk9ORSA6IC0xLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXG4gICAgICAgIHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgLy8gZm9yIHJlc2V0XG5cbiAgICAgICAgdGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXG4gICAgICAgIC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXG4gICAgICAgIHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuICAgICAgICB2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG4gICAgICAgIC8vIGV2ZW50c1xuXG4gICAgICAgIHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcbiAgICAgICAgdmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCd9O1xuICAgICAgICB2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnfTtcblxuICAgICAgICB0aGlzLnJvdGF0ZUxlZnQgPSBmdW5jdGlvbiAoIGFuZ2xlICkge1xuXG4gICAgICAgICAgICBpZiAoIGFuZ2xlID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICBhbmdsZSA9IGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhldGFEZWx0YSAtPSBhbmdsZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm90YXRlVXAgPSBmdW5jdGlvbiAoIGFuZ2xlICkge1xuXG4gICAgICAgICAgICBpZiAoIGFuZ2xlID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICBhbmdsZSA9IGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGhpRGVsdGEgLT0gYW5nbGU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgbGVmdFxuICAgICAgICB0aGlzLnBhbkxlZnQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG4gICAgICAgICAgICB2YXIgdGUgPSB0aGlzLm9iamVjdC5tYXRyaXguZWxlbWVudHM7XG5cbiAgICAgICAgICAgIC8vIGdldCBYIGNvbHVtbiBvZiBtYXRyaXhcbiAgICAgICAgICAgIHBhbk9mZnNldC5zZXQoIHRlWyAwIF0sIHRlWyAxIF0sIHRlWyAyIF0gKTtcbiAgICAgICAgICAgIHBhbk9mZnNldC5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYW4uYWRkKCBwYW5PZmZzZXQgKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHBhc3MgaW4gZGlzdGFuY2UgaW4gd29ybGQgc3BhY2UgdG8gbW92ZSB1cFxuICAgICAgICB0aGlzLnBhblVwID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuICAgICAgICAgICAgdmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xuXG4gICAgICAgICAgICAvLyBnZXQgWSBjb2x1bW4gb2YgbWF0cml4XG4gICAgICAgICAgICBwYW5PZmZzZXQuc2V0KCB0ZVsgNCBdLCB0ZVsgNSBdLCB0ZVsgNiBdICk7XG4gICAgICAgICAgICBwYW5PZmZzZXQubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhbi5hZGQoIHBhbk9mZnNldCApO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBwYXNzIGluIHgseSBvZiBjaGFuZ2UgZGVzaXJlZCBpbiBwaXhlbCBzcGFjZSxcbiAgICAgICAgLy8gcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG4gICAgICAgIHRoaXMucGFuID0gZnVuY3Rpb24gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUub2JqZWN0LmZvdiAhPT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgLy8gcGVyc3BlY3RpdmVcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBvc2l0aW9uLmNsb25lKCkuc3ViKCBzY29wZS50YXJnZXQgKTtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cbiAgICAgICAgICAgICAgICB0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cbiAgICAgICAgICAgICAgICAvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG4gICAgICAgICAgICAgICAgc2NvcGUucGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5wYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggc2NvcGUub2JqZWN0LnRvcCAhPT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgLy8gb3J0aG9ncmFwaGljXG4gICAgICAgICAgICAgICAgc2NvcGUucGFuTGVmdCggZGVsdGFYICogKHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0KSAvIGVsZW1lbnQuY2xpZW50V2lkdGggKTtcbiAgICAgICAgICAgICAgICBzY29wZS5wYW5VcCggZGVsdGFZICogKHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tKSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgb3IgcGVyc3BlY3RpdmVcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRvbGx5SW4gPSBmdW5jdGlvbiAoIGRvbGx5U2NhbGUgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9sbHlTY2FsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRvbGx5T3V0ID0gZnVuY3Rpb24gKCBkb2xseVNjYWxlICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIGRvbGx5U2NhbGUgPSBnZXRab29tU2NhbGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMub2JqZWN0LnBvc2l0aW9uO1xuXG4gICAgICAgICAgICBvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHRoaXMudGFyZ2V0ICk7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuICAgICAgICAgICAgb2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG4gICAgICAgICAgICAvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cbiAgICAgICAgICAgIHZhciB0aGV0YSA9IE1hdGguYXRhbjIoIG9mZnNldC54LCBvZmZzZXQueiApO1xuXG4gICAgICAgICAgICAvLyBhbmdsZSBmcm9tIHktYXhpc1xuXG4gICAgICAgICAgICB2YXIgcGhpID0gTWF0aC5hdGFuMiggTWF0aC5zcXJ0KCBvZmZzZXQueCAqIG9mZnNldC54ICsgb2Zmc2V0LnogKiBvZmZzZXQueiApLCBvZmZzZXQueSApO1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMuYXV0b1JvdGF0ZSApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoZXRhICs9IHRoZXRhRGVsdGE7XG4gICAgICAgICAgICBwaGkgKz0gcGhpRGVsdGE7XG5cbiAgICAgICAgICAgIC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG4gICAgICAgICAgICBwaGkgPSBNYXRoLm1heCggdGhpcy5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhQb2xhckFuZ2xlLCBwaGkgKSApO1xuXG4gICAgICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlIEVQUyBhbmQgUEktRVBTXG4gICAgICAgICAgICBwaGkgPSBNYXRoLm1heCggRVBTLCBNYXRoLm1pbiggTWF0aC5QSSAtIEVQUywgcGhpICkgKTtcblxuICAgICAgICAgICAgdmFyIHJhZGl1cyA9IG9mZnNldC5sZW5ndGgoKSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICAgICAgcmFkaXVzID0gTWF0aC5tYXgoIHRoaXMubWluRGlzdGFuY2UsIE1hdGgubWluKCB0aGlzLm1heERpc3RhbmNlLCByYWRpdXMgKSApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFkZCggcGFuICk7XG5cbiAgICAgICAgICAgIG9mZnNldC54ID0gcmFkaXVzICogTWF0aC5zaW4oIHBoaSApICogTWF0aC5zaW4oIHRoZXRhICk7XG4gICAgICAgICAgICBvZmZzZXQueSA9IHJhZGl1cyAqIE1hdGguY29zKCBwaGkgKTtcbiAgICAgICAgICAgIG9mZnNldC56ID0gcmFkaXVzICogTWF0aC5zaW4oIHBoaSApICogTWF0aC5jb3MoIHRoZXRhICk7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuICAgICAgICAgICAgb2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuICAgICAgICAgICAgcG9zaXRpb24uY29weSggdGhpcy50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5sb29rQXQoIHRoaXMudGFyZ2V0ICk7XG5cbiAgICAgICAgICAgIHRoZXRhRGVsdGEgPSAwO1xuICAgICAgICAgICAgcGhpRGVsdGEgPSAwO1xuICAgICAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgICAgICAgcGFuLnNldCggMCwgMCwgMCApO1xuXG4gICAgICAgICAgICBpZiAoIGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggdGhpcy5vYmplY3QucG9zaXRpb24gKSA+IEVQUyApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuICAgICAgICAgICAgICAgIGxhc3RQb3NpdGlvbi5jb3B5KCB0aGlzLm9iamVjdC5wb3NpdGlvbiApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICAgICAgdGhpcy50YXJnZXQuY29weSggdGhpcy50YXJnZXQwICk7XG4gICAgICAgICAgICB0aGlzLm9iamVjdC5wb3NpdGlvbi5jb3B5KCB0aGlzLnBvc2l0aW9uMCApO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCBldmVudC5idXR0b24gPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG4gICAgICAgICAgICAgICAgcm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gMSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cbiAgICAgICAgICAgICAgICBkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IDIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuUEFOO1xuXG4gICAgICAgICAgICAgICAgcGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgcm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuICAgICAgICAgICAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuICAgICAgICAgICAgICAgIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcbiAgICAgICAgICAgICAgICBzY29wZS5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgICAgIC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuICAgICAgICAgICAgICAgIHNjb3BlLnJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cbiAgICAgICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgICAgICBkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlJbigpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS5kb2xseU91dCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2NvcGUucGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cbiAgICAgICAgICAgICAgICBwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZVVwKCAvKiBldmVudCAqLyApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgdmFyIGRlbHRhID0gMDtcblxuICAgICAgICAgICAgaWYgKCBldmVudC53aGVlbERlbHRhICE9PSB1bmRlZmluZWQgKSB7IC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxuXG4gICAgICAgICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5kZXRhaWwgIT09IHVuZGVmaW5lZCApIHsgLy8gRmlyZWZveFxuXG4gICAgICAgICAgICAgICAgZGVsdGEgPSAtIGV2ZW50LmRldGFpbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5T3V0KCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5kb2xseUluKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLm5vS2V5cyA9PT0gdHJ1ZSB8fCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuICAgICAgICAgICAgICAgIGNhc2Ugc2NvcGUua2V5cy5VUDpcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBzY29wZS5rZXlzLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNoc3RhcnQoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG4gICAgICAgICAgICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cbiAgICAgICAgICAgICAgICAgICAgcGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdG91Y2htb3ZlKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgc3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuICAgICAgICAgICAgICAgICAgICAvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuICAgICAgICAgICAgICAgICAgICBkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG4gICAgICAgICAgICAgICAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5T3V0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlJbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICAgICAgICAgIHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNoZW5kKCAvKiBldmVudCAqLyApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIGZ1bmN0aW9uICggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0sIGZhbHNlICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTsgLy8gZmlyZWZveFxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoc3RhcnQsIGZhbHNlICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0b3VjaGVuZCwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0b3VjaG1vdmUsIGZhbHNlICk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG4gICAgICAgIC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgfTtcblxuICAgIGluaGVyaXRzKE9yYml0Q29udHJvbHMsIFRIUkVFLkV2ZW50RGlzcGF0Y2hlcilcbiAgICByZXR1cm4gT3JiaXRDb250cm9sc1xufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBudW10eXBlKG51bSwgZGVmKSB7XG5cdHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJ1xuXHRcdD8gbnVtIFxuXHRcdDogKHR5cGVvZiBkZWYgPT09ICdudW1iZXInID8gZGVmIDogMClcbn0iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXMtYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG52YXIga01heExlbmd0aCA9IDB4M2ZmZmZmZmZcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAtIEltcGxlbWVudGF0aW9uIG11c3Qgc3VwcG9ydCBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcy5cbiAqICAgRmlyZWZveCA0LTI5IGxhY2tlZCBzdXBwb3J0LCBmaXhlZCBpbiBGaXJlZm94IDMwKy5cbiAqICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cbiAqXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleSB3aWxsXG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCB3aWxsIHdvcmsgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IChmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBuZXcgVWludDhBcnJheSgxKS5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBzdWJqZWN0ID4gMCA/IHN1YmplY3QgPj4+IDAgOiAwXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JylcbiAgICAgIHN1YmplY3QgPSBiYXNlNjRjbGVhbihzdWJqZWN0KVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIHN1YmplY3QgIT09IG51bGwpIHsgLy8gYXNzdW1lIG9iamVjdCBpcyBhcnJheS1saWtlXG4gICAgaWYgKHN1YmplY3QudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShzdWJqZWN0LmRhdGEpKVxuICAgICAgc3ViamVjdCA9IHN1YmplY3QuZGF0YVxuICAgIGxlbmd0aCA9ICtzdWJqZWN0Lmxlbmd0aCA+IDAgPyBNYXRoLmZsb29yKCtzdWJqZWN0Lmxlbmd0aCkgOiAwXG4gIH0gZWxzZVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3RhcnQgd2l0aCBudW1iZXIsIGJ1ZmZlciwgYXJyYXkgb3Igc3RyaW5nJylcblxuICBpZiAodGhpcy5sZW5ndGggPiBrTWF4TGVuZ3RoKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBidWZbaV0gPSAoKHN1YmplY3RbaV0gJSAyNTYpICsgMjU2KSAlIDI1NlxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW4gJiYgYVtpXSA9PT0gYltpXTsgaSsrKSB7fVxuICBpZiAoaSAhPT0gbGVuKSB7XG4gICAgeCA9IGFbaV1cbiAgICB5ID0gYltpXVxuICB9XG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0WywgbGVuZ3RoXSknKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHRvdGFsTGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggPj4+IDFcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8vIHByZS1zZXQgZm9yIHZhbHVlcyB0aGF0IG1heSBleGlzdCBpbiB0aGUgZnV0dXJlXG5CdWZmZXIucHJvdG90eXBlLmxlbmd0aCA9IHVuZGVmaW5lZFxuQnVmZmVyLnByb3RvdHlwZS5wYXJlbnQgPSB1bmRlZmluZWRcblxuLy8gdG9TdHJpbmcoZW5jb2RpbmcsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID09PSBJbmZpbml0eSA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcbiAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKGVuZCA8PSBzdGFydCkgcmV0dXJuICcnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYmluYXJ5U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKVxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoYikge1xuICBpZighQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heClcbiAgICAgIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYilcbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKGJ5dGUpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGJpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiB1dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBiaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHV0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGFzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW47XG4gICAgaWYgKHN0YXJ0IDwgMClcbiAgICAgIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKVxuICAgICAgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KVxuICAgIGVuZCA9IHN0YXJ0XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSlcbiAgICByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2J1ZmZlciBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgaWYgKHRhcmdldF9zdGFydCA8IDAgfHwgdGFyZ2V0X3N0YXJ0ID49IHRhcmdldC5sZW5ndGgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gc291cmNlLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwIHx8IGVuZCA+IHNvdXJjZS5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IHV0ZjhUb0J5dGVzKHZhbHVlLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICB9XG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5jb25zdHJ1Y3RvciA9IEJ1ZmZlclxuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuZXF1YWxzID0gQlAuZXF1YWxzXG4gIGFyci5jb21wYXJlID0gQlAuY29tcGFyZVxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtel0vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpIHtcbiAgICAgIGJ5dGVBcnJheS5wdXNoKGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cbiIsInZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcbiIsIlxuLyoqXG4gKiBpc0FycmF5XG4gKi9cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIHRvU3RyaW5nXG4gKi9cblxudmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGB2YWxgXG4gKiBpcyBhbiBhcnJheS5cbiAqXG4gKiBleGFtcGxlOlxuICpcbiAqICAgICAgICBpc0FycmF5KFtdKTtcbiAqICAgICAgICAvLyA+IHRydWVcbiAqICAgICAgICBpc0FycmF5KGFyZ3VtZW50cyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICogICAgICAgIGlzQXJyYXkoJycpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge21peGVkfSB2YWxcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5IHx8IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuICEhIHZhbCAmJiAnW29iamVjdCBBcnJheV0nID09IHN0ci5jYWxsKHZhbCk7XG59O1xuIiwidmFyIGlzR0wgPSByZXF1aXJlKCdpcy13ZWJnbC1jb250ZXh0Jyk7XG52YXIgZ2V0R0wgPSByZXF1aXJlKCd3ZWJnbC1jb250ZXh0Jyk7XG52YXIgZGVib3VuY2UgPSByZXF1aXJlKCdkZWJvdW5jZScpO1xudmFyIGFkZEV2ZW50ID0gcmVxdWlyZSgnYWRkLWV2ZW50LWxpc3RlbmVyJyk7XG5cbmZ1bmN0aW9uIGlzQ2FudmFzQ29udGV4dChvYmopIHtcbiAgICB2YXIgY3R4MmQgPSB0eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEICE9PSAndW5kZWZpbmVkJyAmJiBvYmogaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcmV0dXJuIG9iaiAmJiAoY3R4MmQgfHwgaXNHTChvYmopKTtcbn1cblxuZnVuY3Rpb24gQ2FudmFzQXBwKHJlbmRlciwgb3B0aW9ucykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDYW52YXNBcHApKVxuICAgICAgICByZXR1cm4gbmV3IENhbnZhc0FwcChyZW5kZXIsIG9wdGlvbnMpO1xuXG4gICAgLy9hbGxvdyBvcHRpb25zIHRvIGJlIHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudFxuICAgIGlmICh0eXBlb2YgcmVuZGVyID09PSAnb2JqZWN0JyAmJiByZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHJlbmRlcjtcbiAgICAgICAgcmVuZGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICByZW5kZXIgPSB0eXBlb2YgcmVuZGVyID09PSAnZnVuY3Rpb24nID8gcmVuZGVyIDogb3B0aW9ucy5vblJlbmRlcjtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zfHx7fTtcbiAgICBvcHRpb25zLnJldGluYSA9IHR5cGVvZiBvcHRpb25zLnJldGluYSA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLnJldGluYSA6IHRydWU7XG4gICAgXG4gICAgdmFyIGhhc1dpZHRoID0gdHlwZW9mIG9wdGlvbnMud2lkdGggPT09IFwibnVtYmVyXCIsIFxuICAgICAgICBoYXNIZWlnaHQgPSB0eXBlb2Ygb3B0aW9ucy5oZWlnaHQgPT09IFwibnVtYmVyXCI7XG5cbiAgICAvL2lmIGVpdGhlciB3aWR0aCBvciBoZWlnaHQgaXMgc3BlY2lmaWVkLCBkb24ndCBhdXRvLXJlc2l6ZSB0byB0aGUgd2luZG93Li4uXG4gICAgaWYgKGhhc1dpZHRoIHx8IGhhc0hlaWdodCkgXG4gICAgICAgIG9wdGlvbnMuaWdub3JlUmVzaXplID0gdHJ1ZTtcblxuICAgIG9wdGlvbnMud2lkdGggPSBoYXNXaWR0aCA/IG9wdGlvbnMud2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBvcHRpb25zLmhlaWdodCA9IGhhc0hlaWdodCA/IG9wdGlvbnMuaGVpZ2h0IDogd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdmFyIERQUiA9IG9wdGlvbnMucmV0aW5hID8gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKSA6IDE7IFxuXG4gICAgLy9zZXR1cCB0aGUgY2FudmFzXG4gICAgdmFyIGNhbnZhcyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgYXR0cmlicyA9IG9wdGlvbnMuY29udGV4dEF0dHJpYnV0ZXN8fHt9O1xuXG4gICAgdGhpcy5pc1dlYkdMID0gZmFsc2U7XG5cbiAgICAvL2lmIHVzZXIgcHJvdmlkZWQgYSBjb250ZXh0IG9iamVjdFxuICAgIGlmIChpc0NhbnZhc0NvbnRleHQob3B0aW9ucy5jb250ZXh0KSkge1xuICAgICAgICBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0O1xuICAgICAgICBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICB9XG5cbiAgICAvL290aGVyd2lzZSBhbGxvdyBmb3IgYSBzdHJpbmcgdG8gc2V0IG9uZSB1cFxuICAgIGlmICghY2FudmFzKVxuICAgICAgICBjYW52YXMgPSBvcHRpb25zLmNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gICAgY2FudmFzLndpZHRoID0gb3B0aW9ucy53aWR0aCAqIERQUjtcbiAgICBjYW52YXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKiBEUFI7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGV4dCA9PT0gXCJ3ZWJnbFwiIHx8IG9wdGlvbnMuY29udGV4dCA9PT0gXCJleHBlcmltZW50YWwtd2ViZ2xcIikge1xuICAgICAgICAgICAgY29udGV4dCA9IGdldEdMKHsgY2FudmFzOiBjYW52YXMsIGF0dHJpYnV0ZXM6IGF0dHJpYnMgfSk7XG4gICAgICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBcIldlYkdMIENvbnRleHQgTm90IFN1cHBvcnRlZCAtLSB0cnkgZW5hYmxpbmcgaXQgb3IgdXNpbmcgYSBkaWZmZXJlbnQgYnJvd3NlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG9wdGlvbnMuY29udGV4dHx8XCIyZFwiLCBhdHRyaWJzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXNXZWJHTCA9IGlzR0woY29udGV4dCk7XG5cbiAgICBpZiAob3B0aW9ucy5yZXRpbmEpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCArICdweCc7XG4gICAgfVxuXG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMub25SZXNpemUgPSBvcHRpb25zLm9uUmVzaXplO1xuICAgIHRoaXMuX0RQUiA9IERQUjtcbiAgICB0aGlzLl9yZXRpbmEgPSBvcHRpb25zLnJldGluYTtcbiAgICB0aGlzLl9vbmNlID0gb3B0aW9ucy5vbmNlO1xuICAgIHRoaXMuX2lnbm9yZVJlc2l6ZSA9IG9wdGlvbnMuaWdub3JlUmVzaXplO1xuICAgIHRoaXMuX2xhc3RGcmFtZSA9IG51bGw7XG4gICAgdGhpcy5fdGhlbiA9IERhdGUubm93KCk7XG5cbiAgICAvL0ZQUyBjb3VudGVyXG4gICAgdGhpcy5mcHMgPSA2MDtcbiAgICB0aGlzLl9mcmFtZXMgPSAwO1xuICAgIHRoaXMuX3ByZXZUaW1lID0gdGhpcy5fdGhlbjtcblxuICAgIGlmICghdGhpcy5faWdub3JlUmVzaXplKSB7XG4gICAgICAgIG9wdGlvbnMucmVzaXplRGVib3VuY2UgPSB0eXBlb2Ygb3B0aW9ucy5yZXNpemVEZWJvdW5jZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLnJlc2l6ZURlYm91bmNlIDogNTA7XG4gICAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCBvcHRpb25zLnJlc2l6ZURlYm91bmNlLCBmYWxzZSkpO1xuXG4gICAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVuZGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5vblJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpOyAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vZHVtbXkgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMub25SZW5kZXIgPSBmdW5jdGlvbiAoY29udGV4dCwgd2lkdGgsIGhlaWdodCwgZHQpIHsgfTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlck9uY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBkdCA9IChub3ctdGhpcy5fdGhlbik7XG5cbiAgICAgICAgdGhpcy5fZnJhbWVzKys7XG4gICAgICAgIGlmIChub3cgPiB0aGlzLl9wcmV2VGltZSArIDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMuZnBzID0gTWF0aC5yb3VuZCgodGhpcy5fZnJhbWVzICogMTAwMCkgLyAobm93IC0gdGhpcy5fcHJldlRpbWUpKTtcblxuICAgICAgICAgICAgdGhpcy5fcHJldlRpbWUgPSBub3c7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZXMgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzV2ViR0wpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUodGhpcy5fRFBSLCB0aGlzLl9EUFIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLl9EUFIsIHRoaXMuaGVpZ2h0ICogdGhpcy5fRFBSKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5vblJlbmRlcih0aGlzLmNvbnRleHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBkdCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzV2ViR0wpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgICAgIHRoaXMuX3RoZW4gPSBub3c7XG4gICAgfTtcblxuICAgIHRoaXMuX3JlbmRlckhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLl9vbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0RnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fcmVuZGVySGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlck9uY2UoKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMub25SZWFkeSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG9wdGlvbnMub25SZWFkeS5jYWxsKHRoaXMsIGNvbnRleHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNBcHAucHJvdG90eXBlLCAncmV0aW5hRW5hYmxlZCcsIHtcblxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgICB0aGlzLl9yZXRpbmEgPSB2O1xuICAgICAgICB0aGlzLl9EUFIgPSB0aGlzLl9yZXRpbmEgPyAod2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpIDogMTtcbiAgICAgICAgdGhpcy5yZXNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmV0aW5hO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FudmFzQXBwLnByb3RvdHlwZSwgJ2RldmljZVdpZHRoJywge1xuXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLl9EUFI7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNBcHAucHJvdG90eXBlLCAnZGV2aWNlSGVpZ2h0Jywge1xuXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy5fRFBSO1xuICAgIH1cbn0pO1xuXG5DYW52YXNBcHAucHJvdG90eXBlLnJlc2V0RlBTID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZnJhbWVzID0gMDtcbiAgICB0aGlzLl9wcmV2VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5fdGhlbiA9IHRoaXMuX3ByZXZUaW1lO1xuICAgIHRoaXMuZnBzID0gNjA7XG59O1xuXG5DYW52YXNBcHAucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucnVubmluZylcbiAgICAgICAgcmV0dXJuO1xuICAgIFxuICAgIGlmICh0aGlzLl9sYXN0RnJhbWUpIFxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9sYXN0RnJhbWUpO1xuXG4gICAgLy9yZXNldCBGUFMgY291bnRlclxuICAgIHRoaXMucmVzZXRGUFMoKTtcblxuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgdGhpcy5fbGFzdEZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JlbmRlckhhbmRsZXIpO1xufTtcblxuQ2FudmFzQXBwLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xhc3RGcmFtZSkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9sYXN0RnJhbWUpO1xuICAgICAgICB0aGlzLl9sYXN0RnJhbWUgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbn07XG5cbkNhbnZhc0FwcC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcztcblxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5fRFBSO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodCAqIHRoaXMuX0RQUjtcblxuICAgIGlmICh0aGlzLl9yZXRpbmEpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29uY2UpXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9yZW5kZXJIYW5kbGVyKTtcbiAgICBpZiAodHlwZW9mIHRoaXMub25SZXNpemUgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgdGhpcy5vblJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0FwcDsiLCJhZGRFdmVudExpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudExpc3RlbmVyXG5hZGRFdmVudExpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyXG5cbm1vZHVsZS5leHBvcnRzID0gYWRkRXZlbnRMaXN0ZW5lclxuXG52YXIgRXZlbnRzID0gbnVsbFxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIEV2ZW50cyA9IEV2ZW50cyB8fCAoXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA/XG4gICAge2FkZDogc3RkQXR0YWNoLCBybTogc3RkRGV0YWNofSA6XG4gICAge2FkZDogb2xkSUVBdHRhY2gsIHJtOiBvbGRJRURldGFjaH1cbiAgKVxuICBcbiAgcmV0dXJuIEV2ZW50cy5hZGQoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgRXZlbnRzID0gRXZlbnRzIHx8IChcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyID9cbiAgICB7YWRkOiBzdGRBdHRhY2gsIHJtOiBzdGREZXRhY2h9IDpcbiAgICB7YWRkOiBvbGRJRUF0dGFjaCwgcm06IG9sZElFRGV0YWNofVxuICApXG4gIFxuICByZXR1cm4gRXZlbnRzLnJtKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKVxufVxuXG5mdW5jdGlvbiBzdGRBdHRhY2goZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKVxufVxuXG5mdW5jdGlvbiBzdGREZXRhY2goZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKVxufVxuXG5mdW5jdGlvbiBvbGRJRUF0dGFjaChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICBpZih1c2VDYXB0dXJlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgdXNlQ2FwdHVyZSBpbiBvbGRJRScpXG4gIH1cblxuICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcilcbn1cblxuZnVuY3Rpb24gb2xkSUVEZXRhY2goZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpXG59XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgbm93ID0gcmVxdWlyZSgnZGF0ZS1ub3cnKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gKiBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gKiBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAqIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gKlxuICogQHNvdXJjZSB1bmRlcnNjb3JlLmpzXG4gKiBAc2VlIGh0dHA6Ly91bnNjcmlwdGFibGUuY29tLzIwMDkvMDMvMjAvZGVib3VuY2luZy1qYXZhc2NyaXB0LW1ldGhvZHMvXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jdGlvbiB0byB3cmFwXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZW91dCBpbiBtcyAoYDEwMGApXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHdoZXRoZXIgdG8gZXhlY3V0ZSBhdCB0aGUgYmVnaW5uaW5nIChgZmFsc2VgKVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSl7XG4gIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcbiAgaWYgKG51bGwgPT0gd2FpdCkgd2FpdCA9IDEwMDtcblxuICBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICB2YXIgbGFzdCA9IG5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPiAwKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdGltZXN0YW1wID0gbm93KCk7XG4gICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgaWYgKCF0aW1lb3V0KSB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IERhdGUubm93IHx8IG5vd1xuXG5mdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGN0eCkge1xuXHRpZiAoIWN0eCkgcmV0dXJuIGZhbHNlXG5cdHZhciBnbCA9IGN0eFxuXHQvL2NvbXBhdGliaWxpdHkgd2l0aCBDaHJvbWUgV2ViR0wgSW5zcGVjdG9yIEFkZG9uXG5cdGlmICh0eXBlb2YgY3R4LnJhd2dsICE9PSAndW5kZWZpbmVkJylcblx0XHRnbCA9IGN0eC5yYXdnbFxuXHRpZiAodHlwZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpXG5cdFx0cmV0dXJuIHRydWVcblx0cmV0dXJuIGZhbHNlXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG4gICAgb3B0cyA9IG9wdHN8fHt9O1xuICAgIHZhciBjYW52YXMgPSBvcHRzLmNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGlmICh0eXBlb2Ygb3B0cy53aWR0aCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgY2FudmFzLndpZHRoID0gb3B0cy53aWR0aDtcbiAgICBpZiAodHlwZW9mIG9wdHMuaGVpZ2h0ID09PSBcIm51bWJlclwiKVxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gb3B0cy5oZWlnaHQ7XG4gICAgXG4gICAgdmFyIGF0dHJpYnMgPSAob3B0cy5hdHRyaWJ1dGVzIHx8IG9wdHMuYXR0cmlicyB8fCB7fSk7XG4gICAgdHJ5IHtcbiAgICAgICAgZ2wgPSAoY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJywgYXR0cmlicykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIGF0dHJpYnMpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGdsID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdsO1xufTsiLCIvKiFcbiAgKiBkb21yZWFkeSAoYykgRHVzdGluIERpYXogMjAxNCAtIExpY2Vuc2UgTUlUXG4gICovXG4hZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24pIHtcblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSB0aGlzW25hbWVdID0gZGVmaW5pdGlvbigpXG5cbn0oJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmbnMgPSBbXSwgbGlzdGVuZXJcbiAgICAsIGRvYyA9IGRvY3VtZW50XG4gICAgLCBoYWNrID0gZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbFxuICAgICwgZG9tQ29udGVudExvYWRlZCA9ICdET01Db250ZW50TG9hZGVkJ1xuICAgICwgbG9hZGVkID0gKGhhY2sgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoZG9jLnJlYWR5U3RhdGUpXG5cblxuICBpZiAoIWxvYWRlZClcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIpXG4gICAgbG9hZGVkID0gMVxuICAgIHdoaWxlIChsaXN0ZW5lciA9IGZucy5zaGlmdCgpKSBsaXN0ZW5lcigpXG4gIH0pXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIGxvYWRlZCA/IGZuKCkgOiBmbnMucHVzaChmbilcbiAgfVxuXG59KTtcbiIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJ2dsLW1hdDQvaWRlbnRpdHknKVxudmFyIGNyZWF0ZVNoYWRlciA9IHJlcXVpcmUoJ2dsLXNoYWRlci1jb3JlJylcblxudmFyIFBPU0lUSU9OX0FUVFJJQlVURSA9ICdwb3NpdGlvbicsXG4gICAgTk9STUFMX0FUVFJJQlVURSA9ICdub3JtYWwnLFxuICAgIENPTE9SX0FUVFJJQlVURSA9ICdjb2xvcicsXG4gICAgVEVYQ09PUkRfQVRUUklCVVRFID0gJ3RleGNvb3JkJztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGdsLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnN8fHt9XG4gICAgb3B0aW9ucy50ZXhjb29yZCA9IHR5cGVvZiBvcHRpb25zLnRleGNvb3JkID09PSAnbnVtYmVyJyBcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMudGV4Y29vcmQgOiAob3B0aW9ucy50ZXhjb29yZHx8MClcbiAgICAgICAgXG4gICAgdmFyIHNoYWRlclNvdXJjZSA9IG1vZHVsZS5leHBvcnRzLmdlbmVyYXRlKG9wdGlvbnMpLFxuICAgICAgICB2ZXJ0ID0gc2hhZGVyU291cmNlLnZlcnRleCxcbiAgICAgICAgZnJhZyA9IHNoYWRlclNvdXJjZS5mcmFnbWVudCxcbiAgICAgICAgdW5pZm9ybXMgPSBzaGFkZXJTb3VyY2UudW5pZm9ybXMsXG4gICAgICAgIGF0dHJpYnMgPSBzaGFkZXJTb3VyY2UuYXR0cmlidXRlc1xuICAgIFxuICAgIHZhciBzaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIHZlcnQsIGZyYWcsIHVuaWZvcm1zLCBhdHRyaWJzKVxuICAgIHNoYWRlci5iaW5kKClcbiAgICBmb3IgKHZhciBpPTA7IGk8b3B0aW9ucy50ZXhjb29yZDsgaSsrKSBcbiAgICAgICAgc2hhZGVyLnVuaWZvcm1zWyd0ZXh0dXJlJytpXSA9IGlcblxuICAgIHZhciBhcnIgPSBpZGVudGl0eSggbmV3IEZsb2F0MzJBcnJheSgxNikgKVxuICAgIHNoYWRlci51bmlmb3Jtcy5wcm9qZWN0aW9uID0gYXJyXG4gICAgc2hhZGVyLnVuaWZvcm1zLm1vZGVsID0gYXJyXG4gICAgc2hhZGVyLnVuaWZvcm1zLnZpZXcgPSBhcnJcbiAgICBzaGFkZXIudW5pZm9ybXMudGludCA9IG9wdGlvbnMudGludCB8fCBbMSwgMSwgMSwgMV1cblxuICAgIHJldHVybiBzaGFkZXJcbn1cblxubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnN8fHt9XG4gICAgb3B0aW9ucy50ZXhjb29yZCA9IHR5cGVvZiBvcHRpb25zLnRleGNvb3JkID09PSAnbnVtYmVyJyBcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMudGV4Y29vcmQgOiAob3B0aW9ucy50ZXhjb29yZHx8MClcblxuICAgIHZhciB2ZXJ0ID0gdHlwZW9mIG9wdGlvbnMudmVydGV4ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBvcHRpb25zLnZlcnRleCA6IGNyZWF0ZVZlcnRleFNoYWRlcihvcHRpb25zLm5vcm1hbCwgb3B0aW9ucy5jb2xvciwgb3B0aW9ucy50ZXhjb29yZClcbiAgICB2YXIgZnJhZyA9IHR5cGVvZiBvcHRpb25zLmZyYWdtZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBvcHRpb25zLmZyYWdtZW50IDogY3JlYXRlRnJhZ21lbnRTaGFkZXIob3B0aW9ucy5jb2xvciwgb3B0aW9ucy50ZXhjb29yZClcblxuICAgIHZhciB1bmlmb3JtcyA9IFtcbiAgICAgICAgeyB0eXBlOiAnbWF0NCcsIG5hbWU6ICdwcm9qZWN0aW9uJyB9LFxuICAgICAgICB7IHR5cGU6ICdtYXQ0JywgbmFtZTogJ3ZpZXcnIH0sXG4gICAgICAgIHsgdHlwZTogJ21hdDQnLCBuYW1lOiAnbW9kZWwnIH0sXG4gICAgICAgIHsgdHlwZTogJ3ZlYzQnLCBuYW1lOiAndGludCcgfVxuICAgIF1cblxuICAgIC8vU2ltaWxhciB0byBvbGQgc2Nob29sIHBpcGVsaW5lLCB3ZSB3aWxsIHVzZSBmaXhlZCBsb2NhdGlvbnNcbiAgICAvL2h0dHA6Ly93d3cub3BlbmdsLm9yZy9zZGsvZG9jcy90dXRvcmlhbHMvQ2xvY2t3b3JrQ29kZXJzL2F0dHJpYnV0ZXMucGhwXG4gICAgdmFyIGF0dHJpYnMgPSBbXG4gICAgICAgIHsgdHlwZTogJ3ZlYzQnLCBuYW1lOiBQT1NJVElPTl9BVFRSSUJVVEUsIGxvY2F0aW9uOiAwIH1cbiAgICBdXG5cbiAgICBpZiAob3B0aW9ucy5ub3JtYWwpXG4gICAgICAgIGF0dHJpYnMucHVzaCh7IHR5cGU6ICd2ZWMzJywgbmFtZTogTk9STUFMX0FUVFJJQlVURSwgbG9jYXRpb246IDEgfSlcbiAgICBpZiAob3B0aW9ucy5jb2xvcilcbiAgICAgICAgYXR0cmlicy5wdXNoKHsgdHlwZTogJ3ZlYzQnLCBuYW1lOiBDT0xPUl9BVFRSSUJVVEUsIGxvY2F0aW9uOiAyIH0pXG5cbiAgICB2YXIgaWR4ID0gM1xuICAgIGZvciAodmFyIGk9MDsgaTxvcHRpb25zLnRleGNvb3JkOyBpKyspIHtcbiAgICAgICAgdW5pZm9ybXMucHVzaCh7IHR5cGU6ICdzYW1wbGVyMkQnLCBuYW1lOiAndGV4dHVyZScraSB9KVxuICAgICAgICBhdHRyaWJzLnB1c2goeyB0eXBlOiAndmVjMicsIG5hbWU6IFRFWENPT1JEX0FUVFJJQlVURStpLCBsb2NhdGlvbjogaWR4KysgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyB2ZXJ0ZXg6IHZlcnQsIGZyYWdtZW50OiBmcmFnLCB1bmlmb3JtczogdW5pZm9ybXMsIGF0dHJpYnV0ZXM6IGF0dHJpYnMgfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcihoYXNOb3JtYWxzLCBoYXNDb2xvcnMsIG51bVRleENvb3Jkcykge1xuICAgIG51bVRleENvb3JkcyA9IG51bVRleENvb3JkcyB8fCAwO1xuICAgIHZhciBzaGFkZXIgPSBcIlwiO1xuICAgIHNoYWRlciArPSBcImF0dHJpYnV0ZSB2ZWM0IFwiK1BPU0lUSU9OX0FUVFJJQlVURStcIjtcXG5cIlxuICAgICAgICAgKyAoaGFzTm9ybWFscyA/IFwiYXR0cmlidXRlIHZlYzMgXCIgKyBOT1JNQUxfQVRUUklCVVRFICsgXCI7XFxuXCIgOiBcIlwiKVxuICAgICAgICAgKyAoaGFzQ29sb3JzID8gXCJhdHRyaWJ1dGUgdmVjNCBcIiArIENPTE9SX0FUVFJJQlVURSArIFwiO1xcblwiIDogXCJcIik7XG5cbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UZXhDb29yZHM7IGkrKykge1xuICAgICAgICBzaGFkZXIgKz0gXCJhdHRyaWJ1dGUgdmVjMiBcIiArIFRFWENPT1JEX0FUVFJJQlVURSArIGkgKyBcIjtcXG5cIjtcbiAgICB9XG5cbiAgICBzaGFkZXIgKz0gXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXG5cIjtcbiAgICBzaGFkZXIgKz0gXCJ1bmlmb3JtIG1hdDQgdmlldztcXG5cIjtcbiAgICBzaGFkZXIgKz0gXCJ1bmlmb3JtIG1hdDQgbW9kZWw7XFxuXCI7XG4gICAgXG4gICAgc2hhZGVyICs9IChoYXNDb2xvcnMgPyBcInZhcnlpbmcgdmVjNCB2X2NvbDtcXG5cIiA6IFwiXCIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRleENvb3JkczsgaSsrKSB7XG4gICAgICAgIHNoYWRlciArPSBcInZhcnlpbmcgdmVjMiB2X3RleFwiICsgaSArIFwiO1xcblwiO1xuICAgIH1cblxuICAgIHNoYWRlciArPSBcIlxcbnZvaWQgbWFpbigpIHtcXG5cIiArIFwiICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogXCIgKyBQT1NJVElPTl9BVFRSSUJVVEUgKyBcIjtcXG5cIlxuICAgICAgICAgICAgKyAoaGFzQ29sb3JzID8gXCIgICB2X2NvbCA9IFwiICsgQ09MT1JfQVRUUklCVVRFICsgXCI7XFxuXCIgOiBcIlwiKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UZXhDb29yZHM7IGkrKykge1xuICAgICAgICBzaGFkZXIgKz0gXCIgICB2X3RleFwiICsgaSArIFwiID0gXCIgKyBURVhDT09SRF9BVFRSSUJVVEUgKyBpICsgXCI7XFxuXCI7XG4gICAgfVxuICAgIHNoYWRlciArPSBcIiAgIGdsX1BvaW50U2l6ZSA9IDEuMDtcXG5cIjtcbiAgICBzaGFkZXIgKz0gXCJ9XFxuXCI7XG5cbiAgICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihoYXNDb2xvcnMsIG51bVRleENvb3Jkcykge1xuICAgIG51bVRleENvb3JkcyA9IG51bVRleENvb3JkcyB8fCAwO1xuICAgIHZhciBzaGFkZXIgPSBcIiNpZmRlZiBHTF9FU1xcblwiICsgXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG5cIiArIFwiI2VuZGlmXFxuXFxuXCI7XG4gXG4gICAgaWYgKGhhc0NvbG9ycykgXG4gICAgICAgIHNoYWRlciArPSBcInZhcnlpbmcgdmVjNCB2X2NvbDtcXG5cIjtcblxuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UZXhDb29yZHM7IGkrKykge1xuICAgICAgICBzaGFkZXIgKz0gXCJ2YXJ5aW5nIHZlYzIgdl90ZXhcIiArIGkgKyBcIjtcXG5cIjtcbiAgICAgICAgc2hhZGVyICs9IFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZVwiICsgaSArIFwiO1xcblwiO1xuICAgIH1cbiAgICBzaGFkZXIgKz0gXCJ1bmlmb3JtIHZlYzQgdGludDtcXG5cIjtcblxuICAgIHNoYWRlciArPSBcIlxcbnZvaWQgbWFpbigpIHtcXG5cIiArIFwiICAgZ2xfRnJhZ0NvbG9yID0gXCI7XG5cbiAgICBpZiAoaGFzQ29sb3JzKVxuICAgICAgICBzaGFkZXIgKz0gXCJ2X2NvbFwiXG5cbiAgICBpZiAoaGFzQ29sb3JzICYmIG51bVRleENvb3JkcyA+IDApIFxuICAgICAgICBzaGFkZXIgKz0gXCIgKiBcIjtcbiAgICBlbHNlIGlmICghaGFzQ29sb3JzICYmICFudW1UZXhDb29yZHMpXG4gICAgICAgIHNoYWRlciArPSBcInZlYzQoMS4wKVwiXG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVGV4Q29vcmRzOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT0gbnVtVGV4Q29vcmRzIC0gMSkge1xuICAgICAgICAgICAgICAgIHNoYWRlciArPSBcIiB0ZXh0dXJlMkQodGV4dHVyZVwiICsgaSArIFwiLCAgdl90ZXhcIiArIGkgKyBcIilcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGFkZXIgKz0gXCIgdGV4dHVyZTJEKHRleHR1cmVcIiArIGkgKyBcIiwgIHZfdGV4XCIgKyBpICsgXCIpICpcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNoYWRlciArPSBcIiAqIHRpbnRcIlxuICAgIHNoYWRlciArPSBcIjtcXG59XCI7XG4gICAgcmV0dXJuIHNoYWRlcjtcbn0iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBdHRyaWJ1dGVXcmFwcGVyXG5cbi8vU2hhZGVyIGF0dHJpYnV0ZSBjbGFzc1xuZnVuY3Rpb24gU2hhZGVyQXR0cmlidXRlKGdsLCBwcm9ncmFtLCBsb2NhdGlvbiwgZGltZW5zaW9uLCBuYW1lLCBjb25zdEZ1bmMsIHJlbGluaykge1xuICB0aGlzLl9nbCA9IGdsXG4gIHRoaXMuX3Byb2dyYW0gPSBwcm9ncmFtXG4gIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb25cbiAgdGhpcy5fZGltZW5zaW9uID0gZGltZW5zaW9uXG4gIHRoaXMuX25hbWUgPSBuYW1lXG4gIHRoaXMuX2NvbnN0RnVuYyA9IGNvbnN0RnVuY1xuICB0aGlzLl9yZWxpbmsgPSByZWxpbmtcbn1cblxudmFyIHByb3RvID0gU2hhZGVyQXR0cmlidXRlLnByb3RvdHlwZVxuXG5wcm90by5wb2ludGVyID0gZnVuY3Rpb24gc2V0QXR0cmliUG9pbnRlcih0eXBlLCBub3JtYWxpemVkLCBzdHJpZGUsIG9mZnNldCkge1xuICB2YXIgZ2wgPSB0aGlzLl9nbFxuICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuX2xvY2F0aW9uLCB0aGlzLl9kaW1lbnNpb24sIHR5cGV8fGdsLkZMT0FULCAhIW5vcm1hbGl6ZWQsIHN0cmlkZXx8MCwgb2Zmc2V0fHwwKVxuICB0aGlzLl9nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLl9sb2NhdGlvbilcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbG9jYXRpb24nLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uXG4gIH1cbiAgLCBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICBpZih2ICE9PSB0aGlzLl9sb2NhdGlvbikge1xuICAgICAgdGhpcy5fbG9jYXRpb24gPSB2XG4gICAgICB0aGlzLl9nbC5iaW5kQXR0cmliTG9jYXRpb24odGhpcy5fcHJvZ3JhbSwgdiwgdGhpcy5fbmFtZSlcbiAgICAgIHRoaXMuX2dsLmxpbmtQcm9ncmFtKHRoaXMuX3Byb2dyYW0pXG4gICAgICB0aGlzLl9yZWxpbmsoKVxuICAgIH1cbiAgfVxufSlcblxuXG4vL0FkZHMgYSB2ZWN0b3IgYXR0cmlidXRlIHRvIG9ialxuZnVuY3Rpb24gYWRkVmVjdG9yQXR0cmlidXRlKGdsLCBwcm9ncmFtLCBsb2NhdGlvbiwgZGltZW5zaW9uLCBvYmosIG5hbWUsIGRvTGluaykge1xuICB2YXIgY29uc3RGdW5jQXJncyA9IFsgJ2dsJywgJ3YnIF1cbiAgdmFyIHZhck5hbWVzID0gW11cbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb25zdEZ1bmNBcmdzLnB1c2goJ3gnK2kpXG4gICAgdmFyTmFtZXMucHVzaCgneCcraSlcbiAgfVxuICBjb25zdEZ1bmNBcmdzLnB1c2goW1xuICAgICdpZih4MC5sZW5ndGg9PT12b2lkIDApe3JldHVybiBnbC52ZXJ0ZXhBdHRyaWInLCBkaW1lbnNpb24sICdmKHYsJywgdmFyTmFtZXMuam9pbigpLCAnKX1lbHNle3JldHVybiBnbC52ZXJ0ZXhBdHRyaWInLCBkaW1lbnNpb24sICdmdih2LHgwKX0nXG4gIF0uam9pbignJykpXG4gIHZhciBjb25zdEZ1bmMgPSBGdW5jdGlvbi5hcHBseSh1bmRlZmluZWQsIGNvbnN0RnVuY0FyZ3MpXG4gIHZhciBhdHRyID0gbmV3IFNoYWRlckF0dHJpYnV0ZShnbCwgcHJvZ3JhbSwgbG9jYXRpb24sIGRpbWVuc2lvbiwgbmFtZSwgY29uc3RGdW5jLCBkb0xpbmspXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyLl9sb2NhdGlvbilcbiAgICAgIGNvbnN0RnVuYyhnbCwgYXR0ci5fbG9jYXRpb24sIHgpXG4gICAgICByZXR1cm4geFxuICAgIH1cbiAgICAsIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYXR0clxuICAgIH1cbiAgICAsIGVudW1lcmFibGU6IHRydWVcbiAgfSlcbn1cblxuLy9DcmVhdGUgc2hpbXMgZm9yIGF0dHJpYnV0ZXNcbmZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZVdyYXBwZXIoZ2wsIHByb2dyYW0sIGF0dHJpYnV0ZXMsIGRvTGluaykge1xuICB2YXIgb2JqID0ge31cbiAgZm9yKHZhciBpPTAsIG49YXR0cmlidXRlcy5sZW5ndGg7IGk8bjsgKytpKSB7XG4gICAgdmFyIGEgPSBhdHRyaWJ1dGVzW2ldXG4gICAgdmFyIG5hbWUgPSBhLm5hbWVcbiAgICB2YXIgdHlwZSA9IGEudHlwZVxuICAgIHZhciBsb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpXG4gICAgXG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgY2FzZSAnaW50JzpcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgICAgYWRkVmVjdG9yQXR0cmlidXRlKGdsLCBwcm9ncmFtLCBsb2NhdGlvbiwgMSwgb2JqLCBuYW1lLCBkb0xpbmspXG4gICAgICBicmVha1xuICAgICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZih0eXBlLmluZGV4T2YoJ3ZlYycpID49IDApIHtcbiAgICAgICAgICB2YXIgZCA9IHR5cGUuY2hhckNvZGVBdCh0eXBlLmxlbmd0aC0xKSAtIDQ4XG4gICAgICAgICAgaWYoZCA8IDIgfHwgZCA+IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBJbnZhbGlkIGRhdGEgdHlwZSBmb3IgYXR0cmlidXRlICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGFkZFZlY3RvckF0dHJpYnV0ZShnbCwgcHJvZ3JhbSwgbG9jYXRpb24sIGQsIG9iaiwgbmFtZSwgZG9MaW5rKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBVbmtub3duIGRhdGEgdHlwZSBmb3IgYXR0cmlidXRlICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn0iLCIndXNlIHN0cmljdCdcblxudmFyIGR1cCA9IHJlcXVpcmUoJ2R1cCcpXG52YXIgY29hbGxlc2NlVW5pZm9ybXMgPSByZXF1aXJlKCcuL3JlZmxlY3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVVuaWZvcm1XcmFwcGVyXG5cbi8vQmluZHMgYSBmdW5jdGlvbiBhbmQgcmV0dXJucyBhIHZhbHVlXG5mdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gIHZhciBjID0gbmV3IEZ1bmN0aW9uKCd5JywgJ3JldHVybiBmdW5jdGlvbigpe3JldHVybiB5fScpXG4gIHJldHVybiBjKHgpXG59XG5cbi8vQ3JlYXRlIHNoaW1zIGZvciB1bmlmb3Jtc1xuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVdyYXBwZXIoZ2wsIHByb2dyYW0sIHVuaWZvcm1zLCBsb2NhdGlvbnMpIHtcblxuICBmdW5jdGlvbiBtYWtlR2V0dGVyKGluZGV4KSB7XG4gICAgdmFyIHByb2MgPSBuZXcgRnVuY3Rpb24oJ2dsJywgJ3Byb2cnLCAnbG9jYXRpb25zJywgXG4gICAgICAncmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGdsLmdldFVuaWZvcm0ocHJvZyxsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10pfScpIFxuICAgIHJldHVybiBwcm9jKGdsLCBwcm9ncmFtLCBsb2NhdGlvbnMpXG4gIH1cblxuICBmdW5jdGlvbiBtYWtlUHJvcFNldHRlcihwYXRoLCBpbmRleCwgdHlwZSkge1xuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlICdib29sJzpcbiAgICAgIGNhc2UgJ2ludCc6XG4gICAgICBjYXNlICdzYW1wbGVyMkQnOlxuICAgICAgY2FzZSAnc2FtcGxlckN1YmUnOlxuICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm0xaShsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sb2JqJyArIHBhdGggKyAnKSdcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgICAgcmV0dXJuICdnbC51bmlmb3JtMWYobG9jYXRpb25zWycgKyBpbmRleCArICddLG9iaicgKyBwYXRoICsgJyknXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgdmlkeCA9IHR5cGUuaW5kZXhPZigndmVjJylcbiAgICAgICAgaWYoMCA8PSB2aWR4ICYmIHZpZHggPD0gMSAmJiB0eXBlLmxlbmd0aCA9PT0gNCArIHZpZHgpIHtcbiAgICAgICAgICB2YXIgZCA9IHR5cGUuY2hhckNvZGVBdCh0eXBlLmxlbmd0aC0xKSAtIDQ4XG4gICAgICAgICAgaWYoZCA8IDIgfHwgZCA+IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBJbnZhbGlkIGRhdGEgdHlwZScpXG4gICAgICAgICAgfVxuICAgICAgICAgIHN3aXRjaCh0eXBlLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICBjYXNlICdpJzpcbiAgICAgICAgICAgICAgcmV0dXJuICdnbC51bmlmb3JtJyArIGQgKyAnaXYobG9jYXRpb25zWycgKyBpbmRleCArICddLG9iaicgKyBwYXRoICsgJyknXG4gICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgcmV0dXJuICdnbC51bmlmb3JtJyArIGQgKyAnZnYobG9jYXRpb25zWycgKyBpbmRleCArICddLG9iaicgKyBwYXRoICsgJyknXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogVW5yZWNvZ25pemVkIGRhdGEgdHlwZSBmb3IgdmVjdG9yICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYodHlwZS5pbmRleE9mKCdtYXQnKSA9PT0gMCAmJiB0eXBlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgdW5pZm9ybSBkaW1lbnNpb24gdHlwZSBmb3IgbWF0cml4ICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnZ2wudW5pZm9ybU1hdHJpeCcgKyBkICsgJ2Z2KGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxmYWxzZSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBVbmtub3duIHVuaWZvcm0gZGF0YSB0eXBlIGZvciAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVudW1lcmF0ZUluZGljZXMocHJlZml4LCB0eXBlKSB7XG4gICAgaWYodHlwZW9mIHR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gWyBbcHJlZml4LCB0eXBlXSBdXG4gICAgfVxuICAgIHZhciBpbmRpY2VzID0gW11cbiAgICBmb3IodmFyIGlkIGluIHR5cGUpIHtcbiAgICAgIHZhciBwcm9wID0gdHlwZVtpZF1cbiAgICAgIHZhciB0cHJlZml4ID0gcHJlZml4XG4gICAgICBpZihwYXJzZUludChpZCkgKyAnJyA9PT0gaWQpIHtcbiAgICAgICAgdHByZWZpeCArPSAnWycgKyBpZCArICddJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHByZWZpeCArPSAnLicgKyBpZFxuICAgICAgfVxuICAgICAgaWYodHlwZW9mIHByb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGluZGljZXMucHVzaC5hcHBseShpbmRpY2VzLCBlbnVtZXJhdGVJbmRpY2VzKHRwcmVmaXgsIHByb3ApKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoKFt0cHJlZml4LCBwcm9wXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGljZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VTZXR0ZXIodHlwZSkge1xuICAgIHZhciBjb2RlID0gWyAncmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVByb3BlcnR5KG9iail7JyBdXG4gICAgdmFyIGluZGljZXMgPSBlbnVtZXJhdGVJbmRpY2VzKCcnLCB0eXBlKVxuICAgIGZvcih2YXIgaT0wOyBpPGluZGljZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBpdGVtID0gaW5kaWNlc1tpXVxuICAgICAgdmFyIHBhdGggPSBpdGVtWzBdXG4gICAgICB2YXIgaWR4ICA9IGl0ZW1bMV1cbiAgICAgIGlmKGxvY2F0aW9uc1tpZHhdKSB7XG4gICAgICAgIGNvZGUucHVzaChtYWtlUHJvcFNldHRlcihwYXRoLCBpZHgsIHVuaWZvcm1zW2lkeF0udHlwZSkpXG4gICAgICB9XG4gICAgfVxuICAgIGNvZGUucHVzaCgncmV0dXJuIG9ian0nKVxuICAgIHZhciBwcm9jID0gbmV3IEZ1bmN0aW9uKCdnbCcsICdwcm9nJywgJ2xvY2F0aW9ucycsIGNvZGUuam9pbignXFxuJykpXG4gICAgcmV0dXJuIHByb2MoZ2wsIHByb2dyYW0sIGxvY2F0aW9ucylcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZSh0eXBlKSB7XG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIGNhc2UgJ2ludCc6XG4gICAgICBjYXNlICdzYW1wbGVyMkQnOlxuICAgICAgY2FzZSAnc2FtcGxlckN1YmUnOlxuICAgICAgICByZXR1cm4gMFxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgICByZXR1cm4gMC4wXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgdmlkeCA9IHR5cGUuaW5kZXhPZigndmVjJylcbiAgICAgICAgaWYoMCA8PSB2aWR4ICYmIHZpZHggPD0gMSAmJiB0eXBlLmxlbmd0aCA9PT0gNCArIHZpZHgpIHtcbiAgICAgICAgICB2YXIgZCA9IHR5cGUuY2hhckNvZGVBdCh0eXBlLmxlbmd0aC0xKSAtIDQ4XG4gICAgICAgICAgaWYoZCA8IDIgfHwgZCA+IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBJbnZhbGlkIGRhdGEgdHlwZScpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHR5cGUuY2hhckF0KDApID09PSAnYicpIHtcbiAgICAgICAgICAgIHJldHVybiBkdXAoZCwgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkdXAoZClcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUuaW5kZXhPZignbWF0JykgPT09IDAgJiYgdHlwZS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICB2YXIgZCA9IHR5cGUuY2hhckNvZGVBdCh0eXBlLmxlbmd0aC0xKSAtIDQ4XG4gICAgICAgICAgaWYoZCA8IDIgfHwgZCA+IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBJbnZhbGlkIHVuaWZvcm0gZGltZW5zaW9uIHR5cGUgZm9yIG1hdHJpeCAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHVwKFtkLGRdKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBVbmtub3duIHVuaWZvcm0gZGF0YSB0eXBlIGZvciAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3JlUHJvcGVydHkob2JqLCBwcm9wLCB0eXBlKSB7XG4gICAgaWYodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgY2hpbGQgPSBwcm9jZXNzT2JqZWN0KHR5cGUpXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XG4gICAgICAgIGdldDogaWRlbnRpdHkoY2hpbGQpLFxuICAgICAgICBzZXQ6IG1ha2VTZXR0ZXIodHlwZSksXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGxvY2F0aW9uc1t0eXBlXSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XG4gICAgICAgICAgZ2V0OiBtYWtlR2V0dGVyKHR5cGUpLFxuICAgICAgICAgIHNldDogbWFrZVNldHRlcih0eXBlKSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtwcm9wXSA9IGRlZmF1bHRWYWx1ZSh1bmlmb3Jtc1t0eXBlXS50eXBlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NPYmplY3Qob2JqKSB7XG4gICAgdmFyIHJlc3VsdFxuICAgIGlmKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KG9iai5sZW5ndGgpXG4gICAgICBmb3IodmFyIGk9MDsgaTxvYmoubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3RvcmVQcm9wZXJ0eShyZXN1bHQsIGksIG9ialtpXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0ge31cbiAgICAgIGZvcih2YXIgaWQgaW4gb2JqKSB7XG4gICAgICAgIHN0b3JlUHJvcGVydHkocmVzdWx0LCBpZCwgb2JqW2lkXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy9SZXR1cm4gZGF0YVxuICB2YXIgY29hbGxlc2NlZCA9IGNvYWxsZXNjZVVuaWZvcm1zKHVuaWZvcm1zLCB0cnVlKVxuICByZXR1cm4ge1xuICAgIGdldDogaWRlbnRpdHkocHJvY2Vzc09iamVjdChjb2FsbGVzY2VkKSksXG4gICAgc2V0OiBtYWtlU2V0dGVyKGNvYWxsZXNjZWQpLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1ha2VSZWZsZWN0VHlwZXNcblxuLy9Db25zdHJ1Y3QgdHlwZSBpbmZvIGZvciByZWZsZWN0aW9uLlxuLy9cbi8vIFRoaXMgaXRlcmF0ZXMgb3ZlciB0aGUgZmxhdHRlbmVkIGxpc3Qgb2YgdW5pZm9ybSB0eXBlIHZhbHVlcyBhbmQgc21hc2hlcyB0aGVtIGludG8gYSBKU09OIG9iamVjdC5cbi8vXG4vLyBUaGUgbGVhdmVzIG9mIHRoZSByZXN1bHRpbmcgb2JqZWN0IGFyZSBlaXRoZXIgaW5kaWNlcyBvciB0eXBlIHN0cmluZ3MgcmVwcmVzZW50aW5nIHByaW1pdGl2ZSBnbHNsaWZ5IHR5cGVzXG5mdW5jdGlvbiBtYWtlUmVmbGVjdFR5cGVzKHVuaWZvcm1zLCB1c2VJbmRleCkge1xuICB2YXIgb2JqID0ge31cbiAgZm9yKHZhciBpPTA7IGk8dW5pZm9ybXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgbiA9IHVuaWZvcm1zW2ldLm5hbWVcbiAgICB2YXIgcGFydHMgPSBuLnNwbGl0KFwiLlwiKVxuICAgIHZhciBvID0gb2JqXG4gICAgZm9yKHZhciBqPTA7IGo8cGFydHMubGVuZ3RoOyArK2opIHtcbiAgICAgIHZhciB4ID0gcGFydHNbal0uc3BsaXQoXCJbXCIpXG4gICAgICBpZih4Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYoISh4WzBdIGluIG8pKSB7XG4gICAgICAgICAgb1t4WzBdXSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgbyA9IG9beFswXV1cbiAgICAgICAgZm9yKHZhciBrPTE7IGs8eC5sZW5ndGg7ICsraykge1xuICAgICAgICAgIHZhciB5ID0gcGFyc2VJbnQoeFtrXSlcbiAgICAgICAgICBpZihrPHgubGVuZ3RoLTEgfHwgajxwYXJ0cy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgaWYoISh5IGluIG8pKSB7XG4gICAgICAgICAgICAgIGlmKGsgPCB4Lmxlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgb1t5XSA9IFtdXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb1t5XSA9IHt9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8gPSBvW3ldXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHVzZUluZGV4KSB7XG4gICAgICAgICAgICAgIG9beV0gPSBpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvW3ldID0gdW5pZm9ybXNbaV0udHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmKGogPCBwYXJ0cy5sZW5ndGgtMSkge1xuICAgICAgICBpZighKHhbMF0gaW4gbykpIHtcbiAgICAgICAgICBvW3hbMF1dID0ge31cbiAgICAgICAgfVxuICAgICAgICBvID0gb1t4WzBdXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYodXNlSW5kZXgpIHtcbiAgICAgICAgICBvW3hbMF1dID0gaVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9beFswXV0gPSB1bmlmb3Jtc1tpXS50eXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9ialxufSIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIGR1cGVfYXJyYXkoY291bnQsIHZhbHVlLCBpKSB7XG4gIHZhciBjID0gY291bnRbaV18MFxuICBpZihjIDw9IDApIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGMpLCBqXG4gIGlmKGkgPT09IGNvdW50Lmxlbmd0aC0xKSB7XG4gICAgZm9yKGo9MDsgajxjOyArK2opIHtcbiAgICAgIHJlc3VsdFtqXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvcihqPTA7IGo8YzsgKytqKSB7XG4gICAgICByZXN1bHRbal0gPSBkdXBlX2FycmF5KGNvdW50LCB2YWx1ZSwgaSsxKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGR1cGVfbnVtYmVyKGNvdW50LCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0LCBpXG4gIHJlc3VsdCA9IG5ldyBBcnJheShjb3VudClcbiAgZm9yKGk9MDsgaTxjb3VudDsgKytpKSB7XG4gICAgcmVzdWx0W2ldID0gdmFsdWVcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGR1cGUoY291bnQsIHZhbHVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhbHVlID0gMFxuICB9XG4gIHN3aXRjaCh0eXBlb2YgY291bnQpIHtcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICBpZihjb3VudCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGR1cGVfbnVtYmVyKGNvdW50fDAsIHZhbHVlKVxuICAgICAgfVxuICAgIGJyZWFrXG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgaWYodHlwZW9mIChjb3VudC5sZW5ndGgpID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBkdXBlX2FycmF5KGNvdW50LCB2YWx1ZSwgMClcbiAgICAgIH1cbiAgICBicmVha1xuICB9XG4gIHJldHVybiBbXVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGR1cGUiLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZVVuaWZvcm1XcmFwcGVyID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLXVuaWZvcm1zJylcbnZhciBjcmVhdGVBdHRyaWJ1dGVXcmFwcGVyID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLWF0dHJpYnV0ZXMnKVxudmFyIG1ha2VSZWZsZWN0ID0gcmVxdWlyZSgnLi9saWIvcmVmbGVjdCcpXG5cbi8vU2hhZGVyIG9iamVjdFxuZnVuY3Rpb24gU2hhZGVyKGdsLCBwcm9nLCB2ZXJ0U2hhZGVyLCBmcmFnU2hhZGVyKSB7XG4gIHRoaXMuZ2wgPSBnbFxuICB0aGlzLmhhbmRsZSA9IHByb2dcbiAgdGhpcy5hdHRyaWJ1dGVzID0gbnVsbFxuICB0aGlzLnVuaWZvcm1zID0gbnVsbFxuICB0aGlzLnR5cGVzID0gbnVsbFxuICB0aGlzLnZlcnRleFNoYWRlciA9IHZlcnRTaGFkZXJcbiAgdGhpcy5mcmFnbWVudFNoYWRlciA9IGZyYWdTaGFkZXJcbn1cblxuLy9CaW5kcyB0aGUgc2hhZGVyXG5TaGFkZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaGFuZGxlKVxufVxuXG4vL0Rlc3Ryb3kgc2hhZGVyLCByZWxlYXNlIHJlc291cmNlc1xuU2hhZGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBnbCA9IHRoaXMuZ2xcbiAgZ2wuZGVsZXRlU2hhZGVyKHRoaXMudmVydGV4U2hhZGVyKVxuICBnbC5kZWxldGVTaGFkZXIodGhpcy5mcmFnbWVudFNoYWRlcilcbiAgZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLmhhbmRsZSlcbn1cblxuU2hhZGVyLnByb3RvdHlwZS51cGRhdGVFeHBvcnRzID0gZnVuY3Rpb24odW5pZm9ybXMsIGF0dHJpYnV0ZXMpIHtcbiAgdmFyIGxvY2F0aW9ucyA9IG5ldyBBcnJheSh1bmlmb3Jtcy5sZW5ndGgpXG4gIHZhciBwcm9ncmFtID0gdGhpcy5oYW5kbGVcbiAgdmFyIGdsID0gdGhpcy5nbFxuXG4gIHZhciBkb0xpbmsgPSByZWxpbmtVbmlmb3Jtcy5iaW5kKHZvaWQgMCxcbiAgICBnbCxcbiAgICBwcm9ncmFtLFxuICAgIGxvY2F0aW9ucyxcbiAgICB1bmlmb3Jtc1xuICApXG4gIGRvTGluaygpXG5cbiAgdGhpcy50eXBlcyA9IHtcbiAgICB1bmlmb3JtczogbWFrZVJlZmxlY3QodW5pZm9ybXMpLFxuICAgIGF0dHJpYnV0ZXM6IG1ha2VSZWZsZWN0KGF0dHJpYnV0ZXMpXG4gIH1cblxuICB0aGlzLmF0dHJpYnV0ZXMgPSBjcmVhdGVBdHRyaWJ1dGVXcmFwcGVyKFxuICAgIGdsLFxuICAgIHByb2dyYW0sXG4gICAgYXR0cmlidXRlcyxcbiAgICBkb0xpbmtcbiAgKVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndW5pZm9ybXMnLCBjcmVhdGVVbmlmb3JtV3JhcHBlcihcbiAgICBnbCxcbiAgICBwcm9ncmFtLFxuICAgIHVuaWZvcm1zLFxuICAgIGxvY2F0aW9uc1xuICApKVxufVxuXG4vL1JlbGlua3MgYWxsIHVuaWZvcm1zXG5mdW5jdGlvbiByZWxpbmtVbmlmb3JtcyhnbCwgcHJvZ3JhbSwgbG9jYXRpb25zLCB1bmlmb3Jtcykge1xuICBmb3IodmFyIGk9MDsgaTx1bmlmb3Jtcy5sZW5ndGg7ICsraSkge1xuICAgIGxvY2F0aW9uc1tpXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCB1bmlmb3Jtc1tpXS5uYW1lKVxuICB9XG59XG5cbi8vQ29tcGlsZXMgYW5kIGxpbmtzIGEgc2hhZGVyIHByb2dyYW0gd2l0aCB0aGUgZ2l2ZW4gYXR0cmlidXRlIGFuZCB2ZXJ0ZXggbGlzdFxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKFxuICAgIGdsXG4gICwgdmVydFNvdXJjZVxuICAsIGZyYWdTb3VyY2VcbiAgLCB1bmlmb3Jtc1xuICAsIGF0dHJpYnV0ZXMpIHtcbiAgXG4gIC8vQ29tcGlsZSB2ZXJ0ZXggc2hhZGVyXG4gIHZhciB2ZXJ0U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpXG4gIGdsLnNoYWRlclNvdXJjZSh2ZXJ0U2hhZGVyLCB2ZXJ0U291cmNlKVxuICBnbC5jb21waWxlU2hhZGVyKHZlcnRTaGFkZXIpXG4gIGlmKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodmVydFNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgdmFyIGVyckxvZyA9IGdsLmdldFNoYWRlckluZm9Mb2codmVydFNoYWRlcilcbiAgICBjb25zb2xlLmVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGNvbXBsaW5nIHZlcnRleCBzaGFkZXI6JywgZXJyTG9nKVxuICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBFcnJvciBjb21waWxpbmcgdmVydGV4IHNoYWRlcjonICsgZXJyTG9nKVxuICB9XG4gIFxuICAvL0NvbXBpbGUgZnJhZ21lbnQgc2hhZGVyXG4gIHZhciBmcmFnU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUilcbiAgZ2wuc2hhZGVyU291cmNlKGZyYWdTaGFkZXIsIGZyYWdTb3VyY2UpXG4gIGdsLmNvbXBpbGVTaGFkZXIoZnJhZ1NoYWRlcilcbiAgaWYoIWdsLmdldFNoYWRlclBhcmFtZXRlcihmcmFnU2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICB2YXIgZXJyTG9nID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcmFnU2hhZGVyKVxuICAgIGNvbnNvbGUuZXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgY29tcGlsaW5nIGZyYWdtZW50IHNoYWRlcjonLCBlcnJMb2cpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGNvbXBpbGluZyBmcmFnbWVudCBzaGFkZXI6JyArIGVyckxvZylcbiAgfVxuICBcbiAgLy9MaW5rIHByb2dyYW1cbiAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdTaGFkZXIpXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0U2hhZGVyKVxuXG4gIC8vT3B0aW9uYWwgZGVmYXVsdCBhdHRyaXVidGUgbG9jYXRpb25zXG4gIGF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgaWYgKHR5cGVvZiBhLmxvY2F0aW9uID09PSAnbnVtYmVyJykgXG4gICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgYS5sb2NhdGlvbiwgYS5uYW1lKVxuICB9KVxuXG4gIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXG4gIGlmKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgIHZhciBlcnJMb2cgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKVxuICAgIGNvbnNvbGUuZXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgbGlua2luZyBzaGFkZXIgcHJvZ3JhbTonLCBlcnJMb2cpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGxpbmtpbmcgc2hhZGVyIHByb2dyYW06JyArIGVyckxvZylcbiAgfVxuICBcbiAgLy9SZXR1cm4gZmluYWwgbGlua2VkIHNoYWRlciBvYmplY3RcbiAgdmFyIHNoYWRlciA9IG5ldyBTaGFkZXIoXG4gICAgZ2wsXG4gICAgcHJvZ3JhbSxcbiAgICB2ZXJ0U2hhZGVyLFxuICAgIGZyYWdTaGFkZXJcbiAgKVxuICBzaGFkZXIudXBkYXRlRXhwb3J0cyh1bmlmb3JtcywgYXR0cmlidXRlcylcblxuICByZXR1cm4gc2hhZGVyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2hhZGVyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFkam9pbnQ7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWRqdWdhdGUgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gICAgb3V0WzBdICA9ICAoYTExICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgICBvdXRbMV0gID0gLShhMDEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICAgIG91dFsyXSAgPSAgKGEwMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTExICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzNdICA9IC0oYTAxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbNF0gID0gLShhMTAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICAgIG91dFs1XSAgPSAgKGEwMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gICAgb3V0WzZdICA9IC0oYTAwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbN10gID0gIChhMDAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs4XSAgPSAgKGExMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSk7XG4gICAgb3V0WzldICA9IC0oYTAwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpKTtcbiAgICBvdXRbMTBdID0gIChhMDAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICAgIG91dFsxMV0gPSAtKGEwMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gICAgb3V0WzEyXSA9IC0oYTEwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpKTtcbiAgICBvdXRbMTNdID0gIChhMDAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkpO1xuICAgIG91dFsxNF0gPSAtKGEwMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gICAgb3V0WzE1XSA9ICAoYTAwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbWF0NCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxuICpcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGRldGVybWluYW50O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5mdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxuICAgICAgICBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXG4gICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxuICAgICAgICBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXG4gICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxuICAgICAgICBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXG4gICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxuICAgICAgICBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXG4gICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICByZXR1cm4gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21RdWF0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeXggPSB5ICogeDIsXG4gICAgICAgIHl5ID0geSAqIHkyLFxuICAgICAgICB6eCA9IHogKiB4MixcbiAgICAgICAgenkgPSB6ICogeTIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gICAgb3V0WzFdID0geXggKyB3ejtcbiAgICBvdXRbMl0gPSB6eCAtIHd5O1xuICAgIG91dFszXSA9IDA7XG5cbiAgICBvdXRbNF0gPSB5eCAtIHd6O1xuICAgIG91dFs1XSA9IDEgLSB4eCAtIHp6O1xuICAgIG91dFs2XSA9IHp5ICsgd3g7XG4gICAgb3V0WzddID0gMDtcblxuICAgIG91dFs4XSA9IHp4ICsgd3k7XG4gICAgb3V0WzldID0genkgLSB3eDtcbiAgICBvdXRbMTBdID0gMSAtIHh4IC0geXk7XG4gICAgb3V0WzExXSA9IDA7XG5cbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb247XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiBhbmQgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIHZhciBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24ob3V0LCBxLCB2KSB7XG4gICAgLy8gUXVhdGVybmlvbiBtYXRoXG4gICAgdmFyIHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdLFxuICAgICAgICB4MiA9IHggKyB4LFxuICAgICAgICB5MiA9IHkgKyB5LFxuICAgICAgICB6MiA9IHogKyB6LFxuXG4gICAgICAgIHh4ID0geCAqIHgyLFxuICAgICAgICB4eSA9IHggKiB5MixcbiAgICAgICAgeHogPSB4ICogejIsXG4gICAgICAgIHl5ID0geSAqIHkyLFxuICAgICAgICB5eiA9IHkgKiB6MixcbiAgICAgICAgenogPSB6ICogejIsXG4gICAgICAgIHd4ID0gdyAqIHgyLFxuICAgICAgICB3eSA9IHcgKiB5MixcbiAgICAgICAgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0gKHl5ICsgenopO1xuICAgIG91dFsxXSA9IHh5ICsgd3o7XG4gICAgb3V0WzJdID0geHogLSB3eTtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHh5IC0gd3o7XG4gICAgb3V0WzVdID0gMSAtICh4eCArIHp6KTtcbiAgICBvdXRbNl0gPSB5eiArIHd4O1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0geHogKyB3eTtcbiAgICBvdXRbOV0gPSB5eiAtIHd4O1xuICAgIG91dFsxMF0gPSAxIC0gKHh4ICsgeXkpO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSB2WzBdO1xuICAgIG91dFsxM10gPSB2WzFdO1xuICAgIG91dFsxNF0gPSB2WzJdO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIFxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJ1c3R1bTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmcnVzdHVtIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge051bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJ1c3R1bShvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIHJsID0gMSAvIChyaWdodCAtIGxlZnQpLFxuICAgICAgICB0YiA9IDEgLyAodG9wIC0gYm90dG9tKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IChuZWFyICogMikgKiBybDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IChuZWFyICogMikgKiB0YjtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gKHJpZ2h0ICsgbGVmdCkgKiBybDtcbiAgICBvdXRbOV0gPSAodG9wICsgYm90dG9tKSAqIHRiO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTFdID0gLTE7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IChmYXIgKiBuZWFyICogMikgKiBuZjtcbiAgICBvdXRbMTVdID0gMDtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG4vKipcbiAqIFNldCBhIG1hdDQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogcmVxdWlyZSgnLi9jcmVhdGUnKVxuICAsIGNsb25lOiByZXF1aXJlKCcuL2Nsb25lJylcbiAgLCBjb3B5OiByZXF1aXJlKCcuL2NvcHknKVxuICAsIGlkZW50aXR5OiByZXF1aXJlKCcuL2lkZW50aXR5JylcbiAgLCB0cmFuc3Bvc2U6IHJlcXVpcmUoJy4vdHJhbnNwb3NlJylcbiAgLCBpbnZlcnQ6IHJlcXVpcmUoJy4vaW52ZXJ0JylcbiAgLCBhZGpvaW50OiByZXF1aXJlKCcuL2Fkam9pbnQnKVxuICAsIGRldGVybWluYW50OiByZXF1aXJlKCcuL2RldGVybWluYW50JylcbiAgLCBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpXG4gICwgdHJhbnNsYXRlOiByZXF1aXJlKCcuL3RyYW5zbGF0ZScpXG4gICwgc2NhbGU6IHJlcXVpcmUoJy4vc2NhbGUnKVxuICAsIHJvdGF0ZTogcmVxdWlyZSgnLi9yb3RhdGUnKVxuICAsIHJvdGF0ZVg6IHJlcXVpcmUoJy4vcm90YXRlWCcpXG4gICwgcm90YXRlWTogcmVxdWlyZSgnLi9yb3RhdGVZJylcbiAgLCByb3RhdGVaOiByZXF1aXJlKCcuL3JvdGF0ZVonKVxuICAsIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uOiByZXF1aXJlKCcuL2Zyb21Sb3RhdGlvblRyYW5zbGF0aW9uJylcbiAgLCBmcm9tUXVhdDogcmVxdWlyZSgnLi9mcm9tUXVhdCcpXG4gICwgZnJ1c3R1bTogcmVxdWlyZSgnLi9mcnVzdHVtJylcbiAgLCBwZXJzcGVjdGl2ZTogcmVxdWlyZSgnLi9wZXJzcGVjdGl2ZScpXG4gICwgb3J0aG86IHJlcXVpcmUoJy4vb3J0aG8nKVxuICAsIGxvb2tBdDogcmVxdWlyZSgnLi9sb29rQXQnKVxuICAsIHN0cjogcmVxdWlyZSgnLi9zdHInKVxufSIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJ0O1xuXG4vKipcbiAqIEludmVydHMgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxuICAgICAgICBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXG4gICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxuICAgICAgICBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXG4gICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxuICAgICAgICBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXG4gICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxuICAgICAgICBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXG4gICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMixcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgICAgIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICAgIGlmICghZGV0KSB7IFxuICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgfVxuICAgIGRldCA9IDEuMCAvIGRldDtcblxuICAgIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICAgIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgIG91dFsyXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICAgIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICAgIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICAgIG91dFs1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICAgIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICAgIG91dFs4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICAgIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICAgIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBsb29rQXQ7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbG9vay1hdCBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZXllIHBvc2l0aW9uLCBmb2NhbCBwb2ludCwgYW5kIHVwIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge3ZlYzN9IGV5ZSBQb3NpdGlvbiBvZiB0aGUgdmlld2VyXG4gKiBAcGFyYW0ge3ZlYzN9IGNlbnRlciBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcbiAqIEBwYXJhbSB7dmVjM30gdXAgdmVjMyBwb2ludGluZyB1cFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBsb29rQXQob3V0LCBleWUsIGNlbnRlciwgdXApIHtcbiAgICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuLFxuICAgICAgICBleWV4ID0gZXllWzBdLFxuICAgICAgICBleWV5ID0gZXllWzFdLFxuICAgICAgICBleWV6ID0gZXllWzJdLFxuICAgICAgICB1cHggPSB1cFswXSxcbiAgICAgICAgdXB5ID0gdXBbMV0sXG4gICAgICAgIHVweiA9IHVwWzJdLFxuICAgICAgICBjZW50ZXJ4ID0gY2VudGVyWzBdLFxuICAgICAgICBjZW50ZXJ5ID0gY2VudGVyWzFdLFxuICAgICAgICBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuXG4gICAgaWYgKE1hdGguYWJzKGV5ZXggLSBjZW50ZXJ4KSA8IDAuMDAwMDAxICYmXG4gICAgICAgIE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA8IDAuMDAwMDAxICYmXG4gICAgICAgIE1hdGguYWJzKGV5ZXogLSBjZW50ZXJ6KSA8IDAuMDAwMDAxKSB7XG4gICAgICAgIHJldHVybiBtYXQ0LmlkZW50aXR5KG91dCk7XG4gICAgfVxuXG4gICAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgICB6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuICAgIHoyID0gZXlleiAtIGNlbnRlcno7XG5cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG5cbiAgICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcbiAgICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB4MCA9IDA7XG4gICAgICAgIHgxID0gMDtcbiAgICAgICAgeDIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHgwICo9IGxlbjtcbiAgICAgICAgeDEgKj0gbGVuO1xuICAgICAgICB4MiAqPSBsZW47XG4gICAgfVxuXG4gICAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICAgIHkyID0gejAgKiB4MSAtIHoxICogeDA7XG5cbiAgICBsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB5MCA9IDA7XG4gICAgICAgIHkxID0gMDtcbiAgICAgICAgeTIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHkwICo9IGxlbjtcbiAgICAgICAgeTEgKj0gbGVuO1xuICAgICAgICB5MiAqPSBsZW47XG4gICAgfVxuXG4gICAgb3V0WzBdID0geDA7XG4gICAgb3V0WzFdID0geTA7XG4gICAgb3V0WzJdID0gejA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4MTtcbiAgICBvdXRbNV0gPSB5MTtcbiAgICBvdXRbNl0gPSB6MTtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHgyO1xuICAgIG91dFs5XSA9IHkyO1xuICAgIG91dFsxMF0gPSB6MjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICAgIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gICAgb3V0WzE0XSA9IC0oejAgKiBleWV4ICsgejEgKiBleWV5ICsgejIgKiBleWV6KTtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHk7XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NCdzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICAgIHZhciBiMCAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdOyAgXG4gICAgb3V0WzBdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzNdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzRdOyBiMSA9IGJbNV07IGIyID0gYls2XTsgYjMgPSBiWzddO1xuICAgIG91dFs0XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbNV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzZdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFs3XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYls4XTsgYjEgPSBiWzldOyBiMiA9IGJbMTBdOyBiMyA9IGJbMTFdO1xuICAgIG91dFs4XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbOV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzEwXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTFdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzEyXTsgYjEgPSBiWzEzXTsgYjIgPSBiWzE0XTsgYjMgPSBiWzE1XTtcbiAgICBvdXRbMTJdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxM10gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzE0XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTVdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gb3J0aG87XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgb3J0aG9nb25hbCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KSxcbiAgICAgICAgYnQgPSAxIC8gKGJvdHRvbSAtIHRvcCksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAtMiAqIGxyO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gLTIgKiBidDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAyICogbmY7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gICAgb3V0WzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XG4gICAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcGVyc3BlY3RpdmU7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgVmVydGljYWwgZmllbGQgb2YgdmlldyBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICAgIHZhciBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gZiAvIGFzcGVjdDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IGY7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoMiAqIGZhciAqIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGU7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDQgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCwgYXhpcykge1xuICAgIHZhciB4ID0gYXhpc1swXSwgeSA9IGF4aXNbMV0sIHogPSBheGlzWzJdLFxuICAgICAgICBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KSxcbiAgICAgICAgcywgYywgdCxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMyxcbiAgICAgICAgYjAwLCBiMDEsIGIwMixcbiAgICAgICAgYjEwLCBiMTEsIGIxMixcbiAgICAgICAgYjIwLCBiMjEsIGIyMjtcblxuICAgIGlmIChNYXRoLmFicyhsZW4pIDwgMC4wMDAwMDEpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHggKj0gbGVuO1xuICAgIHkgKj0gbGVuO1xuICAgIHogKj0gbGVuO1xuXG4gICAgcyA9IE1hdGguc2luKHJhZCk7XG4gICAgYyA9IE1hdGguY29zKHJhZCk7XG4gICAgdCA9IDEgLSBjO1xuXG4gICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgZWxlbWVudHMgb2YgdGhlIHJvdGF0aW9uIG1hdHJpeFxuICAgIGIwMCA9IHggKiB4ICogdCArIGM7IGIwMSA9IHkgKiB4ICogdCArIHogKiBzOyBiMDIgPSB6ICogeCAqIHQgLSB5ICogcztcbiAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogczsgYjExID0geSAqIHkgKiB0ICsgYzsgYjEyID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7IGIyMSA9IHkgKiB6ICogdCAtIHggKiBzOyBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gICAgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gICAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICAgIG91dFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcbiAgICBvdXRbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XG4gICAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICAgIG91dFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcbiAgICBvdXRbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XG4gICAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICAgIG91dFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMjtcbiAgICBvdXRbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gICAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgICBvdXRbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWDtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICAgICAgb3V0WzBdICA9IGFbMF07XG4gICAgICAgIG91dFsxXSAgPSBhWzFdO1xuICAgICAgICBvdXRbMl0gID0gYVsyXTtcbiAgICAgICAgb3V0WzNdICA9IGFbM107XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzRdID0gYTEwICogYyArIGEyMCAqIHM7XG4gICAgb3V0WzVdID0gYTExICogYyArIGEyMSAqIHM7XG4gICAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gICAgb3V0WzddID0gYTEzICogYyArIGEyMyAqIHM7XG4gICAgb3V0WzhdID0gYTIwICogYyAtIGExMCAqIHM7XG4gICAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gICAgb3V0WzEwXSA9IGEyMiAqIGMgLSBhMTIgKiBzO1xuICAgIG91dFsxMV0gPSBhMjMgKiBjIC0gYTEzICogcztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVk7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFs0XSAgPSBhWzRdO1xuICAgICAgICBvdXRbNV0gID0gYVs1XTtcbiAgICAgICAgb3V0WzZdICA9IGFbNl07XG4gICAgICAgIG91dFs3XSAgPSBhWzddO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgLSBhMjIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICAgIG91dFs5XSA9IGEwMSAqIHMgKyBhMjEgKiBjO1xuICAgIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVaO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN107XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFs4XSAgPSBhWzhdO1xuICAgICAgICBvdXRbOV0gID0gYVs5XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYyArIGExMCAqIHM7XG4gICAgb3V0WzFdID0gYTAxICogYyArIGExMSAqIHM7XG4gICAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gICAgb3V0WzNdID0gYTAzICogYyArIGExMyAqIHM7XG4gICAgb3V0WzRdID0gYTEwICogYyAtIGEwMCAqIHM7XG4gICAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gICAgb3V0WzZdID0gYTEyICogYyAtIGEwMiAqIHM7XG4gICAgb3V0WzddID0gYTEzICogYyAtIGEwMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZTtcblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDQgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7dmVjM30gdiB0aGUgdmVjMyB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKiovXG5mdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXTtcblxuICAgIG91dFswXSA9IGFbMF0gKiB4O1xuICAgIG91dFsxXSA9IGFbMV0gKiB4O1xuICAgIG91dFsyXSA9IGFbMl0gKiB4O1xuICAgIG91dFszXSA9IGFbM10gKiB4O1xuICAgIG91dFs0XSA9IGFbNF0gKiB5O1xuICAgIG91dFs1XSA9IGFbNV0gKiB5O1xuICAgIG91dFs2XSA9IGFbNl0gKiB5O1xuICAgIG91dFs3XSA9IGFbN10gKiB5O1xuICAgIG91dFs4XSA9IGFbOF0gKiB6O1xuICAgIG91dFs5XSA9IGFbOV0gKiB6O1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gICAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBzdHI7XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG1hdCBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5mdW5jdGlvbiBzdHIoYSkge1xuICAgIHJldHVybiAnbWF0NCgnICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnLCAnICsgYVszXSArICcsICcgK1xuICAgICAgICAgICAgICAgICAgICBhWzRdICsgJywgJyArIGFbNV0gKyAnLCAnICsgYVs2XSArICcsICcgKyBhWzddICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbOF0gKyAnLCAnICsgYVs5XSArICcsICcgKyBhWzEwXSArICcsICcgKyBhWzExXSArICcsICcgKyBcbiAgICAgICAgICAgICAgICAgICAgYVsxMl0gKyAnLCAnICsgYVsxM10gKyAnLCAnICsgYVsxNF0gKyAnLCAnICsgYVsxNV0gKyAnKSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNsYXRlO1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDQgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjM30gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXSxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMztcblxuICAgIGlmIChhID09PSBvdXQpIHtcbiAgICAgICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxXSAqIHggKyBhWzVdICogeSArIGFbOV0gKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICAgICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICAgICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFswXSA9IGEwMDsgb3V0WzFdID0gYTAxOyBvdXRbMl0gPSBhMDI7IG91dFszXSA9IGEwMztcbiAgICAgICAgb3V0WzRdID0gYTEwOyBvdXRbNV0gPSBhMTE7IG91dFs2XSA9IGExMjsgb3V0WzddID0gYTEzO1xuICAgICAgICBvdXRbOF0gPSBhMjA7IG91dFs5XSA9IGEyMTsgb3V0WzEwXSA9IGEyMjsgb3V0WzExXSA9IGEyMztcblxuICAgICAgICBvdXRbMTJdID0gYTAwICogeCArIGExMCAqIHkgKyBhMjAgKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhMDEgKiB4ICsgYTExICogeSArIGEyMSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGEwMiAqIHggKyBhMTIgKiB5ICsgYTIyICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYTAzICogeCArIGExMyAqIHkgKyBhMjMgKiB6ICsgYVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc3Bvc2U7XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gICAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICAgIGlmIChvdXQgPT09IGEpIHtcbiAgICAgICAgdmFyIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgICAgICBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzFdID0gYVs0XTtcbiAgICAgICAgb3V0WzJdID0gYVs4XTtcbiAgICAgICAgb3V0WzNdID0gYVsxMl07XG4gICAgICAgIG91dFs0XSA9IGEwMTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGEwMjtcbiAgICAgICAgb3V0WzldID0gYTEyO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhMDM7XG4gICAgICAgIG91dFsxM10gPSBhMTM7XG4gICAgICAgIG91dFsxNF0gPSBhMjM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0WzBdID0gYVswXTtcbiAgICAgICAgb3V0WzFdID0gYVs0XTtcbiAgICAgICAgb3V0WzJdID0gYVs4XTtcbiAgICAgICAgb3V0WzNdID0gYVsxMl07XG4gICAgICAgIG91dFs0XSA9IGFbMV07XG4gICAgICAgIG91dFs1XSA9IGFbNV07XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhWzJdO1xuICAgICAgICBvdXRbOV0gPSBhWzZdO1xuICAgICAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGFbM107XG4gICAgICAgIG91dFsxM10gPSBhWzddO1xuICAgICAgICBvdXRbMTRdID0gYVsxMV07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG91dDtcbn07IiwidmFyIEJhc2UgPSByZXF1aXJlKCdmb250cGF0aC1zaW1wbGUtcmVuZGVyZXInKVxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxudmFyIGJtZm9udDJmb250cGF0aCA9IHJlcXVpcmUoJ2ZvbnRwYXRoLWJtZm9udCcpXG52YXIgdGV4Y29vcmQgPSByZXF1aXJlKCd0ZXhjb29yZCcpXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgY3JlYXRlVGV4dHVyZSA9IHJlcXVpcmUoJ2dsLXRleHR1cmUyZCcpXG5cbnZhciBCYXRjaCA9IHJlcXVpcmUoJ2dsLXNwcml0ZS1iYXRjaCcpXG5cbnZhciB0bXBQb3MgPSBbMCwgMF0sXG4gICAgdG1wU2hhcGUgPSBbMCwgMF0sXG4gICAgdG1wMSA9IFswLCAwXSxcbiAgICB0bXAyID0gWzAsIDBdXG52YXIgREVGQVVMVF9URVhDT09SRCA9IFswLCAwLCAxLCAxXVxudmFyIG1heEluaXRpYWxDYXBhY2l0eSA9IDUwMFxuXG5mdW5jdGlvbiB0ZXhjb29yZEdseXBoKGdseXBoLCBhdGxhcywgb3V0KSB7XG4gICAgdG1wMVswXSA9IGdseXBoLnhcbiAgICB0bXAxWzFdID0gZ2x5cGgueVxuICAgIHRtcDJbMF0gPSBnbHlwaC53aWR0aFxuICAgIHRtcDJbMV0gPSBnbHlwaC5oZWlnaHRcbiAgICByZXR1cm4gdGV4Y29vcmQodG1wMSwgdG1wMiwgYXRsYXMsIG91dClcbn1cblxuZnVuY3Rpb24gVGV4dFJlbmRlcmVyKGdsLCBvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGV4dFJlbmRlcmVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0UmVuZGVyZXIoZ2wsIG9wdClcbiAgICBvcHQgPSBvcHR8fHt9XG5cbiAgICBpZiAoIW9wdC5mb250KSBcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgYm1mb250IGF0IGNyZWF0aW9uIHRpbWUnKVxuXG4gICAgLy9pZiB0aGUgZm9udCBoYXMgSW1hZ2UvbmRhcnJheSBhcnJheVxuICAgIGlmICghb3B0LnRleHR1cmVzICYmIEFycmF5LmlzQXJyYXkob3B0LmZvbnQuaW1hZ2VzKSkge1xuICAgICAgICBvcHQudGV4dHVyZXMgPSBvcHQuZm9udC5pbWFnZXMubWFwKGZ1bmN0aW9uKGltZykge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVRleHR1cmUoZ2wsIGltZylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvcHQuZm9udCA9IGJtZm9udDJmb250cGF0aChvcHQuZm9udClcblxuICAgIEJhc2UuY2FsbCh0aGlzLCBvcHQpXG5cbiAgICB0aGlzLnRleHR1cmVzID0gb3B0LnRleHR1cmVzIHx8IFtdXG4gICAgdGhpcy5nbCA9IGdsXG4gICAgaWYgKCFnbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibXVzdCBzcGVjaWZ5IGdsIGNvbnRleHRcIilcbiAgICBcbiAgICAvL2Fzc3VtZSB0ZXh0IHdpbGwgYmUgdXNlZCBkeW5hbWljYWxseSBcbiAgICBpZiAodHlwZW9mIG9wdC5keW5hbWljICE9PSAnYm9vbGVhbicpXG4gICAgICAgIG9wdC5keW5hbWljID0gdHJ1ZVxuXG4gICAgdmFyIGJhdGNoID0gb3B0LmJhdGNoXG4gICAgaWYgKCFiYXRjaClcbiAgICAgICAgdGhpcy5kZWZhdWx0QmF0Y2ggPSBCYXRjaChnbCwgb3B0KVxuICAgIHRoaXMuYmF0Y2ggPSBiYXRjaCB8fCB0aGlzLmRlZmF1bHRCYXRjaFxuXG4gICAgaWYgKHR5cGVvZiBvcHQud3JhcFdpZHRoICE9PSAnbnVtYmVyJylcbiAgICAgICAgdGhpcy5sYXlvdXQoKVxufVxuXG5pbmhlcml0cyhUZXh0UmVuZGVyZXIsIEJhc2UpXG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKHRleHR1cmVzKSB7XG4gICAgaWYgKHRoaXMuZGVmYXVsdEJhdGNoKVxuICAgICAgICB0aGlzLmRlZmF1bHRCYXRjaC5kaXNwb3NlKClcbiAgICBpZiAodGV4dHVyZXMpIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdC5kaXNwb3NlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHQuZGlzcG9zZSgpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG59XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUudW5jYWNoZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2NhY2hlID0gZmFsc2VcbiAgICB0aGlzLmJhdGNoLmNsZWFyKClcbiAgICByZXR1cm4gdGhpc1xufVxuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmNhY2hlID0gZnVuY3Rpb24oeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgIC8vIGlmICh0aGlzLnVuZGVybGluZSB8fCB0aGlzLmZvbnQucGFnZXMubGVuZ3RoID4gMSlcbiAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCdjdXJyZW50bHkgY2FjaGVkIHRleHQgZG9lcyBub3Qgc3VwcG9ydCB1bmRlcmxpbmVzIG9yIG11bHRpcGxlIHRleHR1cmUgcGFnZXMnKVxuICAgIFxuICAgIHRoaXMuX2NhY2hlID0gdHJ1ZVxuICAgIHRoaXMuYmF0Y2guZW5zdXJlQ2FwYWNpdHkodGhpcy50ZXh0Lmxlbmd0aClcbiAgICB0aGlzLmJhdGNoLmNsZWFyKClcbiAgICB0aGlzLl9idWlsZCh4LCB5LCBzdGFydCwgZW5kKVxuICAgIHJldHVybiB0aGlzXG59XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKHNoYWRlciwgeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgIHZhciBiYXRjaCA9IHRoaXMuYmF0Y2hcbiAgICBiYXRjaC5iaW5kKHNoYWRlcilcblxuICAgIC8vaWYgd2UncmUgZHJhd2luZyBkeW5hbWljYWxseVxuICAgIGlmICghdGhpcy5fY2FjaGUpIHtcbiAgICAgICAgYmF0Y2guY2xlYXIoKVxuICAgICAgICB0aGlzLl9idWlsZCh4LCB5LCBzdGFydCwgZW5kKVxuICAgIH1cbiAgICBcbiAgICBiYXRjaC5kcmF3KClcbiAgICBiYXRjaC51bmJpbmQoKVxuICAgIHJldHVybiB0aGlzXG59XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuX2J1aWxkID0gZnVuY3Rpb24oeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnJlbmRlcih4LCB5LCBzdGFydCwgZW5kKVxuXG4gICAgdmFyIGJhdGNoID0gdGhpcy5iYXRjaFxuXG4gICAgLy91bmRlcmxpbmVzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIHdpdGggY2FjaGUoKVxuICAgIGlmICghdGhpcy5fY2FjaGUpIHtcbiAgICAgICAgYmF0Y2gudGV4Y29vcmQgPSBERUZBVUxUX1RFWENPT1JEXG4gICAgICAgIGJhdGNoLnRleHR1cmUgPSBudWxsXG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlc3VsdC51bmRlcmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdW5kZXJsaW5lID0gcmVzdWx0LnVuZGVybGluZXNbaV1cbiAgICAgICAgICAgIGJhdGNoLnBvc2l0aW9uID0gdW5kZXJsaW5lLnBvc2l0aW9uXG4gICAgICAgICAgICBiYXRjaC5zaGFwZSA9IHVuZGVybGluZS5zaXplXG4gICAgICAgICAgICBiYXRjaC5wdXNoKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vbm93IGRyYXcgb3VyIGdseXBocyBpbnRvIHRoZSBiYXRjaC4uLlxuICAgIGZvciAoaSA9IDA7IGkgPCByZXN1bHQuZ2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBnID0gcmVzdWx0LmdseXBoc1tpXVxuICAgICAgICB0aGlzLl9kcmF3R2x5cGgoYmF0Y2gsIGcpXG4gICAgfVxufVxuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLl9kcmF3R2x5cGggPSBmdW5jdGlvbihiYXRjaCwgZGF0YSkge1xuICAgIC8vLi4uIHdlIGNvdWxkIHNvcnQgdGhlc2UgYnkgdGV4dHVyZSBwYWdlIHRvIHJlZHVjZSBkcmF3c1xuICAgIHZhciBnbHlwaCA9IGRhdGEuZ2x5cGhcbiAgICB2YXIgaW1nID0gdGhpcy50ZXh0dXJlc1tnbHlwaC5wYWdlXVxuICAgIHRtcFBvc1swXSA9IGRhdGEucG9zaXRpb25bMF0rZ2x5cGguaGJ4XG4gICAgdG1wUG9zWzFdID0gZGF0YS5wb3NpdGlvblsxXStnbHlwaC5oYnkgLSB0aGlzLmZvbnQuZGVzY2VuZGVyXG4gICAgdG1wU2hhcGVbMF0gPSBnbHlwaC53aWR0aCAqIGRhdGEuc2NhbGVbMF1cbiAgICB0bXBTaGFwZVsxXSA9IGdseXBoLmhlaWdodCAqIGRhdGEuc2NhbGVbMV1cbiAgICBcbiAgICBiYXRjaC50ZXh0dXJlID0gaW1nXG4gICAgdGV4Y29vcmRHbHlwaChnbHlwaCwgaW1nICYmIGltZy5zaGFwZSwgYmF0Y2gudGV4Y29vcmQpXG4gICAgYmF0Y2gucG9zaXRpb24gPSB0bXBQb3NcbiAgICBiYXRjaC5zaGFwZSA9IHRtcFNoYXBlXG4gICAgYmF0Y2gucHVzaCgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dFJlbmRlcmVyIiwiZnVuY3Rpb24gZ2x5cGgoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2U6IGRhdGEucGFnZSxcbiAgICAgICAgaGJ4OiBkYXRhLnhvZmZzZXQsXG4gICAgICAgIGhieTogZGF0YS55b2Zmc2V0LFxuICAgICAgICB3aWR0aDogZGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBkYXRhLmhlaWdodCxcbiAgICAgICAgeG9mZjogZGF0YS54YWR2YW5jZSxcbiAgICAgICAgeDogZGF0YS54LFxuICAgICAgICB5OiBkYXRhLnlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdseXBocyhjaGFycykge1xuICAgIHZhciBvdXQgPSB7fVxuICAgIGNoYXJzLmZvckVhY2goZnVuY3Rpb24oYykge1xuICAgICAgICBvdXRbU3RyaW5nLmZyb21DaGFyQ29kZShjLmlkKV0gPSBnbHlwaChjKVxuICAgIH0pXG4gICAgcmV0dXJuIG91dFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJtZm9udCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VzOiBibWZvbnQucGFnZXMsXG4gICAgICAgIHJlc29sdXRpb246IDcyLFxuICAgICAgICBzaXplOiBibWZvbnQuaW5mby5zaXplLFxuICAgICAgICB1bml0c19wZXJfRU06IDEsXG4gICAgICAgIGJpdG1hcDogdHJ1ZSxcbiAgICAgICAgZmFtaWx5X25hbWU6IGJtZm9udC5pbmZvLmZhY2UsXG4gICAgICAgIGhlaWdodDogYm1mb250LmNvbW1vbi5saW5lSGVpZ2h0LFxuICAgICAgICBkZXNjZW5kZXI6IGJtZm9udC5jb21tb24uYmFzZSxcbiAgICAgICAgYXNjZW5kZXI6IGJtZm9udC5jb21tb24uYmFzZSxcbiAgICAgICAgZ2x5cGhzOiBnbHlwaHMoYm1mb250LmNoYXJzKSxcbiAgICAgICAga2VybmluZzogYm1mb250Lmtlcm5pbmdzLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICByZXR1cm4gW1N0cmluZy5mcm9tQ2hhckNvZGUoay5maXJzdCksU3RyaW5nLmZyb21DaGFyQ29kZShrLnNlY29uZCksay5hbW91bnRdXG4gICAgICAgIH0pXG4gICAgfVxufSIsInZhciBCYXNlID0gcmVxdWlyZSgnZm9udHBhdGgtcmVuZGVyZXInKVxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxuXG4vL1RPRE86IEV2ZW50dWFsbHkgbG90cyBvZiB0aGlzIGNvZGUgd2lsbCBqdXN0IHJlcGxhY2UgZm9udHBhdGgtcmVuZGVyZXIuLi5cblxuZnVuY3Rpb24gRm9udHBhdGhSZW5kZXJlcihvcHRpb25zKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEZvbnRwYXRoUmVuZGVyZXIpKVxuICAgICAgICByZXR1cm4gbmV3IEZvbnRwYXRoUmVuZGVyZXIob3B0aW9ucylcbiAgICBCYXNlLmNhbGwodGhpcywgb3B0aW9ucylcblxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgZ2x5cGhzOiBbXSxcbiAgICAgICAgdW5kZXJsaW5lczogW11cbiAgICB9XG59XG5cbmluaGVyaXRzKEZvbnRwYXRoUmVuZGVyZXIsIEJhc2UpXG5cbkZvbnRwYXRoUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckdseXBoID0gZnVuY3Rpb24oaSwgZ2x5cGgsIHNjYWxlLCB4LCB5KSB7XG4gICAgdGhpcy5kYXRhLmdseXBocy5wdXNoKG5ldyBHbHlwaChpLCBnbHlwaCwgXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0LmNoYXJDb2RlQXQoaSksIFxuICAgICAgICAgICAgICAgIFsgc2NhbGUsIHRoaXMuZm9udC5iaXRtYXAgPyBzY2FsZSA6IC1zY2FsZSBdLFxuICAgICAgICAgICAgICAgIFsgeCwgeSBdKSlcbn1cblxuRm9udHBhdGhSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyVW5kZXJsaW5lID0gZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuZGF0YS51bmRlcmxpbmVzLnB1c2gobmV3IFVuZGVybGluZShcbiAgICAgICAgWyB4LCB5IF0sXG4gICAgICAgIFsgd2lkdGgsIGhlaWdodCBdXG4gICAgKSlcbn1cblxuRm9udHBhdGhSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgIC8vbmV3IGRhdGEgZm9yIHJlc3VsdFxuICAgIHRoaXMuZGF0YS5nbHlwaHMubGVuZ3RoID0gMFxuICAgIHRoaXMuZGF0YS51bmRlcmxpbmVzLmxlbmd0aCA9IDBcbiAgICBCYXNlLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzLCB4LCB5LCBzdGFydCwgZW5kKVxuICAgIHJldHVybiB0aGlzLmRhdGFcbn1cblxuZnVuY3Rpb24gR2x5cGgoaW5kZXgsIGdseXBoLCBjaGFyQ29kZSwgc2NhbGUsIHBvc2l0aW9uKSB7XG4gICAgdGhpcy5nbHlwaCA9IGdseXBoXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5jaGFyQ29kZSA9IGNoYXJDb2RlXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlXG59XG5cbmZ1bmN0aW9uIFVuZGVybGluZShwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb250cGF0aFJlbmRlcmVyIiwidmFyIEdseXBoSXRlcmF0b3IgPSByZXF1aXJlKCdmb250cGF0aC1nbHlwaC1pdGVyYXRvcicpO1xudmFyIFdvcmRXcmFwID0gcmVxdWlyZSgnZm9udHBhdGgtd29yZHdyYXAnKTtcblxudmFyIHRtcEJvdW5kcyA9IHsgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCwgZ2x5cGhzOiAwIH07XG5cbmZ1bmN0aW9uIFRleHRSZW5kZXJlcihvcHRpb25zKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRleHRSZW5kZXJlcikpXG4gICAgICAgIHJldHVybiBuZXcgVGV4dFJlbmRlcmVyKG9wdGlvbnMpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zfHx7fVxuXG4gICAgdGhpcy5pdGVyYXRvciA9IG5ldyBHbHlwaEl0ZXJhdG9yKG9wdGlvbnMuZm9udCwgb3B0aW9ucy5mb250U2l6ZSk7XG4gICAgdGhpcy53b3Jkd3JhcCA9IG5ldyBXb3JkV3JhcCgpO1xuXG4gICAgdGhpcy5hbGlnbiA9ICdsZWZ0JztcbiAgICB0aGlzLnVuZGVybGluZSA9IGZhbHNlO1xuXG4gICAgdGhpcy51bmRlcmxpbmVUaGlja25lc3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51bmRlcmxpbmVQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl90ZXh0ID0gXCJcIjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hbGlnbiA9PT0gJ3N0cmluZycpXG4gICAgICAgIHRoaXMuYWxpZ24gPSBvcHRpb25zLmFsaWduO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51bmRlcmxpbmUgPT09ICdib29sZWFuJylcbiAgICAgICAgdGhpcy51bmRlcmxpbmUgPSBvcHRpb25zLnVuZGVybGluZTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudW5kZXJsaW5lVGhpY2tuZXNzID09PSAnbnVtYmVyJylcbiAgICAgICAgdGhpcy51bmRlcmxpbmVUaGlja25lc3MgPSBvcHRpb25zLnVuZGVybGluZVRoaWNrbmVzcztcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudW5kZXJsaW5lUG9zaXRpb24gPT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLnVuZGVybGluZVBvc2l0aW9uID0gb3B0aW9ucy51bmRlcmxpbmVQb3NpdGlvbjtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudGV4dCA9PT0gJ3N0cmluZycpXG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubGluZUhlaWdodCA9PT0gJ251bWJlcicpXG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IG9wdGlvbnMubGluZUhlaWdodDtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubGV0dGVyU3BhY2luZyA9PT0gJ251bWJlcicpXG4gICAgICAgIHRoaXMubGV0dGVyU3BhY2luZyA9IG9wdGlvbnMubGV0dGVyU3BhY2luZztcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JhcE1vZGUgPT09ICdzdHJpbmcnKVxuICAgICAgICB0aGlzLndvcmR3cmFwLm1vZGUgPSBvcHRpb25zLndyYXBNb2RlO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53cmFwV2lkdGggPT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLmxheW91dChvcHRpb25zLndyYXBXaWR0aCk7XG59XG5cbi8vSW50ZXJuYWxseSB3ZSB3aWxsIHVzZSBpbnRlZ2VycyB0byBhdm9pZCBzdHJpbmcgY29tcGFyaXNvbiBmb3IgZWFjaCBnbHlwaFxudmFyIExFRlRfQUxJR04gPSAwLCBDRU5URVJfQUxJR04gPSAxLCBSSUdIVF9BTElHTiA9IDI7XG52YXIgQUxJR05fQVJSQVkgPSBbXG4gICAgJ2xlZnQnLCBcbiAgICAnY2VudGVyJywgXG4gICAgJ3JpZ2h0J1xuXTtcbiAgICBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFRleHRSZW5kZXJlci5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbmV3IGZvbnQgZGlmZmVycyBmcm9tIHRoZSBsYXN0LCB0aGUgdGV4dCBsYXlvdXQgaXMgY2xlYXJlZFxuICAgICAqIGFuZCBwbGFjZWQgb250byBhIHNpbmdsZSBsaW5lLiBVc2VycyBtdXN0IG1hbnVhbGx5IHJlLWxheW91dCB0aGUgdGV4dCBcbiAgICAgKiBmb3Igd29yZCB3cmFwcGluZy5cbiAgICAgKi9cbiAgICBcImZvbnRcIjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3IuZm9udDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHZhciBvbGRGb250ID0gdGhpcy5pdGVyYXRvci5mb250O1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRvci5mb250ID0gdmFsO1xuICAgICAgICAgICAgaWYgKG9sZEZvbnQgIT09IHRoaXMuaXRlcmF0b3IuZm9udClcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyTGF5b3V0KCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBuZXcgZm9udCBzaXplIGRpZmZlcnMgZnJvbSB0aGUgbGFzdCwgdGhlIHRleHQgbGF5b3V0IGlzIGNsZWFyZWRcbiAgICAgKiBhbmQgcGxhY2VkIG9udG8gYSBzaW5nbGUgbGluZS4gVXNlcnMgbXVzdCBtYW51YWxseSByZS1sYXlvdXQgdGhlIHRleHQgXG4gICAgICogZm9yIHdvcmQgd3JhcHBpbmcuXG4gICAgICovXG4gICAgXCJmb250U2l6ZVwiOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvci5mb250U2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHZhciBvbGRTaXplID0gdGhpcy5pdGVyYXRvci5mb250U2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5pdGVyYXRvci5mb250U2l6ZSA9IHZhbDtcblxuICAgICAgICAgICAgaWYgKG9sZFNpemUgIT09IHRoaXMuaXRlcmF0b3IuZm9udFNpemUpXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckxheW91dCgpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yLmxpbmVIZWlnaHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB0aGlzLml0ZXJhdG9yLmxpbmVIZWlnaHQgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcImxldHRlclNwYWNpbmdcIjoge1xuICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yLmxldHRlclNwYWNpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB0aGlzLml0ZXJhdG9yLmxldHRlclNwYWNpbmcgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBuZXcgdGV4dCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgbGFzdCwgdGhlIGxheW91dCAoaS5lLiB3b3JkLXdyYXBwaW5nKVxuICAgICAqIGlzIGNsZWFyZWQgYW5kIHRoZSByZXN1bHQgaXMgYSBzaW5nbGUgbGluZSBvZiB0ZXh0IChzaW1pbGFyIHRvIEhUTUw1IGNhbnZhcyB0ZXh0XG4gICAgICogcmVuZGVyaW5nKS5cbiAgICAgKiBcbiAgICAgKiBUaGUgdGV4dCB0aGVuIG5lZWRzIHRvIGJlIHJlLXdvcmR3cmFwcGVkIHdpdGggYSBjYWxsIHRvIGBsYXlvdXQoKWAuXG4gICAgICovXG4gICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgICAgdGV4dCA9IHRleHR8fFwiXCI7XG5cbiAgICAgICAgICAgIHZhciBvbGQgPSB0aGlzLl90ZXh0O1xuICAgICAgICAgICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgICAgICAgICB0aGlzLndvcmR3cmFwLnRleHQgPSB0aGlzLnRleHQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0ICE9PSBvbGQpIFxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJMYXlvdXQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIENsZWFycyB0aGUgdGV4dCBsYXlvdXQgYW5kIHdvcmQtd3JhcHBpbmcsIHBsYWNpbmcgYWxsIG9mIGl0IG9uIGEgc2luZ2xlIGxpbmUuXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUuY2xlYXJMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLndvcmR3cmFwLnRleHQgPSB0aGlzLnRleHQ7XG4gICAgdGhpcy53b3Jkd3JhcC5lbXB0eSgpO1xuXG4gICAgaWYgKHRoaXMuaXRlcmF0b3IuZm9udCkgLy9mb250IG1pZ2h0IG5vdCBoYXZlIGJlZW4gcGFzc2VkIGF0IGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMud29yZHdyYXAuY2xlYXJMYXlvdXQodGhpcy5pdGVyYXRvcik7XG59O1xuXG4vKipcbiAqIENhbGxzIHRoZSB3b3JkIHdyYXBwZXIgdG8gbGF5b3V0IHRoZSBjdXJyZW50IHRleHQgc3RyaW5nLFxuICogYmFzZWQgb24gdGhlIHdyYXAgd2lkdGggYW5kIGFueSBjdXJyZW50IHdvcmR3cmFwcGluZyBvcHRpb25zLlxuICpcbiAqIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIHRleHQgaXMgY2hhbmdlZC4gXG4gKiBcbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uKHdyYXBXaWR0aCkge1xuICAgIHRoaXMud29yZHdyYXAudGV4dCA9IHRoaXMudGV4dDtcbiAgICB0aGlzLndvcmR3cmFwLmVtcHR5KCk7XG4gICAgdGhpcy53b3Jkd3JhcC5sYXlvdXQodGhpcy5pdGVyYXRvciwgd3JhcFdpZHRoKTtcbn07XG5cbi8qKlxuICogXCJSZW5kZXJzXCIgdGhpcyBnbHlwaCBhdCB0aGUgZ2l2ZW4gbG9jYXRpb24uIFRoaXMgbWF5IGludm9sdmUgZmlsbGluZ1xuICogYSBWQk8gd2l0aCB2ZXJ0ZXggZGF0YSwgb3IgaXQgbWF5IGJlIGEgZGlyZWN0IGNhbGwgdG8gZHJhdyBhIGJpdG1hcCBnbHlwaFxuICogb3Igc2hhcGUgb3V0bGluZS5cbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckdseXBoID0gZnVuY3Rpb24oKSB7XG5cbn07XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyVW5kZXJsaW5lID0gZnVuY3Rpb24oKSB7XG5cbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYm91bmRzIG9mIHRoZSBjdXJyZW50IHRleHQgbGF5b3V0LiBcbiAqXG4gKiBUaGUgaGVpZ2h0IGRvZXMgbm90IGV4dGVuZCBwYXN0IHRoZSBiYXNlbGluZSBvZiB0aGVcbiAqIGxhc3QgbGluZTsgdW5sZXNzIGBpbmNsdWRlVW5kZXJsaW5lYCBpcyB0cnVlLCBpbiB3aGljaFxuICogY2FzZSB0aGUgdW5kZXJsaW5lJ3MgcG9zaXRpb24gYW5kIGhlaWdodCBpcyBpbmNsdWRlZFxuICogaW4gdGhlIGNhbGN1bGF0aW9uLiBcbiAqXG4gKiBUaGUgYm91bmRpbmcgeSBwb3NpdGlvbiBpcyBvZmZzZXQgc28gdGhhdCB0aGUgYm94IGhhcyBhbiB1cHBlci1sZWZ0XG4gKiBvcmlnaW4sIGZvciBwYXJpdHkgd2l0aCBIVE1MNSBjYW52YXMgcmVuZGVyaW5nLlxuICogXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGluY2x1ZGVVbmRlcmxpbmUgd2hldGhlciB0byBpbmNsdWRlIHRoZSB1bmRlcmxpbmUgaW4gdGhlIGNhbGN1bGF0aW9uLCBkZWZhdWx0IGZhbHNlXG4gKiBAcGFyYW0ge09iamVjdH0gb3V0IGFuIG9wdGlvbmFsIHt3aWR0aCwgaGVpZ2h0fSBvYmplY3QgZm9yIHJlLXVzZVxuICogQHJldHVybiB7T2JqZWN0fSBhIHNpemUgd2l0aCB7IHdpZHRoLCBoZWlnaHQgfSBwcm9wZXJ0aWVzXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKGluY2x1ZGVVbmRlcmxpbmUsIG91dCkge1xuICAgIGlmICghb3V0KVxuICAgICAgICBvdXQgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcblxuICAgIHZhciB3b3Jkd3JhcHBlciA9IHRoaXMud29yZHdyYXA7XG4gICAgdmFyIGl0ciA9IHRoaXMuaXRlcmF0b3I7XG5cbiAgICAvL3RpZ2h0ZW4gdGhlIGJvdW5kaW5nIGJveCBhcm91bmQgdGhlIGZpcnN0IGxpbmUuLlxuICAgIHZhciBmaXJzdExpbmVIZWlnaHQgPSAwO1xuICAgIGlmICh3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBmaXJzdExpbmUgPSB3b3Jkd3JhcHBlci5saW5lc1swXTtcbiAgICAgICAgaXRyLmdldEJvdW5kcyh0aGlzLnRleHQsIGZpcnN0TGluZS5zdGFydCwgZmlyc3RMaW5lLmVuZCwgdW5kZWZpbmVkLCB0bXBCb3VuZHMpO1xuICAgICAgICBmaXJzdExpbmVIZWlnaHQgPSB0bXBCb3VuZHMuaGVpZ2h0O1xuICAgIH1cblxuICAgIG91dC53aWR0aCA9IHdvcmR3cmFwcGVyLmdldE1heExpbmVXaWR0aCgpOyAgIFxuICAgIG91dC5oZWlnaHQgPSBNYXRoLm1heCgwLCB3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGgtMSkgKiBpdHIuZ2V0TGluZUdhcCgpICsgZmlyc3RMaW5lSGVpZ2h0O1xuXG4gICAgb3V0LnggPSAwO1xuICAgIG91dC55ID0gLW91dC5oZWlnaHQ7XG5cbiAgICBpZiAoaW5jbHVkZVVuZGVybGluZSkge1xuICAgICAgICB2YXIgdW5kZXJsaW5lSGVpZ2h0ID0gdGhpcy5jb21wdXRlVW5kZXJsaW5lSGVpZ2h0KCk7XG4gICAgICAgIHZhciB1bmRlcmxpbmVQb3NpdGlvbiA9IHRoaXMuY29tcHV0ZVVuZGVybGluZVBvc2l0aW9uKCk7XG4gICAgICAgIHZhciB1bmRlcmxpbmVPZmYgPSB1bmRlcmxpbmVQb3NpdGlvbit1bmRlcmxpbmVIZWlnaHQvMjtcbiAgICAgICAgb3V0LmhlaWdodCArPSB1bmRlcmxpbmVPZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHNjYWxlZCB1bmRlcmxpbmUgaGVpZ2h0IGFzIHBpeGVscywgYmFzZWQgb24gXG4gKiB0aGUgZXhwbGljaXQgYHVuZGVybGluZUhlaWdodGAgKGluIHBpeGVscykuIElmIGB1bmRlcmxpbmVIZWlnaHRgIGlzXG4gKiB1bmRlZmluZWQgb3IgbnVsbCwgaXQgd2lsbCB0cnkgdG8gdXNlIHRoZSBmb250J3Mgbm9uLXplcm8gdW5kZXJsaW5lIGhlaWdodCwgXG4gKiBvdGhlcndpc2UgZGVmYXVsdCB0byAxLzggb2YgdGhlIGZvbnQncyBFTSBzcXVhcmUuXG4gKiBcbiAqIEByZXR1cm4ge051bWJlcn0gdGhlIHBpeGVsIGhlaWdodCBvZiB0aGUgdW5kZXJsaW5lIFxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmNvbXB1dGVVbmRlcmxpbmVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZvbnQgPSB0aGlzLmZvbnQ7XG4gICAgdmFyIHNjYWxlID0gdGhpcy5pdGVyYXRvci5mb250U2NhbGU7XG4gICAgaWYgKHRoaXMudW5kZXJsaW5lVGhpY2tuZXNzPT09MHx8dGhpcy51bmRlcmxpbmVUaGlja25lc3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5kZXJsaW5lVGhpY2tuZXNzOyBcbiAgICB9IGVsc2UgaWYgKGZvbnQudW5kZXJsaW5lX3RoaWNrbmVzcykge1xuICAgICAgICByZXR1cm4gZm9udC51bmRlcmxpbmVfdGhpY2tuZXNzICogc2NhbGU7IFxuICAgIH0gZWxzZSBpZiAoZm9udC5iaXRtYXApXG4gICAgICAgIHJldHVybiBmb250LnNpemUvODtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiAoZm9udC51bml0c19wZXJfRU0vOCkqc2NhbGU7XG59O1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBzY2FsZWQgdW5kZXJsaW5lIGhlaWdodCBhcyBwaXhlbHMsIGJhc2VkIG9uIFxuICogdGhlIGV4cGxpY2l0IGB1bmRlcmxpbmVQb3NpdGlvbmAgKGluIHBpeGVscykuIElmIGB1bmRlcmxpbmVQb3NpdGlvbmAgaXNcbiAqIHVuZGVmaW5lZCBvciBudWxsLCBpdCB3aWxsIHRyeSB0byB1c2UgdGhlIGZvbnQncyBub24temVybyB1bmRlcmxpbmUgcG9zaXRpb24sIFxuICogb3RoZXJ3aXNlIGRlZmF1bHQgdG8gMS80IG9mIHRoZSBmb250J3MgRU0gc3F1YXJlLlxuICpcbiAqIFRoaXMgaXMgdGhlIFkgb2Zmc2V0IGZyb20gdGhlIHRleHQgYmFzZWxpbmUgdG8gdGhlIGNlbnRlciBvZiB0aGUgdW5kZXJsaW5lIFxuICogYmFyLCBpbiBwaXhlbHMuIEl0IGlzIGdlbmVyYWxseSBhIHBvc2l0aXZlIHZhbHVlLlxuICogXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBwaXhlbCBwb3NpdGlvbiBvZiB0aGUgdW5kZXJsaW5lIFxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmNvbXB1dGVVbmRlcmxpbmVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm9udCA9IHRoaXMuZm9udDtcbiAgICB2YXIgc2NhbGUgPSB0aGlzLml0ZXJhdG9yLmZvbnRTY2FsZTtcbiAgICAgICAgXG4gICAgaWYgKHRoaXMudW5kZXJsaW5lUG9zaXRpb249PT0wfHx0aGlzLnVuZGVybGluZVBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuZGVybGluZVBvc2l0aW9uOyBcbiAgICB9IGVsc2UgaWYgKGZvbnQudW5kZXJsaW5lX3Bvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiAtZm9udC51bmRlcmxpbmVfcG9zaXRpb24gKiBzY2FsZTsgXG4gICAgfSBlbHNlIGlmIChmb250LmJpdG1hcCkge1xuICAgICAgICByZXR1cm4gZm9udC5zaXplLzQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChmb250LnVuaXRzX3Blcl9FTS80KSpzY2FsZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGRlc2NlbnQgb2YgdGhlIGN1cnJlbnQgZm9udCAoYXNzdW1lcyBpdHMgc2l6ZSBcbiAqIGlzIGFscmVhZHkgc2V0KS4gVGhpcyBpcyBhbiBhYnNvbHV0ZSAocG9zaXRpdmUpIHZhbHVlLlxuICogXG4gKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5nZXREZXNjZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuaXRlcmF0b3IuZm9udFNjYWxlICogdGhpcy5pdGVyYXRvci5mb250LmRlc2NlbmRlcik7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGRlc2NlbnQgb2YgdGhlIGN1cnJlbnQgZm9udCAoYXNzdW1lcyBpdHMgc2l6ZSBcbiAqIGlzIGFscmVhZHkgc2V0KS4gVGhpcyBpcyBhbiBhYnNvbHV0ZSAocG9zaXRpdmUpIHZhbHVlLlxuICogXG4gKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5nZXRBc2NlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy5pdGVyYXRvci5mb250U2NhbGUgKiB0aGlzLml0ZXJhdG9yLmZvbnQuYXNjZW5kZXIpO1xufTtcblxuLy9TaWduYWxzIGZvciBzdWJjbGFzc2VzIHRvIG9wdGlvbmFsbHkgaW1wbG1lZW50XG4vL1RoaXMgbWF5IGJlIHVzZWZ1bCB0byBzdG9wL3N0YXJ0IHBhdGhzIHdpdGggZGlmZmVyZW50IGZpbGxzXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLm9uQmVnaW4gPSBmdW5jdGlvbigpIHsgfVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uKCkgeyB9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLm9uQmVnaW5MaW5lID0gZnVuY3Rpb24obGluZUluZGV4KSB7IH1cblRleHRSZW5kZXJlci5wcm90b3R5cGUub25FbmRMaW5lID0gZnVuY3Rpb24obGluZUluZGV4KSB7IH1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjdXJyZW50IHRleHQgbGF5b3V0LCB3aGVyZSBsb3dlci1sZWZ0IGlzIFxuICogdGhlIG9yaWdpbi4gTXVsdGlwbGUgbGluZXMgd2lsbCBiZSBwb3NpdGlvbmVkIGFib3ZlIHRoZVxuICogb3JpZ2luLlxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICh4LCB5LCBzdGFydCwgZW5kKSB7XG4gICAgeCA9IHh8fDA7XG4gICAgeSA9IHl8fDA7XG5cbiAgICB2YXIgdGV4dCA9IHRoaXMudGV4dDtcbiAgICB2YXIgd29yZHdyYXBwZXIgPSB0aGlzLndvcmR3cmFwO1xuXG4gICAgLy9pZiB3ZSBoYXZlIG5vdGhpbmcgdG8gZHJhd1xuICAgIGlmICghdGV4dCB8fCB3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybjtcblxuICAgIC8vZGVmYXVsdCBzdGFydC9lbmQgcGFyYW1zXG4gICAgc3RhcnQgPSBzdGFydHx8MDtcbiAgICBlbmQgPSB0eXBlb2YgZW5kID09PSBcIm51bWJlclwiID8gZW5kIDogdGV4dC5sZW5ndGg7XG5cbiAgICB2YXIgaXRyID0gdGhpcy5pdGVyYXRvcjtcbiAgICB2YXIgc2NhbGUgPSBpdHIuZm9udFNjYWxlO1xuICAgIHZhciBmb250ID0gaXRyLmZvbnQ7XG4gICAgdmFyIHVuZGVybGluZSA9IHRoaXMudW5kZXJsaW5lO1xuXG4gICAgLy91c2VkIGZvciBhbGlnbm1lbnQuLi5cbiAgICB2YXIgbWF4TGluZVdpZHRoID0gd29yZHdyYXBwZXIuZ2V0TWF4TGluZVdpZHRoKCk7XG4gICAgXG4gICAgeSAtPSBNYXRoLm1heCgwLCB3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGgtMSkgKiBpdHIuZ2V0TGluZUdhcCgpO1xuXG5cbiAgICAvL3VzZSBudW1iZXJzIHRvIGF2b2lkIHN0ciBjb21wYXJlIGZvciBlYWNoIGdseXBoXG4gICAgdmFyIGFsaWduVHlwZSA9IEFMSUdOX0FSUkFZLmluZGV4T2YodGhpcy5hbGlnbnx8XCJcIik7XG4gICAgaWYgKGFsaWduVHlwZT09PS0xKVxuICAgICAgICBhbGlnblR5cGUgPSBMRUZUX0FMSUdOO1xuXG4gICAgdmFyIHVuZGVybGluZVggPSAwO1xuICAgIHZhciB1bmRlcmxpbmVTdGFydFggPSAwO1xuICAgIHZhciB1bmRlcmxpbmVZID0gMDtcbiAgICB2YXIgdW5kZXJsaW5lV2lkdGggPSAwO1xuXG4gICAgdmFyIHVuZGVybGluZVN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIC8vVHJ5IHRvIHVzZSB1c2VyLXNwZWNpZmllZCB1bmRlcmxpbmUgc2V0dGluZ3MsIG90aGVyd2lzZSB1c2UgdGhlIGZvbnQgaWYgcG9zc2libGUsXG4gICAgLy9vdGhlcndpc2UganVzdCB1c2UgYSByb3VnaCBkZWZhdWx0IGJhc2VkIG9uIEVNIHNxdWFyZS4gICAgXG4gICAgdmFyIHVuZGVybGluZVBvcyA9IHRoaXMuY29tcHV0ZVVuZGVybGluZVBvc2l0aW9uKCk7XG4gICAgdmFyIHVuZGVybGluZUhlaWdodCA9IHRoaXMuY29tcHV0ZVVuZGVybGluZUhlaWdodCgpO1xuXG4gICAgdGhpcy5vbkJlZ2luKCk7XG4gICAgXG4gICAgLy9zZXQgdGhlIG9yaWdpbiBhbmQgcGVuIHBvc2l0aW9uXG4gICAgaXRyLmJlZ2luKHgsIHkpO1xuICAgIGZvciAodmFyIGs9MDsgazx3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgbGluZSA9IHdvcmR3cmFwcGVyLmxpbmVzW2tdO1xuICAgICAgICB1bmRlcmxpbmVTdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGxhc3RBZHZhbmNlID0gMDtcblxuICAgICAgICB2YXIgbGluZVggPSBpdHIucGVuLng7XG4gICAgICAgIHZhciBsaW5lWSA9IGl0ci5wZW4ueTtcblxuICAgICAgICB0aGlzLm9uQmVnaW5MaW5lKGspO1xuXG4gICAgICAgIC8vVE9ETzogdXNlIG11bHRpcGxlIE5vZGVzIGluc2lkZSBhIHNpbmdsZSBsaW5lXG4gICAgICAgIC8vYSBub2RlIHdpbGwgaGF2ZSBhdHRyaWJ1dGVzIGxpa2UgZm9udCwgc2l6ZSwgY29sb3IsIFxuICAgICAgICAvL2xldHRlci1zcGFjaW5nLCB1bmRlcmxpbmUsIGV0Yy5cbiAgICAgICAgLy9UaGlzIHdpbGwgYWZmZWN0IHRoZSBsaW5lIGhlaWdodCwgYXMgaXQgd2lsbCBoYXZlIHRvIGJlIHRoZSBtYXggb2YgYWxsIG5vZGVzLlxuXG4gICAgICAgIGZvciAodmFyIGk9bGluZS5zdGFydDsgaTxsaW5lLmVuZDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hyID0gdGV4dC5jaGFyQXQoaSk7XG5cbiAgICAgICAgICAgIC8vU3RlcCB0aGUgaXRlcmF0b3IsIG1vdmluZyBmb3J3YXJkIGJhc2VkIG9uIGtlcm5pbmcgZnJvbSBsYXN0IGNoYXJcbiAgICAgICAgICAgIHZhciBnbHlwaCA9IGl0ci5zdGVwKHRleHQsIGkpO1xuXG4gICAgICAgICAgICBpZiAoIWdseXBoKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL3dpdGhpbiBkZXNpcmVkIHJhbmdlXG4gICAgICAgICAgICBpZiAoaSA+PSBzdGFydCAmJiBpIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR4ID0gaXRyLnBlbi54O1xuICAgICAgICAgICAgICAgIHZhciB0eSA9IGl0ci5wZW4ueTtcblxuICAgICAgICAgICAgICAgIGlmIChhbGlnblR5cGUgPT09IENFTlRFUl9BTElHTikge1xuICAgICAgICAgICAgICAgICAgICB0eCArPSAobWF4TGluZVdpZHRoLWxpbmUud2lkdGgpLzI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbGlnblR5cGUgPT09IFJJR0hUX0FMSUdOKSB7XG4gICAgICAgICAgICAgICAgICAgIHR4ICs9IChtYXhMaW5lV2lkdGgtbGluZS53aWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF1bmRlcmxpbmVTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVggPSB0eDtcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lU3RhcnRYID0gdHg7XG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVkgPSB0eSArIHVuZGVybGluZVBvcztcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lV2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVXaWR0aCA9IHR4IC0gdW5kZXJsaW5lU3RhcnRYO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2x5cGgoaSwgZ2x5cGgsIHNjYWxlLCB0eCwgdHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0FkdmFuY2UgdGhlIGl0ZXJhdG9yIHRvIHRoZSBuZXh0IGdseXBoIGluIHRoZSBzdHJpbmdcbiAgICAgICAgICAgIHZhciBuZXdBZHZhbmNlID0gaXRyLmFkdmFuY2UoZ2x5cGgpO1xuXG4gICAgICAgICAgICBpZiAoaSA+PSBzdGFydCAmJiBpIDwgZW5kKVxuICAgICAgICAgICAgICAgIGxhc3RBZHZhbmNlID0gbmV3QWR2YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25FbmRMaW5lKGspO1xuXG4gICAgICAgIGlmICh1bmRlcmxpbmUpIHtcbiAgICAgICAgICAgIHVuZGVybGluZVdpZHRoICs9IGxhc3RBZHZhbmNlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJVbmRlcmxpbmUodW5kZXJsaW5lWCwgdW5kZXJsaW5lWS11bmRlcmxpbmVIZWlnaHQvMiwgdW5kZXJsaW5lV2lkdGgsIHVuZGVybGluZUhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vU3RlcHMgZG93biBhIGxpbmUuLi5cbiAgICAgICAgaWYgKGsgPCB3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgaXRyLmFkdmFuY2VMaW5lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2ZpbmlzaCB0aGUgaXRlcmF0b3IuLi5cbiAgICBpdHIuZW5kKCk7XG4gICAgdGhpcy5vbkVuZCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0UmVuZGVyZXI7IiwidmFyIHV0aWwgPSByZXF1aXJlKCdmb250cGF0aC11dGlsJyk7XG5cbnZhciBERUZBVUxUX1RBQl9XSURUSCA9IDQ7XG5cbmZ1bmN0aW9uIEdseXBoSXRlcmF0b3IoZm9udCwgZm9udFNpemUpIHtcbiAgICB0aGlzLl9mb250U2l6ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9mb250U2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZm9udCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZvbnRTY2FsZSA9IDEuMDtcbiAgICB0aGlzLmtlcm5pbmcgPSB0cnVlO1xuICAgIHRoaXMubGV0dGVyU3BhY2luZyA9IDA7XG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgIFxuICAgIHRoaXMuZm9udFNpemUgPSB0eXBlb2YgZm9udFNpemUgPT09ICdudW1iZXInXG4gICAgICAgICAgICA/IGZvbnRTaXplXG4gICAgICAgICAgICA6IChmb250ID8gZm9udC5zaXplIDogdW5kZWZpbmVkKTtcbiAgICB0aGlzLmZvbnQgPSBmb250O1xuXG4gICAgLy9OdW1iZXIgb2Ygc3BhY2VzIGZvciBhIHRhYiBjaGFyYWN0ZXJcbiAgICB0aGlzLnRhYldpZHRoID0gREVGQVVMVF9UQUJfV0lEVEg7XG4gICAgdGhpcy5fdGFiR2x5cGggPSBudWxsO1xuXG4gICAgdGhpcy5vcmlnaW4gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICB0aGlzLnBlbiA9IHsgeDogMCwgeTogMCB9O1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoR2x5cGhJdGVyYXRvci5wcm90b3R5cGUsIFwiZm9udFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnQ7XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24oZm9udCkge1xuICAgICAgICB0aGlzLl9mb250ID0gZm9udDtcblxuICAgICAgICAvL0RldGVybWluZSB0aGUgbmV3IHNjYWxpbmcgZmFjdG9yLi4uXG4gICAgICAgIGlmIChmb250KSB7XG4gICAgICAgICAgICB0aGlzLmZvbnRTY2FsZSA9IHV0aWwuZ2V0UHhTY2FsZShmb250LCB0aGlzLmZvbnRTaXplKTtcblxuICAgICAgICAgICAgLy9VcGRhdGVzIHRoZSB0YWIgZ2x5cGhcbiAgICAgICAgICAgIHRoaXMudGFiV2lkdGggPSB0aGlzLl90YWJXaWR0aDtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxuLy9UaGVyZSBtaWdodCBiZSBhIGJldHRlciB3YXkgb2YgaGFuZGxpbmcgdGFiIHdpZHRoIHVzaW5nIEZyZWVUeXBlID8gXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoR2x5cGhJdGVyYXRvci5wcm90b3R5cGUsIFwidGFiV2lkdGhcIiwge1xuXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhYldpZHRoO1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB0aGlzLl90YWJXaWR0aCA9IHZhbD09PTAgfHwgdmFsID8gdmFsIDogREVGQVVMVF9UQUJfV0lEVEg7XG4gICAgICAgIHRoaXMuX3RhYkdseXBoID0ge307XG5cbiAgICAgICAgdmFyIHNwYWNlR2x5cGggPSB0aGlzLmZvbnQgPyB0aGlzLmZvbnQuZ2x5cGhzW1wiIFwiXSA6IG51bGw7XG4gICAgICAgIGlmIChzcGFjZUdseXBoKSB7XG4gICAgICAgICAgICB0aGlzLl90YWJHbHlwaCA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBzcGFjZUdseXBoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFiR2x5cGhba10gPSBzcGFjZUdseXBoW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX3RhYkdseXBoLnhvZmYpXG4gICAgICAgICAgICAgICAgdGhpcy5fdGFiR2x5cGgueG9mZiAqPSB0aGlzLl90YWJXaWR0aDtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEdseXBoSXRlcmF0b3IucHJvdG90eXBlLCBcImZvbnRTaXplXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2ZvbnRTaXplICE9PSAnbnVtYmVyJylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvbnQuYml0bWFwIFxuICAgICAgICAgICAgICAgID8gdGhpcy5mb250LnNpemUgXG4gICAgICAgICAgICAgICAgOiB1dGlsLnBvaW50VG9QaXhlbCh0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnRTaXplO1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB0aGlzLl9mb250U2l6ZSA9IHZhbDtcblxuICAgICAgICAvL0lmIHRoZSBmb250IGlzIGFscmVhZHkgc2V0LCBkZXRlcm1pbmUgdGhlIG5ldyBzY2FsaW5nIGZhY3RvclxuICAgICAgICBpZiAodGhpcy5fZm9udCkge1xuICAgICAgICAgICAgdGhpcy5mb250U2NhbGUgPSB1dGlsLmdldFB4U2NhbGUodGhpcy5fZm9udCwgdGhpcy5fZm9udFNpemUpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5nZXRLZXJuaW5nID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgZm9udCA9IHRoaXMuZm9udDtcblxuICAgIGlmICghZm9udCB8fCAhZm9udC5rZXJuaW5nKVxuICAgICAgICByZXR1cm4gMDtcblxuICAgIHZhciB0YWJsZSA9IHRoaXMua2VybmluZ1RhYmxlO1xuXG4gICAgZm9yICh2YXIgaT0wOyBpPGZvbnQua2VybmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgayA9IGZvbnQua2VybmluZ1tpXTtcbiAgICAgICAgaWYgKGtbMF0gPT09IGxlZnQgJiYga1sxXSA9PT0gcmlnaHQpIFxuICAgICAgICAgICAgcmV0dXJuIGtbMl07XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuYmVnaW4gPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5vcmlnaW4ueCA9IHh8fDA7XG4gICAgdGhpcy5vcmlnaW4ueSA9IHl8fDA7XG5cbiAgICB0aGlzLnBlbi54ID0gdGhpcy5vcmlnaW4ueDtcbiAgICB0aGlzLnBlbi55ID0gdGhpcy5vcmlnaW4ueTtcbn07XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vLi4gbWFpbmx5IGZvciBjb25zaXN0ZW5jeSB3aXRoIGJlZ2luKClcbiAgICAvL01pZ2h0IGJlIHVzZWZ1bCBsYXRlciBvblxufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuZ2V0TGluZUdhcCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vTGluZSBoZWlnaHQgaGFuZGxpbmcgaXMgYSBtZXNzIGluIGJyb3dzZXJzLlxuICAgIC8vTWF5YmUgdGhlIGJlc3Qgc29sdXRpb24gaXMgdG8gZW5jb3VyYWdlIHVzZXJzIHRvIFxuICAgIC8vc3BlY2lmeSBwaXhlbCBsaW5lIGhlaWdodHMgaWYgdGhleSB3YW50IHRvIG1hdGNoIGJyb3dzZXIgc3RhbmRhcmRzLFxuICAgIC8vb3RoZXJ3aXNlIGl0J3MgdW5yZWFzb25hYmxlIHRvIGV4cGVjdCB0aGUgbGluZSBnYXBzIHRvIGxpbmUgdXAgZXhhY3RseVxuICAgIC8vYWNyb3NzIGFsbCBicm93c2Vycy4gRXhhbXBsZSBvZiB0aGUgZGlzYXN0ZXI6XG4gICAgLy9odHRwOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAwOEphbi8wNDEzLmh0bWxcblxuICAgIC8vRm9yIHJlZmVyZW5jZSwgc29tZSBiYXNlbGluZS10by1iYXNlbGluZSBjYWxjdWxhdGlvbnM6XG4gICAgLy9odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vdHlwb2dyYXBoeS9vdHNwZWMvcmVjb20uaHRtXG4gICAgLy9mcmVldHlwZS5vcmcvZnJlZXR5cGUyL2RvY3MvcmVmZXJlbmNlL2Z0Mi1iYXNlX2ludGVyZmFjZS5odG1sXG4gICAgLy9odHRwOi8vd3d3LmZyZWV0eXBlLm9yZy9mcmVldHlwZTIvZG9jcy9nbHlwaHMvZ2x5cGhzLTMuaHRtbFxuXG4gICAgLy9VbmZvcnR1bmF0ZWx5IG5vbmUgb2YgdGhlc2UgYXJlIHByb2R1Y2luZyBsaW5lLWhlaWdodHMgdGhhdCBhdm9pZCBvdmVybGFwcGluZ1xuICAgIC8vb3IgcmVzZW1ibGUgYnJvd3NlciByZW5kZXJpbmcgaW4gYW55IHdheS4gXG5cbiAgICAvLyBJZiBDU1MgdXNlcyAxZW0gb3IgMSwgdGhlIGJyb3dzZXIgb2Zmc2V0cyB0aGUgbGluZSBieSB0aGUgXG4gICAgLy8gZm9udCdzIHBpeGVsIHNpemUuIElmIGFuIGV4YWN0IHBpeGVsIGxpbmUtaGVpZ2h0IGlzIHNwZWNpZmllZCxcbiAgICAvLyB0aGUgYnJvd3NlciB3aWxsIHVzZSB0aGF0ICsgYSBjb21wdXRlZCBcImxpbmVnYXAuXCIgXG4gICAgLy8gSWYgJ2F1dG8nIGlzIHNwZWNpZmllZCBmb3IgbGluZS1oZWlnaHQsIHRoZSBjYWxjdWxhdGlvbnMgc2VlbVxuICAgIC8vIG11Y2ggbW9yZSBjb21wbGV4IGFuZCBicm93c2VyL3BsYXRmb3JtIGRlcGVuZGVudCAobm90IGluY2x1ZGVkIGhlcmUpLlxuICAgIFxuICAgIHZhciBmb250ID0gdGhpcy5mb250LFxuICAgICAgICBzY2FsZSA9IHRoaXMuZm9udFNjYWxlO1xuICAgIHZhciBnYXAgPSAoZm9udC5oZWlnaHQgLSBmb250LmFzY2VuZGVyICsgTWF0aC5hYnMoZm9udC5kZXNjZW5kZXIpKSAqIHNjYWxlOyAgICBcbiAgICB2YXIgbGluZUhlaWdodCA9IHRoaXMubGluZUhlaWdodDtcbiAgICBcbiAgICBsaW5lSGVpZ2h0ID0gKGxpbmVIZWlnaHQ9PT0wfHxsaW5lSGVpZ2h0KSBcbiAgICAgICAgICAgID8gKGxpbmVIZWlnaHQgKyBnYXApXG4gICAgICAgICAgICA6IHRoaXMuZm9udFNpemU7XG4gICAgcmV0dXJuIGxpbmVIZWlnaHQ7XG59O1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5vcmlnaW4ueCArPSB4fHwwO1xuICAgIHRoaXMub3JpZ2luLnkgKz0geXx8MDtcblxuICAgIHRoaXMucGVuLnggKz0geHx8MDtcbiAgICB0aGlzLnBlbi55ICs9IHl8fDA7XG59O1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24odGV4dCwgaW5kZXgpIHtcbiAgICB2YXIgc2NhbGUgPSB0aGlzLmZvbnRTY2FsZSxcbiAgICAgICAgZm9udCA9IHRoaXMuX2ZvbnQ7XG5cbiAgICB2YXIgY2hyID0gdGV4dC5jaGFyQXQoaW5kZXgpOyBcblxuICAgIGlmIChjaHIgPT09ICdcXHQnICYmIHRoaXMuX3RhYkdseXBoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YWJHbHlwaDtcbiAgICB9XG5cbiAgICAvL1NraXAgbWlzc2luZyBjaGFyYWN0ZXJzLi4uXG4gICAgaWYgKCEoY2hyIGluIGZvbnQuZ2x5cGhzKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIFxuICAgIHZhciBnbHlwaCA9IGZvbnQuZ2x5cGhzW2Nocl07XG5cbiAgICAvL0lmIHdlIGhhdmUgYSBjaGFyIHRvIHRoZSBsZWZ0LCBkZXRlcm1pbmUgaXRzIGtlcm5pbmdcbiAgICBpZiAoaW5kZXggPiAwICYmIHRoaXMua2VybmluZykge1xuICAgICAgICB2YXIga2VybiA9IHRoaXMuZ2V0S2VybmluZyh0ZXh0LmNoYXJBdChpbmRleC0xKSwgY2hyKTtcbiAgICAgICAgdGhpcy5wZW4ueCArPSAoa2VybipzY2FsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdseXBoO1xufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuYWR2YW5jZUxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBlbi55ICs9IHRoaXMuZ2V0TGluZUdhcCgpO1xuICAgIHRoaXMucGVuLnggPSB0aGlzLm9yaWdpbi54O1xufTtcblxuLyoqXG4gKiBDYWxsZWQgYWZ0ZXIgc3RlcC4gXG4gKi9cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmFkdmFuY2UgPSBmdW5jdGlvbihnbHlwaCkge1xuICAgIHZhciBhZHZhbmNlID0gKGdseXBoLnhvZmYgKiB0aGlzLmZvbnRTY2FsZSk7XG4gICAgLy8gQWR2YW5jZSB0byBuZXh0IHBlbiBwb3NpdGlvblxuICAgIHRoaXMucGVuLnggKz0gYWR2YW5jZSArIHRoaXMubGV0dGVyU3BhY2luZztcbiAgICByZXR1cm4gYWR2YW5jZTtcbn07XG5cbi8qKlxuICogVGhpcyBpcyBhIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyB0aGUgYm91bmRzIG9mIHRoZSBnaXZlblxuICogdGV4dCAoZnJvbSBzdGFydCBhbmQgZW5kIHBvc2l0aW9ucykgYXMgaWYgdGhleSB3ZXJlIGxhaWQgb3V0IGhvcml6b250YWxseSxcbiAqIGxlZnQgdG8gcmlnaHQuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB0aGlzIHdpbGwgbm90IGFsdGVyIHRoZSBjdXJyZW50IHBlbiBhbmQgb3JpZ2luIHBvc2l0aW9ucy5cbiAqIFRoaXMgd2F5IGl0IGNhbiBiZSB1dGlsaXplZCBpbnNpZGUgYSBnbHlwaCBpdGVyYXRpb24gKGkuZS4gZm9yIHJlbmRlcmluZykuXG4gKlxuICogSWYgYGF2YWlsYWJsZVdpZHRoYCBpcyBzcGVjaWZpZWQsIHRoaXMgd2lsbCBicmVhayBiZWZvcmUgcmVhY2hpbmcgdGhlIHNwZWNpZmllZFxuICogcGl4ZWwgd2lkdGgsIHRvIGVuc3VyZSB0aGF0IGFsbCBnbHlwaHMgd2lsbCBmaXQgaW5zaWRlIHRoZSBib3VuZHMuIFxuICpcbiAqIFRoZSByZXR1cm4gb2JqZWN0IGFsc28gaW5jbHVkZXMgYSBgZ2x5cGhzYCBwcm9wZXJ0eSwgd2hpY2ggaXMgdGhlIG51bWJlciBvZiBnbHlwaHNcbiAqIHRoYXQgYXJlIHZpc2libGUgd2l0aGluIHRoZSByZXR1cm5lZCBib3VuZHMuIFxuICpcbiAqIElmIGBvdXRgIGlzIHNwZWNpZmllZCAoYW4gb2JqZWN0IHdpdGggeCwgeSwgd2lkdGgsIGhlaWdodCwgYW5kIGdseXBoIHByb3BlcnRpZXMpLFxuICogaXQgd2lsbCBiZSByZS11c2VkLiBPdGhlcndpc2UgYSBuZXcgb2JqZWN0IGlzIGNyZWF0ZWQuXG4gKiBcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IHRvIGNoZWNrXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgdGhlIHN0YXJ0IHBvc2l0aW9uLCBkZWZhdWx0cyB0byAwXG4gKiBAcGFyYW0ge051bWJlcn0gZW5kIHRoZSBlbmQgcG9zaXRpb24sIGV4Y2x1c2l2ZSwgZGVmYXVsdHMgdG8gdGV4dCBsZW5ndGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBhdmFpbGFibGVXaWR0aCB0aGUgd2lkdGggYmVmb3JlIHN0b3BwaW5nIHRoZSBib3VuZCBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IG91dCBhbiBvYmplY3QgdG8gcmUtdXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBib3VuZHMgYW5kIGdseXBoIGNvdW50IHt4LHksd2lkdGgsaGVpZ2h0LGdseXBoc31cbiAqL1xuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24odGV4dCwgc3RhcnQsIGVuZCwgYXZhaWxhYmxlV2lkdGgsIG91dCkge1xuICAgIGlmICghb3V0KVxuICAgICAgICBvdXQgPSB7IHg6MCwgeTowLCB3aWR0aDogMCwgaGVpZ2h0OiAwLCBnbHlwaHM6IDAgfTtcblxuICAgIHZhciBjaGVja1dpZHRoID0gYXZhaWxhYmxlV2lkdGg9PT0wfHxhdmFpbGFibGVXaWR0aDtcblxuICAgIHN0YXJ0ID0gc3RhcnR8fDA7XG4gICAgZW5kID0gZW5kPT09MHx8ZW5kID8gZW5kIDogdGV4dC5sZW5ndGg7XG5cbiAgICB2YXIgbWF4SGVpZ2h0ID0gMDtcblxuICAgIG91dC54ID0gMDtcbiAgICBvdXQueSA9IDA7XG4gICAgb3V0LmdseXBocyA9IDA7XG5cbiAgICB2YXIgb2xkUGVuWCA9IHRoaXMucGVuLngsXG4gICAgICAgIG9sZFBlblkgPSB0aGlzLnBlbi55LFxuICAgICAgICBvbGRPcmlnaW5YID0gdGhpcy5vcmlnaW4ueCxcbiAgICAgICAgb2xkT3JpZ2luWSA9IHRoaXMub3JpZ2luLnk7XG5cblxuICAgIHZhciBmb250ID0gdGhpcy5mb250O1xuICAgIHRoaXMuYmVnaW4oKTtcbiAgICBmb3IgKHZhciBpPXN0YXJ0OyBpPGVuZDsgaSsrKSB7XG4gICAgICAgIHZhciBjaHIgPSB0ZXh0LmNoYXJBdChpKTtcblxuICAgICAgICAvL3N0ZXAgdGhlIGl0ZXJhdG9yXG4gICAgICAgIHZhciBnbHlwaCA9IHRoaXMuc3RlcCh0ZXh0LCBpKTtcblxuICAgICAgICAvL2lmIHRoZSBnbHlwaCBpcyB2YWxpZCwgd2UgY2FuIGFkdmFuY2UgcGFzdCBpdCBhbmQgY2FsY3VsYXRlIG5ldyBoZWlnaHRcbiAgICAgICAgaWYgKGdseXBoKSB7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gKGdseXBoLmhlaWdodCkqdGhpcy5mb250U2NhbGU7XG5cbiAgICAgICAgICAgIG91dC55ID0gTWF0aC5tYXgob3V0LnksIHRoaXMuZm9udFNjYWxlKihnbHlwaC5oZWlnaHQtZ2x5cGguaGJ5KSk7XG5cbiAgICAgICAgICAgIG1heEhlaWdodCA9IE1hdGgubWF4KG1heEhlaWdodCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciBsYXN0QWR2YW5jZSA9IHRoaXMuYWR2YW5jZShnbHlwaCk7XG5cbiAgICAgICAgICAgIC8vaWYgd2UncmUgcGFzdCB0aGUgYXZhaWxhYmxlIHdpZHRoXG4gICAgICAgICAgICB2YXIgbmV3V2lkdGggPSB0aGlzLnBlbi54IC0gdGhpcy5vcmlnaW4ueDtcbiAgICAgICAgICAgIGlmIChjaGVja1dpZHRoICYmIChuZXdXaWR0aCAtIGF2YWlsYWJsZVdpZHRoID4gMC4wMDEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW4ueCAtPSBsYXN0QWR2YW5jZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0LmdseXBocysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW5kKCk7XG5cbiAgICBvdXQud2lkdGggPSB0aGlzLnBlbi54IC0gdGhpcy5vcmlnaW4ueDtcbiAgICBvdXQuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuXG4gICAgdGhpcy5wZW4ueCA9IG9sZFBlblg7XG4gICAgdGhpcy5wZW4ueSA9IG9sZFBlblk7XG4gICAgdGhpcy5vcmlnaW4ueCA9IG9sZE9yaWdpblg7XG4gICAgdGhpcy5vcmlnaW4ueSA9IG9sZE9yaWdpblk7XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHbHlwaEl0ZXJhdG9yOyIsIi8vIG1vZHVsZS5leHBvcnRzLnBvaW50c1RvUGl4ZWxzID0gZnVuY3Rpb24ocG9pbnRTaXplLCByZXNvbHV0aW9uKSB7XG4vLyBcdHJlc29sdXRpb24gPSB0eXBlb2YgcmVzb2x1dGlvbiA9PT0gXCJudW1iZXJcIiA/IHJlc29sdXRpb24gOiA3Mjtcbi8vIFx0cmV0dXJuIHBvaW50U2l6ZSAqIHJlc29sdXRpb24gLyA3Mjtcbi8vIH07XG5cbi8vIG1vZHVsZS5leHBvcnRzLmNvb3JkVG9QaXhlbCA9IGZ1bmN0aW9uKGNvb3JkLCBwaXhlbFNpemUsIGVtU2l6ZSkge1xuLy8gXHRlbVNpemUgPSB0eXBlb2YgZW1TaXplID09PSBcIm51bWJlclwiID8gZW1TaXplIDogMjA0ODtcbi8vIFx0cmV0dXJuIGNvb3JkICogcGl4ZWxTaXplIC8gZW1TaXplO1xuLy8gfTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHB0IHNpemUgdG8gcHggc2l6ZSwgbmFtZWx5IHVzZWZ1bCBmb3IgbWF0Y2hpbmdcbiAqIHNpemUgd2l0aCBDU1Mgc3R5bGVzLiBJZiBubyBEUEkgaXMgc3BlY2lmaWVkLCA5NiBpcyBhc3N1bWVkXG4gKiAoYXMgaXQgbGVhZHMgdG8gY29ycmVjdCByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzKS5cbiAqIFxuICogQHBhcmFtICB7TnVtYmVyfSBmb250U2l6ZSB0aGUgZGVzaXJlZCBmb250IHNpemUgaW4gcG9pbnRzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRwaSAgICAgIHRoZSBleHBlY3RlZCBEUEksIGdlbmVyYWxseSA5NiBmb3IgYnJvd3NlcnNcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgdGhlIHJvdW5kZWQgcGl4ZWwgZm9udCBzaXplXG4gKi9cbm1vZHVsZS5leHBvcnRzLnBvaW50VG9QaXhlbCA9IGZ1bmN0aW9uKGZvbnRTaXplLCBkcGkpIHtcbiAgICBkcGkgPSBkcGl8fGRwaT09PTAgPyBkcGkgOiA5NjtcbiAgICBmb250U2l6ZSA9IGZvbnRTaXplICogZHBpIC8gNzI7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZm9udFNpemUpO1xufTtcblxuLyoqXG4gKiBGb3IgdGhlIGdpdmVuIGZvbnQgYW5kIChwaXhlbCkgZm9udCBzaXplLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZVxuICogc2NhbGUgdGhhdCB3aWxsIG5lZWQgdG8gYmUgYXBwbGllZCB0byBFTSB1bml0cyAoaS5lLiBmb250IHBhdGhzKSBcbiAqIHRvIGhhdmUgdGhlIGZvbnQgcmVuZGVyIGF0IHRoZSBleHBlY3RlZCBzaXplIChpLmUuIHRvIG1hdGNoIHRoZSBicm93c2VyKS5cbiAqXG4gKiBJZiBubyBmb250IHNpemUgaXMgc3BlY2lmaWVkLCB3ZSB3aWxsIHVzZSB0aGUgZGVmYXVsdCBmb250IHNpemUgKHdoaWNoIGlzIGluIHBvaW50cylcbiAqIGFuZCBjb252ZXJ0IGl0IHRvIHBpeGVscy4gXG4gKiBcbiAqIEBwYXJhbSAge0ZvbnR9IGZvbnQgICAgIGEgZm9udCBvYmplY3QgZnJvbSB0aGUgZm9udHBhdGggdG9vbFxuICogQHBhcmFtICB7TnVtYmVyfSBmb250U2l6ZSB0aGUgZGVzaXJlZCBmb250IHNpemUsIGRlZmF1bHRzIHRvIHRoZSBmb250J3MgZGVmYXVsdCBzaXplXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHJldHVybnMgdGhlIHNjYWxlIGZvciB0aGlzIGZvbnQgc2l6ZSAgICAgICAgIFxuICovXG5tb2R1bGUuZXhwb3J0cy5nZXRQeFNjYWxlID0gZnVuY3Rpb24oZm9udCwgZm9udFNpemUpIHtcbiAgICBpZiAoZm9udC5iaXRtYXApXG4gICAgICAgIHJldHVybiAxLjA7XG5cbiAgICAvL0lmIG5vIGZvbnRTaXplIGlzIHNwZWNpZmllZCwgaXQgd2lsbCBqdXN0IGZhbGwgYmFjayB0byB1c2luZyB0aGUgZm9udCdzIG93biBzaXplIHdpdGggOTYgRFBJLlxuICAgIGZvbnRTaXplID0gdHlwZW9mIGZvbnRTaXplID09PSBcIm51bWJlclwiID8gZm9udFNpemUgOiB0aGlzLnBvaW50VG9QaXhlbChmb250LnNpemUpO1xuXG4gICAgLy9UYWtlcyBpbiBhIGZvbnQgc2l6ZSBpbiBQSVhFTFMgYW5kIGdpdmVzIHVzIHRoZSBleHBlY3RlZCBzY2FsaW5nIGZhY3RvclxuICAgIHZhciBzeiA9IGZvbnQudW5pdHNfcGVyX0VNLzY0O1xuICAgIHN6ID0gKHN6L2ZvbnQuc2l6ZSAqIGZvbnRTaXplKTtcblxuICAgIHJldHVybiAoKGZvbnQucmVzb2x1dGlvbiAqIDEvNzIgKiBzeikgLyBmb250LnVuaXRzX3Blcl9FTSk7XG59O1xuXG4vKipcbiAqIEZvciB0aGUgZ2l2ZW4gZm9udCBhbmQgKHBvaW50KSBmb250IHNpemUsIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlXG4gKiBzY2FsZSB0aGF0IHdpbGwgbmVlZCB0byBiZSBhcHBsaWVkIHRvIEVNIHVuaXRzIChpLmUuIGZvbnQgcGF0aHMpIFxuICogdG8gaGF2ZSB0aGUgZm9udCByZW5kZXIgYXQgdGhlIGV4cGVjdGVkIHNpemUgKGkuZS4gdG8gbWF0Y2ggdGhlIGJyb3dzZXIpLlxuICogXG4gKiBJZiBubyBmb250IHNpemUgaXMgc3BlY2lmaWVkLCB3ZSB3aWxsIHVzZSB0aGUgZGVmYXVsdCBmb250IHNpemUuXG4gKiBcbiAqIEBwYXJhbSAge0ZvbnR9IGZvbnQgICAgICAgYSBmb250IG9iamVjdCBmcm9tIHRoZSBmb250cGF0aCB0b29sXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGZvbnRTaXplIHRoZSBkZXNpcmVkIGZvbnQgc2l6ZSwgZGVmYXVsdHMgdG8gdGhlIGZvbnQncyBkZWZhdWx0IHNpemVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgdGhlIHNjYWxlIGZvciB0aGlzIGZvbnQgc2l6ZVxuICovXG5tb2R1bGUuZXhwb3J0cy5nZXRQdFNjYWxlID0gZnVuY3Rpb24oZm9udCwgZm9udFNpemUpIHtcbiAgICBmb250U2l6ZSA9IHR5cGVvZiBmb250U2l6ZSA9PT0gXCJudW1iZXJcIiA/IGZvbnRTaXplIDogZm9udC5zaXplO1xuICAgIGZvbnRTaXplID0gdGhpcy5wb2ludFRvUGl4ZWwoZm9udFNpemUpO1xuICAgIHJldHVybiB0aGlzLmdldFB4U2NhbGUoZm9udCwgZm9udFNpemUpO1xufTtcbiIsInZhciB0bXBCb3VuZHMgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsIGdseXBoczogMCB9O1xuXG5mdW5jdGlvbiBpc1doaXRlc3BhY2UoY2hyKSB7XG5cdHJldHVybiBjaHI9PT0nICdcblx0XHR8fCBjaHI9PT0nXFxuJ1xuXHRcdHx8IGNocj09PSdcXHInXG5cdFx0fHwgY2hyPT09J1xcdCc7XG59XG5cbmZ1bmN0aW9uIGlkeE9mKHRleHQsIGNociwgc3RhcnQsIGVuZCkge1xuXHR2YXIgaWR4ID0gdGV4dC5pbmRleE9mKGNociwgc3RhcnQpO1xuXHRpZiAoaWR4ID09PSAtMSB8fCBpZHggPiBlbmQpXG5cdFx0cmV0dXJuIGVuZDtcblx0cmV0dXJuIGlkeDtcbn1cblxuZnVuY3Rpb24gV29yZFdyYXAodGV4dCkge1xuXHQvKipcblx0ICogVGhlIHRleHQgYmVpbmcgb3BlcmF0ZWQgb24uXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG5cdCAqL1xuXHR0aGlzLnRleHQgPSB0ZXh0fHxcIlwiO1xuXG5cdC8qKlxuXHQgKiBBbiBhcnJheSBvZiBsaW5lcyByZXByZXNlbnRpbmcgdGhlIHN0YXRlIG9mIHRoaXMgd29yZCB3cmFwcGVyLlxuXHQgKiBAcGFyYW0ge0FycmF5fSBsaW5lc1xuXHQgKi9cblx0dGhpcy5saW5lcyA9IFtdO1xuXG5cdC8qKiBcblx0ICogVGhlIG5ld2xpbmUgY2hhcmFjdGVyIHRvIGJyZWFrIG9uLCBkZWZhdWx0ICdcXG4nXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuZXdsaW5lXG5cdCAqL1xuXHR0aGlzLm5ld2xpbmUgPSAnXFxuJztcblxuXHQvKipcblx0ICogV2hldGhlciB0byBjbGlwIG5vbi1icmVha2luZyB0ZXh0IChub3dyYXAgYW5kIHByZSlcblx0ICogaWYgdGhlIHdyYXBXaWR0aCBpcyB0b28gc21hbGwuIFxuXHQgKiAgXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xpcFxuXHQgKi9cblx0dGhpcy5jbGlwID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIFRoZSBtb2RlIGZvciB3b3Jkd3JhcHBpbmc6ICdwcmUnLCAnbm9ybWFsJywgb3IgJ25vd3JhcCcuXG5cdCAqXG5cdCAqIFlvdSBjYW4gYWxzbyB1c2UgdGhlIGBQUkVgLCBgTk9STUFMYCwgYW5kIGBOT1dSQVBgIGNvbnN0YW50c1xuXHQgKiBpbiBgV29yZFdyYXAuTW9kZWAuXG5cdCAqIFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbW9kZVxuXHQgKi9cblx0dGhpcy5tb2RlID0gV29yZFdyYXAuTW9kZS5OT1JNQUw7XG59XG5cbldvcmRXcmFwLk1vZGUgPSB7XG5cdFBSRTogJ3ByZScsICAgICAgIC8vd2hpdGVzcGFjZSBpc24ndCBjb2xsYXBzZWRcblx0Tk9STUFMOiAnbm9ybWFsJywgLy93aGl0ZXNwYWNlIGlzIGNvbGxhcHNlZFxuXHROT1dSQVA6ICdub3dyYXAnICAvL29ubHkgYnJlYWsgb24gJ1xcbidcbn07XG5cbi8qKlxuICogQ2xlYXJzIGFueSBtdWx0aS1saW5lIGxheW91dCBieSBwbGFjaW5nIGFsbCB0aGUgdGV4dCBpbiBhIHNpbmdsZSBMaW5lIG9iamVjdC5cbiAqIFxuICogQHBhcmFtIHtHbHlwaEl0ZXJhdG9yfSBpdGVyYXRvciB0aGUgaXRlcmF0b3IgdG8gdXNlIFxuICogQG1ldGhvZCAgY2xlYXJMYXlvdXRcbiAqL1xuV29yZFdyYXAucHJvdG90eXBlLmNsZWFyTGF5b3V0ID0gZnVuY3Rpb24oaXRlcmF0b3IpIHtcblx0dGhpcy5saW5lcy5sZW5ndGggPSAwO1xuXHRcblx0aWYgKHRoaXMudGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0aXRlcmF0b3IuZ2V0Qm91bmRzKHRoaXMudGV4dCwgMCwgdGhpcy50ZXh0Lmxlbmd0aCwgdW5kZWZpbmVkLCB0bXBCb3VuZHMpO1xuXHRcdFxuXHRcdHZhciBsaW5lID0gbmV3IFdvcmRXcmFwLkxpbmUoMCwgdGhpcy50ZXh0Lmxlbmd0aCwgdG1wQm91bmRzLndpZHRoKTtcblx0XHR0aGlzLmxpbmVzLnB1c2gobGluZSk7XG5cdH1cbn07XG5cbi8qKlxuICogUmVzZXRzIHRoZSB3b3JkIHdyYXBwZXIgYnkgZW1wdHlpbmcgYWxsIGN1cnJlbnQgbGluZXMuXG4gKiBAbWV0aG9kICBlbXB0eVxuICovXG5Xb3JkV3JhcC5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5saW5lcy5sZW5ndGggPSAwO1xufTtcblxuLyoqXG4gKiBXb3JkLXdyYXBzIHRoZSBnaXZlbiB0ZXh0IGludG8gbXVsdGlwbGUgbGluZXMuXG4gKiBAcGFyYW0gIHtbdHlwZV19IGl0ZXJhdG9yIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gd2lkdGggICAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSBzdGFydCAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGVuZCAgICAgIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5Xb3JkV3JhcC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24oaXRlcmF0b3IsIHdyYXBXaWR0aCwgc3RhcnQsIGVuZCkge1xuXHR2YXIgdGV4dCA9IHRoaXMudGV4dDtcblxuXHR2YXIgbGluZXMgPSB0aGlzLmxpbmVzO1xuXG5cdHN0YXJ0ID0gTWF0aC5tYXgoMCwgc3RhcnR8fDApO1xuXHRlbmQgPSAoZW5kPT09MHx8ZW5kKSA/IGVuZCA6IHRleHQubGVuZ3RoO1xuXG5cdGl0ZXJhdG9yLmJlZ2luKCk7XG5cblx0Ly9kZWZhdWx0IHdyYXAgd2lkdGguLi5cblx0d3JhcFdpZHRoID0gKHdyYXBXaWR0aD09PTAgfHwgd3JhcFdpZHRoKSA/IHdyYXBXaWR0aCA6IE51bWJlci5NQVhfVkFMVUU7XG5cblx0Ly88cHJlPiBtb2RlIGp1c3QgdXNlcyBhIHNpbXBsZSBhbGdvcml0aG0uLi5cblx0aWYgKHRoaXMubW9kZSA9PT0gV29yZFdyYXAuTW9kZS5QUkUpIHtcblx0XHR2YXIgbGluZVN0YXJ0ID0gc3RhcnQ7XG5cdFx0Zm9yICh2YXIgaT1zdGFydDsgaTxlbmQ7IGkrKykge1xuXHRcdFx0dmFyIGNociA9IHRleHQuY2hhckF0KGkpO1xuXG5cdFx0XHQvL0lmIHdlJ3ZlIHJlYWNoZWQgYSBuZXdsaW5lLCB0aGVuIHN0ZXAgZG93biBhIGxpbmVcblx0XHRcdC8vT3IgaWYgd2UndmUgcmVhY2hlZCB0aGUgRU9GXG5cdFx0XHRpZiAoIGNociA9PT0gdGhpcy5uZXdsaW5lIHx8IGk9PT1lbmQtMSkge1xuXHRcdFx0XHR2YXIgYXZhaWxhYmxlV2lkdGggPSB0aGlzLmNsaXAgPyB3cmFwV2lkdGggOiB1bmRlZmluZWQ7XG5cdFx0XHRcdGl0ZXJhdG9yLmdldEJvdW5kcyh0ZXh0LCBsaW5lU3RhcnQsIGkrMSwgYXZhaWxhYmxlV2lkdGgsIHRtcEJvdW5kcyk7XG5cdFx0XHRcdGxpbmVzLnB1c2goIG5ldyBXb3JkV3JhcC5MaW5lKGxpbmVTdGFydCwgbGluZVN0YXJ0K3RtcEJvdW5kcy5nbHlwaHMsIHRtcEJvdW5kcy53aWR0aCkgKTtcblx0XHRcdFx0bGluZVN0YXJ0ID0gaSsxO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBcblx0Ly8nbm9ybWFsJyBtb2RlIHVzZXMgTGliR0RYJ3Mgd29yZCB3cmFwcGluZyBhbGdvcml0aG06XG5cdC8vaHR0cHM6Ly9naXRodWIuY29tL2xpYmdkeC9saWJnZHgvYmxvYi9tYXN0ZXIvZ2R4L3NyYy9jb20vYmFkbG9naWMvZ2R4L2dyYXBoaWNzL2cyZC9CaXRtYXBGb250Q2FjaGUuamF2YVxuXHRlbHNlIHtcblx0XHQvL2lmICdub3dyYXAnIGlzIHNwZWNpZmllZCwgd2Ugb25seSB3cmFwIG9uIG5ld2xpbmUgY2hhcnNcblx0XHRcblx0XHR2YXIgdGVzdFdpZHRoID0gd3JhcFdpZHRoO1xuXHRcdGlmICh0aGlzLm1vZGUgPT09IFdvcmRXcmFwLk1vZGUuTk9XUkFQKSB7XG5cdFx0XHR0ZXN0V2lkdGggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXHRcdH1cblxuXHRcdHdoaWxlIChzdGFydCA8IGVuZCkge1xuXHRcdFx0Ly9nZXQgbmV4dCBuZXdsaW5lIHBvc2l0aW9uXG5cdFx0XHR2YXIgbmV3TGluZSA9IGlkeE9mKHRleHQsIHRoaXMubmV3bGluZSwgc3RhcnQsIGVuZCk7XG5cblx0XHRcdC8vZWF0IHdoaXRlc3BhY2UgYXQgc3RhcnQgb2YgbGluZVxuXHRcdFx0d2hpbGUgKHN0YXJ0IDwgbmV3TGluZSkge1xuXHRcdFx0XHRpZiAoIWlzV2hpdGVzcGFjZSggdGV4dC5jaGFyQXQoc3RhcnQpICkpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdHN0YXJ0Kys7XG5cdFx0XHR9XG5cblx0XHRcdC8vZGV0ZXJtaW5lIHZpc2libGUgIyBvZiBnbHlwaHMgZm9yIHRoZSBhdmFpbGFibGUgd2lkdGhcblx0XHRcdGl0ZXJhdG9yLmdldEJvdW5kcyh0ZXh0LCBzdGFydCwgbmV3TGluZSwgdGVzdFdpZHRoLCB0bXBCb3VuZHMpXG5cblx0XHRcdHZhciBsaW5lRW5kID0gc3RhcnQgKyB0bXBCb3VuZHMuZ2x5cGhzO1xuXHRcdFx0dmFyIG5leHRTdGFydCA9IGxpbmVFbmQgKyB0aGlzLm5ld2xpbmUubGVuZ3RoO1xuXG5cdFx0XHQvL2lmIHdlIGhhZCB0byBjdXQgdGhlIGxpbmUgYmVmb3JlIHRoZSBuZXh0IG5ld2xpbmUuLi5cblx0XHRcdGlmIChsaW5lRW5kIDwgbmV3TGluZSkge1xuXHRcdFx0XHQvL2ZpbmQgY2hhciB0byBicmVhayBvblxuXHRcdFx0XHR3aGlsZSAobGluZUVuZCA+IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKGlzV2hpdGVzcGFjZSh0ZXh0LmNoYXJBdChsaW5lRW5kKSkpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRsaW5lRW5kLS07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGxpbmVFbmQgPT09IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKG5leHRTdGFydCA+IHN0YXJ0ICsgdGhpcy5uZXdsaW5lLmxlbmd0aCkgbmV4dFN0YXJ0LS07XG5cdFx0XHRcdFx0bGluZUVuZCA9IG5leHRTdGFydDsgLy8gSWYgbm8gY2hhcmFjdGVycyB0byBicmVhaywgc2hvdyBhbGwuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV4dFN0YXJ0ID0gbGluZUVuZDtcblx0XHRcdFx0XHQvL2VhdCB3aGl0ZXNwYWNlIGF0IGVuZCBvZiBsaW5lXG5cdFx0XHRcdFx0d2hpbGUgKGxpbmVFbmQgPiBzdGFydCkge1xuXHRcdFx0XHRcdFx0aWYgKCFpc1doaXRlc3BhY2UodGV4dC5jaGFyQXQobGluZUVuZCAtIHRoaXMubmV3bGluZS5sZW5ndGgpKSlcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRsaW5lRW5kLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChsaW5lRW5kID4gc3RhcnQpIHtcblx0XHRcdFx0Ly90byBjbGlwLCB1c2UgdGhlIG9yaWdpbmFsIHdyYXAgd2lkdGggKHVuYWx0ZXJlZCBieSBtb2RlKVxuXHRcdFx0XHR2YXIgYXZhaWxhYmxlV2lkdGggPSB0aGlzLmNsaXAgPyB3cmFwV2lkdGggOiB1bmRlZmluZWQ7XG5cdFx0XHRcdGl0ZXJhdG9yLmdldEJvdW5kcyh0ZXh0LCBzdGFydCwgbGluZUVuZCwgYXZhaWxhYmxlV2lkdGgsIHRtcEJvdW5kcyk7XG5cdFx0XHRcdHZhciBsaW5lV2lkdGggPSB0bXBCb3VuZHMud2lkdGg7XG5cblx0XHRcdFx0dmFyIHJMaW5lRW5kID0gdGhpcy5jbGlwID8gc3RhcnQrdG1wQm91bmRzLmdseXBocyA6IGxpbmVFbmQ7XG5cdFx0XHRcdGxpbmVzLnB1c2goIG5ldyBXb3JkV3JhcC5MaW5lKHN0YXJ0LCByTGluZUVuZCwgbGluZVdpZHRoKSApO1xuXHRcdFx0fVxuXHRcdFx0c3RhcnQgPSBuZXh0U3RhcnQ7XG5cblx0XHR9XG5cdH1cblxuXHRpdGVyYXRvci5lbmQoKTtcbn07XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBtZXRob2QgdG8gcmV0dXJuIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGFsbCBjdXJyZW50IGxpbmVzLlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIGFsaWduaW5nIGJsb2NrcyBvZiB0ZXh0LlxuICpcbiAqIEBtZXRob2QgIGdldE1heExpbmVXaWR0aFxuICogQHJldHVybiB7TnVtYmVyfSB0aGUgbWF4aW11bSB3aWR0aCBvZiBhbGwgbGluZXNcbiAqL1xuV29yZFdyYXAucHJvdG90eXBlLmdldE1heExpbmVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbWF4V2lkdGggPSAwO1xuXHRmb3IgKHZhciBpPTA7IGk8dGhpcy5saW5lcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBsaW5lID0gdGhpcy5saW5lc1tpXTtcblx0XHRtYXhXaWR0aCA9IE1hdGgubWF4KGxpbmUud2lkdGgsIG1heFdpZHRoKTtcblx0fVxuXHRyZXR1cm4gbWF4V2lkdGg7XG59O1xuXG4vKipcbiAqIFRoZSBMaW5lIG9iamVjdCBob2xkcyB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzIGludG8gdGhlIHN0cmluZyxcbiAqIGFuZCB0aGUgd2lkdGggYXMgY29tcHV0ZWQgYnkgR2x5cGhJdGVyYXRvci5cbiAqIFxuICogQGNsYXNzICBXb3JkV3JhcC5MaW5lXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgdGhlIHN0YXJ0IGluZGV4LCBpbmNsdXNpdmVcbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmQgICB0aGUgZW5kIGluZGV4LCBleGNsdXNpdmVcbiAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCB0aGUgY29tcHV0ZWQgd2lkdGggb2YgdGhpcyBsaW5lXG4gKi9cbldvcmRXcmFwLkxpbmUgPSBmdW5jdGlvbihzdGFydCwgZW5kLCB3aWR0aCkge1xuXHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdHRoaXMuZW5kID0gZW5kO1xuXHR0aGlzLndpZHRoID0gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmRXcmFwOyIsInZhciBjcmVhdGVWQU8gPSByZXF1aXJlKCdnbC1hbGlhc2VkLXZhbycpIC8vVE9ETzogaW1wcm92ZSB0aGlzIHdpdGggZ2wtdmFvXG52YXIgY3JlYXRlQnVmZmVyID0gcmVxdWlyZSgnZ2wtYnVmZmVyJylcblxubW9kdWxlLmV4cG9ydHMuZmxvYXRzUGVyVmVydGV4ID0gNVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRpY2VzKGNhcGFjaXR5KSB7XG4gICAgdmFyIG51bUluZGljZXMgPSBjYXBhY2l0eSAqIDZcbiAgICB2YXIgaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShudW1JbmRpY2VzKVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbnVtSW5kaWNlczsgaSArPSA2LCBqICs9IDQpIHtcbiAgICAgICAgaW5kaWNlc1tpICsgMF0gPSBqICsgMFxuICAgICAgICBpbmRpY2VzW2kgKyAxXSA9IGogKyAxXG4gICAgICAgIGluZGljZXNbaSArIDJdID0gaiArIDJcbiAgICAgICAgaW5kaWNlc1tpICsgM10gPSBqICsgMFxuICAgICAgICBpbmRpY2VzW2kgKyA0XSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbaSArIDVdID0gaiArIDNcbiAgICB9XG4gICAgcmV0dXJuIGluZGljZXNcbn1cblxubW9kdWxlLmV4cG9ydHMubWl4aW5zID0ge1xuXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUob3B0KSB7XG4gICAgICAgIG9wdCA9IG9wdHx8e31cbiAgICAgICAgdGhpcy5jbGVhcigpXG5cbiAgICAgICAgLy9kaXNwb3NlIGJlZm9yZSBidWlsZGluZy4uLlxuICAgICAgICBpZiAodGhpcy52YW8pXG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKVxuXG4gICAgICAgIHZhciBjYXBhY2l0eSA9IHR5cGVvZiBvcHQuY2FwYWNpdHkgPT09ICdudW1iZXInID8gb3B0LmNhcGFjaXR5IDogMTAwXG5cbiAgICAgICAgLy8gNjU1MzUgaXMgbWF4IGluZGV4LCBzbyA2NTUzNSAvIDYgPSAxMDkyMi5cbiAgICAgICAgaWYgKGNhcGFjaXR5ID4gMTA5MjIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBoYXZlIG1vcmUgdGhhbiAxMDkyMiBxdWFkcyBwZXIgYmF0Y2g6IFwiICsgY2FwYWNpdHkpXG5cbiAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBjYXBhY2l0eVxuXG4gICAgICAgIC8vdGhlIHRvdGFsIG51bWJlciBvZiBmbG9hdHMgaW4gb3VyIGJhdGNoXG4gICAgICAgIHZhciBudW1WZXJ0cyA9IGNhcGFjaXR5ICogNCAqIG1vZHVsZS5leHBvcnRzLmZsb2F0c1BlclZlcnRleFxuXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KG51bVZlcnRzKVxuICAgICAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKGNhcGFjaXR5KVxuXG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgICAgdmFyIHVzYWdlID0gb3B0LmR5bmFtaWMgPyBnbC5EWU5BTUlDX0RSQVcgOiBnbC5TVEFUSUNfRFJBV1xuICAgICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGNyZWF0ZUJ1ZmZlcihnbCwgdGhpcy52ZXJ0aWNlcywgZ2wuQVJSQVlfQlVGRkVSLCB1c2FnZSlcbiAgICAgICAgdGhpcy5pbmRleEJ1ZmZlciA9IGNyZWF0ZUJ1ZmZlcihnbCwgdGhpcy5pbmRpY2VzLCBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgZ2wuU1RBVElDX0RSQVcpXG5cbiAgICAgICAgdmFyIHN0cmlkZSA9IDUgKiA0XG4gICAgICAgIHRoaXMudmFvID0gY3JlYXRlVkFPKGdsLCBbeyAvL3Bvc2l0aW9uIFhZXG4gICAgICAgICAgICBuYW1lOiAncG9zaXRpb24nLFxuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnZlcnRleEJ1ZmZlcixcbiAgICAgICAgICAgIHNpemU6IDIsXG4gICAgICAgICAgICBzdHJpZGU6IHN0cmlkZVxuICAgICAgICB9LCB7IC8vdGV4Y29vcmQgVVZcbiAgICAgICAgICAgIG5hbWU6ICd0ZXhjb29yZDAnLFxuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnZlcnRleEJ1ZmZlcixcbiAgICAgICAgICAgIHNpemU6IDIsXG4gICAgICAgICAgICBvZmZzZXQ6IDIgKiA0LFxuICAgICAgICAgICAgc3RyaWRlOiBzdHJpZGVcbiAgICAgICAgfSwgeyAvL2NvbG9yIChwYWNrZWQpIENcbiAgICAgICAgICAgIG5hbWU6ICdjb2xvcicsXG4gICAgICAgICAgICBidWZmZXI6IHRoaXMudmVydGV4QnVmZmVyLFxuICAgICAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgICAgIHN0cmlkZTogc3RyaWRlLFxuICAgICAgICAgICAgb2Zmc2V0OiA0ICogNCxcbiAgICAgICAgICAgIHR5cGU6IGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICAgICAgICBub3JtYWxpemVkOiB0cnVlXG4gICAgICAgIH1dLCB0aGlzLmluZGV4QnVmZmVyKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBlbnN1cmVDYXBhY2l0eTogZnVuY3Rpb24oY2FwYWNpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FwYWNpdHkgPCBjYXBhY2l0eSlcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKHsgY2FwYWNpdHk6IGNhcGFjaXR5IH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsInZhciBjb2xvclRvRmxvYXQgPSByZXF1aXJlKCcuL3BhY2stcmdiYS1mbG9hdCcpXG52YXIgbWl4ZXMgPSByZXF1aXJlKCdtaXhlcycpXG52YXIgcHJlbXVsdCA9IHJlcXVpcmUoJ3ByZW11bHRpcGxpZWQtcmdiYScpXG52YXIgV2hpdGVUZXggPSByZXF1aXJlKCdnbC13aGl0ZS10ZXh0dXJlJylcblxudmFyIHZlcnROdW1GbG9hdHMgPSByZXF1aXJlKCcuL2NvbW1vbicpLmZsb2F0c1BlclZlcnRleFxuXG4vL1RlbXBvcmFyeSBhcnJheXMgdG8gYXZvaWQgR0MgdGhyYXNoaW5nXG52YXIgcG9zaXRpb24gPSBbMCwgMF0sXG4gICAgc2hhcGUgPSBbMCwgMF0sXG4gICAgdGV4Y29vcmQgPSBbMCwgMCwgMCwgMF0sXG4gICAgY29sb3IgPSBbMCwgMCwgMCwgMF1cblxudmFyIHRtcDQgPSBbMCwgMCwgMCwgMF0sXG4gICAgcm90T3JpZ2luID0gWzAsIDBdLFxuICAgIHRtcDIgPSBbMCwgMF1cblxuZnVuY3Rpb24gU3ByaXRlQmF0Y2goZ2wsIG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTcHJpdGVCYXRjaCkpXG4gICAgICAgIHJldHVybiBuZXcgU3ByaXRlQmF0Y2goZ2wsIG9wdClcbiAgICBpZiAoIWdsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtdXN0IHNwZWNpZnkgZ2wgY29udGV4dFwiKVxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIG9wdCA9IG9wdCB8fCB7fVxuICAgIFxuICAgIHRoaXMuX2JvdW5kID0gZmFsc2VcbiAgICB0aGlzLmlkeCA9IDBcblxuICAgIC8vbm8gdHJhbnNmb3JtIG1lYW5zIGlkZW50aXR5XG4gICAgdGhpcy50cmFuc2Zvcm0gPSBudWxsXG5cbiAgICAvL3doaXRlIHRleHR1cmUgaXMgYWtpbiB0byBcIm5vIHRleHR1cmVcIiAod2l0aG91dCBzd2l0Y2hpbmcgc2hhZGVycylcbiAgICB0aGlzLl9kZWZhdWx0VGV4dHVyZSA9IFdoaXRlVGV4KGdsKVxuICAgIHRoaXMuX2xhc3RUZXh0dXJlID0gdGhpcy5fZGVmYXVsdFRleHR1cmVcbiAgICB0aGlzLl90ZXh0dXJlID0gdGhpcy5fZGVmYXVsdFRleHR1cmVcbiAgICB0aGlzLnRleHR1cmUgPSBudWxsXG5cbiAgICB0aGlzLm1vZGUgPSB0eXBlb2Ygb3B0Lm1vZGUgPT09ICdudW1iZXInID8gb3B0Lm1vZGUgOiBnbC5UUklBTkdMRVNcbiAgICB0aGlzLnByZW11bHRpcGxpZWQgPSBvcHQucHJlbXVsdGlwbGllZCB8fCBmYWxzZVxuXG4gICAgdGhpcy5fZGlydHkgPSB0cnVlXG4gICAgdGhpcy5jcmVhdGUob3B0KVxuXG4gICAgLy9zZXQgZGVmYXVsdCBhdHRyaWJ1dGVzXG4gICAgdGhpcy5kZWZhdWx0cygpXG59XG5cbi8vbWl4IGluIGNyZWF0ZSgpIGFuZCBlbnN1cmVDYXBhY2l0eSgpIGZ1bmN0aW9uc1xubWl4ZXMoU3ByaXRlQmF0Y2gsIHJlcXVpcmUoJy4vY29tbW9uJykubWl4aW5zKVxuXG5taXhlcyhTcHJpdGVCYXRjaCwge1xuXG4gICAgY2FwYWNpdHk6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHRleHR1cmU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbih0ZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmUgPSB0ZXggfHwgdGhpcy5fZGVmYXVsdFRleHR1cmVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNwb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMudmVydGV4QnVmZmVyKVxuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIuZGlzcG9zZSgpXG4gICAgICAgIGlmICh0aGlzLmluZGV4QnVmZmVyKVxuICAgICAgICAgICAgdGhpcy5pbmRleEJ1ZmZlci5kaXNwb3NlKClcbiAgICAgICAgaWYgKHRoaXMudmFvKVxuICAgICAgICAgICAgdGhpcy52YW8uZGlzcG9zZSgpXG4gICAgfSxcblxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pZHggPSAwXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGJpbmQ6IGZ1bmN0aW9uKHNoYWRlcikge1xuICAgICAgICBzaGFkZXIuYmluZCgpXG4gICAgICAgIHRoaXMudmFvLmJpbmQoc2hhZGVyKVxuICAgICAgICB0aGlzLl9ib3VuZCA9IHRydWVcbiAgICB9LFxuXG4gICAgdW5iaW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy52YW8udW5iaW5kKClcbiAgICAgICAgdGhpcy5fYm91bmQgPSBmYWxzZVxuICAgIH0sXG5cbiAgICBkZWZhdWx0czogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBjb3B5Mihwb3NpdGlvbiwgMCwgMClcbiAgICAgICAgdGhpcy50ZXhjb29yZCA9IGNvcHk0KHRleGNvb3JkLCAwLCAwLCAxLCAxKVxuICAgICAgICB0aGlzLmNvbG9yID0gY29weTQoY29sb3IsIDEsIDEsIDEsIDEpXG4gICAgICAgIHRoaXMuc2hhcGUgPSBjb3B5MihzaGFwZSwgMCwgMClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgcHVzaDogZnVuY3Rpb24oc3ByaXRlKSB7XG4gICAgICAgIC8vaWYgd2UgYXJlIGRlZmluaW5nIGF0dHJpYnV0ZXMgb24gdGhlIGZseVxuICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBzcHJpdGUudGV4dHVyZVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHNwcml0ZS5wb3NpdGlvbiB8fCBjb3B5Mihwb3NpdGlvbiwgMCwgMClcbiAgICAgICAgICAgIHRoaXMudGV4Y29vcmQgPSBzcHJpdGUudGV4Y29vcmQgfHwgY29weTQodGV4Y29vcmQsIDAsIDAsIDEsIDEpXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gc3ByaXRlLmNvbG9yIHx8IGNvcHk0KGNvbG9yLCAxLCAxLCAxLCAxKVxuICAgICAgICAgICAgdGhpcy5zaGFwZSA9IHNwcml0ZS5zaGFwZSB8fCBjb3B5MihzaGFwZSwgMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRleHR1cmUgIT09IHRoaXMuX2xhc3RUZXh0dXJlKSB7XG4gICAgICAgICAgICAvL25ldyB0ZXh0dXJlLCBmbHVzaCBwcmV2aW91cyBkYXRhXG4gICAgICAgICAgICBpZiAodGhpcy5fYm91bmQpXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVzaCgpXG4gICAgICAgICAgICB0aGlzLl9sYXN0VGV4dHVyZSA9IHRoaXMudGV4dHVyZVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWR4ID09PSB0aGlzLnZlcnRpY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy9pZiB3ZSBBUkVOJ1QgYm91bmQsIHdlIG5lZWQgdG8gc3RvcCBwdXNoaW5nIHZlcnRleCBkYXRhIVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9ib3VuZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xuXG4gICAgICAgICAgICAvL2lmIHdlIEFSRSBib3VuZCwgd2UgY2FuIGZsdXNoIHRoZSBiYXRjaCBhbmQgY29udGludWUgZHJhd2luZ1xuICAgICAgICAgICAgdGhpcy5mbHVzaCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWVcblxuICAgICAgICAvL2dldCBSR0JBIGNvbXBvbmVudHMgYW5kIHBhY2sgaW50byBhIHNpbmdsZSBmbG9hdFxuICAgICAgICB2YXIgY29sb3JSR0JBID0gdGhpcy5wcmVtdWx0aXBsaWVkID8gcHJlbXVsdCh0aGlzLmNvbG9yLCB0bXA0KSA6IHRoaXMuY29sb3JcbiAgICAgICAgdmFyIGMgPSBjb2xvclRvRmxvYXQoY29sb3JSR0JBKVxuXG4gICAgICAgIHZhciB1MSA9IHRoaXMudGV4Y29vcmRbMF0sXG4gICAgICAgICAgICB2MSA9IHRoaXMudGV4Y29vcmRbMV0sXG4gICAgICAgICAgICB1MiA9IHRoaXMudGV4Y29vcmRbMl0sXG4gICAgICAgICAgICB2MiA9IHRoaXMudGV4Y29vcmRbM11cblxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb25bMF0sXG4gICAgICAgICAgICB5ID0gdGhpcy5wb3NpdGlvblsxXSxcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5zaGFwZVswXSxcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuc2hhcGVbMV1cblxuICAgICAgICB0aGlzLl92ZXJ0KHgsIHksIHUxLCB2MSwgYylcbiAgICAgICAgdGhpcy5fdmVydCh4K3dpZHRoLCB5LCB1MiwgdjEsIGMpXG4gICAgICAgIHRoaXMuX3ZlcnQoeCt3aWR0aCwgeStoZWlnaHQsIHUyLCB2MiwgYylcbiAgICAgICAgdGhpcy5fdmVydCh4LCB5K2hlaWdodCwgdTEsIHYyLCBjKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgX3ZlcnQ6IGZ1bmN0aW9uKHgxLCB5MSwgdTEsIHYxLCBjKSB7XG4gICAgICAgIHZhciBpZHggPSB0aGlzLmlkeCxcbiAgICAgICAgICAgIHZlcnRzID0gdGhpcy52ZXJ0aWNlcyxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtXG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgdmFyIHggPSB4MSwgeSA9IHkxXG4gICAgICAgICAgICB4MSA9IHRyYW5zZm9ybVswXSAqIHggKyB0cmFuc2Zvcm1bNF0gKiB5ICsgdHJhbnNmb3JtWzEyXVxuICAgICAgICAgICAgeTEgPSB0cmFuc2Zvcm1bMV0gKiB4ICsgdHJhbnNmb3JtWzVdICogeSArIHRyYW5zZm9ybVsxM11cbiAgICAgICAgfVxuXG4gICAgICAgIC8veHlcbiAgICAgICAgdmVydHNbaWR4KytdID0geDFcbiAgICAgICAgdmVydHNbaWR4KytdID0geTFcbiAgICAgICAgLy91dlxuICAgICAgICB2ZXJ0c1tpZHgrK10gPSB1MVxuICAgICAgICB2ZXJ0c1tpZHgrK10gPSB2MVxuICAgICAgICAvL2NvbG9yXG4gICAgICAgIHZlcnRzW2lkeCsrXSA9IGNcbiAgICAgICAgdGhpcy5pZHggPSBpZHhcbiAgICB9LFxuXG4gICAgZmx1c2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICByZXR1cm4gdGhpcy5jbGVhcigpXG4gICAgfSxcblxuICAgIGRyYXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL0lmIHdlJ3ZlIHJlYWNoZWQgYSBuZXcgdGV4dHVyZSBvciBjYXBhY2l0eVxuICAgICAgICAvL3doaWxlIG5vdCBib3VuZCwgdGhlbiB3ZSB3aWxsIGp1c3QgY2xlYXIgdGhlIGJhdGNoXG4gICAgICAgIC8vdG8gemVybyBhbmQgZHJhdyBub3RoaW5nXG4gICAgICAgIGlmICh0aGlzLmlkeCA9PT0gMCB8fCAhdGhpcy5fYm91bmQpXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuXG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9kaXJ0eSkge1xuICAgICAgICAgICAgdmFyIHZpZXcgPSB0aGlzLnZlcnRpY2VzLnN1YmFycmF5KDAsIHRoaXMuaWR4KVxuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIudXBkYXRlKHZpZXcsIDApXG4gICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbGFzdFRleHR1cmUpXG4gICAgICAgICAgICB0aGlzLl9sYXN0VGV4dHVyZS5iaW5kKClcbiAgICAgICAgdGhpcy5fbGFzdFRleHR1cmUgPSB0aGlzLnRleHR1cmVcblxuICAgICAgICB2YXIgc3ByaXRlcyA9ICh0aGlzLmlkeCAvICh2ZXJ0TnVtRmxvYXRzICogNCkpXG4gICAgICAgIGlmIChzcHJpdGVzID4gMClcbiAgICAgICAgICAgIHRoaXMudmFvLmRyYXcodGhpcy5tb2RlLCBzcHJpdGVzICogNiwgMClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGVCYXRjaFxuXG4vL1RPRE86IHdpbGwgdXNlIG1vZHVsYXIgZ2wtbWF0cml4IGZvciB0aGVzZS4uLlxuZnVuY3Rpb24gY29weTIob3V0LCB4LCB5KSB7XG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIGNvcHk0KG91dCwgeCwgeSwgeiwgdykge1xuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgb3V0WzJdID0gelxuICAgIG91dFszXSA9IHdcbiAgICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIGNvcHlWZWMyKG91dCwgdmVjKSB7XG4gICAgcmV0dXJuIGNvcHkyKG91dCwgdmVjWzBdLCB2ZWNbMV0pXG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLCBcbiAgICAgICAgeSA9IGFbMV1cbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVsxMl1cbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVsxM11cbiAgICByZXR1cm4gb3V0XG59IiwidmFyIGNyZWF0ZVZBT0VtdWxhdGVkID0gcmVxdWlyZShcIi4vbGliL3Zhby1lbXVsYXRlZC5qc1wiKVxuXG5mdW5jdGlvbiBjcmVhdGVWQU8oZ2wsIGF0dHJpYnV0ZXMsIGVsZW1lbnRzLCBlbGVtZW50c1R5cGUpIHtcbiAgdmFyIHZhbyA9IGNyZWF0ZVZBT0VtdWxhdGVkKGdsKVxuICB2YW8udXBkYXRlKGF0dHJpYnV0ZXMsIGVsZW1lbnRzLCBlbGVtZW50c1R5cGUpXG4gIHJldHVybiB2YW9cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVWQU8iLCJmdW5jdGlvbiBnZXRBdHRyaWJ1dGVMb2NhdGlvbihuYW1lLCBzaGFkZXIpIHtcbiAgICBpZiAoIW5hbWUpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgdmFyIGF0dHIgPSBzaGFkZXIuYXR0cmlidXRlc1xuICAgIGlmIChhdHRyW25hbWVdKSBcbiAgICAgICAgcmV0dXJuIGF0dHJbbmFtZV0ubG9jYXRpb25cbiAgICByZXR1cm4gbnVsbFxufVxuXG52YXIgbmF0dHJpYnMgPSBudWxsXG52YXIgYm91bmQgPSBudWxsXG5cbmZ1bmN0aW9uIGRvQmluZChnbCwgZWxlbWVudHMsIGF0dHJpYnV0ZXMsIHNoYWRlcikge1xuICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICBlbGVtZW50cy5iaW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKVxuICAgIH1cbiAgICBpZiAobmF0dHJpYnMgPT09IG51bGwpIHtcbiAgICAgIG5hdHRyaWJzID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfQVRUUklCUykgfCAwXG4gICAgICBib3VuZCA9IG5ldyBBcnJheShuYXR0cmlicylcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPiBuYXR0cmlicykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtdmFvOiBUb28gbWFueSB2ZXJ0ZXggYXR0cmlidXRlc1wiKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhc3RCb3VuZCA9IG51bGxcblxuICAgICAgICBmb3IgKGk9MDsgaTxuYXR0cmliczsgaSsrKVxuICAgICAgICAgIGJvdW5kW2ldID0gZmFsc2VcblxuICAgICAgICAvL25vdyBiaW5kIGFsaWFzZWQgYXR0cmlidXRlc1xuICAgICAgICBmb3IgKGk9MDsgaTxhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXR0cmliID0gYXR0cmlidXRlc1tpXVxuICAgICAgICAgICAgdmFyIGxvYyA9IGdldEF0dHJpYnV0ZUxvY2F0aW9uKGF0dHJpYi5uYW1lLCBzaGFkZXIpXG4gICAgICAgICAgICBpZiAobG9jID09PSBudWxsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgICAgIGJvdW5kW2xvY10gPSB0cnVlXG5cbiAgICAgICAgICAgIGlmKGF0dHJpYi5idWZmZXIpIHtcbiAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IGF0dHJpYi5idWZmZXJcbiAgICAgICAgICAgICAgdmFyIHNpemUgPSBhdHRyaWIuc2l6ZSB8fCA0XG4gICAgICAgICAgICAgIHZhciB0eXBlID0gYXR0cmliLnR5cGUgfHwgZ2wuRkxPQVRcbiAgICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWQgPSAhIWF0dHJpYi5ub3JtYWxpemVkXG4gICAgICAgICAgICAgIHZhciBzdHJpZGUgPSBhdHRyaWIuc3RyaWRlIHx8IDBcbiAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IGF0dHJpYi5vZmZzZXQgfHwgMFxuICAgICAgICAgICAgICBpZiAobGFzdEJvdW5kICE9PSBidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIuYmluZCgpXG4gICAgICAgICAgICAgICAgbGFzdEJvdW5kID0gYnVmZmVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jKVxuICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGxvYywgc2l6ZSwgdHlwZSwgbm9ybWFsaXplZCwgc3RyaWRlLCBvZmZzZXQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZih0eXBlb2YgYXR0cmliID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliMWYobG9jLCBhdHRyaWIpXG4gICAgICAgICAgICAgIH0gZWxzZSBpZihhdHRyaWIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliMWYobG9jLCBhdHRyaWJbMF0pXG4gICAgICAgICAgICAgIH0gZWxzZSBpZihhdHRyaWIubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliMmYobG9jLCBhdHRyaWJbMF0sIGF0dHJpYlsxXSlcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKGF0dHJpYi5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIzZihsb2MsIGF0dHJpYlswXSwgYXR0cmliWzFdLCBhdHRyaWJbMl0pXG4gICAgICAgICAgICAgIH0gZWxzZSBpZihhdHRyaWIubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliNGYobG9jLCBhdHRyaWJbMF0sIGF0dHJpYlsxXSwgYXR0cmliWzJdLCBhdHRyaWJbM10pXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtdmFvOiBJbnZhbGlkIHZlcnRleCBhdHRyaWJ1dGVcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkobG9jKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAoaT0wOyBpPG5hdHRyaWJzOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWJvdW5kW2ldKVxuICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpXG4gICAgICBmb3IodmFyIGk9MDsgaTxuYXR0cmliczsgKytpKSB7XG4gICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpKVxuICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb0JpbmQiLCJ2YXIgYmluZEF0dHJpYnMgPSByZXF1aXJlKFwiLi9kby1iaW5kLmpzXCIpXG5cbmZ1bmN0aW9uIFZBT0VtdWxhdGVkKGdsKSB7XG4gIHRoaXMuZ2wgPSBnbFxuICB0aGlzLl9lbGVtZW50cyA9IG51bGxcbiAgdGhpcy5fYXR0cmlidXRlcyA9IG51bGxcbiAgdGhpcy5fZWxlbWVudHNUeXBlID0gZ2wuVU5TSUdORURfU0hPUlRcbn1cblxuVkFPRW11bGF0ZWQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihzaGFkZXIpIHtcbiAgaWYgKCFzaGFkZXIpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IGFzc29jaWF0ZSBzaGFkZXIgd2l0aCB2ZXJ0ZXggYXJyYXknKVxuICBiaW5kQXR0cmlicyh0aGlzLmdsLCB0aGlzLl9lbGVtZW50cywgdGhpcy5fYXR0cmlidXRlcywgc2hhZGVyKVxufVxuXG5WQU9FbXVsYXRlZC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oYXR0cmlidXRlcywgZWxlbWVudHMsIGVsZW1lbnRzVHlwZSkge1xuICB0aGlzLl9lbGVtZW50cyA9IGVsZW1lbnRzXG4gIHRoaXMuX2F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzXG4gIHRoaXMuX2VsZW1lbnRzVHlwZSA9IGVsZW1lbnRzVHlwZSB8fCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JUXG59XG5cblZBT0VtdWxhdGVkLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7IH1cblZBT0VtdWxhdGVkLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgYmluZEF0dHJpYnModGhpcy5nbClcbn1cblxuVkFPRW11bGF0ZWQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihtb2RlLCBjb3VudCwgb2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8fCAwXG4gIHZhciBnbCA9IHRoaXMuZ2xcbiAgaWYodGhpcy5fZWxlbWVudHMpIHtcbiAgICBnbC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHRoaXMuX2VsZW1lbnRzVHlwZSwgb2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGdsLmRyYXdBcnJheXMobW9kZSwgb2Zmc2V0LCBjb3VudClcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVWQU9FbXVsYXRlZChnbCkge1xuICByZXR1cm4gbmV3IFZBT0VtdWxhdGVkKGdsKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVZBT0VtdWxhdGVkIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHBvb2wgPSByZXF1aXJlKFwidHlwZWRhcnJheS1wb29sXCIpXG52YXIgb3BzID0gcmVxdWlyZShcIm5kYXJyYXktb3BzXCIpXG52YXIgbmRhcnJheSA9IHJlcXVpcmUoXCJuZGFycmF5XCIpXG52YXIgd2ViZ2xldyA9IHJlcXVpcmUoXCJ3ZWJnbGV3XCIpXG5cbnZhciBTVVBQT1JURURfVFlQRVMgPSBbXG4gIFwidWludDhcIixcbiAgXCJ1aW50OF9jbGFtcGVkXCIsXG4gIFwidWludDE2XCIsXG4gIFwidWludDMyXCIsXG4gIFwiaW50OFwiLFxuICBcImludDE2XCIsXG4gIFwiaW50MzJcIixcbiAgXCJmbG9hdDMyXCIgXVxuXG5mdW5jdGlvbiBHTEJ1ZmZlcihnbCwgdHlwZSwgaGFuZGxlLCBsZW5ndGgsIHVzYWdlKSB7XG4gIHRoaXMuZ2wgPSBnbFxuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMuaGFuZGxlID0gaGFuZGxlXG4gIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gIHRoaXMudXNhZ2UgPSB1c2FnZVxufVxuXG52YXIgcHJvdG8gPSBHTEJ1ZmZlci5wcm90b3R5cGVcblxucHJvdG8uYmluZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy50eXBlLCB0aGlzLmhhbmRsZSlcbn1cblxucHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmhhbmRsZSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlVHlwZUFycmF5KGdsLCB0eXBlLCBsZW4sIHVzYWdlLCBkYXRhLCBvZmZzZXQpIHtcbiAgdmFyIGRhdGFMZW4gPSBkYXRhLmxlbmd0aCAqIGRhdGEuQllURVNfUEVSX0VMRU1FTlQgXG4gIGlmKG9mZnNldCA8IDApIHtcbiAgICBnbC5idWZmZXJEYXRhKHR5cGUsIGRhdGEsIHVzYWdlKVxuICAgIHJldHVybiBkYXRhTGVuXG4gIH1cbiAgaWYoZGF0YUxlbiArIG9mZnNldCA+IGxlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImdsLWJ1ZmZlcjogSWYgcmVzaXppbmcgYnVmZmVyLCBtdXN0IG5vdCBzcGVjaWZ5IG9mZnNldFwiKVxuICB9XG4gIGdsLmJ1ZmZlclN1YkRhdGEodHlwZSwgb2Zmc2V0LCBkYXRhKVxuICByZXR1cm4gbGVuXG59XG5cbmZ1bmN0aW9uIG1ha2VTY3JhdGNoVHlwZUFycmF5KGFycmF5LCBkdHlwZSkge1xuICB2YXIgcmVzID0gcG9vbC5tYWxsb2MoYXJyYXkubGVuZ3RoLCBkdHlwZSlcbiAgdmFyIG4gPSBhcnJheS5sZW5ndGhcbiAgZm9yKHZhciBpPTA7IGk8bjsgKytpKSB7XG4gICAgcmVzW2ldID0gYXJyYXlbaV1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGlzUGFja2VkKHNoYXBlLCBzdHJpZGUpIHtcbiAgdmFyIG4gPSAxXG4gIGZvcih2YXIgaT1zdHJpZGUubGVuZ3RoLTE7IGk+PTA7IC0taSkge1xuICAgIGlmKHN0cmlkZVtpXSAhPT0gbikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIG4gKj0gc2hhcGVbaV1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5wcm90by51cGRhdGUgPSBmdW5jdGlvbihhcnJheSwgb2Zmc2V0KSB7XG4gIGlmKHR5cGVvZiBvZmZzZXQgIT09IFwibnVtYmVyXCIpIHtcbiAgICBvZmZzZXQgPSAtMVxuICB9XG4gIHRoaXMuYmluZCgpXG4gIGlmKHR5cGVvZiBhcnJheSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYXJyYXkuc2hhcGUgIT09IFwidW5kZWZpbmVkXCIpIHsgLy9uZGFycmF5XG4gICAgdmFyIGR0eXBlID0gYXJyYXkuZHR5cGVcbiAgICBpZihTVVBQT1JURURfVFlQRVMuaW5kZXhPZihkdHlwZSkgPCAwKSB7XG4gICAgICBkdHlwZSA9IFwiZmxvYXQzMlwiXG4gICAgfVxuICAgIGlmKHRoaXMudHlwZSA9PT0gdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUikge1xuICAgICAgdmFyIHdnbCA9IHdlYmdsZXcodGhpcy5nbClcbiAgICAgIHZhciBleHQgPSB3Z2wuT0VTX2VsZW1lbnRfaW5kZXhfdWludFxuICAgICAgaWYoZXh0ICYmIGR0eXBlICE9PSBcInVpbnQxNlwiKSB7XG4gICAgICAgIGR0eXBlID0gXCJ1aW50MzJcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHR5cGUgPSBcInVpbnQxNlwiXG4gICAgICB9XG4gICAgfVxuICAgIGlmKGR0eXBlID09PSBhcnJheS5kdHlwZSAmJiBpc1BhY2tlZChhcnJheS5zaGFwZSwgYXJyYXkuc3RyaWRlKSkge1xuICAgICAgaWYoYXJyYXkub2Zmc2V0ID09PSAwICYmIGFycmF5LmRhdGEubGVuZ3RoID09PSBhcnJheS5zaGFwZVswXSkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCBhcnJheS5kYXRhLCBvZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCBhcnJheS5kYXRhLnN1YmFycmF5KGFycmF5Lm9mZnNldCwgYXJyYXkuc2hhcGVbMF0pLCBvZmZzZXQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0bXAgPSBwb29sLm1hbGxvYyhhcnJheS5zaXplLCBkdHlwZSlcbiAgICAgIHZhciBuZHQgPSBuZGFycmF5KHRtcCwgYXJyYXkuc2hhcGUpXG4gICAgICBvcHMuYXNzaWduKG5kdCwgYXJyYXkpXG4gICAgICBpZihvZmZzZXQgPCAwKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIHRtcCwgb2Zmc2V0KSAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCB0bXAuc3ViYXJyYXkoMCwgYXJyYXkuc2l6ZSksIG9mZnNldCkgIFxuICAgICAgfVxuICAgICAgcG9vbC5mcmVlKHRtcClcbiAgICB9XG4gIH0gZWxzZSBpZihBcnJheS5pc0FycmF5KGFycmF5KSkgeyAvL1ZhbmlsbGEgYXJyYXlcbiAgICB2YXIgdFxuICAgIGlmKHRoaXMudHlwZSA9PT0gdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUikge1xuICAgICAgdCA9IG1ha2VTY3JhdGNoVHlwZUFycmF5KGFycmF5LCBcInVpbnQxNlwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0ID0gbWFrZVNjcmF0Y2hUeXBlQXJyYXkoYXJyYXksIFwiZmxvYXQzMlwiKVxuICAgIH1cbiAgICBpZihvZmZzZXQgPCAwKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCB0LCBvZmZzZXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIHQuc3ViYXJyYXkoMCwgYXJyYXkubGVuZ3RoKSwgb2Zmc2V0KVxuICAgIH1cbiAgICBwb29sLmZyZWUodClcbiAgfSBlbHNlIGlmKHR5cGVvZiBhcnJheSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYXJyYXkubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IC8vVHlwZWQgYXJyYXlcbiAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCBhcnJheSwgb2Zmc2V0KVxuICB9IGVsc2UgaWYodHlwZW9mIGFycmF5ID09PSBcIm51bWJlclwiIHx8IGFycmF5ID09PSB1bmRlZmluZWQpIHsgLy9OdW1iZXIvZGVmYXVsdFxuICAgIGlmKG9mZnNldCA+PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IENhbm5vdCBzcGVjaWZ5IG9mZnNldCB3aGVuIHJlc2l6aW5nIGJ1ZmZlclwiKVxuICAgIH1cbiAgICBhcnJheSA9IGFycmF5IHwgMFxuICAgIGlmKGFycmF5IDw9IDApIHtcbiAgICAgIGFycmF5ID0gMVxuICAgIH1cbiAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy50eXBlLCBhcnJheXwwLCB0aGlzLnVzYWdlKVxuICAgIHRoaXMubGVuZ3RoID0gYXJyYXlcbiAgfSBlbHNlIHsgLy9FcnJvciwgY2FzZSBzaG91bGQgbm90IGhhcHBlblxuICAgIHRocm93IG5ldyBFcnJvcihcImdsLWJ1ZmZlcjogSW52YWxpZCBkYXRhIHR5cGVcIilcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZ2wsIGRhdGEsIHR5cGUsIHVzYWdlKSB7XG4gIHdlYmdsZXcoZ2wpXG4gIHR5cGUgPSB0eXBlIHx8IGdsLkFSUkFZX0JVRkZFUlxuICB1c2FnZSA9IHVzYWdlIHx8IGdsLkRZTkFNSUNfRFJBV1xuICBpZih0eXBlICE9PSBnbC5BUlJBWV9CVUZGRVIgJiYgdHlwZSAhPT0gZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IEludmFsaWQgdHlwZSBmb3Igd2ViZ2wgYnVmZmVyLCBtdXN0IGJlIGVpdGhlciBnbC5BUlJBWV9CVUZGRVIgb3IgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVJcIilcbiAgfVxuICBpZih1c2FnZSAhPT0gZ2wuRFlOQU1JQ19EUkFXICYmIHVzYWdlICE9PSBnbC5TVEFUSUNfRFJBVyAmJiB1c2FnZSAhPT0gZ2wuU1RSRUFNX0RSQVcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IEludmFsaWQgdXNhZ2UgZm9yIGJ1ZmZlciwgbXVzdCBiZSBlaXRoZXIgZ2wuRFlOQU1JQ19EUkFXLCBnbC5TVEFUSUNfRFJBVyBvciBnbC5TVFJFQU1fRFJBV1wiKVxuICB9XG4gIHZhciBoYW5kbGUgPSBnbC5jcmVhdGVCdWZmZXIoKVxuICB2YXIgcmVzdWx0ID0gbmV3IEdMQnVmZmVyKGdsLCB0eXBlLCBoYW5kbGUsIDAsIHVzYWdlKVxuICByZXN1bHQudXBkYXRlKGRhdGEpXG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCdWZmZXIiLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgY29tcGlsZSA9IHJlcXVpcmUoXCJjd2lzZS1jb21waWxlclwiKVxuXG52YXIgRW1wdHlQcm9jID0ge1xuICBib2R5OiBcIlwiLFxuICBhcmdzOiBbXSxcbiAgdGhpc1ZhcnM6IFtdLFxuICBsb2NhbFZhcnM6IFtdXG59XG5cbmZ1bmN0aW9uIGZpeHVwKHgpIHtcbiAgaWYoIXgpIHtcbiAgICByZXR1cm4gRW1wdHlQcm9jXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8eC5hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGEgPSB4LmFyZ3NbaV1cbiAgICBpZihpID09PSAwKSB7XG4gICAgICB4LmFyZ3NbaV0gPSB7bmFtZTogYSwgbHZhbHVlOnRydWUsIHJ2YWx1ZTogISF4LnJ2YWx1ZSwgY291bnQ6eC5jb3VudHx8MSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHguYXJnc1tpXSA9IHtuYW1lOiBhLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDogMX1cbiAgICB9XG4gIH1cbiAgaWYoIXgudGhpc1ZhcnMpIHtcbiAgICB4LnRoaXNWYXJzID0gW11cbiAgfVxuICBpZigheC5sb2NhbFZhcnMpIHtcbiAgICB4LmxvY2FsVmFycyA9IFtdXG4gIH1cbiAgcmV0dXJuIHhcbn1cblxuZnVuY3Rpb24gcGNvbXBpbGUodXNlcl9hcmdzKSB7XG4gIHJldHVybiBjb21waWxlKHtcbiAgICBhcmdzOiAgICAgdXNlcl9hcmdzLmFyZ3MsXG4gICAgcHJlOiAgICAgIGZpeHVwKHVzZXJfYXJncy5wcmUpLFxuICAgIGJvZHk6ICAgICBmaXh1cCh1c2VyX2FyZ3MuYm9keSksXG4gICAgcG9zdDogICAgIGZpeHVwKHVzZXJfYXJncy5wcm9jKSxcbiAgICBmdW5jTmFtZTogdXNlcl9hcmdzLmZ1bmNOYW1lXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG1ha2VPcCh1c2VyX2FyZ3MpIHtcbiAgdmFyIGFyZ3MgPSBbXVxuICBmb3IodmFyIGk9MDsgaTx1c2VyX2FyZ3MuYXJncy5sZW5ndGg7ICsraSkge1xuICAgIGFyZ3MucHVzaChcImFcIitpKVxuICB9XG4gIHZhciB3cmFwcGVyID0gbmV3IEZ1bmN0aW9uKFwiUFwiLCBbXG4gICAgXCJyZXR1cm4gZnVuY3Rpb24gXCIsIHVzZXJfYXJncy5mdW5jTmFtZSwgXCJfbmRhcnJheW9wcyhcIiwgYXJncy5qb2luKFwiLFwiKSwgXCIpIHtQKFwiLCBhcmdzLmpvaW4oXCIsXCIpLCBcIik7cmV0dXJuIGEwfVwiXG4gIF0uam9pbihcIlwiKSlcbiAgcmV0dXJuIHdyYXBwZXIocGNvbXBpbGUodXNlcl9hcmdzKSlcbn1cblxudmFyIGFzc2lnbl9vcHMgPSB7XG4gIGFkZDogIFwiK1wiLFxuICBzdWI6ICBcIi1cIixcbiAgbXVsOiAgXCIqXCIsXG4gIGRpdjogIFwiL1wiLFxuICBtb2Q6ICBcIiVcIixcbiAgYmFuZDogXCImXCIsXG4gIGJvcjogIFwifFwiLFxuICBieG9yOiBcIl5cIixcbiAgbHNoaWZ0OiBcIjw8XCIsXG4gIHJzaGlmdDogXCI+PlwiLFxuICBycnNoaWZ0OiBcIj4+PlwiXG59XG47KGZ1bmN0aW9uKCl7XG4gIGZvcih2YXIgaWQgaW4gYXNzaWduX29wcykge1xuICAgIHZhciBvcCA9IGFzc2lnbl9vcHNbaWRdXG4gICAgZXhwb3J0c1tpZF0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcImFycmF5XCIsXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sXG4gICAgICAgICAgICAgYm9keTogXCJhPWJcIitvcCtcImNcIn0sXG4gICAgICBmdW5jTmFtZTogaWRcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhXCIrb3ArXCI9YlwifSxcbiAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgIGZ1bmNOYW1lOiBpZCtcImVxXCJcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJzXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJzXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWJcIitvcCtcInNcIn0sXG4gICAgICBmdW5jTmFtZTogaWQrXCJzXCJcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJzZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcInNjYWxhclwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcInNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImFcIitvcCtcIj1zXCJ9LFxuICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgZnVuY05hbWU6IGlkK1wic2VxXCJcbiAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgdW5hcnlfb3BzID0ge1xuICBub3Q6IFwiIVwiLFxuICBibm90OiBcIn5cIixcbiAgbmVnOiBcIi1cIixcbiAgcmVjaXA6IFwiMS4wL1wiXG59XG47KGZ1bmN0aW9uKCl7XG4gIGZvcih2YXIgaWQgaW4gdW5hcnlfb3BzKSB7XG4gICAgdmFyIG9wID0gdW5hcnlfb3BzW2lkXVxuICAgIGV4cG9ydHNbaWRdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPVwiK29wK1wiYlwifSxcbiAgICAgIGZ1bmNOYW1lOiBpZFxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcImVxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1cIitvcCtcImFcIn0sXG4gICAgICBydmFsdWU6IHRydWUsXG4gICAgICBjb3VudDogMixcbiAgICAgIGZ1bmNOYW1lOiBpZCtcImVxXCJcbiAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgYmluYXJ5X29wcyA9IHtcbiAgYW5kOiBcIiYmXCIsXG4gIG9yOiBcInx8XCIsXG4gIGVxOiBcIj09PVwiLFxuICBuZXE6IFwiIT09XCIsXG4gIGx0OiBcIjxcIixcbiAgZ3Q6IFwiPlwiLFxuICBsZXE6IFwiPD1cIixcbiAgZ2VxOiBcIj49XCJcbn1cbjsoZnVuY3Rpb24oKSB7XG4gIGZvcih2YXIgaWQgaW4gYmluYXJ5X29wcykge1xuICAgIHZhciBvcCA9IGJpbmFyeV9vcHNbaWRdXG4gICAgZXhwb3J0c1tpZF0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcImFycmF5XCIsXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCIsIFwiY1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1iXCIrb3ArXCJjXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wic1wiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwiYXJyYXlcIixcInNjYWxhclwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCIsIFwic1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1iXCIrb3ArXCJzXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkK1wic1wiXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wiZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWFcIitvcCtcImJcIn0sXG4gICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgIGNvdW50OjIsXG4gICAgICBmdW5jTmFtZTogaWQrXCJlcVwiXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wic2VxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwic1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1hXCIrb3ArXCJzXCJ9LFxuICAgICAgcnZhbHVlOnRydWUsXG4gICAgICBjb3VudDoyLFxuICAgICAgZnVuY05hbWU6IGlkK1wic2VxXCJcbiAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgbWF0aF91bmFyeSA9IFtcbiAgXCJhYnNcIixcbiAgXCJhY29zXCIsXG4gIFwiYXNpblwiLFxuICBcImF0YW5cIixcbiAgXCJjZWlsXCIsXG4gIFwiY29zXCIsXG4gIFwiZXhwXCIsXG4gIFwiZmxvb3JcIixcbiAgXCJsb2dcIixcbiAgXCJyb3VuZFwiLFxuICBcInNpblwiLFxuICBcInNxcnRcIixcbiAgXCJ0YW5cIlxuXVxuOyhmdW5jdGlvbigpIHtcbiAgZm9yKHZhciBpPTA7IGk8bWF0aF91bmFyeS5sZW5ndGg7ICsraSkge1xuICAgIHZhciBmID0gbWF0aF91bmFyeVtpXVxuICAgIGV4cG9ydHNbZl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgICBhcmdzOiBbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcImVxXCJdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczogW1wiYVwiXSwgYm9keTpcImE9dGhpc19mKGEpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wiZXFcIlxuICAgICAgICAgICAgICAgICAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgbWF0aF9jb21tID0gW1xuICBcIm1heFwiLFxuICBcIm1pblwiLFxuICBcImF0YW4yXCIsXG4gIFwicG93XCJcbl1cbjsoZnVuY3Rpb24oKXtcbiAgZm9yKHZhciBpPTA7IGk8bWF0aF9jb21tLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGY9IG1hdGhfY29tbVtpXVxuICAgIGV4cG9ydHNbZl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGMpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZlxuICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wic1wiXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGMpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcInNcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGEsYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OiAyLFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJlcVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcInNlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihhLGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OjIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcInNlcVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgbWF0aF9ub25jb21tID0gW1xuICBcImF0YW4yXCIsXG4gIFwicG93XCJcbl1cbjsoZnVuY3Rpb24oKXtcbiAgZm9yKHZhciBpPTA7IGk8bWF0aF9ub25jb21tLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGY9IG1hdGhfbm9uY29tbVtpXVxuICAgIGV4cG9ydHNbZitcIm9wXCJdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLCBib2R5OlwiYT10aGlzX2YoYyxiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJvcFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJvcHNcIl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLCBib2R5OlwiYT10aGlzX2YoYyxiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJvcHNcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJvcGVxXCJdID0gbWFrZU9wKHsgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYixhKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY291bnQ6IDIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcIm9wZXFcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJvcHNlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGEpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OjIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcIm9wc2VxXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gIH1cbn0pKCk7XG5cbmV4cG9ydHMuYW55ID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZTogRW1wdHlQcm9jLFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgYm9keTogXCJpZihhKXtyZXR1cm4gdHJ1ZX1cIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W10sIGJvZHk6XCJyZXR1cm4gZmFsc2VcIn0sXG4gIGZ1bmNOYW1lOiBcImFueVwiXG59KVxuXG5leHBvcnRzLmFsbCA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IEVtcHR5UHJvYyxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwieFwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIGJvZHk6IFwiaWYoIXgpe3JldHVybiBmYWxzZX1cIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W10sIGJvZHk6XCJyZXR1cm4gdHJ1ZVwifSxcbiAgZnVuY05hbWU6IFwiYWxsXCJcbn0pXG5cbmV4cG9ydHMuc3VtID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBib2R5OiBcInRoaXNfcys9YVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwic3VtXCJcbn0pXG5cbmV4cG9ydHMucHJvZCA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0xXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgYm9keTogXCJ0aGlzX3MqPWFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcInByb2RcIlxufSlcblxuZXhwb3J0cy5ub3JtMnNxdWFyZWQgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoyfV0sIGJvZHk6IFwidGhpc19zKz1hKmFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcIm5vcm0yc3F1YXJlZFwiXG59KVxuICBcbmV4cG9ydHMubm9ybTIgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoyfV0sIGJvZHk6IFwidGhpc19zKz1hKmFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiBNYXRoLnNxcnQodGhpc19zKVwifSxcbiAgZnVuY05hbWU6IFwibm9ybTJcIlxufSlcbiAgXG5cbmV4cG9ydHMubm9ybWluZiA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjR9XSwgYm9keTpcImlmKC1hPnRoaXNfcyl7dGhpc19zPS1hfWVsc2UgaWYoYT50aGlzX3Mpe3RoaXNfcz1hfVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwibm9ybWluZlwiXG59KVxuXG5leHBvcnRzLm5vcm0xID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6M31dLCBib2R5OiBcInRoaXNfcys9YTwwPy1hOmFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcIm5vcm0xXCJcbn0pXG5cbmV4cG9ydHMuc3VwID0gY29tcGlsZSh7XG4gIGFyZ3M6IFsgXCJhcnJheVwiIF0sXG4gIHByZTpcbiAgIHsgYm9keTogXCJ0aGlzX2g9LUluZmluaXR5XCIsXG4gICAgIGFyZ3M6IFtdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfSxcbiAgYm9keTpcbiAgIHsgYm9keTogXCJpZihfaW5saW5lXzFfYXJnMF8+dGhpc19oKXRoaXNfaD1faW5saW5lXzFfYXJnMF9cIixcbiAgICAgYXJnczogW3tcIm5hbWVcIjpcIl9pbmxpbmVfMV9hcmcwX1wiLFwibHZhbHVlXCI6ZmFsc2UsXCJydmFsdWVcIjp0cnVlLFwiY291bnRcIjoyfSBdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfSxcbiAgcG9zdDpcbiAgIHsgYm9keTogXCJyZXR1cm4gdGhpc19oXCIsXG4gICAgIGFyZ3M6IFtdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfVxuIH0pXG5cbmV4cG9ydHMuaW5mID0gY29tcGlsZSh7XG4gIGFyZ3M6IFsgXCJhcnJheVwiIF0sXG4gIHByZTpcbiAgIHsgYm9keTogXCJ0aGlzX2g9SW5maW5pdHlcIixcbiAgICAgYXJnczogW10sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9LFxuICBib2R5OlxuICAgeyBib2R5OiBcImlmKF9pbmxpbmVfMV9hcmcwXzx0aGlzX2gpdGhpc19oPV9pbmxpbmVfMV9hcmcwX1wiLFxuICAgICBhcmdzOiBbe1wibmFtZVwiOlwiX2lubGluZV8xX2FyZzBfXCIsXCJsdmFsdWVcIjpmYWxzZSxcInJ2YWx1ZVwiOnRydWUsXCJjb3VudFwiOjJ9IF0sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9LFxuICBwb3N0OlxuICAgeyBib2R5OiBcInJldHVybiB0aGlzX2hcIixcbiAgICAgYXJnczogW10sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9XG4gfSlcblxuZXhwb3J0cy5hcmdtaW4gPSBjb21waWxlKHtcbiAgYXJnczpbXCJpbmRleFwiLFwiYXJyYXlcIixcInNoYXBlXCJdLFxuICBwcmU6e1xuICAgIGJvZHk6XCJ7dGhpc192PUluZmluaXR5O3RoaXNfaT1faW5saW5lXzBfYXJnMl8uc2xpY2UoMCl9XCIsXG4gICAgYXJnczpbXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcwX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6ZmFsc2UsY291bnQ6MH0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcxX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6ZmFsc2UsY291bnQ6MH0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcyX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoxfVxuICAgICAgXSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIixcInRoaXNfdlwiXSxcbiAgICBsb2NhbFZhcnM6W119LFxuICBib2R5OntcbiAgICBib2R5Olwie2lmKF9pbmxpbmVfMV9hcmcxXzx0aGlzX3Ype3RoaXNfdj1faW5saW5lXzFfYXJnMV87Zm9yKHZhciBfaW5saW5lXzFfaz0wO19pbmxpbmVfMV9rPF9pbmxpbmVfMV9hcmcwXy5sZW5ndGg7KytfaW5saW5lXzFfayl7dGhpc19pW19pbmxpbmVfMV9rXT1faW5saW5lXzFfYXJnMF9bX2lubGluZV8xX2tdfX19XCIsXG4gICAgYXJnczpbXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMV9hcmcwX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoyfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8xX2FyZzFfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjJ9XSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIixcInRoaXNfdlwiXSxcbiAgICBsb2NhbFZhcnM6W1wiX2lubGluZV8xX2tcIl19LFxuICBwb3N0OntcbiAgICBib2R5Olwie3JldHVybiB0aGlzX2l9XCIsXG4gICAgYXJnczpbXSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIl0sXG4gICAgbG9jYWxWYXJzOltdfVxufSlcblxuZXhwb3J0cy5hcmdtYXggPSBjb21waWxlKHtcbiAgYXJnczpbXCJpbmRleFwiLFwiYXJyYXlcIixcInNoYXBlXCJdLFxuICBwcmU6e1xuICAgIGJvZHk6XCJ7dGhpc192PS1JbmZpbml0eTt0aGlzX2k9X2lubGluZV8wX2FyZzJfLnNsaWNlKDApfVwiLFxuICAgIGFyZ3M6W1xuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMF9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOmZhbHNlLGNvdW50OjB9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMV9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOmZhbHNlLGNvdW50OjB9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMl9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6MX1cbiAgICAgIF0sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCIsXCJ0aGlzX3ZcIl0sXG4gICAgbG9jYWxWYXJzOltdfSxcbiAgYm9keTp7XG4gICAgYm9keTpcIntpZihfaW5saW5lXzFfYXJnMV8+dGhpc192KXt0aGlzX3Y9X2lubGluZV8xX2FyZzFfO2Zvcih2YXIgX2lubGluZV8xX2s9MDtfaW5saW5lXzFfazxfaW5saW5lXzFfYXJnMF8ubGVuZ3RoOysrX2lubGluZV8xX2spe3RoaXNfaVtfaW5saW5lXzFfa109X2lubGluZV8xX2FyZzBfW19pbmxpbmVfMV9rXX19fVwiLFxuICAgIGFyZ3M6W1xuICAgICAge25hbWU6XCJfaW5saW5lXzFfYXJnMF9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6Mn0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMV9hcmcxX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoyfV0sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCIsXCJ0aGlzX3ZcIl0sXG4gICAgbG9jYWxWYXJzOltcIl9pbmxpbmVfMV9rXCJdfSxcbiAgcG9zdDp7XG4gICAgYm9keTpcIntyZXR1cm4gdGhpc19pfVwiLFxuICAgIGFyZ3M6W10sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCJdLFxuICAgIGxvY2FsVmFyczpbXX1cbn0pICBcblxuZXhwb3J0cy5yYW5kb20gPSBtYWtlT3Aoe1xuICBhcmdzOiBbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLnJhbmRvbVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICBib2R5OiB7YXJnczogW1wiYVwiXSwgYm9keTpcImE9dGhpc19mKClcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgZnVuY05hbWU6IFwicmFuZG9tXCJcbn0pXG5cbmV4cG9ydHMuYXNzaWduID0gbWFrZU9wKHtcbiAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiXSwgYm9keTpcImE9YlwifSxcbiAgZnVuY05hbWU6IFwiYXNzaWduXCIgfSlcblxuZXhwb3J0cy5hc3NpZ25zID0gbWFrZU9wKHtcbiAgYXJnczpbXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIl0sIGJvZHk6XCJhPWJcIn0sXG4gIGZ1bmNOYW1lOiBcImFzc2lnbnNcIiB9KVxuXG5cbmV4cG9ydHMuZXF1YWxzID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgcHJlOiBFbXB0eVByb2MsXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcInhcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX0sXG4gICAgICAgICAgICAgICB7bmFtZTpcInlcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBcbiAgICAgICAgYm9keTogXCJpZih4IT09eSl7cmV0dXJuIGZhbHNlfVwiLCBcbiAgICAgICAgbG9jYWxWYXJzOiBbXSwgXG4gICAgICAgIHRoaXNWYXJzOiBbXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltdLCBib2R5OlwicmV0dXJuIHRydWVcIn0sXG4gIGZ1bmNOYW1lOiBcImVxdWFsc1wiXG59KVxuXG5cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBjcmVhdGVUaHVuayA9IHJlcXVpcmUoXCIuL2xpYi90aHVuay5qc1wiKVxuXG5mdW5jdGlvbiBQcm9jZWR1cmUoKSB7XG4gIHRoaXMuYXJnVHlwZXMgPSBbXVxuICB0aGlzLnNoaW1BcmdzID0gW11cbiAgdGhpcy5hcnJheUFyZ3MgPSBbXVxuICB0aGlzLnNjYWxhckFyZ3MgPSBbXVxuICB0aGlzLm9mZnNldEFyZ3MgPSBbXVxuICB0aGlzLm9mZnNldEFyZ0luZGV4ID0gW11cbiAgdGhpcy5pbmRleEFyZ3MgPSBbXVxuICB0aGlzLnNoYXBlQXJncyA9IFtdXG4gIHRoaXMuZnVuY05hbWUgPSBcIlwiXG4gIHRoaXMucHJlID0gbnVsbFxuICB0aGlzLmJvZHkgPSBudWxsXG4gIHRoaXMucG9zdCA9IG51bGxcbiAgdGhpcy5kZWJ1ZyA9IGZhbHNlXG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVDd2lzZSh1c2VyX2FyZ3MpIHtcbiAgLy9DcmVhdGUgcHJvY2VkdXJlXG4gIHZhciBwcm9jID0gbmV3IFByb2NlZHVyZSgpXG4gIFxuICAvL1BhcnNlIGJsb2Nrc1xuICBwcm9jLnByZSAgICA9IHVzZXJfYXJncy5wcmVcbiAgcHJvYy5ib2R5ICAgPSB1c2VyX2FyZ3MuYm9keVxuICBwcm9jLnBvc3QgICA9IHVzZXJfYXJncy5wb3N0XG5cbiAgLy9QYXJzZSBhcmd1bWVudHNcbiAgdmFyIHByb2NfYXJncyA9IHVzZXJfYXJncy5hcmdzLnNsaWNlKDApXG4gIHByb2MuYXJnVHlwZXMgPSBwcm9jX2FyZ3NcbiAgZm9yKHZhciBpPTA7IGk8cHJvY19hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGFyZ190eXBlID0gcHJvY19hcmdzW2ldXG4gICAgaWYoYXJnX3R5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgcHJvYy5hcnJheUFyZ3MucHVzaChpKVxuICAgICAgcHJvYy5zaGltQXJncy5wdXNoKFwiYXJyYXlcIiArIGkpXG4gICAgICBpZihpIDwgcHJvYy5wcmUuYXJncy5sZW5ndGggJiYgcHJvYy5wcmUuYXJnc1tpXS5jb3VudD4wKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwcmUoKSBibG9jayBtYXkgbm90IHJlZmVyZW5jZSBhcnJheSBhcmdzXCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5wb3N0LmFyZ3MubGVuZ3RoICYmIHByb2MucG9zdC5hcmdzW2ldLmNvdW50PjApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IHBvc3QoKSBibG9jayBtYXkgbm90IHJlZmVyZW5jZSBhcnJheSBhcmdzXCIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGFyZ190eXBlID09PSBcInNjYWxhclwiKSB7XG4gICAgICBwcm9jLnNjYWxhckFyZ3MucHVzaChpKVxuICAgICAgcHJvYy5zaGltQXJncy5wdXNoKFwic2NhbGFyXCIgKyBpKVxuICAgIH0gZWxzZSBpZihhcmdfdHlwZSA9PT0gXCJpbmRleFwiKSB7XG4gICAgICBwcm9jLmluZGV4QXJncy5wdXNoKGkpXG4gICAgICBpZihpIDwgcHJvYy5wcmUuYXJncy5sZW5ndGggJiYgcHJvYy5wcmUuYXJnc1tpXS5jb3VudCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IHByZSgpIGJsb2NrIG1heSBub3QgcmVmZXJlbmNlIGFycmF5IGluZGV4XCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5ib2R5LmFyZ3MubGVuZ3RoICYmIHByb2MuYm9keS5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogYm9keSgpIGJsb2NrIG1heSBub3Qgd3JpdGUgdG8gYXJyYXkgaW5kZXhcIilcbiAgICAgIH1cbiAgICAgIGlmKGkgPCBwcm9jLnBvc3QuYXJncy5sZW5ndGggJiYgcHJvYy5wb3N0LmFyZ3NbaV0uY291bnQgPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwb3N0KCkgYmxvY2sgbWF5IG5vdCByZWZlcmVuY2UgYXJyYXkgaW5kZXhcIilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoYXJnX3R5cGUgPT09IFwic2hhcGVcIikge1xuICAgICAgcHJvYy5zaGFwZUFyZ3MucHVzaChpKVxuICAgICAgaWYoaSA8IHByb2MucHJlLmFyZ3MubGVuZ3RoICYmIHByb2MucHJlLmFyZ3NbaV0ubHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwcmUoKSBibG9jayBtYXkgbm90IHdyaXRlIHRvIGFycmF5IHNoYXBlXCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5ib2R5LmFyZ3MubGVuZ3RoICYmIHByb2MuYm9keS5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogYm9keSgpIGJsb2NrIG1heSBub3Qgd3JpdGUgdG8gYXJyYXkgc2hhcGVcIilcbiAgICAgIH1cbiAgICAgIGlmKGkgPCBwcm9jLnBvc3QuYXJncy5sZW5ndGggJiYgcHJvYy5wb3N0LmFyZ3NbaV0ubHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwb3N0KCkgYmxvY2sgbWF5IG5vdCB3cml0ZSB0byBhcnJheSBzaGFwZVwiKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZih0eXBlb2YgYXJnX3R5cGUgPT09IFwib2JqZWN0XCIgJiYgYXJnX3R5cGUub2Zmc2V0KSB7XG4gICAgICBwcm9jLmFyZ1R5cGVzW2ldID0gXCJvZmZzZXRcIlxuICAgICAgcHJvYy5vZmZzZXRBcmdzLnB1c2goeyBhcnJheTogYXJnX3R5cGUuYXJyYXksIG9mZnNldDphcmdfdHlwZS5vZmZzZXQgfSlcbiAgICAgIHByb2Mub2Zmc2V0QXJnSW5kZXgucHVzaChpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogVW5rbm93biBhcmd1bWVudCB0eXBlIFwiICsgcHJvY19hcmdzW2ldKVxuICAgIH1cbiAgfVxuICBcbiAgLy9NYWtlIHN1cmUgYXQgbGVhc3Qgb25lIGFycmF5IGFyZ3VtZW50IHdhcyBzcGVjaWZpZWRcbiAgaWYocHJvYy5hcnJheUFyZ3MubGVuZ3RoIDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogTm8gYXJyYXkgYXJndW1lbnRzIHNwZWNpZmllZFwiKVxuICB9XG4gIFxuICAvL01ha2Ugc3VyZSBhcmd1bWVudHMgYXJlIGNvcnJlY3RcbiAgaWYocHJvYy5wcmUuYXJncy5sZW5ndGggPiBwcm9jX2FyZ3MubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFRvbyBtYW55IGFyZ3VtZW50cyBpbiBwcmUoKSBibG9ja1wiKVxuICB9XG4gIGlmKHByb2MuYm9keS5hcmdzLmxlbmd0aCA+IHByb2NfYXJncy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogVG9vIG1hbnkgYXJndW1lbnRzIGluIGJvZHkoKSBibG9ja1wiKVxuICB9XG4gIGlmKHByb2MucG9zdC5hcmdzLmxlbmd0aCA+IHByb2NfYXJncy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogVG9vIG1hbnkgYXJndW1lbnRzIGluIHBvc3QoKSBibG9ja1wiKVxuICB9XG5cbiAgLy9DaGVjayBkZWJ1ZyBmbGFnXG4gIHByb2MuZGVidWcgPSAhIXVzZXJfYXJncy5wcmludENvZGUgfHwgISF1c2VyX2FyZ3MuZGVidWdcbiAgXG4gIC8vUmV0cmlldmUgbmFtZVxuICBwcm9jLmZ1bmNOYW1lID0gdXNlcl9hcmdzLmZ1bmNOYW1lIHx8IFwiY3dpc2VcIlxuICBcbiAgLy9SZWFkIGluIGJsb2NrIHNpemVcbiAgcHJvYy5ibG9ja1NpemUgPSB1c2VyX2FyZ3MuYmxvY2tTaXplIHx8IDY0XG5cbiAgcmV0dXJuIGNyZWF0ZVRodW5rKHByb2MpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGlsZUN3aXNlXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgdW5pcSA9IHJlcXVpcmUoXCJ1bmlxXCIpXG5cbmZ1bmN0aW9uIGlubmVyRmlsbChvcmRlciwgcHJvYywgYm9keSkge1xuICB2YXIgZGltZW5zaW9uID0gb3JkZXIubGVuZ3RoXG4gICAgLCBuYXJncyA9IHByb2MuYXJyYXlBcmdzLmxlbmd0aFxuICAgICwgaGFzX2luZGV4ID0gcHJvYy5pbmRleEFyZ3MubGVuZ3RoPjBcbiAgICAsIGNvZGUgPSBbXVxuICAgICwgdmFycyA9IFtdXG4gICAgLCBpZHg9MCwgcGlkeD0wLCBpLCBqXG4gIGZvcihpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICB2YXJzLnB1c2goW1wiaVwiLGksXCI9MFwiXS5qb2luKFwiXCIpKVxuICB9XG4gIC8vQ29tcHV0ZSBzY2FuIGRlbHRhc1xuICBmb3Ioaj0wOyBqPG5hcmdzOyArK2opIHtcbiAgICBmb3IoaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICBwaWR4ID0gaWR4XG4gICAgICBpZHggPSBvcmRlcltpXVxuICAgICAgaWYoaSA9PT0gMCkge1xuICAgICAgICB2YXJzLnB1c2goW1wiZFwiLGosXCJzXCIsaSxcIj10XCIsaixcInBcIixpZHhdLmpvaW4oXCJcIikpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJzLnB1c2goW1wiZFwiLGosXCJzXCIsaSxcIj0odFwiLGosXCJwXCIsaWR4LFwiLXNcIixwaWR4LFwiKnRcIixqLFwicFwiLHBpZHgsXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvZGUucHVzaChcInZhciBcIiArIHZhcnMuam9pbihcIixcIikpXG4gIC8vU2NhbiBsb29wXG4gIGZvcihpPWRpbWVuc2lvbi0xOyBpPj0wOyAtLWkpIHtcbiAgICBpZHggPSBvcmRlcltpXVxuICAgIGNvZGUucHVzaChbXCJmb3IoaVwiLGksXCI9MDtpXCIsaSxcIjxzXCIsaWR4LFwiOysraVwiLGksXCIpe1wiXS5qb2luKFwiXCIpKVxuICB9XG4gIC8vUHVzaCBib2R5IG9mIGlubmVyIGxvb3BcbiAgY29kZS5wdXNoKGJvZHkpXG4gIC8vQWR2YW5jZSBzY2FuIHBvaW50ZXJzXG4gIGZvcihpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBwaWR4ID0gaWR4XG4gICAgaWR4ID0gb3JkZXJbaV1cbiAgICBmb3Ioaj0wOyBqPG5hcmdzOyArK2opIHtcbiAgICAgIGNvZGUucHVzaChbXCJwXCIsaixcIis9ZFwiLGosXCJzXCIsaV0uam9pbihcIlwiKSlcbiAgICB9XG4gICAgaWYoaGFzX2luZGV4KSB7XG4gICAgICBpZihpID4gMCkge1xuICAgICAgICBjb2RlLnB1c2goW1wiaW5kZXhbXCIscGlkeCxcIl0tPXNcIixwaWR4XS5qb2luKFwiXCIpKVxuICAgICAgfVxuICAgICAgY29kZS5wdXNoKFtcIisraW5kZXhbXCIsaWR4LFwiXVwiXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgICBjb2RlLnB1c2goXCJ9XCIpXG4gIH1cbiAgcmV0dXJuIGNvZGUuam9pbihcIlxcblwiKVxufVxuXG5mdW5jdGlvbiBvdXRlckZpbGwobWF0Y2hlZCwgb3JkZXIsIHByb2MsIGJvZHkpIHtcbiAgdmFyIGRpbWVuc2lvbiA9IG9yZGVyLmxlbmd0aFxuICAgICwgbmFyZ3MgPSBwcm9jLmFycmF5QXJncy5sZW5ndGhcbiAgICAsIGJsb2NrU2l6ZSA9IHByb2MuYmxvY2tTaXplXG4gICAgLCBoYXNfaW5kZXggPSBwcm9jLmluZGV4QXJncy5sZW5ndGggPiAwXG4gICAgLCBjb2RlID0gW11cbiAgZm9yKHZhciBpPTA7IGk8bmFyZ3M7ICsraSkge1xuICAgIGNvZGUucHVzaChbXCJ2YXIgb2Zmc2V0XCIsaSxcIj1wXCIsaV0uam9pbihcIlwiKSlcbiAgfVxuICAvL0dlbmVyYXRlIG1hdGNoZWQgbG9vcHNcbiAgZm9yKHZhciBpPW1hdGNoZWQ7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goW1wiZm9yKHZhciBqXCIraStcIj1TU1tcIiwgb3JkZXJbaV0sIFwiXXwwO2pcIiwgaSwgXCI+MDspe1wiXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJpZihqXCIsaSxcIjxcIixibG9ja1NpemUsXCIpe1wiXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJzXCIsb3JkZXJbaV0sXCI9alwiLGldLmpvaW4oXCJcIikpXG4gICAgY29kZS5wdXNoKFtcImpcIixpLFwiPTBcIl0uam9pbihcIlwiKSlcbiAgICBjb2RlLnB1c2goW1wifWVsc2V7c1wiLG9yZGVyW2ldLFwiPVwiLGJsb2NrU2l6ZV0uam9pbihcIlwiKSlcbiAgICBjb2RlLnB1c2goW1wialwiLGksXCItPVwiLGJsb2NrU2l6ZSxcIn1cIl0uam9pbihcIlwiKSlcbiAgICBpZihoYXNfaW5kZXgpIHtcbiAgICAgIGNvZGUucHVzaChbXCJpbmRleFtcIixvcmRlcltpXSxcIl09alwiLGldLmpvaW4oXCJcIikpXG4gICAgfVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPG5hcmdzOyArK2kpIHtcbiAgICB2YXIgaW5kZXhTdHIgPSBbXCJvZmZzZXRcIitpXVxuICAgIGZvcih2YXIgaj1tYXRjaGVkOyBqPGRpbWVuc2lvbjsgKytqKSB7XG4gICAgICBpbmRleFN0ci5wdXNoKFtcImpcIixqLFwiKnRcIixpLFwicFwiLG9yZGVyW2pdXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgICBjb2RlLnB1c2goW1wicFwiLGksXCI9KFwiLGluZGV4U3RyLmpvaW4oXCIrXCIpLFwiKVwiXS5qb2luKFwiXCIpKVxuICB9XG4gIGNvZGUucHVzaChpbm5lckZpbGwob3JkZXIsIHByb2MsIGJvZHkpKVxuICBmb3IodmFyIGk9bWF0Y2hlZDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcIn1cIilcbiAgfVxuICByZXR1cm4gY29kZS5qb2luKFwiXFxuXCIpXG59XG5cbi8vQ291bnQgdGhlIG51bWJlciBvZiBjb21wYXRpYmxlIGlubmVyIG9yZGVyc1xuZnVuY3Rpb24gY291bnRNYXRjaGVzKG9yZGVycykge1xuICB2YXIgbWF0Y2hlZCA9IDAsIGRpbWVuc2lvbiA9IG9yZGVyc1swXS5sZW5ndGhcbiAgd2hpbGUobWF0Y2hlZCA8IGRpbWVuc2lvbikge1xuICAgIGZvcih2YXIgaj0xOyBqPG9yZGVycy5sZW5ndGg7ICsraikge1xuICAgICAgaWYob3JkZXJzW2pdW21hdGNoZWRdICE9PSBvcmRlcnNbMF1bbWF0Y2hlZF0pIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZWRcbiAgICAgIH1cbiAgICB9XG4gICAgKyttYXRjaGVkXG4gIH1cbiAgcmV0dXJuIG1hdGNoZWRcbn1cblxuLy9Qcm9jZXNzZXMgYSBibG9jayBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIGRhdGEgdHlwZXNcbmZ1bmN0aW9uIHByb2Nlc3NCbG9jayhibG9jaywgcHJvYywgZHR5cGVzKSB7XG4gIHZhciBjb2RlID0gYmxvY2suYm9keVxuICB2YXIgcHJlID0gW11cbiAgdmFyIHBvc3QgPSBbXVxuICBmb3IodmFyIGk9MDsgaTxibG9jay5hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNhcmcgPSBibG9jay5hcmdzW2ldXG4gICAgaWYoY2FyZy5jb3VudCA8PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKGNhcmcubmFtZSwgXCJnXCIpXG4gICAgdmFyIHB0clN0ciA9IFwiXCJcbiAgICB2YXIgYXJyTnVtID0gcHJvYy5hcnJheUFyZ3MuaW5kZXhPZihpKVxuICAgIHN3aXRjaChwcm9jLmFyZ1R5cGVzW2ldKSB7XG4gICAgICBjYXNlIFwib2Zmc2V0XCI6XG4gICAgICAgIHZhciBvZmZBcmdJbmRleCA9IHByb2Mub2Zmc2V0QXJnSW5kZXguaW5kZXhPZihpKVxuICAgICAgICB2YXIgb2ZmQXJnID0gcHJvYy5vZmZzZXRBcmdzW29mZkFyZ0luZGV4XVxuICAgICAgICBhcnJOdW0gPSBvZmZBcmcuYXJyYXlcbiAgICAgICAgcHRyU3RyID0gXCIrcVwiICsgb2ZmQXJnSW5kZXhcbiAgICAgIGNhc2UgXCJhcnJheVwiOlxuICAgICAgICBwdHJTdHIgPSBcInBcIiArIGFyck51bSArIHB0clN0clxuICAgICAgICB2YXIgbG9jYWxTdHIgPSBcImxcIiArIGlcbiAgICAgICAgdmFyIGFyclN0ciA9IFwiYVwiICsgYXJyTnVtXG4gICAgICAgIGlmKGNhcmcuY291bnQgPT09IDEpIHtcbiAgICAgICAgICBpZihkdHlwZXNbYXJyTnVtXSA9PT0gXCJnZW5lcmljXCIpIHtcbiAgICAgICAgICAgIGlmKGNhcmcubHZhbHVlKSB7XG4gICAgICAgICAgICAgIHByZS5wdXNoKFtcInZhciBcIiwgbG9jYWxTdHIsIFwiPVwiLCBhcnJTdHIsIFwiLmdldChcIiwgcHRyU3RyLCBcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgbG9jYWxTdHIpXG4gICAgICAgICAgICAgIHBvc3QucHVzaChbYXJyU3RyLCBcIi5zZXQoXCIsIHB0clN0ciwgXCIsXCIsIGxvY2FsU3RyLFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgW2FyclN0ciwgXCIuZ2V0KFwiLCBwdHJTdHIsIFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBbYXJyU3RyLCBcIltcIiwgcHRyU3RyLCBcIl1cIl0uam9pbihcIlwiKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihkdHlwZXNbYXJyTnVtXSA9PT0gXCJnZW5lcmljXCIpIHtcbiAgICAgICAgICBwcmUucHVzaChbXCJ2YXIgXCIsIGxvY2FsU3RyLCBcIj1cIiwgYXJyU3RyLCBcIi5nZXQoXCIsIHB0clN0ciwgXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgbG9jYWxTdHIpXG4gICAgICAgICAgaWYoY2FyZy5sdmFsdWUpIHtcbiAgICAgICAgICAgIHBvc3QucHVzaChbYXJyU3RyLCBcIi5zZXQoXCIsIHB0clN0ciwgXCIsXCIsIGxvY2FsU3RyLFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmUucHVzaChbXCJ2YXIgXCIsIGxvY2FsU3RyLCBcIj1cIiwgYXJyU3RyLCBcIltcIiwgcHRyU3RyLCBcIl1cIl0uam9pbihcIlwiKSlcbiAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBsb2NhbFN0cilcbiAgICAgICAgICBpZihjYXJnLmx2YWx1ZSkge1xuICAgICAgICAgICAgcG9zdC5wdXNoKFthcnJTdHIsIFwiW1wiLCBwdHJTdHIsIFwiXT1cIiwgbG9jYWxTdHJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBicmVha1xuICAgICAgY2FzZSBcInNjYWxhclwiOlxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBcIllcIiArIHByb2Muc2NhbGFyQXJncy5pbmRleE9mKGkpKVxuICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJpbmRleFwiOlxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBcImluZGV4XCIpXG4gICAgICBicmVha1xuICAgICAgY2FzZSBcInNoYXBlXCI6XG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFwic2hhcGVcIilcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiBbcHJlLmpvaW4oXCJcXG5cIiksIGNvZGUsIHBvc3Quam9pbihcIlxcblwiKV0uam9pbihcIlxcblwiKS50cmltKClcbn1cblxuZnVuY3Rpb24gdHlwZVN1bW1hcnkoZHR5cGVzKSB7XG4gIHZhciBzdW1tYXJ5ID0gbmV3IEFycmF5KGR0eXBlcy5sZW5ndGgpXG4gIHZhciBhbGxFcXVhbCA9IHRydWVcbiAgZm9yKHZhciBpPTA7IGk8ZHR5cGVzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHQgPSBkdHlwZXNbaV1cbiAgICB2YXIgZGlnaXRzID0gdC5tYXRjaCgvXFxkKy8pXG4gICAgaWYoIWRpZ2l0cykge1xuICAgICAgZGlnaXRzID0gXCJcIlxuICAgIH0gZWxzZSB7XG4gICAgICBkaWdpdHMgPSBkaWdpdHNbMF1cbiAgICB9XG4gICAgaWYodC5jaGFyQXQoMCkgPT09IDApIHtcbiAgICAgIHN1bW1hcnlbaV0gPSBcInVcIiArIHQuY2hhckF0KDEpICsgZGlnaXRzXG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bW1hcnlbaV0gPSB0LmNoYXJBdCgwKSArIGRpZ2l0c1xuICAgIH1cbiAgICBpZihpID4gMCkge1xuICAgICAgYWxsRXF1YWwgPSBhbGxFcXVhbCAmJiBzdW1tYXJ5W2ldID09PSBzdW1tYXJ5W2ktMV1cbiAgICB9XG4gIH1cbiAgaWYoYWxsRXF1YWwpIHtcbiAgICByZXR1cm4gc3VtbWFyeVswXVxuICB9XG4gIHJldHVybiBzdW1tYXJ5LmpvaW4oXCJcIilcbn1cblxuLy9HZW5lcmF0ZXMgYSBjd2lzZSBvcGVyYXRvclxuZnVuY3Rpb24gZ2VuZXJhdGVDV2lzZU9wKHByb2MsIHR5cGVzaWcpIHtcblxuICAvL0NvbXB1dGUgZGltZW5zaW9uXG4gIHZhciBkaW1lbnNpb24gPSB0eXBlc2lnWzFdLmxlbmd0aHwwXG4gIHZhciBvcmRlcnMgPSBuZXcgQXJyYXkocHJvYy5hcnJheUFyZ3MubGVuZ3RoKVxuICB2YXIgZHR5cGVzID0gbmV3IEFycmF5KHByb2MuYXJyYXlBcmdzLmxlbmd0aClcblxuICAvL0ZpcnN0IGNyZWF0ZSBhcmd1bWVudHMgZm9yIHByb2NlZHVyZVxuICB2YXIgYXJnbGlzdCA9IFtcIlNTXCJdXG4gIHZhciBjb2RlID0gW1wiJ3VzZSBzdHJpY3QnXCJdXG4gIHZhciB2YXJzID0gW11cbiAgXG4gIGZvcih2YXIgaj0wOyBqPGRpbWVuc2lvbjsgKytqKSB7XG4gICAgdmFycy5wdXNoKFtcInNcIiwgaiwgXCI9U1NbXCIsIGosIFwiXVwiXS5qb2luKFwiXCIpKVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2MuYXJyYXlBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgYXJnbGlzdC5wdXNoKFwiYVwiK2kpXG4gICAgYXJnbGlzdC5wdXNoKFwidFwiK2kpXG4gICAgYXJnbGlzdC5wdXNoKFwicFwiK2kpXG4gICAgZHR5cGVzW2ldID0gdHlwZXNpZ1syKmldXG4gICAgb3JkZXJzW2ldID0gdHlwZXNpZ1syKmkrMV1cbiAgICBcbiAgICBmb3IodmFyIGo9MDsgajxkaW1lbnNpb247ICsraikge1xuICAgICAgdmFycy5wdXNoKFtcInRcIixpLFwicFwiLGosXCI9dFwiLGksXCJbXCIsaixcIl1cIl0uam9pbihcIlwiKSlcbiAgICB9XG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5zY2FsYXJBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgYXJnbGlzdC5wdXNoKFwiWVwiICsgaSlcbiAgfVxuICBpZihwcm9jLnNoYXBlQXJncy5sZW5ndGggPiAwKSB7XG4gICAgdmFycy5wdXNoKFwic2hhcGU9U1Muc2xpY2UoMClcIilcbiAgfVxuICBpZihwcm9jLmluZGV4QXJncy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIHplcm9zID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgemVyb3NbaV0gPSBcIjBcIlxuICAgIH1cbiAgICB2YXJzLnB1c2goW1wiaW5kZXg9W1wiLCB6ZXJvcy5qb2luKFwiLFwiKSwgXCJdXCJdLmpvaW4oXCJcIikpXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5vZmZzZXRBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIG9mZl9hcmcgPSBwcm9jLm9mZnNldEFyZ3NbaV1cbiAgICB2YXIgaW5pdF9zdHJpbmcgPSBbXVxuICAgIGZvcih2YXIgaj0wOyBqPG9mZl9hcmcub2Zmc2V0Lmxlbmd0aDsgKytqKSB7XG4gICAgICBpZihvZmZfYXJnLm9mZnNldFtqXSA9PT0gMCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIGlmKG9mZl9hcmcub2Zmc2V0W2pdID09PSAxKSB7XG4gICAgICAgIGluaXRfc3RyaW5nLnB1c2goW1widFwiLCBvZmZfYXJnLmFycmF5LCBcInBcIiwgal0uam9pbihcIlwiKSkgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRfc3RyaW5nLnB1c2goW29mZl9hcmcub2Zmc2V0W2pdLCBcIip0XCIsIG9mZl9hcmcuYXJyYXksIFwicFwiLCBqXS5qb2luKFwiXCIpKVxuICAgICAgfVxuICAgIH1cbiAgICBpZihpbml0X3N0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhcnMucHVzaChcInFcIiArIGkgKyBcIj0wXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcnMucHVzaChbXCJxXCIsIGksIFwiPVwiLCBpbml0X3N0cmluZy5qb2luKFwiK1wiKV0uam9pbihcIlwiKSlcbiAgICB9XG4gIH1cblxuICAvL1ByZXBhcmUgdGhpcyB2YXJpYWJsZXNcbiAgdmFyIHRoaXNWYXJzID0gdW5pcShbXS5jb25jYXQocHJvYy5wcmUudGhpc1ZhcnMpXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChwcm9jLmJvZHkudGhpc1ZhcnMpXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChwcm9jLnBvc3QudGhpc1ZhcnMpKVxuICB2YXJzID0gdmFycy5jb25jYXQodGhpc1ZhcnMpXG4gIGNvZGUucHVzaChcInZhciBcIiArIHZhcnMuam9pbihcIixcIikpXG4gIGZvcih2YXIgaT0wOyBpPHByb2MuYXJyYXlBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgY29kZS5wdXNoKFwicFwiK2krXCJ8PTBcIilcbiAgfVxuICBcbiAgLy9JbmxpbmUgcHJlbHVkZVxuICBpZihwcm9jLnByZS5ib2R5Lmxlbmd0aCA+IDMpIHtcbiAgICBjb2RlLnB1c2gocHJvY2Vzc0Jsb2NrKHByb2MucHJlLCBwcm9jLCBkdHlwZXMpKVxuICB9XG5cbiAgLy9Qcm9jZXNzIGJvZHlcbiAgdmFyIGJvZHkgPSBwcm9jZXNzQmxvY2socHJvYy5ib2R5LCBwcm9jLCBkdHlwZXMpXG4gIHZhciBtYXRjaGVkID0gY291bnRNYXRjaGVzKG9yZGVycylcbiAgaWYobWF0Y2hlZCA8IGRpbWVuc2lvbikge1xuICAgIGNvZGUucHVzaChvdXRlckZpbGwobWF0Y2hlZCwgb3JkZXJzWzBdLCBwcm9jLCBib2R5KSlcbiAgfSBlbHNlIHtcbiAgICBjb2RlLnB1c2goaW5uZXJGaWxsKG9yZGVyc1swXSwgcHJvYywgYm9keSkpXG4gIH1cblxuICAvL0lubGluZSBlcGlsb2dcbiAgaWYocHJvYy5wb3N0LmJvZHkubGVuZ3RoID4gMykge1xuICAgIGNvZGUucHVzaChwcm9jZXNzQmxvY2socHJvYy5wb3N0LCBwcm9jLCBkdHlwZXMpKVxuICB9XG4gIFxuICBpZihwcm9jLmRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgY3dpc2Ugcm91dGluZSBmb3IgXCIsIHR5cGVzaWcsIFwiOlxcblxcblwiLCBjb2RlLmpvaW4oXCJcXG5cIikpXG4gIH1cbiAgXG4gIHZhciBsb29wTmFtZSA9IFsocHJvYy5mdW5jTmFtZXx8XCJ1bm5hbWVkXCIpLCBcIl9jd2lzZV9sb29wX1wiLCBvcmRlcnNbMF0uam9pbihcInNcIiksXCJtXCIsbWF0Y2hlZCx0eXBlU3VtbWFyeShkdHlwZXMpXS5qb2luKFwiXCIpXG4gIHZhciBmID0gbmV3IEZ1bmN0aW9uKFtcImZ1bmN0aW9uIFwiLGxvb3BOYW1lLFwiKFwiLCBhcmdsaXN0LmpvaW4oXCIsXCIpLFwiKXtcIiwgY29kZS5qb2luKFwiXFxuXCIpLFwifSByZXR1cm4gXCIsIGxvb3BOYW1lXS5qb2luKFwiXCIpKVxuICByZXR1cm4gZigpXG59XG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlQ1dpc2VPcCIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBjb21waWxlID0gcmVxdWlyZShcIi4vY29tcGlsZS5qc1wiKVxuXG5mdW5jdGlvbiBjcmVhdGVUaHVuayhwcm9jKSB7XG4gIHZhciBjb2RlID0gW1wiJ3VzZSBzdHJpY3QnXCIsIFwidmFyIENBQ0hFRD17fVwiXVxuICB2YXIgdmFycyA9IFtdXG4gIHZhciB0aHVua05hbWUgPSBwcm9jLmZ1bmNOYW1lICsgXCJfY3dpc2VfdGh1bmtcIlxuICBcbiAgLy9CdWlsZCB0aHVua1xuICBjb2RlLnB1c2goW1wicmV0dXJuIGZ1bmN0aW9uIFwiLCB0aHVua05hbWUsIFwiKFwiLCBwcm9jLnNoaW1BcmdzLmpvaW4oXCIsXCIpLCBcIil7XCJdLmpvaW4oXCJcIikpXG4gIHZhciB0eXBlc2lnID0gW11cbiAgdmFyIHN0cmluZ190eXBlc2lnID0gW11cbiAgdmFyIHByb2NfYXJncyA9IFtbXCJhcnJheVwiLHByb2MuYXJyYXlBcmdzWzBdLFwiLnNoYXBlXCJdLmpvaW4oXCJcIildXG4gIGZvcih2YXIgaT0wOyBpPHByb2MuYXJyYXlBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGogPSBwcm9jLmFycmF5QXJnc1tpXVxuICAgIHZhcnMucHVzaChbXCJ0XCIsIGosIFwiPWFycmF5XCIsIGosIFwiLmR0eXBlLFwiLFxuICAgICAgICAgICAgICAgXCJyXCIsIGosIFwiPWFycmF5XCIsIGosIFwiLm9yZGVyXCJdLmpvaW4oXCJcIikpXG4gICAgdHlwZXNpZy5wdXNoKFwidFwiICsgailcbiAgICB0eXBlc2lnLnB1c2goXCJyXCIgKyBqKVxuICAgIHN0cmluZ190eXBlc2lnLnB1c2goXCJ0XCIrailcbiAgICBzdHJpbmdfdHlwZXNpZy5wdXNoKFwiclwiK2orXCIuam9pbigpXCIpXG4gICAgcHJvY19hcmdzLnB1c2goXCJhcnJheVwiICsgaiArIFwiLmRhdGFcIilcbiAgICBwcm9jX2FyZ3MucHVzaChcImFycmF5XCIgKyBqICsgXCIuc3RyaWRlXCIpXG4gICAgcHJvY19hcmdzLnB1c2goXCJhcnJheVwiICsgaiArIFwiLm9mZnNldHwwXCIpXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5zY2FsYXJBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgcHJvY19hcmdzLnB1c2goXCJzY2FsYXJcIiArIHByb2Muc2NhbGFyQXJnc1tpXSlcbiAgfVxuICB2YXJzLnB1c2goW1widHlwZT1bXCIsIHN0cmluZ190eXBlc2lnLmpvaW4oXCIsXCIpLCBcIl0uam9pbigpXCJdLmpvaW4oXCJcIikpXG4gIHZhcnMucHVzaChcInByb2M9Q0FDSEVEW3R5cGVdXCIpXG4gIGNvZGUucHVzaChcInZhciBcIiArIHZhcnMuam9pbihcIixcIikpXG4gIFxuICBjb2RlLnB1c2goW1wiaWYoIXByb2Mpe1wiLFxuICAgICAgICAgICAgIFwiQ0FDSEVEW3R5cGVdPXByb2M9Y29tcGlsZShbXCIsIHR5cGVzaWcuam9pbihcIixcIiksIFwiXSl9XCIsXG4gICAgICAgICAgICAgXCJyZXR1cm4gcHJvYyhcIiwgcHJvY19hcmdzLmpvaW4oXCIsXCIpLCBcIil9XCJdLmpvaW4oXCJcIikpXG5cbiAgaWYocHJvYy5kZWJ1Zykge1xuICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIHRodW5rOlwiLCBjb2RlLmpvaW4oXCJcXG5cIikpXG4gIH1cbiAgXG4gIC8vQ29tcGlsZSB0aHVua1xuICB2YXIgdGh1bmsgPSBuZXcgRnVuY3Rpb24oXCJjb21waWxlXCIsIGNvZGUuam9pbihcIlxcblwiKSlcbiAgcmV0dXJuIHRodW5rKGNvbXBpbGUuYmluZCh1bmRlZmluZWQsIHByb2MpKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVRodW5rXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiB1bmlxdWVfcHJlZChsaXN0LCBjb21wYXJlKSB7XG4gIHZhciBwdHIgPSAxXG4gICAgLCBsZW4gPSBsaXN0Lmxlbmd0aFxuICAgICwgYT1saXN0WzBdLCBiPWxpc3RbMF1cbiAgZm9yKHZhciBpPTE7IGk8bGVuOyArK2kpIHtcbiAgICBiID0gYVxuICAgIGEgPSBsaXN0W2ldXG4gICAgaWYoY29tcGFyZShhLCBiKSkge1xuICAgICAgaWYoaSA9PT0gcHRyKSB7XG4gICAgICAgIHB0cisrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsaXN0W3B0cisrXSA9IGFcbiAgICB9XG4gIH1cbiAgbGlzdC5sZW5ndGggPSBwdHJcbiAgcmV0dXJuIGxpc3Rcbn1cblxuZnVuY3Rpb24gdW5pcXVlX2VxKGxpc3QpIHtcbiAgdmFyIHB0ciA9IDFcbiAgICAsIGxlbiA9IGxpc3QubGVuZ3RoXG4gICAgLCBhPWxpc3RbMF0sIGIgPSBsaXN0WzBdXG4gIGZvcih2YXIgaT0xOyBpPGxlbjsgKytpLCBiPWEpIHtcbiAgICBiID0gYVxuICAgIGEgPSBsaXN0W2ldXG4gICAgaWYoYSAhPT0gYikge1xuICAgICAgaWYoaSA9PT0gcHRyKSB7XG4gICAgICAgIHB0cisrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsaXN0W3B0cisrXSA9IGFcbiAgICB9XG4gIH1cbiAgbGlzdC5sZW5ndGggPSBwdHJcbiAgcmV0dXJuIGxpc3Rcbn1cblxuZnVuY3Rpb24gdW5pcXVlKGxpc3QsIGNvbXBhcmUsIHNvcnRlZCkge1xuICBpZihsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgaWYoY29tcGFyZSkge1xuICAgIGlmKCFzb3J0ZWQpIHtcbiAgICAgIGxpc3Quc29ydChjb21wYXJlKVxuICAgIH1cbiAgICByZXR1cm4gdW5pcXVlX3ByZWQobGlzdCwgY29tcGFyZSlcbiAgfVxuICBpZighc29ydGVkKSB7XG4gICAgbGlzdC5zb3J0KClcbiAgfVxuICByZXR1cm4gdW5pcXVlX2VxKGxpc3QpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcXVlXG4iLCIvKipcbiAqIEJpdCB0d2lkZGxpbmcgaGFja3MgZm9yIEphdmFTY3JpcHQuXG4gKlxuICogQXV0aG9yOiBNaWtvbGEgTHlzZW5rb1xuICpcbiAqIFBvcnRlZCBmcm9tIFN0YW5mb3JkIGJpdCB0d2lkZGxpbmcgaGFjayBsaWJyYXJ5OlxuICogICAgaHR0cDovL2dyYXBoaWNzLnN0YW5mb3JkLmVkdS9+c2VhbmRlci9iaXRoYWNrcy5odG1sXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7IFwidXNlIHJlc3RyaWN0XCI7XG5cbi8vTnVtYmVyIG9mIGJpdHMgaW4gYW4gaW50ZWdlclxudmFyIElOVF9CSVRTID0gMzI7XG5cbi8vQ29uc3RhbnRzXG5leHBvcnRzLklOVF9CSVRTICA9IElOVF9CSVRTO1xuZXhwb3J0cy5JTlRfTUFYICAgPSAgMHg3ZmZmZmZmZjtcbmV4cG9ydHMuSU5UX01JTiAgID0gLTE8PChJTlRfQklUUy0xKTtcblxuLy9SZXR1cm5zIC0xLCAwLCArMSBkZXBlbmRpbmcgb24gc2lnbiBvZiB4XG5leHBvcnRzLnNpZ24gPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiAodiA+IDApIC0gKHYgPCAwKTtcbn1cblxuLy9Db21wdXRlcyBhYnNvbHV0ZSB2YWx1ZSBvZiBpbnRlZ2VyXG5leHBvcnRzLmFicyA9IGZ1bmN0aW9uKHYpIHtcbiAgdmFyIG1hc2sgPSB2ID4+IChJTlRfQklUUy0xKTtcbiAgcmV0dXJuICh2IF4gbWFzaykgLSBtYXNrO1xufVxuXG4vL0NvbXB1dGVzIG1pbmltdW0gb2YgaW50ZWdlcnMgeCBhbmQgeVxuZXhwb3J0cy5taW4gPSBmdW5jdGlvbih4LCB5KSB7XG4gIHJldHVybiB5IF4gKCh4IF4geSkgJiAtKHggPCB5KSk7XG59XG5cbi8vQ29tcHV0ZXMgbWF4aW11bSBvZiBpbnRlZ2VycyB4IGFuZCB5XG5leHBvcnRzLm1heCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgcmV0dXJuIHggXiAoKHggXiB5KSAmIC0oeCA8IHkpKTtcbn1cblxuLy9DaGVja3MgaWYgYSBudW1iZXIgaXMgYSBwb3dlciBvZiB0d29cbmV4cG9ydHMuaXNQb3cyID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gISh2ICYgKHYtMSkpICYmICghIXYpO1xufVxuXG4vL0NvbXB1dGVzIGxvZyBiYXNlIDIgb2YgdlxuZXhwb3J0cy5sb2cyID0gZnVuY3Rpb24odikge1xuICB2YXIgciwgc2hpZnQ7XG4gIHIgPSAgICAgKHYgPiAweEZGRkYpIDw8IDQ7IHYgPj4+PSByO1xuICBzaGlmdCA9ICh2ID4gMHhGRiAgKSA8PCAzOyB2ID4+Pj0gc2hpZnQ7IHIgfD0gc2hpZnQ7XG4gIHNoaWZ0ID0gKHYgPiAweEYgICApIDw8IDI7IHYgPj4+PSBzaGlmdDsgciB8PSBzaGlmdDtcbiAgc2hpZnQgPSAodiA+IDB4MyAgICkgPDwgMTsgdiA+Pj49IHNoaWZ0OyByIHw9IHNoaWZ0O1xuICByZXR1cm4gciB8ICh2ID4+IDEpO1xufVxuXG4vL0NvbXB1dGVzIGxvZyBiYXNlIDEwIG9mIHZcbmV4cG9ydHMubG9nMTAgPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiAgKHYgPj0gMTAwMDAwMDAwMCkgPyA5IDogKHYgPj0gMTAwMDAwMDAwKSA/IDggOiAodiA+PSAxMDAwMDAwMCkgPyA3IDpcbiAgICAgICAgICAodiA+PSAxMDAwMDAwKSA/IDYgOiAodiA+PSAxMDAwMDApID8gNSA6ICh2ID49IDEwMDAwKSA/IDQgOlxuICAgICAgICAgICh2ID49IDEwMDApID8gMyA6ICh2ID49IDEwMCkgPyAyIDogKHYgPj0gMTApID8gMSA6IDA7XG59XG5cbi8vQ291bnRzIG51bWJlciBvZiBiaXRzXG5leHBvcnRzLnBvcENvdW50ID0gZnVuY3Rpb24odikge1xuICB2ID0gdiAtICgodiA+Pj4gMSkgJiAweDU1NTU1NTU1KTtcbiAgdiA9ICh2ICYgMHgzMzMzMzMzMykgKyAoKHYgPj4+IDIpICYgMHgzMzMzMzMzMyk7XG4gIHJldHVybiAoKHYgKyAodiA+Pj4gNCkgJiAweEYwRjBGMEYpICogMHgxMDEwMTAxKSA+Pj4gMjQ7XG59XG5cbi8vQ291bnRzIG51bWJlciBvZiB0cmFpbGluZyB6ZXJvc1xuZnVuY3Rpb24gY291bnRUcmFpbGluZ1plcm9zKHYpIHtcbiAgdmFyIGMgPSAzMjtcbiAgdiAmPSAtdjtcbiAgaWYgKHYpIGMtLTtcbiAgaWYgKHYgJiAweDAwMDBGRkZGKSBjIC09IDE2O1xuICBpZiAodiAmIDB4MDBGRjAwRkYpIGMgLT0gODtcbiAgaWYgKHYgJiAweDBGMEYwRjBGKSBjIC09IDQ7XG4gIGlmICh2ICYgMHgzMzMzMzMzMykgYyAtPSAyO1xuICBpZiAodiAmIDB4NTU1NTU1NTUpIGMgLT0gMTtcbiAgcmV0dXJuIGM7XG59XG5leHBvcnRzLmNvdW50VHJhaWxpbmdaZXJvcyA9IGNvdW50VHJhaWxpbmdaZXJvcztcblxuLy9Sb3VuZHMgdG8gbmV4dCBwb3dlciBvZiAyXG5leHBvcnRzLm5leHRQb3cyID0gZnVuY3Rpb24odikge1xuICB2ICs9IHYgPT09IDA7XG4gIC0tdjtcbiAgdiB8PSB2ID4+PiAxO1xuICB2IHw9IHYgPj4+IDI7XG4gIHYgfD0gdiA+Pj4gNDtcbiAgdiB8PSB2ID4+PiA4O1xuICB2IHw9IHYgPj4+IDE2O1xuICByZXR1cm4gdiArIDE7XG59XG5cbi8vUm91bmRzIGRvd24gdG8gcHJldmlvdXMgcG93ZXIgb2YgMlxuZXhwb3J0cy5wcmV2UG93MiA9IGZ1bmN0aW9uKHYpIHtcbiAgdiB8PSB2ID4+PiAxO1xuICB2IHw9IHYgPj4+IDI7XG4gIHYgfD0gdiA+Pj4gNDtcbiAgdiB8PSB2ID4+PiA4O1xuICB2IHw9IHYgPj4+IDE2O1xuICByZXR1cm4gdiAtICh2Pj4+MSk7XG59XG5cbi8vQ29tcHV0ZXMgcGFyaXR5IG9mIHdvcmRcbmV4cG9ydHMucGFyaXR5ID0gZnVuY3Rpb24odikge1xuICB2IF49IHYgPj4+IDE2O1xuICB2IF49IHYgPj4+IDg7XG4gIHYgXj0gdiA+Pj4gNDtcbiAgdiAmPSAweGY7XG4gIHJldHVybiAoMHg2OTk2ID4+PiB2KSAmIDE7XG59XG5cbnZhciBSRVZFUlNFX1RBQkxFID0gbmV3IEFycmF5KDI1Nik7XG5cbihmdW5jdGlvbih0YWIpIHtcbiAgZm9yKHZhciBpPTA7IGk8MjU2OyArK2kpIHtcbiAgICB2YXIgdiA9IGksIHIgPSBpLCBzID0gNztcbiAgICBmb3IgKHYgPj4+PSAxOyB2OyB2ID4+Pj0gMSkge1xuICAgICAgciA8PD0gMTtcbiAgICAgIHIgfD0gdiAmIDE7XG4gICAgICAtLXM7XG4gICAgfVxuICAgIHRhYltpXSA9IChyIDw8IHMpICYgMHhmZjtcbiAgfVxufSkoUkVWRVJTRV9UQUJMRSk7XG5cbi8vUmV2ZXJzZSBiaXRzIGluIGEgMzIgYml0IHdvcmRcbmV4cG9ydHMucmV2ZXJzZSA9IGZ1bmN0aW9uKHYpIHtcbiAgcmV0dXJuICAoUkVWRVJTRV9UQUJMRVsgdiAgICAgICAgICYgMHhmZl0gPDwgMjQpIHxcbiAgICAgICAgICAoUkVWRVJTRV9UQUJMRVsodiA+Pj4gOCkgICYgMHhmZl0gPDwgMTYpIHxcbiAgICAgICAgICAoUkVWRVJTRV9UQUJMRVsodiA+Pj4gMTYpICYgMHhmZl0gPDwgOCkgIHxcbiAgICAgICAgICAgUkVWRVJTRV9UQUJMRVsodiA+Pj4gMjQpICYgMHhmZl07XG59XG5cbi8vSW50ZXJsZWF2ZSBiaXRzIG9mIDIgY29vcmRpbmF0ZXMgd2l0aCAxNiBiaXRzLiAgVXNlZnVsIGZvciBmYXN0IHF1YWR0cmVlIGNvZGVzXG5leHBvcnRzLmludGVybGVhdmUyID0gZnVuY3Rpb24oeCwgeSkge1xuICB4ICY9IDB4RkZGRjtcbiAgeCA9ICh4IHwgKHggPDwgOCkpICYgMHgwMEZGMDBGRjtcbiAgeCA9ICh4IHwgKHggPDwgNCkpICYgMHgwRjBGMEYwRjtcbiAgeCA9ICh4IHwgKHggPDwgMikpICYgMHgzMzMzMzMzMztcbiAgeCA9ICh4IHwgKHggPDwgMSkpICYgMHg1NTU1NTU1NTtcblxuICB5ICY9IDB4RkZGRjtcbiAgeSA9ICh5IHwgKHkgPDwgOCkpICYgMHgwMEZGMDBGRjtcbiAgeSA9ICh5IHwgKHkgPDwgNCkpICYgMHgwRjBGMEYwRjtcbiAgeSA9ICh5IHwgKHkgPDwgMikpICYgMHgzMzMzMzMzMztcbiAgeSA9ICh5IHwgKHkgPDwgMSkpICYgMHg1NTU1NTU1NTtcblxuICByZXR1cm4geCB8ICh5IDw8IDEpO1xufVxuXG4vL0V4dHJhY3RzIHRoZSBudGggaW50ZXJsZWF2ZWQgY29tcG9uZW50XG5leHBvcnRzLmRlaW50ZXJsZWF2ZTIgPSBmdW5jdGlvbih2LCBuKSB7XG4gIHYgPSAodiA+Pj4gbikgJiAweDU1NTU1NTU1O1xuICB2ID0gKHYgfCAodiA+Pj4gMSkpICAmIDB4MzMzMzMzMzM7XG4gIHYgPSAodiB8ICh2ID4+PiAyKSkgICYgMHgwRjBGMEYwRjtcbiAgdiA9ICh2IHwgKHYgPj4+IDQpKSAgJiAweDAwRkYwMEZGO1xuICB2ID0gKHYgfCAodiA+Pj4gMTYpKSAmIDB4MDAwRkZGRjtcbiAgcmV0dXJuICh2IDw8IDE2KSA+PiAxNjtcbn1cblxuXG4vL0ludGVybGVhdmUgYml0cyBvZiAzIGNvb3JkaW5hdGVzLCBlYWNoIHdpdGggMTAgYml0cy4gIFVzZWZ1bCBmb3IgZmFzdCBvY3RyZWUgY29kZXNcbmV4cG9ydHMuaW50ZXJsZWF2ZTMgPSBmdW5jdGlvbih4LCB5LCB6KSB7XG4gIHggJj0gMHgzRkY7XG4gIHggID0gKHggfCAoeDw8MTYpKSAmIDQyNzgxOTAzMzU7XG4gIHggID0gKHggfCAoeDw8OCkpICAmIDI1MTcxOTY5NTtcbiAgeCAgPSAoeCB8ICh4PDw0KSkgICYgMzI3MjM1NjAzNTtcbiAgeCAgPSAoeCB8ICh4PDwyKSkgICYgMTIyNzEzMzUxMztcblxuICB5ICY9IDB4M0ZGO1xuICB5ICA9ICh5IHwgKHk8PDE2KSkgJiA0Mjc4MTkwMzM1O1xuICB5ICA9ICh5IHwgKHk8PDgpKSAgJiAyNTE3MTk2OTU7XG4gIHkgID0gKHkgfCAoeTw8NCkpICAmIDMyNzIzNTYwMzU7XG4gIHkgID0gKHkgfCAoeTw8MikpICAmIDEyMjcxMzM1MTM7XG4gIHggfD0gKHkgPDwgMSk7XG4gIFxuICB6ICY9IDB4M0ZGO1xuICB6ICA9ICh6IHwgKHo8PDE2KSkgJiA0Mjc4MTkwMzM1O1xuICB6ICA9ICh6IHwgKHo8PDgpKSAgJiAyNTE3MTk2OTU7XG4gIHogID0gKHogfCAoejw8NCkpICAmIDMyNzIzNTYwMzU7XG4gIHogID0gKHogfCAoejw8MikpICAmIDEyMjcxMzM1MTM7XG4gIFxuICByZXR1cm4geCB8ICh6IDw8IDIpO1xufVxuXG4vL0V4dHJhY3RzIG50aCBpbnRlcmxlYXZlZCBjb21wb25lbnQgb2YgYSAzLXR1cGxlXG5leHBvcnRzLmRlaW50ZXJsZWF2ZTMgPSBmdW5jdGlvbih2LCBuKSB7XG4gIHYgPSAodiA+Pj4gbikgICAgICAgJiAxMjI3MTMzNTEzO1xuICB2ID0gKHYgfCAodj4+PjIpKSAgICYgMzI3MjM1NjAzNTtcbiAgdiA9ICh2IHwgKHY+Pj40KSkgICAmIDI1MTcxOTY5NTtcbiAgdiA9ICh2IHwgKHY+Pj44KSkgICAmIDQyNzgxOTAzMzU7XG4gIHYgPSAodiB8ICh2Pj4+MTYpKSAgJiAweDNGRjtcbiAgcmV0dXJuICh2PDwyMik+PjIyO1xufVxuXG4vL0NvbXB1dGVzIG5leHQgY29tYmluYXRpb24gaW4gY29sZXhpY29ncmFwaGljIG9yZGVyICh0aGlzIGlzIG1pc3Rha2VubHkgY2FsbGVkIG5leHRQZXJtdXRhdGlvbiBvbiB0aGUgYml0IHR3aWRkbGluZyBoYWNrcyBwYWdlKVxuZXhwb3J0cy5uZXh0Q29tYmluYXRpb24gPSBmdW5jdGlvbih2KSB7XG4gIHZhciB0ID0gdiB8ICh2IC0gMSk7XG4gIHJldHVybiAodCArIDEpIHwgKCgofnQgJiAtfnQpIC0gMSkgPj4+IChjb3VudFRyYWlsaW5nWmVyb3ModikgKyAxKSk7XG59XG5cbiIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLWJhc2ljLXNoYWRlci9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyLWNvcmUvbm9kZV9tb2R1bGVzL2R1cC9kdXAuanNcIikiLCIoZnVuY3Rpb24gKGdsb2JhbCxCdWZmZXIpe1xuJ3VzZSBzdHJpY3QnXG5cbnZhciBiaXRzID0gcmVxdWlyZSgnYml0LXR3aWRkbGUnKVxudmFyIGR1cCA9IHJlcXVpcmUoJ2R1cCcpXG5cbi8vTGVnYWN5IHBvb2wgc3VwcG9ydFxuaWYoIWdsb2JhbC5fX1RZUEVEQVJSQVlfUE9PTCkge1xuICBnbG9iYWwuX19UWVBFREFSUkFZX1BPT0wgPSB7XG4gICAgICBVSU5UOCAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBVSU5UMTYgIDogZHVwKFszMiwgMF0pXG4gICAgLCBVSU5UMzIgIDogZHVwKFszMiwgMF0pXG4gICAgLCBJTlQ4ICAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBJTlQxNiAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBJTlQzMiAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBGTE9BVCAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBET1VCTEUgIDogZHVwKFszMiwgMF0pXG4gICAgLCBEQVRBICAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBVSU5UOEMgIDogZHVwKFszMiwgMF0pXG4gICAgLCBCVUZGRVIgIDogZHVwKFszMiwgMF0pXG4gIH1cbn1cblxudmFyIGhhc1VpbnQ4QyA9ICh0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkpICE9PSAndW5kZWZpbmVkJ1xudmFyIFBPT0wgPSBnbG9iYWwuX19UWVBFREFSUkFZX1BPT0xcblxuLy9VcGdyYWRlIHBvb2xcbmlmKCFQT09MLlVJTlQ4Qykge1xuICBQT09MLlVJTlQ4QyA9IGR1cChbMzIsIDBdKVxufVxuaWYoIVBPT0wuQlVGRkVSKSB7XG4gIFBPT0wuQlVGRkVSID0gZHVwKFszMiwgMF0pXG59XG5cbi8vTmV3IHRlY2huaXF1ZTogT25seSBhbGxvY2F0ZSBmcm9tIEFycmF5QnVmZmVyVmlldyBhbmQgQnVmZmVyXG52YXIgREFUQSAgICA9IFBPT0wuREFUQVxuICAsIEJVRkZFUiAgPSBQT09MLkJVRkZFUlxuXG5leHBvcnRzLmZyZWUgPSBmdW5jdGlvbiBmcmVlKGFycmF5KSB7XG4gIGlmKEJ1ZmZlci5pc0J1ZmZlcihhcnJheSkpIHtcbiAgICBCVUZGRVJbYml0cy5sb2cyKGFycmF5Lmxlbmd0aCldLnB1c2goYXJyYXkpXG4gIH0gZWxzZSB7XG4gICAgaWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycmF5KSAhPT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuICAgICAgYXJyYXkgPSBhcnJheS5idWZmZXJcbiAgICB9XG4gICAgaWYoIWFycmF5KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIG4gPSBhcnJheS5sZW5ndGggfHwgYXJyYXkuYnl0ZUxlbmd0aFxuICAgIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKXwwXG4gICAgREFUQVtsb2dfbl0ucHVzaChhcnJheSlcbiAgfVxufVxuXG5mdW5jdGlvbiBmcmVlQXJyYXlCdWZmZXIoYnVmZmVyKSB7XG4gIGlmKCFidWZmZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgbiA9IGJ1ZmZlci5sZW5ndGggfHwgYnVmZmVyLmJ5dGVMZW5ndGhcbiAgdmFyIGxvZ19uID0gYml0cy5sb2cyKG4pXG4gIERBVEFbbG9nX25dLnB1c2goYnVmZmVyKVxufVxuXG5mdW5jdGlvbiBmcmVlVHlwZWRBcnJheShhcnJheSkge1xuICBmcmVlQXJyYXlCdWZmZXIoYXJyYXkuYnVmZmVyKVxufVxuXG5leHBvcnRzLmZyZWVVaW50OCA9XG5leHBvcnRzLmZyZWVVaW50MTYgPVxuZXhwb3J0cy5mcmVlVWludDMyID1cbmV4cG9ydHMuZnJlZUludDggPVxuZXhwb3J0cy5mcmVlSW50MTYgPVxuZXhwb3J0cy5mcmVlSW50MzIgPVxuZXhwb3J0cy5mcmVlRmxvYXQzMiA9IFxuZXhwb3J0cy5mcmVlRmxvYXQgPVxuZXhwb3J0cy5mcmVlRmxvYXQ2NCA9IFxuZXhwb3J0cy5mcmVlRG91YmxlID0gXG5leHBvcnRzLmZyZWVVaW50OENsYW1wZWQgPSBcbmV4cG9ydHMuZnJlZURhdGFWaWV3ID0gZnJlZVR5cGVkQXJyYXlcblxuZXhwb3J0cy5mcmVlQXJyYXlCdWZmZXIgPSBmcmVlQXJyYXlCdWZmZXJcblxuZXhwb3J0cy5mcmVlQnVmZmVyID0gZnVuY3Rpb24gZnJlZUJ1ZmZlcihhcnJheSkge1xuICBCVUZGRVJbYml0cy5sb2cyKGFycmF5Lmxlbmd0aCldLnB1c2goYXJyYXkpXG59XG5cbmV4cG9ydHMubWFsbG9jID0gZnVuY3Rpb24gbWFsbG9jKG4sIGR0eXBlKSB7XG4gIGlmKGR0eXBlID09PSB1bmRlZmluZWQgfHwgZHR5cGUgPT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICByZXR1cm4gbWFsbG9jQXJyYXlCdWZmZXIobilcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2goZHR5cGUpIHtcbiAgICAgIGNhc2UgJ3VpbnQ4JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY1VpbnQ4KG4pXG4gICAgICBjYXNlICd1aW50MTYnOlxuICAgICAgICByZXR1cm4gbWFsbG9jVWludDE2KG4pXG4gICAgICBjYXNlICd1aW50MzInOlxuICAgICAgICByZXR1cm4gbWFsbG9jVWludDMyKG4pXG4gICAgICBjYXNlICdpbnQ4JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0ludDgobilcbiAgICAgIGNhc2UgJ2ludDE2JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0ludDE2KG4pXG4gICAgICBjYXNlICdpbnQzMic6XG4gICAgICAgIHJldHVybiBtYWxsb2NJbnQzMihuKVxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgY2FzZSAnZmxvYXQzMic6XG4gICAgICAgIHJldHVybiBtYWxsb2NGbG9hdChuKVxuICAgICAgY2FzZSAnZG91YmxlJzpcbiAgICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgICByZXR1cm4gbWFsbG9jRG91YmxlKG4pXG4gICAgICBjYXNlICd1aW50OF9jbGFtcGVkJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY1VpbnQ4Q2xhbXBlZChuKVxuICAgICAgY2FzZSAnYnVmZmVyJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0J1ZmZlcihuKVxuICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICBjYXNlICdkYXRhdmlldyc6XG4gICAgICAgIHJldHVybiBtYWxsb2NEYXRhVmlldyhuKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBtYWxsb2NBcnJheUJ1ZmZlcihuKSB7XG4gIHZhciBuID0gYml0cy5uZXh0UG93MihuKVxuICB2YXIgbG9nX24gPSBiaXRzLmxvZzIobilcbiAgdmFyIGQgPSBEQVRBW2xvZ19uXVxuICBpZihkLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZC5wb3AoKVxuICB9XG4gIHJldHVybiBuZXcgQXJyYXlCdWZmZXIobilcbn1cbmV4cG9ydHMubWFsbG9jQXJyYXlCdWZmZXIgPSBtYWxsb2NBcnJheUJ1ZmZlclxuXG5mdW5jdGlvbiBtYWxsb2NVaW50OChuKSB7XG4gIHJldHVybiBuZXcgVWludDhBcnJheShtYWxsb2NBcnJheUJ1ZmZlcihuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jVWludDggPSBtYWxsb2NVaW50OFxuXG5mdW5jdGlvbiBtYWxsb2NVaW50MTYobikge1xuICByZXR1cm4gbmV3IFVpbnQxNkFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDIqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY1VpbnQxNiA9IG1hbGxvY1VpbnQxNlxuXG5mdW5jdGlvbiBtYWxsb2NVaW50MzIobikge1xuICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDQqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY1VpbnQzMiA9IG1hbGxvY1VpbnQzMlxuXG5mdW5jdGlvbiBtYWxsb2NJbnQ4KG4pIHtcbiAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIobiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0ludDggPSBtYWxsb2NJbnQ4XG5cbmZ1bmN0aW9uIG1hbGxvY0ludDE2KG4pIHtcbiAgcmV0dXJuIG5ldyBJbnQxNkFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDIqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0ludDE2ID0gbWFsbG9jSW50MTZcblxuZnVuY3Rpb24gbWFsbG9jSW50MzIobikge1xuICByZXR1cm4gbmV3IEludDMyQXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoNCpuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jSW50MzIgPSBtYWxsb2NJbnQzMlxuXG5mdW5jdGlvbiBtYWxsb2NGbG9hdChuKSB7XG4gIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDQqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0Zsb2F0MzIgPSBleHBvcnRzLm1hbGxvY0Zsb2F0ID0gbWFsbG9jRmxvYXRcblxuZnVuY3Rpb24gbWFsbG9jRG91YmxlKG4pIHtcbiAgcmV0dXJuIG5ldyBGbG9hdDY0QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoOCpuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jRmxvYXQ2NCA9IGV4cG9ydHMubWFsbG9jRG91YmxlID0gbWFsbG9jRG91YmxlXG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQ4Q2xhbXBlZChuKSB7XG4gIGlmKGhhc1VpbnQ4Qykge1xuICAgIHJldHVybiBuZXcgVWludDhDbGFtcGVkQXJyYXkobWFsbG9jQXJyYXlCdWZmZXIobiksIDAsIG4pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG1hbGxvY1VpbnQ4KG4pXG4gIH1cbn1cbmV4cG9ydHMubWFsbG9jVWludDhDbGFtcGVkID0gbWFsbG9jVWludDhDbGFtcGVkXG5cbmZ1bmN0aW9uIG1hbGxvY0RhdGFWaWV3KG4pIHtcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyhtYWxsb2NBcnJheUJ1ZmZlcihuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jRGF0YVZpZXcgPSBtYWxsb2NEYXRhVmlld1xuXG5mdW5jdGlvbiBtYWxsb2NCdWZmZXIobikge1xuICBuID0gYml0cy5uZXh0UG93MihuKVxuICB2YXIgbG9nX24gPSBiaXRzLmxvZzIobilcbiAgdmFyIGNhY2hlID0gQlVGRkVSW2xvZ19uXVxuICBpZihjYWNoZS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGNhY2hlLnBvcCgpXG4gIH1cbiAgcmV0dXJuIG5ldyBCdWZmZXIobilcbn1cbmV4cG9ydHMubWFsbG9jQnVmZmVyID0gbWFsbG9jQnVmZmVyXG5cbmV4cG9ydHMuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUoKSB7XG4gIGZvcih2YXIgaT0wOyBpPDMyOyArK2kpIHtcbiAgICBQT09MLlVJTlQ4W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLlVJTlQxNltpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5VSU5UMzJbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuSU5UOFtpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5JTlQxNltpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5JTlQzMltpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5GTE9BVFtpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5ET1VCTEVbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuVUlOVDhDW2ldLmxlbmd0aCA9IDBcbiAgICBEQVRBW2ldLmxlbmd0aCA9IDBcbiAgICBCVUZGRVJbaV0ubGVuZ3RoID0gMFxuICB9XG59XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCIvKiAoVGhlIE1JVCBMaWNlbnNlKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgQnJhbmRvbiBCZW52aWUgPGh0dHA6Ly9iYmVudmllLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZFxyXG4gKiBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcclxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSxcclxuICogc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIHdpdGggYWxsIGNvcGllcyBvclxyXG4gKiBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElOR1xyXG4gKiBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcclxuICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSAgQ0xBSU0sXHJcbiAqIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLy8gT3JpZ2luYWwgV2Vha01hcCBpbXBsZW1lbnRhdGlvbiBieSBHb3phbGEgQCBodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xMjY5OTkxXHJcbi8vIFVwZGF0ZWQgYW5kIGJ1Z2ZpeGVkIGJ5IFJheW5vcyBAIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tLzE2MzgwNTlcclxuLy8gRXhwYW5kZWQgYnkgQmVudmllIEAgaHR0cHM6Ly9naXRodWIuY29tL0JlbnZpZS9oYXJtb255LWNvbGxlY3Rpb25zXHJcblxyXG52b2lkIGZ1bmN0aW9uKGdsb2JhbCwgdW5kZWZpbmVkXywgdW5kZWZpbmVkKXtcclxuICB2YXIgZ2V0UHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcclxuICAgICAgZGVmUHJvcCAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksXHJcbiAgICAgIHRvU291cmNlID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nLFxyXG4gICAgICBjcmVhdGUgICA9IE9iamVjdC5jcmVhdGUsXHJcbiAgICAgIGhhc093biAgID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcclxuICAgICAgZnVuY05hbWUgPSAvXlxcbj9mdW5jdGlvblxccz8oXFx3Kik/Xz9cXCgvO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gZGVmaW5lKG9iamVjdCwga2V5LCB2YWx1ZSl7XHJcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB2YWx1ZSA9IGtleTtcclxuICAgICAga2V5ID0gbmFtZU9mKHZhbHVlKS5yZXBsYWNlKC9fJC8sICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZQcm9wKG9iamVjdCwga2V5LCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5hbWVPZihmdW5jKXtcclxuICAgIHJldHVybiB0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgPyAnJyA6ICduYW1lJyBpbiBmdW5jXHJcbiAgICAgICAgICA/IGZ1bmMubmFtZSA6IHRvU291cmNlLmNhbGwoZnVuYykubWF0Y2goZnVuY05hbWUpWzFdO1xyXG4gIH1cclxuXHJcbiAgLy8gIyMjIyMjIyMjIyMjXHJcbiAgLy8gIyMjIERhdGEgIyMjXHJcbiAgLy8gIyMjIyMjIyMjIyMjXHJcblxyXG4gIHZhciBEYXRhID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgZGF0YURlc2MgPSB7IHZhbHVlOiB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH0gfSxcclxuICAgICAgICBkYXRhbG9jayA9ICdyZXR1cm4gZnVuY3Rpb24oayl7aWYoaz09PXMpcmV0dXJuIGx9JyxcclxuICAgICAgICB1aWRzICAgICA9IGNyZWF0ZShudWxsKSxcclxuXHJcbiAgICAgICAgY3JlYXRlVUlEID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHZhciBrZXkgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcclxuICAgICAgICAgIHJldHVybiBrZXkgaW4gdWlkcyA/IGNyZWF0ZVVJRCgpIDogdWlkc1trZXldID0ga2V5O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdsb2JhbElEID0gY3JlYXRlVUlEKCksXHJcblxyXG4gICAgICAgIHN0b3JhZ2UgPSBmdW5jdGlvbihvYmope1xyXG4gICAgICAgICAgaWYgKGhhc093bi5jYWxsKG9iaiwgZ2xvYmFsSUQpKVxyXG4gICAgICAgICAgICByZXR1cm4gb2JqW2dsb2JhbElEXTtcclxuXHJcbiAgICAgICAgICBpZiAoIU9iamVjdC5pc0V4dGVuc2libGUob2JqKSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBtdXN0IGJlIGV4dGVuc2libGVcIik7XHJcblxyXG4gICAgICAgICAgdmFyIHN0b3JlID0gY3JlYXRlKG51bGwpO1xyXG4gICAgICAgICAgZGVmUHJvcChvYmosIGdsb2JhbElELCB7IHZhbHVlOiBzdG9yZSB9KTtcclxuICAgICAgICAgIHJldHVybiBzdG9yZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIC8vIGNvbW1vbiBwZXItb2JqZWN0IHN0b3JhZ2UgYXJlYSBtYWRlIHZpc2libGUgYnkgcGF0Y2hpbmcgZ2V0T3duUHJvcGVydHlOYW1lcydcclxuICAgIGRlZmluZShPYmplY3QsIGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMob2JqKXtcclxuICAgICAgdmFyIHByb3BzID0gZ2V0UHJvcHMob2JqKTtcclxuICAgICAgaWYgKGhhc093bi5jYWxsKG9iaiwgZ2xvYmFsSUQpKVxyXG4gICAgICAgIHByb3BzLnNwbGljZShwcm9wcy5pbmRleE9mKGdsb2JhbElEKSwgMSk7XHJcbiAgICAgIHJldHVybiBwcm9wcztcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIERhdGEoKXtcclxuICAgICAgdmFyIHB1aWQgPSBjcmVhdGVVSUQoKSxcclxuICAgICAgICAgIHNlY3JldCA9IHt9O1xyXG5cclxuICAgICAgdGhpcy51bmxvY2sgPSBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIHZhciBzdG9yZSA9IHN0b3JhZ2Uob2JqKTtcclxuICAgICAgICBpZiAoaGFzT3duLmNhbGwoc3RvcmUsIHB1aWQpKVxyXG4gICAgICAgICAgcmV0dXJuIHN0b3JlW3B1aWRdKHNlY3JldCk7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gY3JlYXRlKG51bGwsIGRhdGFEZXNjKTtcclxuICAgICAgICBkZWZQcm9wKHN0b3JlLCBwdWlkLCB7XHJcbiAgICAgICAgICB2YWx1ZTogbmV3IEZ1bmN0aW9uKCdzJywgJ2wnLCBkYXRhbG9jaykoc2VjcmV0LCBkYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVmaW5lKERhdGEucHJvdG90eXBlLCBmdW5jdGlvbiBnZXQobyl7IHJldHVybiB0aGlzLnVubG9jayhvKS52YWx1ZSB9KTtcclxuICAgIGRlZmluZShEYXRhLnByb3RvdHlwZSwgZnVuY3Rpb24gc2V0KG8sIHYpeyB0aGlzLnVubG9jayhvKS52YWx1ZSA9IHYgfSk7XHJcblxyXG4gICAgcmV0dXJuIERhdGE7XHJcbiAgfSgpKTtcclxuXHJcblxyXG4gIHZhciBXTSA9IChmdW5jdGlvbihkYXRhKXtcclxuICAgIHZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmIChrZXkgPT0gbnVsbCB8fCB0eXBlb2Yga2V5ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2Yga2V5ICE9PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIFdlYWtNYXAga2V5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3cmFwID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgdmFsdWUpe1xyXG4gICAgICB2YXIgc3RvcmUgPSBkYXRhLnVubG9jayhjb2xsZWN0aW9uKTtcclxuICAgICAgaWYgKHN0b3JlLnZhbHVlKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgaXMgYWxyZWFkeSBhIFdlYWtNYXBcIik7XHJcbiAgICAgIHN0b3JlLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHVud3JhcCA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pe1xyXG4gICAgICB2YXIgc3RvcmFnZSA9IGRhdGEudW5sb2NrKGNvbGxlY3Rpb24pLnZhbHVlO1xyXG4gICAgICBpZiAoIXN0b3JhZ2UpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIldlYWtNYXAgaXMgbm90IGdlbmVyaWNcIik7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbml0aWFsaXplID0gZnVuY3Rpb24od2Vha21hcCwgaXRlcmFibGUpe1xyXG4gICAgICBpZiAoaXRlcmFibGUgIT09IG51bGwgJiYgdHlwZW9mIGl0ZXJhYmxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgaXRlcmFibGUuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGl0ZXJhYmxlLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSl7XHJcbiAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEFycmF5ICYmIGl0ZW0ubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICBzZXQuY2FsbCh3ZWFrbWFwLCBpdGVyYWJsZVtpXVswXSwgaXRlcmFibGVbaV1bMV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIFdlYWtNYXAoaXRlcmFibGUpe1xyXG4gICAgICBpZiAodGhpcyA9PT0gZ2xvYmFsIHx8IHRoaXMgPT0gbnVsbCB8fCB0aGlzID09PSBXZWFrTWFwLnByb3RvdHlwZSlcclxuICAgICAgICByZXR1cm4gbmV3IFdlYWtNYXAoaXRlcmFibGUpO1xyXG5cclxuICAgICAgd3JhcCh0aGlzLCBuZXcgRGF0YSk7XHJcbiAgICAgIGluaXRpYWxpemUodGhpcywgaXRlcmFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldChrZXkpe1xyXG4gICAgICB2YWxpZGF0ZShrZXkpO1xyXG4gICAgICB2YXIgdmFsdWUgPSB1bndyYXAodGhpcykuZ2V0KGtleSk7XHJcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkXyA/IHVuZGVmaW5lZCA6IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcclxuICAgICAgdmFsaWRhdGUoa2V5KTtcclxuICAgICAgLy8gc3RvcmUgYSB0b2tlbiBmb3IgZXhwbGljaXQgdW5kZWZpbmVkIHNvIHRoYXQgXCJoYXNcIiB3b3JrcyBjb3JyZWN0bHlcclxuICAgICAgdW53cmFwKHRoaXMpLnNldChrZXksIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRfIDogdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhcyhrZXkpe1xyXG4gICAgICB2YWxpZGF0ZShrZXkpO1xyXG4gICAgICByZXR1cm4gdW53cmFwKHRoaXMpLmdldChrZXkpICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlXyhrZXkpe1xyXG4gICAgICB2YWxpZGF0ZShrZXkpO1xyXG4gICAgICB2YXIgZGF0YSA9IHVud3JhcCh0aGlzKSxcclxuICAgICAgICAgIGhhZCA9IGRhdGEuZ2V0KGtleSkgIT09IHVuZGVmaW5lZDtcclxuICAgICAgZGF0YS5zZXQoa2V5LCB1bmRlZmluZWQpO1xyXG4gICAgICByZXR1cm4gaGFkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XHJcbiAgICAgIHVud3JhcCh0aGlzKTtcclxuICAgICAgcmV0dXJuICdbb2JqZWN0IFdlYWtNYXBdJztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgc3JjID0gKCdyZXR1cm4gJytkZWxldGVfKS5yZXBsYWNlKCdlXycsICdcXFxcdTAwNjUnKSxcclxuICAgICAgICAgIGRlbCA9IG5ldyBGdW5jdGlvbigndW53cmFwJywgJ3ZhbGlkYXRlJywgc3JjKSh1bndyYXAsIHZhbGlkYXRlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdmFyIGRlbCA9IGRlbGV0ZV87XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNyYyA9ICgnJytPYmplY3QpLnNwbGl0KCdPYmplY3QnKTtcclxuICAgIHZhciBzdHJpbmdpZmllciA9IGZ1bmN0aW9uIHRvU3RyaW5nKCl7XHJcbiAgICAgIHJldHVybiBzcmNbMF0gKyBuYW1lT2YodGhpcykgKyBzcmNbMV07XHJcbiAgICB9O1xyXG5cclxuICAgIGRlZmluZShzdHJpbmdpZmllciwgc3RyaW5naWZpZXIpO1xyXG5cclxuICAgIHZhciBwcmVwID0geyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheVxyXG4gICAgICA/IGZ1bmN0aW9uKGYpeyBmLl9fcHJvdG9fXyA9IHN0cmluZ2lmaWVyIH1cclxuICAgICAgOiBmdW5jdGlvbihmKXsgZGVmaW5lKGYsIHN0cmluZ2lmaWVyKSB9O1xyXG5cclxuICAgIHByZXAoV2Vha01hcCk7XHJcblxyXG4gICAgW3RvU3RyaW5nLCBnZXQsIHNldCwgaGFzLCBkZWxdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKXtcclxuICAgICAgZGVmaW5lKFdlYWtNYXAucHJvdG90eXBlLCBtZXRob2QpO1xyXG4gICAgICBwcmVwKG1ldGhvZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gV2Vha01hcDtcclxuICB9KG5ldyBEYXRhKSk7XHJcblxyXG4gIHZhciBkZWZhdWx0Q3JlYXRvciA9IE9iamVjdC5jcmVhdGVcclxuICAgID8gZnVuY3Rpb24oKXsgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCkgfVxyXG4gICAgOiBmdW5jdGlvbigpeyByZXR1cm4ge30gfTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlU3RvcmFnZShjcmVhdG9yKXtcclxuICAgIHZhciB3ZWFrbWFwID0gbmV3IFdNO1xyXG4gICAgY3JlYXRvciB8fCAoY3JlYXRvciA9IGRlZmF1bHRDcmVhdG9yKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdG9yYWdlKG9iamVjdCwgdmFsdWUpe1xyXG4gICAgICBpZiAodmFsdWUgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIHdlYWttYXAuc2V0KG9iamVjdCwgdmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlID0gd2Vha21hcC5nZXQob2JqZWN0KTtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdmFsdWUgPSBjcmVhdG9yKG9iamVjdCk7XHJcbiAgICAgICAgICB3ZWFrbWFwLnNldChvYmplY3QsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yYWdlO1xyXG4gIH1cclxuXHJcblxyXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBXTTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgZXhwb3J0cy5XZWFrTWFwID0gV007XHJcbiAgfSBlbHNlIGlmICghKCdXZWFrTWFwJyBpbiBnbG9iYWwpKSB7XHJcbiAgICBnbG9iYWwuV2Vha01hcCA9IFdNO1xyXG4gIH1cclxuXHJcbiAgV00uY3JlYXRlU3RvcmFnZSA9IGNyZWF0ZVN0b3JhZ2U7XHJcbiAgaWYgKGdsb2JhbC5XZWFrTWFwKVxyXG4gICAgZ2xvYmFsLldlYWtNYXAuY3JlYXRlU3RvcmFnZSA9IGNyZWF0ZVN0b3JhZ2U7XHJcbn0oKDAsIGV2YWwpKCd0aGlzJykpO1xyXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCd3ZWFrbWFwJykgOiBXZWFrTWFwXG5cbnZhciBXZWJHTEVXU3RydWN0ID0gbmV3IHdlYWtNYXAoKVxuXG5mdW5jdGlvbiBiYXNlTmFtZShleHRfbmFtZSkge1xuICByZXR1cm4gZXh0X25hbWUucmVwbGFjZSgvXltBLVpdK18vLCAnJylcbn1cblxuZnVuY3Rpb24gaW5pdFdlYkdMRVcoZ2wpIHtcbiAgdmFyIHN0cnVjdCA9IFdlYkdMRVdTdHJ1Y3QuZ2V0KGdsKVxuICBpZihzdHJ1Y3QpIHtcbiAgICByZXR1cm4gc3RydWN0XG4gIH1cbiAgdmFyIGV4dGVuc2lvbnMgPSB7fVxuICB2YXIgc3VwcG9ydGVkID0gZ2wuZ2V0U3VwcG9ydGVkRXh0ZW5zaW9ucygpXG4gIGZvcih2YXIgaT0wOyBpPHN1cHBvcnRlZC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBleHROYW1lID0gc3VwcG9ydGVkW2ldXG5cbiAgICAvL1NraXAgTU9aXyBleHRlbnNpb25zXG4gICAgaWYoZXh0TmFtZS5pbmRleE9mKCdNT1pfJykgPT09IDApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIHZhciBleHQgPSBnbC5nZXRFeHRlbnNpb24oc3VwcG9ydGVkW2ldKVxuICAgIGlmKCFleHQpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIGV4dGVuc2lvbnNbZXh0TmFtZV0gPSBleHRcbiAgICAgIHZhciBiYXNlID0gYmFzZU5hbWUoZXh0TmFtZSlcbiAgICAgIGlmKGJhc2UgPT09IGV4dE5hbWUpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGV4dE5hbWUgPSBiYXNlXG4gICAgfVxuICB9XG4gIFdlYkdMRVdTdHJ1Y3Quc2V0KGdsLCBleHRlbnNpb25zKVxuICByZXR1cm4gZXh0ZW5zaW9uc1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbml0V2ViR0xFVyIsInZhciBjcmVhdGUgPSByZXF1aXJlKCdnbC10ZXh0dXJlMmQnKVxudmFyIG5kYXJyYXkgPSByZXF1aXJlKCduZGFycmF5JylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihnbCkge1xuICAgIC8vZmlsbCBhbiBhcnJheSB3aXRoIDB4ZmZcbiAgICB2YXIgZGF0YSA9IEFycmF5LmFwcGx5KG51bGwsIG5ldyBBcnJheSgxNikpXG4gICAgICAgICAgICAubWFwKE51bWJlci5wcm90b3R5cGUudmFsdWVPZiwgMHhGRik7XG4gICAgLy9jcmVhdGUgYSAyRCBuZGFycmF5XG4gICAgdmFyIGFycmF5ID0gbmRhcnJheShuZXcgVWludDhBcnJheShkYXRhKSwgWzIsIDIsIDRdKVxuICAgIHJldHVybiBjcmVhdGUoZ2wsIGFycmF5KVxufSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvbmRhcnJheS1vcHMvbmRhcnJheS1vcHMuanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9wb29sLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy93ZWJnbGV3L3dlYmdsZXcuanNcIikiLCIndXNlIHN0cmljdCdcblxudmFyIG5kYXJyYXkgPSByZXF1aXJlKCduZGFycmF5JylcbnZhciBvcHMgICAgID0gcmVxdWlyZSgnbmRhcnJheS1vcHMnKVxudmFyIHBvb2wgICAgPSByZXF1aXJlKCd0eXBlZGFycmF5LXBvb2wnKVxudmFyIHdlYmdsZXcgPSByZXF1aXJlKCd3ZWJnbGV3JylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVUZXh0dXJlMkRcblxudmFyIGxpbmVhclR5cGVzID0gbnVsbFxudmFyIGZpbHRlclR5cGVzID0gbnVsbFxudmFyIHdyYXBUeXBlcyAgID0gbnVsbFxuXG5mdW5jdGlvbiBsYXp5SW5pdExpbmVhclR5cGVzKGdsKSB7XG4gIGxpbmVhclR5cGVzID0gW1xuICAgIGdsLkxJTkVBUixcbiAgICBnbC5ORUFSRVNUX01JUE1BUF9MSU5FQVIsXG4gICAgZ2wuTElORUFSX01JUE1BUF9ORUFSRVNULFxuICAgIGdsLkxJTkVBUl9NSVBNQVBfTkVBUkVTVFxuICBdXG4gIGZpbHRlclR5cGVzID0gW1xuICAgIGdsLk5FQVJFU1QsXG4gICAgZ2wuTElORUFSLFxuICAgIGdsLk5FQVJFU1RfTUlQTUFQX05FQVJFU1QsXG4gICAgZ2wuTkVBUkVTVF9NSVBNQVBfTElORUFSLFxuICAgIGdsLkxJTkVBUl9NSVBNQVBfTkVBUkVTVCxcbiAgICBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUlxuICBdXG4gIHdyYXBUeXBlcyA9IFtcbiAgICBnbC5SRVBFQVQsXG4gICAgZ2wuQ0xBTVBfVE9fRURHRSxcbiAgICBnbC5NSVJST1JFRF9SRVBFQVRcbiAgXVxufVxuXG52YXIgY29udmVydEZsb2F0VG9VaW50OCA9IGZ1bmN0aW9uKG91dCwgaW5wKSB7XG4gIG9wcy5tdWxzKG91dCwgaW5wLCAyNTUuMClcbn1cblxuZnVuY3Rpb24gcmVzaGFwZVRleHR1cmUodGV4LCB3LCBoKSB7XG4gIHZhciBnbCA9IHRleC5nbFxuICB2YXIgbWF4U2l6ZSA9IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKVxuICBpZih3IDwgMCB8fCB3ID4gbWF4U2l6ZSB8fCBoIDwgMCB8fCBoID4gbWF4U2l6ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHRleHR1cmUgc2l6ZScpXG4gIH1cbiAgdGV4Ll9zaGFwZSA9IFt3LCBoXVxuICB0ZXguYmluZCgpXG4gIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgdGV4LmZvcm1hdCwgdywgaCwgMCwgdGV4LmZvcm1hdCwgdGV4LnR5cGUsIG51bGwpXG4gIHRleC5fbWlwTGV2ZWxzID0gWzBdXG4gIHJldHVybiB0ZXhcbn1cblxuZnVuY3Rpb24gVGV4dHVyZTJEKGdsLCBoYW5kbGUsIHdpZHRoLCBoZWlnaHQsIGZvcm1hdCwgdHlwZSkge1xuICB0aGlzLmdsID0gZ2xcbiAgdGhpcy5oYW5kbGUgPSBoYW5kbGVcbiAgdGhpcy5mb3JtYXQgPSBmb3JtYXRcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLl9zaGFwZSA9IFt3aWR0aCwgaGVpZ2h0XVxuICB0aGlzLl9taXBMZXZlbHMgPSBbMF1cbiAgdGhpcy5fbWFnRmlsdGVyID0gZ2wuTkVBUkVTVFxuICB0aGlzLl9taW5GaWx0ZXIgPSBnbC5ORUFSRVNUXG4gIHRoaXMuX3dyYXBTID0gZ2wuQ0xBTVBfVE9fRURHRVxuICB0aGlzLl93cmFwVCA9IGdsLkNMQU1QX1RPX0VER0VcbiAgdGhpcy5fYW5pc29TYW1wbGVzID0gMVxuXG4gIHZhciBwYXJlbnQgPSB0aGlzXG4gIHZhciB3cmFwVmVjdG9yID0gW3RoaXMuX3dyYXBTLCB0aGlzLl93cmFwVF1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMod3JhcFZlY3RvciwgW1xuICAgIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuX3dyYXBTXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQud3JhcFMgPSB2XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGFyZW50Ll93cmFwVFxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gcGFyZW50LndyYXBUID0gdlxuICAgICAgfVxuICAgIH1cbiAgXSlcbiAgdGhpcy5fd3JhcFZlY3RvciA9IHdyYXBWZWN0b3JcblxuICB2YXIgc2hhcGVWZWN0b3IgPSBbdGhpcy5fc2hhcGVbMF0sIHRoaXMuX3NoYXBlWzFdXVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzaGFwZVZlY3RvciwgW1xuICAgIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuX3NoYXBlWzBdXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQud2lkdGggPSB2XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGFyZW50Ll9zaGFwZVsxXVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gcGFyZW50LmhlaWdodCA9IHZcbiAgICAgIH1cbiAgICB9XG4gIF0pXG4gIHRoaXMuX3NoYXBlVmVjdG9yID0gc2hhcGVWZWN0b3Jcbn1cblxudmFyIHByb3RvID0gVGV4dHVyZTJELnByb3RvdHlwZVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhwcm90bywge1xuICBtaW5GaWx0ZXI6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21pbkZpbHRlclxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICB0aGlzLmJpbmQoKVxuICAgICAgdmFyIGdsID0gdGhpcy5nbFxuICAgICAgaWYodGhpcy50eXBlID09PSBnbC5GTE9BVCAmJiBsaW5lYXJUeXBlcy5pbmRleE9mKHYpID49IDApIHtcbiAgICAgICAgaWYoIXdlYmdsZXcoZ2wpLnRleHR1cmVfZmxvYXRfbGluZWFyKSB7XG4gICAgICAgICAgdiA9IGdsLk5FQVJFU1RcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoZmlsdGVyVHlwZXMuaW5kZXhPZih2KSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVua25vd24gZmlsdGVyIG1vZGUgJyArIHYpXG4gICAgICB9XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdilcbiAgICAgIHJldHVybiB0aGlzLl9taW5GaWx0ZXIgPSB2XG4gICAgfVxuICB9LFxuICBtYWdGaWx0ZXI6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hZ0ZpbHRlclxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICB0aGlzLmJpbmQoKVxuICAgICAgdmFyIGdsID0gdGhpcy5nbFxuICAgICAgaWYodGhpcy50eXBlID09PSBnbC5GTE9BVCAmJiBsaW5lYXJUeXBlcy5pbmRleE9mKHYpID49IDApIHtcbiAgICAgICAgaWYoIXdlYmdsZXcoZ2wpLnRleHR1cmVfZmxvYXRfbGluZWFyKSB7XG4gICAgICAgICAgdiA9IGdsLk5FQVJFU1RcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoZmlsdGVyVHlwZXMuaW5kZXhPZih2KSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVua25vd24gZmlsdGVyIG1vZGUgJyArIHYpXG4gICAgICB9XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgdilcbiAgICAgIHJldHVybiB0aGlzLl9tYWdGaWx0ZXIgPSB2XG4gICAgfVxuICB9LFxuICBtaXBTYW1wbGVzOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hbmlzb1NhbXBsZXNcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24oaSkge1xuICAgICAgdmFyIHBzYW1wbGVzID0gdGhpcy5fYW5pc29TYW1wbGVzXG4gICAgICB0aGlzLl9hbmlzb1NhbXBsZXMgPSBNYXRoLm1heChpLCAxKXwwXG4gICAgICBpZihwc2FtcGxlcyAhPT0gdGhpcy5fYW5pc29TYW1wbGVzKSB7XG4gICAgICAgIHZhciBleHQgPSB3ZWJnbGV3KHRoaXMuZ2wpLkVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1xuICAgICAgICBpZihleHQpIHtcbiAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmYodGhpcy5nbC5URVhUVVJFXzJELCBleHQuVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIHRoaXMuX2FuaXNvU2FtcGxlcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2FuaXNvU2FtcGxlc1xuICAgIH1cbiAgfSxcbiAgd3JhcFM6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBTXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHRoaXMuYmluZCgpXG4gICAgICBpZih3cmFwVHlwZXMuaW5kZXhPZih2KSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVua25vd24gd3JhcCBtb2RlICcgKyB2KVxuICAgICAgfVxuICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdilcbiAgICAgIHJldHVybiB0aGlzLl93cmFwUyA9IHZcbiAgICB9XG4gIH0sXG4gIHdyYXBUOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwVFxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICB0aGlzLmJpbmQoKVxuICAgICAgaWYod3JhcFR5cGVzLmluZGV4T2YodikgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbmtub3duIHdyYXAgbW9kZSAnICsgdilcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1QsIHYpXG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFQgPSB2XG4gICAgfVxuICB9LFxuICB3cmFwOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwVmVjdG9yXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICAgIHYgPSBbdix2XVxuICAgICAgfVxuICAgICAgaWYodi5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IE11c3Qgc3BlY2lmeSB3cmFwIG1vZGUgZm9yIHJvd3MgYW5kIGNvbHVtbnMnKVxuICAgICAgfVxuICAgICAgZm9yKHZhciBpPTA7IGk8MjsgKytpKSB7XG4gICAgICAgIGlmKHdyYXBUeXBlcy5pbmRleE9mKHZbaV0pIDwgMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbmtub3duIHdyYXAgbW9kZSAnICsgdilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fd3JhcFMgPSB2WzBdXG4gICAgICB0aGlzLl93cmFwVCA9IHZbMV1cblxuICAgICAgdmFyIGdsID0gdGhpcy5nbFxuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIHRoaXMuX3dyYXBTKVxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgdGhpcy5fd3JhcFQpXG5cbiAgICAgIHJldHVybiB2XG4gICAgfVxuICB9LFxuICBzaGFwZToge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2hhcGVWZWN0b3JcbiAgICB9LCBcbiAgICBzZXQ6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgICAgIHggPSBbeHwwLHh8MF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKHgubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgdGV4dHVyZSBzaGFwZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc2hhcGVUZXh0dXJlKHRoaXMsIHhbMF18MCwgeFsxXXwwKVxuICAgICAgcmV0dXJuIFt4WzBdfDAsIHhbMV18MF1cbiAgICB9XG4gIH0sXG4gIHdpZHRoOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaGFwZVswXVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih3KSB7XG4gICAgICB3ID0gd3wwXG4gICAgICByZXNoYXBlVGV4dHVyZSh0aGlzLCB3LCB0aGlzLl9zaGFwZVsxXSlcbiAgICAgIHJldHVybiB3XG4gICAgfVxuICB9LFxuICBoZWlnaHQ6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NoYXBlWzFdXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKGgpIHtcbiAgICAgIGggPSBofDBcbiAgICAgIHJlc2hhcGVUZXh0dXJlKHRoaXMsIHRoaXMuX3NoYXBlWzBdLCBoKVxuICAgICAgcmV0dXJuIGhcbiAgICB9XG4gIH1cbn0pXG5cbnByb3RvLmJpbmQgPSBmdW5jdGlvbih1bml0KSB7XG4gIHZhciBnbCA9IHRoaXMuZ2xcbiAgaWYodW5pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArICh1bml0fDApKVxuICB9XG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuaGFuZGxlKVxuICBpZih1bml0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKHVuaXR8MClcbiAgfVxuICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLkFDVElWRV9URVhUVVJFKSAtIGdsLlRFWFRVUkUwXG59XG5cbnByb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbC5kZWxldGVUZXh0dXJlKHRoaXMuaGFuZGxlKVxufVxuXG5wcm90by5nZW5lcmF0ZU1pcG1hcCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmJpbmQoKVxuICB0aGlzLmdsLmdlbmVyYXRlTWlwbWFwKHRoaXMuZ2wuVEVYVFVSRV8yRClcbiAgXG4gIC8vVXBkYXRlIG1pcCBsZXZlbHNcbiAgdmFyIGwgPSBNYXRoLm1pbih0aGlzLl9zaGFwZVswXSwgdGhpcy5fc2hhcGVbMV0pXG4gIGZvcih2YXIgaT0wOyBsPjA7ICsraSwgbD4+Pj0xKSB7XG4gICAgaWYodGhpcy5fbWlwTGV2ZWxzLmluZGV4T2YoaSkgPCAwKSB7XG4gICAgICB0aGlzLl9taXBMZXZlbHMucHVzaChpKVxuICAgIH1cbiAgfVxufVxuXG5wcm90by5zZXRQaXhlbHMgPSBmdW5jdGlvbihkYXRhLCB4X29mZiwgeV9vZmYsIG1pcF9sZXZlbCkge1xuICB2YXIgZ2wgPSB0aGlzLmdsXG4gIHRoaXMuYmluZCgpXG4gIGlmKEFycmF5LmlzQXJyYXkoeF9vZmYpKSB7XG4gICAgbWlwX2xldmVsID0geV9vZmZcbiAgICB5X29mZiA9IHhfb2ZmWzFdfDBcbiAgICB4X29mZiA9IHhfb2ZmWzBdfDBcbiAgfSBlbHNlIHtcbiAgICB4X29mZiA9IHhfb2ZmIHx8IDBcbiAgICB5X29mZiA9IHlfb2ZmIHx8IDBcbiAgfVxuICBtaXBfbGV2ZWwgPSBtaXBfbGV2ZWwgfHwgMFxuICBpZihkYXRhIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQgfHxcbiAgICAgZGF0YSBpbnN0YW5jZW9mIEltYWdlRGF0YSB8fFxuICAgICBkYXRhIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fFxuICAgICBkYXRhIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgIHZhciBuZWVkc01pcCA9IHRoaXMuX21pcExldmVscy5pbmRleE9mKG1pcF9sZXZlbCkgPCAwXG4gICAgaWYobmVlZHNNaXApIHtcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5mb3JtYXQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIGRhdGEpXG4gICAgICB0aGlzLl9taXBMZXZlbHMucHVzaChtaXBfbGV2ZWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCB4X29mZiwgeV9vZmYsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIGRhdGEpXG4gICAgfVxuICB9IGVsc2UgaWYoZGF0YS5zaGFwZSAmJiBkYXRhLnN0cmlkZSAmJiBkYXRhLmRhdGEpIHtcbiAgICBpZihkYXRhLnNoYXBlLmxlbmd0aCA8IDIgfHxcbiAgICAgICB4X29mZiArIGRhdGEuc2hhcGVbMV0gPiB0aGlzLl9zaGFwZVsxXT4+Pm1pcF9sZXZlbCB8fFxuICAgICAgIHlfb2ZmICsgZGF0YS5zaGFwZVswXSA+IHRoaXMuX3NoYXBlWzBdPj4+bWlwX2xldmVsIHx8XG4gICAgICAgeF9vZmYgPCAwIHx8XG4gICAgICAgeV9vZmYgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVGV4dHVyZSBkaW1lbnNpb25zIGFyZSBvdXQgb2YgYm91bmRzJylcbiAgICB9XG4gICAgdGV4U3ViSW1hZ2VBcnJheShnbCwgeF9vZmYsIHlfb2ZmLCBtaXBfbGV2ZWwsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIHRoaXMuX21pcExldmVscywgZGF0YSlcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5zdXBwb3J0ZWQgZGF0YSB0eXBlJylcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGlzUGFja2VkKHNoYXBlLCBzdHJpZGUpIHtcbiAgaWYoc2hhcGUubGVuZ3RoID09PSAzKSB7XG4gICAgcmV0dXJuICAoc3RyaWRlWzJdID09PSAxKSAmJiBcbiAgICAgICAgICAgIChzdHJpZGVbMV0gPT09IHNoYXBlWzBdKnNoYXBlWzJdKSAmJlxuICAgICAgICAgICAgKHN0cmlkZVswXSA9PT0gc2hhcGVbMl0pXG4gIH1cbiAgcmV0dXJuICAoc3RyaWRlWzBdID09PSAxKSAmJiBcbiAgICAgICAgICAoc3RyaWRlWzFdID09PSBzaGFwZVswXSlcbn1cblxuZnVuY3Rpb24gdGV4U3ViSW1hZ2VBcnJheShnbCwgeF9vZmYsIHlfb2ZmLCBtaXBfbGV2ZWwsIGNmb3JtYXQsIGN0eXBlLCBtaXBMZXZlbHMsIGFycmF5KSB7XG4gIHZhciBkdHlwZSA9IGFycmF5LmR0eXBlXG4gIHZhciBzaGFwZSA9IGFycmF5LnNoYXBlLnNsaWNlKClcbiAgaWYoc2hhcGUubGVuZ3RoIDwgMiB8fCBzaGFwZS5sZW5ndGggPiAzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgbmRhcnJheSwgbXVzdCBiZSAyZCBvciAzZCcpXG4gIH1cbiAgdmFyIHR5cGUgPSAwLCBmb3JtYXQgPSAwXG4gIHZhciBwYWNrZWQgPSBpc1BhY2tlZChzaGFwZSwgYXJyYXkuc3RyaWRlLnNsaWNlKCkpXG4gIGlmKGR0eXBlID09PSAnZmxvYXQzMicpIHtcbiAgICB0eXBlID0gZ2wuRkxPQVRcbiAgfSBlbHNlIGlmKGR0eXBlID09PSAnZmxvYXQ2NCcpIHtcbiAgICB0eXBlID0gZ2wuRkxPQVRcbiAgICBwYWNrZWQgPSBmYWxzZVxuICAgIGR0eXBlID0gJ2Zsb2F0MzInXG4gIH0gZWxzZSBpZihkdHlwZSA9PT0gJ3VpbnQ4Jykge1xuICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG4gIH0gZWxzZSB7XG4gICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEVcbiAgICBwYWNrZWQgPSBmYWxzZVxuICAgIGR0eXBlID0gJ3VpbnQ4J1xuICB9XG4gIHZhciBjaGFubmVscyA9IDFcbiAgaWYoc2hhcGUubGVuZ3RoID09PSAyKSB7XG4gICAgZm9ybWF0ID0gZ2wuTFVNSU5BTkNFXG4gICAgc2hhcGUgPSBbc2hhcGVbMF0sIHNoYXBlWzFdLCAxXVxuICAgIGFycmF5ID0gbmRhcnJheShhcnJheS5kYXRhLCBzaGFwZSwgW2FycmF5LnN0cmlkZVswXSwgYXJyYXkuc3RyaWRlWzFdLCAxXSwgYXJyYXkub2Zmc2V0KVxuICB9IGVsc2UgaWYoc2hhcGUubGVuZ3RoID09PSAzKSB7XG4gICAgaWYoc2hhcGVbMl0gPT09IDEpIHtcbiAgICAgIGZvcm1hdCA9IGdsLkFMUEhBXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSAyKSB7XG4gICAgICBmb3JtYXQgPSBnbC5MVU1JTkFOQ0VfQUxQSEFcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDMpIHtcbiAgICAgIGZvcm1hdCA9IGdsLlJHQlxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gNCkge1xuICAgICAgZm9ybWF0ID0gZ2wuUkdCQVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBzaGFwZSBmb3IgcGl4ZWwgY29vcmRzJylcbiAgICB9XG4gICAgY2hhbm5lbHMgPSBzaGFwZVsyXVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHNoYXBlIGZvciB0ZXh0dXJlJylcbiAgfVxuICAvL0ZvciAxLWNoYW5uZWwgdGV4dHVyZXMgYWxsb3cgY29udmVyc2lvbiBiZXR3ZWVuIGZvcm1hdHNcbiAgaWYoKGZvcm1hdCAgPT09IGdsLkxVTUlOQU5DRSB8fCBmb3JtYXQgID09PSBnbC5BTFBIQSkgJiZcbiAgICAgKGNmb3JtYXQgPT09IGdsLkxVTUlOQU5DRSB8fCBjZm9ybWF0ID09PSBnbC5BTFBIQSkpIHtcbiAgICBmb3JtYXQgPSBjZm9ybWF0XG4gIH1cbiAgaWYoZm9ybWF0ICE9PSBjZm9ybWF0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEluY29tcGF0aWJsZSB0ZXh0dXJlIGZvcm1hdCBmb3Igc2V0UGl4ZWxzJylcbiAgfVxuICB2YXIgc2l6ZSA9IGFycmF5LnNpemVcbiAgdmFyIG5lZWRzTWlwID0gbWlwTGV2ZWxzLmluZGV4T2YobWlwX2xldmVsKSA8IDBcbiAgaWYobmVlZHNNaXApIHtcbiAgICBtaXBMZXZlbHMucHVzaChtaXBfbGV2ZWwpXG4gIH1cbiAgaWYodHlwZSA9PT0gY3R5cGUgJiYgcGFja2VkKSB7XG4gICAgLy9BcnJheSBkYXRhIHR5cGVzIGFyZSBjb21wYXRpYmxlLCBjYW4gZGlyZWN0bHkgY29weSBpbnRvIHRleHR1cmVcbiAgICBpZihhcnJheS5vZmZzZXQgPT09IDAgJiYgYXJyYXkuZGF0YS5sZW5ndGggPT09IHNpemUpIHtcbiAgICAgIGlmKG5lZWRzTWlwKSB7XG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCBjZm9ybWF0LCBzaGFwZVswXSwgc2hhcGVbMV0sIDAsIGNmb3JtYXQsIGN0eXBlLCBhcnJheS5kYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIHhfb2ZmLCB5X29mZiwgc2hhcGVbMF0sIHNoYXBlWzFdLCBjZm9ybWF0LCBjdHlwZSwgYXJyYXkuZGF0YSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYobmVlZHNNaXApIHtcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIGNmb3JtYXQsIHNoYXBlWzBdLCBzaGFwZVsxXSwgMCwgY2Zvcm1hdCwgY3R5cGUsIGFycmF5LmRhdGEuc3ViYXJyYXkoYXJyYXkub2Zmc2V0LCBhcnJheS5vZmZzZXQrc2l6ZSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbC50ZXhTdWJJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgeF9vZmYsIHlfb2ZmLCBzaGFwZVswXSwgc2hhcGVbMV0sIGNmb3JtYXQsIGN0eXBlLCBhcnJheS5kYXRhLnN1YmFycmF5KGFycmF5Lm9mZnNldCwgYXJyYXkub2Zmc2V0K3NpemUpKVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvL05lZWQgdG8gZG8gdHlwZSBjb252ZXJzaW9uIHRvIHBhY2sgZGF0YSBpbnRvIGJ1ZmZlclxuICAgIHZhciBwYWNrX2J1ZmZlclxuICAgIGlmKGN0eXBlID09PSBnbC5GTE9BVCkge1xuICAgICAgcGFja19idWZmZXIgPSBwb29sLm1hbGxvY0Zsb2F0MzIoc2l6ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcGFja19idWZmZXIgPSBwb29sLm1hbGxvY1VpbnQ4KHNpemUpXG4gICAgfVxuICAgIHZhciBwYWNrX3ZpZXcgPSBuZGFycmF5KHBhY2tfYnVmZmVyLCBzaGFwZSwgW3NoYXBlWzJdLCBzaGFwZVsyXSpzaGFwZVswXSwgMV0pXG4gICAgaWYodHlwZSA9PT0gZ2wuRkxPQVQgJiYgY3R5cGUgPT09IGdsLlVOU0lHTkVEX0JZVEUpIHtcbiAgICAgIGNvbnZlcnRGbG9hdFRvVWludDgocGFja192aWV3LCBhcnJheSlcbiAgICB9IGVsc2Uge1xuICAgICAgb3BzLmFzc2lnbihwYWNrX3ZpZXcsIGFycmF5KVxuICAgIH1cbiAgICBpZihuZWVkc01pcCkge1xuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIGNmb3JtYXQsIHNoYXBlWzBdLCBzaGFwZVsxXSwgMCwgY2Zvcm1hdCwgY3R5cGUsIHBhY2tfYnVmZmVyLnN1YmFycmF5KDAsIHNpemUpKVxuICAgIH0gZWxzZSB7XG4gICAgICBnbC50ZXhTdWJJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgeF9vZmYsIHlfb2ZmLCBzaGFwZVswXSwgc2hhcGVbMV0sIGNmb3JtYXQsIGN0eXBlLCBwYWNrX2J1ZmZlci5zdWJhcnJheSgwLCBzaXplKSlcbiAgICB9XG4gICAgaWYoY3R5cGUgPT09IGdsLkZMT0FUKSB7XG4gICAgICBwb29sLmZyZWVGbG9hdDMyKHBhY2tfYnVmZmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBwb29sLmZyZWVVaW50OChwYWNrX2J1ZmZlcilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFRleHR1cmUoZ2wpIHtcbiAgdmFyIHRleCA9IGdsLmNyZWF0ZVRleHR1cmUoKVxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXgpXG4gIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKVxuICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVClcbiAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSlcbiAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSlcbiAgcmV0dXJuIHRleFxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlU2hhcGUoZ2wsIHdpZHRoLCBoZWlnaHQsIGZvcm1hdCwgdHlwZSkge1xuICB2YXIgbWF4VGV4dHVyZVNpemUgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSlcbiAgaWYod2lkdGggPCAwIHx8IHdpZHRoID4gbWF4VGV4dHVyZVNpemUgfHwgaGVpZ2h0IDwgMCB8fCBoZWlnaHQgID4gbWF4VGV4dHVyZVNpemUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCB0ZXh0dXJlIHNoYXBlJylcbiAgfVxuICBpZih0eXBlID09PSBnbC5GTE9BVCAmJiAhd2ViZ2xldyhnbCkudGV4dHVyZV9mbG9hdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBGbG9hdGluZyBwb2ludCB0ZXh0dXJlcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgcGxhdGZvcm0nKVxuICB9XG4gIHZhciB0ZXggPSBpbml0VGV4dHVyZShnbClcbiAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBmb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbClcbiAgcmV0dXJuIG5ldyBUZXh0dXJlMkQoZ2wsIHRleCwgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCB0eXBlKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlRE9NKGdsLCBlbGVtZW50LCBmb3JtYXQsIHR5cGUpIHtcbiAgdmFyIHRleCA9IGluaXRUZXh0dXJlKGdsKVxuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGZvcm1hdCwgZm9ybWF0LCB0eXBlLCBlbGVtZW50KVxuICByZXR1cm4gbmV3IFRleHR1cmUyRChnbCwgdGV4LCBlbGVtZW50LndpZHRofDAsIGVsZW1lbnQuaGVpZ2h0fDAsIGZvcm1hdCwgdHlwZSlcbn1cblxuLy9DcmVhdGVzIGEgdGV4dHVyZSBmcm9tIGFuIG5kYXJyYXlcbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmVBcnJheShnbCwgYXJyYXkpIHtcbiAgdmFyIGR0eXBlID0gYXJyYXkuZHR5cGVcbiAgdmFyIHNoYXBlID0gYXJyYXkuc2hhcGUuc2xpY2UoKVxuICB2YXIgbWF4U2l6ZSA9IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKVxuICBpZihzaGFwZVswXSA8IDAgfHwgc2hhcGVbMF0gPiBtYXhTaXplIHx8IHNoYXBlWzFdIDwgMCB8fCBzaGFwZVsxXSA+IG1heFNpemUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCB0ZXh0dXJlIHNpemUnKVxuICB9XG4gIHZhciBwYWNrZWQgPSBpc1BhY2tlZChzaGFwZSwgYXJyYXkuc3RyaWRlLnNsaWNlKCkpXG4gIHZhciB0eXBlID0gMFxuICBpZihkdHlwZSA9PT0gJ2Zsb2F0MzInKSB7XG4gICAgdHlwZSA9IGdsLkZMT0FUXG4gIH0gZWxzZSBpZihkdHlwZSA9PT0gJ2Zsb2F0NjQnKSB7XG4gICAgdHlwZSA9IGdsLkZMT0FUXG4gICAgcGFja2VkID0gZmFsc2VcbiAgICBkdHlwZSA9ICdmbG9hdDMyJ1xuICB9IGVsc2UgaWYoZHR5cGUgPT09ICd1aW50OCcpIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICB9IGVsc2Uge1xuICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG4gICAgcGFja2VkID0gZmFsc2VcbiAgICBkdHlwZSA9ICd1aW50OCdcbiAgfVxuICB2YXIgZm9ybWF0ID0gMFxuICBpZihzaGFwZS5sZW5ndGggPT09IDIpIHtcbiAgICBmb3JtYXQgPSBnbC5MVU1JTkFOQ0VcbiAgICBzaGFwZSA9IFtzaGFwZVswXSwgc2hhcGVbMV0sIDFdXG4gICAgYXJyYXkgPSBuZGFycmF5KGFycmF5LmRhdGEsIHNoYXBlLCBbYXJyYXkuc3RyaWRlWzBdLCBhcnJheS5zdHJpZGVbMV0sIDFdLCBhcnJheS5vZmZzZXQpXG4gIH0gZWxzZSBpZihzaGFwZS5sZW5ndGggPT09IDMpIHtcbiAgICBpZihzaGFwZVsyXSA9PT0gMSkge1xuICAgICAgZm9ybWF0ID0gZ2wuQUxQSEFcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDIpIHtcbiAgICAgIGZvcm1hdCA9IGdsLkxVTUlOQU5DRV9BTFBIQVxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gMykge1xuICAgICAgZm9ybWF0ID0gZ2wuUkdCXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSA0KSB7XG4gICAgICBmb3JtYXQgPSBnbC5SR0JBXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHNoYXBlIGZvciBwaXhlbCBjb29yZHMnKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBzaGFwZSBmb3IgdGV4dHVyZScpXG4gIH1cbiAgaWYodHlwZSA9PT0gZ2wuRkxPQVQgJiYgIXdlYmdsZXcoZ2wpLnRleHR1cmVfZmxvYXQpIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICAgIHBhY2tlZCA9IGZhbHNlXG4gIH1cbiAgdmFyIGJ1ZmZlciwgYnVmX3N0b3JlXG4gIHZhciBzaXplID0gYXJyYXkuc2l6ZVxuICBpZighcGFja2VkKSB7XG4gICAgdmFyIHN0cmlkZSA9IFtzaGFwZVsyXSwgc2hhcGVbMl0qc2hhcGVbMF0sIDFdXG4gICAgYnVmX3N0b3JlID0gcG9vbC5tYWxsb2Moc2l6ZSwgZHR5cGUpXG4gICAgdmFyIGJ1Zl9hcnJheSA9IG5kYXJyYXkoYnVmX3N0b3JlLCBzaGFwZSwgc3RyaWRlLCAwKVxuICAgIGlmKChkdHlwZSA9PT0gJ2Zsb2F0MzInIHx8IGR0eXBlID09PSAnZmxvYXQ2NCcpICYmIHR5cGUgPT09IGdsLlVOU0lHTkVEX0JZVEUpIHtcbiAgICAgIGNvbnZlcnRGbG9hdFRvVWludDgoYnVmX2FycmF5LCBhcnJheSlcbiAgICB9IGVsc2Uge1xuICAgICAgb3BzLmFzc2lnbihidWZfYXJyYXksIGFycmF5KVxuICAgIH1cbiAgICBidWZmZXIgPSBidWZfc3RvcmUuc3ViYXJyYXkoMCwgc2l6ZSlcbiAgfSBlbHNlIGlmIChhcnJheS5vZmZzZXQgPT09IDAgJiYgYXJyYXkuZGF0YS5sZW5ndGggPT09IHNpemUpIHtcbiAgICBidWZmZXIgPSBhcnJheS5kYXRhXG4gIH0gZWxzZSB7XG4gICAgYnVmZmVyID0gYXJyYXkuZGF0YS5zdWJhcnJheShhcnJheS5vZmZzZXQsIGFycmF5Lm9mZnNldCArIHNpemUpXG4gIH1cbiAgdmFyIHRleCA9IGluaXRUZXh0dXJlKGdsKVxuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGZvcm1hdCwgc2hhcGVbMF0sIHNoYXBlWzFdLCAwLCBmb3JtYXQsIHR5cGUsIGJ1ZmZlcilcbiAgaWYoIXBhY2tlZCkge1xuICAgIHBvb2wuZnJlZShidWZfc3RvcmUpXG4gIH1cbiAgcmV0dXJuIG5ldyBUZXh0dXJlMkQoZ2wsIHRleCwgc2hhcGVbMF0sIHNoYXBlWzFdLCBmb3JtYXQsIHR5cGUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUyRChnbCkge1xuICBpZihhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogTWlzc2luZyBhcmd1bWVudHMgZm9yIHRleHR1cmUyZCBjb25zdHJ1Y3RvcicpXG4gIH1cbiAgaWYoIWxpbmVhclR5cGVzKSB7XG4gICAgbGF6eUluaXRMaW5lYXJUeXBlcyhnbClcbiAgfVxuICBpZih0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBjcmVhdGVUZXh0dXJlU2hhcGUoZ2wsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM118fGdsLlJHQkEsIGFyZ3VtZW50c1s0XXx8Z2wuVU5TSUdORURfQllURSlcbiAgfVxuICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1sxXSkpIHtcbiAgICByZXR1cm4gY3JlYXRlVGV4dHVyZVNoYXBlKGdsLCBhcmd1bWVudHNbMV1bMF18MCwgYXJndW1lbnRzWzFdWzFdfDAsIGFyZ3VtZW50c1syXXx8Z2wuUkdCQSwgYXJndW1lbnRzWzNdfHxnbC5VTlNJR05FRF9CWVRFKVxuICB9XG4gIGlmKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIG9iaiA9IGFyZ3VtZW50c1sxXVxuICAgIGlmKG9iaiBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50IHx8XG4gICAgICAgb2JqIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fFxuICAgICAgIG9iaiBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQgfHxcbiAgICAgICBvYmogaW5zdGFuY2VvZiBJbWFnZURhdGEpIHtcbiAgICAgIHJldHVybiBjcmVhdGVUZXh0dXJlRE9NKGdsLCBvYmosIGFyZ3VtZW50c1syXXx8Z2wuUkdCQSwgYXJndW1lbnRzWzNdfHxnbC5VTlNJR05FRF9CWVRFKVxuICAgIH0gZWxzZSBpZihvYmouc2hhcGUgJiYgb2JqLmRhdGEgJiYgb2JqLnN0cmlkZSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVRleHR1cmVBcnJheShnbCwgb2JqKVxuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBhcmd1bWVudHMgZm9yIHRleHR1cmUyZCBjb25zdHJ1Y3RvcicpXG59XG4iLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG52YXIgaW90YSA9IHJlcXVpcmUoXCJpb3RhLWFycmF5XCIpXG5cbnZhciBhcnJheU1ldGhvZHMgPSBbXG4gIFwiY29uY2F0XCIsXG4gIFwiam9pblwiLFxuICBcInNsaWNlXCIsXG4gIFwidG9TdHJpbmdcIixcbiAgXCJpbmRleE9mXCIsXG4gIFwibGFzdEluZGV4T2ZcIixcbiAgXCJmb3JFYWNoXCIsXG4gIFwiZXZlcnlcIixcbiAgXCJzb21lXCIsXG4gIFwiZmlsdGVyXCIsXG4gIFwibWFwXCIsXG4gIFwicmVkdWNlXCIsXG4gIFwicmVkdWNlUmlnaHRcIlxuXVxuXG52YXIgaGFzVHlwZWRBcnJheXMgID0gKCh0eXBlb2YgRmxvYXQ2NEFycmF5KSAhPT0gXCJ1bmRlZmluZWRcIilcbnZhciBoYXNCdWZmZXIgICAgICAgPSAoKHR5cGVvZiBCdWZmZXIpICE9PSBcInVuZGVmaW5lZFwiKVxuXG5mdW5jdGlvbiBjb21wYXJlMXN0KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gLSBiWzBdXG59XG5cbmZ1bmN0aW9uIG9yZGVyKCkge1xuICB2YXIgc3RyaWRlID0gdGhpcy5zdHJpZGVcbiAgdmFyIHRlcm1zID0gbmV3IEFycmF5KHN0cmlkZS5sZW5ndGgpXG4gIHZhciBpXG4gIGZvcihpPTA7IGk8dGVybXMubGVuZ3RoOyArK2kpIHtcbiAgICB0ZXJtc1tpXSA9IFtNYXRoLmFicyhzdHJpZGVbaV0pLCBpXVxuICB9XG4gIHRlcm1zLnNvcnQoY29tcGFyZTFzdClcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh0ZXJtcy5sZW5ndGgpXG4gIGZvcihpPTA7IGk8cmVzdWx0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmVzdWx0W2ldID0gdGVybXNbaV1bMV1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVDb25zdHJ1Y3RvcihkdHlwZSwgZGltZW5zaW9uKSB7XG4gIHZhciBjbGFzc05hbWUgPSBbXCJWaWV3XCIsIGRpbWVuc2lvbiwgXCJkXCIsIGR0eXBlXS5qb2luKFwiXCIpXG4gIGlmKGRpbWVuc2lvbiA8IDApIHtcbiAgICBjbGFzc05hbWUgPSBcIlZpZXdfTmlsXCIgKyBkdHlwZVxuICB9XG4gIHZhciB1c2VHZXR0ZXJzID0gKGR0eXBlID09PSBcImdlbmVyaWNcIilcbiAgXG4gIGlmKGRpbWVuc2lvbiA9PT0gLTEpIHtcbiAgICAvL1NwZWNpYWwgY2FzZSBmb3IgdHJpdmlhbCBhcnJheXNcbiAgICB2YXIgY29kZSA9IFxuICAgICAgXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCIoYSl7dGhpcy5kYXRhPWE7fTtcXFxudmFyIHByb3RvPVwiK2NsYXNzTmFtZStcIi5wcm90b3R5cGU7XFxcbnByb3RvLmR0eXBlPSdcIitkdHlwZStcIic7XFxcbnByb3RvLmluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIC0xfTtcXFxucHJvdG8uc2l6ZT0wO1xcXG5wcm90by5kaW1lbnNpb249LTE7XFxcbnByb3RvLnNoYXBlPXByb3RvLnN0cmlkZT1wcm90by5vcmRlcj1bXTtcXFxucHJvdG8ubG89cHJvdG8uaGk9cHJvdG8udHJhbnNwb3NlPXByb3RvLnN0ZXA9XFxcbmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhKTt9O1xcXG5wcm90by5nZXQ9cHJvdG8uc2V0PWZ1bmN0aW9uKCl7fTtcXFxucHJvdG8ucGljaz1mdW5jdGlvbigpe3JldHVybiBudWxsfTtcXFxucmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF9cIitjbGFzc05hbWUrXCIoYSl7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIoYSk7fVwiXG4gICAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbihjb2RlKVxuICAgIHJldHVybiBwcm9jZWR1cmUoKVxuICB9IGVsc2UgaWYoZGltZW5zaW9uID09PSAwKSB7XG4gICAgLy9TcGVjaWFsIGNhc2UgZm9yIDBkIGFycmF5c1xuICAgIHZhciBjb2RlID1cbiAgICAgIFwiZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiKGEsZCkge1xcXG50aGlzLmRhdGEgPSBhO1xcXG50aGlzLm9mZnNldCA9IGRcXFxufTtcXFxudmFyIHByb3RvPVwiK2NsYXNzTmFtZStcIi5wcm90b3R5cGU7XFxcbnByb3RvLmR0eXBlPSdcIitkdHlwZStcIic7XFxcbnByb3RvLmluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub2Zmc2V0fTtcXFxucHJvdG8uZGltZW5zaW9uPTA7XFxcbnByb3RvLnNpemU9MTtcXFxucHJvdG8uc2hhcGU9XFxcbnByb3RvLnN0cmlkZT1cXFxucHJvdG8ub3JkZXI9W107XFxcbnByb3RvLmxvPVxcXG5wcm90by5oaT1cXFxucHJvdG8udHJhbnNwb3NlPVxcXG5wcm90by5zdGVwPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9jb3B5KCkge1xcXG5yZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEsdGhpcy5vZmZzZXQpXFxcbn07XFxcbnByb3RvLnBpY2s9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3BpY2soKXtcXFxucmV0dXJuIFRyaXZpYWxBcnJheSh0aGlzLmRhdGEpO1xcXG59O1xcXG5wcm90by52YWx1ZU9mPXByb3RvLmdldD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfZ2V0KCl7XFxcbnJldHVybiBcIisodXNlR2V0dGVycyA/IFwidGhpcy5kYXRhLmdldCh0aGlzLm9mZnNldClcIiA6IFwidGhpcy5kYXRhW3RoaXMub2Zmc2V0XVwiKStcblwifTtcXFxucHJvdG8uc2V0PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9zZXQodil7XFxcbnJldHVybiBcIisodXNlR2V0dGVycyA/IFwidGhpcy5kYXRhLnNldCh0aGlzLm9mZnNldCx2KVwiIDogXCJ0aGlzLmRhdGFbdGhpcy5vZmZzZXRdPXZcIikrXCJcXFxufTtcXFxucmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF9cIitjbGFzc05hbWUrXCIoYSxiLGMsZCl7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIoYSxkKX1cIlxuICAgIHZhciBwcm9jZWR1cmUgPSBuZXcgRnVuY3Rpb24oXCJUcml2aWFsQXJyYXlcIiwgY29kZSlcbiAgICByZXR1cm4gcHJvY2VkdXJlKENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdWzBdKVxuICB9XG5cbiAgdmFyIGNvZGUgPSBbXCIndXNlIHN0cmljdCdcIl1cbiAgICBcbiAgLy9DcmVhdGUgY29uc3RydWN0b3IgZm9yIHZpZXdcbiAgdmFyIGluZGljZXMgPSBpb3RhKGRpbWVuc2lvbilcbiAgdmFyIGFyZ3MgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBcImlcIitpIH0pXG4gIHZhciBpbmRleF9zdHIgPSBcInRoaXMub2Zmc2V0K1wiICsgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgICByZXR1cm4gXCJ0aGlzLl9zdHJpZGVcIiArIGkgKyBcIippXCIgKyBpXG4gICAgICB9KS5qb2luKFwiK1wiKVxuICBjb2RlLnB1c2goXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCIoYSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJiXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpICsgXCIsXCIgK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImNcIitpXG4gICAgfSkuam9pbihcIixcIikgKyBcIixkKXt0aGlzLmRhdGE9YVwiKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcInRoaXMuX3NoYXBlXCIraStcIj1iXCIraStcInwwXCIpXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXCJ0aGlzLl9zdHJpZGVcIitpK1wiPWNcIitpK1wifDBcIilcbiAgfVxuICBjb2RlLnB1c2goXCJ0aGlzLm9mZnNldD1kfDB9XCIsXG4gICAgXCJ2YXIgcHJvdG89XCIrY2xhc3NOYW1lK1wiLnByb3RvdHlwZVwiLFxuICAgIFwicHJvdG8uZHR5cGU9J1wiK2R0eXBlK1wiJ1wiLFxuICAgIFwicHJvdG8uZGltZW5zaW9uPVwiK2RpbWVuc2lvbilcbiAgXG4gIC8vdmlldy5zdHJpZGUgYW5kIHZpZXcuc2hhcGVcbiAgdmFyIHN0cmlkZUNsYXNzTmFtZSA9IFwiVlN0cmlkZVwiICsgZGltZW5zaW9uICsgXCJkXCIgKyBkdHlwZVxuICB2YXIgc2hhcGVDbGFzc05hbWUgPSBcIlZTaGFwZVwiICsgZGltZW5zaW9uICsgXCJkXCIgKyBkdHlwZVxuICB2YXIgcHJvcHMgPSB7XCJzdHJpZGVcIjpzdHJpZGVDbGFzc05hbWUsIFwic2hhcGVcIjpzaGFwZUNsYXNzTmFtZX1cbiAgZm9yKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgdmFyIGFycmF5TmFtZSA9IHByb3BzW3Byb3BdXG4gICAgY29kZS5wdXNoKFxuICAgICAgXCJmdW5jdGlvbiBcIiArIGFycmF5TmFtZSArIFwiKHYpIHt0aGlzLl92PXZ9IHZhciBhcHJvdG89XCIgKyBhcnJheU5hbWUgKyBcIi5wcm90b3R5cGVcIixcbiAgICAgIFwiYXByb3RvLmxlbmd0aD1cIitkaW1lbnNpb24pXG4gICAgXG4gICAgdmFyIGFycmF5X2VsZW1lbnRzID0gW11cbiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgYXJyYXlfZWxlbWVudHMucHVzaChbXCJ0aGlzLl92Ll9cIiwgcHJvcCwgaV0uam9pbihcIlwiKSlcbiAgICB9XG4gICAgY29kZS5wdXNoKFxuICAgICAgXCJhcHJvdG8udG9KU09OPWZ1bmN0aW9uIFwiICsgYXJyYXlOYW1lICsgXCJfdG9KU09OKCl7cmV0dXJuIFtcIiArIGFycmF5X2VsZW1lbnRzLmpvaW4oXCIsXCIpICsgXCJdfVwiLFxuICAgICAgXCJhcHJvdG8udmFsdWVPZj1hcHJvdG8udG9TdHJpbmc9ZnVuY3Rpb24gXCIgKyBhcnJheU5hbWUgKyBcIl90b1N0cmluZygpe3JldHVybiBbXCIgKyBhcnJheV9lbGVtZW50cy5qb2luKFwiLFwiKSArIFwiXS5qb2luKCl9XCIpXG4gICAgXG4gICAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICAgIGNvZGUucHVzaChcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcHJvdG8sXCIraStcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3YuX1wiK3Byb3AraStcIn0sc2V0OmZ1bmN0aW9uKHYpe3JldHVybiB0aGlzLl92Ll9cIitwcm9wK2krXCI9dnwwfSxlbnVtZXJhYmxlOnRydWV9KVwiKVxuICAgIH1cbiAgICBmb3IodmFyIGk9MDsgaTxhcnJheU1ldGhvZHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmKGFycmF5TWV0aG9kc1tpXSBpbiBBcnJheS5wcm90b3R5cGUpIHtcbiAgICAgICAgY29kZS5wdXNoKFwiYXByb3RvLlwiK2FycmF5TWV0aG9kc1tpXStcIj1BcnJheS5wcm90b3R5cGUuXCIrYXJyYXlNZXRob2RzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICBjb2RlLnB1c2goW1wiT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCdcIixwcm9wLFwiJyx7Z2V0OmZ1bmN0aW9uIFwiLCBhcnJheU5hbWUsIFwiX2dldCgpe3JldHVybiBuZXcgXCIsIGFycmF5TmFtZSwgXCIodGhpcyl9LHNldDogZnVuY3Rpb24gXCIsIGFycmF5TmFtZSwgXCJfc2V0KHYpe1wiXS5qb2luKFwiXCIpKVxuICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICBjb2RlLnB1c2goXCJ0aGlzLl9cIitwcm9wK2krXCI9dltcIitpK1wiXXwwXCIpXG4gICAgfVxuICAgIGNvZGUucHVzaChcInJldHVybiB2fX0pXCIpXG4gIH1cbiAgXG4gIC8vdmlldy5zaXplOlxuICBjb2RlLnB1c2goXCJPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sJ3NpemUnLHtnZXQ6ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3NpemUoKXtcXFxucmV0dXJuIFwiK2luZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuIFwidGhpcy5fc2hhcGVcIitpIH0pLmpvaW4oXCIqXCIpLFxuXCJ9fSlcIilcblxuICAvL3ZpZXcub3JkZXI6XG4gIGlmKGRpbWVuc2lvbiA9PT0gMSkge1xuICAgIGNvZGUucHVzaChcInByb3RvLm9yZGVyPVswXVwiKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywnb3JkZXInLHtnZXQ6XCIpXG4gICAgaWYoZGltZW5zaW9uIDwgNCkge1xuICAgICAgY29kZS5wdXNoKFwiZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX29yZGVyKCl7XCIpXG4gICAgICBpZihkaW1lbnNpb24gPT09IDIpIHtcbiAgICAgICAgY29kZS5wdXNoKFwicmV0dXJuIChNYXRoLmFicyh0aGlzLl9zdHJpZGUwKT5NYXRoLmFicyh0aGlzLl9zdHJpZGUxKSk/WzEsMF06WzAsMV19fSlcIilcbiAgICAgIH0gZWxzZSBpZihkaW1lbnNpb24gPT09IDMpIHtcbiAgICAgICAgY29kZS5wdXNoKFxuXCJ2YXIgczA9TWF0aC5hYnModGhpcy5fc3RyaWRlMCksczE9TWF0aC5hYnModGhpcy5fc3RyaWRlMSksczI9TWF0aC5hYnModGhpcy5fc3RyaWRlMik7XFxcbmlmKHMwPnMxKXtcXFxuaWYoczE+czIpe1xcXG5yZXR1cm4gWzIsMSwwXTtcXFxufWVsc2UgaWYoczA+czIpe1xcXG5yZXR1cm4gWzEsMiwwXTtcXFxufWVsc2V7XFxcbnJldHVybiBbMSwwLDJdO1xcXG59XFxcbn1lbHNlIGlmKHMwPnMyKXtcXFxucmV0dXJuIFsyLDAsMV07XFxcbn1lbHNlIGlmKHMyPnMxKXtcXFxucmV0dXJuIFswLDEsMl07XFxcbn1lbHNle1xcXG5yZXR1cm4gWzAsMiwxXTtcXFxufX19KVwiKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb2RlLnB1c2goXCJPUkRFUn0pXCIpXG4gICAgfVxuICB9XG4gIFxuICAvL3ZpZXcuc2V0KGkwLCAuLi4sIHYpOlxuICBjb2RlLnB1c2goXG5cInByb3RvLnNldD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfc2V0KFwiK2FyZ3Muam9pbihcIixcIikrXCIsdil7XCIpXG4gIGlmKHVzZUdldHRlcnMpIHtcbiAgICBjb2RlLnB1c2goXCJyZXR1cm4gdGhpcy5kYXRhLnNldChcIitpbmRleF9zdHIrXCIsdil9XCIpXG4gIH0gZWxzZSB7XG4gICAgY29kZS5wdXNoKFwicmV0dXJuIHRoaXMuZGF0YVtcIitpbmRleF9zdHIrXCJdPXZ9XCIpXG4gIH1cbiAgXG4gIC8vdmlldy5nZXQoaTAsIC4uLik6XG4gIGNvZGUucHVzaChcInByb3RvLmdldD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfZ2V0KFwiK2FyZ3Muam9pbihcIixcIikrXCIpe1wiKVxuICBpZih1c2VHZXR0ZXJzKSB7XG4gICAgY29kZS5wdXNoKFwicmV0dXJuIHRoaXMuZGF0YS5nZXQoXCIraW5kZXhfc3RyK1wiKX1cIilcbiAgfSBlbHNlIHtcbiAgICBjb2RlLnB1c2goXCJyZXR1cm4gdGhpcy5kYXRhW1wiK2luZGV4X3N0citcIl19XCIpXG4gIH1cbiAgXG4gIC8vdmlldy5pbmRleDpcbiAgY29kZS5wdXNoKFxuICAgIFwicHJvdG8uaW5kZXg9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2luZGV4KFwiLCBhcmdzLmpvaW4oKSwgXCIpe3JldHVybiBcIitpbmRleF9zdHIrXCJ9XCIpXG5cbiAgLy92aWV3LmhpKCk6XG4gIGNvZGUucHVzaChcInByb3RvLmhpPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9oaShcIithcmdzLmpvaW4oXCIsXCIpK1wiKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFtcIih0eXBlb2YgaVwiLGksXCIhPT0nbnVtYmVyJ3x8aVwiLGksXCI8MCk/dGhpcy5fc2hhcGVcIiwgaSwgXCI6aVwiLCBpLFwifDBcIl0uam9pbihcIlwiKVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcInRoaXMuX3N0cmlkZVwiK2lcbiAgICB9KS5qb2luKFwiLFwiKStcIix0aGlzLm9mZnNldCl9XCIpXG4gIFxuICAvL3ZpZXcubG8oKTpcbiAgdmFyIGFfdmFycyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuIFwiYVwiK2krXCI9dGhpcy5fc2hhcGVcIitpIH0pXG4gIHZhciBjX3ZhcnMgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBcImNcIitpK1wiPXRoaXMuX3N0cmlkZVwiK2kgfSlcbiAgY29kZS5wdXNoKFwicHJvdG8ubG89ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2xvKFwiK2FyZ3Muam9pbihcIixcIikrXCIpe3ZhciBiPXRoaXMub2Zmc2V0LGQ9MCxcIithX3ZhcnMuam9pbihcIixcIikrXCIsXCIrY192YXJzLmpvaW4oXCIsXCIpKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcblwiaWYodHlwZW9mIGlcIitpK1wiPT09J251bWJlcicmJmlcIitpK1wiPj0wKXtcXFxuZD1pXCIraStcInwwO1xcXG5iKz1jXCIraStcIipkO1xcXG5hXCIraStcIi09ZH1cIilcbiAgfVxuICBjb2RlLnB1c2goXCJyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiYVwiK2lcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJjXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLGIpfVwiKVxuICBcbiAgLy92aWV3LnN0ZXAoKTpcbiAgY29kZS5wdXNoKFwicHJvdG8uc3RlcD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfc3RlcChcIithcmdzLmpvaW4oXCIsXCIpK1wiKXt2YXIgXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiYVwiK2krXCI9dGhpcy5fc2hhcGVcIitpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiYlwiK2krXCI9dGhpcy5fc3RyaWRlXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLGM9dGhpcy5vZmZzZXQsZD0wLGNlaWw9TWF0aC5jZWlsXCIpXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFxuXCJpZih0eXBlb2YgaVwiK2krXCI9PT0nbnVtYmVyJyl7XFxcbmQ9aVwiK2krXCJ8MDtcXFxuaWYoZDwwKXtcXFxuYys9YlwiK2krXCIqKGFcIitpK1wiLTEpO1xcXG5hXCIraStcIj1jZWlsKC1hXCIraStcIi9kKVxcXG59ZWxzZXtcXFxuYVwiK2krXCI9Y2VpbChhXCIraStcIi9kKVxcXG59XFxcbmJcIitpK1wiKj1kXFxcbn1cIilcbiAgfVxuICBjb2RlLnB1c2goXCJyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiYVwiICsgaVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImJcIiArIGlcbiAgICB9KS5qb2luKFwiLFwiKStcIixjKX1cIilcbiAgXG4gIC8vdmlldy50cmFuc3Bvc2UoKTpcbiAgdmFyIHRTaGFwZSA9IG5ldyBBcnJheShkaW1lbnNpb24pXG4gIHZhciB0U3RyaWRlID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICB0U2hhcGVbaV0gPSBcImFbaVwiK2krXCJdXCJcbiAgICB0U3RyaWRlW2ldID0gXCJiW2lcIitpK1wiXVwiXG4gIH1cbiAgY29kZS5wdXNoKFwicHJvdG8udHJhbnNwb3NlPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl90cmFuc3Bvc2UoXCIrYXJncytcIil7XCIrXG4gICAgYXJncy5tYXAoZnVuY3Rpb24obixpZHgpIHsgcmV0dXJuIG4gKyBcIj0oXCIgKyBuICsgXCI9PT11bmRlZmluZWQ/XCIgKyBpZHggKyBcIjpcIiArIG4gKyBcInwwKVwifSkuam9pbihcIjtcIiksXG4gICAgXCJ2YXIgYT10aGlzLnNoYXBlLGI9dGhpcy5zdHJpZGU7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK3RTaGFwZS5qb2luKFwiLFwiKStcIixcIit0U3RyaWRlLmpvaW4oXCIsXCIpK1wiLHRoaXMub2Zmc2V0KX1cIilcbiAgXG4gIC8vdmlldy5waWNrKCk6XG4gIGNvZGUucHVzaChcInByb3RvLnBpY2s9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3BpY2soXCIrYXJncytcIil7dmFyIGE9W10sYj1bXSxjPXRoaXMub2Zmc2V0XCIpXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFwiaWYodHlwZW9mIGlcIitpK1wiPT09J251bWJlcicmJmlcIitpK1wiPj0wKXtjPShjK3RoaXMuX3N0cmlkZVwiK2krXCIqaVwiK2krXCIpfDB9ZWxzZXthLnB1c2godGhpcy5fc2hhcGVcIitpK1wiKTtiLnB1c2godGhpcy5fc3RyaWRlXCIraStcIil9XCIpXG4gIH1cbiAgY29kZS5wdXNoKFwidmFyIGN0b3I9Q1RPUl9MSVNUW2EubGVuZ3RoKzFdO3JldHVybiBjdG9yKHRoaXMuZGF0YSxhLGIsYyl9XCIpXG4gICAgXG4gIC8vQWRkIHJldHVybiBzdGF0ZW1lbnRcbiAgY29kZS5wdXNoKFwicmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF9cIitjbGFzc05hbWUrXCIoZGF0YSxzaGFwZSxzdHJpZGUsb2Zmc2V0KXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIihkYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcInNoYXBlW1wiK2krXCJdXCJcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJzdHJpZGVbXCIraStcIl1cIlxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLG9mZnNldCl9XCIpXG5cbiAgLy9Db21waWxlIHByb2NlZHVyZVxuICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKFwiQ1RPUl9MSVNUXCIsIFwiT1JERVJcIiwgY29kZS5qb2luKFwiXFxuXCIpKVxuICByZXR1cm4gcHJvY2VkdXJlKENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdLCBvcmRlcilcbn1cblxuZnVuY3Rpb24gYXJyYXlEVHlwZShkYXRhKSB7XG4gIGlmKGhhc0J1ZmZlcikge1xuICAgIGlmKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkge1xuICAgICAgcmV0dXJuIFwiYnVmZmVyXCJcbiAgICB9XG4gIH1cbiAgaWYoaGFzVHlwZWRBcnJheXMpIHtcbiAgICBzd2l0Y2goT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpKSB7XG4gICAgICBjYXNlIFwiW29iamVjdCBGbG9hdDY0QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImZsb2F0NjRcIlxuICAgICAgY2FzZSBcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJmbG9hdDMyXCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEludDhBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiaW50OFwiXG4gICAgICBjYXNlIFwiW29iamVjdCBJbnQxNkFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJpbnQxNlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBJbnQzMkFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJpbnQzMlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBVaW50OEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJ1aW50OFwiXG4gICAgICBjYXNlIFwiW29iamVjdCBVaW50MTZBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwidWludDE2XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJ1aW50MzJcIlxuICAgICAgY2FzZSBcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcInVpbnQ4X2NsYW1wZWRcIlxuICAgIH1cbiAgfVxuICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgcmV0dXJuIFwiYXJyYXlcIlxuICB9XG4gIHJldHVybiBcImdlbmVyaWNcIlxufVxuXG52YXIgQ0FDSEVEX0NPTlNUUlVDVE9SUyA9IHtcbiAgXCJmbG9hdDMyXCI6W10sXG4gIFwiZmxvYXQ2NFwiOltdLFxuICBcImludDhcIjpbXSxcbiAgXCJpbnQxNlwiOltdLFxuICBcImludDMyXCI6W10sXG4gIFwidWludDhcIjpbXSxcbiAgXCJ1aW50MTZcIjpbXSxcbiAgXCJ1aW50MzJcIjpbXSxcbiAgXCJhcnJheVwiOltdLFxuICBcInVpbnQ4X2NsYW1wZWRcIjpbXSxcbiAgXCJidWZmZXJcIjpbXSxcbiAgXCJnZW5lcmljXCI6W11cbn1cblxuOyhmdW5jdGlvbigpIHtcbiAgZm9yKHZhciBpZCBpbiBDQUNIRURfQ09OU1RSVUNUT1JTKSB7XG4gICAgQ0FDSEVEX0NPTlNUUlVDVE9SU1tpZF0ucHVzaChjb21waWxlQ29uc3RydWN0b3IoaWQsIC0xKSlcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHdyYXBwZWROREFycmF5Q3RvcihkYXRhLCBzaGFwZSwgc3RyaWRlLCBvZmZzZXQpIHtcbiAgaWYoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGN0b3IgPSBDQUNIRURfQ09OU1RSVUNUT1JTLmFycmF5WzBdXG4gICAgcmV0dXJuIGN0b3IoW10pXG4gIH0gZWxzZSBpZih0eXBlb2YgZGF0YSA9PT0gXCJudW1iZXJcIikge1xuICAgIGRhdGEgPSBbZGF0YV1cbiAgfVxuICBpZihzaGFwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2hhcGUgPSBbIGRhdGEubGVuZ3RoIF1cbiAgfVxuICB2YXIgZCA9IHNoYXBlLmxlbmd0aFxuICBpZihzdHJpZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0cmlkZSA9IG5ldyBBcnJheShkKVxuICAgIGZvcih2YXIgaT1kLTEsIHN6PTE7IGk+PTA7IC0taSkge1xuICAgICAgc3RyaWRlW2ldID0gc3pcbiAgICAgIHN6ICo9IHNoYXBlW2ldXG4gICAgfVxuICB9XG4gIGlmKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgb2Zmc2V0ID0gMFxuICAgIGZvcih2YXIgaT0wOyBpPGQ7ICsraSkge1xuICAgICAgaWYoc3RyaWRlW2ldIDwgMCkge1xuICAgICAgICBvZmZzZXQgLT0gKHNoYXBlW2ldLTEpKnN0cmlkZVtpXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgZHR5cGUgPSBhcnJheURUeXBlKGRhdGEpXG4gIHZhciBjdG9yX2xpc3QgPSBDQUNIRURfQ09OU1RSVUNUT1JTW2R0eXBlXVxuICB3aGlsZShjdG9yX2xpc3QubGVuZ3RoIDw9IGQrMSkge1xuICAgIGN0b3JfbGlzdC5wdXNoKGNvbXBpbGVDb25zdHJ1Y3RvcihkdHlwZSwgY3Rvcl9saXN0Lmxlbmd0aC0xKSlcbiAgfVxuICB2YXIgY3RvciA9IGN0b3JfbGlzdFtkKzFdXG4gIHJldHVybiBjdG9yKGRhdGEsIHNoYXBlLCBzdHJpZGUsIG9mZnNldClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcGVkTkRBcnJheUN0b3Jcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiBpb3RhKG4pIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShuKVxuICBmb3IodmFyIGk9MDsgaTxuOyArK2kpIHtcbiAgICByZXN1bHRbaV0gPSBpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlvdGEiLCJ2YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG5cbnZhciBkZWZhdWx0cyA9IHtcblx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59XG5cbmZ1bmN0aW9uIG1peChvYmosIGVudHJpZXMpIHtcblx0Zm9yICh2YXIgayBpbiBlbnRyaWVzKSB7XG5cdFx0aWYgKCFlbnRyaWVzLmhhc093blByb3BlcnR5KGspKVxuXHRcdFx0Y29udGludWVcblx0XHR2YXIgZiA9IGVudHJpZXNba11cblx0XHRpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdG9ialtrXSA9IGZcblx0XHR9IGVsc2UgaWYgKGYgJiYgdHlwZW9mIGYgPT09ICdvYmplY3QnKSB7XG5cdFx0XHR2YXIgZGVmID0geHRlbmQoZGVmYXVsdHMsIGYpXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrLCBkZWYpO1xuXHRcdH1cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1peGVzKGN0b3IsIGVudHJpZXMpIHtcblx0bWl4KGN0b3IucHJvdG90eXBlLCBlbnRyaWVzKVxufVxuXG5tb2R1bGUuZXhwb3J0cy5taXggPSBtaXgiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC13aGl0ZS10ZXh0dXJlL25vZGVfbW9kdWxlcy9uZGFycmF5L25kYXJyYXkuanNcIikiLCJ2YXIgaW50OCA9IG5ldyBJbnQ4QXJyYXkoNCk7XG52YXIgaW50MzIgPSBuZXcgSW50MzJBcnJheShpbnQ4LmJ1ZmZlciwgMCwgMSk7XG52YXIgZmxvYXQzMiA9IG5ldyBGbG9hdDMyQXJyYXkoaW50OC5idWZmZXIsIDAsIDEpO1xuXG4vKipcbiAqIEEgc2luZ2xldG9uIGZvciBudW1iZXIgdXRpbGl0aWVzLiBcbiAqIEBjbGFzcyBOdW1iZXJVdGlsXG4gKi9cbnZhciBOdW1iZXJVdGlsID0gZnVuY3Rpb24oKSB7XG5cbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZmxvYXQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGludCBiaXRzLiBBcnJheUJ1ZmZlclxuICogaXMgdXNlZCBmb3IgdGhlIGNvbnZlcnNpb24uXG4gKlxuICogQG1ldGhvZCAgaW50Qml0c1RvRmxvYXRcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSAge051bWJlcn0gaSB0aGUgaW50IHRvIGNhc3RcbiAqIEByZXR1cm4ge051bWJlcn0gICB0aGUgZmxvYXRcbiAqL1xuTnVtYmVyVXRpbC5pbnRCaXRzVG9GbG9hdCA9IGZ1bmN0aW9uKGkpIHtcblx0aW50MzJbMF0gPSBpO1xuXHRyZXR1cm4gZmxvYXQzMlswXTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW50IGJpdHMgZnJvbSB0aGUgZ2l2ZW4gZmxvYXQuIEFycmF5QnVmZmVyIGlzIHVzZWRcbiAqIGZvciB0aGUgY29udmVyc2lvbi5cbiAqXG4gKiBAbWV0aG9kICBmbG9hdFRvSW50Qml0c1xuICogQHN0YXRpY1xuICogQHBhcmFtICB7TnVtYmVyfSBmIHRoZSBmbG9hdCB0byBjYXN0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgdGhlIGludCBiaXRzXG4gKi9cbk51bWJlclV0aWwuZmxvYXRUb0ludEJpdHMgPSBmdW5jdGlvbihmKSB7XG5cdGZsb2F0MzJbMF0gPSBmO1xuXHRyZXR1cm4gaW50MzJbMF07XG59O1xuXG4vKipcbiAqIEVuY29kZXMgQUJHUiBpbnQgYXMgYSBmbG9hdCwgd2l0aCBzbGlnaHQgcHJlY2lzaW9uIGxvc3MuXG4gKlxuICogQG1ldGhvZCAgaW50VG9GbG9hdENvbG9yXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgYW4gQUJHUiBwYWNrZWQgaW50ZWdlclxuICovXG5OdW1iZXJVdGlsLmludFRvRmxvYXRDb2xvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiBOdW1iZXJVdGlsLmludEJpdHNUb0Zsb2F0KCB2YWx1ZSAmIDB4ZmVmZmZmZmYgKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIGZsb2F0IGVuY29kZWQgQUJHUiB2YWx1ZSBmcm9tIHRoZSBnaXZlbiBSR0JBXG4gKiBieXRlcyAoMCAtIDI1NSkuIFVzZWZ1bCBmb3Igc2F2aW5nIGJhbmR3aWR0aCBpbiB2ZXJ0ZXggZGF0YS5cbiAqXG4gKiBAbWV0aG9kICBjb2xvclRvRmxvYXRcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7TnVtYmVyfSByIHRoZSBSZWQgYnl0ZSAoMCAtIDI1NSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBnIHRoZSBHcmVlbiBieXRlICgwIC0gMjU1KVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgdGhlIEJsdWUgYnl0ZSAoMCAtIDI1NSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIHRoZSBBbHBoYSBieXRlICgwIC0gMjU1KVxuICogQHJldHVybiB7RmxvYXQzMn0gIGEgRmxvYXQzMiBvZiB0aGUgUkdCQSBjb2xvclxuICovXG5OdW1iZXJVdGlsLmNvbG9yVG9GbG9hdCA9IGZ1bmN0aW9uKHIsIGcsIGIsIGEpIHtcblx0dmFyIGJpdHMgPSAoYSA8PCAyNCB8IGIgPDwgMTYgfCBnIDw8IDggfCByKTtcblx0cmV0dXJuIE51bWJlclV0aWwuaW50VG9GbG9hdENvbG9yKGJpdHMpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIG51bWJlciBpcyBhIHBvd2VyLW9mLXR3by5cbiAqXG4gKiBAbWV0aG9kICBpc1Bvd2VyT2ZUd29cbiAqIEBwYXJhbSAge051bWJlcn0gIG4gdGhlIG51bWJlciB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSAgIHRydWUgaWYgcG93ZXItb2YtdHdvXG4gKi9cbk51bWJlclV0aWwuaXNQb3dlck9mVHdvID0gZnVuY3Rpb24obikge1xuXHRyZXR1cm4gKG4gJiAobiAtIDEpKSA9PT0gMDtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBoaWdoZXN0IHBvd2VyLW9mLXR3byBmcm9tIHRoZSBzcGVjaWZpZWQgbnVtYmVyLiBcbiAqIFxuICogQHBhcmFtICB7TnVtYmVyfSBuIHRoZSBudW1iZXIgdG8gdGVzdFxuICogQHJldHVybiB7TnVtYmVyfSAgIHRoZSBuZXh0IGhpZ2hlc3QgcG93ZXIgb2YgdHdvXG4gKi9cbk51bWJlclV0aWwubmV4dFBvd2VyT2ZUd28gPSBmdW5jdGlvbihuKSB7XG5cdG4tLTtcblx0biB8PSBuID4+IDE7XG5cdG4gfD0gbiA+PiAyO1xuXHRuIHw9IG4gPj4gNDtcblx0biB8PSBuID4+IDg7XG5cdG4gfD0gbiA+PiAxNjtcblx0cmV0dXJuIG4rMTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyVXRpbDsiLCJmdW5jdGlvbiBwcmVtdWx0aXBseShyZ2JhLCBvdXQpIHtcblx0aWYgKCFvdXQgfHwgdHlwZW9mIG91dCA9PT0gJ251bWJlcicpXG5cdFx0b3V0ID0gWzAsMCwwLDBdXG5cdG91dFswXSA9IHJnYmFbMF0gKiByZ2JhWzNdXG5cdG91dFsxXSA9IHJnYmFbMV0gKiByZ2JhWzNdXG5cdG91dFsyXSA9IHJnYmFbMl0gKiByZ2JhWzNdXG5cdG91dFszXSA9IHJnYmFbM11cblx0cmV0dXJuIG91dFxufVxubW9kdWxlLmV4cG9ydHMgPSBwcmVtdWx0aXBseSIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJ2YXIgcGFja0NvbG9yID0gcmVxdWlyZSgnbnVtYmVyLXV0aWwnKS5jb2xvclRvRmxvYXRcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb2xvclRvRmxvYXQocmdiYSkge1xuICAgIHJldHVybiBwYWNrQ29sb3IoXG4gICAgICAgIH5+KHJnYmFbMF0gKiAyNTUpLFxuICAgICAgICB+fihyZ2JhWzFdICogMjU1KSxcbiAgICAgICAgfn4ocmdiYVsyXSAqIDI1NSksXG4gICAgICAgIH5+KHJnYmFbM10gKiAyNTUpXG4gICAgKVxufSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzXCIpIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRleGNvb3JkKHBvc2l0aW9uLCBzaGFwZSwgdGV4U2hhcGUsIG91dCkge1xuICAgIGlmICghb3V0KVxuICAgICAgICBvdXQgPSBbMCwgMCwgMSwgMV1cblxuICAgIHBvc2l0aW9uID0gcG9zaXRpb24gfHwgWzAsIDBdXG4gICAgc2hhcGUgPSBzaGFwZSB8fCBbMSwgMV1cblxuICAgIHRleFNoYXBlID0gdGV4U2hhcGUgfHwgc2hhcGVcblxuICAgIHZhciBpbnZXaWR0aCA9IDEgLyB0ZXhTaGFwZVswXVxuICAgIHZhciBpbnZIZWlnaHQgPSAxIC8gdGV4U2hhcGVbMV1cbiAgICB2YXIgeCA9IHBvc2l0aW9uWzBdLFxuICAgICAgICB5ID0gcG9zaXRpb25bMV0sXG4gICAgICAgIHcgPSBzaGFwZVswXSxcbiAgICAgICAgaCA9IHNoYXBlWzFdXG5cbiAgICBvdXRbMF0gPSB4ICogaW52V2lkdGhcbiAgICBvdXRbMV0gPSB5ICogaW52SGVpZ2h0XG4gICAgb3V0WzJdID0gKHggKyB3KSAqIGludldpZHRoXG4gICAgb3V0WzNdID0gKHkgKyBoKSAqIGludkhlaWdodFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcIikiLCIvL3dpbGwgdXNlIGdsLXZlYzIvY29weSBhdCBzb21lIHBvaW50Li5cbm1vZHVsZS5leHBvcnRzLnZlYzIgPSBmdW5jdGlvbiBjb3B5MihvdXQsIHgsIHkpIHtcbiAgICBvdXRbMF0gPSB4XG4gICAgb3V0WzFdID0geVxuICAgIHJldHVybiBvdXRcbn1cblxubW9kdWxlLmV4cG9ydHMudmVjMyA9IGZ1bmN0aW9uIGNvcHkzKHZlYywgeCwgeSwgeikge1xuICAgIHZlY1swXSA9IHhcbiAgICB2ZWNbMV0gPSB5XG4gICAgdmVjWzJdID0gelxuICAgIHJldHVybiB2ZWNcbn0iLCJ2YXIgbWl4ZXMgPSByZXF1aXJlKCdtaXhlcycpXG52YXIgY3JlYXRlU2hhZGVyID0gcmVxdWlyZSgnZ2wtYmFzaWMtc2hhZGVyJylcbnZhciBjcmVhdGVCYXRjaCA9IHJlcXVpcmUoJ2dsLXNwcml0ZS1iYXRjaCcpXG52YXIgY29weTIgPSByZXF1aXJlKCcuL2NvcHknKS52ZWMyXG52YXIgbnVtYmVyID0gcmVxdWlyZSgnYXMtbnVtYmVyJylcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciB0ZXhjb29yZCA9IHJlcXVpcmUoJ3RleGNvb3JkJylcbnZhciBtYXQ0ID0gcmVxdWlyZSgnLi9tYXQ0JylcblxudmFyIFpFUk8gPSBbMCwgMF1cbnZhciBURVhDT09SRF9ERUZBVUxUID0gWzAsIDAsIDEsIDFdXG5cbnZhciB0bXAxID0gWzAsIDBdLFxuICAgIHRtcDIgPSBbMCwgMF0sXG4gICAgdG1wVVYgPSBbMCwgMCwgMSwgMV1cblxuZnVuY3Rpb24gU3ByaXRlUmVuZGVyZXIoZ2wsIG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTcHJpdGVSZW5kZXJlcikpXG4gICAgICAgIHJldHVybiBuZXcgU3ByaXRlUmVuZGVyZXIoZ2wsIG9wdClcbiAgICBvcHQgPSBvcHR8fHt9XG5cbiAgICB0aGlzLl9ibGVuZFNyYyA9IG51bWJlcihvcHQuYmxlbmRTcmMsIGdsLlNSQ19BTFBIQSlcbiAgICB0aGlzLl9ibGVuZERzdCA9IG51bWJlcihvcHQuYmxlbmREc3QsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpXG4gICAgdGhpcy5fYmxlbmRFbmFibGVkID0gb3B0LmJsZW5kICE9PSBmYWxzZVxuXG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zaGFkZXIgPSBvcHQuc2hhZGVyIHx8IGNyZWF0ZVNoYWRlcihnbCwge1xuICAgICAgICBjb2xvcjogdHJ1ZSxcbiAgICAgICAgdGV4Y29vcmQ6IHRydWVcbiAgICB9KVxuICAgIHRoaXMuYmF0Y2ggPSBvcHQuYmF0Y2ggfHwgY3JlYXRlQmF0Y2goZ2wsIHh0ZW5kKHsgXG4gICAgICAgIGR5bmFtaWM6IHRydWUsXG4gICAgICAgIHByZW11bHRpcGxpZWQ6IHRydWUgXG4gICAgfSwgb3B0KSlcblxuICAgIHRoaXMuX2JvdW5kID0gZmFsc2VcbiAgICB0aGlzLnByb2plY3Rpb24gPSBtYXQ0LmNyZWF0ZSgpXG4gICAgdGhpcy52aWV3ID0gbWF0NC5jcmVhdGUoKVxuICAgIHRoaXMubW9kZWwgPSBtYXQ0LmNyZWF0ZSgpXG4gICAgdGhpcy50cmFuc2Zvcm0gPSBtYXQ0LmNyZWF0ZSgpXG4gICAgdGhpcy50cmFuc2Zvcm1TdGFjayA9IFtdXG5cbiAgICB0aGlzLmNvbG9yID0gWzEsIDEsIDEsIDFdXG59XG5cbm1peGVzKFNwcml0ZVJlbmRlcmVyLCB7XG5cbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhdGNoLnRyYW5zZm9ybVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gICAgICAgICAgICB0aGlzLmJhdGNoLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5iYXRjaC5jbGVhcigpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIG9ydGhvOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIG1hdDQub3J0aG8odGhpcy5wcm9qZWN0aW9uLCAwLCB3aWR0aCwgaGVpZ2h0LCAwLCAwLCAxKVxuICAgICAgICB0aGlzLnVwZGF0ZU1hdHJpY2VzKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgc29saWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJhdGNoLnRleHR1cmUgPSBudWxsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGltYWdlOiBmdW5jdGlvbihpbWFnZSwgdXYpIHtcbiAgICAgICAgdGhpcy5iYXRjaC50ZXh0dXJlID0gaW1hZ2VcbiAgICAgICAgdGhpcy5iYXRjaC50ZXhjb29yZCA9IHV2IHx8IFRFWENPT1JEX0RFRkFVTFRcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZGVmYXVsdHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJhdGNoLmRlZmF1bHRzKClcbiAgICAgICAgdGhpcy5iYXRjaC5jb2xvciA9IHRoaXMuY29sb3JcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZmx1c2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJhdGNoLmZsdXNoKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZmlsbFJlY3Q6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5zb2xpZCgpLmRlZmF1bHRzKClcbiAgICAgICAgdGhpcy5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSwgIFxuXG4gICAgLy9qdXN0IHB1c2hlcyBhIHNpbmdsZSBxdWFkIHdpdGggY3VycmVudCBhdHRyaWJ1dGVzXG4gICAgcmVjdDogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmJhdGNoLmNvbG9yID0gdGhpcy5jb2xvclxuICAgICAgICB0aGlzLmJhdGNoLnBvc2l0aW9uWzBdID0geHx8MFxuICAgICAgICB0aGlzLmJhdGNoLnBvc2l0aW9uWzFdID0geXx8MFxuICAgICAgICB0aGlzLmJhdGNoLnNoYXBlWzBdID0gd2lkdGh8fDBcbiAgICAgICAgdGhpcy5iYXRjaC5zaGFwZVsxXSA9IGhlaWdodHx8MFxuICAgICAgICB0aGlzLmJhdGNoLnB1c2goKVxuICAgIH0sXG5cbiAgICBzdHJva2U6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIHRoaWNrbmVzcykge1xuICAgICAgICB0aGlzLmJhdGNoLmNvbG9yID0gdGhpcy5jb2xvclxuICAgICAgICB0aGlja25lc3MgPSBudW1iZXIodGhpY2tuZXNzLCAxKVxuICAgICAgICB0aGlzLnJlY3QoeCt0aGlja25lc3MsIHksIHdpZHRoLXRoaWNrbmVzcyoyLCB0aGlja25lc3MpXG4gICAgICAgIHRoaXMucmVjdCh4LCB5LCB0aGlja25lc3MsIGhlaWdodClcbiAgICAgICAgdGhpcy5yZWN0KHgrdGhpY2tuZXNzLCB5K2hlaWdodC10aGlja25lc3MsIHdpZHRoLXRoaWNrbmVzcyoyLCB0aGlja25lc3MpXG4gICAgICAgIHRoaXMucmVjdCh4K3dpZHRoLXRoaWNrbmVzcywgeSwgdGhpY2tuZXNzLCBoZWlnaHQpXG4gICAgfSxcblxuICAgIHN0cm9rZVJlY3Q6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIHRoaWNrbmVzcykge1xuICAgICAgICB0aGlzLnNvbGlkKCkuZGVmYXVsdHMoKVxuICAgICAgICB0aGlzLnN0cm9rZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0aGlja25lc3MpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGZpbGxUZXh0OiBmdW5jdGlvbih0ZXh0LCB4LCB5LCBzdGFydCwgZW5kKSB7XG4gICAgICAgIHZhciBvbGRUcmFuc2Zvcm0gPSB0ZXh0LmJhdGNoLnRyYW5zZm9ybSxcbiAgICAgICAgICAgIG9sZENvbG9yID0gdGV4dC5iYXRjaC5jb2xvcixcbiAgICAgICAgICAgIHdhc0JvdW5kID0gdGhpcy5fYm91bmRcblxuICAgICAgICBpZiAod2FzQm91bmQpIHsgXG4gICAgICAgIC8vVE9ETzogd2UgY291bGQgYWx3YXlzIGFzc3VtZSBkeW5hbWljIGFuZCByZW1vdmUgdGhpcyBjb25kaXRpb25cbiAgICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgICAgICB0aGlzLnVuYmluZCgpXG4gICAgICAgICAgICB0aGlzLmNsZWFyKClcbiAgICAgICAgfVxuICAgICAgICB0ZXh0LmJhdGNoLmNvbG9yID0gdGhpcy5jb2xvclxuICAgICAgICB0ZXh0LmJhdGNoLnRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtXG4gICAgICAgIHRleHQuZHJhdyh0aGlzLnNoYWRlciwgeCwgeSwgc3RhcnQsIGVuZClcbiAgICAgICAgdGV4dC5iYXRjaC5jb2xvciA9IG9sZENvbG9yXG4gICAgICAgIHRleHQuYmF0Y2gudHJhbnNmb3JtID0gb2xkVHJhbnNmb3JtXG4gICAgICAgIGlmICh3YXNCb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKClcbiAgICAgICAgfVxuICAgIH0sIFxuXG4gICAgZHJhd0ltYWdlOiBmdW5jdGlvbihpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgd2lkdGggPSBudW1iZXIod2lkdGgsIGltYWdlLnNoYXBlID8gaW1hZ2Uuc2hhcGVbMF0gOiAwKVxuICAgICAgICBoZWlnaHQgPSBudW1iZXIoaGVpZ2h0LCBpbWFnZS5zaGFwZSA/IGltYWdlLnNoYXBlWzFdIDogMClcblxuICAgICAgICB2YXIgdXYgPSBURVhDT09SRF9ERUZBVUxUXG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gOSkge1xuICAgICAgICAgICAgdmFyIHRleFNpemUgPSBpbWFnZS5zaGFwZSBcbiAgICAgICAgICAgIHZhciBjbGlwUG9zID0gY29weTIodG1wMSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pXG4gICAgICAgICAgICB2YXIgY2xpcFNpemUgPSBjb3B5Mih0bXAyLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSlcblxuICAgICAgICAgICAgLy9nZXQgVVYgY29vcmRpbmF0ZXMsIHN0b3JpbmcgaW4gb3VyIHRlbXAgYXJyYXkgYXMgdG8gbm90IFxuICAgICAgICAgICAgLy9jaGFuZ2UgY29uc3RhbnQgZGVmYXVsdFxuICAgICAgICAgICAgdXYgPSB0ZXhjb29yZChjbGlwUG9zLCBjbGlwU2l6ZSwgdGV4U2l6ZSwgdG1wVVYpXG5cbiAgICAgICAgICAgIHggPSBhcmd1bWVudHNbNV1cbiAgICAgICAgICAgIHkgPSBhcmd1bWVudHNbNl1cbiAgICAgICAgICAgIHdpZHRoID0gYXJndW1lbnRzWzddXG4gICAgICAgICAgICBoZWlnaHQgPSBhcmd1bWVudHNbOF1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVmYXVsdHMoKVxuICAgICAgICAvLyB0aGlzLmJhdGNoLnJvdGF0aW9uID0gcm90YXRpb258fDBcbiAgICAgICAgLy8gaWYgKHJvdGF0aW9uT3JpZ2luKVxuICAgICAgICAvLyAgICAgdGhpcy5iYXRjaC5yb3RhdGlvbk9yaWdpbiA9IHJvdGF0aW9uT3JpZ2luXG4gICAgICAgIHRoaXMuaW1hZ2UoaW1hZ2UsIHV2KVxuICAgICAgICB0aGlzLnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgc3ByaXRlOiBmdW5jdGlvbihzcHJpdGUpIHtcbiAgICAgICAgdGhpcy5iYXRjaC5wdXNoKHNwcml0ZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgdXBkYXRlTWF0cmljZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNoYWRlci5iaW5kKClcbiAgICAgICAgdGhpcy5zaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbiA9IHRoaXMucHJvamVjdGlvblxuICAgICAgICB0aGlzLnNoYWRlci51bmlmb3Jtcy52aWV3ID0gdGhpcy52aWV3XG4gICAgICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLm1vZGVsID0gdGhpcy5tb2RlbFxuICAgIH0sXG5cbiAgICBiaW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbFxuICAgICAgICBpZiAodGhpcy5fYmxlbmRFbmFibGVkKSB7XG4gICAgICAgICAgICBnbC5lbmFibGUoZ2wuQkxFTkQpXG4gICAgICAgICAgICBnbC5ibGVuZEZ1bmModGhpcy5fYmxlbmRTcmMsIHRoaXMuX2JsZW5kRHN0KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYm91bmQgPSB0cnVlXG4gICAgICAgIHRoaXMuYmF0Y2guYmluZCh0aGlzLnNoYWRlcilcbiAgICAgICAgdGhpcy5zb2xpZCgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGRyYXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJhdGNoLmRyYXcoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJhdGNoLnVuYmluZCgpXG4gICAgICAgIHRoaXMuX2JvdW5kID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgYmVnaW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJpbmQoKVxuICAgICAgICB0aGlzLmNsZWFyKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgdGhpcy51bmJpbmQoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0pXG5cbm1peGVzKFNwcml0ZVJlbmRlcmVyLCByZXF1aXJlKCcuL3RyYW5zZm9ybXMnKSlcblxubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGVSZW5kZXJlciIsIi8vdG8gcmVkdWNlIGJ1bmRsZSBzaXplLCB3ZSdsbCBvbmx5IGdyYWIgd2hhdCB3ZSBuZWVkXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBvcnRobzogcmVxdWlyZSgnZ2wtbWF0NC9vcnRobycpLFxuICAgIGlkZW50aXR5OiByZXF1aXJlKCdnbC1tYXQ0L2lkZW50aXR5JyksXG4gICAgY3JlYXRlOiByZXF1aXJlKCdnbC1tYXQ0L2NyZWF0ZScpLFxuICAgIHNjYWxlOiByZXF1aXJlKCdnbC1tYXQ0L3NjYWxlJyksXG4gICAgcm90YXRlWjogcmVxdWlyZSgnZ2wtbWF0NC9yb3RhdGVaJyksXG4gICAgcm90YXRlWTogcmVxdWlyZSgnZ2wtbWF0NC9yb3RhdGVZJyksXG4gICAgcm90YXRlWDogcmVxdWlyZSgnZ2wtbWF0NC9yb3RhdGVYJyksXG4gICAgdHJhbnNsYXRlOiByZXF1aXJlKCdnbC1tYXQ0L3RyYW5zbGF0ZScpLFxuICAgIGNsb25lOiByZXF1aXJlKCdnbC1tYXQ0L2Nsb25lJyksXG4gICAgbXVsdGlwbHk6IHJlcXVpcmUoJ2dsLW1hdDQvbXVsdGlwbHknKVxufVxuIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvYXMtbnVtYmVyL2luZGV4LmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL2luZGV4LmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtbWF0NC9jbG9uZS5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLW1hdDQvY3JlYXRlLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1tYXQ0L29ydGhvLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVYLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVZLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVaLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLW1hdDQvdHJhbnNsYXRlLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9pbmRleC5qc1wiKSIsInZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcblxudmFyIGRlZmF1bHRzID0ge1xuXHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn1cblxuZnVuY3Rpb24gbWl4KG9iaiwgZW50cmllcykge1xuXHRmb3IgKHZhciBrIGluIGVudHJpZXMpIHtcblx0XHRpZiAoIWVudHJpZXMuaGFzT3duUHJvcGVydHkoaykpXG5cdFx0XHRjb250aW51ZVxuXHRcdHZhciBmID0gZW50cmllc1trXVxuXHRcdGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0b2JqW2tdID0gZlxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGYgPT09ICdvYmplY3QnKSB7XG5cdFx0XHR2YXIgZGVmID0geHRlbmQoZGVmYXVsdHMsIGYpXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrLCBkZWYpO1xuXHRcdH1cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1peGVzKGN0b3IsIGVudHJpZXMpIHtcblx0bWl4KGN0b3IucHJvdG90eXBlLCBlbnRyaWVzKVxufVxuXG5tb2R1bGUuZXhwb3J0cy5taXggPSBtaXgiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL3RleGNvb3JkL2luZGV4LmpzXCIpIiwidmFyIG1hdDQgPSByZXF1aXJlKCcuL21hdDQnKVxudmFyIGNvcHkzID0gcmVxdWlyZSgnLi9jb3B5JykudmVjM1xudmFyIG51bWJlciA9IHJlcXVpcmUoJ2FzLW51bWJlcicpXG5cbnZhciB0bXBWZWMzID0gWzAsIDAsIDBdXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgc2F2ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtU3RhY2sucHVzaChtYXQ0LmNsb25lKHRoaXMudHJhbnNmb3JtKSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgcmVzdG9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybVN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy50cmFuc2Zvcm1TdGFjay5wb3AoKVxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgc2NhbGU6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgeCA9IG51bWJlcih4LCAxKVxuICAgICAgICB5ID0gbnVtYmVyKHksIDEpXG4gICAgICAgIG1hdDQuc2NhbGUodGhpcy50cmFuc2Zvcm0sIHRoaXMudHJhbnNmb3JtLCBjb3B5Myh0bXBWZWMzLCB4LCB5LCAxKSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgdHJhbnNsYXRlOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHggPSB4fHwwXG4gICAgICAgIHkgPSB5fHwwXG4gICAgICAgIG1hdDQudHJhbnNsYXRlKHRoaXMudHJhbnNmb3JtLCB0aGlzLnRyYW5zZm9ybSwgY29weTModG1wVmVjMywgeCwgeSwgMCkpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHJvdGF0ZVo6IGZ1bmN0aW9uKHJhZCkge1xuICAgICAgICByYWQgPSByYWR8fDBcbiAgICAgICAgbWF0NC5yb3RhdGVaKHRoaXMudHJhbnNmb3JtLCB0aGlzLnRyYW5zZm9ybSwgcmFkKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICByb3RhdGVZOiBmdW5jdGlvbihyYWQpIHtcbiAgICAgICAgcmFkID0gcmFkfHwwXG4gICAgICAgIG1hdDQucm90YXRlWSh0aGlzLnRyYW5zZm9ybSwgdGhpcy50cmFuc2Zvcm0sIHJhZClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgcm90YXRlWDogZnVuY3Rpb24ocmFkKSB7XG4gICAgICAgIHJhZCA9IHJhZHx8MFxuICAgICAgICBtYXQ0LnJvdGF0ZVgodGhpcy50cmFuc2Zvcm0sIHRoaXMudHJhbnNmb3JtLCByYWQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHRyYW5zZm9ybU1hdDQ6IGZ1bmN0aW9uKG1hdHJpeDR4NCkge1xuICAgICAgICBtYXQ0Lm11bHRpcGx5KHRoaXMudHJhbnNmb3JtLCB0aGlzLnRyYW5zZm9ybSwgbWF0cml4NHg0KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICByb3RhdGU6IGZ1bmN0aW9uKHJhZCkge1xuICAgICAgICB0aGlzLnJvdGF0ZVoocmFkKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBpZGVudGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgIG1hdDQuaWRlbnRpdHkodGhpcy50cmFuc2Zvcm0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG59IiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzXCIpIiwibW9kdWxlLmV4cG9ydHMgPSBwcm9ncmFtaWZ5XG5cbnZhciBzaGFkZXIgPSByZXF1aXJlKCdnbC1zaGFkZXItY29yZScpXG5cbmZ1bmN0aW9uIHByb2dyYW1pZnkodmVydGV4LCBmcmFnbWVudCwgdW5pZm9ybXMsIGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGdsKSB7XG4gICAgcmV0dXJuIHNoYWRlcihnbCwgdmVydGV4LCBmcmFnbWVudCwgdW5pZm9ybXMsIGF0dHJpYnV0ZXMpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbm9vcFxuXG5mdW5jdGlvbiBub29wKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnWW91IHNob3VsZCBidW5kbGUgeW91ciBjb2RlICcgK1xuICAgICAgJ3VzaW5nIGBnbHNsaWZ5YCBhcyBhIHRyYW5zZm9ybS4nXG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLWJhc2ljLXNoYWRlci9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyLWNvcmUvc2hhZGVyLWNvcmUuanNcIikiLCJtb2R1bGUuZXhwb3J0cyA9IHByb2dyYW1pZnlcblxuZnVuY3Rpb24gcHJvZ3JhbWlmeSh2ZXJ0ZXgsIGZyYWdtZW50LCB1bmlmb3JtcywgYXR0cmlidXRlcykge1xuICByZXR1cm4ge1xuICAgIHZlcnRleDogdmVydGV4LCBcbiAgICBmcmFnbWVudDogZnJhZ21lbnQsXG4gICAgdW5pZm9ybXM6IHVuaWZvcm1zLCBcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGltZztcblxuZnVuY3Rpb24gaW1nIChzcmMsIG9wdCwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IG9wdFxuICAgIG9wdCA9IG51bGxcbiAgfVxuXG5cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHZhciBsb2NrZWQ7XG5cbiAgZWwub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NrZWQpIHJldHVybjtcbiAgICBsb2NrZWQgPSB0cnVlO1xuXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodW5kZWZpbmVkLCBlbCk7XG4gIH07XG5cbiAgZWwub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAobG9ja2VkKSByZXR1cm47XG4gICAgbG9ja2VkID0gdHJ1ZTtcblxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG5ldyBFcnJvcignVW5hYmxlIHRvIGxvYWQgXCInICsgc3JjICsgJ1wiJyksIGVsKTtcbiAgfTtcbiAgXG4gIGlmIChvcHQgJiYgb3B0LmNyb3NzT3JpZ2luKVxuICAgIGVsLmNyb3NzT3JpZ2luID0gb3B0LmNyb3NzT3JpZ2luO1xuXG4gIGVsLnNyYyA9IHNyYztcblxuICByZXR1cm4gZWw7XG59XG4iLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL21peGVzL2luZGV4LmpzXCIpIiwiLypcclxuICogcmFmLmpzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3J5bWFuL3JhZi5qc1xyXG4gKlxyXG4gKiBvcmlnaW5hbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyXHJcbiAqIGluc3BpcmVkIGZyb20gcGF1bF9pcmlzaCBnaXN0IGFuZCBwb3N0XHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMyBuZ3J5bWFuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuICovXHJcblxyXG4oZnVuY3Rpb24od2luZG93KSB7XHJcblx0dmFyIGxhc3RUaW1lID0gMCxcclxuXHRcdHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXSxcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXHJcblx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSxcclxuXHRcdGkgPSB2ZW5kb3JzLmxlbmd0aDtcclxuXHJcblx0Ly8gdHJ5IHRvIHVuLXByZWZpeCBleGlzdGluZyByYWZcclxuXHR3aGlsZSAoLS1pID49IDAgJiYgIXJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcblx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ107XHJcblx0fVxyXG5cclxuXHQvLyBwb2x5ZmlsbCB3aXRoIHNldFRpbWVvdXQgZmFsbGJhY2tcclxuXHQvLyBoZWF2aWx5IGluc3BpcmVkIGZyb20gQGRhcml1cyBnaXN0IG1vZDogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzE1Nzk2NzEjY29tbWVudC04Mzc5NDVcclxuXHRpZiAoIXJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAhY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRcdHZhciBub3cgPSArbmV3IERhdGUoKSwgbmV4dFRpbWUgPSBNYXRoLm1heChsYXN0VGltZSArIDE2LCBub3cpO1xyXG5cdFx0XHRyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhsYXN0VGltZSA9IG5leHRUaW1lKTtcclxuXHRcdFx0fSwgbmV4dFRpbWUgLSBub3cpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSA9IGNsZWFyVGltZW91dDtcclxuXHR9XHJcblxyXG5cdC8vIGV4cG9ydCB0byB3aW5kb3dcclxuXHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5cdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG59KHdpbmRvdykpO1xyXG4iLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuICB2YXIgQ29weVNoYWRlciA9IEVmZmVjdENvbXBvc2VyLkNvcHlTaGFkZXIgPSByZXF1aXJlKCd0aHJlZS1jb3B5c2hhZGVyJylcbiAgICAsIFJlbmRlclBhc3MgPSBFZmZlY3RDb21wb3Nlci5SZW5kZXJQYXNzID0gcmVxdWlyZSgnLi9saWIvcmVuZGVycGFzcycpKFRIUkVFKVxuICAgICwgU2hhZGVyUGFzcyA9IEVmZmVjdENvbXBvc2VyLlNoYWRlclBhc3MgPSByZXF1aXJlKCcuL2xpYi9zaGFkZXJwYXNzJykoVEhSRUUsIEVmZmVjdENvbXBvc2VyKVxuICAgICwgTWFza1Bhc3MgPSBFZmZlY3RDb21wb3Nlci5NYXNrUGFzcyA9IHJlcXVpcmUoJy4vbGliL21hc2twYXNzJykoVEhSRUUpXG4gICAgLCBDbGVhck1hc2tQYXNzID0gRWZmZWN0Q29tcG9zZXIuQ2xlYXJNYXNrUGFzcyA9IHJlcXVpcmUoJy4vbGliL2NsZWFybWFza3Bhc3MnKShUSFJFRSlcblxuICBmdW5jdGlvbiBFZmZlY3RDb21wb3NlciggcmVuZGVyZXIsIHJlbmRlclRhcmdldCApIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICBpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgMTtcbiAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMTtcbiAgICAgIHZhciBwYXJhbWV0ZXJzID0geyBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIGZvcm1hdDogVEhSRUUuUkdCRm9ybWF0LCBzdGVuY2lsQnVmZmVyOiBmYWxzZSB9O1xuXG4gICAgICByZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHdpZHRoLCBoZWlnaHQsIHBhcmFtZXRlcnMgKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XG4gICAgdGhpcy5yZW5kZXJUYXJnZXQyID0gcmVuZGVyVGFyZ2V0LmNsb25lKCk7XG5cbiAgICB0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xuICAgIHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcblxuICAgIHRoaXMucGFzc2VzID0gW107XG5cbiAgICB0aGlzLmNvcHlQYXNzID0gbmV3IFNoYWRlclBhc3MoIENvcHlTaGFkZXIgKTtcbiAgfTtcblxuICBFZmZlY3RDb21wb3Nlci5wcm90b3R5cGUgPSB7XG4gICAgc3dhcEJ1ZmZlcnM6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgdG1wID0gdGhpcy5yZWFkQnVmZmVyO1xuICAgICAgdGhpcy5yZWFkQnVmZmVyID0gdGhpcy53cml0ZUJ1ZmZlcjtcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIgPSB0bXA7XG5cbiAgICB9LFxuXG4gICAgYWRkUGFzczogZnVuY3Rpb24gKCBwYXNzICkge1xuXG4gICAgICB0aGlzLnBhc3Nlcy5wdXNoKCBwYXNzICk7XG5cbiAgICB9LFxuXG4gICAgaW5zZXJ0UGFzczogZnVuY3Rpb24gKCBwYXNzLCBpbmRleCApIHtcblxuICAgICAgdGhpcy5wYXNzZXMuc3BsaWNlKCBpbmRleCwgMCwgcGFzcyApO1xuXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCBkZWx0YSApIHtcblxuICAgICAgdGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcbiAgICAgIHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcblxuICAgICAgdmFyIG1hc2tBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgdmFyIHBhc3MsIGksIGlsID0gdGhpcy5wYXNzZXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKCBpID0gMDsgaSA8IGlsOyBpICsrICkge1xuXG4gICAgICAgIHBhc3MgPSB0aGlzLnBhc3Nlc1sgaSBdO1xuXG4gICAgICAgIGlmICggIXBhc3MuZW5hYmxlZCApIGNvbnRpbnVlO1xuXG4gICAgICAgIHBhc3MucmVuZGVyKCB0aGlzLnJlbmRlcmVyLCB0aGlzLndyaXRlQnVmZmVyLCB0aGlzLnJlYWRCdWZmZXIsIGRlbHRhLCBtYXNrQWN0aXZlICk7XG5cbiAgICAgICAgaWYgKCBwYXNzLm5lZWRzU3dhcCApIHtcblxuICAgICAgICAgIGlmICggbWFza0FjdGl2ZSApIHtcblxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLnJlbmRlcmVyLmNvbnRleHQ7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuTk9URVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcblxuICAgICAgICAgICAgdGhpcy5jb3B5UGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEgKTtcblxuICAgICAgICAgICAgY29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5FUVVBTCwgMSwgMHhmZmZmZmZmZiApO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zd2FwQnVmZmVycygpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHBhc3MgaW5zdGFuY2VvZiBNYXNrUGFzcyApIHtcblxuICAgICAgICAgIG1hc2tBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHBhc3MgaW5zdGFuY2VvZiBDbGVhck1hc2tQYXNzICkge1xuXG4gICAgICAgICAgbWFza0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfSxcblxuICAgIHJlc2V0OiBmdW5jdGlvbiAoIHJlbmRlclRhcmdldCApIHtcblxuICAgICAgaWYgKCByZW5kZXJUYXJnZXQgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICByZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcblxuICAgICAgICByZW5kZXJUYXJnZXQud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgcmVuZGVyVGFyZ2V0LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XG4gICAgICB0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcblxuICAgICAgdGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcbiAgICAgIHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcblxuICAgIH0sXG5cbiAgICBzZXRTaXplOiBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XG5cbiAgICAgIHZhciByZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcblxuICAgICAgcmVuZGVyVGFyZ2V0LndpZHRoID0gd2lkdGg7XG4gICAgICByZW5kZXJUYXJnZXQuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICB0aGlzLnJlc2V0KCByZW5kZXJUYXJnZXQgKTtcblxuICAgIH1cblxuICB9O1xuXG4gIC8vIHNoYXJlZCBvcnRobyBjYW1lcmFcblxuICBFZmZlY3RDb21wb3Nlci5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtMSwgMSwgMSwgLTEsIDAsIDEgKTtcblxuICBFZmZlY3RDb21wb3Nlci5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KCAyLCAyICksIG51bGwgKTtcblxuICBFZmZlY3RDb21wb3Nlci5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICBFZmZlY3RDb21wb3Nlci5zY2VuZS5hZGQoIEVmZmVjdENvbXBvc2VyLnF1YWQgKTtcblxuICByZXR1cm4gRWZmZWN0Q29tcG9zZXJcbn07IiwiLyoqXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcbiAgZnVuY3Rpb24gQ2xlYXJNYXNrUGFzcygpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ2xlYXJNYXNrUGFzcykpIHJldHVybiBuZXcgQ2xlYXJNYXNrUGFzcyhzY2VuZSwgY2FtZXJhKTtcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICB9O1xuXG4gIENsZWFyTWFza1Bhc3MucHJvdG90eXBlID0ge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xuICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xuICAgICAgY29udGV4dC5kaXNhYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ2xlYXJNYXNrUGFzc1xufTsiLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuICBmdW5jdGlvbiBNYXNrUGFzcyggc2NlbmUsIGNhbWVyYSApIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFza1Bhc3MpKSByZXR1cm4gbmV3IE1hc2tQYXNzKHNjZW5lLCBjYW1lcmEpO1xuXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyID0gdHJ1ZTtcbiAgICB0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xuXG4gICAgdGhpcy5pbnZlcnNlID0gZmFsc2U7XG4gIH07XG5cbiAgTWFza1Bhc3MucHJvdG90eXBlID0ge1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XG5cbiAgICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuY29udGV4dDtcblxuICAgICAgLy8gZG9uJ3QgdXBkYXRlIGNvbG9yIG9yIGRlcHRoXG5cbiAgICAgIGNvbnRleHQuY29sb3JNYXNrKCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSApO1xuICAgICAgY29udGV4dC5kZXB0aE1hc2soIGZhbHNlICk7XG5cbiAgICAgIC8vIHNldCB1cCBzdGVuY2lsXG5cbiAgICAgIHZhciB3cml0ZVZhbHVlLCBjbGVhclZhbHVlO1xuXG4gICAgICBpZiAoIHRoaXMuaW52ZXJzZSApIHtcblxuICAgICAgICB3cml0ZVZhbHVlID0gMDtcbiAgICAgICAgY2xlYXJWYWx1ZSA9IDE7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgd3JpdGVWYWx1ZSA9IDE7XG4gICAgICAgIGNsZWFyVmFsdWUgPSAwO1xuXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuZW5hYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xuICAgICAgY29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuUkVQTEFDRSwgY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UgKTtcbiAgICAgIGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuQUxXQVlTLCB3cml0ZVZhbHVlLCAweGZmZmZmZmZmICk7XG4gICAgICBjb250ZXh0LmNsZWFyU3RlbmNpbCggY2xlYXJWYWx1ZSApO1xuXG4gICAgICAvLyBkcmF3IGludG8gdGhlIHN0ZW5jaWwgYnVmZmVyXG5cbiAgICAgIHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHJlYWRCdWZmZXIsIHRoaXMuY2xlYXIgKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHdyaXRlQnVmZmVyLCB0aGlzLmNsZWFyICk7XG5cbiAgICAgIC8vIHJlLWVuYWJsZSB1cGRhdGUgb2YgY29sb3IgYW5kIGRlcHRoXG5cbiAgICAgIGNvbnRleHQuY29sb3JNYXNrKCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlICk7XG4gICAgICBjb250ZXh0LmRlcHRoTWFzayggdHJ1ZSApO1xuXG4gICAgICAvLyBvbmx5IHJlbmRlciB3aGVyZSBzdGVuY2lsIGlzIHNldCB0byAxXG5cbiAgICAgIGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTsgIC8vIGRyYXcgaWYgPT0gMVxuICAgICAgY29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAgKTtcblxuICAgIH1cblxuICB9O1xuXG4gIHJldHVybiBNYXNrUGFzc1xufTtcbiIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gIGZ1bmN0aW9uIFJlbmRlclBhc3MoIHNjZW5lLCBjYW1lcmEsIG92ZXJyaWRlTWF0ZXJpYWwsIGNsZWFyQ29sb3IsIGNsZWFyQWxwaGEgKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlbmRlclBhc3MpKSByZXR1cm4gbmV3IFJlbmRlclBhc3Moc2NlbmUsIGNhbWVyYSwgb3ZlcnJpZGVNYXRlcmlhbCwgY2xlYXJDb2xvciwgY2xlYXJBbHBoYSk7XG5cbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG5cbiAgICB0aGlzLm92ZXJyaWRlTWF0ZXJpYWwgPSBvdmVycmlkZU1hdGVyaWFsO1xuXG4gICAgdGhpcy5jbGVhckNvbG9yID0gY2xlYXJDb2xvcjtcbiAgICB0aGlzLmNsZWFyQWxwaGEgPSAoIGNsZWFyQWxwaGEgIT09IHVuZGVmaW5lZCApID8gY2xlYXJBbHBoYSA6IDE7XG5cbiAgICB0aGlzLm9sZENsZWFyQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICB0aGlzLm9sZENsZWFyQWxwaGEgPSAxO1xuXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyID0gdHJ1ZTtcbiAgICB0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xuXG4gIH07XG5cbiAgUmVuZGVyUGFzcy5wcm90b3R5cGUgPSB7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcblxuICAgICAgdGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gdGhpcy5vdmVycmlkZU1hdGVyaWFsO1xuXG4gICAgICBpZiAoIHRoaXMuY2xlYXJDb2xvciApIHtcblxuICAgICAgICB0aGlzLm9sZENsZWFyQ29sb3IuY29weSggcmVuZGVyZXIuZ2V0Q2xlYXJDb2xvcigpICk7XG4gICAgICAgIHRoaXMub2xkQ2xlYXJBbHBoYSA9IHJlbmRlcmVyLmdldENsZWFyQWxwaGEoKTtcblxuICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLmNsZWFyQ29sb3IsIHRoaXMuY2xlYXJBbHBoYSApO1xuXG4gICAgICB9XG5cbiAgICAgIHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHJlYWRCdWZmZXIsIHRoaXMuY2xlYXIgKTtcblxuICAgICAgaWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XG5cbiAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggdGhpcy5vbGRDbGVhckNvbG9yLCB0aGlzLm9sZENsZWFyQWxwaGEgKTtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xuXG4gICAgfVxuXG4gIH07XG5cbiAgcmV0dXJuIFJlbmRlclBhc3M7XG5cbn07XG4iLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSwgRWZmZWN0Q29tcG9zZXIpIHtcbiAgZnVuY3Rpb24gU2hhZGVyUGFzcyggc2hhZGVyLCB0ZXh0dXJlSUQgKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNoYWRlclBhc3MpKSByZXR1cm4gbmV3IFNoYWRlclBhc3Moc2hhZGVyLCB0ZXh0dXJlSUQpO1xuXG4gICAgdGhpcy50ZXh0dXJlSUQgPSAoIHRleHR1cmVJRCAhPT0gdW5kZWZpbmVkICkgPyB0ZXh0dXJlSUQgOiBcInREaWZmdXNlXCI7XG5cbiAgICB0aGlzLnVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICk7XG5cbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG5cbiAgICAgIHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuICAgICAgdmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxuICAgICAgZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlclxuXG4gICAgfSApO1xuXG4gICAgdGhpcy5yZW5kZXJUb1NjcmVlbiA9IGZhbHNlO1xuXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLm5lZWRzU3dhcCA9IHRydWU7XG4gICAgdGhpcy5jbGVhciA9IGZhbHNlO1xuXG4gIH07XG5cbiAgU2hhZGVyUGFzcy5wcm90b3R5cGUgPSB7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcblxuICAgICAgaWYgKCB0aGlzLnVuaWZvcm1zWyB0aGlzLnRleHR1cmVJRCBdICkge1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0udmFsdWUgPSByZWFkQnVmZmVyO1xuXG4gICAgICB9XG5cbiAgICAgIEVmZmVjdENvbXBvc2VyLnF1YWQubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xuXG4gICAgICBpZiAoIHRoaXMucmVuZGVyVG9TY3JlZW4gKSB7XG5cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBFZmZlY3RDb21wb3Nlci5zY2VuZSwgRWZmZWN0Q29tcG9zZXIuY2FtZXJhICk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBFZmZlY3RDb21wb3Nlci5zY2VuZSwgRWZmZWN0Q29tcG9zZXIuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gU2hhZGVyUGFzcztcblxufTsiLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKlxuICogRnVsbC1zY3JlZW4gdGV4dHVyZWQgcXVhZCBzaGFkZXJcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdW5pZm9ybXM6IHtcbiAgICBcInREaWZmdXNlXCI6IHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXG4gICAgXCJvcGFjaXR5XCI6ICB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH1cbiAgfSxcbiAgdmVydGV4U2hhZGVyOiBbXG4gICAgXCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxuXG4gICAgXCJ2b2lkIG1haW4oKSB7XCIsXG5cbiAgICAgIFwidlV2ID0gdXY7XCIsXG4gICAgICBcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcblxuICAgIFwifVwiXG4gIF0uam9pbihcIlxcblwiKSxcbiAgZnJhZ21lbnRTaGFkZXI6IFtcbiAgICBcInVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcIixcblxuICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXG5cbiAgICBcInZhcnlpbmcgdmVjMiB2VXY7XCIsXG5cbiAgICBcInZvaWQgbWFpbigpIHtcIixcblxuICAgICAgXCJ2ZWM0IHRleGVsID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgdlV2ICk7XCIsXG4gICAgICBcImdsX0ZyYWdDb2xvciA9IG9wYWNpdHkgKiB0ZXhlbDtcIixcblxuICAgIFwifVwiXG4gIF0uam9pbihcIlxcblwiKVxufTtcbiIsInZhciBjcmVhdGVUeXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcblxuICAgIHZhciB0eXBlcyA9IGNyZWF0ZVR5cGVzKFRIUkVFKSBcblxuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGUoZ2xTaGFkZXIsIG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHN8fHt9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmNvbG9ycyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBvcHRzLmNvbG9ycyA9IFtvcHRzLmNvbG9yc11cbiAgICAgICAgXG4gICAgICAgIHZhciB0VW5pZm9ybXMgPSB0eXBlcyggZ2xTaGFkZXIudW5pZm9ybXMsIG9wdHMuY29sb3JzIClcbiAgICAgICAgdmFyIHRBdHRyaWJzID0gdHlwZXMoIGdsU2hhZGVyLmF0dHJpYnV0ZXMsIG9wdHMuY29sb3JzIClcbiAgICAgICAgICAgIFxuICAgICAgICAvL2NsZWFyIHRoZSBhdHRyaWJ1dGUgYXJyYXlzXG4gICAgICAgIGZvciAodmFyIGsgaW4gdEF0dHJpYnMpIHtcbiAgICAgICAgICAgIHRBdHRyaWJzW2tdLnZhbHVlID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGdsU2hhZGVyLnZlcnRleCxcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBnbFNoYWRlci5mcmFnbWVudCxcbiAgICAgICAgICAgIHVuaWZvcm1zOiB0VW5pZm9ybXMsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0QXR0cmlic1xuICAgICAgICB9XG4gICAgfVxufSIsInZhciB0eXBlTWFwID0ge1xuICAgICdpbnQnOiAnaScsXG4gICAgJ2Zsb2F0JzogJ2YnLFxuICAgICdpdmVjMic6ICdpMicsXG4gICAgJ2l2ZWMzJzogJ2kzJyxcbiAgICAnaXZlYzQnOiAnaTQnLFxuICAgICd2ZWMyJzogJ3YyJyxcbiAgICAndmVjMyc6ICd2MycsXG4gICAgJ3ZlYzQnOiAndjQnLFxuICAgICdtYXQ0JzogJ200JyxcbiAgICAnbWF0Myc6ICdtMycsXG4gICAgJ3NhbXBsZXIyRCc6ICd0JyxcbiAgICAnc2FtcGxlckN1YmUnOiAndCdcbn1cblxuZnVuY3Rpb24gY3JlYXRlKFRIUkVFKSB7XG4gICAgZnVuY3Rpb24gbmV3SW5zdGFuY2UodHlwZSwgaXNBcnJheSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Zsb2F0JzogXG4gICAgICAgICAgICBjYXNlICdpbnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICBjYXNlICd2ZWMyJzpcbiAgICAgICAgICAgIGNhc2UgJ2l2ZWMyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjIoKVxuICAgICAgICAgICAgY2FzZSAndmVjMyc6XG4gICAgICAgICAgICBjYXNlICdpdmVjMyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKClcbiAgICAgICAgICAgIGNhc2UgJ3ZlYzQnOlxuICAgICAgICAgICAgY2FzZSAnaXZlYzQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yNCgpXG4gICAgICAgICAgICBjYXNlICdtYXQ0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKVxuICAgICAgICAgICAgY2FzZSAnbWF0Myc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXgzKClcbiAgICAgICAgICAgIGNhc2UgJ3NhbXBsZXJDdWJlJzpcbiAgICAgICAgICAgIGNhc2UgJ3NhbXBsZXIyRCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5UZXh0dXJlKClcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHR5cGUsIGlzQXJyYXksIGFycmF5TGVuKSB7XG4gICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICAvL1RocmVlSlMgZmxhdHRlbnMgaXZlYzMgdHlwZVxuICAgICAgICAgICAgLy8od2UgZG9uJ3Qgc3VwcG9ydCAnZnYnIHR5cGUpXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2l2ZWMzJylcbiAgICAgICAgICAgICAgICBhcnJheUxlbiAqPSAzXG4gICAgICAgICAgICB2YXIgYXIgPSBuZXcgQXJyYXkoYXJyYXlMZW4pXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8YXIubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgYXJbaV0gPSBuZXdJbnN0YW5jZSh0eXBlLCBpc0FycmF5KVxuICAgICAgICAgICAgcmV0dXJuIGFyXG4gICAgICAgIH0gIFxuICAgICAgICByZXR1cm4gbmV3SW5zdGFuY2UodHlwZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUeXBlKHR5cGUsIGlzQXJyYXkpIHtcbiAgICAgICAgaWYgKCFpc0FycmF5KVxuICAgICAgICAgICAgcmV0dXJuIHR5cGVNYXBbdHlwZV1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ludCcpXG4gICAgICAgICAgICByZXR1cm4gJ2l2MSdcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Zsb2F0JylcbiAgICAgICAgICAgIHJldHVybiAnZnYxJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gdHlwZU1hcFt0eXBlXSsndidcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gc2V0dXBVbmlmb3JtcyhnbFVuaWZvcm1zLCBjb2xvck5hbWVzKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb2xvck5hbWVzKSlcbiAgICAgICAgICAgIGNvbG9yTmFtZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9XG4gICAgICAgIHZhciBhcnJheXMgPSB7fVxuXG4gICAgICAgIC8vbWFwIHVuaWZvcm0gdHlwZXNcbiAgICAgICAgZ2xVbmlmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uKHVuaWZvcm0pIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdW5pZm9ybS5uYW1lXG4gICAgICAgICAgICB2YXIgaXNBcnJheSA9IC8oLispXFxbWzAtOV0rXFxdLy5leGVjKG5hbWUpXG5cbiAgICAgICAgICAgIC8vc3BlY2lhbCBjYXNlOiBjb2xvcnMuLi5cbiAgICAgICAgICAgIGlmIChjb2xvck5hbWVzICYmIGNvbG9yTmFtZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXJyYXkgb2YgY29sb3IgdW5pZm9ybXMgbm90IHN1cHBvcnRlZFwiKVxuICAgICAgICAgICAgICAgIGlmICh1bmlmb3JtLnR5cGUgIT09ICd2ZWMzJylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhyZWVKUyBleHBlY3RzIHZlYzMgZm9yIENvbG9yIHVuaWZvcm1zXCIpIFxuICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2MnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGlzQXJyYXlbMV1cbiAgICAgICAgICAgICAgICBpZiAobmFtZSBpbiBhcnJheXMpIFxuICAgICAgICAgICAgICAgICAgICBhcnJheXNbbmFtZV0uY291bnQrKyBcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGFycmF5c1tuYW1lXSA9IHsgY291bnQ6IDEsIHR5cGU6IHVuaWZvcm0udHlwZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRbbmFtZV0gPSB7IFxuICAgICAgICAgICAgICAgIHR5cGU6IGdldFR5cGUodW5pZm9ybS50eXBlLCBpc0FycmF5KSwgXG4gICAgICAgICAgICAgICAgdmFsdWU6IGlzQXJyYXkgPyBudWxsIDogZGVmYXVsdFZhbHVlKHVuaWZvcm0udHlwZSkgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9ub3cgY2xlYW4gdXAgYW55IGFycmF5IHZhbHVlc1xuICAgICAgICBmb3IgKHZhciBrIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIHUgPSByZXN1bHRba11cbiAgICAgICAgICAgIGlmIChrIGluIGFycmF5cykgeyAvL2lzIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBhcnJheXNba11cbiAgICAgICAgICAgICAgICB1LnZhbHVlID0gZGVmYXVsdFZhbHVlKGEudHlwZSwgdHJ1ZSwgYS5jb3VudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSIsInZhciBnbHNsaWZ5ID0gcmVxdWlyZShcImdsc2xpZnlcIik7XG52YXIgdGhyZWVpZnkgPSByZXF1aXJlKFwidGhyZWUtZ2xzbGlmeVwiKTtcbnZhciBzb3VyY2UgPSByZXF1aXJlKFwiZ2xzbGlmeS9zaW1wbGUtYWRhcHRlci5qc1wiKShcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JOVztcXG52YXJ5aW5nIHZlYzIgdl9yZ2JORTtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JTVztcXG52YXJ5aW5nIHZlYzIgdl9yZ2JTRTtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JNO1xcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnZvaWQgYV94X3RleGNvb3Jkcyh2ZWMyIGZyYWdDb29yZCwgdmVjMiByZXNvbHV0aW9uLCBvdXQgdmVjMiB2X3JnYk5XLCBvdXQgdmVjMiB2X3JnYk5FLCBvdXQgdmVjMiB2X3JnYlNXLCBvdXQgdmVjMiB2X3JnYlNFLCBvdXQgdmVjMiB2X3JnYk0pIHtcXG4gIHZlYzIgaW52ZXJzZVZQID0gMS4wIC8gcmVzb2x1dGlvbi54eTtcXG4gIHZfcmdiTlcgPSAoZnJhZ0Nvb3JkICsgdmVjMigtMS4wLCAtMS4wKSkgKiBpbnZlcnNlVlA7XFxuICB2X3JnYk5FID0gKGZyYWdDb29yZCArIHZlYzIoMS4wLCAtMS4wKSkgKiBpbnZlcnNlVlA7XFxuICB2X3JnYlNXID0gKGZyYWdDb29yZCArIHZlYzIoLTEuMCwgMS4wKSkgKiBpbnZlcnNlVlA7XFxuICB2X3JnYlNFID0gKGZyYWdDb29yZCArIHZlYzIoMS4wLCAxLjApKSAqIGludmVyc2VWUDtcXG4gIHZfcmdiTSA9IHZlYzIoZnJhZ0Nvb3JkICogaW52ZXJzZVZQKTtcXG59XFxudm9pZCBtYWluKCkge1xcbiAgdlV2ID0gdXY7XFxuICB2ZWMyIGZyYWdDb29yZCA9IHV2ICogcmVzb2x1dGlvbjtcXG4gIGFfeF90ZXhjb29yZHMoZnJhZ0Nvb3JkLCByZXNvbHV0aW9uLCB2X3JnYk5XLCB2X3JnYk5FLCB2X3JnYlNXLCB2X3JnYlNFLCB2X3JnYk0pO1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZhcnlpbmcgdmVjMiB2X3JnYk5XO1xcbnZhcnlpbmcgdmVjMiB2X3JnYk5FO1xcbnZhcnlpbmcgdmVjMiB2X3JnYlNXO1xcbnZhcnlpbmcgdmVjMiB2X3JnYlNFO1xcbnZhcnlpbmcgdmVjMiB2X3JnYk07XFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxudW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxuI2lmbmRlZiBGWEFBX1JFRFVDRV9NSU5cXG5cXG4jZGVmaW5lIEZYQUFfUkVEVUNFX01JTiAgICgxLjAvIDEyOC4wKVxcblxcbiNlbmRpZlxcblxcbiNpZm5kZWYgRlhBQV9SRURVQ0VfTVVMXFxuXFxuI2RlZmluZSBGWEFBX1JFRFVDRV9NVUwgICAoMS4wIC8gOC4wKVxcblxcbiNlbmRpZlxcblxcbiNpZm5kZWYgRlhBQV9TUEFOX01BWFxcblxcbiNkZWZpbmUgRlhBQV9TUEFOX01BWCAgICAgOC4wXFxuXFxuI2VuZGlmXFxuXFxudmVjNCBhX3hfZnhhYShzYW1wbGVyMkQgdGV4LCB2ZWMyIGZyYWdDb29yZCwgdmVjMiByZXNvbHV0aW9uLCB2ZWMyIHZfcmdiTlcsIHZlYzIgdl9yZ2JORSwgdmVjMiB2X3JnYlNXLCB2ZWMyIHZfcmdiU0UsIHZlYzIgdl9yZ2JNKSB7XFxuICB2ZWM0IGNvbG9yO1xcbiAgbWVkaXVtcCB2ZWMyIGludmVyc2VWUCA9IHZlYzIoMS4wIC8gcmVzb2x1dGlvbi54LCAxLjAgLyByZXNvbHV0aW9uLnkpO1xcbiAgdmVjMyByZ2JOVyA9IHRleHR1cmUyRCh0ZXgsIHZfcmdiTlcpLnh5ejtcXG4gIHZlYzMgcmdiTkUgPSB0ZXh0dXJlMkQodGV4LCB2X3JnYk5FKS54eXo7XFxuICB2ZWMzIHJnYlNXID0gdGV4dHVyZTJEKHRleCwgdl9yZ2JTVykueHl6O1xcbiAgdmVjMyByZ2JTRSA9IHRleHR1cmUyRCh0ZXgsIHZfcmdiU0UpLnh5ejtcXG4gIHZlYzQgdGV4Q29sb3IgPSB0ZXh0dXJlMkQodGV4LCB2X3JnYk0pO1xcbiAgdmVjMyByZ2JNID0gdGV4Q29sb3IueHl6O1xcbiAgdmVjMyBsdW1hID0gdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KTtcXG4gIGZsb2F0IGx1bWFOVyA9IGRvdChyZ2JOVywgbHVtYSk7XFxuICBmbG9hdCBsdW1hTkUgPSBkb3QocmdiTkUsIGx1bWEpO1xcbiAgZmxvYXQgbHVtYVNXID0gZG90KHJnYlNXLCBsdW1hKTtcXG4gIGZsb2F0IGx1bWFTRSA9IGRvdChyZ2JTRSwgbHVtYSk7XFxuICBmbG9hdCBsdW1hTSA9IGRvdChyZ2JNLCBsdW1hKTtcXG4gIGZsb2F0IGx1bWFNaW4gPSBtaW4obHVtYU0sIG1pbihtaW4obHVtYU5XLCBsdW1hTkUpLCBtaW4obHVtYVNXLCBsdW1hU0UpKSk7XFxuICBmbG9hdCBsdW1hTWF4ID0gbWF4KGx1bWFNLCBtYXgobWF4KGx1bWFOVywgbHVtYU5FKSwgbWF4KGx1bWFTVywgbHVtYVNFKSkpO1xcbiAgbWVkaXVtcCB2ZWMyIGRpcjtcXG4gIGRpci54ID0gLSgobHVtYU5XICsgbHVtYU5FKSAtIChsdW1hU1cgKyBsdW1hU0UpKTtcXG4gIGRpci55ID0gKChsdW1hTlcgKyBsdW1hU1cpIC0gKGx1bWFORSArIGx1bWFTRSkpO1xcbiAgZmxvYXQgZGlyUmVkdWNlID0gbWF4KChsdW1hTlcgKyBsdW1hTkUgKyBsdW1hU1cgKyBsdW1hU0UpICogKDAuMjUgKiBGWEFBX1JFRFVDRV9NVUwpLCBGWEFBX1JFRFVDRV9NSU4pO1xcbiAgZmxvYXQgcmNwRGlyTWluID0gMS4wIC8gKG1pbihhYnMoZGlyLngpLCBhYnMoZGlyLnkpKSArIGRpclJlZHVjZSk7XFxuICBkaXIgPSBtaW4odmVjMihGWEFBX1NQQU5fTUFYLCBGWEFBX1NQQU5fTUFYKSwgbWF4KHZlYzIoLUZYQUFfU1BBTl9NQVgsIC1GWEFBX1NQQU5fTUFYKSwgZGlyICogcmNwRGlyTWluKSkgKiBpbnZlcnNlVlA7XFxuICB2ZWMzIHJnYkEgPSAwLjUgKiAodGV4dHVyZTJEKHRleCwgZnJhZ0Nvb3JkICogaW52ZXJzZVZQICsgZGlyICogKDEuMCAvIDMuMCAtIDAuNSkpLnh5eiArIHRleHR1cmUyRCh0ZXgsIGZyYWdDb29yZCAqIGludmVyc2VWUCArIGRpciAqICgyLjAgLyAzLjAgLSAwLjUpKS54eXopO1xcbiAgdmVjMyByZ2JCID0gcmdiQSAqIDAuNSArIDAuMjUgKiAodGV4dHVyZTJEKHRleCwgZnJhZ0Nvb3JkICogaW52ZXJzZVZQICsgZGlyICogLTAuNSkueHl6ICsgdGV4dHVyZTJEKHRleCwgZnJhZ0Nvb3JkICogaW52ZXJzZVZQICsgZGlyICogMC41KS54eXopO1xcbiAgZmxvYXQgbHVtYUIgPSBkb3QocmdiQiwgbHVtYSk7XFxuICBpZigobHVtYUIgPCBsdW1hTWluKSB8fCAobHVtYUIgPiBsdW1hTWF4KSlcXG4gICAgY29sb3IgPSB2ZWM0KHJnYkEsIHRleENvbG9yLmEpO1xcbiAgZWxzZVxcbiAgICBjb2xvciA9IHZlYzQocmdiQiwgdGV4Q29sb3IuYSk7XFxuICByZXR1cm4gY29sb3I7XFxufVxcbnZvaWQgbWFpbigpIHtcXG4gIHZlYzIgZnJhZ0Nvb3JkID0gdlV2ICogcmVzb2x1dGlvbjtcXG4gIGdsX0ZyYWdDb2xvciA9IGFfeF9meGFhKHREaWZmdXNlLCBmcmFnQ29vcmQsIHJlc29sdXRpb24sIHZfcmdiTlcsIHZfcmdiTkUsIHZfcmdiU1csIHZfcmdiU0UsIHZfcmdiTSk7XFxufVwiLCBbe1wibmFtZVwiOlwicmVzb2x1dGlvblwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJyZXNvbHV0aW9uXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9LHtcIm5hbWVcIjpcInREaWZmdXNlXCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn1dLCBbXSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcbiAgICB2YXIgY3JlYXRlU2hhZGVyID0gdGhyZWVpZnkoVEhSRUUpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlU2hhZGVyKHNvdXJjZSk7XG4gICAgfTtcbn07Il19
