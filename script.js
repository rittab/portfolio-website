
$(document).ready(function(){
   /* $(window).scroll(function(){
        if(this.scrolly > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    
    });*/
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
    });
    
    //typing animation script
    var typed = new Typed(".typing", {

   
        strings: ["WebDeveloper", "GraphicDesigner", "FashionDesigner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
     });
    var typed= new typed(".typing-2",{
        strings: ["Web developer", "Graphic designer", "fashion designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    });
    