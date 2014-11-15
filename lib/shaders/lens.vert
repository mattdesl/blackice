uniform vec2 overlayResolution;
uniform vec2 resolution;

varying vec2 vUv;
varying vec2 overlayUV;

void main() {
    vUv = uv;

    float aspect = overlayResolution.x/overlayResolution.y;
    float ratio = resolution.x/resolution.y;
    overlayUV = uv;


    float tAspect = overlayResolution.x/overlayResolution.y;
    float pAspect = resolution.x/resolution.y;

    overlayUV = uv;
    // overlayUV.y /= (pAspect/tAspect);
    // overlayUV /= resolution.y/resolution.x;


    // vec2 size = vec2(0.0);
    // if (tAspect > pAspect) {
    //     size.y = 1.0;
    //     size.x = 1.0/tAspect;
    //     // size.y = resolution.y;
    //     // size.x = size.y * tAspect;
    // } else {
    //     size.x = 1.0;
    //     size.y = 1.0/tAspect;

    //     // size.x = resolution.x;
    //     // size.y = size.x / tAspect;
    // }
    // vec2 offset = vec2(resolution - size) / 2.0;
    // overlayUV = uv * size * pAspect;
    

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}