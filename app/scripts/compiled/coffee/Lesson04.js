(function() {
  var Lesson04,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Lesson04 = (function(_super) {

    __extends(Lesson04, _super);

    function Lesson04() {
      Lesson04.__super__.constructor.call(this);
      this.drawScene();
    }

    Lesson04.prototype.drawScene = function() {
      var f, faces, triGeometry, triMaterial, vColors, verts;
      vColors = [new THREE.Color(0xFF0000), new THREE.Color(0x00FF00), new THREE.Color(0x0000FF)];
      triGeometry = new THREE.Geometry();
      triGeometry.vertices.push(new THREE.Vector3(0, 10, 0));
      triGeometry.vertices.push(new THREE.Vector3(-10, -10, 0));
      triGeometry.vertices.push(new THREE.Vector3(10, -10, 0));
      triGeometry.faces.push(new THREE.Face3(0, 1, 2));
      f = triGeometry.faces[0];
      f.vertexColors[0] = vColors[0];
      f.vertexColors[1] = vColors[1];
      f.vertexColors[2] = vColors[2];
      triMaterial = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        vertexColors: THREE.VertexColors
      });
      this.triangle = new THREE.Mesh(triGeometry, triMaterial);
      verts = [[10, 10, 0], [-10, 10, 0], [10, -10, 0], [-10, -10, 0]];
      faces = [[0, 1, 2], [2, 1, 3]];
      this.squareGeometry = this.makeGeometry(verts, faces);
      this.square = new THREE.Mesh(this.squareGeometry, new THREE.MeshBasicMaterial({
        color: 0x8888FF
      }));
      this.square.position.x = 25;
      this.square.overdraw = true;
      this.scene.add(this.triangle);
      this.scene.add(this.square);
      this.square.doubleSided = true;
      return this.triangle.doubleSided = true;
    };

    Lesson04.prototype.render = function() {
      this.square.rotation.x += 0.1;
      this.triangle.rotation.y += 0.1;
      return Lesson04.__super__.render.call(this);
    };

    return Lesson04;

  })(App);

  window.Lesson04 = Lesson04;

  window.app = new Lesson04();

  window.animate();

}).call(this);
