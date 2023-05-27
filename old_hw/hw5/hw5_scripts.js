// Javascript related to Homework 3.
// author: clin date: 2018-02-11

//Function createNavMenu creates the navigation menu to the current homework assignment so all html pages will have to same links.

function createNavMenu(){
    document.write('<nav class="menu">')
    document.write('<ul>');
    document.write('<li><a class="mainpg" href="../index.html">CLIN Page</a></li>');
    document.write('<li><a href="hw5.html">HW5 Main Page</a></li>');
    document.write('<li><a href="hw5_pt1.html">' + 
                   'Part 1 - Form Validation</a></li>');
    document.write(' <li><a href="hw5_pt2.html">' + 
                   'Part 2 - Pulldown Menus</a></li>');
    document.write('<li><a href="hw5_pt3.html">' +
                   'Part 3 - State Info - 2D Array</a></li>');
    document.write('</ul>');
    document.write('</nav>')
}

//Part 1. Development of form validation 
//STEP 1. create form and test each one from bottom of the form on up.
function validateForm(){
    var valid = true;
    var l_obj = document.mValidForm;

    if(valid == true){valid = validTime(l_obj);}
    if(valid == true){valid = validInterest(l_obj);}
    if(valid == true){valid = validGender(l_obj);}
    if(valid == true){valid = validName(l_obj);}
    
    return valid;
}
//-- textbox Name validator
function validName(p_obj){
    var returnVal = true, nameLen = p_obj.fullName.value.length;
    
    if (nameLen == 0) {
        alert("Please provide your name!");
        p_obj.fullName.focus();
        returnVal = false;
    }

    return returnVal;
}

//-- radio box gender validtor
function validGender(p_obj){
    var returnVal = true; numChecked = 0;
    for(i=0; i < 3; i++){
        if (p_obj.gender[i].checked == true){
            numChecked ++;
        }
    }

    if (numChecked == 0){
        alert("Please select a gender");
        p_obj.gender[0].focus();
        returnVal = false;
    }

    return returnVal;
}

//-- check box interest validator
function validInterest(p_obj){
    var returnVal = true; numChecked = 0;
    for(i = 0; i < 5; i++){
        if(p_obj.interest[i].checked == true){
           numChecked ++;     
        }
    }

    if (numChecked == 0){
        alert("Please select at least one interest");
        p_obj.interest[0].focus();
        returnVal = false;
    }

    return returnVal;
}
//-- selection box time validation
function validTime(p_obj){
    var returnVal = true;
    if(p_obj.selTime.value == ""){
        alert("Please select availability value");
        p_obj.selTime.focus();
        returnVal = false;
    }

    return returnVal;
}



//PART 2. event handler in pull down menu executes this function
//        for both button and onchange parameter.
//STEP 1. identify selected item of destList menu. assign to destination target.
//STEP 2. set window location to destination identified in STEP 1.
function goToNewPage(myForm) {
    var myDestination = myForm.destList.options[myForm.destList.selectedIndex].value;
    window.location.href = myDestination;
}

/* PART 3.STATE DATA
   Author: CLIN
   DATE: 2018-03-31 
   PURPOSE: Using two dimensional array of state data.
   Need to identify state by name or abbreviate (case insensitive)
   
   STEP 1. Create two dimensional array each state is a row with 4 columns
           state abbreviation, state name, state capitol, and population.
   STEP 2. Create searchable single dimension array of search terms 
   STEP 3. take user input and validate return name capitol and population in text fields.
*/
var myState = [['AL', 'Alabama', 'Montgomery', 4779736],
               ['AK', 'Akaska', 'Juneau', 710231],
               ['AZ', 'Arizona', 'Phoenix', 6392017],
               ['AR', 'Arkansas', 'Little Rock', 2915918],
               ['CA', 'California', 'Sacramento', 37253956],
               ['CO', 'Colorado', 'Denver', 5029196]         
              ];
// creating search array from first two columns in myState array with all characters upper case.
// https://stackoverflow.com/questions/7848004/get-column-from-a-two-dimensional-array-in-javascript
var searchArray = myState.map(x => x[0]).concat(myState.map(x => x[1]));
searchArray = searchArray.map(function(x){return x.toUpperCase()})
// jquery validation and mapping of a single column reference.
// https://stackoverflow.com/questions/5696222/jquery-validator-check-input-against-a-list-of-accepted-values              
jQuery.validator.addMethod("isstate", function(value) {
            return $.inArray(value.toUpperCase(), searchArray) != -1;
            }, "Data provided is not a valid state");

// function to populate the state elements if the stateForm is validated.
function getStateData(pState){
    if($('#stateForm').valid()){
        var stateIndex = searchArray.indexOf(pState.toUpperCase())%myState.length
        document.forms["stateForm"].elements["stateNameOut"].value = myState[stateIndex][1]
        document.forms["stateForm"].elements["stateCapitolOut"].value = myState[stateIndex][2]
        document.forms["stateForm"].elements["statePopOut"].value = 
            Number(myState[stateIndex][3]).toLocaleString() 
    }
};

$(document).ready(function(){
        $("#stateForm").validate();
        $("#dispInst").hide();
        $("#instButton").click(function(){
                            $("#dispInst").show();
                            $("#dispInst").delay(4000).fadeOut('slow');
                            });

}); 

