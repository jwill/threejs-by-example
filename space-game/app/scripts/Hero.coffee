class Hero
  constructor: () ->
    loader = new THREE.JSONLoader()
    loader.load('/models/hero.js', @heroCallback)

  heroCallback: (g, m) ->
    self = app.hero
    obj = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m))
    obj.rotation.x = -1.57
    obj.position.x = 200
    obj.position.y = 50
    #obj.position.y = 100
    obj.scale.set(6,6,6)
    obj.material = new THREE.MeshBasicMaterial({color: 0x0000FF})
    obj.name = "ship"
    self.model = obj
    app.scene.add(self.model)

  increment: (direction) ->
    if direction is 'z'
      @model.position.y += 15
    if direction is 'x'
      @model.rotation.y = -5
      @model.position.x -= 15

  decrement: (direction) ->
    # prevent hero ship from going through floor
    if direction is 'z' and @model.position.y > 0
      @model.position.y -= 25
    if direction is 'x'
      @model.rotation.y = 5
      @model.position.x += 25

  setYRotation: (angle) ->
    @model.rotation.y = 0

window.Hero = Hero