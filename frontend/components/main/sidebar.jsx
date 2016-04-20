var React = require('react');
var SessionStore = require('../../stores/session_store');
var AddTopicsForm = require('../topics/add_topics_form');

var SideBar = React.createClass({
  render: function () {
    return (
      <div className="sidebar group">
				{/*<div>{SessionStore.currentUser().topics}</div>*/}
				<AddTopicsForm />
      </div>
    );
  }
});


module.exports = SideBar;
