// ********************************** CHAP 38-40 **********************************


//   TASK 1
// var a = +prompt("enter a number");
// var b = +prompt("enter another number");
// function custom() {
//     if (a>0) {
//         b=b*a;
//         document.write(b);
//     }
//     else {
//         document.write(b)
//     }
// }
// custom();



// TASK 2
// var a = +prompt("enter a year");
// function leapYEAR(){
//     if (a%4===0 ){
//         document.write("year is a leap");
//     }
//     else {
//         document.write("year is not leap");
//     }
// }
// leapYEAR();




//  TASK 3


// var s, a, b, c;
// a = +prompt("enter the  value of side a");
// b = +prompt("enter the  value of side b");
// c = +prompt("enter the  value of side c");

// function ss() {
//     s = (a + b + c) / 2
//     return s;
// }

// var areaTr;
// function area() {

//     areaTr = ss() * (ss() - a) * (ss() - b) * (ss() - c)

//     document.write("The area of triangle is :" + " " + areaTr)


// }


// area()



//  TASK 4


// var sub1 = +prompt("enter a first subject marks");
// var sub2 = +prompt("enter a second subject marks");
// var sub3 = +prompt("enter a third subject marks");
// var per = 100;
// var avg;
// var totalmarks = 300;
// var obtmarks;
// function percentage() {
//         obtMarks = ((sub1 + sub2 + sub3) /(totalmarks))*per;
//         return obtmarks;


// }

// function average() {
//         avg = (sub1 + sub2 + sub3)/3;
//         return avg;
// }
// function main() {
//         document.write("THE PERCENTAGE" +" " + percentage() +"<br>");
//         document.write("THE AVERAGE" +" " + average());
// }
// main();





//  TASK 5

// function code() {
//         var a = "whell";
//         var b = a.indexOf('h');
//         document.write(b);
// }
// code();




//  TASK 6


// function Delete() {
//     var a = "abdul moiz";
//     var b =[]; 
//     for (var i =0; i<a.length; i++){       
//          b[i]= a[i].replace(/[a,e,i,o,u]/g , " ");

//             }
//             document.write(b);
// }
// Delete();


// TASK 7



//     TASK 8

// var a, b, c, d
// function distance() {
//      a = +prompt("enter a distance in kilometer");
//      b = a * 100;
//      c = a * 1000;
//      d = a * 100000
//     document.write("THE DISTANCE OF " + " " + a + "km" + " " + " in METER is" + " " + b + " " + "and in inches" + " " + c + "in CENTIMETERS is" + " " + d);

// }
// distance();



//  TASK 9


// function pay() {
//         var salary = +prompt("enter employee salary");
//         var ourTimesal = 12;
//         var hrs = +prompt("enter a employee extra hrs");
//         var ca = ourTimesal * hrs;
//         var total = salary + ca;
//         document.write("your month fixed salary is" + " " + salary +"<br>");
//         document.write("your total salery with" +" " +hrs + " " + "extra  hrs is" + " " + total);        
// }
// pay();




//   TASK 10


