class Lesson02 extends App
  constructor: () ->
    super()
    @drawScene()

  drawScene: () ->
    whiteMaterial = new THREE.MeshBasicMaterial(
      {color: 0xFFFFFF}
    )
    
    triGeometry = new THREE.Geometry()
    triGeometry.vertices.push(new THREE.Vector3(0,10,0))
    triGeometry.vertices.push(new THREE.Vector3(-10,-10,0))
    triGeometry.vertices.push(new THREE.Vector3(10,-10,0))
    
    triGeometry.faces.push(new THREE.Face3(0,1,2))
    
    triangle = new THREE.Mesh(triGeometry,  whiteMaterial)
  
    verts = [
        [10, 10, 0]
        [-10, 10, 0]
        [10, -10, 0]
        [-10, -10, 0]
    ]

    faces = [[0,1,2], [2,1,3] ]

    @squareGeometry = @makeGeometry(verts, faces)
    
    @square = new THREE.Mesh(@squareGeometry, whiteMaterial)
    @square.position.x = 25
    
    @scene.add(triangle)
    @scene.add (@square)

window.Lesson02 = Lesson02
