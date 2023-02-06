// You are given an array(which will have a length of at least 3, but could be very large)
//  containing integers.The array is either entirely comprised of odd integers or entirely
//   comprised of even integers except for a single integer N.Write a method that takes the
//    array as an argument and returns this "outlier" N.

function findOutlier(integers) {
    const even = integers.filter(int => int % 2 == 0)
    console.log('Even is '+ even)
    const odd = integers.filter(int => (int % 2 == 1 || int % 2 == -1) && int != 0) // solution below is more efficient
                                //int => (int % 2 != 0) 
    console.log('Even is '+ odd)
    return even.length < odd.length ? even[0] : odd[0];

}

const arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]
//   Should return: 11 (the only odd number)

const arr2 = [160, 3, 1719, 19, 11, 13, -21]
//   Should return: 160 (the only even number)
console.log(findOutlier(arr1))
console.log(findOutlier(arr2))
console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
