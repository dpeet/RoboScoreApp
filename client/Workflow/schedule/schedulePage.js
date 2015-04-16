Meteor.subscribe('Games');

//------------------------------------------------
// ROUTING

Router.map(function(){
  this.route('schedulePage', {
    path: '/Schedule',
    template: 'schedulePage'
  });
});

//------------------------------------------------
// HELPERS

Template.schedulePage.helpers({
  gamesList: function(){
    return Games.find(
        {}, {sort: {ScheduledTime: -1}}
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
    console.log('/team/' + this._id);
    Session.set('selectedTeam', this._id);
    Router.go('/team/' + this._id);
    //alert(this._id);
  }
});
