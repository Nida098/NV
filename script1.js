function chooseOption(option) {
  if (option === "public") {
      alert("You chose Public Transportation! Redirecting...");
      window.location.href = "scanner.html"; // Link to public transport page
  } else if (option === "carpool") {
      alert("You chose Carpooling! Redirecting...");
      window.location.href = "carpooling.html"; // Link to carpooling page
  }
}
