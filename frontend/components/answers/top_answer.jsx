var React = require('react');
var PropTypes = React.PropTypes;
var AnswerStore = require('../../stores/answer_store.js');
var ApiUtil = require('../../util/api_util.js');


var TopAnswer = React.createClass({
	getInitialState: function() {
		return {
			answers: AnswerStore.all()
		};
	},

	_onChange: function() {
		this.setState({ answers: AnswerStore.all() });
	},

	componentDidMount: function() {
		this.answerListener = AnswerStore.addListener(this._onChange);
		ApiUtil.fetchAllAnswers(this.props.question.id);
	},
	componentWillUnmount: function() {
		this.answerListener.remove();
	},

	render: function() {

		if (this.state.answers.length === 0) { return<div></div>; }
			debugger
		return (
			<div>This is the top answer for {this.state.answers[0].body}</div>
		);
	}

});

module.exports = TopAnswer;
