'use strict';

const fs = require('node:fs');

const main = () => {
  const regexp = /mul\((?<x>\d{1,3}),(?<y>\d{1,3})\)|do\(\)|don't\(\)/g;
  const input = fs.readFileSync('input.txt', 'utf8');
  let res = 0;
  let process = true;
  let match = null;
  do {
    match = regexp.exec(input);
    if (match) {
      const exp = match[0];
      switch (exp) {
        case `do()`:
          process = true;
          break;
        case `don't()`:
          process = false;
          break;
        default:
          if (process) res += parseInt(match.groups.x) * parseInt(match.groups.y);
      }
    }
  } while (match);
  console.log(res);
};

main();
