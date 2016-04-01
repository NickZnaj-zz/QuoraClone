var React = require('react');
var AnswerStore = require('../../stores/answer_store.js');
var IndexItem = require('./index_item');
var ApiUtil = require('../../util/api_util');

var AnswersIndex = React.createClass({
  getInitialState: function() {
    return { answers: AnswerStore.all() };
  },

  getStateFromStore: function () {
    return { answer: AnswerStore.find(parseInt(this.props.params.answerId)) };
  },

  componentDidMount: function() {
    this.answerListener = AnswerStore.addListener(this._onChange);
    ApiUtil.fetchAllAnswers(this.props.question.id);
  },

  render: function() {
    debugger
    if (this.state.answers) { return <div></div>; }
    return (
      <div>
        <ul className="answers">
          {this.state.answers.map(function(answer){
             return <IndexItem key={answer.id} answer={answer} />;
          })}
        </ul>
      </div>
    );
  }

});

module.exports = AnswersIndex;
