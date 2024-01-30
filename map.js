/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let mergedMap = new Map();

  for (const item1 of arr1) {
    mergedMap.set(item1.id, { ...mergedMap.get(item1.id), ...item1 });
  }

  for (const item2 of arr2) {
    mergedMap.set(item2.id, { ...mergedMap.get(item2.id), ...item2 });
  }

  let mergedArr = Array.from(mergedMap.values());

  mergedArr.sort((a, b) => {
    return a.id - b.id;
  });

  return mergedArr;
};

console.log(
  join(
    [
      { id: 1, x: 0, g: 2 },
      { id: 2, e: 23, a: 55 },
      { id: 3, y: 6, r: 11, v: 14 },
    ],
    [
      { id: 2, p: 80, f: 76, k: 85 },
      { id: 4, c: 29, k: 98 },
    ]
  )
);
