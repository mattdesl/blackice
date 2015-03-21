var random = require('randf')
var THREE = require('three')
var smoothstep = require('smoothstep')
var lerp = require('lerp')

module.exports = function(scene) {
    var geo = new THREE.PlaneGeometry(100, 100, 40, 40)
    var vec2 = new THREE.Vector2()
    geo.vertices.forEach(function(v) {
        var len = vec2.set(v.x, v.y).length() / 50
        var slen = smoothstep(0.4, 1.0, len)
        v.z = random(10, 40) * slen 

        slen = smoothstep(0.7, 1.0, len)
        var base = smoothstep(0.2, 0.0, len)*0.5
        slen += base

        var L = slen//lerp(0.9, 1.0, slen)
        var color = new THREE.Color(L, L, L)
        geo.colors.push(color)
    })

    geo.faces.forEach(function(face) {
        face.vertexColors[0] = geo.colors[face.a]
        face.vertexColors[1] = geo.colors[face.b]
        face.vertexColors[2] = geo.colors[face.c]
    })

    var tex = THREE.ImageUtils.loadTexture('img/snow.jpg')
    tex.repeat.set(1, 1)
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping

    var mat = new THREE.MeshBasicMaterial({ 
        map: tex,
        vertexColors: THREE.VertexColors 
        // color: "rgb(150,150,150)"
    })
    var mesh = new THREE.Mesh(geo, mat)
    mesh.rotation.x = -Math.PI/2
    mesh.position.y = -30
    var stretch = 10
    mesh.scale.x = mesh.scale.y = stretch
    scene.add(mesh)

    window.floor = mesh
}