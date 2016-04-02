var React = require('react');
var PropTypes = React.PropTypes;
var ApiUtil = require('../../util/api_util.js');


var TopAnswer = React.createClass({

	render: function() {
		if (this.props.question.answers.length === 0) { return<div></div>; }

		return (
			<div>top answer: {this.props.question.answers[0].body}</div>
		);
	}

});

module.exports = TopAnswer;
