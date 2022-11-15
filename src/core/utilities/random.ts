// Import data
const data = require("../data/data");

// Get random number
let get_random_number: (min: number, max: number) => number = (
  min: number,
  max: number
) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Return random dare
let return_random_dare = () => {
  let num: number = get_random_number(0, data.dares.length - 1);
  return data.dares[num];
};

// Return random truth
let return_random_truth = () => {
  let num: number = get_random_number(0, data.truths.length - 1);
  return data.truths[num];
};

// Return random fact
let return_random_fact = () => {
  let num: number = get_random_number(0, data.facts.length - 1);
  return data.facts[num];
};

// Return heads or tails
let return_random_heads_or_tales = () => {
  let num: number = get_random_number(0, 1);
  return num;
};

// Exports
module.exports = {
  return_random_dare,
  return_random_truth,
  return_random_fact,
  return_random_heads_or_tales,
};
