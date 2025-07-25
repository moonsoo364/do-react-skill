function* generatorFunction() {
  console.log('hello');
  yield 1;
  console.log('generator');
  yield 2;
  console.log('function*');
  yield 3;
  return 4;
}

const generator = generatorFunction();
generator.next();
generator.next();
generator.next();
generator.next();
