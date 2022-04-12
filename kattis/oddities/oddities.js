#! /usr/bin/env node

const { join } = require('path');

const answer = (num) => {
  if (num %2 === 0) return 'is even';
  else return 'is odd';
}

const main = () => {
  const fs = require('fs');
  const data = fs.readFileSync(0, 'utf-8').split('\n').map(Number);
  //console.log(data)
  //const numbers = d
  const n = data[0];
  let ans = [];
  for(let i=1; i<= n; i++) {
    ans.push(`${data[i]} ${answer(data[i])}`);
  }
  console.log(ans.join('\n'));
}

if (require.main === module) {
  main();
}

module.exports = {
  answer: answer,
}