function parseCountryJson(json) {

  for (var x = 0; x < json.length; x++) {
    countries.push(new Country(json[x].id, json[x].name, json[x].region.name));
  }
}

function parseLocationJson(json) {

  for (var x = 0; x < json.length; x++) {
    locations.push(new Location(json[x].id, json[x].streetAddress, json[x].postalCode,
      json[x].city, json[x].stateProvince, json[x].country.id));

  }
}

function parseRegionJson(json) {

  for (var x = 0; x < json.length; x++) {
    regions.push(new Region(json[x].id, json[x].name));
  }

  // Add regions to select
  initAddCountryInputs();
}

function getCountries() {
  var urlGet = "http://localhost:8080/locations/country/all";

  $.ajax({
    type: 'GET', dataType: 'json',
    url: urlGet,
    success: parseCountryJson
  })

}

function getLocations() {
  var urlGet = "http://localhost:8080/locations/location/all";

  $.ajax({
    type: 'GET', dataType: 'json',
    url: urlGet,
    success: parseLocationJson
  })
}

function getRegions() {
  var urlGet = "http://localhost:8080/locations/region/all";

  $.ajax({
    type: 'GET', dataType: 'json',
    url: urlGet,
    success: parseRegionJson
  })
}

function post() {
  var urlGet = "http://localhost:8080/locations/country/";

  var id = document.getElementById("country_id").value.toUpperCase();
  var country_name = document.getElementById("country_name").value;

  if (id.length == 0 || country_name.length == 0) {
    alert("Country id and name are required!")
    return
  }

  var region = document.getElementById("regionSelect").value

  $.ajax({
    method: "POST",
    url: urlGet,
    data: {
      country_id: id,
      name: country_name,
      region_id: region.toString()
    }
  });

  initAddCountryInputs()
  alert(country_name + " has been saved successfully")
}

