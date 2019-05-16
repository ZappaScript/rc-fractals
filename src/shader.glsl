void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/iResolution.xy;
	vec3 col = mandelbrotIterations(100.0f, uv)

    fragColor = vec4(col,1.0);
}


vec2 squareComplexNumber(in vec2 fragCoord){

return vec2(fragCoord.x * fragCoord.x - fragCoord.y*fragCoord.y, 2.0f *fragCoord.x *fragCoord.y);


}

vec2 sumComplexNumber (in vec2 _fragCoord1, in vec2 _fragCoord2 )
{
return vec2 (_fragCoord1.x+_fragCoord2.x,_fragCoord1.y+_fragCoord2.y );

}

vec3 mandelbrotIterations(in float _maxIterations,in vec2 _z){

    vec2 z = _z;
    for (float i = 0; i< _maxIterations; i++){
    
        z = sumComplexNumber(squareComplexNumber(z),z);
        if(length(z)>2){
        return vec3(255,255,255);
        }
            
    }
	return vec3(0,0,0);
}