document.addEventListener('DOMContentLoaded', () => {
  // Existing menu category code
  const categoryButtons = document.querySelectorAll('.category-btn');
  const menuSections = document.querySelectorAll('.menu-section');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      menuSections.forEach(section => section.classList.remove('active'));
      button.classList.add('active');
      const category = button.dataset.category;
      document.getElementById(category).classList.add('active');
    });
  });

  // Mobile navigation functionality
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  
  const navMenu = document.createElement('div');
  navMenu.className = 'nav-menu';
  
  // Create the mobile menu content with all necessary links
  const mobileMenuContent = `
    <div class="nav-links">
      <a href="index.html">首页 Home</a>
      <a href="menu.html">菜单 Menu</a>
      <a href="about.html">关于我们 About</a>
      <a href="reservations.html">预订 Reservations</a>
      <a href="contact.html">联系我们 Contact</a>
      <a href="gallery.html">图库 Gallery</a>
    </div>
    <div class="nav-icons">
      <a href="tel:+254795665527"><i class="fas fa-phone"></i></a>
      <a href="contact.html" class="order-btn">在线订餐 Order Online</a>
    </div>

  `;
  
  navMenu.innerHTML = mobileMenuContent;
  
  document.body.appendChild(mobileMenuBtn);
  document.body.appendChild(navMenu);
  
  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      navMenu.classList.remove('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});
