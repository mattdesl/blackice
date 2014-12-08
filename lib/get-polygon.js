var triangulate = require('triangulate-contours')
var normalize = require('normalize-path-scale')

module.exports = function(points) {
    points = points.split(' ').map(function(p) {
        return p.split(',').map(function(n) {
            return parseFloat(n, 10)
        })
    })

    points = normalize(points)

    var triangulated = triangulate([ points ])
    triangulated.positions = triangulated.positions.map(function(p) {
        return [p[0], p[1], 0]
    })
    return triangulated
}