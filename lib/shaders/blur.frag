//"in" attributes from our vertex shader
// varying vec4 vColor;
// varying vec2 vTexCoord;

//declare uniforms
uniform vec2 resolution;
uniform float radius;
uniform vec2 dir;
uniform float strength;

uniform sampler2D tDiffuse;
varying vec2 vUv;

#pragma glslify: blur = require(./glsl-blur)

void main() {
    //the amount to blur, i.e. how far off center to sample from 
    //1.0 -> blur by one pixel
    //2.0 -> blur by two pixels, etc.
    vec2 blurAmt = vec2(radius)/resolution; 
    
    vec4 sum = blur(tDiffuse, vUv, blurAmt, dir);

    // vec2 size = resolution.xy; //vec2(min(resolution.xy, vec2(512.0)));
    vec2 p = (gl_FragCoord.xy / resolution.xy - 0.5) ;
    p.x *= resolution.x/resolution.y;

    // float len = length(p);
    float len = smoothstep(0.5, 1.2, length( p ));

    vec3 orig = texture2D(tDiffuse, vUv).rgb;
    gl_FragColor.rgb = mix(orig, sum.rgb, len + 0.1);
    gl_FragColor.a = 1.0;

    // gl_FragColor.rgb = vec3(len+0.1);
}
