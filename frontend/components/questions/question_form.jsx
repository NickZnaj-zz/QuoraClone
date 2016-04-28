var React = require('react');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;
var SessionStore = require('../../stores/session_store');
var NavBarModal = require('../main/navbar_modal');
var Modal = require('react-modal');


style = {
	overlay : {
		position        : 'fixed',
		top             : 0,
		left            : 0,
		right           : 0,
		bottom          : 0,
		backgroundColor : 'rgba(0, 0, 0, 0.75)',
		zIndex         : 10
	},
	content : {
		position        : 'relative',
		top             : '0px',
		left            : '0px',
		right           : '0px',
		bottom          : '200px',
		border          : '1px solid #ccc',
		// padding         : '20px',
		zIndex         : 11
	}
};



var QuestionForm = React.createClass({

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
				modalIsOpen: false
			}
		);
  },

	componentWillMount: function() {
		Modal.setAppElement(document.body);
	},

  _onChange: function(e) {
    this.setState({title: e.target.value});
  },


	closeModal: function() {
		this.setState({ modalIsOpen: false });
	},

	openModal: function() {
		this.setState({ modalIsOpen: true });
	},

  handleSubmit: function(e){
    e.preventDefault();
    // var title = {title: this.state.title};

    ApiUtil.createQuestion(this.state, function(id) {
      this.context.router.push('/questions/' + id);
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function() {
		var navBarModal;
		if (this.state.modalIsOpen){
			navBarModal = <Modal
				isOpen={this.state.modalIsOpen}
				onRequestClose={this.closeModal}
				style={style}
			>
			<NavBarModal />
			</Modal>;
		}

    return(
      <div className="question-form">
        <form onSubmit={this.handleSubmit}>

          <input name="title"
								 type="text"
								 onChange={this._onChange}
								 onClick={this.openModal}
								 value={this.state.title}
								 className="nav-bar-input"
								 />
          <input type="submit"
								 className="ask-question-button"
								 value="Ask Question"
								 onClick={this.openModal}
								 />
        </form>

				{ navBarModal }

      </div>
    );
  }
});


module.exports = QuestionForm;
