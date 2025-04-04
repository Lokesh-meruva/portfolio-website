// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.elements[0].value;
    alert(`Thank you ${name} for reaching out! I will get back to you soon.`);
    
    // Reset form
    this.reset();
  });
  
  // Animation on scroll (simple implementation)
  window.addEventListener('load', function() {
    // Elements to animate
    const elements = document.querySelectorAll('.skill, .project, .contact-item');
    
    // Animation function
    function checkScroll() {
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Set initial style
    elements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check on load
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
  });
  // Initialize EmailJS with your User ID
emailjs.init("4hy-f3P6Nx-wtbVVk"); // Replace with your EmailJS User ID

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs
    .send("service_tkms056", "template_i3wrnpg", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      function (response) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); // Clear the form
      },
      function (error) {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS Error:", error);
      }
    );
});