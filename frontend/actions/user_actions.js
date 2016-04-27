var Dispatcher = require('../dispatcher/Dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserActions = {
  receiveAllUsers: function(users) {
    Dispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },

	receiveSingleUser: function(user) {
		console.log("hit receiveSingleUser");
		Dispatcher.dispatch({
			actionType: UserConstants.USER_RECEIVED,
			user: user
		});
	},

	destroyUser: function(id) {
		Dispatcher.dispatch({
			actionType: UserConstants.USER_DELETED,
			id: id
		});
	},

	editUser: function(user) {

		Dispatcher.dispatch({
			actionType: UserConstants.USER_EDITED,
			user: user
		});
	}
};

module.exports = UserActions;
