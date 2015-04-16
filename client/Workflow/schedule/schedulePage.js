Meteor.subscribe('Games');


//------------------------------------------------
// HELPERS

Template.schedulePage.helpers({
  gamesList: function(){
    return Games.find(
        {}, {sort: {Round: 1, Field: 1}}
    )
  },
  getHomeTeamName: function(){
    return Teams.findOne("" + this.HomeTeam).TeamName
  },
  getAwayTeamName: function(){
    return Teams.findOne("" + this.AwayTeam).TeamName
  },
  getFormattedDate: function(){
    return moment(new Date(this.ScheduledTime)).format('h:mm:ss');
    //return (new Date(this.ScheduledTime))//.toString("HH:mm")
  }
});


Template.schedulePage.events({
  'click .gamesRow':function(){
    Session.set('selectedGame', this._id);
    Router.go('/game/' + this._id);
    //alert(this._id);
  }
});
