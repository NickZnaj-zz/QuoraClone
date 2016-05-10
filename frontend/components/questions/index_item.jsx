var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var TopAnswer = require('../answers/top_answer');
var AnswerForm = require('./question_index_answer_form');

var IndexItem = React.createClass({

	getInitialState: function() {
		return { isAnswering: false };
	},

	startAnswer: function() {
		this.setState({ isAnswering: true });
	},

	closeAnswer: function() {
		this.setState({ isAnswering: false });
	},

	renderTopicList: function() {
		if (!this.props.question.topics) return;

		return this.props.question.topics.map(function(topic) {
			return <a href={"/#/main/topics/" + topic.id} key={topic.id} className="question-list-item-topic">{topic.name}</a>;
		}.bind(this))

	},

  render: function() {
		var answerButton;
		if (!this.props.question.answers ||
			  this.props.question.answers.length <= 5) {
			answerButton =
			<input type="submit"
				onClick={this.startAnswer}
				className="question-index-answer-button"
				value="Answer!"
				/>;
		}
		var answerForm;
		if (this.state.isAnswering) {
			answerForm = <AnswerForm
				question={this.props.question}
				onAnswerEnd={this.closeAnswer}
			/>;
		}
		//
		// console.log(this.props.question.topics);
		// console.log((typeof this.props.question.topics !== "undefined"));

		var topAnswer;
		if (this.props.question.answers[0]) {
			var id = this.props.question.answers[0].id.toString()
			topAnswer = <TopAnswer id={id} question={this.props.question} />
		}
    return (
      <li className="question-list-item">
				<ul className="question-list-item-topics group">
					{this.renderTopicList()}
				</ul>

        <div className="question-index-item">

          <a href={"/#/main/questions/" + this.props.question.id}
						 className="question-title-index">{this.props.question.title}
					</a>

					{topAnswer}

        </div>
				{answerButton}
				{answerForm}
      </li>
    );
  }
});

module.exports = IndexItem;
