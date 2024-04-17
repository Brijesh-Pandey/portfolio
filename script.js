
if (window.location.hostname !== "brijesh.me") {
  window.location.href = "https://brijesh.me";
}

// Header Sticky
let lastScrollPos = 0;
window.addEventListener('scroll', function () {
  const currentScrollPos = window.scrollY;
  const header = document.querySelector('.header');

  if (currentScrollPos > lastScrollPos) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  if (currentScrollPos <= 40) {
    header.classList.remove('hide');
  }

  if (currentScrollPos >= 100) {
    header.classList.add('bg-white');
  } else {
    header.classList.remove('bg-white');
  }

  lastScrollPos = currentScrollPos;
});

// Toggled Sidebar Mobile
function toggleSidebar() {
  document.querySelector('.hamburger-icon').classList.toggle('toggled');
  document.querySelector('.nav').classList.toggle('active');

  if (document.querySelector('.nav').classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

// Redirect to sections on the same page
function redirectTo(url) {
  document.body.style.overflow = 'auto';
  document.querySelector('.hamburger-icon').classList.toggle('toggled');
  document.querySelector('.nav').classList.toggle('active');
  window.location.href = url;
}