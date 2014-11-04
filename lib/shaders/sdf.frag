#ifdef GL_ES
precision mediump float;
#endif

varying vec4 v_col;
varying vec2 v_tex0;
uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float time;

const float smoothing = 1.0/32.0;
const vec2 shadowOffset = vec2(-1.0/512.0);
const vec4 glowColor = vec4(vec3(0.1), 1.0);
const float glowMin = 0.4;
const float glowMax = 0.8;

#pragma glslify: blur = require(./glsl-blur)

// drop shadow computed in fragment shader
void main() {
    vec4 smoothColor = vec4(0.0);
    vec4 texColor = texture2D(texture0, v_tex0);

    float dst = texColor.a;
    float alpha = smoothstep(0.5 - smoothing, 0.5 + smoothing, dst);
    vec4 base = v_col * vec4(alpha);

    float glowDst = texture2D(texture0, v_tex0 + shadowOffset).a;
    vec4 glow = glowColor * smoothstep(glowMin, glowMax, glowDst);
    float mask = 1.0-alpha;

    smoothColor = mix(base, glow, mask);
    smoothColor.rgb *= smoothColor.a;


    // vec4 fxColor = texture2D(texture1, v_tex0);
    // fxColor = vec4(vec3(fxColor.b) + vec3(fxColor.g), 1.0);

    // gl_FragColor = mix(smoothColor, fxColor, 0.0);

    gl_FragColor = smoothColor;
    if (gl_FragColor.a<0.1)
        discard;
}