var Dispatcher = require('../dispatcher/dispatcher'),
    QuestionConstants = require('../constants/question_constants');

var QuestionActions = {
  receiveAllQuestions: function(questions) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.QUESTIONS_RECEIVED,
      questions: questions
    });
  }
};

module.exports = QuestionActions;
