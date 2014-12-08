var TextPass = require('./TextPass')
var THREE = require('three')
var xtend = require('xtend')
var getSVG = require('./get-svg')
var getPoly = require('./get-polygon')
var Complex = require('three-simplicial-complex')(THREE)

var UNIT_SCALE = 0.1

var data = require('./text-data')

module.exports = function(opt) {
    var elements = createElements()

    elements.forEach(function(e) {
        opt.scene.add(e.container)
    })

    var textElements = elements.map(function(e) {
        return e.labels
    }).reduce(function(a, b) {
        return a.concat(b)
    }, [])

    return TextPass(xtend(opt, {
        elements: textElements
    }))
}

function createElements() {
    return data.map(createPanel)   
}

function createPanel(data) {
    var container = new THREE.Object3D()
    container.position.copy(data.origin)

    var pos = container.position
    var dir = pos.clone().sub(new THREE.Vector3(0,pos.y,0)).normalize()

    var dx = pos.x,
        dz = pos.z,
        theta = -Math.atan2(dz, dx) 
    container.rotation.y = theta
    container.rotation.x = 0
    if (data.mirror) {
        container.scale.x *= -1
    }

    var labels = data.labels.map(function(label) {
        var obj = new THREE.Object3D()
        container.add(obj)
        if (data.mirror)
            obj.position.x = -data.width||0
        return xtend(label, { object3d: obj })
    })

    ;(data.shapes||[]).forEach(function(shape) {
        var complex = shape.path ? getSVG(shape.path) : getPoly(shape.points)
        var geo = Complex(complex)
        var mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ 
            color: 0xffffff,
            side: THREE.DoubleSide
        }))

        if (shape.position) mesh.position.fromArray(shape.position)
        if (shape.scale) mesh.scale.fromArray(shape.scale)

        container.add(mesh)
    })

    return {
        labels: labels,
        container: container
    }
}