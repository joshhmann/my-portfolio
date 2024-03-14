<!-- src/routes/Projects.svelte -->
<script>
  import ProjectCard from '../components/ProjectCard.svelte';
  import { projects } from '../../scripts/projects.js'; // Adjust path as necessary
</script>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Creates a responsive grid */
    gap: 20px; /* Space between cards */
    padding: 20px; /* Padding around the entire grid */
    max-width: 1200px; /* Max width to prevent cards from spanning too wide */
    margin: 0 auto; /* Center the grid horizontally */
  }
</style>

<div class="projects-grid">
  {#each projects as project}
    <ProjectCard {...project} />
  {/each}
</div>
