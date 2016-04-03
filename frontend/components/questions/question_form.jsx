var React = require('react');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;
var SessionStore = require('../../stores/session_store');

var QuestionForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return (
			{ title: '',
			  user_id: SessionStore.currentUser().id
			}
		);
  },

  _onChange: function(e) {
    this.setState({title: e.target.value});
  },

  blankAttrs: {
    title: ''
  },

  handleSubmit: function(e){
    e.preventDefault();
    // var title = {title: this.state.title};

    ApiUtil.createQuestion(this.state, function(id) {
      this.context.router.push('/questions/' + id);
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function() {
    return(
      <div className="question-form">
        <form onSubmit={this.handleSubmit}>

          <input name="title"
								 type="text"
								 onChange={this._onChange}
								 value={this.state.title}
								 className="nav-bar-input"
								 />
          <input type="submit"
								 className="question-submit"
								 value="Submit Question"
								 />
        </form>

      </div>
    );
  }
});


module.exports = QuestionForm;
