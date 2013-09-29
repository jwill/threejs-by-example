# Only for stuff in index.html

class Index
  constructor: () ->
    self = this
    $('.btn').on('click', (evt) ->
      self.handleEvent evt.target.textContent

    )
    @initCodeEditor()

  initCodeEditor: () ->
    @editor = ace.edit "editor"
    @editor.setTheme "ace/theme/chrome"
    @editor.getSession().setMode "ace/mode/coffee"

  handleEvent: (text) ->
    self = this
    text = text.replace(' ', '')
    switch text
      when 'Lesson01'
        window.app = new App()
      when 'Lesson02'
        window.app = new Lesson02()
      when 'Lesson03'
        window.app = new Lesson03()
      when 'Lesson04'
        window.app = new Lesson04()
      when 'Lesson05'
        window.app = new Lesson05()
      when 'Lesson06'
        window.app = new Lesson06()
      when 'Lesson13'
        window.app = new Lesson13()
      when 'Lesson14'
        window.app = new Lesson14()
      when 'LoadScene'
        window.app = new LoadScene()
      when 'Physics'
        window.app = new Physics()
      when 'ShaderWithUniform'
        window.app = new ShaderWithUniform()

    text = "App" if text is "Lesson01"
    uri = "scripts/coffee/#{text}.coffee"
    
    $.get(uri, (response) ->
      self.editor.setValue response.trim()
    )
    window.animate()
    

index = new Index()
index.handleEvent "Lesson01"  # Init with the code from the base app
index.editor.clearSelection()
