$(function() {

	var persoList = JSON.parse(localStorage.getItem('listePersos')),
		inventaire = JSON.parse(localStorage.getItem('inventaire'));

	if (localStorage.getItem('loose') === 'y') {
		localStorage.setItem('loose', 'n');
		nextTableau('7');
	} else {
		nextTableau(localStorage.getItem('tableau'));
	}
	displayCharactersList(persoList);
	if (parseInt(localStorage.getItem('tableau')) > 7) {
		var button = $('<img class="trainingButton" src="../ressources/images/training.webp">');
		button.on('click', function () {
			goTrain();
		});
		$('body').append(button);
	}
	if (parseInt(localStorage.getItem('tableau')) > 7) {
		var button = $('<img class="inventoryButton" src="../ressources/images/inventaire.jpg">');
		button.on('click', function () {
			openInventaire();
		});
		$('body').append(button);
	}

	function displayCharactersList(persoList) {
		var divListPersos = $('.listePersonnages');
		$.each(persoList, function(index, perso) {
			// création des éléments de fiche perso
			var divPerso = $('<div class="personnage"></div>'),
				imagePerso = $('<div class="imgContainer"><img class="avatar" src=' + perso.imageUrl + '></div>'),
				namePerso = $('<span>' + perso.name + '</span>'),
				levelPerso = $('<span>lvl ' + perso.level + '</span><br/>'),
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
			if (choice.battle !== '0') {
				var image = $('<div class="battleContainer"><img src="../ressources/images/battle.png" /></div>');
				button.append(image);
			}
			$(button).on('click', function() {
				onButtonClicked(choice.battle, choice.nextTableauNum);
			});
			$(storyBox).append(button);
		});
	}

	function onButtonClicked(battle, num) {
		if (battle === '0') {
			nextTableau(num);
			localStorage.setItem('tableau', num);
		}
		else {
			localStorage.setItem('battleId', battle);
			localStorage.setItem('tableauWhenWon', num);
			localStorage.setItem('listePersos', JSON.stringify(persoList))
			localStorage.setItem('inventaire', JSON.stringify(inventaire));
			window.location.replace('../battle/battle.html');
		}
	}

	function nextTableau(num) {
		if (num === '0') {
			localStorage.clear();
			window.location.replace('../preparation/preparation.html');
		}
		var tableau = generateStory(num);
		if (tableau.item.id !== '0') {
			for (var i = 0; i < tableau.item.number; i++) {
				var item = generateItem(tableau.item.id);
				inventaire.push(generateItem(tableau.item.id));
			}
			window.alert('vous gagnez ' + tableau.item.number + ' ' + item.name);
		}

		displayTableau(tableau);
	}

	function goTrain() {
		localStorage.setItem('battleId', '2');
		localStorage.setItem('tableauWhenWon', localStorage.getItem('tableau'));
		window.location.replace('../battle/battle.html');
	}

	function openInventaire() {
		var popUp = $('<div class="popup"></div>'),
			popUpContent = $('<div></div>'),
			quitButton = $('<button>Retour</button>');
		$.each(inventaire, function(key, item) {
			var image = $('<img src="' + item.imageUrl + '" title="' + item.description + '">');
			image.on('click', function() {
				applyItem(item, popUp);
			});
			popUpContent.append(image);
		});
		$('body').append(popUp);
		popUp.append(popUpContent);
		quitButton.on('click', function() {
			popUp.remove();
		});
		popUp.append(quitButton);
	}

	function applyItem(item, popUp) {
		$.each(persoList, function(key, perso) {
			perso.currentLifePoints += item.heal;
			if (perso.currentLifePoints > perso.stats[0]) {
				perso.currentLifePoints = perso.stats[0];
			}
		});
		inventaire.splice(inventaire.indexOf(item), 1);
		popUp.remove();
		$('.listePersonnages').empty();
		displayCharactersList(persoList);
	}
});