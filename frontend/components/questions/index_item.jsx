var React = require('react');

var IndexItem = React.createClass({
  render: function() {
    return (
      <li className="question-list-item">
        <div className="question-index-item">
          <h3 className="question-title-index">{this.props.question.title}</h3>
        </div>
      </li>
    );
  }
});

module.exports = IndexItem;
