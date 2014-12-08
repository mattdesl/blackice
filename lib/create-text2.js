var THREE = require('three')
var number = require('as-number')    
var xtend = require('xtend')

var TextElement = require('three-sdf-text')

module.exports = function(renderer, font, scene) {
    scene.add(
        create(Text(renderer, font), {
            origin: new THREE.Vector3(15, 10, 2),
            elements: [
                { text: 'Platform expected annual output', size: 0.25 },
                { text: '6.6 million tonnes', size: 1.5, translation: [0, 10] }
            ]
        })
    )
}

function Text(renderer, font) {
    return function(opt) {
        return TextElement(renderer, xtend(opt, { font: font, textures: font.textures }))
    }
}

function create(createText, data) {
    var v = data.origin
    var dir = v.clone().sub(new THREE.Vector3(0,v.y,0)).normalize()
    var object = new THREE.Object3D()
    object.position.copy(v)
    object.rotation.x = 0

    var dx = v.x,
        dz = v.z,
        theta = -Math.atan2(dz, dx) 
    object.rotation.y = theta

    // var children = data.elements.map(function(e) {
    //     return createElement(createText, e)
    // })

    // children.forEach(function() {

    // })

    return object 
}


function createElement(createText, element) {
    
    if (element.text) {
        var textElement = createText({
            text: element.text,
            padding: -4
        })
    } else {

    }
    return object
}