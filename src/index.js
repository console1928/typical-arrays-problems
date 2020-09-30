
exports.min = function min(array) {
  return array !== undefined && array.length > 0 ? array.sort((a, b) => a > b ? 1 : a < b ? -1 : 0)[0] : 0;
}

exports.max = function max(array) {
  return array !== undefined && array.length > 0 ? array.sort((a, b) => a > b ? -1 : a < b ? 1 : 0)[0] : 0;
}

exports.avg = function avg(array) {
  return array !== undefined && array.length > 0 ? array.reduce((el, acc) => el + acc, 0) / array.length : 0;
}
