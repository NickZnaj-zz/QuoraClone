var React = require('react');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;
var SessionStore = require('../../stores/session_store');
var SearchResultsStore = require("../../stores/search_result_store");
var Modal = require('react-modal');


style = {
	overlay : {
		position        : 'fixed',
		top             : 0,
		left            : 0,
		right           : 0,
		bottom          : 0,
		backgroundColor : 'rgba(255, 255, 255, 0.75)',
		zIndex         : 10
	},
	content : {
		position        : 'fixed',
		top             : '100px',
		left            : '150px',
		right           : '150px',
		bottom          : '100px',
		border          : '1px solid #ccc',
		padding         : '20px',
		zIndex         : 11
	}
};



var QuestionFormInModal = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

	blankAttrs: {
		title: ''
	},

  getInitialState: function() {
    return (
			{ title: '',
			  user_id: SessionStore.currentUser().id,
				query: ''

			}
		);
  },

	componentWillMount: function() {
		Modal.setAppElement(document.body);
	},
	componentDidMount: function(){
		this.storeListener = SearchResultsStore.addListener(this._onChange);
	},

	componentWillUnmount: function(){
		this.storeListener.remove();
	},


  _onChange: function(e) {
		this.searchInput(e);
    if (e) this.setState({title: e.target.value});
		this.setState({results: SearchResultsStore.all()});

  },

	searchInput: function (e) {
		var query;
		if (e) {query = e.target.value;
		this.setState({ query: query }, function () {
			if (query.length >= 0) {
				this.search();
			}
		}.bind(this));}
	},

	search: function (e) {
		ApiUtil.search(this.state.query, 1);
	},

  handleSubmit: function(e){
    e.preventDefault();
    // var title = {title: this.state.title};

    ApiUtil.createQuestion(this.state, function(id) {
      this.context.router.push('/questions/' + id);
    }.bind(this));
    this.setState(this.blankAttrs);
  },

	resultLis: function () {
    return SearchResultsStore.all().map(function (result) {
      if (result._type === "Question") {
        return (
          <li key={ result.id } className="search-result-item group">
						<div className="search-result-container">
							<a href={"/#/questions/" + result.id}>
								Question: {result.title}</a>
						</div>
          </li>
        );

      } else if (result._type === "Topic") {
        return (
          <li key={ result.id } className="search-result-item group">
						<div className="search-result-container">
							<a href={"/#/topics/" + result.id}>
								Topic: {result.name}</a>
						</div>
          </li>
        );

      }	else {
        return (
          <li key={ result.id } className="search-result-item group">
						<div className="search-result-container">
							<a href={"/#/users/" + result.id}>
								Profile: {result.username}</a>
						</div>
          </li>
        );
      }
    }.bind(this));
  },

  render: function() {

    return(
      <div className="question-form">
        <form onSubmit={this.handleSubmit}>

          <input name="title"
								 type="text"
								 autofocus="autofocus"
								 onChange={this._onChange}
								 onClick={this.openModal}
								 value={this.state.title}
								 className="modal-question-input"
								 />
          <input type="submit"
								 className="question-submit"
								 value="Submit Question"
								 />
        </form>
				<ul>
					{ this.resultLis() }
				</ul>

      </div>
    );
  }
});


module.exports = QuestionFormInModal;
