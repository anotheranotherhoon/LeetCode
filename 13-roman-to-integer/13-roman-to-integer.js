/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    let roman = [["I" , 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100],["D", 500], ["M", 1000]]
    const romanMap = new Map(roman)
    const map = new Map();
    for(let i = 0; i<s.length; i++){
        const key = s[i];
        if(key === 'I'){
            if(s[i+1]=== "V" || s[i+1]=== "X"){
                answer -= 2
            }
        }
        else if(key === "X"){
            if(s[i+1]==="L" || s[i+1] === "C"){
                answer -=20
            }
        }
        else if(key === "C"){
            if(s[i+1]==="D" || s[i+1]==="M"){
                answer -= 200
            }
        }
        if(map.has(key)) map.set(key, map.get(key)+1);
        else map.set(key, 1);
    }
    for(num of map){
        answer += romanMap.get(num[0]) * num[1]
    }
    return answer
};