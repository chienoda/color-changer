var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function() {
	//if white
	 //make it purple
	//else
	 //make it white

	// if(isPurple) {
	// 	document.body.style.background = "white";
		// isPurple = false;
	// } else {
	// 	document.body.style.background = "purple";
		// isPurple = true;
// 	}
// 	isPurple = !isPurple;
// });

button.addEventListener("click", function() {
	document.body.classList.toggle("purple");
});


