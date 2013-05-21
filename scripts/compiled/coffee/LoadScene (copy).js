(function() {
  var LoadScene,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  LoadScene = (function(_super) {

    __extends(LoadScene, _super);

    function LoadScene() {
      var loader, self;
      LoadScene.__super__.constructor.call(this);
      self = this;
      loader = new THREE.SceneLoader();
      loader.callbackProgress = this.callbackProgress;
      loader.load("scripts/scenes/falling-ball2.js", self.callbackFinished);
    }

    LoadScene.prototype.callbackProgress = function(progress, result) {
      console.log(progress);
      return console.log(result);
    };

    LoadScene.prototype.callbackFinished = function(result) {
      console.log(result);
      app.scene = result.scene;
      app.camera = result.cameras.Camera;
      return app.camera.lookAt(new THREE.Vector3(0, 0, 0));
    };

    LoadScene.prototype.render = function() {
      return this.renderer.render(this.scene, this.camera);
    };

    return LoadScene;

  })(App);

  window.LoadScene = LoadScene;

}).call(this);
