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
      icon: "media/flacostacos.png"
    },

    Starbucks: {
      icon: "media/starbucks.png"
    },

    Blaze Pizza: {
      icon: "media/blazepizza.png"
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
    {lat: 41.874485, lng: -87.627658},
    {lat: 41.874505, lng: -87.627524},
    {lat: 41.875437, lng: -87.627645}, //blaze pizza
    {lat: 41.875304, lng: -87.627727},
    {lat: 41.874657, lng: -87.627689},
    {lat: 41.87466, lng: -87.62901}, //starbucks
    {lat: 41.874437, lng: -87.629146},
    {lat:41.872702, lng: -87.629062}, //flacos tacos
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
