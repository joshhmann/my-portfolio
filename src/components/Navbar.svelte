<script>
  let active = false;

  function toggleMenu() {
    active = !active;
  }

  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
</script>

<style>
 /* Navbar container styling */
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #222831; /* Dark background for contrast */
  padding: 10px 20px;
  z-index: 1000; /* Ensure it stays above other content */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Menu icon styling */
.menu-icon {
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: #ddd;
}

/* Navigation links styling */
nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #ddd;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s, color 0.3s;
}

.nav-link:hover {
  border-bottom: 2px solid #00adb5; /* Underline effect on hover */
  color: #00adb5; /* Change color on hover */
}

/* Mobile-friendly adjustments */
@media (max-width: 768px) {
  .menu-icon {
    display: block; /* Show the menu icon on small screens */
  }

  nav {
    display: none; /* Hide the nav links by default */
    flex-direction: column;
    gap: 10px;
    background-color: #222831;
    position: absolute;
    top: 50px; /* Position just below the navbar */
    left: 0;
    width: 100%;
    padding: 20px;
  }

  nav.active {
    display: flex; /* Show the nav links when active */
  }

  .nav-link {
    padding: 10px 0; /* Adjust padding for mobile view */
    text-align: center;
  }
}

</style>

<div class="navbar">
  <span class="menu-icon" on:click={toggleMenu}>&#9776;</span>
  <nav class:active={active}>
    <a on:click={() => scrollToSection('home')} class="nav-link">Home</a>
    <a on:click={() => scrollToSection('about')} class="nav-link">About Me</a>
    <a on:click={() => scrollToSection('projects')} class="nav-link">Projects</a>
    <a on:click={() => scrollToSection('contact')} class="nav-link">Contact</a>
  </nav>
</div>

