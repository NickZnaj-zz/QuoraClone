var React = require('react');
var QuestionStore = require('../../stores/question_store.js');
var ApiUtil = require('../../util/api_util.js');

var QuestionEdit =  React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },



  _onChange: function (event) {

    this.setState({ title: event.target.value });
  },

  getInitialState: function () {
    // debugger
    var relevant = QuestionStore.all()[QuestionStore.all().length -1];
    return { question: relevant, title: relevant.title };
    // return { title: this.state.question.title };
  },

  componentDidMount: function () {
    this.questionListener = QuestionStore.addListener(this._onChange);
    // ApiUtil.fetchSingleQuestion(parseInt(this.props.params.questionId));
  },

  componentWillUnmount: function () {
    this.questionListener.remove();
  },

  handleEdit: function(event) {
    event.preventDefault();

    console.log("hit the handle EDIT");
    ApiUtil.editQuestion(this.state.question, function () {
      this.context.router.push('/questions/' + this.state.question.id);
    }.bind(this));

  },

  render: function () {
    if(this.state.question === undefined) { return <div></div>; }

    return(
      <div>
        <form className="question-edit" onSubmit={this.handleEdit}>
          <input type="text" className="question-update" onChange={this._onChange} value={this.state.title}>

          </input>
          <input type="submit" value="Update"  />
        </form>
      </div>
    );
  }
});

module.exports = QuestionEdit;
