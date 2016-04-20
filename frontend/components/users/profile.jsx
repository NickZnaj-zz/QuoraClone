var React = require('react');
var PropTypes = React.PropTypes;
var SessionStore = require('../.../stores/session_store');

var ProfilePage = React.createClass({

	getInitialState: function() {
		return {
			user: SessionStore.currentUser()
		};
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
    formData.append("user[image]", this.state.imageFile);

    ApiUtil.editUser(SessionStore.currentUser(), formData, function (){
			this.setState({user: SessionStore.currentUser()});
		});
  },

	render: function() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Profile Picture
						<input
							type="file"
							onChange={this.handleFileChange}
							/>
					</label>
					<input type="submit" value="Upload Photo" />
				</form>
				<p>Preview:</p>
				<img className="preview-image" src={this.state.imageUrl} />
			</div>
		);
	}

});

module.exports = ProfilePage;
