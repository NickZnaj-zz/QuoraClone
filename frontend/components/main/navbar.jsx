var React = require('react');
var QuestionForm = require('../questions/question_form');
var ApiUtil = require('../../util/api_util');
var SessionStore = require('../../stores/session_store');

var NavBar = React.createClass({
  render: function () {
		var currentUser = SessionStore.currentUser();
    return (
      <header className="header">
        <div className="header-nav group">
          <a href="/#/" className="logo">Shmora</a>
          <QuestionForm />
				 <div className="current-user group" >
					 <input type="submit"
						 className="logout-link"
						 value="Logout"
						 onClick={ApiUtil.logout}/>
					 <div className="current-user-pic" />
					 <p className="current-user-name">{currentUser.username}</p>
				 </div>
        </div>
      </header>
    );
  }
});


module.exports = NavBar;
