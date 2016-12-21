$(function() {
	var persoList = [],
		i;
	for (i = 0; i < localStorage.listePersos.length; i++) {
		persoList.push(JSON.parse(localStorage.listePersos[i]));
	}
	var idTableau = localStorage.tableau;
		tableau = generateStory(idTableau);
});