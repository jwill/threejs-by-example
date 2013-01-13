(function() {
  var Lesson06,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Lesson06 = (function(_super) {

    __extends(Lesson06, _super);

    function Lesson06() {
      var light;
      Lesson06.__super__.constructor.call(this);
      light = new THREE.DirectionalLight(0xFFFFFF);
      light.position.x = 10;
      light.position.y = 200;
      light.position.z = 130;
      this.scene.add(light);
      this.drawScene();
    }

    Lesson06.prototype.additionalInit = function() {};

    Lesson06.prototype.render = function() {
      this.cube.rotation.x += 0.05;
      this.cube.rotation.y += 0.01;
      return this.renderer.render(this.scene, this.camera);
    };

    Lesson06.prototype.drawScene = function() {
      var material, texture;
      texture = THREE.ImageUtils.loadTexture("images/HTML5_Logo_256.png");
      material = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        map: texture
      });
      this.cube = new THREE.Mesh(new THREE.CubeGeometry(50, 50, 50, 32, 32, 32), material);
      return this.scene.add(this.cube);
    };

    return Lesson06;

  })(App);

  window.Lesson06 = Lesson06;

  window.app = new Lesson06();

  window.animate();

}).call(this);
