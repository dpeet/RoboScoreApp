
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
    this.route('home', {
        path: '/',
        template: "allMatches"
    });
    // this.route('standings', {
    //     path: '/standings',
    //     template: "standingsPage"
    // });
    // this.route('teamPreviewPage', {
    //     path: '/teams/:id',
    //     template: 'teamPreviewPage',
    //     data: function () {
    //         return Teams.findOne({"TeamNum": this.params.id});
    //     }
    // });
    this.route('schedulePage', {
        path: '/schedule',
        template: 'schedulePage'
    });
});

// Router.route('/standings', function () {
//   this.render('standingsPage');
// });



/* FROM GIFTR
Router.configure({
    layoutTemplate:'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
    // load: function () {
    //     $('html, body').animate({ scrollTop: 0 }, 400);
    //     $('.content').hide().fadeIn(1000);
    // }
});

Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('home');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});

Router.map(function(){
    this.route('home', {
        where: 'client',
        template: 'home',
        path:'/',
        onBeforeAction: function () {
            if (Meteor.userId()) {
                // if the user is not logged in, render the Login template
                this.render('dashboard');
            } else {
                // otherwise don't hold up the rest of hooks or our route/action function
                // from running
                this.next();
            }
        }
    });
    this.route('dashboard', {
        where: 'client',
        template: 'dashboard',
        path:'/dashboard',
        waitOn: function() {
            return [
                Meteor.subscribe("listByUser", Meteor.userId())
            ]
        },
        action: function() {
            if (this.ready())
                this.render();
        }
    });
    this.route('list', {
        where: 'client',
        template: 'list',
        path:'/list/:_listId',
        waitOn: function() {
            return [
                Meteor.subscribe("listById", this.params._listId),
                Meteor.subscribe("giftsFromList", this.params._listId)
            ]
        },
        action: function() {
            if (this.ready())
                this.render();
        }
    });
    this.route('gift', {
        where: 'client',
        template: 'gift',
        path:'/gift/:_giftId',
        waitOn: function() {
            return [
                Meteor.subscribe("giftById", this.params._giftId)
            ]
        },
        action: function() {
            if (this.ready())
                this.render();
        }
    });
});
*/