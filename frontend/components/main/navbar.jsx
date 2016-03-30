var React = require('react');
var QuestionForm = require('../questions/question_form');

var NavBar = React.createClass({
  render: function () {
    return (
      <header>
        <div className="header-nav group">
          <div className="logo">Shmora</div>
          <QuestionForm />
        </div>
      </header>
    );
  }
});


module.exports = NavBar;
