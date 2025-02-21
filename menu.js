document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const menuSections = document.querySelectorAll('.menu-section');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and sections
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      menuSections.forEach(section => section.classList.remove('active'));

      // Add active class to clicked button and corresponding section
      button.classList.add('active');
      const category = button.dataset.category;
      document.getElementById(category).classList.add('active');
    });
  });

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
      navLinks.classList.remove('active');
    }
  });

  document.querySelectorAll('.menu-item').forEach(item => {
    const itemId = item.dataset.itemId;
    const savedPhoto = localStorage.getItem(`menu-photo-${itemId}`);
    if (savedPhoto) {
      item.querySelector('.menu-photo').src = savedPhoto;
    }
  });
});

document.querySelectorAll('.photo-upload').forEach(input => {
  input.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const menuItem = this.closest('.menu-item');
      const img = menuItem.querySelector('.menu-photo');
      
      reader.onload = function(e) {
        img.src = e.target.result;
        
        // Store in localStorage for persistence
        const itemId = menuItem.dataset.itemId;
        localStorage.setItem(`menu-photo-${itemId}`, e.target.result);
      };
      
      reader.readAsDataURL(file);
    }
  });
});