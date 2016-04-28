var React = require('react');
var QuestionForm = require('../questions/question_form');
var ApiUtil = require('../../util/api_util');
var SessionStore = require('../../stores/session_store');
var NavBarModal = require('./navbar_modal');
var SearchResults = require('../search_results');

var NavBar = React.createClass({

  componentDidMount: function() {
    this.sessionToken = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.sessionToken.remove();
  },

  _onChange: function() {
    this.render();
  },

  logout: function() {
    ApiUtil.logout();
  },

  render: function () {
		var currentUser = SessionStore.currentUser();
    return (
			<div>
	      <header className="header">
	        <div className="header-nav group">
	          <a href="/#/" className="logo"></a>
	          <QuestionForm />

						<div className="navbar-buttons">
							<div className="read-wrapper">
								<a type="submit"
									href="/#/"
									className="read-view-link"
									onClick={this.beginRead}>Read</a>
							</div>

							<div className="answer-wrapper">
								<a type="submit"
									href="/#/answer"
									className="answer-view-link"
									onClick={this.beginAnswer}>Answer</a>
							</div>

							<div className="current-user group" >
								<div className="current-user-pic"/>
									<a href={"/#/users/" + currentUser.id} className="current-user-name">{currentUser.username}</a>
								</div>
					  	</div>

              <div className="logout-link-wrapper">
                <a href="/#/login"
                  className="logout-link"
                  value="Logout"
                  onClick={this.logout}
                  >Logout</a>
              </div>
	        </div>
	      </header>
			</div>
    );
  }
});


module.exports = NavBar;
