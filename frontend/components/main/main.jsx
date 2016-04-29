var React = require('react');
var QuestionsIndex = require('../questions/index');
var SideBar = require('./sidebar');


var Main = React.createClass({
  render: function () {
    return (
      <div>
        <SideBar currentUser={this.props.currentUser} />
        <div className="center-panel group">
          <div className="questions-list group">
            <QuestionsIndex />
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Main;
