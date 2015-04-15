
//--------------------------------------------------------------
// Global Configuration

Router.configure({
  layoutTemplate: 'appLayout',
  yieldTemplates: {
    'navbarHeader': {to: 'header'}
    //, 'navbarFooter': {to: 'footer'}
  }
});


Router.map(function(){
  this.route('homeRoute', {
    path: '/',
    template: "standingsPage"
  });
});

// Router.route('/standings', function () {
//   this.render('standingsPage');
// });
