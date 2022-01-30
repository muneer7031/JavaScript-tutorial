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
        var num1=745;
        var num2=56.998;
    
    // 2. String
        var str1="Hello there this is a string using double quotes.";
        var str1='Hello there this is also a string using single quotes.';
        console.log(str1);
    

    // 3. Boolean
        var isTrue =true;
        var isFalse =false;
        console.log(isTrue);

    // 4. Objects
        var obj1={
            Muneer: 98,
            Kiran: 99,
            Rahul: 52,
            Anurag:99.999
        }
        console.log(obj1);

    // 5. Undefined
        var und1= undefined;
        console.log(undefined, und1);
        var und2; //also undefined
        console.log(und2);

    // 6. Null
        var n=null;

    // 7. Array
        var arr1=[12,20,30,40];
        var arr2=["this","is","string","array"];
        var arr3=[12,20,"kunja",40]; //hybrid array
        console.log(arr1);