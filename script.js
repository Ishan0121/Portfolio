window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0)
})
// Get all navigation links in the navbar
const navLinks = document.querySelectorAll('.navbar a');

// Function to remove 'active' from all navigation links
function clearActiveClasses() {
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });
}

// Add event listeners to each navigation link
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default action (optional, if you don't want to reload the page)
    
    // Clear 'active' from all links
    clearActiveClasses();

    // Add 'active' to the clicked link
    link.classList.add('active');
  });
});

