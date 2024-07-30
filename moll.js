// Import D3.js library
import * as d3 from 'd3';

// Create a color scale gradient
let gradient = d3.scaleLinear()
    .domain([0, 100])
    .range(['blue', 'red']);

// Example usage: get a color for a specific value
console.log(gradient(50)); // Output: a middle value between blue and red
