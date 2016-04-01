var QuestionActions = require('../actions/question_actions');
var AnswerActions = require('../actions/answer_actions');

var ApiUtil = {
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
      }
    });
  },

	createAnswer: function()

};


module.exports = ApiUtil;
