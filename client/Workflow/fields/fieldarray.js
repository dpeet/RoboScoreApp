Template.fieldarray.helpers({
  fields : function() {
    var fields = new Array();


    //TODO we need a better way to represent what's on and whats next
    var game;
    for (var i = 1; i<7; i++){
      game = Games.findOne({"Field":i,"Started":true,"Final":false});
      if (typeof game != 'undefined') {
        game.homeName = Teams.findOne({"_id": game.HomeTeam}).TeamName;
        game.awayName = Teams.findOne({"_id": game.AwayTeam}).TeamName;
      }
      fields.push(game);
    }
    return fields;
  }
  // TODO looks wonky if it gets messed up (doesn't find a "next")

});