$(function() {
	var battle = generateBattle(localStorage.getItem('battleId')),
		listePersosStorage = JSON.parse(localStorage.getItem('listePersos'));
		vaguesEnnemis = battle.vaguesPersos,
		cptVagues = 0,
		cptTour = 1,
		cptPerso = 0,
		listePersos = listePersosStorage.slice(0, 4),
		listeEnnemis = vaguesEnnemis[cptVagues],
		sortedPersosList = sortPersosBySpeed(listePersos, listeEnnemis);

	displayList($('.persosPrincipaux'), listePersos);
	displayList($('.persosEnnemis'), listeEnnemis);

	handleTour();

	function handleTour() {
		var perso = sortedPersosList[cptPerso];
		while(!perso.currentLifePoints) {
			changePersoToPlay();
			perso = sortedPersosList[cptPerso];
		}
		if (perso.ally) {
			$.each(perso.attacks, function(key, attack) {
				displayAttack(attack, perso);
			});
		}
		else {
			var attack = perso.attacks[Math.floor(Math.random() * perso.attacks.length)];
			if (attack.type === 'singleAttack') {
				var target = listePersos[Math.floor(Math.random() * listePersos.length)];
				applyAttack(target, perso, attack);
				$('.personnage[name="' + sortedPersosList.indexOf(target) + '"]').children().last().text(target.currentLifePoints + '/' + target.stats[0]);
			}
		}
	}

	function displayAttack(attack, attacker) {
		var attackContainer = $('.attacksContainer'),
			attackButton = $('<button>' + attack.name + '</button>');
		attackContainer.append(attackButton);
		attackButton.on('click', function () {
			chooseTarget(attack, attacker);
		});
	}
	
	function chooseTarget(attack, attacker) {
		$('.persosEnnemis .personnage').each(function (key, target) {
			var $target = $(target),
				perso = sortedPersosList[parseInt($target.attr('name'))];
			if (perso.currentLifePoints) {
				$target.addClass('possibleTargetEnemy');
				$target.on('click', function() {
					applyAttack(perso, attacker, attack);
					$target.children().last().text(perso.currentLifePoints + '/' + perso.stats[0]);
				});
			}
		});
	}

	function applyAttack(target, attacker, attack) {
		// TODO: Faire un élément pour y mettre les logs des combats (exemple: JM Lepen utilise "Jeanne au secours" sur Militant PS)
		if (attack.type === 'singleAttack') {
			target.currentLifePoints -= parseInt(((attack.damage * attacker.stats[1])/20)/(1 + target.stats[2]*0.01));
			if (target.currentLifePoints < 0) {
				target.currentLifePoints = 0;
				if (isVictory(attacker.ally)) {
					if (attacker.ally) {
						$.each(listePersos, function(key, perso) {
							perso.experience += battle.battleExp;
							levelUp(perso);
						});
						localStorage.setItem('tableau', localStorage.getItem('tableauWhenWon'));
						localStorage.setItem('listePersos', JSON.stringify(listePersosStorage));
					} else {
						localStorage.setItem('loose', true);
					}
					window.location.replace('../story/story.html');
				}
			}
		}
		$('.possibleTargetEnemy').removeClass('possibleTargetEnemy').off('click');
		$('.attacksContainer').empty();
		changePersoToPlay();
		handleTour();
	}

	function isVictory(isAlly) {
		var listToCheck = isAlly ? listeEnnemis : listePersos,
			i = 0;
		while (i < listToCheck.length) {
			if (listToCheck[i].currentLifePoints) {
				return false;
			}
			i++;
		}
		return true;
	}

	function changePersoToPlay() {
		cptPerso++;
		if (cptPerso >= sortedPersosList.length) {
			cptPerso = 0;
			cptTour ++;
		}
	}

	function displayList(element, list) {
		$.each(list, function(key, perso) {
			// création des éléments de fiche perso
			var divPerso = $('<div class="personnage" name="' + sortedPersosList.indexOf(perso) + '"></div>'),
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
		});
	}

	function sortPersosBySpeed(list1, list2) {
		var list = list1.concat(list2);
		for(var i = 0; i < list.length; i++) {
			for(var j = i + 1; j < list.length; j++) {
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