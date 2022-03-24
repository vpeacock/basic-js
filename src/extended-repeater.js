const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let resStr = '';

  str = String(str);

  if ('addition' in options) {
    options.addition = String(options.addition);
  }

  if (!('separator' in options)) {
    options.separator = '+';
  }

  if (!('additionSeparator' in options)) {
    options.additionSeparator = '|';
  }
  let tmpStr = '';

  if ('additionRepeatTimes' in options) {
    tmpStr =
      str +
      `${options.addition}${options.additionSeparator}`.repeat(
        `${options.additionRepeatTimes}`
      );
    tmpStr = tmpStr.slice(0, tmpStr.length - options.additionSeparator.length);
    str = tmpStr;
  } else if('addition' in options) {
    str += options.addition;
  }

  if ('repeatTimes' in options) {
    for (let i = 0; i < options.repeatTimes; i++) {
      resStr = resStr + str + options.separator;
    }
    resStr = resStr.slice(0, resStr.length - options.separator.length);
  } else {
    resStr = str;
  }

  return resStr;
}

module.exports = {
  repeater
};
