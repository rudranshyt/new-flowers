function getUserInput() {
  var username = document.getElementById("userInputField").value;
  console.log("username ----->", username);
  redirectToFlowersPage(username);
}

function redirectToFlowersPage(username) {
  window.location.href =
    "templates/flowers.html?username=" + encodeURIComponent(username);
}


