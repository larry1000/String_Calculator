let calculator = (function() {
  function add(numString) {
    if (numString === "") {
      return 0;
    }

    const delimiter = getDelimiter(numString);
    const formattedInput = formatInput(numString);
    return sum(getNumbers(formattedInput, delimiter));
  }
  function formatInput(input) {
    const delimiterRegExp = /^(\/\/.*\n)/;
    const matches = delimiterRegExp.exec(input);
    if (matches && matches.length > 0) {
      return input.replace(delimiterRegExp, "");
    }
    return input;
  }

  function getDelimiter(input) {
    const delimiters = [];
    const multipleDelimiterRegexp = /(?:^\/\/)?\[([^\[\]]+)\]\n?/g;
    let matches = multipleDelimiterRegexp.exec(input);
    while (matches !== null) {
      delimiters.push(matches[1]);
      matches = multipleDelimiterRegexp.exec(input);
    }
    if (delimiters.length > 0) {
      return new RegExp("[" + delimiters.join("") + "]");
    }
    matches = /^\/\/(.*)\n/.exec(input);
    if (matches && matches[1]) {
      return matches[1];
    }
    return /[\n,]/;
  }

  function getNumbers(string, delimiter) {
    return string
      .split(delimiter)
      .filter(n => n !== "")
      .map(n => parseInt(n));
  }
  function sum(numbers) {
    const finalSum = numbers.reduce((sum, n) => {
      return sum + n;
    }, 0);

    return finalSum;
  }
  return { add };
})();
