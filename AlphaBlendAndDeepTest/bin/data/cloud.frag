#version 410

uniform sampler2D cloud;
in vec2 fragUV;

out vec4 outCol;

void main()
{
	outCol = texture(cloud, fragUV);
	outCol.a = min(outCol.a, 0.8);
}