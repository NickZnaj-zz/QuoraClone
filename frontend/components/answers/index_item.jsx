var React = require('react');
var AnswerEditForm = require('./edit');
var ApiUtil = require('../../util/api_util.js');


var IndexItem = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},


	getInitialState: function() {
		return { isEditing: false, answer: this.props.answer };
	},

	startEdit: function() {
		this.setState({ isEditing: true });
	},

	closeEdit: function() {
		this.setState({ isEditing: false });
	},

	handleDelete: function(e) {
		e.preventDefault();

		console.log("hit the handleDelete~~~");
		ApiUtil.destroyAnswer(this.props.answer.id, function(){
			this.context.router.push('/questions/' + this.props.answer.question_id);
		}.bind(this));
		this.props.onDelete();

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
					<p className="user-info">USER INFO HERE</p>
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
