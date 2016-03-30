var React = require('react');
var QuestionStore = require('../../stores/question_store.js');
var ApiUtil = require('../../util/api_util.js');

var QuestionEdit =  React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getStateFromStore: function () {
    return { question: QuestionStore.find(parseInt(this.props.params.questionId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleQuestion(parseInt(newProps.params.questionId));
  },

  componentDidMount: function () {
    this.questionListener = QuestionStore.addListener(this._onChange);
    ApiUtil.fetchSingleQuestion(parseInt(this.props.params.questionId));
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
        <div className="question-show-page" onSubmit={this.handleEdit}>
          <div className="question">
            {this.state.question.title}
          </div>
          <input type="text" className="question-update" value={this.state.question.title} />
          <input type="submit" value="Update" onClick={this.handleEdit} />
        </div>
      </div>
    );
  }
});

module.exports = QuestionEdit;
