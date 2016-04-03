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

  render: function() {
		var answerButton;
		if (this.props.question.answers &&
			  this.props.question.answers.length === 0) {
			answerButton =
			<input type="button"
				onClick={this.startAnswer}
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

    return (
      <li className="question-list-item">

        <div className="question-index-item">

          <a href={"/#/questions/" + this.props.question.id}
						 className="question-title-index">{this.props.question.title}</a>
					<TopAnswer question={this.props.question} />

        </div>
				{answerButton}
				{answerForm}
      </li>
    );
  }
});

module.exports = IndexItem;
