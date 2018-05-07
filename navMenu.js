// Javascript to create Navigation Menu with 
// Dropdown.
// author: clin date 2018-05-06
// Modeled after
// http://javascriptkit.com/script/script2/csstopmenu.shtml

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