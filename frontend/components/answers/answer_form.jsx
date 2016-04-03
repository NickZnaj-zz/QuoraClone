var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util.js');
var SessionStore = require('../../stores/session_store');

var AnswerForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	blankAttrs: {
		body: ''
	},

	getInitialState: function() {
		return {
			body: '',
			question_id: this.props.question.id,
			user_id: SessionStore.currentUser().id
		};
	},

	_onBodyChange: function(e){
		this.setState({body: e.target.value});
	},

	handleSubmit: function(e){
		e.preventDefault();
		var questionId = this.props.question.id;

		ApiUtil.createAnswer(this.state, function(answerId) {
			this.context.router.push('/questions/' + questionId);
		}.bind(this));
		this.setState(this.blankAttrs);
		this.props.onAnswerEnd();
	},

	render: function() {
		return (
				<form className="answer-form group"
							onSubmit={this.handleSubmit}
							id="answer-form"
							>

					<section className="user-section">
						<div className="user-info">
							<img className="user-pic" />
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

module.exports = AnswerForm;
