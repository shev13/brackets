module.exports = function check(str, bracketsConfig) {
  const openBracket = 0;
  const closingBracket = 1;

  let stackBrackets = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][openBracket]) {
        if (
          str[i] === bracketsConfig[j][closingBracket] && // brackets are the same
          stackBrackets[stackBrackets.length - 1] ===
            bracketsConfig[j][openBracket] // open bracket at the top of the stack
        ) {
          stackBrackets.pop(); // str[i] - closing bracket
        } else stackBrackets.push(str[i]); // str[i] - open bracket
      } else if (str[i] === bracketsConfig[j][closingBracket]) {
        if (stackBrackets.pop() != bracketsConfig[j][openBracket]) return false;
      }
    }
  }

  return stackBrackets.length ? false : true;
};
