// Last updated: 5/7/2025, 9:25:49 PM
function twoSum(nums: number[], target: number): number[] {
    let num1 = 0;
    let num2 = 0;
    nums.every((current1, index1) => 
    {
        nums.slice(index1+1).every((current2, index2) => {
            if( current1 + current2 === target){
                num1 = index1;
                num2 = index2 + 1 + index1;
                return false;
            }
            return true;
        })
        if(num2 !=0 )
        {
            return false;
        }
        return true
    })

    return [num1 ,num2]
};