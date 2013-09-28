(function() {
  var Lesson13,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Lesson13 = (function(_super) {

    __extends(Lesson13, _super);

    function Lesson13() {
      var light;
      Lesson13.__super__.constructor.call(this);
      light = new THREE.DirectionalLight(0xFFFFFF);
      light.position.x = 10;
      light.position.y = 200;
      light.position.z = 130;
      this.scene.add(light);
      this.drawScene();
    }

    Lesson13.prototype.additionalInit = function() {};

    Lesson13.prototype.render = function() {
      return this.renderer.render(this.scene, this.camera);
    };

    Lesson13.prototype.drawScene = function() {
      var material;
      material = new THREE.MeshBasicMaterial({
        color: 0x00FFFF
      });
      this.text = new THREE.Mesh(new THREE.CubeGeometry(50, 50, 50, 32, 32, 32), material);
      return this.scene.add(this.text);
    };

    return Lesson13;

  })(App);

  window.Lesson13 = Lesson13;

  window.app = new Lesson13();

  window.animate();

}).call(this);
