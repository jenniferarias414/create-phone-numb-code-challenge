// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don’t forget the space after the closing parentheses!

// function createPhoneNumber (arr){
//     let newArr = []
//     for (i=0; i<arr.length; i++){
//         newArr.push('(', arr[0], arr[1], arr[2], ') ', arr[3], arr[4], arr[5], '-', arr[6], arr[7], arr[8], arr[9]).join('')
//     }
//     return newArr
// }

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

//----------using a for loop option BELOW --------------

// function createPhoneNumber(nums){
//     let format = '(xxx) xxx-xxxx'
//     for(let i=0; i<nums.length; i++){
//         format = format.replace('x', nums[i])
//     }
//     return format
// }


function createPhoneNumber (arr) {
    const areaCode = arr.slice(0, 3).join('') //.slice: This extracts the elements from index 0 to index 2 from the array. It creates a new array containing the first three digits of the phone number.   

    //.join(''): This joins the elements of the array into a string. The argument '' specifies that there should be no separator between the joined elements.

    const middle = arr.slice(3, 6).join('') //This extracts the elements from index 3 to index 5
    const last = arr.slice(6).join('') //extracts the elements from index 6 to the end 

    return `(${areaCode}) ${middle}-${last}`
}

let momsNumber = [9,7,2,8,0,2,9,8,5,3]
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
console.log(createPhoneNumber(momsNumber))