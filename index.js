
    // onclick active nav menu
    const menus = document.querySelectorAll('.nav_menu');

    // Add click event listeners to each tab
    menus.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        menus.forEach((t) => t.classList.remove('active_nav_menu'));
        tab.classList.add('active_nav_menu');

      });
    });
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

 function openModal() {
    var modal = document.getElementById("add_diagnoses");
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("add_diagnoses");
    modal.style.display = "none";
  }

  // Attach openModal function to the click event of the "Open Modal" button
  document.getElementById("openDiagnosis").addEventListener("click", openModal);

  // Attach closeModal function to the click event of the close icon
  document.getElementById("closeModal").addEventListener("click", closeModal);

  
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
 function toggleChild(childClassName, clickedElement) {
    var childElement = document.querySelector('.' + childClassName);
    if (childElement) {
      // Hide all children
      var allChildren = document.querySelectorAll('.child-content');
      allChildren.forEach(function(element) {
        element.style.display = 'none';
      });

      // Show the clicked child
      childElement.style.display = 'block';
    }
  }

