function factorial(n){

	let factorialValue = 1
	for(let i=2; i<=n; i++){
	factorialValue *=  i
}
return factorialValue
}

console.log(factorial(5))