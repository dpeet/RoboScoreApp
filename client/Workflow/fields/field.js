Template.fieldpanel.helpers({
    admin : function() {
        // TODO change for production
        return true;
    }
});

Template.fieldpanel.events({
    'click #homeadd': function(event) {
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "HomeScore" : 1}});
    },
    'click #homesub': function(event) {
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "HomeScore" : -1}});
    },
    'click #awayadd': function(event) {
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "AwayScore" : 1}});
    },
    'click #awaysub': function(event) {
        Games.update({ "_id" : event.target.id.toString()}, {$inc : { "AwayScore" : -1}});
    }
});