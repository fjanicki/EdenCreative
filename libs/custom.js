var rightCode = "parallax.speed = 2000;\n\nparallax.boo.right();";
var topCode = "parallax.scaling = 'linear';\n\nparallax.boo.top();"
var leftCode ="parallax.scaling = 0.9;\n\nparallax.boo.left();";
var bottomCode ="parallax.boo.onload = function(){\n\talert('Awesome alert buddy. Truly spectacular.');\n});\n\nparallax.boo.bottom();";
var lastCode="parallax.last.bottom();"
var currentCode="parallax.current.ackbar(); ////What is it? "

$(document).ready(function () {

	$("#fromLast").click(function(){
		parallax.last.bottom();
	}).hover(function(){
		$("#codebox").html(lastCode);
	});

	$("#fromCurrent").click(function(){
		parallax.current.ackbar();
	}).hover(function(){
		$("#codebox").html(currentCode);
	});

	$("#fromRight").click(function(){
		parallax.speed = 2000;
		parallax.boo.right();
	}).hover(function(){
		$("#codebox").html(rightCode);
	});

	$("#fromTop").click(function(){
		parallax.scaling = 'linear';
		parallax.boo.top();
	}).hover(function(){
		$("#codebox").html(topCode);
	});

	$("#fromLeft").click(function(){
		parallax.scaling = 0.9;
		parallax.boo.left();
	}).hover(function(){
		$("#codebox").html(leftCode);
	});

	$("#fromBottom").click(function(){
		parallax.boo.onload = function(){
			alert("Awesome alert buddy. Truly spectacular.");
		};
		parallax.boo.bottom();
	}).hover(function(){
		$("#codebox").html(bottomCode);
	});

});
