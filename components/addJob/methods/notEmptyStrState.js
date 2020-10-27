// return obj for text input state if string > 0
let notEmptyStrState = function (str) {
  let success = { state: true, message: "" };
  let normal = { state: null, message: "" };
  return str ? (str.length > 0 ? success : normal) : normal;
}

module.exports = {
  notEmptyStrState
}