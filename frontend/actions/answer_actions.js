var Dispatcher = require('../dispatcher/Dispatcher'),
    AnswerConstants = require('../constants/answer_constants');

var AnswerActions = {
  receiveAllAnswers: function(answers) {
    Dispatcher.dispatch({
      actionType: AnswerConstants.ANSWERS_RECEIVED,
      answers: answers
    });
  },

	receiveSingleAnswer: function(answer) {
		console.log("hit receiveSingleAnswer");
		Dispatcher.dispatch({
			actionType: AnswerConstants.ANSWER_RECEIVED,
			answer: answer,
		});
	},

	destroyAnswer: function(id) {
		Dispatcher.dispatch({
			actionType: AnswerConstants.ANSWER_DELETED,
			id: id
		});
	},

	editQuestion: function(answer) {
		Dispatcher.dispatch({
			actionType: AnswerConstants.ANSWER_EDITED,
			answer: answer
		});
	}
};

module.exports = AnswerActions;
