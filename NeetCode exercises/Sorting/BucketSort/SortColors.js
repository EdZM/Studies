
//const nums = [1, 0, 1, 2, 1, 0, 0, 0, 2]; // 0 <= nums[i] <= 2
const nums = [4, 4, 6, 6, 5, 6, 4, 5, 5, 20, 20, 9]; // 4 <= nums[i] <= 20

// using counting sort
function sortColors(nums) {
    let counts = new Array(21).fill(0);
    
    for(let i = 0; i < nums.length; i++){
        counts[nums[i]] += 1;
    }
    
    let k = 0;
    for(let i = 0; i < counts.length; i++){
        for(let j = 0; j < counts[i]; j++){
            nums[k++] = i;
        }
        
    }
}

sortColors(nums);