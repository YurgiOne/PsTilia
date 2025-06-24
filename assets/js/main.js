(function ($) {

    window.addEventListener("touchstart", () => {}, { passive: true });

    var $window = $(window),
        $body = $('body'),
        $main = $('#main');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });


    document.addEventListener("touchstart", function() {}, true);

    // Nav.
    var $nav = $('#nav');
     $nav.addClass('alt');
    if ($nav.length > 0) {

        // Shrink effect.
        // $main
        //     .scrollex({
        //         mode: 'top',
        //         enter: function () {
        //             if (!$nav.hasClass('alt')) $nav.addClass('alt');
        //         },
        //         leave: function () {
        //             if ($nav.hasClass('alt')) $nav.removeClass('alt');
        //         }
        //     });


        // Links.
        var $nav_a = $nav.find('a');
        $nav_a
            .scrolly({
                speed: 1000,
                offset: function () {
                    return $nav.height();
                }
            })
            .on('click', function () {

                var $this = $(this);

                // External link? Bail.
                if ($this.attr('href').charAt(0) != '#')
                    return;

                // Deactivate all links.
                $nav_a
                    .removeClass('active')
                    .removeClass('active-locked');
            })
            .each(function () {

                var $this = $(this),
                    id = $this.attr('href'),
                    $section = $(id);

                // No section for this link? Bail.
                if ($section.length < 1)
                    return;

                // Scrollex.
                $section.scrollex({
                    mode: 'middle',
                    initialize: function () {

                        // Deactivate section.
                        if (browser.canUse('transition'))
                            $section.addClass('inactive');
                    },
                    enter: function () {

                        // Activate section.
                        $section.removeClass('inactive');

                        // No locked links? Deactivate all links and activate this section's one.
                        if ($nav_a.filter('.active-locked').length == 0) {

                            $nav_a.removeClass('active');
                            $this.addClass('active');
                        }

                        // Otherwise, if this section's link is the one that's locked, unlock it.
                        else if ($this.hasClass('active-locked')) {
                            $this.removeClass('active-locked');
                            $nav_a.removeClass('active');
                            $this.addClass('active');
                        }
                    }
                });

                $('#intro').scrollex({
                    mode: 'middle',
                    enter: function () {
                        $nav_a.removeClass('active');
                        $nav.find('a[href="#intro"]').addClass('active');
                    }
                });

            });


    }

    // Scrolly.
    $('.scrolly').scrolly({
        speed: 1000
    });


})(jQuery);