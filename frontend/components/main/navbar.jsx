var React = require('react');
var QuestionForm = require('../questions/question_form');
var ApiUtil = require('../../util/api_util');
var SessionStore = require('../../stores/session_store');
var NavBarModal = require('./navbar_modal');
var SearchResults = require('../search_results');


var NavBar = React.createClass({

  getInitialState: function() {
    return {
      inReadView: false
    };
  },

  _determineState: function() {

    if (document.body.getElementsByClassName('questions')[0]){
      return true;
    } else return false;
  },

  componentDidMount: function() {
    this.sessionToken = SessionStore.addListener(this._onChange);
    this._determineState();
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
    console.log("navbar state:     " + this.state.inReadView)
		var currentUser = SessionStore.currentUser();

    var readViewLink;
    if (this.state.inReadView){
      readViewLink =
      <a type="submit"
        href="/#/"
        className="read-view-link-red"
        onClick={this.beginRead}>Read</a> //RED VERSION
    } else {
      readViewLink =
      <a type="submit"
        href="/#/"
        className="read-view-link"
        onClick={this.beginRead}>Read</a> //GREY VERSION
    }

    return (
			<div>
	      <header className="header">
	        <div className="header-nav group">
	          <a href="/#/" className="logo"></a>
	          <QuestionForm />

						<div className="navbar-buttons">
							<div className="read-wrapper">
								{readViewLink}
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
