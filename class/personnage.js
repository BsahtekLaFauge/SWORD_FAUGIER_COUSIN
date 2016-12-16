
	function Personnage(name, sex, level, statCoefs, attacksId) {
		var self = this;

		// Mise à jour des infos sur le perso
		self.name = name;
		self.sex = sex;
		self.level = level;
		self.experience = 0;

		//TODO : gérer les attaques
		self.attacks = [];

		// Mise à jour des stats en fonction des coefficients et du level
		self.statCoefs = statCoefs;
		self.lifePoints = self.statCoefs[0]*15 + self.statCoefs[0]*self.level;
		self.attack = self.statCoefs[1]*10 + self.statCoefs[1]*self.level;
		self.defense = self.statCoefs[2]*10 + self.statCoefs[2]*self.level;
		self.speed = self.statCoefs[3]*10 + self.statCoefs[3]*self.level;
		self.luck = self.statCoefs[4]*10 + self.statCoefs[4]*self.level;
	}

	Personnage.prototype.levelUp = function() {
		this.lifePoints += this.statCoefs[0];
		this.attack += this.statCoefs[1];
		this.defense += this.statCoefs[2];
		this.speed += this.statCoefs[3];
		this.luck += this.statCoefs[4];
	}
