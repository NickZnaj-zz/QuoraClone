var React = require('react');
var PropTypes = React.PropTypes;

var AnswerForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			body: ''
		};
	},

	_onChange: function(e){
		this.setState({body: e.target.value});
	},

	handleSubmit: function(e){
	e.preventDefault();
	// ######################################


	},

	render: function() {
		return (
			<div>This is the answer form!!!!!</div>
		);
	}

});

module.exports = AnswerForm;
