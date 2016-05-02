var React = require('react');
var ApiUtil = require('../util/api_util');
var SignUpForm = require('./sign_up_form');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      email: "",
      password: "",
			signingUp: false
    };
  },

	startSignUp: function(){
		this.setState({signingUp: true});
	},

  render: function() {
		if (this.state.signingUp) {
			return (
				<SignUpForm/>
			);
		}

		return (
			<div className="login-screen">
	      <div className= "login-page">
	        <h1 className="login-message">Log In</h1>

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
								<div className="login-form-button-group">

									<button type="submit" className="login-button">Submit</button>

										<input
											className="login-form-button"
											type="button"
											value="No account?"
											onClick={this.startSignUp}/>
									</div>
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

    ApiUtil.login(this.state, function() {
      console.log("LOGGED IN")
      router.push("/main");
      document.location.reload(true);

    });
  },

  _onEmailChange: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

  _onPasswordChange: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = LoginForm;
