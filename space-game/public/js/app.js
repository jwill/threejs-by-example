(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.brunch = true;
})();

var App;

App = (function() {
  function App() {
    var aspect, child, elem, far, fov, height, near, width, _i, _len, _ref;
    height = 450;
    width = 950;
    fov = 45;
    aspect = width / height;
    near = 1;
    far = 5000;
    this.light = new THREE.AmbientLight(0xFFFFFF);
    this.light.position.x = 10;
    this.light.position.y = 200;
    this.light.position.z = 130;
    this.k = new Kibo();
    this.yAxis = new THREE.Vector3(0, 1, 0);
    this.renderer = new THREE.WebGLRenderer({
      autoClear: true
    });
    this.renderer.setClearColor(new THREE.Color(0x000000));
    this.renderer.setSize(width, height);
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position = new THREE.Vector3(200, 100, 1225);
    this.camera.target = new THREE.Vector3(0, 0, 0);
    this.scene = new THREE.Scene();
    this.scene.add(this.light);
    document.querySelector('#playingArea').style.display = 'block';
    elem = document.querySelector('#board');
    _ref = elem.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      elem.removeChild(child);
    }
    elem.appendChild(this.renderer.domElement);
    this.scene.add(this.camera);
    this.currentCamera = this.camera;
  }

  App.prototype.render = function() {
    return this.renderer.render(this.scene, this.currentCamera);
  };

  App.prototype.started = function() {
    return this.started = true;
  };

  App.prototype.stopAnimation = function() {
    return cancelAnimationFrame(this.requestId);
  };

  return App;

})();

window.App = App;

window.animate = function() {
  window.app.requestId = requestAnimationFrame(window.animate);
  return window.app.render();
};
var BulletFactory;

BulletFactory = (function() {
  var PrivateBulletFactory, instance;

  function BulletFactory() {}

  instance = null;

  PrivateBulletFactory = (function() {
    function PrivateBulletFactory() {
      var loader;
      this.bullet = null;
      loader = new THREE.JSONLoader();
      loader.load('/models/projectile.js', this.projectileCallback);
      this.bullets = [];
    }

    PrivateBulletFactory.prototype.projectileCallback = function(g, m) {
      var bullet, self;
      self = app.bulletFactory;
      bullet = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m));
      bullet.scale.set(5, 5, 5);
      bullet.rotation.x = -1.57;
      return self.bullet = bullet;
    };

    PrivateBulletFactory.prototype.shootBullet = function() {
      var bullet, pos;
      bullet = this.bullet.clone();
      pos = app.hero.model.position.clone();
      pos.z -= 70;
      bullet.position.set(pos.x, pos.y, pos.z);
      app.scene.add(bullet);
      return this.bullets.push(bullet);
    };

    PrivateBulletFactory.prototype.updateBullets = function() {
      var b, _i, _len, _ref, _results;
      _ref = this.bullets;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        b = _ref[_i];
        b.position.z -= 5;
        if (b.position.z < -700) {
          _results.push(this.removeBullet(b));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    PrivateBulletFactory.prototype.removeBullet = function(b) {
      var index;
      app.scene.remove(b);
      index = this.bullets.indexOf(b);
      if (index === !-1) {
        return this.bullets.splice(index, 1);
      }
    };

    return PrivateBulletFactory;

  })();

  BulletFactory.getInstance = function() {
    return instance != null ? instance : instance = new PrivateBulletFactory();
  };

  return BulletFactory;

})();

window.BulletFactory = BulletFactory;
var EnemyFactory;

EnemyFactory = (function() {
  var PrivateEnemyFactory, instance;

  function EnemyFactory() {}

  instance = null;

  PrivateEnemyFactory = (function() {
    function PrivateEnemyFactory() {
      var loader;
      this.interval = 5;
      this.lastEnemy = 0;
      this.enemies = [];
      loader = new THREE.JSONLoader();
      loader.load('/models/enemy.js', this.enemyCallback);
    }

    PrivateEnemyFactory.prototype.enemyCallback = function(g, m) {
      var obj, self;
      self = app.enemyFactory;
      obj = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m));
      obj.scale.set(10, 12, 10);
      return self.enemy = obj;
    };

    PrivateEnemyFactory.prototype.placeGates = function() {
      var a, b, x, y, z;
      this.lastGate -= this.interval;
      x = (Math.random() * 800) - 400;
      y = 50;
      z = -1000;
      a = this.gate.clone();
      b = a.clone();
      a.position.set(x, y, z);
      b.position.set(x + this.gapSize, y, z);
      app.scene.add(a);
      app.scene.add(b);
      this.gates.push(a);
      return this.gates.push(b);
    };

    PrivateEnemyFactory.prototype.placeEnemy = function() {
      var a, x, y, z;
      this.lastEnemy -= this.interval;
      x = (Math.random() * 800) - 400;
      y = 50;
      z = -1000;
      a = this.enemy.clone();
      a.position.set(x, y, z);
      a.geometry.computeBoundingBox();
      app.scene.add(a);
      return this.enemies.push(a);
    };

    PrivateEnemyFactory.prototype.updateEnemies = function(delta) {
      var enemy, _i, _len, _ref, _results;
      this.lastEnemy += delta;
      if (this.lastEnemy >= this.interval) {
        this.placeEnemy();
      }
      _ref = this.enemies;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        enemy = _ref[_i];
        enemy.position.z += 2;
        if (enemy.position.z > app.hero.model.position.z + 400) {
          _results.push(this.removeEnemy(enemy));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    PrivateEnemyFactory.prototype.removeEnemy = function(e) {
      var index;
      app.scene.remove(e);
      index = this.enemies.indexOf(e);
      if (index === !-1) {
        return this.enemies.splice(index, 1);
      }
    };

    return PrivateEnemyFactory;

  })();

  EnemyFactory.getInstance = function() {
    return instance != null ? instance : instance = new PrivateEnemyFactory();
  };

  return EnemyFactory;

})();

window.EnemyFactory = EnemyFactory;
var GateFactory;

GateFactory = (function() {
  var PrivateGateFactory, instance;

  function GateFactory() {}

  instance = null;

  PrivateGateFactory = (function() {
    function PrivateGateFactory() {
      var loader;
      this.gapSize = 200;
      this.interval = 3;
      this.lastGate = 0;
      this.gates = [];
      loader = new THREE.JSONLoader();
      loader.load('/models/gate.js', this.gateCallback);
    }

    PrivateGateFactory.prototype.gateCallback = function(g, m) {
      var obj, self;
      self = app.gateFactory;
      obj = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m));
      obj.scale.set(10, 12, 10);
      return self.gate = obj;
    };

    PrivateGateFactory.prototype.placeGates = function() {
      var a, b, x, y, z;
      this.lastGate -= this.interval;
      x = (Math.random() * 800) - 400;
      y = 50;
      z = -1000;
      a = this.gate.clone();
      b = a.clone();
      a.position.set(x, y, z);
      b.position.set(x + this.gapSize, y, z);
      app.scene.add(a);
      app.scene.add(b);
      this.gates.push(a);
      return this.gates.push(b);
    };

    PrivateGateFactory.prototype.updateGates = function(delta) {
      var g, _i, _len, _ref, _results;
      this.lastGate += delta;
      if (this.lastGate >= this.interval) {
        this.placeGates();
      }
      _ref = this.gates;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        g = _ref[_i];
        g.position.z += 1;
        if (g.position.z > app.hero.model.position.z + 400) {
          _results.push(app.scene.remove(g));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    PrivateGateFactory.prototype.removeGates = function(g) {
      var index;
      app.scene.remove(g);
      index = this.gates.indexOf(e);
      if (index === !-1) {
        return this.gates.splice(index, 1);
      }
    };

    return PrivateGateFactory;

  })();

  GateFactory.getInstance = function() {
    return instance != null ? instance : instance = new PrivateGateFactory();
  };

  return GateFactory;

})();

window.GateFactory = GateFactory;
var Hero;

Hero = (function() {
  function Hero() {
    var loader;
    loader = new THREE.JSONLoader();
    loader.load('/models/hero.js', this.heroCallback);
  }

  Hero.prototype.heroCallback = function(g, m) {
    var obj, self;
    self = app.hero;
    obj = new THREE.Mesh(g, new THREE.MeshFaceMaterial(m));
    obj.rotation.x = -1.57;
    obj.position.y = 100;
    obj.scale.set(6, 6, 6);
    self.model = obj;
    return app.scene.add(self.model);
  };

  Hero.prototype.increment = function(direction) {
    if (direction === 'z') {
      this.model.position.y += 25;
    }
    if (direction === 'x') {
      this.model.rotation.y = -5;
      return this.model.position.x -= 25;
    }
  };

  Hero.prototype.decrement = function(direction) {
    if (direction === 'z' && this.model.position.y > 25) {
      this.model.position.y -= 25;
    }
    if (direction === 'x') {
      this.model.rotation.y = 5;
      return this.model.position.x += 25;
    }
  };

  Hero.prototype.setYRotation = function(angle) {
    return this.model.rotation.y = 0;
  };

  return Hero;

})();

window.Hero = Hero;
var SpaceGame,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SpaceGame = (function(_super) {
  __extends(SpaceGame, _super);

  function SpaceGame() {
    SpaceGame.__super__.constructor.call(this);
    this.clock = new THREE.Clock();
    this.camera.position.z = 500;
    this.init();
  }

  SpaceGame.prototype.init = function() {
    this.loadModels();
    this.setupKeys();
    return this.drawScene();
  };

  SpaceGame.prototype.loadModels = function() {
    this.hero = new Hero();
    this.bulletFactory = BulletFactory.getInstance();
    this.gateFactory = GateFactory.getInstance();
    this.enemyFactory = EnemyFactory.getInstance();
    return this.clock.start();
  };

  SpaceGame.prototype.updateObjects = function() {
    var delta;
    delta = this.clock.getDelta();
    this.bulletFactory.updateBullets();
    this.gateFactory.updateGates(delta);
    return this.enemyFactory.updateEnemies(delta);
  };

  SpaceGame.prototype.drawScene = function() {
    this.planeMesh = new THREE.Mesh(new THREE.CubeGeometry(100, 1, 100), new THREE.MeshBasicMaterial({
      color: 0x085A14
    }), 0);
    this.planeMesh.scale.set(20, 0.01, 20);
    this.planeMesh.position.set(0, 0, 0);
    return this.scene.add(this.planeMesh);
  };

  SpaceGame.prototype.handleInput = function(direction) {
    if (direction === 'up') {
      return this.hero.increment('z');
    } else if (direction === 'down') {
      return this.hero.decrement('z');
    } else if (direction === 'left') {
      return this.hero.increment('x');
    } else if (direction === 'right') {
      return this.hero.decrement('x');
    }
  };

  SpaceGame.prototype.setupKeys = function() {
    var self;
    self = this;
    this.k.down(['w', 'up'], function() {
      return self.handleInput('up');
    });
    this.k.up(['w', 'up'], function() {});
    this.k.down(['s', 'down'], function() {
      return self.handleInput('down');
    });
    this.k.up(['s', 'down'], function() {});
    this.k.down(['a', 'left'], function() {
      return self.handleInput('left');
    });
    this.k.up(['a', 'left'], function() {
      return self.hero.setYRotation(0);
    });
    this.k.down(['d', 'right'], function() {
      return self.handleInput('right');
    });
    this.k.up(['d', 'right'], function() {
      return self.hero.setYRotation(0);
    });
    return this.k.down('space', function() {
      return self.bulletFactory.shootBullet();
    });
  };

  SpaceGame.prototype.render = function() {
    this.updateObjects();
    return this.renderer.render(this.scene, this.currentCamera);
  };

  return SpaceGame;

})(App);

window.SpaceGame = SpaceGame;

window.app = new SpaceGame();

window.animate();
