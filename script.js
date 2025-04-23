// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
  
  // Scroll to top button
  const scrollBtn = document.getElementById("scrollToTop");
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Smooth scroll navigation between sections
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust the scroll position to account for the fixed navbar
        behavior: 'smooth'
      });
    });
  });
  
  // Fake subscribe handling
  document.getElementById("subscription-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for subscribing! 🚀");
  });
  
  // Load Lottie animation
  lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie/student-ai.json' // Add your Lottie file here
  });
  
