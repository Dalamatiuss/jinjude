document.addEventListener('DOMContentLoaded', () => {
  // SVG Animations for dishes
  const pekingDuck = document.querySelector('.peking-duck');
  const dimsum = document.querySelector('.dimsum');
  const mapoTofu = document.querySelector('.mapo-tofu');

  // Peking Duck SVG
  pekingDuck.innerHTML = `
    <circle cx="100" cy="100" r="80" fill="#c41230" opacity="0.1"/>
    <path d="M50,100 Q100,50 150,100" stroke="#c41230" fill="none" stroke-width="4">
      <animate attributeName="d" 
               dur="3s"
               repeatCount="indefinite"
               values="M50,100 Q100,50 150,100;
                      M50,100 Q100,150 150,100;
                      M50,100 Q100,50 150,100"/>
    </path>
  `;

  // Dim Sum SVG
  dimsum.innerHTML = `
    <circle cx="100" cy="100" r="40" fill="#f8b62d" opacity="0.2"/>
    <circle cx="100" cy="100" r="30" fill="#f8b62d" opacity="0.3"/>
    <circle cx="100" cy="100" r="20" fill="#f8b62d">
      <animate attributeName="r"
               values="20;25;20"
               dur="2s"
               repeatCount="indefinite"/>
    </circle>
  `;

  // Mapo Tofu SVG
  mapoTofu.innerHTML = `
    <rect x="60" y="60" width="80" height="80" fill="#c41230" opacity="0.2"/>
    <rect x="70" y="70" width="60" height="60" fill="#c41230" opacity="0.4"/>
    <rect x="80" y="80" width="40" height="40" fill="#c41230">
      <animate attributeName="transform"
               attributeType="XML"
               type="rotate"
               from="0 100 100"
               to="360 100 100"
               dur="4s"
               repeatCount="indefinite"/>
    </rect>
  `;

  // Scroll animations
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1
  });

  document.querySelectorAll('.dish, .about-content, .info > div').forEach(el => {
    observer.observe(el);
  });
});
