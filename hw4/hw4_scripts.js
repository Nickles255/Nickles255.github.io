// Javascript related to Homework 3.
// author: clin date: 2018-02-11

//Function createNavMenu creates the navigation menu to the current homework assignment so all html pages will have to same links.

function createNavMenu(){
    document.write('<nav class="menu">')
    document.write('<ul>');
    document.write('<li><a class="mainpg" href="../index.html">CLIN Page</a></li>');
    document.write('<li><a href="hw4.html">HW4 Page</a></li>');
    document.write('<li><a href="hw4_pt1.html">' + 
                   'Part 1 - For Statement product and sums</a></li>');
    document.write(' <li><a href="hw4_pt2.html">' + 
                   'Part 2 - Calculation of compound interest</a></li>');
    document.write('<li><a href="hw4_pt3.html">' +
                   'Part 3 - Retail Sales</a></li>');
    document.write('<li><a href="hw4_pt4.html">' + 
                   'Extra Credit - Square Shapes</a></li>');
    document.write('</ul>');
    document.write('</nav>')
}

