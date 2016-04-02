var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var TopAnswer = require('../answers/top_answer');
var answerForm = require('../answers/answer_form');

var IndexItem = React.createClass({

  render: function() {
		var answerForm;
		if (this.state.isAnswering) {
			answerForm=<AnswerForm
				question={this.props.question}
				onAnswerEnd={this.closeAnswer}
				className="answer-form-question-index"
			/>;
		}

    return (
      <li className="question-list-item">

        <div className="question-index-item">

          <a href={"/#/questions/" + this.props.question.id}
						 className="question-title-index">{this.props.question.title}</a>
					<TopAnswer question={this.props.question} />

        </div>
      </li>
    );
  }
});

module.exports = IndexItem;
