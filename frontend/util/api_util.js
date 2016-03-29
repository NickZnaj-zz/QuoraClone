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

  createQuestion: function(question, callback) {
    debugger
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
  }
};


module.exports = ApiUtil;
