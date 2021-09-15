class NumeralRomano {
    static convertToDecimals(numerosRomanos) {
        var SimbolosValores =
        {
            "I": 1, "IV": 4, "V": 5, "IX": 9, "X": 10, "XL": 40, "L": 50, "XC": 90, "C": 100, "CD": 400, "D": 500, "CM": 900, "M": 1000
        }

        var SimbolosRomano = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        var Inicial = 0
        var Final = 1
        var Resultado = 0

        while (Final <= numerosRomanos.length) {
            for (var i in SimbolosRomano) {
                if (numerosRomanos.slice(Inicial, Final) === SimbolosRomano[i]) {
                    Resultado += SimbolosValores[SimbolosRomano[i]]
                    Inicial += 1
                    Final += 1
                    { break; }
                }
                else {
                    if (numerosRomanos.slice(Inicial, Final + 1) === SimbolosRomano[i]) {
                        Resultado += SimbolosValores[SimbolosRomano[i]]
                        Inicial += 2
                        Final += 2
                        { break; }
                    }
                }

            }
        }
        return Resultado
    }
}

export default NumeralRomano;