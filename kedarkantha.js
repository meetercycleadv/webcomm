let map;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 28.597244718652508, lng: 77.21373532657798, },
      mapTypeId: "terrain",
    });

    
    const flightPlanCoordinates = [
        { lat: 31.07839, lng: 78.18397},
        { lat: 31.05287, lng: 78.18351},
        { lat: 31.03650, lng: 78.17393},
        { lat: 31.02286, lng: 78.17261},
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
        [{ lat: 31.07839, lng: 78.18397}, "Sankri"],
        [{ lat: 31.05287, lng: 78.18351}, "Juda Ka Talab"],
        [{ lat: 31.03650, lng: 78.17393}, "KK Basecamp"],
        [{ lat: 31.02286, lng: 78.17261}, "KK Summit"],
        
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
