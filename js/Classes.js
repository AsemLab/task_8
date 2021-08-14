class Country {
    constructor(id, name, region) {
      this.id = id
      this.name = name
      this.region = region
    }
  }

  class Region {
    constructor(id, name) {
      this.id = id
      this.name = name
    }

  }

  class Location {
    constructor(id, streetAddress, postalCode, city, stateProvince, country) {
      this.id = id
      this.streetAddress = streetAddress
      this.postalCode = postalCode
      this.city = city
      this.stateProvince = stateProvince
      this.country = country
    }
  }
