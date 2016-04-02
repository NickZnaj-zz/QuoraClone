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

	componentDidMount: function() {
		this.answerListener = AnswerStore.addListener(this._onChange);
		ApiUtil.fetchAllAnswers(this.props.question.id);
	},
	componentWillUnmount: function() {
		this.answerListener.remove();
	},

	render: function() {

		return (
			<div>This is the top answer for {this.props.question.title}</div>
		);
	}

});

module.exports = TopAnswer;
