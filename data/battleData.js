function generateBattle(id) {
	var listePersos = [];
		vaguesPersos = [];

	switch (id) {
		case '1':
			listePersos.push(new Personnage('Militant PS', true, 2, false, [2, 1, 1, 1, 1], [{id:'3', lvlToReach: 1}], '../ressources/images/MilitantPS.jpg'));
			vaguesPersos.push(listePersos);
			battleExp = 30;
			break;
		case '2':
			var persos = JSON.parse(localStorage.getItem('listePersos')),
				lvl = persos[0].level - 1,
				number = persos.length,
				i;
			if (number > 4) {
				number = 4;
			}

			switch (Math.floor(Math.random()*4)) {
				case 1:
					for (i = 0; i < number; i++) {
						listePersos.push(new Personnage('Militant PS', true, lvl, false, [3, 2, 1, 1, 1], [{id:'3', lvlToReach: 1}], '../ressources/images/MilitantPS.jpg'));
					}
					break;
				case 2:
					for (i = 0; i < number; i++) {
						listePersos.push(new Personnage('Militant LR', true, lvl, false, [2, 1, 2, 2, 1], [{id:'4', lvlToReach: 1}], '../ressources/images/MilitantLR.jpg'));
					}
					break;
				case 3:
					for (i = 0; i < number; i++) {
						listePersos.push(new Personnage('Militant FN', true, lvl, false, [1, 3, 1, 2, 1], [{id:'5', lvlToReach: 1}], '../ressources/images/MilitantFN.png'));
					}
					break;
				default:
					for (i = 0; i < number; i++) {
						listePersos.push(new Personnage('Militant PCF', true, lvl, false, [3, 1, 1, 1, 2], [{id:'6', lvlToReach: 1}], '../ressources/images/MilitantPCF.jpg'));
					}
					break;
			}
			battleExp = 15 * lvl * number;
			vaguesPersos.push(listePersos);
			break;

		default:
			return null;
			break;
	}
	return {vaguesPersos: vaguesPersos, battleExp: battleExp};
}