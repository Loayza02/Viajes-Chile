
$(document).ready(function(){
    $("#cr").carousel();

    setInterval(function(){
        $("#cr").carousel('next');
    }, 3000);
});

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});



