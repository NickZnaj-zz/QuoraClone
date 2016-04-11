var React = require('react');
var PropTypes = React.PropTypes;
// var VoteStore = require('../../stores/vote_store');
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util.js');


var DownvoteButton = React.createClass({

		getInitialState: function() {
			var value = this._decideCurrentState();
			return {
				value: value,
				user_id: this.props.user,
				answer_id: this.props.answer.id
			};
		},

		_decideCurrentState: function(){
			var userVotes = SessionStore.allVotes();
			for (var i = 0; i < userVotes.length; i++) {
				if (userVotes[i] == this.props.answer.id) {
					this.voteID = userVotes[i];
					return;
				}
			}
			return false;
			// return false;
		},

		_onStoreChange: function() {
			this.setState({value: this._decideCurrentState()})
			// this.setState({value: this.state.value ? true : false});
		},

		componentDidMount: function() {
			this.sessionListener = SessionStore.addListener(this._onStoreChange);
		},

		componentWillUnmount: function() {
			this.sessionListener.remove();
		},

		_onChange: function(e) {

		},

		deleteVote: function(e) {
			e.preventDefault();
			ApiUtil.destroyVote(this.voteID, this.props.answer.id);
		},

		createVote: function(e) {
			e.preventDefault();

			ApiUtil.createVote(this.state);
		},

		_findButtonString: function() {
			if (this.state.value === false){
				return "Downvote";
			} else {
				return "Downvoted";
			}
		},

		render: function() {
			var downvoteButton;


			if (this.state.value === false) {
				downvoteButton =
				<a
					onClick={this.createVote}
					className="downvote-button-not-yet-voted">{this._findButtonString()}</a>;
			} else {
				downvoteButton =
				<a
					onClick={this.deleteVote}
					className="downvote-button-already-voted">{this._findButtonString()}</a>;
			}

			return (
				<div className="downvote-button-wrapper">{downvoteButton}</div>
			);
		}

	});

module.exports = DownvoteButton;
