function solution(myStr) {
    var answer = [];
    myStr = myStr.split(/[abc]/).filter(Boolean)
    
    return myStr.length > 0 ? myStr : ["EMPTY"];
}