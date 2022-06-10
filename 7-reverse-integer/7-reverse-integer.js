var reverse = function(x) {
    
    let makeString = x.toString()
    let newArr=[]
    let answer
    for(let i = 0; i<makeString.length; i++){
        if(makeString[i]==='0'&&newArr.length === 0){
            continue
        }else{
            newArr.unshift(makeString[i])
        }
    }
    if(makeString[0]==='-'){
        newArr.pop()
        newArr.unshift('-')
        answer= Number(newArr.join(''))
}
    else {
        answer = Number(newArr.join(''))
    }
    if ( answer > 2147483647 || answer < -2147483647 ) {
        return 0;
    }
    else return answer
    
};