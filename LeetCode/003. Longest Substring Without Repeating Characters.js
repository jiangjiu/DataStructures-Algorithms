/**
 * @param {string} s
 * @return {number}
 *
 * 思路：两个指针，一个hash存右指针索引，遇到hash中有值就左指针加一
 */
var lengthOfLongestSubstring  =  function(s)  {
    const map = {};
    let left = 0;

    return s.split('').reduce((max, v, i) => {
        console.log(i);
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
};
