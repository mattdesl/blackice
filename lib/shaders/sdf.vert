attribute vec4 position;
attribute vec4 color;
attribute vec2 texcoord0;

uniform mat4 projection;
uniform mat4 view;
uniform mat4 model;

varying vec4 v_col;
varying vec2 v_tex0;
varying float animOffset;

void main() {
   gl_Position = projection * view * model * position;
   v_col = color;
   v_tex0 = texcoord0;
   gl_PointSize = 1.0;
   animOffset = position.x / 100.0;
   // float anim = fade * (position.x / 50.0);
   // animOffset = smoothstep(0.99, 1.0, anim);
   // animOffset = clamp(animOffset, 0.0, 1.0);
}