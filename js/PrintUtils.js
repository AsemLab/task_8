function printCountries(result, clear) {
    var body = document.getElementById('resultList')
    if (result.length == 0) {
      body.innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center'>" +
        "No Countries found!</li>"
      return
    }
    if (clear)
      body.innerHTML = ""
    for (var x in result) {
      body.innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center'>"
        + result[x].name
        + "<span class='badge bg-warning rounded-pill'>" + result[x].id + "</span></li>"

    }
  }

  function printLocations(result, clear) {
    var body = document.getElementById('resultList')
    if (result.length == 0) {
      body.innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center'>" +
        "No Locations found!</li>"
      return
    }
    if (clear)
      body.innerHTML = ""

    for (var x in result) {
      body.innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center'>"
        + result[x].streetAddress
        + "<span class='badge bg-info rounded-pill'>" + result[x].city + "</span></li>"
    }
  }

  function printRegions(result, clear) {
    var body = document.getElementById('resultList')
    if (result.length == 0) {
      body.innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center'>" +
        "No Regions found!</li>"
      return
    }
    if (clear)
      body.innerHTML = ""
    for (var x in result) {
      body.innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center'>"
        + result[x].name
        + "<span class='badge bg-danger rounded-pill'>" + result[x].id + "</span></li>"
    }
  }
