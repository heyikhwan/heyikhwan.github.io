(function () {
    // Mobile Navigation
    const navButton = document.querySelector("#nav-menu-button");
    const navUl = document.querySelector(".nav-ul");

    function toggleMobileMenu() {
        navUl.classList.toggle("hide-ul");
    }

    navButton.onclick = toggleMobileMenu;



    // Active Menu Navigation
    const activeclass = document.querySelectorAll('.nav-link');
    for (let i = 0; i < activeclass.length; i++) {
        activeclass[i].addEventListener('click', activateClass);
    }
    function activateClass(e) {
        for (let i = 0; i < activeclass.length; i++) {
            activeclass[i].classList.remove('active-link');
        }
        e.target.classList.add('active-link');
    }

    

    // Page Scroll Check
    function scrollPage() {
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
            document.getElementById("nav-background").classList.add("nav-active");
            document.getElementById("toTop").style.display = "block";
        } else {
            document.getElementById("nav-background").classList.remove("nav-active");
            document.getElementById("toTop").style.display = "none";
        }
    }

    // Navigation Change Background
    window.onscroll = function() {
        scrollPage()
    };


    // Go To Top Function
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    document.getElementById("toTop").addEventListener('click', topFunction);



    // Count Down Time
    let countDownDate = new Date("Dec 30, 2020 21:00:00").getTime();

    let myfunc = setInterval(function() {
        let now = new Date().getTime();
        let timeleft = countDownDate - now;

        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
            days = '00';
            hours = '00';
            minutes = '00';
            seconds = '00';
        }

        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("sec").innerHTML = seconds;
    }, 1000)



    // Count Animate
    const duration = 8000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round( duration / frameDuration );
    const easeOutQuad = t => t * ( 2 - t );

    const countUpNumber = el => {
        let frame = 0;
        const countTo = parseInt( el.innerHTML, 10 );
        
        const counter = setInterval( () => {
            frame++;
            const progress = easeOutQuad( frame / totalFrames );
            
            const currentCount = Math.round( countTo * progress );

            if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
                el.innerHTML = currentCount;
            }

            if ( frame === totalFrames ) {
                clearInterval( counter );
            }
        }, frameDuration );
    };

    const runCountUpNumber = () => {
        const countupEls = document.querySelectorAll( '.counter' );
        countupEls.forEach( countUpNumber );
    };

    window.onload = runCountUpNumber();

}());