$(function() {

	var persoList = JSON.parse(localStorage.listePersos);
	nextTableau(localStorage.tableau);
	displayCharactersList(persoList)

	function displayCharactersList(persoList) {
		var divListPersos = $('.listePersonnages');
		$.each(persoList, function(index, perso) {
			// création des éléments de fiche perso
			var divPerso = $('<div class="personnage"></div>'),
				imagePerso = $('<div class="imgContainer"><img class="avatar" src=' + perso.imageUrl + '></div>'),
				namePerso = $('<span>' + perso.name + '</span>'),
				levelPerso = $('<span>lvl ' + perso.level + '</span>'),
				lifePerso = $('<span>' + perso.currentLifePoints + '/' + perso.stats[0] + '</span>');

			// insertion des éléments de fiche perso
			$(divPerso).append(namePerso);
			$(divPerso).append(imagePerso);
			$(divPerso).append(levelPerso);
			$(divPerso).append(lifePerso);
			$(divListPersos).append(divPerso);
		});
	}

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