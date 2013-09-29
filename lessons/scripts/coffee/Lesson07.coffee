class Lesson07 extends App
  constructor: () ->
    super()
    @sceneLit = true
    @light = new THREE.DirectionalLight(0xFFFFFF)
    @light.position.x = 10
    @light.position.y = 200
    @light.position.z = 130
    @scene.add(@light)
    @drawScene()
    @k = new Kibo()
    @setupKeys()

  setupKeys: () ->
    @k.down('f', ()->
      @filter++
      if (filter > 2)
        filter = 0
    )
      
      
  render: () ->
    @cube.rotation.x += 0.005
    @cube.rotation.y +=0.01
    @renderer.render(@scene, @camera)
  
  drawScene: () ->
    texture   = THREE.ImageUtils.loadTexture( "images/crate.bmp" )
    material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, map:texture } )
  
    
    @cube = new THREE.Mesh(
      new THREE.CubeGeometry(50, 50, 50,32,32,32), material)
      
    @scene.add(@cube)
    
    
window.Lesson07 = Lesson07

