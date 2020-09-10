var condition='negative';
var promise=new Promise(function(resolve,reject){
        if(condition=='positive'){
            resolve("I am +ve");
        }
        else{
            reject("I am -ve");
        }
});
console.log("Good morning folks!!!! Let's make a promise today :)")
promise.then(function(response){
    console.log(response);
}).catch(function(errorResponse){
    console.log(errorResponse)
});