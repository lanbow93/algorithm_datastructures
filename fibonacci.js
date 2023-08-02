function fibonacci(number){
	let targetArray = [0,1]
	for (let i=1; i<number-1; i++){
		targetArray.push(targetArray[i] + targetArray[i-1] )
}
return targetArray 
}


console.log(fibonacci(2))