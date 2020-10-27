export function updateFormDataShowForm() {
  this.post = this.$session.get("lastSubmitedPostData");
  this.showForm = true;
  if(process.client) {
    window.scrollTo(0,0);
  }
}
