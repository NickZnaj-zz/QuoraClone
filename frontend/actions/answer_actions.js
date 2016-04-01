var Dispatcher = require('../dispatcher/dispatcher'),
    AnswerConstants = require('../constants/answer_constants');

var AnswerActions = {
  receiveAllAnswers: function(answers) {
    Dispatcher.dispatch({
      actionType: AnswerConstants.ANSWERS_RECEIVED,
      answers: answers
    });
  },

	receiveSingleAnswer: function(answer) {
		Dispatcher.dispatch({
			actionType: AnswerConstants.ANSWER_RECEIVED,
			answer: answer
		});
	}
};

module.exports = AnswerActions;
