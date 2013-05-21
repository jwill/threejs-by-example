(function() {
  var Lesson14,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Lesson14 = (function(_super) {

    __extends(Lesson14, _super);

    function Lesson14() {
      var light;
      Lesson14.__super__.constructor.call(this);
      light = new THREE.DirectionalLight(0xFFFFFF);
      light.position.x = 10;
      light.position.y = 200;
      light.position.z = 130;
      this.scene.add(light);
      this.drawScene();
    }

    Lesson14.prototype.additionalInit = function() {};

    Lesson14.prototype.render = function() {
      return this.renderer.render(this.scene, this.camera);
    };

    Lesson14.prototype.drawScene = function() {
      var material;
      material = new THREE.MeshPhongMaterial({
        color: 0xFF0000
      });
      this.text = new THREE.TextGeometry("3D Text", {
        curveSegments: 8,
        bevelEnabled: true,
        bevelSize: 8,
        bevelThickness: 10,
        size: 100,
        font: "helvetiker"
      });
      this.text.computeBoundingBox();
      this.textMesh = new THREE.Mesh(this.text, material);
      this.textMesh.position.x = -250;
      this.textMesh.position.z = -500;
      this.scene.add(this.textMesh);
    };

    return Lesson14;

  })(App);

  window.Lesson14 = Lesson14;

}).call(this);
