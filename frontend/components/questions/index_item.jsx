var React = require('react');
var ApiUtil = require('../../util/api_util.js');

var IndexItem = React.createClass({
  render: function() {
		debugger
    return (
      <li className="question-list-item">
        <div className="question-index-item">
          <a href={"/#/questions/" + this.props.question.id}
						 className="question-title-index">{this.props.question.title}</a>
        </div>
					{ApiUtil.fetchAll}
				<div>
				</div>
      </li>
    );
  }
});

module.exports = IndexItem;
