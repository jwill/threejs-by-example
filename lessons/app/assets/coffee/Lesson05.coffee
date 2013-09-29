class Lesson05 extends App
  constructor: () ->
    super()
    
    light = new THREE.DirectionalLight(0xFFFFFF)
    
    light.position.x = 10
    light.position.y = 200
    light.position.z = 130
    
    @scene.add(light)
    @drawScene()

  drawScene: () ->
    pyGeometry = @makeGeometry(
      [
        [0, 10, 0]
        [-10, -10, 10]
        [10, -10, 10]
        
        #[0, 10, 0]
        #[10, -10, 10]
        [10, -10, -10]
        
        #[0,10,0]
        #[10,-10,-10]
        [-10,-10,-10]
        
        #[0, 10, 0]
        #[-10, -10,-10]
        #[-10, -10, 10]
        
      ], [[0,1,2],[0,2,3],[0,3,4], [0,4,1]]
    )



    vColors = [
      new THREE.Color(0xFF0000)
      new THREE.Color(0x00FF00)
      new THREE.Color(0x0000FF)
    ]

    for f in pyGeometry.faces
      f.vertexColors[0] = vColors[0]
      f.vertexColors[1] = vColors[1]
      f.vertexColors[2] = vColors[2]

    pyMaterial = new THREE.MeshBasicMaterial(
      {color: 0xFFFFFF, vertexColors:THREE.VertexColors}
    )

    
    @pyramid = new THREE.Mesh(pyGeometry, pyMaterial)
    
    @scene.add(@pyramid)

  render: () ->
    @pyramid.rotation.y += 0.1
    super()

    
window.Lesson05 = Lesson05



