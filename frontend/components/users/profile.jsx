var React = require('react');
var PropTypes = React.PropTypes;
var SessionStore = require('../../stores/session_store');
var QuestionStore = require('../../stores/question_store');
var UserStore = require('../../stores/user_store');
var ApiUtil = require('../../util/api_util');
var AnswersIndex = require('../answers/index');
var QuestionIndexItem = require('../questions/index_item');
var Infinite = require('react-infinite');


var UserDetail = React.createClass({

	getInitialState: function() {
		return ({
			currentUser: SessionStore.currentUser(),
			user: this.getUserFromStore(),
			viewingFeed: "answers"
		});
	},

	getUserFromStore: function() {

		return { user: UserStore.find(this.props.params.userID) };
	},

	_onChange: function() {
		// this.setState(this.getStateFromStore());
		var question = QuestionStore
		var user = UserStore.find(this.props.params.userID);
		this.setState({user: user});
	},

	componentDidMount: function() {
		this.sessionStoreToken = SessionStore.addListener(this._onChange);
		this.userStoreToken = UserStore.addListener(this._onChange);

		ApiUtil.fetchSingleUser(this.props.params.userID);

		this.questionStoreToken = QuestionStore.addListener(this._onChange);

	},

	componentWillUnmount: function() {
		this.sessionStoreToken.remove();
		this.userStoreToken.remove();
		this.questionStoreToken.remove();
	},

	handleFileChange: function (e) {
    var file = e.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      var result = reader.result;
      this.setState({ imageFile: file, imageUrl: result });
    }.bind(this);

    reader.readAsDataURL(file);
  },

	handleSubmit: function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("currentUser[image]", this.state.imageFile);

    ApiUtil.editUser(SessionStore.currentUser(), formData, function (){
			this.setState({currentUser: SessionStore.currentUser()});
		});
  },

	viewAnswers: function() {
		this.setState({viewingFeed: "answers"});
	},

	viewQuestions: function() {
		this.setState({viewingFeed: "questions"});
	},

	getQuestionBody: function(id) {

	},

	getQuestionFeed: function() {
		return this.state.user.questions.map(function(question) {
			return <QuestionIndexItem key={question.id}
																question={question} />;
		}.bind(this))
	},

	render: function() {

		var answerFeed;
		if (this.state.user.answers && this.state.viewingFeed === "answers") {
			answerFeed =
				<AnswersIndex className="profile-answer-feed"
					 						answers={this.state.user.answers}
											submitter={this.state.user}/>
		}

		var questionFeed;
		if (this.state.user.questions && this.state.viewingFeed === "questions") {
			questionFeed =
			<div>
				<p className="questions-feed-count">{this.state.user.questions.length + " Questions"}</p>
				<ul className="profile-question-feed">
					{this.getQuestionFeed()}
				</ul>
			</div>
		}

		var answerFeedButton;
		if (this.state.viewingFeed !== "answers"){
			answerFeedButton =
			<li >
				<a className="profile-feeds-list-item" onClick={this.viewAnswers}>Answers</a>
			</li>
		} else {
			answerFeedButton =
			<li className="profile-feeds-list-item-clicked">Answers</li>
		}

		var questionFeedButton;
		if (this.state.viewingFeed !== "questions"){
			questionFeedButton =
			<li>
				<a className="profile-feeds-list-item" onClick={this.viewQuestions}>Questions</a>
			</li>
		} else {
			questionFeedButton =
			<li className="profile-feeds-list-item-clicked">Questions</li>
		}

		return (
			<div>
				<section className="profile-user-section">
					<div className="profile-user-pic">
						<img className="profile-user-pic" />
					</div>
					<div className="profile-user-info">
						<p className="profile-user-name">{this.state.user.username}</p>
					</div>
				</section>

				<section className="profile-bottom group">
					<section className="profile-feeds">
						<p className="profile-feeds-header">Feeds</p>
						<ul className="profile-feeds-list group">

							{answerFeedButton}

							{questionFeedButton}


						</ul>
					</section>

					<section className="profile-feed-items">
						{answerFeed}
						{questionFeed}

					</section>
				</section>


				<form onSubmit={this.handleSubmit}>
					<label>Profile Picture
						<input
							type="file"
							onChange={this.handleFileChange}/>
					</label>
					<input type="submit" value="Upload Photo" />
				</form>

				<p>Preview:</p>
				<img className="preview-image" src={this.state.imageUrl} />
			</div>
		);
	}

});

module.exports = UserDetail;
