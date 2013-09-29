class Lesson06 extends App
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
    @cube.rotation.x += 0.05
    @cube.rotation.y +=0.01
    @renderer.render(@scene, @camera)
  
  drawScene: () ->
    texture   = THREE.ImageUtils.loadTexture( "images/HTML5_Logo_256.png" )
    material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, map:texture } )
  
    
    @cube = new THREE.Mesh(
      new THREE.CubeGeometry(50, 50, 50,32,32,32), material)
      
    @scene.add(@cube)
    
    
window.Lesson06 = Lesson06
