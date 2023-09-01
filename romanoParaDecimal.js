//SE NÃO TIVER RODANDO OS TESTES
//rm -rf node_modules package-lock.json && npm install && npm test

export function romanoParaDecimal(romano){
    if (!romano) return 0;

    let decimal = 0;
    let proximoValor = 0;
    for (let i = romano.length - 1; i >= 0; i--) {
        let valor = algarismoRomanoParaDecimal(romano[i]);

        decimal += valor * Math.sign(valor + 0.5 - proximoValor);

        proximoValor = valor;
    }
    return decimal;
}

function algarismoRomanoParaDecimal(algarismo) {
    return Math.floor(Math.pow(10, "IXCM".indexOf(algarismo))) 
        + 5 * Math.floor(Math.pow(10, "VLD".indexOf(algarismo)));
}