var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');

var VoteStore = new Store(Dispatcher);
var VoteConstants = require('../constants/vote_constants');

var _votes = {};

var resetVotes = function(votes) {
  _votes = {};
  votes.forEach(function (vote){
    _votes[vote.id] = vote;
  });
};

var resetVote = function(vote){
  _votes[vote.id] = vote;
};

var deleteVote = function(id){
	delete _votes[id];
};

VoteStore.all = function() {
  var votes = [];
  for (var id in _votes) {
    votes.push(_votes[id]);
  }
  return votes;
};

// VoteStore.find()

VoteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case VoteConstants.VOTES_RECEIVED:
      resetVotes(payload.votes);
      VoteStore.__emitChange();
      break;
    case VoteConstants.VOTE_RECEIVED:
      resetVote(payload.vote);
      VoteStore.__emitChange();
      break;
		case VoteConstants.VOTE_DELETED:
      resetVote(payload.vote);
      VoteStore.__emitChange();
      break;
  }
};

module.exports = VoteStore;
