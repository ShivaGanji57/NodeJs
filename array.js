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

const copyfruits=[...fruits]
console.log(fruits===copyfruits)
console.log('a');
console.log('b');

const fetch1=async ()=>{
    const promise1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('c')
        },3000)
    })
    const promise2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('d')
        },0)
    })

    const promise3=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('e')
        },0)
    })
   
    let getC=await promise1
    console.log(getC)
    let getD=await promise2
    console.log(getD)
    let getE=await promise3
    console.log(getE)
    
}
fetch1().then()
