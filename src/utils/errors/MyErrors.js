class MyErrors {
  constructor (message) {
    this.name = 'MyErrors'
    this.message = message || 'Erro desconhecido'
  }

  static notFoundError() {
    return new MyErrors('Nenhum correspondente em numeral romano!')
  }
}

module.exports = MyErrors