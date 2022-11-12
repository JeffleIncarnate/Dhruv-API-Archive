let text_to_binary_func: (input: string) => string = function (input: string) {
  let output: string = "";
  for (var i: number = 0; i < input.length; i++) {
    output += input[i].charCodeAt(0).toString(2) + " ";
  }

  return output;
};

module.exports = {
  text_to_binary_func,
};
