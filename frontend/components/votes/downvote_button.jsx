var React = require('react');
var PropTypes = React.PropTypes;
var VoteStore = require('../../stores/vote_store');
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util.js');


var DownvoteButton = React.createClass({

		getInitialState: function() {
			return {
				value: this._decideCurrentState(),
				user_id: this.props.user,
				answer_id: this.props.answer.id
			};
		},

		_decideCurrentState: function(){
			debugger 
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
			this.setState({voted: this._decideCurrentState()});
		},

		componentDidMount: function() {
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
			return ("Downvote | " + this.props.answer.votes.length);
		},

		render: function() {
			var downvoteButton;

			if (this.state.value === true) {
				downvoteButton =
				<input
					type="submit"
					value={this._findButtonString()}
					onClick={this.deleteVote}
					className="upvote-button-already-voted"/>;
			}

			if (this.state.value === false) {
				downvoteButton =
				<input
					type="submit"
					value={this._findButtonString()}
					onClick={this.createVote}
					className="upvote-button-not-yet-voted"/>;
			}

			return (
				<div>{downvoteButton}</div>
			);
		}

	});

module.exports = DownvoteButton;
