function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  function closeNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className.includes("responsive")) {
      x.className = "navbar";
    }
  }
  