var React = require('react');
var AnswerStore = require('../../stores/answer_store.js');
var IndexItem = require('./index_item');
var AnswerFeedItem = require('./profile_answer_feed_item');
var ApiUtil = require('../../util/api_util');
var Infinite = require('react-infinite');

var AnswersIndex = React.createClass({
  getInitialState: function() {
    return { answers: AnswerStore.all() };
  },

  // getStateFromStore: function () {
  //   return { answers: AnswerStore.find(parseInt(this.props.params.answerId)) };
  // },

	_onChange: function() {
		this.setState({ answers: AnswerStore.all() });
	},

  componentDidMount: function() {
    this.answerListener = AnswerStore.addListener(this._onChange);
    if (this.props.question) {
      ApiUtil.fetchAllAnswers(this.props.question.id);
    }
  },

	componentWillUnmount: function() {
	  this.answerListener.remove();
	},

	answerCount : function() {
		if (this.state.answers.length === 0) return "No Answers";
		if (this.state.answers.length === 1) return "1 Answer";
		else return (this.state.answers.length + ' Answers');
	},

	userAnswerCount : function() {
		if (this.props.answers.length === 0) return "No Answers";
		if (this.props.answers.length === 1) return "1 Answer";
		else return (this.props.answers.length + ' Answers');
	},

  renderAnswerList: function() {
      return this.props.answers.map(function(answer){
       return <div key={answer.id} className="answer-feed-box">
         <a href={"/#/main/questions/" + answer.question.id}
           className="question-title-index">
           {answer.question.title}
         </a>

         <AnswerFeedItem key={answer.id}
           answer={answer}
           submitter={this.props.submitter}
           />
       </div>;
          }.bind(this))
  },

  render: function() {
    if (!this.state.answers  && !this.props.answers) return <div></div>;

    //IF RENDERED AS A PROFILE ANSWERS FEED
    if (this.props.answers) {


      return (
        <div className="answers-index group">
  				<p className="answers-feed-count">{this.userAnswerCount()}</p>
            <Infinite containerHeight={600} elementHeight={40} useWindowAsScrollContainer>
              <ul className="answers">
                {this.renderAnswerList()}
              </ul>
            </Infinite>
        </div>
      );
    }

    // IF RENDERED ON QUESTION DETAIL PAGE
    else {
      return (
        <div className="answers-index group">
  				<p className="answers-count">{this.answerCount()}</p>
          <ul className="answers">
            {this.state.answers.map(function(answer){
               return <IndexItem key={answer.id}
                                 id={answer.id}
  							 								 answer={answer}
  															 submitter={answer.user}

  										/>;
  								}.bind(this))}
          </ul>
        </div>
      );
    }
  }

});

module.exports = AnswersIndex;
