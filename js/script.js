$(document).ready(function(){
	$('.reviews__slider').slick({
		slidesToShow:1,
		arrows:true,
		centerMode:true,
	});
});

function readMore() {
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");

	if(dots.style.display === "none") {
	  dots.style.display="inline";
	  btn.innerHTML="More";
	  more.style.display="none";
	} else {
	  dots.style.display="none";
	  btn.innerHTML="Hide";
	  more.style.display="inline";
	}
};

function readMore2() {
	var dots = document.getElementById("dots2");
	var more = document.getElementById("more2");
	var btn = document.getElementById("btn2");

	if(dots2.style.display === "none") {
	  dots2.style.display="inline";
	  btn2.innerHTML="More";
	  more2.style.display="none";
	} else {
	  dots2.style.display="none";
	  btn2.innerHTML="Hide";
	  more2.style.display="inline";
	}
};

function readMore3() {
	var dots = document.getElementById("dots3");
	var more = document.getElementById("more3");
	var btn = document.getElementById("btn3");

	if(dots3.style.display === "none") {
	  dots3.style.display="inline";
	  btn3.innerHTML="More";
	  more3.style.display="none";
	} else {
	  dots3.style.display="none";
	  btn3.innerHTML="Hide";
	  more3.style.display="inline";
	}
};

function readMore4() {
	var dots = document.getElementById("dots4");
	var more = document.getElementById("more4");
	var btn = document.getElementById("btn4");

	if(dots4.style.display === "none") {
	  dots4.style.display="inline";
	  btn4.innerHTML="More";
	  more4.style.display="none";
	} else {
	  dots4.style.display="none";
	  btn4.innerHTML="Hide";
	  more4.style.display="inline";
	}
};

function readMore5() {
	var dots = document.getElementById("dots5");
	var more = document.getElementById("more5");
	var btn = document.getElementById("btn5");

	if(dots5.style.display === "none") {
	  dots5.style.display="inline";
	  btn5.innerHTML="More";
	  more5.style.display="none";
	} else {
	  dots5.style.display="none";
	  btn5.innerHTML="Hide";
	  more5.style.display="inline";
	}
};

function readMore6() {
	var dots = document.getElementById("dots6");
	var more = document.getElementById("more6");
	var btn = document.getElementById("btn6");

	if(dots6.style.display === "none") {
	  dots6.style.display="inline";
	  btn6.innerHTML="More";
	  more6.style.display="none";
	} else {
	  dots6.style.display="none";
	  btn6.innerHTML="Hide";
	  more6.style.display="inline";
	}
};

function readMore7() {
	var dots = document.getElementById("dots7");
	var more = document.getElementById("more7");
	var btn = document.getElementById("btn7");

	if(dots7.style.display === "none") {
	  dots7.style.display="inline";
	  btn7.innerHTML="More";
	  more7.style.display="none";
	} else {
	  dots7.style.display="none";
	  btn7.innerHTML="Hide";
	  more7.style.display="inline";
	}
};

function readMore8() {
	var dots = document.getElementById("dots8");
	var more = document.getElementById("more8");
	var btn = document.getElementById("btn8");

	if(dots8.style.display === "none") {
	  dots8.style.display="inline";
	  btn8.innerHTML="More";
	  more8.style.display="none";
	} else {
	  dots8.style.display="none";
	  btn8.innerHTML="Hide";
	  more8.style.display="inline";
	}
};

$(document).ready(function() {
	$('.header__top-burger').click(function(event) {
		$('.header__top-burger,.header__top-menu,.header__top-logo').toggleClass('active');
	});
});