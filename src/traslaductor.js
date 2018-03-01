export default function traslaductor(str) {
    let translation = str;

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
        const l = translation.length / 2;
        translation = translation.substring(0, l) + '-' + translation.substring(l);
    }

    // 4. - Si la palabra original es un palíndromo, ninguna regla cuenta y la palabra se devuelve igual intercalando mayusculas y minusculas
    let invertWord = reverse(str)
    if (str.toLowerCase() === invertWord.toLowerCase()) {
        translation = minMay(str);
    }

    return translation;
}

let reverse = (str) => str.split('').reverse().join('');
let minMay = str => str.split('').map((value, idx) => idx % 2 == 0 ? value.toUpperCase() : value.toLowerCase()).join('');