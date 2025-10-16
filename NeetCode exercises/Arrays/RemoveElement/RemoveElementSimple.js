const nums0 = [1,1,2,3,4];
const val0 = 1;

const nums1 = [0,1,2,2,3,0,4,2];
const val1 = 2;

function removeElement(nums, val) {
    let k = 0;
        for (let i = 0; i < nums.length; i++){
            if(nums[i] != val) {
                nums[k++] = nums[i]; // reduces space complexity from O(n) to O(1)
            }
        }

    return nums;
}

console.log(removeElement(nums0, val0));
console.log(removeElement(nums1, val1));