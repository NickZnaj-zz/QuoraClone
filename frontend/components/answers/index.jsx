var React = require('react');
var AnswerStore = require('../../stores/answer_store.js');
var IndexItem = require('./index_item');
var ApiUtil = require('../../util/api_util');

var AnswersIndex = React.createClass({
  getInitialState: function() {
    return { answers: AnswerStore.all() };
  },

  // getStateFromStore: function () {
  //   return { answers: AnswerStore.find(parseInt(this.props.params.answerId)) };
  // },

	_onChange: function() {
		this.setState({answers: AnswerStore.all() });
	},

  componentDidMount: function() {
    this.answerListener = AnswerStore.addListener(this._onChange);
    ApiUtil.fetchAllAnswers(this.props.question.id);
  },

	componentWillUnmount: function() {
	  this.answerListener.remove();
	},

	answerCount : function() {
		if (this.state.answers.length === 0) return "No Answers";
		if (this.state.answers.length === 1) return "1 Answer";
		else return (this.state.answers.length + ' answers');
	},

  render: function() {

    if (!this.state.answers) { return <div></div>; }
    return (
      <div>
				<p className="answers-count">{this.answerCount()}</p>
        <ul className="answers">
          {this.state.answers.map(function(answer){
             return <IndexItem key={answer.id}
							 								 answer={answer}
															 onDelete={this._onChange}
										/>;
          })}
        </ul>
      </div>
    );
  }

});

module.exports = AnswersIndex;
