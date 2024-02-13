console.log("Error 404");
document.addEventListener("DOMContentLoaded", () => {
  // Your Page Visibility API code here
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
