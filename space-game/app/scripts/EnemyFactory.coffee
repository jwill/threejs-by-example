class EnemyFactory
  instance = null
  class PrivateEnemyFactory
    constructor: () ->
      @interval = 5
      @lastEnemy = 0
      @enemies = []
      loader = new THREE.JSONLoader()
      loader.load('/models/enemy.js', @enemyCallback)

    enemyCallback: (g, m) ->
      self = app.enemyFactory
      obj = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m))
      obj.scale.set(10,12,10)
      self.enemy = obj

    placeGates: () ->
      @lastGate -= @interval
      x = (Math.random() * 800)-400
      y = 50 #(Math.random() * 280)
      z = -1000

      a = @gate.clone()
      b = a.clone()
      a.position.set(x, y, z)
      b.position.set(x+@gapSize, y, z)

      app.scene.add(a)
      app.scene.add(b)
      @gates.push(a)
      @gates.push(b)

    placeEnemy: () ->
      @lastEnemy -= @interval
      x = (Math.random() * 800)-400
      y = 50 #(Math.random() * 280)
      z = -1000

      a = @enemy.clone()
      a.position.set(x,y,z)
      a.geometry.computeBoundingBox()
      app.scene.add(a)
      @enemies.push(a)

    updateEnemies: (delta) ->
      @lastEnemy += delta
      if @lastEnemy >= @interval
        @placeEnemy()
      for enemy in @enemies
        enemy.position.z += 2
        if enemy.position.z > app.hero.model.position.z + 400
          @removeEnemy(enemy)

    removeEnemy: (e) ->
      # remove from scene
      app.scene.remove(e)
      # remove from enemies collection
      index = @enemies.indexOf(e)
      if (index is not -1)
        @enemies.splice(index, 1)

  @getInstance: () ->
    instance ?= new PrivateEnemyFactory()

window.EnemyFactory = EnemyFactory