'use strict'


// let a = 5;
// let b = 5;
// function maxNumber( a, b ){
//   if ( a > b ){
//       return `${a}`;
//   } else if( a < b ){
//       return `${b}`;
//   }
//   return `${a} == ${b}`;
// }
// console.log(maxNumber(a,b)) ;

              // function comparisonIntegers (a,b) {
              //   return (a>b ? a : b);
              // }
              // console.log(comparisonIntegers(a,b));

  //  *************

// let a = +prompt("Please enter a number a ", 'a');
// let b = +prompt("Please enter a number b ", 'b');
// function maxNumber( a, b ){
//     if ( a > b ){
//         return `${a}`;
//     } else if( a < b ){
//         return `${b}`;
//     }
//     return `${a} = ${b}`;
//   }
// alert(maxNumber(a,b)) ; 



          // *******************





// let namber = 0;
// function invert(namber) {
//        return namber = +namber * -1 ;
//   }
// console.log(invert(namber)) ;

    //  ************** 

// let namber = +prompt("enter the number ", '');
// function invert(namber) {
//        return namber = +namber * -1 ;
//   }
// alert(invert(namber)) ;




              // **********************


// let namber = 5;
// let count = 2;
// function three(namber , count) {
//        return three = namber + 3 * count ;
//   }
//  console.log(three(+namber, +count)) ;
 
              //  ***************

//  let namber = +prompt("Please enter a number ", '');
//  let count = +prompt("Please enter a count ", '');
//  function three(namber , count) {
//         return three = namber + 3 * count ;
//    }
//    alert(three(+namber, +count)) ;





  //  ***************



// let km = 2;
// let metric = true;

// function KmToM(){
//    console.log( km * 1000 );
// } 
// function KmToCm(){
//   console.log( km * 1000000 );
// }
// function  getMetric(status, m, cm) {
//    status ? m() : cm();
// }
// getMetric(metric, KmToM, KmToCm);


// ******************


// let km = +prompt("How many kilometers do you need to transfer?", '');
// let metric = prompt("Press `m` to convert to meters or `cm` to convert to centimeters", '');



// function getConvert(metric){
//     if ( metric = m ){
//         return true;
//     } 
//        return false;
//   }
// function KmToM(){
//    console.log( km * 1000 );
// } 
// function KmToCm(){
//   console.log( km * 1000000 );
// }
// function  getMetric(status, m, cm) {
//    status ? m() : cm();
// }
// alert (getMetric(metric, KmToM, KmToCm));
//  *************** не зрозумів



let km = +prompt("How many kilometers do you need to transfer?", '');
let metric = confirm("Press `yes` to convert to meters or `no` to convert to centimeters");
function KmToM(){
  return KmToM = ( km * 1000 );
} 
function KmToCm(){
  return KmToCm = ( km * 1000000 );
}
function  getMetric(status, m, cm) {
  return getMetric = status ? m() : cm();
}
alert (getMetric(metric, KmToM, KmToCm))