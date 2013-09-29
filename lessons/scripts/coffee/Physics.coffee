class Physics extends App
  constructor: () ->
    super()
    self = this
    loader = new THREE.SceneLoader()
    loader.callbackProgress = @callbackProgress

    loader.load( "scripts/scenes/falling-ball.js", self.callbackFinished)

    # setup Physi
    Physijs.scripts.worker = 'scripts/vendor/physijs/physijs_worker.js'
    Physijs.scripts.ammo = 'ammo.js'

    @scene = new Physijs.Scene()
    @scene.setGravity new THREE.Vector3( 0, -30, 0 )
    
  # Receives updates from loader
  callbackProgress: (progress, result) ->
    console.log(progress)
    console.log result
  

  createSimpleObject: (meshType, rawMesh, mass, friction, res) ->
    if friction isnt undefined
      material = Physijs.createMaterial(
        rawMesh.material,
        friction,
        res
      )
    else material = rawMesh.material
    obj = new meshType(rawMesh.geometry, material, mass)
    obj.scale.set rawMesh.scale.x, rawMesh.scale.y, rawMesh.scale.z
    obj.rotation.set rawMesh.rotation.x, rawMesh.rotation.y, rawMesh.rotation.z
    obj.position.set rawMesh.position.x, rawMesh.position.y, rawMesh.position.z
    
    obj

  # Called when finished loading
  callbackFinished: (result) ->
    self = app
    self.camera = result.cameras.Camera
    self.camera.lookAt(self.scene.position)
    self.scene.add(self.camera)


    ball = result.objects.Ball
    ballMesh = self.createSimpleObject(Physijs.SphereMesh, ball)
    # Sets ground mass to 0 (or immovable)
    floor = result.objects.Floor
    groundMesh = self.createSimpleObject(Physijs.BoxMesh, floor, 0)
    
    ramp1 = result.objects.Ramp1
    ramp1Mesh = self.createSimpleObject(Physijs.BoxMesh, ramp1, 0)
    
    ramp2 = result.objects.Ramp2
    ramp2Mesh = self.createSimpleObject(Physijs.BoxMesh, ramp2, 0)
    
    self.scene.add ballMesh
    self.scene.add groundMesh
    self.scene.add ramp1Mesh
    self.scene.add ramp2Mesh
   
  render: () ->
    @scene.simulate()
    @renderer.render(@scene, @camera)

window.Physics = Physics
