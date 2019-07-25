<!DOCTYPE html>
<meta charset="utf-8">
<script src="https://d3js.org/d3.v4.js"></script>
<div id="my_scatterPlot"></div>

<script>

    var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
    var svg = d3.select("#my_dataviz")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("..\data\data.csv", function(data) {

        var x = d3.scaleLinear()
            .domain([35000, 75000])
            .range([ 0, width ]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        svg.append("text")             
            .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
            .style("text-anchor", "middle")
            .text("Income");

        var y = d3.scaleLinear()
            .domain([20, 40])
            .range([ height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x",0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Percent Obesity (%)");      

        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
                .attr("cx", function (d) { return x(d.obesity); } )
                .attr("cy", function (d) { return y(d.income); } )
                .attr("r", 5)
                .style("fill", "#69b3a2")

    })

</script>