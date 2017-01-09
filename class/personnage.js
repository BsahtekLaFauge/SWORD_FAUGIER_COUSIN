	function Personnage(name, isMan, level, ally, statCoefs, attacksInfos, imageUrl) {
		var self = this;

		// Mise à jour des infos sur le perso
		self.name = name;
		self.isMan = isMan;
		self.level = level;
		self.ally = ally;
		self.experience = 0;
		self.imageUrl = imageUrl;

		self.attacks = [];
		$.each(attacksInfos, function(key, attackInfos) {
			if (attackInfos.lvlToReach <= self.level) {
				console.debug(self.attacks);
				self.attacks.push(generateAttack(attackInfos.id));
				console.debug(self.attacks);
			}
		});

		// Mise à jour des stats en fonction des coefficients et du level
		self.statCoefs = statCoefs;
		self.stats = [self.statCoefs[0]*10 + self.statCoefs[0]*self.level , 0, 0, 0, 0];
		self.currentLifePoints = self.stats[0];
		for (var i = 1; i < 5; i ++) {
			self.stats[i] = self.statCoefs[i]*(7 + self.level);
		}
	}

	function levelUP(perso) {
		var i;
		for (i = 0; i < 5; i ++) {
			perso.stats[i] += perso.statsCoefs[i];
		}
	}