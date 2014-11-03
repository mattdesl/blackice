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

void main() {
    //this will be our RGBA sum
    vec4 sum = vec4(0.0);

    //our original texcoord for this fragment
    vec2 tc = vUv;

    //the amount to blur, i.e. how far off center to sample from 
    //1.0 -> blur by one pixel
    //2.0 -> blur by two pixels, etc.
    vec2 blur = vec2(radius)/resolution; 
    
    // vec2 size = resolution.xy; //vec2(min(resolution.xy, vec2(512.0)));
    vec2 p = (gl_FragCoord.xy / resolution.xy - 0.5) ;
    p.x *= resolution.x/resolution.y;

    // float len = length(p);
    float len = smoothstep(0.5, 1.2, length( p ));

    //the direction of our blur
    //(1.0, 0.0) -> x-axis blur
    //(0.0, 1.0) -> y-axis blur
    float hstep = dir.x;
    float vstep = dir.y;

    //apply blurring, using a 9-tap filter with predefined gaussian weights
    sum += texture2D(tDiffuse, vec2(tc.x - 4.0*blur.x*hstep, tc.y - 4.0*blur.y*vstep)) * 0.0162162162;
    sum += texture2D(tDiffuse, vec2(tc.x - 3.0*blur.x*hstep, tc.y - 3.0*blur.y*vstep)) * 0.0540540541;
    sum += texture2D(tDiffuse, vec2(tc.x - 2.0*blur.x*hstep, tc.y - 2.0*blur.y*vstep)) * 0.1216216216;
    sum += texture2D(tDiffuse, vec2(tc.x - 1.0*blur.x*hstep, tc.y - 1.0*blur.y*vstep)) * 0.1945945946;

    sum += texture2D(tDiffuse, vec2(tc.x, tc.y)) * 0.2270270270;

    sum += texture2D(tDiffuse, vec2(tc.x + 1.0*blur.x*hstep, tc.y + 1.0*blur.y*vstep)) * 0.1945945946;
    sum += texture2D(tDiffuse, vec2(tc.x + 2.0*blur.x*hstep, tc.y + 2.0*blur.y*vstep)) * 0.1216216216;
    sum += texture2D(tDiffuse, vec2(tc.x + 3.0*blur.x*hstep, tc.y + 3.0*blur.y*vstep)) * 0.0540540541;
    sum += texture2D(tDiffuse, vec2(tc.x + 4.0*blur.x*hstep, tc.y + 4.0*blur.y*vstep)) * 0.0162162162;

    vec3 orig = texture2D(tDiffuse, vUv).rgb;
    gl_FragColor.rgb = mix(orig, sum.rgb, len + 0.1);
    gl_FragColor.a = 1.0;

    // gl_FragColor.rgb = vec3(len+0.1);
}
