function fibonacci(number){
	let targetArray = [0,1]
	for (let i=1; i<number; i++){
		targetArray.push(targetArray[i] + targetArray[i-1] )
}
return targetArray 
}
