$(function() {

	var persoList = JSON.parse(localStorage.listePersos);
	nextTableau(localStorage.tableau);

	function displayTableau(tableau) {
		// créer tous les composants à mettre dans le tableau
		var storyBox = $('.storyBox'),
			title = $('<h3>' + tableau.title + '</h3>'),
			text = $('<p>' + tableau.text + '</p>'),
			button;

		// réinitialiser le tableau
		$(storyBox).empty();

		$(storyBox).append(title);
		if (tableau.image) {
			//TODO: gérer les images dans l'histoire
		}
		$(storyBox).append(text);

		$.each(tableau.choices, function(index, choice) {
			button = $('<button>' + choice.text + '</button>');
			if (choice.battle) {
				// TODO afficher image battle
			}
			$(button).on('click', function() {
				onButtonClicked(choice.battle, choice.nextTableauNum);
			});
			$(storyBox).append(button);
		});
	}

	function onButtonClicked(battle, num) {
		if (!battle) {
			nextTableau(num);
		}
		else {
			// TODO: gérer les combats
		}
	}

	function nextTableau(num) {
		if (num === '0') {
			localStorage.clear();
			window.location.replace('../preparation/preparation.html')
		}
		var tableau = generateStory(num);
		displayTableau(tableau);
	}
});