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
    material = new THREE.MeshBasicMaterial( { color: 0x00FFFF } )
    
    @text = new THREE.Mesh(
      new THREE.CubeGeometry(50, 50, 50,32,32,32), material
    )

    @scene.add @text

window.Lesson13 = Lesson13

window.app = new Lesson13()
window.animate()
