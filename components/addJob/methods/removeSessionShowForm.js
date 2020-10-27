let removeSessionShowForm = function() {
  this.$session.destroy();
  this.showForm = true;
}

module.exports = {
  removeSessionShowForm
}
