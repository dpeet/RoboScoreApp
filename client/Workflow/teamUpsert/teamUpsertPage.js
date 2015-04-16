Template.teamUpsertPage.events({
  'keyup #TeamNumInput':function(){
    Teams.update({_id: this._id}, {
      $set: {
        'TeamNum': $('#TeamNumInput').val()
      }
    });
  },
  'keyup #TeamNameInput':function(){
    Teams.update({_id: this._id}, {
      $set: {
        'TeamName': $('#TeamNameInput').val()
      }
    });
  },
  'keyup #WinsInput':function(){
    Teams.update({_id: this._id}, {
      $set: {
        'Wins': $('#WinsInput').val()
      }
    });
  },
  'keyup #LossesInput':function(){
    Teams.update({_id: this._id}, {
      $set: {
        'Losses': $('#LossesInput').val()
      }
    });
  },
  'keyup #TiesInput':function(){
    Teams.update({_id: this._id}, {
      $set: {
        'Ties': $('#TiesInput').val()
      }
    });
  },
  'keyup #PointsScoredInput':function(){
    Teams.update({_id: this._id}, {
      $set: {
        'PointsScored': $('#PointsScoredInput').val()
      }
    });
  },
  'keyup #PointAgainstInput':function(){
    Teams.update({_id: this._id}, {
      $set: {
        'PointAgainst': $('#PointAgainstInput').val()
      }
    });
  },
  'click #previewTeamButton':function(){
    Router.go('/team/' + this._id);
  }
});



//-------------------------------------------------------------

Template.teamUpsertPage.helpers({
  getRecordId: function() {
    if(this._id) {
      return this._id;
    }else{
      return "---";
    }
  }
});

Template.teamUpsertPage.events({
  'click #upsertTeamButton': function() {
    console.log('creating new user...');

      // TODO:  add validation functions

      var teamObject = {
        TeamNum: $('#TeamNumInput').val(),
        TeamName: $('#TeamNameInput').val(),
        Wins: $('#WinsInput').val(),
        Losses: $('#LossesInput').val(),
        Ties: $('#TiesInput').val(),
        PointsScored: $('#PointsScoredInput').val(),
        PointAgainst: $('#PointAgainstInput').val(),
      };

      if(this._id){
        console.log('upserting ' + this._id);
        var self = this;
        teamObject._id = this._id;
        Meteor.call('updateTeam', teamObject, function(error, team){
          console.log('error: ' + error);
          if(team){
            console.log('team: ' + team);
            Router.go('/team/' + self._id);
          }
        });
      }else{
        Meteor.call('createTeam', teamObject, function(error, team) {
          console.log('error: ' + error);
          console.log('team: ' + team);
          Router.go('/team/' + team);
        });
      }

  },
  'click #deleteUserButton': function() {
    Teams.remove(Session.get('selected_user'));
  },
  'click #cancelDeleteButton': function() {
    Router.go('/Teams');
  }
});
