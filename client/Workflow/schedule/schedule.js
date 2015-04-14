Meteor.subscribe('Teams');
Meteor.subscribe('Games');

Template.standingsPage.helpers({
    'team': function(){
        return Teams.find(
            {}, {sort: {TeamPts: -1, PointDifferential: -1}}
        );

    }
});