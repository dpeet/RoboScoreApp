Template.fieldpanel.helpers({
    admin : function() {
        // TODO change for production
        return true;
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
    }
});