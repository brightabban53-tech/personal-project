const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }

});




document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    menuBtn.textContent = "☰";

  });

});




function joinKuda() {

  alert(
    "Welcome! This is a front-end clone/demo. Connect this button to your own signup page."
  );

}



function scrollToProducts() {

  document
    .getElementById("products")
    .scrollIntoView({
      behavior: "smooth"
    });

}




const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.15
  }
);




document
  .querySelectorAll(
    ".product-card, .big-feature, .feature, .trust-grid div"
  )
  .forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
      "opacity .6s ease, transform .6s ease";

    observer.observe(element);

  });
