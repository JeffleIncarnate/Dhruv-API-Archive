function convert_text_to_binary(input: string) {
  let output: string = "";
  for (var i = 0; i < input.length; i++) {
    output += input[i].charCodeAt(0).toString(2) + " ";
  }

  return output;
}

export { convert_text_to_binary };
