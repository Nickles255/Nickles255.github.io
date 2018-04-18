// Javascript related to Homework 3.
// author: clin date: 2018-02-11

//Function createNavMenu creates the navigation menu to the current homework assignment so all html pages will have to same links.

function createNavMenu(){
    document.write('<nav class="menu">')
    document.write('<ul>');
    document.write('<li><a class="mainpg" href="../index.html">CLIN Page</a></li>');
    document.write('<li><a href="hw7.html">HW7 Page</a></li>');
    document.write('<li><a href="hw_7pt1.html">' + 
                   'Part 1 - Calc Student Grades</a></li>');
    document.write(' <li><a href="hw_7pt2.html">' + 
                   'Part 2 - Weekly Pay for Sales</a></li>');
    document.write('<li><a href="hw_7pt3.html">' +
                   'Part 3 - Temp Conversion</a></li>');
    document.write('<li><a href="hw_7pt4.html">' + 
                   'Part 4 - Simple Math Practice</a></li>');
    document.write('</ul>');
    document.write('</nav>')
}

