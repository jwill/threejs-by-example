{
	"metadata": {
		"formatVersion" : 3.2,
		"type"		: "scene",
		"generatedBy"	: "SceneExporter",
		"objects"       : 6,
		"geometries"    : 4,
		"materials"     : 4,
		"textures"      : 0
	},

	"urlBaseType": "relativeToScene",

	"objects" :
	{
		"Camera" : {
			"type"     : "PerspectiveCamera",
			"fov"      : 50,
			"aspect"   : 1.642526964560863,
			"near"     : 1,
			"far"      : 5000,
			"position" : [741.7503585102886,107.20934395417527,-28.39873269663679]
		},

		"Floor" : {
			"geometry" : "Plane 4",
			"material" : "FloorMaterial",
			"position" : [0,0,0],
			"rotation" : [-1.57,0,0],
			"scale"	   : [1.91,1.91,1.91],
			"visible"  : true
		},

		"Ramp1" : {
			"geometry" : "Plane 5",
			"material" : "Ramp1Material",
			"position" : [-89.17,150.33,119.27],
			"rotation" : [-2,0,0],
			"scale"	   : [1.26,1.26,1.26],
			"visible"  : true
		},

		"Ramp2" : {
			"geometry" : "Plane 6",
			"material" : "Ramp2Material",
			"position" : [-99.07648838323568,106.81209726542156,-66.88761131109162],
			"rotation" : [-0.84,0,0],
			"scale"	   : [1.73,0.77,0.78],
			"visible"  : true
		},

		"Ball" : {
			"geometry" : "Sphere 7",
			"material" : "BallMaterial",
			"position" : [-58.76,223.94,16.66],
			"rotation" : [0,0,0],
			"scale"	   : [0.19,0.19,0.19],
			"visible"  : true
		},

		"Light 14" : {
			"type"  : "AmbientLight",
			"color" : 2236962
		}
	},

	"geometries" :
	{
		"Plane 4": {
			"type"    : "plane",
			"width"  : 200,
			"height"  : 200,
			"widthSegments"  : 1,
			"heightSegments" : 1
		},

		"Plane 5": {
			"type"    : "plane",
			"width"  : 200,
			"height"  : 200,
			"widthSegments"  : 1,
			"heightSegments" : 1
		},

		"Plane 6": {
			"type"    : "plane",
			"width"  : 200,
			"height"  : 200,
			"widthSegments"  : 1,
			"heightSegments" : 1
		},

		"Sphere 7": {
			"type"    : "sphere",
			"radius"  : 75,
			"widthSegments"  : 32,
			"heightSegments" : 16
		}
	},

	"materials" :
	{
		"FloorMaterial": {
			"type"    : "MeshPhongMaterial",
			"parameters"  : {
				"color"  : 16777215,
				"ambient"  : 16777215,
				"emissive"  : 11567156,
				"specular"  : 1118481,
				"shininess" : 30,
				"bumpScale"  : 1,
				"reflectivity"  : 1,
				"transparent" : false,
				"opacity" : 1,
				"wireframe" : false,
				"wireframeLinewidth" : 1
			}
		},

		"Ramp1Material": {
			"type"    : "MeshPhongMaterial",
			"parameters"  : {
				"color"  : 16777215,
				"ambient"  : 16777215,
				"emissive"  : 14424261,
				"specular"  : 1118481,
				"shininess" : 30,
				"bumpScale"  : 1,
				"reflectivity"  : 1,
				"transparent" : false,
				"opacity" : 1,
				"wireframe" : false,
				"wireframeLinewidth" : 1
			}
		},

		"Ramp2Material": {
			"type"    : "MeshPhongMaterial",
			"parameters"  : {
				"color"  : 16777215,
				"ambient"  : 16777215,
				"emissive"  : 13709874,
				"specular"  : 1118481,
				"shininess" : 30,
				"bumpScale"  : 1,
				"reflectivity"  : 1,
				"transparent" : false,
				"opacity" : 1,
				"wireframe" : false,
				"wireframeLinewidth" : 1
			}
		},

		"BallMaterial": {
			"type"    : "MeshPhongMaterial",
			"parameters"  : {
				"color"  : 16777215,
				"ambient"  : 16777215,
				"emissive"  : 12820243,
				"specular"  : 1118481,
				"shininess" : 30,
				"bumpScale"  : 1,
				"reflectivity"  : 1,
				"transparent" : false,
				"opacity" : 1,
				"wireframe" : false,
				"wireframeLinewidth" : 1
			}
		}
	},

	"textures" :
	{
	
	},

	"fogs" :
	{
	
	},

	"transform" :
	{
		"position"  : [0,0,0],
		"rotation"  : [0,0,0],
		"scale"     : [1,1,1]
	},

	"defaults" :
	{
		"camera"  : "Camera",
		"fog"  	  : ""
	}
}
