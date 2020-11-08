<template>
  <!-- Contact Us Section -->
  <section id="contact" class="py-2 py-md-5 text-white text-center overflow-hidden">
    
    <b-container class="mt-5">
      <header>
        <h2 class="mb-5 pt-3">
          Ready For Your<strong> FUTURE?</strong><br />
          <small class="">Contact <strong>Us</strong></small>
        </h2>
      </header>

      <form action="https://formsubmit.co/contact@promoe.com.sa" method="POST" id="contact-form" class="needs-validation" novalidate>
        <div class="form-group ">
          <input type="name" class="form-control" id="name" placeholder="Name" name="name">
        </div>

        <div class="form-group form-row">
          <div class="col-12 col-md-6 mb-2">
            <input type="email" class="form-control" id="email" placeholder="Email" name="email">
          </div>
          <div class="col-12 col-md-6 mb-2">
            <input type="website" class="form-control" id="website" placeholder="Website" name="website">
          </div>
        </div>

        <div class="form-group form-row">
          <div class="col-12 col-md-6 mb-2">
            <input type="tel" class="form-control" id="phonenumber" placeholder="+966-5....." name="phonenumber">
          </div>
          <div class="col-12 col-md-6 mb-2">
            <input type="text" class="form-control" id="business" placeholder="Your Business Name" name="business">
          </div>
        </div>

        <div class="form-group form-row">
          <div class="col-12 mb-2">
            <textarea rows="3" type="text" class="form-control" id="message" placeholder="A breif Message" name="message"></textarea>
          </div>
          
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary border-0 my-4 px-5 py-3 font-weight-normal">GET IN TOUCH</button>
        </div>
      </form>

      

    </b-container>
  </section>
</template>

<script>
export default {
};
</script>
