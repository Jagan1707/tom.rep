 const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("success")
    },1000);
})


p1.then(console.log).catch(console.log);


const f1 = (val,callback)=>{
    return callback(val + 10);
}

const callback =(val)=>{
    return val+20;
}

console.log(f1(2,callback)); 


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("failure");
    },500)
})
//p2(3).then(x => x+10).then(console.log);


Promise.race([p1,p2]).then(console.log).catch(console.log);





const check = new Promise(async(resolve,reject)=>{
    let text = 2;
    if(text == 0){
        resolve("success")
    }else{
        reject("failure")
    }
})
 check.then(console.log).catch(console.log);
 

const { response } = require("express");

async function check(){
    const arr=[1,2,3,4];
    const response = [];

    arr.forEach(value => {
        const user =value
        response.push(user)
    })

}

console.log(check());







































