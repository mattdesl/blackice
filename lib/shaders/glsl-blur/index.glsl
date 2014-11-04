vec4 blur(sampler2D tex, vec2 uv, vec2 blur, vec2 direction) {
    //this will be our RGBA sum
    vec4 sum = vec4(0.0);

    //the directionection of our blur
    //(1.0, 0.0) -> x-axis blur
    //(0.0, 1.0) -> y-axis blur

    //apply blurring, using a 9-tap filter with predefined gaussian weights
    sum += texture2D(tex, vec2(uv.x - 4.0*blur.x*direction.x, uv.y - 4.0*blur.y*direction.y)) * 0.0162162162;
    sum += texture2D(tex, vec2(uv.x - 3.0*blur.x*direction.x, uv.y - 3.0*blur.y*direction.y)) * 0.0540540541;
    sum += texture2D(tex, vec2(uv.x - 2.0*blur.x*direction.x, uv.y - 2.0*blur.y*direction.y)) * 0.1216216216;
    sum += texture2D(tex, vec2(uv.x - 1.0*blur.x*direction.x, uv.y - 1.0*blur.y*direction.y)) * 0.1945945946;

    sum += texture2D(tex, vec2(uv.x, uv.y)) * 0.2270270270;

    sum += texture2D(tex, vec2(uv.x + 1.0*blur.x*direction.x, uv.y + 1.0*blur.y*direction.y)) * 0.1945945946;
    sum += texture2D(tex, vec2(uv.x + 2.0*blur.x*direction.x, uv.y + 2.0*blur.y*direction.y)) * 0.1216216216;
    sum += texture2D(tex, vec2(uv.x + 3.0*blur.x*direction.x, uv.y + 3.0*blur.y*direction.y)) * 0.0540540541;
    sum += texture2D(tex, vec2(uv.x + 4.0*blur.x*direction.x, uv.y + 4.0*blur.y*direction.y)) * 0.0162162162;
    return sum;
}

#pragma glslify: export(blur)