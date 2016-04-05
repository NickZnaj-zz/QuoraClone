var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var QuestionEdit = require('./edit');
var AnswersIndex = require('../answers/index');
var AnswerForm = require('../answers/answer_form');
var TopicsList = require('./topics_list');

var QuestionStore = require('../../stores/question_store.js');
var UserStore = require('../../stores/user_store');


var QuestionDetail =  React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getStateFromStore: function () {
    return { question: QuestionStore.find(parseInt(this.props.params.questionId))};
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
		var submitter = UserStore.find(this.state.question.user_id);
		this.setState({submitter: submitter});
  },

	componentDidMount: function () {
		this.questionListener = QuestionStore.addListener(this._onChange);
		ApiUtil.fetchSingleQuestion(parseInt(this.props.params.questionId));

		this.userListener = UserStore.addListener(this._onChange);
		ApiUtil.fetchSingleUser(this.state.question.user_id);
	},

	componentWillUnmount: function () {
		this.userListener.remove();
		this.questionListener.remove();
	},

  getInitialState: function () {
    return this.getStateFromStore();
  },

  handleDelete: function(e) {
    e.preventDefault();

    console.log("hit the handle delete in q detail");
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

	startAnswer: function(e) {
		this.setState({ isAnswering: true });
	},

	closeAnswer: function() {
		this.setState({ isAnswering: false });
	},

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleQuestion(parseInt(newProps.params.questionId));
  },



  render: function () {

		var questionEditButton;
		if (this.state.submitter && this.state.submitter.id === SessionStore.currentUser().id){
			questionEditButton =
			<input type="submit"
						 value="Edit Question and Details"
						 onClick={this.startEdit} />;
		}

		var questionDeleteButton;
		if (this.state.submitter && this.state.submitter.id === SessionStore.currentUser().id){
			questionDeleteButton =
			<input type="submit"
						 value="Delete"
						 onClick={this.handleDelete} />;
		}

    if (!this.state.question) { return <div></div>; }
    if (this.state.isEditing) {
			return (
				<QuestionEdit
					question={this.state.question}
					onEditEnd={this.closeEdit}
				/>
		);}

		var answerForm;
		if (this.state.isAnswering) {
			answerForm = <AnswerForm
				question={this.state.question}
				onAnswerEnd={this.closeAnswer}
			/>;
		}

		var topicsList;
		if (this.state.question.topics.length > 0) {
			topicsList =
			<TopicsList
				className="question-show-topics-list"
				question={this.state.question}
			/>;

		} else {
			topicsList = <div>no topics here</div>;
		}

    return(
      <div className="question-show-page group" >

				<div className="question-detail-topic-list">
					{topicsList}
				</div>

        <div className="question-title">
          {this.state.question.title}
        </div>

        <div className="question-details">
          {this.state.question.details}
        </div>

        <div className="answers-index" >
          <AnswersIndex question={this.state.question} />
        </div>

				{answerForm}

        {questionDeleteButton}

				{questionEditButton}

				<input type="submit"
							 value="Answer"
							 onClick={this.startAnswer}
							 disabled={this.state.isAnswering}/>
      </div>
    );
  }
});

module.exports = QuestionDetail;
