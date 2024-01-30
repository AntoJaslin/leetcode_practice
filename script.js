// function findTheDifference(s, t) {
//   let isFirst = s.length > t.length ? true : false;
//   let diff = "";
//   if (isFirst) {
//     for (let i = 0; i < s.length; i++) {
//       if (!t.includes(s[i]) || s.lastIndexOf(s[i]) > i) {
//         diff = diff + s[i];
//       }
//     }
//   } else {
//     for (let i = 0; i < t.length; i++) {
//       if (!s.includes(t[i] || t.lastIndexOf(t[i])) > i) {
//         diff = diff + t[i];
//       }
//     }
//   }
//   return diff;
// }

// console.log(findTheDifference("abcd", "abcde"));

// /**
//  * @param {string} number
//  * @param {character} digit
//  * @return {string}
//  */
// var removeDigit = function (number, digit) {
//   let numArr = number.split("");
//   let largest = { value: 0, original: "0" };
//   numArr.forEach((item, index) => {
//     if (item === digit) {
//       let occRemovedString = numArr.filter((ele, ind) => {
//         return ind !== index;
//       });
//       if (parseInt(occRemovedString.join("")) > largest.value) {
//         largest = {
//           value: parseInt(occRemovedString.join("")),
//           original: occRemovedString.join(""),
//         };
//       }
//     }
//   });
//   return largest.original;
// };

// console.log(
//   removeDigit(
//     "2918247756338836829948259212259612948986573547572133445495998236287245768816987491842618661",
//     "9"
//   )
// );

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   let result = [];
//   let nextInd = 0;
//   nums.forEach((item, index) => {
//     nextInd = index + 1;
//     console.log(index, nextInd);
//     while (nextInd <= nums.length) {
//       console.log("comes");
//       if (item + nums[nextInd] === target) {
//         result = [index, nextInd];
//       }
//       nextInd++;
//     }
//   });
//   return result;
// };

// console.log(twoSum([3, 2, 3], 6));

// Definition for singly-linked list.
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function (l1, l2) {
//   let firstNumber = parseInt(l1.reverse().join(""));
//   let secondNumber = parseInt(l2.reverse().join(""));
//   let result = firstNumber + secondNumber;
//   return result.split("").reverse();
// };

// addTwoNumbers([2, 4, 3], [5, 6, 4]);

// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// var once = function (fn) {
//   let executed = false;
//   return function (...args) {
//     if (!executed) {
//       executed = true;
//       return fn(...args);
//     } else {
//       return undefined;
//     }
//   };
// };

// let fn = (a, b, c) => a + b + c;
// let onceFn = once(fn);
// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let inputsMap = new Map();

  return function (...args) {
    const key = args.join("|");

    if (!inputsMap.has(key)) {
      const result = fn(...args);
      inputsMap.set(key, result);
      return result;
    } else {
      return inputsMap.get(key);
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
