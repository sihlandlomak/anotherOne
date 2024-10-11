<template>
    <nav class="navbar navbar-expand-lg sticky-top custom-navbar">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="#">Navbar</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="education">Education & Experience</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="projects">Projects</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
    name: 'NavbarComp'
}
</script>

<style>

</style>