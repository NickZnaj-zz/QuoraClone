var React = require('react');

var IndexItem = React.createClass({
  render: function() {
    return (
      <li className="answer-list-item">
				<p>USER INFO HERE</p>
        <div className="answer-list-item-answer">
          {this.props.answer.body}
        </div>
      </li>
    );
  }

});

module.exports = IndexItem;
