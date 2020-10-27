export default {
  // simply test email with regex
  emailValidator(state, email) {
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return regex.test(email);
  },

  // simply test phoneNumber with regex
  phoneNumberValidator(state, phoneNumber) {
    let regex = /^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;
    return regex.test(phoneNumber);
  },

  // return obj for text input state if string > 0
  notEmptyStrState(state, str) {
    let success = { state: true, message: "" };
    let normal = { state: null, message: "" };
    return str ? (str.length > 0 ? success : normal) : normal;
  },

  // return success object for email inputu state if email is valid. If invalid return error object. if null, return null.
  async setEmailState({state, dispatch}, email) {
    let success = { state: true, message: "" };
    let normal = { state: null, message: "" };

    let emailState = await dispatch('emailValidator', email);
    
    return emailState ? success : normal;
  },

  // return success object for phone inputu state if phone number is valid. If invalid return error object. if null, return null.
  async setPhoneNumberState({state, dispatch}, tel) {
    let success = { state: true, message: "" };
    let normal = { state: null, message: "" };

    let phoneNumberState = await dispatch('phoneNumberValidator', tel);

    return  phoneNumberState ? success : normal;
  }
};
 