var React = require('react');
var QuestionStore = require('../../stores/question_store.js');
var AnswerStore = require('../../stores/answer_store.js');

var ApiUtil = require('../../util/api_util');
var IndexItem = require('./index_item');
var QuestionForm = require('./question_form');

var QuestionsIndex = React.createClass({
  getInitialState: function() {
  return { questions: QuestionStore.all() };
},

_onChange: function() {
  this.setState({questions: QuestionStore.all() });
},

componentDidMount: function() {
  this.questionListener = QuestionStore.addListener(this._onChange);
  ApiUtil.fetchAllQuestions();
},

componentWillUnmount: function() {
  this.questionListener.remove();
},

_compareKeys: function(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		var index = arr2.find( function(obj2) {
			return this._hasOverlap(arr1[i], obj2);
		}.bind(this));
		if (index !== undefined) return true;
	}
},

_extractIds: function(arr){
	var result = [];
	arr.forEach(function (obj){
		for (var key in obj){
			if (key === "id") result.concat(obj[key]);
		}
	});
	return result;
},

_hasOverlap: function(obj1, obj2){
	if (obj1.id === obj2.id){
		return true;
	}
},

render: function() {
  return(
    <div>
      <ul className="questions">
        {this.state.questions.map(function(question) {
					var qTopics = question.topics;
					var uTopics = SessionStore.currentUser().topics;
					if (this._compareKeys(qTopics, uTopics )) {
          return <IndexItem key={question.id} question={question} />;
					}
        }.bind(this))}
      </ul>
    </div>
  );
}
});



module.exports = QuestionsIndex;
