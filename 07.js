//자릿수 더하기
//자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
//예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
//https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + Number(curr), 0);
}

console.log(solution(52451));
// console.log(acc)
// 5 2
// 7 4
// 11 5
// 16 1
// 17
