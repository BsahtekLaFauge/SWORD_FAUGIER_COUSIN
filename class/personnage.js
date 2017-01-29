	function Personnage(name, isMan, level, ally, statsCoefs, attacksInfos, imageUrl) {
		var self = this;

		// Mise à jour des infos sur le perso
		self.name = name;
		self.isMan = isMan;
		self.level = level;
		self.ally = ally;
		self.experience = 0;
		self.experienceToNextLevel = 50;
		self.imageUrl = imageUrl;

		self.attacks = [];
		$.each(attacksInfos, function(key, attackInfos) {
			if (attackInfos.lvlToReach <= self.level) {
				self.attacks.push(generateAttack(attackInfos.id));
			}
		});

		// Mise à jour des stats en fonction des coefficients et du level
		self.statsCoefs = statsCoefs;
		self.stats = [self.statsCoefs[0]*10 + self.statsCoefs[0]*self.level , 0, 0, 0, 0];
		self.currentLifePoints = self.stats[0];
		for (var i = 1; i < 5; i ++) {
			self.stats[i] = self.statsCoefs[i]*(7 + self.level);
		}

		for (var i = 1; i <= self.level; i++) {
			self.experienceToNextLevel += i*10;
		}
	}

	function levelUp(perso) {
		var i;
		while (perso.experience >= perso.experienceToNextLevel) {
			for (i = 0; i < 5; i ++) {
				perso.stats[i] += perso.statsCoefs[i];
			}
			perso.experience -= perso.experienceToNextLevel;
			perso.experienceToNextLevel += perso.level*10;
			perso.level++;
		}
	}