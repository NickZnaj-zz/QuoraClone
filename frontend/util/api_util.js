var QuestionActions = require('../actions/question_actions');


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

  createQuestion: function(question, callback) {
    $.ajax({
      method: "POST",
      url: "/api/questions",
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

  destroyQuestion: function(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/questions/" + id,
      data: {question: question},
      success: function(question){
        QuestionActions.destroyQuestion
      }
    })
  }
};


module.exports = ApiUtil;
