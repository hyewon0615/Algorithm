function solution(array, height) {
    var answer = 
    array.filter((item)=>{
        return item > height
    })
    return answer.length;
}
console.log(solution([169,170,158], 165)) //시범 코드