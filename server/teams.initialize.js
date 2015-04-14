
Meteor.startup(function () {
  //if ((Teams.find().count() == 0)) {
  Teams.remove({})
    console.log('No records in Teams collection.  Adding temp teams');

    // and add some data
    var data = [
      {
        "TeamNum":"1",
        "TeamName":"blah",
        "W":0,
        "L":0,
        "T":0,
        "TeamPts":0,
        "PointsScored":0,
        "PointsAgainst":0,
        "PointDifferential":0
      },

      {"TeamNum":"2", "TeamName":"the best", "W":1, "L":0, "T":0, "TeamPts":3, "PointsScored":0, "PointsAgainst":0, "PointDifferential":1},
      {"TeamNum":"3", "TeamName":"404", "W":0, "L":1, "T":0, "TeamPts":0, "PointsScored":0, "PointsAgainst":0, "PointDifferential":7},
      {"TeamNum":"4", "TeamName":"we got this", "W":0, "L":0, "T":1, "TeamPts":1, "PointsScored":0, "PointsAgainst":0, "PointDifferential":4},
      {"TeamNum":"5", "TeamName":"5", "W":0, "L":0, "T":1, "TeamPts":1, "PointsScored":0, "PointsAgainst":0, "PointDifferential":8},
      {"TeamNum":"6", "TeamName":"6", "W":0, "L":0, "T":0, "TeamPts":0, "PointsScored":0, "PointsAgainst":0, "PointDifferential":0},
      {"TeamNum":"7", "TeamName":"7", "W":0, "L":0, "T":0, "TeamPts":0, "PointsScored":0, "PointsAgainst":0, "PointDifferential":0},
      {"TeamNum":"8", "TeamName":"8", "W":0, "L":0, "T":0, "TeamPts":0, "PointsScored":0, "PointsAgainst":0, "PointDifferential":0},
      {"TeamNum":"9", "TeamName":"9", "W":0, "L":0, "T":0, "TeamPts":0, "PointsScored":0, "PointsAgainst":0, "PointDifferential":0},
      {"TeamNum":"10", "TeamName":"10", "W":0, "L":0, "T":0, "TeamPts":0, "PointsScored":0, "PointsAgainst":0, "PointDifferential":0},
      {"TeamNum":"11", "TeamName":"11", "W":0, "L":0, "T":0, "TeamPts":0, "PointsScored":0, "PointsAgainst":0, "PointDifferential":0},
      {"TeamNum":"12", "TeamName":"12", "W":0, "L":0, "T":0, "TeamPts":0, "PointsScored":0, "PointsAgainst":0, "PointDifferential":0},
    ];

    for (var i = 0; i < data.length; i++) {
      Teams.insert({
        TeamNum:   data[i].TeamNum,
        TeamName:  data[i].TeamName,
        W:  data[i].W,
        L:  data[i].L,
        T:  data[i].T,
        TeamPts:  data[i].TeamPts,
        PointsScored:  data[i].PointsScored,
        PointsAgainst:  data[i].PointsAgainst,
        PointDifferential:  data[i].PointDifferential,
        createdAt: new Date()
      });
    }
    console.log('12 records successfully added to Teams collection.');
    console.log(Teams.find().fetch());
    console.log('Teams collection initialized and ready.');
});
