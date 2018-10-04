var a  = 10
var a = 10
undefined
var a = 20
undefined
a
20
let b =20
undefined
b
20
let b =21
b = 21
21
b
21
const c = 10
undefined
c
10
const c = 11
VM174:1 Uncaught SyntaxError: Identifier 'c' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM174:1
c= 12

// ES5
function add(a,b){
    return a+b
}
add(1,2)

//Es6
let add = (a,b) => {return a+b}
add(2,4)


"10"+10+10

1+1
2
1-1
0
1/2
0.5
1*2
2
10%2
0
11%2
1
"hi"+" javascript"
"hi javascript"
"hi"-" javascript"
NaN
10+10+"10"
"2010"
"10"+10+10
"101010"
10+"10"+10
"101010"
true+1
2
false+1
1



function allow(){
    var z = 10
    return z
}

if(a>10){
    let w=20
}

a = 10
10
a
10
10 == "10"
true
10 === "10"
false


if(a%2 == 0){
    console.log("number is even")
} else{
    console.log("number is odd")
}


let isEven = (a) => {
    if(a%2 == 0){
        console.log("number is even")
    } else{
        console.log("number is odd")
    }
}