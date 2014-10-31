var THREE = require('three')
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
        this.composer.setSize(width, height)
        this.shaders.forEach(function(pass) {
            var dpr = 1//window.devicePixelRatio||1
            if (pass.uniforms.resolution)
                pass.uniforms.resolution.value.set(width*dpr, height*dpr)
        })
    }
})