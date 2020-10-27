export default {
  signInAnonymously({ commit }) {
    this.$fireAuth
      .signInAnonymously()
      .catch(err => {
        console.error(err.code, err.message);
        commit("setAuthentication", false);
      })
      .then(() => {
        commit("setAuthentication", true);
      });
  },

  onAuthStateChanged({ commit, getters }) {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        commit("setUser", user);
      } else {
        let userHasBeenSetted = getters["getUser"];
        console.log(userHasBeenSetted != {}, userHasBeenSetted.uid)

        if (userHasBeenSetted != {}) {
          commit("setUser", userHasBeenSetted);
        }
      }
    });
  }
};
