function solution(rank, attendance) {
    const students = [];

    for (let i = 0; i < rank.length; i++) {
        if (attendance[i]) {
            students.push([rank[i], i]);
        }
    }

    students.sort((a, b) => a[0] - b[0]); 

    const [, a] = students[0];
    const [, b] = students[1];
    const [, c] = students[2];

    return 10000 * a + 100 * b + c;
}