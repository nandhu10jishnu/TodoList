function login() {
    var username = $("#username").val();
    var password = $("#password").val();
  
    // Check if username and password are correct
    if (username === "admin" && password === "12345") {
      // Redirect to the main page
      redirectToMainPage();
    } else {
      // Display error message
      $("#error").text("Invalid username or password");
      return true;
    }
  }
  
  function redirectToMainPage() {
    // Use a callback function to redirect to the main page
    window.location.href = "main.html";
  }
  function getdata()
  {
   
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    // Use the data to display the to-do list and check if 5 tasks are completed
    console.log(data);
    let completedTasks = data.filter(task => task.completed);
    if (completedTasks.length >= 5) {
      // If 5 or more tasks are completed, show a congratulatory message
      return Promise.resolve("Congrats. " + completedTasks.length + " Tasks have been Successfully Completed");
    } else {
      return Promise.reject("Not enough completed tasks");
    }
  })
  .then(message => {
    // Show the congratulatory message
    alert(message);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });

  }
  function logout() {
    // Clear session data
    sessionStorage.clear();
  
    // Redirect to login page
    window.location.href = "login.html";
  }