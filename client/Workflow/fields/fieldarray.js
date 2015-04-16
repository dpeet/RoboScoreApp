Template.fieldarray.helpers({
  fields : function() {
    var fields = new Array();
    
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
});