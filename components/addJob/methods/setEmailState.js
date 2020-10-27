const emailValidator = require("./emailValidator");

// return success object for email inputu state if email is valid. If invalid return error object. if null, return null.
let setEmailState = function(email) {
  let success = { state: true, message: "" };
  let normal = { state: null, message: "" };
  return emailValidator(email) ? success : normal;
};

module.exports = {
  setEmailState
};
