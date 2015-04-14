Meteor.subscribe('Teams');

Template.leaderboard.helpers({
    'team': function(){
        return Teams.find(
            {}, {sort: {TeamPts: -1, PointDifferential: 1}}
        );

    }
});