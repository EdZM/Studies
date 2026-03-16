var checkInclusion = function (s1, s2) {
  const s1Map = new Map();
  const s2Map = new Map();

  for (let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
  }

  for (let i = 0; i < s2.length; i++) {
    s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);

    if (i >= s1.length) {
      const leftChar = s2[i - s1.length];
      if (s2Map.get(leftChar) === 1) {
        s2Map.delete(leftChar);
      } else {
        s2Map.set(leftChar, s2Map.get(leftChar) - 1);
      }
    }

    if (mapsAreEqual(s1Map, s2Map)) {
      return true;
    }
  }

  return false;
};

function mapsAreEqual(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
