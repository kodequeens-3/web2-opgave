// Announcement bar scroller

class InfiniteScroller {
  constructor(element) {
    this.element = element;
    this.content = element.querySelector(".announcement-text");
    this.scrollSpeed = 50; // Lower number = faster scroll
    this.isHovered = false;
    this.position = 0;
    this.init();
  }

  init() {
    // Calculate the required width to ensure smooth scrolling
    const textWidth = this.content.offsetWidth;
    const containerWidth = this.element.offsetWidth;

    // Clone the text if needed to ensure continuous scroll
    if (textWidth < containerWidth * 1) {
      this.content.innerHTML += this.content.innerHTML;
    }

    // Add event listeners for hover
    this.element.addEventListener("mouseenter", () => {
      this.isHovered = true;
    });

    this.element.addEventListener("mouseleave", () => {
      this.isHovered = false;
    });

    // Start the animation
    this.animate();
  }

  animate() {
    if (!this.isHovered) {
      this.position -= 1;

      // Reset position when text has scrolled fully
      if (Math.abs(this.position) >= this.content.offsetWidth / 2) {
        this.position = 0;
      }

      this.content.style.transform = `translateX(${this.position}px)`;
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize the scroller when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const announcementBar = document.querySelector(".announcement-bar");
  if (announcementBar) {
    new InfiniteScroller(announcementBar);
  }
});

// Optional: Pause animation when the page is not visible
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.querySelector(".announcement-content").style.animationPlayState = "paused";
  } else {
    document.querySelector(".announcement-content").style.animationPlayState = "running";
  }
});

// Mobile Menu Functionality
const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
});
