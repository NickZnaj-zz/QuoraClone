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
		if (this.props.question.answers[0]){
		var user = this.props.question.answers[0].user;
		this.setState({ submitter: user});}
	},

	componentDidMount: function() {
		this.userListener = UserStore.addListener(this._onChange);
		// this.props.question.answers[0] && ApiUtil.fetchSingleUser(this.props.question.answers[0].user_id);
	},

	componentWillUnmount: function() {
		this.userListener.remove();
	},

	render: function() {
		debugger
		if (!this.props.question.answers ||
				(this.props.question.answers.length === 0)) {
			return(
			<div>
				<div className="top-answer-body">This question hasn't been answered!</div>
			</div>
			);
		}
		var displayed = this.props.question.answers[0].body;
		var userInfo;
		if (typeof this.state.submitter !== "undefined"){
			userInfo = this.state.submitter.username;
		}

		return (
			<div className="top-answer group">
				<div className="top-answer-submitter group">
					<img className="index-user-pic"  />
					<a href={"/#/users/" + this.state.submitter.id} className="top-answer-user-info"> {userInfo}</a>
				</div>
				<div className="top-answer-body">{displayed}</div>
			</div>
		);
	}

});

module.exports = TopAnswer;
