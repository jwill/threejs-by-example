class Hero
  constructor: () ->
    loader = new THREE.JSONLoader()
    loader.load('/models/hero.js', @heroCallback)

  heroCallback: (g, m) ->
    self = app.hero
    obj = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m))
    obj.rotation.x = -1.57
    obj.position.y = 100
    obj.scale.set(6,6,6)
    self.model = obj
    app.scene.add(self.model)

  increment: (direction) ->
    if direction is 'z'
      @model.position.y += 25
    if direction is 'x'
      @model.rotation.y = -5
      @model.position.x -= 25

  decrement: (direction) ->
    # prevent hero ship from going through floor
    if direction is 'z' and @model.position.y > 25
      @model.position.y -= 25
    if direction is 'x'
      @model.rotation.y = 5
      @model.position.x += 25

  setYRotation: (angle) ->
    @model.rotation.y = 0

window.Hero = Hero