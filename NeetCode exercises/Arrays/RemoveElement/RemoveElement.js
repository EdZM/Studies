
const nums0 = [1,1,2,3,4];
const val0 = 1;

const nums1 = [0,1,2,2,3,0,4,2];
const val1 = 2;

function removeElement(nums, val) {
    const differentFromVal = new Array();

    nums.forEach((num) => {
        if(num != val){
            differentFromVal.push(num);
        }
    })
    
    for (let i = 0; i < differentFromVal.length; i++){
        nums[i] = differentFromVal[i];
    }

    return differentFromVal.length;
}

console.log(removeElement(nums0, val0))
console.log(removeElement(nums1, val1))