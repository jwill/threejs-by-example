class SpaceGame extends App
  constructor: () ->
    super()
    @clock = new THREE.Clock()
    @camera.position.z = 500
    @init()
    #@drawScene()
    @score = 0

  init: () ->
    @loadModels()
    @setupKeys()
    @drawScene()

  loadModels: () ->
    @hero = new Hero()
    @bulletFactory = BulletFactory.getInstance()
    @gateFactory = GateFactory.getInstance()
    @enemyFactory = EnemyFactory.getInstance()
    @clock.start()

  updateObjects: () ->
    delta = @clock.getDelta()
    @bulletFactory.updateBullets()
    #@gateFactory.updateGates(delta)
    @enemyFactory.updateEnemies(delta)

  drawScene: () ->
    @planeMesh = new THREE.Mesh(
      new THREE.CubeGeometry(100,1,100),
      new THREE.MeshBasicMaterial({color: 0x085A14}),
      0
    )
    @planeMesh.scale.set(20,0.01,20)
    @planeMesh.position.set(0,0,0)
    @scene.add(@planeMesh)

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
    @k.up(['a','left'], () -> self.hero.setYRotation(0))

    @k.down(['d','right'], () ->
      self.handleInput('right'))
    @k.up(['d','right'], () -> self.hero.setYRotation(0))

    @k.down('space', () -> self.bulletFactory.shootBullet())

  render: () ->
    @updateObjects()
    @renderer.render(@scene, @currentCamera)

window.SpaceGame = SpaceGame
# remove later
window.app = new SpaceGame()
window.animate()
