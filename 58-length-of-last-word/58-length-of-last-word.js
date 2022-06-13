/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newArr = s.split(' ')
    let answer = []
    for(el of newArr){
        if(el!==''){
            answer.push(el)
        }
    }
    return answer[answer.length-1].length
};