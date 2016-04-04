var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');

var TopicStore = new Store(Dispatcher);
var TopicConstants = require('../constants/topic_constants');
var _topics = {};

var resetTopics = function(topics){
  _topics = {};
  topics.forEach(function (topic){
    _topics[topic.id] = topic;
  });
};

var resetTopic = function(topic){
  _topics[topic.id] = topic;
};

var deleteTopic = function(id){
  delete _topics[id];
};

var editTopic = function(topic){
  _topics[topic.id] = topic;
};

TopicStore.all = function () {
  var topics = [];
  for (var id in _topics) {
    topics.push(_topics[id]);
  }
  return topics;
};

TopicStore.find = function(id) {
  return _topics[id];
};

TopicStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case TopicConstants.TOPICS_RECEIVED:
    resetTopics(payload.topics);
    TopicStore.__emitChange();
    break;
  case TopicConstants.TOPIC_RECEIVED:
    resetTopic(payload.topic);
    TopicStore.__emitChange();
    break;
  case TopicConstants.TOPIC_DELETED:
    deleteTopic(payload.id);
    TopicStore.__emitChange();
    break;
  case TopicConstants.TOPIC_EDITED:
    editTopic(payload.topic);
    TopicStore.__emitChange();
    break;
  }
};


window.TopicStore = TopicStore;

module.exports = TopicStore;
