function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      console.log(`현재 값: ${result}`);
      if (result > 50) {
        const e = new Error('NumberTooBig');
        reject(e);
      } else {
        resolve(result);
      }
    }, 1000);
  });
  return promise;
}

increase(0)
  .then(increase) // 10
  .then(increase) // 20
  .then(increase) // 30
  .then(increase) // 40
  .then(increase) // 50
  .then(increase) // 60 → 여기서 reject 발생
  .catch(e => {
    console.error(e); // Error: NumberTooBig
  });
