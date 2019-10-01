/**
 * Created by George on 1/29/2016.
 */

lib.Hero.prototype.showIcon = function(frameLabel)
{
	if(frameLabel == null) return this.icon.to(.5, {alpha:0, scale:0});

	this.icon.gotoAndStop(frameLabel);
	var label = frameLabel + "_show";
	createjs.Sound.play(label);
	this.icon.fromTo(.5, {scale:0, alpha:0, rotation:-180}, {scale:1, alpha:1, rotation:0, ease:Back.easeOut})
};

lib.Hero.prototype.resetValues = function()
{
	this.attackAmount = 0;
	this.defendAmount = 0;
	this.jumpAmount = 0;
};

lib.Hero.prototype.explode = function()
{
	this.character.dispose();

	//var splatter = new lib.Splatter();
	//addChild(splatter);
	//splatter.start();
};

//lib.Splatter.prototype.start = function()
//{
//
//};