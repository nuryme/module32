/* 
    8 ways to get undefine
    1.variable that is not initialized
    2.function with no return
    3. function's parameter that is not passed
    4.if return has nothing on it
    5.if a property is called that doesn't exist on a object
    6.calling a array index outside of the index range
    7.calling a array index after deleting the index element
    8.set a value directly to undefined
*/
// let first;
// console.log(first)
// function second(a, b) {
//     const total = a + b;
// }
// console.log(second(1, 2))
// function third(a, b, c, d) {
//     const total = a+ b+ c+ d;
//     console.log(a, b, c, d);
// }
// third(1, 2)
// function noNegative(a, b) {
//     if(a < 0 || b < 0) {
//         return;
//     }
//     return a+b;
// }
// console.log(noNegative(1,2))
// console.log(noNegative(1,-2))
// const obj = {id: 2, name: 'nur', age: 20};
// console.log(obj.name, obj.salary)
// const arr = [2, 3 ,98, 97, 2];
// delete arr[3]       //should not delete that way
// console.log(arr[2], arr[3], arr[7])
// console.log(arr)
// const undfn = undefined;
// console.log(undfn)

//------    truthy and false values
/**
 * --   truthy
 * 1.true
 * 2.any number(+ve/-ve)
 * 3.any string and string with just a space(' ')
 * 4.'0', 'false'
 * 5.empty object{}, empty array[], array, object
 * 
 * --   falsy
 * 1.false
 * 2.0
 * 3.empty string('')
 * 4.undefined
 * 5.null
 */
// const x = 1;
// const x = -1;
// const x = true;
// const x = false;
// const x = 0;
// const x = 'string';
// const x = ' ';
// const x = '';
// let x;
// let x = null;
// if(x) {
//     console.log('value of x is truthy')
// }
// else {

//     console.log('value of x is falsy')
// }

//closure
// function stopWatch() {
//     let counter = 0;
//     return function() {
//         counter++;
//         return counter;
//     }
// }
// const watch1 = stopWatch()
// const watch2 = stopWatch();
// console.log(watch1)
// console.log(watch1())
// console.log(watch1())
// console.log(watch1())
// console.log(watch2())
// console.log(watch2())
// console.log(watch2())
// console.log(watch2())
// console.log(watch2())
// console.log(watch1())
// console.log(watch2())

//callBack function
// function greeting(greetingHandler, name) {
//     greetingHandler(name)
// }
// function greetingHandler(name)  {
//     console.log('Good Morning, ',name)
// }
// function greetingEvening(name) {
//     console.log('Good Evening ', name)
// }
// greeting(greetingHandler, 'nur')
// greeting(greetingEvening, 'nahar')

//arguments (array like object)
// function sum(a, b, c) {
//     console.log(arguments)
//     console.log(arguments[4])
//     console.log(typeof arguments)
//     const args = [...arguments];    //converting to array
//     console.log(args)
//     const total = a+ b+ c;
//     return total;
// }
// console.log(sum(2, 3, 4, 5, 6, 7))
// console.log(typeof sum)
// console.log(sum.length)

// const num1 = 5;
// const num2 = 2;
// function mlt(a, b) {
//     b = 5;
//     return a*b;
// }
// console.log(mlt(num1, num2))
// console.log(num2)
// const student1 = {name: 'jalil', partner: 'khalil'}
// const student2 = {name: 'alil', partner: 'allal'}
// function makeMovie(couple1, couple2) {
//     couple1.name = 'nur'
//     couple2.partner = 'nahar'
// }
// console.log(student1, student2)
// makeMovie(student1, student2);
// console.log(student1, student2)

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);