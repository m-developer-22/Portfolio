function lodergayab(){
    gsap.to("#loader",{
        duration:4,
        onComplete : function(){
            gsap.to("#loader",{
                height:0,
                duration:1,
                onComplete : function(){
                    document.querySelector("#main").style.display="block";
                }
            })
        }
    })
}
lodergayab();

function section1(){
    document.querySelector("#menu").addEventListener("click",function(){
        document.querySelector("#navcontroller").style.display="flex";
        gsap.to("#navcontroller",{
            right:0,
            duration:.5
        })
    })
    document.querySelector("#menucancel").addEventListener("click",function(){
        gsap.to("#navcontroller",{
            right:"-100%",
            duration:.5,
            onComplete : function(){
                document.querySelector("#navcontroller").style.display="none";
            }
        })
    })
}

section1();

function loadernaimation(){
    var clut = "";
    document.querySelector("#loader h1").textContent.split(" ")
    .forEach(function(tex){
        if(tex === " ")
        {
            clut += `<span>&nbsp;</span>`
        }
        else
        {
            clut += `<span>${tex}</span>`
        }
    })
    document.querySelector("#loader h1").innerHTML = clut
    
    
    gsap.from("#loader h1 span",{
        x:200,
        opacity:0,
        duration:2,
        stagger:.8,
        ease:Expo.easeInOut
    })
}

loadernaimation();

function slidesSkewMaker(){
    
    var dim = document.querySelector(".slide")
    .getBoundingClientRect();

    var prev = dim.left;

    document.querySelector("#projects")
    .addEventListener("scroll", function(){
        var dim2 = document.querySelector(".slide")
        .getBoundingClientRect();
        var diff = prev - dim2.left;
        document.querySelectorAll(".slide")
        .forEach(function(elem){
            elem.style.transform = `skewX(${diff*.2}deg)`; 
        });
        prev = dim2.left;
    })
}

slidesSkewMaker();