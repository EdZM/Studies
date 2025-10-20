function groupAnagrams(strs) {
    const res = {};
    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1; // UTF-16 code of character in position 0
        }
        const key = count.join(',');
        
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(s);
    }
    return Object.values(res);
}

groupAnagrams(["abc", "edf", "qwer","bca"]);
console.log(groupAnagrams(["abc", "edf", "qwer","bca"]));