var THREE = require('three')
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