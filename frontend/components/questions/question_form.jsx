var React = require('react');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;


var QuestionForm = React.createClass({
  mixins: [History],


  
  blankAttrs: {
    title: ''
  },

  handleSubmit: function(event){
    event.PreventDefault();

    ApiUtil.createQuestion(this.state, function(id) {
      this.history.pushState(null, "/question/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function() {
    return(
      <div className="QuestionForm">
        <form onSubmit={this.handleSubmit}>

          <input type="text" />
          <input type="submit" />

        </form>

      </div>
    );
  }
});


module.exports = QuestionForm;
