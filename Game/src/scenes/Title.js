function Title()
{
	this.ready = function ()
	{
		var self = this;
		this.layout.onComplete = function(){
			self.layout.stop();
			SceneController.transition(Game, Transitions.NONE);
		};
	};
}
