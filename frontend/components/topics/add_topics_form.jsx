var React = require('react');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util.js');
var TopicStore = require('../../stores/topic_store');
var SessionStore = require('../../stores/session_store');
var UserStore = require('../../stores/user_store');


var AddTopicsForm = React.createClass({
	contextTypes: {
    router: React.PropTypes.object.isRequired
	},

	// inCurrentUserTopics: function(topicName){
	// 	var userTopics = SessionStore.currentUser().topics;
	// 	function topicNames(userTopics) {
	// 		var result = [];
	// 		userTopics.forEach(function(topic) {
	// 			result.push(topic.name);
	// 		});
	// 		return result;
	// 	}
	//
	// 	return topicNames(userTopics).includes(topicName);
	// },

	getInitialState: function() {
		return {
			topics: TopicStore.all(), userTopics: []
		};
	},



	_onStoreChange: function() {
		this.setState({userTopics: this._getCurrentUserTopics()});
		this.setState({topics: TopicStore.all()});
	},

	_getCurrentUserTopics: function() {
		var topicIDs = [];
		if (SessionStore.currentUser())
			 {SessionStore.currentUser().topics.forEach(function(topic) {
				 topicIDs.push(topic.id);});}

		return topicIDs;
	},

	componentDidMount: function () {
		this.topicListener = TopicStore.addListener(this._onStoreChange);
		ApiUtil.fetchAllTopics();
		this.sessionListener = SessionStore.addListener(this._onStoreChange);
	},

	componentWillUnmount: function () {
		this.topicListener.remove();
		this.sessionListener.remove();
	},

	handleSubmit: function(e) {
		e.preventDefault();

		ApiUtil.editUser(SessionStore.currentUser(), {topic_ids: this.state.userTopics}, function(){
			this.setState({userTopics: this._getCurrentUserTopics() });
		}.bind(this));
	},

	_onCheckboxClick: function(e){
		var currentTopics = this.state.userTopics;

		if (e.currentTarget.checked && !currentTopics.includes(e.target.value)) {
			var userTopics = [].concat(parseInt(e.target.value));
			this.setState({userTopics: userTopics });
		}
	},

	render: function() {
		var topicList = this.state.topics.map(function(topic) {
			return (
				<label className="checkbox-table" key={topic.id}>
					<input
						type="checkbox"
						value={topic.id}
						key={topic.id}
						onClick={this._onCheckboxClick}
						/>
					{topic.name}
				</label>
						 );
								}.bind(this));
		return (
			<div>
				<form className="topic-selection-form group"
							onSubmit={this.handleSubmit}
				>
					<p className="form-words">Pick some topics:</p>
					<ul className="topic-list">
						{topicList}
					</ul>
					<input type="submit"
								 value="Submit!"
								 className="submit-form-choice-button"
					/>
				</form>
			</div>
		);
	}

});

module.exports = AddTopicsForm;
