// Javascript related to Homework 3.
// author: clin date: 2018-02-11

//Function createNavMenu creates the navigation menu to the current homework assignment so all html pages will have to same links.

function createNavMenu(){
    document.write('<nav class="menu">')
    document.write('<ul>');
    document.write('<li><a class="mainpg" href="../index.html">CLIN Page</a></li>');
    document.write('<li><a href="hw7.html">HW7 Page</a></li>');
    document.write('<li><a href="hw7_pt1.html">' + 
                   'Part 1 - Modify Page Layout</a></li>');
    document.write(' <li><a href="hw7_pt2.html">' + 
                   'Part 2 - Top NAV Bar</a></li>');
    document.write('<li><a href="hw7_pt3.html">' +
                   'Part 3 - Photo Style Slide Show</a></li>');
    document.write('</ul>');
    document.write('</nav>')
}

// Part 1.
// STEP 1. takes click functions for specific ID'd elements
//         on page
// STEP 2. remove class related to ID'd element 
// STEP 3. addes class selected back into class.
$(document).ready(function(){

    //function related to colors.
        $("#white").click(function(){
            $("body").removeClass("red").removeClass("green");
            $("body").addClass("white");
        })
    
        $("#red").click(function(){
            $("body").removeClass("white").removeClass("green");
            $("body").addClass("red");
        })
        
        $("#green").click(function(){
            $("body").removeClass("white").removeClass("red");
            $("body").addClass("green");
        })
    //function related to font family
        $("#arial").click(function(){
            $("body").removeClass("time").removeClass("courier");
            $("body").addClass("arial");
        })
    
        $("#time").click(function(){
            $("body").removeClass("arial").removeClass("courier");
            $("body").addClass("time");
        })
    
        $("#courier").click(function(){
            $("body").removeClass("arial").removeClass("time");
            $("body").addClass("courier");
        })
    //function related to font styles
        $("#fStyleList").change(function(){
            var selectedText = $(this).find("option:selected").val();
            $("body").removeClass("normal").removeClass("italic").removeClass("oblique");
            $("body").addClass(selectedText);
        })
    // function related to font weight
        $("#fWeight").change(function(){
            var selectedText = $(this).find("option:selected").val();
            $("body").removeClass("normalW").removeClass("lighter").removeClass("bold");
            $("body").addClass(selectedText);
        })
    // function related to font size
        $("#f10_pt").click(function(){
            $("body").removeClass("f14pt").removeClass("f18pt");
            $("body").addClass("f10pt");
        })
    
        $("#f14_pt").click(function(){
            $("body").removeClass("f10pt").removeClass("f18pt");
            $("body").addClass("f14pt");
        })
        
        $("#f18_pt").click(function(){
            $("body").removeClass("f10pt").removeClass("f14pt");
            $("body").addClass("f18pt");
        })
    });

// Part 2.  
// STEP 1. Add event handler to window when loaded then executes function in Step 2.   
// STEP 2. checks the element and enables visibility when mousing over an item.
function createcssmenu2(){
    var curMenu = document.getElementById("cssmenu1").getElementsByTagName("ul"); //Enter CSS UL menus, seperated by commas
    for(var t=0; t<curMenu.length; t++){
        curMenu[t].parentNode.onmouseover=function(){
            this.getElementsByTagName("ul")[0].style.visibility="visible"
        }
        curMenu[t].parentNode.onmouseout=function(){
            this.getElementsByTagName("ul")[0].style.visibility="hidden"
        }
    }
};

if (window.addEventListener){
    window.addEventListener("load", createcssmenu2, false)}
else if (window.attachEvent){
    window.attachEvent("onload", creatcssmenu2)};

// Part 3. taking advantage of fancybox functionality

$(document).ready(function(){
    $(".fancybox").fancybox({
            openEffect : 'none',
            closeEffect : 'none'
    });
});