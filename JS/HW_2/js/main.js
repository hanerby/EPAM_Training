// Find factorial //
var n=10;
var res = 1;
for(var i = n;i>1;i--){
    res = n*=(i-1);
    console.log(i, res);
};
// 
var n = 5;
var res = 1;
for(var i = 0; i< n; i++){
    res *=n-1;
    console.log(i, res);
};
//  Find Fibonacci //
var n = 5;
var fib = [0, 1];
for(var i = 2; i <=n; i++){
    fib[i]=fib[i-2] + fib[i-1];
    console.log(i, fib);
};
// Simple num //


