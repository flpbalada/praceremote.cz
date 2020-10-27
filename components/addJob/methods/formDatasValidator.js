const phoneNumberValidator = require("./phoneNumberValidator");
const emailValidator = require("./emailValidator");

//simply check dada object and its values.
//return true if form is filled successfully.
let formDatasValidator = function(post) {
  let j = post.jobDetail;
  let c = post.company;
  let ok = false;

  if (
    j.title.length > 0 &&
    j.description.length > 0 &&
    j.commitment.length > 0 &&
    j.category.length > 0 &&
    j.region.length > 0 &&
    c.name.length > 0 &&
    c.description.length > 0 &&
    c.websiteUrl.length > 0 &&
    c.contact.name.length > 0 &&
    phoneNumberValidator(c.contact.tel) &&
    emailValidator(c.contact.email)
  ) {
    return true;
  }

  return false;
};

module.exports = {
  formDatasValidator
};
