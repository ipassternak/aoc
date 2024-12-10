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
  left.sort();
  right.sort();
  let res = 0;
  for (let i = 0; i < left.length; i++) {
    const distance = Math.abs(left[i] - right[i]);
    res += distance;
  }
  console.log(res);
};

main();
