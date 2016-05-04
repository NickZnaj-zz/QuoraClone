var React = require('react');

var RightBar = React.createClass({

  getUserTopics: function(){
    return this.props.user.topics.map(function(topic){
      return (
        <li key={topic.id} >{topic.name}</li>
      )
    });
  },

  render: function () {

    var userTopics;
		if (this.props.user && this.props.user.topics){
			userTopics =
      <div>
        <p className="profile-feeds-header">
          Things {this.props.user.username || ""} likes:
        </p>
        {this.getUserTopics()}
      </div>
		}

    return (
      <div className="rightbar-wrapper group">
        <div className="rightbar group">
          					<section className="profile-user-topics">
          						{userTopics}
          					</section>
        </div>
      </div>
    );
  }
});


module.exports = RightBar;
