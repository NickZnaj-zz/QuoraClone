var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _questions = [];
var QuestionStore = new Store(AppDispatcher);
var QuestionConstants = require('../constants/question_constants');

var resetQuestions = function(questions){
  _questions = questions;
};

var resetQuestion = function(question){
  _questions[question.id] = question;
};

QuestionStore.all = function () {
  return _questions.slice(0);
};

QuestionStore.find = function(id) {
  return _questions[id];
};

QuestionStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case QuestionConstants.QUESTIONS_RECEIVED:
    resetQuestions(payload.questions);
    QuestionStore.__emitChange();
    break;
  case QuestionConstants.QUESTION_RECEIVED:
    resetQuestion(payload.question);
    QuestionStore.__emitChange();
    break;
  }
};


window.QuestionStore = QuestionStore;

module.exports = QuestionStore;
