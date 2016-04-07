var React = require('react');
var PropTypes = React.PropTypes;
var VoteStore = require('../../stores/vote_store');
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util.js');


var UpvoteButton = React.createClass({

	getInitialState: function() {
		return {
			value: this._decideCurrentState(),
			user_id: this.props.user,
			answer_id: this.props.answer.id
		};
	},

	_decideCurrentState: function(){
		var userVotes = SessionStore.currentUserVotes();

		for (var i = 0; i < userVotes.length; i++) {
			if (userVotes[i].answer_id == this.props.answer.id) {
				this.voteID = i;
				return true;
			}
		}
		return false;
	},

	_onStoreChange: function() {
		this.setState({value: this._decideCurrentState()});
	},

	componentDidMount: function() {
		this.userHasVoted = null;
		this.voteID = "";
		this.voteListener = VoteStore.addListener(this._onStoreChange);
	},

	componentWillUnmount: function() {
		this.voteListener.remove();
	},

	_onChange: function(e) {

	},

	deleteVote: function(e) {
		e.preventDefault();

		ApiUtil.destroyVote(this.voteID);
	},

	createVote: function(e) {
		e.preventDefault();

		ApiUtil.createVote(this.state);

	},

	_findButtonString: function() {
		return ("Upvote | " + this.props.answer.votes.length);
	},

	render: function() {
		var upvoteButton;

		if (this.state.value === true) {
			upvoteButton =
			<input
				type="submit"
				value={this._findButtonString()}
				onClick={this.deleteVote}
				className="upvote-button-already-voted"/>;
		}

		if (this.state.value === false) {
			upvoteButton =
			<input
				type="submit"
				value={this._findButtonString()}
				onClick={this.createVote}
				className="upvote-button-not-yet-voted"/>;
		}

		return (
			<div>{upvoteButton}</div>
		);
	}

});

module.exports = UpvoteButton;
