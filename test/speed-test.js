var teste = "L'avantage d'utiliser le lorem ipsum est bien évidemment de pouvoir créer des maquettes ou de remplir un site internet de contenus qui présentent un rendu s'approchant un maximum du rendu final. \n Par défaut lorem ipsum ne contient pas d'accent ni de caractères spéciaux contrairement à la langue française qui en contient beaucoup. C'est sur ce critère que nous proposons une solution avec cet outil qui générant du faux-texte lorem ipsum mais avec en plus, des caractères spéciaux tel que les accents ou certains symboles utiles pour la langue française. \n L'utilisation du lorem standard est facile d’utilisation mais lorsque le futur client utilisera votre logiciel il se peut que certains caractères spéciaux ou qu'un accent ne soient pas codés correctement. \n Cette page a pour but donc de pouvoir perdre le moins de temps possible et donc de tester directement si tous les encodages de base de donnée ou des sites sont les bons de plus il permet de récuperer un code css avec le texte formaté !";

var fs = require("fs");
function include(file_) {
	with (global) {
		eval(fs.readFileSync(file_) + '');
	}
};

var MAX = 1000000;
var before = 0;

include('../js/removeDiacritics.js');
before = Date.now();
for (var i = 0; i < MAX; i++) {
	removeDiacritics(teste);
}
console.log('removeDiacritics.js ' + (Date.now() - before) / 1000);

include('../js/String.removeDiacritics.js');
before = Date.now();
for (var i = 0; i < MAX; i++) {
	var text = teste;
	text.removeDiacritics();
}
console.log('String.removeDiacritics.js ' + (Date.now() - before) / 1000);
