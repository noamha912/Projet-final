$(document).ready(function() {
    let lastScrollTop = 0;

    $(window).scroll(function() {
        let currentScroll = $(this).scrollTop();

        if (currentScroll <= 100) {
            $('.main-header').removeClass('sticky').addClass('not-sticky').css('top', '0');
        } else if (currentScroll > lastScrollTop && currentScroll > 100) {
            $('.main-header').removeClass('sticky').removeClass('not-sticky').css('top', '-50px');
        } else {
            $('.main-header').addClass('sticky').removeClass('not-sticky').css('top', '0');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

        
        let scrollSpeed = 0.1; 
        let heroText = $('.hero-content .écrit_blanc');
        let subtitle = $('.hero-content .subtitle');
        let scrollY = $(this).scrollTop();
        let translateY = scrollY * scrollSpeed;

        heroText.css('transform', `translateY(${translateY}px)`);
        subtitle.css('transform', `translateY(${translateY}px)`);
    });

    
    const heroText = document.querySelector('.écrit_blanc');
    const animateText = () => {
        heroText.style.opacity = '0';
        setTimeout(() => {
            heroText.style.opacity = '1';
        }, 500);
    };

    animateText(); 

    
    let loader = document.querySelector('.loader-wrapper');
    if (loader) {
        
        setTimeout(() => {
            loader.classList.add('fade-out');
            
            document.body.style.overflow = '';
            
            setTimeout(() => {
                loader.remove();
            }, 500); 
        }, 3000); 
    }


    $(window).scroll(function() {
        let scrollPosition = $(this).scrollTop();
        let windowHeight = $(this).height();
        let documentHeight = $(document).height();

        if (scrollPosition + windowHeight >= documentHeight) {
            $('.footer').css({
                'visibility': 'visible',
                'opacity': 1
            });
        } else {
            $('.footer').css({
                'visibility': 'hidden',
                'opacity': 0
            });
        }
    });


    $(window).scroll(function() {
        let scrollPosition = $(this).scrollTop();
        let windowHeight = $(this).height();
        let documentHeight = $(document).height();
        let footerOffset = $('.footer').offset().top;
        
        if (scrollPosition + windowHeight > footerOffset) {
            let distanceFromBottom = documentHeight - (scrollPosition + windowHeight);
            let translateValue = Math.max(distanceFromBottom, 0);
            $('.footer').css({
                'transform': `translateY(${translateValue}px)`,
                'opacity': translateValue > 0 ? 0 : 1
            });
        } else {
            $('.footer').css({
                'transform': 'translateY(0)',
                'opacity': 1
            });
        }
    });


    let scrollElements = document.querySelectorAll('.animate-on-scroll, .image-on-scroll, .section-hero');
    
    function checkScroll() {
        scrollElements.forEach(el => {
            let elementTop = el.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if(elementTop < windowHeight * 0.75) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});