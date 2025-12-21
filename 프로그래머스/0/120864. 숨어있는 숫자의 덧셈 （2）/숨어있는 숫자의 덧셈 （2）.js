function solution(my_string) {
  const nums = my_string.match(/\d+/g) || [];
  return nums.reduce((sum, n) => sum + Number(n), 0);
}