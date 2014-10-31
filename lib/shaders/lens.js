var glslify = require('glslify')
 
//inline our shader code
var source = glslify({
    vertex: './pass.vert',
    fragment: './lens.frag',
    sourceOnly: true
})
 
module.exports = require('./create')(source)