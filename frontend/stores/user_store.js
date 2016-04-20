var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');

var UserStore = new Store(Dispatcher);
var UserConstants = require('../constants/user_constants');
var _users = {};
var _topicIDs = [];

// var resetUsers = function(users) {
//   _users = {};
//   users.forEach(function (user){
//     _users[user.id] = user;
//   });
// };


var resetUser = function(user){
  _users[user.id] = user;
};

var deleteUser = function(id) {
	delete _users[id];
};

var editUser = function(user) {
	_users[user.id] = user;
};

UserStore.all = function() {
  var users = [];
  for (var id in _users) {
    users.push(_users[id]);
  }
  return users;
};

UserStore.find = function(id) {
  return _users[id];
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    // case UserConstants.USERS_RECEIVED:
    //   resetUsers(payload.users);
    //   UserStore.__emitChange();
    //   break;
    case UserConstants.USER_RECEIVED:
      resetUser(payload.user);
      UserStore.__emitChange();
      break;
		case UserConstants.USER_DELETED:
			deleteUser(payload.id);
			UserStore.__emitChange();
			break;
		case UserConstants.USER_EDITED:
			editUser(payload.user);
			UserStore.__emitChange();
			break;
  }
};


module.exports = UserStore;
