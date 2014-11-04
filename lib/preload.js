var Promise = require('bluebird')
var img = Promise.promisify(require('img'))
var path = require('path')
var createTexture = require('gl-texture2d')

var noop = function() {}

function texAsync(gl, file, options) {
    return img(file, options).then(function(i) {
        return createTexture(gl, i)
    })
}

module.exports = function(gl, paths, options) {
    options = options||{}

    var progress = options.progress||noop
    var count = 0
    
    function handler(total, tex) {
        progress(++count / total)
        return tex
    }
    
    return Promise.map(paths, function(file, index, total) {
        return texAsync(gl, file, options)
            .then(handler.bind(null, total))
    }, options)
}