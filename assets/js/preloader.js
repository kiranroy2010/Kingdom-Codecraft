document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    function hidePreloader() {
        preloader.style.display = "none";
        content.style.display = "block";
    }

    // Check if the site is already loaded
    if (document.readyState === "complete") {
        hidePreloader();
    } else {
        // Site is not fully loaded, add event listener to hide preloader once loaded
        window.addEventListener("load", hidePreloader);
    }
});
