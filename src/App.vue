<template>
  <div id="app">
    <!-- ======= Mobile nav toggle button ======= -->
    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

    <!-- ======= Header ======= -->
    <AppHeader />
    <!-- End Header -->

    <!-- ======= Hero Section ======= -->
    <SectionMe />
    <!-- End Hero -->

    <main id="main">
      <!-- ======= About Section ======= -->
      <SectionAbout />
      <!-- End About Section -->

      <!-- ======= Facts Section ======= -->
      <!--<SectionFacts />-->
      <!-- End Facts Section -->

      <!-- ======= Skills Section ======= -->
      <SectionSkills />
      <!-- End Skills Section -->

      <!-- ======= Resume Section ======= -->
      <SectionResume />
      <!-- End Resume Section -->

      <!-- ======= Portfolio Section ======= -->
      <SectionPortfolio />
      <!-- End Portfolio Section -->

      <!-- ======= Services Section ======= -->
      <!--<SectionServices />-->
      <!-- End Services Section -->

      <!-- ======= Testimonials Section ======= -->
      <!--<SectionTestimonials />-->
      <!-- End Testimonials Section -->

      <!-- ======= Contact Section ======= -->
      <SectionContact />
      <!-- End Contact Section -->
    </main>
    <!-- End #main -->

    <!-- ======= Footer ======= -->
    <AppFooter />
    <!-- End  Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<script>
import AOS from './../public/assets/vendor/aos/aos.js'
import './../public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import GLightbox from './../public/assets/vendor/glightbox/js/glightbox'
import Isotope from './../public/assets/vendor/isotope-layout/isotope.pkgd.min.js'
import './../public/assets/vendor/php-email-form/validate.js'
import './../public/assets/vendor/purecounter/purecounter.js'
import Swiper from './../public/assets/vendor/swiper/swiper-bundle.min.js'
import Typed from './../public/assets/vendor/typed.js/typed.min.js'
import './../public/assets/vendor/waypoints/noframework.waypoints.js'
import AppFooter from './components/footer/AppFooter'
import AppHeader from './components/header/AppHeader'
import SectionMe from './components/main/SectionMe'
import SectionAbout from './components/main/SectionAbout'
import SectionResume from './components/main/SectionResume'
import SectionPortfolio from './components/main/SectionPortfolio'
// import SectionServices from './components/main/SectionServices'
// import SectionTestimonials from './components/main/SectionTestimonials'
import SectionContact from './components/main/SectionContact'
import SectionSkills from './components/main/SectionSkills'
// import SectionFacts from './components/main/SectionFacts'

export default {
  name: 'App',
  components: {
    // SectionFacts,
    SectionSkills,
    SectionContact,
    // SectionTestimonials,
    // SectionServices,
    SectionPortfolio,
    SectionResume,
    SectionAbout,
    SectionMe,
    AppHeader,
    AppFooter,
  },
  mounted() {
    this.reloadPage()
  },
  data: () => ({
    typed: null,
  }),
  methods: {
    reloadPage() {
      this.$nextTick(() => {
        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
          el = el.trim()
          if (all) {
            return [...document.querySelectorAll(el)]
          } else {
            return document.querySelector(el)
          }
        }

        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
          let selectEl = select(el, all)
          if (selectEl) {
            if (all) {
              selectEl.forEach((e) => e.addEventListener(type, listener))
            } else {
              selectEl.addEventListener(type, listener)
            }
          }
        }

        /**
         * Easy on scroll event listener
         */
        const onscroll = (el, listener) => {
          el.addEventListener('scroll', listener)
        }

        /**
         * Navbar links active state on scroll
         */
        let navbarlinks = select('#navbar .scrollto', true)
        const navbarlinksActive = () => {
          let position = window.scrollY + 200
          navbarlinks.forEach((navbarlink) => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
              navbarlink.classList.add('active')
            } else {
              navbarlink.classList.remove('active')
            }
          })
        }
        window.addEventListener('load', navbarlinksActive)
        onscroll(document, navbarlinksActive)

        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
          let elementPos = select(el).offsetTop
          window.scrollTo({
            top: elementPos,
            behavior: 'smooth',
          })
        }

        /**
         * Back to top button
         */
        let backtotop = select('.back-to-top')
        if (backtotop) {
          const toggleBacktotop = () => {
            if (window.scrollY > 100) {
              backtotop.classList.add('active')
            } else {
              backtotop.classList.remove('active')
            }
          }
          window.addEventListener('load', toggleBacktotop)
          onscroll(document, toggleBacktotop)
        }

        /**
         * Mobile nav toggle
         */
        on('click', '.mobile-nav-toggle', function (e) {
          select('body').classList.toggle('mobile-nav-active')
          this.classList.toggle('bi-list')
          this.classList.toggle('bi-x')
        })

        /**
         * Scrool with ofset on links with a class name .scrollto
         */
        on(
          'click',
          '.scrollto',
          function (e) {
            if (select(this.hash)) {
              e.preventDefault()

              let body = select('body')
              if (body.classList.contains('mobile-nav-active')) {
                body.classList.remove('mobile-nav-active')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
              }
              scrollto(this.hash)
            }
          },
          true,
        )

        /**
         * Scroll with ofset on page load with hash links in the url
         */
        window.addEventListener('load', () => {
          if (window.location.hash) {
            if (select(window.location.hash)) {
              scrollto(window.location.hash)
            }
          }
        })

        /**
         * Hero type effect
         */
        const typed = select('.typed')
        if (typed) {
          let typed_strings = typed.getAttribute('data-typed-items')
          typed_strings = typed_strings.split(',')
          new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
          })
        }

        /**
         * Skills animation
         */
        let skilsContent = select('.skills-content')
        if (skilsContent) {
          new Waypoint({
            element: skilsContent,
            offset: '80%',
            handler: function (direction) {
              let progress = select('.progress .progress-bar', true)
              progress.forEach((el) => {
                el.style.width = el.getAttribute('aria-valuenow') + '%'
              })
            },
          })
        }

        /**
         * Porfolio isotope and filter
         */
        window.addEventListener('load', () => {
          let portfolioContainer = select('.portfolio-container')
          if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
              itemSelector: '.portfolio-item',
            })

            let portfolioFilters = select('#portfolio-flters li', true)

            on(
              'click',
              '#portfolio-flters li',
              function (e) {
                e.preventDefault()
                portfolioFilters.forEach(function (el) {
                  el.classList.remove('filter-active')
                })
                this.classList.add('filter-active')

                portfolioIsotope.arrange({
                  filter: this.getAttribute('data-filter'),
                })
                portfolioIsotope.on('arrangeComplete', function () {
                  AOS.refresh()
                })
              },
              true,
            )
          }
        })

        /**
         * Initiate portfolio lightbox
         */
        const portfolioLightbox = GLightbox({
          selector: '.portfolio-lightbox',
        })

        /**
         * Portfolio details slider
         */
        new Swiper('.portfolio-details-slider', {
          speed: 400,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        })

        /**
         * Testimonials slider
         */
        new Swiper('.testimonials-slider', {
          speed: 600,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          },
        })

        /**
         * Animation on scroll
         */
        window.addEventListener('load', () => {
          AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
          })
        })
      })
    },
  },
}
</script>

<style>
@import './../public/assets/vendor/aos/aos.css';
@import './../public/assets/vendor/bootstrap/css/bootstrap.min.css';
@import './../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
@import './../public/assets/vendor/boxicons/css/boxicons.min.css';
@import './../public/assets/vendor/glightbox/css/glightbox.min.css';
@import './../public/assets/vendor/swiper/swiper-bundle.min.css';
@import './../public/assets/css/style.css';
</style>
