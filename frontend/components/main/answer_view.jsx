var React = require('react');
var PropTypes = React.PropTypes;
var NavBar = require('./navbar');
var RightBar = require('./rightbar');
var SideBar = require('./sidebar');
var QuestionsIndex = require('../questions/index');

var AnswerView = React.createClass({

	render: function () {
		return (
			<div>

				<SideBar />
				<div className="center-panel group">
					<div className="questions-list group">
						<QuestionsIndex />
					</div>
				</div>
			</div>
		);
	}

});

module.exports = AnswerView;
