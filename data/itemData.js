function generateItem(id) {
	var heal,
		name,
		type,
		description,
		imageUrl;

	switch (id) {
		case '1':
			type = 'heal';
			name = "Interview chez pujadas";
			heal = 30;
			description = "Pas mal pour refaire votre image et remonter dans les sondages. Rends 30 pv";
			imageUrl = "../ressources/images/interviewPujadas.jpg";
			break;
		case '2':
			type = 'heal';
			name = "Salaire d'élu";
			heal = 50;
			description = "ça remet toujours sur pied de recevoir son salaire, surtout avec 20 000 balles + les 50 000 de fonds détournés";
			imageUrl = "../ressources/images/paye.jpg";
			break;
		default:
			return null;
			break;
	}
	return new Item(type, name, heal, description, imageUrl);
}