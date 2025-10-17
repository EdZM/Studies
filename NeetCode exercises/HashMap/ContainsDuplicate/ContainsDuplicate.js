const nums = [1,2,3,3,4,5,5,5]


function containsDuplicate(nums) {
    const hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if(hashMap.has(nums[i])){
            return true;
        }
        hashMap.set(nums[i], 1)
        
    }
    return false;
}

console.log(containsDuplicate(nums))