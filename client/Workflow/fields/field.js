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
        console.log("homeadd " + event.target.id.toString());
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "HomeScore" : 1}});
    },
    'click .homesub': function(event) {
        console.log("homesub " + event.target.id.toString());
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "HomeScore" : -1}});
    },
    'click .awayadd': function(event) {
        console.log("awayadd " + event.target.id.toString());
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "AwayScore" : 1}});
    },
    'click .awaysub': function(event) {
        console.log("awaysub " + event.target.id.toString());
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "AwayScore" : -1}});
    },
    'click .final': function(event) {
    console.log("awaysub " + event.target.id.toString());
    currGame = Games.findOne(event.target.id.toString())
    Games.update({ "_id" : event.target.id.toString()}, {$set:{ "Final": true}});
    nextGame = Games.findOne({"Field":currGame.Field}, {"Round":(currGame.Round+1)});
    console.log("nextGame " + nextGame._id);
    Games.update({ "_id" : nextGame.id}, {$set:{ "Started": true}});
        // TODO this doesn't work
    },


    'click .panel-heading':function(){
        Session.set('selectedField', this._id);
        Router.go('/fields/' + this._id);
        //alert(this._id);
    } // TODO goes to undefined field

});