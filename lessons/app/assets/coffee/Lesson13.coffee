class Lesson13 extends App
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
    material = new THREE.MeshPhongMaterial({color:0xFFF})
        
    @text = new THREE.TextGeometry("3D Text", {
      curveSegments: 8
      size: 100
      font: "helvetiker"
    })
    @text.computeBoundingBox()

    @textMesh = new THREE.Mesh(@text, material)
    @textMesh.position.x = -250
    @textMesh.position.z = -500

    @scene.add @textMesh
    return

window.Lesson13 = Lesson13
