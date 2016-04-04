var React = require('react');
var PropTypes = React.PropTypes;

var TopicsList = React.createClass({

	render: function() {
		var topics = this.props.question.topics.map(function(topic) {
			return <li key={topic.id}
								 className="topic-list-item">
								 {topic.name}
							</li>;
		});


		return (
			<ul className="topic-list">
				{topics}
			</ul>
		);
	}

});

module.exports = TopicsList;
