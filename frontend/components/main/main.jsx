var React = require('react');
var QuestionsIndex = require('../questions/index');

var Main = React.createClass({
  render: function () {
    return (
      <header>
        <div className="main group">
          <QuestionsIndex />
        </div>
      </header>
    );
  }
});


module.exports = Main;
