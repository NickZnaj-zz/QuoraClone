var Dispatcher = require('../dispatcher/Dispatcher'),
    TopicConstants = require('../constants/topic_constants');

var TopicActions = {
  receiveAllTopics: function(topics) {
    Dispatcher.dispatch({
      actionType: TopicConstants.TOPICS_RECEIVED,
      topics: topics
    });
  },

  receiveSingleTopic: function(topic) {
    Dispatcher.dispatch({
      actionType: TopicConstants.TOPIC_RECEIVED,
      topic: topic
    });
  },

  destroyTopic: function(id) {
    Dispatcher.dispatch({
      actionType: TopicConstants.TOPIC_DELETED,
      id: id
    });
  },

  editTopic: function(topic) {
    Dispatcher.dispatch({
      actionType: TopicConstants.TOPIC_EDITED,
      topic: topic
    });
  }
};

module.exports = TopicActions;
