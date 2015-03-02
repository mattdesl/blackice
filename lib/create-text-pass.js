var TextPass = require('./TextPass')
var THREE = require('three')
var xtend = require('xtend')
// var getSVG = require('./get-svg')
// var getPoly = require('./get-polygon')
var Complex = require('three-simplicial-complex')(THREE)
var mobile = require('./is-mobile')

var UNIT_SCALE = 0.1

var data = require('./text-data')

module.exports = function(opt) {
    var groups = createGroups()
    
    groups.forEach(function(group) {
        // var len = 100
        // var dir = new THREE.Vector3(Math.cos(group.theta), 0, Math.sin(group.theta))
        // var arrow = new THREE.ArrowHelper(dir, new THREE.Vector3(), len)
        // opt.scene.add(arrow)

        group.panels.forEach(function(panel) {
            opt.scene.add(panel.container)
        })
    })

    return TextPass(xtend(opt, {
        groups: groups
    }))
}

function createGroups() {
    return data.map(function(group, i, list) {
        var theta = i/(list.length+1) * Math.PI * 2
        group = xtend(group, {
            panels: group.panels.map(function(panel, index) {
                return createPanel(panel, index, theta)
            }),
            theta: theta
        })
        return group
    })
}

function createPanel(data, index, rotation) {
    var container = new THREE.Object3D()
    var mirror = index === 1

    var radius = mobile ? 18 : 20
    if (mirror) {
        rotation += Math.PI*2
        radius *= -1
    }

    //make text perpendicular to theta rotation
    // rotation -= Math.PI/2 

    container.position.set(
        Math.cos(rotation) * radius,
        15,
        Math.sin(rotation) * radius
    )
    

    // container.position.copy(data.origin)

    var pos = container.position
    var dir = pos.clone().sub(new THREE.Vector3(0,pos.y,0)).normalize()

    var rotOff = 0//Math.PI/10 * (mirror ? -1 : 1)

    var dx = pos.x,
        dz = pos.z,
        theta = -Math.atan2(dz, dx) - rotOff
    // container.rotation.y = theta
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
            // theta: theta
        })
    })

    var shapes = []
    // var shapes = (data.shapes||[]).map(function(shape) {
    //     var complex = shape.path ? getSVG(shape.path) : getPoly(shape.points)
    //     var geo = Complex(complex)
    //     var mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ 
    //         color: 0xffffff,
    //         side: THREE.DoubleSide,
    //         opacity: 1,
    //         transparent: true
    //     }))
        
    //     if (shape.position) mesh.position.fromArray(shape.position)
    //     if (shape.scale) mesh.scale.fromArray(shape.scale)

    //     container.add(mesh)
    //     return mesh
    // })

    return {
        labels: labels,
        shapes: shapes,
        container: container
    }
}