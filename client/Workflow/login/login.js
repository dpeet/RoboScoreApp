Template.loginPage.events({
  'click #loginSubmitButton': function(event, template){
      event.preventDefault();
      var userVar = template.find('#inputUserName').value;
      var passwordVar = template.find('#inputPassword').value;
      console.log($('#inputUserName') + " " +  $('#inputPassword'));
      console.log(userVar + " " + passwordVar);

      Meteor.loginWithPassword(userVar, passwordVar)

      //Meteor.loginWithPassword($('#inputUserName'), $('#inputPassword'), function(err) {
      //    if (err) {
      //        console.log("Error!");
      //    } else {
      //        console.log("success!")
      //    }
      //});
  },
    'click #logoutButton': function(event, template){
        event.preventDefault();
        Meteor.logout();
    }
});