var React = require('react');
var AnswerStore = require('../../stores/answer_store.js');
var IndexItem = require('./index_item');

var AnswersIndex = React.createClass({
  getInitialState: function() {
    return { answers: AnswerStore.all() };
  },


  render: function() {
    return (
      <div>
        <ul className="answers">
          {this.state.answers.map(function(answer){
             return <IndexItem key={answer.id} answer={answer} />;
          })}
        </ul>
      </div>
    );
  }

});

module.exports = AnswersIndex;
