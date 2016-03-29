var React = require('react');


var IndexItem = React.createClass({
  render: function() {
    return (
      <li className="question-list-item">
        <h3>{this.props.question.title}</h3>
      </li>
    );
  }
});

module.exports = IndexItem;
