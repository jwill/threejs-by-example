class LoadScene extends App
  constructor: () ->
    super()
    self = this
    loader = new THREE.SceneLoader()
    loader.callbackProgress = @callbackProgress

    loader.load( "/scenes/falling-ball.js", self.callbackFinished)
    
  # Receives updates from loader
  callbackProgress: (progress, result) ->
    console.log(progress)
    console.log result
  

  # Called when finished loading
  callbackFinished: (result) ->
    console.log result
    app.scene = result.scene
    app.camera = result.cameras.Camera
    app.camera.lookAt(new THREE.Vector3(0,0,0))

  render: () ->
    @renderer.render(@scene, @camera)

window.LoadScene = LoadScene
