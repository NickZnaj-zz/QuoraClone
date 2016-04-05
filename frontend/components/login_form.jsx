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
      <div>
				<div className="login-form group">
	        <h1>Log in</h1>

	        <form onSubmit={this.handleSubmit}>
	          <label htmlFor="email">Email</label>
	          <input onChange={this._onEmailChange} type="text" value={this.state.email}/>

	          <label htmlFor="password">Password</label>
	          <input onChange={this._onPasswordChange} type="password" value={this.state.password}/>

	          <button>Submit</button>
	        </form>
					<input type="button"
								 value="No account? Sign up!"
								 className="sing-up-link"
								 onClick={this.startSignUp}
					/>
				</div>
      </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;

    ApiUtil.login(this.state, function() {
      router.push("/");
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
