#version 410

uniform sampler2D sun;
in vec2 fragUV;

out vec4 outCol;

void main()
{
	outCol = texture(sun, fragUV);
}