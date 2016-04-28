var React = require('react');
var AnswerEditForm = require('./edit');
var ApiUtil = require('../../util/api_util.js');
var UserStore = require('../../stores/user_store');
var SessionStore = require('../../stores/session_store');
var UpvoteButton = require('../votes/upvote_button');
var DownvoteButton = require('../votes/downvote_button');


var IndexItem = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {

		// var submitter = UserStore.find(this.props.answer.user_id);
		return { isEditing: false, answer: this.props.answer, };
	},

	_onChange: function() {
		// var submitter = UserStore.find(this.props.answer.user_id);
		// this.setState({submitter: submitter});
	},

	componentDidMount: function() {
		// this.userListener = UserStore.addListener(this._onChange);
		// ApiUtil.fetchSingleUser(this.props.answer.user_id);
		var element = document.getElementById(this.props.id)
		element.innerHTML = this.props.answer.body;
	},

	componentWillUnmount: function() {
		// this.userListener.remove();
	},

	startEdit: function() {
		this.setState({ isEditing: true });
	},

	closeEdit: function() {
		this.setState({ isEditing: false });
	},

	handleDelete: function(e) {
		e.preventDefault();

		ApiUtil.destroyAnswer(this.props.answer.id, function(){
		}.bind(this));
	},

  render: function() {

		var answerEditForm;
		if (this.state.isEditing) {
			answerEditForm = <AnswerEditForm
				submitter={this.props.submitter}
				answer={this.state.answer}
				onEditEnd={this.closeEdit}
			/>;
		}

		var editButton;
		if (this.props.submitter && (this.props.submitter.id === SessionStore.currentUser().id)){
			editButton = <input type="submit"
						 							value="Edit Answer"
						 							onClick={this.startEdit}
													className="edit-answer-button"/>;
		}

		var deleteButton;
		if (this.props.submitter && (this.props.submitter.id === SessionStore.currentUser().id)){
			deleteButton = <input type="submit"
						 								value="Delete Answer"
						 								onClick={this.handleDelete}
														className="delete-answer-button" />;
		}

		var answerString = this.props.answer.body



    return (
      <li className="answer-list-item group">

				<div className="answer-header group">
					<div className="user-pic"/>
					<a href={"/#/users/" + this.props.submitter.id} className="user-info">{this.props.submitter.username}</a>
				</div>

        <div className="answer-list-item-answer" id={this.props.id} >
					{answerString}
        </div>

			{answerEditForm}


			<UpvoteButton
				user={SessionStore.currentUser().id}
				answer={this.state.answer}
			/>

			 <DownvoteButton
				user={SessionStore.currentUser().id}
				answer={this.state.answer}
			/>
		<div className="answer-modify-buttons-group">
			{editButton}

			{deleteButton}
		</div>
      </li>
    );
  }
});

module.exports = IndexItem;
