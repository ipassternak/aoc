'use strict';

const fs = require('node:fs');

const main = () => {
  const regexp = /mul\((?<x>\d{1,3}),(?<y>\d{1,3})\)/g;
  const input = fs.readFileSync('input.txt', 'utf8');
  let res = 0;
  let match = null;
  do {
    match = regexp.exec(input);
    if (match) {
      res += parseInt(match.groups.x) * parseInt(match.groups.y);
    }
  } while (match);
  console.log(res);
};

main();
