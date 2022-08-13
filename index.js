const radius =[10,20,30]
// const area =radius.map(r=>Math.PI*r*r)
// console.log(area)
// const diameter = radius.map(r=>r*2)
// console.log(diameter)
// const circumference = radius.map(r=>2*Math.PI*r)
// console.log(circumference)

//  const calculate = function(radius,logic){
//     // const output=[]
//          return logic(radius)
//  }
//  console.log(calculate(radius,area))

// // console.log(calculate(radius,diameter))
// // console.log(calculate(radius,circumference))
// console.log(calculate(radius,area))
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

