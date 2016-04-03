var React = require('react');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util.js');
var AnswerForm = require('../questions/question_index_answer_form');


var TopAnswer = React.createClass({

	render: function() {
		debugger
		if (this.props.question.answers &&
				(this.props.question.answers.length === 0)) {
			return(
			<div>
				<div>This question hasn't been answered!</div>
			</div>
			);

		}

		return (
			<div>top answer: {this.props.question.answers[0].body}</div>
		);
	}

});

module.exports = TopAnswer;




// <AnswerForm  question={this.props.question}/>;
