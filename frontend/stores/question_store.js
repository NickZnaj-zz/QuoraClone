var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');

var QuestionStore = new Store(AppDispatcher);
var QuestionConstants = require('../constants/question_constants');
var _questions = {};

var resetQuestions = function(questions){
  _questions = {};
  questions.forEach(function (question){
    _questions[question.id] = question;
  });
};

var resetQuestion = function(question){
  _questions[question.id] = question;
};

var deleteQuestion = function(id){
  delete _questions.id;
};

var editQuestion = function(question){
  _questions[question.id] = question;
};

QuestionStore.all = function () {
  var questions = [];
  for (var id in _questions) {
    questions.push(_questions[id]);
  }
  return questions;
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
  case QuestionConstants.QUESTION_DELETED:
    deleteQuestion(payload.id);
    QuestionStore.__emitChange();
    break;
  case QuestionConstants.QUESTION_EDITED:
    editQuestion(payload.question);
    QuestionStore.__emitChange();
    break;
  }
};


window.QuestionStore = QuestionStore;

module.exports = QuestionStore;
