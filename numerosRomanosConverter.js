class NumerosRomanosConverter {

    static romanoParaNumero(romano) {

        const romanoValores = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        let numero = 0;
        let i = 0;

        while (i < romano.length) {
            const atual = romanoValores[romano[i]];
            const proximo = romanoValores[romano[i + 1]];

            if (proximo && atual < proximo) {
                numero += proximo - atual;
                i += 2; // Pula dois algarismos para o próximo par
            } else {
                numero += atual;
                i += 1; // Pula um algarismo para o próximo
            }
        }
        return numero;
    }

}

export default NumerosRomanosConverter;