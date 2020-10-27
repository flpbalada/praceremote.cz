export default {
  setAuthentication(state, value) {
    if (typeof value === "boolean") {
      state.authenticated = value;
    } else {
      state.authenticated = false;
    }
  },
  setUser(state, user) {
    if (typeof user === "object") {
      state.user = user;
    } else {
      state.user = {};
    }
  },
  setSessionId(state, sessionId) {
    if (typeof sessionId === "string") {
      state.sessionId = sessionId;
    } else {
      state.uid = "";
    }
  }
};
