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
  justify-content: space-between;
  background: var(--card-bg);
  color: var(--text-primary);
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 8px 24px rgba(0, 173, 181, 0.15);
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--border);
}

.project-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

h3 {
  font-size: 20px;
  margin: 0 0 12px 0;
  color: var(--accent);
  font-weight: 700;
}

p {
  font-size: 15px;
  color: var(--text-secondary);
  flex-grow: 1;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0 0 20px 0;
  gap: 8px;
}

li {
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}

li:hover {
  background-color: var(--accent);
  color: var(--bg-primary);
  border-color: var(--accent);
}

.links {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  padding: 20px 25px;
  border-top: 1px solid var(--border);
  background: var(--bg-secondary);
}

a {
  text-decoration: none;
  color: var(--accent);
  font-weight: 600;
  font-size: 14px;
  transition: color 0.2s;
}

a:hover {
  color: var(--accent-hover);
  text-decoration: underline;
}
</style>


<div class="project-card">
  <img src={imageUrl} alt={title} />
  <div class="project-content">
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
      {#each techStack as tech}
        <li>{tech}</li>
      {/each}
    </ul>
  </div>
  <div class="links">
    {#if liveDemoUrl}<a href={liveDemoUrl} target="_blank">Live Demo</a>{/if}
    {#if caseStudyUrl}<a href={caseStudyUrl} target="_blank">Case Study</a>{/if}
    {#if githubUrl}<a href={githubUrl} target="_blank">GitHub</a>{/if}
  </div>
</div>
