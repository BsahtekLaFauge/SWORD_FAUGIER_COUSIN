$(function() {
	$('#validate').on('click', function(event) {
		var politicien = $('#name').val();
		if (politicien.length - (politicien.split(" ").length-1) < 3) {
			event.preventDefault();
			$('.tropCourt').fadeIn(200);
			return;
		}
			$('.tropCourt').fadeOut(200);
			localStorage.setItem("name", politicien);
			localStorage.setItem("man", $('#man').prop("checked"));
	});
});