
const nums = [1,3,4,2,7]
const target = 10


function twoSum(nums, target) {
    let hashMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        hashMap.set(nums[i], i)
    }

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        const hashKey = hashMap.get(diff)

        if(hashKey && hashKey != i){
            const j = hashMap.get(diff);
            return [i, j]
        }       
    }
}
console.log(twoSum(nums, target));