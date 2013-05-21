{
	"metadata": {
		"formatVersion" : 3.2,
		"type"		: "scene",
		"generatedBy"	: "SceneExporter",
		"objects"       : 5,
		"geometries"    : 3,
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
			"position" : [727.0547771425239,102.9474190836152,31.90893195105912]
		},

		"Floor" : {
			"geometry" : "Cube 4",
			"material" : "Material_10",
			"position" : [0,0,0],
			"rotation" : [0,0,0],
			"scale"	   : [4,0.01,4],
			"visible"  : true
		},

		"Ramp1" : {
			"geometry" : "Cube 5",
			"material" : "Material_11",
			"position" : [-89.67,150,119],
			"rotation" : [2.45,0,0],
			"scale"	   : [3.99,0.01,1.93],
			"visible"  : true
		},

		"Ramp2" : {
			"geometry" : "Cube 5",
			"material" : "Material_12",
			"position" : [-99,106,-66],
			"rotation" : [0.71,0,0],
			"scale"	   : [3.99,0.01,1.93],
			"visible"  : true
		},

		"Ball" : {
			"geometry" : "Sphere 6",
			"material" : "Material_14",
			"position" : [-45.72,258.48,80.74],
			"rotation" : [0,0,0],
			"scale"	   : [1,1,1],
			"visible"  : true
		}
	},

	"geometries" :
	{
		"Cube 4": {
			"type"    : "cube",
			"width"  : 100,
			"height"  : 1,
			"depth"  : 100,
			"widthSegments"  : 1,
			"heightSegments" : 1,
			"depthSegments" : 1
		},

		"Cube 5": {
			"type"    : "cube",
			"width"  : 100,
			"height"  : 1,
			"depth"  : 100,
			"widthSegments"  : 1,
			"heightSegments" : 1,
			"depthSegments" : 1
		},

		"Sphere 6": {
			"type"    : "sphere",
			"radius"  : 10,
			"widthSegments"  : 32,
			"heightSegments" : 16
		}
	},

	"materials" :
	{
		"Material_10": {
			"type"    : "MeshBasicMaterial",
			"parameters"  : {
				"color"  : 11899947,
				"reflectivity"  : 1,
				"transparent" : false,
				"opacity" : 1,
				"wireframe" : false,
				"wireframeLinewidth" : 1
			}
		},

		"Material_11": {
			"type"    : "MeshBasicMaterial",
			"parameters"  : {
				"color"  : 10954535,
				"reflectivity"  : 1,
				"transparent" : false,
				"opacity" : 1,
				"wireframe" : false,
				"wireframeLinewidth" : 1
			}
		},

		"Material_12": {
			"type"    : "MeshBasicMaterial",
			"parameters"  : {
				"color"  : 4664286,
				"reflectivity"  : 1,
				"transparent" : false,
				"opacity" : 1,
				"wireframe" : false,
				"wireframeLinewidth" : 1
			}
		},

		"Material_14": {
			"type"    : "MeshBasicMaterial",
			"parameters"  : {
				"color"  : 13816363,
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
