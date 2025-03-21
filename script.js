const navLinks=document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");

menuOpenButton.addEventListener('click',()=>{
    // Toggle mobile menu visiblity
    document.body.classList.toggle("show-mobile-menu")
})

// close menu when close button is clicked
menuCloseButton.addEventListener("click",()=> menuOpenButton.click());

// close menu when  nav-link is clicked
navLinks.forEach(link =>{
    link.addEventListener("click" ,()=>menuOpenButton.click())
})

// Initialize Swiper

const swiper2 = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  });
  // Initialize Swiper for testimonials with animation
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // Mobile menu functionality
  const menuOpenBtn = document.querySelector("#menu-open-button");
  const menuCloseBtn = document.querySelector("#menu-close-button");
  
  menuOpenBtn.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
  });
  
  menuCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
  
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
    });
  });
  
  // Scroll animation - animate elements when they enter viewport
  const scrollElements = document.querySelectorAll(".section-title, .about-details, .menu-item, .gallery-item, .contact-info, .form-input");
  
  // Add animate-on-scroll class to all elements we want to animate on scroll
  scrollElements.forEach((el) => {
    el.classList.add("animate-on-scroll");
  });
  
  // Function to check if element is in viewport
  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementHeight = el.getBoundingClientRect().height;
    
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
  };
  
  // Function to display element when in viewport
  const displayScrollElement = (element) => {
    element.classList.add("animate");
  };
  
  // Function to hide element when not in viewport
  const hideScrollElement = (element) => {
    element.classList.remove("animate");
  };
  
  // Function to handle scroll animation
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 80)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  // Add event listener for scroll
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
  
  // Initial check on page load
  window.addEventListener("load", () => {
    handleScrollAnimation();
  });
  
  // Floating animation for coffee cup icon
  const coffeeLogo = document.querySelector(".logo-text");
  setInterval(() => {
    coffeeLogo.style.transform = "translateY(-5px)";
    setTimeout(() => {
      coffeeLogo.style.transform = "translateY(0)";
    }, 500);
  }, 3000);
  
  // Adding hover animations for interactive elements
  const buttons = document.querySelectorAll(".button, .submit-button");
  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.transition = "all 0.3s ease";
      button.style.transform = "translateY(-3px)";
      button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    });
    
    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)";
      button.style.boxShadow = "none";
    });
  });
  
  // Add subtle parallax effect to gallery images
  const galleryImages = document.querySelectorAll(".gallery-image");
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    galleryImages.forEach(image => {
      const moveX = (x - 0.5) * 10;
      const moveY = (y - 0.5) * 10;
      image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });