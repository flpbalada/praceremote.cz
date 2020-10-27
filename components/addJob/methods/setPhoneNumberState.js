const phoneNumberValidator = require('./phoneNumberValidator')
// return success object for phone inputu state if phone number is valid. If invalid return error object. if null, return null.
let setPhoneNumberState = function(tel) {
  let success = { state: true, message: "" };
  let normal = { state: null, message: "" };
  return phoneNumberValidator(tel) ? success : normal;
}

module.exports = {
  setPhoneNumberState
}