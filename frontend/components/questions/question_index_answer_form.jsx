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
		body: '',

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
		var userName = SessionStore.currentUser().username;
		return (
				<form className="index-answer-form group"
							onSubmit={this.handleSubmit}
							id="answer-form"
							>

					<section className="index-user-section">
						<div className="index-user-info">
							<img className="index-user-pic"  />
							<p className="index-user-name">{userName}</p>
						</div>
					</section>

					<input type="textarea"
						className="index-answer-body"
						onChange={this._onBodyChange}
						value={this.state.body}>
					</input>

          <div className="index-submit-area group">
            <input type="submit"
							     className="index-submit-answer-button"
									 value="Submit Answer"
						/>

					<input type="button"
              onClick={this.props.onAnswerEnd}
              className="index-answer-cancel-link"
              value="Cancel">
						</input>


          </div>
        </form>
		);
	}

});

module.exports = AnswerForm;
