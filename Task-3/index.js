const findIndices = (targetSum, numbers) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === targetSum) {
      return [left, right];
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  return null;
};

// usage:
const targetSum = 10;
const numbers = [1, 2, 4, 6, 7, 8, 9, 10];
const result = findIndices(targetSum, numbers);

if (result !== null) {
  const [index1, index2] = result;
  console.log(`Indices with sum ${targetSum}: Index of: ${index1}, ${index2}`);
} else {
  console.log(`No indices found with sum ${targetSum}`);
}
