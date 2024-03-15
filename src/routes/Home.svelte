<style>
  .home-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    text-align: center;
    padding: 20px;
    box-sizing: border-box; /* Includes padding in the element's total height and width */
  }
  
  .profile-photo {
    width: 150px; /* Adjust size as needed */
    height: 150px;
    border-radius: 50%; /* Circular photo */
    margin-bottom: 20px; /* Adds some space below the photo */
    object-fit: cover; /* Ensures the image covers the set width/height ratio */
  }

  .links-container {
    margin-top: 20px;
  }

  a {
    display: inline-block;
    margin: 0 10px;
    text-decoration: none;
    color: inherit; /* Use the color from body or explicitly set it */
    border: 2px solid; /* Optional: if you want borders around the links */
    padding: 8px 12px;
    border-radius: 5px; /* Rounded corners for the link buttons */
    transition: background-color 0.3s;
  }

  a:hover {
    background-color: #444; /* Dark mode friendly hover */
  }
</style>

<div class="home-container">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src="/images/selfie.jpg" alt="Profile Photo" class="profile-photo">
  <h1>Welcome to My Portfolio</h1>
  <p>I'm Josh Anderson, a Support Engineer. Let's build something great together</p>
  <div class="links-container">
    <a href="/documents/resume.pdf" target="_blank">Resume</a>
    <a href="https://www.linkedin.com/in/joshua-frederick-anderson/" target="_blank">LinkedIn</a>
  </div>
</div>
