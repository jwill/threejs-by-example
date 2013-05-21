(function() {
  var Lesson07,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Lesson07 = (function(_super) {

    __extends(Lesson07, _super);

    function Lesson07() {
      Lesson07.__super__.constructor.call(this);
      this.sceneLit = true;
      this.light = new THREE.DirectionalLight(0xFFFFFF);
      this.light.position.x = 10;
      this.light.position.y = 200;
      this.light.position.z = 130;
      this.scene.add(this.light);
      this.drawScene();
      this.k = new Kibo();
      this.setupKeys();
    }

    Lesson07.prototype.setupKeys = function() {
      return this.k.down('f', function() {
        var filter;
        this.filter++;
        if (filter > 2) {
          return filter = 0;
        }
      });
    };

    Lesson07.prototype.render = function() {
      this.cube.rotation.x += 0.005;
      this.cube.rotation.y += 0.01;
      return this.renderer.render(this.scene, this.camera);
    };

    Lesson07.prototype.drawScene = function() {
      var material, texture;
      texture = THREE.ImageUtils.loadTexture("images/crate.bmp");
      material = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        map: texture
      });
      this.cube = new THREE.Mesh(new THREE.CubeGeometry(50, 50, 50, 32, 32, 32), material);
      return this.scene.add(this.cube);
    };

    return Lesson07;

  })(App);

  window.Lesson07 = Lesson07;

}).call(this);
