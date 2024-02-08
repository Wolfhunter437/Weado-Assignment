const mobile = window.matchMedia('(max-width: 768px)').matches;

if (mobile) {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top;
    element.classList.add('visible');
  });
}
else {
  window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(function (element) {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition < window.innerHeight - 100) {
        element.classList.add('visible');
      }
    });
  });
}

// Navbar

let logo1 = document.getElementsByClassName('logo1')[0];
let logo2 = document.getElementsByClassName('logo1')[1];
let phone = document.getElementsByClassName('phoneNumber')[0];
let hamburger1 = document.getElementsByClassName('bar')[0];
let hamburger2 = document.getElementsByClassName('bar')[1];
let hamburger3 = document.getElementsByClassName('bar')[2];
let nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
  let value = window.scrollY

  if (value >= 50) {
    logo1.style.display = 'none';
    logo2.style.display = 'block';
    nav.style.background = 'white';
    nav.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.4)';
    nav.style.transition = 'all 0.7s ease';
    phone.style.color = 'black';
    hamburger1.style.background = 'black';
    hamburger2.style.background = 'black';
    hamburger3.style.background = 'black';
  }
  else {
    logo1.style.display = 'block';
    logo2.style.display = 'none';
    nav.style.background = 'transparent';
    nav.style.boxShadow = 'none';
    phone.style.color = 'white';
    hamburger1.style.background = 'white';
    hamburger2.style.background = 'white';
    hamburger3.style.background = 'white';
  }
})


const openNav = document.querySelectorAll('.hamburger');

const handleButtonClick = () => {
  const popupMenus = document.querySelectorAll('.popup');
  for (const popupMenu of popupMenus) {
    popupMenu.classList.add('active');
  }
};

const closeMenu = () => {
  const popupMenus = document.querySelectorAll('.popup');
  for (const popupMenu of popupMenus) {
    popupMenu.classList.remove('active');
    popupMenu.classList.add('closing');
    setTimeout(() => {
      popupMenu.classList.remove('closing');
    }, 1500);
  }
};

for (const button of openNav) {
  button.addEventListener('click', handleButtonClick);
}

const closeButtons = document.querySelectorAll('.popUpNav-close');
for (const closeButton of closeButtons) {
  closeButton.addEventListener('click', closeMenu);
}

// Section 2

const counters = document.querySelectorAll('.counter');
let interval = 2500;

const startCounterOnIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counterElement = entry.target;
      let startValue = 0;
      let endValue = parseInt(counterElement.dataset.target);
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        counterElement.textContent = startValue;
        if (startValue >= endValue) {
          clearInterval(counter);
        }
      }, duration);
      observer.unobserve(counterElement);
    }
  });
};

const observer = new IntersectionObserver(startCounterOnIntersection, {
  threshold: 0.2,
});

counters.forEach((counterElement) => {
  observer.observe(counterElement);
});

const disconnectObserver = () => {
  observer.disconnect();
};

window.addEventListener('unload', disconnectObserver);


// Section 3

const slides = [
  {
      heading: "General Sales & Service Agent",
      image: "./Assets/section3Bg.jpg",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatum.'
  },
  {
      heading: "General Sales Agents",
      image: "./Assets/section3Bg.jpeg",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
      heading: "Total Cargo Management",
      image: "./Assets/section3slide3.jpg",
      para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
  },
  {
      heading: "Cargo Sales Agent",
      image: "./Assets/section3slide4.jpeg",
      para: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
  },
  {
      heading: "Block Space Agreement",
      image: "./Assets/section3slide5.jpeg",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
];

let index = 0;

function updateContent() {
  const section3Content = document.querySelector('.section3Content');
  section3Content.querySelector('h1').textContent = slides[index].heading;
  section3Content.querySelector('.section3Img img').src = slides[index].image;
  section3Content.querySelector('.section3Text p').textContent = slides[index].para;
}

function handlePrevClick() {
  const swiperRef = document.querySelector('.mySwiper1').swiper;
  swiperRef.slidePrev();
}

function handleNextClick() {
  const swiperRef = document.querySelector('.mySwiper1').swiper;
  swiperRef.slideNext();
}

document.getElementById('nextContentBtn').addEventListener('click', function () {
  // Update the index or any other logic for changing the content
  index = (index === slides.length - 1) ? 0 : index + 1;
  updateContent();
});

function handleSlideClick(clickedIndex) {
  index = clickedIndex;
  const swiperRef = document.querySelector('.mySwiper1').swiper;
  swiperRef.slideTo(clickedIndex);
  updateContent();
}

updateContent();

        document.getElementById('prev').addEventListener('click', handlePrevClick);
        document.getElementById('next').addEventListener('click', handleNextClick);

        const swiperSlides = document.querySelectorAll('.swiper-slide1');
        swiperSlides.forEach((slide, slideIndex) => {
            slide.addEventListener('click', () => {
                handleSlideClick(slideIndex);
            });
        });