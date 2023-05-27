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
} //end createNavMenu

// Part 1. Executing math round functions.
// STEP 0. create variables and clear output box.
// STEP 1. use regular expression string to validate 
//         input only contains digits and has at least 
//         4 digits after the decimal place.
// STEP 2. Create output string with various math functions.
// STEP 3. output to correct location in webpage.
function calcMath(tVal){
   //STEP 0. create variables and clear output box.
    var result, outString, matchNum = /^[0-9]+(\.[0-9]{4,})$/;
    document.forms["mathForm"].elements["results"].value = "";
  
    //STEP 1. regular expression validation.
    if (tVal.match(matchNum)){
        //STEP 2. creating output string.
        // original value to display
        outString = "\nThe original value is: " + tVal;
            
        // original value rounded to nearest integer.
        result = Math.round(tVal);
        outString += "\nThe original value rounded to the " + 
                     "nearest integer: " + result;

        // original value squarerooted and rounded to nearest integer.
        result = Math.round(Math.sqrt(tVal));               
        outString += "\nThe original value square root and then rounded " + 
                     "to the nearest integer: " + result;

        //  orignal value rounded to nearest tenth
        result = Math.round(tVal*10)/10.0;
        outString += "\nThe original value rounded to the " + 
                     "nearest tenth: " + result;
        
        //  orignal value rounded to nearest hudredths
        result = Math.round(tVal*100)/100.0;
        outString += "\nThe original value rounded to the " + 
                     "nearest hundredth: " + result;

        //  orignal value rounded to nearest thousandths
        result = Math.round(tVal*1000)/1000.0;
        outString += "\nThe original value rounded to the " + 
                     "nearest thousandths: " + result;

        // STEP 3. output results.
        document.forms["mathForm"].elements["results"].value = outString;
    } else {
        alert("Please enter at least 4 digits after decimal place!");
    }        
} // end calcMath

// Part 2. takes a user input string and searches for specific characters.
// STEP 0. Create variables and output text when character not found in String.
// STEP 1. extract number of occurances of the search character in inStr 
// STEP 2. if inStr does not contain information, will create alert for user to insert data.
//         if no matches found will create new window. if matches found will output to results box.
function findChar(inStr, searchChar){
    //STEP 0. create variable and output text.
    var result = -1, outString = "The character search was matched ";
    var myText = "<html>\n";
        myText += "<head>\n";
        myText += "<title>Text not found</title>\n";
        myText += "</head>\n";
        myText += "<body>\n";
        myText += "<p><strong>" + 
                  "Search character not found in text String!" +
                  "</strong></p>\n";
        myText += "</body>\n";
        myText += "</html>";
        document.forms["textForm"].elements["textResult"].value = "";
    // STEP 1. use split to determine number of occurances in searchChar.
     result = inStr.split(searchChar).length - 1;
    
    // STEP 2. create produce results based on the split.
    if (result < 0 || searchChar.replace(/\s/g, "") === ""){
        alert("Please enter string in text box and search box")
    } else if (result === 0){
        var newWindow = window.open("", "new_window", "top=200,left=50,width=300,height=100");
        newWindow.focus();
        newWindow.document.write(myText);
    } else {
        outString += result + " times \n" + "in the text enetered into the box!"
        document.forms["textForm"].elements["textResult"].value = outString;
    }
} //end findChar

// Part 3. date and phone functions.

function currentDate() {
    /* Prints out various types of current date. 
       displays hour difference between UTC and PDT and EDT.
       constants are MIN_IN_HR and PDT_toEDT_HR_OFFSET.
    */
    var curDate = new Date(), output;
    var MIN_IN_HR = 60, PDTtoEDT_HR_OFFSET = -3;
                    
    output = curDate.toString();
    document.forms["date_phone_Form"].elements["dateToStr"].value = output;

    output = curDate.toLocaleString();
    document.forms["date_phone_Form"].elements["dateToLoc"].value = output;

    output = curDate.toUTCString();
    document.forms["date_phone_Form"].elements["dateToUTC"].value = output;

    output = curDate.getTimezoneOffset()/MIN_IN_HR;
    document.forms["date_phone_Form"].elements["PDTnUTC"].value = output;

    output = output + PDTtoEDT_HR_OFFSET;
    document.forms["date_phone_Form"].elements["EDTnUTC"].value = output; 
} //end currentDate

function splitPhone (phnInput){
    /* Function checks if number is correct (xxx) xxx-xxxx
       and will parse value based on regular expression
       the area code is presented in area code box
       the seven digit phone number is presented in teh phone number box.
    */ 
    var phoneRegExp =/^(\()(\d{3})(\))(\s?)(\d{3})(-\d{4})$/;    
    var parts = phnInput.match(phoneRegExp);
    document.getElementById('areaCode').value = "";
    document.getElementById('phnNum').value = "";

    if (phoneRegExp.test(phnInput)){
        document.getElementById('areaCode').value = parts[2];
        document.getElementById('phnNum').value = parts[5] + parts[6];
        
    } else {
        alert("inputted phone # has wrong format \n" + 
              "Please use exactly (xxx) xxx-xxxx \n" +
              "Each x must be a number"
              );
    }
} //end splitPhone


