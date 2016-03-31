var React = require('react');
var QuestionStore = require('../../stores/question_store.js');
var ApiUtil = require('../../util/api_util.js');

var QuestionEdit =  React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _onChange: function (e) {

    this.setState({ title: e.target.value });
    // this.setState(this.state.question.title = event.target.value );
  },

  _onStoreChange: function() {

  },

  getInitialState: function () {
    // debugger
    return { title: this.props.question.title };
    // return { title: this.state.question.title };
  },

  componentDidMount: function () {
    this.questionListener = QuestionStore.addListener(this._onStoreChange);
    // ApiUtil.fetchSingleQuestion(parseInt(this.props.params.questionId));
  },

  componentWillUnmount: function () {
    this.questionListener.remove();
  },

  handleEdit: function(event) {
    event.preventDefault();

    console.log("hit the handle EDIT");
    ApiUtil.editQuestion(this.props.question, this.state, function (question) {
      this.props.onEditEnd();
    }.bind(this));

  },

  render: function () {

    return(
      <div>
        <form className="question-edit-form group" onSubmit={this.handleEdit}>
          <input type="text"
                 className="question-update"
                 onChange={this._onChange}
                 value={this.state.title}>

          </input>
          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
});

module.exports = QuestionEdit;
