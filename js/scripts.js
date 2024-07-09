document.addEventListener('DOMContentLoaded', function() {
    const startColor = [29, 103, 103]; // dark green
    const endColor = [11, 52, 52]; // darker green
  
    // Set initial background color
    document.body.style.background = `rgb(${startColor.join(',')})`;
  
    document.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight - windowHeight;
      const scrollFactor = scrollPosition / totalHeight;
  
      // Calculate background color based on scroll position
      const newColor = startColor.map((start, index) => {
        const end = endColor[index];
        return Math.round(start + (end - start) * scrollFactor);
      });
  
      document.body.style.background = `rgb(${newColor.join(',')})`;
  
      // Ensure bottom text remains white
      const sections = document.querySelectorAll('.section, .contact');
      const newTextColor = `rgb(255, 255, 255)`; // keep text white
  
      sections.forEach(section => {
        section.style.color = newTextColor;
      });
  
      const footer = document.querySelector('footer');
      footer.style.color = newTextColor;
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.about-points p');
  
    function checkVisibility() {
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 200); // Add a delay for each element
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
  
    // Adjust scroll position for in-page links to account for the navbar
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
          event.preventDefault();
          const targetElement = document.getElementById(targetId);
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });
    
  