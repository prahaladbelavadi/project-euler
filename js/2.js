const limit = 5

// function fibo(limit){
//     if (limit < 0){
//         console.log("input lesser than zero");        
//     }else if (limit == 1){
//         return 0
//     }else if(limit== 2){
//         return 1
//     }else{
//         return fibo(limit-1 + limit-2)
//     }
// }

var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 4000000; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
}

// fibo(limit)

