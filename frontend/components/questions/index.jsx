var React = require('react');
var QuestionStore = require('../../stores/question_store.js');
var UserStore = require('../../stores/user_store');
var SessionStore = require('../../stores/session_store');
var ApiUtil = require('../../util/api_util');
var IndexItem = require('./index_item');
var QuestionForm = require('./question_form');
var Infinite = require('react-infinite');


var QuestionsIndex = React.createClass({
  getInitialState: function() {
  return { questions: QuestionStore.all() };
},

_onChange: function() {
  this.setState({questions: QuestionStore.all() });
},

_onSessionStoreChange: function() {
	this.setState({currentUserTopics: []});
},

componentDidMount: function() {
  this.questionListener = QuestionStore.addListener(this._onChange);
  ApiUtil.fetchAllQuestions();
	this.sessionListener = UserStore.addListener(this._onSessionStoreChange);
},

componentWillUnmount: function() {
  this.questionListener.remove();
	this.sessionListener.remove();
},

_compareKeys: function(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		var index = arr2.find( function(obj2) {
			return this._hasOverlap(arr1[i], obj2);
		}.bind(this));
		if (index !== undefined) return true;
	}
},

_hasOverlap: function(obj1, obj2){

	if (obj1.id === obj2.id){
		return true;
	}
},

render: function() {
  return(
    <div>
      <Infinite containerHeight={600} elementHeight={40} useWindowAsScrollContainer>
      <ul className="questions">

          {this.state.questions.map(function(question) {
  					var qTopics = question.topics;

  					var uTopics = [];
  					if (SessionStore.currentUser() &&
  							SessionStore.currentUser().topics &&
  							SessionStore.currentUser().topics.length > 0) {
  						uTopics = SessionStore.currentUser().topics;
  					}

  					if (this._compareKeys(qTopics, uTopics)) {
            return <IndexItem key={question.id} question={question} />;
  					}
          }.bind(this))}
      </ul>
    </Infinite>
    </div>
  );
}
});



module.exports = QuestionsIndex;
