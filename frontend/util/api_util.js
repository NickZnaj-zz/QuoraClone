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
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
