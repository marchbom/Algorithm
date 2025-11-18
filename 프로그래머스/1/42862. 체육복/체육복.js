function solution(n, lost, reserve) {

      // 가져왔는데 잃어버린 학생
    let lostStu = lost.filter(l => !reserve.includes(l)).sort((a,b)=>a-b);
    
    // 빌려줄 수 있는 학생
    let reserveStu = reserve.filter(r => !lost.includes(r)).sort((a,b)=>a-b);
    
    let student = n - lostStu.length;
    
    for(let stu of lostStu) {
        if(reserveStu.includes(stu - 1)) {
            reserveStu.splice(reserveStu.indexOf(stu - 1), 1); // 빌려줬으면 제거
            student++;
        } else if (reserveStu.includes(stu + 1)) {
            reserveStu.splice(reserveStu.indexOf(stu + 1), 1) // 빌려줬으면 제거
            student++
        }
    }
    return student;
}