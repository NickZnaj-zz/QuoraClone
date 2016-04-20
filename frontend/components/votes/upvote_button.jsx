var React = require('react');
var PropTypes = React.PropTypes;
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util.js');


var UpvoteButton = React.createClass({

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
			if (userVotes[i].answer_id == this.props.answer.id) {
				this.voteID = userVotes[i].id;
				return;
			}
		}
		return true;
	},

	_onStoreChange: function() {
		console.log("_onStoreChange" + this.state.value);
		this.setState({value: this._decideCurrentState()})
		console.log("emit change");

	},

	componentDidMount: function() {
		this.sessionListener = SessionStore.addListener(this._onStoreChange);
	},

	componentWillUnmount: function() {
		this.sessionListener.remove();
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
		return ("Upvote | " + this.props.answer.score);
	},

	render: function() {
		var upvoteButton;
		if (this.state.value === true) {
			upvoteButton =
			<input
				type="submit"
				value={this._findButtonString()}
				onClick={this.createVote}
				className="upvote-button-not-yet-voted"/>;
		} else  {
			upvoteButton =
			<input
				type="submit"
				value={this._findButtonString()}
				onClick={this.deleteVote}
				className="upvote-button-already-voted"/>;
		}

		return (
			<div className="upvote-button-wrapper">{upvoteButton}</div>
		);
	}

});

module.exports = UpvoteButton;
