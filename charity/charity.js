const parallax = document.getElementById('parallax');
window.addEventListener('scroll',function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

function jazzcash() {
  var x = document.getElementById("jazzcash");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function easypaisa() {
  var x = document.getElementById("easypaisa");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function ccard() {
  var x = document.getElementById("ccard");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}