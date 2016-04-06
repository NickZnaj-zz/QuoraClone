var React = require('react');
var SessionStore = require('../stores/session_store');
var ApiUtil = require('../util/api_util');

var RightBar = require('./main/rightbar');
var NavBar = require('./main/navbar');
var LoginForm = require('./login_form');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      // currentUser: ""
    };
  },

  componentDidMount: function() {
    this.sessionStoreToken = SessionStore.addListener(this.handleChange);
    // this.handleChange();
  },

  componentWillUnmount: function() {
    this.sessionStoreToken.remove();
  },

	handleChange: function() {
		if (SessionStore.isLoggedIn()) {
			this.setState({ currentUser: SessionStore.currentUser() });
		}
	},

  render: function () {
    var button, welcomeMessage;

    if (this.state.currentUser) {
      button = <button onClick={ApiUtil.logout}>Logout</button>;
    } else {
			var loginForm = <LoginForm />;
			return <div>{loginForm}</div>;
		}

    return (
      <div>
				<NavBar />
				{button}
				<div className="main group">
					<RightBar />
					{this.props.children}
				</div>
      </div>
    );
  },
	//
});

module.exports = App;
