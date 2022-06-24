/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dy = Array.from({length:prices.length}, ()=>0)
    // for(let i = 0; i < prices.length; i++){
    //     for(let j = i+1; j<prices.length; j++){
    //         if(prices[j]<prices[i]) continue
    //         else if(dy[i]<(prices[j]-prices[i])) {
    //             dy[i] = prices[j]-prices[i]
    //         }
    //     }
    // }
    // return Math.max(...dy)
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