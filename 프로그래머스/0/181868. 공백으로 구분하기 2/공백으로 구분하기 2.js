function solution(my_string) {
    my_string = my_string.replace(/\s+/g, " ").trim().split(" ")
    
    return my_string;
}