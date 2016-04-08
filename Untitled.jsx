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
			<div className="login-screen">
	      <div className= "login-page">
	        <h1 className="login-message">Sign Up</h1>

	        <form onSubmit={this.handleSubmit} className="login-form group">
						<div className="traditional-login group">

							<div className="login-field">
										<label htmlFor="email" className="login-form-label">Email</label>
					          <input
											onChange={this._onEmailChange}
											type="text"
											value={this.state.email}
											className="login-form-input"/>
							</div>

							<div className="login-field">
										<label htmlFor="password" className="login-form-label">Password</label>
				          <input
										onChange={this._onPasswordChange}
										type="password"
										value={this.state.password}
										className="login-form-input"/>
							</div>
								<input
									className="login-form-button"
									type="button"
									value="No account? Sign Up!"/>
						</div>


						<div className="o-auth-buttons">
							<a className="google-button" href="#">
								<span className="google-button-text">Continue with Google</span>
							</a>
							<a className="facebook-button" href="#">
								<span className="facebook-button-text">Continue with Facebook</span>
							</a>
						</div>

	        </form>
	      </div>
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
