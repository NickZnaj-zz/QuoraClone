var React = require('react');
var QuestionForm = require('../questions/question_form');

var NavBar = React.createClass({
  render: function () {
    return (
      <header className="header">
        <div className="header-nav group">
          <a href="/#/" className="logo">Shmora</a>
          <QuestionForm />
        </div>
      </header>
    );
  }
});


module.exports = NavBar;
