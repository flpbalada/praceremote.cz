export function submit(event) {
  event.preventDefault();
  //if sessions does not exist then create new one a save post data.
  //if session exists then renew its id and save post data.
  if (!this.$session.exists()) {
    this.$session.start();
  }

  this.$session.set("submitedCompareIncomeData", true);

  let sessionId = this.$session.id().slice(5);
  let data = this._data.form.getData();
  data.sessionId = sessionId;
  data.uid = data.email;

  //todo do action. store datas, send emial 
  /**
   * 
   */

  this._data.form.submited = true;
}
