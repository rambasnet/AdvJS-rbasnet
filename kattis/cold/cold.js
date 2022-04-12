
// function takes an array of numbers and returns count of -ve numbers
function answer(temps) {
  let count = 0;
  for(let t of temps) {
    if (t < 0) count++;
  }
  return count;
}

// function takes temps as a string of numbers separated by space
const answer1 = (temps) => {
  let count = 0; 
  for(let c of temps) {
    //console.log(c);
    //console.log(typeof c)
    if (c === '-') count++;
  }
  return count;
}

// using async read line by line
function solution() {
  // read input
  // call answer
  // print answer
  const readline = require('readline');
  const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let lineNum = 1;
  let tempCount;
  rli.on('line', (line)=> {
    if (lineNum === 1) {
      tempCount = parseInt(line);
      lineNum++;
    }
    else {
      // array of numbers
      //let temps = line.split(' ').map(Number);
      //console.log(temps);
      console.log(answer1(line));
    }
  });
}

// read sync
const solution1 = () => {
  const fs = require('fs');
  const data = fs.readFileSync(process.stdin.fd, 'utf-8');
  //console.log(data);
  const lines = data.split('\n');
  //console.log(answer1(lines[1]));
  const temps = lines[1].split(' ').map(Number);
  //console.log(lines);
  console.log(answer(temps));
};

if (require.main === module) {
  //solution();
  solution1();
}

module.exports = {
  answer: answer,
  answer1: answer1
};