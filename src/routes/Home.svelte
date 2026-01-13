<script>
  import ProjectCard from '../components/ProjectCard.svelte';
  import { projects } from '../../scripts/projects.js';
  import { skills, interests } from '../../scripts/data.js';
  import { onMount } from 'svelte';

  // Theme toggle
  let isDarkMode = true;

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDarkMode = savedTheme === 'dark';
    } else {
      isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    applyTheme();
  });

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    applyTheme();
  }

  function applyTheme() {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }

  // Contact form logic
  let name = '';
  let email = '';
  let message = '';
  let submitting = false;
  let messageToShow = '';
  let messageType = 'success';

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
/* Modern, minimalistic design with dark/light theme support */

/* Theme Toggle Button */
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

:global(body.dark-mode) .theme-toggle {
  background-color: #2d3748;
  color: #f7fafc;
}

:global(body.light-mode) .theme-toggle {
  background-color: #ffffff;
  color: #2d3748;
  border: 1px solid #e2e8f0;
}

.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 173, 181, 0.3);
}

/* Global Section Styles */
section {
  padding: 80px 20px;
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: border-box;
}

/* Dark Mode Colors */
:global(body.dark-mode) {
  --bg-primary: #1a1d23;
  --bg-secondary: #1f2329;
  --bg-tertiary: #282c34;
  --text-primary: #ffffff;
  --text-secondary: #d1d5db;
  --text-tertiary: #9ca3af;
  --accent: #00adb5;
  --accent-hover: #00969e;
  --border: #3a3f47;
  --card-bg: #1f2329;
  --card-hover: #282c34;
}

/* Light Mode Colors */
:global(body.light-mode) {
  --bg-primary: #ffffff;
  --bg-secondary: #f7fafc;
  --bg-tertiary: #edf2f7;
  --text-primary: #1a202c;
  --text-secondary: #2d3748;
  --text-tertiary: #4a5568;
  --accent: #0087a0;
  --accent-hover: #006b7d;
  --border: #e2e8f0;
  --card-bg: #ffffff;
  --card-hover: #f7fafc;
}

/* Hero Section */
.home-container {
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-tertiary) 100%);
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
}

.profile-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 30px;
  object-fit: cover;
  border: 4px solid var(--accent);
  box-shadow: 0 8px 24px rgba(0, 173, 181, 0.2);
}

.home-container h1 {
  font-size: 48px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 10px 0;
  letter-spacing: -1px;
}

.title {
  font-size: 24px;
  color: var(--accent);
  font-weight: 600;
  margin: 10px 0 5px 0;
}

.location {
  font-size: 16px;
  color: var(--text-tertiary);
  margin: 5px 0 20px 0;
}

.tagline {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 800px;
  line-height: 1.6;
  margin: 20px auto 40px auto;
}

.links-container {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.link-button {
  padding: 12px 28px;
  background-color: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.link-button:hover {
  background-color: var(--accent);
  color: var(--bg-primary);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 173, 181, 0.3);
}

/* Key Metrics Section */
.metrics-section {
  background-color: var(--bg-secondary);
  padding: 60px 20px;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.metric-card {
  text-align: center;
  padding: 30px 20px;
  background: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 8px 24px rgba(0, 173, 181, 0.15);
  background: var(--card-hover);
}

.metric-number {
  font-size: 42px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 10px;
  display: block;
}

.metric-label {
  font-size: 14px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Work Experience Section */
.about-section {
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 80px 20px;
}

.about-section h2,
.projects-section h2,
.skills-section-container h2,
.contact-section h2 {
  font-size: 36px;
  color: var(--text-primary);
  margin-bottom: 50px;
  text-align: center;
  font-weight: 700;
}

.experience {
  margin-bottom: 60px;
  background: var(--card-bg);
  padding: 40px;
  border-radius: 12px;
  border-left: 4px solid var(--accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

.experience h3 {
  font-size: 24px;
  color: var(--accent);
  margin: 0 0 5px 0;
  font-weight: 700;
}

.company {
  font-size: 16px;
  color: var(--text-tertiary);
  margin: 5px 0;
  font-weight: 500;
}

.experience-date {
  font-size: 14px;
  color: var(--text-tertiary);
  font-weight: 600;
}

.experience-details p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 15px 0;
}

.section-title {
  margin-top: 20px;
  margin-bottom: 10px;
}

.experience-details ul {
  list-style: none;
  padding-left: 0;
  margin: 20px 0;
}

.experience-details li {
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 10px 0;
  padding-left: 25px;
  position: relative;
}

.experience-details li:before {
  content: "▹";
  color: var(--accent);
  position: absolute;
  left: 0;
  font-size: 18px;
}

/* Projects Section */
.projects-section {
  background-color: var(--bg-secondary);
  padding: 80px 20px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Skills Section */
.skills-section-container {
  background-color: var(--bg-tertiary);
  padding: 80px 20px;
}

.skills-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.skills-category {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.skills-category:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 173, 181, 0.1);
}

.skills-category h4 {
  color: var(--accent);
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 700;
}

.skills-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skills-list li {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 14px;
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}

.skills-list li:hover {
  background: var(--accent);
  color: var(--bg-primary);
  border-color: var(--accent);
  transform: translateY(-2px);
}

/* Contact Section */
.contact-section {
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 80px 20px;
  text-align: center;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

input, textarea {
  width: 100%;
  margin-bottom: 20px;
  padding: 14px;
  border: 2px solid var(--border);
  border-radius: 8px;
  background-color: var(--card-bg);
  color: var(--text-primary);
  font-size: 16px;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--accent);
}

button[type="submit"] {
  cursor: pointer;
  padding: 14px 32px;
  background-color: var(--accent);
  color: var(--bg-primary);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
}

button[type="submit"]:hover:not(:disabled) {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 173, 181, 0.3);
}

button[type="submit"]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.message {
  margin-top: 20px;
  padding: 12px;
  border-radius: 6px;
  font-weight: 600;
}

.message.success {
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid #10b981;
}

.message.error {
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid #ef4444;
}

/* Responsive Design */
@media (max-width: 768px) {
  .home-container h1 {
    font-size: 36px;
  }

  .title {
    font-size: 20px;
  }

  .tagline {
    font-size: 16px;
  }

  .metrics-grid {
    grid-template-columns: 1fr 1fr;
  }

  .metric-number {
    font-size: 32px;
  }

  section {
    padding: 60px 20px;
  }

  .about-section h2,
  .projects-section h2,
  .skills-section-container h2,
  .contact-section h2 {
    font-size: 28px;
  }

  .experience {
    padding: 25px;
  }

  .experience-header {
    flex-direction: column;
  }

  .theme-toggle {
    top: 10px;
    right: 10px;
    width: 45px;
    height: 45px;
  }
}
</style>

<!-- Theme Toggle Button -->
<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
  {#if isDarkMode}
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  {:else}
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  {/if}
</button>

<!-- Hero Section -->
<section id="home" class="home-container">
  <img src="/images/selfie.jpg" alt="Profile Photo" class="profile-photo">
  <h1>Joshua Anderson</h1>
  <p class="title">Systems Integration Engineer</p>
  <p class="location">Santa Clara, CA</p>
  <p class="tagline">Led team of 12 engineers at Meta Reality Labs | 7+ years in robotics & R&D systems | 3,400+ captures delivered with 83% QA pass rate</p>
  <div class="links-container">
    <a href="https://docsend.com/view/e7vqfjre5bn652vu" target="_blank" class="link-button">Resume</a>
    <a href="https://www.linkedin.com/in/joshua-frederick-anderson/" target="_blank" class="link-button">LinkedIn</a>
    <a href="https://github.com/joshhmann" target="_blank" class="link-button">GitHub</a>
    <a href="mailto:joshua.frederick.anderson@gmail.com" class="link-button">Email</a>
  </div>
</section>

<!-- Key Metrics Section -->
<section class="metrics-section">
  <div class="metrics-grid">
    <div class="metric-card">
      <span class="metric-number">12</span>
      <span class="metric-label">Engineers Led</span>
    </div>
    <div class="metric-card">
      <span class="metric-number">3,400+</span>
      <span class="metric-label">Captures Delivered</span>
    </div>
    <div class="metric-card">
      <span class="metric-number">83%</span>
      <span class="metric-label">QA Pass Rate</span>
    </div>
    <div class="metric-card">
      <span class="metric-number">7+</span>
      <span class="metric-label">Years Experience</span>
    </div>
  </div>
</section>

<!-- Work Experience Section -->
<section id="about" class="about-section">
  <h2>Work Experience</h2>

  <div class="experience">
    <div class="experience-header">
      <div>
        <h3>System Integrator 2</h3>
        <p class="company">Meta Reality Labs (via Qualitest) | Fremont, CA</p>
      </div>
      <span class="experience-date">August 2025 – December 2025</span>
    </div>
    <div class="experience-details">
      <p class="section-title"><strong>Leadership & Project Management:</strong></p>
      <ul>
        <li>Led team of 12 System Integrators through complete project lifecycles for multiple Codec Avatar initiatives within XRCIA org</li>
        <li>Delivered 2,219 captures with 1,836 passing QA (83% pass rate); exceeded another project's goal by 50% (1,200+ vs 800 target)</li>
        <li>Maintained near-continuous operations (6 AM – 11 PM daily) across 4 capture rooms with &lt;10 minute issue resolution time</li>
        <li>Created SOPs for capture operations and led calibration workshop for team of 12, reducing calibration failures by 75%</li>
      </ul>
      <p class="section-title"><strong>Technical Operations & Infrastructure:</strong></p>
      <ul>
        <li>Designed parent-task/child-bug tracking system (GSD) that improved cross-team issue visibility and resolution speed</li>
        <li>Built custom dashboard for calibration failure tracking using Sankey diagrams for proactive issue identification</li>
        <li>Collaborated with Operations, Research Assistants, Calibration team, System Engineers, Research team, and QA throughout capture lifecycle</li>
      </ul>
    </div>
  </div>

  <div class="experience">
    <div class="experience-header">
      <div>
        <h3>System Integrator 1</h3>
        <p class="company">Meta Reality Labs (via Qualitest) | Fremont, CA</p>
      </div>
      <span class="experience-date">October 2024 – August 2025</span>
    </div>
    <div class="experience-details">
      <p class="section-title"><strong>Hardware & System Integration:</strong></p>
      <ul>
        <li>Supported Mugsy 171-camera capture dome: hardware reconfigurations, camera swaps, lighting adjustments, cable repairs</li>
        <li>Supported 6 data collection initiatives across XRCIA org, contributing to infrastructure deployment and troubleshooting</li>
        <li>Troubleshot complex hybrid hardware/software systems: high-speed cameras, optical tracking, VR headsets, ABB robotic arms, GPU servers</li>
      </ul>
      <p class="section-title"><strong>Tool Development & Automation:</strong></p>
      <ul>
        <li>Built ADB Control Panel (Python/PyQt5) for multi-device VR headset diagnostics with one-click restart, serial number lookup, device status monitoring</li>
        <li>Wrote automation scripts to query capture data servers for system diagnostics and issue identification</li>
        <li>Performed Linux system administration and scripting (Bash, Python) to automate diagnostics and optimize system performance</li>
      </ul>
    </div>
  </div>

  <div class="experience">
    <div class="experience-header">
      <div>
        <h3>Support Engineer</h3>
        <p class="company">Phantom Auto | South San Francisco, CA</p>
      </div>
      <span class="experience-date">July 2022 – March 2024</span>
    </div>
    <div class="experience-details">
      <ul>
        <li>Deployed and maintained x86 Linux servers for remote-operated forklift systems across customer sites</li>
        <li>Built CS-Butler Slack bot with team of 4, integrating Slack, Jira, and Opsgenie APIs—reduced troubleshooting time by 70%</li>
        <li>Implemented CI/CD pipeline with Git/GitHub/GitLab for automated testing and deployment</li>
        <li>Provided 24/7 on-call support, resolving critical network issues and tuning Linux kernel parameters for real-time performance</li>
      </ul>
    </div>
  </div>

  <div class="experience">
    <div class="experience-header">
      <div>
        <h3>Service and Deployment Technician</h3>
        <p class="company">Starship Technologies | Fairfax, VA → Mountain View, CA</p>
      </div>
      <span class="experience-date">January 2018 – June 2022</span>
    </div>
    <div class="experience-details">
      <ul>
        <li>Managed fleet of 60+ autonomous delivery robots, maintaining uptime and reliability for Linux-based navigation systems</li>
        <li>Led software configuration and network troubleshooting, improving fleet-wide system reliability</li>
        <li>Built web-based ticket printer to automate RMA processing, reducing manual overhead</li>
      </ul>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="projects-section">
  <h2>Key Projects</h2>
  <div class="projects-grid">
    {#each projects as project}
      <ProjectCard {...project} />
    {/each}
  </div>
</section>
  
<!-- Skills Section -->
<section class="skills-section-container">
  <h2>Technical Skills</h2>
  <div class="skills-section">
    {#each Object.entries(skills) as [category, skillList]}
      <div class="skills-category">
        <h4>{category}</h4>
        <ul class="skills-list">
          {#each skillList as skill}
            <li>{skill}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
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
