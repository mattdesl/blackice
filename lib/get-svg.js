var parse = require('parse-svg-path')
var contours = require('svg-path-contours')
var simplify = require('simplify-path')
var triangulate = require('triangulate-contours')
var normalize = require('normalize-path-scale')

module.exports = function(contents) {
    var parsed = parse(contents)
    console.log(parsed, contents)
    //get a list of polylines/contours from svg contents
    var lines = contours(parsed)

    //simplify the contours before triangulation
    // lines = lines.map(function(path) {
    //     return simplify(path, threshold)
    // })
    
    //turns into triangles, returns { positions, cells }
    var shape = triangulate(lines)

    //normalize(shape.positions)

    shape.positions = shape.positions.map(function(p) {
        return [p[0], p[1], 0]
    })
    return shape
}