'use strict';

const fs = require('node:fs');

const GROUP_DELIMITER = '   ';

const main = () => {
  const input = fs.readFileSync('input.txt', 'utf8');
  const groups = input.split('\n').map((groups) => groups.split(GROUP_DELIMITER));
  const [left, right] = groups.reduce(
    ([left, right], group) => {
      const l = parseInt(group[0]);
      const r = parseInt(group[1]);
      left.push(l);
      right.push(r);
      return [left, right];
    },
    [[], []],
  );
  let res = 0;
  for (const leftNum of left) {
    res += leftNum * right.filter((rightNum) => rightNum === leftNum).length;
  }
  console.log(res);
};

main();
