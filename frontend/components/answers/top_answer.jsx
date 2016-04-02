var React = require('react');
var PropTypes = React.PropTypes;
// var AnswerStore = require('../../stores/answer_store.js');
var ApiUtil = require('../../util/api_util.js');


var TopAnswer = React.createClass({
	getInitialState: function() {
		return {
			// answers: AnswerStore.all()
		};
	},

	_onChange: function() {
		// this.setState({ answers: AnswerStore.all() });
	},

	componentDidMount: function() {
		// this.answerListener = AnswerStore.addListener(this._onChange);
		// ApiUtil.fetchAllAnswers(this.props.question.id);
	},

	componentWillUnmount: function() {
		// this.answerListener.remove();
	},

	isValidAnswer: function(answer) {
		if (answer.question_id === this.props.question.id) return true;
	},

	findTopAnswer: function() {

		return this.state.answers.find(function (answer){
			if (answer.question_id === this.props.question.id) return answer;
		}.bind(this));
	},

	// componentWillReceiveProps: function(nextProps) {
	// 	this.setState({ answer: AnswerStore.find(newProps.params.id)});
	// },

	render: function() {
		if (this.props.question.answers.length === 0) { return<div></div>; }
		//
		// var topAnswer = this.findTopAnswer();
		return (
			<div>top answer: {this.props.question.answers[0].body}</div>
		);
	}

});

module.exports = TopAnswer;
