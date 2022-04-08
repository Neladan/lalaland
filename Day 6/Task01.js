
/* triangle = "#"
for (let triangle = "#"; triangle.length <= 7; triangle += "#");

console.log(triangle);
*/

module.exports = {
    drawTriangle: function(limit) {
    
        var result = "$"
        while(result.length <= limit ){
        console.log(result);
        result = result + "$"
        }
 }
}
