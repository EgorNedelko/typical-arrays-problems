exports.min = function min (array) {
  if (!array || !array.length) {
    return 0;
  } else {
    return Math.min.apply(null, array);
  }
}


exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}