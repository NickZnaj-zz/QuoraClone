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
		return { isEditing: false, answer: this.props.answer, submitter: {} };
	},

	_onChange: function() {
		var submitter = UserStore.find(this.props.answer.user_id);
		this.setState({submitter: submitter});
	},

	componentDidMount: function() {
		this.userListener = UserStore.addListener(this._onChange);
		ApiUtil.fetchSingleUser(this.props.answer.user_id);
	},

	componentWillUnmount: function() {
		this.userListener.remove();
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
				answer={this.state.answer}
				onEditEnd={this.closeEdit}
			/>;
		}

		var editButton;
		if (this.state.submitter.id && (this.state.submitter.id === SessionStore.currentUser().id)){
			editButton = <input type="submit"
						 							value="Edit Answer"
						 							onClick={this.startEdit} />;
		}

		var deleteButton;
		if (this.state.submitter.id === SessionStore.currentUser().id)
			deleteButton = <input type="submit"
						 								value="Delete Answer"
						 								onClick={this.handleDelete} />;

    return (
      <li className="answer-list-item group">

				<div className="answer-header group">
					<div className="user-pic"  />
					<p className="user-info">{this.state.submitter.username}</p>
				</div>

        <div className="answer-list-item-answer">
          {this.props.answer.body}
        </div>

			{answerEditForm}

			{editButton}

			{deleteButton}

			<UpvoteButton
				user={SessionStore.currentUser().id}
				answer={this.state.answer}
			/>

			 <DownvoteButton
				user={SessionStore.currentUser().id}
				answer={this.state.answer}
			/>

      </li>
    );
  }
});

module.exports = IndexItem;
