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
			<div className="sign-up-screen">
	      <div className= "sign-up-page">
	        <h1 className="sign-up-message">Sign Up</h1>

	        <form onSubmit={this.handleSubmit} className="sign-up-form group">
						<div className="traditional-sign-up group">
							<div className="sign-up-field">
									<label htmlFor="username" className="sign-up-form-label">Full Name</label>
										<input
											onChange={this._onUsernameChange}
											type="text"
											value={this.state.username}
											className="sign-up-form-input"/>
							</div>
							<div className="sign-up-field">
										<label htmlFor="email" className="sign-up-form-label">Email</label>
					          <input
											onChange={this._onEmailChange}
											type="text"
											value={this.state.email}
											className="sign-up-form-input"/>
							</div>
							<div className="sign-up-field">
										<label htmlFor="password" className="sign-up-form-label">Password</label>
				          <input
										onChange={this._onPasswordChange}
										type="password"
										value={this.state.password}
										className="sign-up-form-input"/>
							</div>
								<button type="submit" className="sign-up-form-button">Submit</button>
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
      console.log("LOGGED IN");
      router.push("/main");
      document.location.reload(true);
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
