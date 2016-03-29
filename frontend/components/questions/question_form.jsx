var React = require('react');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;


var QuestionForm = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return ({title: ''});
  },

  _onChange: function(event) {
    this.setState({title: event.target.value});
  },

  blankAttrs: {
    title: ''
  },

  handleSubmit: function(event){
    event.preventDefault();

    var title = {title: this.state.title};
    ApiUtil.createQuestion(title, function(id) {
      this.history.pushState(null, "/question/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function() {
    return(
      <div className="QuestionForm">
        <form onSubmit={this.handleSubmit}>

          <input name="title" type="text" onChange={this._onChange} value={this.state.title}/>
          <input type="submit" />

        </form>

      </div>
    );
  }
});


module.exports = QuestionForm;
