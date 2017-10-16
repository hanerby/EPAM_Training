// Find factorial //
var n=10; 
var res = 1;
for(var i = n;i>1;i--){
    res = n*=(i-1);
    console.log(i, res);
};
// 
var n = 5; //any var
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
// Simple num // not my, i honestly confesseds
var arr = [],
    num = [],
    n = 100,
    p = 2;
for (var i = 2; i < n; i++) {
    arr[i] = i
}
do {
for (i = 2 * p; i < n; i += p) {
    arr[i] = false;
}
for (i = p + 1; i < n; i++) {
    if (arr[i]) break;
}
 p = i;
} while (p * p < n);

for(i = 0; i < n; i++){
    if(arr[i]){
        num.push(arr[i]);
    };
};
console.log(arr);
console.log(num);
