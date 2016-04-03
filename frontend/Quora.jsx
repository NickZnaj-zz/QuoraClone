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

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var LoginForm = require('./components/login_form');

var SessionStore = require('./stores/session_store');
var ApiUtil = require('./util/api_util');

var routes = (
	<Route path='/' component={App} >
		<IndexRoute component={Main} onEnter={_requireLoggedIn}/>

		<Route path="questions/:questionId" component={QuestionDetail} />

		<Route path="login" component={LoginForm}/>
	</Route>

);

window.initializeApp = function() {
	ReactDOM.render(
		<Router history={hashHistory}>
			{routes}
		</Router>,
		document.getElementById('content')
	);

};


function _requireLoggedIn(nextState, replace, asyncCompletionCallback) {
		if (!SessionStore.currentUserHasBeenFetched()) {
			ApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
		} else {
			_redirectIfNotLoggedIn();
		}
		asyncCompletionCallback();
}

function _redirectIfNotLoggedIn() {
	if (!SessionStore.isLoggedIn()) {
		replace("/login");
	}
}


// var App = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <NavBar />
//         <div className="main group">
//           <RightBar />
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }
// });
// $( document ).ready(function() {
// });
