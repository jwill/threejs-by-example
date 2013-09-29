class ShaderWithUniform extends App
  constructor: () ->
    super()
    @clock = new THREE.Clock()
    light = new THREE.DirectionalLight(0xFFFFFF)
    
    light.position.x = 10
    light.position.y = 200
    light.position.z = 130
    
    @scene.add(light)
    @drawScene()

  createShaders: () ->
    vShader = """
      void main(void) {
         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    """
    pShader = """
      uniform float time;

      void main(){
          float r = cos(time);
          float g = sin(time);
          float b = tan(time);

          gl_FragColor = vec4(r, 1.0 - g , b, 1.0);
      }
    """
    
    @uniforms = {
      time: {type: 'f', value: 0.0}
    }
    @shaderMaterial = new THREE.ShaderMaterial({
      uniforms: @uniforms,
      vertexShader: vShader,
      fragmentShader: pShader
    })

  drawScene: () ->
    pyGeometry = @makeGeometry(
      [
        [0, 10, 0]
        [-10, -10, 10]
        [10, -10, 10]
        [10, -10, -10]
        [-10,-10,-10]
      ], [[0,1,2],[0,2,3],[0,3,4], [0,4,1]]
    )


    @createShaders()
    
    @pyramid = new THREE.Mesh(pyGeometry, @shaderMaterial)
    
    @scene.add(@pyramid)

  render: () ->
    delta = 5 * @clock.getDelta()
    @uniforms.time.value += 0.2 * delta
    @pyramid.rotation.y += 0.1 * delta
    super()

    
window.ShaderWithUniform = ShaderWithUniform



