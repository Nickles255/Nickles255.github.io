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

