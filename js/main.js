anime({
  targets: '.hero__btn-about-me',
  translateY: 15,
  direction: 'infinite',
  loop: true,
  easing: 'easeInOutSine',
  value: [0, 1]
});
anime({
  targets: '.footer__btn-scroll-top',
  translateY: 15,
  direction: 'infinite',
  loop: true,
  easing: 'easeInOutSine',
  value: [0, 1]
});




const button = document.querySelector('.header__btn-menu--open');
const nav = document.querySelector('.nav-principal');

// toggle a class of open on the button and nav element
button.addEventListener('click', () => {
  nav.classList.toggle('open');
  button.classList.toggle('open');
  const isOpen = nav.classList.contains('open');

  // animate the text path to move in/out
  anime({
    targets: 'textPath',
    startOffset: (d, i) => {
      if (isOpen) {
        return i % 2 === 0 ? '60%' : '40%';
      }
      return i % 2 === 0 ? '0%' : '100%';
    },
    duration: 500,
    // slight delay for the opening animation, to follow the hamburger menu
    delay: isOpen ? 200 + anime.stagger(50) : anime.stagger(50),
    // considering the class on the nav element, toggle its visibility to prevent focus events
    begin: () => {
      if (nav.classList.contains('open')) {
        nav.style.visibility = 'visible';
      }
    },
    complete: () => {
      if (!nav.classList.contains('open')) {
        nav.style.visibility = 'hidden';
      }
    },
  });
});

/* Function for button scrool to top page */
window.addEventListener("scroll", function () {
  let button = document.querySelector(".footer__btn-scroll-top");
  button.style.display = (window.pageYOffset > 500) ? "grid" : "none";
});


const menuContactMe = document.querySelector("#np-contact-me");
const menuHome = document.querySelector("#np-home");
const menuPrincipal = document.querySelector(".nav-principal__menu");

menuPrincipal.addEventListener('click', (e) => {
  const menuLinks = document.querySelectorAll(".nav-principal__menu-link");
  menuLinks.forEach(menu => {
    menu.classList.remove('menu-active');
    e.target.classList.add('menu-active');
  })
});

const addClassWithScroll = (element, sign, numScroll)=>{
  window.addEventListener("scroll", function() {
    sign === '>' ? window.pageYOffset > numScroll ? element.classList.add('menu-active') : element.classList.remove('menu-active') : window.pageYOffset < numScroll ? element.classList.add('menu-active') : element.classList.remove('menu-active');
  });
}

addClassWithScroll(menuContactMe, '>', 1200);
addClassWithScroll(menuHome, '<', 300);