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




// Get all navigation links
// const navLinks = document.querySelectorAll('.navbar a');

// Get all sections by their class names (which are mapped to navigation links)
const sections = Array.from(navLinks).map(link => {
  const sectionName = link.getAttribute('href').substring(1); // Get class name from href
  return document.querySelector(`.${sectionName}`); // Find section by class name
});

// Scroll to section on link click
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    
    const sectionName = link.getAttribute('href').substring(1); // Get class name from href
    const targetSection = document.querySelector(`.${sectionName}`); // Find section by class name

    // Scroll to the section smoothly
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active section based on scroll position
window.addEventListener('scroll', () => {
  let currentSection = '';

  // Determine which section is in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop; // Get section's top offset
    const sectionHeight = section.clientHeight; // Get section's height
    
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.classList[0]; // Update current section
    }
  });

  // Update the "active" class for the correct navigation link
  navLinks.forEach(link => {
    link.classList.remove('active'); // Remove "active" from all links
    
    const sectionName = link.getAttribute('href').substring(1); // Get class name from href
    if (sectionName === currentSection) {
      link.classList.add('active'); // Add "active" to the correct link
    }
  });
});

