var React = require('react');
var ReactDOM = require('react-dom');

var content = document.getElementById('content');

var QuestionsIndex = require('./components/questions/index');
var QuestionDetail = require('./components/questions/detail');
var NavBar = require('./components/main/navbar');
var SideBar = require('./components/main/sidebar');
var Main = require('./components/main/main');
var RightBar = require('./components/main/rightbar');
var App = require('./components/App');
var AnswerView = require('./components/questions/index_answer_view');
var TopicView = require('./components/topics/topic_view');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var LoginForm = require('./components/login_form');

var SessionStore = require('./stores/session_store');
var ApiUtil = require('./util/api_util');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={App} onEnter={_requireLoggedIn} >
			<IndexRoute component={Main} />
			<Route path="answer" component={AnswerView} />
			<Route path="topics/:topicID" component={TopicView} />
			<Route path="questions/:questionId" component={QuestionDetail} />

		</Route>
		<Route path="/login" component={LoginForm}/>
	</Router>
);

window.initializeApp = function() {
	ReactDOM.render(
		routes,
		document.getElementById('content')
	);

};

function _requireLoggedIn(nextState, replace, asyncCompletionCallback) {
	function _redirectIfNotLoggedIn() {
		if (!SessionStore.isLoggedIn()) {
			replace("/login");
		}
	}
		if (!SessionStore.currentUserHasBeenFetched()) {
			ApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
		} else {
			_redirectIfNotLoggedIn();
		}
		asyncCompletionCallback();
}
