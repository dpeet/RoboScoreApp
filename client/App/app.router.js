
//--------------------------------------------------------------
// Global Configuration

Router.configure({
  layoutTemplate: 'appLayout',
  yieldTemplates: {
    'navbarHeader': {to: 'header'}
    //, 'navbarFooter': {to: 'footer'}
  }
});


Router.route('/', function () {
  this.render('leaderboard');
});

Router.route('/standings', function () {
  this.render('leaderboard');
});

//
//Router.map(function(){
//  this.route('homeRoute', {
//    path: '/',
//    template: "TeamStandings",
//    waitOn: function(){
//      return Meteor.subscribe('Teams');
//    }
//  });
//});
