var username;

function getUserInput() {
  this.username = document.getElementById("userInputField").value;
  console.log("this.username----->", this.username);
  window.location.href = "template/flowers.html";
}
