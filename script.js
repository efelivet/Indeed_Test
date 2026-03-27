  // --- Mobile Menu Toggle ---
    function toggleMenu() {
      var menu = document.getElementById("nav-links");
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
      } else {
        menu.classList.add("open");
      }
    }

    // --- Close menu when a nav link is clicked ---
    var links = document.querySelectorAll("#nav-links a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
        document.getElementById("nav-links").classList.remove("open");
      });
    }