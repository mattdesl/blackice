var THREE = require('three')
var EffectComposer = require('three-effectcomposer')(THREE)
var inherits = require('inherits')
var Base = EffectComposer.RenderPass

var number = require('as-number')
var TextElement = require('three-sdf-text')(THREE)
var xtend = require('xtend')
var UNIT_SCALE = 0.1
var SCALE = [UNIT_SCALE, UNIT_SCALE, UNIT_SCALE]

var mat4 = {
    scale: require('gl-mat4/scale'),
    identity: require('gl-mat4/identity'),
    multiply: require('gl-mat4/multiply'),
    translate: require('gl-mat4/translate')
}
var setVec3 = require('gl-vec3/set')
var tmpVec3 = [0, 0, 0]

function TextPass(opt) {
    if (!(this instanceof TextPass)) return new TextPass(opt)
    opt = opt||{}
    var renderer = opt.renderer
    var camera = opt.camera
    var scene = opt.scene
    Base.call(this, scene, camera)

    var font = opt.font
    this.elements = (opt.elements||[]).map(function(e) {
        var textOpt = xtend(e, { font: font, textures: font.textures })
        var textEl = TextElement(renderer, textOpt)
        return {
            object3d: e.object3d,
            text: textEl,
            size: number(e.size, 1),
            translation: e.translation || [0,0,0]
        }
    })

    window.elements = this.elements
}

inherits(TextPass, Base)

TextPass.prototype.render = function( renderer, writeBuffer, readBuffer, delta ) {
    Base.prototype.render.call(this, renderer, writeBuffer, readBuffer, delta)

    this.elements.forEach(function(e) {
        e.object3d.updateMatrixWorld(true)
        
        var transform = e.text.transform

        mat4.identity(transform);
        mat4.scale(transform, transform, SCALE);

        setVec3(tmpVec3, e.translation[0], e.translation[1], e.translation[2]);

        mat4.translate(transform, transform, tmpVec3);

        setVec3(tmpVec3, e.size, e.size, e.size);
        mat4.scale(transform, transform, tmpVec3);

        e.text.draw(this.camera, e.object3d)
    }, this)

    renderer.resetGLState()
    renderer.resetAttributes()

    // if (this.text && this.features) {
    //     this.text.begin()
    //     this.features.forEach(function(spot) {
    //         this.text.fade = spot.fade
    //         this.text.draw(this.camera, spot)
    //     }, this)
    //     this.text.end()

        
    // }
}

module.exports = TextPass