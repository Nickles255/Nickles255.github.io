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

