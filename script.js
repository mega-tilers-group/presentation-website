document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  const carousel = document.querySelector('.carousel');
  const testimonials = document.querySelectorAll('.testimonial');

  let currentIndex = 0;

  const updateCarouselDesktop = () => {
    const cardWidth = testimonials[0].offsetWidth;
    const containerWidth = carousel.clientWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);

    const maxIndex = testimonials.length - visibleCards;

    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    carousel.style.transform = `translateX(-${
      currentIndex * (cardWidth + 20)
    }px)`;
    updateButtonsDesktop(visibleCards);
  };

  const updateButtonsDesktop = (visibleCards) => {
    prevButton.classList.toggle('hidden', currentIndex === 0);
    nextButton.classList.toggle(
      'hidden',
      currentIndex >= testimonials.length - visibleCards
    );
  };

  const updateCarouselMobile = () => {
    const cardWidth = testimonials[0].offsetWidth;

    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateButtonsMobile();
  };

  const updateButtonsMobile = () => {
    prevButton.classList.toggle('hidden', currentIndex === 0);
    nextButton.classList.toggle(
      'hidden',
      currentIndex >= testimonials.length - 1
    );
  };

  const updateCarousel = () => {
    if (window.innerWidth < 768) {
      updateCarouselMobile();
    } else {
      updateCarouselDesktop();
    }
  };

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    const cardWidth = testimonials[0].offsetWidth;
    const containerWidth = carousel.clientWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);

    const maxIndex =
      window.innerWidth < 768
        ? testimonials.length - 1
        : testimonials.length - visibleCards;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);

  updateCarousel();
});

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav ul li a');

  for (const link of links) {
    link.addEventListener('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;

        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  }
});

window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');

  const handleScroll = () => {
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  handleScroll();

  window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenim trimiterea formularului

    // Resetăm erorile anterioare
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (message) {
      message.textContent = '';
    });

    const formFields = document.querySelectorAll('.form-group input');
    formFields.forEach(function (field) {
      field.classList.remove('error');
    });

    // Colectăm valorile din câmpurile formularului
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validăm câmpurile
    let valid = true;

    if (!firstName) {
      document.getElementById('first-name-error').textContent =
        'First name is required';
      document.getElementById('first-name').classList.add('error');
      valid = false;
    }
    if (!lastName) {
      document.getElementById('last-name-error').textContent =
        'Last name is required';
      document.getElementById('last-name').classList.add('error');
      valid = false;
    }
    if (!phone) {
      document.getElementById('phone-error').textContent =
        'Phone number is required';
      document.getElementById('phone').classList.add('error');
      valid = false;
    }

    // Dacă toate câmpurile sunt completate, trimitem formularul
    if (valid) {
      form.submit();
    }
  });
});

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs.send('service_rfrnq3i', 'template_4ow333t', templateParams).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        document.getElementById('contact-form').reset();
      },
      function (error) {
        console.log('FAILED...', error);
        alert('Failed to send your message. Please try again later.');
      }
    );
  });

document.querySelector('.nav-toggle').addEventListener('click', function () {
  const navLinks = document.querySelector('nav ul');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

function toggleMenu(x) {
  x.classList.toggle('change');
  document.querySelector('nav ul').classList.toggle('show');
  document.querySelector('.overlay').classList.toggle('show');
  document.querySelector('.menu-title').classList.toggle('show-title');
}

window.addEventListener('scroll', function () {
  var nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 0);
});
