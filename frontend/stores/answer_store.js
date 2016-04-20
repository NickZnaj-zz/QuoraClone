var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');

var AnswerStore = new Store(Dispatcher);
var AnswerConstants = require('../constants/answer_constants');
var _answers = {};


var resetAnswers = function(answers) {
  _answers = {};
  answers.forEach(function (answer){
    _answers[answer.id] = answer;
  });
};

var resetAnswer = function(answer){
  _answers[answer.id] = answer;
};

var deleteAnswer = function(id) {
	delete _answers[id];
};

var addVote = function(answerID) {
	_answers[answerID].score++;
};

var removeVote = function(answerID) {
	_answers[answerID].score--;

};


AnswerStore.all = function() {
  var answers = [];
  for (var id in _answers) {
    answers.push(_answers[id]);
  }
  return answers;
};

AnswerStore.find = function(id) {
  return _answers[id];
};

AnswerStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case AnswerConstants.ANSWERS_RECEIVED:
      resetAnswers(payload.answers);
      AnswerStore.__emitChange();
      break;
    case AnswerConstants.ANSWER_RECEIVED:
      resetAnswer(payload.answer);
      AnswerStore.__emitChange();
      break;
		case AnswerConstants.ANSWER_DELETED:
			deleteAnswer(payload.id);
			AnswerStore.__emitChange();
			break;
		case AnswerConstants.VOTE_REMOVED:
			removeVote(payload.answerID);
			AnswerStore.__emitChange();
			break;
		case AnswerConstants.VOTE_ADDED:
			addVote(payload.answerID);
			AnswerStore.__emitChange();
			break;
  }
};


module.exports = AnswerStore;
