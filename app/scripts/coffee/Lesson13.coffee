class Lesson13 extends App
  constructor: () ->
    super()
    light = new THREE.DirectionalLight(0xFFF)
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
        
    @text = new THREE.TextGeometry("3D Test", {
      curveSegments: 0
      #height: 20
      size: 100
      font: "helvetiker"
    })
    @text.computeBoundingBox()

    @textMesh = new THREE.Mesh(@text, material)
    @textMesh.position.x = -50
    @textMesh.position.z = -500
    #console.log @text

    #parent = new THREE.Object3D()
    #parent.add @textMesh
    @scene.add @textMesh
    return

window.Lesson13 = Lesson13
