<script>
  let name = '';
  let email = '';
  let message = '';

  const handleSubmit = async () => {
    // Form submission logic goes here
    console.log({ name, email, message });
    // Prevent default form submission behavior
    event.preventDefault();
  };
</script>

<style>
  /* Styling for the Contact page */
  .contact-container {
    padding: 20px;
    max-width: 600px;
    margin: auto;
    text-align: center;
  }
  input, textarea {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }
</style>

<div class="contact-container">
  <h1>Contact Me(not working)</h1>
  <input type="text" bind:value={name} placeholder="Your Name" />
  <input type="email" bind:value={email} placeholder="Your Email" />
  <textarea bind:value={message} placeholder="Your Message" rows="6"></textarea>
  <button on:click={handleSubmit}>Send Message</button>
</div>
