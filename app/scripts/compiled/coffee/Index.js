(function() {
  var Index, index;

  Index = (function() {

    function Index() {
      var self;
      self = this;
      $('.btn').on('click', function(evt) {
        return self.handleEvent(evt.target.textContent);
      });
      this.initCodeEditor();
    }

    Index.prototype.initCodeEditor = function() {
      this.editor = ace.edit("editor");
      this.editor.setTheme("ace/theme/chrome");
      return this.editor.getSession().setMode("ace/mode/coffee");
    };

    Index.prototype.handleEvent = function(text) {
      var self, uri;
      self = this;
      text = text.replace(' ', '');
      switch (text) {
        case 'Lesson01':
          window.app = new App();
          break;
        case 'Lesson02':
          window.app = new Lesson02();
          break;
        case 'Lesson03':
          window.app = new Lesson03();
          break;
        case 'Lesson04':
          window.app = new Lesson04();
          break;
        case 'Lesson05':
          window.app = new Lesson05();
          break;
        case 'Lesson06':
          window.app = new Lesson06();
          break;
        case 'Lesson13':
          window.app = new Lesson13();
      }
      if (text === "Lesson01") {
        text = "App";
      }
      uri = "scripts/coffee/" + text + ".coffee";
      $.get(uri, function(response) {
        return self.editor.setValue(response.trim());
      });
      return window.animate();
    };

    return Index;

  })();

  index = new Index();

  index.handleEvent("Lesson01");

  index.editor.clearSelection();

}).call(this);
