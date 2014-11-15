uniform float tick;

uniform sampler2D tDiffuse;
uniform sampler2D tLookup;
uniform sampler2D tOverlay;
varying vec2 vUv;
varying vec2 overlayUV;

#pragma glslify: random = require(glsl-random)
#pragma glslify: overlay = require(./glsl-blend-overlay) 
#pragma glslify: luma = require(glsl-luma)
#pragma glslify: colorCorrect = require(glsl-lut/flipY)

void main() {
    vec3 texColor = texture2D(tDiffuse, vUv).rgb;
    float luminance = luma(texColor);
    float noiseMap = smoothstep(luminance, 0.5, 0.0);

    vec2 tUv = vUv + tick;
    vec3 noise = vec3(random(tUv), random(tUv*1.5), random(tUv*0.5));
    // vec3 noise = vec3(random(tUv));
    vec3 noiseColor = mix(noise, vec3(0.5), noiseMap);

    vec3 color = mix(texColor, overlay(texColor, noise), 0.15);
    vec3 corrected = colorCorrect(vec4(color, 1.0), tLookup).rgb;
    color = mix(color, corrected, 0.9);

    gl_FragColor = vec4(color, 1.0);

    vec4 scratches = texture2D(tOverlay, overlayUV);
    vec3 scratchBlend = gl_FragColor.rgb + scratches.rgb;
    float center = smoothstep(0.0, 0.6, length(vUv-0.5));
    float dirtMap = smoothstep(0.1, 0.4, luminance * center );
    gl_FragColor.rgb = mix(gl_FragColor.rgb, scratchBlend, dirtMap);
    // gl_FragColor.rgb = mix(gl_FragColor.rgb, , 0.8);
}


    