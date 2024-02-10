
    // onclick active nav menu
    const menus = document.querySelectorAll('.nav_menu');

    // Add click event listeners to each tab
    menus.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        menus.forEach((t) => t.classList.remove('active_nav_menu'));
        tab.classList.add('active_nav_menu');

      });
    });



  function showSelectedContainer(containerToKeep, ...containersToHide) {
    // Get the container to keep
    var containerToKeepElement = document.getElementById(containerToKeep);

    // Hide the container to keep
    if (containerToKeepElement) {
      containerToKeepElement.classList.add ('block');
      containerToKeepElement.classList.remove('hidden') // or 'inline', 'inline-block', etc., based on your needs
    }

    containersToHide.forEach(function(containerId) {
      var containerElement = document.getElementById(containerId);
      if (containerElement) {
         containerElement.classList.remove('block');
        containerElement.classList.add('hidden');
      }
    });
  }


// active button from container
const tabs = document.querySelectorAll('.active_onClick');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    const parent = tab.parentNode;

    // Remove the 'active' class from siblings with the same immediate parent
    Array.from(parent.children).forEach((t) => {
      if (t !== tab) {
        t.classList.remove('active');
      }
    });

    tab.classList.add('active');
  });
});
    // changing background on clik sidebar icon
    const sidebarMenus = document.querySelectorAll('.sidebar_icon');
sidebarMenus.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    sidebarMenus.forEach((t) => t.classList.remove('bg_brand'));

    // Add the 'bg_brand' class to the clicked tab
    tab.classList.add('bg_brand');

  });
});

// colupse  dropdown
 var firstColumnItems = document.querySelectorAll('.first_column_item');
firstColumnItems.forEach(function(item) {
  item.addEventListener('click', function() {
    var submenus = item.parentNode.querySelectorAll('.submenu');
    submenus.forEach(function(submenu) {
      submenu.classList.toggle('hidden');
    });
  })
})

 function openModal(id) {
    var modal = document.getElementById(id);
    console.log(modal)
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }

 
  
// prophy modal
   function openProcedures() {
    var modal = document.getElementById("add_procedures");
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeProcedures() {
    var modal = document.getElementById("add_procedures");
    modal.style.display = "none";
  }

  // Attach openProcedures function to the click event of the "Open Modal" button
  document.getElementById("openProcedures").addEventListener("click", openProcedures);

  // Attach closeProcedures function to the click event of the close icon
  document.getElementById("closeProcedures").addEventListener("click", closeProcedures);




 function createNotes(event) {
      event.preventDefault(); // Prevent form submission

      // Get the input value (assuming you have an input element with id 'notesInput')
      var notesInput = document.querySelector('#child_of_all_notes input[type="textarea"]');
      var notesText = notesInput.value;

      // Get the client's profile data (replace this with actual data)
      var clientName = "John D";
      var date = "13 Apr, 2023";

      // Create new elements for the notes
      var notesContainer = document.getElementById('notesContainer');
      var newNotes = document.createElement('div');
      newNotes.className = 'flex_row_start space-x-2 notes notes_container';

      // Populate the new elements with profile data and notes text
      newNotes.innerHTML = `
        <div class="flex_row_start space-x-2 my-2 max-w-[300px]" >
   <div class="account_circle">JD</div>
   <div>
    <div class="flex_row_start space-x-2 notes">
 <p class="bg-brand text-xl">
      ${clientName}
    </p>
    <p class="gray_text">
     ${date}
    </p>
    </div>
   
    <p>
   ${notesText}
    </p>
   </div>
</div>
      `;

      // Append the new notes to the notes container
      notesContainer.appendChild(newNotes);

      // Clear the input field
      notesInput.value = "";
    }
 function createComment(event) {
      event.preventDefault(); // Prevent form submission

      // Get the input value (assuming you have an input element with id 'commentsInput')
      var commentsInput = document.querySelector('#child_of_all_comments input[type="textarea"]');
      var commentText = commentsInput.value;

      // Get the current date (you may want to use a more sophisticated date format)
      var currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

      // Get the username (replace this with the actual username)
      var username = "John D";

      // Create new elements for the comment
      var commentsContainer = document.getElementById('commentsContainer');
      var newComment = document.createElement('div');
      newComment.className = 'flex_row_start space-x-2 my-2 max-w-[300px]';

      // Populate the new elements with username, date, and comment text
      newComment.innerHTML = `
        <div class="account_circle">${username}</div>
        <div>
          <div class="flex_row_start space-x-2 comments">
            <p class="text_brand text-xl">${username}</p>
            <p class="gray_text">${currentDate}</p>
          </div>
          <p>${commentText}</p>
        </div>
      `;

      // Append the new comment to the comments container
      commentsContainer.appendChild(newComment);

      // Clear the input field
      commentsInput.value = "";
    }

