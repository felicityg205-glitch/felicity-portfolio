// ========================================
 // FELICITY GONZAGA PORTFOLIO
 // ========================================

 // MOBILE MENU
 const menuButton = document.getElementById("menuButton");
 const navMenu = document.getElementById("navMenu");

 if (menuButton && navMenu) {
     menuButton.addEventListener("click", () => {
         const isOpen = navMenu.classList.toggle("open");

         menuButton.setAttribute("aria-expanded", String(isOpen));

         menuButton.innerHTML = isOpen
             ? '<i class="fa-solid fa-xmark"></i>'
             : '<i class="fa-solid fa-bars"></i>';
     });

     document.querySelectorAll("#navMenu a").forEach(link => {
         link.addEventListener("click", () => {
             navMenu.classList.remove("open");
             menuButton.setAttribute("aria-expanded", "false");
             menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
         });
     });

     // CLOSE MENU WHEN CLICKING OUTSIDE
     document.addEventListener("click", (event) => {
         if (
             !navMenu.contains(event.target) &&
             !menuButton.contains(event.target)
         ) {
             navMenu.classList.remove("open");
             menuButton.setAttribute("aria-expanded", "false");
             menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
         }
     });
 }

 // ========================================
 // SIMPLE IMAGE REVEAL
 // ========================================

 const images = document.querySelectorAll("img");

 images.forEach(image => {
     const revealImage = () => image.classList.add("loaded");

     if (image.complete && image.naturalWidth > 0) {
         revealImage();
     } else {
         image.addEventListener("load", revealImage, { once: true });
     }
 });

 // ========================================
 // PARALLAX EFFECT
 // ========================================

 const heroWord = document.querySelector(".hero-background-word");

 window.addEventListener("scroll", () => {
     if (!heroWord) return;

     const scrollPosition = window.scrollY;

     if (scrollPosition < window.innerHeight) {
         heroWord.style.transform =
             `translateY(${scrollPosition * 0.15}px)`;
     }
 });

 // ========================================
 // CONSOLE MESSAGE
 // ========================================

 console.log(
     "%cFELICITY GONZAGA",
     "font-size:20px;font-weight:bold;color:#a83a4c;"
 );

 console.log(
     "%cPortfolio system online.",
     "font-size:12px;color:#f5ebdd;"
 );