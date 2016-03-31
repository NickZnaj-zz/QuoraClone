var React = require('react');

var IndexItem = React.createClass({

  render: function() {
    return (
      <li className="answer-list-item">
        <div className="answer-list-item-answer">
          {this.props.answer.body}
        </div>
      </li>
    );
  }

});

module.exports = IndexItem;
