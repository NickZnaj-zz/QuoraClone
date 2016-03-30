var Dispatcher = require('../dispatcher/dispatcher'),
    QuestionConstants = require('../constants/question_constants');

var QuestionActions = {
  receiveAllQuestions: function(questions) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.QUESTIONS_RECEIVED,
      questions: questions
    });
  },

  receiveSingleQuestion: function(question) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_RECEIVED,
      question: question
    });
  },

  destroyQuestion: function(id) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_DELETED,
      id: id
    });
  },

  editQuestion: function(question) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_EDITED,
      question: question
    });
  }
};

module.exports = QuestionActions;
