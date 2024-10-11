<template>
  <div class="education">
    <div class="card-2">
      <div class="card">
          <img src="path/to/coding-academy-logo.jpg" class="card-img-top" alt="Institution Logo">
          <div class="card-body">
              <h5 class="card-title">Life Choices Coding Academy</h5>
              <p class="card-text">Course: Web Development Bootcamp</p>
              <p class="card-text">Duration: 2024</p>
              <p class="card-text">Location: Cape Town, South Africa</p>
          </div>
      </div>
    </div>
    <div class="card-2">
      <div class="card">
          <img src="path/to/education-logo.jpg" class="card-img-top" alt="Institution Logo">
          <div class="card-body">
              <h5 class="card-title">Cape Peninsula University of Technology (CPUT)</h5>
              <p class="card-text">Degree: Education</p>
              <p class="card-text">Duration: 2023</p>
              <p class="card-text">Location: Cape Town, South Africa</p>
          </div>
      </div>
  </div>
  <div class="card-2">
    <div class="card">
        <img src="path/to/university-logo.jpg" class="card-img-top" alt="Institution Logo">
        <div class="card-body">
            <h5 class="card-title">University of the Western Cape (UWC)</h5>
            <p class="card-text">Degree: Bachelor of Commerce (BCom) Accounting</p>
            <p class="card-text">Duration: 2020 - 2022</p>
            <p class="card-text">Location: Bellville, South Africa</p>
        </div>
    </div>
</div>
<div class="card-2">
  <div class="card">
      <img src="path/to/highschool-logo.jpg" class="card-img-top" alt="Institution Logo">
      <div class="card-body">
          <h5 class="card-title">Pakamani Secondary School (SSS)</h5>
          <p class="card-text">Qualification: Matric</p>
          <p class="card-text">Duration: 2017 - 2019</p>
          <p class="card-text">Location: Engcobo, Eastern Cape</p>
      </div>
  </div>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.card{
  height: 100%;
}
  .education{
    margin: 20px 0 3em;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(40em, 1fr));
    gap: 1em;
  }
  .education > * {
    border: 2px solid red;
    width: 30em;
    height: 20em;
  }
</style>