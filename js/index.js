var map = L.map('map').setView([51.505, -0.09], 13);
var marker = L.marker([51.5, -0.09]).addTo(map);
const ip_input = document.querySelector(".ip-input");
const ip_addr_cell = document.querySelector(".ip-address .value");
const location_cell = document.querySelector(".location .value");
const timezone_cell = document.querySelector(".timezone .value");
const isp_cell = document.querySelector(".isp .value");

const apiKey = "at_cwwlrdAFfpzQvPVeAOLeFamTLyfFD";

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
// Creating Our XMLHttpRequest object 
var xhr = new XMLHttpRequest();

function submitIPAddr(){
    let ip_addr = ip_input.value;
    var url = 'https://geo.ipify.org/api/v2/country?apiKey=' + apiKey + '&ipAddress=' + ip_addr;
    
    // Making our connection  
    xhr.open("GET", url, true);

    // function execute after request is successful 
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let ip_addr_info = JSON.parse(this.responseText);
            
            ip_addr_cell.innerHTML = ip_addr_info.ip;
            location_cell.innerHTML = ip_addr_info.location.country + ", " + ip_addr_info.location.region;
            timezone_cell.innerHTML = "UTC" + ip_addr_info.location.timezone;
            isp_cell.innerHTML = ip_addr_info.isp;
            
        }
    }
    // Sending our request 
    try{
        xhr.send();
    }
    catch(error){
        console.log(error);
    }
    
}























/*

*/