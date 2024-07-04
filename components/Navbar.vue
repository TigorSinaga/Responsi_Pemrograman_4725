<template>
  <nav class="navbar">
    <div class="max-width">
      <div class="logo">
        <a href="#">Port<span>folio.</span></a>
      </div>
      <ul class="menu">
        <li><nuxt-link to="#home" class="menu-btn">Home</nuxt-link></li>
        <li><nuxt-link to="#about" class="menu-btn">About</nuxt-link></li>
        <li><nuxt-link to="#services" class="menu-btn">Services</nuxt-link></li>
        <li><nuxt-link to="#skills" class="menu-btn">Skills</nuxt-link></li>
        <li><nuxt-link to="#contact" class="menu-btn">Contact</nuxt-link></li>
      </ul>
      <div class="menu-btn">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
/* tambahkan style yang sesuai */
</style>
