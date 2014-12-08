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
    var points = [ new THREE.Vector3(15, 10, 2) ]

    return points.map(function(v, i) {
        var dir = v.clone().sub(new THREE.Vector3(0,v.y,0)).normalize()
        var object = new THREE.Object3D()
        parent.add(object)
        object.visible = false

        object.position.copy(v)

        object.rotation.x = 0

        var dx = v.x,
            dz = v.z,
            theta = -Math.atan2(dz, dx) 
        object.rotation.y = theta

        var ret = {
            direction: dir,
            origin: v,
            fade: 0.0,
            animating: false,
            opacity: 1.0,
            _showing: false,
            theta: theta + Math.PI/2,
            object: object,
            index: i
        }

        Object.defineProperty(ret, "showing", {
            set: function(s) {
                this._showing = s
                this.object.visible = s
            },
            get: function() {
                return this._showing
            }
        })

        return ret
    })
}