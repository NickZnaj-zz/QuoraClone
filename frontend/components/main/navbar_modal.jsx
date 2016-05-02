var React = require('react');
var PropTypes = React.PropTypes;
var Modal = require('react-modal');
var QuestionFormInModal = require('./question_form_modal');
var SearchResults = require('../search_results');



var NavBarModal = React.createClass({
	getInitialState: function() {
    return({ modalIsOpen: false });
  },

  closeModal: function() {
    this.setState({ modalIsOpen: false });
  },

  openModal: function() {
    this.setState({ modalIsOpen: true });
  },

	componentWillMount: function() {
		 Modal.setAppElement(document.body);
	},

	render: function() {
		return (
		<div className="container">
			<header className="header">
        <div className="header-nav group">
          <a href="/#/main/" className="logo">Shmora</a>
          <QuestionFormInModal />
					<SearchResults />
        </div>
      </header>
		</div>
		);
	}

});

module.exports = NavBarModal;
