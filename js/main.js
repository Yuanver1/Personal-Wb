/**
 * Personal Website - Interactive Logic & UI Handlers
 * Language toggle (i18n), Theme toggle, Portfolio filter, Mobile menu, Scroll reveal, Contact form
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initMobileMenu();
  initScrollEffects();
  initPortfolioFilter();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Language Switcher (中英文双语切换 i18n)
   -------------------------------------------------------------------------- */
let currentLang = 'zh';

function initLanguage() {
  const langToggleBtn = document.getElementById('lang-toggle');
  
  // Retrieve saved language preference or detect browser language
  const savedLang = localStorage.getItem('lang');
  if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
    currentLang = savedLang;
  } else {
    const userPrefersEn = navigator.language && navigator.language.toLowerCase().startsWith('en');
    currentLang = userPrefersEn ? 'en' : 'zh';
  }

  // Apply initial language
  applyLanguage(currentLang);

  if (!langToggleBtn) return;

  // Toggle on click
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  if (typeof translations === 'undefined' || !translations[lang]) return;

  const dict = translations[lang];
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update input/textarea placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update element titles/tooltips with data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) {
      el.setAttribute('title', dict[key]);
    }
  });

  // Update the language toggle button appearance
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    const nextLangText = lang === 'zh' ? 'EN' : '中';
    const nextLangTitle = dict['lang.title'] || (lang === 'zh' ? 'Switch to English' : '切换为中文');
    
    langToggleBtn.setAttribute('title', nextLangTitle);
    langToggleBtn.setAttribute('aria-label', nextLangTitle);
    
    const langSpan = langToggleBtn.querySelector('.lang-curr');
    if (langSpan) {
      langSpan.textContent = nextLangText;
    }
  }
}

/* --------------------------------------------------------------------------
   2. Theme Toggle (Light / Dark Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  // Apply stored theme or default to dark (NYU Red & Black looks best in dark)
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Toggle on click
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  });
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation Menu
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = navMenu.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });

  // Close mobile menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside navbar
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --------------------------------------------------------------------------
   4. Scroll Effects & Active Nav Highlighting
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  // Reveal elements on scroll
  const reveals = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('active'));
  }

  // Active navigation link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   5. Portfolio Category Filtering
   -------------------------------------------------------------------------- */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || (category && category.includes(filterValue))) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 40);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Contact Form Handler & Toast Notification
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast-msg');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"] span');
    const dict = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang] : null;

    const originalText = submitBtn ? submitBtn.innerText : (currentLang === 'zh' ? '发送消息' : 'Send Message');
    const sendingText = dict ? dict['contact.form_sending'] : (currentLang === 'zh' ? '正在发送...' : 'Sending...');
    const successText = dict ? dict['contact.form_success'] : (currentLang === 'zh' ? '🎉 消息已成功发送，感谢您的来信！' : '🎉 Message sent successfully! Thank you for reaching out.');

    if (submitBtn) {
      submitBtn.innerText = sendingText;
    }

    setTimeout(() => {
      contactForm.reset();
      if (submitBtn) {
        submitBtn.innerText = originalText;
      }
      showToast(successText);
    }, 800);
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
}
