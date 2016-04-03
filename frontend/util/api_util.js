var QuestionActions = require('../actions/question_actions');
var AnswerActions = require('../actions/answer_actions');
var SessionActions = require('../actions/session_actions');
var UserActions = require('../actions/user_actions');

var ApiUtil = {

	fetchSingleUser: function(id) {
		$.ajax({
			type: "GET",
			url: "/users/" + id,
			dataType: "json",
			success: function(user) {
				UserActions.receiveSingleUser(user);
			},
			error: function(e) {
				console.log("api_util#fetchSingleUser error");
			}
		});
	},

	signUp: function(credentials, callback) {
		$.ajax({
			type: "POST",
			url: "/users",
			dataType: "json",
			data: {user: credentials},
			success: function(newUser) {
				SessionActions.currentUserReceived(newUser);
				callback && callback();
			}
		});
	},

	login: function(credentials, callback) {
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: credentials,
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      }
    });
  },

  logout: function() {
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function() {
        SessionActions.logout();
      }
    });
  },

  fetchCurrentUser: function(completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      complete: function() {
        completion && completion();
      }
    });
  },

  fetchAllQuestions: function() {
    $.ajax({
      type: "GET",
      url: "/api/questions",
      success: function(questions) {
        QuestionActions.receiveAllQuestions(questions);
      }
    });
  },

  fetchSingleQuestion: function(id) {
    $.ajax({
      type: "GET",
      url: "/api/questions/" + id,
      success: function(question) {
        QuestionActions.receiveSingleQuestion(question);
      }
    });
  },

  destroyQuestion: function(id, callback) {
    $.ajax({
      method: "DELETE",
      url: "/api/questions/" + id,
      success: function(id) {
        QuestionActions.destroyQuestion(id);
        callback && callback();
      }
    });
  },

  createQuestion: function(question, callback) {
    $.ajax({
      method: "POST",
      url: "/api/questions/",
      data: {question: question},
      success: function(question) {
        QuestionActions.receiveSingleQuestion(question);
        callback && callback(question.id);
      },
      error: function(e) {
        console.log("api_util#createQuestion");
      }
    });
  },

  editQuestion: function(question, newAttrs, callback) {
    $.ajax({
      method: "PATCH",
      url: "/api/questions/" + question.id,
      data: { question: newAttrs },
      success: function(question) {
        QuestionActions.editQuestion(question);
        callback && callback(question);
      },
      error: function(e) {
        console.log("api_util#editQuestion error");
    }
    });
  },

  fetchAllAnswers: function(id) {
    $.ajax({
      type: "GET",
      url: "/api/questions/" + id + "/answers",
      success: function(answers) {
        AnswerActions.receiveAllAnswers(answers);

      },
			error: function(e) {
				console.log("api_util#fetchAllAnswers Error");
			}
    });
  },

	createAnswer: function(answer, callback) {
		$.ajax({
			type: "POST",
			url: "/api/answers/",
			data: {answer: answer},
			success: function(answer){
				AnswerActions.receiveSingleAnswer(answer);
				callback && callback(answer.id);
			},
			error: function(e) {
				console.log("api_util#createAnswer Error");
			}
		});
	},

	destroyAnswer: function(id, callback) {
		$.ajax({
			type: "DELETE",
			url: "/api/answers/" + id,
			success: function () {
				AnswerActions.destroyAnswer(id);
				callback && callback(id)
			},
			error: function(e) {
				console.log("api_util#destroyAnswer Error");
			}
		});
	},

	editAnswer: function(answer, newAttrs, callback) {
    $.ajax({
      method: "PATCH",
      url: "/api/answers/" + answer.id,
      data: { answer: newAttrs },
      success: function(answer) {
        AnswerActions.editQuestion(answer);
        callback && callback(answer);
      },
      error: function(e) {
        console.log("api_util#editAnswer error");
    }
    });
	}

};


module.exports = ApiUtil;
