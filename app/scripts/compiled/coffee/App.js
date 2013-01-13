(function() {
  var App;

  App = (function() {

    function App() {
      var aspect, far, fov, height, near, width;
      height = 480;
      width = 640;
      fov = 45;
      aspect = width / height;
      near = 0.1;
      far = 10000;
      this.renderer = new THREE.WebGLRenderer({
        autoClear: true
      });
      this.renderer.setClearColor(new THREE.Color(0x000000));
      this.renderer.setSize(width, height);
      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      this.camera.position.z = 100;
      this.scene = new THREE.Scene();
      $('#container').empty();
      $("#container").get(0).appendChild(this.renderer.domElement);
      this.scene.add(this.camera);
    }

    App.prototype.makeGeometry = function(verts, faces) {
      var f, g, v, _i, _j, _len, _len1;
      g = new THREE.Geometry();
      for (_i = 0, _len = verts.length; _i < _len; _i++) {
        v = verts[_i];
        g.vertices.push(new THREE.Vector3(v[0], v[1], v[2]));
      }
      for (_j = 0, _len1 = faces.length; _j < _len1; _j++) {
        f = faces[_j];
        g.faces.push(new THREE.Face3(f[0], f[1], f[2]));
      }
      return g;
    };

    App.prototype.render = function() {
      return this.renderer.render(this.scene, this.camera);
    };

    App.prototype.started = function() {
      return this.started = true;
    };

    return App;

  })();

  window.App = App;

  window.animate = function() {
    if (window.app.started === void 0) {
      window.app.started();
    }
    requestAnimationFrame(window.animate);
    return window.app.render();
  };

}).call(this);
