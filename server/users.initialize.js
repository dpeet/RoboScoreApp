Meteor.startup(function () {
    
    // TODO remove this before production
    Meteor.users.remove({});
    
    
    if (Meteor.users.find({}).count() === 0) {
    	Accounts.createUser({
    		username: 'admin',
    		password: 'adminPass',
    		profile: {
    			first_name: 'Adminy',
    			last_name: 'Admin'
    		}
    	});
    }
});