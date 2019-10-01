var p, ss = {}, lib = {}, an = {};

lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Blood = function() {
	this.initialize(application.images.Blood);
}).prototype = p = new createjs.Bitmap();
p.mouseEnabled = false;
p.nominalBounds = new createjs.Rectangle(0,0,18,18);


(lib.Comp2_00000 = function() {
	this.initialize(application.images.Comp2_00000);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00001 = function() {
	this.initialize(application.images.Comp2_00001);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00002 = function() {
	this.initialize(application.images.Comp2_00002);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00003 = function() {
	this.initialize(application.images.Comp2_00003);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00004 = function() {
	this.initialize(application.images.Comp2_00004);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00005 = function() {
	this.initialize(application.images.Comp2_00005);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00006 = function() {
	this.initialize(application.images.Comp2_00006);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00007 = function() {
	this.initialize(application.images.Comp2_00007);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00008 = function() {
	this.initialize(application.images.Comp2_00008);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00009 = function() {
	this.initialize(application.images.Comp2_00009);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00010 = function() {
	this.initialize(application.images.Comp2_00010);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00011 = function() {
	this.initialize(application.images.Comp2_00011);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00012 = function() {
	this.initialize(application.images.Comp2_00012);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00013 = function() {
	this.initialize(application.images.Comp2_00013);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00014 = function() {
	this.initialize(application.images.Comp2_00014);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00015 = function() {
	this.initialize(application.images.Comp2_00015);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00016 = function() {
	this.initialize(application.images.Comp2_00016);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00017 = function() {
	this.initialize(application.images.Comp2_00017);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00018 = function() {
	this.initialize(application.images.Comp2_00018);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00019 = function() {
	this.initialize(application.images.Comp2_00019);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00020 = function() {
	this.initialize(application.images.Comp2_00020);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00021 = function() {
	this.initialize(application.images.Comp2_00021);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00022 = function() {
	this.initialize(application.images.Comp2_00022);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00023 = function() {
	this.initialize(application.images.Comp2_00023);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Comp2_00024 = function() {
	this.initialize(application.images.Comp2_00024);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.bg3 = function() {
	this.initialize(application.images.bg3);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.bg2 = function() {
	this.initialize(application.images.bg2);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.ninjablue_sm = function() {
	this.initialize(application.images.ninjablue_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,31,40);


(lib.ninjagreen_sm = function() {
	this.initialize(application.images.ninjagreen_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,31,40);


(lib.ninjared_sm = function() {
	this.initialize(application.images.ninjared_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,31,40);


(lib.bg1 = function() {
	this.initialize(application.images.bg1);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.retroFF_dialogue = function() {
	this.initialize(application.images.retroFF_dialogue);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,900,300);


(lib.shield_piece1_sm = function() {
	this.initialize(application.images.shield_piece1_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,120,107);


(lib.shield_piece2_sm = function() {
	this.initialize(application.images.shield_piece2_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,120,107);


(lib.shield_piece3_sm = function() {
	this.initialize(application.images.shield_piece3_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,120,107);


(lib.shield_piece4_sm = function() {
	this.initialize(application.images.shield_piece4_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,120,107);


(lib.shield_piece5_sm = function() {
	this.initialize(application.images.shield_piece5_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,120,107);


(lib.shield_sm = function() {
	this.initialize(application.images.shield_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,165,185);


(lib.shield_supersmall = function() {
	this.initialize(application.images.shield_supersmall);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,18,20);


(lib.snake_1_00000 = function() {
	this.initialize(application.images.snake_1_00000);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00001 = function() {
	this.initialize(application.images.snake_1_00001);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00002 = function() {
	this.initialize(application.images.snake_1_00002);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00003 = function() {
	this.initialize(application.images.snake_1_00003);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00004 = function() {
	this.initialize(application.images.snake_1_00004);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00005 = function() {
	this.initialize(application.images.snake_1_00005);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00006 = function() {
	this.initialize(application.images.snake_1_00006);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00007 = function() {
	this.initialize(application.images.snake_1_00007);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00008 = function() {
	this.initialize(application.images.snake_1_00008);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00009 = function() {
	this.initialize(application.images.snake_1_00009);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00010 = function() {
	this.initialize(application.images.snake_1_00010);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00011 = function() {
	this.initialize(application.images.snake_1_00011);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00012 = function() {
	this.initialize(application.images.snake_1_00012);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00013 = function() {
	this.initialize(application.images.snake_1_00013);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00014 = function() {
	this.initialize(application.images.snake_1_00014);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00015 = function() {
	this.initialize(application.images.snake_1_00015);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00016 = function() {
	this.initialize(application.images.snake_1_00016);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00017 = function() {
	this.initialize(application.images.snake_1_00017);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00018 = function() {
	this.initialize(application.images.snake_1_00018);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00019 = function() {
	this.initialize(application.images.snake_1_00019);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00020 = function() {
	this.initialize(application.images.snake_1_00020);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00021 = function() {
	this.initialize(application.images.snake_1_00021);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00022 = function() {
	this.initialize(application.images.snake_1_00022);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00023 = function() {
	this.initialize(application.images.snake_1_00023);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00024 = function() {
	this.initialize(application.images.snake_1_00024);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00025 = function() {
	this.initialize(application.images.snake_1_00025);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00026 = function() {
	this.initialize(application.images.snake_1_00026);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00027 = function() {
	this.initialize(application.images.snake_1_00027);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00028 = function() {
	this.initialize(application.images.snake_1_00028);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00029 = function() {
	this.initialize(application.images.snake_1_00029);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00030 = function() {
	this.initialize(application.images.snake_1_00030);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00031 = function() {
	this.initialize(application.images.snake_1_00031);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00032 = function() {
	this.initialize(application.images.snake_1_00032);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00033 = function() {
	this.initialize(application.images.snake_1_00033);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00034 = function() {
	this.initialize(application.images.snake_1_00034);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00035 = function() {
	this.initialize(application.images.snake_1_00035);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00036 = function() {
	this.initialize(application.images.snake_1_00036);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00037 = function() {
	this.initialize(application.images.snake_1_00037);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00038 = function() {
	this.initialize(application.images.snake_1_00038);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00039 = function() {
	this.initialize(application.images.snake_1_00039);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00040 = function() {
	this.initialize(application.images.snake_1_00040);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00041 = function() {
	this.initialize(application.images.snake_1_00041);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00042 = function() {
	this.initialize(application.images.snake_1_00042);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00043 = function() {
	this.initialize(application.images.snake_1_00043);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00044 = function() {
	this.initialize(application.images.snake_1_00044);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00045 = function() {
	this.initialize(application.images.snake_1_00045);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00046 = function() {
	this.initialize(application.images.snake_1_00046);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00047 = function() {
	this.initialize(application.images.snake_1_00047);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00048 = function() {
	this.initialize(application.images.snake_1_00048);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00049 = function() {
	this.initialize(application.images.snake_1_00049);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00050 = function() {
	this.initialize(application.images.snake_1_00050);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00051 = function() {
	this.initialize(application.images.snake_1_00051);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00052 = function() {
	this.initialize(application.images.snake_1_00052);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00053 = function() {
	this.initialize(application.images.snake_1_00053);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00054 = function() {
	this.initialize(application.images.snake_1_00054);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00055 = function() {
	this.initialize(application.images.snake_1_00055);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00056 = function() {
	this.initialize(application.images.snake_1_00056);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00057 = function() {
	this.initialize(application.images.snake_1_00057);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00058 = function() {
	this.initialize(application.images.snake_1_00058);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00059 = function() {
	this.initialize(application.images.snake_1_00059);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00060 = function() {
	this.initialize(application.images.snake_1_00060);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00061 = function() {
	this.initialize(application.images.snake_1_00061);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00062 = function() {
	this.initialize(application.images.snake_1_00062);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00063 = function() {
	this.initialize(application.images.snake_1_00063);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00064 = function() {
	this.initialize(application.images.snake_1_00064);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00065 = function() {
	this.initialize(application.images.snake_1_00065);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00066 = function() {
	this.initialize(application.images.snake_1_00066);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00067 = function() {
	this.initialize(application.images.snake_1_00067);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00068 = function() {
	this.initialize(application.images.snake_1_00068);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00069 = function() {
	this.initialize(application.images.snake_1_00069);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00070 = function() {
	this.initialize(application.images.snake_1_00070);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00071 = function() {
	this.initialize(application.images.snake_1_00071);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00072 = function() {
	this.initialize(application.images.snake_1_00072);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00073 = function() {
	this.initialize(application.images.snake_1_00073);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.snake_1_00074 = function() {
	this.initialize(application.images.snake_1_00074);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,884,1080);


(lib.sword_piece1_sm = function() {
	this.initialize(application.images.sword_piece1_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,72,112);


(lib.sword_piece2_sm = function() {
	this.initialize(application.images.sword_piece2_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,72,112);


(lib.sword_sm = function() {
	this.initialize(application.images.sword_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,72,185);


(lib.sword_super_sm = function() {
	this.initialize(application.images.sword_super_sm);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,8,20);


(lib.twitchtactics_title_00000 = function() {
	this.initialize(application.images.twitchtactics_title_00000);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00001 = function() {
	this.initialize(application.images.twitchtactics_title_00001);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00002 = function() {
	this.initialize(application.images.twitchtactics_title_00002);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00003 = function() {
	this.initialize(application.images.twitchtactics_title_00003);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00004 = function() {
	this.initialize(application.images.twitchtactics_title_00004);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00005 = function() {
	this.initialize(application.images.twitchtactics_title_00005);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00006 = function() {
	this.initialize(application.images.twitchtactics_title_00006);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00007 = function() {
	this.initialize(application.images.twitchtactics_title_00007);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00008 = function() {
	this.initialize(application.images.twitchtactics_title_00008);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00009 = function() {
	this.initialize(application.images.twitchtactics_title_00009);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00010 = function() {
	this.initialize(application.images.twitchtactics_title_00010);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00011 = function() {
	this.initialize(application.images.twitchtactics_title_00011);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00012 = function() {
	this.initialize(application.images.twitchtactics_title_00012);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00013 = function() {
	this.initialize(application.images.twitchtactics_title_00013);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00014 = function() {
	this.initialize(application.images.twitchtactics_title_00014);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00015 = function() {
	this.initialize(application.images.twitchtactics_title_00015);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00016 = function() {
	this.initialize(application.images.twitchtactics_title_00016);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00017 = function() {
	this.initialize(application.images.twitchtactics_title_00017);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00018 = function() {
	this.initialize(application.images.twitchtactics_title_00018);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00019 = function() {
	this.initialize(application.images.twitchtactics_title_00019);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00020 = function() {
	this.initialize(application.images.twitchtactics_title_00020);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00021 = function() {
	this.initialize(application.images.twitchtactics_title_00021);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00022 = function() {
	this.initialize(application.images.twitchtactics_title_00022);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00023 = function() {
	this.initialize(application.images.twitchtactics_title_00023);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00024 = function() {
	this.initialize(application.images.twitchtactics_title_00024);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00025 = function() {
	this.initialize(application.images.twitchtactics_title_00025);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00026 = function() {
	this.initialize(application.images.twitchtactics_title_00026);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00027 = function() {
	this.initialize(application.images.twitchtactics_title_00027);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00028 = function() {
	this.initialize(application.images.twitchtactics_title_00028);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00029 = function() {
	this.initialize(application.images.twitchtactics_title_00029);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00030 = function() {
	this.initialize(application.images.twitchtactics_title_00030);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00031 = function() {
	this.initialize(application.images.twitchtactics_title_00031);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00032 = function() {
	this.initialize(application.images.twitchtactics_title_00032);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00033 = function() {
	this.initialize(application.images.twitchtactics_title_00033);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00034 = function() {
	this.initialize(application.images.twitchtactics_title_00034);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00035 = function() {
	this.initialize(application.images.twitchtactics_title_00035);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00036 = function() {
	this.initialize(application.images.twitchtactics_title_00036);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00037 = function() {
	this.initialize(application.images.twitchtactics_title_00037);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00038 = function() {
	this.initialize(application.images.twitchtactics_title_00038);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00039 = function() {
	this.initialize(application.images.twitchtactics_title_00039);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00040 = function() {
	this.initialize(application.images.twitchtactics_title_00040);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00041 = function() {
	this.initialize(application.images.twitchtactics_title_00041);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00042 = function() {
	this.initialize(application.images.twitchtactics_title_00042);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00043 = function() {
	this.initialize(application.images.twitchtactics_title_00043);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00044 = function() {
	this.initialize(application.images.twitchtactics_title_00044);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00045 = function() {
	this.initialize(application.images.twitchtactics_title_00045);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00046 = function() {
	this.initialize(application.images.twitchtactics_title_00046);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00047 = function() {
	this.initialize(application.images.twitchtactics_title_00047);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00048 = function() {
	this.initialize(application.images.twitchtactics_title_00048);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00049 = function() {
	this.initialize(application.images.twitchtactics_title_00049);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00050 = function() {
	this.initialize(application.images.twitchtactics_title_00050);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00051 = function() {
	this.initialize(application.images.twitchtactics_title_00051);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00052 = function() {
	this.initialize(application.images.twitchtactics_title_00052);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00053 = function() {
	this.initialize(application.images.twitchtactics_title_00053);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00054 = function() {
	this.initialize(application.images.twitchtactics_title_00054);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00055 = function() {
	this.initialize(application.images.twitchtactics_title_00055);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00056 = function() {
	this.initialize(application.images.twitchtactics_title_00056);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00057 = function() {
	this.initialize(application.images.twitchtactics_title_00057);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00058 = function() {
	this.initialize(application.images.twitchtactics_title_00058);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00059 = function() {
	this.initialize(application.images.twitchtactics_title_00059);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00060 = function() {
	this.initialize(application.images.twitchtactics_title_00060);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00061 = function() {
	this.initialize(application.images.twitchtactics_title_00061);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00062 = function() {
	this.initialize(application.images.twitchtactics_title_00062);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00063 = function() {
	this.initialize(application.images.twitchtactics_title_00063);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00064 = function() {
	this.initialize(application.images.twitchtactics_title_00064);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00065 = function() {
	this.initialize(application.images.twitchtactics_title_00065);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00066 = function() {
	this.initialize(application.images.twitchtactics_title_00066);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00067 = function() {
	this.initialize(application.images.twitchtactics_title_00067);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00068 = function() {
	this.initialize(application.images.twitchtactics_title_00068);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00069 = function() {
	this.initialize(application.images.twitchtactics_title_00069);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00070 = function() {
	this.initialize(application.images.twitchtactics_title_00070);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00071 = function() {
	this.initialize(application.images.twitchtactics_title_00071);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00072 = function() {
	this.initialize(application.images.twitchtactics_title_00072);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00073 = function() {
	this.initialize(application.images.twitchtactics_title_00073);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00074 = function() {
	this.initialize(application.images.twitchtactics_title_00074);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00075 = function() {
	this.initialize(application.images.twitchtactics_title_00075);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00076 = function() {
	this.initialize(application.images.twitchtactics_title_00076);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00077 = function() {
	this.initialize(application.images.twitchtactics_title_00077);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00078 = function() {
	this.initialize(application.images.twitchtactics_title_00078);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00079 = function() {
	this.initialize(application.images.twitchtactics_title_00079);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00080 = function() {
	this.initialize(application.images.twitchtactics_title_00080);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00081 = function() {
	this.initialize(application.images.twitchtactics_title_00081);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00082 = function() {
	this.initialize(application.images.twitchtactics_title_00082);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00083 = function() {
	this.initialize(application.images.twitchtactics_title_00083);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00084 = function() {
	this.initialize(application.images.twitchtactics_title_00084);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00085 = function() {
	this.initialize(application.images.twitchtactics_title_00085);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00086 = function() {
	this.initialize(application.images.twitchtactics_title_00086);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00087 = function() {
	this.initialize(application.images.twitchtactics_title_00087);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00088 = function() {
	this.initialize(application.images.twitchtactics_title_00088);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00089 = function() {
	this.initialize(application.images.twitchtactics_title_00089);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00090 = function() {
	this.initialize(application.images.twitchtactics_title_00090);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00091 = function() {
	this.initialize(application.images.twitchtactics_title_00091);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00092 = function() {
	this.initialize(application.images.twitchtactics_title_00092);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00093 = function() {
	this.initialize(application.images.twitchtactics_title_00093);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00094 = function() {
	this.initialize(application.images.twitchtactics_title_00094);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00095 = function() {
	this.initialize(application.images.twitchtactics_title_00095);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00096 = function() {
	this.initialize(application.images.twitchtactics_title_00096);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00097 = function() {
	this.initialize(application.images.twitchtactics_title_00097);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00098 = function() {
	this.initialize(application.images.twitchtactics_title_00098);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00099 = function() {
	this.initialize(application.images.twitchtactics_title_00099);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00100 = function() {
	this.initialize(application.images.twitchtactics_title_00100);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00101 = function() {
	this.initialize(application.images.twitchtactics_title_00101);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00102 = function() {
	this.initialize(application.images.twitchtactics_title_00102);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00103 = function() {
	this.initialize(application.images.twitchtactics_title_00103);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00104 = function() {
	this.initialize(application.images.twitchtactics_title_00104);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00105 = function() {
	this.initialize(application.images.twitchtactics_title_00105);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00106 = function() {
	this.initialize(application.images.twitchtactics_title_00106);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00107 = function() {
	this.initialize(application.images.twitchtactics_title_00107);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00108 = function() {
	this.initialize(application.images.twitchtactics_title_00108);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00109 = function() {
	this.initialize(application.images.twitchtactics_title_00109);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00110 = function() {
	this.initialize(application.images.twitchtactics_title_00110);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00111 = function() {
	this.initialize(application.images.twitchtactics_title_00111);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00112 = function() {
	this.initialize(application.images.twitchtactics_title_00112);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00113 = function() {
	this.initialize(application.images.twitchtactics_title_00113);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00114 = function() {
	this.initialize(application.images.twitchtactics_title_00114);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00115 = function() {
	this.initialize(application.images.twitchtactics_title_00115);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00116 = function() {
	this.initialize(application.images.twitchtactics_title_00116);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00117 = function() {
	this.initialize(application.images.twitchtactics_title_00117);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00118 = function() {
	this.initialize(application.images.twitchtactics_title_00118);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00119 = function() {
	this.initialize(application.images.twitchtactics_title_00119);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00120 = function() {
	this.initialize(application.images.twitchtactics_title_00120);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00121 = function() {
	this.initialize(application.images.twitchtactics_title_00121);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00122 = function() {
	this.initialize(application.images.twitchtactics_title_00122);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00123 = function() {
	this.initialize(application.images.twitchtactics_title_00123);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00124 = function() {
	this.initialize(application.images.twitchtactics_title_00124);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00125 = function() {
	this.initialize(application.images.twitchtactics_title_00125);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00126 = function() {
	this.initialize(application.images.twitchtactics_title_00126);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00127 = function() {
	this.initialize(application.images.twitchtactics_title_00127);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00128 = function() {
	this.initialize(application.images.twitchtactics_title_00128);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00129 = function() {
	this.initialize(application.images.twitchtactics_title_00129);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00130 = function() {
	this.initialize(application.images.twitchtactics_title_00130);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00131 = function() {
	this.initialize(application.images.twitchtactics_title_00131);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00132 = function() {
	this.initialize(application.images.twitchtactics_title_00132);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00133 = function() {
	this.initialize(application.images.twitchtactics_title_00133);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00134 = function() {
	this.initialize(application.images.twitchtactics_title_00134);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00135 = function() {
	this.initialize(application.images.twitchtactics_title_00135);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00136 = function() {
	this.initialize(application.images.twitchtactics_title_00136);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00137 = function() {
	this.initialize(application.images.twitchtactics_title_00137);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00138 = function() {
	this.initialize(application.images.twitchtactics_title_00138);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00139 = function() {
	this.initialize(application.images.twitchtactics_title_00139);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00140 = function() {
	this.initialize(application.images.twitchtactics_title_00140);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00141 = function() {
	this.initialize(application.images.twitchtactics_title_00141);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00142 = function() {
	this.initialize(application.images.twitchtactics_title_00142);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00143 = function() {
	this.initialize(application.images.twitchtactics_title_00143);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00144 = function() {
	this.initialize(application.images.twitchtactics_title_00144);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00145 = function() {
	this.initialize(application.images.twitchtactics_title_00145);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00146 = function() {
	this.initialize(application.images.twitchtactics_title_00146);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00147 = function() {
	this.initialize(application.images.twitchtactics_title_00147);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00148 = function() {
	this.initialize(application.images.twitchtactics_title_00148);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00149 = function() {
	this.initialize(application.images.twitchtactics_title_00149);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00150 = function() {
	this.initialize(application.images.twitchtactics_title_00150);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00151 = function() {
	this.initialize(application.images.twitchtactics_title_00151);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00152 = function() {
	this.initialize(application.images.twitchtactics_title_00152);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00153 = function() {
	this.initialize(application.images.twitchtactics_title_00153);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00154 = function() {
	this.initialize(application.images.twitchtactics_title_00154);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00155 = function() {
	this.initialize(application.images.twitchtactics_title_00155);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00156 = function() {
	this.initialize(application.images.twitchtactics_title_00156);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00157 = function() {
	this.initialize(application.images.twitchtactics_title_00157);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00158 = function() {
	this.initialize(application.images.twitchtactics_title_00158);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00159 = function() {
	this.initialize(application.images.twitchtactics_title_00159);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00160 = function() {
	this.initialize(application.images.twitchtactics_title_00160);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00161 = function() {
	this.initialize(application.images.twitchtactics_title_00161);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00162 = function() {
	this.initialize(application.images.twitchtactics_title_00162);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00163 = function() {
	this.initialize(application.images.twitchtactics_title_00163);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00164 = function() {
	this.initialize(application.images.twitchtactics_title_00164);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00165 = function() {
	this.initialize(application.images.twitchtactics_title_00165);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00166 = function() {
	this.initialize(application.images.twitchtactics_title_00166);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00167 = function() {
	this.initialize(application.images.twitchtactics_title_00167);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00168 = function() {
	this.initialize(application.images.twitchtactics_title_00168);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00169 = function() {
	this.initialize(application.images.twitchtactics_title_00169);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00170 = function() {
	this.initialize(application.images.twitchtactics_title_00170);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00171 = function() {
	this.initialize(application.images.twitchtactics_title_00171);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00172 = function() {
	this.initialize(application.images.twitchtactics_title_00172);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00173 = function() {
	this.initialize(application.images.twitchtactics_title_00173);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00174 = function() {
	this.initialize(application.images.twitchtactics_title_00174);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00175 = function() {
	this.initialize(application.images.twitchtactics_title_00175);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00176 = function() {
	this.initialize(application.images.twitchtactics_title_00176);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00177 = function() {
	this.initialize(application.images.twitchtactics_title_00177);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00178 = function() {
	this.initialize(application.images.twitchtactics_title_00178);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00179 = function() {
	this.initialize(application.images.twitchtactics_title_00179);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00180 = function() {
	this.initialize(application.images.twitchtactics_title_00180);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00181 = function() {
	this.initialize(application.images.twitchtactics_title_00181);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00182 = function() {
	this.initialize(application.images.twitchtactics_title_00182);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00183 = function() {
	this.initialize(application.images.twitchtactics_title_00183);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00184 = function() {
	this.initialize(application.images.twitchtactics_title_00184);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00185 = function() {
	this.initialize(application.images.twitchtactics_title_00185);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00186 = function() {
	this.initialize(application.images.twitchtactics_title_00186);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00187 = function() {
	this.initialize(application.images.twitchtactics_title_00187);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00188 = function() {
	this.initialize(application.images.twitchtactics_title_00188);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00189 = function() {
	this.initialize(application.images.twitchtactics_title_00189);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00190 = function() {
	this.initialize(application.images.twitchtactics_title_00190);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00191 = function() {
	this.initialize(application.images.twitchtactics_title_00191);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00192 = function() {
	this.initialize(application.images.twitchtactics_title_00192);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00193 = function() {
	this.initialize(application.images.twitchtactics_title_00193);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00194 = function() {
	this.initialize(application.images.twitchtactics_title_00194);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00195 = function() {
	this.initialize(application.images.twitchtactics_title_00195);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00196 = function() {
	this.initialize(application.images.twitchtactics_title_00196);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00197 = function() {
	this.initialize(application.images.twitchtactics_title_00197);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00198 = function() {
	this.initialize(application.images.twitchtactics_title_00198);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00199 = function() {
	this.initialize(application.images.twitchtactics_title_00199);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.twitchtactics_title_00200 = function() {
	this.initialize(application.images.twitchtactics_title_00200);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.warrior_black = function() {
	this.initialize(application.images.warrior_black);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,25,40);


(lib.warrior_blonde = function() {
	this.initialize(application.images.warrior_blonde);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,25,40);


(lib.warrior_red = function() {
	this.initialize(application.images.warrior_red);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,25,40);


(lib.wizard_blue = function() {
	this.initialize(application.images.wizard_blue);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,32,40);


(lib.wizard_green = function() {
	this.initialize(application.images.wizard_green);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,32,40);


(lib.wizard_red = function() {
	this.initialize(application.images.wizard_red);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,32,40);


(lib.wizard_yellow = function() {
	this.initialize(application.images.wizard_yellow);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,32,40);


(lib.zombie_1_00000 = function() {
	this.initialize(application.images.zombie_1_00000);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00001 = function() {
	this.initialize(application.images.zombie_1_00001);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00002 = function() {
	this.initialize(application.images.zombie_1_00002);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00003 = function() {
	this.initialize(application.images.zombie_1_00003);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00004 = function() {
	this.initialize(application.images.zombie_1_00004);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00005 = function() {
	this.initialize(application.images.zombie_1_00005);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00006 = function() {
	this.initialize(application.images.zombie_1_00006);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00007 = function() {
	this.initialize(application.images.zombie_1_00007);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00008 = function() {
	this.initialize(application.images.zombie_1_00008);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00009 = function() {
	this.initialize(application.images.zombie_1_00009);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00010 = function() {
	this.initialize(application.images.zombie_1_00010);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00011 = function() {
	this.initialize(application.images.zombie_1_00011);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00012 = function() {
	this.initialize(application.images.zombie_1_00012);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00013 = function() {
	this.initialize(application.images.zombie_1_00013);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00014 = function() {
	this.initialize(application.images.zombie_1_00014);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00015 = function() {
	this.initialize(application.images.zombie_1_00015);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00016 = function() {
	this.initialize(application.images.zombie_1_00016);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00017 = function() {
	this.initialize(application.images.zombie_1_00017);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00018 = function() {
	this.initialize(application.images.zombie_1_00018);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00019 = function() {
	this.initialize(application.images.zombie_1_00019);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00020 = function() {
	this.initialize(application.images.zombie_1_00020);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00021 = function() {
	this.initialize(application.images.zombie_1_00021);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00022 = function() {
	this.initialize(application.images.zombie_1_00022);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00023 = function() {
	this.initialize(application.images.zombie_1_00023);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00024 = function() {
	this.initialize(application.images.zombie_1_00024);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00025 = function() {
	this.initialize(application.images.zombie_1_00025);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00026 = function() {
	this.initialize(application.images.zombie_1_00026);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00027 = function() {
	this.initialize(application.images.zombie_1_00027);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00028 = function() {
	this.initialize(application.images.zombie_1_00028);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00029 = function() {
	this.initialize(application.images.zombie_1_00029);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00030 = function() {
	this.initialize(application.images.zombie_1_00030);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00031 = function() {
	this.initialize(application.images.zombie_1_00031);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00032 = function() {
	this.initialize(application.images.zombie_1_00032);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00033 = function() {
	this.initialize(application.images.zombie_1_00033);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00034 = function() {
	this.initialize(application.images.zombie_1_00034);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00035 = function() {
	this.initialize(application.images.zombie_1_00035);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00036 = function() {
	this.initialize(application.images.zombie_1_00036);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00037 = function() {
	this.initialize(application.images.zombie_1_00037);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00038 = function() {
	this.initialize(application.images.zombie_1_00038);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00039 = function() {
	this.initialize(application.images.zombie_1_00039);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00040 = function() {
	this.initialize(application.images.zombie_1_00040);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00041 = function() {
	this.initialize(application.images.zombie_1_00041);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00042 = function() {
	this.initialize(application.images.zombie_1_00042);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00043 = function() {
	this.initialize(application.images.zombie_1_00043);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00044 = function() {
	this.initialize(application.images.zombie_1_00044);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00045 = function() {
	this.initialize(application.images.zombie_1_00045);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00046 = function() {
	this.initialize(application.images.zombie_1_00046);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00047 = function() {
	this.initialize(application.images.zombie_1_00047);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00048 = function() {
	this.initialize(application.images.zombie_1_00048);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00049 = function() {
	this.initialize(application.images.zombie_1_00049);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00050 = function() {
	this.initialize(application.images.zombie_1_00050);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00051 = function() {
	this.initialize(application.images.zombie_1_00051);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00052 = function() {
	this.initialize(application.images.zombie_1_00052);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00053 = function() {
	this.initialize(application.images.zombie_1_00053);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00054 = function() {
	this.initialize(application.images.zombie_1_00054);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00055 = function() {
	this.initialize(application.images.zombie_1_00055);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00056 = function() {
	this.initialize(application.images.zombie_1_00056);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00057 = function() {
	this.initialize(application.images.zombie_1_00057);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00058 = function() {
	this.initialize(application.images.zombie_1_00058);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00059 = function() {
	this.initialize(application.images.zombie_1_00059);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00060 = function() {
	this.initialize(application.images.zombie_1_00060);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00061 = function() {
	this.initialize(application.images.zombie_1_00061);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00062 = function() {
	this.initialize(application.images.zombie_1_00062);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00063 = function() {
	this.initialize(application.images.zombie_1_00063);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00064 = function() {
	this.initialize(application.images.zombie_1_00064);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00065 = function() {
	this.initialize(application.images.zombie_1_00065);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00066 = function() {
	this.initialize(application.images.zombie_1_00066);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00067 = function() {
	this.initialize(application.images.zombie_1_00067);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00068 = function() {
	this.initialize(application.images.zombie_1_00068);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00069 = function() {
	this.initialize(application.images.zombie_1_00069);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00070 = function() {
	this.initialize(application.images.zombie_1_00070);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00071 = function() {
	this.initialize(application.images.zombie_1_00071);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00072 = function() {
	this.initialize(application.images.zombie_1_00072);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00073 = function() {
	this.initialize(application.images.zombie_1_00073);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00074 = function() {
	this.initialize(application.images.zombie_1_00074);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00075 = function() {
	this.initialize(application.images.zombie_1_00075);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00076 = function() {
	this.initialize(application.images.zombie_1_00076);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00077 = function() {
	this.initialize(application.images.zombie_1_00077);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00078 = function() {
	this.initialize(application.images.zombie_1_00078);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00079 = function() {
	this.initialize(application.images.zombie_1_00079);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00080 = function() {
	this.initialize(application.images.zombie_1_00080);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00081 = function() {
	this.initialize(application.images.zombie_1_00081);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00082 = function() {
	this.initialize(application.images.zombie_1_00082);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00083 = function() {
	this.initialize(application.images.zombie_1_00083);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00084 = function() {
	this.initialize(application.images.zombie_1_00084);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00085 = function() {
	this.initialize(application.images.zombie_1_00085);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00086 = function() {
	this.initialize(application.images.zombie_1_00086);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00087 = function() {
	this.initialize(application.images.zombie_1_00087);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00088 = function() {
	this.initialize(application.images.zombie_1_00088);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00089 = function() {
	this.initialize(application.images.zombie_1_00089);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00090 = function() {
	this.initialize(application.images.zombie_1_00090);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00091 = function() {
	this.initialize(application.images.zombie_1_00091);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00092 = function() {
	this.initialize(application.images.zombie_1_00092);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00093 = function() {
	this.initialize(application.images.zombie_1_00093);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00094 = function() {
	this.initialize(application.images.zombie_1_00094);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00095 = function() {
	this.initialize(application.images.zombie_1_00095);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00096 = function() {
	this.initialize(application.images.zombie_1_00096);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00097 = function() {
	this.initialize(application.images.zombie_1_00097);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00098 = function() {
	this.initialize(application.images.zombie_1_00098);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.zombie_1_00099 = function() {
	this.initialize(application.images.zombie_1_00099);
}).prototype = p = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = createjs.extend(symbol, createjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zombie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zombie_1_00000();
	this.instance.parent = this;

	this.instance_1 = new lib.zombie_1_00001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.zombie_1_00002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.zombie_1_00003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.zombie_1_00004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.zombie_1_00005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.zombie_1_00006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.zombie_1_00007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.zombie_1_00008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.zombie_1_00009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.zombie_1_00010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.zombie_1_00011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.zombie_1_00012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.zombie_1_00013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.zombie_1_00014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.zombie_1_00015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.zombie_1_00016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.zombie_1_00017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.zombie_1_00018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.zombie_1_00019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.zombie_1_00020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.zombie_1_00021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.zombie_1_00022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.zombie_1_00023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.zombie_1_00024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.zombie_1_00025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.zombie_1_00026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.zombie_1_00027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.zombie_1_00028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.zombie_1_00029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.zombie_1_00030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.zombie_1_00031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.zombie_1_00032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.zombie_1_00033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.zombie_1_00034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.zombie_1_00035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.zombie_1_00036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.zombie_1_00037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.zombie_1_00038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.zombie_1_00039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.zombie_1_00040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.zombie_1_00041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.zombie_1_00042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.zombie_1_00043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.zombie_1_00044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.zombie_1_00045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.zombie_1_00046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.zombie_1_00047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.zombie_1_00048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.zombie_1_00049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.zombie_1_00050();
	this.instance_50.parent = this;

	this.instance_51 = new lib.zombie_1_00051();
	this.instance_51.parent = this;

	this.instance_52 = new lib.zombie_1_00052();
	this.instance_52.parent = this;

	this.instance_53 = new lib.zombie_1_00053();
	this.instance_53.parent = this;

	this.instance_54 = new lib.zombie_1_00054();
	this.instance_54.parent = this;

	this.instance_55 = new lib.zombie_1_00055();
	this.instance_55.parent = this;

	this.instance_56 = new lib.zombie_1_00056();
	this.instance_56.parent = this;

	this.instance_57 = new lib.zombie_1_00057();
	this.instance_57.parent = this;

	this.instance_58 = new lib.zombie_1_00058();
	this.instance_58.parent = this;

	this.instance_59 = new lib.zombie_1_00059();
	this.instance_59.parent = this;

	this.instance_60 = new lib.zombie_1_00060();
	this.instance_60.parent = this;

	this.instance_61 = new lib.zombie_1_00061();
	this.instance_61.parent = this;

	this.instance_62 = new lib.zombie_1_00062();
	this.instance_62.parent = this;

	this.instance_63 = new lib.zombie_1_00063();
	this.instance_63.parent = this;

	this.instance_64 = new lib.zombie_1_00064();
	this.instance_64.parent = this;

	this.instance_65 = new lib.zombie_1_00065();
	this.instance_65.parent = this;

	this.instance_66 = new lib.zombie_1_00066();
	this.instance_66.parent = this;

	this.instance_67 = new lib.zombie_1_00067();
	this.instance_67.parent = this;

	this.instance_68 = new lib.zombie_1_00068();
	this.instance_68.parent = this;

	this.instance_69 = new lib.zombie_1_00069();
	this.instance_69.parent = this;

	this.instance_70 = new lib.zombie_1_00070();
	this.instance_70.parent = this;

	this.instance_71 = new lib.zombie_1_00071();
	this.instance_71.parent = this;

	this.instance_72 = new lib.zombie_1_00072();
	this.instance_72.parent = this;

	this.instance_73 = new lib.zombie_1_00073();
	this.instance_73.parent = this;

	this.instance_74 = new lib.zombie_1_00074();
	this.instance_74.parent = this;

	this.instance_75 = new lib.zombie_1_00075();
	this.instance_75.parent = this;

	this.instance_76 = new lib.zombie_1_00076();
	this.instance_76.parent = this;

	this.instance_77 = new lib.zombie_1_00077();
	this.instance_77.parent = this;

	this.instance_78 = new lib.zombie_1_00078();
	this.instance_78.parent = this;

	this.instance_79 = new lib.zombie_1_00079();
	this.instance_79.parent = this;

	this.instance_80 = new lib.zombie_1_00080();
	this.instance_80.parent = this;

	this.instance_81 = new lib.zombie_1_00081();
	this.instance_81.parent = this;

	this.instance_82 = new lib.zombie_1_00082();
	this.instance_82.parent = this;

	this.instance_83 = new lib.zombie_1_00083();
	this.instance_83.parent = this;

	this.instance_84 = new lib.zombie_1_00084();
	this.instance_84.parent = this;

	this.instance_85 = new lib.zombie_1_00085();
	this.instance_85.parent = this;

	this.instance_86 = new lib.zombie_1_00086();
	this.instance_86.parent = this;

	this.instance_87 = new lib.zombie_1_00087();
	this.instance_87.parent = this;

	this.instance_88 = new lib.zombie_1_00088();
	this.instance_88.parent = this;

	this.instance_89 = new lib.zombie_1_00089();
	this.instance_89.parent = this;

	this.instance_90 = new lib.zombie_1_00090();
	this.instance_90.parent = this;

	this.instance_91 = new lib.zombie_1_00091();
	this.instance_91.parent = this;

	this.instance_92 = new lib.zombie_1_00092();
	this.instance_92.parent = this;

	this.instance_93 = new lib.zombie_1_00093();
	this.instance_93.parent = this;

	this.instance_94 = new lib.zombie_1_00094();
	this.instance_94.parent = this;

	this.instance_95 = new lib.zombie_1_00095();
	this.instance_95.parent = this;

	this.instance_96 = new lib.zombie_1_00096();
	this.instance_96.parent = this;

	this.instance_97 = new lib.zombie_1_00097();
	this.instance_97.parent = this;

	this.instance_98 = new lib.zombie_1_00098();
	this.instance_98.parent = this;

	this.instance_99 = new lib.zombie_1_00099();
	this.instance_99.parent = this;

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,586,766);


(lib.userHealthBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#A8EDA8").ss(1,1,1).p("AAAkrIAAJX");
	this.shape.setTransform(900,30);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#346F20").s().p("EhGTAEsIAApXMCMnAAAIAAJXg");
	this.shape_1.setTransform(450,30);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.userHealthBar, new createjs.Rectangle(0,-1,901,62), null);


(lib.userArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("rgba(213,194,139,0)").s().p("EhGTAUGMAAAgoLMCMnAAAMAAAAoLg");
	this.shape.setTransform(450,128.6);

	this.timeline.addTween(createjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.userArea, new createjs.Rectangle(0,0,900,257.3), null);


(lib.swordPiece2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sword_piece2_sm();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.swordPiece2, new createjs.Rectangle(0,0,72,112), null);


(lib.swordPiece1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sword_piece1_sm();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.swordPiece1, new createjs.Rectangle(0,0,72,112), null);


(lib.sword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sword_super_sm();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sword, new createjs.Rectangle(0,0,8,20), null);


(lib.shieldPiece5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shield_piece5_sm();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shieldPiece5, new createjs.Rectangle(0,0,120,107), null);


(lib.shieldPiece4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shield_piece4_sm();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shieldPiece4, new createjs.Rectangle(0,0,120,107), null);


(lib.shieldPiece3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shield_piece3_sm();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shieldPiece3, new createjs.Rectangle(0,0,120,107), null);


(lib.shieldPiece2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shield_piece2_sm();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shieldPiece2, new createjs.Rectangle(0,0,120,107), null);


(lib.shieldPiece1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shield_piece1_sm();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shieldPiece1, new createjs.Rectangle(0,0,120,107), null);


(lib.shield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shield_supersmall();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shield, new createjs.Rectangle(0,0,18,20), null);


(lib.messageContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.messageField = new createjs.Text("", "40px 'Arial'", "#FFFFFF");
	this.messageField.name = "messageField";
	this.messageField.lineHeight = 45;
	this.messageField.lineWidth = 845;
	this.messageField.parent = this;
	this.messageField.setTransform(8,3);

	this.timeline.addTween(createjs.Tween.get(this.messageField).wait(1));

}).prototype = getMCSymbolPrototype(lib.messageContainer, new createjs.Rectangle(6,1,849.2,261.6), null);


(lib.heroGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.gotoAndStop(Math.round((this.timeline.duration-1) * Math.random()));
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).wait(1).call(this.frame_1).wait(9));

	// Layer 1
	this.instance = new lib.warrior_red();
	this.instance.parent = this;

	this.instance_1 = new lib.warrior_blonde();
	this.instance_1.parent = this;

	this.instance_2 = new lib.warrior_black();
	this.instance_2.parent = this;

	this.instance_3 = new lib.wizard_blue();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.5,0);

	this.instance_4 = new lib.wizard_green();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.5,0);

	this.instance_5 = new lib.wizard_red();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.5,0);

	this.instance_6 = new lib.wizard_yellow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-5.5,0);

	this.instance_7 = new lib.ninjablue_sm();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-3.7,0);

	this.instance_8 = new lib.ninjagreen_sm();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3.7,0);

	this.instance_9 = new lib.ninjared_sm();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-3.7,0);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,25,40);


(lib.bossHealthBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#FFCCFF").ss(1,1,1).p("AAAEsIAApX");
	this.shape.setTransform(0,30);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#B92828").s().p("EhGTAEsIAApXMCMnAAAIAAJXg");
	this.shape_1.setTransform(450,30);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bossHealthBar, new createjs.Rectangle(-1,-1,901,62), null);


(lib.boss_snake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.snake_1_00000();
	this.instance.parent = this;
	this.instance.setTransform(-60,-75);

	this.instance_1 = new lib.snake_1_00001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60,-75);

	this.instance_2 = new lib.snake_1_00002();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-60,-75);

	this.instance_3 = new lib.snake_1_00003();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-60,-75);

	this.instance_4 = new lib.snake_1_00004();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-60,-75);

	this.instance_5 = new lib.snake_1_00005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-60,-75);

	this.instance_6 = new lib.snake_1_00006();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-60,-75);

	this.instance_7 = new lib.snake_1_00007();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-60,-75);

	this.instance_8 = new lib.snake_1_00008();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-60,-75);

	this.instance_9 = new lib.snake_1_00009();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-60,-75);

	this.instance_10 = new lib.snake_1_00010();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-60,-75);

	this.instance_11 = new lib.snake_1_00011();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-60,-75);

	this.instance_12 = new lib.snake_1_00012();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-60,-75);

	this.instance_13 = new lib.snake_1_00013();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-60,-75);

	this.instance_14 = new lib.snake_1_00014();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-60,-75);

	this.instance_15 = new lib.snake_1_00015();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-60,-75);

	this.instance_16 = new lib.snake_1_00016();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-60,-75);

	this.instance_17 = new lib.snake_1_00017();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-60,-75);

	this.instance_18 = new lib.snake_1_00018();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-60,-75);

	this.instance_19 = new lib.snake_1_00019();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-60,-75);

	this.instance_20 = new lib.snake_1_00020();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-60,-75);

	this.instance_21 = new lib.snake_1_00021();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-60,-75);

	this.instance_22 = new lib.snake_1_00022();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-60,-75);

	this.instance_23 = new lib.snake_1_00023();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-60,-75);

	this.instance_24 = new lib.snake_1_00024();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-60,-75);

	this.instance_25 = new lib.snake_1_00025();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-60,-75);

	this.instance_26 = new lib.snake_1_00026();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-60,-75);

	this.instance_27 = new lib.snake_1_00027();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-60,-75);

	this.instance_28 = new lib.snake_1_00028();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-60,-75);

	this.instance_29 = new lib.snake_1_00029();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-60,-75);

	this.instance_30 = new lib.snake_1_00030();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-60,-75);

	this.instance_31 = new lib.snake_1_00031();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-60,-75);

	this.instance_32 = new lib.snake_1_00032();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-60,-75);

	this.instance_33 = new lib.snake_1_00033();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-60,-75);

	this.instance_34 = new lib.snake_1_00034();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-60,-75);

	this.instance_35 = new lib.snake_1_00035();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-60,-75);

	this.instance_36 = new lib.snake_1_00036();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-60,-75);

	this.instance_37 = new lib.snake_1_00037();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-60,-75);

	this.instance_38 = new lib.snake_1_00038();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-60,-75);

	this.instance_39 = new lib.snake_1_00039();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-60,-75);

	this.instance_40 = new lib.snake_1_00040();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-60,-75);

	this.instance_41 = new lib.snake_1_00041();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-60,-75);

	this.instance_42 = new lib.snake_1_00042();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-60,-75);

	this.instance_43 = new lib.snake_1_00043();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-60,-75);

	this.instance_44 = new lib.snake_1_00044();
	this.instance_44.parent = this;
	this.instance_44.setTransform(-60,-75);

	this.instance_45 = new lib.snake_1_00045();
	this.instance_45.parent = this;
	this.instance_45.setTransform(-60,-75);

	this.instance_46 = new lib.snake_1_00046();
	this.instance_46.parent = this;
	this.instance_46.setTransform(-60,-75);

	this.instance_47 = new lib.snake_1_00047();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-60,-75);

	this.instance_48 = new lib.snake_1_00048();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-60,-75);

	this.instance_49 = new lib.snake_1_00049();
	this.instance_49.parent = this;
	this.instance_49.setTransform(-60,-75);

	this.instance_50 = new lib.snake_1_00050();
	this.instance_50.parent = this;
	this.instance_50.setTransform(-60,-75);

	this.instance_51 = new lib.snake_1_00051();
	this.instance_51.parent = this;
	this.instance_51.setTransform(-60,-75);

	this.instance_52 = new lib.snake_1_00052();
	this.instance_52.parent = this;
	this.instance_52.setTransform(-60,-75);

	this.instance_53 = new lib.snake_1_00053();
	this.instance_53.parent = this;
	this.instance_53.setTransform(-60,-75);

	this.instance_54 = new lib.snake_1_00054();
	this.instance_54.parent = this;
	this.instance_54.setTransform(-60,-75);

	this.instance_55 = new lib.snake_1_00055();
	this.instance_55.parent = this;
	this.instance_55.setTransform(-60,-75);

	this.instance_56 = new lib.snake_1_00056();
	this.instance_56.parent = this;
	this.instance_56.setTransform(-60,-75);

	this.instance_57 = new lib.snake_1_00057();
	this.instance_57.parent = this;
	this.instance_57.setTransform(-60,-75);

	this.instance_58 = new lib.snake_1_00058();
	this.instance_58.parent = this;
	this.instance_58.setTransform(-60,-75);

	this.instance_59 = new lib.snake_1_00059();
	this.instance_59.parent = this;
	this.instance_59.setTransform(-60,-75);

	this.instance_60 = new lib.snake_1_00060();
	this.instance_60.parent = this;
	this.instance_60.setTransform(-60,-75);

	this.instance_61 = new lib.snake_1_00061();
	this.instance_61.parent = this;
	this.instance_61.setTransform(-60,-75);

	this.instance_62 = new lib.snake_1_00062();
	this.instance_62.parent = this;
	this.instance_62.setTransform(-60,-75);

	this.instance_63 = new lib.snake_1_00063();
	this.instance_63.parent = this;
	this.instance_63.setTransform(-60,-75);

	this.instance_64 = new lib.snake_1_00064();
	this.instance_64.parent = this;
	this.instance_64.setTransform(-60,-75);

	this.instance_65 = new lib.snake_1_00065();
	this.instance_65.parent = this;
	this.instance_65.setTransform(-60,-75);

	this.instance_66 = new lib.snake_1_00066();
	this.instance_66.parent = this;
	this.instance_66.setTransform(-60,-75);

	this.instance_67 = new lib.snake_1_00067();
	this.instance_67.parent = this;
	this.instance_67.setTransform(-60,-75);

	this.instance_68 = new lib.snake_1_00068();
	this.instance_68.parent = this;
	this.instance_68.setTransform(-60,-75);

	this.instance_69 = new lib.snake_1_00069();
	this.instance_69.parent = this;
	this.instance_69.setTransform(-60,-75);

	this.instance_70 = new lib.snake_1_00070();
	this.instance_70.parent = this;
	this.instance_70.setTransform(-60,-75);

	this.instance_71 = new lib.snake_1_00071();
	this.instance_71.parent = this;
	this.instance_71.setTransform(-60,-75);

	this.instance_72 = new lib.snake_1_00072();
	this.instance_72.parent = this;
	this.instance_72.setTransform(-60,-75);

	this.instance_73 = new lib.snake_1_00073();
	this.instance_73.parent = this;
	this.instance_73.setTransform(-60,-75);

	this.instance_74 = new lib.snake_1_00074();
	this.instance_74.parent = this;
	this.instance_74.setTransform(-60,-75);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-60,-75,884,1080);


(lib.battleDefend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{broken:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.defendField = new createjs.Text("0", "80px 'Impact'", "#CCCCCC");
	this.defendField.name = "defendField";
	this.defendField.textAlign = "center";
	this.defendField.lineHeight = 100;
	this.defendField.lineWidth = 100;
	this.defendField.parent = this;
	this.defendField.setTransform(82.5,43.7);

	this.timeline.addTween(createjs.Tween.get(this.defendField).to({_off:true},1).wait(1));

	// Layer 1
	this.instance = new lib.shield_sm();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,165,185);


(lib.battleAttack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"broken":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.attackField = new createjs.Text("0", "80px 'Impact'", "#E73C2A");
	this.attackField.name = "attackField";
	this.attackField.textAlign = "center";
	this.attackField.lineHeight = 100;
	this.attackField.lineWidth = 100;
	this.attackField.parent = this;
	this.attackField.setTransform(38.3,20.2);

	this.timeline.addTween(createjs.Tween.get(this.attackField).to({_off:true},1).wait(1));

	// Layer 1
	this.instance = new lib.sword_sm();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-13.7,0,104,185);


(lib.bat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Comp2_00000();
	this.instance.parent = this;

	this.instance_1 = new lib.Comp2_00001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Comp2_00002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Comp2_00003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Comp2_00004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Comp2_00005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.Comp2_00006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.Comp2_00007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.Comp2_00008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.Comp2_00009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.Comp2_00010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.Comp2_00011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.Comp2_00012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.Comp2_00013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.Comp2_00014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.Comp2_00015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.Comp2_00016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.Comp2_00017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.Comp2_00018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.Comp2_00019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.Comp2_00020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.Comp2_00021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.Comp2_00022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.Comp2_00023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.Comp2_00024();
	this.instance_24.parent = this;

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,552,980);


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_200 = function() {
		this.onComplete();
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).wait(200).call(this.frame_200).wait(1));

	// Layer 1
	this.instance = new lib.twitchtactics_title_00000();
	this.instance.parent = this;

	this.instance_1 = new lib.twitchtactics_title_00001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.twitchtactics_title_00002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.twitchtactics_title_00003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.twitchtactics_title_00004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.twitchtactics_title_00005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.twitchtactics_title_00006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.twitchtactics_title_00007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.twitchtactics_title_00008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.twitchtactics_title_00009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.twitchtactics_title_00010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.twitchtactics_title_00011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.twitchtactics_title_00012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.twitchtactics_title_00013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.twitchtactics_title_00014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.twitchtactics_title_00015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.twitchtactics_title_00016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.twitchtactics_title_00017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.twitchtactics_title_00018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.twitchtactics_title_00019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.twitchtactics_title_00020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.twitchtactics_title_00021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.twitchtactics_title_00022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.twitchtactics_title_00023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.twitchtactics_title_00024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.twitchtactics_title_00025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.twitchtactics_title_00026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.twitchtactics_title_00027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.twitchtactics_title_00028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.twitchtactics_title_00029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.twitchtactics_title_00030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.twitchtactics_title_00031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.twitchtactics_title_00032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.twitchtactics_title_00033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.twitchtactics_title_00034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.twitchtactics_title_00035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.twitchtactics_title_00036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.twitchtactics_title_00037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.twitchtactics_title_00038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.twitchtactics_title_00039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.twitchtactics_title_00040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.twitchtactics_title_00041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.twitchtactics_title_00042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.twitchtactics_title_00043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.twitchtactics_title_00044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.twitchtactics_title_00045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.twitchtactics_title_00046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.twitchtactics_title_00047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.twitchtactics_title_00048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.twitchtactics_title_00049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.twitchtactics_title_00050();
	this.instance_50.parent = this;

	this.instance_51 = new lib.twitchtactics_title_00051();
	this.instance_51.parent = this;

	this.instance_52 = new lib.twitchtactics_title_00052();
	this.instance_52.parent = this;

	this.instance_53 = new lib.twitchtactics_title_00053();
	this.instance_53.parent = this;

	this.instance_54 = new lib.twitchtactics_title_00054();
	this.instance_54.parent = this;

	this.instance_55 = new lib.twitchtactics_title_00055();
	this.instance_55.parent = this;

	this.instance_56 = new lib.twitchtactics_title_00056();
	this.instance_56.parent = this;

	this.instance_57 = new lib.twitchtactics_title_00057();
	this.instance_57.parent = this;

	this.instance_58 = new lib.twitchtactics_title_00058();
	this.instance_58.parent = this;

	this.instance_59 = new lib.twitchtactics_title_00059();
	this.instance_59.parent = this;

	this.instance_60 = new lib.twitchtactics_title_00060();
	this.instance_60.parent = this;

	this.instance_61 = new lib.twitchtactics_title_00061();
	this.instance_61.parent = this;

	this.instance_62 = new lib.twitchtactics_title_00062();
	this.instance_62.parent = this;

	this.instance_63 = new lib.twitchtactics_title_00063();
	this.instance_63.parent = this;

	this.instance_64 = new lib.twitchtactics_title_00064();
	this.instance_64.parent = this;

	this.instance_65 = new lib.twitchtactics_title_00065();
	this.instance_65.parent = this;

	this.instance_66 = new lib.twitchtactics_title_00066();
	this.instance_66.parent = this;

	this.instance_67 = new lib.twitchtactics_title_00067();
	this.instance_67.parent = this;

	this.instance_68 = new lib.twitchtactics_title_00068();
	this.instance_68.parent = this;

	this.instance_69 = new lib.twitchtactics_title_00069();
	this.instance_69.parent = this;

	this.instance_70 = new lib.twitchtactics_title_00070();
	this.instance_70.parent = this;

	this.instance_71 = new lib.twitchtactics_title_00071();
	this.instance_71.parent = this;

	this.instance_72 = new lib.twitchtactics_title_00072();
	this.instance_72.parent = this;

	this.instance_73 = new lib.twitchtactics_title_00073();
	this.instance_73.parent = this;

	this.instance_74 = new lib.twitchtactics_title_00074();
	this.instance_74.parent = this;

	this.instance_75 = new lib.twitchtactics_title_00075();
	this.instance_75.parent = this;

	this.instance_76 = new lib.twitchtactics_title_00076();
	this.instance_76.parent = this;

	this.instance_77 = new lib.twitchtactics_title_00077();
	this.instance_77.parent = this;

	this.instance_78 = new lib.twitchtactics_title_00078();
	this.instance_78.parent = this;

	this.instance_79 = new lib.twitchtactics_title_00079();
	this.instance_79.parent = this;

	this.instance_80 = new lib.twitchtactics_title_00080();
	this.instance_80.parent = this;

	this.instance_81 = new lib.twitchtactics_title_00081();
	this.instance_81.parent = this;

	this.instance_82 = new lib.twitchtactics_title_00082();
	this.instance_82.parent = this;

	this.instance_83 = new lib.twitchtactics_title_00083();
	this.instance_83.parent = this;

	this.instance_84 = new lib.twitchtactics_title_00084();
	this.instance_84.parent = this;

	this.instance_85 = new lib.twitchtactics_title_00085();
	this.instance_85.parent = this;

	this.instance_86 = new lib.twitchtactics_title_00086();
	this.instance_86.parent = this;

	this.instance_87 = new lib.twitchtactics_title_00087();
	this.instance_87.parent = this;

	this.instance_88 = new lib.twitchtactics_title_00088();
	this.instance_88.parent = this;

	this.instance_89 = new lib.twitchtactics_title_00089();
	this.instance_89.parent = this;

	this.instance_90 = new lib.twitchtactics_title_00090();
	this.instance_90.parent = this;

	this.instance_91 = new lib.twitchtactics_title_00091();
	this.instance_91.parent = this;

	this.instance_92 = new lib.twitchtactics_title_00092();
	this.instance_92.parent = this;

	this.instance_93 = new lib.twitchtactics_title_00093();
	this.instance_93.parent = this;

	this.instance_94 = new lib.twitchtactics_title_00094();
	this.instance_94.parent = this;

	this.instance_95 = new lib.twitchtactics_title_00095();
	this.instance_95.parent = this;

	this.instance_96 = new lib.twitchtactics_title_00096();
	this.instance_96.parent = this;

	this.instance_97 = new lib.twitchtactics_title_00097();
	this.instance_97.parent = this;

	this.instance_98 = new lib.twitchtactics_title_00098();
	this.instance_98.parent = this;

	this.instance_99 = new lib.twitchtactics_title_00099();
	this.instance_99.parent = this;

	this.instance_100 = new lib.twitchtactics_title_00100();
	this.instance_100.parent = this;

	this.instance_101 = new lib.twitchtactics_title_00101();
	this.instance_101.parent = this;

	this.instance_102 = new lib.twitchtactics_title_00102();
	this.instance_102.parent = this;

	this.instance_103 = new lib.twitchtactics_title_00103();
	this.instance_103.parent = this;

	this.instance_104 = new lib.twitchtactics_title_00104();
	this.instance_104.parent = this;

	this.instance_105 = new lib.twitchtactics_title_00105();
	this.instance_105.parent = this;

	this.instance_106 = new lib.twitchtactics_title_00106();
	this.instance_106.parent = this;

	this.instance_107 = new lib.twitchtactics_title_00107();
	this.instance_107.parent = this;

	this.instance_108 = new lib.twitchtactics_title_00108();
	this.instance_108.parent = this;

	this.instance_109 = new lib.twitchtactics_title_00109();
	this.instance_109.parent = this;

	this.instance_110 = new lib.twitchtactics_title_00110();
	this.instance_110.parent = this;

	this.instance_111 = new lib.twitchtactics_title_00111();
	this.instance_111.parent = this;

	this.instance_112 = new lib.twitchtactics_title_00112();
	this.instance_112.parent = this;

	this.instance_113 = new lib.twitchtactics_title_00113();
	this.instance_113.parent = this;

	this.instance_114 = new lib.twitchtactics_title_00114();
	this.instance_114.parent = this;

	this.instance_115 = new lib.twitchtactics_title_00115();
	this.instance_115.parent = this;

	this.instance_116 = new lib.twitchtactics_title_00116();
	this.instance_116.parent = this;

	this.instance_117 = new lib.twitchtactics_title_00117();
	this.instance_117.parent = this;

	this.instance_118 = new lib.twitchtactics_title_00118();
	this.instance_118.parent = this;

	this.instance_119 = new lib.twitchtactics_title_00119();
	this.instance_119.parent = this;

	this.instance_120 = new lib.twitchtactics_title_00120();
	this.instance_120.parent = this;

	this.instance_121 = new lib.twitchtactics_title_00121();
	this.instance_121.parent = this;

	this.instance_122 = new lib.twitchtactics_title_00122();
	this.instance_122.parent = this;

	this.instance_123 = new lib.twitchtactics_title_00123();
	this.instance_123.parent = this;

	this.instance_124 = new lib.twitchtactics_title_00124();
	this.instance_124.parent = this;

	this.instance_125 = new lib.twitchtactics_title_00125();
	this.instance_125.parent = this;

	this.instance_126 = new lib.twitchtactics_title_00126();
	this.instance_126.parent = this;

	this.instance_127 = new lib.twitchtactics_title_00127();
	this.instance_127.parent = this;

	this.instance_128 = new lib.twitchtactics_title_00128();
	this.instance_128.parent = this;

	this.instance_129 = new lib.twitchtactics_title_00129();
	this.instance_129.parent = this;

	this.instance_130 = new lib.twitchtactics_title_00130();
	this.instance_130.parent = this;

	this.instance_131 = new lib.twitchtactics_title_00131();
	this.instance_131.parent = this;

	this.instance_132 = new lib.twitchtactics_title_00132();
	this.instance_132.parent = this;

	this.instance_133 = new lib.twitchtactics_title_00133();
	this.instance_133.parent = this;

	this.instance_134 = new lib.twitchtactics_title_00134();
	this.instance_134.parent = this;

	this.instance_135 = new lib.twitchtactics_title_00135();
	this.instance_135.parent = this;

	this.instance_136 = new lib.twitchtactics_title_00136();
	this.instance_136.parent = this;

	this.instance_137 = new lib.twitchtactics_title_00137();
	this.instance_137.parent = this;

	this.instance_138 = new lib.twitchtactics_title_00138();
	this.instance_138.parent = this;

	this.instance_139 = new lib.twitchtactics_title_00139();
	this.instance_139.parent = this;

	this.instance_140 = new lib.twitchtactics_title_00140();
	this.instance_140.parent = this;

	this.instance_141 = new lib.twitchtactics_title_00141();
	this.instance_141.parent = this;

	this.instance_142 = new lib.twitchtactics_title_00142();
	this.instance_142.parent = this;

	this.instance_143 = new lib.twitchtactics_title_00143();
	this.instance_143.parent = this;

	this.instance_144 = new lib.twitchtactics_title_00144();
	this.instance_144.parent = this;

	this.instance_145 = new lib.twitchtactics_title_00145();
	this.instance_145.parent = this;

	this.instance_146 = new lib.twitchtactics_title_00146();
	this.instance_146.parent = this;

	this.instance_147 = new lib.twitchtactics_title_00147();
	this.instance_147.parent = this;

	this.instance_148 = new lib.twitchtactics_title_00148();
	this.instance_148.parent = this;

	this.instance_149 = new lib.twitchtactics_title_00149();
	this.instance_149.parent = this;

	this.instance_150 = new lib.twitchtactics_title_00150();
	this.instance_150.parent = this;

	this.instance_151 = new lib.twitchtactics_title_00151();
	this.instance_151.parent = this;

	this.instance_152 = new lib.twitchtactics_title_00152();
	this.instance_152.parent = this;

	this.instance_153 = new lib.twitchtactics_title_00153();
	this.instance_153.parent = this;

	this.instance_154 = new lib.twitchtactics_title_00154();
	this.instance_154.parent = this;

	this.instance_155 = new lib.twitchtactics_title_00155();
	this.instance_155.parent = this;

	this.instance_156 = new lib.twitchtactics_title_00156();
	this.instance_156.parent = this;

	this.instance_157 = new lib.twitchtactics_title_00157();
	this.instance_157.parent = this;

	this.instance_158 = new lib.twitchtactics_title_00158();
	this.instance_158.parent = this;

	this.instance_159 = new lib.twitchtactics_title_00159();
	this.instance_159.parent = this;

	this.instance_160 = new lib.twitchtactics_title_00160();
	this.instance_160.parent = this;

	this.instance_161 = new lib.twitchtactics_title_00161();
	this.instance_161.parent = this;

	this.instance_162 = new lib.twitchtactics_title_00162();
	this.instance_162.parent = this;

	this.instance_163 = new lib.twitchtactics_title_00163();
	this.instance_163.parent = this;

	this.instance_164 = new lib.twitchtactics_title_00164();
	this.instance_164.parent = this;

	this.instance_165 = new lib.twitchtactics_title_00165();
	this.instance_165.parent = this;

	this.instance_166 = new lib.twitchtactics_title_00166();
	this.instance_166.parent = this;

	this.instance_167 = new lib.twitchtactics_title_00167();
	this.instance_167.parent = this;

	this.instance_168 = new lib.twitchtactics_title_00168();
	this.instance_168.parent = this;

	this.instance_169 = new lib.twitchtactics_title_00169();
	this.instance_169.parent = this;

	this.instance_170 = new lib.twitchtactics_title_00170();
	this.instance_170.parent = this;

	this.instance_171 = new lib.twitchtactics_title_00171();
	this.instance_171.parent = this;

	this.instance_172 = new lib.twitchtactics_title_00172();
	this.instance_172.parent = this;

	this.instance_173 = new lib.twitchtactics_title_00173();
	this.instance_173.parent = this;

	this.instance_174 = new lib.twitchtactics_title_00174();
	this.instance_174.parent = this;

	this.instance_175 = new lib.twitchtactics_title_00175();
	this.instance_175.parent = this;

	this.instance_176 = new lib.twitchtactics_title_00176();
	this.instance_176.parent = this;

	this.instance_177 = new lib.twitchtactics_title_00177();
	this.instance_177.parent = this;

	this.instance_178 = new lib.twitchtactics_title_00178();
	this.instance_178.parent = this;

	this.instance_179 = new lib.twitchtactics_title_00179();
	this.instance_179.parent = this;

	this.instance_180 = new lib.twitchtactics_title_00180();
	this.instance_180.parent = this;

	this.instance_181 = new lib.twitchtactics_title_00181();
	this.instance_181.parent = this;

	this.instance_182 = new lib.twitchtactics_title_00182();
	this.instance_182.parent = this;

	this.instance_183 = new lib.twitchtactics_title_00183();
	this.instance_183.parent = this;

	this.instance_184 = new lib.twitchtactics_title_00184();
	this.instance_184.parent = this;

	this.instance_185 = new lib.twitchtactics_title_00185();
	this.instance_185.parent = this;

	this.instance_186 = new lib.twitchtactics_title_00186();
	this.instance_186.parent = this;

	this.instance_187 = new lib.twitchtactics_title_00187();
	this.instance_187.parent = this;

	this.instance_188 = new lib.twitchtactics_title_00188();
	this.instance_188.parent = this;

	this.instance_189 = new lib.twitchtactics_title_00189();
	this.instance_189.parent = this;

	this.instance_190 = new lib.twitchtactics_title_00190();
	this.instance_190.parent = this;

	this.instance_191 = new lib.twitchtactics_title_00191();
	this.instance_191.parent = this;

	this.instance_192 = new lib.twitchtactics_title_00192();
	this.instance_192.parent = this;

	this.instance_193 = new lib.twitchtactics_title_00193();
	this.instance_193.parent = this;

	this.instance_194 = new lib.twitchtactics_title_00194();
	this.instance_194.parent = this;

	this.instance_195 = new lib.twitchtactics_title_00195();
	this.instance_195.parent = this;

	this.instance_196 = new lib.twitchtactics_title_00196();
	this.instance_196.parent = this;

	this.instance_197 = new lib.twitchtactics_title_00197();
	this.instance_197.parent = this;

	this.instance_198 = new lib.twitchtactics_title_00198();
	this.instance_198.parent = this;

	this.instance_199 = new lib.twitchtactics_title_00199();
	this.instance_199.parent = this;

	this.instance_200 = new lib.twitchtactics_title_00200();
	this.instance_200.parent = this;

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).to({state:[{t:this.instance_192}]},1).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).wait(1));

	// Layer 2
	this.instance_201 = new lib.bg1();
	this.instance_201.parent = this;
	this.instance_201._off = true;

	this.timeline.addTween(createjs.Tween.get(this.instance_201).wait(166).to({_off:false},0).wait(35));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,1920,1080);


(lib.userIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{attack:0,defend:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.defendkField = new createjs.Text("1", "14px 'Arial'", "#CCCCCC");
	this.defendkField.name = "defendkField";
	this.defendkField.textAlign = "center";
	this.defendkField.lineHeight = 18;
	this.defendkField.lineWidth = 23;
	this.defendkField.parent = this;
	this.defendkField.setTransform(10.7,-0.5);
	this.defendkField._off = true;

	this.timeline.addTween(createjs.Tween.get(this.defendkField).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.attackField = new createjs.Text("1", "14px 'Arial'", "#CC0000");
	this.attackField.name = "attackField";
	this.attackField.textAlign = "center";
	this.attackField.lineHeight = 18;
	this.attackField.lineWidth = 23;
	this.attackField.parent = this;
	this.attackField.setTransform(10.9,-0.5);

	this.timeline.addTween(createjs.Tween.get(this.attackField).to({_off:true},1).wait(1));

	// Layer 1
	this.instance = new lib.sword();
	this.instance.parent = this;
	this.instance.setTransform(9,10.1,1.004,1.004,0,0,0,4,10);

	this.instance_1 = new lib.shield();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,8.3,0.833,0.828,0,0,0,9,10);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-2.7,-2.5,27.4,22.7);


(lib.userHealth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.totalHealth = new createjs.Text("10/10", "28px 'Arial'", "#FFFFFF");
	this.totalHealth.name = "totalHealth";
	this.totalHealth.textAlign = "right";
	this.totalHealth.lineHeight = 33;
	this.totalHealth.lineWidth = 155;
	this.totalHealth.parent = this;
	this.totalHealth.setTransform(891.9,-4);

	this.totalUsers = new createjs.Text("0 Users", "28px 'Arial'", "#FFFFFF");
	this.totalUsers.name = "totalUsers";
	this.totalUsers.lineHeight = 33;
	this.totalUsers.lineWidth = 192;
	this.totalUsers.parent = this;
	this.totalUsers.setTransform(12,-4);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.totalUsers},{t:this.totalHealth}]}).wait(1));

	// outline
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1,3,true).p("EhGTgCVMCMnAAAIAAErMiMnAAAg");
	this.shape.setTransform(450,15);

	this.timeline.addTween(createjs.Tween.get(this.shape).wait(1));

	// health
	this.bar = new lib.userHealthBar();
	this.bar.parent = this;
	this.bar.setTransform(0,0,1,0.5);

	this.timeline.addTween(createjs.Tween.get(this.bar).wait(1));

	// bg
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#0A1F0A").s().p("EhGTACWIAAkrMCMnAAAIAAErg");
	this.shape_1.setTransform(450,15);

	this.timeline.addTween(createjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.userHealth, new createjs.Rectangle(-1,-6,902,41.3), null);


(lib.bossHealth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.totalLevel = new createjs.Text("Level 1", "28px 'Arial'", "#FFFFFF");
	this.totalLevel.name = "totalLevel";
	this.totalLevel.lineHeight = 33;
	this.totalLevel.lineWidth = 262;
	this.totalLevel.parent = this;
	this.totalLevel.setTransform(12,-4);

	this.totalHealth = new createjs.Text("10/10", "28px 'Arial'", "#FFFFFF");
	this.totalHealth.name = "totalHealth";
	this.totalHealth.textAlign = "right";
	this.totalHealth.lineHeight = 33;
	this.totalHealth.lineWidth = 403;
	this.totalHealth.parent = this;
	this.totalHealth.setTransform(890.3,-4);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.totalHealth},{t:this.totalLevel}]}).wait(1));

	// outline
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1,3,true).p("EhGTgCVMCMnAAAIAAErMiMnAAAg");
	this.shape.setTransform(450,15);

	this.timeline.addTween(createjs.Tween.get(this.shape).wait(1));

	// health
	this.bar = new lib.bossHealthBar();
	this.bar.parent = this;
	this.bar.setTransform(900,0,1,0.5,0,0,0,900,0);

	this.timeline.addTween(createjs.Tween.get(this.bar).wait(1));

	// bg
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#230000").s().p("EhGTACWIAAkrMCMnAAAIAAErg");
	this.shape_1.setTransform(450,15);

	this.timeline.addTween(createjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bossHealth, new createjs.Rectangle(-1,-6,902,41.3), null);


(lib.bossBattleStats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.attack = new lib.battleAttack();
	this.attack.parent = this;
	this.attack.setTransform(82.6,92.5,1,1,0,0,0,37.3,92.5);

	this.defend = new lib.battleDefend();
	this.defend.parent = this;
	this.defend.setTransform(82.5,92.5,1,1,0,0,0,82.5,92.5);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.attack}]}).to({state:[{t:this.defend}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(31.5,0,104,185);


(lib.Hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.icon.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.userField = new createjs.Text("george", "13px 'Arial'");
	this.userField.name = "userField";
	this.userField.textAlign = "center";
	this.userField.lineHeight = 17;
	this.userField.lineWidth = 121;
	this.userField.parent = this;
	this.userField.setTransform(62.4,7);

	this.timeline.addTween(createjs.Tween.get(this.userField).wait(1));

	// icon
	this.icon = new lib.userIcon();
	this.icon.parent = this;
	this.icon.setTransform(60,-4.9,1,1,0,0,0,9,10.1);

	this.timeline.addTween(createjs.Tween.get(this.icon).wait(1));

	// graphic
	this.character = new lib.heroGraphic();
	this.character.parent = this;
	this.character.setTransform(60.7,40.5,1,1,0,0,0,10.7,15.5);

	this.timeline.addTween(createjs.Tween.get(this.character).wait(1));

	// Layer 2
	this.shape = new createjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AhjATQgqgIAAgLQAAgLAqgHQApgJA6ABQA7gBApAJQAqAHAAALQAAALgqAIQgpAJg7AAQg6AAgpgJg");
	this.shape.setTransform(63.2,63.8);

	this.timeline.addTween(createjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hero, new createjs.Rectangle(0,-17.5,124.7,84), null);


(lib.Bulletin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new createjs.Shape();
	mask._off = true;
	mask.graphics.p("EhC4AUoMAAAgpOMCFxAAAMAAAApOg");
	mask.setTransform(449.6,150);

	// message
	this.messageContainer = new lib.messageContainer();
	this.messageContainer.parent = this;
	this.messageContainer.setTransform(448.6,150,1,1,0,0,0,430.4,131.9);

	var maskedShapeInstanceList = [this.messageContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(createjs.Tween.get(this.messageContainer).wait(1));

	// bg
	this.instance = new lib.retroFF_dialogue();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bulletin, new createjs.Rectangle(0,0,900,300), null);


(lib.Boss3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.graphic = new lib.zombie();
	this.graphic.parent = this;
	this.graphic.setTransform(293,383,1,1,0,0,0,293,383);

	this.timeline.addTween(createjs.Tween.get(this.graphic).wait(1));

}).prototype = getMCSymbolPrototype(lib.Boss3, new createjs.Rectangle(0,0,586,766), null);


(lib.Boss2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.graphic = new lib.bat();
	this.graphic.parent = this;
	this.graphic.setTransform(276,436,1,1,0,0,0,276,490);

	this.timeline.addTween(createjs.Tween.get(this.graphic).wait(1));

}).prototype = getMCSymbolPrototype(lib.Boss2, new createjs.Rectangle(0,-54,552,980), null);


(lib.Boss1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.graphic = new lib.boss_snake();
	this.graphic.parent = this;
	this.graphic.setTransform(298.1,472.1,1,1,0,0,0,362.1,472.1);

	this.timeline.addTween(createjs.Tween.get(this.graphic).wait(1));

}).prototype = getMCSymbolPrototype(lib.Boss1, new createjs.Rectangle(-124,-75,884,1080), null);


(lib.BattleStats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boss
	this.bossStats = new lib.bossBattleStats();
	this.bossStats.parent = this;
	this.bossStats.setTransform(-92.5,92.5,1,1,0,0,0,82.5,92.5);

	this.timeline.addTween(createjs.Tween.get(this.bossStats).wait(1));

	// attack
	this.attack = new lib.battleAttack();
	this.attack.parent = this;
	this.attack.setTransform(-92.4,92.5,1,1,0,0,0,37.3,92.5);

	this.timeline.addTween(createjs.Tween.get(this.attack).wait(1));

	// defend
	this.defend = new lib.battleDefend();
	this.defend.parent = this;
	this.defend.setTransform(-92.5,92.5,1,1,0,0,0,82.5,92.5);

	this.timeline.addTween(createjs.Tween.get(this.defend).wait(1));

}).prototype = getMCSymbolPrototype(lib.BattleStats, new createjs.Rectangle(-175,0,165,185), null);


(lib.Game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(1));

	// health
	this.bossHealth = new lib.bossHealth();
	this.bossHealth.parent = this;
	this.bossHealth.setTransform(995,1030);

	this.userHealth = new lib.userHealth();
	this.userHealth.parent = this;
	this.userHealth.setTransform(25,1030);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.userHealth},{t:this.bossHealth}]}).wait(1));

	// userArea
	this.bulletin = new lib.Bulletin();
	this.bulletin.parent = this;
	this.bulletin.setTransform(25,25);

	this.userArea = new lib.userArea();
	this.userArea.parent = this;
	this.userArea.setTransform(25,691);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.userArea},{t:this.bulletin}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Game, new createjs.Rectangle(24,25,1872,1040.3), null);


// stage content:
(lib._Game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {}
};





function LocalAssets()
{
	this.scripts = 
	[
		"src/scenes/Title.js",
		"src/scenes/Splash.js",
		"src/scenes/Game.js",
		"src/components/Hero.js",
		"src/components/HealthBar.js",
		"src/components/Bulletin.js",
		"src/components/Boss.js",
		"src/components/BattleStats.js",
		"src/architecture/Base.js"
	];

	this.images = 
	[
		{src:'res/layouts/zombie_1_00099.png', id:'zombie_1_00099'}, 
		{src:'res/layouts/zombie_1_00098.png', id:'zombie_1_00098'}, 
		{src:'res/layouts/zombie_1_00097.png', id:'zombie_1_00097'}, 
		{src:'res/layouts/zombie_1_00096.png', id:'zombie_1_00096'}, 
		{src:'res/layouts/zombie_1_00095.png', id:'zombie_1_00095'}, 
		{src:'res/layouts/zombie_1_00094.png', id:'zombie_1_00094'}, 
		{src:'res/layouts/zombie_1_00093.png', id:'zombie_1_00093'}, 
		{src:'res/layouts/zombie_1_00092.png', id:'zombie_1_00092'}, 
		{src:'res/layouts/zombie_1_00091.png', id:'zombie_1_00091'}, 
		{src:'res/layouts/zombie_1_00090.png', id:'zombie_1_00090'}, 
		{src:'res/layouts/zombie_1_00089.png', id:'zombie_1_00089'}, 
		{src:'res/layouts/zombie_1_00088.png', id:'zombie_1_00088'}, 
		{src:'res/layouts/zombie_1_00087.png', id:'zombie_1_00087'}, 
		{src:'res/layouts/zombie_1_00086.png', id:'zombie_1_00086'}, 
		{src:'res/layouts/zombie_1_00085.png', id:'zombie_1_00085'}, 
		{src:'res/layouts/zombie_1_00084.png', id:'zombie_1_00084'}, 
		{src:'res/layouts/zombie_1_00083.png', id:'zombie_1_00083'}, 
		{src:'res/layouts/zombie_1_00082.png', id:'zombie_1_00082'}, 
		{src:'res/layouts/zombie_1_00081.png', id:'zombie_1_00081'}, 
		{src:'res/layouts/zombie_1_00080.png', id:'zombie_1_00080'}, 
		{src:'res/layouts/zombie_1_00079.png', id:'zombie_1_00079'}, 
		{src:'res/layouts/zombie_1_00078.png', id:'zombie_1_00078'}, 
		{src:'res/layouts/zombie_1_00077.png', id:'zombie_1_00077'}, 
		{src:'res/layouts/zombie_1_00076.png', id:'zombie_1_00076'}, 
		{src:'res/layouts/zombie_1_00075.png', id:'zombie_1_00075'}, 
		{src:'res/layouts/zombie_1_00074.png', id:'zombie_1_00074'}, 
		{src:'res/layouts/zombie_1_00073.png', id:'zombie_1_00073'}, 
		{src:'res/layouts/zombie_1_00072.png', id:'zombie_1_00072'}, 
		{src:'res/layouts/zombie_1_00071.png', id:'zombie_1_00071'}, 
		{src:'res/layouts/zombie_1_00070.png', id:'zombie_1_00070'}, 
		{src:'res/layouts/zombie_1_00069.png', id:'zombie_1_00069'}, 
		{src:'res/layouts/zombie_1_00068.png', id:'zombie_1_00068'}, 
		{src:'res/layouts/zombie_1_00067.png', id:'zombie_1_00067'}, 
		{src:'res/layouts/zombie_1_00066.png', id:'zombie_1_00066'}, 
		{src:'res/layouts/zombie_1_00065.png', id:'zombie_1_00065'}, 
		{src:'res/layouts/zombie_1_00064.png', id:'zombie_1_00064'}, 
		{src:'res/layouts/zombie_1_00063.png', id:'zombie_1_00063'}, 
		{src:'res/layouts/zombie_1_00062.png', id:'zombie_1_00062'}, 
		{src:'res/layouts/zombie_1_00061.png', id:'zombie_1_00061'}, 
		{src:'res/layouts/zombie_1_00060.png', id:'zombie_1_00060'}, 
		{src:'res/layouts/zombie_1_00059.png', id:'zombie_1_00059'}, 
		{src:'res/layouts/zombie_1_00058.png', id:'zombie_1_00058'}, 
		{src:'res/layouts/zombie_1_00057.png', id:'zombie_1_00057'}, 
		{src:'res/layouts/zombie_1_00056.png', id:'zombie_1_00056'}, 
		{src:'res/layouts/zombie_1_00055.png', id:'zombie_1_00055'}, 
		{src:'res/layouts/zombie_1_00054.png', id:'zombie_1_00054'}, 
		{src:'res/layouts/zombie_1_00053.png', id:'zombie_1_00053'}, 
		{src:'res/layouts/zombie_1_00052.png', id:'zombie_1_00052'}, 
		{src:'res/layouts/zombie_1_00051.png', id:'zombie_1_00051'}, 
		{src:'res/layouts/zombie_1_00050.png', id:'zombie_1_00050'}, 
		{src:'res/layouts/zombie_1_00049.png', id:'zombie_1_00049'}, 
		{src:'res/layouts/zombie_1_00048.png', id:'zombie_1_00048'}, 
		{src:'res/layouts/zombie_1_00047.png', id:'zombie_1_00047'}, 
		{src:'res/layouts/zombie_1_00046.png', id:'zombie_1_00046'}, 
		{src:'res/layouts/zombie_1_00045.png', id:'zombie_1_00045'}, 
		{src:'res/layouts/zombie_1_00044.png', id:'zombie_1_00044'}, 
		{src:'res/layouts/zombie_1_00043.png', id:'zombie_1_00043'}, 
		{src:'res/layouts/zombie_1_00042.png', id:'zombie_1_00042'}, 
		{src:'res/layouts/zombie_1_00041.png', id:'zombie_1_00041'}, 
		{src:'res/layouts/zombie_1_00040.png', id:'zombie_1_00040'}, 
		{src:'res/layouts/zombie_1_00039.png', id:'zombie_1_00039'}, 
		{src:'res/layouts/zombie_1_00038.png', id:'zombie_1_00038'}, 
		{src:'res/layouts/zombie_1_00037.png', id:'zombie_1_00037'}, 
		{src:'res/layouts/zombie_1_00036.png', id:'zombie_1_00036'}, 
		{src:'res/layouts/zombie_1_00035.png', id:'zombie_1_00035'}, 
		{src:'res/layouts/zombie_1_00034.png', id:'zombie_1_00034'}, 
		{src:'res/layouts/zombie_1_00033.png', id:'zombie_1_00033'}, 
		{src:'res/layouts/zombie_1_00032.png', id:'zombie_1_00032'}, 
		{src:'res/layouts/zombie_1_00031.png', id:'zombie_1_00031'}, 
		{src:'res/layouts/zombie_1_00030.png', id:'zombie_1_00030'}, 
		{src:'res/layouts/zombie_1_00029.png', id:'zombie_1_00029'}, 
		{src:'res/layouts/zombie_1_00028.png', id:'zombie_1_00028'}, 
		{src:'res/layouts/zombie_1_00027.png', id:'zombie_1_00027'}, 
		{src:'res/layouts/zombie_1_00026.png', id:'zombie_1_00026'}, 
		{src:'res/layouts/zombie_1_00025.png', id:'zombie_1_00025'}, 
		{src:'res/layouts/zombie_1_00024.png', id:'zombie_1_00024'}, 
		{src:'res/layouts/zombie_1_00023.png', id:'zombie_1_00023'}, 
		{src:'res/layouts/zombie_1_00022.png', id:'zombie_1_00022'}, 
		{src:'res/layouts/zombie_1_00021.png', id:'zombie_1_00021'}, 
		{src:'res/layouts/zombie_1_00020.png', id:'zombie_1_00020'}, 
		{src:'res/layouts/zombie_1_00019.png', id:'zombie_1_00019'}, 
		{src:'res/layouts/zombie_1_00018.png', id:'zombie_1_00018'}, 
		{src:'res/layouts/zombie_1_00017.png', id:'zombie_1_00017'}, 
		{src:'res/layouts/zombie_1_00016.png', id:'zombie_1_00016'}, 
		{src:'res/layouts/zombie_1_00015.png', id:'zombie_1_00015'}, 
		{src:'res/layouts/zombie_1_00014.png', id:'zombie_1_00014'}, 
		{src:'res/layouts/zombie_1_00013.png', id:'zombie_1_00013'}, 
		{src:'res/layouts/zombie_1_00012.png', id:'zombie_1_00012'}, 
		{src:'res/layouts/zombie_1_00011.png', id:'zombie_1_00011'}, 
		{src:'res/layouts/zombie_1_00010.png', id:'zombie_1_00010'}, 
		{src:'res/layouts/zombie_1_00009.png', id:'zombie_1_00009'}, 
		{src:'res/layouts/zombie_1_00008.png', id:'zombie_1_00008'}, 
		{src:'res/layouts/zombie_1_00007.png', id:'zombie_1_00007'}, 
		{src:'res/layouts/zombie_1_00006.png', id:'zombie_1_00006'}, 
		{src:'res/layouts/zombie_1_00005.png', id:'zombie_1_00005'}, 
		{src:'res/layouts/zombie_1_00004.png', id:'zombie_1_00004'}, 
		{src:'res/layouts/zombie_1_00003.png', id:'zombie_1_00003'}, 
		{src:'res/layouts/zombie_1_00002.png', id:'zombie_1_00002'}, 
		{src:'res/layouts/zombie_1_00001.png', id:'zombie_1_00001'}, 
		{src:'res/layouts/zombie_1_00000.png', id:'zombie_1_00000'}, 
		{src:'res/layouts/wizard_yellow.png', id:'wizard_yellow'}, 
		{src:'res/layouts/wizard_red.png', id:'wizard_red'}, 
		{src:'res/layouts/wizard_green.png', id:'wizard_green'}, 
		{src:'res/layouts/wizard_blue.png', id:'wizard_blue'}, 
		{src:'res/layouts/warrior_red.png', id:'warrior_red'}, 
		{src:'res/layouts/warrior_blonde.png', id:'warrior_blonde'}, 
		{src:'res/layouts/warrior_black.png', id:'warrior_black'}, 
		{src:'res/layouts/twitchtactics_title_00200.png', id:'twitchtactics_title_00200'}, 
		{src:'res/layouts/twitchtactics_title_00199.png', id:'twitchtactics_title_00199'}, 
		{src:'res/layouts/twitchtactics_title_00198.png', id:'twitchtactics_title_00198'}, 
		{src:'res/layouts/twitchtactics_title_00197.png', id:'twitchtactics_title_00197'}, 
		{src:'res/layouts/twitchtactics_title_00196.png', id:'twitchtactics_title_00196'}, 
		{src:'res/layouts/twitchtactics_title_00195.png', id:'twitchtactics_title_00195'}, 
		{src:'res/layouts/twitchtactics_title_00194.png', id:'twitchtactics_title_00194'}, 
		{src:'res/layouts/twitchtactics_title_00193.png', id:'twitchtactics_title_00193'}, 
		{src:'res/layouts/twitchtactics_title_00192.png', id:'twitchtactics_title_00192'}, 
		{src:'res/layouts/twitchtactics_title_00191.png', id:'twitchtactics_title_00191'}, 
		{src:'res/layouts/twitchtactics_title_00190.png', id:'twitchtactics_title_00190'}, 
		{src:'res/layouts/twitchtactics_title_00189.png', id:'twitchtactics_title_00189'}, 
		{src:'res/layouts/twitchtactics_title_00188.png', id:'twitchtactics_title_00188'}, 
		{src:'res/layouts/twitchtactics_title_00187.png', id:'twitchtactics_title_00187'}, 
		{src:'res/layouts/twitchtactics_title_00186.png', id:'twitchtactics_title_00186'}, 
		{src:'res/layouts/twitchtactics_title_00185.png', id:'twitchtactics_title_00185'}, 
		{src:'res/layouts/twitchtactics_title_00184.png', id:'twitchtactics_title_00184'}, 
		{src:'res/layouts/twitchtactics_title_00183.png', id:'twitchtactics_title_00183'}, 
		{src:'res/layouts/twitchtactics_title_00182.png', id:'twitchtactics_title_00182'}, 
		{src:'res/layouts/twitchtactics_title_00181.png', id:'twitchtactics_title_00181'}, 
		{src:'res/layouts/twitchtactics_title_00180.png', id:'twitchtactics_title_00180'}, 
		{src:'res/layouts/twitchtactics_title_00179.png', id:'twitchtactics_title_00179'}, 
		{src:'res/layouts/twitchtactics_title_00178.jpg', id:'twitchtactics_title_00178'}, 
		{src:'res/layouts/twitchtactics_title_00177.jpg', id:'twitchtactics_title_00177'}, 
		{src:'res/layouts/twitchtactics_title_00176.jpg', id:'twitchtactics_title_00176'}, 
		{src:'res/layouts/twitchtactics_title_00175.png', id:'twitchtactics_title_00175'}, 
		{src:'res/layouts/twitchtactics_title_00174.png', id:'twitchtactics_title_00174'}, 
		{src:'res/layouts/twitchtactics_title_00173.png', id:'twitchtactics_title_00173'}, 
		{src:'res/layouts/twitchtactics_title_00172.png', id:'twitchtactics_title_00172'}, 
		{src:'res/layouts/twitchtactics_title_00171.png', id:'twitchtactics_title_00171'}, 
		{src:'res/layouts/twitchtactics_title_00170.png', id:'twitchtactics_title_00170'}, 
		{src:'res/layouts/twitchtactics_title_00169.png', id:'twitchtactics_title_00169'}, 
		{src:'res/layouts/twitchtactics_title_00168.png', id:'twitchtactics_title_00168'}, 
		{src:'res/layouts/twitchtactics_title_00167.png', id:'twitchtactics_title_00167'}, 
		{src:'res/layouts/twitchtactics_title_00166.png', id:'twitchtactics_title_00166'}, 
		{src:'res/layouts/twitchtactics_title_00165.png', id:'twitchtactics_title_00165'}, 
		{src:'res/layouts/twitchtactics_title_00164.png', id:'twitchtactics_title_00164'}, 
		{src:'res/layouts/twitchtactics_title_00163.png', id:'twitchtactics_title_00163'}, 
		{src:'res/layouts/twitchtactics_title_00162.png', id:'twitchtactics_title_00162'}, 
		{src:'res/layouts/twitchtactics_title_00161.png', id:'twitchtactics_title_00161'}, 
		{src:'res/layouts/twitchtactics_title_00160.png', id:'twitchtactics_title_00160'}, 
		{src:'res/layouts/twitchtactics_title_00159.png', id:'twitchtactics_title_00159'}, 
		{src:'res/layouts/twitchtactics_title_00158.png', id:'twitchtactics_title_00158'}, 
		{src:'res/layouts/twitchtactics_title_00157.png', id:'twitchtactics_title_00157'}, 
		{src:'res/layouts/twitchtactics_title_00156.png', id:'twitchtactics_title_00156'}, 
		{src:'res/layouts/twitchtactics_title_00155.png', id:'twitchtactics_title_00155'}, 
		{src:'res/layouts/twitchtactics_title_00154.png', id:'twitchtactics_title_00154'}, 
		{src:'res/layouts/twitchtactics_title_00153.png', id:'twitchtactics_title_00153'}, 
		{src:'res/layouts/twitchtactics_title_00152.png', id:'twitchtactics_title_00152'}, 
		{src:'res/layouts/twitchtactics_title_00151.png', id:'twitchtactics_title_00151'}, 
		{src:'res/layouts/twitchtactics_title_00150.png', id:'twitchtactics_title_00150'}, 
		{src:'res/layouts/twitchtactics_title_00149.png', id:'twitchtactics_title_00149'}, 
		{src:'res/layouts/twitchtactics_title_00148.png', id:'twitchtactics_title_00148'}, 
		{src:'res/layouts/twitchtactics_title_00147.png', id:'twitchtactics_title_00147'}, 
		{src:'res/layouts/twitchtactics_title_00146.png', id:'twitchtactics_title_00146'}, 
		{src:'res/layouts/twitchtactics_title_00145.png', id:'twitchtactics_title_00145'}, 
		{src:'res/layouts/twitchtactics_title_00144.png', id:'twitchtactics_title_00144'}, 
		{src:'res/layouts/twitchtactics_title_00143.png', id:'twitchtactics_title_00143'}, 
		{src:'res/layouts/twitchtactics_title_00142.png', id:'twitchtactics_title_00142'}, 
		{src:'res/layouts/twitchtactics_title_00141.png', id:'twitchtactics_title_00141'}, 
		{src:'res/layouts/twitchtactics_title_00140.png', id:'twitchtactics_title_00140'}, 
		{src:'res/layouts/twitchtactics_title_00139.png', id:'twitchtactics_title_00139'}, 
		{src:'res/layouts/twitchtactics_title_00138.png', id:'twitchtactics_title_00138'}, 
		{src:'res/layouts/twitchtactics_title_00137.png', id:'twitchtactics_title_00137'}, 
		{src:'res/layouts/twitchtactics_title_00136.png', id:'twitchtactics_title_00136'}, 
		{src:'res/layouts/twitchtactics_title_00135.png', id:'twitchtactics_title_00135'}, 
		{src:'res/layouts/twitchtactics_title_00134.png', id:'twitchtactics_title_00134'}, 
		{src:'res/layouts/twitchtactics_title_00133.png', id:'twitchtactics_title_00133'}, 
		{src:'res/layouts/twitchtactics_title_00132.png', id:'twitchtactics_title_00132'}, 
		{src:'res/layouts/twitchtactics_title_00131.png', id:'twitchtactics_title_00131'}, 
		{src:'res/layouts/twitchtactics_title_00130.png', id:'twitchtactics_title_00130'}, 
		{src:'res/layouts/twitchtactics_title_00129.png', id:'twitchtactics_title_00129'}, 
		{src:'res/layouts/twitchtactics_title_00128.png', id:'twitchtactics_title_00128'}, 
		{src:'res/layouts/twitchtactics_title_00127.png', id:'twitchtactics_title_00127'}, 
		{src:'res/layouts/twitchtactics_title_00126.png', id:'twitchtactics_title_00126'}, 
		{src:'res/layouts/twitchtactics_title_00125.png', id:'twitchtactics_title_00125'}, 
		{src:'res/layouts/twitchtactics_title_00124.png', id:'twitchtactics_title_00124'}, 
		{src:'res/layouts/twitchtactics_title_00123.png', id:'twitchtactics_title_00123'}, 
		{src:'res/layouts/twitchtactics_title_00122.png', id:'twitchtactics_title_00122'}, 
		{src:'res/layouts/twitchtactics_title_00121.png', id:'twitchtactics_title_00121'}, 
		{src:'res/layouts/twitchtactics_title_00120.png', id:'twitchtactics_title_00120'}, 
		{src:'res/layouts/twitchtactics_title_00119.png', id:'twitchtactics_title_00119'}, 
		{src:'res/layouts/twitchtactics_title_00118.png', id:'twitchtactics_title_00118'}, 
		{src:'res/layouts/twitchtactics_title_00117.png', id:'twitchtactics_title_00117'}, 
		{src:'res/layouts/twitchtactics_title_00116.png', id:'twitchtactics_title_00116'}, 
		{src:'res/layouts/twitchtactics_title_00115.png', id:'twitchtactics_title_00115'}, 
		{src:'res/layouts/twitchtactics_title_00114.png', id:'twitchtactics_title_00114'}, 
		{src:'res/layouts/twitchtactics_title_00113.png', id:'twitchtactics_title_00113'}, 
		{src:'res/layouts/twitchtactics_title_00112.png', id:'twitchtactics_title_00112'}, 
		{src:'res/layouts/twitchtactics_title_00111.png', id:'twitchtactics_title_00111'}, 
		{src:'res/layouts/twitchtactics_title_00110.png', id:'twitchtactics_title_00110'}, 
		{src:'res/layouts/twitchtactics_title_00109.png', id:'twitchtactics_title_00109'}, 
		{src:'res/layouts/twitchtactics_title_00108.png', id:'twitchtactics_title_00108'}, 
		{src:'res/layouts/twitchtactics_title_00107.png', id:'twitchtactics_title_00107'}, 
		{src:'res/layouts/twitchtactics_title_00106.png', id:'twitchtactics_title_00106'}, 
		{src:'res/layouts/twitchtactics_title_00105.png', id:'twitchtactics_title_00105'}, 
		{src:'res/layouts/twitchtactics_title_00104.png', id:'twitchtactics_title_00104'}, 
		{src:'res/layouts/twitchtactics_title_00103.png', id:'twitchtactics_title_00103'}, 
		{src:'res/layouts/twitchtactics_title_00102.png', id:'twitchtactics_title_00102'}, 
		{src:'res/layouts/twitchtactics_title_00101.png', id:'twitchtactics_title_00101'}, 
		{src:'res/layouts/twitchtactics_title_00100.png', id:'twitchtactics_title_00100'}, 
		{src:'res/layouts/twitchtactics_title_00099.png', id:'twitchtactics_title_00099'}, 
		{src:'res/layouts/twitchtactics_title_00098.png', id:'twitchtactics_title_00098'}, 
		{src:'res/layouts/twitchtactics_title_00097.png', id:'twitchtactics_title_00097'}, 
		{src:'res/layouts/twitchtactics_title_00096.png', id:'twitchtactics_title_00096'}, 
		{src:'res/layouts/twitchtactics_title_00095.png', id:'twitchtactics_title_00095'}, 
		{src:'res/layouts/twitchtactics_title_00094.png', id:'twitchtactics_title_00094'}, 
		{src:'res/layouts/twitchtactics_title_00093.png', id:'twitchtactics_title_00093'}, 
		{src:'res/layouts/twitchtactics_title_00092.png', id:'twitchtactics_title_00092'}, 
		{src:'res/layouts/twitchtactics_title_00091.png', id:'twitchtactics_title_00091'}, 
		{src:'res/layouts/twitchtactics_title_00090.png', id:'twitchtactics_title_00090'}, 
		{src:'res/layouts/twitchtactics_title_00089.png', id:'twitchtactics_title_00089'}, 
		{src:'res/layouts/twitchtactics_title_00088.png', id:'twitchtactics_title_00088'}, 
		{src:'res/layouts/twitchtactics_title_00087.png', id:'twitchtactics_title_00087'}, 
		{src:'res/layouts/twitchtactics_title_00086.png', id:'twitchtactics_title_00086'}, 
		{src:'res/layouts/twitchtactics_title_00085.png', id:'twitchtactics_title_00085'}, 
		{src:'res/layouts/twitchtactics_title_00084.png', id:'twitchtactics_title_00084'}, 
		{src:'res/layouts/twitchtactics_title_00083.png', id:'twitchtactics_title_00083'}, 
		{src:'res/layouts/twitchtactics_title_00082.png', id:'twitchtactics_title_00082'}, 
		{src:'res/layouts/twitchtactics_title_00081.png', id:'twitchtactics_title_00081'}, 
		{src:'res/layouts/twitchtactics_title_00080.png', id:'twitchtactics_title_00080'}, 
		{src:'res/layouts/twitchtactics_title_00079.png', id:'twitchtactics_title_00079'}, 
		{src:'res/layouts/twitchtactics_title_00078.png', id:'twitchtactics_title_00078'}, 
		{src:'res/layouts/twitchtactics_title_00077.png', id:'twitchtactics_title_00077'}, 
		{src:'res/layouts/twitchtactics_title_00076.png', id:'twitchtactics_title_00076'}, 
		{src:'res/layouts/twitchtactics_title_00075.png', id:'twitchtactics_title_00075'}, 
		{src:'res/layouts/twitchtactics_title_00074.png', id:'twitchtactics_title_00074'}, 
		{src:'res/layouts/twitchtactics_title_00073.png', id:'twitchtactics_title_00073'}, 
		{src:'res/layouts/twitchtactics_title_00072.png', id:'twitchtactics_title_00072'}, 
		{src:'res/layouts/twitchtactics_title_00071.png', id:'twitchtactics_title_00071'}, 
		{src:'res/layouts/twitchtactics_title_00070.png', id:'twitchtactics_title_00070'}, 
		{src:'res/layouts/twitchtactics_title_00069.png', id:'twitchtactics_title_00069'}, 
		{src:'res/layouts/twitchtactics_title_00068.png', id:'twitchtactics_title_00068'}, 
		{src:'res/layouts/twitchtactics_title_00067.png', id:'twitchtactics_title_00067'}, 
		{src:'res/layouts/twitchtactics_title_00066.png', id:'twitchtactics_title_00066'}, 
		{src:'res/layouts/twitchtactics_title_00065.png', id:'twitchtactics_title_00065'}, 
		{src:'res/layouts/twitchtactics_title_00064.png', id:'twitchtactics_title_00064'}, 
		{src:'res/layouts/twitchtactics_title_00063.png', id:'twitchtactics_title_00063'}, 
		{src:'res/layouts/twitchtactics_title_00062.png', id:'twitchtactics_title_00062'}, 
		{src:'res/layouts/twitchtactics_title_00061.png', id:'twitchtactics_title_00061'}, 
		{src:'res/layouts/twitchtactics_title_00060.png', id:'twitchtactics_title_00060'}, 
		{src:'res/layouts/twitchtactics_title_00059.png', id:'twitchtactics_title_00059'}, 
		{src:'res/layouts/twitchtactics_title_00058.png', id:'twitchtactics_title_00058'}, 
		{src:'res/layouts/twitchtactics_title_00057.png', id:'twitchtactics_title_00057'}, 
		{src:'res/layouts/twitchtactics_title_00056.png', id:'twitchtactics_title_00056'}, 
		{src:'res/layouts/twitchtactics_title_00055.png', id:'twitchtactics_title_00055'}, 
		{src:'res/layouts/twitchtactics_title_00054.png', id:'twitchtactics_title_00054'}, 
		{src:'res/layouts/twitchtactics_title_00053.png', id:'twitchtactics_title_00053'}, 
		{src:'res/layouts/twitchtactics_title_00052.png', id:'twitchtactics_title_00052'}, 
		{src:'res/layouts/twitchtactics_title_00051.png', id:'twitchtactics_title_00051'}, 
		{src:'res/layouts/twitchtactics_title_00050.png', id:'twitchtactics_title_00050'}, 
		{src:'res/layouts/twitchtactics_title_00049.png', id:'twitchtactics_title_00049'}, 
		{src:'res/layouts/twitchtactics_title_00048.png', id:'twitchtactics_title_00048'}, 
		{src:'res/layouts/twitchtactics_title_00047.png', id:'twitchtactics_title_00047'}, 
		{src:'res/layouts/twitchtactics_title_00046.png', id:'twitchtactics_title_00046'}, 
		{src:'res/layouts/twitchtactics_title_00045.png', id:'twitchtactics_title_00045'}, 
		{src:'res/layouts/twitchtactics_title_00044.png', id:'twitchtactics_title_00044'}, 
		{src:'res/layouts/twitchtactics_title_00043.png', id:'twitchtactics_title_00043'}, 
		{src:'res/layouts/twitchtactics_title_00042.png', id:'twitchtactics_title_00042'}, 
		{src:'res/layouts/twitchtactics_title_00041.png', id:'twitchtactics_title_00041'}, 
		{src:'res/layouts/twitchtactics_title_00040.png', id:'twitchtactics_title_00040'}, 
		{src:'res/layouts/twitchtactics_title_00039.png', id:'twitchtactics_title_00039'}, 
		{src:'res/layouts/twitchtactics_title_00038.png', id:'twitchtactics_title_00038'}, 
		{src:'res/layouts/twitchtactics_title_00037.png', id:'twitchtactics_title_00037'}, 
		{src:'res/layouts/twitchtactics_title_00036.png', id:'twitchtactics_title_00036'}, 
		{src:'res/layouts/twitchtactics_title_00035.png', id:'twitchtactics_title_00035'}, 
		{src:'res/layouts/twitchtactics_title_00034.png', id:'twitchtactics_title_00034'}, 
		{src:'res/layouts/twitchtactics_title_00033.png', id:'twitchtactics_title_00033'}, 
		{src:'res/layouts/twitchtactics_title_00032.png', id:'twitchtactics_title_00032'}, 
		{src:'res/layouts/twitchtactics_title_00031.png', id:'twitchtactics_title_00031'}, 
		{src:'res/layouts/twitchtactics_title_00030.png', id:'twitchtactics_title_00030'}, 
		{src:'res/layouts/twitchtactics_title_00029.png', id:'twitchtactics_title_00029'}, 
		{src:'res/layouts/twitchtactics_title_00028.png', id:'twitchtactics_title_00028'}, 
		{src:'res/layouts/twitchtactics_title_00027.png', id:'twitchtactics_title_00027'}, 
		{src:'res/layouts/twitchtactics_title_00026.png', id:'twitchtactics_title_00026'}, 
		{src:'res/layouts/twitchtactics_title_00025.png', id:'twitchtactics_title_00025'}, 
		{src:'res/layouts/twitchtactics_title_00024.png', id:'twitchtactics_title_00024'}, 
		{src:'res/layouts/twitchtactics_title_00023.png', id:'twitchtactics_title_00023'}, 
		{src:'res/layouts/twitchtactics_title_00022.png', id:'twitchtactics_title_00022'}, 
		{src:'res/layouts/twitchtactics_title_00021.png', id:'twitchtactics_title_00021'}, 
		{src:'res/layouts/twitchtactics_title_00020.png', id:'twitchtactics_title_00020'}, 
		{src:'res/layouts/twitchtactics_title_00019.png', id:'twitchtactics_title_00019'}, 
		{src:'res/layouts/twitchtactics_title_00018.png', id:'twitchtactics_title_00018'}, 
		{src:'res/layouts/twitchtactics_title_00017.png', id:'twitchtactics_title_00017'}, 
		{src:'res/layouts/twitchtactics_title_00016.png', id:'twitchtactics_title_00016'}, 
		{src:'res/layouts/twitchtactics_title_00015.png', id:'twitchtactics_title_00015'}, 
		{src:'res/layouts/twitchtactics_title_00014.png', id:'twitchtactics_title_00014'}, 
		{src:'res/layouts/twitchtactics_title_00013.png', id:'twitchtactics_title_00013'}, 
		{src:'res/layouts/twitchtactics_title_00012.png', id:'twitchtactics_title_00012'}, 
		{src:'res/layouts/twitchtactics_title_00011.png', id:'twitchtactics_title_00011'}, 
		{src:'res/layouts/twitchtactics_title_00010.png', id:'twitchtactics_title_00010'}, 
		{src:'res/layouts/twitchtactics_title_00009.png', id:'twitchtactics_title_00009'}, 
		{src:'res/layouts/twitchtactics_title_00008.png', id:'twitchtactics_title_00008'}, 
		{src:'res/layouts/twitchtactics_title_00007.png', id:'twitchtactics_title_00007'}, 
		{src:'res/layouts/twitchtactics_title_00006.png', id:'twitchtactics_title_00006'}, 
		{src:'res/layouts/twitchtactics_title_00005.png', id:'twitchtactics_title_00005'}, 
		{src:'res/layouts/twitchtactics_title_00004.png', id:'twitchtactics_title_00004'}, 
		{src:'res/layouts/twitchtactics_title_00003.png', id:'twitchtactics_title_00003'}, 
		{src:'res/layouts/twitchtactics_title_00002.png', id:'twitchtactics_title_00002'}, 
		{src:'res/layouts/twitchtactics_title_00001.png', id:'twitchtactics_title_00001'}, 
		{src:'res/layouts/twitchtactics_title_00000.png', id:'twitchtactics_title_00000'}, 
		{src:'res/layouts/sword_super_sm.png', id:'sword_super_sm'}, 
		{src:'res/layouts/sword_sm.png', id:'sword_sm'}, 
		{src:'res/layouts/sword_piece2_sm.png', id:'sword_piece2_sm'}, 
		{src:'res/layouts/sword_piece1_sm.png', id:'sword_piece1_sm'}, 
		{src:'res/layouts/snake_1_00074.png', id:'snake_1_00074'}, 
		{src:'res/layouts/snake_1_00073.png', id:'snake_1_00073'}, 
		{src:'res/layouts/snake_1_00072.png', id:'snake_1_00072'}, 
		{src:'res/layouts/snake_1_00071.png', id:'snake_1_00071'}, 
		{src:'res/layouts/snake_1_00070.png', id:'snake_1_00070'}, 
		{src:'res/layouts/snake_1_00069.png', id:'snake_1_00069'}, 
		{src:'res/layouts/snake_1_00068.png', id:'snake_1_00068'}, 
		{src:'res/layouts/snake_1_00067.png', id:'snake_1_00067'}, 
		{src:'res/layouts/snake_1_00066.png', id:'snake_1_00066'}, 
		{src:'res/layouts/snake_1_00065.png', id:'snake_1_00065'}, 
		{src:'res/layouts/snake_1_00064.png', id:'snake_1_00064'}, 
		{src:'res/layouts/snake_1_00063.png', id:'snake_1_00063'}, 
		{src:'res/layouts/snake_1_00062.png', id:'snake_1_00062'}, 
		{src:'res/layouts/snake_1_00061.png', id:'snake_1_00061'}, 
		{src:'res/layouts/snake_1_00060.png', id:'snake_1_00060'}, 
		{src:'res/layouts/snake_1_00059.png', id:'snake_1_00059'}, 
		{src:'res/layouts/snake_1_00058.png', id:'snake_1_00058'}, 
		{src:'res/layouts/snake_1_00057.png', id:'snake_1_00057'}, 
		{src:'res/layouts/snake_1_00056.png', id:'snake_1_00056'}, 
		{src:'res/layouts/snake_1_00055.png', id:'snake_1_00055'}, 
		{src:'res/layouts/snake_1_00054.png', id:'snake_1_00054'}, 
		{src:'res/layouts/snake_1_00053.png', id:'snake_1_00053'}, 
		{src:'res/layouts/snake_1_00052.png', id:'snake_1_00052'}, 
		{src:'res/layouts/snake_1_00051.png', id:'snake_1_00051'}, 
		{src:'res/layouts/snake_1_00050.png', id:'snake_1_00050'}, 
		{src:'res/layouts/snake_1_00049.png', id:'snake_1_00049'}, 
		{src:'res/layouts/snake_1_00048.png', id:'snake_1_00048'}, 
		{src:'res/layouts/snake_1_00047.png', id:'snake_1_00047'}, 
		{src:'res/layouts/snake_1_00046.png', id:'snake_1_00046'}, 
		{src:'res/layouts/snake_1_00045.png', id:'snake_1_00045'}, 
		{src:'res/layouts/snake_1_00044.png', id:'snake_1_00044'}, 
		{src:'res/layouts/snake_1_00043.png', id:'snake_1_00043'}, 
		{src:'res/layouts/snake_1_00042.png', id:'snake_1_00042'}, 
		{src:'res/layouts/snake_1_00041.png', id:'snake_1_00041'}, 
		{src:'res/layouts/snake_1_00040.png', id:'snake_1_00040'}, 
		{src:'res/layouts/snake_1_00039.png', id:'snake_1_00039'}, 
		{src:'res/layouts/snake_1_00038.png', id:'snake_1_00038'}, 
		{src:'res/layouts/snake_1_00037.png', id:'snake_1_00037'}, 
		{src:'res/layouts/snake_1_00036.png', id:'snake_1_00036'}, 
		{src:'res/layouts/snake_1_00035.png', id:'snake_1_00035'}, 
		{src:'res/layouts/snake_1_00034.png', id:'snake_1_00034'}, 
		{src:'res/layouts/snake_1_00033.png', id:'snake_1_00033'}, 
		{src:'res/layouts/snake_1_00032.png', id:'snake_1_00032'}, 
		{src:'res/layouts/snake_1_00031.png', id:'snake_1_00031'}, 
		{src:'res/layouts/snake_1_00030.png', id:'snake_1_00030'}, 
		{src:'res/layouts/snake_1_00029.png', id:'snake_1_00029'}, 
		{src:'res/layouts/snake_1_00028.png', id:'snake_1_00028'}, 
		{src:'res/layouts/snake_1_00027.png', id:'snake_1_00027'}, 
		{src:'res/layouts/snake_1_00026.png', id:'snake_1_00026'}, 
		{src:'res/layouts/snake_1_00025.png', id:'snake_1_00025'}, 
		{src:'res/layouts/snake_1_00024.png', id:'snake_1_00024'}, 
		{src:'res/layouts/snake_1_00023.png', id:'snake_1_00023'}, 
		{src:'res/layouts/snake_1_00022.png', id:'snake_1_00022'}, 
		{src:'res/layouts/snake_1_00021.png', id:'snake_1_00021'}, 
		{src:'res/layouts/snake_1_00020.png', id:'snake_1_00020'}, 
		{src:'res/layouts/snake_1_00019.png', id:'snake_1_00019'}, 
		{src:'res/layouts/snake_1_00018.png', id:'snake_1_00018'}, 
		{src:'res/layouts/snake_1_00017.png', id:'snake_1_00017'}, 
		{src:'res/layouts/snake_1_00016.png', id:'snake_1_00016'}, 
		{src:'res/layouts/snake_1_00015.png', id:'snake_1_00015'}, 
		{src:'res/layouts/snake_1_00014.png', id:'snake_1_00014'}, 
		{src:'res/layouts/snake_1_00013.png', id:'snake_1_00013'}, 
		{src:'res/layouts/snake_1_00012.png', id:'snake_1_00012'}, 
		{src:'res/layouts/snake_1_00011.png', id:'snake_1_00011'}, 
		{src:'res/layouts/snake_1_00010.png', id:'snake_1_00010'}, 
		{src:'res/layouts/snake_1_00009.png', id:'snake_1_00009'}, 
		{src:'res/layouts/snake_1_00008.png', id:'snake_1_00008'}, 
		{src:'res/layouts/snake_1_00007.png', id:'snake_1_00007'}, 
		{src:'res/layouts/snake_1_00006.png', id:'snake_1_00006'}, 
		{src:'res/layouts/snake_1_00005.png', id:'snake_1_00005'}, 
		{src:'res/layouts/snake_1_00004.png', id:'snake_1_00004'}, 
		{src:'res/layouts/snake_1_00003.png', id:'snake_1_00003'}, 
		{src:'res/layouts/snake_1_00002.png', id:'snake_1_00002'}, 
		{src:'res/layouts/snake_1_00001.png', id:'snake_1_00001'}, 
		{src:'res/layouts/snake_1_00000.png', id:'snake_1_00000'}, 
		{src:'res/layouts/shield_supersmall.png', id:'shield_supersmall'}, 
		{src:'res/layouts/shield_sm.png', id:'shield_sm'}, 
		{src:'res/layouts/shield_piece5_sm.png', id:'shield_piece5_sm'}, 
		{src:'res/layouts/shield_piece4_sm.png', id:'shield_piece4_sm'}, 
		{src:'res/layouts/shield_piece3_sm.png', id:'shield_piece3_sm'}, 
		{src:'res/layouts/shield_piece2_sm.png', id:'shield_piece2_sm'}, 
		{src:'res/layouts/shield_piece1_sm.png', id:'shield_piece1_sm'}, 
		{src:'res/layouts/retroFF_dialogue.png', id:'retroFF_dialogue'}, 
		{src:'res/layouts/ninjared_sm.png', id:'ninjared_sm'}, 
		{src:'res/layouts/ninjagreen_sm.png', id:'ninjagreen_sm'}, 
		{src:'res/layouts/ninjablue_sm.png', id:'ninjablue_sm'}, 
		{src:'res/layouts/Comp2_00024.png', id:'Comp2_00024'}, 
		{src:'res/layouts/Comp2_00023.png', id:'Comp2_00023'}, 
		{src:'res/layouts/Comp2_00022.png', id:'Comp2_00022'}, 
		{src:'res/layouts/Comp2_00021.png', id:'Comp2_00021'}, 
		{src:'res/layouts/Comp2_00020.png', id:'Comp2_00020'}, 
		{src:'res/layouts/Comp2_00019.png', id:'Comp2_00019'}, 
		{src:'res/layouts/Comp2_00018.png', id:'Comp2_00018'}, 
		{src:'res/layouts/Comp2_00017.png', id:'Comp2_00017'}, 
		{src:'res/layouts/Comp2_00016.png', id:'Comp2_00016'}, 
		{src:'res/layouts/Comp2_00015.png', id:'Comp2_00015'}, 
		{src:'res/layouts/Comp2_00014.png', id:'Comp2_00014'}, 
		{src:'res/layouts/Comp2_00013.png', id:'Comp2_00013'}, 
		{src:'res/layouts/Comp2_00012.png', id:'Comp2_00012'}, 
		{src:'res/layouts/Comp2_00011.png', id:'Comp2_00011'}, 
		{src:'res/layouts/Comp2_00010.png', id:'Comp2_00010'}, 
		{src:'res/layouts/Comp2_00009.png', id:'Comp2_00009'}, 
		{src:'res/layouts/Comp2_00008.png', id:'Comp2_00008'}, 
		{src:'res/layouts/Comp2_00007.png', id:'Comp2_00007'}, 
		{src:'res/layouts/Comp2_00006.png', id:'Comp2_00006'}, 
		{src:'res/layouts/Comp2_00005.png', id:'Comp2_00005'}, 
		{src:'res/layouts/Comp2_00004.png', id:'Comp2_00004'}, 
		{src:'res/layouts/Comp2_00003.png', id:'Comp2_00003'}, 
		{src:'res/layouts/Comp2_00002.png', id:'Comp2_00002'}, 
		{src:'res/layouts/Comp2_00001.png', id:'Comp2_00001'}, 
		{src:'res/layouts/Comp2_00000.png', id:'Comp2_00000'}, 
		{src:'res/layouts/Blood.png', id:'Blood'}, 
		{src:'res/layouts/bg3.png', id:'bg3'}, 
		{src:'res/layouts/bg2.jpg', id:'bg2'}, 
		{src:'res/layouts/bg1.png', id:'bg1'}
	];

	this.audio = 
	[
		{src:'res/audio/woohoo.mp3', id:'woohoo'}, 
		{src:'res/audio/user_damage_2.mp3', id:'user_damage_2'}, 
		{src:'res/audio/user_damage_1.mp3', id:'user_damage_1'}, 
		{src:'res/audio/sword_explode.mp3', id:'sword_explode'}, 
		{src:'res/audio/shield_explode.mp3', id:'shield_explode'}, 
		{src:'res/audio/music_3.mp3', id:'music_3'}, 
		{src:'res/audio/music_2.mp3', id:'music_2'}, 
		{src:'res/audio/music_1.mp3', id:'music_1'}, 
		{src:'res/audio/defend_show.mp3', id:'defend_show'}, 
		{src:'res/audio/attack_show.mp3', id:'attack_show'}, 
		{src:'res/audio/attack_hit.mp3', id:'attack_hit'}
	];

	this.video = 
	[
		{src:'res/videos/berkeleygames.webm', id:'berkeleygames'}
	];

	this.fonts = 
	[
		{src:'res/fonts/PlayfairDisplay-Regular.otf', id:'PlayfairDisplay-Regular'}
	];


}

var localAssets = new LocalAssets();
