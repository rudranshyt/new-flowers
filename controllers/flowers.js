var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get("username");

function displayUserName() {
  var displayElement = document.getElementById("displayUsername");
  displayElement.textContent =
    "👋 Hey " + this.username + " 💖 " + ", I made this for ya🫶!";
}

displayUserName();
