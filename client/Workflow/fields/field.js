Template.fieldpanel.helpers({
    admin : function() {
        if(Meteor.user()!= null){
            return true
        }
        // TODO this works for now, but isn't really safe
    },
    formatTime: function(){
        return moment(new Date(this.ScheduledTime)).format('h:mm A');
    }
});

Template.fieldpanel.events({
    'click .homeadd': function(event) {
        // console.log("homeadd " + event.target.id.toString());
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "HomeScore" : 1}});
    },
    'click .homesub': function(event) {
        // console.log("homesub " + event.target.id.toString());
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "HomeScore" : -1}});
    },
    'click .awayadd': function(event) {
        // console.log("awayadd " + event.target.id.toString());
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "AwayScore" : 1}});
    },
    'click .awaysub': function(event) {
        // console.log("awaysub " + event.target.id.toString());
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "AwayScore" : -1}});
    },
    'click .finish': function(event) {
        console.log("finishmatch " + event.target.id.toString());
        var g = Games.findOne({ "_id" : event.target.id.toString() });
        Games.update({ "_id" : event.target.id.toString()}, {$set:{ "Started": true,"Final": true}});
        
        w = 0;
		l = 0;
		t = 0;
		aw = 0;
		al = 0;
        
        if (g.HomeScore > g.AwayScore) {
    		w = 1;
    		al = 1;
    	} else if (g.HomeScore < g.AwayScore) {
    		l = 1;
    		aw = 1;
    	} else {
    		t = 1;
    	}
    	
		Teams.update(
			{ "_id" : g.HomeTeam },
			{ $inc : 
				{	"PointsScored" : g.HomeScore,
					"PointsAgainst" : g.AwayScore,
					"PointDifferential" : g.HomeScore - g.AwayScore,
					"W" : w,
					"L" : l,
					"T" : t
				}
			}
		);
		Teams.update(
			{ "_id" : g.AwayTeam },
			{ $inc : 
				{	"PointsScored" : g.AwayScore,
					"PointsAgainst" : g.HomeScore,
					"PointDifferential" : g.AwayScore - g.HomeScore,
					"W" : aw,
					"L" : al,
					"T" : t
				}
			}
		);
        
        calcTeamPoints();
        
    },
    'click .reset': function(event) {
        console.log("startmatch " + event.target.id.toString());
        
        console.log("Starting game, resetting scores");
        Games.update({ "_id" : event.target.id.toString()},
            {$set : { "Started" : true,
                    "HomeScore" : 0,
                    "AwayScore" : 0
        }});
    },


    // 'click .panel-heading':function(){
    //     Session.set('selectedField', this._id);
    //     Router.go('/fields/' + this._id);
    //     //alert(this._id);
    // } // TODO goes to undefined field

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