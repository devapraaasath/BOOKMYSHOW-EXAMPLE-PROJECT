$(document).ready(function () {
  // Initially hide the location section
  $('#location').hide();

  // Show the location section when the #show-loc button is clicked
  $('#show-loc').click(function () {
    $('#location').fadeIn(900); // Show location section with fade effect
  });

  console.log('Page initialized');
});

// Function to handle city selection
function selectCity(cityName) {
  // Update the #show-loc button text
  $('#show-loc button').html(`${cityName} &#x25BC`);

  // Hide the location section after city selection
  $('#location').fadeOut(500);

  console.log(`${cityName} selected`);
}



// const menuBtn = document.getElementById('menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');

// menuBtn.addEventListener('click', () => {
//   mobileMenu.classList.toggle('hidden');
// });


