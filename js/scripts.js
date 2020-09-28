sign(function() {
  sign('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = sign(this.hash);
      target = target.length ? target : sign('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        sign('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


