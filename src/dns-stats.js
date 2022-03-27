const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if(domains.length === 0){return {}}
  const obj = {};
  const splitDomains = domains.map((el) => el.split('.').reverse());
  let firstDNS = splitDomains[0][0];
  let tmp = splitDomains
    .map((elem) => elem.join('.'))
    .sort((a, b) => a.length - b.length);
  let count = 0;

  for (const item of tmp) {
    if (item.includes(firstDNS)) {
      count++;
    }
  }
  obj[`.${firstDNS}`] = count;
  count = 0;

  for (const item of tmp) {
    console.log(item);
    count = 0;
    tmp.forEach((element) => {
      if (element.includes(item)) {
        count++;
      }
      obj[`.${item}`] = count;
    });
  }

  return obj;
}

module.exports = {
  getDNSStats,
};
