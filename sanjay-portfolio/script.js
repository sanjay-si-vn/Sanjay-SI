// ============ Mobile nav toggle ============
const navBurger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

navBurger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navBurger.setAttribute('aria-expanded', isOpen);
  navBurger.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navBurger.setAttribute('aria-expanded', 'false');
  });
});

// ============ Active link on scroll ============
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => sectionObserver.observe(section));

// ============ Reveal on scroll ============
const revealEls = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ============ Contact form -> mailto ============
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg = document.getElementById('fmsg').value.trim();

  const subject = encodeURIComponent(`Portfolio contact from ${fname} ${lname}`.trim());
  const body = encodeURIComponent(`${msg}\n\n— ${fname} ${lname}\n${email}`);

  window.location.href = `mailto:sanjay.si.769697@gmail.com?subject=${subject}&body=${body}`;
});

// ============ Back to top ============
document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============ Nav background on scroll ============
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20 ? '0 4px 20px rgba(0,0,0,0.25)' : 'none';
});
