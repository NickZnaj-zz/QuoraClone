var React = require('react');
var QuestionStore = require('../../stores/question.js');
var ApiUtil = require('../../util/apiUtil.js');

module.exports = React.createClass({
  getStateFromStore: function () {
    return { question: QuestionStore.find(parseInt(this.props.params.questionId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
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
    if(this.state.question === undefined) { return <div></div>; }

    return(
      <div>
        <div className="question-show-page">
          <div className="question">
          </div>
        </div>
      </div>
    );
  }
});
