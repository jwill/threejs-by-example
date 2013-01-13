(function() {
  var Lesson05,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Lesson05 = (function(_super) {

    __extends(Lesson05, _super);

    function Lesson05() {
      var light;
      Lesson05.__super__.constructor.call(this);
      light = new THREE.DirectionalLight(0xFFFFFF);
      light.position.x = 10;
      light.position.y = 200;
      light.position.z = 130;
      this.scene.add(light);
      this.drawScene();
    }

    Lesson05.prototype.drawScene = function() {
      var f, pyGeometry, pyMaterial, vColors, _i, _len, _ref;
      pyGeometry = this.makeGeometry([[0, 10, 0], [-10, -10, 10], [10, -10, 10], [10, -10, -10], [-10, -10, -10]], [[0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1]]);
      vColors = [new THREE.Color(0xFF0000), new THREE.Color(0x00FF00), new THREE.Color(0x0000FF)];
      _ref = pyGeometry.faces;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        f = _ref[_i];
        f.vertexColors[0] = vColors[0];
        f.vertexColors[1] = vColors[1];
        f.vertexColors[2] = vColors[2];
      }
      pyMaterial = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        vertexColors: THREE.VertexColors
      });
      this.pyramid = new THREE.Mesh(pyGeometry, pyMaterial);
      return this.scene.add(this.pyramid);
    };

    Lesson05.prototype.render = function() {
      this.pyramid.rotation.y += 0.1;
      return Lesson05.__super__.render.call(this);
    };

    return Lesson05;

  })(App);

  window.Lesson05 = Lesson05;

  window.app = new Lesson05();

  window.animate();

}).call(this);
