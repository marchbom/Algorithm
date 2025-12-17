function solution(order) {
    let result = 0;
    let americanoList = ["iceamericano", "americanoice", "hotamericano", "americanohot","americano"]
    let latteList = ["icecafelatte", "cafelatteice", "hotcafelatte", "cafelattehot", "cafelatte"]
    for(let i = 0; i < order.length; i++) {
        if(americanoList.includes(order[i])) {
            result += 4500;
        } else if (latteList.includes(order[i])) {
            result += 5000
        } else {
            result += 4500
        }
    }
    return result;
}