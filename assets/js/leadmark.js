// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})

// Send Animation

function sendEmailAnimation() {
    var sendBtn = document.getElementById('sendBtn');
    var sentIcon = document.createElement('i');
    sentIcon.className = 'fa fa-check-circle sent-icon';
    var loadingIcon = document.createElement('i');
    loadingIcon.className = 'fa fa-spinner fa-spin loading-icon';
  
    sendBtn.innerHTML = '';
    sendBtn.appendChild(loadingIcon);
  
    sendBtn.classList.add('sending');
    setTimeout(function() {
      sendBtn.innerHTML = 'Sent ';
      sendBtn.appendChild(sentIcon);
      sendBtn.classList.remove('sending');
    }, 5000);
  }


  // Disable right-click function
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
  
// Disable Image interaction function
window.addEventListener('DOMContentLoaded', function () {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].classList.add('disable-interaction');
        images[i].addEventListener('click', disableEvent);
        images[i].addEventListener('contextmenu', disableEvent);
        images[i].addEventListener('dragstart', disableEvent);
    }
});

function disableEvent(event) {
    event.preventDefault();
}