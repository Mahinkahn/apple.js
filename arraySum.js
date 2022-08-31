
function getArraySum(numbers){
        var sum = 0;
        for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78,  54, 68];
var result = getArraySum(numbers);
console.log("total of the numbers: ", result);
var total = getArraySum([43, 56,  41, 86, 22]);
console.log("total of the numbers: ", total);