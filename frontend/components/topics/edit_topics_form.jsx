var React = require('react');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util');
var TopicStore = require('../../stores/topic_store');

var EditTopicsForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	_onStoreChange: function() {
		this.setState({allTopics: TopicStore.all()});
	},

	getInitialState: function() {
		return {
			allTopics: TopicStore.all(),
			newTopics: this._extractIds(this.props.question.topics),
			questionTopics: this.props.question.topics
		};
	},

	componentDidMount: function() {
		this.topicListener = TopicStore.addListener(this._onStoreChange);
		ApiUtil.fetchAllTopics();
	},

	componentWillUnmount: function() {
		this.topicListener.remove();
	},

	// _onTopicChange: function(e){
	// 	this.setState({newTopics.push()})
	// },

	handleEdit: function(e){
		e.preventDefault();

		ApiUtil.editQuestion(this.props.question, {topic_ids: this.state.newTopics},
			function() {
				this.props.onEditEnd();
		}.bind(this));
	},

	_onCheckboxClick: function(e){
		if (e.currentTarget.checked) {
			var newTopics = this.state.newTopics.concat(parseInt(e.target.value));
			this.setState({newTopics: newTopics });
		} else {
			var nnewTopics = this.state.newTopics;
				nnewTopics.splice(
					nnewTopics.indexOf(e.target.value), 1);
			this.setState({newTopics: nnewTopics });

		}
	},

	_extractIds: function(arr){
		result = [];
		for (var i = 0; i < arr.length; i++){
			result.push(arr[i].id);
		}
		return result;
	},


	_hasOverlap: function(obj1, obj2){

		if (obj1.id === obj2.id){
			return true;
		}
	},

	_findUncheckedBoxes: function(topic){

	},

	render: function() {

		var topicList = this.props.question.topics.map(function(topic) {
			return (
			<label className="checkbox-table" key={topic.id}>
				<input
					type="checkbox"
					value={topic.id}
					key={topic.id}
					onClick={this._onCheckboxClick}
					defaultChecked="checked"
					/>
				{topic.name}
			</label>);
			}.bind(this));

		//
		// var qTopics = this.state.questionTopics;
		// var allTopics = this.state.allTopics;

		var otherTopics = this.state.allTopics.map(function(topic) {
			var qKeys = this._extractIds(this.state.questionTopics);
			if(!qKeys.includes(topic.id)){
				return (
				<label className="checkbox-table" key={topic.id}>
					<input
						type="checkbox"
						value={topic.id}
						key={topic.id}
						onClick={this._onCheckboxClick}
						/>
					{topic.name}
				</label>);
		}}.bind(this));
			// if (this._compareKeys(qTopics, allTopics)){
			// 	return (
			// 		<label className="checkbox-table" key={topic.id}>
			// 			<input
			// 				type="checkbox"
			// 				value={topic.id}
			// 				key={topic.id}
			// 				onClick={this._onCheckboxClick}
			// 				/>
			// 			{topic.name}
			// 		</label>);
			// 	}
			// }.bind(this));

		return (
				<form className="topic-edit-form group"
							onSubmit={this.handleEdit}>

					<ul className="topic-list">{topicList}</ul>
					<ul className="topic-list">{otherTopics}</ul>

					<input
						type="submit"
						value="Submit!"
						className="submit-form-choice-button" />

				</form>
		);
	}

});
module.exports = EditTopicsForm;
