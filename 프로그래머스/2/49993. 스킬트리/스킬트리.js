function solution(skill, skill_trees) {
    // 각 skill 분리
    let skills = skill.split("")
    
    // 선행 스킬을 추출하고 순서가 앞부분이 일치하는지 확인
    let skillFilter = skill_trees.filter((tree) => {
        const filter = tree.split("").filter(sk => skills.includes(sk)).join("")
        return skill.startsWith(filter)
    });
    return skillFilter.length;
}