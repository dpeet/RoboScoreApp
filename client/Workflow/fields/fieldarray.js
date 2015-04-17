Session.setDefault("round", 1);

Template.fieldarray.helpers({
  fields: function() {

      var fields = new Array();
      
      var game;
      for (var i = 1; i < 7; i++) {
        game = Games.findOne({"Field": i,"Round": Session.get("round") });
        if (typeof game != 'undefined') {
          game.homeName = Teams.findOne({"_id": game.HomeTeam}).TeamName;
          game.awayName = Teams.findOne({"_id": game.AwayTeam}).TeamName;
        }
        fields.push(game);
      }
      return fields;
    }
    // TODO set panel heading height for consistency (when no game is found for field)

});