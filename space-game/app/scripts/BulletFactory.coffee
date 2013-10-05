class BulletFactory
  instance = null
  class PrivateBulletFactory
    constructor: () ->
      @bullet = null
      loader = new THREE.JSONLoader()
      loader.load('/models/projectile.js', @projectileCallback)
      @bullets = []
      @ray = new THREE.Raycaster()

    projectileCallback: (g, m) ->
      self = app.bulletFactory
      bullet = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m))
      bullet.scale.set(5, 5, 5)
      bullet.rotation.x = -1.57
      bullet.material = new THREE.MeshBasicMaterial({color: 0x444444})
      self.bullet = bullet


    shootBullet: () ->
      bullet = @bullet.clone()
      bullet.name = "bullet"
      pos = app.hero.model.position.clone()
      pos.z -= 70
      bullet.position.set(pos.x, pos.y, pos.z)
      bullet.geometry.computeBoundingBox()
      app.scene.add(bullet)
      @bullets.push(bullet)

    updateBullets: () ->
      for b in @bullets
        b.position.z -= 5
        # TODO check for collision:
        @checkCollisions(b)
        if (b.position.z < -700)
          @removeBullet(b)

    getBullets: () ->
      @bullets

    removeBullet: (b) ->
      # remove from scene
      app.scene.remove(b)
      # remove from bullets collection
      index = @bullets.indexOf(b)
      if (index is not -1)
        @bullets.splice(index, 1)

    checkCollisions: (b) ->
      directions = [
                    new THREE.Vector3(0, 0, -1)]
      enemies = app.enemyFactory.enemies
      if (enemies.length > 0)
        for d in directions
          @ray.set( b.position.clone(), d )
          collResults = @ray.intersectObjects( enemies, true )
          if ( collResults.length > 0 && collResults[0].distance < 75)
            obj = collResults[0].object
            obj.hit = true
            @removeBullet(b)
            app.enemyFactory.removeEnemy(obj)

  @getInstance: () ->
    instance ?= new PrivateBulletFactory()

window.BulletFactory = BulletFactory