$(function() {

	// Lors du clic sur le bouton d'entrée en jeu
	$('#enterGame').on('click', function(event) {
		var name = $('#name').val();

		// On vérifie si le nom a plus de 3 lettres on ne compte pas les espaces
		if (name.length - (name.split(" ").length-1) < 3) {
			event.preventDefault();
			$('.tropCourt').fadeIn(200);
			return;
		}

		// Création d'un objet personnage, conversion de celui-ci en chaîne de caractères afin de le stocker dans localStorage
		var perso = new Personnage(name, $('#man').prop('checked'), 3, true, distribute(), [{id: '1', lvlToReach: 1}, {id: '2', lvlToReach: 1}], $('.avatar').attr('src'));
		localStorage.setItem('listePersos', JSON.stringify([perso]));
		localStorage.setItem('tableau', 1);
	});

	//Lorsque l'on clique sur le bouton valider, cela affiche l'image dont l'url est entré dans l'espace qui lui est attribué
	$('#testImage').on('click', function(event) {
		$('.avatar').attr('src', $('#imageUrl').val());
	});

	// Fonction qui retourne un tableau de coefficients de stats en fonction de ce qui a été coché dans les qualités en politique
	function distribute() {
		var statsCoefs = [1, 1, 1, 1, 1],
			i = 0,
			ids = ['', '#lie', '#doubleTalk', '#relations', '#rhetoric']
			count = 5;
		while (count > 0) {
			if (ids[i] === "" || $(ids[i]).prop("checked")) {
				statsCoefs[i] ++;
				count --;
			}
			i++;
			if (i === 5) {
				i = 0;
			}
		}
		return statsCoefs;
	}
});