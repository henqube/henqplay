(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#939FCB").ss(1,1,1).p("AnanaIO1AAIAAO1Iu1AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A8FBE").s().p("AnaHbIAAu1IO1AAIAAO1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-48.4,-48.4,97,97), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#939FCB").ss(1,1,1).p("A0noCMApPAAAIAAQFMgpPAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A8FBE").s().p("A0nIDIAAwFMApPAAAIAAQFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-133,-52.5,266,105), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(31));

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.cache(-50,-50,101,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},59,cjs.Ease.quadInOut).to({scaleX:1.62,scaleY:1.62,rotation:732},1).to({scaleX:1,scaleY:1,rotation:1080},29,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-47.9,96,96);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-52,265,104);


// stage content:
(lib.btn_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.documentElement.addEventListener('touchstart', function (event) {
		     if (event.touches.length > 1) {
		          event.preventDefault(); 
		        } 
		    }, false);
		
		var lastTouchEnd = 0; 
		
		document.documentElement.addEventListener('touchend', function (event) {
		     var now = (new Date()).getTime();
		     if (now - lastTouchEnd <= 300) {
		          event.preventDefault(); 
		        } lastTouchEnd = now; 
		    }, false);
		this.stop();
		
		
		this.btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame(e)
		{	
			this.rot_box.gotoAndPlay(60);
			this.btn.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.rot_box = new lib.Symbol3();
	this.rot_box.name = "rot_box";
	this.rot_box.parent = this;
	this.rot_box.setTransform(162.5,122.5);

	this.btn = new lib.Symbol1();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(160,303.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn},{t:this.rot_box}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.5,274.6,265,281);
// library properties:
lib.properties = {
	id: '31275A5C9EA7464FBE7BA689F2FE8402',
	width: 320,
	height: 400,
	fps: 60,
	color: "#E6D9C9",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['31275A5C9EA7464FBE7BA689F2FE8402'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;