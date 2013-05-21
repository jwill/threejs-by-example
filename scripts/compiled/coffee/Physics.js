(function() {
  var Physics,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Physics = (function(_super) {

    __extends(Physics, _super);

    function Physics() {
      var loader, self;
      Physics.__super__.constructor.call(this);
      self = this;
      loader = new THREE.SceneLoader();
      loader.callbackProgress = this.callbackProgress;
      loader.load("scripts/scenes/falling-ball.js", self.callbackFinished);
      Physijs.scripts.worker = 'scripts/vendor/physijs/physijs_worker.js';
      Physijs.scripts.ammo = 'ammo.js';
      this.scene = new Physijs.Scene();
      this.scene.setGravity(new THREE.Vector3(0, -30, 0));
    }

    Physics.prototype.callbackProgress = function(progress, result) {
      console.log(progress);
      return console.log(result);
    };

    Physics.prototype.createSimpleObject = function(meshType, rawMesh, mass, friction, res) {
      var material, obj;
      if (friction !== void 0) {
        material = Physijs.createMaterial(rawMesh.material, friction, res);
      } else {
        material = rawMesh.material;
      }
      obj = new meshType(rawMesh.geometry, material, mass);
      obj.scale.set(rawMesh.scale.x, rawMesh.scale.y, rawMesh.scale.z);
      obj.rotation.set(rawMesh.rotation.x, rawMesh.rotation.y, rawMesh.rotation.z);
      obj.position.set(rawMesh.position.x, rawMesh.position.y, rawMesh.position.z);
      return obj;
    };

    Physics.prototype.callbackFinished = function(result) {
      var ball, ballMesh, floor, groundMesh, ramp1, ramp1Mesh, ramp2, ramp2Mesh, self;
      self = app;
      self.camera = result.cameras.Camera;
      self.camera.lookAt(self.scene.position);
      self.scene.add(self.camera);
      ball = result.objects.Ball;
      ballMesh = self.createSimpleObject(Physijs.SphereMesh, ball);
      floor = result.objects.Floor;
      groundMesh = self.createSimpleObject(Physijs.BoxMesh, floor, 0);
      ramp1 = result.objects.Ramp1;
      ramp1Mesh = self.createSimpleObject(Physijs.BoxMesh, ramp1, 0);
      ramp2 = result.objects.Ramp2;
      ramp2Mesh = self.createSimpleObject(Physijs.BoxMesh, ramp2, 0);
      self.scene.add(ballMesh);
      self.scene.add(groundMesh);
      self.scene.add(ramp1Mesh);
      return self.scene.add(ramp2Mesh);
    };

    Physics.prototype.render = function() {
      this.scene.simulate();
      return this.renderer.render(this.scene, this.camera);
    };

    return Physics;

  })(App);

  window.Physics = Physics;

}).call(this);
