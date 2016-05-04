var React = require('react');
var SessionStore = require('../../stores/session_store');
var AddTopicsForm = require('../topics/add_topics_form');

var SideBar = React.createClass({
  render: function () {
    var addTopicsForm;
    // if (this.props.currentUser && this.props.currentUser.topics.length === 0){
      addTopicsForm = <AddTopicsForm />

    return (
      <div className="sidebar group">
        {}
      </div>
    );
  }
});


module.exports = SideBar;
