function generateAttack(id) {
	var damage,
		name,
		description;

	switch (id) {
		case '1':
			name = "Défense des plus démunis";
			damage = 30;
			description = "Parler des SDF, quelle manière simple et efficace de faire mal à votre adversaire sans prendre de risques.";
			break;
		case '2':
			name = "Plainte sur le gouvernement";
			damage = 20;
			description = "Si vous voulez vous sentir proche du peuple, crachez sur le gouvernement : c'est ce qui nous réunit tous";
			break;
		case '3':
			name = "Le changement c'est maintenant";
			damage = 20;
			description = "Oui certains croient encore à ce slogan, ça fait du mal à entendre";
			break;
		default:
			return null;
			break;
	}
	return new Attack(name, damage, description);
}