/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("currentYear").textContent =
  new Date().getFullYear();


/* =========================================================
   TYPED.JS
========================================================= */

new Typed("#typed", {

  strings: [
    "IT Engineering Student",
    "Web Developer",
    "Video Editor",
    "Freelancer"
  ],

  typeSpeed: 60,

  backSpeed: 40,

  backDelay: 1200,

  loop: true

});


/* =========================================================
   SCROLL PROGRESS + BACK TO TOP
========================================================= */

const scrollProgress =
  document.getElementById("scrollProgress");

const backToTopBtn =
  document.getElementById("backToTop");


window.addEventListener("scroll", () => {

  const totalHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    (window.scrollY / totalHeight) * 100;

  scrollProgress.style.width =
    `${progress}%`;


  if (window.scrollY > 300) {

    backToTopBtn.classList.add("active");

  } else {

    backToTopBtn.classList.remove("active");

  }

});


/* =========================================================
   BACK TO TOP
========================================================= */

backToTopBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});


/* =========================================================
   PROJECT FILTER
========================================================= */

const filterBtns =
  document.querySelectorAll(".filter-btn");

const projectCols =
  document.querySelectorAll(".project-item-col");


filterBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    filterBtns.forEach((button) => {

      button.classList.remove("active");

    });


    btn.classList.add("active");


    const filter =
      btn.getAttribute("data-filter");


    projectCols.forEach((project) => {

      const category =
        project.getAttribute("data-category");


      if (
        filter === "all" ||
        category === filter
      ) {

        project.style.display = "block";

      } else {

        project.style.display = "none";

      }

    });

  });

});


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const observerOptions = {

  threshold: 0.1

};


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "aos-animate"
          );

          observer.unobserve(entry.target);

        }

      });

    },
    observerOptions
  );


document
  .querySelectorAll("[data-aos]")
  .forEach((element) => {

    observer.observe(element);

  });


/* =========================================================
   WHATSAPP CONTACT FORM
========================================================= */

const contactForm =
  document.getElementById("contactForm");


contactForm.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();


    const name =
      document.getElementById("name").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const phone =
      document.getElementById("phone").value.trim()
      || "Not provided";

    const message =
      document.getElementById("message").value.trim();


    const whatsappNumber =
      "918104226012";


    const formattedText =
      `*New Contact Request*%0A%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Email:* ${encodeURIComponent(email)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Message:* ${encodeURIComponent(message)}`;


    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${formattedText}`;


    /* Bootstrap Modal */

    const successModal =
      new bootstrap.Modal(
        document.getElementById("successModal")
      );


    successModal.show();


    /* Open WhatsApp */

    setTimeout(() => {

      window.open(
        whatsappUrl,
        "_blank"
      );

    }, 1500);


    /* Clear form */

    contactForm.reset();

  }
);


/* =========================================================
   MOBILE NAVBAR AUTO CLOSE
========================================================= */

const navLinks =
  document.querySelectorAll(".nav-link-custom");

const navbarContent =
  document.getElementById("navbarContent");


navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    if (
      navbarContent.classList.contains("show")
    ) {

      const collapse =
        bootstrap.Collapse.getInstance(
          navbarContent
        );

      if (collapse) {

        collapse.hide();

      }

    }

  });

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections =
  document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;


    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      current =
        section.getAttribute("id");

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");


    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {

      link.classList.add("active");

    }

  });

});