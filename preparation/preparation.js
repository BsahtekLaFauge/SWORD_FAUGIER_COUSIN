$(function() {
	$('#validate').on('click', function(event) {
		var name = $('#name').val();
		if (name.length - (name.split(" ").length-1) < 3) {
			event.preventDefault();
			$('.tropCourt').fadeIn(200);
			return;
		}
		$('.tropCourt').fadeOut(200);
		var coefs = distribute(),
			perso = new Personnage(name, $('#man').prop("checked"), 3, coefs, []);
			localStorage.setItem("persoPrincipal", perso); //TODO : décomposer l'objet pour pouvoir transiter de pages en pages
	});

	// Fonction qui retourne un tableau de coefficients de stats en fonction de ce que les gens trouvent le plus important
	function distribute() {
		var life = 0,
			attack = 0,
			defense = 0,
			speed = 0,
			luck = 0,
			count = 5;
		while (count > 0) {
			if (count > 0) {
				life ++;
				count --;
			} else {
				return ([life, attack, defense, speed, luck]);
			}
			if ($('#lie').prop("checked")) {
				if (count > 0) {
					attack ++;
					count --;
				} else {
					return ([life, attack, defense, speed, luck]);
				}
			}
			if ($('#doubleTalk').prop("checked")) {
				if (count > 0) {
					defense ++;
					count --;
				} else {
					return ([life, attack, defense, speed, luck]);
				}
			}
			if ($('#relations').prop("checked")) {
				if (count > 0) {
					speed ++;
					count --;
				} else {
					return ([life, attack, defense, speed, luck]);
				}
			}
			if ($('#rhetoric').prop("checked")) {
				if (count > 0) {
					luck ++;
					count --;
				} else {
					return ([life, attack, defense, speed, luck]);
				}
			}
		}
		return ([life, attack, defense, speed, luck]);
	}
});