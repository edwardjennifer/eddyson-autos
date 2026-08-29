// ========================================
// EDDYSON AUTOS - PREMIUM HOMEPAGE
// ========================================

const vehicles = [
  {
    id: 'mb-s-class',
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2025,
    engine: '3.0L Turbo Inline-6 (mild hybrid)',
    horsepower: 429,
    transmission: '9-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury Sedan',
    description: 'Flagship full-size luxury sedan equipped with a 3.0L Turbo Inline-6 or 4.0L Twin-Turbo V8, active air suspension, and advanced dual-screen infotainment systems.',
    availability: 'Available'
  },
  {
    id: 'mb-g63-amg',
    brand: 'Mercedes-Benz',
    model: 'G-Class (G 63 AMG)',
    year: 2025,
    engine: '4.0L V8 Biturbo (handcrafted AMG)',
    horsepower: 577,
    transmission: '9-Speed Automatic (AMG SPEEDSHIFT)',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'High-performance luxury off-road SUV featuring a handcrafted 4.0L V8 Biturbo engine, triple-locking differentials, and iconic boxy styling.',
    availability: 'Available'
  },
  {
    id: 'mb-amg-gt',
    brand: 'Mercedes-AMG',
    model: 'GT Coupe',
    year: 2025,
    engine: '4.0L V8 Biturbo',
    horsepower: 469,
    transmission: '9-Speed Automatic (AMG SPEEDSHIFT MCT)',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    category: 'Performance Coupe',
    description: 'Grand touring sports coupe powered by a 4.0L V8 Biturbo engine with 4MATIC+ all-wheel drive and active aerodynamics.',
    availability: 'Available'
  },
  {
    id: 'mb-gle-coupe',
    brand: 'Mercedes-Benz',
    model: 'GLE Coupe',
    year: 2025,
    engine: '3.0L Turbo Inline-6 (mild hybrid)',
    horsepower: 375,
    transmission: '9-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'Mid-size luxury SUV with a sloping coupe roofline, mild-hybrid engine options, and dynamic air suspension.',
    availability: 'Available'
  },
  {
    id: 'mb-eqs-sedan',
    brand: 'Mercedes-Benz',
    model: 'EQS Sedan',
    year: 2025,
    engine: 'Single Electric Motor (EV)',
    horsepower: 355,
    transmission: 'Single-Speed Automatic (EV)',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    category: 'Electric Sedan',
    description: 'All-electric flagship sedan built on dedicated EV architecture, featuring the Hyperscreen display and ultra-low aerodynamic drag.',
    availability: 'Available'
  },
  {
    id: 'toyota-camry',
    brand: 'Toyota',
    model: 'Camry',
    year: 2025,
    engine: '2.5L 4-Cylinder Hybrid',
    horsepower: 225,
    transmission: 'Electronic CVT (eCVT)',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    category: 'Sedan',
    description: 'Mid-size family sedan featuring standard hybrid powertrain options, driver assistance systems, and efficient front-wheel or all-wheel drive configurations.',
    availability: 'Available'
  },
  {
    id: 'toyota-land-cruiser',
    brand: 'Toyota',
    model: 'Land Cruiser',
    year: 2025,
    engine: '2.4L Turbo Inline-4 Hybrid (i-FORCE MAX)',
    horsepower: 326,
    transmission: '8-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    category: 'SUV',
    description: 'Legendary 4x4 SUV built on a durable body-on-frame platform, featuring a turbocharged hybrid powertrain and multi-terrain select systems.',
    availability: 'Available'
  },
  {
    id: 'toyota-gr-supra',
    brand: 'Toyota',
    model: 'Supra (GR Supra)',
    year: 2025,
    engine: '3.0L Turbocharged Inline-6',
    horsepower: 382,
    transmission: '8-Speed Automatic / 6-Speed Manual',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    category: 'Performance Coupe',
    description: 'Front-engine rear-wheel-drive sports coupe developed with a 3.0L turbocharged Inline-6 engine and active rear differential.',
    availability: 'Available'
  },
  {
    id: 'toyota-rav4',
    brand: 'Toyota',
    model: 'RAV4',
    year: 2025,
    engine: '2.5L 4-Cylinder (gasoline, hybrid, or PHEV)',
    horsepower: 203,
    transmission: '8-Speed Automatic / Electronic CVT',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    category: 'SUV',
    description: 'Compact crossover SUV offered in gasoline, hybrid, and plug-in hybrid (Prime) variants with electronic all-wheel drive.',
    availability: 'Available'
  },
  {
    id: 'toyota-sequoia',
    brand: 'Toyota',
    model: 'Sequoia',
    year: 2025,
    engine: '3.4L Twin-Turbo V6 Hybrid (i-FORCE MAX)',
    horsepower: 437,
    transmission: '10-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80',
    category: 'SUV',
    description: 'Full-size 3-row SUV equipped with the i-FORCE MAX twin-turbo V8/V6 hybrid engine and high towing capacity.',
    availability: 'Available'
  },
  {
    id: 'honda-civic-type-r',
    brand: 'Honda',
    model: 'Civic Type R',
    year: 2025,
    engine: '2.0L Turbocharged Inline-4 (VTEC Turbo)',
    horsepower: 315,
    transmission: '6-Speed Manual',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    category: 'Performance Hatchback',
    description: 'Performance hatchback featuring a 2.0L turbocharged Inline-4 engine, 6-speed manual transmission, and dual-axis strut front suspension.',
    availability: 'Available'
  },
  {
    id: 'honda-accord',
    brand: 'Honda',
    model: 'Accord',
    year: 2025,
    engine: '2.0L 4-Cylinder Hybrid',
    horsepower: 204,
    transmission: 'Electronic CVT (eCVT)',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    category: 'Sedan',
    description: 'Mid-size sedan equipped with a two-motor hybrid system, streamlined fastback styling, and touchscreen connectivity.',
    availability: 'Available'
  },
  {
    id: 'honda-cr-v',
    brand: 'Honda',
    model: 'CR-V',
    year: 2025,
    engine: '2.0L 4-Cylinder Hybrid / 1.5L Turbo',
    horsepower: 204,
    transmission: 'Electronic CVT (eCVT)',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    category: 'SUV',
    description: 'Compact crossover SUV offered with turbocharged or hybrid powertrains and Real Time AWD.',
    availability: 'Available'
  },
  {
    id: 'honda-pilot',
    brand: 'Honda',
    model: 'Pilot',
    year: 2025,
    engine: '3.5L V6',
    horsepower: 285,
    transmission: '10-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    category: 'SUV',
    description: 'Full-size 3-row family SUV featuring a 3.5L V6 engine, 10-speed automatic transmission, and torque-vectoring AWD.',
    availability: 'Available'
  },
  {
    id: 'honda-nsx',
    brand: 'Honda',
    model: 'NSX (Acura NSX)',
    year: 2022,
    engine: '3.5L Twin-Turbo V6 Hybrid (three electric motors)',
    horsepower: 573,
    transmission: '9-Speed Dual-Clutch (DCT)',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    category: 'Hybrid Supercar',
    description: 'Mid-engine hybrid supercar combining a twin-turbo V6 with three electric motors and Sport Hybrid SH-AWD.',
    availability: 'Available'
  },
  {
    id: 'range-rover-flagship',
    brand: 'Range Rover',
    model: 'Range Rover (Flagship / SV)',
    year: 2025,
    engine: '4.4L Twin-Turbo V8',
    horsepower: 523,
    transmission: '8-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'Full-size luxury flagship SUV featuring all-wheel steering, executive rear seating, and twin-turbo V8 or plug-in hybrid power.',
    availability: 'Available'
  },
  {
    id: 'range-rover-sport',
    brand: 'Range Rover',
    model: 'Range Rover Sport',
    year: 2025,
    engine: '4.4L Twin-Turbo V8',
    horsepower: 523,
    transmission: '8-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'Dynamic luxury SUV focused on road performance, featuring active roll control and adaptive air suspension.',
    availability: 'Available'
  },
  {
    id: 'range-rover-velar',
    brand: 'Range Rover',
    model: 'Range Rover Velar',
    year: 2025,
    engine: '2.0L Turbocharged Inline-4',
    horsepower: 247,
    transmission: '8-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'Avant-garde luxury mid-size SUV defined by flush deployable door handles, dual touchscreens, and minimalist exterior design.',
    availability: 'Available'
  },
  {
    id: 'range-rover-evoque',
    brand: 'Range Rover',
    model: 'Range Rover Evoque',
    year: 2025,
    engine: '2.0L Turbocharged Inline-4',
    horsepower: 246,
    transmission: '9-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'Compact luxury SUV engineered for urban driving, featuring terrain response systems and compact proportions.',
    availability: 'Available'
  },
  {
    id: 'range-rover-electric',
    brand: 'Range Rover',
    model: 'Range Rover Electric',
    year: 2026,
    engine: 'Dual Electric Motors (EV, 800V architecture)',
    horsepower: 'Standard',
    transmission: 'Single-Speed Automatic (EV)',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    category: 'Electric Luxury SUV',
    description: 'Fully electric full-size luxury SUV with 800V architecture and off-road water wading capabilities.',
    availability: 'Available'
  },
  {
    id: 'cadillac-escalade',
    brand: 'Cadillac',
    model: 'Escalade Luxury / Standard',
    year: 2025,
    engine: '6.2L V8',
    horsepower: 420,
    transmission: '10-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c179363a7?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'Full-size 3-row flagship SUV powered by a 6.2L V8 engine, featuring a 38-inch curved OLED digital display.',
    availability: 'Available'
  },
  {
    id: 'cadillac-escalade-esv',
    brand: 'Cadillac',
    model: 'Escalade ESV',
    year: 2025,
    engine: '6.2L V8',
    horsepower: 420,
    transmission: '10-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c179363a7?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'Extended wheelbase variant offering enhanced rear legroom and increased cargo space behind the third row.',
    availability: 'Available'
  },
  {
    id: 'cadillac-escalade-v',
    brand: 'Cadillac',
    model: 'Escalade-V',
    year: 2025,
    engine: '6.2L Supercharged V8',
    horsepower: 682,
    transmission: '10-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80',
    category: 'Performance SUV',
    description: 'High-performance variant equipped with a 6.2L supercharged V8 delivering 682 horsepower and Brembo performance brakes.',
    availability: 'Available'
  },
  {
    id: 'cadillac-escalade-iq',
    brand: 'Cadillac',
    model: 'Escalade IQ',
    year: 2025,
    engine: 'Dual Electric Motors (GM Ultium platform)',
    horsepower: 750,
    transmission: 'Single-Speed Automatic (EV)',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    category: 'Electric SUV',
    description: 'All-electric full-size SUV built on GM\u2019s Ultium platform, featuring dual electric motors and 24-inch wheels.',
    availability: 'Available'
  },
  {
    id: 'cadillac-escalade-platinum',
    brand: 'Cadillac',
    model: 'Escalade Platinum (Sport/Luxury)',
    year: 2025,
    engine: '6.2L V8',
    horsepower: 420,
    transmission: '10-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c179363a7?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'Top-tier trim offering semi-aniline leather seating, 36-speaker AKG audio system, and Super Cruise hands-free driving.',
    availability: 'Available'
  },
  {
    id: 'lexus-ls',
    brand: 'Lexus',
    model: 'LS 500 / LS 600h',
    year: 2025,
    engine: '3.5L Twin-Turbo V6 / V6 Hybrid',
    horsepower: 416,
    transmission: '10-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury Sedan',
    description: 'Full-size flagship luxury sedan with twin-turbo V6 or V8 hybrid powertrains, Executive seating packages, and Kiriko glass trim.',
    availability: 'Available'
  },
  {
    id: 'lexus-lx-600',
    brand: 'Lexus',
    model: 'LX 600',
    year: 2025,
    engine: '3.5L Twin-Turbo V6',
    horsepower: 409,
    transmission: '10-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'Flagship full-size luxury SUV built on a body-on-frame platform, powered by a 3.5L twin-turbo V6 with full-time 4WD.',
    availability: 'Available'
  },
  {
    id: 'lexus-lc-500',
    brand: 'Lexus',
    model: 'LC 500',
    year: 2025,
    engine: '5.0L Naturally Aspirated V8',
    horsepower: 471,
    transmission: '10-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury Coupe',
    description: 'Flagship luxury grand touring coupe featuring a naturally aspirated 5.0L V8 engine and 10-speed automatic transmission.',
    availability: 'Available'
  },
  {
    id: 'lexus-gx-550',
    brand: 'Lexus',
    model: 'GX 550',
    year: 2025,
    engine: '3.4L Twin-Turbo V6',
    horsepower: 349,
    transmission: '10-Speed Automatic',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury SUV',
    description: 'Mid-size luxury off-road SUV featuring rugged boxy styling, twin-turbo V6 engine, and Kinetic Dynamic Suspension.',
    availability: 'Available'
  },
  {
    id: 'lexus-rx-500h',
    brand: 'Lexus',
    model: 'RX 500h F SPORT Performance',
    year: 2025,
    engine: '2.4L Turbocharged Hybrid (DIRECT4 AWD)',
    horsepower: 366,
    transmission: '6-Speed Automatic (Hybrid)',
    price: 'Contact for price',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury Crossover',
    description: 'Mid-size luxury crossover utilizing a turbocharged hybrid system with DIRECT4 all-wheel drive.',
    availability: 'Available'
  }
];

// ========================================
// TYPEWRITER ANIMATION
// ========================================

const typewriterPhrases = [
  'Drive Your Dream.',
  'Discover Excellence.',
  'Luxury. Performance. Confidence.',
  'Your Journey Starts Here.',
  'Premium Quality Always.'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');
const typingSpeed = 80;
const delayBetweenPhrases = 3000;
const deletingSpeed = 40;

function typeWriter() {
  if (!typewriterElement) return;

  // Show a static phrase instead of animating for reduced-motion users
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typewriterElement.textContent = typewriterPhrases[0];
    return;
  }

  const currentPhrase = typewriterPhrases[phraseIndex];
  
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  
  typewriterElement.textContent = currentPhrase.substring(0, charIndex);
  
  let speed = typingSpeed;
  
  if (isDeleting) {
    speed = deletingSpeed;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    // Finished typing, wait before deleting
    isDeleting = true;
    speed = delayBetweenPhrases;
  } else if (isDeleting && charIndex === 0) {
    // Finished deleting, move to next phrase
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
    speed = 500;
  }
  
  setTimeout(typeWriter, speed);
}

// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================

const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
}, { passive: true });

// Mobile menu toggle
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Close menu when clicking nav links
if (navMenu) {
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

// ========================================
// ANIMATED STATISTICS COUNTER
// ========================================

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      animateCounter(entry.target, target);
      entry.target.classList.add('counted');
    }
  });
}, observerOptions);

document.querySelectorAll('.stat-number').forEach(el => {
  observer.observe(el);
});

// ========================================
// RENDER VEHICLES GRID
// ========================================

function renderVehicles() {
  const vehicleGrid = document.getElementById('vehicle-grid');
  if (!vehicleGrid) return;
  
  vehicleGrid.innerHTML = vehicles.map(vehicle => `
    <article class="vehicle-card">
      <div class="vehicle-image">
        <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}" loading="lazy" />
      </div>
      <div class="vehicle-meta">
        <span class="category-pill">${vehicle.category}</span>
        <h3>${vehicle.brand}</h3>
        <span class="vehicle-model">${vehicle.model} • ${vehicle.year}</span>
        <p>${vehicle.description}</p>
        <div class="vehicle-specs">
          <span>${vehicle.engine}</span>
          <span>${typeof vehicle.horsepower === 'number' ? vehicle.horsepower + ' hp' : vehicle.horsepower}</span>
          <span>${vehicle.transmission}</span>
        </div>
        <div class="vehicle-info">
          <span>${vehicle.availability}</span>
          <span class="vehicle-price">${vehicle.price}</span>
        </div>
      </div>
    </article>
  `).join('');
}

// ========================================
// HeroVideo + ShowcaseVideos (reduced-motion aware)
// ========================================

function setupHeroVideo() {
  const videos = document.querySelectorAll('.hero-video, .showcase-video');
  if (!videos.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const applyMotionPreference = (matches) => {
    videos.forEach((video) => {
      if (matches) {
        video.pause();
        video.removeAttribute('autoplay');
      } else {
        video.play().catch(() => {});
      }
    });
  };

  applyMotionPreference(prefersReducedMotion.matches);
  prefersReducedMotion.addEventListener('change', (e) => applyMotionPreference(e.matches));
}

// ========================================
// INITIALIZATION
// ========================================

window.addEventListener('DOMContentLoaded', () => {
  setupHeroVideo();
  typeWriter();
  renderVehicles();
});