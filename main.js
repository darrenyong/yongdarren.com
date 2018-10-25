// Creating a modal image
var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Allows user to close modal using the close button and by clicking outside the picture
var span = document.getElementsByClassName("close-button")[0];
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Allows user to close modal using the ESC button
$(document).keydown(function(event) {
  if (event.keyCode == 27) {
    $('#myModal').hide();
  }
});
