var React = require('react');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util.js');


var AnswerForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	blankAttrs: {
		body: ''
	},

	getInitialState: function() {
		return {
			body: '', question_id: this.props.question.id
		};
	},

	_onBodyChange: function(e){
		this.setState({body: e.target.value});
	},

	handleSubmit: function(e){
		e.preventDefault();
		var id = this.props.question.id;

		ApiUtil.createAnswer(this.state, function(id) {
			this.context.router.push('/questions/' + id);
		}.bind(this));
		this.setState(this.blankAttrs);
	},

	render: function() {
		return (
				<form className="answer-form group" onSubmit={this.handleSubmit}>
          <input type="text"
                 className="answer-body"
                 onChange={this._onBodyChange}
                 value={this.state.body}>
          </input>

          <div className="submit-area group">
            <input type="submit"
							     className="submit-button"
									 value="Submit"
									 />
          </div>

        </form>
		);
	}

});

module.exports = AnswerForm;
