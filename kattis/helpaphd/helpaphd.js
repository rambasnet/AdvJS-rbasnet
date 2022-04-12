#! /usr/bin/env node

const answer = (equation) => {
  if (equation.startsWith('P'))
    return 'skipped';
  else
    return eval(equation);
}

const kattis = () => {
  const fs = require('fs');
  const data = fs.readFileSync(0, 'utf-8').split('\n');
  const ans = [];
  for(let i in data) {
    if (i == 0) continue;
    if (i >= data.length - 1) break;
    ans.push(answer(data[i]));
  }
  console.log(ans.join('\n'));
}

if (require.main === module) {
  kattis();
}

module.exports = {
  answer: answer
}