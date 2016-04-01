var React = require('react');
var AnswerEditForm = require('./edit');

var IndexItem = React.createClass({

	getInitialState: function() {
		return { isEditing: false, answer: this.props.answer };
	},

	startEdit: function() {
		this.setState({ isEditing: true });
	},

  render: function() {
		debugger
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
					<img className="user-pic" src="default_profile_pic.png" />
					<p className="user-info">USER INFO HERE</p>
				</div>

        <div className="answer-list-item-answer">
          {this.props.answer.body}
        </div>

				{answerEditForm}

				<input type="submit"
							 value="Edit Answer"
							 onClick={this.startEdit} />

      </li>
    );
  }

});

module.exports = IndexItem;
