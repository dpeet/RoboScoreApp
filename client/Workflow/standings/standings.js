Meteor.subscribe('Teams');

Template.standings.helpers({
    'team': function(){
        return Teams.find(
            {}, {sort: {TeamPts: -1, PointDifferential: -1}}
        );
    }
});

Template.standings.events({
  'click .teamRow':function(){
    Session.set('selectedTeam', this._id);
    Router.go('/teams/' + this._id);
    //alert(this._id);
  } // TODO protect with login
});