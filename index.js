function missingNumber(arr){
    let total = ((arr.length+1) * (arr.length + 2)) / 2;
    for(let i =0; i < arr.length; i++){
        total = total - arr[i];
    }
    return total;
}
console.log(missingNumber([4,3,1,5,8,2,6,9]))
