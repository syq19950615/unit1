/* Main JavaScript by Yuqi Shi, 2019 */

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Beijing',
            population: 21540000
        },
        {
            city: 'Shanghai',
            population: 24180000
        },
        {
            city: 'Tokyo',
            population: 9273000
        },
        {
            city: 'Seoul',
            population: 9776000
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
	//add two functions to the table
    addColumns(cityPop);
    addEvents();
};

//function to add a column to indicate population size of cities 
function addColumns(cityPop){
    //iterate over each element   
    $('tr').each(function(i){

    	if (i == 0){
			//add the "City Size" columns to the header row
    		$(this).append('<th>City Size</th>');
    	} else {
			//assign variable 'citysize'
    		var citySize;
			//create a loop to indicate the city size
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			//append current element for variable 'citySize' to the "City Size" column
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//function to add events (mouseover and click)
function addEvents(){
	//create mouseover event for the table
	$('table').mouseover(function(){
		//setup random color and assign to variable 'color'
		var color = "rgb(";
		//create for loop to assign random color
		for (var i=0; i<3; i++){
			//assign a random number function to variable 'random'
			var random = Math.round(Math.random() * 255);
			//assign value of 'color' and 'random' to 'color'
			color += random;
			//create a loop to run the for loop three times (because rgb color is made by three values)
			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			}
		};
		//get the computed style property for current element
		$(this).css('color', color);
	});
	//create a click event
	function clickme(){
		//message for click event
		alert('Hey, you clicked me!');
	};
	//Attach the 'clickme' event to the table
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);






//define callback function
function debugCallback(response){
	//check the data
	concole.log(mydata);
	//add 'GeoJSON data' and data for variable 'mydata' in string
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};
//define AJAX function
function debugAjax(){
	//define a variable to hold the data 
	var mydata;
	//basic jQuery ajax method
	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			mydata = response;
			
			//check the data
			console.log(mydata);
			//add 'GeoJSON data' and data for variable 'mydata' in string
			$('#mydiv').append('GeoJSON data: ' + JSON.stringify(mydata));
		}
	});
	//check the data
	console.log(mydata);
	
};
//call the debugAjax function when the document has loaded	
$(document).ready(debugAjax);

