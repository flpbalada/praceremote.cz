const axios = require("axios");

let submit = async function(event) {
  event.preventDefault();
  //if sessions does not exist then create new one a save post data.
  //if session exists then renew its id and save post data.
  if (!this.$session.exists()) {
    this.$session.start();
  }

  this.$session.set("lastSubmitedPostData", this.post);

  let sessionId = this.$session.id().slice(5);

  let company = this.post.company;
  company.sessionId = sessionId;

  let contact = this.post.company.contact;
  contact.sessionId = sessionId;

  let job = this.post.jobDetail;
  job.sessionId = sessionId;
  job.published = this.post.published;
  let date = new Date();
  job.posted = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  job.postedFull = date.toString();

  let uid = "nGIPYIktofPwEBj1rS3gisqGphS2";

  company.uid = uid;
  contact.uid = uid;
  job.uid = uid;

  let jobSlug = job.title;
  jobSlug = jobSlug.trim();
  jobSlug = jobSlug.replace(/\s/g, "-");
  jobSlug = `/${sessionId}-${jobSlug}`;
  jobSlug = jobSlug.toLowerCase();
  jobSlug = jobSlug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  job.slug = jobSlug;

  delete company.contact;
  delete company.jobs;

  let post = {
    sessionId: sessionId,
    uid: uid,
    company: company,
    contact: contact,
    job: job
  };

  console.log(post);

  await axios.post(
    "https://us-central1-praceremote.cloudfunctions.net/createOrUpdatePost",
    post
  );

  //success
  this.showForm = false;

  if (process.client) {
    window.scrollTo(0, 0);
  }
};

module.exports = {
  submit
};
