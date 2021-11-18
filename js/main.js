'use-strict';



let mymap = L.map('map').setView([0, 0], 2)


const key = "at_jW2AJeLfsMxozC2VWYGlxA7hb8dLr"

const accessToken = "pk.eyJ1IjoiYWRva292YSIsImEiOiJja3cwazFjdGswZ2FnMnBwcTB6ZHBwc25kIn0.TK0UISwIni8McB1lUblkBg"
function mapbox() {

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWRva292YSIsImEiOiJja3cwazFjdGswZ2FnMnBwcTB6ZHBwc25kIn0.TK0UISwIni8McB1lUblkBg'
  }).addTo(mymap);
}
mapbox(mymap);


let form = document.getElementById('formID')

form.addEventListener('submit', function (event) {
  event.preventDefault();
  getIp()
})

async function getIp(data) {
  try {
    let api_key =
      "at_jW2AJeLfsMxozC2VWYGlxA7hb8dLr";

    let domain = document.getElementById('ip-input').value

    let ip = document.getElementById("ip-input").value;



    const url = ` https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip}&domain=${domain}`
    const response = await fetch(url, {
      method: 'GET',
      data: { apiKey: api_key, ipAddress: ip },

    })
    const json = await response.json();
    const lat = json.location.lat
    const lng = json.location.lng
    const location = json.location.city
    const country = json.location.country
    const zipCode = json.location.postalCode
    const ipAdress = json.ip
    const timezone = json.location.timezone
    const isp = json.isp
    const latitude = json.location.lat
    const longitude = json.location.lng

    console.log(json)
    //  console.log(json.)
    // console.log(json.location.city)
    // console.log(json.isp)

    document.getElementById('timezone').textContent = 'UTC' + timezone
    document.getElementById('country').textContent = country + ","
    document.getElementById('city').textContent = location
    document.getElementById('zipcode').textContent = zipCode
    document.getElementById('isp').textContent = isp
    document.getElementById('ip-adress').textContent = ipAdress

    let marker = L.marker([lat, lng]).addTo(mymap);

    mymap.setView([lat, lng], 10)
  } catch (error) {
    // Add an Error message
    // document.getElementById('lat').textContent = 'Domain or Ip adress is invalid or not found'

  }
  // console.log(data.location)
}




// userInputIp()
// let polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047]
// ]).addTo(mymap);





//   // let defult = document.getElementById('ip-input').value = '22';
//   document.getElementById('ip-input').addEventListener('click',
//     function () {
//       updateCheckbox().addTo(mymap)

//     })
// }

