var TextPass = require('./TextPass')
var THREE = require('three')
var xtend = require('xtend')
var getSVG = require('./get-svg')
var getPoly = require('./get-polygon')
var Complex = require('three-simplicial-complex')(THREE)

var UNIT_SCALE = 0.1

var data = require('./text-data')

module.exports = function(opt) {
    var groups = createGroups()
    
    return TextPass(xtend(opt, {
        groups: groups
    }))
}

function createGroups() {
    return data.map(function(group) {
        return xtend(group, {
            panels: group.panels.map(createPanel)
        })
    })
    // return data.map(createPanel)   
}

function createPanel(data, index) {
    var container = new THREE.Object3D()
    container.position.copy(data.origin)

    var mirror = index === 1
    var pos = container.position
    var dir = pos.clone().sub(new THREE.Vector3(0,pos.y,0)).normalize()


    var dx = pos.x,
        dz = pos.z,
        theta = -Math.atan2(dz, dx) 
    container.rotation.y = theta
    container.rotation.x = 0
    if (mirror) {
        container.scale.x *= -1
    }

    var labels = data.labels.map(function(label) {
        var obj = new THREE.Object3D()
        container.add(obj)
        if (mirror)
            obj.position.x = -data.width||0
        return xtend({ size: 1, translation: [0, 0, 0] }, label, { 
            object3d: obj, 
            theta: theta
        })
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