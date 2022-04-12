#!/usr/bin/env node

function answer(){
  return 'Hello World!';
}

function main() {
  console.log(answer());
}

if (require.main === module) {
  main();
}

module.exports = {
  answer: answer
}