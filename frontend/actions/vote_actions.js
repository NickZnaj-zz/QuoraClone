var Dispatcher = require('../dispatcher/Dispatcher'),
    VoteConstants = require('../constants/vote_constants');

var VoteActions = {
	receiveSingleVote:function(vote) {
		Dispatcher.dispatch({
			actionType: VoteConstants.VOTE_RECEIVED,
			vote: vote
		});
	},

	// updateVote: function(vote) {
	// 	Dispatcher.dispatch({
	// 		actionType: VoteConstants.VOTE_RECEIEVED,
	// 		vote: vote
	// 	});
	// },

	destroyVote: function(id) {
		Dispatcher.dispatch({
			actionType: VoteConstants.VOTE_DELETED,
			id: id
		});
	}
};

module.exports = VoteActions;
