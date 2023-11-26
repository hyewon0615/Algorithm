function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + Number(curr), 0)
    
}

console.log(solution(52451))
// console.log(acc)
// 5 2
// 7 4
// 11 5
// 16 1
// 17
