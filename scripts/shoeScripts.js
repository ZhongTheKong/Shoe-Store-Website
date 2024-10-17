// Good Luck Function
var phoneInput=document.getElementById("phone");
phoneInput.addEventListener("blur", goodLuck);

function goodLuck () {
	alert("Good Luck with the raffle!");
}

// Welcome Function
var nameInput=document.getElementById("sName");
nameInput.addEventListener("change", welcome);

function welcome () {
	var theName=nameInput.value;
	var firstQuestion="Welcome " + theName + ", have we met before?";
	nameOutput.innerHTML=firstQuestion;
	nameOutput.style.backgroundColor="#7FFFD4";
	nameOutput.style.color="#FFFFFF";
}

// Good Choice Function
var shoeSelect=document.getElementById("sCategory");
shoeSelect.addEventListener("change", goodChoice)

function goodChoice () {
	var theChoice=shoeSelect.value;
	var secondQuestion=theChoice + "? Good Choice!";
	shoeOutput.innerHTML=secondQuestion;
	shoeOutput.style.backgroundColor="#7FFFD4";
	shoeOutput.style.color="#FFFFFF";
}

// Rating Function
var ratingSelect=document.getElementById("serviceLevel");
ratingSelect.addEventListener("change", rating);

function rating () {
	var theRating=ratingSelect.value;
	if (theRating == 1) {
		rangeOutput.innerHTML=theRating + "? Wow, we suck.";
		rangeOutput.style.backgroundColor="#7FFFD4";
		rangeOutput.style.color="#FFFFFF";
	}
	if (theRating == 2) {
		rangeOutput.innerHTML=theRating + "? Not the worst...";
		rangeOutput.style.backgroundColor="#7FFFD4";
		rangeOutput.style.color="#FFFFFF";
	}
	if (theRating == 3) {
		rangeOutput.innerHTML=theRating + "? Better than what we got in 2001!";
		rangeOutput.style.backgroundColor="#7FFFD4";
		rangeOutput.style.color="#FFFFFF";
	}
	if (theRating == 4) {
		rangeOutput.innerHTML=theRating + "? Only slightly below decent? That's the best rating we've had in the last decade!";
		rangeOutput.style.backgroundColor="#7FFFD4";
		rangeOutput.style.color="#FFFFFF";
	}
	if (theRating == 5) {
		rangeOutput.innerHTML=theRating + "? I think you went to the wrong shoe store.";
		rangeOutput.style.backgroundColor="#7FFFD4";
		rangeOutput.style.color="#FFFFFF";
	}
	if (theRating == 6) {
		rangeOutput.innerHTML=theRating + "? This is an all time record!";
		rangeOutput.style.backgroundColor="#7FFFD4";
		rangeOutput.style.color="#FFFFFF";
	}
	if (theRating == 7) {
		rangeOutput.innerHTML=theRating + "? Wow, I didn't ever expect this rating since all of our shoes are poisoned!";
		rangeOutput.style.backgroundColor="#7FFFD4";
		rangeOutput.style.color="#FFFFFF";
	}
	if (theRating == 8) {
		rangeOutput.innerHTML=theRating + "? Are you sure you didn't double the score?";
		rangeOutput.style.backgroundColor="#7FFFD4";
		rangeOutput.style.color="#FFFFFF";
	}
	if (theRating == 9) {
		rangeOutput.innerHTML=theRating + "? Wow, simply amazing!";
		rangeOutput.style.backgroundColor="#7FFFD4";
		rangeOutput.style.color="#FFFFFF";
	}
	if (theRating == 10) {
		rangeOutput.innerHTML=theRating + "? WHO'S PAYING YOU?! I KNOW THIS STORE DOESN'T GET THESE KINDS OF RATINGS! YOU BETTER KNOCK IT OFF!";
		rangeOutput.style.backgroundColor="#7FFFD4";
		rangeOutput.style.color="#FFFFFF";
	}
}

// Reset Function
var resetButton=document.getElementById("surveyReset");
resetButton.addEventListener("click", resetFunction);

function resetFunction () {
	alert("Get it right this time!");
	document.body.style.backgroundColor="#1589FF";
}

// Tricked You Function
var submitButtonOutput=document.getElementById("submitButtonInput");
submitButtonOutput.addEventListener("click", trickedYou);

function trickedYou () {
	var phoneValue=phoneInput.value;
	if (phoneValue == null || phoneValue=="") {
		submitButtonField.innerHTML = "Tricked you--phone number is required!";
		submitButtonField.style.backgroundColor="#808080";
		submitButtonField.style.color="#FF0000";
	}
	else {
		submitButtonField.innerHTML = "Thanks--can I call you tomorrow?";
		submitButtonField.style.backgroundColor="#7FFFD4";
		submitButtonField.style.color="#FFFFFF";
	}
}