var React = require('react');
var ReactDOM = require('react-dom');
var content = document.getElementById('content');
var QuestionsIndex = require('./components/questions/index');
var QuestionDetail = require('./components/questions/detail');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
// document.AddEventListener("DOMContentLoaded", function() {
//   ReactDOM.render(
//     <Index />,
//     document.getElementById('content')
//   );
// });


// $( document ).ready(function() {
//   ReactDOM.render(
//     <QuestionsIndex />,
//     document.getElementById('content')
//   );
// });

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1 className="logo">Shmora</h1></header>
        {this.props.children}
      </div>
    );
  }
});


var routes = (
    <Route path='/' component={App}>
      <IndexRoute component={QuestionsIndex}/>
      <Route path="questions/:questionId" component={QuestionDetail} />
    </Route>
);


$( document ).ready(function() {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('content')
  );
});
