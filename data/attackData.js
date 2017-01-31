function generateAttack(id) {
	var damage,
		name,
		type,
		description;

	switch (id) {
		case '1':
			type = 'singleAttack';
			name = "Défense des plus démunis";
			damage = 30;
			description = "Parler des SDF, quelle manière simple et efficace de faire mal à votre adversaire sans prendre de risques.";
			break;
		case '2':
			type = 'singleAttack';
			name = "Plainte sur le gouvernement";
			damage = 20;
			description = "Si vous voulez vous sentir proche du peuple, crachez sur le gouvernement : c'est ce qui nous réunit tous";
			break;
		case '3':
			type = 'singleAttack';
			name = "Le changement c'est maintenant";
			damage = 20;
			description = "Oui certains croient encore à ce slogan, ça fait du mal à entendre";
			break;
		case '4':
			type = 'singleAttack';
			name = "Bygmalion";
			damage = 20;
			description = "Les républicains aiment beaucoup étaler leur argent partout même si il n'est pas légal";
			break;
		case '5':
			type = 'singleAttack';
			name = "Dehors les étrangers";
			damage = 20;
			description = "Sans commentaires";
			break;
		case '6':
			type = 'singleAttack';
			name = "Nique les riches";
			damage = 20;
			description = "Kill the masters comme disait Daenerys, sauf qu'elle, elle a la classe";
			break;
		default:
			return null;
			break;
	}
	return new Attack(type, name, damage, description);
}