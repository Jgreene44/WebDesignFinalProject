const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const link1 = document.getElementById("link1"); 
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");
    const link4 = document.getElementById("link4");
    //This variable will be used for the navBar resizing elements and resetting them.
    var widthCheck;

    
    window.addEventListener("resize", function() {
        if (window.matchMedia("(min-width: 769px)").matches) {
            //console.log("Screen width is at least 769px");
            widthCheck = false;
        } else {
            //console.log("Screen less than 769");
            widthCheck = true;
        }
    });
    
    link1.addEventListener('click',()=>{
        if(widthCheck){
            nav.classList.toggle('nav-active');
            navLinks.forEach((link,index) => {
                if(link.style.animation){
                    link.style.animation =''
                }
                else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            burger.classList.toggle('toggle');
        }
    });
    link2.addEventListener('click',()=>{
        if(widthCheck){
            nav.classList.toggle('nav-active');
            navLinks.forEach((link,index) => {
                if(link.style.animation){
                    link.style.animation =''
                }
                else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            burger.classList.toggle('toggle');
        }
    });
    link3.addEventListener('click',()=>{
        if(widthCheck){
            nav.classList.toggle('nav-active');
            navLinks.forEach((link,index) => {
                if(link.style.animation){
                    link.style.animation =''
                }
                else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            burger.classList.toggle('toggle');
        }
    });
    link4.addEventListener('click',()=>{
        if(widthCheck){
            nav.classList.toggle('nav-active');
            navLinks.forEach((link,index) => {
                if(link.style.animation){
                    link.style.animation =''
                }
                else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            burger.classList.toggle('toggle');
        }
    });










    burger.addEventListener('click',()=>{

		//Toggle Nav
		nav.classList.toggle('nav-active');
        
        
		//Animate Links
		navLinks.forEach((link,index) => {
			if(link.style.animation){
				link.style.animation =''
			}
			else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		
		//Burger Animation
		burger.classList.toggle('toggle');
		
    });

}
    navSlide();


