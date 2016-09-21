
      function initialize() {

         // Create an array of styles.
            var styles = [
              {

              },{
                featureType: "road",
                elementType: "geometry",
                stylers: [
                  { lightness: 100 },
                  { visibility: "simplified" }
                ]
              },{
                featureType: "road",
                elementType: "labels",
                stylers: [
                  { visibility: "off" }
                ]
              }
            ];
            var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

        var mapOptions = {
          center: new google.maps.LatLng(33.038333, -117.293904),
          zoom: 16,
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
          }
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        var contentString = '<p style="line-height: 20px;"><strong>Womens Wellness with Sage</strong></p><p>1054 2nd St Encinitas, CA 92024</p>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
         map.mapTypes.set('map_style', styledMap);
         map.setMapTypeId('map_style');
        var marker = new google.maps.Marker({
            position:  new google.maps.LatLng(33.038333, -117.293904),
            map: map,
            title:"Hello World!"
        });
         google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
                });
      }

      google.maps.event.addDomListener(window, 'load', initialize);



