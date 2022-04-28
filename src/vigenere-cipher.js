const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    let result = [];

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let messageAlpha = message.match(/[A-Z]/g).join('');
    let countRepeat = Math.ceil(message.length / key.length);
    let repeatKey = key.repeat(countRepeat).slice(0, messageAlpha.length);

    for (let i = 0; i < messageAlpha.length; i++) {
      let charCode =
        (messageAlpha[i].charCodeAt(0) + repeatKey[i].charCodeAt(0)) % 26;
      charCode += 'A'.charCodeAt(0);
      result.push(String.fromCharCode(charCode));
    }

    let symbols = message.match(/[^a-z]/gi);

    if (symbols) {
        for (let i = 0; i < message.length; i++) {
          if (symbols.includes(message[i])) {
            result.splice(i, 0, message[i]);
          }
        }
      }
  

    if (this.direct) {
      result = result.join('');
    } else {
      result = result.reverse().join('');
    }

    return result;
  }

  decrypt(message, key) {
    let result = [];

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let messageAlpha = message.match(/[A-Z]/g).join('');
    let countRepeat = Math.ceil(message.length / key.length);
    let repeatKey = key.repeat(countRepeat).slice(0, messageAlpha.length);

    for (let i = 0; i < messageAlpha.length; i++) {
      let charCode =
        (messageAlpha.charCodeAt(i) - repeatKey.charCodeAt(i) + 26) % 26;
      charCode += 'A'.charCodeAt(0);
      result.push(String.fromCharCode(charCode));
    }

    let symbols = message.match(/[^a-z]/gi);

    if (symbols) {
      for (let i = 0; i < message.length; i++) {
        if (symbols.includes(message[i])) {
          result.splice(i, 0, message[i]);
        }
      }
    }

    if (this.direct) {
      result = result.join('');
    } else {
      result = result.reverse().join('');
    }

    return result;
  }
}


module.exports = {
  VigenereCipheringMachine
};
