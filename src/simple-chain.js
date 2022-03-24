const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    value === undefined
      ? this.chainArr.push("( )")
      : this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position === undefined ||
      typeof position != "number" ||
      position <= 0 ||
      position > this.chainArr.length
    ) {
      this.chainArr = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr = this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let chainJoinArr = this.chainArr.join("~~");
    this.chainArr = [];
    return chainJoinArr;
  }
};

module.exports = {
  chainMaker
};
