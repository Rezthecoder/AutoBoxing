const radius =[10,20,30]
const area = function(radius){
    return Math.PI*radius*radius
}
const circumference = function(radius){
    return 2*Math.PI*radius
}
const diameter = function(radius){
    return radius*2
}
const calculate = (function(radius,logic){
    //map to calculate the array of radius

    let output=[]
    for(let i=0;i<radius.length;i++){

        output.push(logic(radius[i]))
    }
    return output
})

console.log(calculate(radius,area))
console.log(radius.map(area))

