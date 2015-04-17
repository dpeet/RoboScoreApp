//TODO this entire page

Template.gameUpsertPage.events({
  'keyup #firstNameInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'FirstName': $('#firstNameInput').val()
      }
    });
  },
  'keyup #lastNameInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'LastName': $('#lastNameInput').val()
      }
    });
  },
  'keyup #companyInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'Company': $('#companyInput').val()
      }
    });
  },
  'keyup #addressInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'Address': $('#addressInput').val()
      }
    });
  },
  'keyup #cityInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'City': $('#cityInput').val()
      }
    });
  },
  'keyup #countyInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'County': $('#countyInput').val()
      }
    });
  },
  'keyup #stateInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'State': $('#stateInput').val()
      }
    });
  },
  'keyup #zipInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'Zip': $('#zipInput').val()
      }
    });
  },
  'keyup #phoneInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'Phone': $('#phoneInput').val()
      }
    });
  },
  'keyup #faxInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'Fax': $('#faxInput').val()
      }
    });
  },
  'keyup #emailInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'Email': $('#emailInput').val()
      }
    });
  },
  'keyup #webInput':function(){
    Games.update({_id: this._id}, {
      $set: {
        'Web': $('#webInput').val()
      }
    });
  },
  'click #previewCustomerButton':function(){
    Router.go('/customer/' + this._id);
  }
});



//-------------------------------------------------------------

Template.gameUpsertPage.helpers({
  getRecordId: function() {
    if(this._id) {
      return this._id;
    }else{
      return "---";
    }
  }
});

Template.gameUpsertPage.events({
  'click #upsertCustomerButton': function() {
    console.log('creating new user...');

      // TODO:  add validation functions

      var customerObject = {
        FirstName: $('#firstNameInput').val(),
        LastName: $('#lastNameInput').val(),
        Company: $('#companyInput').val(),
        Address: $('#addressInput').val(),
        City: $('#cityInput').val(),
        County: $('#countyInput').val(),
        State: $('#stateInput').val(),
        Zip: $('#zipInput').val(),
        Phone: $('#phoneInput').val(),
        Fax: $('#faxInput').val(),
        Email: $('#emailInput').val(),
        Web: $('#webInput').val(),
        Notes: $('#notesInput').val()
      };

      if(this._id){
        console.log('upserting ' + this._id);
        var self = this;
        customerObject._id = this._id;
        Meteor.call('updateCustomer', customerObject, function(error, customer){
          console.log('error: ' + error);
          if(customer){
            console.log('customer: ' + customer);
            Router.go('/customer/' + self._id);
          }
        });
      }else{
        Meteor.call('createNewCustomer', customerObject, function(error, customer) {
          console.log('error: ' + error);
          console.log('customer: ' + customer);
          Router.go('/customer/' + customer);
        });
      }

  },
  'click #deleteUserButton': function() {
    Games.remove(Session.get('selected_user'));
  },
  'click #cancelDeleteButton': function() {
    Router.go('/Games');
  }
});
