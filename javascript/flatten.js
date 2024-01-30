/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let flattenArr = [];
  if (n === 0) {
    return arr;
  } else {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flattenArr.push(...flat(item, n - 1));
      } else {
        flattenArr.push(item);
      }
    });
    return flattenArr;
  }
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)
);
