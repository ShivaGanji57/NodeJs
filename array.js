const fruits=['apple', 'oranges' , '', 'mango', '' , 'lemon']

const mapFruits=fruits.map(fruit=>{
    if(fruit.length==0){
        return fruit+'empty string'
    }
    else    
        return fruit
})
console.log(fruits)
console.log(mapFruits)