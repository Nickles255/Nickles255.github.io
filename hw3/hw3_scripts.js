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

// clear validator messages
// https://jqueryvalidation.org/Validator.resetForm/
function clearValid(instr){
    $(instr).validate().resetForm();    
}

//PART 1
// page calculates final grade of student based on score 
// for homework average, mid-term exam score, final exam score and ACR
// requirement to check all values entered are integers.
// formula for final average = 
// (0.5 * hwAvg) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * ACR)


$(document).ready(function(){
// jquery validation rules for the input boxes for grades.
    $("#gradeForm").validate({
        rules:
        {
            hwAvg:      {required: true, digits: true, min: 0, max: 100},
            midExam:    {required: true, digits: true, min: 0, max: 100},
            finalExam:  {required: true, digits: true, min: 0, max: 100},
            ACR:        {required: true, digits: true, min: 0, max: 100}
        }
    });
// slide toggle function when the item id=flip is clicked it executes 
// slideToggle on item id=describe.
    $("#flip").click(function(){
        $("#describe").slideToggle("slow");
    })

});

// function to calculate grades. 
// First check the form has valid input.
// Second extract score values and uses formula to compute finalg grade.
// Third determines letter grade.
// Fourth based on the letter grade output retake course message. 
function calcGrade() {
    // STEP 1. Validation
    if($("#gradeForm").valid()){
        var l_hwAvg, l_midExam, l_finalExam, l_ACR, 
            l_finalGrade, l_finalLtr;
        
        // STEP 2. 
        l_hwAvg     = document.getElementById("hwAvg").value;
        l_midExam   = document.getElementById("midExam").value;
        l_finalExam = document.getElementById("finalExam").value;
        l_ACR       = document.getElementById("ACR").value;

        l_finalGrade = (0.5 * l_hwAvg) + (0.2 * l_midExam) + 
                       (0.2 * l_finalExam) + (0.1 * l_ACR);
        document.getElementById("finalGrd").value = l_finalGrade;
                     
        if(l_finalGrade >= 90)
            l_finalLtr="A";
        else if (l_finalGrade >= 80)
            l_finalLtr="B";
        else if (l_finalGrade >= 70)
            l_finalLtr="C";
        else if (l_finalGrade >= 60)
            l_finalLtr="D";
        else if (l_finalGrade >= 0)
            l_finalLtr="F";
        else l_finalLtr="NA";
         
        document.getElementById("finalLtr").value = l_finalLtr;
        if (l_finalLtr == "D" ||
            l_finalLtr == "F")
        {document.getElementById("poorGradeMsg").innerHTML = 
            "Student must retake the course!";}
        else {document.getElementById("poorGradeMsg").innerHTML = "";} 
    } else {alert("Please enter valid values for input");}

}

function resetMsg(){
    
    document.getElementById("poorGradeMsg").innerHTML = "";
    clearValid('#gradeForm');
    //$("#gradeForm").validate().resetForm();
}

// PART 2
// page takes a name and user input for 4 items. 
// sales persons' pay = $200 + (0.09 * total sales)
$(document).ready(function(){
        $("#salesInForm").validate({
            rules:
            {
                sItem1:      {required: true, digits: true, min: 0},
                sItem2:      {required: true, digits: true, min: 0},
                sItem3:      {required: true, digits: true, min: 0},
                sItem4:      {required: true, digits: true, min: 0}
             },
             
            errorPlacement: function(error, element){
              error.appendTo(element.parent("td").next("td"));
            }          
        });

    });

    function compEarnings(){
        
        if($("#salesInForm").valid()){
            var curItem, curTotal, numSold, pricePerUnit, myTable;
            var tVal, totAmt = 0;
            myTable = document.getElementById("salesEntryTable");
         
            for(var iNum = 1, nNum = 4; iNum <= nNum; iNum ++){
                curItem = 'sItem' + iNum;
                curTotal = "s" + iNum + "Sold"; 
                pricePerUnit = myTable.rows[iNum].cells[1].innerHTML;
                numSold = document.getElementById(curItem).value;
                tVal = Math.round(pricePerUnit*numSold*100)/100;

                document.getElementById(curTotal).value = tVal.toFixed(2);
                totAmt = totAmt + tVal;

            }

            document.getElementById('tSold').value = totAmt.toFixed(2);
            document.getElementById('tEarn').value = (Math.round(((totAmt * 0.09) + 200)*100)/100).toFixed(2);
            
        } else {alert("Please enter valid values for input");}
    }

// PART 3
// page takes user input of a floating number and converts it to 
// farenheit or celsius based on one of the two buttons user clicks.
// converion formula is F = (9/5 * C) + 32
$(document).ready(function(){
    $("#tempForm").validate({
        rules: 
        {
            inTemp:  {required: true, digits: true}
        }
    });

});

function celsius(tVal){
    return ((5/9) * (tVal - 32));
}

function fahrenheit(tVal){
    return ((9/5 * tVal) + 32);
}

// main function takes a value and an inType
// STEP 1. checks in type and creates output for display
// STEP 2. creates output string and places 
// in element names result in tempForm.
function calcTemp(tVal, inType){
    if ($("#tempForm").valid()){

        var result, inTypeDesc, outString;
       //STEP 1. populate output variable depending on inType
        if (inType == "F"){
            result = fahrenheit(tVal).toFixed(2);
            inTypeDesc = "fahrenheit";
            outTypeDesc = "celsius";
        } else if (inType == 'C'){
            result = celsius(tVal).toFixed(2);
            inTypeDesc = "celsius";
            outTypeDesc = "fahrenheit";
        }

        //STEP 2. create output string and place in document.
        outString = (tVal + " " + inTypeDesc + " is equal to " + result + 
                     " " + outTypeDesc + ".");        
        document.forms["tempForm"].elements["result"].value = outString;

    } else {alert("Please enter valid values for input");}

}


// PART 4
// page uses Math.random to produce two one-digit integers. Then 
// it should display a question such as: How much is 6 times 7?
// student types answer into a text field and the program checks the answer.
// if correct display string "Very good!" and prompt user if they wish to continue.
// if incorrect display "No. Please try again." Let student try the same
// question again until student gets it right.

$(document).ready(function(){
    $("#studentAnswer").validate({
        rules: 
        {
            answer:  {required: true, digits: true}
        }
    });

});

var val1, val2, numQues = 0, numTry = 0;

//function creates a multiplication problem and adds one for numQues counter
//everytime it is executed.
function getNextProblem(){
    val1 = Math.floor(Math.random() * 10);
    val2 = Math.floor(Math.random() * 10);
    numQues += 1;
    document.getElementById("question").innerHTML =
    "Question #" + numQues + "<br>" +
    "How much is " + val1 + ' times ' + val2 + '?';
    document.getElementById("userResult").innerHTML = " ";
}

//function checks the userAnswer against actualAnswer and adds one for numTry 
//counter everytime it is executed.
// if it is correct the execute continueGame function.
// if incorect output incorrect response and ask student to try again.
function checkAnswer(){
    if($("#studentAnswer").valid()){
        var userAnswer = document.getElementById("answer").value,
            actualAnswer = val1 * val2;
            numTry += 1;
            document.getElementById("answer").value = null;

        if (userAnswer == actualAnswer){
            document.getElementById("userResult").innerHTML =
            "Your answer, " + userAnswer + ",was correct!"; 
            continueGame();
            
        } else {
            document.getElementById("userResult").innerHTML =
            "Your answer, " + userAnswer + ",was incorrect!" +
            "<br>" + "Please enter another answer and submit again."; 
        }
    } else {alert("Please enter valid values for input");}
}

//function creates a confirm textbox popup. 
//If user clicks ok executes getNextProblem to pull the next problem for user to try.
//If user clicks cancel output results of practice on page
function continueGame() {
    var cont = confirm( "Your answer was correct!\n" +
                        "Click ok to try another problem");
    if (cont == true){
        getNextProblem();
    } else {
        document.getElementById("game").innerHTML = 
        "You made " + numTry + " attempts to answer " + 
         numQues + " multiplication problems." +
        "<br>" + "THANKS FOR PLAYING!";
    }
}