function Splash()
{
	this.ready = function()
	{
		app.level = 1;

		var video = Make.video(this, "berkeleygames", 0, 0, 0, true, false);

		Quick.call(function(){
			SceneController.transition(Title, Transitions.CROSS_FADE);
		}, 10);

		this.onTransitionComplete = function() {
			video.dispose();
		};
	};
}
