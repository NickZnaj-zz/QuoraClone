var Dispatcher = require('../dispatcher/Dispatcher'),
    SessionConstants = require('../constants/session_constants');

var SessionActions = {
	currentUserReceived: function(currentUser) {
		Dispatcher.dispatch({
			actionType: SessionConstants.CURRENT_USER_RECEIVED,
			currentUser: currentUser
		});
	},

	logout: function() {
		Dispatcher.dispatch({
			actionType: SessionConstants.LOGOUT
		});
	}
};

module.exports = SessionActions;
