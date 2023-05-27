// Javascript related to Homework 2.
// author: clin date: 2018-02-01

//Function createNavMenu creates the navigation menu to the current homework assignment so all html pages will have to same links.

function createNavMenu(){
    document.write('<ul>');
    document.write('<li><a class="mainpg" href="../index.html">CLIN Page</a></li>');
    document.write('<li><a href="hw2.html">HW2 Page</a></li>');
    document.write('<li><a href="hw2_pt1.html">Part 1</a></li>');
    document.write(' <li><a href="hw2_pt2.html">Part 2</a></li>');
    document.write('<li><a href="hw2_pt3.html">Part 3</a></li>');
    document.write('<li><a href="hw2_pt4.html">Part 4</a></li>');
    document.write('<li><a href="hw2_pt5.html">Extra Credit</a></li>');
    document.write('</ul>');
}

//PART 1
//Function dispVal displays document write dispays the three values 
// required on the screen
function dispVal(){
    document.write("<span style = 'color: red;   font-family: \"Times New Roman\";'> ab </span>"); 
    document.write("<span style = 'color: blue;  font-family: Arial;'>               12 </span>"); 
    document.write("<span style = 'color: green; font-family: Impact;'>     <em>34</em> </span>"); 
}


// PART 2
// Function calcNumSummary takes three numbers input by users in 
// webpage and calculates sum, average, product, 
// minimum, and maximum of the three numbers.
function calcNumSummary(){
    var number1, number2, number3, n1, n2, n3, output_value;

    number1 = document.getElementById("num1").value
    number2 = document.getElementById("num2").value
    number3 = document.getElementById("num3").value

    n1 = parseInt(number1);
    n2 = parseInt(number2);
    n3 = parseInt(number3);

    output_value = n1 + n2 + n3;
    document.forms["intForm"].elements["sumResult"].value = output_value;
    output_value = (output_value/3).toFixed(2);            
    document.forms["intForm"].elements["avgResult"].value = output_value;
    output_value = n1 * n2 * n3;            
    document.forms["intForm"].elements["prodResult"].value = output_value;
    output_value = Math.min( Math.min(n1, n2), n3);            
    document.forms["intForm"].elements["minResult"].value = output_value;
    output_value = Math.max( Math.max(n1, n2), n3);            
    document.forms["intForm"].elements["maxResult"].value = output_value;
}

// PART 3
// Process fades when text button is clicked. 
// unfades when the reset button is clicked.
$(document).ready(function(){
    $("#fadeButton").click(function(){
        $("textarea").fadeOut();
    });

    $("#resetButton").click(function(){
        $("textarea").fadeIn();
    });

});

// Function calcPosNegZero take 5 numerical inputs and counts
// the number of positive, negative, and zero values.
function calcPosNegZero(){
    var suffix, currNum, outString, 
        negative = 0, positive = 0, zero = 0;

// loop through the 5 text boxes provided for data entry
        for(suffix = 1; suffix <= 5; suffix++){
        currNum = parseFloat(document.getElementById("num" + suffix).value);
// counts number of positive, negative and zero numbers.
            if (currNum > 0) {
                positive += 1;
            } else if (currNum < 0) {
                negative += 1;
            } else if  (currNum === 0)
            {zero += 1;}
            
        }

        if (positive > 0 || negative > 0 || zero > 0){
            outString =  ("RESULTS:  " +
                          "\nPositive Values : " + positive +
                          "\nNegative Values : " + negative +
                          "\nZero Values : " + zero);
        } else {outString = "There were no numeric values entered into input box";}

            document.forms["numForm"].elements["result"].value = outString
}

// PART 4
// Function drawPowerTbl take one argument (n) and creates a table
// with row consisting of numbers, squares, and cubes starting at 1
// and up to n.
function drawPowerTbl(n){
    document.write("<table class=\"powerTbl\">");
    document.write("<tr><th>Number</th><th>Square</th><th>Cube</th></tr>");
    for(var curNum = 1; curNum <= n; curNum++){
    document.write("<tr><td class=\"nums\">" + curNum + 
                   "</td><td class=\"nums\">" + Math.pow(curNum, 2) +
                   "</td><td class=\"nums\">" + Math.pow(curNum, 3) + 
                   "</td></tr>");
    }
    document.write("</table>");
    
}

// PART 5
// Function calcExchRate takes the input from document element "uDollar_val" and then cycles through a
// table, from second row to second to last row, looking at the second column in each row
// multiplies value it finds with the input and output to the third column
function calcExchRate(){
    // from https://stackoverflow.com/questions/3072233/getting-value-from-table-cell-in-javascript-not-jquery
    var myTable, uDollar, exchVal;
    
    uDollar = parseFloat(document.getElementById("uDollar_val").value);
    myTable=document.getElementById("currencyTbl");
    
    for (var r = 1, nRow = myTable.rows.length -1; r < nRow; r++){
        exchVal=myTable.rows[r].cells[1].innerHTML;
        myTable.rows[r].cells[2].innerHTML = (exchVal * uDollar).toFixed(4);
    } 
}

// function below are used in the extra credit document to create functionaliy.
    $(document).ready(function(){
        // when the focus is on the box id'd as uDollar_val then the background color of the text box will turn green
        $("#uDollar_val").focus(function(){
            $(this).css("background-color", "lightgreen");
        });
        
        // when the element id'd as flip is clicked the element id'd as describe will appear or disappear as toggled.
        $("#flip").click(function(){
            $("#describe").slideToggle("slow");
        });
    });