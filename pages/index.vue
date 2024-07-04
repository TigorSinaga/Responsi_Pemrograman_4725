<template>
  <div>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Skills from "@/components/Skills.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Home,
    About,
    Services,
    Skills,
    Contact,
    Footer,
  },
  mounted() {
    this.$nextTick(() => {
      // jQuery and Typed.js code
      const $ = this.$jquery;
      $(document).ready(() => {
        $(window).scroll(() => {
          if ($(window).scrollTop() > 20) {
            $(".navbar").addClass("sticky");
          } else {
            $(".navbar").removeClass("sticky");
          }
          if ($(window).scrollTop() > 500) {
            $(".scroll-up-btn").addClass("show");
          } else {
            $(".scroll-up-btn").removeClass("show");
          }
        });

        // Typing animation
        new Typed(".typing", {
          strings: ["Student", "Developer", "Designer"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true,
        });

        new Typed(".typing-2", {
          strings: ["Student", "Developer", "Designer"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true,
        });

        // Slide up
        $(".scroll-up-btn").click(() => {
          $("html").animate({ scrollTop: 0 });
        });

        // Toggle
        $(".menu-btn").click(() => {
          $(".navbar .menu").toggleClass("active");
          $(".navbar i").toggleClass("active");
        });
      });
    });
  },
};
</script>
<style>
/* Tambahkan style yang sesuai */
</style>
