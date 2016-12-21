function generateStory(id) {
	var storyText,
		choices = [],
		title;

	switch (id) {
		case 1:
			title = "Début de carrière prometteur";
			storyText = "Ça y est votre discours sur les migrants vous a fait connaître par le grand publique, \
			les chaînes de télé commencent à parler de vous, et plusieurs politiciens renommés vous ont dans le colimateur, \
			mais vous avez un objectif à atteindre : Devenir président de la république.";
			choices.push({
				text: "Continuer",
				nextTableauNum: 2,
				battle: false
			});
			break;
		case 2:
			title = "Le Tuto";
			storyText = "Vous ne devez pas y connaître grand chose en politique je me trompe? \
			Voici un petit tuto pour comprendre comment ça marche. Si tu penses en avoir besoin dit \"Wallah\", \
			si tu te crois supérieur et que tu n'en a pas besoin dit \"Mashallah\"";
			choices.push({
				text: "Wallah",
				nextTableauNum: 4,
				battle: false
			});
			choices.push({
				text: "Mashallah",
				nextTableauNum: 5,
				battle: false
			});
			choices.push({
				text: "Allah Akbar",
				nextTableauNum: 3,
				battle: false
			});
			break;
		case 3:
			title = "GAME OVER";
			storyText = "Je vous rapelle que nous sommes en plein plan Vigipirate. \
			Un tel affront n'a pas su être tolléré par l'opinion publique, vous avez pris 3 ans ferme pour apologie du terrorisme, \
			et votre carrière politique est partie en fumée plus vite qu'un djihadiste.";
			choices.push({
				text: "Reprendre depuis le dernier tableau",
				nextTableauNum: 2,
				battle: false
			});
			choices.push({
				text: "Quitter",
				nextTableauNum: 0,
				battle: false
			});
			break;
	}
	return new Tableau(id, title, text, choices);
}