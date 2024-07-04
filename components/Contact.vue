<template>
  <section class="contact" id="contact">
    <div class="max-width">
      <h2 class="title">Hubungi Saya</h2>
      <div class="contact-content">
        <div class="column left">
          <div class="text">Temukan Saya</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo adipisci quaerat, deleniti totam dolor qui provident error animi commodi maiores.</p>
          <div class="icons">
            <div class="row">
              <i class="fas fa-user"></i>
              <div class="info">
                <div class="head">Nama</div>
                <div class="sub-title">Tigor Neilson Sinaga</div>
              </div>
            </div>
            <div class="row">
              <i class="fas fa-map-marker-alt"></i>
              <div class="info">
                <div class="head">Alamat</div>
                <div class="sub-title">Yogyakarta, Indonesia</div>
              </div>
            </div>
            <div class="row">
              <i class="fas fa-envelope"></i>
              <div class="info">
                <div class="head">Email</div>
                <div class="sub-title">tigorsinaga@students.amikom.ac.id</div>
              </div>
            </div>
          </div>
        </div>
        <div class="column right">
          <div class="text">Message me</div>
          <form action="#">
            <div class="fields">
              <div class="field name">
                <input type="text" placeholder="Name" required />
              </div>
              <div class="field email">
                <input type="email" placeholder="Email" required />
              </div>
            </div>
            <div class="field">
              <input type="text" placeholder="Subject" required />
            </div>
            <div class="field textarea">
              <textarea cols="30" rows="10" placeholder="Describe project..." required></textarea>
            </div>
            <div class="button">
              <button type="submit">Kirim Pesan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
/* Tambahkan style yang sesuai */
</style>
