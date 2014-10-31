var cubeShader = {

    uniforms: THREE.UniformsUtils.merge( [
        { "tCube": { type: "t", value: null },
        "tFlip": { type: "f", value: - 1 } },
        THREE.UniformsLib[ "fog" ]
    ] ),

    vertexShader: [

        "varying vec3 vWorldPosition;",

        THREE.ShaderChunk[ "logdepthbuf_pars_vertex" ],

        "void main() {",

        "   vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
        "   vWorldPosition = worldPosition.xyz;",

        "   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            THREE.ShaderChunk[ "logdepthbuf_vertex" ],

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform samplerCube tCube;",
        "uniform float tFlip;",

        "varying vec3 vWorldPosition;",
        THREE.ShaderChunk[ "logdepthbuf_pars_fragment" ],
        THREE.ShaderChunk[ "fog_pars_fragment" ],
        "void main() {",
        "   gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
            THREE.ShaderChunk[ "logdepthbuf_fragment" ],
            THREE.ShaderChunk[ "fog_fragment" ],
        "}"

    ].join("\n")

}
module.exports = function(renderer, camera, scene) {
    var light = new THREE.HemisphereLight(0xbbe9ff, 0x080820, 1)
    light.position.set(-1, 1, -1)
    scene.add(light)

    var waterNormals = new THREE.ImageUtils.loadTexture('img/waternormals5.jpg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping

    var water = new THREE.Water(renderer, camera, scene, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: waterNormals,
        alpha: 1.0,
        sunDirection: light.position.clone().normalize(),
        sunColor: 0xffffff,
        waterColor: 0x00181e,
        distortionScale: 100.0,
    })

    var mirrorMesh = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(5000, 5000),
        water.material
    )

    mirrorMesh.add(water)
    mirrorMesh.rotation.x = -Math.PI * 0.5
    scene.add(mirrorMesh)


    // load skybox

    var cubeMap = new THREE.CubeTexture([])
    cubeMap.format = THREE.RGBFormat
    cubeMap.flipY = false

    var loader = new THREE.ImageLoader()
    loader.load('img/cloudy_night2.jpg', function(image) {

        var getSide = function(x, y) {

            var size = 1024

            var canvas = document.createElement('canvas')
            canvas.width = size
            canvas.height = size

            var context = canvas.getContext('2d')
            context.drawImage(image, -x * size, -y * size)

            return canvas

        }

        cubeMap.images[0] = getSide(2, 1) // px
        cubeMap.images[1] = getSide(0, 1) // nx
        cubeMap.images[2] = getSide(1, 0) // py
        cubeMap.images[3] = getSide(1, 2) // ny
        cubeMap.images[4] = getSide(1, 1) // pz
        cubeMap.images[5] = getSide(3, 1) // nz
        cubeMap.needsUpdate = true

    })

    cubeShader.uniforms.tCube.value = cubeMap

    var skyBoxMaterial = new THREE.ShaderMaterial({
        fragmentShader: cubeShader.fragmentShader,
        vertexShader: cubeShader.vertexShader,
        uniforms: cubeShader.uniforms,
        depthWrite: false,
        side: THREE.BackSide,
        fog: true,
    })

    var skyBox = new THREE.Mesh(
        new THREE.BoxGeometry(5000, 5000, 5000),
        skyBoxMaterial
    )

    scene.add(skyBox)
    return water
}