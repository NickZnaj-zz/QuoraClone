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
			this.context.router.push('/main/questions/' + questionId);
		}.bind(this));
		this.setState(this.blankAttrs);
		this.props.onAnswerEnd();
	},

	componentDidMount: function() {
		var editor = document.getElementById('editor');
		var toolbar = document.getElementById('toolbar');

		var quill = new Quill(editor, {
			theme: 'snow'
		});
		quill.addModule('toolbar', { container: toolbar });
		quill.addModule('image-tooltip', true);
		quill.addModule('link-tooltip', true);

		quill.on('text-change', function(delta, source) {
			this._onBodyChange(quill.getHTML());
		}.bind(this));
	},

	render: function() {



		return (

				<form className="answer-form group"
							onSubmit={this.handleSubmit}
							id="answer-form">

					<section className="user-section">
						<div className="user-info">
							<img className="user-pic" />
							<p className="current-user-name">{SessionStore.currentUser().username}</p>
						</div>

				</section>





					<div>

						    <div id="toolbar">
									      <span className="ql-format-group">

									        </span>
									        <span className="ql-format-group">
									          <span title="Bold" className="ql-format-button ql-bold"></span>
									          <span className="ql-format-separator"></span>
									          <span title="Italic" className="ql-format-button ql-italic"></span>
									          <span className="ql-format-separator"></span>
									          <span title="Underline" className="ql-format-button ql-underline"></span>
									          <span className="ql-format-separator"></span>
									          <span title="Strikethrough" className="ql-format-button ql-strike"></span>
									          <span className="ql-format-separator"></span>
									        </span>
									        <span className="ql-format-group">
									          <select title="Text Color" className="ql-color">
									            <option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)" selected=""></option>
									            <option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)"></option>
									            <option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)"></option>
									            <option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)"></option>
									            <option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)"></option>
									            <option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)"></option>
									            <option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)"></option>
									            <option value="rgb(255, 255, 255)" label="rgb(255, 255, 255)"></option>
									            <option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)"></option>
									            <option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)"></option>
									            <option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)"></option>
									            <option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)"></option>
									            <option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)"></option>
									            <option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)"></option>
									            <option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)"></option>
									            <option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)"></option>
									            <option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)"></option>
									            <option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)"></option>
									            <option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)"></option>
									            <option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)"></option>
									            <option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)"></option>
									            <option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)"></option>
									            <option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)"></option>
									            <option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)"></option>
									            <option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)"></option>
									            <option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)"></option>
									            <option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)"></option>
									            <option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)"></option>
									            <option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)"></option>
									            <option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)"></option>
									            <option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)"></option>
									            <option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)"></option>
									            <option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)"></option>
									            <option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)"></option>
									            <option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)"></option>
									          </select>
									          <span className="ql-format-separator"></span>
									          <select title="Background Color" className="ql-background">
									            <option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)"></option>
									            <option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)"></option>
									            <option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)"></option>
									            <option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)"></option>
									            <option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)"></option>
									            <option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)"></option>
									            <option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)"></option>
									            <option value="rgb(255, 255, 255)" label="rgb(255, 255, 255)" selected=""></option>
									            <option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)"></option>
									            <option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)"></option>
									            <option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)"></option>
									            <option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)"></option>
									            <option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)"></option>
									            <option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)"></option>
									            <option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)"></option>
									            <option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)"></option>
									            <option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)"></option>
									            <option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)"></option>
									            <option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)"></option>
									            <option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)"></option>
									            <option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)"></option>
									            <option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)"></option>
									            <option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)"></option>
									            <option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)"></option>
									            <option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)"></option>
									            <option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)"></option>
									            <option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)"></option>
									            <option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)"></option>
									            <option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)"></option>
									            <option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)"></option>
									            <option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)"></option>
									            <option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)"></option>
									            <option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)"></option>
									            <option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)"></option>
									            <option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)"></option>
									          </select>
									        </span>
									        <span className="ql-format-group">
									          <span title="List" className="ql-format-button ql-list"></span>
									          <span className="ql-format-separator"></span>
									          <span title="Bullet" className="ql-format-button ql-bullet"></span>
									          <span className="ql-format-separator"></span>
									          <select title="Text Alignment" className="ql-align">
									            <option value="left" label="Left" selected=""></option>
									            <option value="center" label="Center"></option>
									            <option value="right" label="Right"></option>
									            <option value="justify" label="Justify"></option>
									          </select>
									        </span>
  												<span className="ql-format-separator"></span>
													<span title="Image" className="ql-format-button ql-image"></span>
													<span className="ql-format-separator"></span>
													<span title="Link" className="ql-format-button ql-link"></span>

    </div>



						<div id="editor">

						</div>
						<div className="submit-area group">
							<input type="submit"
								className="submit-answer-button"
								value="Submit Answer"
								/>
						</div>

					</div>
				</form>
		);
	}

});

module.exports = AnswerForm;
