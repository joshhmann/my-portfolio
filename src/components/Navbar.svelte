<script>
  import { link } from 'svelte-spa-router';
  let active = false;

  function toggleMenu() {
    active = !active;
  }
  export let activeSection;
</script>

<style>
.navbar {
  display: flex;
  justify-content: flex-end; /* Align items to the right */
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 20px; /* Add some padding on the sides */
}

.menu-icon {
  display: none; /* Hide menu icon by default */
  cursor: pointer;
}

.nav-link {
  padding: 10px 15px; /* Spacing around links for easier clickability */
  text-decoration: none;
  color: #fff; /* White text color for dark mode */
  margin-left: 10px; /* Space between links */
  border-bottom: 2px solid transparent; /* Invisible border for layout consistency */
  transition: border-color 0.3s; /* Smooth transition for the underline */
}

.nav-link:hover, .nav-link.active {
  border-bottom: 2px solid #fff; /* Underline for hover and active states */
}

/* Toggle visibility on small screens */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start; /* Align items to the left on small screens */
  }

  .menu-icon {
    display: block; /* Show menu icon */
    padding: 10px 15px; /* Ensure clickable area */
    margin-left: auto; /* Align menu icon to the right */
  }

  .nav-link {
    display: none; /* Hide links initially */
  }

  .navbar.responsive .nav-link {
    display: block; /* Show links when menu is toggled */
    margin: 10px 0; /* Adjust spacing for vertical layout */
  }
}
</style>

<div class="navbar" class:responsive={active}>
  <a href="/" use:link class="nav-link" class:active={activeSection === 'home'}>Home</a>
  <a href="/about" use:link class="nav-link" class:active={activeSection === 'about'}>About Me</a>
  <a href="/projects" use:link class="nav-link" class:active={activeSection === 'projects'}>Projects</a>
  <a href="/contact" use:link class="nav-link" class:active={activeSection === 'contact'}>Contact</a>
  <span class="menu-icon" on:click={toggleMenu}>&#9776;</span>
</div>

