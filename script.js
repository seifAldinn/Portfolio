  
document.addEventListener('DOMContentLoaded', () => {

  // --- DATA ---
  const EMAIL = "saumya.chaturvedi@example.com";
  const SKILLS_DATA = [
    { name: 'HTML', progress: 80 },
    { name: 'CSS', progress: 90 },
    { name: 'Bootstrap', progress: 90 },
    { name: 'JavaScript', progress: 40 },
  ];
  const PROJECTS = [
    {
      title: "Axit",
      description: "A website  Simple landing page.",
      tech: ["Html", "Css"],
      github: "https://github.com/seifAldinn/Axit",
      link: "https://seifaldinn.github.io/Axit/",
    },
    {
      title: " Doccure",
      description: "My first Full website, It was a fun project that sparked my interest in web development.",
      tech: ["HTML", "CSS", ,"bootstrap", "JavaScript"],
      github: "https://github.com/seifAldinn/doccurrr",
      link: "https://seifaldinn.github.io/doccurrr/doc-dashboard.html",
    },
    {
      title: " Luxestate",
      description: " Real estate site showcasing homes, services, and agents",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/seifAldinn/Luxestate",
      link: "https://seifaldinn.github.io/Luxestate/",
    },
  ];

  // --- DYNAMIC CONTENT RENDERING ---

  // Render Projects
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = PROJECTS.map(project => `
      <div class="bg-[#112240] p-6 rounded-md shadow-lg flex flex-col justify-between hover:-translate-y-2 hover:scale-110 hover:shadow-2xl transition-all duration-300">
        <div>
          <div class="flex justify-between items-center mb-4">
            <svg class="w-10 h-10 text-[#a78bfa]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <div class="flex space-x-4">
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link" class="text-slate-400 hover:text-[#a78bfa] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              ${project.link ? `
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="External Link" class="text-slate-400 hover:text-[#a78bfa] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ` : ''}
            </div>
          </div>
          <h3 class="text-xl font-bold text-slate-200 mb-2">${project.title}</h3>
          <p class="text-slate-400 text-sm mb-4">${project.description}</p>
        </div>
        <ul class="flex flex-wrap font-mono text-xs text-slate-400">
          ${project.tech.map(t => `<li class="mr-4 mb-2">${t}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Render Skills Chart
  const skillsChartContainer = document.getElementById('skills-chart-container');
  if (skillsChartContainer) {
    skillsChartContainer.innerHTML = SKILLS_DATA.map((skill, index) => `
      <div class="skill-bar-wrapper">
        <div class="skill-bar" data-progress="${skill.progress}" id="skill-bar-${index}">
            <span class="skill-percentage">${skill.progress}%</span>
        </div>
        <span class="skill-name">${skill.name}</span>
      </div>
    `).join('');
  }


  // --- INTERACTIVITY ---

  // Header Scroll & Mobile Menu
  const header = document.getElementById('header');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuBtnIcon = menuBtn.querySelector('path');
  
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('translate-x-full');
    menuOverlay.classList.toggle('hidden');
    menuBtnIcon.setAttribute('d', isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7");
  };

  if(menuBtn && mobileMenu && menuOverlay) {
    menuBtn.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);
  }

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('bg-[#0a192f]/80', 'shadow-lg', 'backdrop-blur-sm');
      } else {
        header.classList.remove('bg-[#0a192f]/80', 'shadow-lg', 'backdrop-blur-sm');
      }
    }
  });

  // Smooth Scrolling for Nav Links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        if(isMenuOpen) {
          toggleMenu();
        }
      }
    });
  });

  // Hero Section Animation
  const heroItems = document.querySelectorAll('.hero-item');
  setTimeout(() => {
    heroItems.forEach(item => {
      item.classList.add('fade-up', 'visible');
    });
  }, 100);

  // General Fade-up Animation on Scroll
  const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeUpObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => {
    fadeUpObserver.observe(el);
  });
  
  // Skills Chart Animation
  const skillsSection = document.getElementById('skills');
  const skillsChartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          skillsChartContainer.classList.add('visible');
          document.querySelectorAll('.skill-bar').forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.height = `${progress}%`;
          });
        }, 300);
        skillsChartObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if(skillsSection) {
      skillsChartObserver.observe(skillsSection);
  }

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        scrollToTopBtn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      } else {
        scrollToTopBtn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      }
    });
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset errors
      document.querySelectorAll('input, textarea').forEach(input => {
        input.classList.remove('border-red-500', 'focus:ring-red-500');
        input.classList.add('border-slate-700', 'hover:border-[#a78bfa]', 'focus:ring-[#a78bfa]');
        document.getElementById(`${input.id}-error`).textContent = '';
      });

      // Name validation
      if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add('border-red-500', 'focus:ring-red-500');
        document.getElementById('name-error').textContent = 'Name is required.';
      }
      
      // Email validation
      if (!emailInput.value.trim()) {
        isValid = false;
        emailInput.classList.add('border-red-500', 'focus:ring-red-500');
        document.getElementById('email-error').textContent = 'Email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        isValid = false;
        emailInput.classList.add('border-red-500', 'focus:ring-red-500');
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
      }

      // Message validation
      if (!messageInput.value.trim()) {
        isValid = false;
        messageInput.classList.add('border-red-500', 'focus:ring-red-500');
        document.getElementById('message-error').textContent = 'Message is required.';
      }

      if (isValid) {
        const subject = encodeURIComponent(`Portfolio Contact from ${nameInput.value}`);
        const body = encodeURIComponent(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\n\nMessage:\n${messageInput.value}`);
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        contactForm.reset();
      }
    });
  }
});
 
