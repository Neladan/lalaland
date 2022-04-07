/*let triangle = "#" ;
do { (triangle + triangle);
} while (triangle.length !== 7);
console.log(triangle);
*/

/* triangle = "#"
for (let triangle = "#"; triangle.length <= 7; triangle += "#");

console.log(triangle);
*/

/*
var result = "$"
while(result.length <= limit ){
    console.log(result);
    result = result + "$"
}
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
