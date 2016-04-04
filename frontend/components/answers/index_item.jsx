var React = require('react');
var AnswerEditForm = require('./edit');
var ApiUtil = require('../../util/api_util.js');
var UserStore = require('../../stores/user_store');


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
		this.state.submitter.username && ApiUtil.fetchSingleUser(this.props.answer.user_id);
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

    return (
      <li className="answer-list-item group">

				<div className="answer-header group">
					<div  className="user-pic"  />
					<p className="user-info">{this.state.submitter.username}</p>
				</div>

        <div className="answer-list-item-answer">
          {this.props.answer.body}
        </div>

				{answerEditForm}

				<input type="submit"
							 value="Edit Answer"
							 onClick={this.startEdit} />

				<input type="submit"
							 value="Delete Answer"
							 onClick={this.handleDelete} />

      </li>
    );
  }
});

module.exports = IndexItem;
