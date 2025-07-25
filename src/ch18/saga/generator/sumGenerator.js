function* sumGenerator() {
  console.log('sumGenerator 생성됨');
  let a = yield;
  let b = yield;
  yield a + b;
}

const sum = sumGenerator();
sum.next();
sum.next(1);
console.log(sum.next(2));
console.log(sum.next());
