
// A = B 当且仅当 A 是 B 的子集并且 B 是 A 的子集
const isSameSet = (s1,s2) => {
    const isSame = (a, b) => {
        let values = [...a];
        for (let val in values) {
            if(!b.has(val)) return false;
        }
        return true;
    }
    return isSame(s1, s2) && isSame(s2,s1);
}

const isSameSet = (set1,set2) => {
    [...set1].every(o => set2.has(o)) &&
    [...set2].every(o => set1.has(o))
}