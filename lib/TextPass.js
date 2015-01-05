var THREE = require('three')
var EffectComposer = require('three-effectcomposer')(THREE)
var inherits = require('inherits')
var Base = EffectComposer.RenderPass

var plucker = require('plucker')
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

var pluckPanels = plucker('panels')

function TextPass(opt) {
    if (!(this instanceof TextPass)) return new TextPass(opt)
    opt = opt||{}
    var renderer = opt.renderer
    var camera = opt.camera
    var scene = opt.scene
    Base.call(this, scene, camera)

    var font = opt.font

    this.groups = (opt.groups||[]).map(createGroups(renderer, font))
    console.log(this.groups)
    // renderGroups(this.groups)
}

function createGroups(renderer, font) {
    return function(group, groupIndex) {
        //each group contains two panels
        //each panel contains some labels
        //so we flatten them all into an elements array
        group.elements = group.panels.map(function(panel, index) {
            var side = index === 0 ? 1 : -1 //left or right
            return panel.labels.map(function(label) {
                return createElement(label, side, renderer, font)
            })
        }).reduce(function (prev, b) {
            return prev.concat(b)
        }, [])

        group._opacity = 1
        Object.defineProperty(group, 'opacity', {

            get: function() {
                return group._opacity
            },
            set: function(val) {
                group._opacity = val
                group.elements.forEach(function(e) {
                    e.text.opacity = val
                })
            }
        })

        return group
    }
}

function createElement(label, side, renderer, font) {
    var textOpt = xtend(label, { font: font, textures: font.textures })
    var textEl = TextElement(renderer, textOpt)
    return xtend(label, { text: textEl, side: side  })
}

function renderElement(camera, e) {
    e.object3d.updateMatrixWorld(true)
    
    var transform = e.text.transform
    
    mat4.identity(transform)
    mat4.scale(transform, transform, SCALE)

    setVec3(tmpVec3, e.translation[0], e.translation[1], e.translation[2])

    mat4.translate(transform, transform, tmpVec3)

    setVec3(tmpVec3, e.size, e.size, e.size)
    mat4.scale(transform, transform, tmpVec3)

    e.text.draw(camera, e.object3d)
}

inherits(TextPass, Base)

TextPass.prototype.render = function( renderer, writeBuffer, readBuffer, delta ) {
    Base.prototype.render.call(this, renderer, writeBuffer, readBuffer, delta)

    var camera = this.camera
    this.groups.forEach(function(g) {
        g.elements.forEach(function(e) {
            renderElement(camera, e)
        })
    })

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