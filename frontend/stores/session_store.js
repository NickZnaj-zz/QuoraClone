var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/session_constants');
var Dispatcher = require('../dispatcher/Dispatcher');

var SessionStore = new Store(Dispatcher);

var _currentUser;
var _currentUserHasBeenFetched = false;

SessionStore.currentUser = function() {
  return _currentUser;
};

SessionStore.isLoggedIn = function() {
  return !!_currentUser;
};

SessionStore.currentUserHasBeenFetched = function() {
  return _currentUserHasBeenFetched;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser;
      _currentUserHasBeenFetched = true;
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _currentUser = null;
      SessionStore.__emitChange();
      break;
  }
};

window.SessionStore = SessionStore;

module.exports = SessionStore;
