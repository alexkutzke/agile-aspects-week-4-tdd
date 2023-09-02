class MyErrors extends Error {
  constructor(message) {
    super(message)
    this.name = 'MyErrors'
  }

  static notFoundError() {
    return new MyErrors('Nenhum correspondente em numeral romano!')
  }
}

export default MyErrors
