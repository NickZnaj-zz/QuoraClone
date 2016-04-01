var React = require('react');

var IndexItem = React.createClass({

	getInitialState: function() {
		return { isEditing: false };
	},

	startEdit: function() {
		setState({ isEditing:true })
	}

  render: function() {
    return (
      <li className="answer-list-item group">

				<div className="answer-header group">
					<img className="user-pic" src="default_profile_pic.png" />
					<p className="user-info">USER INFO HERE</p>
				</div>

        <div className="answer-list-item-answer">
          {this.props.answer.body}
        </div>

				<input type="submit"
							 value="Edit Answer"
							 onClick={this.startEdit} />

      </li>
    );
  }

});

module.exports = IndexItem;
