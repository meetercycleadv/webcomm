let map;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 28.597244718652508, lng: 77.21373532657798, },
      mapTypeId: "terrain",
    });

    
    const flightPlanCoordinates = [
      { lat: 30.73784, lng: 76.78074},
      { lat: 31.25724, lng: 77.45856},
      { lat: 31.35131, lng: 78.43683},
      { lat: 31.88162, lng: 78.62673},
      { lat: 32.08972, lng: 78.21262},
      { lat: 32.22458, lng: 78.06930},
      { lat: 32.33194, lng: 78.00891},
    ];


    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
  
    flightPath.setMap(map);

    const tourStops = [
        [{ lat: 30.73784, lng: 76.78074}, "ChandiGarh"],
        [{ lat: 31.25724, lng: 77.45856}, "Narkanda"],
        [{ lat: 31.35131, lng: 78.43683}, "Chitkul"],
        [{ lat: 31.88162, lng: 78.62673}, "Nako"],
        [{ lat: 32.08972, lng: 78.21262}, "Dhankar"],
        [{ lat: 32.22458, lng: 78.06930}, "Kaza"],
        [{ lat: 32.33194, lng: 78.00891}, "Kibber"]
      ];
      // Create an info window to share between markers.
      const infoWindow = new google.maps.InfoWindow();
    
      // Create the markers.
      tourStops.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
          position,
          map,
          title: `${title}`,
          optimized: false,
        });
    
        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      });
    }

window.initMap = initMap;
