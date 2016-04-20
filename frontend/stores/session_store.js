var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/session_constants');
var VoteConstants = require('../constants/vote_constants');
var Dispatcher = require('../dispatcher/Dispatcher');
var SessionStore = new Store(Dispatcher);

var _currentUser;
var _currentUserHasBeenFetched = false;
var _votes = {};

// returns an array of the ids of answers the user has voted on
// SessionStore.currentUserVotes = function() {
// 	var currentUserVotes = [];
// 	if (_currentUser.votes) {
// 		_currentUser.votes.forEach(function(vote) {
// 			currentUserVotes.push(vote.answer_id);
// 		});
// 	}
// 	return currentUserVotes;
// };

var fetchVotes = function() {
	if (_currentUser.votes) {
		_currentUser.votes.forEach(function (vote) {
			_votes[vote.id] = vote;
		});
	}
};

var updateVote = function(vote){
  _votes[vote.id] = vote;
};

var deleteVote = function(id){
	delete _votes[id];
};

SessionStore.allVotes = function() {
  var votes = [];
  for (var id in _votes) {
    votes.push(_votes[id]);
  }
  return votes;
};

SessionStore.currentUser = function() {
  return _currentUser;
};

SessionStore.isLoggedIn = function() {
  return !!_currentUser;
};

SessionStore.currentUserHasBeenFetched = function() {
  return _currentUserHasBeenFetched;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser;
      _currentUserHasBeenFetched = true;
			fetchVotes();
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _currentUser = null;
      SessionStore.__emitChange();
      break;
    case VoteConstants.VOTE_RECEIVED:
      updateVote(payload.vote);
      SessionStore.__emitChange();
			// console.log("VOTE_RECEIVED");
      break;
		case VoteConstants.VOTE_DELETED:
		// console.log("VOTE_DELETED");
      deleteVote(payload.id);
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
