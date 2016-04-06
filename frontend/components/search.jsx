var React = require("react");
var SearchResultsStore = require("./../stores/search_result_store");
var ApiUtil = require('../util/api_util');

var Search = React.createClass({

  getInitialState: function () {
    return { query: "" };
  },

  componentDidMount: function () {
    this.storeListener = SearchResultsStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.storeListener.remove();
  },

  _onChange: function () {
    this.setState({results: SearchResultsStore.all()});
  },

  handleInputChange: function (e) {
    var query = e.currentTarget.value;
    this.setState({ query: query }, function () {
      if (query.length > 2) {
        this.search();
      }
    }.bind(this));
  },

  search: function (e) {
    ApiUtil.search(this.state.query, 1);
  },

  nextPage: function () {
    var meta = SearchResultsStore.meta();
    ApiUtil.search(meta.query, meta.page + 1);
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

  render: function () {
    var meta = SearchResultsStore.meta();
    return (
      <article className="search-result-list group">
        <input type="text" onChange={ this.handleInputChange } />
        <button
					className="search-button"
					onClick={ this.search }>
					GO
				</button>
        <ul>
          { this.resultLis() }
        </ul>
      </article>
    );
  }

});

module.exports = Search;
