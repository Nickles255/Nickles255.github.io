// Javascript related to Homework 3.
// author: clin date: 2018-02-11

//Function createNavMenu creates the navigation menu to the current homework assignment so all html pages will have to same links.

function createNavMenu(){
    document.write('<nav class="menu">')
    document.write('<ul>');
    document.write('<li><a class="mainpg" href="../index.html">CLIN Page</a></li>');
    document.write('<li><a href="hw3.html">HW3 Page</a></li>');
    document.write('<li><a href="hw3_pt1.html">' + 
                   'Part 1 - Calc Student Grades</a></li>');
    document.write(' <li><a href="hw3_pt2.html">' + 
                   'Part 2 - Weekly Pay for Sales</a></li>');
    document.write('<li><a href="hw3_pt3.html">' +
                   'Part 3 - Temp Conversion</a></li>');
    document.write('<li><a href="hw3_pt4.html">' + 
                   'Part 4 - Simple Math Practice</a></li>');
    document.write('</ul>');
    document.write('</nav>')
}

//PART 1
// page calculates final grade of student based on score 
// for homework average, mid-term exam score, final exam score and ACR
// requirement to check all values entered are integers.
// formula for final average = 
// (0.5 * hwAvg) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * ACR)

// PART 2
// page takes a name and user input for 4 items. 
// sales persons' pay = $200 + (0.09 * total sales)

// PART 3
// page takes user input of a floating number and converts it to 
// farenheit or celsius based on one of the two buttons user clicks.
// converion formula is F = (9/5 * C) + 32

// PART 4
// page uses Math.random to produce two one-digit integers. Then 
// it should display a question such as: How much is 6 times 7?
// student types answer into a text field and the program checks the answer.
// if correct display string "Very good!" and prompt user if they wish to continue.
// if incorrect display "No. Please try again." Let student try the same
// question again until student gets it right.
