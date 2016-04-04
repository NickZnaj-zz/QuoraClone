var React = require('react');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util.js');
var AnswerForm = require('../questions/question_index_answer_form');
var UserStore = require('../../stores/user_store');


var TopAnswer = React.createClass({
	getInitialState: function() {

		return {
			submitter: {}
		};
	},

	_onChange: function() {
		var user = this.props.question.answers[0] && UserStore.find(this.props.question.answers[0].user_id);
		this.setState({ submitter: user});
	},

	componentDidMount: function() {
		this.userListener = UserStore.addListener(this._onChange);
		this.props.question.answers[0] && ApiUtil.fetchSingleUser(this.props.question.answers[0].user_id);
	},

	componentWillUnmount: function() {
		this.userListener.remove();
	},


	render: function() {
		if (!this.props.question.answers ||
				(this.props.question.answers.length === 0)) {
			return(
			<div>
				<div>This question hasn't been answered!</div>
			</div>
			);
		}
		var displayed = this.props.question.answers[0].body;
		var userInfo = this.state.submitter.username || "empty";

		// if (this.state.submitter === "undefined"){
		// 	userInfo = "";
		// }



		return (
			<div className="top-answer group">
				<div className="top-answer-user-info"> {userInfo}</div>
				<div className="top-answer-body">{displayed}</div>
			</div>
		);
	}

});

module.exports = TopAnswer;




// <AnswerForm  question={this.props.question}/>;
