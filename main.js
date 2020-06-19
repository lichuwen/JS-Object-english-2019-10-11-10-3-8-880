function work1(){
	var user = {
		name: "John",
		surname: "Mike"
	}
	user.name = "Mike"
	delete user.name
	console.log(user)
}
function calFruit(){
	var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
	};
	var pieces = 0
	for(var key in fruit){
		pieces += fruit[key]
	}
	document.write("pieces : " + pieces)
}


