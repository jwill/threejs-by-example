# Only for stuff in index.html

class Index 
  constructor: () ->
    self = this
    $('.btn').on('click', (evt) ->
      self.handleEvent evt.target.textContent

    )

  handleEvent: (text) ->
    switch text
      when 'Lesson 01'
        console.log 'This does nothing'
      when 'Lesson 02'
        window.app = new Lesson02()
      when 'Lesson 03'
        window.app = new Lesson03()
      when 'Lesson 04'
        window.app = new Lesson04()
      when 'Lesson 05'
        window.app = new Lesson05()
      when 'Lesson 06'
        window.app = new Lesson06()


    animate() if app.rAF is undefined
    

new Index()
