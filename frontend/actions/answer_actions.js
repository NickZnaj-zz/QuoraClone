var Dispatcher = require('../dispatcher/dispatcher'),
    AnswerConstants = require('../constants/answer_constants');

var AnswerActions = {
  receiveAllAnswers: function(answers) {
    Dispatcher.dispatch({
      actionType: AnswerConstants.ANSWERS_RECEIVED,
      answers: answers
    });
  }
};
