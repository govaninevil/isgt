$(document).ready(function () {
    $('#parentVerticalTab').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });

    $(".supporting .support-background > img:first").attr("active", true);
    $(".supporting .support-content .sup-col").hover(function () {
        let $this = $(this);
        let $sectionBackground = $this.closest(".supporting").find(".support-background");
        $sectionBackground.find("img").removeAttr("active");
        $sectionBackground.find("img[data-id='" + $this.attr("data-id") + "']").attr("active", true);
    });

    $('.multi-item-carousel').carousel({
        interval: false
    });

    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1023: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    })



    var navlist = document.getElementById("nav-lists");
    function Show() {
        navlist.classList.add("_Menu-show");
    }
    function Hide() {
        navlist.classList.remove("_Menu-show");
    }


});