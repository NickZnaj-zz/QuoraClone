var React = require('react');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util.js');
var TopicStore = require('../../stores/topic_store');
var SessionStore = require('../../stores/session_store');

var TopicModal = React.createClass({

  getInitialState: function() {
		return {
			topics: TopicStore.all(), userTopics: []
		};
	},



	_onStoreChange: function() {
		this.setState({topics: TopicStore.all()});
	},

	componentDidMount: function () {
		this.topicListener = TopicStore.addListener(this._onStoreChange);
		ApiUtil.fetchAllTopics();
	},

	componentWillUnmount: function () {
		this.topicListener.remove();
	},

	handleSubmit: function(e) {
		e.preventDefault();

		ApiUtil.editUser(this.props.currentUser, {topic_ids: this.state.userTopics}, function(){
			this.setState({userTopics: this.props.currentUser.topics });
		}.bind(this));
	},

	_onCheckboxClick: function(e){
    console.log(e.target.value)
    console.log(e.currentTarget.checked)
		var currentTopics = this.state.userTopics;
    var target = parseInt(e.target.value);

		if (e.currentTarget.checked && !currentTopics.includes(target)) {
			var userTopics = this.state.userTopics.concat(target);
			this.setState({userTopics: userTopics });
		}

    else if (currentTopics.includes(target)) {
      var deleted = this.state.userTopics.indexOf(target)
      this.state.userTopics.splice(deleted, 1);
      var userTopics = this.state.userTopics;
      this.setState({userTopics: userTopics });

    }
	},

  render: function() {
    console.log("current topics:  " + this.state.userTopics);
    var topicList = this.state.topics.map(function(topic) {
      var pleaseWork = require('../../../app/assets/images/' + topic.name + '.png');
      debugger
        return (
          <li className="topic-item-wrapper group" key={topic.id}>
            <label className="checkbox-table-topic-modal" key={topic.id}>
              <input
                className="checkbox-topic-modal"
                type="checkbox"
                value={topic.id}
                onClick={this._onCheckboxClick}
                />
              <div className="topic-name" value={topic.name}>{topic.name}</div>
              <img src={pleaseWork} />
            </label>
          </li>
        );
    }.bind(this));

    return (
  			<div className="topic-modal-wrapper">
  				<form className="topic-modal group"
  							onSubmit={this.handleSubmit}
  				>
  					<p className="form-words-topic-modal">Pick some topics:</p>
  					<ul className="topic-list-topic-modal group">
  						{topicList}
  					</ul>
            <div className="button-wrapper-topic-modal">
              <input type="submit"
                value="Submit!"
                className="submit-button-topic-modal"/>
            </div>
  				</form>
  			</div>
    );
  }

});

module.exports = TopicModal;
