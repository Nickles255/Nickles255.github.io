// Javascript related to Homework 4.
// author: clin date: 2018-03-15

    usdOption = {style: "currency", currency: "USD"};
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



//Part 1. Creation of Product and Sums using for loop in part a. and while loop in part b.
// STEP 1. make two results areas draggable.
// STEP 2. set results to 0 and begin calculation for loop for every third integer between 5 and 20 inclusive
// STEP 3. set results to 0 and begin calculation while loop for every fourth integer between 3 and 31 inclusive

$(document).ready(function(){
    var sum_total, prod_total;
    var j = 3;
    // STEP 1. draggable results
     $("#First_Result").draggable();
     $("#Second_Result").draggable();

    // STEP 2. Part 1 a. for loop.
    sum_total = 0;
    prod_total = 1;

    for (i = 5; i <= 20; i+= 3){

        sum_total += i;
        prod_total *= i; 
        // if not first value then add symbol to output
        if (i !== 5) {
            document.getElementById("Result_1").innerHTML += ' + ';
            document.getElementById("Result_2").innerHTML += ' * ';
        }
        // add number to output
        document.getElementById("Result_1").innerHTML += i;
        document.getElementById("Result_2").innerHTML += i;
    } //end for
    // after coompletion of loop add result to output
    document.getElementById("Result_1").innerHTML += ' = ' + sum_total;
    document.getElementById("Result_2").innerHTML += ' = ' + prod_total.toLocaleString();
    
    // STEP 3. Part 1 b. while loop.
    sum_total = 0;
    prod_total = 1;
    
    while (j <= 31){
        sum_total += j;
        prod_total *= j;
        // if not first value then add symbol to output
        if (j !== 3){
            document.getElementById("Result_3").innerHTML += ' + ';
            document.getElementById("Result_4").innerHTML += ' * ';
        }

        // add number to output
        document.getElementById("Result_3").innerHTML += j;
        document.getElementById("Result_4").innerHTML += j;
        j += 4;

    }  //end while
    // after coompletion of loop add result to output
    document.getElementById("Result_3").innerHTML += ' = ' + sum_total;
    document.getElementById("Result_4").innerHTML += ' = ' + prod_total.toLocaleString();
}); //end $(document).ready(function)

//PART 2. Creation of compound interest table using loops.
// function receives initial deposit and creates interest table with growth of initial deposit 
// for interest rates between 5% to 10% inclusive and at the end of first through tenth year.
// STEP 1. Initialize table using document write.
// STEP 2. use looping to create each row in the table outer loop interest inner loop year.
// STEP 3. close table and add styling through jquery. 

function createInterestTbl (initDeposit) {
    var curOut = 0.0;
    // STEP 1. Initialize table
    document.write("<table class=\"InterestTbl\">");
    document.write("<thead><tr><th>Year</th><th>Amount on Deposit</th><th>Interest Rate</th></tr></thead>")
    
    // STEP 2. create table rows.
    for (interest = 0.05; interest <= .1; interest+= 0.01){
        for (year = 1; year <= 10; year++ ){

            curOut = initDeposit * (1 + interest)**year;
            document.write("<tbody><tr><td class=\"nums\">" + year +
                           "</td><td class=\"nums\">" + curOut.toLocaleString("en", usdOption) +
                           "</td><td class=\"nums\">" + interest.toLocaleString("en", {style: "percent"}) +
                           "</td></tr></tbody>");

        } //end inner for loop (year)
    } //end outer for loop (interest rate)

    // STEP 3. close table and add styling.
    document.write("</table>");    

    // Alternating colors using Jquery.
    // https://stackoverflow.com/questions/8128581/alternate-row-colors-using-jquery
    $("tr:even").css("background-color", "#eeeeee");
    $("tr:odd").css("background-color", "#ffffff");
    $("tr:eq(0)").css("background-color", "black");
    $("tr:eq(0)").css("color", "white"); 
}

// Part 3. Retail sales calculation.

// validation of input in form entry boxes. for various input in hw.
$(document).ready(function(){
    $('#salesEntryForm').validate({
        rules:{
            itemIn: {required: true, digits: true, min: 1, max: 5},
            qtyIn:  {required: true, digits: true, min: 1}
        }
    }),

    $('#createSquareForm').validate({
        rules:{
            squareIn: {required: true, digits: true, min:2, max: 10}
        },
        messages:{
            squareIn: "Please enter a value between 2 and 10"
        }
    });
    
}); // end $(document).ready

// function to insert a product into salesEntryForm and calculate dollar amount sold for each item and total sold.
// will check to make sure salesEntryForm has valid inputs before executing.
// STEP 1. determine which row to insert item results using switch statement based on the item number input.
// STEP 2. use loop to sum each item amount to get value for total amount sold box.
function insertProduct(tItemNum, tItemQty){
    if($("#salesEntryForm").valid()){
        var myTable = document.getElementById("salesOutputTable"), suffix, tAmt = 0.0,tCurNum; 
        // STEP 1. entering data for item and quantity from user input
        switch(tItemNum) {
            case '1':
                myCost = myTable.rows[1].cells[2].innerHTML;
                document.forms["salesEntryForm"].elements["sItem1"].value = Number(tItemQty).toLocaleString(undefined);
                document.forms["salesEntryForm"].elements["s1Sold"].value = (tItemQty*myCost).toLocaleString('en', usdOption);
                break;
            case '2':
                myCost = myTable.rows[2].cells[2].innerHTML;
                document.forms["salesEntryForm"].elements["sItem2"].value = Number(tItemQty).toLocaleString(undefined);
                document.forms["salesEntryForm"].elements["s2Sold"].value = (tItemQty*myCost).toLocaleString('en', usdOption);
                break;
            case '3':
                myCost = myTable.rows[3].cells[2].innerHTML;
                document.forms["salesEntryForm"].elements["sItem3"].value = Number(tItemQty).toLocaleString(undefined);
                document.forms["salesEntryForm"].elements["s3Sold"].value = (tItemQty*myCost).toLocaleString('en', usdOption);
                break;
            case '4':
                myCost = myTable.rows[4].cells[2].innerHTML;
                document.forms["salesEntryForm"].elements["sItem4"].value = Number(tItemQty).toLocaleString(undefined);
                document.forms["salesEntryForm"].elements["s4Sold"].value = (tItemQty*myCost).toLocaleString('en', usdOption);
                break;
            case '5':
                myCost = myTable.rows[5].cells[2].innerHTML;
                document.forms["salesEntryForm"].elements["sItem5"].value =  Number(tItemQty).toLocaleString(undefined);
                document.forms["salesEntryForm"].elements["s5Sold"].value = (tItemQty*myCost).toLocaleString('en', usdOption);
                break;
        } //end switch

        //STEP 2. loop through s[suffix]Sold elements and adds the values together to output total amount.
        for (suffix = 1; suffix <= 5; suffix++){
            tCurNum = document.forms["salesEntryForm"].elements["s" + suffix + "Sold"].value.replace('$', '').replace(/,/g, '');
            tAmt += Number(tCurNum);
        } //end for

        document.forms["salesEntryForm"].elements["tSold"].value = tAmt.toLocaleString('en', usdOption); 
    }
} //end insertProduct

//Part 4. Extra credit.

// functioncreate square takes an integer input and creates a square shape using *.
// in the squareSpaceText location. 
// Step 1. checks to see if createSquareForm is validated.
// Step 2. creates a square box with '*' values. need to make sure spacing is correct 
//         through CSS
function createSquare(tInt){
    var lRow, lCol, outputLoc = document.getElementById('squareSpaceText');
    // Step 1. check to see if form is valid.
    if($("#createSquareForm").valid()){
        // reset ouput location to empty string.
        outputLoc.innerHTML = '';

        //Step 2. generate loop for rows and columns placing stars in correct locations.
        for (lRow = 1; lRow <=tInt; lRow++){
            for(lCol = 1; lCol <=tInt; lCol++){
                if(lRow == 1 || lRow == tInt){
                    outputLoc.innerHTML +='*';
                } else if (lCol == 1 || lCol == tInt){
                    outputLoc.innerHTML +='*';
                } else {
                    outputLoc.innerHTML +=' ';
                } //end if
            } //end inner for

            outputLoc.innerHTML +='<br>'
        } //end outer for

    } //end validator

} //end createSquare

//function to clear squareSpaceText location. used in reseting of form.
function clearSquare(){
    document.getElementById('squareSpaceText').innerHTML = '';

}



