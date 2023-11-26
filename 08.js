//x만큼 간격이 있는 n개의 숫자함수
// solution은 정수 x와 자연수 n을 입력 받아,
//x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
//다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

//내 코드
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
console.log(solution(2, 5));

// 다른 사람 코드
function solution2(x, n) {
  return (
    //Array() = n개의 요소를 사진 배열 만들기
    Array(n)
      //fill(value, start, end) x = value
      //x를 배열 요소로 채움 [x, x, x, x, x]
      .fill(x)
      //index에 +1 해주고 value를 곱해준 배열을 내보낸다.
      .map((v, i) => (i + 1) * v)
  );
}

console.log(solution2(2, 5));
// Array(5)  5개의 요소를 가진 배열만들기 {<5 empty items>}
//.fill(2) 배열의 요소 전체를 2로 변경[2,2,2,2,2]
//.map(배열의 요소, i) => (i+1)*v
//(2, 0) => (0+1)*2 2
//(2, 1) => (1+1)*2 4
//(2, 2) => (2+1)*2 6
//(2, 3) => (3+1)*2 8
//(2, 4) => (4+1)*2 10
//[ 2, 4, 6, 8, 10 ]
