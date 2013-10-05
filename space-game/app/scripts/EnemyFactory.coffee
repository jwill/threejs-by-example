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

    placeEnemy: () ->
      @lastEnemy -= @interval
      #x = (Math.random() * 800)-400
      x = 200
      y = 50 #(Math.random() * 280)
      z = -1000

      a = @enemy.clone()
      a.name = "enemy"
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
          console.log("removing enemy")
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