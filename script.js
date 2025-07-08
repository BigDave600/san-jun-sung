// Show welcome alert on page load
window.addEventListener("load", () => {
  alert("Welcome to San Jun-Sung's Civil Engineering Portfolio!");
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = "↑ Top";
scrollToTopBtn.id = "scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.right = "20px";
scrollToTopBtn.style.padding = "10px 15px";
scrollToTopBtn.style.backgroundColor = "#0077cc";
scrollToTopBtn.style.color = "#fff";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.borderRadius = "5px";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.display = "none";
scrollToTopBtn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
scrollToTopBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Basic email and phone link click tracker
const emailLink = document.querySelector('a[href^="mailto:"]');
const phoneLink = document.querySelector('a[href^="tel:"]');

if (emailLink) {
  emailLink.addEventListener("click", () => {
    console.log("Email link clicked: sanjun-sung22@gmail.com");
  });
}

if (phoneLink) {
  phoneLink.addEventListener("click", () => {
    console.log("Phone link clicked: +1 (814) 876-0690");
  });
}
