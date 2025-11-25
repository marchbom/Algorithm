const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.
class Level {
    constructor(user_id, level) {
        this.user_id = user_id;
        this.level = level;
    }
}

const user1 = new Level("codetree", 10);
const user2 = new Level(user_id, level);
console.log("user",user1.user_id + " lv", user1.level)
console.log("user", user2.user_id + " lv", user2.level)