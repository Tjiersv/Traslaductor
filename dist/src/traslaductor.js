'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = traslaductor;
function traslaductor(str) {
    var translation = str;

    // 1. - Si la palabra termina con 'ar', se le quitanesas dos palabras
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    // 2. - Si la palabra inicia con 'z', se le añade 'pe'
    if (str.toLowerCase().charAt(0) === 'z') {
        translation += 'pe';
    }

    // 3. - Si la palabra traducida tiene más de 10 letras,
    if (translation.length >= 10) {
        var l = translation.length / 2;
        translation = translation.substring(0, l) + '-' + translation.substring(l);
    }

    // 4. - Si la palabra original es un palíndromo, ninguna regla cuenta y la palabra se devuelve igual intercalando mayusculas y minusculas
    var invertWord = reverse(str);
    if (str.toLowerCase() === invertWord.toLowerCase()) {
        translation = minMay(str);
    }

    return translation;
}

var reverse = function reverse(str) {
    return str.split('').reverse().join('');
};
var minMay = function minMay(str) {
    return str.split('').map(function (value, idx) {
        return idx % 2 == 0 ? value.toUpperCase() : value.toLowerCase();
    }).join('');
};