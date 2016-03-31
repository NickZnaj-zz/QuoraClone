var React = require('react');
var ReactDOM = require('react-dom');

var content = document.getElementById('content');
var QuestionsIndex = require('./components/questions/index');
var QuestionDetail = require('./components/questions/detail');
var NavBar = require('./components/main/navbar');
var SideBar = require('./components/main/sidebar');
var Main = require('./components/main/main');
var RightBar = require('./components/main/rightbar');


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;


var App = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar />
        <div className="main group">
          <RightBar />
          {this.props.children}
        </div>
      </div>
    );
  }
});

var routes = (
    <Route path='/' component={App}>
      <IndexRoute component={Main}/>
      <Route path="questions/:questionId" component={QuestionDetail} />
    </Route>
);

$( document ).ready(function() {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('content')
  );
});
