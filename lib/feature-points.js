var THREE = require('three')
var number = require('as-number')    

var lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel eleifend massa, laoreet efficitur dui. Sed euismod velit id leo euismod rutrum. Cras fringilla vehicula dolor vel congue. Cras congue sed nulla nec faucibus. Sed lacinia tellus non quam tempus iaculis. Maecenas scelerisque mi vel erat scelerisque mollis. Phasellus pulvinar malesuada risus. Nam nec lacus luctus, ultrices lacus non, ornare purus. Aliquam purus elit, mattis a est quis, mollis interdum mauris. Donec ex lectus, vehicula nec orci lobortis, semper aliquam nisi. Mauris tincidunt lorem et commodo fringilla.'
lipsum = lipsum.split('.').map(function(s) {
    return s.substring(0, Math.min(30, s.length))
}).filter(function(s) {
    return s.trim().length>1
})

module.exports = function(parent, n) {
    n = number(n, 10)
    var points = []
    for (var i=0; i<n; i++) {
        
        var r = Math.random() * 2.0 * Math.PI
        var z = (Math.random() * 2.0) - 1.0
        var scale = 15
        var zScale = Math.sqrt(1.0-z*z) * scale
        // var h = 2, l = 1.5
        // var zScale = lerp(l, h, Math.random())

        points.push(new THREE.Vector3(
            Math.cos(r)*zScale,
            Math.sin(r)*zScale + scale,
            z * scale
        ))
    }

    return points.map(function(v, i) {
        var dir = v.clone().sub(new THREE.Vector3(0,v.y,0)).normalize()
        var object = new THREE.Object3D()
        // var object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({color:0xff0000}))
        parent.add(object)
        object.visible = false

        object.position.copy(v)

        object.rotation.x = 0

        var dx = v.x,
            dz = v.z
        object.rotation.y = -Math.atan2(dz, dx)

        return {
            direction: dir,
            origin: v,
            fade: 0.0,
            object: object,
            text: lipsum[ i % lipsum.length ]
        }
    })
}