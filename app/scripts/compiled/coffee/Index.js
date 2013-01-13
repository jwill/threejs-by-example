(function() {
  var Index;

  Index = (function() {

    function Index() {
      var self;
      self = this;
      $('.btn').on('click', function(evt) {
        return self.handleEvent(evt.target.textContent);
      });
    }

    Index.prototype.handleEvent = function(text) {
      switch (text) {
        case 'Lesson 01':
          console.log('This does nothing');
          break;
        case 'Lesson 02':
          window.app = new Lesson02();
          break;
        case 'Lesson 03':
          window.app = new Lesson03();
          break;
        case 'Lesson 04':
          window.app = new Lesson04();
          break;
        case 'Lesson 05':
          window.app = new Lesson05();
          break;
        case 'Lesson 06':
          window.app = new Lesson06();
      }
      if (app.rAF === void 0) {
        return animate();
      }
    };

    return Index;

  })();

  new Index();

}).call(this);
