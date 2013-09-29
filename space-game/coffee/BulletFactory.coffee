class BulletFactory
  instance = null
  class PrivateBulletFactory
    constructor: () ->
      @bullet = null
      loader = new THREE.JSONLoader()
      loader.load('/models/projectile.js', @projectileCallback)
      @bullets = []

    projectileCallback: (g, m) ->
      self = app.bulletFactory
      bullet = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m))
      bullet.scale.set(5, 5, 5)
      bullet.rotation.x = -1.57
      self.bullet = bullet


    shootBullet: () ->
      bullet = @bullet.clone()
      pos = app.hero.position.clone()
      pos.z -= 70
      bullet.position.set(pos.x, pos.y, pos.z)
      app.scene.add(bullet)
      @bullets.push(bullet)

    updateBullets: () ->
      for b in @bullets
        b.position.z -= 5
        # TODO check for collision:
        if (b.position.z < -700)
          @removeBullet(b)

    removeBullet: (b) ->
      # remove from scene
      app.scene.remove(b)
      # remove from bullets collection
      index = @bullets.indexOf(b)
      if (index is not -1)
        @bullets.splice(index, 1)

  @getInstance: () ->
    instance ?= new PrivateBulletFactory()

window.BulletFactory = BulletFactory