var React = require('react');
var QuestionStore = require('../../stores/question_store.js');
var ApiUtil = require('../../util/api_util.js');
var QuestionEdit = require('./edit');
var AnswersIndex = require('../answers/index');

var QuestionDetail =  React.createClass({
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

  handleDelete: function(event) {
    event.preventDefault();

    console.log("hit the handle");
    ApiUtil.destroyQuestion(this.state.question.id, function () {
      this.context.router.push('/');
    }.bind(this));

  },

  startEdit: function(event) {
    event.preventDefault();
    console.log("hit handleEdit");

    this.setState({ isEditing: true });
  },

  closeEdit: function() {
    this.setState({ isEditing: false });
  },
  // fetchDetails: function (props) {
  //   // if you want to factor out the ApiUtil call
  // },

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



  render: function () {
    if (!this.state.question) { return <div></div>; }
    if (this.state.isEditing) { return ( <QuestionEdit question={this.state.question} onEditEnd={this.closeEdit}/> ); }

    else{
      return(
        <div className="question-show-page group" onSubmit={this.handleDelete}>

          <div className="question">
            {this.state.question.title}
          </div>

          <div className="question-details">
            {this.state.question.details}
          </div>

          <div className="answers-index" >
            <AnswersIndex question={this.state.question} />
          </div>

          <input type="submit" value="Delete" onClick={this.handleDelete} />
          <input type="submit" value="Edit Question and Details" onClick={this.startEdit} />
        </div>
      );
    }
  }
});

module.exports = QuestionDetail;
