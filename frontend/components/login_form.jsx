var React = require('react');
var ApiUtil = require('../util/api_util');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      email: "",
      password: ""
    };
  },

  render: function() {
    return (
      <div>
        <h1>Log in</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Name</label>
          <input onChange={this._onNameChange} type="text" value={this.state.email}/>

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

    ApiUtil.login(this.state, function() {
      router.push("/posts");
    });
  },

  _onNameChange: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

  _onPasswordChange: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = LoginForm;
