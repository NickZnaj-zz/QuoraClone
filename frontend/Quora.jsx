var React = require('react');
var ReactDOM = require('react-dom');
var content = document.getElementById('content');
var QuestionsIndex = require('./components/questions/index');

// document.AddEventListener("DOMContentLoaded", function() {
//   ReactDOM.render(
//     <Index />,
//     document.getElementById('content')
//   );
// });


$( document ).ready(function() {
    ReactDOM.render(
      <QuestionsIndex />,
      document.getElementById('content')
    );
});
