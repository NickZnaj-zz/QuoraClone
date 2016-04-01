var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var AnswerStore = new Store(AppDispatcher);
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
  }
};


module.exports = AnswerStore;
