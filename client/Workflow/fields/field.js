Template.fieldpanel.helpers({
    admin : function() {
        if(Meteor.user()!= null){
            return true
        }
        // TODO this works for now, but isn't really safe
        //return true;
    },
    formatTime: function(){
        return moment(new Date(this.ScheduledTime)).format('h:mm');
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
    'click .finishmatch': function(event) {
        console.log("finishmatch " + event.target.id.toString());
        cur = Games.findOne({"_id":event.target.id.toString()})
        if (cur.started && !cur.final) {
            Games.update({ "_id" : event.target.id.toString()}, {$set:{ "Final": true}});
            // nextGame = Games.findOne({"Field":currGame.Field}, {"Round":(currGame.Round+1)});
            // console.log("nextGame " + nextGame._id);
        } else {
            console.log("Couldn't finish the game - started:" + cur.started + ", final:" + cur.final);
        }
    },
    'click .startmatch': function(event) {
        console.log("startmatch " + event.target.id.toString());
        var cur = Games.findOne({"_id": event.target.id.toString()});
        
        if (!cur.started && !cur.final) {
            console.log("Starting game, setting startTime, resetting scores")
            Games.update({ "_id" : event.target.id.toString()},
                {$set : { "StartTime" : new Date(),
                        "Started" : true,
                        "HomeScore" : 0,
                        "AwayScore" : 0
                }});
        } else {
            console.log("Didn't start game - started:" + cur.started + ", final:" + cur.final);
        }
    },


    'click .panel-heading':function(){
        Session.set('selectedField', this._id);
        Router.go('/fields/' + this._id);
        //alert(this._id);
    } // TODO goes to undefined field

});