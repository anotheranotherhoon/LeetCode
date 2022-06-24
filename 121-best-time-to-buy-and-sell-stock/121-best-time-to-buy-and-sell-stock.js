/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dy = Array.from({length:prices.length}, ()=>0)
    if (prices===[]) return 0
    dy[dy.length-1] = prices[prices.length-1]
    let result = Number.MIN_SAFE_INTEGER
    for(let i = prices.length-2; i>=0; i--){
        dy[i] = Math.max(dy[i+1], prices[i])
    }
    for(let j= 0 ; j<prices.length; j++){
        result = Math.max(result, dy[j]-prices[j])
    }
    return result
    
};