function isPowerOfTwo(n){
    if(n < 1){
        return false
    }
    if(n===1){
        return true
    }
    for (let i=2; i<=n; i = i**2){
        if(i===n){
            return true
        }
    }
    return false
}
    
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(256))