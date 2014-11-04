// var Font = require('bmfont-lato')
var createText = require('gl-sprite-text')
var mat4 = require('gl-mat4')
var Renderer = require('gl-sprites')

var defaultShader = require('gl-basic-shader')
var modelTransform = mat4.create()
var sprite = {
    texture: null,
    position: [0, 0],
    shape: [0, 0],
    color: [1,0,0,0.5],
    texcoord: [0,0,1,1]
}
var off = { x:0, y:0, width:0, height:0 }
var WHITE = [1,1,1,1]
var BORDER = [0.5, 0.5, 0.5, 1.0]
var BGFILL = [0.1,0.1,0.1,0.99]
var SDF_PADDING = -4

var tmpVec = new THREE.Vector3()

var glslify = require('glslify')
var sdfShader = glslify({
    vertex: './shaders/sdf.vert',
    fragment: './shaders/sdf.frag'
})

function TextRenderer(gl, opt) {
    if (!(this instanceof TextRenderer))
        return new TextRenderer(gl, opt)
    opt=opt||{}

    this.gl = gl
    this.sprites = Renderer(gl, {
        capacity: 10
    })

    this.shader = sdfShader(gl)
    this.element = createText(gl, {
        font: opt.font,
        text: 'lorem ipsum dolor sit amit',
        textures: opt.textures
    })
    this.projection = mat4.create()
    this.scale = mat4.create()

    var s = 0.05
    mat4.scale(this.scale, this.scale, [s, -s, s])
}

var time = 0

TextRenderer.prototype.begin = function() {
    var gl = this.gl

    // gl.clear(gl.DEPTH_BUFFER_BIT)

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    // gl.bindFramebuffer(gl.FRAMEBUFFER, null)

    gl.enable(gl.DEPTH_TEST)
    gl.depthFunc(gl.LEQUAL)

    gl.frontFace( gl.CCW )    
    gl.disable(gl.CULL_FACE)
    gl.cullFace( gl.FRONT )
    gl.colorMask(true, true, true, true)
    gl.disable(gl.STENCIL_TEST)
    gl.activeTexture(gl.TEXTURE0)
    gl.depthMask(true)

    this.shader.bind()

    for (var i=this.element.textures.length-1; i>=0; i--) {
        this.shader.uniforms['texture'+i] = i
        this.element.textures[i].bind(i)
    }

    // gl.blendEquationSeparate(gl.GL_FUNC_ADD, gl.GL_FUNC_ADD)
    
    // var tex = this.element.textures[0]
    // tex.bind()
    // tex.minFilter = tex.magFilter = gl.LINEAR
}

TextRenderer.prototype.end = function() {
    var gl = this.gl
    
    // gl.enable(gl.BLEND)
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    // gl.enable(gl.DEPTH_TEST)
    // gl.depthFunc(gl.LEQUAL)

    // gl.frontFace( gl.CCW );
    gl.enable(gl.CULL_FACE)
    gl.cullFace( gl.BACK )
}

TextRenderer.prototype.draw = function(camera, text, object3d) {
    var gl = this.gl

    this.element.textures[0].bind(0)


    // gl.colorMask(true, true, true, true)

    // gl.cullFace(gl.FRONT)

    mat4.multiply(modelTransform, object3d.matrix.elements, this.scale)


    //setup transformation for this element
    this.sprites.projection = camera.projectionMatrix.elements
    this.sprites.view = camera.matrixWorldInverse.elements
    this.sprites.model = modelTransform

    this.element.text = text
    this.element.clearLayout()

    var b = this.element.getBounds(undefined, off)
    var pad = [8, 4]

    var border = 1
    this.sprites.begin()
    this.sprites.updateMatrices()

    this.sprites.color = BGFILL
    // this.sprites.fillRect(border-pad[0], 
    //         -b.height+border-pad[1], 
    //         b.width-border*2+pad[0]+pad[1], 
    //         b.height-border*2+pad[0]+pad[1])

    this.sprites.color = BORDER
    // this.sprites.strokeRect(-pad[0],
    //         -b.height-pad[1], 
    //         b.width+pad[0]+pad[1], 
    //         b.height+pad[0]+pad[1], 
    //         border)
    this.sprites.end()

    //avoid z-fighting with SDF text
    mat4.translate(modelTransform, modelTransform, [0, 0, 0.1])
    this.shader.bind()
    this.shader.uniforms.projection = camera.projectionMatrix.elements
    this.shader.uniforms.view = camera.matrixWorldInverse.elements
    this.shader.uniforms.model = modelTransform
    
    // gl.disable(gl.DEPTH_TEST)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    this.element.batch.color = WHITE

    this.element.draw(this.shader, SDF_PADDING, SDF_PADDING)
}


module.exports = TextRenderer