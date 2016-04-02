var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var TopAnswer = require('../answers/top_answer');

var IndexItem = React.createClass({
  render: function() {

    return (
      <li className="question-list-item">
        <div className="question-index-item">
          <a href={"/#/questions/" + this.props.question.id}
						 className="question-title-index">{this.props.question.title}</a>
        </div>
				<div>
					{ApiUtil.fetchAllAnswers(this.props.question.id)}
				</div>
      </li>
    );
  }
});

module.exports = IndexItem;
