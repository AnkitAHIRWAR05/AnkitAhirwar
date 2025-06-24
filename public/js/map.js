	// mapboxgl.accessToken = mapToken;
    // const map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    //     zoom:9 // starting zoom
    // });

    // const marker = new mapboxgl.Marker({color:"red"})
    // .setLngLat(listing.geometry.coordinates)
    // .setPopup(new mapboxgl.popup({offset: 25})
    // .setHTML(
    //  `<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`)
    // )
    // .addTo(map);
document.addEventListener("DOMContentLoaded", () => {
  mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listingData.coordinates,
    zoom: 9
  });

  new mapboxgl.Marker({ color: "red" })
    .setLngLat(listingData.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h4>${listingData.location}</h4><p>Exact Location after booking</p>`)
    )
    .addTo(map) .togglePopup();;
});

