Router.map(function(){
  this.route('teamPreviewPage', {
    path: '/game/:id',
    template: 'teamPreviewPage',
    data: function () {
      return Games.findOne({_id: this.params.id});
    }
  });
});




Template.teamPreviewPage.events({
  'click #teamEditButton':function(){
    Router.go('/editteam/' + this._id);
  },
  'click #teamDeleteButton':function(){
    if(confirm('Are you sure you want to delete the match:' + this.HomeTeam + "vs: " + this.AwayTeam + "?")){
      Teams.remove({_id: this._id});
      Router.go('/');
    }
  }
});

Template.teamPreviewPage.helpers({
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
