// Javascript related to Homework 2.
// author: clin date: 2018-02-01

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
    document.write("<table class=\"powerTbl\">")
    document.write("<tr><th>Number</th><th>Square</th><th>Cube</th></tr>")
    for(var curNum = 1; curNum <= n; curNum++){
        document.write("<tr><td>" + curNum + "</td><td>" +
                        Math.pow(curNum, 2) + "</td><td>" + 
                        Math.pow(curNum, 3) + "</td></tr>");
    }
    document.write("</table>")
    
}