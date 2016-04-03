var React = require('react');
var ApiUtil = require('../util/api_util');

var SignUpForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      email: "",
			username: "",
      password: ""
    };
  },

  render: function() {
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleSubmit}>
					<label htmlFor="username">Full Name</label>
					<input onChange={this._onUsernameChange} type="text" value={this.state.username}/>

          <label htmlFor="email">Email</label>
          <input onChange={this._onEmailChange} type="text" value={this.state.email}/>


          <label htmlFor="password">Password</label>
          <input onChange={this._onPasswordChange} type="password" value={this.state.password}/>

          <button>Submit</button>
        </form>
      </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;
		ApiUtil.signUp(this.state);
    ApiUtil.login(this.state, function() {
      router.push("/");
    });
  },

  _onEmailChange: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

  _onUsernameChange: function(e) {
    this.setState({ username: e.currentTarget.value });
  },

  _onPasswordChange: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = SignUpForm;
