document.addEventListener('DOMContentLoaded', function () {
  console.log('Music Website Loaded');
  // Additional JavaScript functionality can go here
});
document.getElementById('followButton').addEventListener('click', function() {
  const button = this;

  if (button.innerText === "Follow") {
    button.innerText = "Following"; // Change text to "Following"
    button.style.backgroundColor = "#28a745"; // Change button color to green
  } else {
    button.innerText = "Follow"; // Change text back to "Follow"
    button.style.backgroundColor = "#333"; // Change button color back to original
  }
});
