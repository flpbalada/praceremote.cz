// simply test phoneNumber with regex
let phoneNumberValidator = function(phoneNumber) {
  let regex = /^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;
  return regex.test(phoneNumber);
};

module.exports = phoneNumberValidator ;
