const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  n = Number(n); // convert input to number

  const result = [];
  let current = [];
  let sum = 0;

  for (let num of arr) {
    if (sum + num > n) {
      result.push(current);
      current = [num];
      sum = num;
    } else {
      current.push(num);
      sum += num;
    }
  }

  // push last subarray
  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));