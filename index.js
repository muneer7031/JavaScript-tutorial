// 1.ways to print in JavaScript
    // console.log("Hello World");
    // alert("Welcome to JavaScript");
    // document.write("This is a statement executed by using document write");


// 2 JavaScript console api
    // console.log("Hello World");
    // console.assert(4==8);
    // console.warn("this is a warning highlighted in yellow");
    // console.error("this is an error highlited in red");


// 3. variables in JavaScript - containers that store some data values
    // var number1 = 2107;
    // var number2 = 3110;
    // console.log(number1+number2);


// 4. Datatypes in JavaScript
    
/*
    Datatypes in JavaScript are of 2 types 
    primitive datatype- number,string,booelan,undefined,null,symbol
    reference datatypes- array and objects
*/

    // 1. Number
        // var num1=745;
        // var num2=56.998;
    
    // 2. String
        // var str1="Hello there this is a string using double quotes.";
        // var str1='Hello there this is also a string using single quotes.';
        // console.log(str1);
    

    // 3. Boolean
        // var isTrue =true;
        // var isFalse =false;
        // console.log(isTrue);

    // 4. Objects
        // var obj1={
            // Muneer: 98,
            // Kiran: 99,
            // Rahul: 52,
            // Anurag:99.999
        // }
        // console.log(obj1);

    // 5. Undefined
        // var und1= undefined;
        // console.log(undefined, und1);
        // var und2; //also undefined
        // console.log(und2);

    // 6. Null
        // var n=null;

    // 7. Array
        // var arr1=[12,20,30,40];
        // var arr2=["this","is","string","array"];
        // var arr3=[12,20,"bablo",40]; //hybrid array
        // console.log(arr2);

// 5. Operators in JavaScript

    // 1.Arithmetic Operators
        // var a=100;
        // var b=10;
        // console.log("The value of a+b :",a+b);
        // console.log("The value of a-b :",a-b);
        // console.log("The value of a*b :",a*b);
        // console.log("The value of a/b :",a/b);
        // console.log("The value of a%b :",a%b);

    // 2. Assignment operators
        // var c=b;
        // c+=2;   //c=c+2
        // c-=5;
        // c*=4;
        // c/=3;
        // console.log(c);
    
    // 3. Comparison operators
        // var x =10;
        // var y=20;
        // console.log(x >= y);
        // console.log(x <= y);
        // console.log(x > y);
        // console.log(x < y); 

    // 4.Logical operators
        
        // Logical AND
        // console.log(true && true);
        // console.log(true && false);
        // console.log(false && true);
        // console.log(false && false);

        // Logical OR
        // console.log(true || true);
        // console.log(true || false);
        // console.log(false || true);
        // console.log(false || false);

        // Logical NOT
        // console.log(!false);
        // console.log(!true);

// 6. Functions in JavaScript
    // function avg(a,b){
    //     return (a+b)/2;
    // }
    // var c= avg(5,10);
    // d=avg(5,5);
    // console.log(d);

// 7. Conditional statements
    // age=22;
    // // if statement
    // if(age>21){
    //     console.log("You can consume alcohol");
    // }

    // // if - else statement
    // if(age>18){
    //     console.log("you can vote");
    // }
    // else{
    //     console.log("you cannot vote");
    // }

    // // if else ladder
    // if(age<18){
    //     console.log("you are a kid");
    // }
    // else if(age>50){
    //     console.log("you are a senior citizen");
    // }
    // else if(age>30){
    //     console.log("you are a responsible adult");
    // }
    // else if(age>18){
    //     console.log("you are an adult");
    // }
    // else{
    //     console.log("what are you?");
    // }

// 8. Loops in JavaScript
    // arr=[1,2,3,4,5,6,7,8,9];

    // for loop

    // for(i=0;i<arr.length;++i){
    //     console.log(arr[i]);
    // }

    // for-each loop

    // arr.forEach(element => {
    //     console.log(element);
    // });

    // while loop

    // j=0;
    // while (j<arr.length) {
    //     console.log(arr[j]);
    //     ++j;
    // }

    // do-while loop
    // do {
    //     console.log(arr[j]);
    //     j++;
    // } while (j<arr.length);

// 9. break and continue
    //  for(i=0;i<arr.length;++i){
    //      if (i==5) {
    //         //  break;
    //          continue;
    //      }
    //     console.log(arr[i]);
    // }

// 10. Array methods
    // let myArray=[1,'hi',5,7,9,10];
    // console.log(myArray.pop());
    // let newArray=myArray.push('Muneer');
    // console.log(newArray);
    // console.log(myArray);
    // console.log(myArray.indexOf(5));
    // console.log(myArray.shift());
    // console.log(myArray.unshift('start'));

// 11.String Methods
    let myString="Hello there, im learning JavaScript and its interesting";
    console.log(myString.length);
    console.log(myString.indexOf("JavaScript"));
    console.log(myString.split("learning"));
    console.log(myString.toUpperCase());
    
