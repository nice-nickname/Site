function test(msg) {
	alert(msg)
}

function setSlide(indexOf) {
	var slides = document.getElementsByClassName("slide");

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[indexOf].style.display = "block";
}