// Function to handle the user's choice and display a message
function selectTransport(transportMode) {
  // Find the message container
  const message = document.getElementById("selection-message");
  
  // Display a message based on the user's choice
  message.textContent = "You have selected " + transportMode + " for booking!";
  // Optionally, you can add functionality to redirect the user to a booking page.
  // For example:
  if(transportMode==="Cab"){
    window.location.href="map4.html"}
  else if(transportMode==="Auto"){
    window.location.href="map3.html"
  }
  else if(transportMode==="Two-Wheeler"){
    window.location.href="map2.html"
  }
  
  //window.location.href = "map4.html";
}
