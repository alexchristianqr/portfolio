<script setup>
import { onMounted, nextTick, reactive } from "vue";

import Typed from "typed.js";
import GLightbox from "glightbox";
import "waypoints/lib/noframework.waypoints.js";
import Isotope from "isotope-layout";
import Swiper from "swiper";
import AOS from "aos";

import AppFooter from "./components/footer/AppFooter.vue";
import AppHeader from "./components/header/AppHeader.vue";
import SectionMe from "./components/main/SectionMe.vue";
import SectionAbout from "./components/main/SectionAbout.vue";
import SectionResume from "./components/main/SectionResume.vue";
import SectionPortfolio from "./components/main/SectionPortfolio.vue";
import SectionContact from "./components/main/SectionContact.vue";
import SectionSkills from "./components/main/SectionSkills.vue";

const state = reactive({
  existsTyped: null
});

const reloadTyped = () => {
  console.log("[Method] reloadTyped");
  nextTick(() => {
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    /**
     * Hero type effect
     */
    const typed = select(".typed");
    if (typed) {
      let typed_strings = typed.getAttribute("data-typed-items");
      typed_strings = typed_strings.split(",");
      if (!state.existsTyped) {
        state.existsTyped = new Typed(".typed", {
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      } else {
        state.existsTyped.strings = typed_strings;
      }
    }
  });
};

const reloadPage = () => {
  nextTick(() => {
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();

      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        if (!el) return;
        return document.querySelector(el);
      }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos,
        behavior: "smooth"
      });
    };

    /**
     * Back to top button
     */
    let backtotop = select(".back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }

    /**
     * Mobile nav toggle
     */
    on("click", ".mobile-nav-toggle", function (e) {
      select("body").classList.toggle("mobile-nav-active");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    /**
     * Scroll with offset on links with class .scrollto
     */
    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();

          let body = select("body");
          if (body.classList.contains("mobile-nav-active")) {
            body.classList.remove("mobile-nav-active");
            let navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }
          scrollto(this.hash);
        }
      },
      true
    );

    /**
     * Scroll with offset on page load with hash links in the URL
     */
    window.addEventListener("load", () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });

    /**
     * Hero type effect
     */
    const typed = select(".typed");
    if (typed) {
      let typed_strings = typed.getAttribute("data-typed-items");
      typed_strings = typed_strings.split(",");
      if (!state.existsTyped) {
        state.existsTyped = new Typed(".typed", {
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      } else {
        state.existsTyped.strings = typed_strings;
      }
    }

    /**
     * Skills animation
     */
    let skilsContent = select(".skills-content");
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: "80%",
        handler: function (direction) {
          let progress = select(".progress .progress-bar", true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute("aria-valuenow") + "%";
          });
        }
      });
    }

    /**
     * Portfolio isotope and filter
     */
    window.addEventListener("load", () => {
      let portfolioContainer = select(".portfolio-container");
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: ".portfolio-item"
        });

        let portfolioFilters = select("#portfolio-flters li", true);

        on(
          "click",
          "#portfolio-flters li",
          function (e) {
            e.preventDefault();
            portfolioFilters.forEach(function (el) {
              el.classList.remove("filter-active");
            });
            this.classList.add("filter-active");

            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter")
            });
            portfolioIsotope.on("arrangeComplete", function () {
              AOS.refresh();
            });
          },
          true
        );
      }
    });

    /**
     * Initiate portfolio lightbox
     */
    const portfolioLightbox = GLightbox({
      selector: ".portfolio-lightbox"
    });

    /**
     * Portfolio details slider
     */
    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      }
    });

    /**
     * Testimonials slider
     */
    new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });

    /**
     * Animation on scroll
     */
    window.addEventListener("load", () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    });
  });
};

onMounted(() => {
  reloadTyped();
  reloadPage();
});
</script>

<template>
  <div id="app">
    <!-- ======= Mobile nav toggle button ======= -->
    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

    <!-- ======= Header ======= -->
    <AppHeader @eventReloadTyped="reloadTyped" />
    <!-- End Header -->

    <SectionMe class="wrapper fullscreen" />

    <main id="main">
      <SectionAbout class="wrapper fullscreen" />
      <SectionPortfolio class="wrapper fullscreen" />
      <SectionSkills class="wrapper fullscreen" />
      <SectionResume class="wrapper fullscreen" />
      <SectionContact class="wrapper fullscreen" />
    </main>
    <!-- End #main -->

    <AppFooter />

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<style lang="scss">
@import "aos/dist/aos.css";
@import "glightbox/dist/css/glightbox.min.css";
@import "./../node_modules/swiper/swiper-bundle.min.css";
@import "./../public/assets/css/style.css";

.wrapper.fullscreen {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
