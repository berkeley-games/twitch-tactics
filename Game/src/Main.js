var application = new Application
({
	name        : "Twitch Tactics",
	version     : "0.1.2",
	webGL		: true,
	stageWidth	: 1920,
	stageHeight	: 1080,
	frameRate	: 25,
	bodyColor	: "#000",
	timingMode	: "synced",
	scenes		: ["Game", "Splash", "Title"],
	fonts		: [{src:"fonts/PlayfairDisplay-Regular.otf", weight:"normal", name:"Playfair Display"}],
	init		: function()
	{
		application.base = new DBConnection();
		application.socket = io.connect('http://localhost:8080');

		application.socket.on('command', function(message)
		{
			if(!SceneController.currentScene instanceof Game) return;
			SceneController.currentScene.processCommand(message);
		});

		application.level = 1;
		application.start(Game);
	}
});