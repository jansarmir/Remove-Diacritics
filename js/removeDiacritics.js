/*!
 * Remove-Diacritics v1.0.0 (https://github.com/jansarmir/Remove-Diacritics)
 *
 * @copyright 2016 Remove-Diacritics
 * Licensed under MIT (https://github.com/jansarmir/Remove-Diacritics/blob/master/LICENSE)
 */
(function(root) {
	'use strict';

	var trans = [
			{
				base : ' ',
				chars : '\u00A0'
			},
			{
				base : '0',
				chars : '\u07C0'
			},
			{
				base : 'A',
				chars : '\u00C0\u00C1\u00C2\u00C3\u00C4\u00C5\u0100\u0102\u0104\u01CD\u01DE\u01E0\u01FA\u0200\u0202\u0226\u023A\u1E00\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u24B6\u2C6F\uFF21'
			},
			{
				base : 'AA',
				chars : '\uA732'
			},
			{
				base : 'AE',
				chars : '\u00C6\u01E2\u01FC'
			},
			{
				base : 'AO',
				chars : '\uA734'
			},
			{
				base : 'AU',
				chars : '\uA736'
			},
			{
				base : 'AV',
				chars : '\uA738\uA73A'
			},
			{
				base : 'AY',
				chars : '\uA73C'
			},
			{
				base : 'B',
				chars : '\u0181\u0243\u1E02\u1E04\u1E06\u24B7\uFF22'
			},
			{
				base : 'C',
				chars : '\u00C7\u0106\u0108\u010A\u010C\u0187\u023B\u1E08\u24B8\uA73E\uFF23'
			},
			{
				base : 'D',
				chars : '\u010E\u0110\u0189\u018A\u018B\u1D05\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u24B9\uA779\uA7AA\uFF24'
			},
			{
				base : 'Dh',
				chars : '\u00D0'
			},
			{
				base : 'DZ',
				chars : '\u01C4\u01F1'
			},
			{
				base : 'Dz',
				chars : '\u01C5\u01F2'
			},
			{
				base : 'E',
				chars : '\u00C8\u00C9\u00CA\u00CB\u0112\u0114\u0116\u0118\u011A\u018E\u0190\u0204\u0206\u0228\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u24BA\uFF25'
			},
			{
				base : 'F',
				chars : '\u0191\u1E1E\u24BB\uA77B\uFF26'
			},
			{
				base : 'G',
				chars : '\u011C\u011E\u0120\u0122\u0193\u01E4\u01E6\u01F4\u1E20\u24BC\uA77D\uA77E\uA7A0\uFF27'
			},
			{
				base : 'H',
				chars : '\u0124\u0126\u021E\u1E22\u1E24\u1E26\u1E28\u1E2A\u24BD\u2C67\u2C75\uA78D\uFF28'
			},
			{
				base : 'I',
				chars : '\u00CC\u00CD\u00CE\u00CF\u0128\u012A\u012C\u012E\u0130\u0197\u01CF\u0208\u020A\u1E2C\u1E2E\u1EC8\u1ECA\u24BE\uFF29'
			},
			{
				base : 'J',
				chars : '\u0134\u0237\u0248\u24BF\uFF2A'
			},
			{
				base : 'K',
				chars : '\u0136\u0198\u01E8\u1E30\u1E32\u1E34\u24C0\u2C69\uA740\uA742\uA744\uA7A2\uFF2B'
			},
			{
				base : 'L',
				chars : '\u0139\u013B\u013D\u013F\u0141\u023D\u1E36\u1E38\u1E3A\u1E3C\u24C1\u2C60\u2C62\uA746\uA748\uA780\uFF2C'
			},
			{
				base : 'LJ',
				chars : '\u01C7'
			},
			{
				base : 'Lj',
				chars : '\u01C8'
			},
			{
				base : 'M',
				chars : '\u019C\u1E3E\u1E40\u1E42\u24C2\u2C6E\uFF2D'
			},
			{
				base : 'N',
				chars : '\u00D1\u0143\u0145\u0147\u019D\u01F8\u0220\u041B\u0508\u1E44\u1E46\u1E48\u1E4A\u24C3\uA790\uA7A4\uFF2E'
			},
			{
				base : 'NJ',
				chars : '\u01CA'
			},
			{
				base : 'Nj',
				chars : '\u01CB'
			},
			{
				base : 'O',
				chars : '\u00D2\u00D3\u00D4\u00D5\u00D6\u00D8\u014C\u014E\u0150\u0186\u019F\u01A0\u01D1\u01EA\u01EC\u01FE\u020C\u020E\u022A\u022C\u022E\u0230\u1E4C\u1E4E\u1E50\u1E52\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u24C4\uA74A\uA74C\uFF2F'
			},
			{
				base : 'OE',
				chars : '\u0152'
			},
			{
				base : 'OI',
				chars : '\u01A2'
			},
			{
				base : 'OO',
				chars : '\uA74E'
			},
			{
				base : 'OU',
				chars : '\u0222'
			},
			{
				base : 'P',
				chars : '\u01A4\u1E54\u1E56\u24C5\u2C63\u03A1\uA750\uA752\uA754\uFF30'
			},
			{
				base : 'Q',
				chars : '\u024A\u24C6\uA756\uA758\uFF31'
			},
			{
				base : 'R',
				chars : '\u0154\u0156\u0158\u0210\u0212\u024C\u1E58\u1E5A\u1E5C\u1E5E\u24C7\u2C64\uA75A\uA782\uA7A6\uFF32'
			},
			{
				base : 'S',
				chars : '\u015A\u015C\u015E\u0160\u0218\u1E60\u1E62\u1E64\u1E66\u1E68\u1E9E\u24C8\u2C7E\uA784\uA7A8\uFF33'
			},
			{
				base : 'T',
				chars : '\u0162\u0164\u0166\u01AC\u01AE\u021A\u023E\u1E6A\u1E6C\u1E6E\u1E70\u24C9\uA786\uFF34'
			},
			{
				base : 'Th',
				chars : '\u00DE'
			},
			{
				base : 'TZ',
				chars : '\uA728'
			},
			{
				base : 'U',
				chars : '\u00D9\u00DA\u00DB\u00DC\u0168\u016A\u016C\u016E\u0170\u0172\u01AF\u01D3\u01D5\u01D7\u01D9\u01DB\u0214\u0216\u0244\u1E72\u1E74\u1E76\u1E78\u1E7A\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u24CA\uFF35'
			},
			{
				base : 'V',
				chars : '\u01B2\u0245\u1E7C\u1E7E\u24CB\uA75E\uFF36'
			},
			{
				base : 'VY',
				chars : '\uA760'
			},
			{
				base : 'W',
				chars : '\u0174\u1E80\u1E82\u1E84\u1E86\u1E88\u24CC\u2C72\uFF37'
			},
			{
				base : 'X',
				chars : '\u1E8A\u1E8C\u24CD\uFF38'
			},
			{
				base : 'Y',
				chars : '\u00DD\u0176\u0178\u01B3\u0232\u024E\u1E8E\u1EF2\u1EF4\u1EF6\u1EF8\u1EFE\u24CE\uFF39'
			},
			{
				base : 'Z',
				chars : '\u0179\u017B\u017D\u01B5\u0224\u1E90\u1E92\u1E94\u24CF\u2C6B\u2C7F\uA762\uFF3A'
			},
			{
				base : 'a',
				chars : '\u00E0\u00E1\u00E2\u00E3\u00E4\u00E5\u0101\u0103\u0105\u01CE\u01DF\u01E1\u01FB\u0201\u0203\u0227\u0250\u0251\u1E01\u1E9A\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u24D0\u2C65\uFF41'
			},
			{
				base : 'aa',
				chars : '\uA733'
			},
			{
				base : 'ae',
				chars : '\u00E6\u01E3\u01FD'
			},
			{
				base : 'ao',
				chars : '\uA735'
			},
			{
				base : 'au',
				chars : '\uA737'
			},
			{
				base : 'av',
				chars : '\uA739\uA73B'
			},
			{
				base : 'ay',
				chars : '\uA73D'
			},
			{
				base : 'b',
				chars : '\u0180\u0182\u0183\u0253\u1E03\u1E05\u1E07\u24D1\uFF42'
			},
			{
				base : 'c',
				chars : '\u00E7\u0107\u0109\u010B\u010D\u0188\u023C\u1E09\u2184\u24D2\uA73F\uFF43'
			},
			{
				base : 'd',
				chars : '\u010F\u0111\u018C\u0256\u0257\u0266\u0501\u13E7\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u24D3\uA77A\uFF44'
			},
			{
				base : 'dh',
				chars : '\u00F0'
			},
			{
				base : 'dz',
				chars : '\u01C6\u01F3'
			},
			{
				base : 'e',
				chars : '\u00E8\u00E9\u00EA\u00EB\u0113\u0115\u0117\u0119\u011B\u01DD\u0205\u0207\u0229\u0247\u025B\u1D07\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u24D4\uFF45'
			},
			{
				base : 'f',
				chars : '\u0192\u1E1F\u24D5\uA77C\uFF46'
			},
			{
				base : 'ff',
				chars : '\uFB00'
			},
			{
				base : 'fi',
				chars : '\uFB01'
			},
			{
				base : 'fl',
				chars : '\uFB02'
			},
			{
				base : 'ffi',
				chars : '\uFB03'
			},
			{
				base : 'ffl',
				chars : '\uFB04'
			},
			{
				base : 'g',
				chars : '\u011D\u011F\u0121\u0123\u01E5\u01E7\u01F5\u0260\u0262\u1D79\u1E21\u24D6\uA77F\uA7A1\uFF47'
			},
			{
				base : 'h',
				chars : '\u0125\u0127\u021F\u0265\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E96\u24D7\u2C68\u2C76\uFF48'
			},
			{
				base : 'hv',
				chars : '\u0195'
			},
			{
				base : 'i',
				chars : '\u00EC\u00ED\u00EE\u00EF\u0129\u012B\u012D\u012F\u0131\u01D0\u0209\u020B\u0268\u1E2D\u1E2F\u1EC9\u1ECB\u24D8\uFF49'
			},
			{
				base : 'j',
				chars : '\u0135\u01F0\u0249\u24D9\uFF4A'
			},
			{
				base : 'k',
				chars : '\u0137\u0199\u01E9\u1E31\u1E33\u1E35\u24DA\u2C6A\uA741\uA743\uA745\uA7A3\uFF4B'
			},
			{
				base : 'l',
				chars : '\u013A\u013C\u013E\u0140\u0142\u017F\u019A\u026B\u026D\u1E37\u1E39\u1E3B\u1E3D\u24DB\u2C61\uA747\uA749\uA781\uFF4C'
			},
			{
				base : 'lj',
				chars : '\u01C9'
			},
			{
				base : 'm',
				chars : '\u026F\u0271\u03FB\u1E3F\u1E41\u1E43\u24DC\uFF4D'
			},
			{
				base : 'n',
				chars : '\u00F1\u0144\u0146\u0148\u0149\u019E\u01F9\u0272\u043B\u0509\u1D0E\u1E45\u1E47\u1E49\u1E4B\u24DD\uA791\uA7A5\uFF4E'
			},
			{
				base : 'nj',
				chars : '\u01CC'
			},
			{
				base : 'o',
				chars : '\u00F2\u00F3\u00F4\u00F5\u00F6\u00F8\u014D\u014F\u0151\u01A1\u01D2\u01EB\u01ED\u01FF\u020D\u020F\u022B\u022D\u022F\u0231\u0254\u0275\u1D11\u1E4D\u1E4F\u1E51\u1E53\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u24DE\uA74B\uA74D\uFF4F'
			},
			{
				base : 'oe',
				chars : '\u0153'
			},
			{
				base : 'oi',
				chars : '\u01A3'
			},
			{
				base : 'oo',
				chars : '\uA74F'
			},
			{
				base : 'ou',
				chars : '\u0223'
			},
			{
				base : 'p',
				chars : '\u01A5\u03C1\u1D7D\u1E55\u1E57\u24DF\uA751\uA753\uA755\uFF50'
			},
			{
				base : 'q',
				chars : '\u024B\u24E0\uA757\uA759\uFF51'
			},
			{
				base : 'r',
				chars : '\u0155\u0157\u0159\u0211\u0213\u024D\u027D\u1E59\u1E5B\u1E5D\u1E5F\u24E1\uA75B\uA783\uA7A7\uFF52'
			},
			{
				base : 's',
				chars : '\u015B\u015D\u015F\u0161\u0219\u023F\u0282\u1E61\u1E63\u1E65\u1E67\u1E69\u1E9B\u24E2\uA785\uA7A9\uFF53'
			},
			{
				base : 'ss',
				chars : '\u00DF'
			},
			{
				base : 't',
				chars : '\u0163\u0165\u0167\u01AD\u021B\u0288\u1E6B\u1E6D\u1E6F\u1E71\u1E97\u24E3\u2C66\uA787\uFF54'
			},
			{
				base : 'th',
				chars : '\u00FE'
			},
			{
				base : 'tz',
				chars : '\uA729'
			},
			{
				base : 'u',
				chars : '\u00F9\u00FA\u00FB\u00FC\u0169\u016B\u016D\u016F\u0171\u0173\u01B0\u01D4\u01D6\u01D8\u01DA\u01DC\u0215\u0217\u0289\u1E73\u1E75\u1E77\u1E79\u1E7B\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u24E4\uFF55'
			}, {
				base : 'v',
				chars : '\u028B\u028C\u1E7D\u1E7F\u24E5\uA75F\uFF56'
			}, {
				base : 'vy',
				chars : '\uA761'
			}, {
				base : 'w',
				chars : '\u0175\u1E81\u1E83\u1E85\u1E87\u1E89\u1E98\u24E6\u2C73\uFF57'
			}, {
				base : 'x',
				chars : '\u1E8B\u1E8D\u24E7\uFF58'
			}, {
				base : 'y',
				chars : '\u00FD\u00FF\u0177\u01B4\u0233\u024F\u1E8F\u1E99\u1EF3\u1EF5\u1EF7\u1EF9\u1EFF\u24E8\uFF59'
			}, {
				base : 'z',
				chars : '\u017A\u017C\u017E\u01B6\u0225\u0240\u1E91\u1E93\u1E95\u24E9\u2C6C\uA763\uFF5A'
			} ];

	var map = {};
	for (var i = 0; i < trans.length; i++) {
		var letters = trans[i].chars;
		for (var j = 0; j < letters.length; j++) {
			map[letters[j]] = trans[i].base;
		}
	}

	root.removeDiacritics = function(text) {
		return text.replace(/[^\u0000-\u007E]/g, function(a) {
			return map[a] || a;
		});
	};
}(this));
