var React = require('react');
var QuestionForm = require('../questions/question_form');
var ApiUtil = require('../../util/api_util');
var SessionStore = require('../../stores/session_store');
var NavBarModal = require('./navbar_modal');
var SearchResults = require('../search_results');

var NavBar = React.createClass({
  render: function () {
		var currentUser = SessionStore.currentUser();
		debugger
    return (
			<div>
	      <header className="header">
	        <div className="header-nav group">
	          <a href="/#/" className="logo">Shmora</a>
	          <QuestionForm />

						<div className="navbar-buttons">
							<div className="read-wrapper">
								<img src="read.svg" className="read-icon"/>
								<a type="submit"
									href="/#/"
									className="read-view-link"
									onClick={this.beginRead}>Read</a>
							</div>

							<div className="answer-wrapper">
								<img src="answer.svg" className="answer-icon"/>
								<a type="submit"
									href="/#/answer"
									className="answer-view-link"
									onClick={this.beginAnswer}>Answer</a>
							</div>

							<div className="current-user group" >
								<div className="current-user-pic"/>
									<p className="current-user-name">{currentUser.username}</p>
									<input type="submit"
										className="logout-link"
										value="Logout"
										onClick={ApiUtil.logout}
									/>
								</div>
					  	</div>
	        </div>
	      </header>
			</div>
    );
  }
});


module.exports = NavBar;
