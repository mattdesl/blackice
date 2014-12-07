var THREE = require('three')
var inherits = require('inherits')
var mixes = require('mixes')
var Base = THREE.Scene

var YOFF = 2.5

function RigScene(opt) {
    if (!(this instanceof RigScene))
        return new RigScene(opt)
    Base.call(this)
    this.fog = new THREE.FogExp2( 0x0b0516, 0.00015 );


    // var box = new THREE.Mesh(
    //     new THREE.BoxGeometry(20, 20, 10),
    //     new THREE.MeshBasicMaterial({ color: 0xaaaaaa, wireframe: false })
    // )

    // this.add(box)


    this.time = 0
    this.cubeMap = null
    this.updateMaterial()

    var loader = new THREE.OBJMTLLoader()
    console.profile("loader")
    loader.load('model/Prirazlomnaya.obj', 'model/Prirazlomnaya.mtl', function(object, materials) {
        var s = 0.3
        console.log(object, materials)
        object.scale.set(s,s,s)
        object.position.y -= YOFF
        this.mesh = object
        
        console.profileEnd("loader")


        this.mesh.traverse(function(obj) {
            if (obj instanceof THREE.Mesh) {
                obj.castShadow = true
                obj.receiveShadow = true
            }
        })

        this.add(object)
    }.bind(this))
    

    // var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
    // var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    // var torusKnot = new THREE.Mesh( geometry, material );
    // this.add( torusKnot );
    // torusKnot.castShadow = true
    // torusKnot.receiveShadow = true

    this.lights = [
        [ new THREE.Vector3(-10, 20, -20), 1 ],
        [ new THREE.Vector3(15, 10, 15), 0.5 ]
    ].map(function(args, i) {
        var light = new THREE.DirectionalLight( 0xddf4fd, args[1] )
        light.position.copy(args[0])
        light.castShadow = true
        light.shadowMapWidth = 1024
        light.shadowMapHeight = 1024
        light.shadowCameraNear = 1
        light.shadowCameraFar = 100

        // light.helper = new THREE.DirectionalLightHelper(light, 4)
        // this.add(light.helper)
        this.add(light)
        return light
    },this)
}

inherits(RigScene, Base)

mixes(RigScene, {

    updateMaterial: function() {
        this.material = new THREE.MeshLambertMaterial({
            color: 0xaaaaaa,
            reflectivity: 0.4,
            envMap: this.cubeMap
        })

    },

    update: function(dt) {
        this.time += Math.min(dt, 30)/1000
        var m = this.mesh
        if (!m)
            return
        var anim = Math.sin(this.time)

        // this.lights.forEach(function(light) { light.helper.update() })
        // m.position.y = YOFF + anim*0.2
        // m.position.x = Math.sin(this.time*0.1)*0.05
        // m.position.z = Math.sin(this.time*0.2)*0.1
        // m.rotation.x = anim*0.03
        // m.rotation.y = Math.sin(this.time*Math.cos(this.time*0.1))*0.005
    }
})

module.exports = RigScene