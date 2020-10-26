const currentLocation = {
  latitude: 0,
  longitude: 0
};

navigator.geolocation.getCurrentPosition(position => {
  currentLocation.latitude = position.coords.latitude;
  currentLocation.longitude = position.coords.longitude;
});

export default currentLocation;