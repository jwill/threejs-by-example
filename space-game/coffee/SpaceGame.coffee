class SpaceGame extends App
  constructor: () ->
    super()

    @camera.position.z = 500
    @init()
    #@drawScene()

  init: () ->
    @gates = []
    @bullets = []
    @enemies = []
    @gapSize = 200
    # several second delay for gates
    @lastGate = new Date().getTime() + 3000
    @lastEnemy = new Date().getTime() + 5000

    loader = new THREE.JSONLoader()
    @loadModels()
    @setupKeys()
    @drawScene()


  loadModels: () ->
    @models = {}
    loader = new THREE.JSONLoader()
    @hero = new Hero()
    @bulletFactory = BulletFactory.getInstance()
    loader.load('/models/enemy.js', @enemyCallback)
    loader.load('/models/gate.js', @gateCallback)

  gateCallback: (g, m) ->
    self = this
    obj = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m))
    obj.scale.set(10,12,10)
    app.models['gate'] = obj

  enemyCallback: (g, m) ->
    obj = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m))
    obj.scale.set(10,12,10)
    app.models['enemy'] = obj

  placeEnemy: () ->
    @lastEnemy = new Date().getTime()
    x = (Math.random() * 800)-400
    y = 50 #(Math.random() * 280)
    z = -1000
    a = app.models['enemy'].clone()
    a.position.set(x,y,z)
    a.geometry.computeBoundingBox()
    @scene.add(a)
    @enemies.push(a)

  placeGates: () ->
    @lastGate = new Date().getTime()
    x = (Math.random() * 800)-400
    y = 50 #(Math.random() * 280)
    z = -1000
    
    a = app.models['gate'].clone()
    b = a.clone()
    a.position.set(x, y, z)
    b.position.set(x+@gapSize, y, z)

    @scene.add(a)
    @scene.add(b)
    @gates.push(a)
    @gates.push(b)

  updateObjects: () ->
    if new Date().getTime() - @lastGate >= 2000
      @placeGates()
    if new Date().getTime() - @lastEnemy >= 2750
      @placeEnemy()
    for enemy in @enemies
      enemy.position.z += 5
      if enemy.position.z > @hero.model.position.z + 400
        @scene.remove(enemy)
    for g in @gates
      g.position.z += 5
      if g.position.z > @hero.model.position.z + 400
        @scene.remove(g)
    @bulletFactory.updateBullets()




  drawScene: () ->
    @planeMesh = new THREE.Mesh(new THREE.CubeGeometry(100,1,100), new THREE.MeshBasicMaterial({color: 0x085A14}), 0)
    @planeMesh.scale.set(20,0.01,20)
    @planeMesh.position.set(0,0,0)
    @scene.add(@planeMesh)


    #window.animate()

  handleInput: (direction) ->
    if direction is 'up'
      @hero.increment('z')
    else if direction is 'down'
      @hero.decrement('z')
    else if direction is 'left'
      @hero.increment('x')
    else if direction is 'right'
      @hero.decrement('x')



  setupKeys: () ->
    self = this
    @k.down(['w', 'up'], () ->
      self.handleInput('up'))
    @k.up(['w','up'], () -> )

    @k.down(['s', 'down'], () ->
      self.handleInput('down'))
    @k.up(['s','down'], () -> )

    @k.down(['a','left'], () ->
      self.handleInput('left'))
    @k.up(['a','left'], () -> self.hero.model.rotation.y = 0)
    @k.down(['d','right'], () ->
      self.handleInput('right'))
    @k.up(['d','right'], () -> self.hero.model.rotation.y = 0)
    @k.down('space', () -> self.bulletFactory.shootBullet())

  render: () ->
    @updateObjects()
    @renderer.render(@scene, @currentCamera)
window.SpaceGame = SpaceGame
# remove later
window.app = new SpaceGame()
window.animate()
