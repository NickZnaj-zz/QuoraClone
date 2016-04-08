var React = require('react');
var PropTypes = React.PropTypes;
var EditTopicsList = require('../topics/edit_topics_form');

var TopicsList = React.createClass({

	getInitialState: function() {
		return {
			isEditing: false
		};
	},

	startEdit: function() {
		this.setState({ isEditing: true });
	},

	closeEdit: function() {
		this.setState({ isEditing: false });
	},



	render: function() {

		var editTopicsList;
		if (this.state.isEditing){
			editTopicsList =
			<EditTopicsList
				question={this.props.question}
				onEditEnd={this.closeEdit} />;
		}

		var topics =
		this.props.question.topics.map(function(topic) {
			return <li key={topic.id}
								 className="topic-list-item">
								 {topic.name}
							</li>;
		});


		return (
			<ul className="topic-list">
				{topics}
				{editTopicsList}
				<input type="button"
						onClick={this.startEdit}
						className="edit-topics-button"
						>
				</input>
			</ul>
		);
	}

});

module.exports = TopicsList;
