class App
	constructor: () ->
		height = 480
		width = 640
		
		fov = 45
		aspect = width / height
		near = 0.1
		far = 10000
		
		@renderer = new THREE.WebGLRenderer({autoClear:true})
		@renderer.setClearColor(new THREE.Color(0x000000))
		@renderer.setSize(width, height)
		
		@camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
		@camera.position.z = 100
		
		@scene = new THREE.Scene()
		
		$("#container").get(0).appendChild(@renderer.domElement)
		
		@scene.add(@camera)
		
	makeGeometry: (verts, faces) ->
		g = new THREE.Geometry()
		for v in verts
			g.vertices.push(new THREE.Vector3(v[0],v[1],v[2]))
		for f in faces
			g.faces.push(new THREE.Face3(f[0],f[1],f[2]))
			
		return g


	render: () ->
		@renderer.render(@scene, @camera)
		
window.App = App
	
window.animate = () ->
	requestAnimationFrame(window.animate)
	window.app.render()
