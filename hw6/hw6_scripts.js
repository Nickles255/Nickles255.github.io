// Javascript related to Homework 3.
// author: clin date: 2018-02-11

//Function createNavMenu creates the navigation menu to the current homework assignment so all html pages will have to same links.

function createNavMenu(){
    document.write('<nav class="menu">')
    document.write('<ul>');
    document.write('<li><a class="mainpg" href="../index.html">CLIN Page</a></li>');
    document.write('<li><a href="hw6.html">HW6 Page</a></li>');
    document.write('<li><a href="hw6_pt1.html">' + 
                   'Part 1 - Math Methods</a></li>');
    document.write(' <li><a href="hw6_pt2.html">' + 
                   'Part 2 - String Methods</a></li>');
    document.write('<li><a href="hw6_pt3.html">' +
                   'Part 3 - Date Conversion and Split function</a></li>');
    document.write('</ul>');
    document.write('</nav>')
}

function splitPhone (phnInput){
    /* Function checks if number is correct (xxx) xxx-xxxx
       and will parse value based on regular expression
       the area code is presented in area code box
       the seven digit phone number is presented in teh phone number box.
    */ 
    var phoneRegExp =/^(\()(\d{3})(\))(\s?)(\d{3})(-\d{4})$/;    
    var parts = phnInput.match(phoneRegExp);

    if (phoneRegExp.test(phnInput)){
        document.getElementById('areaCode').value = parts[2];
        document.getElementById('phnNum').value = parts[5] + parts[6];
        
    } else {
        alert("inputted phone # has wrong format \n" + 
              "Please use exactly (xxx) xxx-xxxx \n" +
              "Each x must be a number"
              );
    }
}


