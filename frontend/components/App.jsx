var React = require('react');
var SessionStore = require('../stores/session_store');
var ApiUtil = require('../utils/api_util');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      currentUser: null
    };
  },

  componentDidMount: function() {
    this.sessionStoreToken = SessionStore.addListener(this.handleChange);
    this.handleChange();
  },

  componentWillUnmount: function() {
    this.sessionStoreToken.remove();
  },

  render: function () {
    var button, welcomeMessage;

    if (this.state.currentUser) {
      button = <button onClick={ApiUtil.logout}>Logout</button>;
      welcomeMessage = <h2>Shmora welcomes you, {this.state.currentUser.name}</h2>;
    }

    return (
      <div>
        {button}
        {welcomeMessage}
        <h1>Shmora</h1>
        {this.props.children}
      </div>
    );
  },

  handleChange: function() {
    if (SessionStore.isLoggedIn()) {
      this.setState({ currentUser: SessionStore.currentUser() });
    } else {
      this.context.router.push("/login");
    }
  }
});

module.exports = App;
