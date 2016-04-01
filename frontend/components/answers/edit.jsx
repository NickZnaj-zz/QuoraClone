var React = require('react');
var PropTypes = React.PropTypes;

var AnswerEditForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			body: this.props.answer.body
		};
	},

	componentDidMount: function () {
		this.answerListener = AnswerStore.addListener(this._onStoreChange);
	},

	componentWillUnmount: function() {
		this.answerListener.remove();
	},

	_onBodyChange: function(e) {
		this.setState({ body: e.target.value });
	},

	render: function() {
		return (
			<form className="answer-form group"
						onSubmit={this.handleSubmit}
						id="answer-form"
						>

				<section className="user-section">
					<div className="user-info">
						<img className="user-pic" src="default_profile_pic.png" />
						<p>user info here</p>
					</div>
				</section>

				<input type="textarea"
					className="answer-body"
					onChange={this._onBodyChange}
					value={this.state.body}>
				</input>

				<div className="submit-area group">
					<input type="submit"
								 className="submit-answer-button"
								 value="Submit Answer"
								 />
				</div>
			</form>
		);
	}

});

module.exports = AnswerEditForm;
