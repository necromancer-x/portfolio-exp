// Portfolio data for carousel

const portfolioData = [
  {
    id: 1,
    title: "Full Stack E-Commerce Platform",
    description:
      "A scalable e-commerce web application with user authentication, product management, cart system, and secure payment integration.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VNoETQG1aBwujmj9qMBbLQ.png",
    tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging app with private chats, group chats, typing indicators, and WebSocket-based communication.",
    image:
      "https://codeastro.com/wp-content/uploads/2021/06/Code-Astro-Thumbnail-Realtime-Chat-Application-PHP.jpg",
    tech: ["React.js", "Node.js", "Socket.io", "Express"],
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A productivity web app to manage tasks with features like deadlines, priorities, drag-and-drop boards, and user collaboration.",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240427182308/How-to-Manage-Tasks.webp",
    tech: ["React.js", "Node.js", "MongoDB", "Redux"],
  },
  {
    id: 4,
    title: "Social Media Web App",
    description:
      "A social platform with user profiles, posts, likes, comments, and real-time notifications.",
    image:
      "https://cdn.dribbble.com/userupload/2738965/file/original-aef506132b0f02570233e50fecf55c6a.jpg?resize=752x&vertical=center",
    tech: ["React.js", "Node.js", "MongoDB", "JWT"],
  },
  {
    id: 5,
    title: "Online Code Editor (CodePen Clone)",
    description:
      "A browser-based code editor supporting HTML, CSS, and JavaScript with live preview and code sharing features.",
    image: "https://i.ytimg.com/vi/lfkp0mqHeEM/maxresdefault.jpg",
    tech: ["React.js", "Node.js", "Monaco Editor", "WebSockets"],
  },
  {
    id: 6,
    title: "Job Portal System",
    description:
      "A job portal with recruiter and applicant dashboards, resume uploads, job postings, and application tracking.",
    image: "https://themewagon.com/wp-content/uploads/2020/11/jobfinder-1.jpg",
    tech: ["React.js", "Node.js", "MongoDB", "AWS S3"],
  },
  {
    id: 7,
    title: "Expense Tracker with Analytics",
    description:
      "A personal finance tracker with charts, budgeting features, and monthly expense insights.",
    image:
      "https://www.appsmith.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flpvian6u6i39%2F6IYyJiDxqytCEH1RAyI0C6%2F0bfee6878c2f604927e404c6be894f1b%2FProject_expense_tracking_software.png&w=1080&q=75",
    tech: ["React.js", "Node.js", "MongoDB", "Chart.js"],
  },
];

// Skills data
const skillsData = [
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 95,
    category: "frontend",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 90,
    category: "backend",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 88,
    category: "frontend",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    level: 92,
    category: "cloud",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: 85,
    category: "cloud",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: 93,
    category: "backend",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    level: 82,
    category: "cloud",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    level: 87,
    category: "backend",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    level: 78,
    category: "emerging",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    level: 85,
    category: "frontend",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 90,
    category: "backend",
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    level: 90,
    category: "backend",
  },
];

// Scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const header = document.getElementById("header");
  if (section) {
    const headerHeight = header.offsetHeight;
    const targetPosition = section.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// Initialize particles for philosophy section
function initParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 15;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random horizontal position
    particle.style.left = Math.random() * 100 + "%";

    // Start particles at random vertical positions throughout the section
    particle.style.top = Math.random() * 100 + "%";

    // Random animation delay for natural movement
    particle.style.animationDelay = Math.random() * 20 + "s";

    // Random animation duration for variety
    particle.style.animationDuration = 18 + Math.random() * 8 + "s";

    particlesContainer.appendChild(particle);
  }
}

// Initialize carousel
let currentIndex = 0;
const carousel = document.getElementById("carousel");
const indicatorsContainer = document.getElementById("indicators");

function createCarouselItem(data, index) {
  const item = document.createElement("div");
  item.className = "carousel-item";
  item.dataset.index = index;

  const techBadges = data.tech
    .map((tech) => `<span class="tech-badge">${tech}</span>`)
    .join("");

  item.innerHTML = `
                <div class="card">
                    <div class="card-number">0${data.id}</div>
                    <div class="card-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <h3 class="card-title">${data.title}</h3>
                    <p class="card-description">${data.description}</p>
                    <div class="card-tech">${techBadges}</div>
                    <button class="card-cta" onclick="scrollToSection('about')">Explore</button>
                </div>
            `;

  return item;
}

function initCarousel() {
  // Create carousel items
  portfolioData.forEach((data, index) => {
    const item = createCarouselItem(data, index);
    carousel.appendChild(item);

    // Create indicator
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    if (index === 0) indicator.classList.add("active");
    indicator.dataset.index = index;
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  updateCarousel();
}

function updateCarousel() {
  const items = document.querySelectorAll(".carousel-item");
  const indicators = document.querySelectorAll(".indicator");
  const totalItems = items.length;
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  items.forEach((item, index) => {
    // Calculate relative position
    let offset = index - currentIndex;

    // Wrap around for continuous rotation
    if (offset > totalItems / 2) {
      offset -= totalItems;
    } else if (offset < -totalItems / 2) {
      offset += totalItems;
    }

    const absOffset = Math.abs(offset);
    const sign = offset < 0 ? -1 : 1;

    // Reset transform
    item.style.transform = "";
    item.style.opacity = "";
    item.style.zIndex = "";
    item.style.transition = "all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)";

    // Adjust spacing based on screen size
    let spacing1 = 400;
    let spacing2 = 600;
    let spacing3 = 750;

    if (isMobile) {
      spacing1 = 280; // Was 400, now 100px closer
      spacing2 = 420; // Was 600, now 180px closer
      spacing3 = 550; // Was 750, now 200px closer
    } else if (isTablet) {
      spacing1 = 340;
      spacing2 = 520;
      spacing3 = 650;
    }

    if (absOffset === 0) {
      // Center item
      item.style.transform = "translate(-50%, -50%) translateZ(0) scale(1)";
      item.style.opacity = "1";
      item.style.zIndex = "10";
    } else if (absOffset === 1) {
      // Side items
      const translateX = sign * spacing1;
      const rotation = isMobile ? 25 : 30;
      const scale = isMobile ? 0.88 : 0.85;
      item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
      item.style.opacity = "0.8";
      item.style.zIndex = "5";
    } else if (absOffset === 2) {
      // Further side items
      const translateX = sign * spacing2;
      const rotation = isMobile ? 35 : 40;
      const scale = isMobile ? 0.75 : 0.7;
      item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
      item.style.opacity = "0.5";
      item.style.zIndex = "3";
    } else if (absOffset === 3) {
      // Even further items
      const translateX = sign * spacing3;
      const rotation = isMobile ? 40 : 45;
      const scale = isMobile ? 0.65 : 0.6;
      item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
      item.style.opacity = "0.3";
      item.style.zIndex = "2";
    } else {
      // Hidden items (behind)
      item.style.transform =
        "translate(-50%, -50%) translateZ(-500px) scale(0.5)";
      item.style.opacity = "0";
      item.style.zIndex = "1";
    }
  });

  // Update indicators
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % portfolioData.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + portfolioData.length) % portfolioData.length;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

// Initialize hexagonal skills grid
function initSkillsGrid() {
  const skillsGrid = document.getElementById("skillsGrid");
  const categoryTabs = document.querySelectorAll(".category-tab");

  function displaySkills(category = "all") {
    skillsGrid.innerHTML = "";

    const filteredSkills =
      category === "all"
        ? skillsData
        : skillsData.filter((skill) => skill.category === category);

    filteredSkills.forEach((skill, index) => {
      const hexagon = document.createElement("div");
      hexagon.className = "skill-hexagon";
      hexagon.style.animationDelay = `${index * 0.1}s`;

      hexagon.innerHTML = `
                        <div class="hexagon-inner">
                            <div class="hexagon-content">
                                <div class="skill-icon-hex">
                                <img src="${skill.icon}" alt="${skill.name}" />
                                </div>
                                <div class="skill-name-hex">${skill.name}</div>
                                <div class="skill-level">
                                    <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                                </div>
                                <div class="skill-percentage-hex">${skill.level}%</div>
                            </div>
                        </div>
                    `;

      skillsGrid.appendChild(hexagon);
    });
  }

  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      displaySkills(tab.dataset.category);
    });
  });

  displaySkills();
}

// Event listeners
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

// Auto-rotate carousel
setInterval(nextSlide, 5000);

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

// Update carousel on window resize
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateCarousel();
  }, 250);
});

// Initialize on load
initCarousel();
initSkillsGrid();
initParticles();

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling and active navigation
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});

// Update active navigation on scroll
function updateActiveNav() {
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href").substring(1);
        if (href === sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

// Animated counter for stats
function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const counter = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Intersection Observer for stats animation
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll(".stat-number");
      statNumbers.forEach((number) => {
        if (!number.classList.contains("animated")) {
          number.classList.add("animated");
          animateCounter(number);
        }
      });
    }
  });
}, observerOptions);

const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  observer.observe(statsSection);
}

// Form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Show success message
  alert(
    `Thank you ${data.name}! Your message has been transmitted successfully. We'll respond within 24 hours.`,
  );

  // Reset form
  contactForm.reset();
});

// Loading screen
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  }, 1500);
});

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero");
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
