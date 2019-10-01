/**
 * Created by George on 1/29/2016.
 */
function Game()
{
	this.activeUsers = {};
	this.totalUsers = 0;
	this.totalBosses = 3;
	this.userHealth = 0;
	this.bossHealth = 0;
	this.messageQueue = [];
	this.characters = ["knight", "wizard", "ninja"];

	this.ready = function()
	{
		this.bulletin = this.layout.bulletin;
		this.userArea = this.layout.userArea;
		this.bossHealth = this.layout.bossHealth;
		this.userHealth = this.layout.userHealth;

		this.userHealth.maxHealth = 10;
		this.userHealth.health = 10;

		this.userHealth.totalHealth.text = this.userHealth.maxHealth + "/" + this.userHealth.maxHealth;

		this.addBoss();
		this.addBattleStats();

		this.startBattleTimer();
		this.startMessageTimer();

		this.addBot("Botley 1", "attack");

		Quick.call((function(){
			this.addBot("Botley 2", "defend");
		}).bind(this), 2);
	};

	// Because nobody wants to play alone!
	this.addBot = function(name, action)
	{
		this.addUser(name);

		var botData = {};
		botData[name] = {data:action};
		this.processCommand(botData);
	};

	// BattleStats is the animation that plays with the sword/shield
	this.addBattleStats = function()
	{
		this.battleStats = new lib.BattleStats();
		this.battleStats.y = 500;
		this.battleStats.attackAmount = 0;
		this.battleStats.defendAmount = 0;
		this.battleStats.jumpAmount = 0;
		this.battleStats.canAttack = true;
		this.layout.addChild(this.battleStats);
	};

	this.removeBattleStats = function()
	{
		this.battleStats.attack = null;
		this.battleStats.defend = null;
		this.battleStats.bossStats = null;
		TweenMax.killChildTweensOf(this.battleStats);
		this.battleStats.parent.removeChild(this.battleStats);
		this.battleStats = null;
	};

	// The big guy to the right!
	this.addBoss = function()
	{
		var translatedLevel = this.getTranslatedLevel();

		createjs.Sound.stop();
		createjs.Sound.play("music_" + translatedLevel, {loop:-1});

		this.colorText();

		this.boss = new lib["Boss" + translatedLevel]();
		this.boss.x = 1150;
		this.boss.y = (stageHeight - this.boss.height) / 1.65;
		this.layout.addChild(this.boss);

		this.bossHealth.maxHealth = application.level * 10;
		this.bossHealth.health = this.bossHealth.maxHealth;
		this.bossHealth.bar.scaleX = 1;
		this.bossHealth.totalHealth.text = this.bossHealth.maxHealth + "/" + this.bossHealth.maxHealth;
		this.bossHealth.totalLevel.text = "Level " + application.level;

		this.backgroundImage = Make.bitmap("bg" + translatedLevel);
		stage.addChildAt(this.backgroundImage, 0);

		this.boss.from(2, {delay:1, left:stageWidth+150, ease:Quad.easeInOut});
	};

	// stick 'em
	this.removeBoss = function()
	{
		this.boss.parent.removeChild(this.boss);
		this.boss = null;
	};

	// The users have defeated the boss... hooray!
	this.bossKilled = function()
	{
		application.base.killBoss();
		this.removeBattleStats();
		clearInterval(this.attackInterval);
		this.addMessage("The boss has been defeated!", true);

		var self = this;
		this.boss.graphic.to(2, {rotation:1080, scale:0, ease:Quad.easeIn, onComplete:function(){
			self.removeBoss();
		}});
		this.moveUsers();
	};

	// Called after the boss is defeated
	this.nextLevel = function()
	{
		application.level++;
		var self = this;
		var overlay = Make.shapeRect(0, 0, stageWidth, stageHeight, "#000", 1, this);
		overlay.from(1, {alpha:0, repeat:1, yoyo:true, onRepeat:function(){
			self.nextBackgroundImage();
			self.addBoss();
			self.showUsers();
			self.addChild(overlay);
		}, onComplete:function(){
			self.addBattleStats();
			self.removeChild(overlay);
			self.startBattleTimer();
			self.battleStats.from(3, {delay:2, alpha:0});
		}});
	};

	// Characters joined from irc channel
	this.addUser = function(user, message)
	{
		this.totalUsers++;
		application.base.joinGame(user);
		createjs.Sound.play("woohoo");
		this.addMessage(user + " has joined the battle!");

		this.layout.userHealth.maxHealth += 10;
		this.layout.userHealth.health += 10;
		this.layout.userHealth.totalHealth.text = this.layout.userHealth.health + "/" + this.layout.userHealth.maxHealth;
		this.layout.userHealth.subtractHealth(0);
		this.userHealth.totalUsers.text = this.totalUsers + " Users";

		var newHero = this.layout.addChild(new lib.Hero());
		newHero.userField.text = user;

		//var frame = message.substring(5, message.length);
		//trace(newHero.character.totalFrames)
		//newHero.character.gotoAndStop(Math.floor((newHero.character.totalFrames - 1) * Math.random()));

		var xPos = this.userArea.x + (Math.random() * this.userArea.width);
		var yPos = this.userArea.y + (Math.random() * this.userArea.height);
		var scale = (yPos - this.userArea.top) / (this.userArea.bottom - this.userArea.top) + 1;

		if(xPos + newHero.width > this.userArea.right) xPos -= newHero.width / 2;
		if(yPos + 85 > this.userArea.bottom) yPos -= 85;

		xPos = Math.round(xPos);
		yPos = Math.round(yPos);

		newHero.y = yPos;
		newHero.x = xPos;
		newHero.scale = scale;

		newHero.from(xPos / 400, {ease:Linear.easeNone, x:-newHero.width, onUpdate:function(newHero){
			newHero.character.rotation = -25 * Math.random() + 25 * Math.random();
		}, onUpdateParams:[newHero], onComplete:function(newHero){
			newHero.character.rotation = 0;
		}, onCompleteParams:[newHero]});

		newHero.attackAmount = 0;
		newHero.defendAmount = 0;
		newHero.jumpAmount = 0;

		this.activeUsers[user] = newHero;
		this.orderUsers();
		this.colorText();
	};

	// Apply z-order to the users on the screen
	this.orderUsers = function()
	{
		var key, user, scales = [];
		for(key in this.activeUsers)
		{
			user = this.activeUsers[key];
			scales.push(user.scale);
		}

		scales = scales.sort(function(a, b){return a - b});
		while(scales.length > 0)
		{
			for(key in this.activeUsers)
			{
				user = this.activeUsers[key];
				if(user.scale == scales[0])
				{
					user.parent.addChild(user);
					scales.shift();
				}
			}
		}
	};

	// The boss is dead, move the users off of the screen
	this.moveUsers = function()
	{
		var self = this;
		for(var key in this.activeUsers)
		{
			var user = this.activeUsers[key];
			user.to(7-user.scale, {delay:2, x:"+="+stageWidth, ease:Quad.easeIn, onUpdate:function(user){
				user.character.rotation = -25 * Math.random() + 25 * Math.random();
			}, onUpdateParams:[user], onComplete:function(){
				user.character.rotation = 0;
			}, onCompleteParams:[user]});
		}
		Quick.call(function(){
			self.nextLevel();
			self.orderUsers();
		}, 10);
	};

	// There is a new boss, show the active users to begin fighting
	this.showUsers = function()
	{
		for(var key in this.activeUsers)
		{
			var user = this.activeUsers[key];

			var xPos = this.userArea.x + (Math.random() * this.userArea.width);
			var yPos = this.userArea.y + (Math.random() * this.userArea.height);
			user.scale = (yPos - this.userArea.top) / (this.userArea.bottom - this.userArea.top) + 1;

			if(xPos + user.width > this.userArea.right) xPos -= user.width / 2;
			if(yPos + 85 > this.userArea.bottom) yPos -= 85;

			user.fromTo(4-user.scale, {x:-300}, {delay:1, x:xPos, y:yPos, ease:Quad.easeIn, onUpdate:function(user){
				user.character.rotation = -25 * Math.random() + 25 * Math.random();
			}, onUpdateParams:[user], onComplete:function(user){
				user.character.rotation = 0;
			}, onCompleteParams:[user]});
		}
	};

	// The users have been defeated... oh no!
	this.usersKilled = function()
	{
		application.base.gameOver();
		createjs.Sound.stop();
		this.removeBattleStats();
		clearInterval(this.attackInterval);
		this.addMessage("You all died!", true);
		SceneController.transition(Splash, Transitions.CROSS_FADE, 1, true, 5);
	};

	// The server has sent down a valid command, let's process it
	this.processCommand = function(message)
	{
		var userReference;
		for(var user in message)
		{
			var object = message[user];
			var data = object.data;
			userReference = this.activeUsers[user];

			var userExists = userReference instanceof lib.Hero;
			var label = data.indexOf("join") > -1 ? data : "join " + this.characters[Math.floor(Math.random() * this.characters.length)];
			if(!userExists) this.addUser(user, label);
			else
			{
				this[data+"Amount"]++;
				userReference.resetValues();
				userReference.showIcon(data);
				this.addMessage(user + " chose to " + data + "!", true);
				userReference[data+"Amount"] = 1;
			}
		}
	};

	// Tallies all of the users attack/defend selections
	this.updateTotals = function()
	{
		var totalAttack = 0;
		var totalDefend = 0;
		var totalJump = 0;

		for(var key in this.activeUsers)
		{
			totalAttack += this.activeUsers[key].attackAmount;
			totalDefend += this.activeUsers[key].defendAmount;
			totalJump += this.activeUsers[key].jumpAmount;
		}

		this.battleStats.updateTotals(totalAttack, totalDefend, totalJump);
	};

	// Start the battle system
	this.startBattleTimer = function()
	{
		if(this.attackInterval) clearInterval(this.attackInterval);
		this.attackInterval = setInterval(this.attackBegin.bind(this), 1000);
	};

	// BattleStats is inactive, lets start it up and wait for its result
	this.attackBegin = function()
	{
		this.updateTotals();
		clearInterval(this.attackInterval);
		this.battleStats.animate(this.attackComplete.bind(this));
	};

	this.attackComplete = function(result, startTimer)
	{
		startTimer = setDefault(startTimer, true);

		if(result)
		{
			var index = result.indexOf(":") + 1;
			var value = result.substring(index, result.length);

			// the boss is taking damage
			if(result.indexOf("bossDamage") > -1)
			{
				this.boss.to(.25, {repeat:1, yoyo:true, alpha:.8});
				this.bossHealth.subtractHealth(value);

				if(this.bossHealth.health <= 0) return this.bossKilled();
			}
			else // the user is taking damage
			{
				this.userHealth.subtractHealth(value);
				if(this.userHealth.health <= 0) return this.usersKilled();
			}
		}

		// queue next attack cycle, if necessary
		if(startTimer) this.startBattleTimer();
	};

	// Start the message queue processor
	this.startMessageTimer = function()
	{
		this.messageInterval = setInterval(this.showNextMessage.bind(this), 10);
	};

	// Add a message to the message queue
	this.addMessage = function(message, force)
	{
		if(force)
		{
			clearInterval(this.messageInterval);
			this.messageQueue.unshift(message);
			this.startMessageTimer();
		}
		else this.messageQueue.push(message);
	};

	// Show the next message from the message queue
	this.showNextMessage = function()
	{
		if(this.messageQueue.length == 0) return;
		this.bulletin.messageContainer.messageField.text += this.messageQueue[0] + "\n";
		if(this.bulletin.messageContainer.messageField.text.split(/\r\n|\r|\n/).length > 7)
			this.bulletin.messageContainer.messageField.text = this.bulletin.messageContainer.messageField.text.substring(this.bulletin.messageContainer.messageField.text.indexOf("\n")+1, this.bulletin.messageContainer.messageField.text.length);
		this.messageQueue.shift();
	};

	// Translates the current level number. Level 5 becomes 2, 6 becomes 3, 7 becomes 1, etc.
	this.getTranslatedLevel = function()
	{
		var loopMultiplier = Math.floor(application.level / this.totalBosses);
		var looplevel = (application.level > this.totalBosses)
			? application.level - (this.totalBosses * loopMultiplier)
			: application.level;
		if(looplevel == 0) looplevel = this.totalBosses;
		return looplevel;
	};

	// Check if the users should have white or black text
	this.colorText = function()
	{
		var translateLevel = this.getTranslatedLevel();
		if(translateLevel == 2 || translateLevel == 3) this.changeTextColor("white");
		else this.changeTextColor("black");
	};

	// Change all users name color to paramter
	this.changeTextColor = function(color)
	{
		for(var key in this.activeUsers)
		{
			var user = this.activeUsers[key];
			user.userField.color = color;
		}
	};

	// Remove current background and add the next
	this.nextBackgroundImage = function()
	{
		var translatedLevel = this.getTranslatedLevel();
		stage.removeChildAt(0);
		stage.removeChildAt(0);
		this.backgroundImage = Make.bitmap("bg" + translatedLevel);
		stage.addChildAt(this.backgroundImage, 0);
	};
}