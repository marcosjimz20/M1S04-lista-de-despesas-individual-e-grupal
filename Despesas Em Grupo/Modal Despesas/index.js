// Get the modal
var modal = document.getElementById('form-modal');

// Get the button that opens the modal
var btn = document.getElementById('open-modal-button');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'flex';
};

span.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == modal) closeModal();
}

function closeModal() {
  modal.style.display = 'none';
}
