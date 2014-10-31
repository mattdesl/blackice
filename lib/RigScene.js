var THREE = require('three')
var inherits = require('inherits')
var mixes = require('mixes')
var Base = THREE.Scene

function RigScene(opt) {
    if (!(this instanceof RigScene))
        return new RigScene(opt)
    Base.call(this)
    this.fog = new THREE.FogExp2( 0x0b0516, 0.00015 );


    var box = new THREE.Mesh(
        new THREE.BoxGeometry(20, 20, 10),
        new THREE.MeshBasicMaterial({ color: 0xaaaaaa, wireframe: false })
    )

    this.add(box)


}

inherits(RigScene, Base)

mixes(RigScene, {

})

module.exports = RigScene