var React = require('react');
var SessionStore = require('../../stores/session_store');

var SideBar = React.createClass({
  render: function () {
		debugger
    return (
      <div className="sidebar group">
				<div>{SessionStore.currentUser().topics}</div>
      </div>
    );
  }
});


module.exports = SideBar;
