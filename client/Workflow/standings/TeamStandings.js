Meteor.subscribe('Teams');

Template.standingsPage.helpers({
    'team': function(){
        return Teams.find(
            {}, {sort: {TeamPts: -1, PointDifferential: -1}}
        );

    }
});