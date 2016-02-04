Meteor.startup(function () {
  // Teams.remove({});
 	// Games.remove({});
  if ((Teams.find({}).count() == 0)) {
  
    console.log('No records in Teams collection.  Adding temp teams');

    // and add some data
    var teamdata = [
      {
        "TeamNum"		:1,
        "TeamName"		:"Purple Blue"
      },

      {"TeamNum":2, "TeamName":"Orange Green"},
      {"TeamNum":3, "TeamName":"Red Green"},
      {"TeamNum":4, "TeamName":"Orange Purple"},
      {"TeamNum":5, "TeamName":"Green Blue"},
      {"TeamNum":6, "TeamName":"Purple Green"},
      {"TeamNum":7, "TeamName":"Yellow Blue"},
      {"TeamNum":8, "TeamName":"Red Purple"},
      {"TeamNum":9, "TeamName":"Red Blue"},
      {"TeamNum":10, "TeamName":"Yellow Green"},
      {"TeamNum":11, "TeamName":"Orange Blue"},
      {"TeamNum":12, "TeamName":"Yellow Purple"}
    ];

    for (var i = 0; i < teamdata.length; i++) {
		Teams.insert({
			TeamNum:	teamdata[i].TeamNum,
			TeamName:	teamdata[i].TeamName,
			W:  		0,
			L:			0,
			T:			0,
			TeamPts:	0,
			PointsScored:	0,
			PointsAgainst:	0,
			PointDifferential:	0,
			CreatedAt:	new Date()
		});
	}
    console.log('12 records successfully added to Teams collection.');
    //console.log(Teams.find().fetch());
    console.log('Teams collection initialized and ready.');


    console.log('No records in Games collection.  Adding temp games');

	teamdata = Teams.find({}).fetch();

    var gamedata = [
      {
        "Field"			: 1,
        "HomeTeam"		: teamdata[0]._id,
        "HomeScore"		: 0,
        "AwayTeam"		: teamdata[1]._id,
        "AwayScore"		: 0,
        "Started"		: false,
        "Final"			: false,
        "Round"			: 1,
				"ScheduledTime": new Date("18 Apr 2015 9:30:00 AM -0400")
      },

      {"Field":2, "HomeTeam":teamdata[4]._id,  "HomeScore":0, "AwayTeam":teamdata[5]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 1, "ScheduledTime":new Date("18 Apr 2015 9:30:00 AM -0400")},
      {"Field":3, "HomeTeam":teamdata[8]._id,  "HomeScore":0, "AwayTeam":teamdata[9]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 1, "ScheduledTime":new Date("18 Apr 2015 9:30:00 AM -0400")},
      {"Field":4, "HomeTeam":teamdata[10]._id,  "HomeScore":0, "AwayTeam":teamdata[11]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 1, "ScheduledTime":new Date("18 Apr 2015 9:30:00 AM -0400")},
      {"Field":5, "HomeTeam":teamdata[6]._id,  "HomeScore":0, "AwayTeam":teamdata[7]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 1, "ScheduledTime":new Date("18 Apr 2015 9:30:00 AM -0400")},
      {"Field":6, "HomeTeam":teamdata[2]._id, "HomeScore":0, "AwayTeam":teamdata[3]._id, "AwayScore":0, "Started":false, "Final":false, "Round": 1, "ScheduledTime":new Date("18 Apr 2015 9:30:00 AM -0400")},
      
      {"Field":1, "HomeTeam":teamdata[0]._id,  "HomeScore":0, "AwayTeam":teamdata[5]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 2, "ScheduledTime":new Date("18 Apr 2015 10:00:00 AM -0400")},
      {"Field":2, "HomeTeam":teamdata[4]._id,  "HomeScore":0, "AwayTeam":teamdata[9]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 2, "ScheduledTime":new Date("18 Apr 2015 10:00:00 AM -0400")},
      {"Field":3, "HomeTeam":teamdata[8]._id,  "HomeScore":0, "AwayTeam":teamdata[11]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 2, "ScheduledTime":new Date("18 Apr 2015 10:00:00 AM -0400")},
      {"Field":4, "HomeTeam":teamdata[10]._id,  "HomeScore":0, "AwayTeam":teamdata[7]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 2, "ScheduledTime":new Date("18 Apr 2015 10:00:00 AM -0400")},
      {"Field":5, "HomeTeam":teamdata[6]._id,  "HomeScore":0, "AwayTeam":teamdata[3]._id, "AwayScore":0, "Started":false, "Final":false, "Round": 2, "ScheduledTime":new Date("18 Apr 2015 10:00:00 AM -0400")},
      {"Field":6, "HomeTeam":teamdata[2]._id,  "HomeScore":0, "AwayTeam":teamdata[1]._id, "AwayScore":0, "Started":false, "Final":false, "Round": 2, "ScheduledTime":new Date("18 Apr 2015 10:00:00 AM -0400")},
      
      {"Field":1, "HomeTeam":teamdata[0]._id,  "HomeScore":0, "AwayTeam":teamdata[9]._id, "AwayScore":0, "Started":false, "Final":false, "Round": 3, "ScheduledTime":new Date("18 Apr 2015 10:30:00 AM -0400")},
      {"Field":2, "HomeTeam":teamdata[4]._id,  "HomeScore":0, "AwayTeam":teamdata[11]._id,   "AwayScore":0, "Started":false, "Final":false, "Round": 3, "ScheduledTime":new Date("18 Apr 2015 10:30:00 AM -0400")},
      {"Field":3, "HomeTeam":teamdata[8]._id,  "HomeScore":0, "AwayTeam":teamdata[7]._id,   "AwayScore":0, "Started":false, "Final":false, "Round": 3, "ScheduledTime":new Date("18 Apr 2015 10:30:00 AM -0400")},
      {"Field":4, "HomeTeam":teamdata[10]._id, "HomeScore":0, "AwayTeam":teamdata[3]._id,    "AwayScore":0, "Started":false, "Final":false, "Round": 3, "ScheduledTime":new Date("18 Apr 2015 10:30:00 AM -0400")},
      {"Field":5, "HomeTeam":teamdata[6]._id,  "HomeScore":0, "AwayTeam":teamdata[1]._id,   "AwayScore":0, "Started":false, "Final":false, "Round": 3, "ScheduledTime":new Date("18 Apr 2015 10:30:00 AM -0400")},
      {"Field":6, "HomeTeam":teamdata[2]._id,  "HomeScore":0, "AwayTeam":teamdata[5]._id,   "AwayScore":0, "Started":false, "Final":false, "Round": 3, "ScheduledTime":new Date("18 Apr 2015 10:30:00 AM -0400")},
      
      {"Field":1, "HomeTeam":teamdata[0]._id,  "HomeScore":0, "AwayTeam":teamdata[11]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 4, "ScheduledTime":new Date("18 Apr 2015 11:00:00 AM -0400")},
      {"Field":2, "HomeTeam":teamdata[4]._id,  "HomeScore":0, "AwayTeam":teamdata[7]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 4, "ScheduledTime":new Date("18 Apr 2015 11:00:00 AM -0400")},
      {"Field":3, "HomeTeam":teamdata[8]._id,  "HomeScore":0, "AwayTeam":teamdata[3]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 4, "ScheduledTime":new Date("18 Apr 2015 11:00:00 AM -0400")},
      {"Field":4, "HomeTeam":teamdata[10]._id, "HomeScore":0, "AwayTeam":teamdata[1]._id,   "AwayScore":0, "Started":false, "Final":false, "Round": 4, "ScheduledTime":new Date("18 Apr 2015 11:00:00 AM -0400")},
      {"Field":5, "HomeTeam":teamdata[6]._id,  "HomeScore":0, "AwayTeam":teamdata[5]._id, "AwayScore":0, "Started":false, "Final":false, "Round": 4, "ScheduledTime":new Date("18 Apr 2015 11:00:00 AM -0400")},
      {"Field":6, "HomeTeam":teamdata[2]._id,  "HomeScore":0, "AwayTeam":teamdata[9]._id, "AwayScore":0, "Started":false, "Final":false, "Round": 4, "ScheduledTime":new Date("18 Apr 2015 11:00:00 AM -0400")},
      
      {"Field":1, "HomeTeam":teamdata[0]._id,  "HomeScore":0, "AwayTeam":teamdata[7]._id, "AwayScore":0, "Started":false, "Final":false, "Round": 5, "ScheduledTime":new Date("18 Apr 2015 11:30:00 AM -0400")},
      {"Field":2, "HomeTeam":teamdata[4]._id,  "HomeScore":0, "AwayTeam":teamdata[3]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 5, "ScheduledTime":new Date("18 Apr 2015 11:30:00 AM -0400")},
      {"Field":3, "HomeTeam":teamdata[8]._id,  "HomeScore":0, "AwayTeam":teamdata[1]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 5, "ScheduledTime":new Date("18 Apr 2015 11:30:00 AM -0400")},
      {"Field":4, "HomeTeam":teamdata[10]._id, "HomeScore":0, "AwayTeam":teamdata[5]._id,   "AwayScore":0, "Started":false, "Final":false, "Round": 5, "ScheduledTime":new Date("18 Apr 2015 11:30:00 AM -0400")},
      {"Field":5, "HomeTeam":teamdata[6]._id,  "HomeScore":0, "AwayTeam":teamdata[9]._id, "AwayScore":0, "Started":false, "Final":false, "Round": 5, "ScheduledTime":new Date("18 Apr 2015 11:30:00 AM -0400")},
      {"Field":6, "HomeTeam":teamdata[2]._id,  "HomeScore":0, "AwayTeam":teamdata[11]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 5, "ScheduledTime":new Date("18 Apr 2015 11:30:00 AM -0400")},
      
      {"Field":1, "HomeTeam":teamdata[0]._id,  "HomeScore":0, "AwayTeam":teamdata[3]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 6, "ScheduledTime":new Date("18 Apr 2015 12:00:00 PM -0400")},
      {"Field":2, "HomeTeam":teamdata[4]._id,  "HomeScore":0, "AwayTeam":teamdata[1]._id, "AwayScore":0, "Started":false, "Final":false, "Round": 6, "ScheduledTime":new Date("18 Apr 2015 12:00:00 PM -0400")},
      {"Field":3, "HomeTeam":teamdata[8]._id,  "HomeScore":0, "AwayTeam":teamdata[5]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 6, "ScheduledTime":new Date("18 Apr 2015 12:00:00 PM -0400")},
      {"Field":4, "HomeTeam":teamdata[10]._id, "HomeScore":0, "AwayTeam":teamdata[9]._id,   "AwayScore":0, "Started":false, "Final":false, "Round": 6, "ScheduledTime":new Date("18 Apr 2015 12:00:00 PM -0400")},
      {"Field":5, "HomeTeam":teamdata[6]._id,  "HomeScore":0, "AwayTeam":teamdata[11]._id, "AwayScore":0, "Started":false, "Final":false, "Round": 6, "ScheduledTime":new Date("18 Apr 2015 12:00:00 PM -0400")},
      {"Field":6, "HomeTeam":teamdata[2]._id,  "HomeScore":0, "AwayTeam":teamdata[7]._id,  "AwayScore":0, "Started":false, "Final":false, "Round": 6, "ScheduledTime":new Date("18 Apr 2015 12:00:00 PM -0400")}
    ];
    for (i = 0; i < gamedata.length; i++) {
      Games.insert({
        Field:	gamedata[i].Field,
        HomeTeam:		gamedata[i].HomeTeam,
        HomeScore:		gamedata[i].HomeScore,
        AwayTeam:		gamedata[i].AwayTeam,
        AwayScore:		gamedata[i].AwayScore,
        Started:		gamedata[i].Started,
        Final:			gamedata[i].Final,
        Round: 			gamedata[i].Round,
        ScheduledTime:	gamedata[i].ScheduledTime,
        StartTime:	gamedata[i].ScheduledTime,
		CreatedAt:		new Date()
      });
    }
    console.log('12 records successfully added to Games collection.');
    //console.log(Teams.find().fetch());
    console.log('Games collection initialized and ready.');

	console.log('Adjusting teams based on games collection');

	gamedata = Games.find({}).fetch();

	var w = 0;
	var l = 0;
	var t = 0;
	var aw = 0;
	var al = 0;

    for (i = 0; i < gamedata.length; i++) {
		w = 0;
		l = 0;
		t = 0;
		aw = 0;
		al = 0;

		if (gamedata[i].Started && gamedata[i].Final) {
			if (gamedata[i].HomeScore > gamedata[i].AwayScore) {
				w = 1;
				al = 1;
			} else if (gamedata[i].HomeScore < gamedata[i].AwayScore) {
				l = 1;
				aw = 1;
			} else {
				t = 1;
			}

			Teams.update(
				{ "_id" : gamedata[i].HomeTeam },
				{ $inc : 
					{	"PointsScored" : gamedata[i].HomeScore,
						"PointsAgainst" : gamedata[i].AwayScore,
						"PointDifferential" : gamedata[i].HomeScore - gamedata[i].AwayScore,
						"W" : w,
						"L" : l,
						"T" : t
					}
				}
			);
			Teams.update(
				{ "_id" : gamedata[i].AwayTeam },
				{ $inc : 
					{	"PointsScored" : gamedata[i].AwayScore,
						"PointsAgainst" : gamedata[i].HomeScore,
						"PointDifferential" : gamedata[i].AwayScore - gamedata[i].HomeScore,
						"W" : aw,
						"L" : al,
						"T" : t
					}
				}
			);
		}
    }
    calcTeamPoints();
  }
});

function calcTeamPoints() {
    console.log("Calculating team points");
	var teamdata = Teams.find({}).fetch();

	for (i = 0; i < teamdata.length; i++) {
		Teams.update(
			{ "_id" : teamdata[i]._id },
			{ $set :
				{ "TeamPts" : teamdata[i].W*3 + teamdata[i].T }
			}
		);
	}
}
