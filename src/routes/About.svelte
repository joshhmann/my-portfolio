<script>
  // Example skills and interests array
  const skills = [
    "Python", "JavaScript", "HTML", "CSS", 
    "Docker", "Linux", "Git", "CI/CD with GitHub Actions",
    "SQL", "Prometheus", "Grafana"
  ];

  const interests = ["DevOps automation", "Robotics", "Homelab for VMs", "Game servers"];
</script>

<style>
  .about-section {
    color: #ddd;
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }

  .skills-list, .interests-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  .skills-list li, .interests-list li {
    margin-right: 10px;
    background: #333;
    color: #ddd;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  h2, h3 {
    color: #00adb5;
  }

  p, li {
    color: #bbb;
  }
</style>

<div class="about-section">
  <h2>Professional Summary</h2>
  <p>I am a dedicated and results-oriented Support Engineer with over 4 years of experience in deploying, maintaining, and improving solutions in robotics and remote operations</p>
  
  <h2>Work Experience</h2>
  <h3>Phantom Auto - Support Engineer</h3>
  <p>Remote / South San Francisco, CA, 07/2022 - 03/2024</p>
  
  <h3>Starship Technologies - Service and Deployment Technician</h3>
  <p>Fairfax, VA / Mountain View, CA, 01/2018 - 06/2022</p>

  <h2>Projects</h2>
  <p>For a detailed look at my work, including personal and professional projects, please visit the <a href="/projects">Projects</a> page.</p>
  
  <h3>Skills</h3>
  <ul class="skills-list">
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
  
  
  <h3>Interests</h3>
  <ul class="interests-list">
    {#each interests as interest}
      <li>{interest}</li>
    {/each}
  </ul>
  
  <a href="https://roadmap.sh"><img src="https://roadmap.sh/card/tall/66941471298168c109f2f398?variant=dark" alt="roadmap.sh"/></a>

  <h2>Education</h2>
  <p>Bloc.io - Software Developer Track, 2016-2019</p>
  <p>Self Study - DevOps, 2023 - Present</p>

  
</div>
