var React = require('react');
var QuestionStore = require('../../stores/question_store.js');
var ApiUtil = require('../../util/api_util');
var IndexItem = require('./index_item');

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

  return(
    <ul>
      {this.state.questions.map(function( question) {
        return <IndexItem key={question.id} question={question} />;
      })}
    </ul>
  );
}
});



module.exports = QuestionsIndex;
