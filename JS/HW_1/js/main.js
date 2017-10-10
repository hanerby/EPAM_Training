"1" + 2 + 0; // 2 and 0 converts in a string and concatenates with "1", return "120"
"1" - 1 + 2; // "1" converted in num, and next occurs as a usual math, return 2
true + false; // true and false converted in num as a 1 and 0, return 1
10/"5"; // "5" converted in a num, return 2
"2"*"3"; //"2" and "3" converted in num, next usual dividing, return 6
4 + 5 + "px"; //in first 4 and 5 is sim and next coverted in a string and concatenates with "px", return "9px"
"$" + 4 + 5; // 4 and 5converted in a string, next "$" concatenates with "4" and and "5", return "$45"
"42" - 2; // "42" converted in num and next sudtract 2, return 40
"4px" - 2; // in first try coverted "4px" in num, but cann't and return NaN
7/0; // return Infinity
"-9\n" + 5; //5 converted in a string, next sum with "-9\n", next "-9" and "5" is separated by line wrapping, return "-9\n5"
"-9\n" - 5; //"-9\n" converted in a num, next subtract 5, return -14
5 && 2; // return 2 because it is a last true expression
2 && 5; // return 5 because it is a last true expression
5 || 0; // return 5 because it is a first true expression
0 || 5; // return 5 because it is a first true expression(0 converted in false)
null + 1; // null converted in num as a 0 and next sum with 1, return 1
undefined + 1; //undefined can not converted in num and return NaN
null == "\n0\n"; // return false because they are compare as a strings
+null == +"\n0\n"; // null and "\n0\n" coverted in nums, next they are compare and return true