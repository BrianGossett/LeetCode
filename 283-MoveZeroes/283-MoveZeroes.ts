// Last updated: 6/13/2025, 12:39:28 PM
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const indexes = []
    nums.forEach((n, i)=> {if(n === 0){
        indexes.push(i)
    }})
    indexes.forEach((n, i)=> {
        nums.splice(n-i,1)
        nums.push(0)
        })
    console.log(nums)
};