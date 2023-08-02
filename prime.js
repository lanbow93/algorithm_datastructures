function isPrime(n){
    if(n<2){
        return false
    }
	for(let i=2; i <= Math.sqrt(n); i++){ // If not prime, a number will have a factor less than or equal to its square root
		if(n%i === 0){                                                                              
			return false                                                      
		}                                                                                                                                     
}
return true
}

console.log(isPrime(3))
console.log(isPrime(6))
console.log(isPrime(9))
console.log(isPrime(-7))