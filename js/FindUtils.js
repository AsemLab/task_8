function findInAll(name) {

    var body = document.getElementById('resultList')
    body.innerHTML = ""
    printCountries(findCountryByName(name), false)
    printLocations(findLocationByCity(name), false)
    printRegions(findRegionByName(name), false)

  }

  function findCountryByName(name) {
    var result = []
    for (var c in countries) {
      if (countries[c].name.includes(name))
        result.push(countries[c])
    }

    return result
  }

  function findLocationByCity(name) {
    var result = []
    for (var l in locations) {
      if (locations[l].city.includes(name))
        result.push(locations[l])
    }

    return result
  }

  function findRegionByName(name) {
    var result = []
    for (var r = 0; r < regions.length; r++) {
      if (regions[r].name.includes(name))
        result.push(regions[r])
    }

    return result
  }
