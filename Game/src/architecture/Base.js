/*	Backend connectivity for Global Game Jam 2016
 by Will Maynard on 31 Jan 2016

 To use this, pass in a handler for XML output from the database:
 var db = new DBConnection(function(xml){
 // do stuff with xml
 });

 Then simply call one of the functions:
 db.joinGame("fprefect");
 db.killBoss();
 db.gameOver();

 The database does not need to know anything about the game state.
 */
var handleServiceOutput;
var DBConnection = function (xmlHandler) {
	handleServiceOutput = xmlHandler;
};

// Returns the specified user's stats in XML format.
DBConnection.prototype.getInfoForUser = function GetInfoForUser(username) {
	callService();
};

// Marks on the DB that the specified user has joined.
// Call this whenever a user joins the game. The database will:
//		1. Create a record with the username if one is not found.
//		2. Mark the specified user as active.
//		3. Return the user's stats as XML.
// The number of calls should have a negligible impact on performance
// unless the game explodes with popularity.
DBConnection.prototype.joinGame = function JoinGame(username) {
	callService();
};

// Returns the user rankings for leaderboards.
// The database will:
//		1. Return a list of all players ranked in the top 10 in the following stats:
//			i. MostBossKills (in one game)
//			ii. LongestLife (in one game)
//		2. If the specified user is not contained in this list, the user's information
//			is also returned.
DBConnection.prototype.getLeaderboard = function GetLeaderboard(username) {
	callService();
};

// Call this when a boss is defeated.  The database will:
//		1. Add one boss kill to all active users' kill count for the game.
DBConnection.prototype.killBoss = function KillBoss() {
	callService();
};

// Call this when granting users experience.  The database will:
//		1. Add XP to a specified user regardless of whether or not they are active OR
//		2. If no user is specified, the xp will be added to all active users.
DBConnection.prototype.addXP = function AddXP(xp, username) {
	callService();
};

// Call this when the game ends.  The database will (for each active user):
//		1. Add boss kills to TotalBossesDefeated.
//		2. Set MaxBossesDefeated if the boss kill count for the session is larger.
//		3. Adds TimeAlive to TotalTimeAlive.
//		4. Sets MaxTimeAlive to the user's survival time if larger.
//		5. Marks all users as inactive and resets individual game stats.
DBConnection.prototype.gameOver = function GameOver() {
	callService();
};

// --------------------------------------------------------------------------------------
// You don't have to worry about anything below this.
// --------------------------------------------------------------------------------------

// Sends an XMLHttpRequest to the service.
function callService()
{
	var caller = arguments.callee.caller;					// Get the function that called this.
	var params = getParameters(caller);						// Get that function's paramater names.
	var args = caller.arguments;							// Get that function's parameter values.

	var url = "http://db.willmaynard.com/Services/GameJam2016.svc/" + caller.name + "/?";
	for (var i = 0; i < args.length; i++)
		url += params[i] + "=" + args[i] + "&";				// Add variables (if any).
	url = url.substring(0, url.length - 1);					// Remove trailing & or ?.

	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onload = function () {								// Handle the response.
		var xml = xhr.responseText;							// Store the XML output.
		if (xml.length == 0)
			xml = "<root></root>";							// If blank, give Georgie something to indicate that.
		if (typeof (handleServiceOutput) !== 'undefined')
			handleServiceOutput(xml);						// Function defined in DBConnection constructor.
	};
	xhr.send();												// Send the request off.  "o/
}

// Returns an array of the parameter names for a function.
function getParameters(func)
{
	var str = func.toString();
	str = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
	while (str.indexOf(' ') > -1)
		str = str.replace(' ', '');
	var output = str.split(',');
	return output;
}