var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let now = Date.now();
  if (this.cache.has(key)) {
    this.cache.set(key, { value: value, duration: now + duration });
    return true;
  } else {
    this.cache.set(key, { value: value, duration: now + duration });
    return false;
  }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  let now = Date.now();
  const { value, duration } = this.cache.get(key);
  if (this.cache.has(key)) {
    if (now < duration) {
      return value;
    } else {
      this.cache.delete(key);
    }
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;
  for (let [key, value] of this.cache.entries()) {
    if (now < duration) {
      count++;
    } else {
      this.cache.delete(key);
    }
  }
  return count;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 50)); // false
console.log(timeLimitedCache.set(1, 50, 100)); // true
console.log(timeLimitedCache.get(1)); // 50
console.log(timeLimitedCache.get(1)); // 50
console.log(timeLimitedCache.get(1)); // -1
console.log(timeLimitedCache.count()); // 0
