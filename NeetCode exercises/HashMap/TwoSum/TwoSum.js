
const nums = [1,3,4,2,7]
const target = 10


function twoSum(nums, target) {
    let hashMap = new Map();

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(hashMap.has(diff)){
            return [hashMap.get(diff), i]
        }
        hashMap.set(nums[i], i)
    }
}
console.log(twoSum(nums, target));