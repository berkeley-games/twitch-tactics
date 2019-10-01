/**
 * Created by George on 1/30/2016.
 */
lib.BattleStats.prototype.updateTotals = function(attackAmount, defendAmount, jumpAmount)
{
	this.attackAmount = attackAmount;
	this.defendAmount = defendAmount;
	this.jumpAmount = jumpAmount;

	this.attack.attackField.text = attackAmount;
	this.defend.defendField.text = defendAmount;
};

lib.BattleStats.prototype.hide = function(callback)
{
	var self = this;
	this.canAttack = false;
	this.to(.5, {alpha:0, onComplete:function(){
		self.reset();
		self.visible = false;
		self.alpha = 1;
	}});
};

lib.BattleStats.prototype.reset = function()
{
	TweenMax.killChildTweensOf(this);
	TweenMax.killChildTweensOf(this.attack);
	TweenMax.killChildTweensOf(this.defend);
	TweenMax.killChildTweensOf(this.bossStats);

	this.visible = true;

	this.attack.x = -175;
	this.attack.y = 0;
	this.attack.alpha = 1;
	this.attack.rotation = 0;
	this.attack.gotoAndStop(0);
	this.attack.scale = 1;

	this.defend.x = -175;
	this.defend.y = 0;
	this.defend.alpha = 1;
	this.defend.rotation = 0;
	this.defend.gotoAndStop(0);
	this.defend.scale = 1;

	this.bossStats.x = 1450;
	this.bossStats.y = 0;
	this.bossStats.alpha = 1;
	this.bossStats.rotation = 0;
	this.bossStats.attack.gotoAndStop(0);
	this.bossStats.defend.gotoAndStop(0);
	this.bossStats.scale = 1;
	this.bossStats.visible = false;
};

lib.BattleStats.prototype.explodeShield = function(ref)
{
	var targetX = ref.globalX + ref.width / 2;
	var targetY = ref.globalY + ref.height / 2;
	var piece1 = new lib.shieldPiece1();
	var piece2 = new lib.shieldPiece2();
	var piece3 = new lib.shieldPiece3();
	var piece4 = new lib.shieldPiece4();
	var piece5 = new lib.shieldPiece5();
	piece1.regX = piece1.width / 2;
	piece2.regX = piece2.width / 2;
	piece3.regX = piece3.width / 2;
	piece4.regX = piece4.width / 2;
	piece5.regX = piece5.width / 2;
	piece1.regY = piece1.height / 2;
	piece2.regY = piece2.height / 2;
	piece3.regY = piece3.height / 2;
	piece4.regY = piece4.height / 2;
	piece5.regY = piece5.height / 2;
	piece1.x = targetX;
	piece2.x = targetX;
	piece3.x = targetX;
	piece4.x = targetX;
	piece5.x = targetX;
	piece1.y = targetY;
	piece2.y = targetY;
	piece3.y = targetY;
	piece4.y = targetY;
	piece5.y = targetY;
	SceneController.currentScene.addChild(piece1);
	SceneController.currentScene.addChild(piece2);
	SceneController.currentScene.addChild(piece3);
	SceneController.currentScene.addChild(piece4);
	SceneController.currentScene.addChild(piece5);
	piece1.to(.5, {x:"+="+(Math.random()*100-Math.random()*500), y:"+="+(Math.random()*500-Math.random()*500),rotation:(Math.random()*360), alpha:0});
	piece2.to(.5, {x:"+="+(Math.random()*500-Math.random()*500), y:"+="+(Math.random()*500-Math.random()*500),rotation:(Math.random()*360), alpha:0});
	piece3.to(.5, {x:"+="+(Math.random()*500-Math.random()*500), y:"+="+(Math.random()*500-Math.random()*500),rotation:(Math.random()*360), alpha:0});
	piece4.to(.5, {x:"+="+(Math.random()*500-Math.random()*500), y:"+="+(Math.random()*500-Math.random()*500),rotation:(Math.random()*360), alpha:0});
	piece5.to(.5, {x:"+="+(Math.random()*500-Math.random()*500), y:"+="+(Math.random()*500-Math.random()*500),rotation:(Math.random()*360), alpha:0, onComplete:function(piece1, piece2, piece3, piece4, piece5){
		piece1.parent.removeChild(piece1);
		piece2.parent.removeChild(piece2);
		piece3.parent.removeChild(piece3);
		piece4.parent.removeChild(piece4);
		piece5.parent.removeChild(piece5);
	}, onCompleteParams:[piece1, piece2, piece3, piece4, piece5]});
};

lib.BattleStats.prototype.explodeSword = function(ref)
{
	var targetX = ref.globalX + ref.width / 2;
	var targetY = ref.globalY + ref.height / 2;
	var piece1 = new lib.swordPiece1();
	var piece2 = new lib.swordPiece2();
	piece1.regX = piece1.width / 2;
	piece2.regX = piece2.width / 2;
	piece1.regY = piece1.height / 2;
	piece2.regY = piece2.height / 2;
	piece1.x = targetX;
	piece2.x = targetX;
	piece1.y = targetY;
	piece2.y = targetY;
	SceneController.currentScene.addChild(piece1);
	SceneController.currentScene.addChild(piece2);
	piece1.to(.5, {x:"+="+(Math.random()*500-Math.random()*500), y:"+="+(Math.random()*500-Math.random()*500),rotation:(Math.random()*360), alpha:0});
	piece2.to(.5, {x:"+="+(Math.random()*500-Math.random()*500), y:"+="+(Math.random()*500-Math.random()*500),rotation:(Math.random()*360), alpha:0, onComplete:function(piece1, piece2){
		piece1.parent.removeChild(piece1);
		piece2.parent.removeChild(piece2);
	}, onCompleteParams:[piece1, piece2]});
};

lib.BattleStats.prototype.animate = function(callback)
{
	if(!this.canAttack) return;

	var self = this;

	this.reset();

	var isAttack = Math.floor(Math.random() * 3) == 0;

	// the boss chose to attack
	if(isAttack)
	{
		this.bossStats.visible = true;
		this.bossStats.attackAmount = Math.round(Math.random() * application.level);
		this.bossStats.attack.attackField.text = this.bossStats.attackAmount;

		this.attack.to(1.5, {x:100});
		this.attack.to(1, {x:1380, rotation:90, ease:Quad.easeIn, delay:3, onComplete:function(){
			callback("bossDamage:"+self.attack.attackField.text, false);
		}});
		this.attack.to(.4, {alpha:0, delay:4, onComplete:function(){
			createjs.Sound.play("attack_hit");
		}});

		this.bossStats.gotoAndStop(0);
		this.bossStats.from(1, {alpha:0, delay:5});
		this.bossStats.to(1.5, {x:1150, delay:5});
		this.bossStats.to(1, {x:700, ease:Quad.easeIn, delay:8});

		this.defend.to(1.5, {x:100, delay:5});
		this.defend.to(1, {x:700, ease:Quad.easeIn, delay:8, onComplete:function()
		{
			// the bosses attack is greater than the user defense
			if(self.bossStats.attack.attackField.text > self.defendAmount)
			{
				self.bossStats.above(self.defend);
				self.defend.gotoAndStop("broken");
				self.explodeShield(self.defend);
				self.defend.to(.35, {alpha:0, delay:.3});

				createjs.Sound.play("shield_explode");
				self.bossStats.attack.attackField.text = self.bossStats.attack.attackField.text - self.defendAmount;
				self.bossStats.to(.5, {delay:.65, y:470, scale:3, alpha:0, ease:Quad.easeIn, onComplete:function(){
					createjs.Sound.play("attack_hit");
					callback("userDamage:"+self.bossStats.attack.attackField.text);
				}});
				self.bossStats.to(.25, {delay:.25, rotation:180})
			}
			else // the bosses attack is less than the user defense
			{
				if(self.bossStats.attack.attackField.text == self.defendAmount)
				{
					self.explodeShield(self.defend);
					self.defend.gotoAndStop("broken");
					createjs.Sound.play("shield_explode");
				}

				self.bossStats.above(self.defend);

				createjs.Sound.play("sword_explode");
				self.bossStats.attack.gotoAndStop("broken");
				self.explodeSword(self.bossStats);
				self.bossStats.to(.75, {alpha:0, delay:.5});
				self.defend.to(.75, {alpha:0, delay:.5, onComplete:callback});
			}
		}});
	}
	else // the boss has chosen to defend
	{
		this.bossStats.visible = true;
		this.bossStats.defendAmount = Math.round(Math.random() * application.level);
		this.bossStats.defend.defendField.text = this.bossStats.defendAmount;

		this.attack.to(1.5, {x:100});
		this.attack.to(1, {x:700, ease:Quad.easeIn, delay:3});

		this.bossStats.gotoAndStop(1);
		this.bossStats.to(1.5, {x:1150});
		this.bossStats.from(1, {alpha:0});
		this.bossStats.to(1, {x:700, ease:Quad.easeIn, delay:3, onComplete:function()
		{
			// if boss defense is greater than user attack
			if(self.bossStats.defend.defendField.text >= self.attackAmount)
			{
				if(self.bossStats.defend.defendField.text == self.attackAmount)
				{
					self.explodeShield(self.bossStats);
					self.bossStats.defend.gotoAndStop("broken");
					createjs.Sound.play("shield_explode");
				}

				createjs.Sound.play("sword_explode");
				self.attack.gotoAndStop("broken");
				self.explodeSword(self.attack);
				self.attack.to(.75, {alpha:0, delay:.5});

				self.bossStats.below(self.attack);
				self.bossStats.to(.75, {alpha:0, delay:.5, onComplete:callback});
			}
			else // if boss defense less than user attack
			{
				createjs.Sound.play("shield_explode");

				self.attack.below(self.bossStats);
				self.explodeShield(self.bossStats);
				self.bossStats.defend.gotoAndStop("broken");
				self.bossStats.to(.35, {alpha:0, delay:.3});
				self.attack.attackField.text = self.attackAmount - parseInt(self.bossStats.defend.defendField.text);
				self.attack.to(.5, {delay:.45, rotation:90, x:1380, ease:Quad.easeIn, onComplete:callback, onCompleteParams:["bossDamage:"+self.attack.attackField.text]});

				self.attack.to(.5, {delay:1.15, alpha:0, onComplete:function()
				{
					createjs.Sound.play("attack_hit");

					new ParticleSystem(self, {
						images:[],
						emitterX:self.attack.x,
						emitterY:self.attack.y,
						duration:1,
						startXVariance:60,
						startYVariance:60,
						endXVariance:120,
						endYVariance:120,
						endAlpha:0,
						startScaleVariance:.25
					});
				}});
			}
		}});
	}

	function hexToRGBA(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

};