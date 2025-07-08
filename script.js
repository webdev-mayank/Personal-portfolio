//for responsive navbar

const toggleBtn = document.querySelector('.toggle-btn');
const navbarMenu = document.querySelector('#navbar ul');

toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.toggle('active');
  navbarMenu.classList.toggle('show');
});


//for navigation buttons

window.onload = function () {
  const links = {
    'home-btn': '#home',
    'skills-btn': '#skills',
    'career-btn': '#career-education',
    'projects-btn': '#projects',
    'contacts-btn': '#contact',
  };

  const targets = {}; // Store target elements for easy access

  for (const id in links) {
    const link = document.querySelector(`#${id}`);
    const target = document.querySelector(links[id]);

    if (link && target) {
      targets[id] = target; // Store target element
      link.addEventListener('click', (event) => {
        event.preventDefault();

        setActiveLink(id); // Call function to set active link

        window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
      });
    } else {
      console.error(`Link or target element not found for ID "${id}".`);
    }
  }

  function setActiveLink(currentId) {
    for (const id in links) {
      const link = document.querySelector(`#${id}`);
      if (link) {
        link.classList.remove('active');
      }
    }
    const currentLink = document.querySelector(`#${currentId}`);
    if (currentLink) {
      currentLink.classList.add('active');
    }
  }

  window.addEventListener('scroll', () => {
    let currentActive = null;

    for (const id in targets) {
      const target = targets[id];
      const rect = target.getBoundingClientRect();

      // Check if the target is in the viewport (adjust threshold as needed)
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) { // Center of element in viewport
        currentActive = id;
        break; // Exit loop once a target is found in viewport
      }
    }

    if (currentActive) {
      setActiveLink(currentActive);
    }
  });
};


//for dark theme

const themeToggleBtn = document.querySelector('#theme-toggle');
const body = document.body;
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const moonIcon = themeToggleBtn.querySelector('i');
  moonIcon.classList.toggle('ri-sun-line');
  moonIcon.classList.toggle('ri-moon-line');
});


//gsap animation

gsap.fromTo("#home h2", {
  opacity: 0,
  x: -200,
}, {
  opacity: 1,
  x: 0,
  delay: 0.1,
  stagger: 0.3,
});


//gsap for skill section

gsap.fromTo(".skill-logos img", {
  y: 100,
  opacity: 0
}, 
  {
    y: 0,
    stagger: 0.2,
    opacity: 1,
    scrollTrigger: {
      trigger: ".skill-logos",
     // markers: "true",
      start: "top 70%",
      end: "bottom 95%",
      scrub: 2,
    },
  });

gsap.fromTo(".skill-logos img", {
  y: 0
},
  {
    y: -100,
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".skill-logos",
     // markers: "true",
      start: "top 30%",
      end: "bottom 0%",
      scrub: 1,
    },
  });
  
   // form.js

const btn = document.getElementById('btn');

const contactForm = document.getElementById('connect-form');
 contactForm.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'portfolio_service';
   const templateID = 'template_3210faw';

   emailjs.sendForm(serviceID, templateID, this)
   
    .then(() => {
      btn.value = 'Send Email';
      contactForm.reset();
      Toast.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: "We'll get back to you soon."
      });
    }, (err) => {
      btn.value = 'Send Email';
      Toast.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong, Please try again.'
      });
    });
});

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

  
