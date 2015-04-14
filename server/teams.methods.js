Meteor.methods({
  createNewTeam: function(data){
    data.createdAt = new Date();
    return Teams.insert(data);
  },
  updateTeam: function(data){
    data.createdAt = new Date();
    return Teams.update({_id: data._id}, {$set:{
      TeamNum: data.TeamNum,
      TeamName: data.TeamName,
      W: data.W,
      L: data.L,
      T: data.T,
      TeamPts: data.TeamPts,
      PointsScored: data.PointsScored,
      PointsAgainst: data.PointsAgainst,
      PointDifferential: data.PointDifferential
    }});
  }
});
