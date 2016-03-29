var React = require('react');
var QuestionStore = require('../../stores/question_store.js');
var ApiUtil = require('../../util/api_util');

var QuestionsIndex = React.createClass({
  getInitialState: function() {
  return { questions: QuestionStore.all() };
},

_onChange: function() {
  this.setState({questions: QuestionStore.all() });
},

componentDidMount: function() {
  this.questionListener = QuestionStore.addListener(this._onChange);
  ApiUtil.fetchAllQuestions();
},

componentWillUnmount: function() {
  this.questionListener.remove();
},

render: function() {
  var questions =
  this.state.questions.map(function (question) {
    return <li>
      <p>{question.title}</p>
      <p>{question.body}</p>
    </li>;
  });
  return(
    <ul>
      {questions}
    </ul>
  );
}
});



module.exports = QuestionsIndex;
