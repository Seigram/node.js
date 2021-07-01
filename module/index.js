const {odd, even} = require('./var');
//import {odd, even } from './var';
const checkNumber = require('./func');
const checkodd = require('./func');


function checkstringOddOrEven(str){
    if(str%2){
        return even;
    }
    else{
        return odd;
    }
}

console.log(checkstringOddOrEven('hello'));
console.log(checkodd(10));