<script>
  import ProjectCard from '../components/ProjectCard.svelte';
  import { projects } from '../../scripts/projects.js'; // Adjust the path as necessary

const skills = {
  softwareDevelopment: [
    "Python", "JavaScript", "HTML", "CSS", "APIs", "Postman", "VSCode", "JSON"
  ],
  roboticsAutomation: [
    "Maintenance", "Diagnostics", "Troubleshooting", "Configuration"
  ],
  hardwareNetworking: [
    "Replacement", "Network Configuration", "Firewalls", "IP Networking", "WiFi Networking", "GPU Acceleration"
  ],
  systemAdministration: [
    "Linux Administration", "Docker", "Unix/Linux OS configuration and optimization", "Bash"
  ],
  devOpsCI: [
    "GitHub", "Git", "Kubernetes", "Docker", "AWS", "Ansible", "Terraform", "GitHub Actions"
  ],
  cloudSaaS: [
    "Google Cloud", "Cloud Applications", "SaaS"
  ],
  projectManagement: [
    "Jira", "Confluence", "Account Management"
  ],
  dataManagement: [
    "SQL", "GraphQL", "Prometheus", "Grafana"
  ],
  problemSolving: [
    "Customer Support", "Team Collaboration", "24/7 on-call support", "Communication Skills"
  ],
  softSkills: [
    "Communication",         // Clear and effective communication with customers and team members
    "Active Listening",       // Understanding customer issues and needs
    "Problem-Solving",        // Finding and implementing solutions to technical issues
    "Adaptability",           // Adjusting to new tools, technologies, or processes
    "Time Management",        // Managing and prioritizing multiple tasks efficiently
    "Team Collaboration",     // Working effectively with colleagues and other departments
    "Attention to Detail",    // Ensuring accuracy in troubleshooting and documentation
    "Empathy",                // Understanding and being patient with customer frustrations
    "Critical Thinking",      // Analyzing problems and thinking logically to resolve them
    "Resilience"              // Maintaining composure under pressure and in challenging situations
  ],
};



  const interests = ["DevOps Automation", "Robotics", "Homelabs", "Game servers", "3D Printing", "Game Development"];

  // Contact form logic
  let name = '';
  let email = '';
  let message = '';
  let submitting = false;
  let messageToShow = ''; // Holds either success or error message
  let messageType = 'success'; // Can be 'success' or 'error'

  async function handleSubmit(event) {
    event.preventDefault();
    submitting = true;
    messageToShow = ''; // Reset message

    // Construct form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      // Example POST request (Adjust URL and handling according to your backend setup or service)
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        // Handle success
        messageType = 'success';
        messageToShow = 'Your message has been sent successfully!';
        // Reset form fields
        name = '';
        email = '';
        message = '';
      } else {
        // Handle server errors
        messageType = 'error';
        messageToShow = 'Failed to send the message. Please try again.';
      }
    } catch (error) {
      // Handle network errors
      messageType = 'error';
      messageToShow = 'There was a problem with your submission. Please check your internet connection and try again.';
    } finally {
      submitting = false;
    }
  };
</script>

<style>

/* Global Styles for Consistent Spacing */
section {
  padding: 50px 20px; /* Increased padding for more breathing room */
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: border-box;
}

/* Alternating background colors for each section */
.home-container {
  background-color: #292828; /* Light gray for the home section */
}

.about-section {
  background-color: #222831; /* Dark background for contrast */
  color: #ddd;
}

.projects-grid {
  background-color: #292828; /* Light gray for the projects section */
}

.contact-section {
  background-color: #222831;
  color: #ddd;
  max-width: auto;
  margin: auto;
  text-align: center;
}

.contact-form {
  max-width: 600px;
}

/* Additional spacing between sections */
section + section {
  margin-top: 60px; /* More vertical space between sections */
}

/* Specific styles for different sections */
.home-container, .about-section, .projects-grid, .contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Styling for section titles */
h2, h3 {
  color: #00adb5;
  margin-bottom: 30px; /* Add some space below the titles */
}

/* Horizontal Divider */
section + section::before {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ccc;
  margin: 40px 0; /* Spacing before the divider */
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  section {
    padding: 40px 20px; /* Reduce padding on smaller screens */
  }

  section + section {
    margin-top: 30px; /* Adjust margin between sections */
  }
}

/* Styles for the Home section */
.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
}

.links-container {
  margin-top: 20px;
}

/* Styles for the About section */
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

p, li {
  color: #bbb;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Styles for the Projects section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Styles for the Contact section */
form {
  width: 100%; /* Ensure form takes up full width of the container */
  margin: 0 auto; /* Center the form horizontally in the container */
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, textarea {
  width: 100%; /* Full width of the form */
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #3b4652;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

/* Align images below the company name */
.experience {
  margin-bottom: 40px; /* Space between experiences */
  text-align: center; /* Center align text and images */
}

.logo {
  width: 200px; /* Adjust the size as needed */
  height: auto; /* Maintain aspect ratio */
  margin-top: 10px; /* Space between the company name and logo */
}

.experience-details {
  max-width: 800px; /* Constrain the width for better readability */
  margin: 0 auto; /* Center align the experience content */
}

.experience-details h3 {
  margin-top: 0;
  color: #00adb5; /* Ensure consistency with the rest of the site */
}

.experience-details p {
  color: #bbb;
  margin: 5px 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .experience {
    text-align: left; /* Align text to the left on smaller screens */
  }

  .experience-details {
    max-width: 100%;
  }
}


.skills-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.skills-category {
  background-color: #222831; /* Match the dark theme */
  padding: 15px;
  border-radius: 8px;
}

.skills-category h4 {
  color: #00adb5; /* Category heading color */
  margin-bottom: 10px;
}

.skills-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: #ddd;
}

.skills-list li {
  background: #333;
  color: #ddd;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}


</style>

<section id="home" class="home-container">
  <img src="/images/selfie.jpg" alt="Profile Photo" class="profile-photo">
  <h1>Josh Anderson</h1>
  <p>I'm Josh Anderson, a Support Engineer. Let's build something great together.</p>
  <div class="links-container">
    <button><a href="https://docsend.com/v/wbm9q/resume" target="_blank">Resume</a></button>
    <button><a href="https://www.linkedin.com/in/joshua-frederick-anderson/" target="_blank">LinkedIn</a></button>
  </div>
</section>

<section id="projects" class="projects-grid">
  {#each projects as project}
    <ProjectCard {...project} />
  {/each}
</section>

<section id="about" class="about-section">
  <h2>Check out my Work Experience!</h2>
  <p>Dynamic Technical Support Engineer with over 6 years of experience in Jira, Confluence, fleet health management, and robotics. Proficient in deploying and maintaining complex systems, scripting, and data analysis. Adept at collaborating with engineering, product, and design teams to implement innovative solutions. Committed to enhancing operational efficiency and customer satisfaction through automation and continuous improvement. Experienced in end-to-end project management, machine learning model optimization, and integrating user feedback to drive improvements.</p>
  
  <h2>Companies I've Worked For</h2>
  
  <div class="experience">
    <div class="experience-details">
      <h3>Phantom Auto - Support Engineer</h3>
      <img src="/images/phantom-logo.webp" alt="Phantom Auto Logo" class="logo">
      <p>Remote / South San Francisco, CA | 07/2022 - 03/2024</p>
      <p>Led the deployment of remote-operated forklifts, provided 24/7 on-call support, and managed critical network issues within the Linux kernel space. Developed a Slack bot to automate support processes, enhancing team coordination and workflow efficiency.</p>
    </div>
  </div>
  
  <div class="experience">
    <div class="experience-details">
      <h3>Starship Technologies - Service and Deployment Technician</h3>
      <img src="/images/starship-logo.png" alt="Starship Technologies Logo" class="logo">
      <p>Fairfax, VA / Mountain View, CA | 01/2018 - 06/2022</p>
      <p>Managed over 60 autonomous delivery robots, ensuring system integrity and operational efficiency. Innovated a web-based ticket printer, improving repair efficiency by 20%, and authored Confluence documentation to streamline procedures.</p>
    </div>
  </div>
  
  <h3>Skills</h3>
<div class="skills-section">
  <div class="skills-category">
    <h4>Software Development</h4>
    <ul class="skills-list">
      {#each skills.softwareDevelopment as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="skills-category">
    <h4>Robotics & Automation</h4>
    <ul class="skills-list">
      {#each skills.roboticsAutomation as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="skills-category">
    <h4>Hardware & Networking</h4>
    <ul class="skills-list">
      {#each skills.hardwareNetworking as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="skills-category">
    <h4>System Administration</h4>
    <ul class="skills-list">
      {#each skills.systemAdministration as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="skills-category">
    <h4>DevOps & CI/CD</h4>
    <ul class="skills-list">
      {#each skills.devOpsCI as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="skills-category">
    <h4>Cloud & SaaS</h4>
    <ul class="skills-list">
      {#each skills.cloudSaaS as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="skills-category">
    <h4>Project Management & Documentation</h4>
    <ul class="skills-list">
      {#each skills.projectManagement as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="skills-category">
    <h4>Data Management & Monitoring</h4>
    <ul class="skills-list">
      {#each skills.dataManagement as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="skills-category">
    <h4>Problem-Solving & Support</h4>
    <ul class="skills-list">
      {#each skills.problemSolving as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="skills-category">
    <h4>Soft Skills</h4>
    <ul class="skills-list">
      {#each skills.softSkills as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>
</div>

  
  <h3>Interests</h3>
  <ul class="interests-list">
    {#each interests as interest}
      <li>{interest}</li>
    {/each}
  </ul>
  
  <h2>Education</h2>
  <p>Bloc.io - Software Developer Track, 2016-2019</p>
  <p>Self Study - DevOps, 2023 - Present</p>
  <p>Pursuing DevOps through hands-on projects using Docker, Kubernetes, AWS, Ansible, Terraform, GitHub Actions,
 and monitoring with Prometheus and Grafana in a homelab and Google Cloud environment.</p>
</section>

<section id="contact" class="contact-section">
  <h2>Contact Me</h2>
  <form class="contact-form" on:submit={handleSubmit}>
    <input type="hidden" name="form-name" value="contact">
    <input type="text" name="name" bind:value={name} placeholder="Your Name" required />
    <input type="email" name="email" bind:value={email} placeholder="Your Email" required />
    <textarea name="message" bind:value={message} placeholder="Your Message" rows="6" required></textarea>
    <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send Message'}</button>
  </form>
  {#if messageToShow}
    <p class="message" class:success={messageType === 'success'} class:error={messageType === 'error'}>{messageToShow}</p>
  {/if}
</section>
