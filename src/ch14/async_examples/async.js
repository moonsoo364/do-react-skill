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
async function runTasks() {
  try {
    let result = await increase(0);
    result = await increase(result);
    result = await increase(result);
    result = await increase(result);
    result = await increase(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

runTasks();
