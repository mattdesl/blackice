(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./index.js":[function(require,module,exports){
(function (global){
var app = require('canvas-app')(render, {
    context: 'webgl',
    contextAttributes: { antialias: false, alpha: false },
    retina: false,
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
module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports={"pages":["Exo2SemiBold.png"],"chars":[{"id":32,"x":0,"y":0,"width":0,"height":0,"xoffset":0,"yoffset":33,"xadvance":7,"page":0,"chnl":0},{"id":41,"x":0,"y":0,"width":20,"height":41,"xoffset":-4,"yoffset":3,"xadvance":12,"page":0,"chnl":0},{"id":40,"x":20,"y":0,"width":19,"height":41,"xoffset":-3,"yoffset":3,"xadvance":12,"page":0,"chnl":0},{"id":124,"x":39,"y":0,"width":13,"height":40,"xoffset":-2,"yoffset":3,"xadvance":8,"page":0,"chnl":0},{"id":125,"x":52,"y":0,"width":18,"height":40,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":123,"x":70,"y":0,"width":18,"height":40,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":36,"x":88,"y":0,"width":25,"height":39,"xoffset":-3,"yoffset":3,"xadvance":18,"page":0,"chnl":0},{"id":93,"x":113,"y":0,"width":17,"height":39,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":91,"x":130,"y":0,"width":17,"height":39,"xoffset":-2,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":81,"x":147,"y":0,"width":28,"height":39,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":106,"x":175,"y":0,"width":16,"height":38,"xoffset":-4,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":92,"x":191,"y":0,"width":26,"height":34,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":47,"x":217,"y":0,"width":26,"height":34,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":102,"x":243,"y":0,"width":23,"height":33,"xoffset":-4,"yoffset":5,"xadvance":13,"page":0,"chnl":0},{"id":38,"x":266,"y":0,"width":32,"height":32,"xoffset":-3,"yoffset":6,"xadvance":25,"page":0,"chnl":0},{"id":35,"x":298,"y":0,"width":30,"height":32,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":37,"x":328,"y":0,"width":36,"height":32,"xoffset":-3,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":63,"x":364,"y":0,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":16,"page":0,"chnl":0},{"id":33,"x":388,"y":0,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":48,"x":402,"y":0,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":57,"x":428,"y":0,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":56,"x":453,"y":0,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":55,"x":479,"y":0,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":54,"x":0,"y":41,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":53,"x":26,"y":41,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":52,"x":50,"y":41,"width":27,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":51,"x":77,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":50,"x":102,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":49,"x":127,"y":41,"width":19,"height":32,"xoffset":-4,"yoffset":6,"xadvance":13,"page":0,"chnl":0},{"id":121,"x":146,"y":41,"width":27,"height":32,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":113,"x":173,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":112,"x":198,"y":41,"width":25,"height":32,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":108,"x":223,"y":41,"width":17,"height":32,"xoffset":-2,"yoffset":6,"xadvance":10,"page":0,"chnl":0},{"id":107,"x":240,"y":41,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":105,"x":264,"y":41,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":8,"page":0,"chnl":0},{"id":104,"x":278,"y":41,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":103,"x":302,"y":41,"width":27,"height":32,"xoffset":-4,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":100,"x":329,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":98,"x":354,"y":41,"width":25,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":90,"x":379,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":89,"x":404,"y":41,"width":28,"height":32,"xoffset":-4,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":88,"x":432,"y":41,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":87,"x":461,"y":41,"width":39,"height":32,"xoffset":-4,"yoffset":6,"xadvance":31,"page":0,"chnl":0},{"id":86,"x":0,"y":73,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":85,"x":29,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":21,"page":0,"chnl":0},{"id":84,"x":56,"y":73,"width":28,"height":32,"xoffset":-4,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":83,"x":84,"y":73,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":82,"x":109,"y":73,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":80,"x":135,"y":73,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":79,"x":161,"y":73,"width":28,"height":32,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":78,"x":189,"y":73,"width":28,"height":32,"xoffset":-2,"yoffset":6,"xadvance":23,"page":0,"chnl":0},{"id":77,"x":217,"y":73,"width":34,"height":32,"xoffset":-2,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":76,"x":251,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":75,"x":275,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":74,"x":302,"y":73,"width":18,"height":32,"xoffset":-4,"yoffset":6,"xadvance":11,"page":0,"chnl":0},{"id":73,"x":320,"y":73,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":72,"x":334,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":71,"x":361,"y":73,"width":27,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":70,"x":388,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":69,"x":412,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":68,"x":436,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":21,"page":0,"chnl":0},{"id":67,"x":463,"y":73,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":66,"x":0,"y":105,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":65,"x":26,"y":105,"width":30,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":64,"x":56,"y":105,"width":29,"height":31,"xoffset":-2,"yoffset":9,"xadvance":24,"page":0,"chnl":0},{"id":116,"x":85,"y":105,"width":22,"height":30,"xoffset":-4,"yoffset":8,"xadvance":13,"page":0,"chnl":0},{"id":59,"x":107,"y":105,"width":14,"height":29,"xoffset":-2,"yoffset":14,"xadvance":8,"page":0,"chnl":0},{"id":122,"x":121,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":120,"x":145,"y":105,"width":26,"height":26,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":119,"x":171,"y":105,"width":36,"height":26,"xoffset":-4,"yoffset":12,"xadvance":27,"page":0,"chnl":0},{"id":118,"x":207,"y":105,"width":27,"height":26,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":117,"x":234,"y":105,"width":24,"height":26,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":115,"x":258,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":114,"x":282,"y":105,"width":20,"height":26,"xoffset":-2,"yoffset":12,"xadvance":13,"page":0,"chnl":0},{"id":111,"x":302,"y":105,"width":25,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":110,"x":327,"y":105,"width":24,"height":26,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":109,"x":351,"y":105,"width":33,"height":26,"xoffset":-2,"yoffset":12,"xadvance":28,"page":0,"chnl":0},{"id":101,"x":384,"y":105,"width":25,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":99,"x":409,"y":105,"width":23,"height":26,"xoffset":-3,"yoffset":12,"xadvance":16,"page":0,"chnl":0},{"id":97,"x":432,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":43,"x":456,"y":105,"width":24,"height":24,"xoffset":-3,"yoffset":11,"xadvance":17,"page":0,"chnl":0},{"id":62,"x":480,"y":105,"width":23,"height":24,"xoffset":-2,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":60,"x":0,"y":137,"width":23,"height":24,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":58,"x":23,"y":137,"width":14,"height":24,"xoffset":-3,"yoffset":14,"xadvance":8,"page":0,"chnl":0},{"id":42,"x":37,"y":137,"width":21,"height":21,"xoffset":-3,"yoffset":6,"xadvance":14,"page":0,"chnl":0},{"id":61,"x":58,"y":137,"width":24,"height":20,"xoffset":-2,"yoffset":13,"xadvance":19,"page":0,"chnl":0},{"id":94,"x":82,"y":137,"width":23,"height":19,"xoffset":-4,"yoffset":8,"xadvance":14,"page":0,"chnl":0},{"id":44,"x":105,"y":137,"width":14,"height":19,"xoffset":-3,"yoffset":24,"xadvance":8,"page":0,"chnl":0},{"id":39,"x":119,"y":137,"width":13,"height":17,"xoffset":-3,"yoffset":6,"xadvance":7,"page":0,"chnl":0},{"id":96,"x":132,"y":137,"width":18,"height":17,"xoffset":-4,"yoffset":5,"xadvance":11,"page":0,"chnl":0},{"id":34,"x":150,"y":137,"width":18,"height":17,"xoffset":-3,"yoffset":6,"xadvance":12,"page":0,"chnl":0},{"id":126,"x":168,"y":137,"width":22,"height":14,"xoffset":-2,"yoffset":17,"xadvance":17,"page":0,"chnl":0},{"id":46,"x":190,"y":137,"width":14,"height":14,"xoffset":-3,"yoffset":24,"xadvance":8,"page":0,"chnl":0},{"id":95,"x":204,"y":137,"width":24,"height":13,"xoffset":-2,"yoffset":28,"xadvance":18,"page":0,"chnl":0},{"id":45,"x":228,"y":137,"width":19,"height":13,"xoffset":-2,"yoffset":18,"xadvance":14,"page":0,"chnl":0}],"kernings":[],"info":{"face":"Exo 2 Semi Bold","size":32,"bold":0,"italic":0,"charset":"","unicode":0,"stretchH":100,"smooth":1,"aa":1,"padding":[4,4,4,4],"spacing":[-8,-8]},"common":{"lineHeight":40,"base":33,"scaleW":512,"scaleH":512,"pages":1,"packed":0}}
},{}],"/projects/blackice/lib/RigScene.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var inherits = require('inherits')
var mixes = require('mixes')
var Base = THREE.Scene

var YOFF = 2.5

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

    var loader = new THREE.OBJMTLLoader()
    loader.load('model/Prirazlomnaya.obj', 'model/Prirazlomnaya.mtl', function(object, materials) {
        var s = 0.3
        console.log(object, materials)
        object.scale.set(s,s,s)
        object.position.y -= YOFF
        this.mesh = object
        

        this.mesh.traverse(function(obj) {
            if (obj instanceof THREE.Mesh) {
                obj.castShadow = true
                obj.receiveShadow = true
            }
        })

        this.add(object)
    }.bind(this))
    

    // var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
    // var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    // var torusKnot = new THREE.Mesh( geometry, material );
    // this.add( torusKnot );
    // torusKnot.castShadow = true
    // torusKnot.receiveShadow = true

    this.lights = [
        [ new THREE.Vector3(-10, 20, -20), 1 ],
        [ new THREE.Vector3(15, 10, 15), 0.5 ]
    ].map(function(args, i) {
        var light = new THREE.DirectionalLight( 0xddf4fd, args[1] )
        light.position.copy(args[0])
        light.castShadow = true
        light.shadowMapWidth = 1024
        light.shadowMapHeight = 1024
        light.shadowCameraNear = 1
        light.shadowCameraFar = 100

        light.helper = new THREE.DirectionalLightHelper(light, 4)
        this.add(light.helper)
        this.add(light)
        return light
    },this)
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

        this.lights.forEach(function(light) { light.helper.update() })
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
            this.text.draw(this.camera, spot)
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
    gl.disable(gl.CULL_FACE);
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

TextRenderer.prototype.draw = function(camera, feature) {
    var gl = this.gl;
    var object3d = feature.object;
    var text = feature.text;

    if (!object3d.visible)
        return;

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
    mat4.translate(modelTransform, modelTransform, [0, 0, 0.1]);
    this.shader.bind();
    this.shader.uniforms.projection = camera.projectionMatrix.elements;
    this.shader.uniforms.view = camera.matrixWorldInverse.elements;
    this.shader.uniforms.model = modelTransform;
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    WHITE[3] = feature.opacity;
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
            dz = v.z,
            theta = -Math.atan2(dz, dx) 
        object.rotation.y = theta

        var ret = {
            direction: dir,
            origin: v,
            fade: 0.0,
            animating: false,
            opacity: 1.0,
            _showing: false,
            theta: theta + Math.PI/2,
            object: object,
            text: lipsum[ i % lipsum.length ]
        }

        Object.defineProperty(ret, "showing", {
            set: function(s) {
                this._showing = s
                this.object.visible = s
            },
            get: function() {
                return this._showing
            }
        })

        return ret
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

var TweenMax = (typeof window !== "undefined" ? window.TweenMax : typeof global !== "undefined" ? global.TweenMax : null)
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
            antialias: false,
            alpha: false
        })
        renderer.setClearColor(0xffffff, 0)
        renderer.shadowMapType = THREE.BasicShadowMap
        // renderer.shadowMapEnabled = true

        opt.fov = number(opt.fov, 50)
        camera = new THREE.PerspectiveCamera(opt.fov, width/height, 0.5, 20000)
        camera.position.z = 50
        camera.position.y = 20
        camera.lookAt(new THREE.Vector3())

        controller = new OrbitController(camera)
        controller.userPan = false
        controller.userPanSpeed = 0.0
        controller.zoomSpeed = 0.1
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
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./RigScene":"/projects/blackice/lib/RigScene.js","./TextRenderer":"/projects/blackice/lib/TextRenderer.js","./feature-points":"/projects/blackice/lib/feature-points.js","./setup-effects":"/projects/blackice/lib/setup-effects.js","./setup-water":"/projects/blackice/lib/setup-water.js","./three-orbit-camera":"/projects/blackice/lib/three-orbit-camera/index.js","as-number":"/projects/blackice/node_modules/as-number/index.js","clamp":"/projects/blackice/node_modules/clamp/index.js","plucker":"/projects/blackice/node_modules/plucker/index.js","smoothstep":"/projects/blackice/node_modules/smoothstep/index.js"}],"/projects/blackice/lib/setup-effects.js":[function(require,module,exports){
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

    //default values to avoid div by zero
    lensPass.uniforms.overlayResolution.value.set(1, 1)
    lensPass.uniforms.tLookup.value = loadTexture('img/lookup.png', { 
        generateMipmaps: false,
        filter: THREE.LinearFilter 
    })
    lensPass.uniforms.tOverlay.value = loadTexture('img/dust.jpg', {
        generateMipmaps: false,
        filter: THREE.LinearFilter
    }, function(err, tex) {
        lensPass.uniforms.overlayResolution.value.set(tex.image.width, tex.image.height)
    })

    this.shaders.forEach(function(pass, i, self) {
        this.composer.addPass(pass)
        if (i === self.length-1)
            pass.renderToScreen = true
    }, this)  
    if (opt.width && opt.height) 
        this.resize(opt.width, opt.height)
}


function loadTexture(path, opt, cb) {
    if (typeof opt === 'function') {
        cb = opt
        opt = {}
    }

    return THREE.ImageUtils.loadTexture(path, undefined, function(tex) {
        if (opt.filter) tex.minFilter = tex.magFilter = opt.filter
        if (opt.wrap) tex.wrapS = tex.wrapT = opt.wrap
        tex.generateMipmaps = opt.generateMipmaps
        if (typeof cb === 'function') 
            cb(null, tex)
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
var source = require("glslify/simple-adapter.js")("\n#define GLSLIFY 1\n\nuniform vec2 overlayResolution;\nuniform vec2 resolution;\nvarying vec2 vUv;\nvarying vec2 overlayUV;\nvoid main() {\n  vUv = uv;\n  float aspect = overlayResolution.x / overlayResolution.y;\n  float ratio = resolution.x / resolution.y;\n  overlayUV = uv;\n  float tAspect = overlayResolution.x / overlayResolution.y;\n  float pAspect = resolution.x / resolution.y;\n  overlayUV = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}", "\n#define GLSLIFY 1\n\nuniform float tick;\nuniform sampler2D tDiffuse;\nuniform sampler2D tLookup;\nuniform sampler2D tOverlay;\nvarying vec2 vUv;\nvarying vec2 overlayUV;\nhighp float a_x_random(vec2 co) {\n  highp float a = 12.9898;\n  highp float b = 78.233;\n  highp float c = 43758.5453;\n  highp float dt = dot(co.xy, vec2(a, b));\n  highp float sn = mod(dt, 3.14);\n  return fract(sin(sn) * c);\n}\nvec3 b_x_blendOverlay(vec3 base, vec3 blend) {\n  return vec3(base.r < 0.5 ? (2.0 * base.r * blend.r) : (1.0 - 2.0 * (1.0 - base.r) * (1.0 - blend.r)), base.g < 0.5 ? (2.0 * base.g * blend.g) : (1.0 - 2.0 * (1.0 - base.g) * (1.0 - blend.g)), base.b < 0.5 ? (2.0 * base.b * blend.b) : (1.0 - 2.0 * (1.0 - base.b) * (1.0 - blend.b)));\n}\nfloat c_x_luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\nfloat c_x_luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}\n#define LUT_FLIP_Y\n\nvec4 e_x_lookup(in vec4 textureColor, in sampler2D lookupTable) {\n  \n  #ifndef LUT_NO_CLAMP\n  textureColor = clamp(textureColor, 0.0, 1.0);\n  #endif\n  mediump float blueColor = textureColor.b * 63.0;\n  mediump vec2 quad1;\n  quad1.y = floor(floor(blueColor) / 8.0);\n  quad1.x = floor(blueColor) - (quad1.y * 8.0);\n  mediump vec2 quad2;\n  quad2.y = floor(ceil(blueColor) / 8.0);\n  quad2.x = ceil(blueColor) - (quad2.y * 8.0);\n  highp vec2 texPos1;\n  texPos1.x = (quad1.x * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.r);\n  texPos1.y = (quad1.y * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.g);\n  #ifdef LUT_FLIP_Y\n  texPos1.y = 1.0 - texPos1.y;\n  #endif\n  highp vec2 texPos2;\n  texPos2.x = (quad2.x * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.r);\n  texPos2.y = (quad2.y * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.g);\n  #ifdef LUT_FLIP_Y\n  texPos2.y = 1.0 - texPos2.y;\n  #endif\n  lowp vec4 newColor1 = texture2D(lookupTable, texPos1);\n  lowp vec4 newColor2 = texture2D(lookupTable, texPos2);\n  lowp vec4 newColor = mix(newColor1, newColor2, fract(blueColor));\n  return newColor;\n}\nvoid main() {\n  vec3 texColor = texture2D(tDiffuse, vUv).rgb;\n  float luminance = c_x_luma(texColor);\n  float noiseMap = smoothstep(luminance, 0.5, 0.0);\n  vec2 tUv = vUv + tick;\n  vec3 noise = vec3(a_x_random(tUv), a_x_random(tUv * 1.5), a_x_random(tUv * 0.5));\n  vec3 noiseColor = mix(noise, vec3(0.5), noiseMap);\n  vec3 color = mix(texColor, b_x_blendOverlay(texColor, noise), 0.15);\n  vec3 corrected = e_x_lookup(vec4(color, 1.0), tLookup).rgb;\n  color = mix(color, corrected, 0.9);\n  gl_FragColor = vec4(color, 1.0);\n  vec4 scratches = texture2D(tOverlay, overlayUV);\n  vec3 scratchBlend = gl_FragColor.rgb + scratches.rgb;\n  float center = smoothstep(0.0, 0.6, length(vUv - 0.5));\n  float dirtMap = smoothstep(0.1, 0.4, luminance * center);\n  gl_FragColor.rgb = mix(gl_FragColor.rgb, scratchBlend, dirtMap);\n}", [{"name":"overlayResolution","type":"vec2"},{"name":"resolution","type":"vec2"},{"name":"tick","type":"float"},{"name":"tDiffuse","type":"sampler2D"},{"name":"tLookup","type":"sampler2D"},{"name":"tOverlay","type":"sampler2D"}], []);
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

        this.phi = 0
        this.theta = 0 

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

            scope.phi = phi
            scope.theta = theta

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
},{}],"/projects/blackice/node_modules/clamp/index.js":[function(require,module,exports){
module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}

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
},{"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/mixes/index.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/mixes/index.js"}],"/projects/blackice/node_modules/plucker/index.js":[function(require,module,exports){
module.exports = plucker

function plucker(path, object) {
  return arguments.length >= 2
    ? pluck(path)(object)
    : pluck(path)
}

function pluck(path) {
  path = typeof path === 'string'
    ? String(path).trim().split('.')
    : path

  if (path.length < 2) {
    path = path[0]
    return pluckSingle
  } else {
    var l = path.length
    return pluckPath
  }

  function pluckSingle(object) {
    return object[path]
  }

  function pluckPath(object) {
    for (var i = 0; i < l; i++) {
      if (typeof object === 'undefined') break

      object = object[path[i]]
    }

    return object
  }
}

},{}],"/projects/blackice/node_modules/raf.js/raf.js":[function(require,module,exports){
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

},{}],"/projects/blackice/node_modules/smoothstep/index.js":[function(require,module,exports){
module.exports = function smoothstep (min, max, value) {
  var x = Math.max(0, Math.min(1, (value-min)/(max-min)));
  return x*x*(3 - 2*x);
};

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImZvbnRzL0V4bzJTZW1pQm9sZC5qc29uIiwibGliL1JpZ1NjZW5lLmpzIiwibGliL1RleHRQYXNzLmpzIiwibGliL1RleHRSZW5kZXJlci5qcyIsImxpYi9jcmVhdGUtZm9udC5qcyIsImxpYi9mZWF0dXJlLXBvaW50cy5qcyIsImxpYi9yZW5kZXJlci5qcyIsImxpYi9zZXR1cC1lZmZlY3RzLmpzIiwibGliL3NldHVwLXdhdGVyLmpzIiwibGliL3NoYWRlcnMvYmx1ci5qcyIsImxpYi9zaGFkZXJzL2NyZWF0ZS5qcyIsImxpYi9zaGFkZXJzL2xlbnMuanMiLCJsaWIvc2hhZGVycy9wYXNzLmpzIiwibGliL3RocmVlLW9yYml0LWNhbWVyYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9hcy1udW1iZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXMtYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jYW52YXMtYXBwL25vZGVfbW9kdWxlcy9hZGQtZXZlbnQtbGlzdGVuZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvZGVib3VuY2UvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvZGVib3VuY2Uvbm9kZV9tb2R1bGVzL2RhdGUtbm93L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvbm9kZV9tb2R1bGVzL2lzLXdlYmdsLWNvbnRleHQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvd2ViZ2wtY29udGV4dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jbGFtcC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kb21yZWFkeS9yZWFkeS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1iYXNpYy1zaGFkZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9saWIvY3JlYXRlLWF0dHJpYnV0ZXMuanMiLCJub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9saWIvY3JlYXRlLXVuaWZvcm1zLmpzIiwibm9kZV9tb2R1bGVzL2dsLWJhc2ljLXNoYWRlci9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyLWNvcmUvbGliL3JlZmxlY3QuanMiLCJub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9ub2RlX21vZHVsZXMvZHVwL2R1cC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1iYXNpYy1zaGFkZXIvbm9kZV9tb2R1bGVzL2dsLXNoYWRlci1jb3JlL3NoYWRlci1jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2RldGVybWluYW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJvbVF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUm90YXRpb25UcmFuc2xhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2ZydXN0dW0uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbG9va0F0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9vcnRoby5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3BlcnNwZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVaLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zdHIuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc3Bvc2UuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLWJtZm9udC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtc2ltcGxlLXJlbmRlcmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXJlbmRlcmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC1nbHlwaC1pdGVyYXRvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtc2ltcGxlLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC1yZW5kZXJlci9ub2RlX21vZHVsZXMvZm9udHBhdGgtdXRpbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtc2ltcGxlLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC1yZW5kZXJlci9ub2RlX21vZHVsZXMvZm9udHBhdGgtd29yZHdyYXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9jb21tb24uanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1hbGlhc2VkLXZhby9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1hbGlhc2VkLXZhby9saWIvZG8tYmluZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1hbGlhc2VkLXZhby9saWIvdmFvLWVtdWxhdGVkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9idWZmZXIuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9uZGFycmF5LW9wcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9jb21waWxlci5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9saWIvY29tcGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9saWIvdGh1bmsuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9ub2RlX21vZHVsZXMvY3dpc2UtY29tcGlsZXIvbm9kZV9tb2R1bGVzL3VuaXEvdW5pcS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9ub2RlX21vZHVsZXMvYml0LXR3aWRkbGUvdHdpZGRsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9ub2RlX21vZHVsZXMvZHVwL2R1cC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9wb29sLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvd2ViZ2xldy9ub2RlX21vZHVsZXMvd2Vha21hcC93ZWFrbWFwLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvd2ViZ2xldy93ZWJnbGV3LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtd2hpdGUtdGV4dHVyZS9ub2RlX21vZHVsZXMvZ2wtdGV4dHVyZTJkL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9uZGFycmF5LW9wcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC13aGl0ZS10ZXh0dXJlL25vZGVfbW9kdWxlcy9nbC10ZXh0dXJlMmQvbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9wb29sLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC9ub2RlX21vZHVsZXMvd2ViZ2xldy93ZWJnbGV3LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL25kYXJyYXkvbmRhcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC13aGl0ZS10ZXh0dXJlL25vZGVfbW9kdWxlcy9uZGFycmF5L25vZGVfbW9kdWxlcy9pb3RhLWFycmF5L2lvdGEuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvbWl4ZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvbmRhcnJheS9uZGFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL251bWJlci11dGlsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL3ByZW11bHRpcGxpZWQtcmdiYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9wYWNrLXJnYmEtZmxvYXQuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy90ZXhjb29yZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbWF0NC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9hcy1udW1iZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL2dsLW1hdDQvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1tYXQ0L211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL2dsLW1hdDQvb3J0aG8uanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVYLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVouanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvbWl4ZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy9ub2RlX21vZHVsZXMvbWl4ZXMvbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy90ZXhjb29yZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlcy90cmFuc2Zvcm1zLmpzIiwibm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xpZnkvYWRhcHRlci5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsaWZ5L2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvZ2xzbGlmeS9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyLWNvcmUvc2hhZGVyLWNvcmUuanMiLCJub2RlX21vZHVsZXMvZ2xzbGlmeS9zaW1wbGUtYWRhcHRlci5qcyIsIm5vZGVfbW9kdWxlcy9pbWcvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9taXhlcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wbHVja2VyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhZi5qcy9yYWYuanMiLCJub2RlX21vZHVsZXMvc21vb3Roc3RlcC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1lZmZlY3Rjb21wb3Nlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1lZmZlY3Rjb21wb3Nlci9saWIvY2xlYXJtYXNrcGFzcy5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1lZmZlY3Rjb21wb3Nlci9saWIvbWFza3Bhc3MuanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvbGliL3JlbmRlcnBhc3MuanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvbGliL3NoYWRlcnBhc3MuanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvbm9kZV9tb2R1bGVzL3RocmVlLWNvcHlzaGFkZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZ2xzbGlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1nbHNsaWZ5L3R5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLXNoYWRlci1meGFhL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9IQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5aUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIGFwcCA9IHJlcXVpcmUoJ2NhbnZhcy1hcHAnKShyZW5kZXIsIHtcbiAgICBjb250ZXh0OiAnd2ViZ2wnLFxuICAgIGNvbnRleHRBdHRyaWJ1dGVzOiB7IGFudGlhbGlhczogZmFsc2UsIGFscGhhOiBmYWxzZSB9LFxuICAgIHJldGluYTogZmFsc2UsXG4gICAgb25SZXNpemU6IGhhbmRsZVJlc2l6ZVxufSlcblxudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciBSZW5kZXJlciA9IHJlcXVpcmUoJy4vbGliL3JlbmRlcmVyJylcbnZhciBjcmVhdGVGb250ID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLWZvbnQnKVxuXG5cbnZhciByZW5kZXJlclxuXG5mdW5jdGlvbiByZW5kZXIoZ2wsIHdpZHRoLCBoZWlnaHQsIGR0KSB7XG4gICAgaWYgKHJlbmRlcmVyKVxuICAgICAgICByZW5kZXJlci5kcmF3KGR0KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGlmIChyZW5kZXJlcilcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpXG59XG5cbnJlcXVpcmUoJ3JhZi5qcycpXG5yZXF1aXJlKCdkb21yZWFkeScpKGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgYXBwLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAuY2FudmFzKVxuXG4gICAgdmFyIGdsID0gYXBwLmNvbnRleHRcbiAgICBjcmVhdGVGb250KGdsLCBmdW5jdGlvbihlcnIsIGZvbnQpIHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuXG4gICAgICAgIHJlbmRlcmVyID0gUmVuZGVyZXIoe1xuICAgICAgICAgICAgZ2w6IGdsLCBcbiAgICAgICAgICAgIHdpZHRoOiBhcHAud2lkdGgsIFxuICAgICAgICAgICAgaGVpZ2h0OiBhcHAuaGVpZ2h0LFxuICAgICAgICAgICAgZm9udDogZm9udFxuICAgICAgICB9KSBcbiAgICAgICAgYXBwLnN0YXJ0KClcbiAgICB9KVxufSlcblxuXG5cblxuXG5mdW5jdGlvbiBzZXR1cFNtb290aFRleChnbCwgdCkge1xuICAgIHQubWluRmlsdGVyID0gZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICB0Lm1hZ0ZpbHRlciA9IGdsLkxJTkVBUlxuXG4gICAgdmFyIGV4dCA9IChnbC5nZXRFeHRlbnNpb24oJ0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycpIFxuICAgICAgICAgICAgICAgICAgICB8fCBnbC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpKTtcbiAgICBpZiAoZXh0KSB7XG4gICAgICAgIHZhciBtYXhBbmlzdHJvcGh5ID0gZ2wuZ2V0UGFyYW1ldGVyKGV4dC5NQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJmKGdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgTWF0aC5taW4oMTYsIG1heEFuaXN0cm9waHkpKTtcbiAgICB9XG5cbiAgICB0LmdlbmVyYXRlTWlwbWFwKClcbn1cblxuZnVuY3Rpb24gc2V0dXBOZWFyZXN0VGV4KGdsLCB0KSB7XG4gICAgdC5taW5GaWx0ZXIgPSB0Lm1hZ0ZpbHRlciA9IGdsLk5FQVJFU1Rcbn1cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIm1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzPXtcInBhZ2VzXCI6W1wiRXhvMlNlbWlCb2xkLnBuZ1wiXSxcImNoYXJzXCI6W3tcImlkXCI6MzIsXCJ4XCI6MCxcInlcIjowLFwid2lkdGhcIjowLFwiaGVpZ2h0XCI6MCxcInhvZmZzZXRcIjowLFwieW9mZnNldFwiOjMzLFwieGFkdmFuY2VcIjo3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0MSxcInhcIjowLFwieVwiOjAsXCJ3aWR0aFwiOjIwLFwiaGVpZ2h0XCI6NDEsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MyxcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQwLFwieFwiOjIwLFwieVwiOjAsXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6NDEsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MyxcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyNCxcInhcIjozOSxcInlcIjowLFwid2lkdGhcIjoxMyxcImhlaWdodFwiOjQwLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjMsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyNSxcInhcIjo1MixcInlcIjowLFwid2lkdGhcIjoxOCxcImhlaWdodFwiOjQwLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMjMsXCJ4XCI6NzAsXCJ5XCI6MCxcIndpZHRoXCI6MTgsXCJoZWlnaHRcIjo0MCxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjoxMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MzYsXCJ4XCI6ODgsXCJ5XCI6MCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjozLFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTMsXCJ4XCI6MTEzLFwieVwiOjAsXCJ3aWR0aFwiOjE3LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NCxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkxLFwieFwiOjEzMCxcInlcIjowLFwid2lkdGhcIjoxNyxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MSxcInhcIjoxNDcsXCJ5XCI6MCxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA2LFwieFwiOjE3NSxcInlcIjowLFwid2lkdGhcIjoxNixcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkyLFwieFwiOjE5MSxcInlcIjowLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjM0LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0NyxcInhcIjoyMTcsXCJ5XCI6MCxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTAyLFwieFwiOjI0MyxcInlcIjowLFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjMzLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjUsXCJ4YWR2YW5jZVwiOjEzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozOCxcInhcIjoyNjYsXCJ5XCI6MCxcIndpZHRoXCI6MzIsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyNSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MzUsXCJ4XCI6Mjk4LFwieVwiOjAsXCJ3aWR0aFwiOjMwLFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjM3LFwieFwiOjMyOCxcInlcIjowLFwid2lkdGhcIjozNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2MyxcInhcIjozNjQsXCJ5XCI6MCxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MzMsXCJ4XCI6Mzg4LFwieVwiOjAsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6OSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDgsXCJ4XCI6NDAyLFwieVwiOjAsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU3LFwieFwiOjQyOCxcInlcIjowLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1NixcInhcIjo0NTMsXCJ5XCI6MCxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTUsXCJ4XCI6NDc5LFwieVwiOjAsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU0LFwieFwiOjAsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjUzLFwieFwiOjI2LFwieVwiOjQxLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1MixcInhcIjo1MCxcInlcIjo0MSxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTEsXCJ4XCI6NzcsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjUwLFwieFwiOjEwMixcInlcIjo0MSxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDksXCJ4XCI6MTI3LFwieVwiOjQxLFwid2lkdGhcIjoxOSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjEzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMjEsXCJ4XCI6MTQ2LFwieVwiOjQxLFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTEzLFwieFwiOjE3MyxcInlcIjo0MSxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExMixcInhcIjoxOTgsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDgsXCJ4XCI6MjIzLFwieVwiOjQxLFwid2lkdGhcIjoxNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjEwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDcsXCJ4XCI6MjQwLFwieVwiOjQxLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDUsXCJ4XCI6MjY0LFwieVwiOjQxLFwid2lkdGhcIjoxNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwNCxcInhcIjoyNzgsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwMyxcInhcIjozMDIsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDAsXCJ4XCI6MzI5LFwieVwiOjQxLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo5OCxcInhcIjozNTQsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkwLFwieFwiOjM3OSxcInlcIjo0MSxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODksXCJ4XCI6NDA0LFwieVwiOjQxLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4OCxcInhcIjo0MzIsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjg3LFwieFwiOjQ2MSxcInlcIjo0MSxcIndpZHRoXCI6MzksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjozMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODYsXCJ4XCI6MCxcInlcIjo3MyxcIndpZHRoXCI6MjksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODUsXCJ4XCI6MjksXCJ5XCI6NzMsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjg0LFwieFwiOjU2LFwieVwiOjczLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MyxcInhcIjo4NCxcInlcIjo3MyxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODIsXCJ4XCI6MTA5LFwieVwiOjczLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MCxcInhcIjoxMzUsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjc5LFwieFwiOjE2MSxcInlcIjo3MyxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzgsXCJ4XCI6MTg5LFwieVwiOjczLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3NyxcInhcIjoyMTcsXCJ5XCI6NzMsXCJ3aWR0aFwiOjM0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjc2LFwieFwiOjI1MSxcInlcIjo3MyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzUsXCJ4XCI6Mjc1LFwieVwiOjczLFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3NCxcInhcIjozMDIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjczLFwieFwiOjMyMCxcInlcIjo3MyxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3MixcInhcIjozMzQsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjcxLFwieFwiOjM2MSxcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzAsXCJ4XCI6Mzg4LFwieVwiOjczLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2OSxcInhcIjo0MTIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjY4LFwieFwiOjQzNixcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjcsXCJ4XCI6NDYzLFwieVwiOjczLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NixcInhcIjowLFwieVwiOjEwNSxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjUsXCJ4XCI6MjYsXCJ5XCI6MTA1LFwid2lkdGhcIjozMCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NCxcInhcIjo1NixcInlcIjoxMDUsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzEsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6OSxcInhhZHZhbmNlXCI6MjQsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExNixcInhcIjo4NSxcInlcIjoxMDUsXCJ3aWR0aFwiOjIyLFwiaGVpZ2h0XCI6MzAsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6OCxcInhhZHZhbmNlXCI6MTMsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU5LFwieFwiOjEwNyxcInlcIjoxMDUsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MjksXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTQsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyMixcInhcIjoxMjEsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTIwLFwieFwiOjE0NSxcInlcIjoxMDUsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTksXCJ4XCI6MTcxLFwieVwiOjEwNSxcIndpZHRoXCI6MzYsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExOCxcInhcIjoyMDcsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTE3LFwieFwiOjIzNCxcInlcIjoxMDUsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTUsXCJ4XCI6MjU4LFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExNCxcInhcIjoyODIsXCJ5XCI6MTA1LFwid2lkdGhcIjoyMCxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTExLFwieFwiOjMwMixcInlcIjoxMDUsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTAsXCJ4XCI6MzI3LFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwOSxcInhcIjozNTEsXCJ5XCI6MTA1LFwid2lkdGhcIjozMyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoyOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTAxLFwieFwiOjM4NCxcInlcIjoxMDUsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo5OSxcInhcIjo0MDksXCJ5XCI6MTA1LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTcsXCJ4XCI6NDMyLFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQzLFwieFwiOjQ1NixcInlcIjoxMDUsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTEsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2MixcInhcIjo0ODAsXCJ5XCI6MTA1LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjI0LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjAsXCJ4XCI6MCxcInlcIjoxMzcsXCJ3aWR0aFwiOjIzLFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1OCxcInhcIjoyMyxcInlcIjoxMzcsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTQsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQyLFwieFwiOjM3LFwieVwiOjEzNyxcIndpZHRoXCI6MjEsXCJoZWlnaHRcIjoyMSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjEsXCJ4XCI6NTgsXCJ5XCI6MTM3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjIwLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEzLFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTQsXCJ4XCI6ODIsXCJ5XCI6MTM3LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjE5LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjgsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0NCxcInhcIjoxMDUsXCJ5XCI6MTM3LFwid2lkdGhcIjoxNCxcImhlaWdodFwiOjE5LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjI0LFwieGFkdmFuY2VcIjo4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozOSxcInhcIjoxMTksXCJ5XCI6MTM3LFwid2lkdGhcIjoxMyxcImhlaWdodFwiOjE3LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjk2LFwieFwiOjEzMixcInlcIjoxMzcsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjM0LFwieFwiOjE1MCxcInlcIjoxMzcsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyNixcInhcIjoxNjgsXCJ5XCI6MTM3LFwid2lkdGhcIjoyMixcImhlaWdodFwiOjE0LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjE3LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDYsXCJ4XCI6MTkwLFwieVwiOjEzNyxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjoxNCxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoyNCxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTUsXCJ4XCI6MjA0LFwieVwiOjEzNyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoxMyxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoyOCxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQ1LFwieFwiOjIyOCxcInlcIjoxMzcsXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6MTMsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTgsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH1dLFwia2VybmluZ3NcIjpbXSxcImluZm9cIjp7XCJmYWNlXCI6XCJFeG8gMiBTZW1pIEJvbGRcIixcInNpemVcIjozMixcImJvbGRcIjowLFwiaXRhbGljXCI6MCxcImNoYXJzZXRcIjpcIlwiLFwidW5pY29kZVwiOjAsXCJzdHJldGNoSFwiOjEwMCxcInNtb290aFwiOjEsXCJhYVwiOjEsXCJwYWRkaW5nXCI6WzQsNCw0LDRdLFwic3BhY2luZ1wiOlstOCwtOF19LFwiY29tbW9uXCI6e1wibGluZUhlaWdodFwiOjQwLFwiYmFzZVwiOjMzLFwic2NhbGVXXCI6NTEyLFwic2NhbGVIXCI6NTEyLFwicGFnZXNcIjoxLFwicGFja2VkXCI6MH19IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBtaXhlcyA9IHJlcXVpcmUoJ21peGVzJylcbnZhciBCYXNlID0gVEhSRUUuU2NlbmVcblxudmFyIFlPRkYgPSAyLjVcblxuZnVuY3Rpb24gUmlnU2NlbmUob3B0KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJpZ1NjZW5lKSlcbiAgICAgICAgcmV0dXJuIG5ldyBSaWdTY2VuZShvcHQpXG4gICAgQmFzZS5jYWxsKHRoaXMpXG4gICAgdGhpcy5mb2cgPSBuZXcgVEhSRUUuRm9nRXhwMiggMHgwYjA1MTYsIDAuMDAwMTUgKTtcblxuXG4gICAgLy8gdmFyIGJveCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgIC8vICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMjAsIDIwLCAxMCksXG4gICAgLy8gICAgIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGFhYWFhYSwgd2lyZWZyYW1lOiBmYWxzZSB9KVxuICAgIC8vIClcblxuICAgIC8vIHRoaXMuYWRkKGJveClcblxuXG4gICAgdGhpcy50aW1lID0gMFxuICAgIHRoaXMuY3ViZU1hcCA9IG51bGxcbiAgICB0aGlzLnVwZGF0ZU1hdGVyaWFsKClcblxuICAgIHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuT0JKTVRMTG9hZGVyKClcbiAgICBsb2FkZXIubG9hZCgnbW9kZWwvUHJpcmF6bG9tbmF5YS5vYmonLCAnbW9kZWwvUHJpcmF6bG9tbmF5YS5tdGwnLCBmdW5jdGlvbihvYmplY3QsIG1hdGVyaWFscykge1xuICAgICAgICB2YXIgcyA9IDAuM1xuICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QsIG1hdGVyaWFscylcbiAgICAgICAgb2JqZWN0LnNjYWxlLnNldChzLHMscylcbiAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgLT0gWU9GRlxuICAgICAgICB0aGlzLm1lc2ggPSBvYmplY3RcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5tZXNoLnRyYXZlcnNlKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpIHtcbiAgICAgICAgICAgICAgICBvYmouY2FzdFNoYWRvdyA9IHRydWVcbiAgICAgICAgICAgICAgICBvYmoucmVjZWl2ZVNoYWRvdyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFkZChvYmplY3QpXG4gICAgfS5iaW5kKHRoaXMpKVxuICAgIFxuXG4gICAgLy8gdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlRvcnVzS25vdEdlb21ldHJ5KCAxMCwgMywgMTAwLCAxNiApO1xuICAgIC8vIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHhmZmZmMDAgfSApO1xuICAgIC8vIHZhciB0b3J1c0tub3QgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG4gICAgLy8gdGhpcy5hZGQoIHRvcnVzS25vdCApO1xuICAgIC8vIHRvcnVzS25vdC5jYXN0U2hhZG93ID0gdHJ1ZVxuICAgIC8vIHRvcnVzS25vdC5yZWNlaXZlU2hhZG93ID0gdHJ1ZVxuXG4gICAgdGhpcy5saWdodHMgPSBbXG4gICAgICAgIFsgbmV3IFRIUkVFLlZlY3RvcjMoLTEwLCAyMCwgLTIwKSwgMSBdLFxuICAgICAgICBbIG5ldyBUSFJFRS5WZWN0b3IzKDE1LCAxMCwgMTUpLCAwLjUgXVxuICAgIF0ubWFwKGZ1bmN0aW9uKGFyZ3MsIGkpIHtcbiAgICAgICAgdmFyIGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4ZGRmNGZkLCBhcmdzWzFdIClcbiAgICAgICAgbGlnaHQucG9zaXRpb24uY29weShhcmdzWzBdKVxuICAgICAgICBsaWdodC5jYXN0U2hhZG93ID0gdHJ1ZVxuICAgICAgICBsaWdodC5zaGFkb3dNYXBXaWR0aCA9IDEwMjRcbiAgICAgICAgbGlnaHQuc2hhZG93TWFwSGVpZ2h0ID0gMTAyNFxuICAgICAgICBsaWdodC5zaGFkb3dDYW1lcmFOZWFyID0gMVxuICAgICAgICBsaWdodC5zaGFkb3dDYW1lcmFGYXIgPSAxMDBcblxuICAgICAgICBsaWdodC5oZWxwZXIgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodEhlbHBlcihsaWdodCwgNClcbiAgICAgICAgdGhpcy5hZGQobGlnaHQuaGVscGVyKVxuICAgICAgICB0aGlzLmFkZChsaWdodClcbiAgICAgICAgcmV0dXJuIGxpZ2h0XG4gICAgfSx0aGlzKVxufVxuXG5pbmhlcml0cyhSaWdTY2VuZSwgQmFzZSlcblxubWl4ZXMoUmlnU2NlbmUsIHtcblxuICAgIHVwZGF0ZU1hdGVyaWFsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yOiAweGFhYWFhYSxcbiAgICAgICAgICAgIHJlZmxlY3Rpdml0eTogMC40LFxuICAgICAgICAgICAgZW52TWFwOiB0aGlzLmN1YmVNYXBcbiAgICAgICAgfSlcblxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKGR0KSB7XG4gICAgICAgIHRoaXMudGltZSArPSBNYXRoLm1pbihkdCwgMzApLzEwMDBcbiAgICAgICAgdmFyIG0gPSB0aGlzLm1lc2hcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIHZhciBhbmltID0gTWF0aC5zaW4odGhpcy50aW1lKVxuXG4gICAgICAgIHRoaXMubGlnaHRzLmZvckVhY2goZnVuY3Rpb24obGlnaHQpIHsgbGlnaHQuaGVscGVyLnVwZGF0ZSgpIH0pXG4gICAgICAgIC8vIG0ucG9zaXRpb24ueSA9IFlPRkYgKyBhbmltKjAuMlxuICAgICAgICAvLyBtLnBvc2l0aW9uLnggPSBNYXRoLnNpbih0aGlzLnRpbWUqMC4xKSowLjA1XG4gICAgICAgIC8vIG0ucG9zaXRpb24ueiA9IE1hdGguc2luKHRoaXMudGltZSowLjIpKjAuMVxuICAgICAgICAvLyBtLnJvdGF0aW9uLnggPSBhbmltKjAuMDNcbiAgICAgICAgLy8gbS5yb3RhdGlvbi55ID0gTWF0aC5zaW4odGhpcy50aW1lKk1hdGguY29zKHRoaXMudGltZSowLjEpKSowLjAwNVxuICAgIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gUmlnU2NlbmVcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG52YXIgRWZmZWN0Q29tcG9zZXIgPSByZXF1aXJlKCd0aHJlZS1lZmZlY3Rjb21wb3NlcicpKFRIUkVFKVxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxudmFyIEJhc2UgPSBFZmZlY3RDb21wb3Nlci5SZW5kZXJQYXNzXG5cbmZ1bmN0aW9uIFRleHRQYXNzKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgIEJhc2UuYXBwbHkodGhpcywgYXJncylcblxuICAgIHRoaXMudGV4dCA9IG51bGxcbiAgICB0aGlzLmZlYXR1cmVzID0gbnVsbFxufVxuXG5pbmhlcml0cyhUZXh0UGFzcywgQmFzZSlcblxuVGV4dFBhc3MucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xuICAgIEJhc2UucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMsIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEpXG5cbiAgICBpZiAodGhpcy50ZXh0ICYmIHRoaXMuZmVhdHVyZXMpIHtcbiAgICAgICAgdGhpcy50ZXh0LmJlZ2luKClcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uKHNwb3QpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dC5mYWRlID0gc3BvdC5mYWRlXG4gICAgICAgICAgICB0aGlzLnRleHQuZHJhdyh0aGlzLmNhbWVyYSwgc3BvdClcbiAgICAgICAgfSwgdGhpcylcbiAgICAgICAgdGhpcy50ZXh0LmVuZCgpXG5cbiAgICAgICAgcmVuZGVyZXIucmVzZXRHTFN0YXRlKClcbiAgICAgICAgcmVuZGVyZXIucmVzZXRBdHRyaWJ1dGVzKClcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dFBhc3Ncbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsInZhciBjcmVhdGVUZXh0ID0gcmVxdWlyZShcImdsLXNwcml0ZS10ZXh0XCIpO1xudmFyIG1hdDQgPSByZXF1aXJlKFwiZ2wtbWF0NFwiKTtcbnZhciBSZW5kZXJlciA9IHJlcXVpcmUoXCJnbC1zcHJpdGVzXCIpO1xudmFyIGRlZmF1bHRTaGFkZXIgPSByZXF1aXJlKFwiZ2wtYmFzaWMtc2hhZGVyXCIpO1xudmFyIG1vZGVsVHJhbnNmb3JtID0gbWF0NC5jcmVhdGUoKTtcblxudmFyIHNwcml0ZSA9IHtcbiAgICB0ZXh0dXJlOiBudWxsLFxuICAgIHBvc2l0aW9uOiBbMCwgMF0sXG4gICAgc2hhcGU6IFswLCAwXSxcbiAgICBjb2xvcjogWzEsIDAsIDAsIDAuNV0sXG4gICAgdGV4Y29vcmQ6IFswLCAwLCAxLCAxXVxufTtcblxudmFyIG9mZiA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG59O1xuXG52YXIgV0hJVEUgPSBbMSwgMSwgMSwgMV07XG52YXIgQk9SREVSID0gWzAuNSwgMC41LCAwLjUsIDFdO1xudmFyIEJHRklMTCA9IFswLjEsIDAuMSwgMC4xLCAwLjk5XTtcbnZhciBTREZfUEFERElORyA9IC00O1xudmFyIHRtcFZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG52YXIgZ2xzbGlmeSA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xudmFyIHNkZlNoYWRlciA9IHJlcXVpcmUoXCJnbHNsaWZ5L2FkYXB0ZXIuanNcIikoXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbmF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWM0IGNvbG9yO1xcbmF0dHJpYnV0ZSB2ZWMyIHRleGNvb3JkMDtcXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXG51bmlmb3JtIG1hdDQgdmlldztcXG51bmlmb3JtIG1hdDQgbW9kZWw7XFxudmFyeWluZyB2ZWM0IHZfY29sO1xcbnZhcnlpbmcgdmVjMiB2X3RleDA7XFxudmFyeWluZyBmbG9hdCBhbmltT2Zmc2V0O1xcbnZvaWQgbWFpbigpIHtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHBvc2l0aW9uO1xcbiAgdl9jb2wgPSBjb2xvcjtcXG4gIHZfdGV4MCA9IHRleGNvb3JkMDtcXG4gIGdsX1BvaW50U2l6ZSA9IDEuMDtcXG4gIGFuaW1PZmZzZXQgPSBwb3NpdGlvbi54O1xcbn1cIiwgXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbiNpZmRlZiBHTF9FU1xcblxcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcbiNlbmRpZlxcblxcbnZhcnlpbmcgdmVjNCB2X2NvbDtcXG52YXJ5aW5nIHZlYzIgdl90ZXgwO1xcbnZhcnlpbmcgZmxvYXQgYW5pbU9mZnNldDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlMDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlMTtcXG51bmlmb3JtIGZsb2F0IGZhZGU7XFxuY29uc3QgZmxvYXQgc21vb3RoaW5nID0gMS4wIC8gMzIuMDtcXG5jb25zdCB2ZWMyIHNoYWRvd09mZnNldCA9IHZlYzIoLTEuMCAvIDUxMi4wKTtcXG5jb25zdCB2ZWM0IGdsb3dDb2xvciA9IHZlYzQodmVjMygwLjEpLCAxLjApO1xcbmNvbnN0IGZsb2F0IGdsb3dNaW4gPSAwLjQ7XFxuY29uc3QgZmxvYXQgZ2xvd01heCA9IDAuODtcXG52ZWM0IGFfeF9ibHVyKHNhbXBsZXIyRCB0ZXgsIHZlYzIgdXYsIHZlYzIgYmx1ciwgdmVjMiBkaXJlY3Rpb24pIHtcXG4gIHZlYzQgc3VtID0gdmVjNCgwLjApO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDQuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gNC4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMDE2MjE2MjE2MjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSAzLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDMuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjA1NDA1NDA1NDE7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54IC0gMi4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgLSAyLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xMjE2MjE2MjE2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDEuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gMS4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTk0NTk0NTk0NjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LngsIHV2LnkpKSAqIDAuMjI3MDI3MDI3MDtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyAxLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDEuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjE5NDU5NDU5NDY7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgMi4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyAyLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xMjE2MjE2MjE2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCArIDMuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55ICsgMy4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMDU0MDU0MDU0MTtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyA0LjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDQuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjAxNjIxNjIxNjI7XFxuICByZXR1cm4gc3VtO1xcbn1cXG52b2lkIG1haW4oKSB7XFxuICBmbG9hdCBhbmltID0gbW9kKGZhZGUsIGFuaW1PZmZzZXQpO1xcbiAgdmVjNCBzbW9vdGhDb2xvciA9IHZlYzQoMC4wKTtcXG4gIHZlYzQgdGV4Q29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZTAsIHZfdGV4MCk7XFxuICBmbG9hdCBkc3QgPSB0ZXhDb2xvci5hO1xcbiAgZmxvYXQgc21vb3RoQW10ID0gbWl4KDEuNSwgc21vb3RoaW5nLCBhbmltKTtcXG4gIGZsb2F0IGFscGhhID0gc21vb3Roc3RlcCgwLjUgLSBzbW9vdGhBbXQsIDAuNSArIHNtb290aEFtdCwgZHN0KTtcXG4gIHZlYzQgYmFzZSA9IHZfY29sICogdmVjNChhbHBoYSk7XFxuICBmbG9hdCBnbG93RHN0ID0gdGV4dHVyZTJEKHRleHR1cmUwLCB2X3RleDAgKyBzaGFkb3dPZmZzZXQpLmE7XFxuICB2ZWM0IGdsb3cgPSBnbG93Q29sb3IgKiBzbW9vdGhzdGVwKGdsb3dNaW4sIGdsb3dNYXgsIGdsb3dEc3QpO1xcbiAgZmxvYXQgbWFzayA9IDEuMCAtIGFscGhhO1xcbiAgc21vb3RoQ29sb3IgPSBtaXgoYmFzZSwgZ2xvdywgbWFzayk7XFxuICBzbW9vdGhDb2xvci5yZ2IgKj0gc21vb3RoQ29sb3IuYTtcXG4gIGdsX0ZyYWdDb2xvciA9IHNtb290aENvbG9yO1xcbiAgZ2xfRnJhZ0NvbG9yID0gbWl4KHZlYzQodmVjMygxLjApLCAwLjApLCBnbF9GcmFnQ29sb3IsIGFuaW0pO1xcbiAgaWYoZ2xfRnJhZ0NvbG9yLmEgPCAwLjEpXFxuICAgIGRpc2NhcmQ7XFxuICBcXG59XCIsIFt7XCJuYW1lXCI6XCJwcm9qZWN0aW9uXCIsXCJ0eXBlXCI6XCJtYXQ0XCJ9LHtcIm5hbWVcIjpcInZpZXdcIixcInR5cGVcIjpcIm1hdDRcIn0se1wibmFtZVwiOlwibW9kZWxcIixcInR5cGVcIjpcIm1hdDRcIn0se1wibmFtZVwiOlwidGV4dHVyZTBcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifSx7XCJuYW1lXCI6XCJ0ZXh0dXJlMVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9LHtcIm5hbWVcIjpcImZhZGVcIixcInR5cGVcIjpcImZsb2F0XCJ9XSwgW3tcIm5hbWVcIjpcInBvc2l0aW9uXCIsXCJ0eXBlXCI6XCJ2ZWM0XCJ9LHtcIm5hbWVcIjpcImNvbG9yXCIsXCJ0eXBlXCI6XCJ2ZWM0XCJ9LHtcIm5hbWVcIjpcInRleGNvb3JkMFwiLFwidHlwZVwiOlwidmVjMlwifV0pO1xuXG5mdW5jdGlvbiBUZXh0UmVuZGVyZXIoZ2wsIG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUZXh0UmVuZGVyZXIpKVxuICAgICAgICByZXR1cm4gbmV3IFRleHRSZW5kZXJlcihnbCwgb3B0KTtcblxuICAgIG9wdCA9IG9wdCB8fCB7fTtcbiAgICB0aGlzLmdsID0gZ2w7XG5cbiAgICB0aGlzLnNwcml0ZXMgPSBSZW5kZXJlcihnbCwge1xuICAgICAgICBjYXBhY2l0eTogMTBcbiAgICB9KTtcblxuICAgIHRoaXMuc2hhZGVyID0gc2RmU2hhZGVyKGdsKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZVRleHQoZ2wsIHtcbiAgICAgICAgZm9udDogb3B0LmZvbnQsXG4gICAgICAgIHRleHQ6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtaXRcIixcbiAgICAgICAgdGV4dHVyZXM6IG9wdC50ZXh0dXJlc1xuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9qZWN0aW9uID0gbWF0NC5jcmVhdGUoKTtcbiAgICB0aGlzLnNjYWxlID0gbWF0NC5jcmVhdGUoKTtcbiAgICB0aGlzLmZhZGUgPSAwO1xuICAgIHZhciBzID0gMC4wNTtcbiAgICBtYXQ0LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUsIFtzLCAtcywgc10pO1xufVxuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmJlZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuICAgIGdsLmJsZW5kRnVuYyhnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTtcbiAgICBnbC5mcm9udEZhY2UoZ2wuQ0NXKTtcbiAgICBnbC5kaXNhYmxlKGdsLkNVTExfRkFDRSk7XG4gICAgZ2wuY3VsbEZhY2UoZ2wuRlJPTlQpO1xuICAgIGdsLmNvbG9yTWFzayh0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICBnbC5kaXNhYmxlKGdsLlNURU5DSUxfVEVTVCk7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG4gICAgZ2wuZGVwdGhNYXNrKHRydWUpO1xuICAgIHRoaXMuc2hhZGVyLmJpbmQoKTtcbiAgICB2YXIgdGV4ID0gdGhpcy5lbGVtZW50LnRleHR1cmVzWzBdO1xuICAgIHRleC5iaW5kKCk7XG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XG4gICAgZ2wuY3VsbEZhY2UoZ2wuQkFDSyk7XG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjYW1lcmEsIGZlYXR1cmUpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgIHZhciBvYmplY3QzZCA9IGZlYXR1cmUub2JqZWN0O1xuICAgIHZhciB0ZXh0ID0gZmVhdHVyZS50ZXh0O1xuXG4gICAgaWYgKCFvYmplY3QzZC52aXNpYmxlKVxuICAgICAgICByZXR1cm47XG5cbiAgICB0aGlzLmVsZW1lbnQudGV4dHVyZXNbMF0uYmluZCgwKTtcbiAgICB0aGlzLnNoYWRlci51bmlmb3Jtcy5mYWRlID0gdGhpcy5mYWRlO1xuICAgIG1hdDQubXVsdGlwbHkobW9kZWxUcmFuc2Zvcm0sIG9iamVjdDNkLm1hdHJpeC5lbGVtZW50cywgdGhpcy5zY2FsZSk7XG4gICAgdGhpcy5zcHJpdGVzLnByb2plY3Rpb24gPSBjYW1lcmEucHJvamVjdGlvbk1hdHJpeC5lbGVtZW50cztcbiAgICB0aGlzLnNwcml0ZXMudmlldyA9IGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UuZWxlbWVudHM7XG4gICAgdGhpcy5zcHJpdGVzLm1vZGVsID0gbW9kZWxUcmFuc2Zvcm07XG4gICAgdGhpcy5lbGVtZW50LnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuZWxlbWVudC5jbGVhckxheW91dCgpO1xuICAgIHZhciBiID0gdGhpcy5lbGVtZW50LmdldEJvdW5kcyh1bmRlZmluZWQsIG9mZik7XG4gICAgdmFyIHBhZCA9IFs4LCA0XTtcbiAgICB2YXIgYm9yZGVyID0gMTtcbiAgICBtYXQ0LnRyYW5zbGF0ZShtb2RlbFRyYW5zZm9ybSwgbW9kZWxUcmFuc2Zvcm0sIFswLCAwLCAwLjFdKTtcbiAgICB0aGlzLnNoYWRlci5iaW5kKCk7XG4gICAgdGhpcy5zaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbiA9IGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4LmVsZW1lbnRzO1xuICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLnZpZXcgPSBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlLmVsZW1lbnRzO1xuICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLm1vZGVsID0gbW9kZWxUcmFuc2Zvcm07XG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgV0hJVEVbM10gPSBmZWF0dXJlLm9wYWNpdHk7XG4gICAgdGhpcy5lbGVtZW50LmJhdGNoLmNvbG9yID0gV0hJVEU7XG4gICAgdGhpcy5lbGVtZW50LmRyYXcodGhpcy5zaGFkZXIsIFNERl9QQURESU5HLCBTREZfUEFERElORyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRSZW5kZXJlcjsiLCJ2YXIgRm9udCA9IHJlcXVpcmUoJy4uL2ZvbnRzL0V4bzJTZW1pQm9sZC5qc29uJylcbnZhciBmb250SW1hZ2UgPSAnZm9udHMvRXhvMlNlbWlCb2xkLnBuZydcbnZhciBpbWcgPSByZXF1aXJlKCdpbWcnKVxudmFyIGNyZWF0ZVRleHR1cmUgPSByZXF1aXJlKCdnbC10ZXh0dXJlMmQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGdsLCBjYikge1xuICAgIGltZyhmb250SW1hZ2UsIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNiKGVycilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgRm9udC50ZXh0dXJlcyA9IFtyZXNdLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGNyZWF0ZVRleHR1cmUoZ2wsIGkpXG5cbiAgICAgICAgICAgIHQubWluRmlsdGVyID0gZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICAgICAgICAgIHQubWFnRmlsdGVyID0gZ2wuTElORUFSXG5cbiAgICAgICAgICAgIHZhciBleHQgPSAoZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWMnKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBnbC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpKTtcbiAgICAgICAgICAgIGlmIChleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4QW5pc3Ryb3BoeSA9IGdsLmdldFBhcmFtZXRlcihleHQuTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJmKGdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgTWF0aC5taW4oMTYsIG1heEFuaXN0cm9waHkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5nZW5lcmF0ZU1pcG1hcCgpXG4gICAgICAgICAgICByZXR1cm4gdFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgY2IobnVsbCwgRm9udClcbiAgICB9KVxufSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG52YXIgbnVtYmVyID0gcmVxdWlyZSgnYXMtbnVtYmVyJykgICAgXG5cbnZhciBsaXBzdW0gPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgdmVsIGVsZWlmZW5kIG1hc3NhLCBsYW9yZWV0IGVmZmljaXR1ciBkdWkuIFNlZCBldWlzbW9kIHZlbGl0IGlkIGxlbyBldWlzbW9kIHJ1dHJ1bS4gQ3JhcyBmcmluZ2lsbGEgdmVoaWN1bGEgZG9sb3IgdmVsIGNvbmd1ZS4gQ3JhcyBjb25ndWUgc2VkIG51bGxhIG5lYyBmYXVjaWJ1cy4gU2VkIGxhY2luaWEgdGVsbHVzIG5vbiBxdWFtIHRlbXB1cyBpYWN1bGlzLiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBtaSB2ZWwgZXJhdCBzY2VsZXJpc3F1ZSBtb2xsaXMuIFBoYXNlbGx1cyBwdWx2aW5hciBtYWxlc3VhZGEgcmlzdXMuIE5hbSBuZWMgbGFjdXMgbHVjdHVzLCB1bHRyaWNlcyBsYWN1cyBub24sIG9ybmFyZSBwdXJ1cy4gQWxpcXVhbSBwdXJ1cyBlbGl0LCBtYXR0aXMgYSBlc3QgcXVpcywgbW9sbGlzIGludGVyZHVtIG1hdXJpcy4gRG9uZWMgZXggbGVjdHVzLCB2ZWhpY3VsYSBuZWMgb3JjaSBsb2JvcnRpcywgc2VtcGVyIGFsaXF1YW0gbmlzaS4gTWF1cmlzIHRpbmNpZHVudCBsb3JlbSBldCBjb21tb2RvIGZyaW5naWxsYS4nXG5saXBzdW0gPSBsaXBzdW0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBzLnN1YnN0cmluZygwLCBNYXRoLm1pbigzMCwgcy5sZW5ndGgpKVxufSkuZmlsdGVyKGZ1bmN0aW9uKHMpIHtcbiAgICByZXR1cm4gcy50cmltKCkubGVuZ3RoPjFcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGFyZW50LCBuKSB7XG4gICAgbiA9IG51bWJlcihuLCAxMClcbiAgICB2YXIgcG9pbnRzID0gW11cbiAgICBmb3IgKHZhciBpPTA7IGk8bjsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAyLjAgKiBNYXRoLlBJXG4gICAgICAgIHZhciB6ID0gKE1hdGgucmFuZG9tKCkgKiAyLjApIC0gMS4wXG4gICAgICAgIHZhciBzY2FsZSA9IDE1XG4gICAgICAgIHZhciB6U2NhbGUgPSBNYXRoLnNxcnQoMS4wLXoqeikgKiBzY2FsZVxuICAgICAgICAvLyB2YXIgaCA9IDIsIGwgPSAxLjVcbiAgICAgICAgLy8gdmFyIHpTY2FsZSA9IGxlcnAobCwgaCwgTWF0aC5yYW5kb20oKSlcblxuICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICAgIE1hdGguY29zKHIpKnpTY2FsZSxcbiAgICAgICAgICAgIE1hdGguc2luKHIpKnpTY2FsZSArIHNjYWxlLFxuICAgICAgICAgICAgeiAqIHNjYWxlXG4gICAgICAgICkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBvaW50cy5tYXAoZnVuY3Rpb24odiwgaSkge1xuICAgICAgICB2YXIgZGlyID0gdi5jbG9uZSgpLnN1YihuZXcgVEhSRUUuVmVjdG9yMygwLHYueSwwKSkubm9ybWFsaXplKClcbiAgICAgICAgdmFyIG9iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpXG4gICAgICAgIC8vIHZhciBvYmplY3QgPSBuZXcgVEhSRUUuTWVzaChzcGhlcmUsIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6MHhmZjAwMDB9KSlcbiAgICAgICAgcGFyZW50LmFkZChvYmplY3QpXG4gICAgICAgIG9iamVjdC52aXNpYmxlID0gZmFsc2VcblxuICAgICAgICBvYmplY3QucG9zaXRpb24uY29weSh2KVxuXG4gICAgICAgIG9iamVjdC5yb3RhdGlvbi54ID0gMFxuXG4gICAgICAgIHZhciBkeCA9IHYueCxcbiAgICAgICAgICAgIGR6ID0gdi56LFxuICAgICAgICAgICAgdGhldGEgPSAtTWF0aC5hdGFuMihkeiwgZHgpIFxuICAgICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRoZXRhXG5cbiAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyLFxuICAgICAgICAgICAgb3JpZ2luOiB2LFxuICAgICAgICAgICAgZmFkZTogMC4wLFxuICAgICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEuMCxcbiAgICAgICAgICAgIF9zaG93aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHRoZXRhOiB0aGV0YSArIE1hdGguUEkvMixcbiAgICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgICAgdGV4dDogbGlwc3VtWyBpICUgbGlwc3VtLmxlbmd0aCBdXG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmV0LCBcInNob3dpbmdcIiwge1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd2luZyA9IHNcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdC52aXNpYmxlID0gc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3dpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfSlcbn1cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG5cbnZhciBSaWdTY2VuZSA9IHJlcXVpcmUoJy4vUmlnU2NlbmUnKVxudmFyIE9yYml0Q29udHJvbGxlciA9IHJlcXVpcmUoJy4vdGhyZWUtb3JiaXQtY2FtZXJhJykoVEhSRUUpXG52YXIgVGV4dFJlbmRlcmVyID0gcmVxdWlyZSgnLi9UZXh0UmVuZGVyZXInKVxudmFyIEVmZmVjdHMgPSByZXF1aXJlKCcuL3NldHVwLWVmZmVjdHMnKVxuXG52YXIgVHdlZW5NYXggPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5Ud2Vlbk1heCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVHdlZW5NYXggOiBudWxsKVxudmFyIGNyZWF0ZUZlYXR1cmVzID0gcmVxdWlyZSgnLi9mZWF0dXJlLXBvaW50cycpXG5cbnZhciBjbGFtcCA9IHJlcXVpcmUoJ2NsYW1wJylcbnZhciBwbHVjayA9IHJlcXVpcmUoJ3BsdWNrZXInKVxudmFyIG51bWJlciA9IHJlcXVpcmUoJ2FzLW51bWJlcicpXG52YXIgc21vb3Roc3RlcCA9IHJlcXVpcmUoJ3Ntb290aHN0ZXAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdCkge1xuICAgIG9wdCA9IG9wdHx8e31cblxuICAgIHZhciBGb250ID0gb3B0LmZvbnRcblxuICAgIGlmICghRm9udCB8fCAhRm9udC50ZXh0dXJlcylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgZm9udCB3aXRoIHRleHR1cmVzJylcblxuICAgIHZhciByZW5kZXJlcixcbiAgICAgICAgc2NlbmUsXG4gICAgICAgIGNhbWVyYSxcbiAgICAgICAgY29udHJvbGxlcixcbiAgICAgICAgZmVhdHVyZXMsXG4gICAgICAgIHRleHRSZW5kZXJlcixcbiAgICAgICAgd2F0ZXIsXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIHRpbWUgPSAwXG5cbiAgICBpZiAoIW9wdC5nbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgR0wgY29udGV4dCcpXG5cbiAgICBzZXR1cChvcHQuZ2wsIG9wdC53aWR0aHx8MCwgb3B0LmhlaWdodHx8MClcblxuICAgIGZ1bmN0aW9uIGRyYXcoZHQpIHtcbiAgICAgICAgdGltZSArPSAgTWF0aC5taW4oZHQsIDMwKSAvIDEwMDBcbiAgICAgICAgcmVuZGVyZXIucmVzZXRBdHRyaWJ1dGVzKClcbiAgICAgICAgcmVuZGVyZXIucmVzZXRHTFN0YXRlKClcblxuICAgICAgICB3YXRlci5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdGltZSAqIDAuMVxuICAgICAgICB3YXRlci5yZW5kZXIoKVxuXG4gICAgICAgIGNvbnRyb2xsZXIudXBkYXRlKClcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLnVwZGF0ZShkdClcbiAgICAgICAgZWZmZWN0cy5yZW5kZXIoZHQpXG5cblxuICAgICAgICBmZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICAgIHZhciBtaW4gPSA5MCAqIE1hdGguUEkvMTgwXG5cbiAgICAgICAgICAgIC8vc2lnbmVkIGRpc3RhbmNlXG4gICAgICAgICAgICB2YXIgeCA9IGYudGhldGEsIFxuICAgICAgICAgICAgICAgIHkgPSBjb250cm9sbGVyLnRoZXRhXG4gICAgICAgICAgICB2YXIgYWJkaXN0ID0gTWF0aC5hYnMoeCAtIHkpXG4gICAgICAgICAgICB2YXIgZGlzdCA9IE1hdGgubWluKCgyICogTWF0aC5QSSkgLSBhYmRpc3QsIGFiZGlzdClcblxuICAgICAgICAgICAgdmFyIGFscGhhID0gMS4wIC0gY2xhbXAoZGlzdCAvIG1pbiwgMCwgMSlcbiAgICAgICAgICAgIGYub3BhY2l0eSA9IHNtb290aHN0ZXAoMC4wLCAwLjI1LCBhbHBoYSlcblxuICAgICAgICAgICAgaWYgKGRpc3QgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWYuc2hvd2luZykgXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbkZlYXR1cmUoZilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGYuc2hvd2luZykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFOSU0gT1VUXCIsIGYudGhldGEsIGNvbnRyb2xsZXIudGhldGEsIGYuc2hvd2luZylcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZU91dEZlYXR1cmUoZilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGV4dFJlbmRlcmVyLnRpbWUgPSB0aW1lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUluRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgIGZlYXR1cmUuc2hvd2luZyA9IHRydWVcbiAgICAgICAgZmVhdHVyZS5mYWRlID0gMFxuICAgICAgICAvLyBUd2Vlbk1heC50byhmZWF0dXJlLm9iamVjdC5zY2FsZSwgMS4wLCB7XG4gICAgICAgIC8vICAgICB5OiAxLjAsXG4gICAgICAgIC8vICAgICBlYXNlOiBcImVhc2VPdXRFeHBvXCJcbiAgICAgICAgLy8gfSlcbiAgICAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKGZlYXR1cmUpXG4gICAgICAgIFR3ZWVuTWF4LnRvKGZlYXR1cmUsIDEsIHtcbiAgICAgICAgICAgIGZhZGU6IDEuMCxcbiAgICAgICAgICAgIGVhc2U6IFwiZWFzZU91dFF1YXJ0XCJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlT3V0RmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgIGlmIChmZWF0dXJlLmFuaW1hdGluZ091dClcbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGZlYXR1cmUuYW5pbWF0aW5nT3V0ID0gdHJ1ZVxuICAgICAgICBUd2Vlbk1heC50byhmZWF0dXJlLCAxLjAsIHtcbiAgICAgICAgICAgIGZhZGU6IDAsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBoaWRlRmVhdHVyZS5iaW5kKG51bGwsIGZlYXR1cmUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUZlYXR1cmUoZmVhdHVyZSkge1xuICAgICAgICBmZWF0dXJlLmFuaW1hdGluZ091dCA9IGZhbHNlXG4gICAgICAgIGZlYXR1cmUuc2hvd2luZyA9IGZhbHNlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXAoZ2wsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IFxuICAgICAgICAgICAgY2FudmFzOiBnbC5jYW52YXMsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgICAgICAgICAgYWxwaGE6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYsIDApXG4gICAgICAgIHJlbmRlcmVyLnNoYWRvd01hcFR5cGUgPSBUSFJFRS5CYXNpY1NoYWRvd01hcFxuICAgICAgICAvLyByZW5kZXJlci5zaGFkb3dNYXBFbmFibGVkID0gdHJ1ZVxuXG4gICAgICAgIG9wdC5mb3YgPSBudW1iZXIob3B0LmZvdiwgNTApXG4gICAgICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShvcHQuZm92LCB3aWR0aC9oZWlnaHQsIDAuNSwgMjAwMDApXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gNTBcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAyMFxuICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKCkpXG5cbiAgICAgICAgY29udHJvbGxlciA9IG5ldyBPcmJpdENvbnRyb2xsZXIoY2FtZXJhKVxuICAgICAgICBjb250cm9sbGVyLnVzZXJQYW4gPSBmYWxzZVxuICAgICAgICBjb250cm9sbGVyLnVzZXJQYW5TcGVlZCA9IDAuMFxuICAgICAgICBjb250cm9sbGVyLnpvb21TcGVlZCA9IDAuMVxuICAgICAgICBjb250cm9sbGVyLnJvdGF0ZVNwZWVkID0gMC4yXG4gICAgICAgIGNvbnRyb2xsZXIubWluRGlzdGFuY2UgPSAzMFxuICAgICAgICBjb250cm9sbGVyLm1heERpc3RhbmNlID0gMjAwLjBcbiAgICAgICAgY29udHJvbGxlci5tYXhQb2xhckFuZ2xlID0gODggKiBNYXRoLlBJLzE4MFxuICAgICAgICBjb250cm9sbGVyLm1pblBvbGFyQW5nbGUgPSA0MCAqIE1hdGguUEkvMTgwXG4gICAgICAgIGNvbnRyb2xsZXIuY2VudGVyLnNldCggMCwgNCwgMCApXG5cbiAgICAgICAgc2NlbmUgPSBSaWdTY2VuZSgpXG5cbiAgICAgICAgdGV4dFJlbmRlcmVyID0gVGV4dFJlbmRlcmVyKGdsLCB7XG4gICAgICAgICAgICBmb250OiBGb250LFxuICAgICAgICAgICAgdGV4dHVyZXM6IEZvbnQudGV4dHVyZXNcbiAgICAgICAgfSlcblxuICAgICAgICB3YXRlciA9IHJlcXVpcmUoJy4vc2V0dXAtd2F0ZXInKShyZW5kZXJlciwgY2FtZXJhLCBzY2VuZSlcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLmN1YmVNYXAgPSB3YXRlci5jdWJlTWFwXG4gICAgICAgIHNjZW5lLnVwZGF0ZU1hdGVyaWFsKClcblxuICAgICAgICBlZmZlY3RzID0gRWZmZWN0cyh7XG4gICAgICAgICAgICByZW5kZXJlcjogcmVuZGVyZXIsXG4gICAgICAgICAgICBzY2VuZTogc2NlbmUsXG4gICAgICAgICAgICBjYW1lcmE6IGNhbWVyYSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH0pXG5cbiAgICAgICAgZmVhdHVyZXMgPSBjcmVhdGVGZWF0dXJlcyhzY2VuZSlcbiAgICAgICAgZWZmZWN0cy5zZXRUZXh0KHRleHRSZW5kZXJlciwgZmVhdHVyZXMpXG5cbiAgICAgICAgdmFyIGRlbGF5ID0gMVxuXG4gICAgICAgIC8vIFR3ZWVuTWF4LnN0YWdnZXJGcm9tVG8oZmVhdHVyZXMsIDEuMCwge1xuICAgICAgICAvLyAgICAgZmFkZTogMFxuICAgICAgICAvLyB9LCB7IFxuICAgICAgICAvLyAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgICAvLyAgICAgZmFkZTogMS4wLFxuICAgICAgICAvLyAgICAgZWFzZTogXCJlYXNlT3V0RXhwb1wiXG4gICAgICAgIC8vIH0sIDAuMDUpXG5cbiAgICAgICAgLy8gdmFyIG9iamVjdHMgPSBmZWF0dXJlcy5tYXAocGx1Y2soJ29iamVjdC5zY2FsZScpKVxuICAgICAgICAvLyBUd2Vlbk1heC5zdGFnZ2VyRnJvbVRvKG9iamVjdHMsIDEuMCwge1xuICAgICAgICAvLyAgICAgeTogMCxcbiAgICAgICAgLy8gfSwge1xuICAgICAgICAvLyAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgICAvLyAgICAgeTogMSxcbiAgICAgICAgLy8gICAgIGVhc2U6IFwiZWFzZU91dEV4cG9cIlxuICAgICAgICAvLyB9LCAwLjA1KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVPdXRGZWF0dXJlcyhmZWF0dXJlcykge1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgICAgICBjYW1lcmEuYXNwZWN0ID0gd2lkdGgvaGVpZ2h0XG4gICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KClcblxuICAgICAgICBlZmZlY3RzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRyYXc6IGRyYXcsXG4gICAgICAgIHJlc2l6ZTogaGFuZGxlUmVzaXplXG4gICAgfVxufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciBFZmZlY3RDb21wb3NlciA9IHJlcXVpcmUoJ3RocmVlLWVmZmVjdGNvbXBvc2VyJykoVEhSRUUpXG52YXIgY3JlYXRlRlhBQSA9IHJlcXVpcmUoJ3RocmVlLXNoYWRlci1meGFhJykoVEhSRUUpXG52YXIgY3JlYXRlQmx1ciA9IHJlcXVpcmUoJy4vc2hhZGVycy9ibHVyJylcbnZhciBjcmVhdGVMZW5zID0gcmVxdWlyZSgnLi9zaGFkZXJzL2xlbnMnKVxudmFyIGNyZWF0ZUVtcHR5ID0gcmVxdWlyZSgnLi9zaGFkZXJzL3Bhc3MnKVxudmFyIFRleHRQYXNzID0gcmVxdWlyZSgnLi9UZXh0UGFzcycpXG5cbm1vZHVsZS5leHBvcnRzID0gRWZmZWN0c1xuXG5mdW5jdGlvbiBFZmZlY3RzKG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFZmZlY3RzKSkgXG4gICAgICAgIHJldHVybiBuZXcgRWZmZWN0cyhvcHQpXG4gICAgb3B0ID0gb3B0fHx7fVxuXG5cbiAgICB2YXIgcGFyYW1ldGVycyA9IHsgXG4gICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIFxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwgXG4gICAgICAgIHN0ZW5jaWxCdWZmZXI6IGZhbHNlIFxuICAgIH1cbiAgICB2YXIgd2lkdGggPSBvcHQud2lkdGhcbiAgICB2YXIgaGVpZ2h0ID0gb3B0LmhlaWdodFxuICAgIHZhciByZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQod2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyk7XG5cbiAgICB0aGlzLmNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKG9wdC5yZW5kZXJlciwgcmVuZGVyVGFyZ2V0KVxuXG4gICAgdGhpcy50ZXh0UGFzcyA9IG5ldyBUZXh0UGFzcyhvcHQuc2NlbmUsIG9wdC5jYW1lcmEpXG4gICAgdGhpcy5jb21wb3Nlci5hZGRQYXNzKHRoaXMudGV4dFBhc3MpXG4gICAgXG4gICAgdGhpcy5zaGFkZXJzID0gW11cbiAgICB0aGlzLm5vaXNlRGVsYXkgPSAzM1xuICAgIHRoaXMubm9pc2VUaW1lID0gMFxuXG4gICAgLy8gdGhpcy5zaGFkZXJzLnB1c2gobmV3IEVmZmVjdENvbXBvc2VyLlNoYWRlclBhc3MoY3JlYXRlRW1wdHkoKSkpXG5cblxuICAgIHZhciBmeGFhU2hhZGVyID0gbmV3IEVmZmVjdENvbXBvc2VyLlNoYWRlclBhc3MoY3JlYXRlRlhBQSgpKVxuICAgIHRoaXMuc2hhZGVycy5wdXNoKGZ4YWFTaGFkZXIpXG5cbiAgICBpZiAob3B0LmJsdXIgIT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBibHVyID0gY3JlYXRlQmx1cigpXG4gICAgICAgIHZhciBpdGVyYXRpb25zID0gMTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSAoaSsxKSoyO1xuXG4gICAgICAgICAgICB2YXIgaG9yaXogPSBuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyggYmx1ciApO1xuICAgICAgICAgICAgaG9yaXoudW5pZm9ybXMucmFkaXVzLnZhbHVlID0gclxuICAgICAgICAgICAgaG9yaXoudW5pZm9ybXMuc3RyZW5ndGgudmFsdWUgPSAxXG4gICAgICAgICAgICBob3Jpei51bmlmb3Jtcy5kaXIudmFsdWUuc2V0KDEsMClcblxuICAgICAgICAgICAgdmFyIHZlcnQgPSBuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyggYmx1ciApO1xuICAgICAgICAgICAgdmVydC51bmlmb3Jtcy5yYWRpdXMudmFsdWUgPSByXG4gICAgICAgICAgICB2ZXJ0LnVuaWZvcm1zLnN0cmVuZ3RoLnZhbHVlID0gMVxuICAgICAgICAgICAgdmVydC51bmlmb3Jtcy5kaXIudmFsdWUuc2V0KDAsMSlcblxuICAgICAgICAgICAgdGhpcy5zaGFkZXJzLnB1c2goaG9yaXosIHZlcnQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGVuc1Bhc3MgPSBuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyhjcmVhdGVMZW5zKCkpXG4gICAgdGhpcy5zaGFkZXJzLnB1c2gobGVuc1Bhc3MpXG5cbiAgICAvL2RlZmF1bHQgdmFsdWVzIHRvIGF2b2lkIGRpdiBieSB6ZXJvXG4gICAgbGVuc1Bhc3MudW5pZm9ybXMub3ZlcmxheVJlc29sdXRpb24udmFsdWUuc2V0KDEsIDEpXG4gICAgbGVuc1Bhc3MudW5pZm9ybXMudExvb2t1cC52YWx1ZSA9IGxvYWRUZXh0dXJlKCdpbWcvbG9va3VwLnBuZycsIHsgXG4gICAgICAgIGdlbmVyYXRlTWlwbWFwczogZmFsc2UsXG4gICAgICAgIGZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyIFxuICAgIH0pXG4gICAgbGVuc1Bhc3MudW5pZm9ybXMudE92ZXJsYXkudmFsdWUgPSBsb2FkVGV4dHVyZSgnaW1nL2R1c3QuanBnJywge1xuICAgICAgICBnZW5lcmF0ZU1pcG1hcHM6IGZhbHNlLFxuICAgICAgICBmaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlclxuICAgIH0sIGZ1bmN0aW9uKGVyciwgdGV4KSB7XG4gICAgICAgIGxlbnNQYXNzLnVuaWZvcm1zLm92ZXJsYXlSZXNvbHV0aW9uLnZhbHVlLnNldCh0ZXguaW1hZ2Uud2lkdGgsIHRleC5pbWFnZS5oZWlnaHQpXG4gICAgfSlcblxuICAgIHRoaXMuc2hhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhc3MsIGksIHNlbGYpIHtcbiAgICAgICAgdGhpcy5jb21wb3Nlci5hZGRQYXNzKHBhc3MpXG4gICAgICAgIGlmIChpID09PSBzZWxmLmxlbmd0aC0xKVxuICAgICAgICAgICAgcGFzcy5yZW5kZXJUb1NjcmVlbiA9IHRydWVcbiAgICB9LCB0aGlzKSAgXG4gICAgaWYgKG9wdC53aWR0aCAmJiBvcHQuaGVpZ2h0KSBcbiAgICAgICAgdGhpcy5yZXNpemUob3B0LndpZHRoLCBvcHQuaGVpZ2h0KVxufVxuXG5cbmZ1bmN0aW9uIGxvYWRUZXh0dXJlKHBhdGgsIG9wdCwgY2IpIHtcbiAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYiA9IG9wdFxuICAgICAgICBvcHQgPSB7fVxuICAgIH1cblxuICAgIHJldHVybiBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKHBhdGgsIHVuZGVmaW5lZCwgZnVuY3Rpb24odGV4KSB7XG4gICAgICAgIGlmIChvcHQuZmlsdGVyKSB0ZXgubWluRmlsdGVyID0gdGV4Lm1hZ0ZpbHRlciA9IG9wdC5maWx0ZXJcbiAgICAgICAgaWYgKG9wdC53cmFwKSB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBvcHQud3JhcFxuICAgICAgICB0ZXguZ2VuZXJhdGVNaXBtYXBzID0gb3B0LmdlbmVyYXRlTWlwbWFwc1xuICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBcbiAgICAgICAgICAgIGNiKG51bGwsIHRleClcbiAgICB9KVxufVxuXG5yZXF1aXJlKCdtaXhlcycpKEVmZmVjdHMsIHtcblxuICAgIHNldFRleHQ6IGZ1bmN0aW9uKHRleHRSZW5kZXJlciwgZmVhdHVyZXMpIHtcbiAgICAgICAgdGhpcy50ZXh0UGFzcy50ZXh0ID0gdGV4dFJlbmRlcmVyXG4gICAgICAgIHRoaXMudGV4dFBhc3MuZmVhdHVyZXMgPSBmZWF0dXJlc1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKGR0KSB7XG4gICAgICAgIHRoaXMubm9pc2VUaW1lICs9IGR0XG4gICAgICAgIGlmICh0aGlzLm5vaXNlVGltZSA+IHRoaXMubm9pc2VEZWxheSkge1xuICAgICAgICAgICAgdGhpcy5ub2lzZVRpbWUgPSAwXG4gICAgICAgICAgICB0aGlzLnNoYWRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3MudW5pZm9ybXMudGljaylcbiAgICAgICAgICAgICAgICAgICAgcGFzcy51bmlmb3Jtcy50aWNrLnZhbHVlICs9IDAuMDA1XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wb3Nlci5yZW5kZXIoKVxuICAgIH0sXG5cbiAgICByZXNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGggKj0gMlxuICAgICAgICBoZWlnaHQgKj0gMlxuICAgICAgICB0aGlzLmNvbXBvc2VyLnNldFNpemUod2lkdGgsIGhlaWdodClcbiAgICAgICAgdGhpcy5zaGFkZXJzLmZvckVhY2goZnVuY3Rpb24ocGFzcykge1xuICAgICAgICAgICAgdmFyIGRwciA9IDFcbiAgICAgICAgICAgIC8vIHZhciBkcHIgPSAod2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpXG4gICAgICAgICAgICBpZiAocGFzcy51bmlmb3Jtcy5yZXNvbHV0aW9uKVxuICAgICAgICAgICAgICAgIHBhc3MudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQod2lkdGgqZHByLCBoZWlnaHQqZHByKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxufSlcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsInZhciBjdWJlU2hhZGVyID0ge1xuXG4gICAgdW5pZm9ybXM6IFRIUkVFLlVuaWZvcm1zVXRpbHMubWVyZ2UoIFtcbiAgICAgICAgeyBcInRDdWJlXCI6IHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXG4gICAgICAgIFwidEZsaXBcIjogeyB0eXBlOiBcImZcIiwgdmFsdWU6IC0gMSB9IH0sXG4gICAgICAgIFRIUkVFLlVuaWZvcm1zTGliWyBcImZvZ1wiIF1cbiAgICBdICksXG5cbiAgICB2ZXJ0ZXhTaGFkZXI6IFtcblxuICAgICAgICBcInZhcnlpbmcgdmVjMyB2V29ybGRQb3NpdGlvbjtcIixcblxuICAgICAgICBUSFJFRS5TaGFkZXJDaHVua1sgXCJsb2dkZXB0aGJ1Zl9wYXJzX3ZlcnRleFwiIF0sXG5cbiAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG5cbiAgICAgICAgXCIgICB2ZWM0IHdvcmxkUG9zaXRpb24gPSBtb2RlbE1hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcbiAgICAgICAgXCIgICB2V29ybGRQb3NpdGlvbiA9IHdvcmxkUG9zaXRpb24ueHl6O1wiLFxuXG4gICAgICAgIFwiICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxuXG4gICAgICAgICAgICBUSFJFRS5TaGFkZXJDaHVua1sgXCJsb2dkZXB0aGJ1Zl92ZXJ0ZXhcIiBdLFxuXG4gICAgICAgIFwifVwiXG5cbiAgICBdLmpvaW4oXCJcXG5cIiksXG5cbiAgICBmcmFnbWVudFNoYWRlcjogW1xuXG4gICAgICAgIFwidW5pZm9ybSBzYW1wbGVyQ3ViZSB0Q3ViZTtcIixcbiAgICAgICAgXCJ1bmlmb3JtIGZsb2F0IHRGbGlwO1wiLFxuXG4gICAgICAgIFwidmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1wiLFxuICAgICAgICBUSFJFRS5TaGFkZXJDaHVua1sgXCJsb2dkZXB0aGJ1Zl9wYXJzX2ZyYWdtZW50XCIgXSxcbiAgICAgICAgVEhSRUUuU2hhZGVyQ2h1bmtbIFwiZm9nX3BhcnNfZnJhZ21lbnRcIiBdLFxuICAgICAgICBcInZvaWQgbWFpbigpIHtcIixcbiAgICAgICAgXCIgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlQ3ViZSggdEN1YmUsIHZlYzMoIHRGbGlwICogdldvcmxkUG9zaXRpb24ueCwgdldvcmxkUG9zaXRpb24ueXogKSApO1wiLFxuICAgICAgICAgICAgVEhSRUUuU2hhZGVyQ2h1bmtbIFwibG9nZGVwdGhidWZfZnJhZ21lbnRcIiBdLFxuICAgICAgICAgICAgVEhSRUUuU2hhZGVyQ2h1bmtbIFwiZm9nX2ZyYWdtZW50XCIgXSxcbiAgICAgICAgXCJ9XCJcblxuICAgIF0uam9pbihcIlxcblwiKVxuXG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlbmRlcmVyLCBjYW1lcmEsIHNjZW5lKSB7XG4gICAgdmFyIGxpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCgweGJiZTlmZiwgMHgwODA4MjAsIDEpXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KC0xLCAxLCAtMSlcbiAgICBzY2VuZS5hZGQobGlnaHQpXG5cbiAgICB2YXIgd2F0ZXJOb3JtYWxzID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJ2ltZy93YXRlcm5vcm1hbHM1LmpwZycpXG4gICAgd2F0ZXJOb3JtYWxzLndyYXBTID0gd2F0ZXJOb3JtYWxzLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmdcblxuICAgIHZhciB3YXRlciA9IG5ldyBUSFJFRS5XYXRlcihyZW5kZXJlciwgY2FtZXJhLCBzY2VuZSwge1xuICAgICAgICB0ZXh0dXJlV2lkdGg6IDUxMixcbiAgICAgICAgdGV4dHVyZUhlaWdodDogNTEyLFxuICAgICAgICB3YXRlck5vcm1hbHM6IHdhdGVyTm9ybWFscyxcbiAgICAgICAgYWxwaGE6IDAuOSxcbiAgICAgICAgc3VuRGlyZWN0aW9uOiBsaWdodC5wb3NpdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpLFxuICAgICAgICBzdW5Db2xvcjogMHhmZmZmZmYsXG4gICAgICAgIHdhdGVyQ29sb3I6IDB4MDIwZDE1LFxuICAgICAgICBkaXN0b3J0aW9uU2NhbGU6IDgwLjAsXG4gICAgfSlcblxuICAgIHZhciBtaXJyb3JNZXNoID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDUwMDAsIDUwMDApLFxuICAgICAgICB3YXRlci5tYXRlcmlhbFxuICAgIClcblxuICAgIG1pcnJvck1lc2guYWRkKHdhdGVyKVxuICAgIG1pcnJvck1lc2gucm90YXRpb24ueCA9IC1NYXRoLlBJICogMC41XG4gICAgc2NlbmUuYWRkKG1pcnJvck1lc2gpXG5cblxuICAgIC8vIGxvYWQgc2t5Ym94XG5cbiAgICB2YXIgY3ViZU1hcCA9IG5ldyBUSFJFRS5DdWJlVGV4dHVyZShbXSlcbiAgICBjdWJlTWFwLmZvcm1hdCA9IFRIUkVFLlJHQkZvcm1hdFxuICAgIGN1YmVNYXAuZmxpcFkgPSBmYWxzZVxuXG4gICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5JbWFnZUxvYWRlcigpXG4gICAgbG9hZGVyLmxvYWQoJ2ltZy9jbG91ZHlfbmlnaHQyLmpwZycsIGZ1bmN0aW9uKGltYWdlKSB7XG5cbiAgICAgICAgdmFyIGdldFNpZGUgPSBmdW5jdGlvbih4LCB5KSB7XG5cbiAgICAgICAgICAgIHZhciBzaXplID0gMTAyNFxuXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemVcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplXG5cbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAteCAqIHNpemUsIC15ICogc2l6ZSlcblxuICAgICAgICAgICAgcmV0dXJuIGNhbnZhc1xuXG4gICAgICAgIH1cblxuICAgICAgICBjdWJlTWFwLmltYWdlc1swXSA9IGdldFNpZGUoMiwgMSkgLy8gcHhcbiAgICAgICAgY3ViZU1hcC5pbWFnZXNbMV0gPSBnZXRTaWRlKDAsIDEpIC8vIG54XG4gICAgICAgIGN1YmVNYXAuaW1hZ2VzWzJdID0gZ2V0U2lkZSgxLCAwKSAvLyBweVxuICAgICAgICBjdWJlTWFwLmltYWdlc1szXSA9IGdldFNpZGUoMSwgMikgLy8gbnlcbiAgICAgICAgY3ViZU1hcC5pbWFnZXNbNF0gPSBnZXRTaWRlKDEsIDEpIC8vIHB6XG4gICAgICAgIGN1YmVNYXAuaW1hZ2VzWzVdID0gZ2V0U2lkZSgzLCAxKSAvLyBuelxuICAgICAgICBjdWJlTWFwLm5lZWRzVXBkYXRlID0gdHJ1ZVxuXG4gICAgfSlcblxuICAgIGN1YmVTaGFkZXIudW5pZm9ybXMudEN1YmUudmFsdWUgPSBjdWJlTWFwXG5cbiAgICB2YXIgc2t5Qm94TWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICBmcmFnbWVudFNoYWRlcjogY3ViZVNoYWRlci5mcmFnbWVudFNoYWRlcixcbiAgICAgICAgdmVydGV4U2hhZGVyOiBjdWJlU2hhZGVyLnZlcnRleFNoYWRlcixcbiAgICAgICAgdW5pZm9ybXM6IGN1YmVTaGFkZXIudW5pZm9ybXMsXG4gICAgICAgIC8vIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgICBzaWRlOiBUSFJFRS5CYWNrU2lkZSxcbiAgICAgICAgZm9nOiB0cnVlLFxuICAgIH0pXG5cbiAgICB2YXIgc2t5Qm94ID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg1MDAwLCA1MDAwLCA1MDAwKSxcbiAgICAgICAgc2t5Qm94TWF0ZXJpYWxcbiAgICApXG4gICAgXG4gICAgd2F0ZXIuY3ViZU1hcCA9IGN1YmVNYXBcblxuICAgIHNjZW5lLmFkZChza3lCb3gpXG4gICAgcmV0dXJuIHdhdGVyXG59IiwidmFyIGdsc2xpZnkgPSByZXF1aXJlKFwiZ2xzbGlmeVwiKTtcbnZhciBzb3VyY2UgPSByZXF1aXJlKFwiZ2xzbGlmeS9zaW1wbGUtYWRhcHRlci5qc1wiKShcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiLCBcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxudW5pZm9ybSBmbG9hdCByYWRpdXM7XFxudW5pZm9ybSB2ZWMyIGRpcjtcXG51bmlmb3JtIGZsb2F0IHN0cmVuZ3RoO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudmVjNCBhX3hfYmx1cihzYW1wbGVyMkQgdGV4LCB2ZWMyIHV2LCB2ZWMyIGJsdXIsIHZlYzIgZGlyZWN0aW9uKSB7XFxuICB2ZWM0IHN1bSA9IHZlYzQoMC4wKTtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSA0LjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDQuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjAxNjIxNjIxNjI7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54IC0gMy4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgLSAzLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4wNTQwNTQwNTQxO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDIuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gMi4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTIxNjIxNjIxNjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSAxLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDEuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjE5NDU5NDU5NDY7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54LCB1di55KSkgKiAwLjIyNzAyNzAyNzA7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgMS4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyAxLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xOTQ1OTQ1OTQ2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCArIDIuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55ICsgMi4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTIxNjIxNjIxNjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyAzLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDMuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjA1NDA1NDA1NDE7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgNC4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyA0LjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4wMTYyMTYyMTYyO1xcbiAgcmV0dXJuIHN1bTtcXG59XFxudm9pZCBtYWluKCkge1xcbiAgdmVjMiBibHVyQW10ID0gdmVjMihyYWRpdXMpIC8gcmVzb2x1dGlvbjtcXG4gIHZlYzQgc3VtID0gYV94X2JsdXIodERpZmZ1c2UsIHZVdiwgYmx1ckFtdCwgZGlyKTtcXG4gIHZlYzIgcCA9IChnbF9GcmFnQ29vcmQueHkgLyByZXNvbHV0aW9uLnh5IC0gMC41KTtcXG4gIHAueCAqPSByZXNvbHV0aW9uLnggLyByZXNvbHV0aW9uLnk7XFxuICBmbG9hdCBsZW4gPSBzbW9vdGhzdGVwKDAuNSwgMS4yLCBsZW5ndGgocCkpO1xcbiAgdmVjMyBvcmlnID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcXG4gIGdsX0ZyYWdDb2xvci5yZ2IgPSBtaXgob3JpZywgc3VtLnJnYiwgbGVuICsgMC4xKTtcXG4gIGdsX0ZyYWdDb2xvci5hID0gMS4wO1xcbn1cIiwgW3tcIm5hbWVcIjpcInJlc29sdXRpb25cIixcInR5cGVcIjpcInZlYzJcIn0se1wibmFtZVwiOlwicmFkaXVzXCIsXCJ0eXBlXCI6XCJmbG9hdFwifSx7XCJuYW1lXCI6XCJkaXJcIixcInR5cGVcIjpcInZlYzJcIn0se1wibmFtZVwiOlwic3RyZW5ndGhcIixcInR5cGVcIjpcImZsb2F0XCJ9LHtcIm5hbWVcIjpcInREaWZmdXNlXCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn1dLCBbXSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2NyZWF0ZVwiKShzb3VyY2UpOyIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG52YXIgdGhyZWVpZnkgPSByZXF1aXJlKCd0aHJlZS1nbHNsaWZ5JykoVEhSRUUpXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpIFxuIFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob3B0KSB7XG4gICAgICAgIHJldHVybiB4dGVuZCh0aHJlZWlmeShzb3VyY2UpLCBvcHQpXG4gICAgfVxufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwidmFyIGdsc2xpZnkgPSByZXF1aXJlKFwiZ2xzbGlmeVwiKTtcbnZhciBzb3VyY2UgPSByZXF1aXJlKFwiZ2xzbGlmeS9zaW1wbGUtYWRhcHRlci5qc1wiKShcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudW5pZm9ybSB2ZWMyIG92ZXJsYXlSZXNvbHV0aW9uO1xcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudmFyeWluZyB2ZWMyIG92ZXJsYXlVVjtcXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG4gIGZsb2F0IGFzcGVjdCA9IG92ZXJsYXlSZXNvbHV0aW9uLnggLyBvdmVybGF5UmVzb2x1dGlvbi55O1xcbiAgZmxvYXQgcmF0aW8gPSByZXNvbHV0aW9uLnggLyByZXNvbHV0aW9uLnk7XFxuICBvdmVybGF5VVYgPSB1djtcXG4gIGZsb2F0IHRBc3BlY3QgPSBvdmVybGF5UmVzb2x1dGlvbi54IC8gb3ZlcmxheVJlc29sdXRpb24ueTtcXG4gIGZsb2F0IHBBc3BlY3QgPSByZXNvbHV0aW9uLnggLyByZXNvbHV0aW9uLnk7XFxuICBvdmVybGF5VVYgPSB1djtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiLCBcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudW5pZm9ybSBmbG9hdCB0aWNrO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRMb29rdXA7XFxudW5pZm9ybSBzYW1wbGVyMkQgdE92ZXJsYXk7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG52YXJ5aW5nIHZlYzIgb3ZlcmxheVVWO1xcbmhpZ2hwIGZsb2F0IGFfeF9yYW5kb20odmVjMiBjbykge1xcbiAgaGlnaHAgZmxvYXQgYSA9IDEyLjk4OTg7XFxuICBoaWdocCBmbG9hdCBiID0gNzguMjMzO1xcbiAgaGlnaHAgZmxvYXQgYyA9IDQzNzU4LjU0NTM7XFxuICBoaWdocCBmbG9hdCBkdCA9IGRvdChjby54eSwgdmVjMihhLCBiKSk7XFxuICBoaWdocCBmbG9hdCBzbiA9IG1vZChkdCwgMy4xNCk7XFxuICByZXR1cm4gZnJhY3Qoc2luKHNuKSAqIGMpO1xcbn1cXG52ZWMzIGJfeF9ibGVuZE92ZXJsYXkodmVjMyBiYXNlLCB2ZWMzIGJsZW5kKSB7XFxuICByZXR1cm4gdmVjMyhiYXNlLnIgPCAwLjUgPyAoMi4wICogYmFzZS5yICogYmxlbmQucikgOiAoMS4wIC0gMi4wICogKDEuMCAtIGJhc2UucikgKiAoMS4wIC0gYmxlbmQucikpLCBiYXNlLmcgPCAwLjUgPyAoMi4wICogYmFzZS5nICogYmxlbmQuZykgOiAoMS4wIC0gMi4wICogKDEuMCAtIGJhc2UuZykgKiAoMS4wIC0gYmxlbmQuZykpLCBiYXNlLmIgPCAwLjUgPyAoMi4wICogYmFzZS5iICogYmxlbmQuYikgOiAoMS4wIC0gMi4wICogKDEuMCAtIGJhc2UuYikgKiAoMS4wIC0gYmxlbmQuYikpKTtcXG59XFxuZmxvYXQgY194X2x1bWEodmVjMyBjb2xvcikge1xcbiAgcmV0dXJuIGRvdChjb2xvciwgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSk7XFxufVxcbmZsb2F0IGNfeF9sdW1hKHZlYzQgY29sb3IpIHtcXG4gIHJldHVybiBkb3QoY29sb3IucmdiLCB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpKTtcXG59XFxuI2RlZmluZSBMVVRfRkxJUF9ZXFxuXFxudmVjNCBlX3hfbG9va3VwKGluIHZlYzQgdGV4dHVyZUNvbG9yLCBpbiBzYW1wbGVyMkQgbG9va3VwVGFibGUpIHtcXG4gIFxcbiAgI2lmbmRlZiBMVVRfTk9fQ0xBTVBcXG4gIHRleHR1cmVDb2xvciA9IGNsYW1wKHRleHR1cmVDb2xvciwgMC4wLCAxLjApO1xcbiAgI2VuZGlmXFxuICBtZWRpdW1wIGZsb2F0IGJsdWVDb2xvciA9IHRleHR1cmVDb2xvci5iICogNjMuMDtcXG4gIG1lZGl1bXAgdmVjMiBxdWFkMTtcXG4gIHF1YWQxLnkgPSBmbG9vcihmbG9vcihibHVlQ29sb3IpIC8gOC4wKTtcXG4gIHF1YWQxLnggPSBmbG9vcihibHVlQ29sb3IpIC0gKHF1YWQxLnkgKiA4LjApO1xcbiAgbWVkaXVtcCB2ZWMyIHF1YWQyO1xcbiAgcXVhZDIueSA9IGZsb29yKGNlaWwoYmx1ZUNvbG9yKSAvIDguMCk7XFxuICBxdWFkMi54ID0gY2VpbChibHVlQ29sb3IpIC0gKHF1YWQyLnkgKiA4LjApO1xcbiAgaGlnaHAgdmVjMiB0ZXhQb3MxO1xcbiAgdGV4UG9zMS54ID0gKHF1YWQxLnggKiAwLjEyNSkgKyAwLjUgLyA1MTIuMCArICgoMC4xMjUgLSAxLjAgLyA1MTIuMCkgKiB0ZXh0dXJlQ29sb3Iucik7XFxuICB0ZXhQb3MxLnkgPSAocXVhZDEueSAqIDAuMTI1KSArIDAuNSAvIDUxMi4wICsgKCgwLjEyNSAtIDEuMCAvIDUxMi4wKSAqIHRleHR1cmVDb2xvci5nKTtcXG4gICNpZmRlZiBMVVRfRkxJUF9ZXFxuICB0ZXhQb3MxLnkgPSAxLjAgLSB0ZXhQb3MxLnk7XFxuICAjZW5kaWZcXG4gIGhpZ2hwIHZlYzIgdGV4UG9zMjtcXG4gIHRleFBvczIueCA9IChxdWFkMi54ICogMC4xMjUpICsgMC41IC8gNTEyLjAgKyAoKDAuMTI1IC0gMS4wIC8gNTEyLjApICogdGV4dHVyZUNvbG9yLnIpO1xcbiAgdGV4UG9zMi55ID0gKHF1YWQyLnkgKiAwLjEyNSkgKyAwLjUgLyA1MTIuMCArICgoMC4xMjUgLSAxLjAgLyA1MTIuMCkgKiB0ZXh0dXJlQ29sb3IuZyk7XFxuICAjaWZkZWYgTFVUX0ZMSVBfWVxcbiAgdGV4UG9zMi55ID0gMS4wIC0gdGV4UG9zMi55O1xcbiAgI2VuZGlmXFxuICBsb3dwIHZlYzQgbmV3Q29sb3IxID0gdGV4dHVyZTJEKGxvb2t1cFRhYmxlLCB0ZXhQb3MxKTtcXG4gIGxvd3AgdmVjNCBuZXdDb2xvcjIgPSB0ZXh0dXJlMkQobG9va3VwVGFibGUsIHRleFBvczIpO1xcbiAgbG93cCB2ZWM0IG5ld0NvbG9yID0gbWl4KG5ld0NvbG9yMSwgbmV3Q29sb3IyLCBmcmFjdChibHVlQ29sb3IpKTtcXG4gIHJldHVybiBuZXdDb2xvcjtcXG59XFxudm9pZCBtYWluKCkge1xcbiAgdmVjMyB0ZXhDb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KS5yZ2I7XFxuICBmbG9hdCBsdW1pbmFuY2UgPSBjX3hfbHVtYSh0ZXhDb2xvcik7XFxuICBmbG9hdCBub2lzZU1hcCA9IHNtb290aHN0ZXAobHVtaW5hbmNlLCAwLjUsIDAuMCk7XFxuICB2ZWMyIHRVdiA9IHZVdiArIHRpY2s7XFxuICB2ZWMzIG5vaXNlID0gdmVjMyhhX3hfcmFuZG9tKHRVdiksIGFfeF9yYW5kb20odFV2ICogMS41KSwgYV94X3JhbmRvbSh0VXYgKiAwLjUpKTtcXG4gIHZlYzMgbm9pc2VDb2xvciA9IG1peChub2lzZSwgdmVjMygwLjUpLCBub2lzZU1hcCk7XFxuICB2ZWMzIGNvbG9yID0gbWl4KHRleENvbG9yLCBiX3hfYmxlbmRPdmVybGF5KHRleENvbG9yLCBub2lzZSksIDAuMTUpO1xcbiAgdmVjMyBjb3JyZWN0ZWQgPSBlX3hfbG9va3VwKHZlYzQoY29sb3IsIDEuMCksIHRMb29rdXApLnJnYjtcXG4gIGNvbG9yID0gbWl4KGNvbG9yLCBjb3JyZWN0ZWQsIDAuOSk7XFxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLCAxLjApO1xcbiAgdmVjNCBzY3JhdGNoZXMgPSB0ZXh0dXJlMkQodE92ZXJsYXksIG92ZXJsYXlVVik7XFxuICB2ZWMzIHNjcmF0Y2hCbGVuZCA9IGdsX0ZyYWdDb2xvci5yZ2IgKyBzY3JhdGNoZXMucmdiO1xcbiAgZmxvYXQgY2VudGVyID0gc21vb3Roc3RlcCgwLjAsIDAuNiwgbGVuZ3RoKHZVdiAtIDAuNSkpO1xcbiAgZmxvYXQgZGlydE1hcCA9IHNtb290aHN0ZXAoMC4xLCAwLjQsIGx1bWluYW5jZSAqIGNlbnRlcik7XFxuICBnbF9GcmFnQ29sb3IucmdiID0gbWl4KGdsX0ZyYWdDb2xvci5yZ2IsIHNjcmF0Y2hCbGVuZCwgZGlydE1hcCk7XFxufVwiLCBbe1wibmFtZVwiOlwib3ZlcmxheVJlc29sdXRpb25cIixcInR5cGVcIjpcInZlYzJcIn0se1wibmFtZVwiOlwicmVzb2x1dGlvblwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJ0aWNrXCIsXCJ0eXBlXCI6XCJmbG9hdFwifSx7XCJuYW1lXCI6XCJ0RGlmZnVzZVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9LHtcIm5hbWVcIjpcInRMb29rdXBcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifSx7XCJuYW1lXCI6XCJ0T3ZlcmxheVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9XSwgW10pO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jcmVhdGVcIikoc291cmNlKTsiLCJ2YXIgZ2xzbGlmeSA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoXCJnbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzXCIpKFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZvaWQgbWFpbigpIHtcXG4gIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXG59XCIsIFt7XCJuYW1lXCI6XCJ0RGlmZnVzZVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9XSwgW10pO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jcmVhdGVcIikoc291cmNlKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG52YXIgVHdlZW5NYXggPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5Ud2Vlbk1heCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVHdlZW5NYXggOiBudWxsKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gICAgaWYgKCFUSFJFRS5NT1VTRSlcbiAgICAgICAgVEhSRUUuTU9VU0UgPSB7IExFRlQ6IDAsIE1JRERMRTogMSwgUklHSFQ6IDIgfTtcblxuICAgIC8qKlxuICAgICAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gICAgICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuICAgICAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gICAgICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gICAgICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuICAgICAqL1xuICAgIC8qZ2xvYmFsIFRIUkVFLCBjb25zb2xlICovXG5cbiAgICAvLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy4gSXQgbWFpbnRhaW5zXG4gICAgLy8gdGhlIFwidXBcIiBkaXJlY3Rpb24gYXMgK1ksIHVubGlrZSB0aGUgVHJhY2tiYWxsQ29udHJvbHMuIFRvdWNoIG9uIHRhYmxldCBhbmQgcGhvbmVzIGlzXG4gICAgLy8gc3VwcG9ydGVkLlxuICAgIC8vXG4gICAgLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuICAgIC8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4gICAgLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG4gICAgLy9cbiAgICAvLyBUaGlzIGlzIGEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3IgKG1vc3QpIFRyYWNrYmFsbENvbnRyb2xzIHVzZWQgaW4gZXhhbXBsZXMuXG4gICAgLy8gVGhhdCBpcywgaW5jbHVkZSB0aGlzIGpzIGZpbGUgYW5kIHdoZXJldmVyIHlvdSBzZWU6XG4gICAgLy8gICAgICBjb250cm9scyA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyggY2FtZXJhICk7XG4gICAgLy8gICAgICBjb250cm9scy50YXJnZXQueiA9IDE1MDtcbiAgICAvLyBTaW1wbGUgc3Vic3RpdHV0ZSBcIk9yYml0Q29udHJvbHNcIiBhbmQgdGhlIGNvbnRyb2wgc2hvdWxkIHdvcmsgYXMtaXMuXG5cbiAgICBmdW5jdGlvbiBPcmJpdENvbnRyb2xzKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cbiAgICAgICAgLy8gQVBJXG5cbiAgICAgICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIGNvbnRyb2wgb3JiaXRzIGFyb3VuZFxuICAgICAgICAvLyBhbmQgd2hlcmUgaXQgcGFucyB3aXRoIHJlc3BlY3QgdG8uXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICAvLyBjZW50ZXIgaXMgb2xkLCBkZXByZWNhdGVkOyB1c2UgXCJ0YXJnZXRcIiBpbnN0ZWFkXG4gICAgICAgIHRoaXMuY2VudGVyID0gdGhpcy50YXJnZXQ7XG5cbiAgICAgICAgLy8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvclxuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB0aGlzLm5vWm9vbSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuICAgICAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXRcbiAgICAgICAgdGhpcy5taW5EaXN0YW5jZSA9IDA7XG4gICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuICAgICAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuICAgICAgICB0aGlzLm5vUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICAgICAgdGhpcy5ub1BhbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmtleVBhblNwZWVkID0gNy4wOyAvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcbiAgICAgICAgdGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG4gICAgICAgIC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgICAgICAvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cbiAgICAgICAgdGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuICAgICAgICB0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcbiAgICAgICAgdGhpcy5ub0tleXMgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnBoaSA9IDBcbiAgICAgICAgdGhpcy50aGV0YSA9IDAgXG5cbiAgICAgICAgLy8gVGhlIGZvdXIgYXJyb3cga2V5c1xuICAgICAgICB0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG4gICAgICAgIHRoaXMuY29uc3RyYWluRGVsdGEgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICAvLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gaW50ZXJuYWxzXG5cbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcztcblxuICAgICAgICB2YXIgRVBTID0gMC4wMDAwMDE7XG5cbiAgICAgICAgdmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICAgICAgdmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgICAgIHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgICAgIHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgICAgIHZhciBwaGlEZWx0YSA9IDA7XG4gICAgICAgIHZhciB0aGV0YURlbHRhID0gMDtcbiAgICAgICAgdmFyIHNjYWxlID0gMTtcbiAgICAgICAgdmFyIHBhbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICAgICAgdmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICAgICAgdmFyIFNUQVRFID0geyBOT05FIDogLTEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cbiAgICAgICAgdmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICAvLyBmb3IgcmVzZXRcblxuICAgICAgICB0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cbiAgICAgICAgLy8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cbiAgICAgICAgdmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG4gICAgICAgIHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cbiAgICAgICAgLy8gZXZlbnRzXG5cbiAgICAgICAgdmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuICAgICAgICB2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0J307XG4gICAgICAgIHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCd9O1xuXG4gICAgICAgIHRoaXMucm90YXRlTGVmdCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XG5cbiAgICAgICAgICAgIGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIGFuZ2xlID0gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGV0YURlbHRhIC09IGFuZ2xlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yb3RhdGVVcCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XG5cbiAgICAgICAgICAgIGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIGFuZ2xlID0gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwaGlEZWx0YSAtPSBhbmdsZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHBhc3MgaW4gZGlzdGFuY2UgaW4gd29ybGQgc3BhY2UgdG8gbW92ZSBsZWZ0XG4gICAgICAgIHRoaXMucGFuTGVmdCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cbiAgICAgICAgICAgIHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcblxuICAgICAgICAgICAgLy8gZ2V0IFggY29sdW1uIG9mIG1hdHJpeFxuICAgICAgICAgICAgcGFuT2Zmc2V0LnNldCggdGVbIDAgXSwgdGVbIDEgXSwgdGVbIDIgXSApO1xuICAgICAgICAgICAgcGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhbi5hZGQoIHBhbk9mZnNldCApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIHVwXG4gICAgICAgIHRoaXMucGFuVXAgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG4gICAgICAgICAgICB2YXIgdGUgPSB0aGlzLm9iamVjdC5tYXRyaXguZWxlbWVudHM7XG5cbiAgICAgICAgICAgIC8vIGdldCBZIGNvbHVtbiBvZiBtYXRyaXhcbiAgICAgICAgICAgIHBhbk9mZnNldC5zZXQoIHRlWyA0IF0sIHRlWyA1IF0sIHRlWyA2IF0gKTtcbiAgICAgICAgICAgIHBhbk9mZnNldC5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFuLmFkZCggcGFuT2Zmc2V0ICk7XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIHBhc3MgaW4geCx5IG9mIGNoYW5nZSBkZXNpcmVkIGluIHBpeGVsIHNwYWNlLFxuICAgICAgICAvLyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcbiAgICAgICAgdGhpcy5wYW4gPSBmdW5jdGlvbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5vYmplY3QuZm92ICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBwZXJzcGVjdGl2ZVxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcG9zaXRpb24uY2xvbmUoKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuICAgICAgICAgICAgICAgIC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuICAgICAgICAgICAgICAgIHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcbiAgICAgICAgICAgICAgICBzY29wZS5wYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QudG9wICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBvcnRob2dyYXBoaWNcbiAgICAgICAgICAgICAgICBzY29wZS5wYW5MZWZ0KCBkZWx0YVggKiAoc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQpIC8gZWxlbWVudC5jbGllbnRXaWR0aCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnBhblVwKCBkZWx0YVkgKiAoc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20pIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBvciBwZXJzcGVjdGl2ZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZG9sbHlJbiA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2xseVNjYWxlID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICBkb2xseVNjYWxlID0gZ2V0Wm9vbVNjYWxlKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZG9sbHlPdXQgPSBmdW5jdGlvbiAoIGRvbGx5U2NhbGUgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9sbHlTY2FsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5vYmplY3QucG9zaXRpb247XG5cbiAgICAgICAgICAgIC8vIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogc2NvcGUuY29uc3RyYWluRGVsdGEueCAvIHdpbmRvdy5pbm5lcldpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgLy8gLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiBzY29wZS5jb25zdHJhaW5EZWx0YS55IC8gd2luZG93LmlubmVySGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgb2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCB0aGlzLnRhcmdldCApO1xuXG4gICAgICAgICAgICAvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2VcbiAgICAgICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuICAgICAgICAgICAgLy8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXG4gICAgICAgICAgICB2YXIgdGhldGEgPSBNYXRoLmF0YW4yKCBvZmZzZXQueCwgb2Zmc2V0LnogKTtcblxuICAgICAgICAgICAgLy8gYW5nbGUgZnJvbSB5LWF4aXNcblxuICAgICAgICAgICAgdmFyIHBoaSA9IE1hdGguYXRhbjIoIE1hdGguc3FydCggb2Zmc2V0LnggKiBvZmZzZXQueCArIG9mZnNldC56ICogb2Zmc2V0LnogKSwgb2Zmc2V0LnkgKTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmF1dG9Sb3RhdGUgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGV0YSArPSB0aGV0YURlbHRhO1xuICAgICAgICAgICAgcGhpICs9IHBoaURlbHRhO1xuXG4gICAgICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICAgICAgcGhpID0gTWF0aC5tYXgoIHRoaXMubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHRoaXMubWF4UG9sYXJBbmdsZSwgcGhpICkgKTtcblxuICAgICAgICAgICAgLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZSBFUFMgYW5kIFBJLUVQU1xuICAgICAgICAgICAgcGhpID0gTWF0aC5tYXgoIEVQUywgTWF0aC5taW4oIE1hdGguUEkgLSBFUFMsIHBoaSApICk7XG5cbiAgICAgICAgICAgIHZhciByYWRpdXMgPSBvZmZzZXQubGVuZ3RoKCkgKiBzY2FsZTtcblxuICAgICAgICAgICAgLy8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcbiAgICAgICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KCB0aGlzLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggdGhpcy5tYXhEaXN0YW5jZSwgcmFkaXVzICkgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hZGQoIHBhbiApO1xuXG4gICAgICAgICAgICBzY29wZS5waGkgPSBwaGlcbiAgICAgICAgICAgIHNjb3BlLnRoZXRhID0gdGhldGFcblxuICAgICAgICAgICAgb2Zmc2V0LnggPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLnNpbiggdGhldGEgKTtcbiAgICAgICAgICAgIG9mZnNldC55ID0gcmFkaXVzICogTWF0aC5jb3MoIHBoaSApO1xuICAgICAgICAgICAgb2Zmc2V0LnogPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLmNvcyggdGhldGEgKTtcblxuICAgICAgICAgICAgLy8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG4gICAgICAgICAgICBvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG4gICAgICAgICAgICBwb3NpdGlvbi5jb3B5KCB0aGlzLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cbiAgICAgICAgICAgIHRoaXMub2JqZWN0Lmxvb2tBdCggdGhpcy50YXJnZXQgKTtcblxuICAgICAgICAgICAgdGhldGFEZWx0YSA9IDA7XG4gICAgICAgICAgICBwaGlEZWx0YSA9IDA7XG4gICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICBwYW4uc2V0KCAwLCAwLCAwICk7XG5cbiAgICAgICAgICAgIGlmICggbGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCB0aGlzLm9iamVjdC5wb3NpdGlvbiApID4gRVBTICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG4gICAgICAgICAgICAgICAgbGFzdFBvc2l0aW9uLmNvcHkoIHRoaXMub2JqZWN0LnBvc2l0aW9uICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG5cbiAgICAgICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5jb3B5KCB0aGlzLnRhcmdldDAgKTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHRoaXMucG9zaXRpb24wICk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuICAgICAgICAgICAgcmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cbiAgICAgICAgICAgICAgICByb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSAxICkge1xuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5ET0xMWTtcblxuICAgICAgICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gMiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5QQU47XG5cbiAgICAgICAgICAgICAgICBwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcbiAgICAgICAgICAgIHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICByb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG4gICAgICAgICAgICAgICAgcm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuY29uc3RyYWluRGVsdGEueCA9IHJvdGF0ZURlbHRhLng7XG4gICAgICAgICAgICAgICAgc2NvcGUuY29uc3RyYWluRGVsdGEueSA9IHJvdGF0ZURlbHRhLnk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHNjb3BlLmNvbnN0cmFpbkRlbHRhKTtcbiAgICAgICAgICAgICAgICBUd2Vlbk1heC50byhzY29wZS5jb25zdHJhaW5EZWx0YSwgMC41MCwge1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICBlYXNlOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMC4wXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgICAgICBkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlJbigpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS5kb2xseU91dCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2NvcGUucGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cbiAgICAgICAgICAgICAgICBwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZVVwKCAvKiBldmVudCAqLyApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgdmFyIGRlbHRhID0gMDtcblxuICAgICAgICAgICAgaWYgKCBldmVudC53aGVlbERlbHRhICE9PSB1bmRlZmluZWQgKSB7IC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxuXG4gICAgICAgICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5kZXRhaWwgIT09IHVuZGVmaW5lZCApIHsgLy8gRmlyZWZveFxuXG4gICAgICAgICAgICAgICAgZGVsdGEgPSAtIGV2ZW50LmRldGFpbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5T3V0KCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5kb2xseUluKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLm5vS2V5cyA9PT0gdHJ1ZSB8fCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuICAgICAgICAgICAgICAgIGNhc2Ugc2NvcGUua2V5cy5VUDpcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBzY29wZS5rZXlzLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNoc3RhcnQoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG4gICAgICAgICAgICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cbiAgICAgICAgICAgICAgICAgICAgcGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdG91Y2htb3ZlKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgc3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuICAgICAgICAgICAgICAgICAgICAvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuICAgICAgICAgICAgICAgICAgICBkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG4gICAgICAgICAgICAgICAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5T3V0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlJbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICAgICAgICAgIHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNoZW5kKCAvKiBldmVudCAqLyApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIGZ1bmN0aW9uICggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0sIGZhbHNlICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTsgLy8gZmlyZWZveFxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoc3RhcnQsIGZhbHNlICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0b3VjaGVuZCwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0b3VjaG1vdmUsIGZhbHNlICk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG4gICAgICAgIC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgfTtcblxuICAgIGluaGVyaXRzKE9yYml0Q29udHJvbHMsIFRIUkVFLkV2ZW50RGlzcGF0Y2hlcilcbiAgICByZXR1cm4gT3JiaXRDb250cm9sc1xufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBudW10eXBlKG51bSwgZGVmKSB7XG5cdHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJ1xuXHRcdD8gbnVtIFxuXHRcdDogKHR5cGVvZiBkZWYgPT09ICdudW1iZXInID8gZGVmIDogMClcbn0iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXMtYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG52YXIga01heExlbmd0aCA9IDB4M2ZmZmZmZmZcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAtIEltcGxlbWVudGF0aW9uIG11c3Qgc3VwcG9ydCBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcy5cbiAqICAgRmlyZWZveCA0LTI5IGxhY2tlZCBzdXBwb3J0LCBmaXhlZCBpbiBGaXJlZm94IDMwKy5cbiAqICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cbiAqXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleSB3aWxsXG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCB3aWxsIHdvcmsgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IChmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBuZXcgVWludDhBcnJheSgxKS5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBzdWJqZWN0ID4gMCA/IHN1YmplY3QgPj4+IDAgOiAwXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JylcbiAgICAgIHN1YmplY3QgPSBiYXNlNjRjbGVhbihzdWJqZWN0KVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIHN1YmplY3QgIT09IG51bGwpIHsgLy8gYXNzdW1lIG9iamVjdCBpcyBhcnJheS1saWtlXG4gICAgaWYgKHN1YmplY3QudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShzdWJqZWN0LmRhdGEpKVxuICAgICAgc3ViamVjdCA9IHN1YmplY3QuZGF0YVxuICAgIGxlbmd0aCA9ICtzdWJqZWN0Lmxlbmd0aCA+IDAgPyBNYXRoLmZsb29yKCtzdWJqZWN0Lmxlbmd0aCkgOiAwXG4gIH0gZWxzZVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3RhcnQgd2l0aCBudW1iZXIsIGJ1ZmZlciwgYXJyYXkgb3Igc3RyaW5nJylcblxuICBpZiAodGhpcy5sZW5ndGggPiBrTWF4TGVuZ3RoKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBidWZbaV0gPSAoKHN1YmplY3RbaV0gJSAyNTYpICsgMjU2KSAlIDI1NlxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW4gJiYgYVtpXSA9PT0gYltpXTsgaSsrKSB7fVxuICBpZiAoaSAhPT0gbGVuKSB7XG4gICAgeCA9IGFbaV1cbiAgICB5ID0gYltpXVxuICB9XG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0WywgbGVuZ3RoXSknKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHRvdGFsTGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggPj4+IDFcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8vIHByZS1zZXQgZm9yIHZhbHVlcyB0aGF0IG1heSBleGlzdCBpbiB0aGUgZnV0dXJlXG5CdWZmZXIucHJvdG90eXBlLmxlbmd0aCA9IHVuZGVmaW5lZFxuQnVmZmVyLnByb3RvdHlwZS5wYXJlbnQgPSB1bmRlZmluZWRcblxuLy8gdG9TdHJpbmcoZW5jb2RpbmcsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID09PSBJbmZpbml0eSA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcbiAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKGVuZCA8PSBzdGFydCkgcmV0dXJuICcnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYmluYXJ5U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKVxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoYikge1xuICBpZighQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heClcbiAgICAgIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYilcbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKGJ5dGUpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGJpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiB1dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBiaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHV0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGFzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW47XG4gICAgaWYgKHN0YXJ0IDwgMClcbiAgICAgIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKVxuICAgICAgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KVxuICAgIGVuZCA9IHN0YXJ0XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSlcbiAgICByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2J1ZmZlciBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgaWYgKHRhcmdldF9zdGFydCA8IDAgfHwgdGFyZ2V0X3N0YXJ0ID49IHRhcmdldC5sZW5ndGgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gc291cmNlLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwIHx8IGVuZCA+IHNvdXJjZS5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IHV0ZjhUb0J5dGVzKHZhbHVlLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICB9XG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5jb25zdHJ1Y3RvciA9IEJ1ZmZlclxuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuZXF1YWxzID0gQlAuZXF1YWxzXG4gIGFyci5jb21wYXJlID0gQlAuY29tcGFyZVxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtel0vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpIHtcbiAgICAgIGJ5dGVBcnJheS5wdXNoKGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cbiIsInZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcbiIsIlxuLyoqXG4gKiBpc0FycmF5XG4gKi9cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIHRvU3RyaW5nXG4gKi9cblxudmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGB2YWxgXG4gKiBpcyBhbiBhcnJheS5cbiAqXG4gKiBleGFtcGxlOlxuICpcbiAqICAgICAgICBpc0FycmF5KFtdKTtcbiAqICAgICAgICAvLyA+IHRydWVcbiAqICAgICAgICBpc0FycmF5KGFyZ3VtZW50cyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICogICAgICAgIGlzQXJyYXkoJycpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge21peGVkfSB2YWxcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5IHx8IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuICEhIHZhbCAmJiAnW29iamVjdCBBcnJheV0nID09IHN0ci5jYWxsKHZhbCk7XG59O1xuIiwidmFyIGlzR0wgPSByZXF1aXJlKCdpcy13ZWJnbC1jb250ZXh0Jyk7XG52YXIgZ2V0R0wgPSByZXF1aXJlKCd3ZWJnbC1jb250ZXh0Jyk7XG52YXIgZGVib3VuY2UgPSByZXF1aXJlKCdkZWJvdW5jZScpO1xudmFyIGFkZEV2ZW50ID0gcmVxdWlyZSgnYWRkLWV2ZW50LWxpc3RlbmVyJyk7XG5cbmZ1bmN0aW9uIGlzQ2FudmFzQ29udGV4dChvYmopIHtcbiAgICB2YXIgY3R4MmQgPSB0eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEICE9PSAndW5kZWZpbmVkJyAmJiBvYmogaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcmV0dXJuIG9iaiAmJiAoY3R4MmQgfHwgaXNHTChvYmopKTtcbn1cblxuZnVuY3Rpb24gQ2FudmFzQXBwKHJlbmRlciwgb3B0aW9ucykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDYW52YXNBcHApKVxuICAgICAgICByZXR1cm4gbmV3IENhbnZhc0FwcChyZW5kZXIsIG9wdGlvbnMpO1xuXG4gICAgLy9hbGxvdyBvcHRpb25zIHRvIGJlIHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudFxuICAgIGlmICh0eXBlb2YgcmVuZGVyID09PSAnb2JqZWN0JyAmJiByZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHJlbmRlcjtcbiAgICAgICAgcmVuZGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICByZW5kZXIgPSB0eXBlb2YgcmVuZGVyID09PSAnZnVuY3Rpb24nID8gcmVuZGVyIDogb3B0aW9ucy5vblJlbmRlcjtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zfHx7fTtcbiAgICBvcHRpb25zLnJldGluYSA9IHR5cGVvZiBvcHRpb25zLnJldGluYSA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLnJldGluYSA6IHRydWU7XG4gICAgXG4gICAgdmFyIGhhc1dpZHRoID0gdHlwZW9mIG9wdGlvbnMud2lkdGggPT09IFwibnVtYmVyXCIsIFxuICAgICAgICBoYXNIZWlnaHQgPSB0eXBlb2Ygb3B0aW9ucy5oZWlnaHQgPT09IFwibnVtYmVyXCI7XG5cbiAgICAvL2lmIGVpdGhlciB3aWR0aCBvciBoZWlnaHQgaXMgc3BlY2lmaWVkLCBkb24ndCBhdXRvLXJlc2l6ZSB0byB0aGUgd2luZG93Li4uXG4gICAgaWYgKGhhc1dpZHRoIHx8IGhhc0hlaWdodCkgXG4gICAgICAgIG9wdGlvbnMuaWdub3JlUmVzaXplID0gdHJ1ZTtcblxuICAgIG9wdGlvbnMud2lkdGggPSBoYXNXaWR0aCA/IG9wdGlvbnMud2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBvcHRpb25zLmhlaWdodCA9IGhhc0hlaWdodCA/IG9wdGlvbnMuaGVpZ2h0IDogd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdmFyIERQUiA9IG9wdGlvbnMucmV0aW5hID8gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKSA6IDE7IFxuXG4gICAgLy9zZXR1cCB0aGUgY2FudmFzXG4gICAgdmFyIGNhbnZhcyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgYXR0cmlicyA9IG9wdGlvbnMuY29udGV4dEF0dHJpYnV0ZXN8fHt9O1xuXG4gICAgdGhpcy5pc1dlYkdMID0gZmFsc2U7XG5cbiAgICAvL2lmIHVzZXIgcHJvdmlkZWQgYSBjb250ZXh0IG9iamVjdFxuICAgIGlmIChpc0NhbnZhc0NvbnRleHQob3B0aW9ucy5jb250ZXh0KSkge1xuICAgICAgICBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0O1xuICAgICAgICBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcbiAgICB9XG5cbiAgICAvL290aGVyd2lzZSBhbGxvdyBmb3IgYSBzdHJpbmcgdG8gc2V0IG9uZSB1cFxuICAgIGlmICghY2FudmFzKVxuICAgICAgICBjYW52YXMgPSBvcHRpb25zLmNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gICAgY2FudmFzLndpZHRoID0gb3B0aW9ucy53aWR0aCAqIERQUjtcbiAgICBjYW52YXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKiBEUFI7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGV4dCA9PT0gXCJ3ZWJnbFwiIHx8IG9wdGlvbnMuY29udGV4dCA9PT0gXCJleHBlcmltZW50YWwtd2ViZ2xcIikge1xuICAgICAgICAgICAgY29udGV4dCA9IGdldEdMKHsgY2FudmFzOiBjYW52YXMsIGF0dHJpYnV0ZXM6IGF0dHJpYnMgfSk7XG4gICAgICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBcIldlYkdMIENvbnRleHQgTm90IFN1cHBvcnRlZCAtLSB0cnkgZW5hYmxpbmcgaXQgb3IgdXNpbmcgYSBkaWZmZXJlbnQgYnJvd3NlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG9wdGlvbnMuY29udGV4dHx8XCIyZFwiLCBhdHRyaWJzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXNXZWJHTCA9IGlzR0woY29udGV4dCk7XG5cbiAgICBpZiAob3B0aW9ucy5yZXRpbmEpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCArICdweCc7XG4gICAgfVxuXG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMub25SZXNpemUgPSBvcHRpb25zLm9uUmVzaXplO1xuICAgIHRoaXMuX0RQUiA9IERQUjtcbiAgICB0aGlzLl9yZXRpbmEgPSBvcHRpb25zLnJldGluYTtcbiAgICB0aGlzLl9vbmNlID0gb3B0aW9ucy5vbmNlO1xuICAgIHRoaXMuX2lnbm9yZVJlc2l6ZSA9IG9wdGlvbnMuaWdub3JlUmVzaXplO1xuICAgIHRoaXMuX2xhc3RGcmFtZSA9IG51bGw7XG4gICAgdGhpcy5fdGhlbiA9IERhdGUubm93KCk7XG5cbiAgICAvL0ZQUyBjb3VudGVyXG4gICAgdGhpcy5mcHMgPSA2MDtcbiAgICB0aGlzLl9mcmFtZXMgPSAwO1xuICAgIHRoaXMuX3ByZXZUaW1lID0gdGhpcy5fdGhlbjtcblxuICAgIGlmICghdGhpcy5faWdub3JlUmVzaXplKSB7XG4gICAgICAgIG9wdGlvbnMucmVzaXplRGVib3VuY2UgPSB0eXBlb2Ygb3B0aW9ucy5yZXNpemVEZWJvdW5jZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLnJlc2l6ZURlYm91bmNlIDogNTA7XG4gICAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCBvcHRpb25zLnJlc2l6ZURlYm91bmNlLCBmYWxzZSkpO1xuXG4gICAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVuZGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5vblJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpOyAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vZHVtbXkgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMub25SZW5kZXIgPSBmdW5jdGlvbiAoY29udGV4dCwgd2lkdGgsIGhlaWdodCwgZHQpIHsgfTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlck9uY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBkdCA9IChub3ctdGhpcy5fdGhlbik7XG5cbiAgICAgICAgdGhpcy5fZnJhbWVzKys7XG4gICAgICAgIGlmIChub3cgPiB0aGlzLl9wcmV2VGltZSArIDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMuZnBzID0gTWF0aC5yb3VuZCgodGhpcy5fZnJhbWVzICogMTAwMCkgLyAobm93IC0gdGhpcy5fcHJldlRpbWUpKTtcblxuICAgICAgICAgICAgdGhpcy5fcHJldlRpbWUgPSBub3c7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZXMgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzV2ViR0wpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUodGhpcy5fRFBSLCB0aGlzLl9EUFIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLl9EUFIsIHRoaXMuaGVpZ2h0ICogdGhpcy5fRFBSKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5vblJlbmRlcih0aGlzLmNvbnRleHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBkdCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzV2ViR0wpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgICAgIHRoaXMuX3RoZW4gPSBub3c7XG4gICAgfTtcblxuICAgIHRoaXMuX3JlbmRlckhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLl9vbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0RnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fcmVuZGVySGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlck9uY2UoKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMub25SZWFkeSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG9wdGlvbnMub25SZWFkeS5jYWxsKHRoaXMsIGNvbnRleHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNBcHAucHJvdG90eXBlLCAncmV0aW5hRW5hYmxlZCcsIHtcblxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgICB0aGlzLl9yZXRpbmEgPSB2O1xuICAgICAgICB0aGlzLl9EUFIgPSB0aGlzLl9yZXRpbmEgPyAod2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpIDogMTtcbiAgICAgICAgdGhpcy5yZXNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmV0aW5hO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FudmFzQXBwLnByb3RvdHlwZSwgJ2RldmljZVdpZHRoJywge1xuXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLl9EUFI7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNBcHAucHJvdG90eXBlLCAnZGV2aWNlSGVpZ2h0Jywge1xuXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy5fRFBSO1xuICAgIH1cbn0pO1xuXG5DYW52YXNBcHAucHJvdG90eXBlLnJlc2V0RlBTID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZnJhbWVzID0gMDtcbiAgICB0aGlzLl9wcmV2VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5fdGhlbiA9IHRoaXMuX3ByZXZUaW1lO1xuICAgIHRoaXMuZnBzID0gNjA7XG59O1xuXG5DYW52YXNBcHAucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucnVubmluZylcbiAgICAgICAgcmV0dXJuO1xuICAgIFxuICAgIGlmICh0aGlzLl9sYXN0RnJhbWUpIFxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9sYXN0RnJhbWUpO1xuXG4gICAgLy9yZXNldCBGUFMgY291bnRlclxuICAgIHRoaXMucmVzZXRGUFMoKTtcblxuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgdGhpcy5fbGFzdEZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JlbmRlckhhbmRsZXIpO1xufTtcblxuQ2FudmFzQXBwLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xhc3RGcmFtZSkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9sYXN0RnJhbWUpO1xuICAgICAgICB0aGlzLl9sYXN0RnJhbWUgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbn07XG5cbkNhbnZhc0FwcC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcztcblxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5fRFBSO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodCAqIHRoaXMuX0RQUjtcblxuICAgIGlmICh0aGlzLl9yZXRpbmEpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29uY2UpXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9yZW5kZXJIYW5kbGVyKTtcbiAgICBpZiAodHlwZW9mIHRoaXMub25SZXNpemUgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgdGhpcy5vblJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0FwcDsiLCJhZGRFdmVudExpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudExpc3RlbmVyXG5hZGRFdmVudExpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyXG5cbm1vZHVsZS5leHBvcnRzID0gYWRkRXZlbnRMaXN0ZW5lclxuXG52YXIgRXZlbnRzID0gbnVsbFxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIEV2ZW50cyA9IEV2ZW50cyB8fCAoXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA/XG4gICAge2FkZDogc3RkQXR0YWNoLCBybTogc3RkRGV0YWNofSA6XG4gICAge2FkZDogb2xkSUVBdHRhY2gsIHJtOiBvbGRJRURldGFjaH1cbiAgKVxuICBcbiAgcmV0dXJuIEV2ZW50cy5hZGQoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgRXZlbnRzID0gRXZlbnRzIHx8IChcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyID9cbiAgICB7YWRkOiBzdGRBdHRhY2gsIHJtOiBzdGREZXRhY2h9IDpcbiAgICB7YWRkOiBvbGRJRUF0dGFjaCwgcm06IG9sZElFRGV0YWNofVxuICApXG4gIFxuICByZXR1cm4gRXZlbnRzLnJtKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKVxufVxuXG5mdW5jdGlvbiBzdGRBdHRhY2goZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKVxufVxuXG5mdW5jdGlvbiBzdGREZXRhY2goZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKVxufVxuXG5mdW5jdGlvbiBvbGRJRUF0dGFjaChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICBpZih1c2VDYXB0dXJlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgdXNlQ2FwdHVyZSBpbiBvbGRJRScpXG4gIH1cblxuICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcilcbn1cblxuZnVuY3Rpb24gb2xkSUVEZXRhY2goZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpXG59XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgbm93ID0gcmVxdWlyZSgnZGF0ZS1ub3cnKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gKiBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gKiBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAqIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gKlxuICogQHNvdXJjZSB1bmRlcnNjb3JlLmpzXG4gKiBAc2VlIGh0dHA6Ly91bnNjcmlwdGFibGUuY29tLzIwMDkvMDMvMjAvZGVib3VuY2luZy1qYXZhc2NyaXB0LW1ldGhvZHMvXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jdGlvbiB0byB3cmFwXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZW91dCBpbiBtcyAoYDEwMGApXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHdoZXRoZXIgdG8gZXhlY3V0ZSBhdCB0aGUgYmVnaW5uaW5nIChgZmFsc2VgKVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSl7XG4gIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcbiAgaWYgKG51bGwgPT0gd2FpdCkgd2FpdCA9IDEwMDtcblxuICBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICB2YXIgbGFzdCA9IG5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPiAwKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdGltZXN0YW1wID0gbm93KCk7XG4gICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgaWYgKCF0aW1lb3V0KSB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IERhdGUubm93IHx8IG5vd1xuXG5mdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGN0eCkge1xuXHRpZiAoIWN0eCkgcmV0dXJuIGZhbHNlXG5cdHZhciBnbCA9IGN0eFxuXHQvL2NvbXBhdGliaWxpdHkgd2l0aCBDaHJvbWUgV2ViR0wgSW5zcGVjdG9yIEFkZG9uXG5cdGlmICh0eXBlb2YgY3R4LnJhd2dsICE9PSAndW5kZWZpbmVkJylcblx0XHRnbCA9IGN0eC5yYXdnbFxuXHRpZiAodHlwZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpXG5cdFx0cmV0dXJuIHRydWVcblx0cmV0dXJuIGZhbHNlXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG4gICAgb3B0cyA9IG9wdHN8fHt9O1xuICAgIHZhciBjYW52YXMgPSBvcHRzLmNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGlmICh0eXBlb2Ygb3B0cy53aWR0aCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgY2FudmFzLndpZHRoID0gb3B0cy53aWR0aDtcbiAgICBpZiAodHlwZW9mIG9wdHMuaGVpZ2h0ID09PSBcIm51bWJlclwiKVxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gb3B0cy5oZWlnaHQ7XG4gICAgXG4gICAgdmFyIGF0dHJpYnMgPSAob3B0cy5hdHRyaWJ1dGVzIHx8IG9wdHMuYXR0cmlicyB8fCB7fSk7XG4gICAgdHJ5IHtcbiAgICAgICAgZ2wgPSAoY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJywgYXR0cmlicykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIGF0dHJpYnMpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGdsID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdsO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYW1wXG5cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gbWluIDwgbWF4XG4gICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgIDogKHZhbHVlIDwgbWF4ID8gbWF4IDogdmFsdWUgPiBtaW4gPyBtaW4gOiB2YWx1ZSlcbn1cbiIsIi8qIVxuICAqIGRvbXJlYWR5IChjKSBEdXN0aW4gRGlheiAyMDE0IC0gTGljZW5zZSBNSVRcbiAgKi9cbiFmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKClcblxufSgnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZucyA9IFtdLCBsaXN0ZW5lclxuICAgICwgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhhY2sgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsXG4gICAgLCBkb21Db250ZW50TG9hZGVkID0gJ0RPTUNvbnRlbnRMb2FkZWQnXG4gICAgLCBsb2FkZWQgPSAoaGFjayA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChkb2MucmVhZHlTdGF0ZSlcblxuXG4gIGlmICghbG9hZGVkKVxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lcilcbiAgICBsb2FkZWQgPSAxXG4gICAgd2hpbGUgKGxpc3RlbmVyID0gZm5zLnNoaWZ0KCkpIGxpc3RlbmVyKClcbiAgfSlcblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgbG9hZGVkID8gZm4oKSA6IGZucy5wdXNoKGZuKVxuICB9XG5cbn0pO1xuIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnZ2wtbWF0NC9pZGVudGl0eScpXG52YXIgY3JlYXRlU2hhZGVyID0gcmVxdWlyZSgnZ2wtc2hhZGVyLWNvcmUnKVxuXG52YXIgUE9TSVRJT05fQVRUUklCVVRFID0gJ3Bvc2l0aW9uJyxcbiAgICBOT1JNQUxfQVRUUklCVVRFID0gJ25vcm1hbCcsXG4gICAgQ09MT1JfQVRUUklCVVRFID0gJ2NvbG9yJyxcbiAgICBURVhDT09SRF9BVFRSSUJVVEUgPSAndGV4Y29vcmQnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZ2wsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9uc3x8e31cbiAgICBvcHRpb25zLnRleGNvb3JkID0gdHlwZW9mIG9wdGlvbnMudGV4Y29vcmQgPT09ICdudW1iZXInIFxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy50ZXhjb29yZCA6IChvcHRpb25zLnRleGNvb3JkfHwwKVxuICAgICAgICBcbiAgICB2YXIgc2hhZGVyU291cmNlID0gbW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUob3B0aW9ucyksXG4gICAgICAgIHZlcnQgPSBzaGFkZXJTb3VyY2UudmVydGV4LFxuICAgICAgICBmcmFnID0gc2hhZGVyU291cmNlLmZyYWdtZW50LFxuICAgICAgICB1bmlmb3JtcyA9IHNoYWRlclNvdXJjZS51bmlmb3JtcyxcbiAgICAgICAgYXR0cmlicyA9IHNoYWRlclNvdXJjZS5hdHRyaWJ1dGVzXG4gICAgXG4gICAgdmFyIHNoYWRlciA9IGNyZWF0ZVNoYWRlcihnbCwgdmVydCwgZnJhZywgdW5pZm9ybXMsIGF0dHJpYnMpXG4gICAgc2hhZGVyLmJpbmQoKVxuICAgIGZvciAodmFyIGk9MDsgaTxvcHRpb25zLnRleGNvb3JkOyBpKyspIFxuICAgICAgICBzaGFkZXIudW5pZm9ybXNbJ3RleHR1cmUnK2ldID0gaVxuXG4gICAgdmFyIGFyciA9IGlkZW50aXR5KCBuZXcgRmxvYXQzMkFycmF5KDE2KSApXG4gICAgc2hhZGVyLnVuaWZvcm1zLnByb2plY3Rpb24gPSBhcnJcbiAgICBzaGFkZXIudW5pZm9ybXMubW9kZWwgPSBhcnJcbiAgICBzaGFkZXIudW5pZm9ybXMudmlldyA9IGFyclxuICAgIHNoYWRlci51bmlmb3Jtcy50aW50ID0gb3B0aW9ucy50aW50IHx8IFsxLCAxLCAxLCAxXVxuXG4gICAgcmV0dXJuIHNoYWRlclxufVxuXG5tb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9uc3x8e31cbiAgICBvcHRpb25zLnRleGNvb3JkID0gdHlwZW9mIG9wdGlvbnMudGV4Y29vcmQgPT09ICdudW1iZXInIFxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy50ZXhjb29yZCA6IChvcHRpb25zLnRleGNvb3JkfHwwKVxuXG4gICAgdmFyIHZlcnQgPSB0eXBlb2Ygb3B0aW9ucy52ZXJ0ZXggPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IG9wdGlvbnMudmVydGV4IDogY3JlYXRlVmVydGV4U2hhZGVyKG9wdGlvbnMubm9ybWFsLCBvcHRpb25zLmNvbG9yLCBvcHRpb25zLnRleGNvb3JkKVxuICAgIHZhciBmcmFnID0gdHlwZW9mIG9wdGlvbnMuZnJhZ21lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IG9wdGlvbnMuZnJhZ21lbnQgOiBjcmVhdGVGcmFnbWVudFNoYWRlcihvcHRpb25zLmNvbG9yLCBvcHRpb25zLnRleGNvb3JkKVxuXG4gICAgdmFyIHVuaWZvcm1zID0gW1xuICAgICAgICB7IHR5cGU6ICdtYXQ0JywgbmFtZTogJ3Byb2plY3Rpb24nIH0sXG4gICAgICAgIHsgdHlwZTogJ21hdDQnLCBuYW1lOiAndmlldycgfSxcbiAgICAgICAgeyB0eXBlOiAnbWF0NCcsIG5hbWU6ICdtb2RlbCcgfSxcbiAgICAgICAgeyB0eXBlOiAndmVjNCcsIG5hbWU6ICd0aW50JyB9XG4gICAgXVxuXG4gICAgLy9TaW1pbGFyIHRvIG9sZCBzY2hvb2wgcGlwZWxpbmUsIHdlIHdpbGwgdXNlIGZpeGVkIGxvY2F0aW9uc1xuICAgIC8vaHR0cDovL3d3dy5vcGVuZ2wub3JnL3Nkay9kb2NzL3R1dG9yaWFscy9DbG9ja3dvcmtDb2RlcnMvYXR0cmlidXRlcy5waHBcbiAgICB2YXIgYXR0cmlicyA9IFtcbiAgICAgICAgeyB0eXBlOiAndmVjNCcsIG5hbWU6IFBPU0lUSU9OX0FUVFJJQlVURSwgbG9jYXRpb246IDAgfVxuICAgIF1cblxuICAgIGlmIChvcHRpb25zLm5vcm1hbClcbiAgICAgICAgYXR0cmlicy5wdXNoKHsgdHlwZTogJ3ZlYzMnLCBuYW1lOiBOT1JNQUxfQVRUUklCVVRFLCBsb2NhdGlvbjogMSB9KVxuICAgIGlmIChvcHRpb25zLmNvbG9yKVxuICAgICAgICBhdHRyaWJzLnB1c2goeyB0eXBlOiAndmVjNCcsIG5hbWU6IENPTE9SX0FUVFJJQlVURSwgbG9jYXRpb246IDIgfSlcblxuICAgIHZhciBpZHggPSAzXG4gICAgZm9yICh2YXIgaT0wOyBpPG9wdGlvbnMudGV4Y29vcmQ7IGkrKykge1xuICAgICAgICB1bmlmb3Jtcy5wdXNoKHsgdHlwZTogJ3NhbXBsZXIyRCcsIG5hbWU6ICd0ZXh0dXJlJytpIH0pXG4gICAgICAgIGF0dHJpYnMucHVzaCh7IHR5cGU6ICd2ZWMyJywgbmFtZTogVEVYQ09PUkRfQVRUUklCVVRFK2ksIGxvY2F0aW9uOiBpZHgrKyB9KVxuICAgIH1cblxuICAgIHJldHVybiB7IHZlcnRleDogdmVydCwgZnJhZ21lbnQ6IGZyYWcsIHVuaWZvcm1zOiB1bmlmb3JtcywgYXR0cmlidXRlczogYXR0cmlicyB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKGhhc05vcm1hbHMsIGhhc0NvbG9ycywgbnVtVGV4Q29vcmRzKSB7XG4gICAgbnVtVGV4Q29vcmRzID0gbnVtVGV4Q29vcmRzIHx8IDA7XG4gICAgdmFyIHNoYWRlciA9IFwiXCI7XG4gICAgc2hhZGVyICs9IFwiYXR0cmlidXRlIHZlYzQgXCIrUE9TSVRJT05fQVRUUklCVVRFK1wiO1xcblwiXG4gICAgICAgICArIChoYXNOb3JtYWxzID8gXCJhdHRyaWJ1dGUgdmVjMyBcIiArIE5PUk1BTF9BVFRSSUJVVEUgKyBcIjtcXG5cIiA6IFwiXCIpXG4gICAgICAgICArIChoYXNDb2xvcnMgPyBcImF0dHJpYnV0ZSB2ZWM0IFwiICsgQ09MT1JfQVRUUklCVVRFICsgXCI7XFxuXCIgOiBcIlwiKTtcblxuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRleENvb3JkczsgaSsrKSB7XG4gICAgICAgIHNoYWRlciArPSBcImF0dHJpYnV0ZSB2ZWMyIFwiICsgVEVYQ09PUkRfQVRUUklCVVRFICsgaSArIFwiO1xcblwiO1xuICAgIH1cblxuICAgIHNoYWRlciArPSBcInVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xcblwiO1xuICAgIHNoYWRlciArPSBcInVuaWZvcm0gbWF0NCB2aWV3O1xcblwiO1xuICAgIHNoYWRlciArPSBcInVuaWZvcm0gbWF0NCBtb2RlbDtcXG5cIjtcbiAgICBcbiAgICBzaGFkZXIgKz0gKGhhc0NvbG9ycyA/IFwidmFyeWluZyB2ZWM0IHZfY29sO1xcblwiIDogXCJcIik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVGV4Q29vcmRzOyBpKyspIHtcbiAgICAgICAgc2hhZGVyICs9IFwidmFyeWluZyB2ZWMyIHZfdGV4XCIgKyBpICsgXCI7XFxuXCI7XG4gICAgfVxuXG4gICAgc2hhZGVyICs9IFwiXFxudm9pZCBtYWluKCkge1xcblwiICsgXCIgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogbW9kZWwgKiBcIiArIFBPU0lUSU9OX0FUVFJJQlVURSArIFwiO1xcblwiXG4gICAgICAgICAgICArIChoYXNDb2xvcnMgPyBcIiAgIHZfY29sID0gXCIgKyBDT0xPUl9BVFRSSUJVVEUgKyBcIjtcXG5cIiA6IFwiXCIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRleENvb3JkczsgaSsrKSB7XG4gICAgICAgIHNoYWRlciArPSBcIiAgIHZfdGV4XCIgKyBpICsgXCIgPSBcIiArIFRFWENPT1JEX0FUVFJJQlVURSArIGkgKyBcIjtcXG5cIjtcbiAgICB9XG4gICAgc2hhZGVyICs9IFwiICAgZ2xfUG9pbnRTaXplID0gMS4wO1xcblwiO1xuICAgIHNoYWRlciArPSBcIn1cXG5cIjtcblxuICAgIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGhhc0NvbG9ycywgbnVtVGV4Q29vcmRzKSB7XG4gICAgbnVtVGV4Q29vcmRzID0gbnVtVGV4Q29vcmRzIHx8IDA7XG4gICAgdmFyIHNoYWRlciA9IFwiI2lmZGVmIEdMX0VTXFxuXCIgKyBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcblwiICsgXCIjZW5kaWZcXG5cXG5cIjtcbiBcbiAgICBpZiAoaGFzQ29sb3JzKSBcbiAgICAgICAgc2hhZGVyICs9IFwidmFyeWluZyB2ZWM0IHZfY29sO1xcblwiO1xuXG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRleENvb3JkczsgaSsrKSB7XG4gICAgICAgIHNoYWRlciArPSBcInZhcnlpbmcgdmVjMiB2X3RleFwiICsgaSArIFwiO1xcblwiO1xuICAgICAgICBzaGFkZXIgKz0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlXCIgKyBpICsgXCI7XFxuXCI7XG4gICAgfVxuICAgIHNoYWRlciArPSBcInVuaWZvcm0gdmVjNCB0aW50O1xcblwiO1xuXG4gICAgc2hhZGVyICs9IFwiXFxudm9pZCBtYWluKCkge1xcblwiICsgXCIgICBnbF9GcmFnQ29sb3IgPSBcIjtcblxuICAgIGlmIChoYXNDb2xvcnMpXG4gICAgICAgIHNoYWRlciArPSBcInZfY29sXCJcblxuICAgIGlmIChoYXNDb2xvcnMgJiYgbnVtVGV4Q29vcmRzID4gMCkgXG4gICAgICAgIHNoYWRlciArPSBcIiAqIFwiO1xuICAgIGVsc2UgaWYgKCFoYXNDb2xvcnMgJiYgIW51bVRleENvb3JkcylcbiAgICAgICAgc2hhZGVyICs9IFwidmVjNCgxLjApXCJcblxuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UZXhDb29yZHM7IGkrKykge1xuICAgICAgICBpZiAoaSA9PSBudW1UZXhDb29yZHMgLSAxKSB7XG4gICAgICAgICAgICAgICAgc2hhZGVyICs9IFwiIHRleHR1cmUyRCh0ZXh0dXJlXCIgKyBpICsgXCIsICB2X3RleFwiICsgaSArIFwiKVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoYWRlciArPSBcIiB0ZXh0dXJlMkQodGV4dHVyZVwiICsgaSArIFwiLCAgdl90ZXhcIiArIGkgKyBcIikgKlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hhZGVyICs9IFwiICogdGludFwiXG4gICAgc2hhZGVyICs9IFwiO1xcbn1cIjtcbiAgICByZXR1cm4gc2hhZGVyO1xufSIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUF0dHJpYnV0ZVdyYXBwZXJcblxuLy9TaGFkZXIgYXR0cmlidXRlIGNsYXNzXG5mdW5jdGlvbiBTaGFkZXJBdHRyaWJ1dGUoZ2wsIHByb2dyYW0sIGxvY2F0aW9uLCBkaW1lbnNpb24sIG5hbWUsIGNvbnN0RnVuYywgcmVsaW5rKSB7XG4gIHRoaXMuX2dsID0gZ2xcbiAgdGhpcy5fcHJvZ3JhbSA9IHByb2dyYW1cbiAgdGhpcy5fbG9jYXRpb24gPSBsb2NhdGlvblxuICB0aGlzLl9kaW1lbnNpb24gPSBkaW1lbnNpb25cbiAgdGhpcy5fbmFtZSA9IG5hbWVcbiAgdGhpcy5fY29uc3RGdW5jID0gY29uc3RGdW5jXG4gIHRoaXMuX3JlbGluayA9IHJlbGlua1xufVxuXG52YXIgcHJvdG8gPSBTaGFkZXJBdHRyaWJ1dGUucHJvdG90eXBlXG5cbnByb3RvLnBvaW50ZXIgPSBmdW5jdGlvbiBzZXRBdHRyaWJQb2ludGVyKHR5cGUsIG5vcm1hbGl6ZWQsIHN0cmlkZSwgb2Zmc2V0KSB7XG4gIHZhciBnbCA9IHRoaXMuX2dsXG4gIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5fbG9jYXRpb24sIHRoaXMuX2RpbWVuc2lvbiwgdHlwZXx8Z2wuRkxPQVQsICEhbm9ybWFsaXplZCwgc3RyaWRlfHwwLCBvZmZzZXR8fDApXG4gIHRoaXMuX2dsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuX2xvY2F0aW9uKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsb2NhdGlvbicsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb25cbiAgfVxuICAsIHNldDogZnVuY3Rpb24odikge1xuICAgIGlmKHYgIT09IHRoaXMuX2xvY2F0aW9uKSB7XG4gICAgICB0aGlzLl9sb2NhdGlvbiA9IHZcbiAgICAgIHRoaXMuX2dsLmJpbmRBdHRyaWJMb2NhdGlvbih0aGlzLl9wcm9ncmFtLCB2LCB0aGlzLl9uYW1lKVxuICAgICAgdGhpcy5fZ2wubGlua1Byb2dyYW0odGhpcy5fcHJvZ3JhbSlcbiAgICAgIHRoaXMuX3JlbGluaygpXG4gICAgfVxuICB9XG59KVxuXG5cbi8vQWRkcyBhIHZlY3RvciBhdHRyaWJ1dGUgdG8gb2JqXG5mdW5jdGlvbiBhZGRWZWN0b3JBdHRyaWJ1dGUoZ2wsIHByb2dyYW0sIGxvY2F0aW9uLCBkaW1lbnNpb24sIG9iaiwgbmFtZSwgZG9MaW5rKSB7XG4gIHZhciBjb25zdEZ1bmNBcmdzID0gWyAnZ2wnLCAndicgXVxuICB2YXIgdmFyTmFtZXMgPSBbXVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvbnN0RnVuY0FyZ3MucHVzaCgneCcraSlcbiAgICB2YXJOYW1lcy5wdXNoKCd4JytpKVxuICB9XG4gIGNvbnN0RnVuY0FyZ3MucHVzaChbXG4gICAgJ2lmKHgwLmxlbmd0aD09PXZvaWQgMCl7cmV0dXJuIGdsLnZlcnRleEF0dHJpYicsIGRpbWVuc2lvbiwgJ2YodiwnLCB2YXJOYW1lcy5qb2luKCksICcpfWVsc2V7cmV0dXJuIGdsLnZlcnRleEF0dHJpYicsIGRpbWVuc2lvbiwgJ2Z2KHYseDApfSdcbiAgXS5qb2luKCcnKSlcbiAgdmFyIGNvbnN0RnVuYyA9IEZ1bmN0aW9uLmFwcGx5KHVuZGVmaW5lZCwgY29uc3RGdW5jQXJncylcbiAgdmFyIGF0dHIgPSBuZXcgU2hhZGVyQXR0cmlidXRlKGdsLCBwcm9ncmFtLCBsb2NhdGlvbiwgZGltZW5zaW9uLCBuYW1lLCBjb25zdEZ1bmMsIGRvTGluaylcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwge1xuICAgIHNldDogZnVuY3Rpb24oeCkge1xuICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIuX2xvY2F0aW9uKVxuICAgICAgY29uc3RGdW5jKGdsLCBhdHRyLl9sb2NhdGlvbiwgeClcbiAgICAgIHJldHVybiB4XG4gICAgfVxuICAgICwgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBhdHRyXG4gICAgfVxuICAgICwgZW51bWVyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vL0NyZWF0ZSBzaGltcyBmb3IgYXR0cmlidXRlc1xuZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlV3JhcHBlcihnbCwgcHJvZ3JhbSwgYXR0cmlidXRlcywgZG9MaW5rKSB7XG4gIHZhciBvYmogPSB7fVxuICBmb3IodmFyIGk9MCwgbj1hdHRyaWJ1dGVzLmxlbmd0aDsgaTxuOyArK2kpIHtcbiAgICB2YXIgYSA9IGF0dHJpYnV0ZXNbaV1cbiAgICB2YXIgbmFtZSA9IGEubmFtZVxuICAgIHZhciB0eXBlID0gYS50eXBlXG4gICAgdmFyIGxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSlcbiAgICBcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICBjYXNlICdpbnQnOlxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgICBhZGRWZWN0b3JBdHRyaWJ1dGUoZ2wsIHByb2dyYW0sIGxvY2F0aW9uLCAxLCBvYmosIG5hbWUsIGRvTGluaylcbiAgICAgIGJyZWFrXG4gICAgICBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmKHR5cGUuaW5kZXhPZigndmVjJykgPj0gMCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgZGF0YSB0eXBlIGZvciBhdHRyaWJ1dGUgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkVmVjdG9yQXR0cmlidXRlKGdsLCBwcm9ncmFtLCBsb2NhdGlvbiwgZCwgb2JqLCBuYW1lLCBkb0xpbmspXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IFVua25vd24gZGF0YSB0eXBlIGZvciBhdHRyaWJ1dGUgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9ialxufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZHVwID0gcmVxdWlyZSgnZHVwJylcbnZhciBjb2FsbGVzY2VVbmlmb3JtcyA9IHJlcXVpcmUoJy4vcmVmbGVjdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVW5pZm9ybVdyYXBwZXJcblxuLy9CaW5kcyBhIGZ1bmN0aW9uIGFuZCByZXR1cm5zIGEgdmFsdWVcbmZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgdmFyIGMgPSBuZXcgRnVuY3Rpb24oJ3knLCAncmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHl9JylcbiAgcmV0dXJuIGMoeClcbn1cblxuLy9DcmVhdGUgc2hpbXMgZm9yIHVuaWZvcm1zXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtV3JhcHBlcihnbCwgcHJvZ3JhbSwgdW5pZm9ybXMsIGxvY2F0aW9ucykge1xuXG4gIGZ1bmN0aW9uIG1ha2VHZXR0ZXIoaW5kZXgpIHtcbiAgICB2YXIgcHJvYyA9IG5ldyBGdW5jdGlvbignZ2wnLCAncHJvZycsICdsb2NhdGlvbnMnLCBcbiAgICAgICdyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZ2wuZ2V0VW5pZm9ybShwcm9nLGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSl9JykgXG4gICAgcmV0dXJuIHByb2MoZ2wsIHByb2dyYW0sIGxvY2F0aW9ucylcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VQcm9wU2V0dGVyKHBhdGgsIGluZGV4LCB0eXBlKSB7XG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgY2FzZSAnaW50JzpcbiAgICAgIGNhc2UgJ3NhbXBsZXIyRCc6XG4gICAgICBjYXNlICdzYW1wbGVyQ3ViZSc6XG4gICAgICAgIHJldHVybiAnZ2wudW5pZm9ybTFpKGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm0xZihsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sb2JqJyArIHBhdGggKyAnKSdcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2aWR4ID0gdHlwZS5pbmRleE9mKCd2ZWMnKVxuICAgICAgICBpZigwIDw9IHZpZHggJiYgdmlkeCA8PSAxICYmIHR5cGUubGVuZ3RoID09PSA0ICsgdmlkeCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgZGF0YSB0eXBlJylcbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpdGNoKHR5cGUuY2hhckF0KDApKSB7XG4gICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgIGNhc2UgJ2knOlxuICAgICAgICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm0nICsgZCArICdpdihsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sb2JqJyArIHBhdGggKyAnKSdcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm0nICsgZCArICdmdihsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sb2JqJyArIHBhdGggKyAnKSdcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBVbnJlY29nbml6ZWQgZGF0YSB0eXBlIGZvciB2ZWN0b3IgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZih0eXBlLmluZGV4T2YoJ21hdCcpID09PSAwICYmIHR5cGUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCB1bmlmb3JtIGRpbWVuc2lvbiB0eXBlIGZvciBtYXRyaXggJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICdnbC51bmlmb3JtTWF0cml4JyArIGQgKyAnZnYobG9jYXRpb25zWycgKyBpbmRleCArICddLGZhbHNlLG9iaicgKyBwYXRoICsgJyknXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IFVua25vd24gdW5pZm9ybSBkYXRhIHR5cGUgZm9yICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW51bWVyYXRlSW5kaWNlcyhwcmVmaXgsIHR5cGUpIHtcbiAgICBpZih0eXBlb2YgdHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBbIFtwcmVmaXgsIHR5cGVdIF1cbiAgICB9XG4gICAgdmFyIGluZGljZXMgPSBbXVxuICAgIGZvcih2YXIgaWQgaW4gdHlwZSkge1xuICAgICAgdmFyIHByb3AgPSB0eXBlW2lkXVxuICAgICAgdmFyIHRwcmVmaXggPSBwcmVmaXhcbiAgICAgIGlmKHBhcnNlSW50KGlkKSArICcnID09PSBpZCkge1xuICAgICAgICB0cHJlZml4ICs9ICdbJyArIGlkICsgJ10nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cHJlZml4ICs9ICcuJyArIGlkXG4gICAgICB9XG4gICAgICBpZih0eXBlb2YgcHJvcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoLmFwcGx5KGluZGljZXMsIGVudW1lcmF0ZUluZGljZXModHByZWZpeCwgcHJvcCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRpY2VzLnB1c2goW3RwcmVmaXgsIHByb3BdKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kaWNlc1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVNldHRlcih0eXBlKSB7XG4gICAgdmFyIGNvZGUgPSBbICdyZXR1cm4gZnVuY3Rpb24gdXBkYXRlUHJvcGVydHkob2JqKXsnIF1cbiAgICB2YXIgaW5kaWNlcyA9IGVudW1lcmF0ZUluZGljZXMoJycsIHR5cGUpXG4gICAgZm9yKHZhciBpPTA7IGk8aW5kaWNlcy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGl0ZW0gPSBpbmRpY2VzW2ldXG4gICAgICB2YXIgcGF0aCA9IGl0ZW1bMF1cbiAgICAgIHZhciBpZHggID0gaXRlbVsxXVxuICAgICAgaWYobG9jYXRpb25zW2lkeF0pIHtcbiAgICAgICAgY29kZS5wdXNoKG1ha2VQcm9wU2V0dGVyKHBhdGgsIGlkeCwgdW5pZm9ybXNbaWR4XS50eXBlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29kZS5wdXNoKCdyZXR1cm4gb2JqfScpXG4gICAgdmFyIHByb2MgPSBuZXcgRnVuY3Rpb24oJ2dsJywgJ3Byb2cnLCAnbG9jYXRpb25zJywgY29kZS5qb2luKCdcXG4nKSlcbiAgICByZXR1cm4gcHJvYyhnbCwgcHJvZ3JhbSwgbG9jYXRpb25zKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgY2FzZSAnaW50JzpcbiAgICAgIGNhc2UgJ3NhbXBsZXIyRCc6XG4gICAgICBjYXNlICdzYW1wbGVyQ3ViZSc6XG4gICAgICAgIHJldHVybiAwXG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICAgIHJldHVybiAwLjBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2aWR4ID0gdHlwZS5pbmRleE9mKCd2ZWMnKVxuICAgICAgICBpZigwIDw9IHZpZHggJiYgdmlkeCA8PSAxICYmIHR5cGUubGVuZ3RoID09PSA0ICsgdmlkeCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgZGF0YSB0eXBlJylcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYodHlwZS5jaGFyQXQoMCkgPT09ICdiJykge1xuICAgICAgICAgICAgcmV0dXJuIGR1cChkLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGR1cChkKVxuICAgICAgICB9IGVsc2UgaWYodHlwZS5pbmRleE9mKCdtYXQnKSA9PT0gMCAmJiB0eXBlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgdW5pZm9ybSBkaW1lbnNpb24gdHlwZSBmb3IgbWF0cml4ICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkdXAoW2QsZF0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IFVua25vd24gdW5pZm9ybSBkYXRhIHR5cGUgZm9yICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcmVQcm9wZXJ0eShvYmosIHByb3AsIHR5cGUpIHtcbiAgICBpZih0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBjaGlsZCA9IHByb2Nlc3NPYmplY3QodHlwZSlcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICAgICAgZ2V0OiBpZGVudGl0eShjaGlsZCksXG4gICAgICAgIHNldDogbWFrZVNldHRlcih0eXBlKSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYobG9jYXRpb25zW3R5cGVdKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICAgICAgICBnZXQ6IG1ha2VHZXR0ZXIodHlwZSksXG4gICAgICAgICAgc2V0OiBtYWtlU2V0dGVyKHR5cGUpLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW3Byb3BdID0gZGVmYXVsdFZhbHVlKHVuaWZvcm1zW3R5cGVdLnR5cGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc09iamVjdChvYmopIHtcbiAgICB2YXIgcmVzdWx0XG4gICAgaWYoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICByZXN1bHQgPSBuZXcgQXJyYXkob2JqLmxlbmd0aClcbiAgICAgIGZvcih2YXIgaT0wOyBpPG9iai5sZW5ndGg7ICsraSkge1xuICAgICAgICBzdG9yZVByb3BlcnR5KHJlc3VsdCwgaSwgb2JqW2ldKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB7fVxuICAgICAgZm9yKHZhciBpZCBpbiBvYmopIHtcbiAgICAgICAgc3RvcmVQcm9wZXJ0eShyZXN1bHQsIGlkLCBvYmpbaWRdKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvL1JldHVybiBkYXRhXG4gIHZhciBjb2FsbGVzY2VkID0gY29hbGxlc2NlVW5pZm9ybXModW5pZm9ybXMsIHRydWUpXG4gIHJldHVybiB7XG4gICAgZ2V0OiBpZGVudGl0eShwcm9jZXNzT2JqZWN0KGNvYWxsZXNjZWQpKSxcbiAgICBzZXQ6IG1ha2VTZXR0ZXIoY29hbGxlc2NlZCksXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbWFrZVJlZmxlY3RUeXBlc1xuXG4vL0NvbnN0cnVjdCB0eXBlIGluZm8gZm9yIHJlZmxlY3Rpb24uXG4vL1xuLy8gVGhpcyBpdGVyYXRlcyBvdmVyIHRoZSBmbGF0dGVuZWQgbGlzdCBvZiB1bmlmb3JtIHR5cGUgdmFsdWVzIGFuZCBzbWFzaGVzIHRoZW0gaW50byBhIEpTT04gb2JqZWN0LlxuLy9cbi8vIFRoZSBsZWF2ZXMgb2YgdGhlIHJlc3VsdGluZyBvYmplY3QgYXJlIGVpdGhlciBpbmRpY2VzIG9yIHR5cGUgc3RyaW5ncyByZXByZXNlbnRpbmcgcHJpbWl0aXZlIGdsc2xpZnkgdHlwZXNcbmZ1bmN0aW9uIG1ha2VSZWZsZWN0VHlwZXModW5pZm9ybXMsIHVzZUluZGV4KSB7XG4gIHZhciBvYmogPSB7fVxuICBmb3IodmFyIGk9MDsgaTx1bmlmb3Jtcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBuID0gdW5pZm9ybXNbaV0ubmFtZVxuICAgIHZhciBwYXJ0cyA9IG4uc3BsaXQoXCIuXCIpXG4gICAgdmFyIG8gPSBvYmpcbiAgICBmb3IodmFyIGo9MDsgajxwYXJ0cy5sZW5ndGg7ICsraikge1xuICAgICAgdmFyIHggPSBwYXJ0c1tqXS5zcGxpdChcIltcIilcbiAgICAgIGlmKHgubGVuZ3RoID4gMSkge1xuICAgICAgICBpZighKHhbMF0gaW4gbykpIHtcbiAgICAgICAgICBvW3hbMF1dID0gW11cbiAgICAgICAgfVxuICAgICAgICBvID0gb1t4WzBdXVxuICAgICAgICBmb3IodmFyIGs9MTsgazx4Lmxlbmd0aDsgKytrKSB7XG4gICAgICAgICAgdmFyIHkgPSBwYXJzZUludCh4W2tdKVxuICAgICAgICAgIGlmKGs8eC5sZW5ndGgtMSB8fCBqPHBhcnRzLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICBpZighKHkgaW4gbykpIHtcbiAgICAgICAgICAgICAgaWYoayA8IHgubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICBvW3ldID0gW11cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvW3ldID0ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbyA9IG9beV1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodXNlSW5kZXgpIHtcbiAgICAgICAgICAgICAgb1t5XSA9IGlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9beV0gPSB1bmlmb3Jtc1tpXS50eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYoaiA8IHBhcnRzLmxlbmd0aC0xKSB7XG4gICAgICAgIGlmKCEoeFswXSBpbiBvKSkge1xuICAgICAgICAgIG9beFswXV0gPSB7fVxuICAgICAgICB9XG4gICAgICAgIG8gPSBvW3hbMF1dXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZih1c2VJbmRleCkge1xuICAgICAgICAgIG9beFswXV0gPSBpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb1t4WzBdXSA9IHVuaWZvcm1zW2ldLnR5cGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gZHVwZV9hcnJheShjb3VudCwgdmFsdWUsIGkpIHtcbiAgdmFyIGMgPSBjb3VudFtpXXwwXG4gIGlmKGMgPD0gMCkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoYyksIGpcbiAgaWYoaSA9PT0gY291bnQubGVuZ3RoLTEpIHtcbiAgICBmb3Ioaj0wOyBqPGM7ICsraikge1xuICAgICAgcmVzdWx0W2pdID0gdmFsdWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yKGo9MDsgajxjOyArK2opIHtcbiAgICAgIHJlc3VsdFtqXSA9IGR1cGVfYXJyYXkoY291bnQsIHZhbHVlLCBpKzEpXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gZHVwZV9udW1iZXIoY291bnQsIHZhbHVlKSB7XG4gIHZhciByZXN1bHQsIGlcbiAgcmVzdWx0ID0gbmV3IEFycmF5KGNvdW50KVxuICBmb3IoaT0wOyBpPGNvdW50OyArK2kpIHtcbiAgICByZXN1bHRbaV0gPSB2YWx1ZVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gZHVwZShjb3VudCwgdmFsdWUpIHtcbiAgaWYodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFsdWUgPSAwXG4gIH1cbiAgc3dpdGNoKHR5cGVvZiBjb3VudCkge1xuICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgIGlmKGNvdW50ID4gMCkge1xuICAgICAgICByZXR1cm4gZHVwZV9udW1iZXIoY291bnR8MCwgdmFsdWUpXG4gICAgICB9XG4gICAgYnJlYWtcbiAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICBpZih0eXBlb2YgKGNvdW50Lmxlbmd0aCkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIGR1cGVfYXJyYXkoY291bnQsIHZhbHVlLCAwKVxuICAgICAgfVxuICAgIGJyZWFrXG4gIH1cbiAgcmV0dXJuIFtdXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHVwZSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY3JlYXRlVW5pZm9ybVdyYXBwZXIgPSByZXF1aXJlKCcuL2xpYi9jcmVhdGUtdW5pZm9ybXMnKVxudmFyIGNyZWF0ZUF0dHJpYnV0ZVdyYXBwZXIgPSByZXF1aXJlKCcuL2xpYi9jcmVhdGUtYXR0cmlidXRlcycpXG52YXIgbWFrZVJlZmxlY3QgPSByZXF1aXJlKCcuL2xpYi9yZWZsZWN0JylcblxuLy9TaGFkZXIgb2JqZWN0XG5mdW5jdGlvbiBTaGFkZXIoZ2wsIHByb2csIHZlcnRTaGFkZXIsIGZyYWdTaGFkZXIpIHtcbiAgdGhpcy5nbCA9IGdsXG4gIHRoaXMuaGFuZGxlID0gcHJvZ1xuICB0aGlzLmF0dHJpYnV0ZXMgPSBudWxsXG4gIHRoaXMudW5pZm9ybXMgPSBudWxsXG4gIHRoaXMudHlwZXMgPSBudWxsXG4gIHRoaXMudmVydGV4U2hhZGVyID0gdmVydFNoYWRlclxuICB0aGlzLmZyYWdtZW50U2hhZGVyID0gZnJhZ1NoYWRlclxufVxuXG4vL0JpbmRzIHRoZSBzaGFkZXJcblNoYWRlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5oYW5kbGUpXG59XG5cbi8vRGVzdHJveSBzaGFkZXIsIHJlbGVhc2UgcmVzb3VyY2VzXG5TaGFkZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGdsID0gdGhpcy5nbFxuICBnbC5kZWxldGVTaGFkZXIodGhpcy52ZXJ0ZXhTaGFkZXIpXG4gIGdsLmRlbGV0ZVNoYWRlcih0aGlzLmZyYWdtZW50U2hhZGVyKVxuICBnbC5kZWxldGVQcm9ncmFtKHRoaXMuaGFuZGxlKVxufVxuXG5TaGFkZXIucHJvdG90eXBlLnVwZGF0ZUV4cG9ydHMgPSBmdW5jdGlvbih1bmlmb3JtcywgYXR0cmlidXRlcykge1xuICB2YXIgbG9jYXRpb25zID0gbmV3IEFycmF5KHVuaWZvcm1zLmxlbmd0aClcbiAgdmFyIHByb2dyYW0gPSB0aGlzLmhhbmRsZVxuICB2YXIgZ2wgPSB0aGlzLmdsXG5cbiAgdmFyIGRvTGluayA9IHJlbGlua1VuaWZvcm1zLmJpbmQodm9pZCAwLFxuICAgIGdsLFxuICAgIHByb2dyYW0sXG4gICAgbG9jYXRpb25zLFxuICAgIHVuaWZvcm1zXG4gIClcbiAgZG9MaW5rKClcblxuICB0aGlzLnR5cGVzID0ge1xuICAgIHVuaWZvcm1zOiBtYWtlUmVmbGVjdCh1bmlmb3JtcyksXG4gICAgYXR0cmlidXRlczogbWFrZVJlZmxlY3QoYXR0cmlidXRlcylcbiAgfVxuXG4gIHRoaXMuYXR0cmlidXRlcyA9IGNyZWF0ZUF0dHJpYnV0ZVdyYXBwZXIoXG4gICAgZ2wsXG4gICAgcHJvZ3JhbSxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIGRvTGlua1xuICApXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd1bmlmb3JtcycsIGNyZWF0ZVVuaWZvcm1XcmFwcGVyKFxuICAgIGdsLFxuICAgIHByb2dyYW0sXG4gICAgdW5pZm9ybXMsXG4gICAgbG9jYXRpb25zXG4gICkpXG59XG5cbi8vUmVsaW5rcyBhbGwgdW5pZm9ybXNcbmZ1bmN0aW9uIHJlbGlua1VuaWZvcm1zKGdsLCBwcm9ncmFtLCBsb2NhdGlvbnMsIHVuaWZvcm1zKSB7XG4gIGZvcih2YXIgaT0wOyBpPHVuaWZvcm1zLmxlbmd0aDsgKytpKSB7XG4gICAgbG9jYXRpb25zW2ldID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHVuaWZvcm1zW2ldLm5hbWUpXG4gIH1cbn1cblxuLy9Db21waWxlcyBhbmQgbGlua3MgYSBzaGFkZXIgcHJvZ3JhbSB3aXRoIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYW5kIHZlcnRleCBsaXN0XG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIoXG4gICAgZ2xcbiAgLCB2ZXJ0U291cmNlXG4gICwgZnJhZ1NvdXJjZVxuICAsIHVuaWZvcm1zXG4gICwgYXR0cmlidXRlcykge1xuICBcbiAgLy9Db21waWxlIHZlcnRleCBzaGFkZXJcbiAgdmFyIHZlcnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUilcbiAgZ2wuc2hhZGVyU291cmNlKHZlcnRTaGFkZXIsIHZlcnRTb3VyY2UpXG4gIGdsLmNvbXBpbGVTaGFkZXIodmVydFNoYWRlcilcbiAgaWYoIWdsLmdldFNoYWRlclBhcmFtZXRlcih2ZXJ0U2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICB2YXIgZXJyTG9nID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyh2ZXJ0U2hhZGVyKVxuICAgIGNvbnNvbGUuZXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgY29tcGxpbmcgdmVydGV4IHNoYWRlcjonLCBlcnJMb2cpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGNvbXBpbGluZyB2ZXJ0ZXggc2hhZGVyOicgKyBlcnJMb2cpXG4gIH1cbiAgXG4gIC8vQ29tcGlsZSBmcmFnbWVudCBzaGFkZXJcbiAgdmFyIGZyYWdTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKVxuICBnbC5zaGFkZXJTb3VyY2UoZnJhZ1NoYWRlciwgZnJhZ1NvdXJjZSlcbiAgZ2wuY29tcGlsZVNoYWRlcihmcmFnU2hhZGVyKVxuICBpZighZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKGZyYWdTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIHZhciBlcnJMb2cgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKGZyYWdTaGFkZXIpXG4gICAgY29uc29sZS5lcnJvcignZ2wtc2hhZGVyOiBFcnJvciBjb21waWxpbmcgZnJhZ21lbnQgc2hhZGVyOicsIGVyckxvZylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgY29tcGlsaW5nIGZyYWdtZW50IHNoYWRlcjonICsgZXJyTG9nKVxuICB9XG4gIFxuICAvL0xpbmsgcHJvZ3JhbVxuICB2YXIgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKVxuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ1NoYWRlcilcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRTaGFkZXIpXG5cbiAgLy9PcHRpb25hbCBkZWZhdWx0IGF0dHJpdWJ0ZSBsb2NhdGlvbnNcbiAgYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcbiAgICBpZiAodHlwZW9mIGEubG9jYXRpb24gPT09ICdudW1iZXInKSBcbiAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBhLmxvY2F0aW9uLCBhLm5hbWUpXG4gIH0pXG5cbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSlcbiAgaWYoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgdmFyIGVyckxvZyA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pXG4gICAgY29uc29sZS5lcnJvcignZ2wtc2hhZGVyOiBFcnJvciBsaW5raW5nIHNoYWRlciBwcm9ncmFtOicsIGVyckxvZylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgbGlua2luZyBzaGFkZXIgcHJvZ3JhbTonICsgZXJyTG9nKVxuICB9XG4gIFxuICAvL1JldHVybiBmaW5hbCBsaW5rZWQgc2hhZGVyIG9iamVjdFxuICB2YXIgc2hhZGVyID0gbmV3IFNoYWRlcihcbiAgICBnbCxcbiAgICBwcm9ncmFtLFxuICAgIHZlcnRTaGFkZXIsXG4gICAgZnJhZ1NoYWRlclxuICApXG4gIHNoYWRlci51cGRhdGVFeHBvcnRzKHVuaWZvcm1zLCBhdHRyaWJ1dGVzKVxuXG4gIHJldHVybiBzaGFkZXJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTaGFkZXJcbiIsIm1vZHVsZS5leHBvcnRzID0gYWRqb2ludDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgICBvdXRbMF0gID0gIChhMTEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICAgIG91dFsxXSAgPSAtKGEwMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gICAgb3V0WzJdICA9ICAoYTAxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbM10gID0gLShhMDEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs0XSAgPSAtKGExMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzVdICA9ICAoYTAwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbNl0gID0gLShhMDAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs3XSAgPSAgKGEwMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTEwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzhdICA9ICAoYTEwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpKTtcbiAgICBvdXRbOV0gID0gLShhMDAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkpO1xuICAgIG91dFsxMF0gPSAgKGEwMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gICAgb3V0WzExXSA9IC0oYTAwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTJdID0gLShhMTAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkpO1xuICAgIG91dFsxM10gPSAgKGEwMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSk7XG4gICAgb3V0WzE0XSA9IC0oYTAwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgICBvdXRbMTVdID0gIChhMDAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIG1hdHJpeCB0byBjbG9uZVxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY29weTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0NCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQ0XG4gKlxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZGV0ZXJtaW5hbnQ7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIHJldHVybiBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVF1YXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gICAgdmFyIHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdLFxuICAgICAgICB4MiA9IHggKyB4LFxuICAgICAgICB5MiA9IHkgKyB5LFxuICAgICAgICB6MiA9IHogKyB6LFxuXG4gICAgICAgIHh4ID0geCAqIHgyLFxuICAgICAgICB5eCA9IHkgKiB4MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHp4ID0geiAqIHgyLFxuICAgICAgICB6eSA9IHogKiB5MixcbiAgICAgICAgenogPSB6ICogejIsXG4gICAgICAgIHd4ID0gdyAqIHgyLFxuICAgICAgICB3eSA9IHcgKiB5MixcbiAgICAgICAgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgICBvdXRbMV0gPSB5eCArIHd6O1xuICAgIG91dFsyXSA9IHp4IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcblxuICAgIG91dFs0XSA9IHl4IC0gd3o7XG4gICAgb3V0WzVdID0gMSAtIHh4IC0geno7XG4gICAgb3V0WzZdID0genkgKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuXG4gICAgb3V0WzhdID0genggKyB3eTtcbiAgICBvdXRbOV0gPSB6eSAtIHd4O1xuICAgIG91dFsxMF0gPSAxIC0geHggLSB5eTtcbiAgICBvdXRbMTFdID0gMDtcblxuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUm90YXRpb25UcmFuc2xhdGlvbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uIGFuZCB2ZWN0b3IgdHJhbnNsYXRpb25cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIHZlYyk7XG4gKiAgICAgdmFyIHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIHF1YXRNYXQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHh5ID0geCAqIHkyLFxuICAgICAgICB4eiA9IHggKiB6MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHl6ID0geSAqIHoyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gICAgb3V0WzFdID0geHkgKyB3ejtcbiAgICBvdXRbMl0gPSB4eiAtIHd5O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0geHkgLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0gKHh4ICsgenopO1xuICAgIG91dFs2XSA9IHl6ICsgd3g7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4eiArIHd5O1xuICAgIG91dFs5XSA9IHl6IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF07XG4gICAgb3V0WzEzXSA9IHZbMV07XG4gICAgb3V0WzE0XSA9IHZbMl07XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcnVzdHVtO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZydXN0dW0gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgcmwgPSAxIC8gKHJpZ2h0IC0gbGVmdCksXG4gICAgICAgIHRiID0gMSAvICh0b3AgLSBib3R0b20pLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gKG5lYXIgKiAyKSAqIHJsO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gKG5lYXIgKiAyKSAqIHRiO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAocmlnaHQgKyBsZWZ0KSAqIHJsO1xuICAgIG91dFs5XSA9ICh0b3AgKyBib3R0b20pICogdGI7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxMV0gPSAtMTtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gKGZhciAqIG5lYXIgKiAyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAwO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cbi8qKlxuICogU2V0IGEgbWF0NCB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpXG4gICwgY2xvbmU6IHJlcXVpcmUoJy4vY2xvbmUnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgaWRlbnRpdHk6IHJlcXVpcmUoJy4vaWRlbnRpdHknKVxuICAsIHRyYW5zcG9zZTogcmVxdWlyZSgnLi90cmFuc3Bvc2UnKVxuICAsIGludmVydDogcmVxdWlyZSgnLi9pbnZlcnQnKVxuICAsIGFkam9pbnQ6IHJlcXVpcmUoJy4vYWRqb2ludCcpXG4gICwgZGV0ZXJtaW5hbnQ6IHJlcXVpcmUoJy4vZGV0ZXJtaW5hbnQnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCB0cmFuc2xhdGU6IHJlcXVpcmUoJy4vdHJhbnNsYXRlJylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgcm90YXRlOiByZXF1aXJlKCcuL3JvdGF0ZScpXG4gICwgcm90YXRlWDogcmVxdWlyZSgnLi9yb3RhdGVYJylcbiAgLCByb3RhdGVZOiByZXF1aXJlKCcuL3JvdGF0ZVknKVxuICAsIHJvdGF0ZVo6IHJlcXVpcmUoJy4vcm90YXRlWicpXG4gICwgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb246IHJlcXVpcmUoJy4vZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24nKVxuICAsIGZyb21RdWF0OiByZXF1aXJlKCcuL2Zyb21RdWF0JylcbiAgLCBmcnVzdHVtOiByZXF1aXJlKCcuL2ZydXN0dW0nKVxuICAsIHBlcnNwZWN0aXZlOiByZXF1aXJlKCcuL3BlcnNwZWN0aXZlJylcbiAgLCBvcnRobzogcmVxdWlyZSgnLi9vcnRobycpXG4gICwgbG9va0F0OiByZXF1aXJlKCcuL2xvb2tBdCcpXG4gICwgc3RyOiByZXF1aXJlKCcuL3N0cicpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnQ7XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyLFxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICAgICAgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gICAgaWYgKCFkZXQpIHsgXG4gICAgICAgIHJldHVybiBudWxsOyBcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGxvb2tBdDtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7dmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7dmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxuICogQHBhcmFtIHt2ZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICAgIHZhciB4MCwgeDEsIHgyLCB5MCwgeTEsIHkyLCB6MCwgejEsIHoyLCBsZW4sXG4gICAgICAgIGV5ZXggPSBleWVbMF0sXG4gICAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgICB1cHkgPSB1cFsxXSxcbiAgICAgICAgdXB6ID0gdXBbMl0sXG4gICAgICAgIGNlbnRlcnggPSBjZW50ZXJbMF0sXG4gICAgICAgIGNlbnRlcnkgPSBjZW50ZXJbMV0sXG4gICAgICAgIGNlbnRlcnogPSBjZW50ZXJbMl07XG5cbiAgICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpIDwgMC4wMDAwMDEgJiZcbiAgICAgICAgTWF0aC5hYnMoZXlleSAtIGNlbnRlcnkpIDwgMC4wMDAwMDEgJiZcbiAgICAgICAgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgMC4wMDAwMDEpIHtcbiAgICAgICAgcmV0dXJuIG1hdDQuaWRlbnRpdHkob3V0KTtcbiAgICB9XG5cbiAgICB6MCA9IGV5ZXggLSBjZW50ZXJ4O1xuICAgIHoxID0gZXlleSAtIGNlbnRlcnk7XG4gICAgejIgPSBleWV6IC0gY2VudGVyejtcblxuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQoejAgKiB6MCArIHoxICogejEgKyB6MiAqIHoyKTtcbiAgICB6MCAqPSBsZW47XG4gICAgejEgKj0gbGVuO1xuICAgIHoyICo9IGxlbjtcblxuICAgIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejI7XG4gICAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICAgIGxlbiA9IE1hdGguc3FydCh4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDIpO1xuICAgIGlmICghbGVuKSB7XG4gICAgICAgIHgwID0gMDtcbiAgICAgICAgeDEgPSAwO1xuICAgICAgICB4MiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIGxlbjtcbiAgICAgICAgeDAgKj0gbGVuO1xuICAgICAgICB4MSAqPSBsZW47XG4gICAgICAgIHgyICo9IGxlbjtcbiAgICB9XG5cbiAgICB5MCA9IHoxICogeDIgLSB6MiAqIHgxO1xuICAgIHkxID0gejIgKiB4MCAtIHowICogeDI7XG4gICAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcblxuICAgIGxlbiA9IE1hdGguc3FydCh5MCAqIHkwICsgeTEgKiB5MSArIHkyICogeTIpO1xuICAgIGlmICghbGVuKSB7XG4gICAgICAgIHkwID0gMDtcbiAgICAgICAgeTEgPSAwO1xuICAgICAgICB5MiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIGxlbjtcbiAgICAgICAgeTAgKj0gbGVuO1xuICAgICAgICB5MSAqPSBsZW47XG4gICAgICAgIHkyICo9IGxlbjtcbiAgICB9XG5cbiAgICBvdXRbMF0gPSB4MDtcbiAgICBvdXRbMV0gPSB5MDtcbiAgICBvdXRbMl0gPSB6MDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHgxO1xuICAgIG91dFs1XSA9IHkxO1xuICAgIG91dFs2XSA9IHoxO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0geDI7XG4gICAgb3V0WzldID0geTI7XG4gICAgb3V0WzEwXSA9IHoyO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gICAgb3V0WzEzXSA9IC0oeTAgKiBleWV4ICsgeTEgKiBleWV5ICsgeTIgKiBleWV6KTtcbiAgICBvdXRbMTRdID0gLSh6MCAqIGV5ZXggKyB6MSAqIGV5ZXkgKyB6MiAqIGV5ZXopO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQ0J3NcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gICAgLy8gQ2FjaGUgb25seSB0aGUgY3VycmVudCBsaW5lIG9mIHRoZSBzZWNvbmQgbWF0cml4XG4gICAgdmFyIGIwICA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM107ICBcbiAgICBvdXRbMF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzFdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsyXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbM10gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbNF07IGIxID0gYls1XTsgYjIgPSBiWzZdOyBiMyA9IGJbN107XG4gICAgb3V0WzRdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFs1XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbNl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzddID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzhdOyBiMSA9IGJbOV07IGIyID0gYlsxMF07IGIzID0gYlsxMV07XG4gICAgb3V0WzhdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFs5XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMTBdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFsxMV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbMTJdOyBiMSA9IGJbMTNdOyBiMiA9IGJbMTRdOyBiMyA9IGJbMTVdO1xuICAgIG91dFsxMl0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzEzXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMTRdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFsxNV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBvcnRobztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBvcnRobyhvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGxyID0gMSAvIChsZWZ0IC0gcmlnaHQpLFxuICAgICAgICBidCA9IDEgLyAoYm90dG9tIC0gdG9wKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IC0yICogbHI7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAtMiAqIGJ0O1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gKGxlZnQgKyByaWdodCkgKiBscjtcbiAgICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgICBvdXRbMTRdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBwZXJzcGVjdGl2ZTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZShvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMiksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gZjtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTFdID0gLTE7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9ICgyICogZmFyICogbmVhcikgKiBuZjtcbiAgICBvdXRbMTVdID0gMDtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZTtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGVcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkLCBheGlzKSB7XG4gICAgdmFyIHggPSBheGlzWzBdLCB5ID0gYXhpc1sxXSwgeiA9IGF4aXNbMl0sXG4gICAgICAgIGxlbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopLFxuICAgICAgICBzLCBjLCB0LFxuICAgICAgICBhMDAsIGEwMSwgYTAyLCBhMDMsXG4gICAgICAgIGExMCwgYTExLCBhMTIsIGExMyxcbiAgICAgICAgYTIwLCBhMjEsIGEyMiwgYTIzLFxuICAgICAgICBiMDAsIGIwMSwgYjAyLFxuICAgICAgICBiMTAsIGIxMSwgYjEyLFxuICAgICAgICBiMjAsIGIyMSwgYjIyO1xuXG4gICAgaWYgKE1hdGguYWJzKGxlbikgPCAwLjAwMDAwMSkgeyByZXR1cm4gbnVsbDsgfVxuICAgIFxuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeCAqPSBsZW47XG4gICAgeSAqPSBsZW47XG4gICAgeiAqPSBsZW47XG5cbiAgICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgICB0ID0gMSAtIGM7XG5cbiAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgLy8gQ29uc3RydWN0IHRoZSBlbGVtZW50cyBvZiB0aGUgcm90YXRpb24gbWF0cml4XG4gICAgYjAwID0geCAqIHggKiB0ICsgYzsgYjAxID0geSAqIHggKiB0ICsgeiAqIHM7IGIwMiA9IHogKiB4ICogdCAtIHkgKiBzO1xuICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzOyBiMTEgPSB5ICogeSAqIHQgKyBjOyBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogczsgYjIxID0geSAqIHogKiB0IC0geCAqIHM7IGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgICBvdXRbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XG4gICAgb3V0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xuICAgIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgICBvdXRbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTI7XG4gICAgb3V0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyO1xuICAgIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgICBvdXRbN10gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTI7XG4gICAgb3V0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xuICAgIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgICBvdXRbMTBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyO1xuICAgIG91dFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVYO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgICAgICBvdXRbMF0gID0gYVswXTtcbiAgICAgICAgb3V0WzFdICA9IGFbMV07XG4gICAgICAgIG91dFsyXSAgPSBhWzJdO1xuICAgICAgICBvdXRbM10gID0gYVszXTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbNF0gPSBhMTAgKiBjICsgYTIwICogcztcbiAgICBvdXRbNV0gPSBhMTEgKiBjICsgYTIxICogcztcbiAgICBvdXRbNl0gPSBhMTIgKiBjICsgYTIyICogcztcbiAgICBvdXRbN10gPSBhMTMgKiBjICsgYTIzICogcztcbiAgICBvdXRbOF0gPSBhMjAgKiBjIC0gYTEwICogcztcbiAgICBvdXRbOV0gPSBhMjEgKiBjIC0gYTExICogcztcbiAgICBvdXRbMTBdID0gYTIyICogYyAtIGExMiAqIHM7XG4gICAgb3V0WzExXSA9IGEyMyAqIGMgLSBhMTMgKiBzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWTtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdLFxuICAgICAgICBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICAgICAgb3V0WzRdICA9IGFbNF07XG4gICAgICAgIG91dFs1XSAgPSBhWzVdO1xuICAgICAgICBvdXRbNl0gID0gYVs2XTtcbiAgICAgICAgb3V0WzddICA9IGFbN107XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYyAtIGEyMCAqIHM7XG4gICAgb3V0WzFdID0gYTAxICogYyAtIGEyMSAqIHM7XG4gICAgb3V0WzJdID0gYTAyICogYyAtIGEyMiAqIHM7XG4gICAgb3V0WzNdID0gYTAzICogYyAtIGEyMyAqIHM7XG4gICAgb3V0WzhdID0gYTAwICogcyArIGEyMCAqIGM7XG4gICAgb3V0WzldID0gYTAxICogcyArIGEyMSAqIGM7XG4gICAgb3V0WzEwXSA9IGEwMiAqIHMgKyBhMjIgKiBjO1xuICAgIG91dFsxMV0gPSBhMDMgKiBzICsgYTIzICogYztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVo7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICAgICAgb3V0WzhdICA9IGFbOF07XG4gICAgICAgIG91dFs5XSAgPSBhWzldO1xuICAgICAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBjICsgYTEwICogcztcbiAgICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgICBvdXRbMl0gPSBhMDIgKiBjICsgYTEyICogcztcbiAgICBvdXRbM10gPSBhMDMgKiBjICsgYTEzICogcztcbiAgICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgICBvdXRbNV0gPSBhMTEgKiBjIC0gYTAxICogcztcbiAgICBvdXRbNl0gPSBhMTIgKiBjIC0gYTAyICogcztcbiAgICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlO1xuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjM1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHt2ZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cbmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICAgIHZhciB4ID0gdlswXSwgeSA9IHZbMV0sIHogPSB2WzJdO1xuXG4gICAgb3V0WzBdID0gYVswXSAqIHg7XG4gICAgb3V0WzFdID0gYVsxXSAqIHg7XG4gICAgb3V0WzJdID0gYVsyXSAqIHg7XG4gICAgb3V0WzNdID0gYVszXSAqIHg7XG4gICAgb3V0WzRdID0gYVs0XSAqIHk7XG4gICAgb3V0WzVdID0gYVs1XSAqIHk7XG4gICAgb3V0WzZdID0gYVs2XSAqIHk7XG4gICAgb3V0WzddID0gYVs3XSAqIHk7XG4gICAgb3V0WzhdID0gYVs4XSAqIHo7XG4gICAgb3V0WzldID0gYVs5XSAqIHo7XG4gICAgb3V0WzEwXSA9IGFbMTBdICogejtcbiAgICBvdXRbMTFdID0gYVsxMV0gKiB6O1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHN0cjtcblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gbWF0IG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIHN0cihhKSB7XG4gICAgcmV0dXJuICdtYXQ0KCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgKyBhWzNdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbNF0gKyAnLCAnICsgYVs1XSArICcsICcgKyBhWzZdICsgJywgJyArIGFbN10gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgYVs4XSArICcsICcgKyBhWzldICsgJywgJyArIGFbMTBdICsgJywgJyArIGFbMTFdICsgJywgJyArIFxuICAgICAgICAgICAgICAgICAgICBhWzEyXSArICcsICcgKyBhWzEzXSArICcsICcgKyBhWzE0XSArICcsICcgKyBhWzE1XSArICcpJztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2xhdGU7XG5cbi8qKlxuICogVHJhbnNsYXRlIGEgbWF0NCBieSB0aGUgZ2l2ZW4gdmVjdG9yXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMzfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICAgIHZhciB4ID0gdlswXSwgeSA9IHZbMV0sIHogPSB2WzJdLFxuICAgICAgICBhMDAsIGEwMSwgYTAyLCBhMDMsXG4gICAgICAgIGExMCwgYTExLCBhMTIsIGExMyxcbiAgICAgICAgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gICAgaWYgKGEgPT09IG91dCkge1xuICAgICAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMl0gKiB4ICsgYVs2XSAqIHkgKyBhWzEwXSAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgICAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgICAgICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzBdID0gYTAwOyBvdXRbMV0gPSBhMDE7IG91dFsyXSA9IGEwMjsgb3V0WzNdID0gYTAzO1xuICAgICAgICBvdXRbNF0gPSBhMTA7IG91dFs1XSA9IGExMTsgb3V0WzZdID0gYTEyOyBvdXRbN10gPSBhMTM7XG4gICAgICAgIG91dFs4XSA9IGEyMDsgb3V0WzldID0gYTIxOyBvdXRbMTBdID0gYTIyOyBvdXRbMTFdID0gYTIzO1xuXG4gICAgICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zcG9zZTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gICAgaWYgKG91dCA9PT0gYSkge1xuICAgICAgICB2YXIgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgICAgIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYTAxO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYTAyO1xuICAgICAgICBvdXRbOV0gPSBhMTI7XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGEwMztcbiAgICAgICAgb3V0WzEzXSA9IGExMztcbiAgICAgICAgb3V0WzE0XSA9IGEyMztcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRbMF0gPSBhWzBdO1xuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYVsxXTtcbiAgICAgICAgb3V0WzVdID0gYVs1XTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGFbMl07XG4gICAgICAgIG91dFs5XSA9IGFbNl07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYVszXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbN107XG4gICAgICAgIG91dFsxNF0gPSBhWzExXTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gb3V0O1xufTsiLCJ2YXIgQmFzZSA9IHJlcXVpcmUoJ2ZvbnRwYXRoLXNpbXBsZS1yZW5kZXJlcicpXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG52YXIgYm1mb250MmZvbnRwYXRoID0gcmVxdWlyZSgnZm9udHBhdGgtYm1mb250JylcbnZhciB0ZXhjb29yZCA9IHJlcXVpcmUoJ3RleGNvb3JkJylcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBjcmVhdGVUZXh0dXJlID0gcmVxdWlyZSgnZ2wtdGV4dHVyZTJkJylcblxudmFyIEJhdGNoID0gcmVxdWlyZSgnZ2wtc3ByaXRlLWJhdGNoJylcblxudmFyIHRtcFBvcyA9IFswLCAwXSxcbiAgICB0bXBTaGFwZSA9IFswLCAwXSxcbiAgICB0bXAxID0gWzAsIDBdLFxuICAgIHRtcDIgPSBbMCwgMF1cbnZhciBERUZBVUxUX1RFWENPT1JEID0gWzAsIDAsIDEsIDFdXG52YXIgbWF4SW5pdGlhbENhcGFjaXR5ID0gNTAwXG5cbmZ1bmN0aW9uIHRleGNvb3JkR2x5cGgoZ2x5cGgsIGF0bGFzLCBvdXQpIHtcbiAgICB0bXAxWzBdID0gZ2x5cGgueFxuICAgIHRtcDFbMV0gPSBnbHlwaC55XG4gICAgdG1wMlswXSA9IGdseXBoLndpZHRoXG4gICAgdG1wMlsxXSA9IGdseXBoLmhlaWdodFxuICAgIHJldHVybiB0ZXhjb29yZCh0bXAxLCB0bXAyLCBhdGxhcywgb3V0KVxufVxuXG5mdW5jdGlvbiBUZXh0UmVuZGVyZXIoZ2wsIG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUZXh0UmVuZGVyZXIpKVxuICAgICAgICByZXR1cm4gbmV3IFRleHRSZW5kZXJlcihnbCwgb3B0KVxuICAgIG9wdCA9IG9wdHx8e31cblxuICAgIGlmICghb3B0LmZvbnQpIFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3Qgc3BlY2lmeSBibWZvbnQgYXQgY3JlYXRpb24gdGltZScpXG5cbiAgICAvL2lmIHRoZSBmb250IGhhcyBJbWFnZS9uZGFycmF5IGFycmF5XG4gICAgaWYgKCFvcHQudGV4dHVyZXMgJiYgQXJyYXkuaXNBcnJheShvcHQuZm9udC5pbWFnZXMpKSB7XG4gICAgICAgIG9wdC50ZXh0dXJlcyA9IG9wdC5mb250LmltYWdlcy5tYXAoZnVuY3Rpb24oaW1nKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlVGV4dHVyZShnbCwgaW1nKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9wdC5mb250ID0gYm1mb250MmZvbnRwYXRoKG9wdC5mb250KVxuXG4gICAgQmFzZS5jYWxsKHRoaXMsIG9wdClcblxuICAgIHRoaXMudGV4dHVyZXMgPSBvcHQudGV4dHVyZXMgfHwgW11cbiAgICB0aGlzLmdsID0gZ2xcbiAgICBpZiAoIWdsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtdXN0IHNwZWNpZnkgZ2wgY29udGV4dFwiKVxuICAgIFxuICAgIC8vYXNzdW1lIHRleHQgd2lsbCBiZSB1c2VkIGR5bmFtaWNhbGx5IFxuICAgIGlmICh0eXBlb2Ygb3B0LmR5bmFtaWMgIT09ICdib29sZWFuJylcbiAgICAgICAgb3B0LmR5bmFtaWMgPSB0cnVlXG5cbiAgICB2YXIgYmF0Y2ggPSBvcHQuYmF0Y2hcbiAgICBpZiAoIWJhdGNoKVxuICAgICAgICB0aGlzLmRlZmF1bHRCYXRjaCA9IEJhdGNoKGdsLCBvcHQpXG4gICAgdGhpcy5iYXRjaCA9IGJhdGNoIHx8IHRoaXMuZGVmYXVsdEJhdGNoXG5cbiAgICBpZiAodHlwZW9mIG9wdC53cmFwV2lkdGggIT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLmxheW91dCgpXG59XG5cbmluaGVyaXRzKFRleHRSZW5kZXJlciwgQmFzZSlcblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24odGV4dHVyZXMpIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0QmF0Y2gpXG4gICAgICAgIHRoaXMuZGVmYXVsdEJhdGNoLmRpc3Bvc2UoKVxuICAgIGlmICh0ZXh0dXJlcykge1xuICAgICAgICB0aGlzLnRleHR1cmVzLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0LmRpc3Bvc2UgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgdC5kaXNwb3NlKClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS51bmNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY2FjaGUgPSBmYWxzZVxuICAgIHRoaXMuYmF0Y2guY2xlYXIoKVxuICAgIHJldHVybiB0aGlzXG59XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuY2FjaGUgPSBmdW5jdGlvbih4LCB5LCBzdGFydCwgZW5kKSB7XG4gICAgLy8gaWYgKHRoaXMudW5kZXJsaW5lIHx8IHRoaXMuZm9udC5wYWdlcy5sZW5ndGggPiAxKVxuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N1cnJlbnRseSBjYWNoZWQgdGV4dCBkb2VzIG5vdCBzdXBwb3J0IHVuZGVybGluZXMgb3IgbXVsdGlwbGUgdGV4dHVyZSBwYWdlcycpXG4gICAgXG4gICAgdGhpcy5fY2FjaGUgPSB0cnVlXG4gICAgdGhpcy5iYXRjaC5lbnN1cmVDYXBhY2l0eSh0aGlzLnRleHQubGVuZ3RoKVxuICAgIHRoaXMuYmF0Y2guY2xlYXIoKVxuICAgIHRoaXMuX2J1aWxkKHgsIHksIHN0YXJ0LCBlbmQpXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oc2hhZGVyLCB4LCB5LCBzdGFydCwgZW5kKSB7XG4gICAgdmFyIGJhdGNoID0gdGhpcy5iYXRjaFxuICAgIGJhdGNoLmJpbmQoc2hhZGVyKVxuXG4gICAgLy9pZiB3ZSdyZSBkcmF3aW5nIGR5bmFtaWNhbGx5XG4gICAgaWYgKCF0aGlzLl9jYWNoZSkge1xuICAgICAgICBiYXRjaC5jbGVhcigpXG4gICAgICAgIHRoaXMuX2J1aWxkKHgsIHksIHN0YXJ0LCBlbmQpXG4gICAgfVxuICAgIFxuICAgIGJhdGNoLmRyYXcoKVxuICAgIGJhdGNoLnVuYmluZCgpXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5fYnVpbGQgPSBmdW5jdGlvbih4LCB5LCBzdGFydCwgZW5kKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMucmVuZGVyKHgsIHksIHN0YXJ0LCBlbmQpXG5cbiAgICB2YXIgYmF0Y2ggPSB0aGlzLmJhdGNoXG5cbiAgICAvL3VuZGVybGluZXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgd2l0aCBjYWNoZSgpXG4gICAgaWYgKCF0aGlzLl9jYWNoZSkge1xuICAgICAgICBiYXRjaC50ZXhjb29yZCA9IERFRkFVTFRfVEVYQ09PUkRcbiAgICAgICAgYmF0Y2gudGV4dHVyZSA9IG51bGxcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVzdWx0LnVuZGVybGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB1bmRlcmxpbmUgPSByZXN1bHQudW5kZXJsaW5lc1tpXVxuICAgICAgICAgICAgYmF0Y2gucG9zaXRpb24gPSB1bmRlcmxpbmUucG9zaXRpb25cbiAgICAgICAgICAgIGJhdGNoLnNoYXBlID0gdW5kZXJsaW5lLnNpemVcbiAgICAgICAgICAgIGJhdGNoLnB1c2goKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9ub3cgZHJhdyBvdXIgZ2x5cGhzIGludG8gdGhlIGJhdGNoLi4uXG4gICAgZm9yIChpID0gMDsgaSA8IHJlc3VsdC5nbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGcgPSByZXN1bHQuZ2x5cGhzW2ldXG4gICAgICAgIHRoaXMuX2RyYXdHbHlwaChiYXRjaCwgZylcbiAgICB9XG59XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuX2RyYXdHbHlwaCA9IGZ1bmN0aW9uKGJhdGNoLCBkYXRhKSB7XG4gICAgLy8uLi4gd2UgY291bGQgc29ydCB0aGVzZSBieSB0ZXh0dXJlIHBhZ2UgdG8gcmVkdWNlIGRyYXdzXG4gICAgdmFyIGdseXBoID0gZGF0YS5nbHlwaFxuICAgIHZhciBpbWcgPSB0aGlzLnRleHR1cmVzW2dseXBoLnBhZ2VdXG4gICAgdG1wUG9zWzBdID0gZGF0YS5wb3NpdGlvblswXStnbHlwaC5oYnhcbiAgICB0bXBQb3NbMV0gPSBkYXRhLnBvc2l0aW9uWzFdK2dseXBoLmhieSAtIHRoaXMuZm9udC5kZXNjZW5kZXJcbiAgICB0bXBTaGFwZVswXSA9IGdseXBoLndpZHRoICogZGF0YS5zY2FsZVswXVxuICAgIHRtcFNoYXBlWzFdID0gZ2x5cGguaGVpZ2h0ICogZGF0YS5zY2FsZVsxXVxuICAgIFxuICAgIGJhdGNoLnRleHR1cmUgPSBpbWdcbiAgICB0ZXhjb29yZEdseXBoKGdseXBoLCBpbWcgJiYgaW1nLnNoYXBlLCBiYXRjaC50ZXhjb29yZClcbiAgICBiYXRjaC5wb3NpdGlvbiA9IHRtcFBvc1xuICAgIGJhdGNoLnNoYXBlID0gdG1wU2hhcGVcbiAgICBiYXRjaC5wdXNoKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0UmVuZGVyZXIiLCJmdW5jdGlvbiBnbHlwaChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZTogZGF0YS5wYWdlLFxuICAgICAgICBoYng6IGRhdGEueG9mZnNldCxcbiAgICAgICAgaGJ5OiBkYXRhLnlvZmZzZXQsXG4gICAgICAgIHdpZHRoOiBkYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRhdGEuaGVpZ2h0LFxuICAgICAgICB4b2ZmOiBkYXRhLnhhZHZhbmNlLFxuICAgICAgICB4OiBkYXRhLngsXG4gICAgICAgIHk6IGRhdGEueVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2x5cGhzKGNoYXJzKSB7XG4gICAgdmFyIG91dCA9IHt9XG4gICAgY2hhcnMuZm9yRWFjaChmdW5jdGlvbihjKSB7XG4gICAgICAgIG91dFtTdHJpbmcuZnJvbUNoYXJDb2RlKGMuaWQpXSA9IGdseXBoKGMpXG4gICAgfSlcbiAgICByZXR1cm4gb3V0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYm1mb250KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZXM6IGJtZm9udC5wYWdlcyxcbiAgICAgICAgcmVzb2x1dGlvbjogNzIsXG4gICAgICAgIHNpemU6IGJtZm9udC5pbmZvLnNpemUsXG4gICAgICAgIHVuaXRzX3Blcl9FTTogMSxcbiAgICAgICAgYml0bWFwOiB0cnVlLFxuICAgICAgICBmYW1pbHlfbmFtZTogYm1mb250LmluZm8uZmFjZSxcbiAgICAgICAgaGVpZ2h0OiBibWZvbnQuY29tbW9uLmxpbmVIZWlnaHQsXG4gICAgICAgIGRlc2NlbmRlcjogYm1mb250LmNvbW1vbi5iYXNlLFxuICAgICAgICBhc2NlbmRlcjogYm1mb250LmNvbW1vbi5iYXNlLFxuICAgICAgICBnbHlwaHM6IGdseXBocyhibWZvbnQuY2hhcnMpLFxuICAgICAgICBrZXJuaW5nOiBibWZvbnQua2VybmluZ3MubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgIHJldHVybiBbU3RyaW5nLmZyb21DaGFyQ29kZShrLmZpcnN0KSxTdHJpbmcuZnJvbUNoYXJDb2RlKGsuc2Vjb25kKSxrLmFtb3VudF1cbiAgICAgICAgfSlcbiAgICB9XG59IiwidmFyIEJhc2UgPSByZXF1aXJlKCdmb250cGF0aC1yZW5kZXJlcicpXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG5cbi8vVE9ETzogRXZlbnR1YWxseSBsb3RzIG9mIHRoaXMgY29kZSB3aWxsIGp1c3QgcmVwbGFjZSBmb250cGF0aC1yZW5kZXJlci4uLlxuXG5mdW5jdGlvbiBGb250cGF0aFJlbmRlcmVyKG9wdGlvbnMpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRm9udHBhdGhSZW5kZXJlcikpXG4gICAgICAgIHJldHVybiBuZXcgRm9udHBhdGhSZW5kZXJlcihvcHRpb25zKVxuICAgIEJhc2UuY2FsbCh0aGlzLCBvcHRpb25zKVxuXG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgICBnbHlwaHM6IFtdLFxuICAgICAgICB1bmRlcmxpbmVzOiBbXVxuICAgIH1cbn1cblxuaW5oZXJpdHMoRm9udHBhdGhSZW5kZXJlciwgQmFzZSlcblxuRm9udHBhdGhSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyR2x5cGggPSBmdW5jdGlvbihpLCBnbHlwaCwgc2NhbGUsIHgsIHkpIHtcbiAgICB0aGlzLmRhdGEuZ2x5cGhzLnB1c2gobmV3IEdseXBoKGksIGdseXBoLCBcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQuY2hhckNvZGVBdChpKSwgXG4gICAgICAgICAgICAgICAgWyBzY2FsZSwgdGhpcy5mb250LmJpdG1hcCA/IHNjYWxlIDogLXNjYWxlIF0sXG4gICAgICAgICAgICAgICAgWyB4LCB5IF0pKVxufVxuXG5Gb250cGF0aFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJVbmRlcmxpbmUgPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5kYXRhLnVuZGVybGluZXMucHVzaChuZXcgVW5kZXJsaW5lKFxuICAgICAgICBbIHgsIHkgXSxcbiAgICAgICAgWyB3aWR0aCwgaGVpZ2h0IF1cbiAgICApKVxufVxuXG5Gb250cGF0aFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbih4LCB5LCBzdGFydCwgZW5kKSB7XG4gICAgLy9uZXcgZGF0YSBmb3IgcmVzdWx0XG4gICAgdGhpcy5kYXRhLmdseXBocy5sZW5ndGggPSAwXG4gICAgdGhpcy5kYXRhLnVuZGVybGluZXMubGVuZ3RoID0gMFxuICAgIEJhc2UucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMsIHgsIHksIHN0YXJ0LCBlbmQpXG4gICAgcmV0dXJuIHRoaXMuZGF0YVxufVxuXG5mdW5jdGlvbiBHbHlwaChpbmRleCwgZ2x5cGgsIGNoYXJDb2RlLCBzY2FsZSwgcG9zaXRpb24pIHtcbiAgICB0aGlzLmdseXBoID0gZ2x5cGhcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmNoYXJDb2RlID0gY2hhckNvZGVcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNjYWxlID0gc2NhbGVcbn1cblxuZnVuY3Rpb24gVW5kZXJsaW5lKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvbnRwYXRoUmVuZGVyZXIiLCJ2YXIgR2x5cGhJdGVyYXRvciA9IHJlcXVpcmUoJ2ZvbnRwYXRoLWdseXBoLWl0ZXJhdG9yJyk7XG52YXIgV29yZFdyYXAgPSByZXF1aXJlKCdmb250cGF0aC13b3Jkd3JhcCcpO1xuXG52YXIgdG1wQm91bmRzID0geyB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwLCBnbHlwaHM6IDAgfTtcblxuZnVuY3Rpb24gVGV4dFJlbmRlcmVyKG9wdGlvbnMpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGV4dFJlbmRlcmVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0UmVuZGVyZXIob3B0aW9ucyk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnN8fHt9XG5cbiAgICB0aGlzLml0ZXJhdG9yID0gbmV3IEdseXBoSXRlcmF0b3Iob3B0aW9ucy5mb250LCBvcHRpb25zLmZvbnRTaXplKTtcbiAgICB0aGlzLndvcmR3cmFwID0gbmV3IFdvcmRXcmFwKCk7XG5cbiAgICB0aGlzLmFsaWduID0gJ2xlZnQnO1xuICAgIHRoaXMudW5kZXJsaW5lID0gZmFsc2U7XG5cbiAgICB0aGlzLnVuZGVybGluZVRoaWNrbmVzcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVuZGVybGluZVBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3RleHQgPSBcIlwiO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmFsaWduID09PSAnc3RyaW5nJylcbiAgICAgICAgdGhpcy5hbGlnbiA9IG9wdGlvbnMuYWxpZ247XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnVuZGVybGluZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICB0aGlzLnVuZGVybGluZSA9IG9wdGlvbnMudW5kZXJsaW5lO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51bmRlcmxpbmVUaGlja25lc3MgPT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLnVuZGVybGluZVRoaWNrbmVzcyA9IG9wdGlvbnMudW5kZXJsaW5lVGhpY2tuZXNzO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51bmRlcmxpbmVQb3NpdGlvbiA9PT0gJ251bWJlcicpXG4gICAgICAgIHRoaXMudW5kZXJsaW5lUG9zaXRpb24gPSBvcHRpb25zLnVuZGVybGluZVBvc2l0aW9uO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50ZXh0ID09PSAnc3RyaW5nJylcbiAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5saW5lSGVpZ2h0ID09PSAnbnVtYmVyJylcbiAgICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gb3B0aW9ucy5saW5lSGVpZ2h0O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID09PSAnbnVtYmVyJylcbiAgICAgICAgdGhpcy5sZXR0ZXJTcGFjaW5nID0gb3B0aW9ucy5sZXR0ZXJTcGFjaW5nO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53cmFwTW9kZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHRoaXMud29yZHdyYXAubW9kZSA9IG9wdGlvbnMud3JhcE1vZGU7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyYXBXaWR0aCA9PT0gJ251bWJlcicpXG4gICAgICAgIHRoaXMubGF5b3V0KG9wdGlvbnMud3JhcFdpZHRoKTtcbn1cblxuLy9JbnRlcm5hbGx5IHdlIHdpbGwgdXNlIGludGVnZXJzIHRvIGF2b2lkIHN0cmluZyBjb21wYXJpc29uIGZvciBlYWNoIGdseXBoXG52YXIgTEVGVF9BTElHTiA9IDAsIENFTlRFUl9BTElHTiA9IDEsIFJJR0hUX0FMSUdOID0gMjtcbnZhciBBTElHTl9BUlJBWSA9IFtcbiAgICAnbGVmdCcsIFxuICAgICdjZW50ZXInLCBcbiAgICAncmlnaHQnXG5dO1xuICAgIFxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVGV4dFJlbmRlcmVyLnByb3RvdHlwZSwge1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBuZXcgZm9udCBkaWZmZXJzIGZyb20gdGhlIGxhc3QsIHRoZSB0ZXh0IGxheW91dCBpcyBjbGVhcmVkXG4gICAgICogYW5kIHBsYWNlZCBvbnRvIGEgc2luZ2xlIGxpbmUuIFVzZXJzIG11c3QgbWFudWFsbHkgcmUtbGF5b3V0IHRoZSB0ZXh0IFxuICAgICAqIGZvciB3b3JkIHdyYXBwaW5nLlxuICAgICAqL1xuICAgIFwiZm9udFwiOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvci5mb250O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgdmFyIG9sZEZvbnQgPSB0aGlzLml0ZXJhdG9yLmZvbnQ7XG4gICAgICAgICAgICB0aGlzLml0ZXJhdG9yLmZvbnQgPSB2YWw7XG4gICAgICAgICAgICBpZiAob2xkRm9udCAhPT0gdGhpcy5pdGVyYXRvci5mb250KVxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJMYXlvdXQoKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIG5ldyBmb250IHNpemUgZGlmZmVycyBmcm9tIHRoZSBsYXN0LCB0aGUgdGV4dCBsYXlvdXQgaXMgY2xlYXJlZFxuICAgICAqIGFuZCBwbGFjZWQgb250byBhIHNpbmdsZSBsaW5lLiBVc2VycyBtdXN0IG1hbnVhbGx5IHJlLWxheW91dCB0aGUgdGV4dCBcbiAgICAgKiBmb3Igd29yZCB3cmFwcGluZy5cbiAgICAgKi9cbiAgICBcImZvbnRTaXplXCI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yLmZvbnRTaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgdmFyIG9sZFNpemUgPSB0aGlzLml0ZXJhdG9yLmZvbnRTaXplO1xuXG4gICAgICAgICAgICB0aGlzLml0ZXJhdG9yLmZvbnRTaXplID0gdmFsO1xuXG4gICAgICAgICAgICBpZiAob2xkU2l6ZSAhPT0gdGhpcy5pdGVyYXRvci5mb250U2l6ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyTGF5b3V0KCk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3IubGluZUhlaWdodDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IubGluZUhlaWdodCA9IHZhbDtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibGV0dGVyU3BhY2luZ1wiOiB7XG4gICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3IubGV0dGVyU3BhY2luZztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IubGV0dGVyU3BhY2luZyA9IHZhbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIG5ldyB0ZXh0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBsYXN0LCB0aGUgbGF5b3V0IChpLmUuIHdvcmQtd3JhcHBpbmcpXG4gICAgICogaXMgY2xlYXJlZCBhbmQgdGhlIHJlc3VsdCBpcyBhIHNpbmdsZSBsaW5lIG9mIHRleHQgKHNpbWlsYXIgdG8gSFRNTDUgY2FudmFzIHRleHRcbiAgICAgKiByZW5kZXJpbmcpLlxuICAgICAqIFxuICAgICAqIFRoZSB0ZXh0IHRoZW4gbmVlZHMgdG8gYmUgcmUtd29yZHdyYXBwZWQgd2l0aCBhIGNhbGwgdG8gYGxheW91dCgpYC5cbiAgICAgKi9cbiAgICBcInRleHRcIjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dHx8XCJcIjtcblxuICAgICAgICAgICAgdmFyIG9sZCA9IHRoaXMuX3RleHQ7XG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICAgICAgICAgIHRoaXMud29yZHdyYXAudGV4dCA9IHRoaXMudGV4dDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3RleHQgIT09IG9sZCkgXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckxheW91dCgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8qKlxuICogQ2xlYXJzIHRoZSB0ZXh0IGxheW91dCBhbmQgd29yZC13cmFwcGluZywgcGxhY2luZyBhbGwgb2YgaXQgb24gYSBzaW5nbGUgbGluZS5cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5jbGVhckxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMud29yZHdyYXAudGV4dCA9IHRoaXMudGV4dDtcbiAgICB0aGlzLndvcmR3cmFwLmVtcHR5KCk7XG5cbiAgICBpZiAodGhpcy5pdGVyYXRvci5mb250KSAvL2ZvbnQgbWlnaHQgbm90IGhhdmUgYmVlbiBwYXNzZWQgYXQgY29uc3RydWN0b3JcbiAgICAgICAgdGhpcy53b3Jkd3JhcC5jbGVhckxheW91dCh0aGlzLml0ZXJhdG9yKTtcbn07XG5cbi8qKlxuICogQ2FsbHMgdGhlIHdvcmQgd3JhcHBlciB0byBsYXlvdXQgdGhlIGN1cnJlbnQgdGV4dCBzdHJpbmcsXG4gKiBiYXNlZCBvbiB0aGUgd3JhcCB3aWR0aCBhbmQgYW55IGN1cnJlbnQgd29yZHdyYXBwaW5nIG9wdGlvbnMuXG4gKlxuICogVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgdGV4dCBpcyBjaGFuZ2VkLiBcbiAqIFxuICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24od3JhcFdpZHRoKSB7XG4gICAgdGhpcy53b3Jkd3JhcC50ZXh0ID0gdGhpcy50ZXh0O1xuICAgIHRoaXMud29yZHdyYXAuZW1wdHkoKTtcbiAgICB0aGlzLndvcmR3cmFwLmxheW91dCh0aGlzLml0ZXJhdG9yLCB3cmFwV2lkdGgpO1xufTtcblxuLyoqXG4gKiBcIlJlbmRlcnNcIiB0aGlzIGdseXBoIGF0IHRoZSBnaXZlbiBsb2NhdGlvbi4gVGhpcyBtYXkgaW52b2x2ZSBmaWxsaW5nXG4gKiBhIFZCTyB3aXRoIHZlcnRleCBkYXRhLCBvciBpdCBtYXkgYmUgYSBkaXJlY3QgY2FsbCB0byBkcmF3IGEgYml0bWFwIGdseXBoXG4gKiBvciBzaGFwZSBvdXRsaW5lLlxuICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyR2x5cGggPSBmdW5jdGlvbigpIHtcblxufTtcblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJVbmRlcmxpbmUgPSBmdW5jdGlvbigpIHtcblxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBib3VuZHMgb2YgdGhlIGN1cnJlbnQgdGV4dCBsYXlvdXQuIFxuICpcbiAqIFRoZSBoZWlnaHQgZG9lcyBub3QgZXh0ZW5kIHBhc3QgdGhlIGJhc2VsaW5lIG9mIHRoZVxuICogbGFzdCBsaW5lOyB1bmxlc3MgYGluY2x1ZGVVbmRlcmxpbmVgIGlzIHRydWUsIGluIHdoaWNoXG4gKiBjYXNlIHRoZSB1bmRlcmxpbmUncyBwb3NpdGlvbiBhbmQgaGVpZ2h0IGlzIGluY2x1ZGVkXG4gKiBpbiB0aGUgY2FsY3VsYXRpb24uIFxuICpcbiAqIFRoZSBib3VuZGluZyB5IHBvc2l0aW9uIGlzIG9mZnNldCBzbyB0aGF0IHRoZSBib3ggaGFzIGFuIHVwcGVyLWxlZnRcbiAqIG9yaWdpbiwgZm9yIHBhcml0eSB3aXRoIEhUTUw1IGNhbnZhcyByZW5kZXJpbmcuXG4gKiBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5jbHVkZVVuZGVybGluZSB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlIHVuZGVybGluZSBpbiB0aGUgY2FsY3VsYXRpb24sIGRlZmF1bHQgZmFsc2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvdXQgYW4gb3B0aW9uYWwge3dpZHRoLCBoZWlnaHR9IG9iamVjdCBmb3IgcmUtdXNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IGEgc2l6ZSB3aXRoIHsgd2lkdGgsIGhlaWdodCB9IHByb3BlcnRpZXNcbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAoaW5jbHVkZVVuZGVybGluZSwgb3V0KSB7XG4gICAgaWYgKCFvdXQpXG4gICAgICAgIG91dCA9IHsgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuXG4gICAgdmFyIHdvcmR3cmFwcGVyID0gdGhpcy53b3Jkd3JhcDtcbiAgICB2YXIgaXRyID0gdGhpcy5pdGVyYXRvcjtcblxuICAgIC8vdGlnaHRlbiB0aGUgYm91bmRpbmcgYm94IGFyb3VuZCB0aGUgZmlyc3QgbGluZS4uXG4gICAgdmFyIGZpcnN0TGluZUhlaWdodCA9IDA7XG4gICAgaWYgKHdvcmR3cmFwcGVyLmxpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGZpcnN0TGluZSA9IHdvcmR3cmFwcGVyLmxpbmVzWzBdO1xuICAgICAgICBpdHIuZ2V0Qm91bmRzKHRoaXMudGV4dCwgZmlyc3RMaW5lLnN0YXJ0LCBmaXJzdExpbmUuZW5kLCB1bmRlZmluZWQsIHRtcEJvdW5kcyk7XG4gICAgICAgIGZpcnN0TGluZUhlaWdodCA9IHRtcEJvdW5kcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgb3V0LndpZHRoID0gd29yZHdyYXBwZXIuZ2V0TWF4TGluZVdpZHRoKCk7ICAgXG4gICAgb3V0LmhlaWdodCA9IE1hdGgubWF4KDAsIHdvcmR3cmFwcGVyLmxpbmVzLmxlbmd0aC0xKSAqIGl0ci5nZXRMaW5lR2FwKCkgKyBmaXJzdExpbmVIZWlnaHQ7XG5cbiAgICBvdXQueCA9IDA7XG4gICAgb3V0LnkgPSAtb3V0LmhlaWdodDtcblxuICAgIGlmIChpbmNsdWRlVW5kZXJsaW5lKSB7XG4gICAgICAgIHZhciB1bmRlcmxpbmVIZWlnaHQgPSB0aGlzLmNvbXB1dGVVbmRlcmxpbmVIZWlnaHQoKTtcbiAgICAgICAgdmFyIHVuZGVybGluZVBvc2l0aW9uID0gdGhpcy5jb21wdXRlVW5kZXJsaW5lUG9zaXRpb24oKTtcbiAgICAgICAgdmFyIHVuZGVybGluZU9mZiA9IHVuZGVybGluZVBvc2l0aW9uK3VuZGVybGluZUhlaWdodC8yO1xuICAgICAgICBvdXQuaGVpZ2h0ICs9IHVuZGVybGluZU9mZjtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgc2NhbGVkIHVuZGVybGluZSBoZWlnaHQgYXMgcGl4ZWxzLCBiYXNlZCBvbiBcbiAqIHRoZSBleHBsaWNpdCBgdW5kZXJsaW5lSGVpZ2h0YCAoaW4gcGl4ZWxzKS4gSWYgYHVuZGVybGluZUhlaWdodGAgaXNcbiAqIHVuZGVmaW5lZCBvciBudWxsLCBpdCB3aWxsIHRyeSB0byB1c2UgdGhlIGZvbnQncyBub24temVybyB1bmRlcmxpbmUgaGVpZ2h0LCBcbiAqIG90aGVyd2lzZSBkZWZhdWx0IHRvIDEvOCBvZiB0aGUgZm9udCdzIEVNIHNxdWFyZS5cbiAqIFxuICogQHJldHVybiB7TnVtYmVyfSB0aGUgcGl4ZWwgaGVpZ2h0IG9mIHRoZSB1bmRlcmxpbmUgXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUuY29tcHV0ZVVuZGVybGluZUhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm9udCA9IHRoaXMuZm9udDtcbiAgICB2YXIgc2NhbGUgPSB0aGlzLml0ZXJhdG9yLmZvbnRTY2FsZTtcbiAgICBpZiAodGhpcy51bmRlcmxpbmVUaGlja25lc3M9PT0wfHx0aGlzLnVuZGVybGluZVRoaWNrbmVzcykge1xuICAgICAgICByZXR1cm4gdGhpcy51bmRlcmxpbmVUaGlja25lc3M7IFxuICAgIH0gZWxzZSBpZiAoZm9udC51bmRlcmxpbmVfdGhpY2tuZXNzKSB7XG4gICAgICAgIHJldHVybiBmb250LnVuZGVybGluZV90aGlja25lc3MgKiBzY2FsZTsgXG4gICAgfSBlbHNlIGlmIChmb250LmJpdG1hcClcbiAgICAgICAgcmV0dXJuIGZvbnQuc2l6ZS84O1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIChmb250LnVuaXRzX3Blcl9FTS84KSpzY2FsZTtcbn07XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHNjYWxlZCB1bmRlcmxpbmUgaGVpZ2h0IGFzIHBpeGVscywgYmFzZWQgb24gXG4gKiB0aGUgZXhwbGljaXQgYHVuZGVybGluZVBvc2l0aW9uYCAoaW4gcGl4ZWxzKS4gSWYgYHVuZGVybGluZVBvc2l0aW9uYCBpc1xuICogdW5kZWZpbmVkIG9yIG51bGwsIGl0IHdpbGwgdHJ5IHRvIHVzZSB0aGUgZm9udCdzIG5vbi16ZXJvIHVuZGVybGluZSBwb3NpdGlvbiwgXG4gKiBvdGhlcndpc2UgZGVmYXVsdCB0byAxLzQgb2YgdGhlIGZvbnQncyBFTSBzcXVhcmUuXG4gKlxuICogVGhpcyBpcyB0aGUgWSBvZmZzZXQgZnJvbSB0aGUgdGV4dCBiYXNlbGluZSB0byB0aGUgY2VudGVyIG9mIHRoZSB1bmRlcmxpbmUgXG4gKiBiYXIsIGluIHBpeGVscy4gSXQgaXMgZ2VuZXJhbGx5IGEgcG9zaXRpdmUgdmFsdWUuXG4gKiBcbiAqIEByZXR1cm4ge051bWJlcn0gdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSB1bmRlcmxpbmUgXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUuY29tcHV0ZVVuZGVybGluZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmb250ID0gdGhpcy5mb250O1xuICAgIHZhciBzY2FsZSA9IHRoaXMuaXRlcmF0b3IuZm9udFNjYWxlO1xuICAgICAgICBcbiAgICBpZiAodGhpcy51bmRlcmxpbmVQb3NpdGlvbj09PTB8fHRoaXMudW5kZXJsaW5lUG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5kZXJsaW5lUG9zaXRpb247IFxuICAgIH0gZWxzZSBpZiAoZm9udC51bmRlcmxpbmVfcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIC1mb250LnVuZGVybGluZV9wb3NpdGlvbiAqIHNjYWxlOyBcbiAgICB9IGVsc2UgaWYgKGZvbnQuYml0bWFwKSB7XG4gICAgICAgIHJldHVybiBmb250LnNpemUvNDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKGZvbnQudW5pdHNfcGVyX0VNLzQpKnNjYWxlO1xuICAgIH1cbn07XG5cbi8qKlxuICogR2V0cyB0aGUgZGVzY2VudCBvZiB0aGUgY3VycmVudCBmb250IChhc3N1bWVzIGl0cyBzaXplIFxuICogaXMgYWxyZWFkeSBzZXQpLiBUaGlzIGlzIGFuIGFic29sdXRlIChwb3NpdGl2ZSkgdmFsdWUuXG4gKiBcbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmdldERlc2NlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy5pdGVyYXRvci5mb250U2NhbGUgKiB0aGlzLml0ZXJhdG9yLmZvbnQuZGVzY2VuZGVyKTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgZGVzY2VudCBvZiB0aGUgY3VycmVudCBmb250IChhc3N1bWVzIGl0cyBzaXplIFxuICogaXMgYWxyZWFkeSBzZXQpLiBUaGlzIGlzIGFuIGFic29sdXRlIChwb3NpdGl2ZSkgdmFsdWUuXG4gKiBcbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmdldEFzY2VuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLml0ZXJhdG9yLmZvbnRTY2FsZSAqIHRoaXMuaXRlcmF0b3IuZm9udC5hc2NlbmRlcik7XG59O1xuXG4vL1NpZ25hbHMgZm9yIHN1YmNsYXNzZXMgdG8gb3B0aW9uYWxseSBpbXBsbWVlbnRcbi8vVGhpcyBtYXkgYmUgdXNlZnVsIHRvIHN0b3Avc3RhcnQgcGF0aHMgd2l0aCBkaWZmZXJlbnQgZmlsbHNcblRleHRSZW5kZXJlci5wcm90b3R5cGUub25CZWdpbiA9IGZ1bmN0aW9uKCkgeyB9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24oKSB7IH1cblRleHRSZW5kZXJlci5wcm90b3R5cGUub25CZWdpbkxpbmUgPSBmdW5jdGlvbihsaW5lSW5kZXgpIHsgfVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5vbkVuZExpbmUgPSBmdW5jdGlvbihsaW5lSW5kZXgpIHsgfVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGN1cnJlbnQgdGV4dCBsYXlvdXQsIHdoZXJlIGxvd2VyLWxlZnQgaXMgXG4gKiB0aGUgb3JpZ2luLiBNdWx0aXBsZSBsaW5lcyB3aWxsIGJlIHBvc2l0aW9uZWQgYWJvdmUgdGhlXG4gKiBvcmlnaW4uXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHgsIHksIHN0YXJ0LCBlbmQpIHtcbiAgICB4ID0geHx8MDtcbiAgICB5ID0geXx8MDtcblxuICAgIHZhciB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIHZhciB3b3Jkd3JhcHBlciA9IHRoaXMud29yZHdyYXA7XG5cbiAgICAvL2lmIHdlIGhhdmUgbm90aGluZyB0byBkcmF3XG4gICAgaWYgKCF0ZXh0IHx8IHdvcmR3cmFwcGVyLmxpbmVzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgLy9kZWZhdWx0IHN0YXJ0L2VuZCBwYXJhbXNcbiAgICBzdGFydCA9IHN0YXJ0fHwwO1xuICAgIGVuZCA9IHR5cGVvZiBlbmQgPT09IFwibnVtYmVyXCIgPyBlbmQgOiB0ZXh0Lmxlbmd0aDtcblxuICAgIHZhciBpdHIgPSB0aGlzLml0ZXJhdG9yO1xuICAgIHZhciBzY2FsZSA9IGl0ci5mb250U2NhbGU7XG4gICAgdmFyIGZvbnQgPSBpdHIuZm9udDtcbiAgICB2YXIgdW5kZXJsaW5lID0gdGhpcy51bmRlcmxpbmU7XG5cbiAgICAvL3VzZWQgZm9yIGFsaWdubWVudC4uLlxuICAgIHZhciBtYXhMaW5lV2lkdGggPSB3b3Jkd3JhcHBlci5nZXRNYXhMaW5lV2lkdGgoKTtcbiAgICBcbiAgICB5IC09IE1hdGgubWF4KDAsIHdvcmR3cmFwcGVyLmxpbmVzLmxlbmd0aC0xKSAqIGl0ci5nZXRMaW5lR2FwKCk7XG5cblxuICAgIC8vdXNlIG51bWJlcnMgdG8gYXZvaWQgc3RyIGNvbXBhcmUgZm9yIGVhY2ggZ2x5cGhcbiAgICB2YXIgYWxpZ25UeXBlID0gQUxJR05fQVJSQVkuaW5kZXhPZih0aGlzLmFsaWdufHxcIlwiKTtcbiAgICBpZiAoYWxpZ25UeXBlPT09LTEpXG4gICAgICAgIGFsaWduVHlwZSA9IExFRlRfQUxJR047XG5cbiAgICB2YXIgdW5kZXJsaW5lWCA9IDA7XG4gICAgdmFyIHVuZGVybGluZVN0YXJ0WCA9IDA7XG4gICAgdmFyIHVuZGVybGluZVkgPSAwO1xuICAgIHZhciB1bmRlcmxpbmVXaWR0aCA9IDA7XG5cbiAgICB2YXIgdW5kZXJsaW5lU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgLy9UcnkgdG8gdXNlIHVzZXItc3BlY2lmaWVkIHVuZGVybGluZSBzZXR0aW5ncywgb3RoZXJ3aXNlIHVzZSB0aGUgZm9udCBpZiBwb3NzaWJsZSxcbiAgICAvL290aGVyd2lzZSBqdXN0IHVzZSBhIHJvdWdoIGRlZmF1bHQgYmFzZWQgb24gRU0gc3F1YXJlLiAgICBcbiAgICB2YXIgdW5kZXJsaW5lUG9zID0gdGhpcy5jb21wdXRlVW5kZXJsaW5lUG9zaXRpb24oKTtcbiAgICB2YXIgdW5kZXJsaW5lSGVpZ2h0ID0gdGhpcy5jb21wdXRlVW5kZXJsaW5lSGVpZ2h0KCk7XG5cbiAgICB0aGlzLm9uQmVnaW4oKTtcbiAgICBcbiAgICAvL3NldCB0aGUgb3JpZ2luIGFuZCBwZW4gcG9zaXRpb25cbiAgICBpdHIuYmVnaW4oeCwgeSk7XG4gICAgZm9yICh2YXIgaz0wOyBrPHdvcmR3cmFwcGVyLmxpbmVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBsaW5lID0gd29yZHdyYXBwZXIubGluZXNba107XG4gICAgICAgIHVuZGVybGluZVN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgbGFzdEFkdmFuY2UgPSAwO1xuXG4gICAgICAgIHZhciBsaW5lWCA9IGl0ci5wZW4ueDtcbiAgICAgICAgdmFyIGxpbmVZID0gaXRyLnBlbi55O1xuXG4gICAgICAgIHRoaXMub25CZWdpbkxpbmUoayk7XG5cbiAgICAgICAgLy9UT0RPOiB1c2UgbXVsdGlwbGUgTm9kZXMgaW5zaWRlIGEgc2luZ2xlIGxpbmVcbiAgICAgICAgLy9hIG5vZGUgd2lsbCBoYXZlIGF0dHJpYnV0ZXMgbGlrZSBmb250LCBzaXplLCBjb2xvciwgXG4gICAgICAgIC8vbGV0dGVyLXNwYWNpbmcsIHVuZGVybGluZSwgZXRjLlxuICAgICAgICAvL1RoaXMgd2lsbCBhZmZlY3QgdGhlIGxpbmUgaGVpZ2h0LCBhcyBpdCB3aWxsIGhhdmUgdG8gYmUgdGhlIG1heCBvZiBhbGwgbm9kZXMuXG5cbiAgICAgICAgZm9yICh2YXIgaT1saW5lLnN0YXJ0OyBpPGxpbmUuZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaHIgPSB0ZXh0LmNoYXJBdChpKTtcblxuICAgICAgICAgICAgLy9TdGVwIHRoZSBpdGVyYXRvciwgbW92aW5nIGZvcndhcmQgYmFzZWQgb24ga2VybmluZyBmcm9tIGxhc3QgY2hhclxuICAgICAgICAgICAgdmFyIGdseXBoID0gaXRyLnN0ZXAodGV4dCwgaSk7XG5cbiAgICAgICAgICAgIGlmICghZ2x5cGgpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vd2l0aGluIGRlc2lyZWQgcmFuZ2VcbiAgICAgICAgICAgIGlmIChpID49IHN0YXJ0ICYmIGkgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHggPSBpdHIucGVuLng7XG4gICAgICAgICAgICAgICAgdmFyIHR5ID0gaXRyLnBlbi55O1xuXG4gICAgICAgICAgICAgICAgaWYgKGFsaWduVHlwZSA9PT0gQ0VOVEVSX0FMSUdOKSB7XG4gICAgICAgICAgICAgICAgICAgIHR4ICs9IChtYXhMaW5lV2lkdGgtbGluZS53aWR0aCkvMjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFsaWduVHlwZSA9PT0gUklHSFRfQUxJR04pIHtcbiAgICAgICAgICAgICAgICAgICAgdHggKz0gKG1heExpbmVXaWR0aC1saW5lLndpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXVuZGVybGluZVN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lWCA9IHR4O1xuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVTdGFydFggPSB0eDtcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lWSA9IHR5ICsgdW5kZXJsaW5lUG9zO1xuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVXaWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVdpZHRoID0gdHggLSB1bmRlcmxpbmVTdGFydFg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHbHlwaChpLCBnbHlwaCwgc2NhbGUsIHR4LCB0eSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vQWR2YW5jZSB0aGUgaXRlcmF0b3IgdG8gdGhlIG5leHQgZ2x5cGggaW4gdGhlIHN0cmluZ1xuICAgICAgICAgICAgdmFyIG5ld0FkdmFuY2UgPSBpdHIuYWR2YW5jZShnbHlwaCk7XG5cbiAgICAgICAgICAgIGlmIChpID49IHN0YXJ0ICYmIGkgPCBlbmQpXG4gICAgICAgICAgICAgICAgbGFzdEFkdmFuY2UgPSBuZXdBZHZhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkVuZExpbmUoayk7XG5cbiAgICAgICAgaWYgKHVuZGVybGluZSkge1xuICAgICAgICAgICAgdW5kZXJsaW5lV2lkdGggKz0gbGFzdEFkdmFuY2U7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclVuZGVybGluZSh1bmRlcmxpbmVYLCB1bmRlcmxpbmVZLXVuZGVybGluZUhlaWdodC8yLCB1bmRlcmxpbmVXaWR0aCwgdW5kZXJsaW5lSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9TdGVwcyBkb3duIGEgbGluZS4uLlxuICAgICAgICBpZiAoayA8IHdvcmR3cmFwcGVyLmxpbmVzLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICBpdHIuYWR2YW5jZUxpbmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vZmluaXNoIHRoZSBpdGVyYXRvci4uLlxuICAgIGl0ci5lbmQoKTtcbiAgICB0aGlzLm9uRW5kKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRSZW5kZXJlcjsiLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJ2ZvbnRwYXRoLXV0aWwnKTtcblxudmFyIERFRkFVTFRfVEFCX1dJRFRIID0gNDtcblxuZnVuY3Rpb24gR2x5cGhJdGVyYXRvcihmb250LCBmb250U2l6ZSkge1xuICAgIHRoaXMuX2ZvbnRTaXplID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2ZvbnRTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9mb250ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9udFNjYWxlID0gMS4wO1xuICAgIHRoaXMua2VybmluZyA9IHRydWU7XG4gICAgdGhpcy5sZXR0ZXJTcGFjaW5nID0gMDtcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgXG4gICAgdGhpcy5mb250U2l6ZSA9IHR5cGVvZiBmb250U2l6ZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gZm9udFNpemVcbiAgICAgICAgICAgIDogKGZvbnQgPyBmb250LnNpemUgOiB1bmRlZmluZWQpO1xuICAgIHRoaXMuZm9udCA9IGZvbnQ7XG5cbiAgICAvL051bWJlciBvZiBzcGFjZXMgZm9yIGEgdGFiIGNoYXJhY3RlclxuICAgIHRoaXMudGFiV2lkdGggPSBERUZBVUxUX1RBQl9XSURUSDtcbiAgICB0aGlzLl90YWJHbHlwaCA9IG51bGw7XG5cbiAgICB0aGlzLm9yaWdpbiA9IHsgeDogMCwgeTogMCB9O1xuICAgIHRoaXMucGVuID0geyB4OiAwLCB5OiAwIH07XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShHbHlwaEl0ZXJhdG9yLnByb3RvdHlwZSwgXCJmb250XCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9udDtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbihmb250KSB7XG4gICAgICAgIHRoaXMuX2ZvbnQgPSBmb250O1xuXG4gICAgICAgIC8vRGV0ZXJtaW5lIHRoZSBuZXcgc2NhbGluZyBmYWN0b3IuLi5cbiAgICAgICAgaWYgKGZvbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9udFNjYWxlID0gdXRpbC5nZXRQeFNjYWxlKGZvbnQsIHRoaXMuZm9udFNpemUpO1xuXG4gICAgICAgICAgICAvL1VwZGF0ZXMgdGhlIHRhYiBnbHlwaFxuICAgICAgICAgICAgdGhpcy50YWJXaWR0aCA9IHRoaXMuX3RhYldpZHRoO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuXG4vL1RoZXJlIG1pZ2h0IGJlIGEgYmV0dGVyIHdheSBvZiBoYW5kbGluZyB0YWIgd2lkdGggdXNpbmcgRnJlZVR5cGUgPyBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShHbHlwaEl0ZXJhdG9yLnByb3RvdHlwZSwgXCJ0YWJXaWR0aFwiLCB7XG5cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFiV2lkdGg7XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHRoaXMuX3RhYldpZHRoID0gdmFsPT09MCB8fCB2YWwgPyB2YWwgOiBERUZBVUxUX1RBQl9XSURUSDtcbiAgICAgICAgdGhpcy5fdGFiR2x5cGggPSB7fTtcblxuICAgICAgICB2YXIgc3BhY2VHbHlwaCA9IHRoaXMuZm9udCA/IHRoaXMuZm9udC5nbHlwaHNbXCIgXCJdIDogbnVsbDtcbiAgICAgICAgaWYgKHNwYWNlR2x5cGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYkdseXBoID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIHNwYWNlR2x5cGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJHbHlwaFtrXSA9IHNwYWNlR2x5cGhba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fdGFiR2x5cGgueG9mZilcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJHbHlwaC54b2ZmICo9IHRoaXMuX3RhYldpZHRoO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoR2x5cGhJdGVyYXRvci5wcm90b3R5cGUsIFwiZm9udFNpemVcIiwge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZm9udFNpemUgIT09ICdudW1iZXInKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9udC5iaXRtYXAgXG4gICAgICAgICAgICAgICAgPyB0aGlzLmZvbnQuc2l6ZSBcbiAgICAgICAgICAgICAgICA6IHV0aWwucG9pbnRUb1BpeGVsKHRoaXMuZm9udC5zaXplKVxuICAgICAgICByZXR1cm4gdGhpcy5fZm9udFNpemU7XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHRoaXMuX2ZvbnRTaXplID0gdmFsO1xuXG4gICAgICAgIC8vSWYgdGhlIGZvbnQgaXMgYWxyZWFkeSBzZXQsIGRldGVybWluZSB0aGUgbmV3IHNjYWxpbmcgZmFjdG9yXG4gICAgICAgIGlmICh0aGlzLl9mb250KSB7XG4gICAgICAgICAgICB0aGlzLmZvbnRTY2FsZSA9IHV0aWwuZ2V0UHhTY2FsZSh0aGlzLl9mb250LCB0aGlzLl9mb250U2l6ZSk7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmdldEtlcm5pbmcgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgIHZhciBmb250ID0gdGhpcy5mb250O1xuXG4gICAgaWYgKCFmb250IHx8ICFmb250Lmtlcm5pbmcpXG4gICAgICAgIHJldHVybiAwO1xuXG4gICAgdmFyIHRhYmxlID0gdGhpcy5rZXJuaW5nVGFibGU7XG5cbiAgICBmb3IgKHZhciBpPTA7IGk8Zm9udC5rZXJuaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBrID0gZm9udC5rZXJuaW5nW2ldO1xuICAgICAgICBpZiAoa1swXSA9PT0gbGVmdCAmJiBrWzFdID09PSByaWdodCkgXG4gICAgICAgICAgICByZXR1cm4ga1syXTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5iZWdpbiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB0aGlzLm9yaWdpbi54ID0geHx8MDtcbiAgICB0aGlzLm9yaWdpbi55ID0geXx8MDtcblxuICAgIHRoaXMucGVuLnggPSB0aGlzLm9yaWdpbi54O1xuICAgIHRoaXMucGVuLnkgPSB0aGlzLm9yaWdpbi55O1xufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgLy8uLiBtYWlubHkgZm9yIGNvbnNpc3RlbmN5IHdpdGggYmVnaW4oKVxuICAgIC8vTWlnaHQgYmUgdXNlZnVsIGxhdGVyIG9uXG59O1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5nZXRMaW5lR2FwID0gZnVuY3Rpb24oKSB7XG4gICAgLy9MaW5lIGhlaWdodCBoYW5kbGluZyBpcyBhIG1lc3MgaW4gYnJvd3NlcnMuXG4gICAgLy9NYXliZSB0aGUgYmVzdCBzb2x1dGlvbiBpcyB0byBlbmNvdXJhZ2UgdXNlcnMgdG8gXG4gICAgLy9zcGVjaWZ5IHBpeGVsIGxpbmUgaGVpZ2h0cyBpZiB0aGV5IHdhbnQgdG8gbWF0Y2ggYnJvd3NlciBzdGFuZGFyZHMsXG4gICAgLy9vdGhlcndpc2UgaXQncyB1bnJlYXNvbmFibGUgdG8gZXhwZWN0IHRoZSBsaW5lIGdhcHMgdG8gbGluZSB1cCBleGFjdGx5XG4gICAgLy9hY3Jvc3MgYWxsIGJyb3dzZXJzLiBFeGFtcGxlIG9mIHRoZSBkaXNhc3RlcjpcbiAgICAvL2h0dHA6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDA4SmFuLzA0MTMuaHRtbFxuXG4gICAgLy9Gb3IgcmVmZXJlbmNlLCBzb21lIGJhc2VsaW5lLXRvLWJhc2VsaW5lIGNhbGN1bGF0aW9uczpcbiAgICAvL2h0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS90eXBvZ3JhcGh5L290c3BlYy9yZWNvbS5odG1cbiAgICAvL2ZyZWV0eXBlLm9yZy9mcmVldHlwZTIvZG9jcy9yZWZlcmVuY2UvZnQyLWJhc2VfaW50ZXJmYWNlLmh0bWxcbiAgICAvL2h0dHA6Ly93d3cuZnJlZXR5cGUub3JnL2ZyZWV0eXBlMi9kb2NzL2dseXBocy9nbHlwaHMtMy5odG1sXG5cbiAgICAvL1VuZm9ydHVuYXRlbHkgbm9uZSBvZiB0aGVzZSBhcmUgcHJvZHVjaW5nIGxpbmUtaGVpZ2h0cyB0aGF0IGF2b2lkIG92ZXJsYXBwaW5nXG4gICAgLy9vciByZXNlbWJsZSBicm93c2VyIHJlbmRlcmluZyBpbiBhbnkgd2F5LiBcblxuICAgIC8vIElmIENTUyB1c2VzIDFlbSBvciAxLCB0aGUgYnJvd3NlciBvZmZzZXRzIHRoZSBsaW5lIGJ5IHRoZSBcbiAgICAvLyBmb250J3MgcGl4ZWwgc2l6ZS4gSWYgYW4gZXhhY3QgcGl4ZWwgbGluZS1oZWlnaHQgaXMgc3BlY2lmaWVkLFxuICAgIC8vIHRoZSBicm93c2VyIHdpbGwgdXNlIHRoYXQgKyBhIGNvbXB1dGVkIFwibGluZWdhcC5cIiBcbiAgICAvLyBJZiAnYXV0bycgaXMgc3BlY2lmaWVkIGZvciBsaW5lLWhlaWdodCwgdGhlIGNhbGN1bGF0aW9ucyBzZWVtXG4gICAgLy8gbXVjaCBtb3JlIGNvbXBsZXggYW5kIGJyb3dzZXIvcGxhdGZvcm0gZGVwZW5kZW50IChub3QgaW5jbHVkZWQgaGVyZSkuXG4gICAgXG4gICAgdmFyIGZvbnQgPSB0aGlzLmZvbnQsXG4gICAgICAgIHNjYWxlID0gdGhpcy5mb250U2NhbGU7XG4gICAgdmFyIGdhcCA9IChmb250LmhlaWdodCAtIGZvbnQuYXNjZW5kZXIgKyBNYXRoLmFicyhmb250LmRlc2NlbmRlcikpICogc2NhbGU7ICAgIFxuICAgIHZhciBsaW5lSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0O1xuICAgIFxuICAgIGxpbmVIZWlnaHQgPSAobGluZUhlaWdodD09PTB8fGxpbmVIZWlnaHQpIFxuICAgICAgICAgICAgPyAobGluZUhlaWdodCArIGdhcClcbiAgICAgICAgICAgIDogdGhpcy5mb250U2l6ZTtcbiAgICByZXR1cm4gbGluZUhlaWdodDtcbn07XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB0aGlzLm9yaWdpbi54ICs9IHh8fDA7XG4gICAgdGhpcy5vcmlnaW4ueSArPSB5fHwwO1xuXG4gICAgdGhpcy5wZW4ueCArPSB4fHwwO1xuICAgIHRoaXMucGVuLnkgKz0geXx8MDtcbn07XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbih0ZXh0LCBpbmRleCkge1xuICAgIHZhciBzY2FsZSA9IHRoaXMuZm9udFNjYWxlLFxuICAgICAgICBmb250ID0gdGhpcy5fZm9udDtcblxuICAgIHZhciBjaHIgPSB0ZXh0LmNoYXJBdChpbmRleCk7IFxuXG4gICAgaWYgKGNociA9PT0gJ1xcdCcgJiYgdGhpcy5fdGFiR2x5cGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhYkdseXBoO1xuICAgIH1cblxuICAgIC8vU2tpcCBtaXNzaW5nIGNoYXJhY3RlcnMuLi5cbiAgICBpZiAoIShjaHIgaW4gZm9udC5nbHlwaHMpKVxuICAgICAgICByZXR1cm47XG4gICAgXG4gICAgdmFyIGdseXBoID0gZm9udC5nbHlwaHNbY2hyXTtcblxuICAgIC8vSWYgd2UgaGF2ZSBhIGNoYXIgdG8gdGhlIGxlZnQsIGRldGVybWluZSBpdHMga2VybmluZ1xuICAgIGlmIChpbmRleCA+IDAgJiYgdGhpcy5rZXJuaW5nKSB7XG4gICAgICAgIHZhciBrZXJuID0gdGhpcy5nZXRLZXJuaW5nKHRleHQuY2hhckF0KGluZGV4LTEpLCBjaHIpO1xuICAgICAgICB0aGlzLnBlbi54ICs9IChrZXJuKnNjYWxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2x5cGg7XG59O1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5hZHZhbmNlTGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucGVuLnkgKz0gdGhpcy5nZXRMaW5lR2FwKCk7XG4gICAgdGhpcy5wZW4ueCA9IHRoaXMub3JpZ2luLng7XG59O1xuXG4vKipcbiAqIENhbGxlZCBhZnRlciBzdGVwLiBcbiAqL1xuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuYWR2YW5jZSA9IGZ1bmN0aW9uKGdseXBoKSB7XG4gICAgdmFyIGFkdmFuY2UgPSAoZ2x5cGgueG9mZiAqIHRoaXMuZm9udFNjYWxlKTtcbiAgICAvLyBBZHZhbmNlIHRvIG5leHQgcGVuIHBvc2l0aW9uXG4gICAgdGhpcy5wZW4ueCArPSBhZHZhbmNlICsgdGhpcy5sZXR0ZXJTcGFjaW5nO1xuICAgIHJldHVybiBhZHZhbmNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgdXRpbGl0eSBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIHRoZSBib3VuZHMgb2YgdGhlIGdpdmVuXG4gKiB0ZXh0IChmcm9tIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb25zKSBhcyBpZiB0aGV5IHdlcmUgbGFpZCBvdXQgaG9yaXpvbnRhbGx5LFxuICogbGVmdCB0byByaWdodC5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHRoaXMgd2lsbCBub3QgYWx0ZXIgdGhlIGN1cnJlbnQgcGVuIGFuZCBvcmlnaW4gcG9zaXRpb25zLlxuICogVGhpcyB3YXkgaXQgY2FuIGJlIHV0aWxpemVkIGluc2lkZSBhIGdseXBoIGl0ZXJhdGlvbiAoaS5lLiBmb3IgcmVuZGVyaW5nKS5cbiAqXG4gKiBJZiBgYXZhaWxhYmxlV2lkdGhgIGlzIHNwZWNpZmllZCwgdGhpcyB3aWxsIGJyZWFrIGJlZm9yZSByZWFjaGluZyB0aGUgc3BlY2lmaWVkXG4gKiBwaXhlbCB3aWR0aCwgdG8gZW5zdXJlIHRoYXQgYWxsIGdseXBocyB3aWxsIGZpdCBpbnNpZGUgdGhlIGJvdW5kcy4gXG4gKlxuICogVGhlIHJldHVybiBvYmplY3QgYWxzbyBpbmNsdWRlcyBhIGBnbHlwaHNgIHByb3BlcnR5LCB3aGljaCBpcyB0aGUgbnVtYmVyIG9mIGdseXBoc1xuICogdGhhdCBhcmUgdmlzaWJsZSB3aXRoaW4gdGhlIHJldHVybmVkIGJvdW5kcy4gXG4gKlxuICogSWYgYG91dGAgaXMgc3BlY2lmaWVkIChhbiBvYmplY3Qgd2l0aCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBhbmQgZ2x5cGggcHJvcGVydGllcyksXG4gKiBpdCB3aWxsIGJlIHJlLXVzZWQuIE90aGVyd2lzZSBhIG5ldyBvYmplY3QgaXMgY3JlYXRlZC5cbiAqIFxuICogQHBhcmFtIHtTdHJpbmd9IHRleHQgdGhlIHRleHQgdG8gY2hlY2tcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCB0aGUgc3RhcnQgcG9zaXRpb24sIGRlZmF1bHRzIHRvIDBcbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmQgdGhlIGVuZCBwb3NpdGlvbiwgZXhjbHVzaXZlLCBkZWZhdWx0cyB0byB0ZXh0IGxlbmd0aFxuICogQHBhcmFtIHtOdW1iZXJ9IGF2YWlsYWJsZVdpZHRoIHRoZSB3aWR0aCBiZWZvcmUgc3RvcHBpbmcgdGhlIGJvdW5kIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gb3V0IGFuIG9iamVjdCB0byByZS11c2UgZm9yIHRoZSByZXR1cm4gdmFsdWVcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGJvdW5kcyBhbmQgZ2x5cGggY291bnQge3gseSx3aWR0aCxoZWlnaHQsZ2x5cGhzfVxuICovXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbih0ZXh0LCBzdGFydCwgZW5kLCBhdmFpbGFibGVXaWR0aCwgb3V0KSB7XG4gICAgaWYgKCFvdXQpXG4gICAgICAgIG91dCA9IHsgeDowLCB5OjAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsIGdseXBoczogMCB9O1xuXG4gICAgdmFyIGNoZWNrV2lkdGggPSBhdmFpbGFibGVXaWR0aD09PTB8fGF2YWlsYWJsZVdpZHRoO1xuXG4gICAgc3RhcnQgPSBzdGFydHx8MDtcbiAgICBlbmQgPSBlbmQ9PT0wfHxlbmQgPyBlbmQgOiB0ZXh0Lmxlbmd0aDtcblxuICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuXG4gICAgb3V0LnggPSAwO1xuICAgIG91dC55ID0gMDtcbiAgICBvdXQuZ2x5cGhzID0gMDtcblxuICAgIHZhciBvbGRQZW5YID0gdGhpcy5wZW4ueCxcbiAgICAgICAgb2xkUGVuWSA9IHRoaXMucGVuLnksXG4gICAgICAgIG9sZE9yaWdpblggPSB0aGlzLm9yaWdpbi54LFxuICAgICAgICBvbGRPcmlnaW5ZID0gdGhpcy5vcmlnaW4ueTtcblxuXG4gICAgdmFyIGZvbnQgPSB0aGlzLmZvbnQ7XG4gICAgdGhpcy5iZWdpbigpO1xuICAgIGZvciAodmFyIGk9c3RhcnQ7IGk8ZW5kOyBpKyspIHtcbiAgICAgICAgdmFyIGNociA9IHRleHQuY2hhckF0KGkpO1xuXG4gICAgICAgIC8vc3RlcCB0aGUgaXRlcmF0b3JcbiAgICAgICAgdmFyIGdseXBoID0gdGhpcy5zdGVwKHRleHQsIGkpO1xuXG4gICAgICAgIC8vaWYgdGhlIGdseXBoIGlzIHZhbGlkLCB3ZSBjYW4gYWR2YW5jZSBwYXN0IGl0IGFuZCBjYWxjdWxhdGUgbmV3IGhlaWdodFxuICAgICAgICBpZiAoZ2x5cGgpIHtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAoZ2x5cGguaGVpZ2h0KSp0aGlzLmZvbnRTY2FsZTtcblxuICAgICAgICAgICAgb3V0LnkgPSBNYXRoLm1heChvdXQueSwgdGhpcy5mb250U2NhbGUqKGdseXBoLmhlaWdodC1nbHlwaC5oYnkpKTtcblxuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gTWF0aC5tYXgobWF4SGVpZ2h0LCBoZWlnaHQpO1xuICAgICAgICAgICAgdmFyIGxhc3RBZHZhbmNlID0gdGhpcy5hZHZhbmNlKGdseXBoKTtcblxuICAgICAgICAgICAgLy9pZiB3ZSdyZSBwYXN0IHRoZSBhdmFpbGFibGUgd2lkdGhcbiAgICAgICAgICAgIHZhciBuZXdXaWR0aCA9IHRoaXMucGVuLnggLSB0aGlzLm9yaWdpbi54O1xuICAgICAgICAgICAgaWYgKGNoZWNrV2lkdGggJiYgKG5ld1dpZHRoIC0gYXZhaWxhYmxlV2lkdGggPiAwLjAwMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbi54IC09IGxhc3RBZHZhbmNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdXQuZ2x5cGhzKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbmQoKTtcblxuICAgIG91dC53aWR0aCA9IHRoaXMucGVuLnggLSB0aGlzLm9yaWdpbi54O1xuICAgIG91dC5oZWlnaHQgPSBtYXhIZWlnaHQ7XG5cbiAgICB0aGlzLnBlbi54ID0gb2xkUGVuWDtcbiAgICB0aGlzLnBlbi55ID0gb2xkUGVuWTtcbiAgICB0aGlzLm9yaWdpbi54ID0gb2xkT3JpZ2luWDtcbiAgICB0aGlzLm9yaWdpbi55ID0gb2xkT3JpZ2luWTtcblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdseXBoSXRlcmF0b3I7IiwiLy8gbW9kdWxlLmV4cG9ydHMucG9pbnRzVG9QaXhlbHMgPSBmdW5jdGlvbihwb2ludFNpemUsIHJlc29sdXRpb24pIHtcbi8vIFx0cmVzb2x1dGlvbiA9IHR5cGVvZiByZXNvbHV0aW9uID09PSBcIm51bWJlclwiID8gcmVzb2x1dGlvbiA6IDcyO1xuLy8gXHRyZXR1cm4gcG9pbnRTaXplICogcmVzb2x1dGlvbiAvIDcyO1xuLy8gfTtcblxuLy8gbW9kdWxlLmV4cG9ydHMuY29vcmRUb1BpeGVsID0gZnVuY3Rpb24oY29vcmQsIHBpeGVsU2l6ZSwgZW1TaXplKSB7XG4vLyBcdGVtU2l6ZSA9IHR5cGVvZiBlbVNpemUgPT09IFwibnVtYmVyXCIgPyBlbVNpemUgOiAyMDQ4O1xuLy8gXHRyZXR1cm4gY29vcmQgKiBwaXhlbFNpemUgLyBlbVNpemU7XG4vLyB9O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgcHQgc2l6ZSB0byBweCBzaXplLCBuYW1lbHkgdXNlZnVsIGZvciBtYXRjaGluZ1xuICogc2l6ZSB3aXRoIENTUyBzdHlsZXMuIElmIG5vIERQSSBpcyBzcGVjaWZpZWQsIDk2IGlzIGFzc3VtZWRcbiAqIChhcyBpdCBsZWFkcyB0byBjb3JyZWN0IHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMpLlxuICogXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGZvbnRTaXplIHRoZSBkZXNpcmVkIGZvbnQgc2l6ZSBpbiBwb2ludHNcbiAqIEBwYXJhbSAge051bWJlcn0gZHBpICAgICAgdGhlIGV4cGVjdGVkIERQSSwgZ2VuZXJhbGx5IDk2IGZvciBicm93c2Vyc1xuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICB0aGUgcm91bmRlZCBwaXhlbCBmb250IHNpemVcbiAqL1xubW9kdWxlLmV4cG9ydHMucG9pbnRUb1BpeGVsID0gZnVuY3Rpb24oZm9udFNpemUsIGRwaSkge1xuICAgIGRwaSA9IGRwaXx8ZHBpPT09MCA/IGRwaSA6IDk2O1xuICAgIGZvbnRTaXplID0gZm9udFNpemUgKiBkcGkgLyA3MjtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChmb250U2l6ZSk7XG59O1xuXG4vKipcbiAqIEZvciB0aGUgZ2l2ZW4gZm9udCBhbmQgKHBpeGVsKSBmb250IHNpemUsIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlXG4gKiBzY2FsZSB0aGF0IHdpbGwgbmVlZCB0byBiZSBhcHBsaWVkIHRvIEVNIHVuaXRzIChpLmUuIGZvbnQgcGF0aHMpIFxuICogdG8gaGF2ZSB0aGUgZm9udCByZW5kZXIgYXQgdGhlIGV4cGVjdGVkIHNpemUgKGkuZS4gdG8gbWF0Y2ggdGhlIGJyb3dzZXIpLlxuICpcbiAqIElmIG5vIGZvbnQgc2l6ZSBpcyBzcGVjaWZpZWQsIHdlIHdpbGwgdXNlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSAod2hpY2ggaXMgaW4gcG9pbnRzKVxuICogYW5kIGNvbnZlcnQgaXQgdG8gcGl4ZWxzLiBcbiAqIFxuICogQHBhcmFtICB7Rm9udH0gZm9udCAgICAgYSBmb250IG9iamVjdCBmcm9tIHRoZSBmb250cGF0aCB0b29sXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGZvbnRTaXplIHRoZSBkZXNpcmVkIGZvbnQgc2l6ZSwgZGVmYXVsdHMgdG8gdGhlIGZvbnQncyBkZWZhdWx0IHNpemVcbiAqIEByZXR1cm4ge051bWJlcn0gcmV0dXJucyB0aGUgc2NhbGUgZm9yIHRoaXMgZm9udCBzaXplICAgICAgICAgXG4gKi9cbm1vZHVsZS5leHBvcnRzLmdldFB4U2NhbGUgPSBmdW5jdGlvbihmb250LCBmb250U2l6ZSkge1xuICAgIGlmIChmb250LmJpdG1hcClcbiAgICAgICAgcmV0dXJuIDEuMDtcblxuICAgIC8vSWYgbm8gZm9udFNpemUgaXMgc3BlY2lmaWVkLCBpdCB3aWxsIGp1c3QgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBmb250J3Mgb3duIHNpemUgd2l0aCA5NiBEUEkuXG4gICAgZm9udFNpemUgPSB0eXBlb2YgZm9udFNpemUgPT09IFwibnVtYmVyXCIgPyBmb250U2l6ZSA6IHRoaXMucG9pbnRUb1BpeGVsKGZvbnQuc2l6ZSk7XG5cbiAgICAvL1Rha2VzIGluIGEgZm9udCBzaXplIGluIFBJWEVMUyBhbmQgZ2l2ZXMgdXMgdGhlIGV4cGVjdGVkIHNjYWxpbmcgZmFjdG9yXG4gICAgdmFyIHN6ID0gZm9udC51bml0c19wZXJfRU0vNjQ7XG4gICAgc3ogPSAoc3ovZm9udC5zaXplICogZm9udFNpemUpO1xuXG4gICAgcmV0dXJuICgoZm9udC5yZXNvbHV0aW9uICogMS83MiAqIHN6KSAvIGZvbnQudW5pdHNfcGVyX0VNKTtcbn07XG5cbi8qKlxuICogRm9yIHRoZSBnaXZlbiBmb250IGFuZCAocG9pbnQpIGZvbnQgc2l6ZSwgdGhpcyBtZXRob2QgcmV0dXJucyB0aGVcbiAqIHNjYWxlIHRoYXQgd2lsbCBuZWVkIHRvIGJlIGFwcGxpZWQgdG8gRU0gdW5pdHMgKGkuZS4gZm9udCBwYXRocykgXG4gKiB0byBoYXZlIHRoZSBmb250IHJlbmRlciBhdCB0aGUgZXhwZWN0ZWQgc2l6ZSAoaS5lLiB0byBtYXRjaCB0aGUgYnJvd3NlcikuXG4gKiBcbiAqIElmIG5vIGZvbnQgc2l6ZSBpcyBzcGVjaWZpZWQsIHdlIHdpbGwgdXNlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZS5cbiAqIFxuICogQHBhcmFtICB7Rm9udH0gZm9udCAgICAgICBhIGZvbnQgb2JqZWN0IGZyb20gdGhlIGZvbnRwYXRoIHRvb2xcbiAqIEBwYXJhbSAge051bWJlcn0gZm9udFNpemUgdGhlIGRlc2lyZWQgZm9udCBzaXplLCBkZWZhdWx0cyB0byB0aGUgZm9udCdzIGRlZmF1bHQgc2l6ZVxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICB0aGUgc2NhbGUgZm9yIHRoaXMgZm9udCBzaXplXG4gKi9cbm1vZHVsZS5leHBvcnRzLmdldFB0U2NhbGUgPSBmdW5jdGlvbihmb250LCBmb250U2l6ZSkge1xuICAgIGZvbnRTaXplID0gdHlwZW9mIGZvbnRTaXplID09PSBcIm51bWJlclwiID8gZm9udFNpemUgOiBmb250LnNpemU7XG4gICAgZm9udFNpemUgPSB0aGlzLnBvaW50VG9QaXhlbChmb250U2l6ZSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHhTY2FsZShmb250LCBmb250U2l6ZSk7XG59O1xuIiwidmFyIHRtcEJvdW5kcyA9IHsgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCwgZ2x5cGhzOiAwIH07XG5cbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZShjaHIpIHtcblx0cmV0dXJuIGNocj09PScgJ1xuXHRcdHx8IGNocj09PSdcXG4nXG5cdFx0fHwgY2hyPT09J1xccidcblx0XHR8fCBjaHI9PT0nXFx0Jztcbn1cblxuZnVuY3Rpb24gaWR4T2YodGV4dCwgY2hyLCBzdGFydCwgZW5kKSB7XG5cdHZhciBpZHggPSB0ZXh0LmluZGV4T2YoY2hyLCBzdGFydCk7XG5cdGlmIChpZHggPT09IC0xIHx8IGlkeCA+IGVuZClcblx0XHRyZXR1cm4gZW5kO1xuXHRyZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBXb3JkV3JhcCh0ZXh0KSB7XG5cdC8qKlxuXHQgKiBUaGUgdGV4dCBiZWluZyBvcGVyYXRlZCBvbi5cblx0ICogQHBhcmFtIHtTdHJpbmd9IHRleHRcblx0ICovXG5cdHRoaXMudGV4dCA9IHRleHR8fFwiXCI7XG5cblx0LyoqXG5cdCAqIEFuIGFycmF5IG9mIGxpbmVzIHJlcHJlc2VudGluZyB0aGUgc3RhdGUgb2YgdGhpcyB3b3JkIHdyYXBwZXIuXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGxpbmVzXG5cdCAqL1xuXHR0aGlzLmxpbmVzID0gW107XG5cblx0LyoqIFxuXHQgKiBUaGUgbmV3bGluZSBjaGFyYWN0ZXIgdG8gYnJlYWsgb24sIGRlZmF1bHQgJ1xcbidcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5ld2xpbmVcblx0ICovXG5cdHRoaXMubmV3bGluZSA9ICdcXG4nO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRvIGNsaXAgbm9uLWJyZWFraW5nIHRleHQgKG5vd3JhcCBhbmQgcHJlKVxuXHQgKiBpZiB0aGUgd3JhcFdpZHRoIGlzIHRvbyBzbWFsbC4gXG5cdCAqICBcblx0ICogQHBhcmFtIHtCb29sZWFufSBjbGlwXG5cdCAqL1xuXHR0aGlzLmNsaXAgPSBmYWxzZTtcblxuXHQvKipcblx0ICogVGhlIG1vZGUgZm9yIHdvcmR3cmFwcGluZzogJ3ByZScsICdub3JtYWwnLCBvciAnbm93cmFwJy5cblx0ICpcblx0ICogWW91IGNhbiBhbHNvIHVzZSB0aGUgYFBSRWAsIGBOT1JNQUxgLCBhbmQgYE5PV1JBUGAgY29uc3RhbnRzXG5cdCAqIGluIGBXb3JkV3JhcC5Nb2RlYC5cblx0ICogXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlXG5cdCAqL1xuXHR0aGlzLm1vZGUgPSBXb3JkV3JhcC5Nb2RlLk5PUk1BTDtcbn1cblxuV29yZFdyYXAuTW9kZSA9IHtcblx0UFJFOiAncHJlJywgICAgICAgLy93aGl0ZXNwYWNlIGlzbid0IGNvbGxhcHNlZFxuXHROT1JNQUw6ICdub3JtYWwnLCAvL3doaXRlc3BhY2UgaXMgY29sbGFwc2VkXG5cdE5PV1JBUDogJ25vd3JhcCcgIC8vb25seSBicmVhayBvbiAnXFxuJ1xufTtcblxuLyoqXG4gKiBDbGVhcnMgYW55IG11bHRpLWxpbmUgbGF5b3V0IGJ5IHBsYWNpbmcgYWxsIHRoZSB0ZXh0IGluIGEgc2luZ2xlIExpbmUgb2JqZWN0LlxuICogXG4gKiBAcGFyYW0ge0dseXBoSXRlcmF0b3J9IGl0ZXJhdG9yIHRoZSBpdGVyYXRvciB0byB1c2UgXG4gKiBAbWV0aG9kICBjbGVhckxheW91dFxuICovXG5Xb3JkV3JhcC5wcm90b3R5cGUuY2xlYXJMYXlvdXQgPSBmdW5jdGlvbihpdGVyYXRvcikge1xuXHR0aGlzLmxpbmVzLmxlbmd0aCA9IDA7XG5cdFxuXHRpZiAodGhpcy50ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHRpdGVyYXRvci5nZXRCb3VuZHModGhpcy50ZXh0LCAwLCB0aGlzLnRleHQubGVuZ3RoLCB1bmRlZmluZWQsIHRtcEJvdW5kcyk7XG5cdFx0XG5cdFx0dmFyIGxpbmUgPSBuZXcgV29yZFdyYXAuTGluZSgwLCB0aGlzLnRleHQubGVuZ3RoLCB0bXBCb3VuZHMud2lkdGgpO1xuXHRcdHRoaXMubGluZXMucHVzaChsaW5lKTtcblx0fVxufTtcblxuLyoqXG4gKiBSZXNldHMgdGhlIHdvcmQgd3JhcHBlciBieSBlbXB0eWluZyBhbGwgY3VycmVudCBsaW5lcy5cbiAqIEBtZXRob2QgIGVtcHR5XG4gKi9cbldvcmRXcmFwLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmxpbmVzLmxlbmd0aCA9IDA7XG59O1xuXG4vKipcbiAqIFdvcmQtd3JhcHMgdGhlIGdpdmVuIHRleHQgaW50byBtdWx0aXBsZSBsaW5lcy5cbiAqIEBwYXJhbSAge1t0eXBlXX0gaXRlcmF0b3IgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSB3aWR0aCAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IHN0YXJ0ICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gZW5kICAgICAgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbldvcmRXcmFwLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbihpdGVyYXRvciwgd3JhcFdpZHRoLCBzdGFydCwgZW5kKSB7XG5cdHZhciB0ZXh0ID0gdGhpcy50ZXh0O1xuXG5cdHZhciBsaW5lcyA9IHRoaXMubGluZXM7XG5cblx0c3RhcnQgPSBNYXRoLm1heCgwLCBzdGFydHx8MCk7XG5cdGVuZCA9IChlbmQ9PT0wfHxlbmQpID8gZW5kIDogdGV4dC5sZW5ndGg7XG5cblx0aXRlcmF0b3IuYmVnaW4oKTtcblxuXHQvL2RlZmF1bHQgd3JhcCB3aWR0aC4uLlxuXHR3cmFwV2lkdGggPSAod3JhcFdpZHRoPT09MCB8fCB3cmFwV2lkdGgpID8gd3JhcFdpZHRoIDogTnVtYmVyLk1BWF9WQUxVRTtcblxuXHQvLzxwcmU+IG1vZGUganVzdCB1c2VzIGEgc2ltcGxlIGFsZ29yaXRobS4uLlxuXHRpZiAodGhpcy5tb2RlID09PSBXb3JkV3JhcC5Nb2RlLlBSRSkge1xuXHRcdHZhciBsaW5lU3RhcnQgPSBzdGFydDtcblx0XHRmb3IgKHZhciBpPXN0YXJ0OyBpPGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hyID0gdGV4dC5jaGFyQXQoaSk7XG5cblx0XHRcdC8vSWYgd2UndmUgcmVhY2hlZCBhIG5ld2xpbmUsIHRoZW4gc3RlcCBkb3duIGEgbGluZVxuXHRcdFx0Ly9PciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBFT0Zcblx0XHRcdGlmICggY2hyID09PSB0aGlzLm5ld2xpbmUgfHwgaT09PWVuZC0xKSB7XG5cdFx0XHRcdHZhciBhdmFpbGFibGVXaWR0aCA9IHRoaXMuY2xpcCA/IHdyYXBXaWR0aCA6IHVuZGVmaW5lZDtcblx0XHRcdFx0aXRlcmF0b3IuZ2V0Qm91bmRzKHRleHQsIGxpbmVTdGFydCwgaSsxLCBhdmFpbGFibGVXaWR0aCwgdG1wQm91bmRzKTtcblx0XHRcdFx0bGluZXMucHVzaCggbmV3IFdvcmRXcmFwLkxpbmUobGluZVN0YXJ0LCBsaW5lU3RhcnQrdG1wQm91bmRzLmdseXBocywgdG1wQm91bmRzLndpZHRoKSApO1xuXHRcdFx0XHRsaW5lU3RhcnQgPSBpKzE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IFxuXHQvLydub3JtYWwnIG1vZGUgdXNlcyBMaWJHRFgncyB3b3JkIHdyYXBwaW5nIGFsZ29yaXRobTpcblx0Ly9odHRwczovL2dpdGh1Yi5jb20vbGliZ2R4L2xpYmdkeC9ibG9iL21hc3Rlci9nZHgvc3JjL2NvbS9iYWRsb2dpYy9nZHgvZ3JhcGhpY3MvZzJkL0JpdG1hcEZvbnRDYWNoZS5qYXZhXG5cdGVsc2Uge1xuXHRcdC8vaWYgJ25vd3JhcCcgaXMgc3BlY2lmaWVkLCB3ZSBvbmx5IHdyYXAgb24gbmV3bGluZSBjaGFyc1xuXHRcdFxuXHRcdHZhciB0ZXN0V2lkdGggPSB3cmFwV2lkdGg7XG5cdFx0aWYgKHRoaXMubW9kZSA9PT0gV29yZFdyYXAuTW9kZS5OT1dSQVApIHtcblx0XHRcdHRlc3RXaWR0aCA9IE51bWJlci5NQVhfVkFMVUU7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKHN0YXJ0IDwgZW5kKSB7XG5cdFx0XHQvL2dldCBuZXh0IG5ld2xpbmUgcG9zaXRpb25cblx0XHRcdHZhciBuZXdMaW5lID0gaWR4T2YodGV4dCwgdGhpcy5uZXdsaW5lLCBzdGFydCwgZW5kKTtcblxuXHRcdFx0Ly9lYXQgd2hpdGVzcGFjZSBhdCBzdGFydCBvZiBsaW5lXG5cdFx0XHR3aGlsZSAoc3RhcnQgPCBuZXdMaW5lKSB7XG5cdFx0XHRcdGlmICghaXNXaGl0ZXNwYWNlKCB0ZXh0LmNoYXJBdChzdGFydCkgKSlcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0c3RhcnQrKztcblx0XHRcdH1cblxuXHRcdFx0Ly9kZXRlcm1pbmUgdmlzaWJsZSAjIG9mIGdseXBocyBmb3IgdGhlIGF2YWlsYWJsZSB3aWR0aFxuXHRcdFx0aXRlcmF0b3IuZ2V0Qm91bmRzKHRleHQsIHN0YXJ0LCBuZXdMaW5lLCB0ZXN0V2lkdGgsIHRtcEJvdW5kcylcblxuXHRcdFx0dmFyIGxpbmVFbmQgPSBzdGFydCArIHRtcEJvdW5kcy5nbHlwaHM7XG5cdFx0XHR2YXIgbmV4dFN0YXJ0ID0gbGluZUVuZCArIHRoaXMubmV3bGluZS5sZW5ndGg7XG5cblx0XHRcdC8vaWYgd2UgaGFkIHRvIGN1dCB0aGUgbGluZSBiZWZvcmUgdGhlIG5leHQgbmV3bGluZS4uLlxuXHRcdFx0aWYgKGxpbmVFbmQgPCBuZXdMaW5lKSB7XG5cdFx0XHRcdC8vZmluZCBjaGFyIHRvIGJyZWFrIG9uXG5cdFx0XHRcdHdoaWxlIChsaW5lRW5kID4gc3RhcnQpIHtcblx0XHRcdFx0XHRpZiAoaXNXaGl0ZXNwYWNlKHRleHQuY2hhckF0KGxpbmVFbmQpKSlcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGxpbmVFbmQtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobGluZUVuZCA9PT0gc3RhcnQpIHtcblx0XHRcdFx0XHRpZiAobmV4dFN0YXJ0ID4gc3RhcnQgKyB0aGlzLm5ld2xpbmUubGVuZ3RoKSBuZXh0U3RhcnQtLTtcblx0XHRcdFx0XHRsaW5lRW5kID0gbmV4dFN0YXJ0OyAvLyBJZiBubyBjaGFyYWN0ZXJzIHRvIGJyZWFrLCBzaG93IGFsbC5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRuZXh0U3RhcnQgPSBsaW5lRW5kO1xuXHRcdFx0XHRcdC8vZWF0IHdoaXRlc3BhY2UgYXQgZW5kIG9mIGxpbmVcblx0XHRcdFx0XHR3aGlsZSAobGluZUVuZCA+IHN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWlzV2hpdGVzcGFjZSh0ZXh0LmNoYXJBdChsaW5lRW5kIC0gdGhpcy5uZXdsaW5lLmxlbmd0aCkpKVxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGxpbmVFbmQtLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGxpbmVFbmQgPiBzdGFydCkge1xuXHRcdFx0XHQvL3RvIGNsaXAsIHVzZSB0aGUgb3JpZ2luYWwgd3JhcCB3aWR0aCAodW5hbHRlcmVkIGJ5IG1vZGUpXG5cdFx0XHRcdHZhciBhdmFpbGFibGVXaWR0aCA9IHRoaXMuY2xpcCA/IHdyYXBXaWR0aCA6IHVuZGVmaW5lZDtcblx0XHRcdFx0aXRlcmF0b3IuZ2V0Qm91bmRzKHRleHQsIHN0YXJ0LCBsaW5lRW5kLCBhdmFpbGFibGVXaWR0aCwgdG1wQm91bmRzKTtcblx0XHRcdFx0dmFyIGxpbmVXaWR0aCA9IHRtcEJvdW5kcy53aWR0aDtcblxuXHRcdFx0XHR2YXIgckxpbmVFbmQgPSB0aGlzLmNsaXAgPyBzdGFydCt0bXBCb3VuZHMuZ2x5cGhzIDogbGluZUVuZDtcblx0XHRcdFx0bGluZXMucHVzaCggbmV3IFdvcmRXcmFwLkxpbmUoc3RhcnQsIHJMaW5lRW5kLCBsaW5lV2lkdGgpICk7XG5cdFx0XHR9XG5cdFx0XHRzdGFydCA9IG5leHRTdGFydDtcblxuXHRcdH1cblx0fVxuXG5cdGl0ZXJhdG9yLmVuZCgpO1xufTtcblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIG1ldGhvZCB0byByZXR1cm4gdGhlIG1heGltdW0gd2lkdGggb2YgYWxsIGN1cnJlbnQgbGluZXMuXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3IgYWxpZ25pbmcgYmxvY2tzIG9mIHRleHQuXG4gKlxuICogQG1ldGhvZCAgZ2V0TWF4TGluZVdpZHRoXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBtYXhpbXVtIHdpZHRoIG9mIGFsbCBsaW5lc1xuICovXG5Xb3JkV3JhcC5wcm90b3R5cGUuZ2V0TWF4TGluZVdpZHRoID0gZnVuY3Rpb24oKSB7XG5cdHZhciBtYXhXaWR0aCA9IDA7XG5cdGZvciAodmFyIGk9MDsgaTx0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGxpbmUgPSB0aGlzLmxpbmVzW2ldO1xuXHRcdG1heFdpZHRoID0gTWF0aC5tYXgobGluZS53aWR0aCwgbWF4V2lkdGgpO1xuXHR9XG5cdHJldHVybiBtYXhXaWR0aDtcbn07XG5cbi8qKlxuICogVGhlIExpbmUgb2JqZWN0IGhvbGRzIHRoZSBzdGFydCBhbmQgZW5kIGluZGljZXMgaW50byB0aGUgc3RyaW5nLFxuICogYW5kIHRoZSB3aWR0aCBhcyBjb21wdXRlZCBieSBHbHlwaEl0ZXJhdG9yLlxuICogXG4gKiBAY2xhc3MgIFdvcmRXcmFwLkxpbmVcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCB0aGUgc3RhcnQgaW5kZXgsIGluY2x1c2l2ZVxuICogQHBhcmFtIHtOdW1iZXJ9IGVuZCAgIHRoZSBlbmQgaW5kZXgsIGV4Y2x1c2l2ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIHRoZSBjb21wdXRlZCB3aWR0aCBvZiB0aGlzIGxpbmVcbiAqL1xuV29yZFdyYXAuTGluZSA9IGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIHdpZHRoKSB7XG5cdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0dGhpcy5lbmQgPSBlbmQ7XG5cdHRoaXMud2lkdGggPSB3aWR0aDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gV29yZFdyYXA7IiwidmFyIGNyZWF0ZVZBTyA9IHJlcXVpcmUoJ2dsLWFsaWFzZWQtdmFvJykgLy9UT0RPOiBpbXByb3ZlIHRoaXMgd2l0aCBnbC12YW9cbnZhciBjcmVhdGVCdWZmZXIgPSByZXF1aXJlKCdnbC1idWZmZXInKVxuXG5tb2R1bGUuZXhwb3J0cy5mbG9hdHNQZXJWZXJ0ZXggPSA1XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGljZXMoY2FwYWNpdHkpIHtcbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNhcGFjaXR5ICogNlxuICAgIHZhciBpbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KG51bUluZGljZXMpXG5cbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNCkge1xuICAgICAgICBpbmRpY2VzW2kgKyAwXSA9IGogKyAwXG4gICAgICAgIGluZGljZXNbaSArIDFdID0gaiArIDFcbiAgICAgICAgaW5kaWNlc1tpICsgMl0gPSBqICsgMlxuICAgICAgICBpbmRpY2VzW2kgKyAzXSA9IGogKyAwXG4gICAgICAgIGluZGljZXNbaSArIDRdID0gaiArIDJcbiAgICAgICAgaW5kaWNlc1tpICsgNV0gPSBqICsgM1xuICAgIH1cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuXG5tb2R1bGUuZXhwb3J0cy5taXhpbnMgPSB7XG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShvcHQpIHtcbiAgICAgICAgb3B0ID0gb3B0fHx7fVxuICAgICAgICB0aGlzLmNsZWFyKClcblxuICAgICAgICAvL2Rpc3Bvc2UgYmVmb3JlIGJ1aWxkaW5nLi4uXG4gICAgICAgIGlmICh0aGlzLnZhbylcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpXG5cbiAgICAgICAgdmFyIGNhcGFjaXR5ID0gdHlwZW9mIG9wdC5jYXBhY2l0eSA9PT0gJ251bWJlcicgPyBvcHQuY2FwYWNpdHkgOiAxMDBcblxuICAgICAgICAvLyA2NTUzNSBpcyBtYXggaW5kZXgsIHNvIDY1NTM1IC8gNiA9IDEwOTIyLlxuICAgICAgICBpZiAoY2FwYWNpdHkgPiAxMDkyMilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGhhdmUgbW9yZSB0aGFuIDEwOTIyIHF1YWRzIHBlciBiYXRjaDogXCIgKyBjYXBhY2l0eSlcblxuICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5XG5cbiAgICAgICAgLy90aGUgdG90YWwgbnVtYmVyIG9mIGZsb2F0cyBpbiBvdXIgYmF0Y2hcbiAgICAgICAgdmFyIG51bVZlcnRzID0gY2FwYWNpdHkgKiA0ICogbW9kdWxlLmV4cG9ydHMuZmxvYXRzUGVyVmVydGV4XG5cbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtVmVydHMpXG4gICAgICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoY2FwYWNpdHkpXG5cbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbFxuICAgICAgICB2YXIgdXNhZ2UgPSBvcHQuZHluYW1pYyA/IGdsLkRZTkFNSUNfRFJBVyA6IGdsLlNUQVRJQ19EUkFXXG4gICAgICAgIHRoaXMudmVydGV4QnVmZmVyID0gY3JlYXRlQnVmZmVyKGdsLCB0aGlzLnZlcnRpY2VzLCBnbC5BUlJBWV9CVUZGRVIsIHVzYWdlKVxuICAgICAgICB0aGlzLmluZGV4QnVmZmVyID0gY3JlYXRlQnVmZmVyKGdsLCB0aGlzLmluZGljZXMsIGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBnbC5TVEFUSUNfRFJBVylcblxuICAgICAgICB2YXIgc3RyaWRlID0gNSAqIDRcbiAgICAgICAgdGhpcy52YW8gPSBjcmVhdGVWQU8oZ2wsIFt7IC8vcG9zaXRpb24gWFlcbiAgICAgICAgICAgIG5hbWU6ICdwb3NpdGlvbicsXG4gICAgICAgICAgICBidWZmZXI6IHRoaXMudmVydGV4QnVmZmVyLFxuICAgICAgICAgICAgc2l6ZTogMixcbiAgICAgICAgICAgIHN0cmlkZTogc3RyaWRlXG4gICAgICAgIH0sIHsgLy90ZXhjb29yZCBVVlxuICAgICAgICAgICAgbmFtZTogJ3RleGNvb3JkMCcsXG4gICAgICAgICAgICBidWZmZXI6IHRoaXMudmVydGV4QnVmZmVyLFxuICAgICAgICAgICAgc2l6ZTogMixcbiAgICAgICAgICAgIG9mZnNldDogMiAqIDQsXG4gICAgICAgICAgICBzdHJpZGU6IHN0cmlkZVxuICAgICAgICB9LCB7IC8vY29sb3IgKHBhY2tlZCkgQ1xuICAgICAgICAgICAgbmFtZTogJ2NvbG9yJyxcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy52ZXJ0ZXhCdWZmZXIsXG4gICAgICAgICAgICBzaXplOiA0LFxuICAgICAgICAgICAgc3RyaWRlOiBzdHJpZGUsXG4gICAgICAgICAgICBvZmZzZXQ6IDQgKiA0LFxuICAgICAgICAgICAgdHlwZTogZ2wuVU5TSUdORURfQllURSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQ6IHRydWVcbiAgICAgICAgfV0sIHRoaXMuaW5kZXhCdWZmZXIpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGVuc3VyZUNhcGFjaXR5OiBmdW5jdGlvbihjYXBhY2l0eSkge1xuICAgICAgICBpZiAodGhpcy5jYXBhY2l0eSA8IGNhcGFjaXR5KVxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoeyBjYXBhY2l0eTogY2FwYWNpdHkgfSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwidmFyIGNvbG9yVG9GbG9hdCA9IHJlcXVpcmUoJy4vcGFjay1yZ2JhLWZsb2F0JylcbnZhciBtaXhlcyA9IHJlcXVpcmUoJ21peGVzJylcbnZhciBwcmVtdWx0ID0gcmVxdWlyZSgncHJlbXVsdGlwbGllZC1yZ2JhJylcbnZhciBXaGl0ZVRleCA9IHJlcXVpcmUoJ2dsLXdoaXRlLXRleHR1cmUnKVxuXG52YXIgdmVydE51bUZsb2F0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykuZmxvYXRzUGVyVmVydGV4XG5cbi8vVGVtcG9yYXJ5IGFycmF5cyB0byBhdm9pZCBHQyB0aHJhc2hpbmdcbnZhciBwb3NpdGlvbiA9IFswLCAwXSxcbiAgICBzaGFwZSA9IFswLCAwXSxcbiAgICB0ZXhjb29yZCA9IFswLCAwLCAwLCAwXSxcbiAgICBjb2xvciA9IFswLCAwLCAwLCAwXVxuXG52YXIgdG1wNCA9IFswLCAwLCAwLCAwXSxcbiAgICByb3RPcmlnaW4gPSBbMCwgMF0sXG4gICAgdG1wMiA9IFswLCAwXVxuXG5mdW5jdGlvbiBTcHJpdGVCYXRjaChnbCwgb3B0KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNwcml0ZUJhdGNoKSlcbiAgICAgICAgcmV0dXJuIG5ldyBTcHJpdGVCYXRjaChnbCwgb3B0KVxuICAgIGlmICghZ2wpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm11c3Qgc3BlY2lmeSBnbCBjb250ZXh0XCIpXG4gICAgdGhpcy5nbCA9IGdsXG4gICAgb3B0ID0gb3B0IHx8IHt9XG4gICAgXG4gICAgdGhpcy5fYm91bmQgPSBmYWxzZVxuICAgIHRoaXMuaWR4ID0gMFxuXG4gICAgLy9ubyB0cmFuc2Zvcm0gbWVhbnMgaWRlbnRpdHlcbiAgICB0aGlzLnRyYW5zZm9ybSA9IG51bGxcblxuICAgIC8vd2hpdGUgdGV4dHVyZSBpcyBha2luIHRvIFwibm8gdGV4dHVyZVwiICh3aXRob3V0IHN3aXRjaGluZyBzaGFkZXJzKVxuICAgIHRoaXMuX2RlZmF1bHRUZXh0dXJlID0gV2hpdGVUZXgoZ2wpXG4gICAgdGhpcy5fbGFzdFRleHR1cmUgPSB0aGlzLl9kZWZhdWx0VGV4dHVyZVxuICAgIHRoaXMuX3RleHR1cmUgPSB0aGlzLl9kZWZhdWx0VGV4dHVyZVxuICAgIHRoaXMudGV4dHVyZSA9IG51bGxcblxuICAgIHRoaXMubW9kZSA9IHR5cGVvZiBvcHQubW9kZSA9PT0gJ251bWJlcicgPyBvcHQubW9kZSA6IGdsLlRSSUFOR0xFU1xuICAgIHRoaXMucHJlbXVsdGlwbGllZCA9IG9wdC5wcmVtdWx0aXBsaWVkIHx8IGZhbHNlXG5cbiAgICB0aGlzLl9kaXJ0eSA9IHRydWVcbiAgICB0aGlzLmNyZWF0ZShvcHQpXG5cbiAgICAvL3NldCBkZWZhdWx0IGF0dHJpYnV0ZXNcbiAgICB0aGlzLmRlZmF1bHRzKClcbn1cblxuLy9taXggaW4gY3JlYXRlKCkgYW5kIGVuc3VyZUNhcGFjaXR5KCkgZnVuY3Rpb25zXG5taXhlcyhTcHJpdGVCYXRjaCwgcmVxdWlyZSgnLi9jb21tb24nKS5taXhpbnMpXG5cbm1peGVzKFNwcml0ZUJhdGNoLCB7XG5cbiAgICBjYXBhY2l0eToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdGV4dHVyZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmVcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHRleCkge1xuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZSA9IHRleCB8fCB0aGlzLl9kZWZhdWx0VGV4dHVyZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy52ZXJ0ZXhCdWZmZXIpXG4gICAgICAgICAgICB0aGlzLnZlcnRleEJ1ZmZlci5kaXNwb3NlKClcbiAgICAgICAgaWYgKHRoaXMuaW5kZXhCdWZmZXIpXG4gICAgICAgICAgICB0aGlzLmluZGV4QnVmZmVyLmRpc3Bvc2UoKVxuICAgICAgICBpZiAodGhpcy52YW8pXG4gICAgICAgICAgICB0aGlzLnZhby5kaXNwb3NlKClcbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmlkeCA9IDBcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgYmluZDogZnVuY3Rpb24oc2hhZGVyKSB7XG4gICAgICAgIHNoYWRlci5iaW5kKClcbiAgICAgICAgdGhpcy52YW8uYmluZChzaGFkZXIpXG4gICAgICAgIHRoaXMuX2JvdW5kID0gdHJ1ZVxuICAgIH0sXG5cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnZhby51bmJpbmQoKVxuICAgICAgICB0aGlzLl9ib3VuZCA9IGZhbHNlXG4gICAgfSxcblxuICAgIGRlZmF1bHRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGNvcHkyKHBvc2l0aW9uLCAwLCAwKVxuICAgICAgICB0aGlzLnRleGNvb3JkID0gY29weTQodGV4Y29vcmQsIDAsIDAsIDEsIDEpXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb3B5NChjb2xvciwgMSwgMSwgMSwgMSlcbiAgICAgICAgdGhpcy5zaGFwZSA9IGNvcHkyKHNoYXBlLCAwLCAwKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBwdXNoOiBmdW5jdGlvbihzcHJpdGUpIHtcbiAgICAgICAgLy9pZiB3ZSBhcmUgZGVmaW5pbmcgYXR0cmlidXRlcyBvbiB0aGUgZmx5XG4gICAgICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHNwcml0ZS50ZXh0dXJlXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gc3ByaXRlLnBvc2l0aW9uIHx8IGNvcHkyKHBvc2l0aW9uLCAwLCAwKVxuICAgICAgICAgICAgdGhpcy50ZXhjb29yZCA9IHNwcml0ZS50ZXhjb29yZCB8fCBjb3B5NCh0ZXhjb29yZCwgMCwgMCwgMSwgMSlcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBzcHJpdGUuY29sb3IgfHwgY29weTQoY29sb3IsIDEsIDEsIDEsIDEpXG4gICAgICAgICAgICB0aGlzLnNoYXBlID0gc3ByaXRlLnNoYXBlIHx8IGNvcHkyKHNoYXBlLCAwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZSAhPT0gdGhpcy5fbGFzdFRleHR1cmUpIHtcbiAgICAgICAgICAgIC8vbmV3IHRleHR1cmUsIGZsdXNoIHByZXZpb3VzIGRhdGFcbiAgICAgICAgICAgIGlmICh0aGlzLl9ib3VuZClcbiAgICAgICAgICAgICAgICB0aGlzLmZsdXNoKClcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUZXh0dXJlID0gdGhpcy50ZXh0dXJlXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZHggPT09IHRoaXMudmVydGljZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvL2lmIHdlIEFSRU4nVCBib3VuZCwgd2UgbmVlZCB0byBzdG9wIHB1c2hpbmcgdmVydGV4IGRhdGEhXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2JvdW5kKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzXG5cbiAgICAgICAgICAgIC8vaWYgd2UgQVJFIGJvdW5kLCB3ZSBjYW4gZmx1c2ggdGhlIGJhdGNoIGFuZCBjb250aW51ZSBkcmF3aW5nXG4gICAgICAgICAgICB0aGlzLmZsdXNoKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZVxuXG4gICAgICAgIC8vZ2V0IFJHQkEgY29tcG9uZW50cyBhbmQgcGFjayBpbnRvIGEgc2luZ2xlIGZsb2F0XG4gICAgICAgIHZhciBjb2xvclJHQkEgPSB0aGlzLnByZW11bHRpcGxpZWQgPyBwcmVtdWx0KHRoaXMuY29sb3IsIHRtcDQpIDogdGhpcy5jb2xvclxuICAgICAgICB2YXIgYyA9IGNvbG9yVG9GbG9hdChjb2xvclJHQkEpXG5cbiAgICAgICAgdmFyIHUxID0gdGhpcy50ZXhjb29yZFswXSxcbiAgICAgICAgICAgIHYxID0gdGhpcy50ZXhjb29yZFsxXSxcbiAgICAgICAgICAgIHUyID0gdGhpcy50ZXhjb29yZFsyXSxcbiAgICAgICAgICAgIHYyID0gdGhpcy50ZXhjb29yZFszXVxuXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvblswXSxcbiAgICAgICAgICAgIHkgPSB0aGlzLnBvc2l0aW9uWzFdLFxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLnNoYXBlWzBdLFxuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5zaGFwZVsxXVxuXG4gICAgICAgIHRoaXMuX3ZlcnQoeCwgeSwgdTEsIHYxLCBjKVxuICAgICAgICB0aGlzLl92ZXJ0KHgrd2lkdGgsIHksIHUyLCB2MSwgYylcbiAgICAgICAgdGhpcy5fdmVydCh4K3dpZHRoLCB5K2hlaWdodCwgdTIsIHYyLCBjKVxuICAgICAgICB0aGlzLl92ZXJ0KHgsIHkraGVpZ2h0LCB1MSwgdjIsIGMpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBfdmVydDogZnVuY3Rpb24oeDEsIHkxLCB1MSwgdjEsIGMpIHtcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuaWR4LFxuICAgICAgICAgICAgdmVydHMgPSB0aGlzLnZlcnRpY2VzLFxuICAgICAgICAgICAgdHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1cblxuICAgICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgICAgICB2YXIgeCA9IHgxLCB5ID0geTFcbiAgICAgICAgICAgIHgxID0gdHJhbnNmb3JtWzBdICogeCArIHRyYW5zZm9ybVs0XSAqIHkgKyB0cmFuc2Zvcm1bMTJdXG4gICAgICAgICAgICB5MSA9IHRyYW5zZm9ybVsxXSAqIHggKyB0cmFuc2Zvcm1bNV0gKiB5ICsgdHJhbnNmb3JtWzEzXVxuICAgICAgICB9XG5cbiAgICAgICAgLy94eVxuICAgICAgICB2ZXJ0c1tpZHgrK10gPSB4MVxuICAgICAgICB2ZXJ0c1tpZHgrK10gPSB5MVxuICAgICAgICAvL3V2XG4gICAgICAgIHZlcnRzW2lkeCsrXSA9IHUxXG4gICAgICAgIHZlcnRzW2lkeCsrXSA9IHYxXG4gICAgICAgIC8vY29sb3JcbiAgICAgICAgdmVydHNbaWR4KytdID0gY1xuICAgICAgICB0aGlzLmlkeCA9IGlkeFxuICAgIH0sXG5cbiAgICBmbHVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyKClcbiAgICB9LFxuXG4gICAgZHJhdzogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vSWYgd2UndmUgcmVhY2hlZCBhIG5ldyB0ZXh0dXJlIG9yIGNhcGFjaXR5XG4gICAgICAgIC8vd2hpbGUgbm90IGJvdW5kLCB0aGVuIHdlIHdpbGwganVzdCBjbGVhciB0aGUgYmF0Y2hcbiAgICAgICAgLy90byB6ZXJvIGFuZCBkcmF3IG5vdGhpbmdcbiAgICAgICAgaWYgKHRoaXMuaWR4ID09PSAwIHx8ICF0aGlzLl9ib3VuZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG5cbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbFxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX2RpcnR5KSB7XG4gICAgICAgICAgICB2YXIgdmlldyA9IHRoaXMudmVydGljZXMuc3ViYXJyYXkoMCwgdGhpcy5pZHgpXG4gICAgICAgICAgICB0aGlzLnZlcnRleEJ1ZmZlci51cGRhdGUodmlldywgMClcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9sYXN0VGV4dHVyZSlcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUZXh0dXJlLmJpbmQoKVxuICAgICAgICB0aGlzLl9sYXN0VGV4dHVyZSA9IHRoaXMudGV4dHVyZVxuXG4gICAgICAgIHZhciBzcHJpdGVzID0gKHRoaXMuaWR4IC8gKHZlcnROdW1GbG9hdHMgKiA0KSlcbiAgICAgICAgaWYgKHNwcml0ZXMgPiAwKVxuICAgICAgICAgICAgdGhpcy52YW8uZHJhdyh0aGlzLm1vZGUsIHNwcml0ZXMgKiA2LCAwKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwcml0ZUJhdGNoXG5cbi8vVE9ETzogd2lsbCB1c2UgbW9kdWxhciBnbC1tYXRyaXggZm9yIHRoZXNlLi4uXG5mdW5jdGlvbiBjb3B5MihvdXQsIHgsIHkpIHtcbiAgICBvdXRbMF0gPSB4XG4gICAgb3V0WzFdID0geVxuICAgIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gY29weTQob3V0LCB4LCB5LCB6LCB3KSB7XG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICBvdXRbMl0gPSB6XG4gICAgb3V0WzNdID0gd1xuICAgIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gY29weVZlYzIob3V0LCB2ZWMpIHtcbiAgICByZXR1cm4gY29weTIob3V0LCB2ZWNbMF0sIHZlY1sxXSlcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzEzXVxuICAgIHJldHVybiBvdXRcbn0iLCJ2YXIgY3JlYXRlVkFPRW11bGF0ZWQgPSByZXF1aXJlKFwiLi9saWIvdmFvLWVtdWxhdGVkLmpzXCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZVZBTyhnbCwgYXR0cmlidXRlcywgZWxlbWVudHMsIGVsZW1lbnRzVHlwZSkge1xuICB2YXIgdmFvID0gY3JlYXRlVkFPRW11bGF0ZWQoZ2wpXG4gIHZhby51cGRhdGUoYXR0cmlidXRlcywgZWxlbWVudHMsIGVsZW1lbnRzVHlwZSlcbiAgcmV0dXJuIHZhb1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVZBTyIsImZ1bmN0aW9uIGdldEF0dHJpYnV0ZUxvY2F0aW9uKG5hbWUsIHNoYWRlcikge1xuICAgIGlmICghbmFtZSlcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB2YXIgYXR0ciA9IHNoYWRlci5hdHRyaWJ1dGVzXG4gICAgaWYgKGF0dHJbbmFtZV0pIFxuICAgICAgICByZXR1cm4gYXR0cltuYW1lXS5sb2NhdGlvblxuICAgIHJldHVybiBudWxsXG59XG5cbnZhciBuYXR0cmlicyA9IG51bGxcbnZhciBib3VuZCA9IG51bGxcblxuZnVuY3Rpb24gZG9CaW5kKGdsLCBlbGVtZW50cywgYXR0cmlidXRlcywgc2hhZGVyKSB7XG4gICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgIGVsZW1lbnRzLmJpbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpXG4gICAgfVxuICAgIGlmIChuYXR0cmlicyA9PT0gbnVsbCkge1xuICAgICAgbmF0dHJpYnMgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9BVFRSSUJTKSB8IDBcbiAgICAgIGJvdW5kID0gbmV3IEFycmF5KG5hdHRyaWJzKVxuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IG5hdHRyaWJzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC12YW86IFRvbyBtYW55IHZlcnRleCBhdHRyaWJ1dGVzXCIpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGFzdEJvdW5kID0gbnVsbFxuXG4gICAgICAgIGZvciAoaT0wOyBpPG5hdHRyaWJzOyBpKyspXG4gICAgICAgICAgYm91bmRbaV0gPSBmYWxzZVxuXG4gICAgICAgIC8vbm93IGJpbmQgYWxpYXNlZCBhdHRyaWJ1dGVzXG4gICAgICAgIGZvciAoaT0wOyBpPGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhdHRyaWIgPSBhdHRyaWJ1dGVzW2ldXG4gICAgICAgICAgICB2YXIgbG9jID0gZ2V0QXR0cmlidXRlTG9jYXRpb24oYXR0cmliLm5hbWUsIHNoYWRlcilcbiAgICAgICAgICAgIGlmIChsb2MgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgY29udGludWVcblxuICAgICAgICAgICAgYm91bmRbbG9jXSA9IHRydWVcblxuICAgICAgICAgICAgaWYoYXR0cmliLmJ1ZmZlcikge1xuICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gYXR0cmliLmJ1ZmZlclxuICAgICAgICAgICAgICB2YXIgc2l6ZSA9IGF0dHJpYi5zaXplIHx8IDRcbiAgICAgICAgICAgICAgdmFyIHR5cGUgPSBhdHRyaWIudHlwZSB8fCBnbC5GTE9BVFxuICAgICAgICAgICAgICB2YXIgbm9ybWFsaXplZCA9ICEhYXR0cmliLm5vcm1hbGl6ZWRcbiAgICAgICAgICAgICAgdmFyIHN0cmlkZSA9IGF0dHJpYi5zdHJpZGUgfHwgMFxuICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gYXR0cmliLm9mZnNldCB8fCAwXG4gICAgICAgICAgICAgIGlmIChsYXN0Qm91bmQgIT09IGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5iaW5kKClcbiAgICAgICAgICAgICAgICBsYXN0Qm91bmQgPSBidWZmZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2MpXG4gICAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIobG9jLCBzaXplLCB0eXBlLCBub3JtYWxpemVkLCBzdHJpZGUsIG9mZnNldClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmKHR5cGVvZiBhdHRyaWIgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIxZihsb2MsIGF0dHJpYilcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKGF0dHJpYi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIxZihsb2MsIGF0dHJpYlswXSlcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKGF0dHJpYi5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIyZihsb2MsIGF0dHJpYlswXSwgYXR0cmliWzFdKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYoYXR0cmliLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYjNmKGxvYywgYXR0cmliWzBdLCBhdHRyaWJbMV0sIGF0dHJpYlsyXSlcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKGF0dHJpYi5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWI0Zihsb2MsIGF0dHJpYlswXSwgYXR0cmliWzFdLCBhdHRyaWJbMl0sIGF0dHJpYlszXSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC12YW86IEludmFsaWQgdmVydGV4IGF0dHJpYnV0ZVwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2MpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChpPTA7IGk8bmF0dHJpYnM7IGkrKykge1xuICAgICAgICAgIGlmICghYm91bmRbaV0pXG4gICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaSlcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbClcbiAgICAgIGZvcih2YXIgaT0wOyBpPG5hdHRyaWJzOyArK2kpIHtcbiAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpXG4gICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvQmluZCIsInZhciBiaW5kQXR0cmlicyA9IHJlcXVpcmUoXCIuL2RvLWJpbmQuanNcIilcblxuZnVuY3Rpb24gVkFPRW11bGF0ZWQoZ2wpIHtcbiAgdGhpcy5nbCA9IGdsXG4gIHRoaXMuX2VsZW1lbnRzID0gbnVsbFxuICB0aGlzLl9hdHRyaWJ1dGVzID0gbnVsbFxuICB0aGlzLl9lbGVtZW50c1R5cGUgPSBnbC5VTlNJR05FRF9TSE9SVFxufVxuXG5WQU9FbXVsYXRlZC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKHNoYWRlcikge1xuICBpZiAoIXNoYWRlcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3QgYXNzb2NpYXRlIHNoYWRlciB3aXRoIHZlcnRleCBhcnJheScpXG4gIGJpbmRBdHRyaWJzKHRoaXMuZ2wsIHRoaXMuX2VsZW1lbnRzLCB0aGlzLl9hdHRyaWJ1dGVzLCBzaGFkZXIpXG59XG5cblZBT0VtdWxhdGVkLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihhdHRyaWJ1dGVzLCBlbGVtZW50cywgZWxlbWVudHNUeXBlKSB7XG4gIHRoaXMuX2VsZW1lbnRzID0gZWxlbWVudHNcbiAgdGhpcy5fYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNcbiAgdGhpcy5fZWxlbWVudHNUeXBlID0gZWxlbWVudHNUeXBlIHx8IHRoaXMuZ2wuVU5TSUdORURfU0hPUlRcbn1cblxuVkFPRW11bGF0ZWQucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgfVxuVkFPRW11bGF0ZWQucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uKCkge1xuICBiaW5kQXR0cmlicyh0aGlzLmdsKVxufVxuXG5WQU9FbXVsYXRlZC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKG1vZGUsIGNvdW50LCBvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDBcbiAgdmFyIGdsID0gdGhpcy5nbFxuICBpZih0aGlzLl9lbGVtZW50cykge1xuICAgIGdsLmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdGhpcy5fZWxlbWVudHNUeXBlLCBvZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgZ2wuZHJhd0FycmF5cyhtb2RlLCBvZmZzZXQsIGNvdW50KVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZBT0VtdWxhdGVkKGdsKSB7XG4gIHJldHVybiBuZXcgVkFPRW11bGF0ZWQoZ2wpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVkFPRW11bGF0ZWQiLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgcG9vbCA9IHJlcXVpcmUoXCJ0eXBlZGFycmF5LXBvb2xcIilcbnZhciBvcHMgPSByZXF1aXJlKFwibmRhcnJheS1vcHNcIilcbnZhciBuZGFycmF5ID0gcmVxdWlyZShcIm5kYXJyYXlcIilcbnZhciB3ZWJnbGV3ID0gcmVxdWlyZShcIndlYmdsZXdcIilcblxudmFyIFNVUFBPUlRFRF9UWVBFUyA9IFtcbiAgXCJ1aW50OFwiLFxuICBcInVpbnQ4X2NsYW1wZWRcIixcbiAgXCJ1aW50MTZcIixcbiAgXCJ1aW50MzJcIixcbiAgXCJpbnQ4XCIsXG4gIFwiaW50MTZcIixcbiAgXCJpbnQzMlwiLFxuICBcImZsb2F0MzJcIiBdXG5cbmZ1bmN0aW9uIEdMQnVmZmVyKGdsLCB0eXBlLCBoYW5kbGUsIGxlbmd0aCwgdXNhZ2UpIHtcbiAgdGhpcy5nbCA9IGdsXG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5oYW5kbGUgPSBoYW5kbGVcbiAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgdGhpcy51c2FnZSA9IHVzYWdlXG59XG5cbnZhciBwcm90byA9IEdMQnVmZmVyLnByb3RvdHlwZVxuXG5wcm90by5iaW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLnR5cGUsIHRoaXMuaGFuZGxlKVxufVxuXG5wcm90by5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuaGFuZGxlKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVUeXBlQXJyYXkoZ2wsIHR5cGUsIGxlbiwgdXNhZ2UsIGRhdGEsIG9mZnNldCkge1xuICB2YXIgZGF0YUxlbiA9IGRhdGEubGVuZ3RoICogZGF0YS5CWVRFU19QRVJfRUxFTUVOVCBcbiAgaWYob2Zmc2V0IDwgMCkge1xuICAgIGdsLmJ1ZmZlckRhdGEodHlwZSwgZGF0YSwgdXNhZ2UpXG4gICAgcmV0dXJuIGRhdGFMZW5cbiAgfVxuICBpZihkYXRhTGVuICsgb2Zmc2V0ID4gbGVuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtYnVmZmVyOiBJZiByZXNpemluZyBidWZmZXIsIG11c3Qgbm90IHNwZWNpZnkgb2Zmc2V0XCIpXG4gIH1cbiAgZ2wuYnVmZmVyU3ViRGF0YSh0eXBlLCBvZmZzZXQsIGRhdGEpXG4gIHJldHVybiBsZW5cbn1cblxuZnVuY3Rpb24gbWFrZVNjcmF0Y2hUeXBlQXJyYXkoYXJyYXksIGR0eXBlKSB7XG4gIHZhciByZXMgPSBwb29sLm1hbGxvYyhhcnJheS5sZW5ndGgsIGR0eXBlKVxuICB2YXIgbiA9IGFycmF5Lmxlbmd0aFxuICBmb3IodmFyIGk9MDsgaTxuOyArK2kpIHtcbiAgICByZXNbaV0gPSBhcnJheVtpXVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gaXNQYWNrZWQoc2hhcGUsIHN0cmlkZSkge1xuICB2YXIgbiA9IDFcbiAgZm9yKHZhciBpPXN0cmlkZS5sZW5ndGgtMTsgaT49MDsgLS1pKSB7XG4gICAgaWYoc3RyaWRlW2ldICE9PSBuKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgbiAqPSBzaGFwZVtpXVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbnByb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uKGFycmF5LCBvZmZzZXQpIHtcbiAgaWYodHlwZW9mIG9mZnNldCAhPT0gXCJudW1iZXJcIikge1xuICAgIG9mZnNldCA9IC0xXG4gIH1cbiAgdGhpcy5iaW5kKClcbiAgaWYodHlwZW9mIGFycmF5ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBhcnJheS5zaGFwZSAhPT0gXCJ1bmRlZmluZWRcIikgeyAvL25kYXJyYXlcbiAgICB2YXIgZHR5cGUgPSBhcnJheS5kdHlwZVxuICAgIGlmKFNVUFBPUlRFRF9UWVBFUy5pbmRleE9mKGR0eXBlKSA8IDApIHtcbiAgICAgIGR0eXBlID0gXCJmbG9hdDMyXCJcbiAgICB9XG4gICAgaWYodGhpcy50eXBlID09PSB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSKSB7XG4gICAgICB2YXIgd2dsID0gd2ViZ2xldyh0aGlzLmdsKVxuICAgICAgdmFyIGV4dCA9IHdnbC5PRVNfZWxlbWVudF9pbmRleF91aW50XG4gICAgICBpZihleHQgJiYgZHR5cGUgIT09IFwidWludDE2XCIpIHtcbiAgICAgICAgZHR5cGUgPSBcInVpbnQzMlwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdHlwZSA9IFwidWludDE2XCJcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoZHR5cGUgPT09IGFycmF5LmR0eXBlICYmIGlzUGFja2VkKGFycmF5LnNoYXBlLCBhcnJheS5zdHJpZGUpKSB7XG4gICAgICBpZihhcnJheS5vZmZzZXQgPT09IDAgJiYgYXJyYXkuZGF0YS5sZW5ndGggPT09IGFycmF5LnNoYXBlWzBdKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIGFycmF5LmRhdGEsIG9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIGFycmF5LmRhdGEuc3ViYXJyYXkoYXJyYXkub2Zmc2V0LCBhcnJheS5zaGFwZVswXSksIG9mZnNldClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRtcCA9IHBvb2wubWFsbG9jKGFycmF5LnNpemUsIGR0eXBlKVxuICAgICAgdmFyIG5kdCA9IG5kYXJyYXkodG1wLCBhcnJheS5zaGFwZSlcbiAgICAgIG9wcy5hc3NpZ24obmR0LCBhcnJheSlcbiAgICAgIGlmKG9mZnNldCA8IDApIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgdG1wLCBvZmZzZXQpICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIHRtcC5zdWJhcnJheSgwLCBhcnJheS5zaXplKSwgb2Zmc2V0KSAgXG4gICAgICB9XG4gICAgICBwb29sLmZyZWUodG1wKVxuICAgIH1cbiAgfSBlbHNlIGlmKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7IC8vVmFuaWxsYSBhcnJheVxuICAgIHZhciB0XG4gICAgaWYodGhpcy50eXBlID09PSB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSKSB7XG4gICAgICB0ID0gbWFrZVNjcmF0Y2hUeXBlQXJyYXkoYXJyYXksIFwidWludDE2XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHQgPSBtYWtlU2NyYXRjaFR5cGVBcnJheShhcnJheSwgXCJmbG9hdDMyXCIpXG4gICAgfVxuICAgIGlmKG9mZnNldCA8IDApIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIHQsIG9mZnNldClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgdC5zdWJhcnJheSgwLCBhcnJheS5sZW5ndGgpLCBvZmZzZXQpXG4gICAgfVxuICAgIHBvb2wuZnJlZSh0KVxuICB9IGVsc2UgaWYodHlwZW9mIGFycmF5ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBhcnJheS5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgLy9UeXBlZCBhcnJheVxuICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIGFycmF5LCBvZmZzZXQpXG4gIH0gZWxzZSBpZih0eXBlb2YgYXJyYXkgPT09IFwibnVtYmVyXCIgfHwgYXJyYXkgPT09IHVuZGVmaW5lZCkgeyAvL051bWJlci9kZWZhdWx0XG4gICAgaWYob2Zmc2V0ID49IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImdsLWJ1ZmZlcjogQ2Fubm90IHNwZWNpZnkgb2Zmc2V0IHdoZW4gcmVzaXppbmcgYnVmZmVyXCIpXG4gICAgfVxuICAgIGFycmF5ID0gYXJyYXkgfCAwXG4gICAgaWYoYXJyYXkgPD0gMCkge1xuICAgICAgYXJyYXkgPSAxXG4gICAgfVxuICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLnR5cGUsIGFycmF5fDAsIHRoaXMudXNhZ2UpXG4gICAgdGhpcy5sZW5ndGggPSBhcnJheVxuICB9IGVsc2UgeyAvL0Vycm9yLCBjYXNlIHNob3VsZCBub3QgaGFwcGVuXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtYnVmZmVyOiBJbnZhbGlkIGRhdGEgdHlwZVwiKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihnbCwgZGF0YSwgdHlwZSwgdXNhZ2UpIHtcbiAgd2ViZ2xldyhnbClcbiAgdHlwZSA9IHR5cGUgfHwgZ2wuQVJSQVlfQlVGRkVSXG4gIHVzYWdlID0gdXNhZ2UgfHwgZ2wuRFlOQU1JQ19EUkFXXG4gIGlmKHR5cGUgIT09IGdsLkFSUkFZX0JVRkZFUiAmJiB0eXBlICE9PSBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImdsLWJ1ZmZlcjogSW52YWxpZCB0eXBlIGZvciB3ZWJnbCBidWZmZXIsIG11c3QgYmUgZWl0aGVyIGdsLkFSUkFZX0JVRkZFUiBvciBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUlwiKVxuICB9XG4gIGlmKHVzYWdlICE9PSBnbC5EWU5BTUlDX0RSQVcgJiYgdXNhZ2UgIT09IGdsLlNUQVRJQ19EUkFXICYmIHVzYWdlICE9PSBnbC5TVFJFQU1fRFJBVykge1xuICAgIHRocm93IG5ldyBFcnJvcihcImdsLWJ1ZmZlcjogSW52YWxpZCB1c2FnZSBmb3IgYnVmZmVyLCBtdXN0IGJlIGVpdGhlciBnbC5EWU5BTUlDX0RSQVcsIGdsLlNUQVRJQ19EUkFXIG9yIGdsLlNUUkVBTV9EUkFXXCIpXG4gIH1cbiAgdmFyIGhhbmRsZSA9IGdsLmNyZWF0ZUJ1ZmZlcigpXG4gIHZhciByZXN1bHQgPSBuZXcgR0xCdWZmZXIoZ2wsIHR5cGUsIGhhbmRsZSwgMCwgdXNhZ2UpXG4gIHJlc3VsdC51cGRhdGUoZGF0YSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJ1ZmZlciIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBjb21waWxlID0gcmVxdWlyZShcImN3aXNlLWNvbXBpbGVyXCIpXG5cbnZhciBFbXB0eVByb2MgPSB7XG4gIGJvZHk6IFwiXCIsXG4gIGFyZ3M6IFtdLFxuICB0aGlzVmFyczogW10sXG4gIGxvY2FsVmFyczogW11cbn1cblxuZnVuY3Rpb24gZml4dXAoeCkge1xuICBpZigheCkge1xuICAgIHJldHVybiBFbXB0eVByb2NcbiAgfVxuICBmb3IodmFyIGk9MDsgaTx4LmFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYSA9IHguYXJnc1tpXVxuICAgIGlmKGkgPT09IDApIHtcbiAgICAgIHguYXJnc1tpXSA9IHtuYW1lOiBhLCBsdmFsdWU6dHJ1ZSwgcnZhbHVlOiAhIXgucnZhbHVlLCBjb3VudDp4LmNvdW50fHwxIH1cbiAgICB9IGVsc2Uge1xuICAgICAgeC5hcmdzW2ldID0ge25hbWU6IGEsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OiAxfVxuICAgIH1cbiAgfVxuICBpZigheC50aGlzVmFycykge1xuICAgIHgudGhpc1ZhcnMgPSBbXVxuICB9XG4gIGlmKCF4LmxvY2FsVmFycykge1xuICAgIHgubG9jYWxWYXJzID0gW11cbiAgfVxuICByZXR1cm4geFxufVxuXG5mdW5jdGlvbiBwY29tcGlsZSh1c2VyX2FyZ3MpIHtcbiAgcmV0dXJuIGNvbXBpbGUoe1xuICAgIGFyZ3M6ICAgICB1c2VyX2FyZ3MuYXJncyxcbiAgICBwcmU6ICAgICAgZml4dXAodXNlcl9hcmdzLnByZSksXG4gICAgYm9keTogICAgIGZpeHVwKHVzZXJfYXJncy5ib2R5KSxcbiAgICBwb3N0OiAgICAgZml4dXAodXNlcl9hcmdzLnByb2MpLFxuICAgIGZ1bmNOYW1lOiB1c2VyX2FyZ3MuZnVuY05hbWVcbiAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZU9wKHVzZXJfYXJncykge1xuICB2YXIgYXJncyA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPHVzZXJfYXJncy5hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgYXJncy5wdXNoKFwiYVwiK2kpXG4gIH1cbiAgdmFyIHdyYXBwZXIgPSBuZXcgRnVuY3Rpb24oXCJQXCIsIFtcbiAgICBcInJldHVybiBmdW5jdGlvbiBcIiwgdXNlcl9hcmdzLmZ1bmNOYW1lLCBcIl9uZGFycmF5b3BzKFwiLCBhcmdzLmpvaW4oXCIsXCIpLCBcIikge1AoXCIsIGFyZ3Muam9pbihcIixcIiksIFwiKTtyZXR1cm4gYTB9XCJcbiAgXS5qb2luKFwiXCIpKVxuICByZXR1cm4gd3JhcHBlcihwY29tcGlsZSh1c2VyX2FyZ3MpKVxufVxuXG52YXIgYXNzaWduX29wcyA9IHtcbiAgYWRkOiAgXCIrXCIsXG4gIHN1YjogIFwiLVwiLFxuICBtdWw6ICBcIipcIixcbiAgZGl2OiAgXCIvXCIsXG4gIG1vZDogIFwiJVwiLFxuICBiYW5kOiBcIiZcIixcbiAgYm9yOiAgXCJ8XCIsXG4gIGJ4b3I6IFwiXlwiLFxuICBsc2hpZnQ6IFwiPDxcIixcbiAgcnNoaWZ0OiBcIj4+XCIsXG4gIHJyc2hpZnQ6IFwiPj4+XCJcbn1cbjsoZnVuY3Rpb24oKXtcbiAgZm9yKHZhciBpZCBpbiBhc3NpZ25fb3BzKSB7XG4gICAgdmFyIG9wID0gYXNzaWduX29wc1tpZF1cbiAgICBleHBvcnRzW2lkXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwiYXJyYXlcIixcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwiY1wiXSxcbiAgICAgICAgICAgICBib2R5OiBcImE9YlwiK29wK1wiY1wifSxcbiAgICAgIGZ1bmNOYW1lOiBpZFxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcImVxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sXG4gICAgICAgICAgICAgYm9keTpcImFcIitvcCtcIj1iXCJ9LFxuICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgZnVuY05hbWU6IGlkK1wiZXFcIlxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcInNcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcInNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9YlwiK29wK1wic1wifSxcbiAgICAgIGZ1bmNOYW1lOiBpZCtcInNcIlxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcInNlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwic2NhbGFyXCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwic1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYVwiK29wK1wiPXNcIn0sXG4gICAgICBydmFsdWU6IHRydWUsXG4gICAgICBmdW5jTmFtZTogaWQrXCJzZXFcIlxuICAgIH0pXG4gIH1cbn0pKCk7XG5cbnZhciB1bmFyeV9vcHMgPSB7XG4gIG5vdDogXCIhXCIsXG4gIGJub3Q6IFwiflwiLFxuICBuZWc6IFwiLVwiLFxuICByZWNpcDogXCIxLjAvXCJcbn1cbjsoZnVuY3Rpb24oKXtcbiAgZm9yKHZhciBpZCBpbiB1bmFyeV9vcHMpIHtcbiAgICB2YXIgb3AgPSB1bmFyeV9vcHNbaWRdXG4gICAgZXhwb3J0c1tpZF0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9XCIrb3ArXCJiXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wiZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPVwiK29wK1wiYVwifSxcbiAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgIGNvdW50OiAyLFxuICAgICAgZnVuY05hbWU6IGlkK1wiZXFcIlxuICAgIH0pXG4gIH1cbn0pKCk7XG5cbnZhciBiaW5hcnlfb3BzID0ge1xuICBhbmQ6IFwiJiZcIixcbiAgb3I6IFwifHxcIixcbiAgZXE6IFwiPT09XCIsXG4gIG5lcTogXCIhPT1cIixcbiAgbHQ6IFwiPFwiLFxuICBndDogXCI+XCIsXG4gIGxlcTogXCI8PVwiLFxuICBnZXE6IFwiPj1cIlxufVxuOyhmdW5jdGlvbigpIHtcbiAgZm9yKHZhciBpZCBpbiBiaW5hcnlfb3BzKSB7XG4gICAgdmFyIG9wID0gYmluYXJ5X29wc1tpZF1cbiAgICBleHBvcnRzW2lkXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwiYXJyYXlcIixcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIiwgXCJjXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWJcIitvcCtcImNcIn0sXG4gICAgICBmdW5jTmFtZTogaWRcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJzXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsXCJhcnJheVwiLFwic2NhbGFyXCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIiwgXCJzXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWJcIitvcCtcInNcIn0sXG4gICAgICBmdW5jTmFtZTogaWQrXCJzXCJcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9YVwiK29wK1wiYlwifSxcbiAgICAgIHJ2YWx1ZTp0cnVlLFxuICAgICAgY291bnQ6MixcbiAgICAgIGZ1bmNOYW1lOiBpZCtcImVxXCJcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJzZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJzXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWFcIitvcCtcInNcIn0sXG4gICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgIGNvdW50OjIsXG4gICAgICBmdW5jTmFtZTogaWQrXCJzZXFcIlxuICAgIH0pXG4gIH1cbn0pKCk7XG5cbnZhciBtYXRoX3VuYXJ5ID0gW1xuICBcImFic1wiLFxuICBcImFjb3NcIixcbiAgXCJhc2luXCIsXG4gIFwiYXRhblwiLFxuICBcImNlaWxcIixcbiAgXCJjb3NcIixcbiAgXCJleHBcIixcbiAgXCJmbG9vclwiLFxuICBcImxvZ1wiLFxuICBcInJvdW5kXCIsXG4gIFwic2luXCIsXG4gIFwic3FydFwiLFxuICBcInRhblwiXG5dXG47KGZ1bmN0aW9uKCkge1xuICBmb3IodmFyIGk9MDsgaTxtYXRoX3VuYXJ5Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGYgPSBtYXRoX3VuYXJ5W2ldXG4gICAgZXhwb3J0c1tmXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGZcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wiZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOiBbXCJhXCJdLCBib2R5OlwiYT10aGlzX2YoYSlcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgICAgICBydmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJlcVwiXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gIH1cbn0pKCk7XG5cbnZhciBtYXRoX2NvbW0gPSBbXG4gIFwibWF4XCIsXG4gIFwibWluXCIsXG4gIFwiYXRhbjJcIixcbiAgXCJwb3dcIlxuXVxuOyhmdW5jdGlvbigpe1xuICBmb3IodmFyIGk9MDsgaTxtYXRoX2NvbW0ubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgZj0gbWF0aF9jb21tW2ldXG4gICAgZXhwb3J0c1tmXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwiY1wiXSwgYm9keTpcImE9dGhpc19mKGIsYylcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmXG4gICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJzXCJdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwiY1wiXSwgYm9keTpcImE9dGhpc19mKGIsYylcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wic1wiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcImVxXCJdID0gbWFrZU9wKHsgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYSxiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY291bnQ6IDIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcImVxXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wic2VxXCJdID0gbWFrZU9wKHsgYXJnczpbXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGEsYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIHJ2YWx1ZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgY291bnQ6MixcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wic2VxXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gIH1cbn0pKCk7XG5cbnZhciBtYXRoX25vbmNvbW0gPSBbXG4gIFwiYXRhbjJcIixcbiAgXCJwb3dcIlxuXVxuOyhmdW5jdGlvbigpe1xuICBmb3IodmFyIGk9MDsgaTxtYXRoX25vbmNvbW0ubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgZj0gbWF0aF9ub25jb21tW2ldXG4gICAgZXhwb3J0c1tmK1wib3BcIl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sIGJvZHk6XCJhPXRoaXNfZihjLGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcIm9wXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcIm9wc1wiXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sIGJvZHk6XCJhPXRoaXNfZihjLGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcIm9wc1wiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcIm9wZXFcIl0gPSBtYWtlT3AoeyBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGEpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBydmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjb3VudDogMixcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wib3BlcVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcIm9wc2VxXCJdID0gbWFrZU9wKHsgYXJnczpbXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGIsYSlcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIHJ2YWx1ZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgY291bnQ6MixcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wib3BzZXFcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgfVxufSkoKTtcblxuZXhwb3J0cy5hbnkgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiBFbXB0eVByb2MsXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBib2R5OiBcImlmKGEpe3JldHVybiB0cnVlfVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW119LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXSwgYm9keTpcInJldHVybiBmYWxzZVwifSxcbiAgZnVuY05hbWU6IFwiYW55XCJcbn0pXG5cbmV4cG9ydHMuYWxsID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZTogRW1wdHlQcm9jLFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJ4XCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgYm9keTogXCJpZigheCl7cmV0dXJuIGZhbHNlfVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW119LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXSwgYm9keTpcInJldHVybiB0cnVlXCJ9LFxuICBmdW5jTmFtZTogXCJhbGxcIlxufSlcblxuZXhwb3J0cy5zdW0gPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIGJvZHk6IFwidGhpc19zKz1hXCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gdGhpc19zXCJ9LFxuICBmdW5jTmFtZTogXCJzdW1cIlxufSlcblxuZXhwb3J0cy5wcm9kID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTFcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBib2R5OiBcInRoaXNfcyo9YVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwicHJvZFwiXG59KVxuXG5leHBvcnRzLm5vcm0yc3F1YXJlZCA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjJ9XSwgYm9keTogXCJ0aGlzX3MrPWEqYVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwibm9ybTJzcXVhcmVkXCJcbn0pXG4gIFxuZXhwb3J0cy5ub3JtMiA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjJ9XSwgYm9keTogXCJ0aGlzX3MrPWEqYVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIE1hdGguc3FydCh0aGlzX3MpXCJ9LFxuICBmdW5jTmFtZTogXCJub3JtMlwiXG59KVxuICBcblxuZXhwb3J0cy5ub3JtaW5mID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6NH1dLCBib2R5OlwiaWYoLWE+dGhpc19zKXt0aGlzX3M9LWF9ZWxzZSBpZihhPnRoaXNfcyl7dGhpc19zPWF9XCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gdGhpc19zXCJ9LFxuICBmdW5jTmFtZTogXCJub3JtaW5mXCJcbn0pXG5cbmV4cG9ydHMubm9ybTEgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDozfV0sIGJvZHk6IFwidGhpc19zKz1hPDA/LWE6YVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwibm9ybTFcIlxufSlcblxuZXhwb3J0cy5zdXAgPSBjb21waWxlKHtcbiAgYXJnczogWyBcImFycmF5XCIgXSxcbiAgcHJlOlxuICAgeyBib2R5OiBcInRoaXNfaD0tSW5maW5pdHlcIixcbiAgICAgYXJnczogW10sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9LFxuICBib2R5OlxuICAgeyBib2R5OiBcImlmKF9pbmxpbmVfMV9hcmcwXz50aGlzX2gpdGhpc19oPV9pbmxpbmVfMV9hcmcwX1wiLFxuICAgICBhcmdzOiBbe1wibmFtZVwiOlwiX2lubGluZV8xX2FyZzBfXCIsXCJsdmFsdWVcIjpmYWxzZSxcInJ2YWx1ZVwiOnRydWUsXCJjb3VudFwiOjJ9IF0sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9LFxuICBwb3N0OlxuICAgeyBib2R5OiBcInJldHVybiB0aGlzX2hcIixcbiAgICAgYXJnczogW10sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9XG4gfSlcblxuZXhwb3J0cy5pbmYgPSBjb21waWxlKHtcbiAgYXJnczogWyBcImFycmF5XCIgXSxcbiAgcHJlOlxuICAgeyBib2R5OiBcInRoaXNfaD1JbmZpbml0eVwiLFxuICAgICBhcmdzOiBbXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH0sXG4gIGJvZHk6XG4gICB7IGJvZHk6IFwiaWYoX2lubGluZV8xX2FyZzBfPHRoaXNfaCl0aGlzX2g9X2lubGluZV8xX2FyZzBfXCIsXG4gICAgIGFyZ3M6IFt7XCJuYW1lXCI6XCJfaW5saW5lXzFfYXJnMF9cIixcImx2YWx1ZVwiOmZhbHNlLFwicnZhbHVlXCI6dHJ1ZSxcImNvdW50XCI6Mn0gXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH0sXG4gIHBvc3Q6XG4gICB7IGJvZHk6IFwicmV0dXJuIHRoaXNfaFwiLFxuICAgICBhcmdzOiBbXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH1cbiB9KVxuXG5leHBvcnRzLmFyZ21pbiA9IGNvbXBpbGUoe1xuICBhcmdzOltcImluZGV4XCIsXCJhcnJheVwiLFwic2hhcGVcIl0sXG4gIHByZTp7XG4gICAgYm9keTpcInt0aGlzX3Y9SW5maW5pdHk7dGhpc19pPV9pbmxpbmVfMF9hcmcyXy5zbGljZSgwKX1cIixcbiAgICBhcmdzOltcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzBfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTpmYWxzZSxjb3VudDowfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzFfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTpmYWxzZSxjb3VudDowfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzJfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjF9XG4gICAgICBdLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiLFwidGhpc192XCJdLFxuICAgIGxvY2FsVmFyczpbXX0sXG4gIGJvZHk6e1xuICAgIGJvZHk6XCJ7aWYoX2lubGluZV8xX2FyZzFfPHRoaXNfdil7dGhpc192PV9pbmxpbmVfMV9hcmcxXztmb3IodmFyIF9pbmxpbmVfMV9rPTA7X2lubGluZV8xX2s8X2lubGluZV8xX2FyZzBfLmxlbmd0aDsrK19pbmxpbmVfMV9rKXt0aGlzX2lbX2lubGluZV8xX2tdPV9pbmxpbmVfMV9hcmcwX1tfaW5saW5lXzFfa119fX1cIixcbiAgICBhcmdzOltcbiAgICAgIHtuYW1lOlwiX2lubGluZV8xX2FyZzBfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjJ9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzFfYXJnMV9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6Mn1dLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiLFwidGhpc192XCJdLFxuICAgIGxvY2FsVmFyczpbXCJfaW5saW5lXzFfa1wiXX0sXG4gIHBvc3Q6e1xuICAgIGJvZHk6XCJ7cmV0dXJuIHRoaXNfaX1cIixcbiAgICBhcmdzOltdLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiXSxcbiAgICBsb2NhbFZhcnM6W119XG59KVxuXG5leHBvcnRzLmFyZ21heCA9IGNvbXBpbGUoe1xuICBhcmdzOltcImluZGV4XCIsXCJhcnJheVwiLFwic2hhcGVcIl0sXG4gIHByZTp7XG4gICAgYm9keTpcInt0aGlzX3Y9LUluZmluaXR5O3RoaXNfaT1faW5saW5lXzBfYXJnMl8uc2xpY2UoMCl9XCIsXG4gICAgYXJnczpbXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcwX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6ZmFsc2UsY291bnQ6MH0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcxX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6ZmFsc2UsY291bnQ6MH0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcyX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoxfVxuICAgICAgXSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIixcInRoaXNfdlwiXSxcbiAgICBsb2NhbFZhcnM6W119LFxuICBib2R5OntcbiAgICBib2R5Olwie2lmKF9pbmxpbmVfMV9hcmcxXz50aGlzX3Ype3RoaXNfdj1faW5saW5lXzFfYXJnMV87Zm9yKHZhciBfaW5saW5lXzFfaz0wO19pbmxpbmVfMV9rPF9pbmxpbmVfMV9hcmcwXy5sZW5ndGg7KytfaW5saW5lXzFfayl7dGhpc19pW19pbmxpbmVfMV9rXT1faW5saW5lXzFfYXJnMF9bX2lubGluZV8xX2tdfX19XCIsXG4gICAgYXJnczpbXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMV9hcmcwX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoyfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8xX2FyZzFfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjJ9XSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIixcInRoaXNfdlwiXSxcbiAgICBsb2NhbFZhcnM6W1wiX2lubGluZV8xX2tcIl19LFxuICBwb3N0OntcbiAgICBib2R5Olwie3JldHVybiB0aGlzX2l9XCIsXG4gICAgYXJnczpbXSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIl0sXG4gICAgbG9jYWxWYXJzOltdfVxufSkgIFxuXG5leHBvcnRzLnJhbmRvbSA9IG1ha2VPcCh7XG4gIGFyZ3M6IFtcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGgucmFuZG9tXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gIGJvZHk6IHthcmdzOiBbXCJhXCJdLCBib2R5OlwiYT10aGlzX2YoKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICBmdW5jTmFtZTogXCJyYW5kb21cIlxufSlcblxuZXhwb3J0cy5hc3NpZ24gPSBtYWtlT3Aoe1xuICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCJdLCBib2R5OlwiYT1iXCJ9LFxuICBmdW5jTmFtZTogXCJhc3NpZ25cIiB9KVxuXG5leHBvcnRzLmFzc2lnbnMgPSBtYWtlT3Aoe1xuICBhcmdzOltcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiXSwgYm9keTpcImE9YlwifSxcbiAgZnVuY05hbWU6IFwiYXNzaWduc1wiIH0pXG5cblxuZXhwb3J0cy5lcXVhbHMgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICBwcmU6IEVtcHR5UHJvYyxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwieFwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfSxcbiAgICAgICAgICAgICAgIHtuYW1lOlwieVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIFxuICAgICAgICBib2R5OiBcImlmKHghPT15KXtyZXR1cm4gZmFsc2V9XCIsIFxuICAgICAgICBsb2NhbFZhcnM6IFtdLCBcbiAgICAgICAgdGhpc1ZhcnM6IFtdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W10sIGJvZHk6XCJyZXR1cm4gdHJ1ZVwifSxcbiAgZnVuY05hbWU6IFwiZXF1YWxzXCJcbn0pXG5cblxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGNyZWF0ZVRodW5rID0gcmVxdWlyZShcIi4vbGliL3RodW5rLmpzXCIpXG5cbmZ1bmN0aW9uIFByb2NlZHVyZSgpIHtcbiAgdGhpcy5hcmdUeXBlcyA9IFtdXG4gIHRoaXMuc2hpbUFyZ3MgPSBbXVxuICB0aGlzLmFycmF5QXJncyA9IFtdXG4gIHRoaXMuc2NhbGFyQXJncyA9IFtdXG4gIHRoaXMub2Zmc2V0QXJncyA9IFtdXG4gIHRoaXMub2Zmc2V0QXJnSW5kZXggPSBbXVxuICB0aGlzLmluZGV4QXJncyA9IFtdXG4gIHRoaXMuc2hhcGVBcmdzID0gW11cbiAgdGhpcy5mdW5jTmFtZSA9IFwiXCJcbiAgdGhpcy5wcmUgPSBudWxsXG4gIHRoaXMuYm9keSA9IG51bGxcbiAgdGhpcy5wb3N0ID0gbnVsbFxuICB0aGlzLmRlYnVnID0gZmFsc2Vcbn1cblxuZnVuY3Rpb24gY29tcGlsZUN3aXNlKHVzZXJfYXJncykge1xuICAvL0NyZWF0ZSBwcm9jZWR1cmVcbiAgdmFyIHByb2MgPSBuZXcgUHJvY2VkdXJlKClcbiAgXG4gIC8vUGFyc2UgYmxvY2tzXG4gIHByb2MucHJlICAgID0gdXNlcl9hcmdzLnByZVxuICBwcm9jLmJvZHkgICA9IHVzZXJfYXJncy5ib2R5XG4gIHByb2MucG9zdCAgID0gdXNlcl9hcmdzLnBvc3RcblxuICAvL1BhcnNlIGFyZ3VtZW50c1xuICB2YXIgcHJvY19hcmdzID0gdXNlcl9hcmdzLmFyZ3Muc2xpY2UoMClcbiAgcHJvYy5hcmdUeXBlcyA9IHByb2NfYXJnc1xuICBmb3IodmFyIGk9MDsgaTxwcm9jX2FyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYXJnX3R5cGUgPSBwcm9jX2FyZ3NbaV1cbiAgICBpZihhcmdfdHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICBwcm9jLmFycmF5QXJncy5wdXNoKGkpXG4gICAgICBwcm9jLnNoaW1BcmdzLnB1c2goXCJhcnJheVwiICsgaSlcbiAgICAgIGlmKGkgPCBwcm9jLnByZS5hcmdzLmxlbmd0aCAmJiBwcm9jLnByZS5hcmdzW2ldLmNvdW50PjApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IHByZSgpIGJsb2NrIG1heSBub3QgcmVmZXJlbmNlIGFycmF5IGFyZ3NcIilcbiAgICAgIH1cbiAgICAgIGlmKGkgPCBwcm9jLnBvc3QuYXJncy5sZW5ndGggJiYgcHJvYy5wb3N0LmFyZ3NbaV0uY291bnQ+MCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcG9zdCgpIGJsb2NrIG1heSBub3QgcmVmZXJlbmNlIGFycmF5IGFyZ3NcIilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoYXJnX3R5cGUgPT09IFwic2NhbGFyXCIpIHtcbiAgICAgIHByb2Muc2NhbGFyQXJncy5wdXNoKGkpXG4gICAgICBwcm9jLnNoaW1BcmdzLnB1c2goXCJzY2FsYXJcIiArIGkpXG4gICAgfSBlbHNlIGlmKGFyZ190eXBlID09PSBcImluZGV4XCIpIHtcbiAgICAgIHByb2MuaW5kZXhBcmdzLnB1c2goaSlcbiAgICAgIGlmKGkgPCBwcm9jLnByZS5hcmdzLmxlbmd0aCAmJiBwcm9jLnByZS5hcmdzW2ldLmNvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcHJlKCkgYmxvY2sgbWF5IG5vdCByZWZlcmVuY2UgYXJyYXkgaW5kZXhcIilcbiAgICAgIH1cbiAgICAgIGlmKGkgPCBwcm9jLmJvZHkuYXJncy5sZW5ndGggJiYgcHJvYy5ib2R5LmFyZ3NbaV0ubHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBib2R5KCkgYmxvY2sgbWF5IG5vdCB3cml0ZSB0byBhcnJheSBpbmRleFwiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MucG9zdC5hcmdzLmxlbmd0aCAmJiBwcm9jLnBvc3QuYXJnc1tpXS5jb3VudCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IHBvc3QoKSBibG9jayBtYXkgbm90IHJlZmVyZW5jZSBhcnJheSBpbmRleFwiKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihhcmdfdHlwZSA9PT0gXCJzaGFwZVwiKSB7XG4gICAgICBwcm9jLnNoYXBlQXJncy5wdXNoKGkpXG4gICAgICBpZihpIDwgcHJvYy5wcmUuYXJncy5sZW5ndGggJiYgcHJvYy5wcmUuYXJnc1tpXS5sdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IHByZSgpIGJsb2NrIG1heSBub3Qgd3JpdGUgdG8gYXJyYXkgc2hhcGVcIilcbiAgICAgIH1cbiAgICAgIGlmKGkgPCBwcm9jLmJvZHkuYXJncy5sZW5ndGggJiYgcHJvYy5ib2R5LmFyZ3NbaV0ubHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBib2R5KCkgYmxvY2sgbWF5IG5vdCB3cml0ZSB0byBhcnJheSBzaGFwZVwiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MucG9zdC5hcmdzLmxlbmd0aCAmJiBwcm9jLnBvc3QuYXJnc1tpXS5sdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IHBvc3QoKSBibG9jayBtYXkgbm90IHdyaXRlIHRvIGFycmF5IHNoYXBlXCIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHR5cGVvZiBhcmdfdHlwZSA9PT0gXCJvYmplY3RcIiAmJiBhcmdfdHlwZS5vZmZzZXQpIHtcbiAgICAgIHByb2MuYXJnVHlwZXNbaV0gPSBcIm9mZnNldFwiXG4gICAgICBwcm9jLm9mZnNldEFyZ3MucHVzaCh7IGFycmF5OiBhcmdfdHlwZS5hcnJheSwgb2Zmc2V0OmFyZ190eXBlLm9mZnNldCB9KVxuICAgICAgcHJvYy5vZmZzZXRBcmdJbmRleC5wdXNoKGkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBVbmtub3duIGFyZ3VtZW50IHR5cGUgXCIgKyBwcm9jX2FyZ3NbaV0pXG4gICAgfVxuICB9XG4gIFxuICAvL01ha2Ugc3VyZSBhdCBsZWFzdCBvbmUgYXJyYXkgYXJndW1lbnQgd2FzIHNwZWNpZmllZFxuICBpZihwcm9jLmFycmF5QXJncy5sZW5ndGggPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBObyBhcnJheSBhcmd1bWVudHMgc3BlY2lmaWVkXCIpXG4gIH1cbiAgXG4gIC8vTWFrZSBzdXJlIGFyZ3VtZW50cyBhcmUgY29ycmVjdFxuICBpZihwcm9jLnByZS5hcmdzLmxlbmd0aCA+IHByb2NfYXJncy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogVG9vIG1hbnkgYXJndW1lbnRzIGluIHByZSgpIGJsb2NrXCIpXG4gIH1cbiAgaWYocHJvYy5ib2R5LmFyZ3MubGVuZ3RoID4gcHJvY19hcmdzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBUb28gbWFueSBhcmd1bWVudHMgaW4gYm9keSgpIGJsb2NrXCIpXG4gIH1cbiAgaWYocHJvYy5wb3N0LmFyZ3MubGVuZ3RoID4gcHJvY19hcmdzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBUb28gbWFueSBhcmd1bWVudHMgaW4gcG9zdCgpIGJsb2NrXCIpXG4gIH1cblxuICAvL0NoZWNrIGRlYnVnIGZsYWdcbiAgcHJvYy5kZWJ1ZyA9ICEhdXNlcl9hcmdzLnByaW50Q29kZSB8fCAhIXVzZXJfYXJncy5kZWJ1Z1xuICBcbiAgLy9SZXRyaWV2ZSBuYW1lXG4gIHByb2MuZnVuY05hbWUgPSB1c2VyX2FyZ3MuZnVuY05hbWUgfHwgXCJjd2lzZVwiXG4gIFxuICAvL1JlYWQgaW4gYmxvY2sgc2l6ZVxuICBwcm9jLmJsb2NrU2l6ZSA9IHVzZXJfYXJncy5ibG9ja1NpemUgfHwgNjRcblxuICByZXR1cm4gY3JlYXRlVGh1bmsocHJvYylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb21waWxlQ3dpc2VcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciB1bmlxID0gcmVxdWlyZShcInVuaXFcIilcblxuZnVuY3Rpb24gaW5uZXJGaWxsKG9yZGVyLCBwcm9jLCBib2R5KSB7XG4gIHZhciBkaW1lbnNpb24gPSBvcmRlci5sZW5ndGhcbiAgICAsIG5hcmdzID0gcHJvYy5hcnJheUFyZ3MubGVuZ3RoXG4gICAgLCBoYXNfaW5kZXggPSBwcm9jLmluZGV4QXJncy5sZW5ndGg+MFxuICAgICwgY29kZSA9IFtdXG4gICAgLCB2YXJzID0gW11cbiAgICAsIGlkeD0wLCBwaWR4PTAsIGksIGpcbiAgZm9yKGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIHZhcnMucHVzaChbXCJpXCIsaSxcIj0wXCJdLmpvaW4oXCJcIikpXG4gIH1cbiAgLy9Db21wdXRlIHNjYW4gZGVsdGFzXG4gIGZvcihqPTA7IGo8bmFyZ3M7ICsraikge1xuICAgIGZvcihpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICAgIHBpZHggPSBpZHhcbiAgICAgIGlkeCA9IG9yZGVyW2ldXG4gICAgICBpZihpID09PSAwKSB7XG4gICAgICAgIHZhcnMucHVzaChbXCJkXCIsaixcInNcIixpLFwiPXRcIixqLFwicFwiLGlkeF0uam9pbihcIlwiKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhcnMucHVzaChbXCJkXCIsaixcInNcIixpLFwiPSh0XCIsaixcInBcIixpZHgsXCItc1wiLHBpZHgsXCIqdFwiLGosXCJwXCIscGlkeCxcIilcIl0uam9pbihcIlwiKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29kZS5wdXNoKFwidmFyIFwiICsgdmFycy5qb2luKFwiLFwiKSlcbiAgLy9TY2FuIGxvb3BcbiAgZm9yKGk9ZGltZW5zaW9uLTE7IGk+PTA7IC0taSkge1xuICAgIGlkeCA9IG9yZGVyW2ldXG4gICAgY29kZS5wdXNoKFtcImZvcihpXCIsaSxcIj0wO2lcIixpLFwiPHNcIixpZHgsXCI7KytpXCIsaSxcIil7XCJdLmpvaW4oXCJcIikpXG4gIH1cbiAgLy9QdXNoIGJvZHkgb2YgaW5uZXIgbG9vcFxuICBjb2RlLnB1c2goYm9keSlcbiAgLy9BZHZhbmNlIHNjYW4gcG9pbnRlcnNcbiAgZm9yKGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIHBpZHggPSBpZHhcbiAgICBpZHggPSBvcmRlcltpXVxuICAgIGZvcihqPTA7IGo8bmFyZ3M7ICsraikge1xuICAgICAgY29kZS5wdXNoKFtcInBcIixqLFwiKz1kXCIsaixcInNcIixpXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgICBpZihoYXNfaW5kZXgpIHtcbiAgICAgIGlmKGkgPiAwKSB7XG4gICAgICAgIGNvZGUucHVzaChbXCJpbmRleFtcIixwaWR4LFwiXS09c1wiLHBpZHhdLmpvaW4oXCJcIikpXG4gICAgICB9XG4gICAgICBjb2RlLnB1c2goW1wiKytpbmRleFtcIixpZHgsXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgfVxuICAgIGNvZGUucHVzaChcIn1cIilcbiAgfVxuICByZXR1cm4gY29kZS5qb2luKFwiXFxuXCIpXG59XG5cbmZ1bmN0aW9uIG91dGVyRmlsbChtYXRjaGVkLCBvcmRlciwgcHJvYywgYm9keSkge1xuICB2YXIgZGltZW5zaW9uID0gb3JkZXIubGVuZ3RoXG4gICAgLCBuYXJncyA9IHByb2MuYXJyYXlBcmdzLmxlbmd0aFxuICAgICwgYmxvY2tTaXplID0gcHJvYy5ibG9ja1NpemVcbiAgICAsIGhhc19pbmRleCA9IHByb2MuaW5kZXhBcmdzLmxlbmd0aCA+IDBcbiAgICAsIGNvZGUgPSBbXVxuICBmb3IodmFyIGk9MDsgaTxuYXJnczsgKytpKSB7XG4gICAgY29kZS5wdXNoKFtcInZhciBvZmZzZXRcIixpLFwiPXBcIixpXS5qb2luKFwiXCIpKVxuICB9XG4gIC8vR2VuZXJhdGUgbWF0Y2hlZCBsb29wc1xuICBmb3IodmFyIGk9bWF0Y2hlZDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChbXCJmb3IodmFyIGpcIitpK1wiPVNTW1wiLCBvcmRlcltpXSwgXCJdfDA7alwiLCBpLCBcIj4wOyl7XCJdLmpvaW4oXCJcIikpXG4gICAgY29kZS5wdXNoKFtcImlmKGpcIixpLFwiPFwiLGJsb2NrU2l6ZSxcIil7XCJdLmpvaW4oXCJcIikpXG4gICAgY29kZS5wdXNoKFtcInNcIixvcmRlcltpXSxcIj1qXCIsaV0uam9pbihcIlwiKSlcbiAgICBjb2RlLnB1c2goW1wialwiLGksXCI9MFwiXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJ9ZWxzZXtzXCIsb3JkZXJbaV0sXCI9XCIsYmxvY2tTaXplXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJqXCIsaSxcIi09XCIsYmxvY2tTaXplLFwifVwiXS5qb2luKFwiXCIpKVxuICAgIGlmKGhhc19pbmRleCkge1xuICAgICAgY29kZS5wdXNoKFtcImluZGV4W1wiLG9yZGVyW2ldLFwiXT1qXCIsaV0uam9pbihcIlwiKSlcbiAgICB9XG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8bmFyZ3M7ICsraSkge1xuICAgIHZhciBpbmRleFN0ciA9IFtcIm9mZnNldFwiK2ldXG4gICAgZm9yKHZhciBqPW1hdGNoZWQ7IGo8ZGltZW5zaW9uOyArK2opIHtcbiAgICAgIGluZGV4U3RyLnB1c2goW1wialwiLGosXCIqdFwiLGksXCJwXCIsb3JkZXJbal1dLmpvaW4oXCJcIikpXG4gICAgfVxuICAgIGNvZGUucHVzaChbXCJwXCIsaSxcIj0oXCIsaW5kZXhTdHIuam9pbihcIitcIiksXCIpXCJdLmpvaW4oXCJcIikpXG4gIH1cbiAgY29kZS5wdXNoKGlubmVyRmlsbChvcmRlciwgcHJvYywgYm9keSkpXG4gIGZvcih2YXIgaT1tYXRjaGVkOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFwifVwiKVxuICB9XG4gIHJldHVybiBjb2RlLmpvaW4oXCJcXG5cIilcbn1cblxuLy9Db3VudCB0aGUgbnVtYmVyIG9mIGNvbXBhdGlibGUgaW5uZXIgb3JkZXJzXG5mdW5jdGlvbiBjb3VudE1hdGNoZXMob3JkZXJzKSB7XG4gIHZhciBtYXRjaGVkID0gMCwgZGltZW5zaW9uID0gb3JkZXJzWzBdLmxlbmd0aFxuICB3aGlsZShtYXRjaGVkIDwgZGltZW5zaW9uKSB7XG4gICAgZm9yKHZhciBqPTE7IGo8b3JkZXJzLmxlbmd0aDsgKytqKSB7XG4gICAgICBpZihvcmRlcnNbal1bbWF0Y2hlZF0gIT09IG9yZGVyc1swXVttYXRjaGVkXSkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlZFxuICAgICAgfVxuICAgIH1cbiAgICArK21hdGNoZWRcbiAgfVxuICByZXR1cm4gbWF0Y2hlZFxufVxuXG4vL1Byb2Nlc3NlcyBhIGJsb2NrIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gZGF0YSB0eXBlc1xuZnVuY3Rpb24gcHJvY2Vzc0Jsb2NrKGJsb2NrLCBwcm9jLCBkdHlwZXMpIHtcbiAgdmFyIGNvZGUgPSBibG9jay5ib2R5XG4gIHZhciBwcmUgPSBbXVxuICB2YXIgcG9zdCA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPGJsb2NrLmFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY2FyZyA9IGJsb2NrLmFyZ3NbaV1cbiAgICBpZihjYXJnLmNvdW50IDw9IDApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIHZhciByZSA9IG5ldyBSZWdFeHAoY2FyZy5uYW1lLCBcImdcIilcbiAgICB2YXIgcHRyU3RyID0gXCJcIlxuICAgIHZhciBhcnJOdW0gPSBwcm9jLmFycmF5QXJncy5pbmRleE9mKGkpXG4gICAgc3dpdGNoKHByb2MuYXJnVHlwZXNbaV0pIHtcbiAgICAgIGNhc2UgXCJvZmZzZXRcIjpcbiAgICAgICAgdmFyIG9mZkFyZ0luZGV4ID0gcHJvYy5vZmZzZXRBcmdJbmRleC5pbmRleE9mKGkpXG4gICAgICAgIHZhciBvZmZBcmcgPSBwcm9jLm9mZnNldEFyZ3Nbb2ZmQXJnSW5kZXhdXG4gICAgICAgIGFyck51bSA9IG9mZkFyZy5hcnJheVxuICAgICAgICBwdHJTdHIgPSBcIitxXCIgKyBvZmZBcmdJbmRleFxuICAgICAgY2FzZSBcImFycmF5XCI6XG4gICAgICAgIHB0clN0ciA9IFwicFwiICsgYXJyTnVtICsgcHRyU3RyXG4gICAgICAgIHZhciBsb2NhbFN0ciA9IFwibFwiICsgaVxuICAgICAgICB2YXIgYXJyU3RyID0gXCJhXCIgKyBhcnJOdW1cbiAgICAgICAgaWYoY2FyZy5jb3VudCA9PT0gMSkge1xuICAgICAgICAgIGlmKGR0eXBlc1thcnJOdW1dID09PSBcImdlbmVyaWNcIikge1xuICAgICAgICAgICAgaWYoY2FyZy5sdmFsdWUpIHtcbiAgICAgICAgICAgICAgcHJlLnB1c2goW1widmFyIFwiLCBsb2NhbFN0ciwgXCI9XCIsIGFyclN0ciwgXCIuZ2V0KFwiLCBwdHJTdHIsIFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBsb2NhbFN0cilcbiAgICAgICAgICAgICAgcG9zdC5wdXNoKFthcnJTdHIsIFwiLnNldChcIiwgcHRyU3RyLCBcIixcIiwgbG9jYWxTdHIsXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBbYXJyU3RyLCBcIi5nZXQoXCIsIHB0clN0ciwgXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFthcnJTdHIsIFwiW1wiLCBwdHJTdHIsIFwiXVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKGR0eXBlc1thcnJOdW1dID09PSBcImdlbmVyaWNcIikge1xuICAgICAgICAgIHByZS5wdXNoKFtcInZhciBcIiwgbG9jYWxTdHIsIFwiPVwiLCBhcnJTdHIsIFwiLmdldChcIiwgcHRyU3RyLCBcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBsb2NhbFN0cilcbiAgICAgICAgICBpZihjYXJnLmx2YWx1ZSkge1xuICAgICAgICAgICAgcG9zdC5wdXNoKFthcnJTdHIsIFwiLnNldChcIiwgcHRyU3RyLCBcIixcIiwgbG9jYWxTdHIsXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZS5wdXNoKFtcInZhciBcIiwgbG9jYWxTdHIsIFwiPVwiLCBhcnJTdHIsIFwiW1wiLCBwdHJTdHIsIFwiXVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIGxvY2FsU3RyKVxuICAgICAgICAgIGlmKGNhcmcubHZhbHVlKSB7XG4gICAgICAgICAgICBwb3N0LnB1c2goW2FyclN0ciwgXCJbXCIsIHB0clN0ciwgXCJdPVwiLCBsb2NhbFN0cl0uam9pbihcIlwiKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwic2NhbGFyXCI6XG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFwiWVwiICsgcHJvYy5zY2FsYXJBcmdzLmluZGV4T2YoaSkpXG4gICAgICBicmVha1xuICAgICAgY2FzZSBcImluZGV4XCI6XG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFwiaW5kZXhcIilcbiAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwic2hhcGVcIjpcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgXCJzaGFwZVwiKVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtwcmUuam9pbihcIlxcblwiKSwgY29kZSwgcG9zdC5qb2luKFwiXFxuXCIpXS5qb2luKFwiXFxuXCIpLnRyaW0oKVxufVxuXG5mdW5jdGlvbiB0eXBlU3VtbWFyeShkdHlwZXMpIHtcbiAgdmFyIHN1bW1hcnkgPSBuZXcgQXJyYXkoZHR5cGVzLmxlbmd0aClcbiAgdmFyIGFsbEVxdWFsID0gdHJ1ZVxuICBmb3IodmFyIGk9MDsgaTxkdHlwZXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgdCA9IGR0eXBlc1tpXVxuICAgIHZhciBkaWdpdHMgPSB0Lm1hdGNoKC9cXGQrLylcbiAgICBpZighZGlnaXRzKSB7XG4gICAgICBkaWdpdHMgPSBcIlwiXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpZ2l0cyA9IGRpZ2l0c1swXVxuICAgIH1cbiAgICBpZih0LmNoYXJBdCgwKSA9PT0gMCkge1xuICAgICAgc3VtbWFyeVtpXSA9IFwidVwiICsgdC5jaGFyQXQoMSkgKyBkaWdpdHNcbiAgICB9IGVsc2Uge1xuICAgICAgc3VtbWFyeVtpXSA9IHQuY2hhckF0KDApICsgZGlnaXRzXG4gICAgfVxuICAgIGlmKGkgPiAwKSB7XG4gICAgICBhbGxFcXVhbCA9IGFsbEVxdWFsICYmIHN1bW1hcnlbaV0gPT09IHN1bW1hcnlbaS0xXVxuICAgIH1cbiAgfVxuICBpZihhbGxFcXVhbCkge1xuICAgIHJldHVybiBzdW1tYXJ5WzBdXG4gIH1cbiAgcmV0dXJuIHN1bW1hcnkuam9pbihcIlwiKVxufVxuXG4vL0dlbmVyYXRlcyBhIGN3aXNlIG9wZXJhdG9yXG5mdW5jdGlvbiBnZW5lcmF0ZUNXaXNlT3AocHJvYywgdHlwZXNpZykge1xuXG4gIC8vQ29tcHV0ZSBkaW1lbnNpb25cbiAgdmFyIGRpbWVuc2lvbiA9IHR5cGVzaWdbMV0ubGVuZ3RofDBcbiAgdmFyIG9yZGVycyA9IG5ldyBBcnJheShwcm9jLmFycmF5QXJncy5sZW5ndGgpXG4gIHZhciBkdHlwZXMgPSBuZXcgQXJyYXkocHJvYy5hcnJheUFyZ3MubGVuZ3RoKVxuXG4gIC8vRmlyc3QgY3JlYXRlIGFyZ3VtZW50cyBmb3IgcHJvY2VkdXJlXG4gIHZhciBhcmdsaXN0ID0gW1wiU1NcIl1cbiAgdmFyIGNvZGUgPSBbXCIndXNlIHN0cmljdCdcIl1cbiAgdmFyIHZhcnMgPSBbXVxuICBcbiAgZm9yKHZhciBqPTA7IGo8ZGltZW5zaW9uOyArK2opIHtcbiAgICB2YXJzLnB1c2goW1wic1wiLCBqLCBcIj1TU1tcIiwgaiwgXCJdXCJdLmpvaW4oXCJcIikpXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5hcnJheUFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICBhcmdsaXN0LnB1c2goXCJhXCIraSlcbiAgICBhcmdsaXN0LnB1c2goXCJ0XCIraSlcbiAgICBhcmdsaXN0LnB1c2goXCJwXCIraSlcbiAgICBkdHlwZXNbaV0gPSB0eXBlc2lnWzIqaV1cbiAgICBvcmRlcnNbaV0gPSB0eXBlc2lnWzIqaSsxXVxuICAgIFxuICAgIGZvcih2YXIgaj0wOyBqPGRpbWVuc2lvbjsgKytqKSB7XG4gICAgICB2YXJzLnB1c2goW1widFwiLGksXCJwXCIsaixcIj10XCIsaSxcIltcIixqLFwiXVwiXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgfVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLnNjYWxhckFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICBhcmdsaXN0LnB1c2goXCJZXCIgKyBpKVxuICB9XG4gIGlmKHByb2Muc2hhcGVBcmdzLmxlbmd0aCA+IDApIHtcbiAgICB2YXJzLnB1c2goXCJzaGFwZT1TUy5zbGljZSgwKVwiKVxuICB9XG4gIGlmKHByb2MuaW5kZXhBcmdzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgemVyb3MgPSBuZXcgQXJyYXkoZGltZW5zaW9uKVxuICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICB6ZXJvc1tpXSA9IFwiMFwiXG4gICAgfVxuICAgIHZhcnMucHVzaChbXCJpbmRleD1bXCIsIHplcm9zLmpvaW4oXCIsXCIpLCBcIl1cIl0uam9pbihcIlwiKSlcbiAgfVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLm9mZnNldEFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgb2ZmX2FyZyA9IHByb2Mub2Zmc2V0QXJnc1tpXVxuICAgIHZhciBpbml0X3N0cmluZyA9IFtdXG4gICAgZm9yKHZhciBqPTA7IGo8b2ZmX2FyZy5vZmZzZXQubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmKG9mZl9hcmcub2Zmc2V0W2pdID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2UgaWYob2ZmX2FyZy5vZmZzZXRbal0gPT09IDEpIHtcbiAgICAgICAgaW5pdF9zdHJpbmcucHVzaChbXCJ0XCIsIG9mZl9hcmcuYXJyYXksIFwicFwiLCBqXS5qb2luKFwiXCIpKSAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdF9zdHJpbmcucHVzaChbb2ZmX2FyZy5vZmZzZXRbal0sIFwiKnRcIiwgb2ZmX2FyZy5hcnJheSwgXCJwXCIsIGpdLmpvaW4oXCJcIikpXG4gICAgICB9XG4gICAgfVxuICAgIGlmKGluaXRfc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFycy5wdXNoKFwicVwiICsgaSArIFwiPTBcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFycy5wdXNoKFtcInFcIiwgaSwgXCI9XCIsIGluaXRfc3RyaW5nLmpvaW4oXCIrXCIpXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgfVxuXG4gIC8vUHJlcGFyZSB0aGlzIHZhcmlhYmxlc1xuICB2YXIgdGhpc1ZhcnMgPSB1bmlxKFtdLmNvbmNhdChwcm9jLnByZS50aGlzVmFycylcbiAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHByb2MuYm9keS50aGlzVmFycylcbiAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHByb2MucG9zdC50aGlzVmFycykpXG4gIHZhcnMgPSB2YXJzLmNvbmNhdCh0aGlzVmFycylcbiAgY29kZS5wdXNoKFwidmFyIFwiICsgdmFycy5qb2luKFwiLFwiKSlcbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5hcnJheUFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXCJwXCIraStcInw9MFwiKVxuICB9XG4gIFxuICAvL0lubGluZSBwcmVsdWRlXG4gIGlmKHByb2MucHJlLmJvZHkubGVuZ3RoID4gMykge1xuICAgIGNvZGUucHVzaChwcm9jZXNzQmxvY2socHJvYy5wcmUsIHByb2MsIGR0eXBlcykpXG4gIH1cblxuICAvL1Byb2Nlc3MgYm9keVxuICB2YXIgYm9keSA9IHByb2Nlc3NCbG9jayhwcm9jLmJvZHksIHByb2MsIGR0eXBlcylcbiAgdmFyIG1hdGNoZWQgPSBjb3VudE1hdGNoZXMob3JkZXJzKVxuICBpZihtYXRjaGVkIDwgZGltZW5zaW9uKSB7XG4gICAgY29kZS5wdXNoKG91dGVyRmlsbChtYXRjaGVkLCBvcmRlcnNbMF0sIHByb2MsIGJvZHkpKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChpbm5lckZpbGwob3JkZXJzWzBdLCBwcm9jLCBib2R5KSlcbiAgfVxuXG4gIC8vSW5saW5lIGVwaWxvZ1xuICBpZihwcm9jLnBvc3QuYm9keS5sZW5ndGggPiAzKSB7XG4gICAgY29kZS5wdXNoKHByb2Nlc3NCbG9jayhwcm9jLnBvc3QsIHByb2MsIGR0eXBlcykpXG4gIH1cbiAgXG4gIGlmKHByb2MuZGVidWcpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRlZCBjd2lzZSByb3V0aW5lIGZvciBcIiwgdHlwZXNpZywgXCI6XFxuXFxuXCIsIGNvZGUuam9pbihcIlxcblwiKSlcbiAgfVxuICBcbiAgdmFyIGxvb3BOYW1lID0gWyhwcm9jLmZ1bmNOYW1lfHxcInVubmFtZWRcIiksIFwiX2N3aXNlX2xvb3BfXCIsIG9yZGVyc1swXS5qb2luKFwic1wiKSxcIm1cIixtYXRjaGVkLHR5cGVTdW1tYXJ5KGR0eXBlcyldLmpvaW4oXCJcIilcbiAgdmFyIGYgPSBuZXcgRnVuY3Rpb24oW1wiZnVuY3Rpb24gXCIsbG9vcE5hbWUsXCIoXCIsIGFyZ2xpc3Quam9pbihcIixcIiksXCIpe1wiLCBjb2RlLmpvaW4oXCJcXG5cIiksXCJ9IHJldHVybiBcIiwgbG9vcE5hbWVdLmpvaW4oXCJcIikpXG4gIHJldHVybiBmKClcbn1cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVDV2lzZU9wIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGNvbXBpbGUgPSByZXF1aXJlKFwiLi9jb21waWxlLmpzXCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZVRodW5rKHByb2MpIHtcbiAgdmFyIGNvZGUgPSBbXCIndXNlIHN0cmljdCdcIiwgXCJ2YXIgQ0FDSEVEPXt9XCJdXG4gIHZhciB2YXJzID0gW11cbiAgdmFyIHRodW5rTmFtZSA9IHByb2MuZnVuY05hbWUgKyBcIl9jd2lzZV90aHVua1wiXG4gIFxuICAvL0J1aWxkIHRodW5rXG4gIGNvZGUucHVzaChbXCJyZXR1cm4gZnVuY3Rpb24gXCIsIHRodW5rTmFtZSwgXCIoXCIsIHByb2Muc2hpbUFyZ3Muam9pbihcIixcIiksIFwiKXtcIl0uam9pbihcIlwiKSlcbiAgdmFyIHR5cGVzaWcgPSBbXVxuICB2YXIgc3RyaW5nX3R5cGVzaWcgPSBbXVxuICB2YXIgcHJvY19hcmdzID0gW1tcImFycmF5XCIscHJvYy5hcnJheUFyZ3NbMF0sXCIuc2hhcGVcIl0uam9pbihcIlwiKV1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5hcnJheUFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgaiA9IHByb2MuYXJyYXlBcmdzW2ldXG4gICAgdmFycy5wdXNoKFtcInRcIiwgaiwgXCI9YXJyYXlcIiwgaiwgXCIuZHR5cGUsXCIsXG4gICAgICAgICAgICAgICBcInJcIiwgaiwgXCI9YXJyYXlcIiwgaiwgXCIub3JkZXJcIl0uam9pbihcIlwiKSlcbiAgICB0eXBlc2lnLnB1c2goXCJ0XCIgKyBqKVxuICAgIHR5cGVzaWcucHVzaChcInJcIiArIGopXG4gICAgc3RyaW5nX3R5cGVzaWcucHVzaChcInRcIitqKVxuICAgIHN0cmluZ190eXBlc2lnLnB1c2goXCJyXCIraitcIi5qb2luKClcIilcbiAgICBwcm9jX2FyZ3MucHVzaChcImFycmF5XCIgKyBqICsgXCIuZGF0YVwiKVxuICAgIHByb2NfYXJncy5wdXNoKFwiYXJyYXlcIiArIGogKyBcIi5zdHJpZGVcIilcbiAgICBwcm9jX2FyZ3MucHVzaChcImFycmF5XCIgKyBqICsgXCIub2Zmc2V0fDBcIilcbiAgfVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLnNjYWxhckFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICBwcm9jX2FyZ3MucHVzaChcInNjYWxhclwiICsgcHJvYy5zY2FsYXJBcmdzW2ldKVxuICB9XG4gIHZhcnMucHVzaChbXCJ0eXBlPVtcIiwgc3RyaW5nX3R5cGVzaWcuam9pbihcIixcIiksIFwiXS5qb2luKClcIl0uam9pbihcIlwiKSlcbiAgdmFycy5wdXNoKFwicHJvYz1DQUNIRURbdHlwZV1cIilcbiAgY29kZS5wdXNoKFwidmFyIFwiICsgdmFycy5qb2luKFwiLFwiKSlcbiAgXG4gIGNvZGUucHVzaChbXCJpZighcHJvYyl7XCIsXG4gICAgICAgICAgICAgXCJDQUNIRURbdHlwZV09cHJvYz1jb21waWxlKFtcIiwgdHlwZXNpZy5qb2luKFwiLFwiKSwgXCJdKX1cIixcbiAgICAgICAgICAgICBcInJldHVybiBwcm9jKFwiLCBwcm9jX2FyZ3Muam9pbihcIixcIiksIFwiKX1cIl0uam9pbihcIlwiKSlcblxuICBpZihwcm9jLmRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgdGh1bms6XCIsIGNvZGUuam9pbihcIlxcblwiKSlcbiAgfVxuICBcbiAgLy9Db21waWxlIHRodW5rXG4gIHZhciB0aHVuayA9IG5ldyBGdW5jdGlvbihcImNvbXBpbGVcIiwgY29kZS5qb2luKFwiXFxuXCIpKVxuICByZXR1cm4gdGh1bmsoY29tcGlsZS5iaW5kKHVuZGVmaW5lZCwgcHJvYykpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVGh1bmtcbiIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIHVuaXF1ZV9wcmVkKGxpc3QsIGNvbXBhcmUpIHtcbiAgdmFyIHB0ciA9IDFcbiAgICAsIGxlbiA9IGxpc3QubGVuZ3RoXG4gICAgLCBhPWxpc3RbMF0sIGI9bGlzdFswXVxuICBmb3IodmFyIGk9MTsgaTxsZW47ICsraSkge1xuICAgIGIgPSBhXG4gICAgYSA9IGxpc3RbaV1cbiAgICBpZihjb21wYXJlKGEsIGIpKSB7XG4gICAgICBpZihpID09PSBwdHIpIHtcbiAgICAgICAgcHRyKytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGxpc3RbcHRyKytdID0gYVxuICAgIH1cbiAgfVxuICBsaXN0Lmxlbmd0aCA9IHB0clxuICByZXR1cm4gbGlzdFxufVxuXG5mdW5jdGlvbiB1bmlxdWVfZXEobGlzdCkge1xuICB2YXIgcHRyID0gMVxuICAgICwgbGVuID0gbGlzdC5sZW5ndGhcbiAgICAsIGE9bGlzdFswXSwgYiA9IGxpc3RbMF1cbiAgZm9yKHZhciBpPTE7IGk8bGVuOyArK2ksIGI9YSkge1xuICAgIGIgPSBhXG4gICAgYSA9IGxpc3RbaV1cbiAgICBpZihhICE9PSBiKSB7XG4gICAgICBpZihpID09PSBwdHIpIHtcbiAgICAgICAgcHRyKytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGxpc3RbcHRyKytdID0gYVxuICAgIH1cbiAgfVxuICBsaXN0Lmxlbmd0aCA9IHB0clxuICByZXR1cm4gbGlzdFxufVxuXG5mdW5jdGlvbiB1bmlxdWUobGlzdCwgY29tcGFyZSwgc29ydGVkKSB7XG4gIGlmKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICBpZihjb21wYXJlKSB7XG4gICAgaWYoIXNvcnRlZCkge1xuICAgICAgbGlzdC5zb3J0KGNvbXBhcmUpXG4gICAgfVxuICAgIHJldHVybiB1bmlxdWVfcHJlZChsaXN0LCBjb21wYXJlKVxuICB9XG4gIGlmKCFzb3J0ZWQpIHtcbiAgICBsaXN0LnNvcnQoKVxuICB9XG4gIHJldHVybiB1bmlxdWVfZXEobGlzdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxdWVcbiIsIi8qKlxuICogQml0IHR3aWRkbGluZyBoYWNrcyBmb3IgSmF2YVNjcmlwdC5cbiAqXG4gKiBBdXRob3I6IE1pa29sYSBMeXNlbmtvXG4gKlxuICogUG9ydGVkIGZyb20gU3RhbmZvcmQgYml0IHR3aWRkbGluZyBoYWNrIGxpYnJhcnk6XG4gKiAgICBodHRwOi8vZ3JhcGhpY3Muc3RhbmZvcmQuZWR1L35zZWFuZGVyL2JpdGhhY2tzLmh0bWxcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjsgXCJ1c2UgcmVzdHJpY3RcIjtcblxuLy9OdW1iZXIgb2YgYml0cyBpbiBhbiBpbnRlZ2VyXG52YXIgSU5UX0JJVFMgPSAzMjtcblxuLy9Db25zdGFudHNcbmV4cG9ydHMuSU5UX0JJVFMgID0gSU5UX0JJVFM7XG5leHBvcnRzLklOVF9NQVggICA9ICAweDdmZmZmZmZmO1xuZXhwb3J0cy5JTlRfTUlOICAgPSAtMTw8KElOVF9CSVRTLTEpO1xuXG4vL1JldHVybnMgLTEsIDAsICsxIGRlcGVuZGluZyBvbiBzaWduIG9mIHhcbmV4cG9ydHMuc2lnbiA9IGZ1bmN0aW9uKHYpIHtcbiAgcmV0dXJuICh2ID4gMCkgLSAodiA8IDApO1xufVxuXG4vL0NvbXB1dGVzIGFic29sdXRlIHZhbHVlIG9mIGludGVnZXJcbmV4cG9ydHMuYWJzID0gZnVuY3Rpb24odikge1xuICB2YXIgbWFzayA9IHYgPj4gKElOVF9CSVRTLTEpO1xuICByZXR1cm4gKHYgXiBtYXNrKSAtIG1hc2s7XG59XG5cbi8vQ29tcHV0ZXMgbWluaW11bSBvZiBpbnRlZ2VycyB4IGFuZCB5XG5leHBvcnRzLm1pbiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgcmV0dXJuIHkgXiAoKHggXiB5KSAmIC0oeCA8IHkpKTtcbn1cblxuLy9Db21wdXRlcyBtYXhpbXVtIG9mIGludGVnZXJzIHggYW5kIHlcbmV4cG9ydHMubWF4ID0gZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4geCBeICgoeCBeIHkpICYgLSh4IDwgeSkpO1xufVxuXG4vL0NoZWNrcyBpZiBhIG51bWJlciBpcyBhIHBvd2VyIG9mIHR3b1xuZXhwb3J0cy5pc1BvdzIgPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiAhKHYgJiAodi0xKSkgJiYgKCEhdik7XG59XG5cbi8vQ29tcHV0ZXMgbG9nIGJhc2UgMiBvZiB2XG5leHBvcnRzLmxvZzIgPSBmdW5jdGlvbih2KSB7XG4gIHZhciByLCBzaGlmdDtcbiAgciA9ICAgICAodiA+IDB4RkZGRikgPDwgNDsgdiA+Pj49IHI7XG4gIHNoaWZ0ID0gKHYgPiAweEZGICApIDw8IDM7IHYgPj4+PSBzaGlmdDsgciB8PSBzaGlmdDtcbiAgc2hpZnQgPSAodiA+IDB4RiAgICkgPDwgMjsgdiA+Pj49IHNoaWZ0OyByIHw9IHNoaWZ0O1xuICBzaGlmdCA9ICh2ID4gMHgzICAgKSA8PCAxOyB2ID4+Pj0gc2hpZnQ7IHIgfD0gc2hpZnQ7XG4gIHJldHVybiByIHwgKHYgPj4gMSk7XG59XG5cbi8vQ29tcHV0ZXMgbG9nIGJhc2UgMTAgb2YgdlxuZXhwb3J0cy5sb2cxMCA9IGZ1bmN0aW9uKHYpIHtcbiAgcmV0dXJuICAodiA+PSAxMDAwMDAwMDAwKSA/IDkgOiAodiA+PSAxMDAwMDAwMDApID8gOCA6ICh2ID49IDEwMDAwMDAwKSA/IDcgOlxuICAgICAgICAgICh2ID49IDEwMDAwMDApID8gNiA6ICh2ID49IDEwMDAwMCkgPyA1IDogKHYgPj0gMTAwMDApID8gNCA6XG4gICAgICAgICAgKHYgPj0gMTAwMCkgPyAzIDogKHYgPj0gMTAwKSA/IDIgOiAodiA+PSAxMCkgPyAxIDogMDtcbn1cblxuLy9Db3VudHMgbnVtYmVyIG9mIGJpdHNcbmV4cG9ydHMucG9wQ291bnQgPSBmdW5jdGlvbih2KSB7XG4gIHYgPSB2IC0gKCh2ID4+PiAxKSAmIDB4NTU1NTU1NTUpO1xuICB2ID0gKHYgJiAweDMzMzMzMzMzKSArICgodiA+Pj4gMikgJiAweDMzMzMzMzMzKTtcbiAgcmV0dXJuICgodiArICh2ID4+PiA0KSAmIDB4RjBGMEYwRikgKiAweDEwMTAxMDEpID4+PiAyNDtcbn1cblxuLy9Db3VudHMgbnVtYmVyIG9mIHRyYWlsaW5nIHplcm9zXG5mdW5jdGlvbiBjb3VudFRyYWlsaW5nWmVyb3Modikge1xuICB2YXIgYyA9IDMyO1xuICB2ICY9IC12O1xuICBpZiAodikgYy0tO1xuICBpZiAodiAmIDB4MDAwMEZGRkYpIGMgLT0gMTY7XG4gIGlmICh2ICYgMHgwMEZGMDBGRikgYyAtPSA4O1xuICBpZiAodiAmIDB4MEYwRjBGMEYpIGMgLT0gNDtcbiAgaWYgKHYgJiAweDMzMzMzMzMzKSBjIC09IDI7XG4gIGlmICh2ICYgMHg1NTU1NTU1NSkgYyAtPSAxO1xuICByZXR1cm4gYztcbn1cbmV4cG9ydHMuY291bnRUcmFpbGluZ1plcm9zID0gY291bnRUcmFpbGluZ1plcm9zO1xuXG4vL1JvdW5kcyB0byBuZXh0IHBvd2VyIG9mIDJcbmV4cG9ydHMubmV4dFBvdzIgPSBmdW5jdGlvbih2KSB7XG4gIHYgKz0gdiA9PT0gMDtcbiAgLS12O1xuICB2IHw9IHYgPj4+IDE7XG4gIHYgfD0gdiA+Pj4gMjtcbiAgdiB8PSB2ID4+PiA0O1xuICB2IHw9IHYgPj4+IDg7XG4gIHYgfD0gdiA+Pj4gMTY7XG4gIHJldHVybiB2ICsgMTtcbn1cblxuLy9Sb3VuZHMgZG93biB0byBwcmV2aW91cyBwb3dlciBvZiAyXG5leHBvcnRzLnByZXZQb3cyID0gZnVuY3Rpb24odikge1xuICB2IHw9IHYgPj4+IDE7XG4gIHYgfD0gdiA+Pj4gMjtcbiAgdiB8PSB2ID4+PiA0O1xuICB2IHw9IHYgPj4+IDg7XG4gIHYgfD0gdiA+Pj4gMTY7XG4gIHJldHVybiB2IC0gKHY+Pj4xKTtcbn1cblxuLy9Db21wdXRlcyBwYXJpdHkgb2Ygd29yZFxuZXhwb3J0cy5wYXJpdHkgPSBmdW5jdGlvbih2KSB7XG4gIHYgXj0gdiA+Pj4gMTY7XG4gIHYgXj0gdiA+Pj4gODtcbiAgdiBePSB2ID4+PiA0O1xuICB2ICY9IDB4ZjtcbiAgcmV0dXJuICgweDY5OTYgPj4+IHYpICYgMTtcbn1cblxudmFyIFJFVkVSU0VfVEFCTEUgPSBuZXcgQXJyYXkoMjU2KTtcblxuKGZ1bmN0aW9uKHRhYikge1xuICBmb3IodmFyIGk9MDsgaTwyNTY7ICsraSkge1xuICAgIHZhciB2ID0gaSwgciA9IGksIHMgPSA3O1xuICAgIGZvciAodiA+Pj49IDE7IHY7IHYgPj4+PSAxKSB7XG4gICAgICByIDw8PSAxO1xuICAgICAgciB8PSB2ICYgMTtcbiAgICAgIC0tcztcbiAgICB9XG4gICAgdGFiW2ldID0gKHIgPDwgcykgJiAweGZmO1xuICB9XG59KShSRVZFUlNFX1RBQkxFKTtcblxuLy9SZXZlcnNlIGJpdHMgaW4gYSAzMiBiaXQgd29yZFxuZXhwb3J0cy5yZXZlcnNlID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gIChSRVZFUlNFX1RBQkxFWyB2ICAgICAgICAgJiAweGZmXSA8PCAyNCkgfFxuICAgICAgICAgIChSRVZFUlNFX1RBQkxFWyh2ID4+PiA4KSAgJiAweGZmXSA8PCAxNikgfFxuICAgICAgICAgIChSRVZFUlNFX1RBQkxFWyh2ID4+PiAxNikgJiAweGZmXSA8PCA4KSAgfFxuICAgICAgICAgICBSRVZFUlNFX1RBQkxFWyh2ID4+PiAyNCkgJiAweGZmXTtcbn1cblxuLy9JbnRlcmxlYXZlIGJpdHMgb2YgMiBjb29yZGluYXRlcyB3aXRoIDE2IGJpdHMuICBVc2VmdWwgZm9yIGZhc3QgcXVhZHRyZWUgY29kZXNcbmV4cG9ydHMuaW50ZXJsZWF2ZTIgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHggJj0gMHhGRkZGO1xuICB4ID0gKHggfCAoeCA8PCA4KSkgJiAweDAwRkYwMEZGO1xuICB4ID0gKHggfCAoeCA8PCA0KSkgJiAweDBGMEYwRjBGO1xuICB4ID0gKHggfCAoeCA8PCAyKSkgJiAweDMzMzMzMzMzO1xuICB4ID0gKHggfCAoeCA8PCAxKSkgJiAweDU1NTU1NTU1O1xuXG4gIHkgJj0gMHhGRkZGO1xuICB5ID0gKHkgfCAoeSA8PCA4KSkgJiAweDAwRkYwMEZGO1xuICB5ID0gKHkgfCAoeSA8PCA0KSkgJiAweDBGMEYwRjBGO1xuICB5ID0gKHkgfCAoeSA8PCAyKSkgJiAweDMzMzMzMzMzO1xuICB5ID0gKHkgfCAoeSA8PCAxKSkgJiAweDU1NTU1NTU1O1xuXG4gIHJldHVybiB4IHwgKHkgPDwgMSk7XG59XG5cbi8vRXh0cmFjdHMgdGhlIG50aCBpbnRlcmxlYXZlZCBjb21wb25lbnRcbmV4cG9ydHMuZGVpbnRlcmxlYXZlMiA9IGZ1bmN0aW9uKHYsIG4pIHtcbiAgdiA9ICh2ID4+PiBuKSAmIDB4NTU1NTU1NTU7XG4gIHYgPSAodiB8ICh2ID4+PiAxKSkgICYgMHgzMzMzMzMzMztcbiAgdiA9ICh2IHwgKHYgPj4+IDIpKSAgJiAweDBGMEYwRjBGO1xuICB2ID0gKHYgfCAodiA+Pj4gNCkpICAmIDB4MDBGRjAwRkY7XG4gIHYgPSAodiB8ICh2ID4+PiAxNikpICYgMHgwMDBGRkZGO1xuICByZXR1cm4gKHYgPDwgMTYpID4+IDE2O1xufVxuXG5cbi8vSW50ZXJsZWF2ZSBiaXRzIG9mIDMgY29vcmRpbmF0ZXMsIGVhY2ggd2l0aCAxMCBiaXRzLiAgVXNlZnVsIGZvciBmYXN0IG9jdHJlZSBjb2Rlc1xuZXhwb3J0cy5pbnRlcmxlYXZlMyA9IGZ1bmN0aW9uKHgsIHksIHopIHtcbiAgeCAmPSAweDNGRjtcbiAgeCAgPSAoeCB8ICh4PDwxNikpICYgNDI3ODE5MDMzNTtcbiAgeCAgPSAoeCB8ICh4PDw4KSkgICYgMjUxNzE5Njk1O1xuICB4ICA9ICh4IHwgKHg8PDQpKSAgJiAzMjcyMzU2MDM1O1xuICB4ICA9ICh4IHwgKHg8PDIpKSAgJiAxMjI3MTMzNTEzO1xuXG4gIHkgJj0gMHgzRkY7XG4gIHkgID0gKHkgfCAoeTw8MTYpKSAmIDQyNzgxOTAzMzU7XG4gIHkgID0gKHkgfCAoeTw8OCkpICAmIDI1MTcxOTY5NTtcbiAgeSAgPSAoeSB8ICh5PDw0KSkgICYgMzI3MjM1NjAzNTtcbiAgeSAgPSAoeSB8ICh5PDwyKSkgICYgMTIyNzEzMzUxMztcbiAgeCB8PSAoeSA8PCAxKTtcbiAgXG4gIHogJj0gMHgzRkY7XG4gIHogID0gKHogfCAoejw8MTYpKSAmIDQyNzgxOTAzMzU7XG4gIHogID0gKHogfCAoejw8OCkpICAmIDI1MTcxOTY5NTtcbiAgeiAgPSAoeiB8ICh6PDw0KSkgICYgMzI3MjM1NjAzNTtcbiAgeiAgPSAoeiB8ICh6PDwyKSkgICYgMTIyNzEzMzUxMztcbiAgXG4gIHJldHVybiB4IHwgKHogPDwgMik7XG59XG5cbi8vRXh0cmFjdHMgbnRoIGludGVybGVhdmVkIGNvbXBvbmVudCBvZiBhIDMtdHVwbGVcbmV4cG9ydHMuZGVpbnRlcmxlYXZlMyA9IGZ1bmN0aW9uKHYsIG4pIHtcbiAgdiA9ICh2ID4+PiBuKSAgICAgICAmIDEyMjcxMzM1MTM7XG4gIHYgPSAodiB8ICh2Pj4+MikpICAgJiAzMjcyMzU2MDM1O1xuICB2ID0gKHYgfCAodj4+PjQpKSAgICYgMjUxNzE5Njk1O1xuICB2ID0gKHYgfCAodj4+PjgpKSAgICYgNDI3ODE5MDMzNTtcbiAgdiA9ICh2IHwgKHY+Pj4xNikpICAmIDB4M0ZGO1xuICByZXR1cm4gKHY8PDIyKT4+MjI7XG59XG5cbi8vQ29tcHV0ZXMgbmV4dCBjb21iaW5hdGlvbiBpbiBjb2xleGljb2dyYXBoaWMgb3JkZXIgKHRoaXMgaXMgbWlzdGFrZW5seSBjYWxsZWQgbmV4dFBlcm11dGF0aW9uIG9uIHRoZSBiaXQgdHdpZGRsaW5nIGhhY2tzIHBhZ2UpXG5leHBvcnRzLm5leHRDb21iaW5hdGlvbiA9IGZ1bmN0aW9uKHYpIHtcbiAgdmFyIHQgPSB2IHwgKHYgLSAxKTtcbiAgcmV0dXJuICh0ICsgMSkgfCAoKCh+dCAmIC1+dCkgLSAxKSA+Pj4gKGNvdW50VHJhaWxpbmdaZXJvcyh2KSArIDEpKTtcbn1cblxuIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtYmFzaWMtc2hhZGVyL25vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9ub2RlX21vZHVsZXMvZHVwL2R1cC5qc1wiKSIsIihmdW5jdGlvbiAoZ2xvYmFsLEJ1ZmZlcil7XG4ndXNlIHN0cmljdCdcblxudmFyIGJpdHMgPSByZXF1aXJlKCdiaXQtdHdpZGRsZScpXG52YXIgZHVwID0gcmVxdWlyZSgnZHVwJylcblxuLy9MZWdhY3kgcG9vbCBzdXBwb3J0XG5pZighZ2xvYmFsLl9fVFlQRURBUlJBWV9QT09MKSB7XG4gIGdsb2JhbC5fX1RZUEVEQVJSQVlfUE9PTCA9IHtcbiAgICAgIFVJTlQ4ICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIFVJTlQxNiAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIFVJTlQzMiAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIElOVDggICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIElOVDE2ICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIElOVDMyICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIEZMT0FUICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIERPVUJMRSAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIERBVEEgICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIFVJTlQ4QyAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIEJVRkZFUiAgOiBkdXAoWzMyLCAwXSlcbiAgfVxufVxuXG52YXIgaGFzVWludDhDID0gKHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSkgIT09ICd1bmRlZmluZWQnXG52YXIgUE9PTCA9IGdsb2JhbC5fX1RZUEVEQVJSQVlfUE9PTFxuXG4vL1VwZ3JhZGUgcG9vbFxuaWYoIVBPT0wuVUlOVDhDKSB7XG4gIFBPT0wuVUlOVDhDID0gZHVwKFszMiwgMF0pXG59XG5pZighUE9PTC5CVUZGRVIpIHtcbiAgUE9PTC5CVUZGRVIgPSBkdXAoWzMyLCAwXSlcbn1cblxuLy9OZXcgdGVjaG5pcXVlOiBPbmx5IGFsbG9jYXRlIGZyb20gQXJyYXlCdWZmZXJWaWV3IGFuZCBCdWZmZXJcbnZhciBEQVRBICAgID0gUE9PTC5EQVRBXG4gICwgQlVGRkVSICA9IFBPT0wuQlVGRkVSXG5cbmV4cG9ydHMuZnJlZSA9IGZ1bmN0aW9uIGZyZWUoYXJyYXkpIHtcbiAgaWYoQnVmZmVyLmlzQnVmZmVyKGFycmF5KSkge1xuICAgIEJVRkZFUltiaXRzLmxvZzIoYXJyYXkubGVuZ3RoKV0ucHVzaChhcnJheSlcbiAgfSBlbHNlIHtcbiAgICBpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyYXkpICE9PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG4gICAgICBhcnJheSA9IGFycmF5LmJ1ZmZlclxuICAgIH1cbiAgICBpZighYXJyYXkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgbiA9IGFycmF5Lmxlbmd0aCB8fCBhcnJheS5ieXRlTGVuZ3RoXG4gICAgdmFyIGxvZ19uID0gYml0cy5sb2cyKG4pfDBcbiAgICBEQVRBW2xvZ19uXS5wdXNoKGFycmF5KVxuICB9XG59XG5cbmZ1bmN0aW9uIGZyZWVBcnJheUJ1ZmZlcihidWZmZXIpIHtcbiAgaWYoIWJ1ZmZlcikge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBuID0gYnVmZmVyLmxlbmd0aCB8fCBidWZmZXIuYnl0ZUxlbmd0aFxuICB2YXIgbG9nX24gPSBiaXRzLmxvZzIobilcbiAgREFUQVtsb2dfbl0ucHVzaChidWZmZXIpXG59XG5cbmZ1bmN0aW9uIGZyZWVUeXBlZEFycmF5KGFycmF5KSB7XG4gIGZyZWVBcnJheUJ1ZmZlcihhcnJheS5idWZmZXIpXG59XG5cbmV4cG9ydHMuZnJlZVVpbnQ4ID1cbmV4cG9ydHMuZnJlZVVpbnQxNiA9XG5leHBvcnRzLmZyZWVVaW50MzIgPVxuZXhwb3J0cy5mcmVlSW50OCA9XG5leHBvcnRzLmZyZWVJbnQxNiA9XG5leHBvcnRzLmZyZWVJbnQzMiA9XG5leHBvcnRzLmZyZWVGbG9hdDMyID0gXG5leHBvcnRzLmZyZWVGbG9hdCA9XG5leHBvcnRzLmZyZWVGbG9hdDY0ID0gXG5leHBvcnRzLmZyZWVEb3VibGUgPSBcbmV4cG9ydHMuZnJlZVVpbnQ4Q2xhbXBlZCA9IFxuZXhwb3J0cy5mcmVlRGF0YVZpZXcgPSBmcmVlVHlwZWRBcnJheVxuXG5leHBvcnRzLmZyZWVBcnJheUJ1ZmZlciA9IGZyZWVBcnJheUJ1ZmZlclxuXG5leHBvcnRzLmZyZWVCdWZmZXIgPSBmdW5jdGlvbiBmcmVlQnVmZmVyKGFycmF5KSB7XG4gIEJVRkZFUltiaXRzLmxvZzIoYXJyYXkubGVuZ3RoKV0ucHVzaChhcnJheSlcbn1cblxuZXhwb3J0cy5tYWxsb2MgPSBmdW5jdGlvbiBtYWxsb2MobiwgZHR5cGUpIHtcbiAgaWYoZHR5cGUgPT09IHVuZGVmaW5lZCB8fCBkdHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgIHJldHVybiBtYWxsb2NBcnJheUJ1ZmZlcihuKVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaChkdHlwZSkge1xuICAgICAgY2FzZSAndWludDgnOlxuICAgICAgICByZXR1cm4gbWFsbG9jVWludDgobilcbiAgICAgIGNhc2UgJ3VpbnQxNic6XG4gICAgICAgIHJldHVybiBtYWxsb2NVaW50MTYobilcbiAgICAgIGNhc2UgJ3VpbnQzMic6XG4gICAgICAgIHJldHVybiBtYWxsb2NVaW50MzIobilcbiAgICAgIGNhc2UgJ2ludDgnOlxuICAgICAgICByZXR1cm4gbWFsbG9jSW50OChuKVxuICAgICAgY2FzZSAnaW50MTYnOlxuICAgICAgICByZXR1cm4gbWFsbG9jSW50MTYobilcbiAgICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0ludDMyKG4pXG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICBjYXNlICdmbG9hdDMyJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0Zsb2F0KG4pXG4gICAgICBjYXNlICdkb3VibGUnOlxuICAgICAgY2FzZSAnZmxvYXQ2NCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NEb3VibGUobilcbiAgICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgICByZXR1cm4gbWFsbG9jVWludDhDbGFtcGVkKG4pXG4gICAgICBjYXNlICdidWZmZXInOlxuICAgICAgICByZXR1cm4gbWFsbG9jQnVmZmVyKG4pXG4gICAgICBjYXNlICdkYXRhJzpcbiAgICAgIGNhc2UgJ2RhdGF2aWV3JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0RhdGFWaWV3KG4pXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIG1hbGxvY0FycmF5QnVmZmVyKG4pIHtcbiAgdmFyIG4gPSBiaXRzLm5leHRQb3cyKG4pXG4gIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKVxuICB2YXIgZCA9IERBVEFbbG9nX25dXG4gIGlmKGQubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkLnBvcCgpXG4gIH1cbiAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcihuKVxufVxuZXhwb3J0cy5tYWxsb2NBcnJheUJ1ZmZlciA9IG1hbGxvY0FycmF5QnVmZmVyXG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQ4KG4pIHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG1hbGxvY0FycmF5QnVmZmVyKG4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NVaW50OCA9IG1hbGxvY1VpbnQ4XG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQxNihuKSB7XG4gIHJldHVybiBuZXcgVWludDE2QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoMipuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jVWludDE2ID0gbWFsbG9jVWludDE2XG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQzMihuKSB7XG4gIHJldHVybiBuZXcgVWludDMyQXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoNCpuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jVWludDMyID0gbWFsbG9jVWludDMyXG5cbmZ1bmN0aW9uIG1hbGxvY0ludDgobikge1xuICByZXR1cm4gbmV3IEludDhBcnJheShtYWxsb2NBcnJheUJ1ZmZlcihuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jSW50OCA9IG1hbGxvY0ludDhcblxuZnVuY3Rpb24gbWFsbG9jSW50MTYobikge1xuICByZXR1cm4gbmV3IEludDE2QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoMipuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jSW50MTYgPSBtYWxsb2NJbnQxNlxuXG5mdW5jdGlvbiBtYWxsb2NJbnQzMihuKSB7XG4gIHJldHVybiBuZXcgSW50MzJBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig0Km4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NJbnQzMiA9IG1hbGxvY0ludDMyXG5cbmZ1bmN0aW9uIG1hbGxvY0Zsb2F0KG4pIHtcbiAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoNCpuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jRmxvYXQzMiA9IGV4cG9ydHMubWFsbG9jRmxvYXQgPSBtYWxsb2NGbG9hdFxuXG5mdW5jdGlvbiBtYWxsb2NEb3VibGUobikge1xuICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig4Km4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NGbG9hdDY0ID0gZXhwb3J0cy5tYWxsb2NEb3VibGUgPSBtYWxsb2NEb3VibGVcblxuZnVuY3Rpb24gbWFsbG9jVWludDhDbGFtcGVkKG4pIHtcbiAgaWYoaGFzVWludDhDKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OENsYW1wZWRBcnJheShtYWxsb2NBcnJheUJ1ZmZlcihuKSwgMCwgbilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWFsbG9jVWludDgobilcbiAgfVxufVxuZXhwb3J0cy5tYWxsb2NVaW50OENsYW1wZWQgPSBtYWxsb2NVaW50OENsYW1wZWRcblxuZnVuY3Rpb24gbWFsbG9jRGF0YVZpZXcobikge1xuICByZXR1cm4gbmV3IERhdGFWaWV3KG1hbGxvY0FycmF5QnVmZmVyKG4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NEYXRhVmlldyA9IG1hbGxvY0RhdGFWaWV3XG5cbmZ1bmN0aW9uIG1hbGxvY0J1ZmZlcihuKSB7XG4gIG4gPSBiaXRzLm5leHRQb3cyKG4pXG4gIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKVxuICB2YXIgY2FjaGUgPSBCVUZGRVJbbG9nX25dXG4gIGlmKGNhY2hlLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gY2FjaGUucG9wKClcbiAgfVxuICByZXR1cm4gbmV3IEJ1ZmZlcihuKVxufVxuZXhwb3J0cy5tYWxsb2NCdWZmZXIgPSBtYWxsb2NCdWZmZXJcblxuZXhwb3J0cy5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSgpIHtcbiAgZm9yKHZhciBpPTA7IGk8MzI7ICsraSkge1xuICAgIFBPT0wuVUlOVDhbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuVUlOVDE2W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLlVJTlQzMltpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5JTlQ4W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLklOVDE2W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLklOVDMyW2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLkZMT0FUW2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLkRPVUJMRVtpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5VSU5UOENbaV0ubGVuZ3RoID0gMFxuICAgIERBVEFbaV0ubGVuZ3RoID0gMFxuICAgIEJVRkZFUltpXS5sZW5ndGggPSAwXG4gIH1cbn1cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKSIsIi8qIChUaGUgTUlUIExpY2Vuc2UpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMiBCcmFuZG9uIEJlbnZpZSA8aHR0cDovL2JiZW52aWUuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kXHJcbiAqIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICdTb2Z0d2FyZScpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxyXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gKiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgd2l0aCBhbGwgY29waWVzIG9yXHJcbiAqIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HXHJcbiAqIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxyXG4gKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZICBDTEFJTSxcclxuICogREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vLyBPcmlnaW5hbCBXZWFrTWFwIGltcGxlbWVudGF0aW9uIGJ5IEdvemFsYSBAIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tLzEyNjk5OTFcclxuLy8gVXBkYXRlZCBhbmQgYnVnZml4ZWQgYnkgUmF5bm9zIEAgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTYzODA1OVxyXG4vLyBFeHBhbmRlZCBieSBCZW52aWUgQCBodHRwczovL2dpdGh1Yi5jb20vQmVudmllL2hhcm1vbnktY29sbGVjdGlvbnNcclxuXHJcbnZvaWQgZnVuY3Rpb24oZ2xvYmFsLCB1bmRlZmluZWRfLCB1bmRlZmluZWQpe1xyXG4gIHZhciBnZXRQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxyXG4gICAgICBkZWZQcm9wICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcclxuICAgICAgdG9Tb3VyY2UgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcsXHJcbiAgICAgIGNyZWF0ZSAgID0gT2JqZWN0LmNyZWF0ZSxcclxuICAgICAgaGFzT3duICAgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxyXG4gICAgICBmdW5jTmFtZSA9IC9eXFxuP2Z1bmN0aW9uXFxzPyhcXHcqKT9fP1xcKC87XHJcblxyXG5cclxuICBmdW5jdGlvbiBkZWZpbmUob2JqZWN0LCBrZXksIHZhbHVlKXtcclxuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHZhbHVlID0ga2V5O1xyXG4gICAgICBrZXkgPSBuYW1lT2YodmFsdWUpLnJlcGxhY2UoL18kLywgJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlZlByb3Aob2JqZWN0LCBrZXksIHsgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbmFtZU9mKGZ1bmMpe1xyXG4gICAgcmV0dXJuIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICA/ICcnIDogJ25hbWUnIGluIGZ1bmNcclxuICAgICAgICAgID8gZnVuYy5uYW1lIDogdG9Tb3VyY2UuY2FsbChmdW5jKS5tYXRjaChmdW5jTmFtZSlbMV07XHJcbiAgfVxyXG5cclxuICAvLyAjIyMjIyMjIyMjIyNcclxuICAvLyAjIyMgRGF0YSAjIyNcclxuICAvLyAjIyMjIyMjIyMjIyNcclxuXHJcbiAgdmFyIERhdGEgPSAoZnVuY3Rpb24oKXtcclxuICAgIHZhciBkYXRhRGVzYyA9IHsgdmFsdWU6IHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfSB9LFxyXG4gICAgICAgIGRhdGFsb2NrID0gJ3JldHVybiBmdW5jdGlvbihrKXtpZihrPT09cylyZXR1cm4gbH0nLFxyXG4gICAgICAgIHVpZHMgICAgID0gY3JlYXRlKG51bGwpLFxyXG5cclxuICAgICAgICBjcmVhdGVVSUQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgdmFyIGtleSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xyXG4gICAgICAgICAgcmV0dXJuIGtleSBpbiB1aWRzID8gY3JlYXRlVUlEKCkgOiB1aWRzW2tleV0gPSBrZXk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2xvYmFsSUQgPSBjcmVhdGVVSUQoKSxcclxuXHJcbiAgICAgICAgc3RvcmFnZSA9IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBnbG9iYWxJRCkpXHJcbiAgICAgICAgICAgIHJldHVybiBvYmpbZ2xvYmFsSURdO1xyXG5cclxuICAgICAgICAgIGlmICghT2JqZWN0LmlzRXh0ZW5zaWJsZShvYmopKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG11c3QgYmUgZXh0ZW5zaWJsZVwiKTtcclxuXHJcbiAgICAgICAgICB2YXIgc3RvcmUgPSBjcmVhdGUobnVsbCk7XHJcbiAgICAgICAgICBkZWZQcm9wKG9iaiwgZ2xvYmFsSUQsIHsgdmFsdWU6IHN0b3JlIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHN0b3JlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgLy8gY29tbW9uIHBlci1vYmplY3Qgc3RvcmFnZSBhcmVhIG1hZGUgdmlzaWJsZSBieSBwYXRjaGluZyBnZXRPd25Qcm9wZXJ0eU5hbWVzJ1xyXG4gICAgZGVmaW5lKE9iamVjdCwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhvYmope1xyXG4gICAgICB2YXIgcHJvcHMgPSBnZXRQcm9wcyhvYmopO1xyXG4gICAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBnbG9iYWxJRCkpXHJcbiAgICAgICAgcHJvcHMuc3BsaWNlKHByb3BzLmluZGV4T2YoZ2xvYmFsSUQpLCAxKTtcclxuICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gRGF0YSgpe1xyXG4gICAgICB2YXIgcHVpZCA9IGNyZWF0ZVVJRCgpLFxyXG4gICAgICAgICAgc2VjcmV0ID0ge307XHJcblxyXG4gICAgICB0aGlzLnVubG9jayA9IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgdmFyIHN0b3JlID0gc3RvcmFnZShvYmopO1xyXG4gICAgICAgIGlmIChoYXNPd24uY2FsbChzdG9yZSwgcHVpZCkpXHJcbiAgICAgICAgICByZXR1cm4gc3RvcmVbcHVpZF0oc2VjcmV0KTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBjcmVhdGUobnVsbCwgZGF0YURlc2MpO1xyXG4gICAgICAgIGRlZlByb3Aoc3RvcmUsIHB1aWQsIHtcclxuICAgICAgICAgIHZhbHVlOiBuZXcgRnVuY3Rpb24oJ3MnLCAnbCcsIGRhdGFsb2NrKShzZWNyZXQsIGRhdGEpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmUoRGF0YS5wcm90b3R5cGUsIGZ1bmN0aW9uIGdldChvKXsgcmV0dXJuIHRoaXMudW5sb2NrKG8pLnZhbHVlIH0pO1xyXG4gICAgZGVmaW5lKERhdGEucHJvdG90eXBlLCBmdW5jdGlvbiBzZXQobywgdil7IHRoaXMudW5sb2NrKG8pLnZhbHVlID0gdiB9KTtcclxuXHJcbiAgICByZXR1cm4gRGF0YTtcclxuICB9KCkpO1xyXG5cclxuXHJcbiAgdmFyIFdNID0gKGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgdmFyIHZhbGlkYXRlID0gZnVuY3Rpb24oa2V5KXtcclxuICAgICAgaWYgKGtleSA9PSBudWxsIHx8IHR5cGVvZiBrZXkgIT09ICdvYmplY3QnICYmIHR5cGVvZiBrZXkgIT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgV2Vha01hcCBrZXlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdyYXAgPSBmdW5jdGlvbihjb2xsZWN0aW9uLCB2YWx1ZSl7XHJcbiAgICAgIHZhciBzdG9yZSA9IGRhdGEudW5sb2NrKGNvbGxlY3Rpb24pO1xyXG4gICAgICBpZiAoc3RvcmUudmFsdWUpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBhbHJlYWR5IGEgV2Vha01hcFwiKTtcclxuICAgICAgc3RvcmUudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdW53cmFwID0gZnVuY3Rpb24oY29sbGVjdGlvbil7XHJcbiAgICAgIHZhciBzdG9yYWdlID0gZGF0YS51bmxvY2soY29sbGVjdGlvbikudmFsdWU7XHJcbiAgICAgIGlmICghc3RvcmFnZSlcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiV2Vha01hcCBpcyBub3QgZ2VuZXJpY1wiKTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluaXRpYWxpemUgPSBmdW5jdGlvbih3ZWFrbWFwLCBpdGVyYWJsZSl7XHJcbiAgICAgIGlmIChpdGVyYWJsZSAhPT0gbnVsbCAmJiB0eXBlb2YgaXRlcmFibGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBpdGVyYWJsZS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgaXRlcmFibGUuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKXtcclxuICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQXJyYXkgJiYgaXRlbS5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgIHNldC5jYWxsKHdlYWttYXAsIGl0ZXJhYmxlW2ldWzBdLCBpdGVyYWJsZVtpXVsxXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gV2Vha01hcChpdGVyYWJsZSl7XHJcbiAgICAgIGlmICh0aGlzID09PSBnbG9iYWwgfHwgdGhpcyA9PSBudWxsIHx8IHRoaXMgPT09IFdlYWtNYXAucHJvdG90eXBlKVxyXG4gICAgICAgIHJldHVybiBuZXcgV2Vha01hcChpdGVyYWJsZSk7XHJcblxyXG4gICAgICB3cmFwKHRoaXMsIG5ldyBEYXRhKTtcclxuICAgICAgaW5pdGlhbGl6ZSh0aGlzLCBpdGVyYWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0KGtleSl7XHJcbiAgICAgIHZhbGlkYXRlKGtleSk7XHJcbiAgICAgIHZhciB2YWx1ZSA9IHVud3JhcCh0aGlzKS5nZXQoa2V5KTtcclxuICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWRfID8gdW5kZWZpbmVkIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xyXG4gICAgICB2YWxpZGF0ZShrZXkpO1xyXG4gICAgICAvLyBzdG9yZSBhIHRva2VuIGZvciBleHBsaWNpdCB1bmRlZmluZWQgc28gdGhhdCBcImhhc1wiIHdvcmtzIGNvcnJlY3RseVxyXG4gICAgICB1bndyYXAodGhpcykuc2V0KGtleSwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZF8gOiB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzKGtleSl7XHJcbiAgICAgIHZhbGlkYXRlKGtleSk7XHJcbiAgICAgIHJldHVybiB1bndyYXAodGhpcykuZ2V0KGtleSkgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVfKGtleSl7XHJcbiAgICAgIHZhbGlkYXRlKGtleSk7XHJcbiAgICAgIHZhciBkYXRhID0gdW53cmFwKHRoaXMpLFxyXG4gICAgICAgICAgaGFkID0gZGF0YS5nZXQoa2V5KSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICBkYXRhLnNldChrZXksIHVuZGVmaW5lZCk7XHJcbiAgICAgIHJldHVybiBoYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9TdHJpbmcoKXtcclxuICAgICAgdW53cmFwKHRoaXMpO1xyXG4gICAgICByZXR1cm4gJ1tvYmplY3QgV2Vha01hcF0nO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBzcmMgPSAoJ3JldHVybiAnK2RlbGV0ZV8pLnJlcGxhY2UoJ2VfJywgJ1xcXFx1MDA2NScpLFxyXG4gICAgICAgICAgZGVsID0gbmV3IEZ1bmN0aW9uKCd1bndyYXAnLCAndmFsaWRhdGUnLCBzcmMpKHVud3JhcCwgdmFsaWRhdGUpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB2YXIgZGVsID0gZGVsZXRlXztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3JjID0gKCcnK09iamVjdCkuc3BsaXQoJ09iamVjdCcpO1xyXG4gICAgdmFyIHN0cmluZ2lmaWVyID0gZnVuY3Rpb24gdG9TdHJpbmcoKXtcclxuICAgICAgcmV0dXJuIHNyY1swXSArIG5hbWVPZih0aGlzKSArIHNyY1sxXTtcclxuICAgIH07XHJcblxyXG4gICAgZGVmaW5lKHN0cmluZ2lmaWVyLCBzdHJpbmdpZmllcik7XHJcblxyXG4gICAgdmFyIHByZXAgPSB7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5XHJcbiAgICAgID8gZnVuY3Rpb24oZil7IGYuX19wcm90b19fID0gc3RyaW5naWZpZXIgfVxyXG4gICAgICA6IGZ1bmN0aW9uKGYpeyBkZWZpbmUoZiwgc3RyaW5naWZpZXIpIH07XHJcblxyXG4gICAgcHJlcChXZWFrTWFwKTtcclxuXHJcbiAgICBbdG9TdHJpbmcsIGdldCwgc2V0LCBoYXMsIGRlbF0uZm9yRWFjaChmdW5jdGlvbihtZXRob2Qpe1xyXG4gICAgICBkZWZpbmUoV2Vha01hcC5wcm90b3R5cGUsIG1ldGhvZCk7XHJcbiAgICAgIHByZXAobWV0aG9kKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBXZWFrTWFwO1xyXG4gIH0obmV3IERhdGEpKTtcclxuXHJcbiAgdmFyIGRlZmF1bHRDcmVhdG9yID0gT2JqZWN0LmNyZWF0ZVxyXG4gICAgPyBmdW5jdGlvbigpeyByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKSB9XHJcbiAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB7fSB9O1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVTdG9yYWdlKGNyZWF0b3Ipe1xyXG4gICAgdmFyIHdlYWttYXAgPSBuZXcgV007XHJcbiAgICBjcmVhdG9yIHx8IChjcmVhdG9yID0gZGVmYXVsdENyZWF0b3IpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3JhZ2Uob2JqZWN0LCB2YWx1ZSl7XHJcbiAgICAgIGlmICh2YWx1ZSB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgd2Vha21hcC5zZXQob2JqZWN0LCB2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsdWUgPSB3ZWFrbWFwLmdldChvYmplY3QpO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IGNyZWF0b3Iob2JqZWN0KTtcclxuICAgICAgICAgIHdlYWttYXAuc2V0KG9iamVjdCwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0b3JhZ2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFdNO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBleHBvcnRzLldlYWtNYXAgPSBXTTtcclxuICB9IGVsc2UgaWYgKCEoJ1dlYWtNYXAnIGluIGdsb2JhbCkpIHtcclxuICAgIGdsb2JhbC5XZWFrTWFwID0gV007XHJcbiAgfVxyXG5cclxuICBXTS5jcmVhdGVTdG9yYWdlID0gY3JlYXRlU3RvcmFnZTtcclxuICBpZiAoZ2xvYmFsLldlYWtNYXApXHJcbiAgICBnbG9iYWwuV2Vha01hcC5jcmVhdGVTdG9yYWdlID0gY3JlYXRlU3RvcmFnZTtcclxufSgoMCwgZXZhbCkoJ3RoaXMnKSk7XHJcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAndW5kZWZpbmVkJyA/IHJlcXVpcmUoJ3dlYWttYXAnKSA6IFdlYWtNYXBcblxudmFyIFdlYkdMRVdTdHJ1Y3QgPSBuZXcgd2Vha01hcCgpXG5cbmZ1bmN0aW9uIGJhc2VOYW1lKGV4dF9uYW1lKSB7XG4gIHJldHVybiBleHRfbmFtZS5yZXBsYWNlKC9eW0EtWl0rXy8sICcnKVxufVxuXG5mdW5jdGlvbiBpbml0V2ViR0xFVyhnbCkge1xuICB2YXIgc3RydWN0ID0gV2ViR0xFV1N0cnVjdC5nZXQoZ2wpXG4gIGlmKHN0cnVjdCkge1xuICAgIHJldHVybiBzdHJ1Y3RcbiAgfVxuICB2YXIgZXh0ZW5zaW9ucyA9IHt9XG4gIHZhciBzdXBwb3J0ZWQgPSBnbC5nZXRTdXBwb3J0ZWRFeHRlbnNpb25zKClcbiAgZm9yKHZhciBpPTA7IGk8c3VwcG9ydGVkLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGV4dE5hbWUgPSBzdXBwb3J0ZWRbaV1cblxuICAgIC8vU2tpcCBNT1pfIGV4dGVuc2lvbnNcbiAgICBpZihleHROYW1lLmluZGV4T2YoJ01PWl8nKSA9PT0gMCkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgdmFyIGV4dCA9IGdsLmdldEV4dGVuc2lvbihzdXBwb3J0ZWRbaV0pXG4gICAgaWYoIWV4dCkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgZXh0ZW5zaW9uc1tleHROYW1lXSA9IGV4dFxuICAgICAgdmFyIGJhc2UgPSBiYXNlTmFtZShleHROYW1lKVxuICAgICAgaWYoYmFzZSA9PT0gZXh0TmFtZSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZXh0TmFtZSA9IGJhc2VcbiAgICB9XG4gIH1cbiAgV2ViR0xFV1N0cnVjdC5zZXQoZ2wsIGV4dGVuc2lvbnMpXG4gIHJldHVybiBleHRlbnNpb25zXG59XG5tb2R1bGUuZXhwb3J0cyA9IGluaXRXZWJHTEVXIiwidmFyIGNyZWF0ZSA9IHJlcXVpcmUoJ2dsLXRleHR1cmUyZCcpXG52YXIgbmRhcnJheSA9IHJlcXVpcmUoJ25kYXJyYXknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGdsKSB7XG4gICAgLy9maWxsIGFuIGFycmF5IHdpdGggMHhmZlxuICAgIHZhciBkYXRhID0gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KDE2KSlcbiAgICAgICAgICAgIC5tYXAoTnVtYmVyLnByb3RvdHlwZS52YWx1ZU9mLCAweEZGKTtcbiAgICAvL2NyZWF0ZSBhIDJEIG5kYXJyYXlcbiAgICB2YXIgYXJyYXkgPSBuZGFycmF5KG5ldyBVaW50OEFycmF5KGRhdGEpLCBbMiwgMiwgNF0pXG4gICAgcmV0dXJuIGNyZWF0ZShnbCwgYXJyYXkpXG59IiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9uZGFycmF5LW9wcy5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvdHlwZWRhcnJheS1wb29sL3Bvb2wuanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3dlYmdsZXcvd2ViZ2xldy5qc1wiKSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbmRhcnJheSA9IHJlcXVpcmUoJ25kYXJyYXknKVxudmFyIG9wcyAgICAgPSByZXF1aXJlKCduZGFycmF5LW9wcycpXG52YXIgcG9vbCAgICA9IHJlcXVpcmUoJ3R5cGVkYXJyYXktcG9vbCcpXG52YXIgd2ViZ2xldyA9IHJlcXVpcmUoJ3dlYmdsZXcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVRleHR1cmUyRFxuXG52YXIgbGluZWFyVHlwZXMgPSBudWxsXG52YXIgZmlsdGVyVHlwZXMgPSBudWxsXG52YXIgd3JhcFR5cGVzICAgPSBudWxsXG5cbmZ1bmN0aW9uIGxhenlJbml0TGluZWFyVHlwZXMoZ2wpIHtcbiAgbGluZWFyVHlwZXMgPSBbXG4gICAgZ2wuTElORUFSLFxuICAgIGdsLk5FQVJFU1RfTUlQTUFQX0xJTkVBUixcbiAgICBnbC5MSU5FQVJfTUlQTUFQX05FQVJFU1QsXG4gICAgZ2wuTElORUFSX01JUE1BUF9ORUFSRVNUXG4gIF1cbiAgZmlsdGVyVHlwZXMgPSBbXG4gICAgZ2wuTkVBUkVTVCxcbiAgICBnbC5MSU5FQVIsXG4gICAgZ2wuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVCxcbiAgICBnbC5ORUFSRVNUX01JUE1BUF9MSU5FQVIsXG4gICAgZ2wuTElORUFSX01JUE1BUF9ORUFSRVNULFxuICAgIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSXG4gIF1cbiAgd3JhcFR5cGVzID0gW1xuICAgIGdsLlJFUEVBVCxcbiAgICBnbC5DTEFNUF9UT19FREdFLFxuICAgIGdsLk1JUlJPUkVEX1JFUEVBVFxuICBdXG59XG5cbnZhciBjb252ZXJ0RmxvYXRUb1VpbnQ4ID0gZnVuY3Rpb24ob3V0LCBpbnApIHtcbiAgb3BzLm11bHMob3V0LCBpbnAsIDI1NS4wKVxufVxuXG5mdW5jdGlvbiByZXNoYXBlVGV4dHVyZSh0ZXgsIHcsIGgpIHtcbiAgdmFyIGdsID0gdGV4LmdsXG4gIHZhciBtYXhTaXplID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpXG4gIGlmKHcgPCAwIHx8IHcgPiBtYXhTaXplIHx8IGggPCAwIHx8IGggPiBtYXhTaXplKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgdGV4dHVyZSBzaXplJylcbiAgfVxuICB0ZXguX3NoYXBlID0gW3csIGhdXG4gIHRleC5iaW5kKClcbiAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCB0ZXguZm9ybWF0LCB3LCBoLCAwLCB0ZXguZm9ybWF0LCB0ZXgudHlwZSwgbnVsbClcbiAgdGV4Ll9taXBMZXZlbHMgPSBbMF1cbiAgcmV0dXJuIHRleFxufVxuXG5mdW5jdGlvbiBUZXh0dXJlMkQoZ2wsIGhhbmRsZSwgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCB0eXBlKSB7XG4gIHRoaXMuZ2wgPSBnbFxuICB0aGlzLmhhbmRsZSA9IGhhbmRsZVxuICB0aGlzLmZvcm1hdCA9IGZvcm1hdFxuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMuX3NoYXBlID0gW3dpZHRoLCBoZWlnaHRdXG4gIHRoaXMuX21pcExldmVscyA9IFswXVxuICB0aGlzLl9tYWdGaWx0ZXIgPSBnbC5ORUFSRVNUXG4gIHRoaXMuX21pbkZpbHRlciA9IGdsLk5FQVJFU1RcbiAgdGhpcy5fd3JhcFMgPSBnbC5DTEFNUF9UT19FREdFXG4gIHRoaXMuX3dyYXBUID0gZ2wuQ0xBTVBfVE9fRURHRVxuICB0aGlzLl9hbmlzb1NhbXBsZXMgPSAxXG5cbiAgdmFyIHBhcmVudCA9IHRoaXNcbiAgdmFyIHdyYXBWZWN0b3IgPSBbdGhpcy5fd3JhcFMsIHRoaXMuX3dyYXBUXVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh3cmFwVmVjdG9yLCBbXG4gICAge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fd3JhcFNcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC53cmFwUyA9IHZcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuX3dyYXBUXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQud3JhcFQgPSB2XG4gICAgICB9XG4gICAgfVxuICBdKVxuICB0aGlzLl93cmFwVmVjdG9yID0gd3JhcFZlY3RvclxuXG4gIHZhciBzaGFwZVZlY3RvciA9IFt0aGlzLl9zaGFwZVswXSwgdGhpcy5fc2hhcGVbMV1dXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHNoYXBlVmVjdG9yLCBbXG4gICAge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fc2hhcGVbMF1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC53aWR0aCA9IHZcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuX3NoYXBlWzFdXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuaGVpZ2h0ID0gdlxuICAgICAgfVxuICAgIH1cbiAgXSlcbiAgdGhpcy5fc2hhcGVWZWN0b3IgPSBzaGFwZVZlY3RvclxufVxuXG52YXIgcHJvdG8gPSBUZXh0dXJlMkQucHJvdG90eXBlXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHByb3RvLCB7XG4gIG1pbkZpbHRlcjoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWluRmlsdGVyXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHRoaXMuYmluZCgpXG4gICAgICB2YXIgZ2wgPSB0aGlzLmdsXG4gICAgICBpZih0aGlzLnR5cGUgPT09IGdsLkZMT0FUICYmIGxpbmVhclR5cGVzLmluZGV4T2YodikgPj0gMCkge1xuICAgICAgICBpZighd2ViZ2xldyhnbCkudGV4dHVyZV9mbG9hdF9saW5lYXIpIHtcbiAgICAgICAgICB2ID0gZ2wuTkVBUkVTVFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihmaWx0ZXJUeXBlcy5pbmRleE9mKHYpIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biBmaWx0ZXIgbW9kZSAnICsgdilcbiAgICAgIH1cbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB2KVxuICAgICAgcmV0dXJuIHRoaXMuX21pbkZpbHRlciA9IHZcbiAgICB9XG4gIH0sXG4gIG1hZ0ZpbHRlcjoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFnRmlsdGVyXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHRoaXMuYmluZCgpXG4gICAgICB2YXIgZ2wgPSB0aGlzLmdsXG4gICAgICBpZih0aGlzLnR5cGUgPT09IGdsLkZMT0FUICYmIGxpbmVhclR5cGVzLmluZGV4T2YodikgPj0gMCkge1xuICAgICAgICBpZighd2ViZ2xldyhnbCkudGV4dHVyZV9mbG9hdF9saW5lYXIpIHtcbiAgICAgICAgICB2ID0gZ2wuTkVBUkVTVFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihmaWx0ZXJUeXBlcy5pbmRleE9mKHYpIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biBmaWx0ZXIgbW9kZSAnICsgdilcbiAgICAgIH1cbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCB2KVxuICAgICAgcmV0dXJuIHRoaXMuX21hZ0ZpbHRlciA9IHZcbiAgICB9XG4gIH0sXG4gIG1pcFNhbXBsZXM6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FuaXNvU2FtcGxlc1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihpKSB7XG4gICAgICB2YXIgcHNhbXBsZXMgPSB0aGlzLl9hbmlzb1NhbXBsZXNcbiAgICAgIHRoaXMuX2FuaXNvU2FtcGxlcyA9IE1hdGgubWF4KGksIDEpfDBcbiAgICAgIGlmKHBzYW1wbGVzICE9PSB0aGlzLl9hbmlzb1NhbXBsZXMpIHtcbiAgICAgICAgdmFyIGV4dCA9IHdlYmdsZXcodGhpcy5nbCkuRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXG4gICAgICAgIGlmKGV4dCkge1xuICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyZih0aGlzLmdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgdGhpcy5fYW5pc29TYW1wbGVzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fYW5pc29TYW1wbGVzXG4gICAgfVxuICB9LFxuICB3cmFwUzoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFNcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIGlmKHdyYXBUeXBlcy5pbmRleE9mKHYpIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biB3cmFwIG1vZGUgJyArIHYpXG4gICAgICB9XG4gICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9TLCB2KVxuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBTID0gdlxuICAgIH1cbiAgfSxcbiAgd3JhcFQ6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBUXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHRoaXMuYmluZCgpXG4gICAgICBpZih3cmFwVHlwZXMuaW5kZXhPZih2KSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVua25vd24gd3JhcCBtb2RlICcgKyB2KVxuICAgICAgfVxuICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfVCwgdilcbiAgICAgIHJldHVybiB0aGlzLl93cmFwVCA9IHZcbiAgICB9XG4gIH0sXG4gIHdyYXA6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBWZWN0b3JcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgaWYoIUFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgICAgdiA9IFt2LHZdXG4gICAgICB9XG4gICAgICBpZih2Lmxlbmd0aCAhPT0gMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogTXVzdCBzcGVjaWZ5IHdyYXAgbW9kZSBmb3Igcm93cyBhbmQgY29sdW1ucycpXG4gICAgICB9XG4gICAgICBmb3IodmFyIGk9MDsgaTwyOyArK2kpIHtcbiAgICAgICAgaWYod3JhcFR5cGVzLmluZGV4T2YodltpXSkgPCAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVua25vd24gd3JhcCBtb2RlICcgKyB2KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl93cmFwUyA9IHZbMF1cbiAgICAgIHRoaXMuX3dyYXBUID0gdlsxXVxuXG4gICAgICB2YXIgZ2wgPSB0aGlzLmdsXG4gICAgICB0aGlzLmJpbmQoKVxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgdGhpcy5fd3JhcFMpXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCB0aGlzLl93cmFwVClcblxuICAgICAgcmV0dXJuIHZcbiAgICB9XG4gIH0sXG4gIHNoYXBlOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaGFwZVZlY3RvclxuICAgIH0sIFxuICAgIHNldDogZnVuY3Rpb24oeCkge1xuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgICAgeCA9IFt4fDAseHwwXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoeC5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCB0ZXh0dXJlIHNoYXBlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzaGFwZVRleHR1cmUodGhpcywgeFswXXwwLCB4WzFdfDApXG4gICAgICByZXR1cm4gW3hbMF18MCwgeFsxXXwwXVxuICAgIH1cbiAgfSxcbiAgd2lkdGg6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NoYXBlWzBdXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHcpIHtcbiAgICAgIHcgPSB3fDBcbiAgICAgIHJlc2hhcGVUZXh0dXJlKHRoaXMsIHcsIHRoaXMuX3NoYXBlWzFdKVxuICAgICAgcmV0dXJuIHdcbiAgICB9XG4gIH0sXG4gIGhlaWdodDoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2hhcGVbMV1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24oaCkge1xuICAgICAgaCA9IGh8MFxuICAgICAgcmVzaGFwZVRleHR1cmUodGhpcywgdGhpcy5fc2hhcGVbMF0sIGgpXG4gICAgICByZXR1cm4gaFxuICAgIH1cbiAgfVxufSlcblxucHJvdG8uYmluZCA9IGZ1bmN0aW9uKHVuaXQpIHtcbiAgdmFyIGdsID0gdGhpcy5nbFxuICBpZih1bml0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgKHVuaXR8MCkpXG4gIH1cbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5oYW5kbGUpXG4gIGlmKHVuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAodW5pdHwwKVxuICB9XG4gIHJldHVybiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQUNUSVZFX1RFWFRVUkUpIC0gZ2wuVEVYVFVSRTBcbn1cblxucHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy5oYW5kbGUpXG59XG5cbnByb3RvLmdlbmVyYXRlTWlwbWFwID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYmluZCgpXG4gIHRoaXMuZ2wuZ2VuZXJhdGVNaXBtYXAodGhpcy5nbC5URVhUVVJFXzJEKVxuICBcbiAgLy9VcGRhdGUgbWlwIGxldmVsc1xuICB2YXIgbCA9IE1hdGgubWluKHRoaXMuX3NoYXBlWzBdLCB0aGlzLl9zaGFwZVsxXSlcbiAgZm9yKHZhciBpPTA7IGw+MDsgKytpLCBsPj4+PTEpIHtcbiAgICBpZih0aGlzLl9taXBMZXZlbHMuaW5kZXhPZihpKSA8IDApIHtcbiAgICAgIHRoaXMuX21pcExldmVscy5wdXNoKGkpXG4gICAgfVxuICB9XG59XG5cbnByb3RvLnNldFBpeGVscyA9IGZ1bmN0aW9uKGRhdGEsIHhfb2ZmLCB5X29mZiwgbWlwX2xldmVsKSB7XG4gIHZhciBnbCA9IHRoaXMuZ2xcbiAgdGhpcy5iaW5kKClcbiAgaWYoQXJyYXkuaXNBcnJheSh4X29mZikpIHtcbiAgICBtaXBfbGV2ZWwgPSB5X29mZlxuICAgIHlfb2ZmID0geF9vZmZbMV18MFxuICAgIHhfb2ZmID0geF9vZmZbMF18MFxuICB9IGVsc2Uge1xuICAgIHhfb2ZmID0geF9vZmYgfHwgMFxuICAgIHlfb2ZmID0geV9vZmYgfHwgMFxuICB9XG4gIG1pcF9sZXZlbCA9IG1pcF9sZXZlbCB8fCAwXG4gIGlmKGRhdGEgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCB8fFxuICAgICBkYXRhIGluc3RhbmNlb2YgSW1hZ2VEYXRhIHx8XG4gICAgIGRhdGEgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8XG4gICAgIGRhdGEgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgdmFyIG5lZWRzTWlwID0gdGhpcy5fbWlwTGV2ZWxzLmluZGV4T2YobWlwX2xldmVsKSA8IDBcbiAgICBpZihuZWVkc01pcCkge1xuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCB0aGlzLmZvcm1hdCwgdGhpcy5mb3JtYXQsIHRoaXMudHlwZSwgZGF0YSlcbiAgICAgIHRoaXMuX21pcExldmVscy5wdXNoKG1pcF9sZXZlbClcbiAgICB9IGVsc2Uge1xuICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIHhfb2ZmLCB5X29mZiwgdGhpcy5mb3JtYXQsIHRoaXMudHlwZSwgZGF0YSlcbiAgICB9XG4gIH0gZWxzZSBpZihkYXRhLnNoYXBlICYmIGRhdGEuc3RyaWRlICYmIGRhdGEuZGF0YSkge1xuICAgIGlmKGRhdGEuc2hhcGUubGVuZ3RoIDwgMiB8fFxuICAgICAgIHhfb2ZmICsgZGF0YS5zaGFwZVsxXSA+IHRoaXMuX3NoYXBlWzFdPj4+bWlwX2xldmVsIHx8XG4gICAgICAgeV9vZmYgKyBkYXRhLnNoYXBlWzBdID4gdGhpcy5fc2hhcGVbMF0+Pj5taXBfbGV2ZWwgfHxcbiAgICAgICB4X29mZiA8IDAgfHxcbiAgICAgICB5X29mZiA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBUZXh0dXJlIGRpbWVuc2lvbnMgYXJlIG91dCBvZiBib3VuZHMnKVxuICAgIH1cbiAgICB0ZXhTdWJJbWFnZUFycmF5KGdsLCB4X29mZiwgeV9vZmYsIG1pcF9sZXZlbCwgdGhpcy5mb3JtYXQsIHRoaXMudHlwZSwgdGhpcy5fbWlwTGV2ZWxzLCBkYXRhKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbnN1cHBvcnRlZCBkYXRhIHR5cGUnKVxuICB9XG59XG5cblxuZnVuY3Rpb24gaXNQYWNrZWQoc2hhcGUsIHN0cmlkZSkge1xuICBpZihzaGFwZS5sZW5ndGggPT09IDMpIHtcbiAgICByZXR1cm4gIChzdHJpZGVbMl0gPT09IDEpICYmIFxuICAgICAgICAgICAgKHN0cmlkZVsxXSA9PT0gc2hhcGVbMF0qc2hhcGVbMl0pICYmXG4gICAgICAgICAgICAoc3RyaWRlWzBdID09PSBzaGFwZVsyXSlcbiAgfVxuICByZXR1cm4gIChzdHJpZGVbMF0gPT09IDEpICYmIFxuICAgICAgICAgIChzdHJpZGVbMV0gPT09IHNoYXBlWzBdKVxufVxuXG5mdW5jdGlvbiB0ZXhTdWJJbWFnZUFycmF5KGdsLCB4X29mZiwgeV9vZmYsIG1pcF9sZXZlbCwgY2Zvcm1hdCwgY3R5cGUsIG1pcExldmVscywgYXJyYXkpIHtcbiAgdmFyIGR0eXBlID0gYXJyYXkuZHR5cGVcbiAgdmFyIHNoYXBlID0gYXJyYXkuc2hhcGUuc2xpY2UoKVxuICBpZihzaGFwZS5sZW5ndGggPCAyIHx8IHNoYXBlLmxlbmd0aCA+IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBuZGFycmF5LCBtdXN0IGJlIDJkIG9yIDNkJylcbiAgfVxuICB2YXIgdHlwZSA9IDAsIGZvcm1hdCA9IDBcbiAgdmFyIHBhY2tlZCA9IGlzUGFja2VkKHNoYXBlLCBhcnJheS5zdHJpZGUuc2xpY2UoKSlcbiAgaWYoZHR5cGUgPT09ICdmbG9hdDMyJykge1xuICAgIHR5cGUgPSBnbC5GTE9BVFxuICB9IGVsc2UgaWYoZHR5cGUgPT09ICdmbG9hdDY0Jykge1xuICAgIHR5cGUgPSBnbC5GTE9BVFxuICAgIHBhY2tlZCA9IGZhbHNlXG4gICAgZHR5cGUgPSAnZmxvYXQzMidcbiAgfSBlbHNlIGlmKGR0eXBlID09PSAndWludDgnKSB7XG4gICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEVcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICAgIHBhY2tlZCA9IGZhbHNlXG4gICAgZHR5cGUgPSAndWludDgnXG4gIH1cbiAgdmFyIGNoYW5uZWxzID0gMVxuICBpZihzaGFwZS5sZW5ndGggPT09IDIpIHtcbiAgICBmb3JtYXQgPSBnbC5MVU1JTkFOQ0VcbiAgICBzaGFwZSA9IFtzaGFwZVswXSwgc2hhcGVbMV0sIDFdXG4gICAgYXJyYXkgPSBuZGFycmF5KGFycmF5LmRhdGEsIHNoYXBlLCBbYXJyYXkuc3RyaWRlWzBdLCBhcnJheS5zdHJpZGVbMV0sIDFdLCBhcnJheS5vZmZzZXQpXG4gIH0gZWxzZSBpZihzaGFwZS5sZW5ndGggPT09IDMpIHtcbiAgICBpZihzaGFwZVsyXSA9PT0gMSkge1xuICAgICAgZm9ybWF0ID0gZ2wuQUxQSEFcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDIpIHtcbiAgICAgIGZvcm1hdCA9IGdsLkxVTUlOQU5DRV9BTFBIQVxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gMykge1xuICAgICAgZm9ybWF0ID0gZ2wuUkdCXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSA0KSB7XG4gICAgICBmb3JtYXQgPSBnbC5SR0JBXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHNoYXBlIGZvciBwaXhlbCBjb29yZHMnKVxuICAgIH1cbiAgICBjaGFubmVscyA9IHNoYXBlWzJdXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgc2hhcGUgZm9yIHRleHR1cmUnKVxuICB9XG4gIC8vRm9yIDEtY2hhbm5lbCB0ZXh0dXJlcyBhbGxvdyBjb252ZXJzaW9uIGJldHdlZW4gZm9ybWF0c1xuICBpZigoZm9ybWF0ICA9PT0gZ2wuTFVNSU5BTkNFIHx8IGZvcm1hdCAgPT09IGdsLkFMUEhBKSAmJlxuICAgICAoY2Zvcm1hdCA9PT0gZ2wuTFVNSU5BTkNFIHx8IGNmb3JtYXQgPT09IGdsLkFMUEhBKSkge1xuICAgIGZvcm1hdCA9IGNmb3JtYXRcbiAgfVxuICBpZihmb3JtYXQgIT09IGNmb3JtYXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW5jb21wYXRpYmxlIHRleHR1cmUgZm9ybWF0IGZvciBzZXRQaXhlbHMnKVxuICB9XG4gIHZhciBzaXplID0gYXJyYXkuc2l6ZVxuICB2YXIgbmVlZHNNaXAgPSBtaXBMZXZlbHMuaW5kZXhPZihtaXBfbGV2ZWwpIDwgMFxuICBpZihuZWVkc01pcCkge1xuICAgIG1pcExldmVscy5wdXNoKG1pcF9sZXZlbClcbiAgfVxuICBpZih0eXBlID09PSBjdHlwZSAmJiBwYWNrZWQpIHtcbiAgICAvL0FycmF5IGRhdGEgdHlwZXMgYXJlIGNvbXBhdGlibGUsIGNhbiBkaXJlY3RseSBjb3B5IGludG8gdGV4dHVyZVxuICAgIGlmKGFycmF5Lm9mZnNldCA9PT0gMCAmJiBhcnJheS5kYXRhLmxlbmd0aCA9PT0gc2l6ZSkge1xuICAgICAgaWYobmVlZHNNaXApIHtcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIGNmb3JtYXQsIHNoYXBlWzBdLCBzaGFwZVsxXSwgMCwgY2Zvcm1hdCwgY3R5cGUsIGFycmF5LmRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbC50ZXhTdWJJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgeF9vZmYsIHlfb2ZmLCBzaGFwZVswXSwgc2hhcGVbMV0sIGNmb3JtYXQsIGN0eXBlLCBhcnJheS5kYXRhKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihuZWVkc01pcCkge1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgY2Zvcm1hdCwgc2hhcGVbMF0sIHNoYXBlWzFdLCAwLCBjZm9ybWF0LCBjdHlwZSwgYXJyYXkuZGF0YS5zdWJhcnJheShhcnJheS5vZmZzZXQsIGFycmF5Lm9mZnNldCtzaXplKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCB4X29mZiwgeV9vZmYsIHNoYXBlWzBdLCBzaGFwZVsxXSwgY2Zvcm1hdCwgY3R5cGUsIGFycmF5LmRhdGEuc3ViYXJyYXkoYXJyYXkub2Zmc2V0LCBhcnJheS5vZmZzZXQrc2l6ZSkpXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vTmVlZCB0byBkbyB0eXBlIGNvbnZlcnNpb24gdG8gcGFjayBkYXRhIGludG8gYnVmZmVyXG4gICAgdmFyIHBhY2tfYnVmZmVyXG4gICAgaWYoY3R5cGUgPT09IGdsLkZMT0FUKSB7XG4gICAgICBwYWNrX2J1ZmZlciA9IHBvb2wubWFsbG9jRmxvYXQzMihzaXplKVxuICAgIH0gZWxzZSB7XG4gICAgICBwYWNrX2J1ZmZlciA9IHBvb2wubWFsbG9jVWludDgoc2l6ZSlcbiAgICB9XG4gICAgdmFyIHBhY2tfdmlldyA9IG5kYXJyYXkocGFja19idWZmZXIsIHNoYXBlLCBbc2hhcGVbMl0sIHNoYXBlWzJdKnNoYXBlWzBdLCAxXSlcbiAgICBpZih0eXBlID09PSBnbC5GTE9BVCAmJiBjdHlwZSA9PT0gZ2wuVU5TSUdORURfQllURSkge1xuICAgICAgY29udmVydEZsb2F0VG9VaW50OChwYWNrX3ZpZXcsIGFycmF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHMuYXNzaWduKHBhY2tfdmlldywgYXJyYXkpXG4gICAgfVxuICAgIGlmKG5lZWRzTWlwKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgY2Zvcm1hdCwgc2hhcGVbMF0sIHNoYXBlWzFdLCAwLCBjZm9ybWF0LCBjdHlwZSwgcGFja19idWZmZXIuc3ViYXJyYXkoMCwgc2l6ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCB4X29mZiwgeV9vZmYsIHNoYXBlWzBdLCBzaGFwZVsxXSwgY2Zvcm1hdCwgY3R5cGUsIHBhY2tfYnVmZmVyLnN1YmFycmF5KDAsIHNpemUpKVxuICAgIH1cbiAgICBpZihjdHlwZSA9PT0gZ2wuRkxPQVQpIHtcbiAgICAgIHBvb2wuZnJlZUZsb2F0MzIocGFja19idWZmZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBvb2wuZnJlZVVpbnQ4KHBhY2tfYnVmZmVyKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0VGV4dHVyZShnbCkge1xuICB2YXIgdGV4ID0gZ2wuY3JlYXRlVGV4dHVyZSgpXG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleClcbiAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpXG4gIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKVxuICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKVxuICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKVxuICByZXR1cm4gdGV4XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmVTaGFwZShnbCwgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCB0eXBlKSB7XG4gIHZhciBtYXhUZXh0dXJlU2l6ZSA9IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKVxuICBpZih3aWR0aCA8IDAgfHwgd2lkdGggPiBtYXhUZXh0dXJlU2l6ZSB8fCBoZWlnaHQgPCAwIHx8IGhlaWdodCAgPiBtYXhUZXh0dXJlU2l6ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHRleHR1cmUgc2hhcGUnKVxuICB9XG4gIGlmKHR5cGUgPT09IGdsLkZMT0FUICYmICF3ZWJnbGV3KGdsKS50ZXh0dXJlX2Zsb2F0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEZsb2F0aW5nIHBvaW50IHRleHR1cmVzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBwbGF0Zm9ybScpXG4gIH1cbiAgdmFyIHRleCA9IGluaXRUZXh0dXJlKGdsKVxuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGZvcm1hdCwgd2lkdGgsIGhlaWdodCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKVxuICByZXR1cm4gbmV3IFRleHR1cmUyRChnbCwgdGV4LCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmVET00oZ2wsIGVsZW1lbnQsIGZvcm1hdCwgdHlwZSkge1xuICB2YXIgdGV4ID0gaW5pdFRleHR1cmUoZ2wpXG4gIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZm9ybWF0LCBmb3JtYXQsIHR5cGUsIGVsZW1lbnQpXG4gIHJldHVybiBuZXcgVGV4dHVyZTJEKGdsLCB0ZXgsIGVsZW1lbnQud2lkdGh8MCwgZWxlbWVudC5oZWlnaHR8MCwgZm9ybWF0LCB0eXBlKVxufVxuXG4vL0NyZWF0ZXMgYSB0ZXh0dXJlIGZyb20gYW4gbmRhcnJheVxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZUFycmF5KGdsLCBhcnJheSkge1xuICB2YXIgZHR5cGUgPSBhcnJheS5kdHlwZVxuICB2YXIgc2hhcGUgPSBhcnJheS5zaGFwZS5zbGljZSgpXG4gIHZhciBtYXhTaXplID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpXG4gIGlmKHNoYXBlWzBdIDwgMCB8fCBzaGFwZVswXSA+IG1heFNpemUgfHwgc2hhcGVbMV0gPCAwIHx8IHNoYXBlWzFdID4gbWF4U2l6ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHRleHR1cmUgc2l6ZScpXG4gIH1cbiAgdmFyIHBhY2tlZCA9IGlzUGFja2VkKHNoYXBlLCBhcnJheS5zdHJpZGUuc2xpY2UoKSlcbiAgdmFyIHR5cGUgPSAwXG4gIGlmKGR0eXBlID09PSAnZmxvYXQzMicpIHtcbiAgICB0eXBlID0gZ2wuRkxPQVRcbiAgfSBlbHNlIGlmKGR0eXBlID09PSAnZmxvYXQ2NCcpIHtcbiAgICB0eXBlID0gZ2wuRkxPQVRcbiAgICBwYWNrZWQgPSBmYWxzZVxuICAgIGR0eXBlID0gJ2Zsb2F0MzInXG4gIH0gZWxzZSBpZihkdHlwZSA9PT0gJ3VpbnQ4Jykge1xuICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG4gIH0gZWxzZSB7XG4gICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEVcbiAgICBwYWNrZWQgPSBmYWxzZVxuICAgIGR0eXBlID0gJ3VpbnQ4J1xuICB9XG4gIHZhciBmb3JtYXQgPSAwXG4gIGlmKHNoYXBlLmxlbmd0aCA9PT0gMikge1xuICAgIGZvcm1hdCA9IGdsLkxVTUlOQU5DRVxuICAgIHNoYXBlID0gW3NoYXBlWzBdLCBzaGFwZVsxXSwgMV1cbiAgICBhcnJheSA9IG5kYXJyYXkoYXJyYXkuZGF0YSwgc2hhcGUsIFthcnJheS5zdHJpZGVbMF0sIGFycmF5LnN0cmlkZVsxXSwgMV0sIGFycmF5Lm9mZnNldClcbiAgfSBlbHNlIGlmKHNoYXBlLmxlbmd0aCA9PT0gMykge1xuICAgIGlmKHNoYXBlWzJdID09PSAxKSB7XG4gICAgICBmb3JtYXQgPSBnbC5BTFBIQVxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gMikge1xuICAgICAgZm9ybWF0ID0gZ2wuTFVNSU5BTkNFX0FMUEhBXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSAzKSB7XG4gICAgICBmb3JtYXQgPSBnbC5SR0JcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDQpIHtcbiAgICAgIGZvcm1hdCA9IGdsLlJHQkFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgc2hhcGUgZm9yIHBpeGVsIGNvb3JkcycpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHNoYXBlIGZvciB0ZXh0dXJlJylcbiAgfVxuICBpZih0eXBlID09PSBnbC5GTE9BVCAmJiAhd2ViZ2xldyhnbCkudGV4dHVyZV9mbG9hdCkge1xuICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG4gICAgcGFja2VkID0gZmFsc2VcbiAgfVxuICB2YXIgYnVmZmVyLCBidWZfc3RvcmVcbiAgdmFyIHNpemUgPSBhcnJheS5zaXplXG4gIGlmKCFwYWNrZWQpIHtcbiAgICB2YXIgc3RyaWRlID0gW3NoYXBlWzJdLCBzaGFwZVsyXSpzaGFwZVswXSwgMV1cbiAgICBidWZfc3RvcmUgPSBwb29sLm1hbGxvYyhzaXplLCBkdHlwZSlcbiAgICB2YXIgYnVmX2FycmF5ID0gbmRhcnJheShidWZfc3RvcmUsIHNoYXBlLCBzdHJpZGUsIDApXG4gICAgaWYoKGR0eXBlID09PSAnZmxvYXQzMicgfHwgZHR5cGUgPT09ICdmbG9hdDY0JykgJiYgdHlwZSA9PT0gZ2wuVU5TSUdORURfQllURSkge1xuICAgICAgY29udmVydEZsb2F0VG9VaW50OChidWZfYXJyYXksIGFycmF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHMuYXNzaWduKGJ1Zl9hcnJheSwgYXJyYXkpXG4gICAgfVxuICAgIGJ1ZmZlciA9IGJ1Zl9zdG9yZS5zdWJhcnJheSgwLCBzaXplKVxuICB9IGVsc2UgaWYgKGFycmF5Lm9mZnNldCA9PT0gMCAmJiBhcnJheS5kYXRhLmxlbmd0aCA9PT0gc2l6ZSkge1xuICAgIGJ1ZmZlciA9IGFycmF5LmRhdGFcbiAgfSBlbHNlIHtcbiAgICBidWZmZXIgPSBhcnJheS5kYXRhLnN1YmFycmF5KGFycmF5Lm9mZnNldCwgYXJyYXkub2Zmc2V0ICsgc2l6ZSlcbiAgfVxuICB2YXIgdGV4ID0gaW5pdFRleHR1cmUoZ2wpXG4gIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZm9ybWF0LCBzaGFwZVswXSwgc2hhcGVbMV0sIDAsIGZvcm1hdCwgdHlwZSwgYnVmZmVyKVxuICBpZighcGFja2VkKSB7XG4gICAgcG9vbC5mcmVlKGJ1Zl9zdG9yZSlcbiAgfVxuICByZXR1cm4gbmV3IFRleHR1cmUyRChnbCwgdGV4LCBzaGFwZVswXSwgc2hhcGVbMV0sIGZvcm1hdCwgdHlwZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZTJEKGdsKSB7XG4gIGlmKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBNaXNzaW5nIGFyZ3VtZW50cyBmb3IgdGV4dHVyZTJkIGNvbnN0cnVjdG9yJylcbiAgfVxuICBpZighbGluZWFyVHlwZXMpIHtcbiAgICBsYXp5SW5pdExpbmVhclR5cGVzKGdsKVxuICB9XG4gIGlmKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVRleHR1cmVTaGFwZShnbCwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXXx8Z2wuUkdCQSwgYXJndW1lbnRzWzRdfHxnbC5VTlNJR05FRF9CWVRFKVxuICB9XG4gIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzFdKSkge1xuICAgIHJldHVybiBjcmVhdGVUZXh0dXJlU2hhcGUoZ2wsIGFyZ3VtZW50c1sxXVswXXwwLCBhcmd1bWVudHNbMV1bMV18MCwgYXJndW1lbnRzWzJdfHxnbC5SR0JBLCBhcmd1bWVudHNbM118fGdsLlVOU0lHTkVEX0JZVEUpXG4gIH1cbiAgaWYodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb2JqID0gYXJndW1lbnRzWzFdXG4gICAgaWYob2JqIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQgfHxcbiAgICAgICBvYmogaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8XG4gICAgICAgb2JqIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCB8fFxuICAgICAgIG9iaiBpbnN0YW5jZW9mIEltYWdlRGF0YSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVRleHR1cmVET00oZ2wsIG9iaiwgYXJndW1lbnRzWzJdfHxnbC5SR0JBLCBhcmd1bWVudHNbM118fGdsLlVOU0lHTkVEX0JZVEUpXG4gICAgfSBlbHNlIGlmKG9iai5zaGFwZSAmJiBvYmouZGF0YSAmJiBvYmouc3RyaWRlKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVGV4dHVyZUFycmF5KGdsLCBvYmopXG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIGFyZ3VtZW50cyBmb3IgdGV4dHVyZTJkIGNvbnN0cnVjdG9yJylcbn1cbiIsIihmdW5jdGlvbiAoQnVmZmVyKXtcbnZhciBpb3RhID0gcmVxdWlyZShcImlvdGEtYXJyYXlcIilcblxudmFyIGFycmF5TWV0aG9kcyA9IFtcbiAgXCJjb25jYXRcIixcbiAgXCJqb2luXCIsXG4gIFwic2xpY2VcIixcbiAgXCJ0b1N0cmluZ1wiLFxuICBcImluZGV4T2ZcIixcbiAgXCJsYXN0SW5kZXhPZlwiLFxuICBcImZvckVhY2hcIixcbiAgXCJldmVyeVwiLFxuICBcInNvbWVcIixcbiAgXCJmaWx0ZXJcIixcbiAgXCJtYXBcIixcbiAgXCJyZWR1Y2VcIixcbiAgXCJyZWR1Y2VSaWdodFwiXG5dXG5cbnZhciBoYXNUeXBlZEFycmF5cyAgPSAoKHR5cGVvZiBGbG9hdDY0QXJyYXkpICE9PSBcInVuZGVmaW5lZFwiKVxudmFyIGhhc0J1ZmZlciAgICAgICA9ICgodHlwZW9mIEJ1ZmZlcikgIT09IFwidW5kZWZpbmVkXCIpXG5cbmZ1bmN0aW9uIGNvbXBhcmUxc3QoYSwgYikge1xuICByZXR1cm4gYVswXSAtIGJbMF1cbn1cblxuZnVuY3Rpb24gb3JkZXIoKSB7XG4gIHZhciBzdHJpZGUgPSB0aGlzLnN0cmlkZVxuICB2YXIgdGVybXMgPSBuZXcgQXJyYXkoc3RyaWRlLmxlbmd0aClcbiAgdmFyIGlcbiAgZm9yKGk9MDsgaTx0ZXJtcy5sZW5ndGg7ICsraSkge1xuICAgIHRlcm1zW2ldID0gW01hdGguYWJzKHN0cmlkZVtpXSksIGldXG4gIH1cbiAgdGVybXMuc29ydChjb21wYXJlMXN0KVxuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHRlcm1zLmxlbmd0aClcbiAgZm9yKGk9MDsgaTxyZXN1bHQubGVuZ3RoOyArK2kpIHtcbiAgICByZXN1bHRbaV0gPSB0ZXJtc1tpXVsxXVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gY29tcGlsZUNvbnN0cnVjdG9yKGR0eXBlLCBkaW1lbnNpb24pIHtcbiAgdmFyIGNsYXNzTmFtZSA9IFtcIlZpZXdcIiwgZGltZW5zaW9uLCBcImRcIiwgZHR5cGVdLmpvaW4oXCJcIilcbiAgaWYoZGltZW5zaW9uIDwgMCkge1xuICAgIGNsYXNzTmFtZSA9IFwiVmlld19OaWxcIiArIGR0eXBlXG4gIH1cbiAgdmFyIHVzZUdldHRlcnMgPSAoZHR5cGUgPT09IFwiZ2VuZXJpY1wiKVxuICBcbiAgaWYoZGltZW5zaW9uID09PSAtMSkge1xuICAgIC8vU3BlY2lhbCBjYXNlIGZvciB0cml2aWFsIGFycmF5c1xuICAgIHZhciBjb2RlID0gXG4gICAgICBcImZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIihhKXt0aGlzLmRhdGE9YTt9O1xcXG52YXIgcHJvdG89XCIrY2xhc3NOYW1lK1wiLnByb3RvdHlwZTtcXFxucHJvdG8uZHR5cGU9J1wiK2R0eXBlK1wiJztcXFxucHJvdG8uaW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gLTF9O1xcXG5wcm90by5zaXplPTA7XFxcbnByb3RvLmRpbWVuc2lvbj0tMTtcXFxucHJvdG8uc2hhcGU9cHJvdG8uc3RyaWRlPXByb3RvLm9yZGVyPVtdO1xcXG5wcm90by5sbz1wcm90by5oaT1wcm90by50cmFuc3Bvc2U9cHJvdG8uc3RlcD1cXFxuZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEpO307XFxcbnByb3RvLmdldD1wcm90by5zZXQ9ZnVuY3Rpb24oKXt9O1xcXG5wcm90by5waWNrPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9O1xcXG5yZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0X1wiK2NsYXNzTmFtZStcIihhKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIihhKTt9XCJcbiAgICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKGNvZGUpXG4gICAgcmV0dXJuIHByb2NlZHVyZSgpXG4gIH0gZWxzZSBpZihkaW1lbnNpb24gPT09IDApIHtcbiAgICAvL1NwZWNpYWwgY2FzZSBmb3IgMGQgYXJyYXlzXG4gICAgdmFyIGNvZGUgPVxuICAgICAgXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCIoYSxkKSB7XFxcbnRoaXMuZGF0YSA9IGE7XFxcbnRoaXMub2Zmc2V0ID0gZFxcXG59O1xcXG52YXIgcHJvdG89XCIrY2xhc3NOYW1lK1wiLnByb3RvdHlwZTtcXFxucHJvdG8uZHR5cGU9J1wiK2R0eXBlK1wiJztcXFxucHJvdG8uaW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vZmZzZXR9O1xcXG5wcm90by5kaW1lbnNpb249MDtcXFxucHJvdG8uc2l6ZT0xO1xcXG5wcm90by5zaGFwZT1cXFxucHJvdG8uc3RyaWRlPVxcXG5wcm90by5vcmRlcj1bXTtcXFxucHJvdG8ubG89XFxcbnByb3RvLmhpPVxcXG5wcm90by50cmFuc3Bvc2U9XFxcbnByb3RvLnN0ZXA9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2NvcHkoKSB7XFxcbnJldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSx0aGlzLm9mZnNldClcXFxufTtcXFxucHJvdG8ucGljaz1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfcGljaygpe1xcXG5yZXR1cm4gVHJpdmlhbEFycmF5KHRoaXMuZGF0YSk7XFxcbn07XFxcbnByb3RvLnZhbHVlT2Y9cHJvdG8uZ2V0PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9nZXQoKXtcXFxucmV0dXJuIFwiKyh1c2VHZXR0ZXJzID8gXCJ0aGlzLmRhdGEuZ2V0KHRoaXMub2Zmc2V0KVwiIDogXCJ0aGlzLmRhdGFbdGhpcy5vZmZzZXRdXCIpK1xuXCJ9O1xcXG5wcm90by5zZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3NldCh2KXtcXFxucmV0dXJuIFwiKyh1c2VHZXR0ZXJzID8gXCJ0aGlzLmRhdGEuc2V0KHRoaXMub2Zmc2V0LHYpXCIgOiBcInRoaXMuZGF0YVt0aGlzLm9mZnNldF09dlwiKStcIlxcXG59O1xcXG5yZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0X1wiK2NsYXNzTmFtZStcIihhLGIsYyxkKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIihhLGQpfVwiXG4gICAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbihcIlRyaXZpYWxBcnJheVwiLCBjb2RlKVxuICAgIHJldHVybiBwcm9jZWR1cmUoQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV1bMF0pXG4gIH1cblxuICB2YXIgY29kZSA9IFtcIid1c2Ugc3RyaWN0J1wiXVxuICAgIFxuICAvL0NyZWF0ZSBjb25zdHJ1Y3RvciBmb3Igdmlld1xuICB2YXIgaW5kaWNlcyA9IGlvdGEoZGltZW5zaW9uKVxuICB2YXIgYXJncyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuIFwiaVwiK2kgfSlcbiAgdmFyIGluZGV4X3N0ciA9IFwidGhpcy5vZmZzZXQrXCIgKyBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBcInRoaXMuX3N0cmlkZVwiICsgaSArIFwiKmlcIiArIGlcbiAgICAgIH0pLmpvaW4oXCIrXCIpXG4gIGNvZGUucHVzaChcImZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIihhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImJcIitpXG4gICAgfSkuam9pbihcIixcIikgKyBcIixcIiArXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiY1wiK2lcbiAgICB9KS5qb2luKFwiLFwiKSArIFwiLGQpe3RoaXMuZGF0YT1hXCIpXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFwidGhpcy5fc2hhcGVcIitpK1wiPWJcIitpK1wifDBcIilcbiAgfVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcInRoaXMuX3N0cmlkZVwiK2krXCI9Y1wiK2krXCJ8MFwiKVxuICB9XG4gIGNvZGUucHVzaChcInRoaXMub2Zmc2V0PWR8MH1cIixcbiAgICBcInZhciBwcm90bz1cIitjbGFzc05hbWUrXCIucHJvdG90eXBlXCIsXG4gICAgXCJwcm90by5kdHlwZT0nXCIrZHR5cGUrXCInXCIsXG4gICAgXCJwcm90by5kaW1lbnNpb249XCIrZGltZW5zaW9uKVxuICBcbiAgLy92aWV3LnN0cmlkZSBhbmQgdmlldy5zaGFwZVxuICB2YXIgc3RyaWRlQ2xhc3NOYW1lID0gXCJWU3RyaWRlXCIgKyBkaW1lbnNpb24gKyBcImRcIiArIGR0eXBlXG4gIHZhciBzaGFwZUNsYXNzTmFtZSA9IFwiVlNoYXBlXCIgKyBkaW1lbnNpb24gKyBcImRcIiArIGR0eXBlXG4gIHZhciBwcm9wcyA9IHtcInN0cmlkZVwiOnN0cmlkZUNsYXNzTmFtZSwgXCJzaGFwZVwiOnNoYXBlQ2xhc3NOYW1lfVxuICBmb3IodmFyIHByb3AgaW4gcHJvcHMpIHtcbiAgICB2YXIgYXJyYXlOYW1lID0gcHJvcHNbcHJvcF1cbiAgICBjb2RlLnB1c2goXG4gICAgICBcImZ1bmN0aW9uIFwiICsgYXJyYXlOYW1lICsgXCIodikge3RoaXMuX3Y9dn0gdmFyIGFwcm90bz1cIiArIGFycmF5TmFtZSArIFwiLnByb3RvdHlwZVwiLFxuICAgICAgXCJhcHJvdG8ubGVuZ3RoPVwiK2RpbWVuc2lvbilcbiAgICBcbiAgICB2YXIgYXJyYXlfZWxlbWVudHMgPSBbXVxuICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICBhcnJheV9lbGVtZW50cy5wdXNoKFtcInRoaXMuX3YuX1wiLCBwcm9wLCBpXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgICBjb2RlLnB1c2goXG4gICAgICBcImFwcm90by50b0pTT049ZnVuY3Rpb24gXCIgKyBhcnJheU5hbWUgKyBcIl90b0pTT04oKXtyZXR1cm4gW1wiICsgYXJyYXlfZWxlbWVudHMuam9pbihcIixcIikgKyBcIl19XCIsXG4gICAgICBcImFwcm90by52YWx1ZU9mPWFwcm90by50b1N0cmluZz1mdW5jdGlvbiBcIiArIGFycmF5TmFtZSArIFwiX3RvU3RyaW5nKCl7cmV0dXJuIFtcIiArIGFycmF5X2VsZW1lbnRzLmpvaW4oXCIsXCIpICsgXCJdLmpvaW4oKX1cIilcbiAgICBcbiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgY29kZS5wdXNoKFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGFwcm90byxcIitpK1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdi5fXCIrcHJvcCtpK1wifSxzZXQ6ZnVuY3Rpb24odil7cmV0dXJuIHRoaXMuX3YuX1wiK3Byb3AraStcIj12fDB9LGVudW1lcmFibGU6dHJ1ZX0pXCIpXG4gICAgfVxuICAgIGZvcih2YXIgaT0wOyBpPGFycmF5TWV0aG9kcy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYoYXJyYXlNZXRob2RzW2ldIGluIEFycmF5LnByb3RvdHlwZSkge1xuICAgICAgICBjb2RlLnB1c2goXCJhcHJvdG8uXCIrYXJyYXlNZXRob2RzW2ldK1wiPUFycmF5LnByb3RvdHlwZS5cIithcnJheU1ldGhvZHNbaV0pXG4gICAgICB9XG4gICAgfVxuICAgIGNvZGUucHVzaChbXCJPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sJ1wiLHByb3AsXCInLHtnZXQ6ZnVuY3Rpb24gXCIsIGFycmF5TmFtZSwgXCJfZ2V0KCl7cmV0dXJuIG5ldyBcIiwgYXJyYXlOYW1lLCBcIih0aGlzKX0sc2V0OiBmdW5jdGlvbiBcIiwgYXJyYXlOYW1lLCBcIl9zZXQodil7XCJdLmpvaW4oXCJcIikpXG4gICAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICAgIGNvZGUucHVzaChcInRoaXMuX1wiK3Byb3AraStcIj12W1wiK2krXCJdfDBcIilcbiAgICB9XG4gICAgY29kZS5wdXNoKFwicmV0dXJuIHZ9fSlcIilcbiAgfVxuICBcbiAgLy92aWV3LnNpemU6XG4gIGNvZGUucHVzaChcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywnc2l6ZScse2dldDpmdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfc2l6ZSgpe1xcXG5yZXR1cm4gXCIraW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gXCJ0aGlzLl9zaGFwZVwiK2kgfSkuam9pbihcIipcIiksXG5cIn19KVwiKVxuXG4gIC8vdmlldy5vcmRlcjpcbiAgaWYoZGltZW5zaW9uID09PSAxKSB7XG4gICAgY29kZS5wdXNoKFwicHJvdG8ub3JkZXI9WzBdXCIpXG4gIH0gZWxzZSB7XG4gICAgY29kZS5wdXNoKFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCdvcmRlcicse2dldDpcIilcbiAgICBpZihkaW1lbnNpb24gPCA0KSB7XG4gICAgICBjb2RlLnB1c2goXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfb3JkZXIoKXtcIilcbiAgICAgIGlmKGRpbWVuc2lvbiA9PT0gMikge1xuICAgICAgICBjb2RlLnB1c2goXCJyZXR1cm4gKE1hdGguYWJzKHRoaXMuX3N0cmlkZTApPk1hdGguYWJzKHRoaXMuX3N0cmlkZTEpKT9bMSwwXTpbMCwxXX19KVwiKVxuICAgICAgfSBlbHNlIGlmKGRpbWVuc2lvbiA9PT0gMykge1xuICAgICAgICBjb2RlLnB1c2goXG5cInZhciBzMD1NYXRoLmFicyh0aGlzLl9zdHJpZGUwKSxzMT1NYXRoLmFicyh0aGlzLl9zdHJpZGUxKSxzMj1NYXRoLmFicyh0aGlzLl9zdHJpZGUyKTtcXFxuaWYoczA+czEpe1xcXG5pZihzMT5zMil7XFxcbnJldHVybiBbMiwxLDBdO1xcXG59ZWxzZSBpZihzMD5zMil7XFxcbnJldHVybiBbMSwyLDBdO1xcXG59ZWxzZXtcXFxucmV0dXJuIFsxLDAsMl07XFxcbn1cXFxufWVsc2UgaWYoczA+czIpe1xcXG5yZXR1cm4gWzIsMCwxXTtcXFxufWVsc2UgaWYoczI+czEpe1xcXG5yZXR1cm4gWzAsMSwyXTtcXFxufWVsc2V7XFxcbnJldHVybiBbMCwyLDFdO1xcXG59fX0pXCIpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvZGUucHVzaChcIk9SREVSfSlcIilcbiAgICB9XG4gIH1cbiAgXG4gIC8vdmlldy5zZXQoaTAsIC4uLiwgdik6XG4gIGNvZGUucHVzaChcblwicHJvdG8uc2V0PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9zZXQoXCIrYXJncy5qb2luKFwiLFwiKStcIix2KXtcIilcbiAgaWYodXNlR2V0dGVycykge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGEuc2V0KFwiK2luZGV4X3N0citcIix2KX1cIilcbiAgfSBlbHNlIHtcbiAgICBjb2RlLnB1c2goXCJyZXR1cm4gdGhpcy5kYXRhW1wiK2luZGV4X3N0citcIl09dn1cIilcbiAgfVxuICBcbiAgLy92aWV3LmdldChpMCwgLi4uKTpcbiAgY29kZS5wdXNoKFwicHJvdG8uZ2V0PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9nZXQoXCIrYXJncy5qb2luKFwiLFwiKStcIil7XCIpXG4gIGlmKHVzZUdldHRlcnMpIHtcbiAgICBjb2RlLnB1c2goXCJyZXR1cm4gdGhpcy5kYXRhLmdldChcIitpbmRleF9zdHIrXCIpfVwiKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGFbXCIraW5kZXhfc3RyK1wiXX1cIilcbiAgfVxuICBcbiAgLy92aWV3LmluZGV4OlxuICBjb2RlLnB1c2goXG4gICAgXCJwcm90by5pbmRleD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfaW5kZXgoXCIsIGFyZ3Muam9pbigpLCBcIil7cmV0dXJuIFwiK2luZGV4X3N0citcIn1cIilcblxuICAvL3ZpZXcuaGkoKTpcbiAgY29kZS5wdXNoKFwicHJvdG8uaGk9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2hpKFwiK2FyZ3Muam9pbihcIixcIikrXCIpe3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gW1wiKHR5cGVvZiBpXCIsaSxcIiE9PSdudW1iZXInfHxpXCIsaSxcIjwwKT90aGlzLl9zaGFwZVwiLCBpLCBcIjppXCIsIGksXCJ8MFwiXS5qb2luKFwiXCIpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwidGhpcy5fc3RyaWRlXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLHRoaXMub2Zmc2V0KX1cIilcbiAgXG4gIC8vdmlldy5sbygpOlxuICB2YXIgYV92YXJzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gXCJhXCIraStcIj10aGlzLl9zaGFwZVwiK2kgfSlcbiAgdmFyIGNfdmFycyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuIFwiY1wiK2krXCI9dGhpcy5fc3RyaWRlXCIraSB9KVxuICBjb2RlLnB1c2goXCJwcm90by5sbz1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfbG8oXCIrYXJncy5qb2luKFwiLFwiKStcIil7dmFyIGI9dGhpcy5vZmZzZXQsZD0wLFwiK2FfdmFycy5qb2luKFwiLFwiKStcIixcIitjX3ZhcnMuam9pbihcIixcIikpXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFxuXCJpZih0eXBlb2YgaVwiK2krXCI9PT0nbnVtYmVyJyYmaVwiK2krXCI+PTApe1xcXG5kPWlcIitpK1wifDA7XFxcbmIrPWNcIitpK1wiKmQ7XFxcbmFcIitpK1wiLT1kfVwiKVxuICB9XG4gIGNvZGUucHVzaChcInJldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJhXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImNcIitpXG4gICAgfSkuam9pbihcIixcIikrXCIsYil9XCIpXG4gIFxuICAvL3ZpZXcuc3RlcCgpOlxuICBjb2RlLnB1c2goXCJwcm90by5zdGVwPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9zdGVwKFwiK2FyZ3Muam9pbihcIixcIikrXCIpe3ZhciBcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJhXCIraStcIj10aGlzLl9zaGFwZVwiK2lcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJiXCIraStcIj10aGlzLl9zdHJpZGVcIitpXG4gICAgfSkuam9pbihcIixcIikrXCIsYz10aGlzLm9mZnNldCxkPTAsY2VpbD1NYXRoLmNlaWxcIilcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXG5cImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInKXtcXFxuZD1pXCIraStcInwwO1xcXG5pZihkPDApe1xcXG5jKz1iXCIraStcIiooYVwiK2krXCItMSk7XFxcbmFcIitpK1wiPWNlaWwoLWFcIitpK1wiL2QpXFxcbn1lbHNle1xcXG5hXCIraStcIj1jZWlsKGFcIitpK1wiL2QpXFxcbn1cXFxuYlwiK2krXCIqPWRcXFxufVwiKVxuICB9XG4gIGNvZGUucHVzaChcInJldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJhXCIgKyBpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiYlwiICsgaVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLGMpfVwiKVxuICBcbiAgLy92aWV3LnRyYW5zcG9zZSgpOlxuICB2YXIgdFNoYXBlID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgdmFyIHRTdHJpZGUgPSBuZXcgQXJyYXkoZGltZW5zaW9uKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIHRTaGFwZVtpXSA9IFwiYVtpXCIraStcIl1cIlxuICAgIHRTdHJpZGVbaV0gPSBcImJbaVwiK2krXCJdXCJcbiAgfVxuICBjb2RlLnB1c2goXCJwcm90by50cmFuc3Bvc2U9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3RyYW5zcG9zZShcIithcmdzK1wiKXtcIitcbiAgICBhcmdzLm1hcChmdW5jdGlvbihuLGlkeCkgeyByZXR1cm4gbiArIFwiPShcIiArIG4gKyBcIj09PXVuZGVmaW5lZD9cIiArIGlkeCArIFwiOlwiICsgbiArIFwifDApXCJ9KS5qb2luKFwiO1wiKSxcbiAgICBcInZhciBhPXRoaXMuc2hhcGUsYj10aGlzLnN0cmlkZTtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEsXCIrdFNoYXBlLmpvaW4oXCIsXCIpK1wiLFwiK3RTdHJpZGUuam9pbihcIixcIikrXCIsdGhpcy5vZmZzZXQpfVwiKVxuICBcbiAgLy92aWV3LnBpY2soKTpcbiAgY29kZS5wdXNoKFwicHJvdG8ucGljaz1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfcGljayhcIithcmdzK1wiKXt2YXIgYT1bXSxiPVtdLGM9dGhpcy5vZmZzZXRcIilcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXCJpZih0eXBlb2YgaVwiK2krXCI9PT0nbnVtYmVyJyYmaVwiK2krXCI+PTApe2M9KGMrdGhpcy5fc3RyaWRlXCIraStcIippXCIraStcIil8MH1lbHNle2EucHVzaCh0aGlzLl9zaGFwZVwiK2krXCIpO2IucHVzaCh0aGlzLl9zdHJpZGVcIitpK1wiKX1cIilcbiAgfVxuICBjb2RlLnB1c2goXCJ2YXIgY3Rvcj1DVE9SX0xJU1RbYS5sZW5ndGgrMV07cmV0dXJuIGN0b3IodGhpcy5kYXRhLGEsYixjKX1cIilcbiAgICBcbiAgLy9BZGQgcmV0dXJuIHN0YXRlbWVudFxuICBjb2RlLnB1c2goXCJyZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0X1wiK2NsYXNzTmFtZStcIihkYXRhLHNoYXBlLHN0cmlkZSxvZmZzZXQpe3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKGRhdGEsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwic2hhcGVbXCIraStcIl1cIlxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcInN0cmlkZVtcIitpK1wiXVwiXG4gICAgfSkuam9pbihcIixcIikrXCIsb2Zmc2V0KX1cIilcblxuICAvL0NvbXBpbGUgcHJvY2VkdXJlXG4gIHZhciBwcm9jZWR1cmUgPSBuZXcgRnVuY3Rpb24oXCJDVE9SX0xJU1RcIiwgXCJPUkRFUlwiLCBjb2RlLmpvaW4oXCJcXG5cIikpXG4gIHJldHVybiBwcm9jZWR1cmUoQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV0sIG9yZGVyKVxufVxuXG5mdW5jdGlvbiBhcnJheURUeXBlKGRhdGEpIHtcbiAgaWYoaGFzQnVmZmVyKSB7XG4gICAgaWYoQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSB7XG4gICAgICByZXR1cm4gXCJidWZmZXJcIlxuICAgIH1cbiAgfVxuICBpZihoYXNUeXBlZEFycmF5cykge1xuICAgIHN3aXRjaChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkpIHtcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiZmxvYXQ2NFwiXG4gICAgICBjYXNlIFwiW29iamVjdCBGbG9hdDMyQXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImZsb2F0MzJcIlxuICAgICAgY2FzZSBcIltvYmplY3QgSW50OEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJpbnQ4XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEludDE2QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImludDE2XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEludDMyQXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImludDMyXCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcInVpbnQ4XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJ1aW50MTZcIlxuICAgICAgY2FzZSBcIltvYmplY3QgVWludDMyQXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcInVpbnQzMlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwidWludDhfY2xhbXBlZFwiXG4gICAgfVxuICB9XG4gIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICByZXR1cm4gXCJhcnJheVwiXG4gIH1cbiAgcmV0dXJuIFwiZ2VuZXJpY1wiXG59XG5cbnZhciBDQUNIRURfQ09OU1RSVUNUT1JTID0ge1xuICBcImZsb2F0MzJcIjpbXSxcbiAgXCJmbG9hdDY0XCI6W10sXG4gIFwiaW50OFwiOltdLFxuICBcImludDE2XCI6W10sXG4gIFwiaW50MzJcIjpbXSxcbiAgXCJ1aW50OFwiOltdLFxuICBcInVpbnQxNlwiOltdLFxuICBcInVpbnQzMlwiOltdLFxuICBcImFycmF5XCI6W10sXG4gIFwidWludDhfY2xhbXBlZFwiOltdLFxuICBcImJ1ZmZlclwiOltdLFxuICBcImdlbmVyaWNcIjpbXVxufVxuXG47KGZ1bmN0aW9uKCkge1xuICBmb3IodmFyIGlkIGluIENBQ0hFRF9DT05TVFJVQ1RPUlMpIHtcbiAgICBDQUNIRURfQ09OU1RSVUNUT1JTW2lkXS5wdXNoKGNvbXBpbGVDb25zdHJ1Y3RvcihpZCwgLTEpKVxuICB9XG59KTtcblxuZnVuY3Rpb24gd3JhcHBlZE5EQXJyYXlDdG9yKGRhdGEsIHNoYXBlLCBzdHJpZGUsIG9mZnNldCkge1xuICBpZihkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3RvciA9IENBQ0hFRF9DT05TVFJVQ1RPUlMuYXJyYXlbMF1cbiAgICByZXR1cm4gY3RvcihbXSlcbiAgfSBlbHNlIGlmKHR5cGVvZiBkYXRhID09PSBcIm51bWJlclwiKSB7XG4gICAgZGF0YSA9IFtkYXRhXVxuICB9XG4gIGlmKHNoYXBlID09PSB1bmRlZmluZWQpIHtcbiAgICBzaGFwZSA9IFsgZGF0YS5sZW5ndGggXVxuICB9XG4gIHZhciBkID0gc2hhcGUubGVuZ3RoXG4gIGlmKHN0cmlkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaWRlID0gbmV3IEFycmF5KGQpXG4gICAgZm9yKHZhciBpPWQtMSwgc3o9MTsgaT49MDsgLS1pKSB7XG4gICAgICBzdHJpZGVbaV0gPSBzelxuICAgICAgc3ogKj0gc2hhcGVbaV1cbiAgICB9XG4gIH1cbiAgaWYob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBvZmZzZXQgPSAwXG4gICAgZm9yKHZhciBpPTA7IGk8ZDsgKytpKSB7XG4gICAgICBpZihzdHJpZGVbaV0gPCAwKSB7XG4gICAgICAgIG9mZnNldCAtPSAoc2hhcGVbaV0tMSkqc3RyaWRlW2ldXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBkdHlwZSA9IGFycmF5RFR5cGUoZGF0YSlcbiAgdmFyIGN0b3JfbGlzdCA9IENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdXG4gIHdoaWxlKGN0b3JfbGlzdC5sZW5ndGggPD0gZCsxKSB7XG4gICAgY3Rvcl9saXN0LnB1c2goY29tcGlsZUNvbnN0cnVjdG9yKGR0eXBlLCBjdG9yX2xpc3QubGVuZ3RoLTEpKVxuICB9XG4gIHZhciBjdG9yID0gY3Rvcl9saXN0W2QrMV1cbiAgcmV0dXJuIGN0b3IoZGF0YSwgc2hhcGUsIHN0cmlkZSwgb2Zmc2V0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBwZWROREFycmF5Q3RvclxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKSIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIGlvdGEobikge1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KG4pXG4gIGZvcih2YXIgaT0wOyBpPG47ICsraSkge1xuICAgIHJlc3VsdFtpXSA9IGlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW90YSIsInZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcblxudmFyIGRlZmF1bHRzID0ge1xuXHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn1cblxuZnVuY3Rpb24gbWl4KG9iaiwgZW50cmllcykge1xuXHRmb3IgKHZhciBrIGluIGVudHJpZXMpIHtcblx0XHRpZiAoIWVudHJpZXMuaGFzT3duUHJvcGVydHkoaykpXG5cdFx0XHRjb250aW51ZVxuXHRcdHZhciBmID0gZW50cmllc1trXVxuXHRcdGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0b2JqW2tdID0gZlxuXHRcdH0gZWxzZSBpZiAoZiAmJiB0eXBlb2YgZiA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHZhciBkZWYgPSB4dGVuZChkZWZhdWx0cywgZilcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGssIGRlZik7XG5cdFx0fVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWl4ZXMoY3RvciwgZW50cmllcykge1xuXHRtaXgoY3Rvci5wcm90b3R5cGUsIGVudHJpZXMpXG59XG5cbm1vZHVsZS5leHBvcnRzLm1peCA9IG1peCIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLXdoaXRlLXRleHR1cmUvbm9kZV9tb2R1bGVzL25kYXJyYXkvbmRhcnJheS5qc1wiKSIsInZhciBpbnQ4ID0gbmV3IEludDhBcnJheSg0KTtcbnZhciBpbnQzMiA9IG5ldyBJbnQzMkFycmF5KGludDguYnVmZmVyLCAwLCAxKTtcbnZhciBmbG9hdDMyID0gbmV3IEZsb2F0MzJBcnJheShpbnQ4LmJ1ZmZlciwgMCwgMSk7XG5cbi8qKlxuICogQSBzaW5nbGV0b24gZm9yIG51bWJlciB1dGlsaXRpZXMuIFxuICogQGNsYXNzIE51bWJlclV0aWxcbiAqL1xudmFyIE51bWJlclV0aWwgPSBmdW5jdGlvbigpIHtcblxufTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBmbG9hdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gaW50IGJpdHMuIEFycmF5QnVmZmVyXG4gKiBpcyB1c2VkIGZvciB0aGUgY29udmVyc2lvbi5cbiAqXG4gKiBAbWV0aG9kICBpbnRCaXRzVG9GbG9hdFxuICogQHN0YXRpY1xuICogQHBhcmFtICB7TnVtYmVyfSBpIHRoZSBpbnQgdG8gY2FzdFxuICogQHJldHVybiB7TnVtYmVyfSAgIHRoZSBmbG9hdFxuICovXG5OdW1iZXJVdGlsLmludEJpdHNUb0Zsb2F0ID0gZnVuY3Rpb24oaSkge1xuXHRpbnQzMlswXSA9IGk7XG5cdHJldHVybiBmbG9hdDMyWzBdO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnQgYml0cyBmcm9tIHRoZSBnaXZlbiBmbG9hdC4gQXJyYXlCdWZmZXIgaXMgdXNlZFxuICogZm9yIHRoZSBjb252ZXJzaW9uLlxuICpcbiAqIEBtZXRob2QgIGZsb2F0VG9JbnRCaXRzXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGYgdGhlIGZsb2F0IHRvIGNhc3RcbiAqIEByZXR1cm4ge051bWJlcn0gICB0aGUgaW50IGJpdHNcbiAqL1xuTnVtYmVyVXRpbC5mbG9hdFRvSW50Qml0cyA9IGZ1bmN0aW9uKGYpIHtcblx0ZmxvYXQzMlswXSA9IGY7XG5cdHJldHVybiBpbnQzMlswXTtcbn07XG5cbi8qKlxuICogRW5jb2RlcyBBQkdSIGludCBhcyBhIGZsb2F0LCB3aXRoIHNsaWdodCBwcmVjaXNpb24gbG9zcy5cbiAqXG4gKiBAbWV0aG9kICBpbnRUb0Zsb2F0Q29sb3JcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBhbiBBQkdSIHBhY2tlZCBpbnRlZ2VyXG4gKi9cbk51bWJlclV0aWwuaW50VG9GbG9hdENvbG9yID0gZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIE51bWJlclV0aWwuaW50Qml0c1RvRmxvYXQoIHZhbHVlICYgMHhmZWZmZmZmZiApO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZmxvYXQgZW5jb2RlZCBBQkdSIHZhbHVlIGZyb20gdGhlIGdpdmVuIFJHQkFcbiAqIGJ5dGVzICgwIC0gMjU1KS4gVXNlZnVsIGZvciBzYXZpbmcgYmFuZHdpZHRoIGluIHZlcnRleCBkYXRhLlxuICpcbiAqIEBtZXRob2QgIGNvbG9yVG9GbG9hdFxuICogQHN0YXRpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHIgdGhlIFJlZCBieXRlICgwIC0gMjU1KVxuICogQHBhcmFtIHtOdW1iZXJ9IGcgdGhlIEdyZWVuIGJ5dGUgKDAgLSAyNTUpXG4gKiBAcGFyYW0ge051bWJlcn0gYiB0aGUgQmx1ZSBieXRlICgwIC0gMjU1KVxuICogQHBhcmFtIHtOdW1iZXJ9IGEgdGhlIEFscGhhIGJ5dGUgKDAgLSAyNTUpXG4gKiBAcmV0dXJuIHtGbG9hdDMyfSAgYSBGbG9hdDMyIG9mIHRoZSBSR0JBIGNvbG9yXG4gKi9cbk51bWJlclV0aWwuY29sb3JUb0Zsb2F0ID0gZnVuY3Rpb24ociwgZywgYiwgYSkge1xuXHR2YXIgYml0cyA9IChhIDw8IDI0IHwgYiA8PCAxNiB8IGcgPDwgOCB8IHIpO1xuXHRyZXR1cm4gTnVtYmVyVXRpbC5pbnRUb0Zsb2F0Q29sb3IoYml0cyk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGEgcG93ZXItb2YtdHdvLlxuICpcbiAqIEBtZXRob2QgIGlzUG93ZXJPZlR3b1xuICogQHBhcmFtICB7TnVtYmVyfSAgbiB0aGUgbnVtYmVyIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgdHJ1ZSBpZiBwb3dlci1vZi10d29cbiAqL1xuTnVtYmVyVXRpbC5pc1Bvd2VyT2ZUd28gPSBmdW5jdGlvbihuKSB7XG5cdHJldHVybiAobiAmIChuIC0gMSkpID09PSAwO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGhpZ2hlc3QgcG93ZXItb2YtdHdvIGZyb20gdGhlIHNwZWNpZmllZCBudW1iZXIuIFxuICogXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG4gdGhlIG51bWJlciB0byB0ZXN0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgdGhlIG5leHQgaGlnaGVzdCBwb3dlciBvZiB0d29cbiAqL1xuTnVtYmVyVXRpbC5uZXh0UG93ZXJPZlR3byA9IGZ1bmN0aW9uKG4pIHtcblx0bi0tO1xuXHRuIHw9IG4gPj4gMTtcblx0biB8PSBuID4+IDI7XG5cdG4gfD0gbiA+PiA0O1xuXHRuIHw9IG4gPj4gODtcblx0biB8PSBuID4+IDE2O1xuXHRyZXR1cm4gbisxO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXJVdGlsOyIsImZ1bmN0aW9uIHByZW11bHRpcGx5KHJnYmEsIG91dCkge1xuXHRpZiAoIW91dCB8fCB0eXBlb2Ygb3V0ID09PSAnbnVtYmVyJylcblx0XHRvdXQgPSBbMCwwLDAsMF1cblx0b3V0WzBdID0gcmdiYVswXSAqIHJnYmFbM11cblx0b3V0WzFdID0gcmdiYVsxXSAqIHJnYmFbM11cblx0b3V0WzJdID0gcmdiYVsyXSAqIHJnYmFbM11cblx0b3V0WzNdID0gcmdiYVszXVxuXHRyZXR1cm4gb3V0XG59XG5tb2R1bGUuZXhwb3J0cyA9IHByZW11bHRpcGx5IiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsInZhciBwYWNrQ29sb3IgPSByZXF1aXJlKCdudW1iZXItdXRpbCcpLmNvbG9yVG9GbG9hdFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbG9yVG9GbG9hdChyZ2JhKSB7XG4gICAgcmV0dXJuIHBhY2tDb2xvcihcbiAgICAgICAgfn4ocmdiYVswXSAqIDI1NSksXG4gICAgICAgIH5+KHJnYmFbMV0gKiAyNTUpLFxuICAgICAgICB+fihyZ2JhWzJdICogMjU1KSxcbiAgICAgICAgfn4ocmdiYVszXSAqIDI1NSlcbiAgICApXG59IiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtd2hpdGUtdGV4dHVyZS9ub2RlX21vZHVsZXMvZ2wtdGV4dHVyZTJkL3RleHR1cmUuanNcIikiLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGV4Y29vcmQocG9zaXRpb24sIHNoYXBlLCB0ZXhTaGFwZSwgb3V0KSB7XG4gICAgaWYgKCFvdXQpXG4gICAgICAgIG91dCA9IFswLCAwLCAxLCAxXVxuXG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbiB8fCBbMCwgMF1cbiAgICBzaGFwZSA9IHNoYXBlIHx8IFsxLCAxXVxuXG4gICAgdGV4U2hhcGUgPSB0ZXhTaGFwZSB8fCBzaGFwZVxuXG4gICAgdmFyIGludldpZHRoID0gMSAvIHRleFNoYXBlWzBdXG4gICAgdmFyIGludkhlaWdodCA9IDEgLyB0ZXhTaGFwZVsxXVxuICAgIHZhciB4ID0gcG9zaXRpb25bMF0sXG4gICAgICAgIHkgPSBwb3NpdGlvblsxXSxcbiAgICAgICAgdyA9IHNoYXBlWzBdLFxuICAgICAgICBoID0gc2hhcGVbMV1cblxuICAgIG91dFswXSA9IHggKiBpbnZXaWR0aFxuICAgIG91dFsxXSA9IHkgKiBpbnZIZWlnaHRcbiAgICBvdXRbMl0gPSAoeCArIHcpICogaW52V2lkdGhcbiAgICBvdXRbM10gPSAoeSArIGgpICogaW52SGVpZ2h0XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qc1wiKSIsIi8vd2lsbCB1c2UgZ2wtdmVjMi9jb3B5IGF0IHNvbWUgcG9pbnQuLlxubW9kdWxlLmV4cG9ydHMudmVjMiA9IGZ1bmN0aW9uIGNvcHkyKG91dCwgeCwgeSkge1xuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgcmV0dXJuIG91dFxufVxuXG5tb2R1bGUuZXhwb3J0cy52ZWMzID0gZnVuY3Rpb24gY29weTModmVjLCB4LCB5LCB6KSB7XG4gICAgdmVjWzBdID0geFxuICAgIHZlY1sxXSA9IHlcbiAgICB2ZWNbMl0gPSB6XG4gICAgcmV0dXJuIHZlY1xufSIsInZhciBtaXhlcyA9IHJlcXVpcmUoJ21peGVzJylcbnZhciBjcmVhdGVTaGFkZXIgPSByZXF1aXJlKCdnbC1iYXNpYy1zaGFkZXInKVxudmFyIGNyZWF0ZUJhdGNoID0gcmVxdWlyZSgnZ2wtc3ByaXRlLWJhdGNoJylcbnZhciBjb3B5MiA9IHJlcXVpcmUoJy4vY29weScpLnZlYzJcbnZhciBudW1iZXIgPSByZXF1aXJlKCdhcy1udW1iZXInKVxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIHRleGNvb3JkID0gcmVxdWlyZSgndGV4Y29vcmQnKVxudmFyIG1hdDQgPSByZXF1aXJlKCcuL21hdDQnKVxuXG52YXIgWkVSTyA9IFswLCAwXVxudmFyIFRFWENPT1JEX0RFRkFVTFQgPSBbMCwgMCwgMSwgMV1cblxudmFyIHRtcDEgPSBbMCwgMF0sXG4gICAgdG1wMiA9IFswLCAwXSxcbiAgICB0bXBVViA9IFswLCAwLCAxLCAxXVxuXG5mdW5jdGlvbiBTcHJpdGVSZW5kZXJlcihnbCwgb3B0KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNwcml0ZVJlbmRlcmVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBTcHJpdGVSZW5kZXJlcihnbCwgb3B0KVxuICAgIG9wdCA9IG9wdHx8e31cblxuICAgIHRoaXMuX2JsZW5kU3JjID0gbnVtYmVyKG9wdC5ibGVuZFNyYywgZ2wuU1JDX0FMUEhBKVxuICAgIHRoaXMuX2JsZW5kRHN0ID0gbnVtYmVyKG9wdC5ibGVuZERzdCwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcbiAgICB0aGlzLl9ibGVuZEVuYWJsZWQgPSBvcHQuYmxlbmQgIT09IGZhbHNlXG5cbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNoYWRlciA9IG9wdC5zaGFkZXIgfHwgY3JlYXRlU2hhZGVyKGdsLCB7XG4gICAgICAgIGNvbG9yOiB0cnVlLFxuICAgICAgICB0ZXhjb29yZDogdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy5iYXRjaCA9IG9wdC5iYXRjaCB8fCBjcmVhdGVCYXRjaChnbCwgeHRlbmQoeyBcbiAgICAgICAgZHluYW1pYzogdHJ1ZSxcbiAgICAgICAgcHJlbXVsdGlwbGllZDogdHJ1ZSBcbiAgICB9LCBvcHQpKVxuXG4gICAgdGhpcy5fYm91bmQgPSBmYWxzZVxuICAgIHRoaXMucHJvamVjdGlvbiA9IG1hdDQuY3JlYXRlKClcbiAgICB0aGlzLnZpZXcgPSBtYXQ0LmNyZWF0ZSgpXG4gICAgdGhpcy5tb2RlbCA9IG1hdDQuY3JlYXRlKClcbiAgICB0aGlzLnRyYW5zZm9ybSA9IG1hdDQuY3JlYXRlKClcbiAgICB0aGlzLnRyYW5zZm9ybVN0YWNrID0gW11cblxuICAgIHRoaXMuY29sb3IgPSBbMSwgMSwgMSwgMV1cbn1cblxubWl4ZXMoU3ByaXRlUmVuZGVyZXIsIHtcblxuICAgIHRyYW5zZm9ybToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmF0Y2gudHJhbnNmb3JtXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbih0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuYmF0Y2gudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJhdGNoLmNsZWFyKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgb3J0aG86IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgbWF0NC5vcnRobyh0aGlzLnByb2plY3Rpb24sIDAsIHdpZHRoLCBoZWlnaHQsIDAsIDAsIDEpXG4gICAgICAgIHRoaXMudXBkYXRlTWF0cmljZXMoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBzb2xpZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmF0Y2gudGV4dHVyZSA9IG51bGxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgaW1hZ2U6IGZ1bmN0aW9uKGltYWdlLCB1dikge1xuICAgICAgICB0aGlzLmJhdGNoLnRleHR1cmUgPSBpbWFnZVxuICAgICAgICB0aGlzLmJhdGNoLnRleGNvb3JkID0gdXYgfHwgVEVYQ09PUkRfREVGQVVMVFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBkZWZhdWx0czogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmF0Y2guZGVmYXVsdHMoKVxuICAgICAgICB0aGlzLmJhdGNoLmNvbG9yID0gdGhpcy5jb2xvclxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBmbHVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmF0Y2guZmx1c2goKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBmaWxsUmVjdDogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnNvbGlkKCkuZGVmYXVsdHMoKVxuICAgICAgICB0aGlzLnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LCAgXG5cbiAgICAvL2p1c3QgcHVzaGVzIGEgc2luZ2xlIHF1YWQgd2l0aCBjdXJyZW50IGF0dHJpYnV0ZXNcbiAgICByZWN0OiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuYmF0Y2guY29sb3IgPSB0aGlzLmNvbG9yXG4gICAgICAgIHRoaXMuYmF0Y2gucG9zaXRpb25bMF0gPSB4fHwwXG4gICAgICAgIHRoaXMuYmF0Y2gucG9zaXRpb25bMV0gPSB5fHwwXG4gICAgICAgIHRoaXMuYmF0Y2guc2hhcGVbMF0gPSB3aWR0aHx8MFxuICAgICAgICB0aGlzLmJhdGNoLnNoYXBlWzFdID0gaGVpZ2h0fHwwXG4gICAgICAgIHRoaXMuYmF0Y2gucHVzaCgpXG4gICAgfSxcblxuICAgIHN0cm9rZTogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgdGhpY2tuZXNzKSB7XG4gICAgICAgIHRoaXMuYmF0Y2guY29sb3IgPSB0aGlzLmNvbG9yXG4gICAgICAgIHRoaWNrbmVzcyA9IG51bWJlcih0aGlja25lc3MsIDEpXG4gICAgICAgIHRoaXMucmVjdCh4K3RoaWNrbmVzcywgeSwgd2lkdGgtdGhpY2tuZXNzKjIsIHRoaWNrbmVzcylcbiAgICAgICAgdGhpcy5yZWN0KHgsIHksIHRoaWNrbmVzcywgaGVpZ2h0KVxuICAgICAgICB0aGlzLnJlY3QoeCt0aGlja25lc3MsIHkraGVpZ2h0LXRoaWNrbmVzcywgd2lkdGgtdGhpY2tuZXNzKjIsIHRoaWNrbmVzcylcbiAgICAgICAgdGhpcy5yZWN0KHgrd2lkdGgtdGhpY2tuZXNzLCB5LCB0aGlja25lc3MsIGhlaWdodClcbiAgICB9LFxuXG4gICAgc3Ryb2tlUmVjdDogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgdGhpY2tuZXNzKSB7XG4gICAgICAgIHRoaXMuc29saWQoKS5kZWZhdWx0cygpXG4gICAgICAgIHRoaXMuc3Ryb2tlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHRoaWNrbmVzcylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZmlsbFRleHQ6IGZ1bmN0aW9uKHRleHQsIHgsIHksIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdmFyIG9sZFRyYW5zZm9ybSA9IHRleHQuYmF0Y2gudHJhbnNmb3JtLFxuICAgICAgICAgICAgb2xkQ29sb3IgPSB0ZXh0LmJhdGNoLmNvbG9yLFxuICAgICAgICAgICAgd2FzQm91bmQgPSB0aGlzLl9ib3VuZFxuXG4gICAgICAgIGlmICh3YXNCb3VuZCkgeyBcbiAgICAgICAgLy9UT0RPOiB3ZSBjb3VsZCBhbHdheXMgYXNzdW1lIGR5bmFtaWMgYW5kIHJlbW92ZSB0aGlzIGNvbmRpdGlvblxuICAgICAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgICAgIHRoaXMudW5iaW5kKClcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKVxuICAgICAgICB9XG4gICAgICAgIHRleHQuYmF0Y2guY29sb3IgPSB0aGlzLmNvbG9yXG4gICAgICAgIHRleHQuYmF0Y2gudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1cbiAgICAgICAgdGV4dC5kcmF3KHRoaXMuc2hhZGVyLCB4LCB5LCBzdGFydCwgZW5kKVxuICAgICAgICB0ZXh0LmJhdGNoLmNvbG9yID0gb2xkQ29sb3JcbiAgICAgICAgdGV4dC5iYXRjaC50cmFuc2Zvcm0gPSBvbGRUcmFuc2Zvcm1cbiAgICAgICAgaWYgKHdhc0JvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmQoKVxuICAgICAgICB9XG4gICAgfSwgXG5cbiAgICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB3aWR0aCA9IG51bWJlcih3aWR0aCwgaW1hZ2Uuc2hhcGUgPyBpbWFnZS5zaGFwZVswXSA6IDApXG4gICAgICAgIGhlaWdodCA9IG51bWJlcihoZWlnaHQsIGltYWdlLnNoYXBlID8gaW1hZ2Uuc2hhcGVbMV0gOiAwKVxuXG4gICAgICAgIHZhciB1diA9IFRFWENPT1JEX0RFRkFVTFRcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA5KSB7XG4gICAgICAgICAgICB2YXIgdGV4U2l6ZSA9IGltYWdlLnNoYXBlIFxuICAgICAgICAgICAgdmFyIGNsaXBQb3MgPSBjb3B5Mih0bXAxLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSlcbiAgICAgICAgICAgIHZhciBjbGlwU2l6ZSA9IGNvcHkyKHRtcDIsIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdKVxuXG4gICAgICAgICAgICAvL2dldCBVViBjb29yZGluYXRlcywgc3RvcmluZyBpbiBvdXIgdGVtcCBhcnJheSBhcyB0byBub3QgXG4gICAgICAgICAgICAvL2NoYW5nZSBjb25zdGFudCBkZWZhdWx0XG4gICAgICAgICAgICB1diA9IHRleGNvb3JkKGNsaXBQb3MsIGNsaXBTaXplLCB0ZXhTaXplLCB0bXBVVilcblxuICAgICAgICAgICAgeCA9IGFyZ3VtZW50c1s1XVxuICAgICAgICAgICAgeSA9IGFyZ3VtZW50c1s2XVxuICAgICAgICAgICAgd2lkdGggPSBhcmd1bWVudHNbN11cbiAgICAgICAgICAgIGhlaWdodCA9IGFyZ3VtZW50c1s4XVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0cygpXG4gICAgICAgIC8vIHRoaXMuYmF0Y2gucm90YXRpb24gPSByb3RhdGlvbnx8MFxuICAgICAgICAvLyBpZiAocm90YXRpb25PcmlnaW4pXG4gICAgICAgIC8vICAgICB0aGlzLmJhdGNoLnJvdGF0aW9uT3JpZ2luID0gcm90YXRpb25PcmlnaW5cbiAgICAgICAgdGhpcy5pbWFnZShpbWFnZSwgdXYpXG4gICAgICAgIHRoaXMucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBzcHJpdGU6IGZ1bmN0aW9uKHNwcml0ZSkge1xuICAgICAgICB0aGlzLmJhdGNoLnB1c2goc3ByaXRlKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICB1cGRhdGVNYXRyaWNlczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hhZGVyLmJpbmQoKVxuICAgICAgICB0aGlzLnNoYWRlci51bmlmb3Jtcy5wcm9qZWN0aW9uID0gdGhpcy5wcm9qZWN0aW9uXG4gICAgICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLnZpZXcgPSB0aGlzLnZpZXdcbiAgICAgICAgdGhpcy5zaGFkZXIudW5pZm9ybXMubW9kZWwgPSB0aGlzLm1vZGVsXG4gICAgfSxcblxuICAgIGJpbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsXG4gICAgICAgIGlmICh0aGlzLl9ibGVuZEVuYWJsZWQpIHtcbiAgICAgICAgICAgIGdsLmVuYWJsZShnbC5CTEVORClcbiAgICAgICAgICAgIGdsLmJsZW5kRnVuYyh0aGlzLl9ibGVuZFNyYywgdGhpcy5fYmxlbmREc3QpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ib3VuZCA9IHRydWVcbiAgICAgICAgdGhpcy5iYXRjaC5iaW5kKHRoaXMuc2hhZGVyKVxuICAgICAgICB0aGlzLnNvbGlkKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZHJhdzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmF0Y2guZHJhdygpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHVuYmluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmF0Y2gudW5iaW5kKClcbiAgICAgICAgdGhpcy5fYm91bmQgPSBmYWxzZVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBiZWdpbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmluZCgpXG4gICAgICAgIHRoaXMuY2xlYXIoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICB0aGlzLnVuYmluZCgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSlcblxubWl4ZXMoU3ByaXRlUmVuZGVyZXIsIHJlcXVpcmUoJy4vdHJhbnNmb3JtcycpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwcml0ZVJlbmRlcmVyIiwiLy90byByZWR1Y2UgYnVuZGxlIHNpemUsIHdlJ2xsIG9ubHkgZ3JhYiB3aGF0IHdlIG5lZWRcbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9ydGhvOiByZXF1aXJlKCdnbC1tYXQ0L29ydGhvJyksXG4gICAgaWRlbnRpdHk6IHJlcXVpcmUoJ2dsLW1hdDQvaWRlbnRpdHknKSxcbiAgICBjcmVhdGU6IHJlcXVpcmUoJ2dsLW1hdDQvY3JlYXRlJyksXG4gICAgc2NhbGU6IHJlcXVpcmUoJ2dsLW1hdDQvc2NhbGUnKSxcbiAgICByb3RhdGVaOiByZXF1aXJlKCdnbC1tYXQ0L3JvdGF0ZVonKSxcbiAgICByb3RhdGVZOiByZXF1aXJlKCdnbC1tYXQ0L3JvdGF0ZVknKSxcbiAgICByb3RhdGVYOiByZXF1aXJlKCdnbC1tYXQ0L3JvdGF0ZVgnKSxcbiAgICB0cmFuc2xhdGU6IHJlcXVpcmUoJ2dsLW1hdDQvdHJhbnNsYXRlJyksXG4gICAgY2xvbmU6IHJlcXVpcmUoJ2dsLW1hdDQvY2xvbmUnKSxcbiAgICBtdWx0aXBseTogcmVxdWlyZSgnZ2wtbWF0NC9tdWx0aXBseScpXG59XG4iLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9hcy1udW1iZXIvaW5kZXguanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1iYXNpYy1zaGFkZXIvaW5kZXguanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1tYXQ0L2Nsb25lLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtbWF0NC9jcmVhdGUuanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1tYXQ0L2lkZW50aXR5LmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtbWF0NC9tdWx0aXBseS5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLW1hdDQvb3J0aG8uanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVguanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVkuanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVouanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1tYXQ0L3NjYWxlLmpzXCIpIiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc2xhdGUuanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL2luZGV4LmpzXCIpIiwidmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxuXG52YXIgZGVmYXVsdHMgPSB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufVxuXG5mdW5jdGlvbiBtaXgob2JqLCBlbnRyaWVzKSB7XG5cdGZvciAodmFyIGsgaW4gZW50cmllcykge1xuXHRcdGlmICghZW50cmllcy5oYXNPd25Qcm9wZXJ0eShrKSlcblx0XHRcdGNvbnRpbnVlXG5cdFx0dmFyIGYgPSBlbnRyaWVzW2tdXG5cdFx0aWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRvYmpba10gPSBmXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgZiA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHZhciBkZWYgPSB4dGVuZChkZWZhdWx0cywgZilcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGssIGRlZik7XG5cdFx0fVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWl4ZXMoY3RvciwgZW50cmllcykge1xuXHRtaXgoY3Rvci5wcm90b3R5cGUsIGVudHJpZXMpXG59XG5cbm1vZHVsZS5leHBvcnRzLm1peCA9IG1peCIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvdGV4Y29vcmQvaW5kZXguanNcIikiLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGVzL25vZGVfbW9kdWxlcy9taXhlcy9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzXCIpIiwidmFyIG1hdDQgPSByZXF1aXJlKCcuL21hdDQnKVxudmFyIGNvcHkzID0gcmVxdWlyZSgnLi9jb3B5JykudmVjM1xudmFyIG51bWJlciA9IHJlcXVpcmUoJ2FzLW51bWJlcicpXG5cbnZhciB0bXBWZWMzID0gWzAsIDAsIDBdXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgc2F2ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtU3RhY2sucHVzaChtYXQ0LmNsb25lKHRoaXMudHJhbnNmb3JtKSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgcmVzdG9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybVN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy50cmFuc2Zvcm1TdGFjay5wb3AoKVxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgc2NhbGU6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgeCA9IG51bWJlcih4LCAxKVxuICAgICAgICB5ID0gbnVtYmVyKHksIDEpXG4gICAgICAgIG1hdDQuc2NhbGUodGhpcy50cmFuc2Zvcm0sIHRoaXMudHJhbnNmb3JtLCBjb3B5Myh0bXBWZWMzLCB4LCB5LCAxKSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgdHJhbnNsYXRlOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHggPSB4fHwwXG4gICAgICAgIHkgPSB5fHwwXG4gICAgICAgIG1hdDQudHJhbnNsYXRlKHRoaXMudHJhbnNmb3JtLCB0aGlzLnRyYW5zZm9ybSwgY29weTModG1wVmVjMywgeCwgeSwgMCkpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHJvdGF0ZVo6IGZ1bmN0aW9uKHJhZCkge1xuICAgICAgICByYWQgPSByYWR8fDBcbiAgICAgICAgbWF0NC5yb3RhdGVaKHRoaXMudHJhbnNmb3JtLCB0aGlzLnRyYW5zZm9ybSwgcmFkKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICByb3RhdGVZOiBmdW5jdGlvbihyYWQpIHtcbiAgICAgICAgcmFkID0gcmFkfHwwXG4gICAgICAgIG1hdDQucm90YXRlWSh0aGlzLnRyYW5zZm9ybSwgdGhpcy50cmFuc2Zvcm0sIHJhZClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgcm90YXRlWDogZnVuY3Rpb24ocmFkKSB7XG4gICAgICAgIHJhZCA9IHJhZHx8MFxuICAgICAgICBtYXQ0LnJvdGF0ZVgodGhpcy50cmFuc2Zvcm0sIHRoaXMudHJhbnNmb3JtLCByYWQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHRyYW5zZm9ybU1hdDQ6IGZ1bmN0aW9uKG1hdHJpeDR4NCkge1xuICAgICAgICBtYXQ0Lm11bHRpcGx5KHRoaXMudHJhbnNmb3JtLCB0aGlzLnRyYW5zZm9ybSwgbWF0cml4NHg0KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICByb3RhdGU6IGZ1bmN0aW9uKHJhZCkge1xuICAgICAgICB0aGlzLnJvdGF0ZVoocmFkKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBpZGVudGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgIG1hdDQuaWRlbnRpdHkodGhpcy50cmFuc2Zvcm0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG59IiwibW9kdWxlLmV4cG9ydHM9cmVxdWlyZShcIi9wcm9qZWN0cy9ibGFja2ljZS9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXRleHR1cmUyZC90ZXh0dXJlLmpzXCIpIiwibW9kdWxlLmV4cG9ydHMgPSBwcm9ncmFtaWZ5XG5cbnZhciBzaGFkZXIgPSByZXF1aXJlKCdnbC1zaGFkZXItY29yZScpXG5cbmZ1bmN0aW9uIHByb2dyYW1pZnkodmVydGV4LCBmcmFnbWVudCwgdW5pZm9ybXMsIGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGdsKSB7XG4gICAgcmV0dXJuIHNoYWRlcihnbCwgdmVydGV4LCBmcmFnbWVudCwgdW5pZm9ybXMsIGF0dHJpYnV0ZXMpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbm9vcFxuXG5mdW5jdGlvbiBub29wKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnWW91IHNob3VsZCBidW5kbGUgeW91ciBjb2RlICcgK1xuICAgICAgJ3VzaW5nIGBnbHNsaWZ5YCBhcyBhIHRyYW5zZm9ybS4nXG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLWJhc2ljLXNoYWRlci9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyLWNvcmUvc2hhZGVyLWNvcmUuanNcIikiLCJtb2R1bGUuZXhwb3J0cyA9IHByb2dyYW1pZnlcblxuZnVuY3Rpb24gcHJvZ3JhbWlmeSh2ZXJ0ZXgsIGZyYWdtZW50LCB1bmlmb3JtcywgYXR0cmlidXRlcykge1xuICByZXR1cm4ge1xuICAgIHZlcnRleDogdmVydGV4LCBcbiAgICBmcmFnbWVudDogZnJhZ21lbnQsXG4gICAgdW5pZm9ybXM6IHVuaWZvcm1zLCBcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGltZztcblxuZnVuY3Rpb24gaW1nIChzcmMsIG9wdCwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IG9wdFxuICAgIG9wdCA9IG51bGxcbiAgfVxuXG5cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHZhciBsb2NrZWQ7XG5cbiAgZWwub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NrZWQpIHJldHVybjtcbiAgICBsb2NrZWQgPSB0cnVlO1xuXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodW5kZWZpbmVkLCBlbCk7XG4gIH07XG5cbiAgZWwub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAobG9ja2VkKSByZXR1cm47XG4gICAgbG9ja2VkID0gdHJ1ZTtcblxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG5ldyBFcnJvcignVW5hYmxlIHRvIGxvYWQgXCInICsgc3JjICsgJ1wiJyksIGVsKTtcbiAgfTtcbiAgXG4gIGlmIChvcHQgJiYgb3B0LmNyb3NzT3JpZ2luKVxuICAgIGVsLmNyb3NzT3JpZ2luID0gb3B0LmNyb3NzT3JpZ2luO1xuXG4gIGVsLnNyYyA9IHNyYztcblxuICByZXR1cm4gZWw7XG59XG4iLCJtb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwiL3Byb2plY3RzL2JsYWNraWNlL25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1wiKSIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL21peGVzL2luZGV4LmpzXCIpIiwibW9kdWxlLmV4cG9ydHMgPSBwbHVja2VyXG5cbmZ1bmN0aW9uIHBsdWNrZXIocGF0aCwgb2JqZWN0KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID49IDJcbiAgICA/IHBsdWNrKHBhdGgpKG9iamVjdClcbiAgICA6IHBsdWNrKHBhdGgpXG59XG5cbmZ1bmN0aW9uIHBsdWNrKHBhdGgpIHtcbiAgcGF0aCA9IHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJ1xuICAgID8gU3RyaW5nKHBhdGgpLnRyaW0oKS5zcGxpdCgnLicpXG4gICAgOiBwYXRoXG5cbiAgaWYgKHBhdGgubGVuZ3RoIDwgMikge1xuICAgIHBhdGggPSBwYXRoWzBdXG4gICAgcmV0dXJuIHBsdWNrU2luZ2xlXG4gIH0gZWxzZSB7XG4gICAgdmFyIGwgPSBwYXRoLmxlbmd0aFxuICAgIHJldHVybiBwbHVja1BhdGhcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsdWNrU2luZ2xlKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3RbcGF0aF1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsdWNrUGF0aChvYmplY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnKSBicmVha1xuXG4gICAgICBvYmplY3QgPSBvYmplY3RbcGF0aFtpXV1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0XG4gIH1cbn1cbiIsIi8qXHJcbiAqIHJhZi5qc1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmdyeW1hbi9yYWYuanNcclxuICpcclxuICogb3JpZ2luYWwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlclxyXG4gKiBpbnNwaXJlZCBmcm9tIHBhdWxfaXJpc2ggZ2lzdCBhbmQgcG9zdFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMgbmdyeW1hblxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdykge1xyXG5cdHZhciBsYXN0VGltZSA9IDAsXHJcblx0XHR2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J10sXHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxyXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUsXHJcblx0XHRpID0gdmVuZG9ycy5sZW5ndGg7XHJcblxyXG5cdC8vIHRyeSB0byB1bi1wcmVmaXggZXhpc3RpbmcgcmFmXHJcblx0d2hpbGUgKC0taSA+PSAwICYmICFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddO1xyXG5cdH1cclxuXHJcblx0Ly8gcG9seWZpbGwgd2l0aCBzZXRUaW1lb3V0IGZhbGxiYWNrXHJcblx0Ly8gaGVhdmlseSBpbnNwaXJlZCBmcm9tIEBkYXJpdXMgZ2lzdCBtb2Q6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxI2NvbW1lbnQtODM3OTQ1XHJcblx0aWYgKCFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIWNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0XHR2YXIgbm93ID0gK25ldyBEYXRlKCksIG5leHRUaW1lID0gTWF0aC5tYXgobGFzdFRpbWUgKyAxNiwgbm93KTtcclxuXHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2sobGFzdFRpbWUgPSBuZXh0VGltZSk7XHJcblx0XHRcdH0sIG5leHRUaW1lIC0gbm93KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XHJcblx0fVxyXG5cclxuXHQvLyBleHBvcnQgdG8gd2luZG93XHJcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYW5jZWxBbmltYXRpb25GcmFtZTtcclxufSh3aW5kb3cpKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzbW9vdGhzdGVwIChtaW4sIG1heCwgdmFsdWUpIHtcbiAgdmFyIHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAodmFsdWUtbWluKS8obWF4LW1pbikpKTtcbiAgcmV0dXJuIHgqeCooMyAtIDIqeCk7XG59O1xuIiwiLyoqXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcbiAgdmFyIENvcHlTaGFkZXIgPSBFZmZlY3RDb21wb3Nlci5Db3B5U2hhZGVyID0gcmVxdWlyZSgndGhyZWUtY29weXNoYWRlcicpXG4gICAgLCBSZW5kZXJQYXNzID0gRWZmZWN0Q29tcG9zZXIuUmVuZGVyUGFzcyA9IHJlcXVpcmUoJy4vbGliL3JlbmRlcnBhc3MnKShUSFJFRSlcbiAgICAsIFNoYWRlclBhc3MgPSBFZmZlY3RDb21wb3Nlci5TaGFkZXJQYXNzID0gcmVxdWlyZSgnLi9saWIvc2hhZGVycGFzcycpKFRIUkVFLCBFZmZlY3RDb21wb3NlcilcbiAgICAsIE1hc2tQYXNzID0gRWZmZWN0Q29tcG9zZXIuTWFza1Bhc3MgPSByZXF1aXJlKCcuL2xpYi9tYXNrcGFzcycpKFRIUkVFKVxuICAgICwgQ2xlYXJNYXNrUGFzcyA9IEVmZmVjdENvbXBvc2VyLkNsZWFyTWFza1Bhc3MgPSByZXF1aXJlKCcuL2xpYi9jbGVhcm1hc2twYXNzJykoVEhSRUUpXG5cbiAgZnVuY3Rpb24gRWZmZWN0Q29tcG9zZXIoIHJlbmRlcmVyLCByZW5kZXJUYXJnZXQgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gICAgaWYgKCByZW5kZXJUYXJnZXQgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IDE7XG4gICAgICB2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IDE7XG4gICAgICB2YXIgcGFyYW1ldGVycyA9IHsgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwgc3RlbmNpbEJ1ZmZlcjogZmFsc2UgfTtcblxuICAgICAgcmVuZGVyVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB3aWR0aCwgaGVpZ2h0LCBwYXJhbWV0ZXJzICk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJUYXJnZXQxID0gcmVuZGVyVGFyZ2V0O1xuICAgIHRoaXMucmVuZGVyVGFyZ2V0MiA9IHJlbmRlclRhcmdldC5jbG9uZSgpO1xuXG4gICAgdGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcbiAgICB0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XG5cbiAgICB0aGlzLnBhc3NlcyA9IFtdO1xuXG4gICAgdGhpcy5jb3B5UGFzcyA9IG5ldyBTaGFkZXJQYXNzKCBDb3B5U2hhZGVyICk7XG4gIH07XG5cbiAgRWZmZWN0Q29tcG9zZXIucHJvdG90eXBlID0ge1xuICAgIHN3YXBCdWZmZXJzOiBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIHRtcCA9IHRoaXMucmVhZEJ1ZmZlcjtcbiAgICAgIHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMud3JpdGVCdWZmZXI7XG4gICAgICB0aGlzLndyaXRlQnVmZmVyID0gdG1wO1xuXG4gICAgfSxcblxuICAgIGFkZFBhc3M6IGZ1bmN0aW9uICggcGFzcyApIHtcblxuICAgICAgdGhpcy5wYXNzZXMucHVzaCggcGFzcyApO1xuXG4gICAgfSxcblxuICAgIGluc2VydFBhc3M6IGZ1bmN0aW9uICggcGFzcywgaW5kZXggKSB7XG5cbiAgICAgIHRoaXMucGFzc2VzLnNwbGljZSggaW5kZXgsIDAsIHBhc3MgKTtcblxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICggZGVsdGEgKSB7XG5cbiAgICAgIHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XG4gICAgICB0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XG5cbiAgICAgIHZhciBtYXNrQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIHZhciBwYXNzLCBpLCBpbCA9IHRoaXMucGFzc2VzLmxlbmd0aDtcblxuICAgICAgZm9yICggaSA9IDA7IGkgPCBpbDsgaSArKyApIHtcblxuICAgICAgICBwYXNzID0gdGhpcy5wYXNzZXNbIGkgXTtcblxuICAgICAgICBpZiAoICFwYXNzLmVuYWJsZWQgKSBjb250aW51ZTtcblxuICAgICAgICBwYXNzLnJlbmRlciggdGhpcy5yZW5kZXJlciwgdGhpcy53cml0ZUJ1ZmZlciwgdGhpcy5yZWFkQnVmZmVyLCBkZWx0YSwgbWFza0FjdGl2ZSApO1xuXG4gICAgICAgIGlmICggcGFzcy5uZWVkc1N3YXAgKSB7XG5cbiAgICAgICAgICBpZiAoIG1hc2tBY3RpdmUgKSB7XG5cbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5yZW5kZXJlci5jb250ZXh0O1xuXG4gICAgICAgICAgICBjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0Lk5PVEVRVUFMLCAxLCAweGZmZmZmZmZmICk7XG5cbiAgICAgICAgICAgIHRoaXMuY29weVBhc3MucmVuZGVyKCB0aGlzLnJlbmRlcmVyLCB0aGlzLndyaXRlQnVmZmVyLCB0aGlzLnJlYWRCdWZmZXIsIGRlbHRhICk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3dhcEJ1ZmZlcnMoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBwYXNzIGluc3RhbmNlb2YgTWFza1Bhc3MgKSB7XG5cbiAgICAgICAgICBtYXNrQWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBwYXNzIGluc3RhbmNlb2YgQ2xlYXJNYXNrUGFzcyApIHtcblxuICAgICAgICAgIG1hc2tBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH0sXG5cbiAgICByZXNldDogZnVuY3Rpb24gKCByZW5kZXJUYXJnZXQgKSB7XG5cbiAgICAgIGlmICggcmVuZGVyVGFyZ2V0ID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgcmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQxLmNsb25lKCk7XG5cbiAgICAgICAgcmVuZGVyVGFyZ2V0LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHJlbmRlclRhcmdldC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW5kZXJUYXJnZXQxID0gcmVuZGVyVGFyZ2V0O1xuICAgICAgdGhpcy5yZW5kZXJUYXJnZXQyID0gcmVuZGVyVGFyZ2V0LmNsb25lKCk7XG5cbiAgICAgIHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XG4gICAgICB0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XG5cbiAgICB9LFxuXG4gICAgc2V0U2l6ZTogZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0ICkge1xuXG4gICAgICB2YXIgcmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQxLmNsb25lKCk7XG5cbiAgICAgIHJlbmRlclRhcmdldC53aWR0aCA9IHdpZHRoO1xuICAgICAgcmVuZGVyVGFyZ2V0LmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgdGhpcy5yZXNldCggcmVuZGVyVGFyZ2V0ICk7XG5cbiAgICB9XG5cbiAgfTtcblxuICAvLyBzaGFyZWQgb3J0aG8gY2FtZXJhXG5cbiAgRWZmZWN0Q29tcG9zZXIuY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSggLTEsIDEsIDEsIC0xLCAwLCAxICk7XG5cbiAgRWZmZWN0Q29tcG9zZXIucXVhZCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSggMiwgMiApLCBudWxsICk7XG5cbiAgRWZmZWN0Q29tcG9zZXIuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgRWZmZWN0Q29tcG9zZXIuc2NlbmUuYWRkKCBFZmZlY3RDb21wb3Nlci5xdWFkICk7XG5cbiAgcmV0dXJuIEVmZmVjdENvbXBvc2VyXG59OyIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gIGZ1bmN0aW9uIENsZWFyTWFza1Bhc3MoKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENsZWFyTWFza1Bhc3MpKSByZXR1cm4gbmV3IENsZWFyTWFza1Bhc3Moc2NlbmUsIGNhbWVyYSk7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgfTtcblxuICBDbGVhck1hc2tQYXNzLnByb3RvdHlwZSA9IHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcbiAgICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuY29udGV4dDtcbiAgICAgIGNvbnRleHQuZGlzYWJsZSggY29udGV4dC5TVEVOQ0lMX1RFU1QgKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENsZWFyTWFza1Bhc3Ncbn07IiwiLyoqXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcbiAgZnVuY3Rpb24gTWFza1Bhc3MoIHNjZW5lLCBjYW1lcmEgKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hc2tQYXNzKSkgcmV0dXJuIG5ldyBNYXNrUGFzcyhzY2VuZSwgY2FtZXJhKTtcblxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5jbGVhciA9IHRydWU7XG4gICAgdGhpcy5uZWVkc1N3YXAgPSBmYWxzZTtcblxuICAgIHRoaXMuaW52ZXJzZSA9IGZhbHNlO1xuICB9O1xuXG4gIE1hc2tQYXNzLnByb3RvdHlwZSA9IHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xuXG4gICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XG5cbiAgICAgIC8vIGRvbid0IHVwZGF0ZSBjb2xvciBvciBkZXB0aFxuXG4gICAgICBjb250ZXh0LmNvbG9yTWFzayggZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UgKTtcbiAgICAgIGNvbnRleHQuZGVwdGhNYXNrKCBmYWxzZSApO1xuXG4gICAgICAvLyBzZXQgdXAgc3RlbmNpbFxuXG4gICAgICB2YXIgd3JpdGVWYWx1ZSwgY2xlYXJWYWx1ZTtcblxuICAgICAgaWYgKCB0aGlzLmludmVyc2UgKSB7XG5cbiAgICAgICAgd3JpdGVWYWx1ZSA9IDA7XG4gICAgICAgIGNsZWFyVmFsdWUgPSAxO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHdyaXRlVmFsdWUgPSAxO1xuICAgICAgICBjbGVhclZhbHVlID0gMDtcblxuICAgICAgfVxuXG4gICAgICBjb250ZXh0LmVuYWJsZSggY29udGV4dC5TVEVOQ0lMX1RFU1QgKTtcbiAgICAgIGNvbnRleHQuc3RlbmNpbE9wKCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSwgY29udGV4dC5SRVBMQUNFICk7XG4gICAgICBjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkFMV0FZUywgd3JpdGVWYWx1ZSwgMHhmZmZmZmZmZiApO1xuICAgICAgY29udGV4dC5jbGVhclN0ZW5jaWwoIGNsZWFyVmFsdWUgKTtcblxuICAgICAgLy8gZHJhdyBpbnRvIHRoZSBzdGVuY2lsIGJ1ZmZlclxuXG4gICAgICByZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCByZWFkQnVmZmVyLCB0aGlzLmNsZWFyICk7XG4gICAgICByZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xuXG4gICAgICAvLyByZS1lbmFibGUgdXBkYXRlIG9mIGNvbG9yIGFuZCBkZXB0aFxuXG4gICAgICBjb250ZXh0LmNvbG9yTWFzayggdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSApO1xuICAgICAgY29udGV4dC5kZXB0aE1hc2soIHRydWUgKTtcblxuICAgICAgLy8gb25seSByZW5kZXIgd2hlcmUgc3RlbmNpbCBpcyBzZXQgdG8gMVxuXG4gICAgICBjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7ICAvLyBkcmF3IGlmID09IDFcbiAgICAgIGNvbnRleHQuc3RlbmNpbE9wKCBjb250ZXh0LktFRVAsIGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQICk7XG5cbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gTWFza1Bhc3Ncbn07XG4iLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuICBmdW5jdGlvbiBSZW5kZXJQYXNzKCBzY2VuZSwgY2FtZXJhLCBvdmVycmlkZU1hdGVyaWFsLCBjbGVhckNvbG9yLCBjbGVhckFscGhhICkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZW5kZXJQYXNzKSkgcmV0dXJuIG5ldyBSZW5kZXJQYXNzKHNjZW5lLCBjYW1lcmEsIG92ZXJyaWRlTWF0ZXJpYWwsIGNsZWFyQ29sb3IsIGNsZWFyQWxwaGEpO1xuXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5vdmVycmlkZU1hdGVyaWFsID0gb3ZlcnJpZGVNYXRlcmlhbDtcblxuICAgIHRoaXMuY2xlYXJDb2xvciA9IGNsZWFyQ29sb3I7XG4gICAgdGhpcy5jbGVhckFscGhhID0gKCBjbGVhckFscGhhICE9PSB1bmRlZmluZWQgKSA/IGNsZWFyQWxwaGEgOiAxO1xuXG4gICAgdGhpcy5vbGRDbGVhckNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgdGhpcy5vbGRDbGVhckFscGhhID0gMTtcblxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5jbGVhciA9IHRydWU7XG4gICAgdGhpcy5uZWVkc1N3YXAgPSBmYWxzZTtcblxuICB9O1xuXG4gIFJlbmRlclBhc3MucHJvdG90eXBlID0ge1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XG5cbiAgICAgIHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IHRoaXMub3ZlcnJpZGVNYXRlcmlhbDtcblxuICAgICAgaWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XG5cbiAgICAgICAgdGhpcy5vbGRDbGVhckNvbG9yLmNvcHkoIHJlbmRlcmVyLmdldENsZWFyQ29sb3IoKSApO1xuICAgICAgICB0aGlzLm9sZENsZWFyQWxwaGEgPSByZW5kZXJlci5nZXRDbGVhckFscGhhKCk7XG5cbiAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggdGhpcy5jbGVhckNvbG9yLCB0aGlzLmNsZWFyQWxwaGEgKTtcblxuICAgICAgfVxuXG4gICAgICByZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCByZWFkQnVmZmVyLCB0aGlzLmNsZWFyICk7XG5cbiAgICAgIGlmICggdGhpcy5jbGVhckNvbG9yICkge1xuXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMub2xkQ2xlYXJDb2xvciwgdGhpcy5vbGRDbGVhckFscGhhICk7XG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcblxuICAgIH1cblxuICB9O1xuXG4gIHJldHVybiBSZW5kZXJQYXNzO1xuXG59O1xuIiwiLyoqXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUsIEVmZmVjdENvbXBvc2VyKSB7XG4gIGZ1bmN0aW9uIFNoYWRlclBhc3MoIHNoYWRlciwgdGV4dHVyZUlEICkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTaGFkZXJQYXNzKSkgcmV0dXJuIG5ldyBTaGFkZXJQYXNzKHNoYWRlciwgdGV4dHVyZUlEKTtcblxuICAgIHRoaXMudGV4dHVyZUlEID0gKCB0ZXh0dXJlSUQgIT09IHVuZGVmaW5lZCApID8gdGV4dHVyZUlEIDogXCJ0RGlmZnVzZVwiO1xuXG4gICAgdGhpcy51bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIHNoYWRlci51bmlmb3JtcyApO1xuXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuXG4gICAgICB1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcbiAgICAgIHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcbiAgICAgIGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXJcblxuICAgIH0gKTtcblxuICAgIHRoaXMucmVuZGVyVG9TY3JlZW4gPSBmYWxzZTtcblxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXIgPSBmYWxzZTtcblxuICB9O1xuXG4gIFNoYWRlclBhc3MucHJvdG90eXBlID0ge1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XG5cbiAgICAgIGlmICggdGhpcy51bmlmb3Jtc1sgdGhpcy50ZXh0dXJlSUQgXSApIHtcblxuICAgICAgICB0aGlzLnVuaWZvcm1zWyB0aGlzLnRleHR1cmVJRCBdLnZhbHVlID0gcmVhZEJ1ZmZlcjtcblxuICAgICAgfVxuXG4gICAgICBFZmZlY3RDb21wb3Nlci5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcblxuICAgICAgaWYgKCB0aGlzLnJlbmRlclRvU2NyZWVuICkge1xuXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggRWZmZWN0Q29tcG9zZXIuc2NlbmUsIEVmZmVjdENvbXBvc2VyLmNhbWVyYSApO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggRWZmZWN0Q29tcG9zZXIuc2NlbmUsIEVmZmVjdENvbXBvc2VyLmNhbWVyYSwgd3JpdGVCdWZmZXIsIHRoaXMuY2xlYXIgKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cbiAgcmV0dXJuIFNoYWRlclBhc3M7XG5cbn07IiwiLyoqXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICpcbiAqIEZ1bGwtc2NyZWVuIHRleHR1cmVkIHF1YWQgc2hhZGVyXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVuaWZvcm1zOiB7XG4gICAgXCJ0RGlmZnVzZVwiOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxuICAgIFwib3BhY2l0eVwiOiAgeyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9XG4gIH0sXG4gIHZlcnRleFNoYWRlcjogW1xuICAgIFwidmFyeWluZyB2ZWMyIHZVdjtcIixcblxuICAgIFwidm9pZCBtYWluKCkge1wiLFxuXG4gICAgICBcInZVdiA9IHV2O1wiLFxuICAgICAgXCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXG5cbiAgICBcIn1cIlxuICBdLmpvaW4oXCJcXG5cIiksXG4gIGZyYWdtZW50U2hhZGVyOiBbXG4gICAgXCJ1bmlmb3JtIGZsb2F0IG9wYWNpdHk7XCIsXG5cbiAgICBcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxuXG4gICAgXCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxuXG4gICAgXCJ2b2lkIG1haW4oKSB7XCIsXG5cbiAgICAgIFwidmVjNCB0ZXhlbCA9IHRleHR1cmUyRCggdERpZmZ1c2UsIHZVdiApO1wiLFxuICAgICAgXCJnbF9GcmFnQ29sb3IgPSBvcGFjaXR5ICogdGV4ZWw7XCIsXG5cbiAgICBcIn1cIlxuICBdLmpvaW4oXCJcXG5cIilcbn07XG4iLCJ2YXIgY3JlYXRlVHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJylcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG5cbiAgICB2YXIgdHlwZXMgPSBjcmVhdGVUeXBlcyhUSFJFRSkgXG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlKGdsU2hhZGVyLCBvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzfHx7fVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5jb2xvcnMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgb3B0cy5jb2xvcnMgPSBbb3B0cy5jb2xvcnNdXG4gICAgICAgIFxuICAgICAgICB2YXIgdFVuaWZvcm1zID0gdHlwZXMoIGdsU2hhZGVyLnVuaWZvcm1zLCBvcHRzLmNvbG9ycyApXG4gICAgICAgIHZhciB0QXR0cmlicyA9IHR5cGVzKCBnbFNoYWRlci5hdHRyaWJ1dGVzLCBvcHRzLmNvbG9ycyApXG4gICAgICAgICAgICBcbiAgICAgICAgLy9jbGVhciB0aGUgYXR0cmlidXRlIGFycmF5c1xuICAgICAgICBmb3IgKHZhciBrIGluIHRBdHRyaWJzKSB7XG4gICAgICAgICAgICB0QXR0cmlic1trXS52YWx1ZSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBnbFNoYWRlci52ZXJ0ZXgsXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogZ2xTaGFkZXIuZnJhZ21lbnQsXG4gICAgICAgICAgICB1bmlmb3JtczogdFVuaWZvcm1zLFxuICAgICAgICAgICAgYXR0cmlidXRlczogdEF0dHJpYnNcbiAgICAgICAgfVxuICAgIH1cbn0iLCJ2YXIgdHlwZU1hcCA9IHtcbiAgICAnaW50JzogJ2knLFxuICAgICdmbG9hdCc6ICdmJyxcbiAgICAnaXZlYzInOiAnaTInLFxuICAgICdpdmVjMyc6ICdpMycsXG4gICAgJ2l2ZWM0JzogJ2k0JyxcbiAgICAndmVjMic6ICd2MicsXG4gICAgJ3ZlYzMnOiAndjMnLFxuICAgICd2ZWM0JzogJ3Y0JyxcbiAgICAnbWF0NCc6ICdtNCcsXG4gICAgJ21hdDMnOiAnbTMnLFxuICAgICdzYW1wbGVyMkQnOiAndCcsXG4gICAgJ3NhbXBsZXJDdWJlJzogJ3QnXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShUSFJFRSkge1xuICAgIGZ1bmN0aW9uIG5ld0luc3RhbmNlKHR5cGUsIGlzQXJyYXkpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdmbG9hdCc6IFxuICAgICAgICAgICAgY2FzZSAnaW50JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgY2FzZSAndmVjMic6XG4gICAgICAgICAgICBjYXNlICdpdmVjMic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IyKClcbiAgICAgICAgICAgIGNhc2UgJ3ZlYzMnOlxuICAgICAgICAgICAgY2FzZSAnaXZlYzMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMygpXG4gICAgICAgICAgICBjYXNlICd2ZWM0JzpcbiAgICAgICAgICAgIGNhc2UgJ2l2ZWM0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjQoKVxuICAgICAgICAgICAgY2FzZSAnbWF0NCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KClcbiAgICAgICAgICAgIGNhc2UgJ21hdDMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4MygpXG4gICAgICAgICAgICBjYXNlICdzYW1wbGVyQ3ViZSc6XG4gICAgICAgICAgICBjYXNlICdzYW1wbGVyMkQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuVGV4dHVyZSgpXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZSh0eXBlLCBpc0FycmF5LCBhcnJheUxlbikge1xuICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgLy9UaHJlZUpTIGZsYXR0ZW5zIGl2ZWMzIHR5cGVcbiAgICAgICAgICAgIC8vKHdlIGRvbid0IHN1cHBvcnQgJ2Z2JyB0eXBlKVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpdmVjMycpXG4gICAgICAgICAgICAgICAgYXJyYXlMZW4gKj0gM1xuICAgICAgICAgICAgdmFyIGFyID0gbmV3IEFycmF5KGFycmF5TGVuKVxuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPGFyLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGFyW2ldID0gbmV3SW5zdGFuY2UodHlwZSwgaXNBcnJheSlcbiAgICAgICAgICAgIHJldHVybiBhclxuICAgICAgICB9ICBcbiAgICAgICAgcmV0dXJuIG5ld0luc3RhbmNlKHR5cGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VHlwZSh0eXBlLCBpc0FycmF5KSB7XG4gICAgICAgIGlmICghaXNBcnJheSlcbiAgICAgICAgICAgIHJldHVybiB0eXBlTWFwW3R5cGVdXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdpbnQnKVxuICAgICAgICAgICAgcmV0dXJuICdpdjEnXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdmbG9hdCcpXG4gICAgICAgICAgICByZXR1cm4gJ2Z2MSdcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHR5cGVNYXBbdHlwZV0rJ3YnXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHNldHVwVW5pZm9ybXMoZ2xVbmlmb3JtcywgY29sb3JOYW1lcykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29sb3JOYW1lcykpXG4gICAgICAgICAgICBjb2xvck5hbWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgICAgIHZhciByZXN1bHQgPSB7fVxuICAgICAgICB2YXIgYXJyYXlzID0ge31cblxuICAgICAgICAvL21hcCB1bmlmb3JtIHR5cGVzXG4gICAgICAgIGdsVW5pZm9ybXMuZm9yRWFjaChmdW5jdGlvbih1bmlmb3JtKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHVuaWZvcm0ubmFtZVxuICAgICAgICAgICAgdmFyIGlzQXJyYXkgPSAvKC4rKVxcW1swLTldK1xcXS8uZXhlYyhuYW1lKVxuXG4gICAgICAgICAgICAvL3NwZWNpYWwgY2FzZTogY29sb3JzLi4uXG4gICAgICAgICAgICBpZiAoY29sb3JOYW1lcyAmJiBjb2xvck5hbWVzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImFycmF5IG9mIGNvbG9yIHVuaWZvcm1zIG5vdCBzdXBwb3J0ZWRcIilcbiAgICAgICAgICAgICAgICBpZiAodW5pZm9ybS50eXBlICE9PSAndmVjMycpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRocmVlSlMgZXhwZWN0cyB2ZWMzIGZvciBDb2xvciB1bmlmb3Jtc1wiKSBcbiAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBpc0FycmF5WzFdXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgaW4gYXJyYXlzKSBcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlzW25hbWVdLmNvdW50KysgXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBhcnJheXNbbmFtZV0gPSB7IGNvdW50OiAxLCB0eXBlOiB1bmlmb3JtLnR5cGUgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0W25hbWVdID0geyBcbiAgICAgICAgICAgICAgICB0eXBlOiBnZXRUeXBlKHVuaWZvcm0udHlwZSwgaXNBcnJheSksIFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpc0FycmF5ID8gbnVsbCA6IGRlZmF1bHRWYWx1ZSh1bmlmb3JtLnR5cGUpIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vbm93IGNsZWFuIHVwIGFueSBhcnJheSB2YWx1ZXNcbiAgICAgICAgZm9yICh2YXIgayBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciB1ID0gcmVzdWx0W2tdXG4gICAgICAgICAgICBpZiAoayBpbiBhcnJheXMpIHsgLy9pcyBhbiBhcnJheVxuICAgICAgICAgICAgICAgIHZhciBhID0gYXJyYXlzW2tdXG4gICAgICAgICAgICAgICAgdS52YWx1ZSA9IGRlZmF1bHRWYWx1ZShhLnR5cGUsIHRydWUsIGEuY291bnQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUiLCJ2YXIgZ2xzbGlmeSA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xudmFyIHRocmVlaWZ5ID0gcmVxdWlyZShcInRocmVlLWdsc2xpZnlcIik7XG52YXIgc291cmNlID0gcmVxdWlyZShcImdsc2xpZnkvc2ltcGxlLWFkYXB0ZXIuanNcIikoXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxudmFyeWluZyB2ZWMyIHZfcmdiTlc7XFxudmFyeWluZyB2ZWMyIHZfcmdiTkU7XFxudmFyeWluZyB2ZWMyIHZfcmdiU1c7XFxudmFyeWluZyB2ZWMyIHZfcmdiU0U7XFxudmFyeWluZyB2ZWMyIHZfcmdiTTtcXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG52b2lkIGFfeF90ZXhjb29yZHModmVjMiBmcmFnQ29vcmQsIHZlYzIgcmVzb2x1dGlvbiwgb3V0IHZlYzIgdl9yZ2JOVywgb3V0IHZlYzIgdl9yZ2JORSwgb3V0IHZlYzIgdl9yZ2JTVywgb3V0IHZlYzIgdl9yZ2JTRSwgb3V0IHZlYzIgdl9yZ2JNKSB7XFxuICB2ZWMyIGludmVyc2VWUCA9IDEuMCAvIHJlc29sdXRpb24ueHk7XFxuICB2X3JnYk5XID0gKGZyYWdDb29yZCArIHZlYzIoLTEuMCwgLTEuMCkpICogaW52ZXJzZVZQO1xcbiAgdl9yZ2JORSA9IChmcmFnQ29vcmQgKyB2ZWMyKDEuMCwgLTEuMCkpICogaW52ZXJzZVZQO1xcbiAgdl9yZ2JTVyA9IChmcmFnQ29vcmQgKyB2ZWMyKC0xLjAsIDEuMCkpICogaW52ZXJzZVZQO1xcbiAgdl9yZ2JTRSA9IChmcmFnQ29vcmQgKyB2ZWMyKDEuMCwgMS4wKSkgKiBpbnZlcnNlVlA7XFxuICB2X3JnYk0gPSB2ZWMyKGZyYWdDb29yZCAqIGludmVyc2VWUCk7XFxufVxcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgdmVjMiBmcmFnQ29vcmQgPSB1diAqIHJlc29sdXRpb247XFxuICBhX3hfdGV4Y29vcmRzKGZyYWdDb29yZCwgcmVzb2x1dGlvbiwgdl9yZ2JOVywgdl9yZ2JORSwgdl9yZ2JTVywgdl9yZ2JTRSwgdl9yZ2JNKTtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiLCBcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JOVztcXG52YXJ5aW5nIHZlYzIgdl9yZ2JORTtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JTVztcXG52YXJ5aW5nIHZlYzIgdl9yZ2JTRTtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JNO1xcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcbiNpZm5kZWYgRlhBQV9SRURVQ0VfTUlOXFxuXFxuI2RlZmluZSBGWEFBX1JFRFVDRV9NSU4gICAoMS4wLyAxMjguMClcXG5cXG4jZW5kaWZcXG5cXG4jaWZuZGVmIEZYQUFfUkVEVUNFX01VTFxcblxcbiNkZWZpbmUgRlhBQV9SRURVQ0VfTVVMICAgKDEuMCAvIDguMClcXG5cXG4jZW5kaWZcXG5cXG4jaWZuZGVmIEZYQUFfU1BBTl9NQVhcXG5cXG4jZGVmaW5lIEZYQUFfU1BBTl9NQVggICAgIDguMFxcblxcbiNlbmRpZlxcblxcbnZlYzQgYV94X2Z4YWEoc2FtcGxlcjJEIHRleCwgdmVjMiBmcmFnQ29vcmQsIHZlYzIgcmVzb2x1dGlvbiwgdmVjMiB2X3JnYk5XLCB2ZWMyIHZfcmdiTkUsIHZlYzIgdl9yZ2JTVywgdmVjMiB2X3JnYlNFLCB2ZWMyIHZfcmdiTSkge1xcbiAgdmVjNCBjb2xvcjtcXG4gIG1lZGl1bXAgdmVjMiBpbnZlcnNlVlAgPSB2ZWMyKDEuMCAvIHJlc29sdXRpb24ueCwgMS4wIC8gcmVzb2x1dGlvbi55KTtcXG4gIHZlYzMgcmdiTlcgPSB0ZXh0dXJlMkQodGV4LCB2X3JnYk5XKS54eXo7XFxuICB2ZWMzIHJnYk5FID0gdGV4dHVyZTJEKHRleCwgdl9yZ2JORSkueHl6O1xcbiAgdmVjMyByZ2JTVyA9IHRleHR1cmUyRCh0ZXgsIHZfcmdiU1cpLnh5ejtcXG4gIHZlYzMgcmdiU0UgPSB0ZXh0dXJlMkQodGV4LCB2X3JnYlNFKS54eXo7XFxuICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHRleCwgdl9yZ2JNKTtcXG4gIHZlYzMgcmdiTSA9IHRleENvbG9yLnh5ejtcXG4gIHZlYzMgbHVtYSA9IHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCk7XFxuICBmbG9hdCBsdW1hTlcgPSBkb3QocmdiTlcsIGx1bWEpO1xcbiAgZmxvYXQgbHVtYU5FID0gZG90KHJnYk5FLCBsdW1hKTtcXG4gIGZsb2F0IGx1bWFTVyA9IGRvdChyZ2JTVywgbHVtYSk7XFxuICBmbG9hdCBsdW1hU0UgPSBkb3QocmdiU0UsIGx1bWEpO1xcbiAgZmxvYXQgbHVtYU0gPSBkb3QocmdiTSwgbHVtYSk7XFxuICBmbG9hdCBsdW1hTWluID0gbWluKGx1bWFNLCBtaW4obWluKGx1bWFOVywgbHVtYU5FKSwgbWluKGx1bWFTVywgbHVtYVNFKSkpO1xcbiAgZmxvYXQgbHVtYU1heCA9IG1heChsdW1hTSwgbWF4KG1heChsdW1hTlcsIGx1bWFORSksIG1heChsdW1hU1csIGx1bWFTRSkpKTtcXG4gIG1lZGl1bXAgdmVjMiBkaXI7XFxuICBkaXIueCA9IC0oKGx1bWFOVyArIGx1bWFORSkgLSAobHVtYVNXICsgbHVtYVNFKSk7XFxuICBkaXIueSA9ICgobHVtYU5XICsgbHVtYVNXKSAtIChsdW1hTkUgKyBsdW1hU0UpKTtcXG4gIGZsb2F0IGRpclJlZHVjZSA9IG1heCgobHVtYU5XICsgbHVtYU5FICsgbHVtYVNXICsgbHVtYVNFKSAqICgwLjI1ICogRlhBQV9SRURVQ0VfTVVMKSwgRlhBQV9SRURVQ0VfTUlOKTtcXG4gIGZsb2F0IHJjcERpck1pbiA9IDEuMCAvIChtaW4oYWJzKGRpci54KSwgYWJzKGRpci55KSkgKyBkaXJSZWR1Y2UpO1xcbiAgZGlyID0gbWluKHZlYzIoRlhBQV9TUEFOX01BWCwgRlhBQV9TUEFOX01BWCksIG1heCh2ZWMyKC1GWEFBX1NQQU5fTUFYLCAtRlhBQV9TUEFOX01BWCksIGRpciAqIHJjcERpck1pbikpICogaW52ZXJzZVZQO1xcbiAgdmVjMyByZ2JBID0gMC41ICogKHRleHR1cmUyRCh0ZXgsIGZyYWdDb29yZCAqIGludmVyc2VWUCArIGRpciAqICgxLjAgLyAzLjAgLSAwLjUpKS54eXogKyB0ZXh0dXJlMkQodGV4LCBmcmFnQ29vcmQgKiBpbnZlcnNlVlAgKyBkaXIgKiAoMi4wIC8gMy4wIC0gMC41KSkueHl6KTtcXG4gIHZlYzMgcmdiQiA9IHJnYkEgKiAwLjUgKyAwLjI1ICogKHRleHR1cmUyRCh0ZXgsIGZyYWdDb29yZCAqIGludmVyc2VWUCArIGRpciAqIC0wLjUpLnh5eiArIHRleHR1cmUyRCh0ZXgsIGZyYWdDb29yZCAqIGludmVyc2VWUCArIGRpciAqIDAuNSkueHl6KTtcXG4gIGZsb2F0IGx1bWFCID0gZG90KHJnYkIsIGx1bWEpO1xcbiAgaWYoKGx1bWFCIDwgbHVtYU1pbikgfHwgKGx1bWFCID4gbHVtYU1heCkpXFxuICAgIGNvbG9yID0gdmVjNChyZ2JBLCB0ZXhDb2xvci5hKTtcXG4gIGVsc2VcXG4gICAgY29sb3IgPSB2ZWM0KHJnYkIsIHRleENvbG9yLmEpO1xcbiAgcmV0dXJuIGNvbG9yO1xcbn1cXG52b2lkIG1haW4oKSB7XFxuICB2ZWMyIGZyYWdDb29yZCA9IHZVdiAqIHJlc29sdXRpb247XFxuICBnbF9GcmFnQ29sb3IgPSBhX3hfZnhhYSh0RGlmZnVzZSwgZnJhZ0Nvb3JkLCByZXNvbHV0aW9uLCB2X3JnYk5XLCB2X3JnYk5FLCB2X3JnYlNXLCB2X3JnYlNFLCB2X3JnYk0pO1xcbn1cIiwgW3tcIm5hbWVcIjpcInJlc29sdXRpb25cIixcInR5cGVcIjpcInZlYzJcIn0se1wibmFtZVwiOlwicmVzb2x1dGlvblwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJ0RGlmZnVzZVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9XSwgW10pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gICAgdmFyIGNyZWF0ZVNoYWRlciA9IHRocmVlaWZ5KFRIUkVFKTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVNoYWRlcihzb3VyY2UpO1xuICAgIH07XG59OyIsIm1vZHVsZS5leHBvcnRzPXJlcXVpcmUoXCIvcHJvamVjdHMvYmxhY2tpY2Uvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZXMvbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qc1wiKSJdfQ==
