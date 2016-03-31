var React = require('react');
var QuestionsIndex = require('../questions/index');

var Main = React.createClass({
  render: function () {
    return (
      <div className="center-panel group">
        <div className="questions-list group">
          <QuestionsIndex />
        </div>
      </div>
    );
  }
});


module.exports = Main;
