strs = ["act","pots","tops","cat","stop","hat"]

function groupAnagrams(strsList){
    const group = {};

    for(let s of strsList){
        const sortedString = s.split('').sort().join('');
        if(!group[sortedString]){
            group[sortedString] = [];
        }

        group[sortedString].push(s);
    }
    return Object.values(group);
}

console.log(groupAnagrams(strs));