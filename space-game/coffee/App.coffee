class App
  constructor: () ->
    height = 450
    width = 950
    
    fov = 45
    aspect = width / height
    near = 1
    far = 5000

    @light = new THREE.AmbientLight(0xFFFFFF)
    
    @light.position.x = 10
    @light.position.y = 200
    @light.position.z = 130
    
    @k = new Kibo()
    @yAxis = new THREE.Vector3(0,1,0)
    
    @renderer = new THREE.WebGLRenderer({autoClear:true})
    @renderer.setClearColor(new THREE.Color(0x000000))
    @renderer.setSize(width, height)
    
    @camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    @camera.position = new THREE.Vector3(200,100,1225)
    @camera.target = new THREE.Vector3(0,0,0)
    
    @scene = new THREE.Scene()
    @scene.add(@light)

    $('#playingArea').get(0).style.display = 'block'
    $('#board').empty()
    $("#board").get(0).appendChild(@renderer.domElement)
    
    @scene.add(@camera)
    @currentCamera = @camera
    
  render: () ->
    @renderer.render(@scene, @currentCamera)

  started: () ->
    @started = true

  stopAnimation: () ->
    cancelAnimationFrame(@requestId)

window.App = App
  
window.animate = () ->
  window.app.requestId = requestAnimationFrame(window.animate)
  window.app.render()
