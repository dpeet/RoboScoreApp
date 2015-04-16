
Router.map(function(){
  this.route('teamPreviewPage', {
    path: '/team/:id',
    template: 'teamPreviewPage',
    data: function () {
      return Teams.findOne({_id: this.params.id});
    }
  });
});
Template.teamPreviewPage.events({
  'click #teamEditButton':function(){
    Router.go('/editteam/' + this._id);
  },
  'click #teamDeleteButton':function(){
    if(confirm('Are you sure you want to delete ' + this.TeamNum + " " + this.TeamName + "?")){
      Teams.remove({_id: this._id});
      Router.go('/');
    }
  }
});
Template.teamPreviewPage.helpers({

});
