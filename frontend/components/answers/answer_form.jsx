var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util.js');
var SessionStore = require('../../stores/session_store');
var ReactQuill = require('react-quill');
var Quill = require('react-quill').Quill;
var AnswerToolbar = require('./answer_toolbar');

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

	_onBodyChange: function(value){
		this.setState({body:value});
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
		console.log(this.state.body);
		return (

				<form className="answer-form group"
							onSubmit={this.handleSubmit}
							id="answer-form">

					<section className="user-section">
						<div className="user-info">
							<img className="user-pic" />
							<p className="current-user-name">{SessionStore.currentUser().username}</p>
						</div>

					<ReactQuill
						className="answer-body"
						onChange={this._onBodyChange}
						value={this.state.body}/>

				</section>




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
