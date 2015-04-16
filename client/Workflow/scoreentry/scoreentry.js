Meteor.subscribe('Teams');

Template.standings.helpers({
    'team': function(){
        return Teams.find(
            {}, {sort: {TeamPts: -1, PointDifferential: -1}}
        );
    }
});