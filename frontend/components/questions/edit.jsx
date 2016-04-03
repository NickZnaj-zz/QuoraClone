var React = require('react');
var QuestionStore = require('../../stores/question_store.js');
var ApiUtil = require('../../util/api_util.js');
var QuestionDetail = require('./detail');


var QuestionEdit =  React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _onTitleChange: function (e) {
    this.setState({ title: e.target.value });
  },

  _onDetailChange: function (e) {
    this.setState({ details: e.target.value });
  },

  _onStoreChange: function() {

  },

  getInitialState: function () {
    return { title: this.props.question.title, details: this.props.question.details };
    // return { title: this.state.question.title };
  },

  componentDidMount: function () {
    this.questionListener = QuestionStore.addListener(this._onStoreChange);
    // ApiUtil.fetchSingleQuestion(parseInt(this.props.params.questionId));
  },

  componentWillUnmount: function () {
    this.questionListener.remove();
  },

  handleEdit: function(e) {
    e.preventDefault();

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
                 onChange={this._onTitleChange}
                 value={this.state.title}>

          </input>
          <input type="text"
                 className="question-details-input"
                 onChange={this._onDetailChange}
                 value={this.state.details}>
          </input>
          <div className="submit-area group">
            <input type="submit" className="submit-button" value="Update" />
            <a href={"/#/questions/" + this.props.question.id}
               onClick={this.props.onEditEnd}
               className="cancel-link"
               value="Cancel">Cancel</a>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = QuestionEdit;
