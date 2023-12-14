let slide = 1;
showSlides(slide);

function plusSlides(num) {
  showSlides(slide += num);
}

function currentSlide(num) {
  showSlides(slide = num);
}

function showSlides(num) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0)
    return;
  let dots = document.getElementsByClassName("dot");
  if (num > slides.length) {slide = 1}    
  if (num < 1) {slide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide-1].style.display = "block";  
  dots[slide-1].className += " active";
}
let map;
async function initMap() {

    const jcp = { lat: 41.87296, lng: -87.62791 };
    const center = { lat: 41.87247, lng: -87.62731};

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: center,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: jcp,
    title: "My School",
  });

  const logos = {
    Flacos Tacos: {
      icon: "media/flacoslogo.png"
    },

    Starbucks: {
      icon: "media/starbuckslogo.png"
    },

    Blaze Pizza: {
      icon: "media/blazelogo.png"
    }
  }
  
  const places = [
    {
      position: new google.maps.LatLng(41.87466, -87.62901),
      type: "Starbucks",
    },
    {
      position: new google.maps.LatLng(41.872702, -87.629062),
      type: "Flacos Tacos",
    },
    {
      position: new google.maps.LatLng(41.875437, -87.627645),
      type: "Blaze Pizza"
    },
  ];

for (let i = 0; i < places.length; i++) {
    const marker = new google.maps.Marker({
      position: places[i].position,
      logo: logos[places[i].type].icon,
      map: map,
    });
  }

  var points = [
    {lat: 41.87296, lng: -87.62767}, //jcp
    {lat: 41.87298, lng: -87.62774},
    {lat: 41.87463, lng: -87.62763}, //corner
    {lat: 41.87461, lng: -87.62902},
    {lat: 41.87466, lng: -87.62901}, //starbucks
    {lat:41.874435, lng: -87.629133},
    {lat:41.872702, lng: -87.629062}, //Flacos Tacos
    {lat:41.872357, lng: -87.629074}, //corner
    {lat:41.872346, lng: -87.627545}, 
    {lat:41.872417,lng:-87.627401},
    {lat:41.875437, -87.627645}, //Blaze Pizza
    
   
  ];

  var path = new google.maps.Polyline({
    path: points,
    geodesic: true,
    strokeColor: "#e33057",
    strokeOpacity: 1.0,
    strokeWeight: 3,
  });

  path.setMap(map);
}

initMap();
