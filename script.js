const inputNumber = document.forms.form.elements.inputNumber;
const solution = document.querySelector('#solutionOne');
const solutionTwo = document.querySelector('#solutionTwo');

inputNumber.addEventListener('input', (e) => {
  if (!e.target.value || e.target.value === '0') {
    solution.innerHTML = `Введите номер n ≥ 1`;
    solutionTwo.innerHTML = `Введите номер n ≥ 1`;
    return;
  }
  nthFibo(e.target.value);
  nthFiboSecond(e.target.value);
});

function nthFibo(n) {
  let previousNumFirst = 0;
  let previousNumSecond = 1;
  let fiboNum;

  if (n === '1') {
    solution.innerHTML = `<div>Заданный номер (n): ${n},</div><div> Число: ${previousNumFirst}</div>`;
    return console.log(`Заданный номер (n): ${n}, Число: ${previousNumFirst}`);
  }

  if (n === '2') {
    solution.innerHTML = `<div>Заданный номер (n): ${n},</div><div> Число: ${previousNumSecond}</div>`;
    return console.log(`Заданный номер (n): ${n}, Число: ${previousNumSecond}`);
  }

  for (let i = 3; i <= n; i++) {
    fiboNum = previousNumFirst + previousNumSecond;
    previousNumFirst = previousNumSecond;
    previousNumSecond = fiboNum;
  }

  solution.innerHTML = `<div>Заданный номер (n): ${n},</div><div> Число: ${fiboNum}</div>`;
  return console.log(`Заданный номер (n): ${n}, Число: ${fiboNum}`);
}

function nthFiboSecond(n) {
  let fiboNums = [];
  for (let i = 0; i < n; i++) {
    fiboNums.length < 2
      ? fiboNums.push(i)
      : fiboNums.push(fiboNums[i - 2] + fiboNums[i - 1]);
  }
  solutionTwo.innerHTML = `<div>Заданный номер (n): ${n},</div><div> Число: ${
    fiboNums[n - 1]
  }</div>`;
  return console.log(`Заданный номер (n): ${n}, Число: ${fiboNums[n - 1]}`);
}
