var username;

function getUserInput() {
  this.username = document.getElementById("userInputField").value;
  console.log("this.username----->", this.username);
  window.location.href = "templates/flowers.html";
}

function displayUserName() {
  var displayElement = document.getElementById("displayUsername");
  displayElement.textContent =
    "Hey 👋" + this.username + ", I made this for ya🫶!";
}
