const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHtml = '<ul class="bulleted">';
      for (var i=0; i<employees.length; i += 1) {
        if (employees[i].inoffice === true) {
          statusHtml += '<li class="in">';
        } else {
          statusHtml += '<li class="out">';
        }
        statusHtml += employees[i].name;
        statusHtml += '</li>';
      }
      statusHtml += '</ul>';
      document.getElementById('employeeList').innerHTML = statusHtml;
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

// Create a new XMLHttpRequest object
const roomRequest = new XMLHttpRequest();

// Define the callback function to be executed when the request state changes
roomRequest.onreadystatechange = function () {
  // Check if the request is completed and the response status is successful
  if (roomRequest.readyState === XMLHttpRequest.DONE && roomRequest.status === 200) {
    // Parse the JSON response into an array of room objects
    const rooms = JSON.parse(roomRequest.responseText);
    
    // Create an HTML string to hold the room status list
    let statusHTML = '<ul class="rooms">';
    
    // Iterate over each room and generate the appropriate list item
    for (let i = 0; i < rooms.length; i += 1) {
      // Determine the CSS class based on the availability of the room
      const roomClass = rooms[i].available ? 'empty' : 'full';
      
      // Append the room name wrapped in a list item with the corresponding CSS class
      statusHTML += `<li class="${roomClass}">${rooms[i].room}</li>`;
    }
    
    // Close the unordered list tag
    statusHTML += '</ul>';
    
    // Set the generated HTML as the content of the element with ID 'roomList'
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};

// Open a GET request to the specified URL
roomRequest.open('GET', 'data/rooms.json');

// Send the request
roomRequest.send();
