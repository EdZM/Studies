const s = "racecar";
const t = "carrace";

function isAnagram(s, t) {
    if(s.length !== t.length){
        return false;
    }
    
    const sHash = new Map();
    const tHash = new Map();

    for (let i = 0; i < s.length; i++){
        sHash.set(s[i], (sHash.get(s[i]) || 0) + 1);
        tHash.set(t[i], (tHash.get(t[i]) || 0) + 1);
    }

    for(const sKey of sHash.keys()){
        if(!tHash.has(sKey) || sHash.get(sKey) !== tHash.get(sKey)) {
            return false;
        }
    }

    return true;
}

isAnagram(s, t);
console.log(isAnagram(s, t));