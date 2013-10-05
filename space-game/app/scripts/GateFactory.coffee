class GateFactory
  instance = null
  class PrivateGateFactory
    constructor: () ->
      @gapSize = 200
      @interval = 3
      @lastGate = 0
      @gates = []
      loader = new THREE.JSONLoader()
      loader.load('/models/gate.js', @gateCallback)

    gateCallback: (g, m) ->
      self = app.gateFactory
      obj = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m))
      obj.scale.set(10,12,10)
      self.gate = obj

    placeGates: () ->
      @lastGate -= @interval
      x = (Math.random() * 800)-400
      y = 50 #(Math.random() * 280)
      z = -1000

      a = @gate.clone()
      b = a.clone()
      a.name = "gate"
      b.name = "gate"
      a.position.set(x, y, z)
      b.position.set(x+@gapSize, y, z)

      app.scene.add(a)
      app.scene.add(b)
      @gates.push(a)
      @gates.push(b)

    updateGates: (delta) ->
      @lastGate += delta
      if @lastGate >= @interval
        @placeGates()
      for g in @gates
        g.position.z += 1
        if g.position.z > app.hero.model.position.z + 400
          app.scene.remove(g)

    removeGates: (g) ->
      # remove from scene
      app.scene.remove(g)
      # remove from gates collection
      index = @gates.indexOf(e)
      if (index is not -1)
        @gates.splice(index, 1)

  @getInstance: () ->
    instance ?= new PrivateGateFactory()



window.GateFactory = GateFactory
