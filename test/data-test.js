var fs = require("fs");
function include(file_) {
	with (global) {
		eval(fs.readFileSync(file_) + '');
	}
};
include('../js/removeDiacritics.js');

assert = require('assert');

assert.strictEqual(removeDiacritics("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"), "Internationalizati0n");
assert
		.strictEqual(
				removeDiacritics("Båｃòл íｐѕùｍ ðｏɭ߀ｒ ѕïｔ ａϻèｔ âùþê ａԉᏧ߀üïｌɭê ƃëéｆ ｃｕｌρá ｆïｌèｔ ϻｉǥｎòｎ ｃｕρｉᏧａｔａｔ ｕｔ êлｉｍ ｔòлɢùê."),
				"Bacon ipѕum dhol0r ѕit amet authe and0uille beef culpa filet mignon cupidatat ut enim tongue.");
assert.strictEqual(removeDiacritics("ᴎᴑᴅᴇȷʂ"), "noDeJs");
assert.strictEqual(removeDiacritics("hambúrguer"), "hamburguer");
assert.strictEqual(removeDiacritics("hŒllœ"), "hOElloe");
assert.strictEqual(removeDiacritics("Fußball"), "Fussball");
assert.strictEqual(removeDiacritics("ABCDEFGHIJKLMNOPQRSTUVWXYZé"), "ABCDEFGHIJKLMNOPQRSTUVWXYZe");
assert.strictEqual(removeDiacritics("Rozmýšľal som nad náhodným textom, použiteľným na ďatlovanie na rýchlosť."),
		"Rozmyslal som nad nahodnym textom, pouzitelnym na datlovanie na rychlost.");