// simply test email with regex
let emailValidator = function(email) {
  let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return regex.test(email);
};

module.exports = emailValidator;
