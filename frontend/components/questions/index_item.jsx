var React = require('react');

var IndexItem = React.createClass({
  render: function() {
    return (
      <li className="question-list-item">
        <div className="question-index-item">
          <a href={"/#/questions/" + this.props.question.id} className="question-title-index">{this.props.question.title}</a>
        </div>
      </li>
    );
  }
});

module.exports = IndexItem;
