var React = require('react');
var PropTypes = React.PropTypes;
var TopicStore = require('../../stores/topic_store');
var IndexItem = require('../questions/index_item');
var ApiUtil = require('../../util/api_util');

var TopicView = React.createClass({

	getInitialState: function () {
		return (this.getStateFromStore());
	},

	getStateFromStore: function () {
		return { topic: TopicStore.find(this.props.params.topicID)};
	},

	_onChange: function() {
		this.setState(this.getStateFromStore());

	},

	componentDidMount: function() {
		this.topicListener = TopicStore.addListener(this._onChange);
		ApiUtil.fetchSingleTopic(this.props.params.topicID);
	},

	componentWillUnmount: function() {
		this.topicListener.remove();
	},

	renderQuestionsList: function() {
		if(!this.state.topic) return;
		return (
			<ul className="questions">
				{this.state.topic.questions.map(function(question){
					return <IndexItem question={question} key={question.id}/>;
				}.bind(this))}
			</ul>
		);
	},

	render: function() {

		var topicName;
		if (this.state.topic){
			topicName = this.state.topic.name;
		}

		return (
			<div>
				<div className="topic-view-topic-header">{topicName}</div>
				<div className="topic-view-question-list">
					{this.renderQuestionsList()}
				</div>
			</div>
		);
	}

});

module.exports = TopicView;
