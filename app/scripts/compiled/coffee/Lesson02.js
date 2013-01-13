(function() {
  var Lesson02,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Lesson02 = (function(_super) {

    __extends(Lesson02, _super);

    function Lesson02() {
      Lesson02.__super__.constructor.call(this);
      this.drawScene();
    }

    Lesson02.prototype.drawScene = function() {
      var faces, triGeometry, triangle, verts, whiteMaterial;
      whiteMaterial = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF
      });
      triGeometry = new THREE.Geometry();
      triGeometry.vertices.push(new THREE.Vector3(0, 10, 0));
      triGeometry.vertices.push(new THREE.Vector3(-10, -10, 0));
      triGeometry.vertices.push(new THREE.Vector3(10, -10, 0));
      triGeometry.faces.push(new THREE.Face3(0, 1, 2));
      triangle = new THREE.Mesh(triGeometry, whiteMaterial);
      verts = [[10, 10, 0], [-10, 10, 0], [10, -10, 0], [-10, -10, 0]];
      faces = [[0, 1, 2], [2, 1, 3]];
      this.squareGeometry = this.makeGeometry(verts, faces);
      this.square = new THREE.Mesh(this.squareGeometry, whiteMaterial);
      this.square.position.x = 25;
      this.scene.add(triangle);
      return this.scene.add(this.square);
    };

    return Lesson02;

  })(App);

  window.Lesson02 = Lesson02;

  window.app = new Lesson02();

  window.animate();

}).call(this);
