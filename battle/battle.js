$(function() {
	var battle = generateBattle(localStorage.getItem('battleId')),
		listePersos = JSON.parse(localStorage.getItem('listePersos')),
		vaguesEnnemis = battle.vaguesPersos,
		cptVagues = 0,
		cptTour = 1;
		cptPerso = 0;
		listeEnnemis = vaguesEnnemis[cptVagues];

	displayList($('.persosPrincipaux'), listePersos);
	displayList($('.persosEnnemis'), listeEnnemis);

	var sortedPersosList = sortPersosBySpeed(listePersos, listeEnnemis);

	handleTour();

	function handleTour() {
		var perso = sortedPersosList[cptPerso];
		if (perso.ally) {
			$.each(perso.attacks, function(key, attack) {
				displayAttack(attack);
			});
		}
	}

	function displayAttack(attack) {
		var attackContainer = $('.attacksContainer'),
			attackButton = $('<button>' + attack.name + '</button>');
		attackContainer.append(attackButton);

	}

	function displayList(element, list) {
		$.each(list, function(key, perso) {
			if (key < 4) {
				// création des éléments de fiche perso
				var divPerso = $('<div class="personnage"></div>'),
					imagePerso = $('<div class="imgContainer"><img class="avatar" src=' + perso.imageUrl + '></div>'),
					namePerso = $('<span>' + perso.name + '</span>'),
					levelPerso = $('<span>lvl ' + perso.level + '</span><br/>'),
					lifePerso = $('<span>' + perso.currentLifePoints + '/' + perso.stats[0] + '</span>');

				// insertion des éléments de fiche perso
				divPerso.append(namePerso);
				divPerso.append(imagePerso);
				divPerso.append(levelPerso);
				divPerso.append(lifePerso);
				element.append(divPerso);
			}
		});
	}

	function sortPersosBySpeed(list1, list2) {
		var list = list1.concat(list2);
		for(let i = 0; i < list.length; i++) {
			for(let j = i + 1; j < list.length; j++) {
				if(list[j].stats[3] > list[i].stats[3]) {
					var temp = l[j];
					list[j] = list[i];
					list[i] = temp;
				}
			}
		}
    	return list;
	}
});