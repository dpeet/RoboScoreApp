Template.game.events({
  'click #teamEditButton':function(){
    Router.go('/editgame/' + this._id);
  },
  'click #teamDeleteButton':function(){
    if(confirm('Are you sure you want to delete the match:' + this.HomeTeam + "vs: " + this.AwayTeam + "?")){
      Games.remove({_id: this._id});
      Router.go('/');
    }
  }
});

Template.game.helpers({
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
