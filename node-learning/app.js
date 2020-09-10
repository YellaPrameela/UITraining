var usingAdditionModule=require('./addition'); //addition.js is acquired here 
console.log(usingAdditionModule.addition(8,4)); /* using that variable we called the
                    addition function declared in that addition.js */


var usingSubtractionModule=require('./subtract') ;
console.log(usingSubtractionModule.subtractionFunc.subtraction(10,5));
console.log(usingSubtractionModule.subtractionFunc.dummySubtraction(1000,500));  

var usingMultiplicationModule=require('./multiply') ;
console.log(usingMultiplicationModule.multiply(3,9)); 

var usingDivisionModule=require('./division') ;
console.log(usingDivisionModule.division(36,9)); 