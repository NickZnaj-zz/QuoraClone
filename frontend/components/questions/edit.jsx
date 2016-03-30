var React = require('react');
var QuestionStore = require('../../stores/question_store.js');
var ApiUtil = require('../../util/api_util.js');

var QuestionEdit =  React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },



  _onChange: function (event) {

    this.setState({ title: this.state.question.title + event.target.value });
  },

  getInitialState: function () {
    debugger
    return { question: QuestionStore.all()[QuestionStore.all().length -1] };
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
    ApiUtil.editQuestion(this.state.question.id, function () {
      this.context.router.push('/questions/' + this.state.question.id);
    }.bind(this));

  },

  render: function () {
    if(this.state.question === undefined) { return <div></div>; }

    return(
      <div>
        <form className="question-edit" onSubmit={this.handleEdit}>
          <input type="text" className="question-update" value={this.state.question.title} onChange={this._onChange} />
          <input type="submit" value="Update"  />
        </form>
      </div>
    );
  }
});

module.exports = QuestionEdit;
