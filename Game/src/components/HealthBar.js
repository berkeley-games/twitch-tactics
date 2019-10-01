/**
 * Created by George on 1/29/2016.
 */
lib.userHealth.prototype.subtractHealth = function(health)
{
	this.health -= health;
	this.totalHealth.text = Math.max(0, this.health) + "/" + this.maxHealth;
	var ratio = this.health / this.maxHealth;
	if(ratio < 0) ratio = 0;
	this.bar.to(.5, {scaleX:ratio});
};

lib.bossHealth.prototype.subtractHealth = function(health)
{
	this.health -= health;
	this.totalHealth.text = Math.max(0, this.health) + "/" + this.maxHealth;
	var ratio = this.health / this.maxHealth;
	if(ratio < 0) ratio = 0;
	this.bar.to(.5, {scaleX:ratio});
};