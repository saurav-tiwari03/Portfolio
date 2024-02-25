console.log("Error 404");
var text = new Typed(".role", {
  strings: [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});
document.addEventListener("DOMContentLoaded", () => {
  if (typeof document.hidden !== "undefined") {
    var hidden = "hidden";
    var visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    var hidden = "msHidden";
    var visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    var hidden = "webkitHidden";
    var visibilityChange = "webkitvisibilitychange";
  }

  function handleVisibilityChange() {
    if (document[hidden]) {
      document.title = "Close Tab or comeback";
    } else {
      document.title = "My Portfolio";
    }
  }

  document.addEventListener(visibilityChange, handleVisibilityChange, false);
});
//
document.addEventListener("DOMContentLoaded", function () {
  var viewDiv = document.getElementById("view");
  var closeButton = document.getElementById("view-close");

  closeButton.addEventListener("click", function () {
    viewDiv.style.display = "none";
  });
  setTimeout(function () {
    viewDiv.style.display = "none";
  }, 5000);
});
//Scroll Reveal
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 400,
});
ScrollReveal().reveal(".logo-container", { delay: 500, origin: "top" });
ScrollReveal().reveal(".hero-section", { delay: 600, origin: "bottom" });

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", revealItem);

  function revealItem() {
    var reveals = document.querySelectorAll('.reveal');
    var revealPoint = window.innerHeight * 0.75;

    for (var i = 0; i < reveals.length; i++) {
      var revealTop = reveals[i].getBoundingClientRect().top;

      if (revealTop < revealPoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
});

