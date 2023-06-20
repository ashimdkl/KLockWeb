$(document).ready(function() {
    // listen for the form submission event
    $('#login-form').submit(function(event) {
      event.preventDefault(); // prevent the form from submitting normally
  
      // we gotta get the user / pass
      var username = $('#username').val();
      var password = $('#password').val();
  
  
      if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
      }
  
      // call a function to authenticate the credentials
      authenticateUser(username, password);
    });
  
    // function to authenticate the user credentials
    function authenticateUser(username, password) {
      // perform your authentication logic here

      // thinking for the future we make an AJAX request to the server for authentication
      // idk how much we need to develop this system for the showcase, so just future ideas ^
      if (username === 'KLockAdminPage' && password === 'KLockPassword') {

        alert('Login successful! Redirecting to the dashboard.');
        window.location.href = 'dashboard.html'; 
      } else {
        
        alert('Invalid username or password. Please try again.');
      }
    }
  });
  