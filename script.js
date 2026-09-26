document.addEventListener("DOMContentLoaded", function () {

  /* ================= MOBILE MENU ================= */

  const menu = document.getElementById("lcMenu");
  const nav = document.getElementById("lcNav");

  if (menu && nav) {

    menu.addEventListener("click", function () {

      const isOpen = nav.classList.toggle("lc-open");

      menu.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menu.innerHTML = isOpen ? "✕" : "☰";

    });


    /* Close menu when a navigation link is clicked */

    nav.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        nav.classList.remove("lc-open");

        menu.setAttribute(
          "aria-expanded",
          "false"
        );

        menu.innerHTML = "☰";

      });

    });

  }


  /* ================= SCROLL REVEAL ================= */

  const revealElements =
    document.querySelectorAll(".lc-reveal");


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(function (entry) {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "lc-visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(function (element) {

      observer.observe(element);

    });

  } else {

    revealElements.forEach(function (element) {

      element.classList.add(
        "lc-visible"
      );

    });

  }


  /* ================= CURRENT YEAR ================= */

  const year =
    document.getElementById("lcYear");

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }


  /* ================= SMOOTH NAVIGATION ================= */

  document.querySelectorAll(
    'a[href^="#"]'
  ).forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId =
        this.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });

});
