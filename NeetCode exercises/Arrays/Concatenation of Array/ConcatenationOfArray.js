const nums0 = [1,4,1,2];
const nums1 = [22,21,20,1];

const myFunction = (nums) => {
	let ans = new Array(Number(nums.length * 2));
	const inputLen = nums.length;

	for (let i = 0; i < inputLen; i++){
		ans[i] = nums[i];
		ans[i + inputLen] = nums[i];
	} 

	return ans;
}

let ans0 = myFunction(nums0);
let ans1 = myFunction(nums1);

console.log(ans0);
console.log(ans1);