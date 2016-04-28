var React = require('react');
var PropTypes = React.PropTypes;
var SearchResultsStore = require("../stores/search_result_store");
var Infinite = require('react-infinite');

var SearchResults = React.createClass({

	getInitialState: function() {
		return {
			results: SearchResultsStore.all()
		};
	},

	_onChange: function(e) {
		this.setState({results: SearchResultsStore.all() });
	},

	componentDidMount: function(){
		this.storeListener = SearchResultsStore.addListener(this._onChange);
	},

	componentWillUnmount: function(){
		this.storeListener.remove();
	},

	resultLis: function () {
		return this.state.results.map(function (result) {
			if (result._type === "Question") {
				return (
					<li key={ result.id } className="search-result-item group">
						<div className="search-result-container">
							<a href={"/#/questions/" + result.id}>
								<strong>Question</strong>: {result.title}</a>
						</div>
					</li>
				);

			} else if (result._type === "Topic") {
				return (
					<li key={ result.id } className="search-result-item group">
						<div className="search-result-container">
							<a href={"/#/topics/" + result.id}>
								<strong>Topic</strong>: {result.name}</a>
						</div>
					</li>
				);

			}	else {
				return (
					<li key={ result.id } className="search-result-item group">
						<div className="search-result-container">
							<a href={"/#/users/" + result.id}>
								<strong>Profile</strong>: {result.username}</a>
						</div>
					</li>
				);
			}
		}.bind(this));
	},

	render: function() {
		return (
			<div className="search-results group">
					<ul className="search-results-list">
						{ this.resultLis() }
					</ul>
			</div>
		);
	}

});

module.exports = SearchResults;
