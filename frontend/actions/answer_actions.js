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

	editAnswer: function(answer) {
		Dispatcher.dispatch({
			actionType: AnswerConstants.ANSWER_RECEIVED,
			answer: answer
		});
	},

	addVote: function(answerID) {
		Dispatcher.dispatch({
			actionType: AnswerConstants.VOTE_ADDED,
			answerID: answerID
		});
	},

	removeVote: function(answerID) {
		Dispatcher.dispatch({
			actionType: AnswerConstants.VOTE_REMOVED,
			answerID: answerID
		});
	}
};

module.exports = AnswerActions;
