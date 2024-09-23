let margin = {top: 20, right: 20, bottom: 30, left: 40}
let width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom,
    barW = 40, barspace = 5;


let stuCnt = []
let schoolTerm = []
let selDiv = d3.select("#chart")

//add h2 title
selDiv.append("h2").html("Student Count by Semester");

// Initialize chart
let myChart = selDiv
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Initialize tool tip
let tooltip = d3.select('body').append("div")
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'darkblue')
    .style('opacity', 0);

// Processing data from file
d3.json("assets/hw3data.json", function (error, data) {
    // Convert to arrays for simple processing
    for (var i = 0; i < data.length; i++) {
        stuCnt.push(data[i].students);
        schoolTerm.push(data[i].term);
    }

    //Scaling various sections of graph
    var yS = d3.scaleLinear()
        .domain([0, d3.max(stuCnt)])
        .range([0, height]);

    var xS = d3.scaleBand()
        .domain(d3.range(0, stuCnt.length))
        .range([0, width])
        .padding(0.1);

    var verticalGuide = d3.scaleLinear()
        .domain([0, d3.max(stuCnt)])
        .range([height, 0]);

    //Create rectangle chart
    myChart.selectAll('rect')
        .data(stuCnt)
        .enter()
        .append('rect')
        .attr('width', xS.bandwidth)
        .attr('height', function (d) {return yS(d);})
        .attr('x', function (d, i) {return xS(i);})
        .attr('y', function (d) {return height - yS(d);})
        .on('mouseover', function (d, index) {
            tooltip.transition().style('opacity', .8);
            thisText = 'Term: ' + schoolTerm[index] + '<br>Count: ' +  d;
            // console.log(thisText);
            tooltip.html(thisText)
                .style('left', (event.pageX + 0) + 'px')
                .style('top', (event.pageY + 0) + 'px');
            d3.select(this).style('opacity', .4);
        })
        .on('mouseout', function (event, d) {
            tooltip.transition().style('opacity', 0);
            d3.select(this).style('opacity', 1);
        })
    ;

    //add vertical axis
    myChart.append('g').call(d3.axisLeft(verticalGuide));

    //add horizontal axis
    myChart.append('g')
        .call(d3.axisBottom(xS).tickSize(0)
            .tickFormat(function(d, i){
                return schoolTerm[i];
            })
        )
        .attr('transform', 'translate(20, ' + height + ')');

});

















