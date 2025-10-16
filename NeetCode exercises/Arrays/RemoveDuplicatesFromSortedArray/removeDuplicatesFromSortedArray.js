const nums0 = [1,1,2,3,4];
const nums1 = [2,10,10,30,30,30];


function removeDuplicates(nums) {
    let idx0 = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]){
            nums[idx0++] = nums[i];
        }
    }

    return idx0;
}

console.log(removeDuplicates(nums0));
console.log(removeDuplicates(nums1));