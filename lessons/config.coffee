exports.config =
  # See http://brunch.io/#documentation for docs.
  jsWrapper: 'raw'
  files:
    javascripts:
      joinTo: 
        'js/app.js': /^app/
        'js/vendor.js': /^vendor/
      order: 
        before: [
      	  'vendor/three.min.js',
          'vendor/ammo.js',
          'vendor/jquery.min.js'
        ]
    stylesheets:
      joinTo: 'css/app.css'
    templates:
      joinTo: 'js/app.js'
  modules:
    wrapper: false
