var React = require('react');
var QuestionForm = require('../questions/question_form');
var ApiUtil = require('../../util/api_util');

var NavBar = React.createClass({
  render: function () {
    return (
      <header className="header">
        <div className="header-nav group">
          <a href="/#/" className="logo">Shmora</a>
          <QuestionForm />
					<input type="submit"
								 className="logout-link"
								 value="Logout"
								 onClick={ApiUtil.logout}/>
        </div>
      </header>
    );
  }
});


module.exports = NavBar;
