function traduzirNumeralRomano(caractere) {
    return Math.floor(Math.pow(10, "IXCM".indexOf(caractere))) 
    + 5 * Math.floor(Math.pow(10, "VLD".indexOf(caractere)));
}

function entradaValida(romanNumberString){
    if (romanNumberString == null) return false;

    for (let index = 0; index < romanNumberString.length; index++) {
        if (!("MDCLXVI".includes(romanNumberString[index]))) return false; 
    }
    
    return true
}
export function romanToDec(romanNumberString){

    let n = 0;

    if (!entradaValida(romanNumberString)) return 0

    let numeralDaDireita = 0;

    for (let i = romanNumberString.length - 1; i >= 0; i--) {
        let valor = traduzirNumeralRomano(romanNumberString.charAt(i));
        n += valor * Math.sign(valor + 0.5 - numeralDaDireita);
        numeralDaDireita = valor;
    }

    return n;
}
