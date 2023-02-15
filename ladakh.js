let map;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 28.597244718652508, lng: 77.21373532657798, },
      mapTypeId: "terrain",
    });

    
    const flightPlanCoordinates = [
        { lat: 34.15148, lng: 77.57875},
        { lat: 34.17146, lng: 77.35261},
        { lat: 34.17383, lng: 77.57498},
        { lat: 34.27923, lng: 77.60462},
        { lat: 34.68772, lng: 77.56745},
        { lat: 33.77095, lng: 78.66447},
        { lat: 32.90540, lng: 78.30736},
        { lat: 34.15148, lng: 77.57875},
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
        [{ lat: 34.15148, lng: 77.57875}, "Leh"],
        [{ lat: 34.17146, lng: 77.35261}, "Magnetic Hill"],
        [{ lat: 34.17383, lng: 77.57498}, "Shati Stupa"],
        [{ lat: 34.27923, lng: 77.60462}, "Khardung La"],
        [{ lat: 34.68772, lng: 77.56745}, "Nubra Valley"],
        [{ lat: 33.77095, lng: 78.66447}, "Pangong Tso"],
        [{ lat: 32.90540, lng: 78.30736}, "Tso Moriri"]
        [{ lat: 34.15148, lng: 77.57875}, "Leh"],
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
