(function(){

    // Whole-script strict mode syntax
    'use strict';
    var WindowHeight = $( window ).height(),
        WindowWidth = $( window ).width(),
        __this = $(this);

    // Banner Carousel
    let BannerCarousel = $('.nl-banner.type-1');
    if(BannerCarousel.length> 0){
        BannerCarousel.slick({
            dots: true,
            infinite: true,
            speed: 500,
            appendDots: $(".nl-banner-dots.type-1"),
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-up"></i></button>',
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-down"></i></button>',
            slidesToShow: 1,
            fade: true,
            cssEase: 'linear'
        });
    }
    let BannerCarousel2 = $('.nl-banner.type-2');
    BannerCarousel2.on('init',function(){
        $(".slick-active").prev().removeClass('nextdiv').addClass('prevdiv');
        $(".slick-active").next().removeClass('prevdiv').addClass('nextdiv');
    });
    
    if(BannerCarousel2.length> 0){
        BannerCarousel2.slick({
            dots: true,
            infinite: true,
            speed: 500,
            appendArrows: $(".nl-banner-arrows.type-1"),
            prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            slidesToShow: 3,
            centerPadding: '0px',
            dots: false,
            centerMode: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        }).on('afterChange',function(){
            $(".nl-banner.type-2 .slick-active").prev().removeClass('nextdiv').addClass('prevdiv');
            $(".nl-banner.type-2 .slick-active").next().removeClass('prevdiv').addClass('nextdiv');
        }).on('beforeChange',function(){
          $('.slick-slide').removeClass('prevdiv nextdiv');
        });
    }
    // Banner Carousel
    let BannerCarousel3 = $('.nl-banner.type-3');
    if(BannerCarousel3.length> 0){
        BannerCarousel3.slick({
            dots: true,
            infinite: true,
            speed: 500,
            appendArrows: $(".nl-banner-arrows.type-3"),
            prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            slidesToShow: 1,
            fade: true,
            cssEase: 'linear'
        });
    }
    // Featured Post Carousel
    let FeatuedPostCarousel = $('.nl-featured-post-carousel');
    if(FeatuedPostCarousel.length > 0){
        FeatuedPostCarousel.slick({
            dots: false,
            infinite: true,
            speed: 500,
            prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        });
    }

    
          





    // Window Load Function
    $(window).on('scroll',function(){
        var documentHeight = $(document).height();
        var scrollableHeight = documentHeight / 1.70;
        var Content = $('.nl-to-top');
        if(Content.length > 0){
            $('.nl-to-top').hide();
            if($(this).scrollTop() > scrollableHeight){
                $('.nl-to-top').show();
            } else {
                $('.nl-to-top').hide()
            } 
        } 
        if($('.nl-sticky-element').length > 0){
            if($(this).scrollTop() > WindowHeight && $(this).scrollTop() < (documentHeight -WindowHeight)){
                $('.nl-sticky-element').fadeIn();
            } else {
                $('.nl-sticky-element').fadeOut();
            }
        }
    });

    //Set background image for WordPress
    jQuery(".set-bg").each(function() {
        var thesrc = jQuery(this).attr('data-bg');
       if(thesrc){
            jQuery(this).css("background-image", "url(" + thesrc + ")");
            jQuery(this).css("background-position", "center");
            jQuery(this).css("background-size", "cover");
            jQuery(this).css("background-repeat", "no-repeat");
            jQuery(this).removeAttr('data-bg');
       }

    });

    $('.nl-to-top').on('click',function(e){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // Offcanvas Nav
    var offcanvasNav,subMenu,hasDropdown;
    offcanvasNav = $('.nl-offcanvas-nav');
  
    offcanvasNav.find('li').children('ul').addClass('sub-menu');
    $('.nl-offcanvas-nav li').each(function(){
        if($(this).children('ul').length > 0){
            $(this).addClass('has-dropdown');
        }
    });
    $('.nl-offcanvas-nav .has-dropdown').on('click',function(e){
        e = window.event || e;
        e.stopPropagation();
        // $(this).children('.sub-menu').addClass('test');
        $(this).children('.sub-menu').stop().slideToggle();
        $(this).siblings('li').find('.sub-menu').slideUp();
    });
    $('.offcanvas_cancel').on('click',function(e){
        e.preventDefault();
        $('.nl-offcanvas-nav .has-dropdown').find('.sub-menu').slideUp();
    });
    // if(offcanvasNav.find('li').children('ul').length > 0){

    // }
    //hasDropdown = subMenu.parent('li').addClass('has-dropdown');

   

    
    


})()