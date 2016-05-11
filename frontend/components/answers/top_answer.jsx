var React = require('react');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util.js');
var AnswerForm = require('../questions/question_index_answer_form');
var UserStore = require('../../stores/user_store');


var TopAnswer = React.createClass({
	getInitialState: function() {
		return {
			submitter: this.props.question.answers[0].user
		};
	},

	_onChange: function() {
		// if (this.props.question.answers[0]){
		//
		// var user = UserStore.find(this.props.question.answers[0].user_id);
		// this.setState({ submitter: user});}
	},

	componentDidMount: function() {
		// this.userListener = UserStore.addListener(this._onChange);
		if (this.props.question.answers[0]) {
			// ApiUtil.fetchSingleUser(this.props.question.answers[0].user_id);
			var element = document.getElementById(this.props.id.toString());
			element.innerHTML = this.props.question.answers[0].body;
		};
	},

	componentWillUnmount: function() {
		// this.userListener.remove();
	},

	render: function() {
		if (!this.props.question.answers || (this.props.question.answers.length === 0) || !this.state.submitter) {
			return(<div className="top-answer-body">This question hasn't been answered!</div>)
		}
		else {
			var displayed = this.props.question.answers[0].body;
			var userInfo;
			if (typeof this.state.submitter !== "undefined"){
				userInfo = this.props.question.answers[0].user.username;
			}

			return (
				<div className="top-answer group">
					<div className="top-answer-submitter group">
						<img className="index-user-pic"  />
						<a href={"/#/main/users/" + this.props.question.answers[0].user.id} className="top-answer-user-info"> {userInfo}</a>
					</div>
					<div id={this.props.id} className="top-answer-body">{displayed}</div>
				</div>
			);}
	}

});

module.exports = TopAnswer;
