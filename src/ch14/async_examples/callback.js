function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}
console.log('작업 시작');
increase(0, result => {
  console.log(result);
  increase(result, result => {
    console.log(result);
  });
});
