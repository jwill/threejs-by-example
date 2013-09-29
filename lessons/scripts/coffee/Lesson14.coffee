class Lesson14 extends App
  constructor: () ->
    super()
    light = new THREE.DirectionalLight(0xFFFFFF)
    light.position.x = 10
    light.position.y = 200
    light.position.z = 130
    @scene.add(light)
    @drawScene()

  additionalInit: () ->

  render: () ->
    @renderer.render(@scene, @camera)

  drawScene: () ->
    material = new THREE.MeshPhongMaterial({color:0xFF0000})
        
    @text = new THREE.TextGeometry("3D Text", {
      curveSegments: 8
      bevelEnabled: true
      bevelSize: 8
      bevelThickness: 10
      size: 100
      font: "helvetiker"
    })
    @text.computeBoundingBox()

    @textMesh = new THREE.Mesh(@text, material)
    @textMesh.position.x = -250
    @textMesh.position.z = -500

    @scene.add @textMesh
    return

window.Lesson14 = Lesson14
