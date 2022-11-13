// Import data
const data = require("../data/data");

// Get random number
let get_random_number: (min: number, max: number) => number = function (
  min: number,
  max: number
) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Return random dare
let return_random_dare = () => {
  let num: number = get_random_number(0, data.dares.length);
  return data.dares[num];
};

// Return random truth
let return_random_truth = () => {
  let num: number = get_random_number(0, data.truths.length);
  return data.truths[num];
};

// Return random fact
let return_random_fact = () => {
  let num: number = get_random_number(0, data.facts.length);
  return data.facts[num];
};

// Exports
module.exports = {
  return_random_dare,
  return_random_truth,
  return_random_fact,
};
