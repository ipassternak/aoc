'use strict';

const fs = require('node:fs');

const compare = (a, b) => a > b ? -1 : a < b ? 1 : 0;

const main = () => {
  const input = fs.readFileSync('input.txt', 'utf8');
  const reports = input.split('\n').map(
    (report) => report.split(' ').map((level) => parseInt(level)),
  );
  let res = 0;
  validation: for (const report of reports) {
    const trend = compare(report[0], report[1]);
    for (let i = 0; i < report.length - 1; i++) {
      const prev = report[i];
      const next = report[i + 1];
      const diff = Math.abs(prev - next);
      let valid = diff >= 1 && diff <= 3;
      valid &&= compare(prev, next) === trend;
      if (!valid) continue validation;
    }
    res++;
  }
  console.log(res);
};

main();
