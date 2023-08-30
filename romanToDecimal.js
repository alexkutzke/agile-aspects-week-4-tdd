const valores = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
]);

function romanToDecimal(romanValue){
    let resultado = 0;
    
    if(romanValue){
        let romanValueSplit = romanValue.split('');
        romanValueSplit.forEach(function(element, index){
            resultado += valores.get(element) < valores.get(romanValueSplit[index+1])
            ? -valores.get(element) : valores.get(element);
        });
    }
    return resultado;
}

export { romanToDecimal }