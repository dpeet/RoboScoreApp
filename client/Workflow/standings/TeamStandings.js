Meteor.subscribe('Teams');

Router.map(function(){
  this.route('standingsPage', {
    path: '/standings',
    template: "standingsPage"
  });
});

Template.standingsPage.helpers({
    'team': function(){
        return Teams.find(
            {}, {sort: {TeamPts: -1, PointDifferential: -1}}
        );

    }
});