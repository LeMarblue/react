
class Instrument {
  constructor (type) {
    this.type = type
  }

  // get isTunedUp () {
  //   return this.isTunedUp
  // }

  playInstrument () {
    console.log('making a sound...')
    // this.isTunedUp = false
  }
}

class Guitar extends Instrument {
  constructor (stringsNum, color, material, brand, model) {
    super('strings')
    this.stringsNum = stringsNum
    this.color = color
    this.material = material
    this.brand = brand
    this.model = model
  }
}

const hendrixsGuitar = new Guitar(6, 'black with ornaments', 'korina wood', 'Gibson', 'flying V')
hendrixsGuitar.playInstrument()
