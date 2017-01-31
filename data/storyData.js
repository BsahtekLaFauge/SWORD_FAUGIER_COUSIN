function generateStory(id) {
	var storyText,
		choices = [],
		title,
		image = null;

	switch (id) {
		case '1':
			title = "Début de carrière prometteur";
			storyText = "Ça y est votre discours sur les migrants vous a fait connaître par le grand publique, \
			les chaînes de télé commencent à parler de vous, et plusieurs politiciens renommés vous ont dans le colimateur, \
			mais vous avez un objectif à atteindre : Devenir président de la république.";
			choices.push({
				text: "Continuer",
				nextTableauNum: '2',
				battle: '0'
			});
			break;
		case '2':
			title = "Le Tuto";
			storyText = "Vous ne devez pas y connaître grand chose en politique je me trompe? \
			Voici un petit tuto pour comprendre comment ça marche. Si tu penses en avoir besoin dit \"Wallah.";
			choices.push({
				text: "Wallah",
				nextTableauNum: '4',
				battle: '0'
			});
			choices.push({
				text: "Allah Akbar",
				nextTableauNum: '3',
				battle: '0'
			});
			break;
		case '3':
			title = "GAME OVER";
			storyText = "Je vous rapelle que nous sommes en plein plan Vigipirate. \
			Un tel affront n'a pas su être tolléré par l'opinion publique, vous avez pris 3 ans ferme pour apologie du terrorisme, \
			et votre carrière politique est partie en fumée plus vite qu'un djihadiste.";
			choices.push({
				text: "Reprendre depuis le dernier tableau",
				nextTableauNum: '2',
				battle: '0'
			});
			choices.push({
				text: "Abandonner et quitter",
				nextTableauNum: '0',
				battle: '0'
			});
			break;
		case '4':
			title = "Votre premier débat";
			storyText = "Pour commencer vous devriez apprendre à débattre (on préfèrera le terme combattre, ça aguiche plus et ça évitera à nos développeurs de faire des lapsus).\
			Mais pour cela il faudrait que vous trouviez des adversaires, mais ceux-ci ne courent pas à tous les coins de rue";
			choices.push({
				text: "Continuer",
				nextTableauNum: '5',
				battle: '0'
			});
			break;
		case '5':
			title = "Votre premier combat";
			storyText = "Comme dit tout à l'heure, les adversaires sont assez rares... Oh mon dieu, incroyable! Un militant PS vous défie, Qu'est-ce que le scénario du jeu est bien fait! \
			Il n'a pas l'air très fort et malin (en même temps il est au PS), vous devriez pouvoir l'humilier assez facilement.";
			choices.push({
				text: "Fuir comme le lâche que vous êtes",
				nextTableauNum: '6',
				battle: '0'
			});
			choices.push({
				text: "Le combattre",
				nextTableauNum: '8',
				battle: '1'
			});
			break;
		case '6':
			title = "GAME OVER";
			storyText = "Vous avez fui comme un lâche face à un insignifiant militant du PS, tout votre fan club pense que vous avez moins de courage que François Hollande, \
			et votre carrière prend fin. (promis c'est le dernier GAME OVER prématuré)";
			choices.push({
				text: "Reprendre depuis le dernier tableau",
				nextTableauNum: '5',
				battle: '0'
			});
			choices.push({
				text: "Quitter",
				nextTableauNum: '0',
				battle: '0'
			});
			break;
		case '7':
			title = "GAME OVER";
			storyText = "Vos adversaires ont eu raison de vous et vous passez pour un nul auprès de tous vos fans, \
			vous prenez votre retraite avant même d'avoir pu frauder un minimum";
			choices.push({
				text: "Reprendre depuis le dernier tableau",
				nextTableauNum: localStorage.getItem('tableau'),
				battle: '0'
			});
			choices.push({
				text: "Quitter",
				nextTableauNum: '0',
				battle: '0'
			});
			break;
		case '8':
			title = "Victoire incroyable";
			storyText = "Waouh! vous avez gagné, personne n'en a quoi que ce soit à faire mais vous pouvez tout de même en tirer une satisfaction.\
			Si vous avez été blessé dans la bataille, vous devriez prendre un petit remontant dans votre inventaire en bas à gauche, ah mais non c'est vrai que vous êtes pauvre.";
			choices.push({
				text: "Continuer",
				nextTableauNum: '9',
				battle: '0'
			});
			break;
		case '10':
		title = "Refus catégorique";
		storyText = "Vous voulez assister au meeting de Florian Philippot, un homme de couleur vous suit de près...\
		 Aussitôt Jean-Marie Lepen vous bloque la route et le somme de \"rentrer dans son pays\" !";
		choices.push({
			text: "Défendre l'homme de couleur",
			nextTableauNum: '11',
			battle: '3'
			});
			choices.push({
				text: "Chasser l'homme à coups de pieds aux fesses",
				nextTableauNum: '12',
				battle: '0'
				});
				break;
	 case '11':
		title = "Nouvel ami";
		storyText = "L'homme est émerveillé par votre courage et vous offre une petite boîte d'origan qui en fait n'est pas de l'origan, mais il vous fait ainsi comprendre qu'il est proche de la nature. \
		Il vous tend ensuite sa carte d'Europe Ecologie les Verts. Effectivement, elle est verte. \
Félicitations ! Votre renommé grandit !";
		choices.push({
			text: "Continuer",
			nextTableauNum: '13',
			battle: '0'
			});
		break;
	 case '12':
		title = "Nouvel ami";
		storyText = "Jean Marie assiste à la scène avec des étoiles dans les yeux, \
		cette pointe de racisme réveille en lui la nostalgie de sa jeunesse. Il voit de l'avenir en vous,\
		il vous propose de rentrer pour vous dispenser quelques précieux conseils politiques.";
		 choices.push({
		   text: "Entrer",
		   nextTableauNum: '14',
		   battle: '0'
			 });
	  choices.push({
	    text: "Décliner grâce à un prétexte bidon",
	 	  nextTableauNum: '14',
 		  battle: '0'
	 	  });
				 break;
		default:
			return null;
			break;
	}
	return new Tableau(id, title, storyText, choices, image);
}
