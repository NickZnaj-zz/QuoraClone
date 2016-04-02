var React = require('react');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util.js');
var AnswerForm = require('./answer_form');


var TopAnswer = React.createClass({

	render: function() {
		if (this.props.question.answers.length === 0) {
			return(
			<div>
				<div>This question hasn't been answered!</div>
				<AnswerForm  question={this.props.question}/>
			</div>
			);

		}

		return (
			<div>top answer: {this.props.question.answers[0].body}</div>
		);
	}

});

module.exports = TopAnswer;
