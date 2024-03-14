<!-- src/components/ProjectCard.svelte -->
<script>
  export let title;
  export let description;
  export let techStack = [];
  export let imageUrl;
  export let liveDemoUrl;
  export let caseStudyUrl;
  export let githubUrl;
</script>

<style>
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure content is spaced out */
  background: #222831; /* Darker shade for depth */
  color: #eeeeee; /* Soft light text color */
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-bottom: 20px; /* Spacing between cards when stacked */
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 18px; /* More defined size */
  margin: 10px 0 5px; /* Adjust spacing */
}

p {
  font-size: 15px; /* Optimal reading size */
  color: #bdbdbd; /* Slightly dimmed for less contrast */
  flex-grow: 1; /* Ensure description takes available space */
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
}

li {
  background-color: #00adb5; /* A standout color for skills */
  color: #222831; /* Dark text for contrast */
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
  font-size: 13px; /* Slightly smaller to fit multiple tags */
}

.links {
  display: flex;
  justify-content: space-evenly; /* Even spacing for links */
  padding: 10px 0;
  border-top: 1px solid #393e46; /* Subtle separation */
}

a {
  text-decoration: none;
  color: #00adb5; /* Match skills color for consistency */
  font-weight: 500;
  padding: 5px 10px;
  transition: color 0.2s;
}

a:hover {
  color: #eeeeee; /* Light color on hover for interaction */
}
</style>


<div class="project-card">
  <img src={imageUrl} alt={title} />
  <h3>{title}</h3>
  <p>{description}</p>
  <ul>
    {#each techStack as tech}
      <li>{tech}</li>
    {/each}
  </ul>
  <div class="links">
    {#if liveDemoUrl}<a href={liveDemoUrl} target="_blank">Live Demo</a>{/if}
    {#if caseStudyUrl}<a href={caseStudyUrl} target="_blank">Case Study</a>{/if}
    {#if githubUrl}<a href={githubUrl} target="_blank">GitHub</a>{/if}
  </div>
</div>
