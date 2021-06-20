//QUESTION 1

console.log('\n');
function is_array(input) {
    if (Array.isArray(input) === Array.isArray([1,2,3]))
        return true;
    return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log('\n');

//QUESTION 2

console.log('\n');
function array_Clone(arra1) {
    return arra1.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log('\n');

//QUESTION 3

console.log('\n');
function first(arr, n = null) {
    if (n == null)
        return arr[0];
    if (n < 0)
        return [];
    return arr.slice(0, n)
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
console.log('\n');

//QUESTION 4

console.log('\n');
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.toString());
console.log(myColor.join("+"));
console.log('\n');

//QUESTION 5

console.log('\n');
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var x = 1;
var y = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
            y++;
        if (x < y) {
            x = y;
            item = arr1[i];
        }
    }
    y = 0;
}
console.log(item + " ( " + x + " times ) ");
console.log('\n');