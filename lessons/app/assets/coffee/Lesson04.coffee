class Lesson04 extends App
  constructor: () ->
    super()
    @drawScene()

  drawScene: () ->
    vColors = [
      new THREE.Color(0xFF0000)
      new THREE.Color(0x00FF00)
      new THREE.Color(0x0000FF)
    ]
    
    triGeometry = new THREE.Geometry()
    triGeometry.vertices.push(new THREE.Vector3(0,10,0))
    triGeometry.vertices.push(new THREE.Vector3(-10,-10,0))
    triGeometry.vertices.push(new THREE.Vector3(10,-10,0))
    
    triGeometry.faces.push(new THREE.Face3(0,1,2))

    f = triGeometry.faces[0]
    f.vertexColors[0] = vColors[0]
    f.vertexColors[1] = vColors[1]
    f.vertexColors[2] = vColors[2]

    triMaterial = new THREE.MeshBasicMaterial(
      {color: 0xFFFFFF, vertexColors:THREE.VertexColors}
    )

    
    @triangle = new THREE.Mesh(triGeometry, triMaterial)
  
    verts = [
        [10, 10, 0]
        [-10, 10, 0]
        [10, -10, 0]
        [-10, -10, 0]
    ]

    faces = [[0,1,2], [2,1,3] ]

    @squareGeometry = @makeGeometry(verts, faces)
    
    @square = new THREE.Mesh(@squareGeometry,
      new THREE.MeshBasicMaterial({color: 0x8888FF})
    )
    @square.position.x = 25
    @square.overdraw = true
    
    @scene.add(@triangle)
    @scene.add (@square)

    @square.doubleSided = true
    @triangle.doubleSided = true

  render: () ->
    @square.rotation.x += 0.1
    @triangle.rotation.y += 0.1
    super()

    
window.Lesson04 = Lesson04


