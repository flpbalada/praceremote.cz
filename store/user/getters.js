export default {
  getUid(state) {
    return state.user.uid;
  },
  getSessionId(state) {
    return state.sessionId;
  },
  isAuthenticated(state) {
    return state.authenticated;
  },
  isAnonymous(state) {
    return state.user.isAnonymous;
  },
  getUser(state) {
    return state.user;
  }
};
