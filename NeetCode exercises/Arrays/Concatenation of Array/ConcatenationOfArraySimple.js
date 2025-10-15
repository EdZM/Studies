const nums0 = [1,4,1,2];
const nums1 = [22,21,20,1];

const myFunction = (nums) => {
	nums.push(...nums);
    return nums;
}

let ans0 = myFunction(nums0);
let ans1 = myFunction(nums1);

console.log(ans0);
console.log(ans1);