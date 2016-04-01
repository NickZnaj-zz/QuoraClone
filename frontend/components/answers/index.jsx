var React = require('react');
var AnswerStore = require('../../stores/answer_store.js');
var IndexItem = require('./index_item');
var ApiUtil = require('../../util/api_util');

var AnswersIndex = React.createClass({
  getInitialState: function() {
    return { answers: AnswerStore.all() };
  },

  getStateFromStore: function () {
    return { answers: AnswerStore.find(parseInt(this.props.params.answerId)) };
  },

	_onChange: function() {
		this.setState({answers: AnswerStore.all() });
	},

  componentDidMount: function() {
    this.answerListener = AnswerStore.addListener(this._onChange);
    ApiUtil.fetchAllAnswers(this.props.question.id);
  },

  render: function() {

    if (!this.state.answers) { return <div></div>; }

		// var answerCount = function() {
		// 	return this.state.answers.length
		// };
    return (
      <div>
				<p className="answers count"> Answers</p>
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
