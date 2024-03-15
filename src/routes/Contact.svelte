<script>
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
    // Append any additional fields as needed

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
  /* Centering the form container */
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
    padding: 20px;
    box-sizing: border-box; /* Include padding in the width and height calculations */
    text-align: center;
  }

  form {
    max-width: 600px; /* Or your desired max width */
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
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }


</style>

<form class="contact-container" action="/success" method="POST" netlify netlify-honeypot="bot-field" data-netlify-recaptcha="true">
  <h1>Contact Me</h1>
  <!-- Honeypot field for spam filtering (should be hidden and left blank by users) -->
  <input type="hidden" name="form-name" value="contact">
  <input type="text" name="name" bind:value={name} placeholder="Your Name" required />
  <input type="email" name="email" bind:value={email} placeholder="Your Email" required />
  <textarea name="message" bind:value={message} placeholder="Your Message" rows="6" required></textarea>
  <!-- Netlify's reCAPTCHA -->
  <div data-netlify-recaptcha="true"></div>
  <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send Message'}</button>
</form>
