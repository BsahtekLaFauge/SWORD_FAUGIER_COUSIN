function generateBattle(id) {
	var listePersos = [];
		vaguesPersos = [];

	switch (id) {
		case '1':
			listePersos.push(new Personnage('Militant PS', true, 2, false, [2, 1, 1, 1, 1], [{id:'3', lvlToReach: 1}], '../ressources/images/MilitantPS.jpg'));
			vaguesPersos.push(listePersos);
			battleExp = 30;
			break;
		default:
			return null;
			break;
	}
	return {vaguesPersos: vaguesPersos, battleExp: battleExp};
}