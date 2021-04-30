function largestSubarraySum(array) {
    let sum = array[0]
    for (let i = 0; i <= array.length; i++) {
        let x = i + 1;
        let poss = array[i] + array[x]
        while (x < array.length) {
            x += 1;
            let road = poss + array[x]
            poss = road
            if (road > sum) {
                sum = road
            }
        }
    }
    if (sum < 0) {
        sum = 0
    }
    return sum
}