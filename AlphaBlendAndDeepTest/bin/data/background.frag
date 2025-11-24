#version 410

uniform sampler2D background;
in vec2 fragUV;

out vec4 outCol;

void main()
{
	outCol = texture(background, fragUV);

}