// Last updated: 5/19/2025, 5:44:05 PM
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const check = (l: ListNode) => l?.val != null || undefined 
    const reverseList = (l: ListNode): string => {
        let num = '';
        let temp = l;
        while (check(temp)){ 
            num = temp.val.toString() + num
            temp = temp.next
        };
        return num;
    }

    const addString = (num1: string, num2: string) =>{
        const maxLength = Math.max(num1.length,num2.length)
        let carry = 0;
        let newNumber = '';
        num1 = num1.padStart(maxLength, '0')
        num2 = num2.padStart(maxLength, '0')
        
        for (let i = maxLength - 1; i >= 0; i--) {
            let sum: number = Number(num1.charAt(i)) + Number(num2.charAt(i)) + carry

            if (sum >= 10)
            {
                sum =  sum % 10
                carry = 1
            }
            else{
                carry = 0
            }
            newNumber = sum.toString() + newNumber;
        }
        if(carry > 0){
            newNumber = '1' + newNumber
        }

        return newNumber;
    }

    const makeList = (numb: string):ListNode => {
        let result:ListNode | null = null
        for (let i = 0; i < numb.length; i++) {
            if (result !== null) {
                result = {...new ListNode(Number(numb.charAt(i))), next: result}
            }
            else {
                result = new ListNode(Number(numb.charAt(i)));
            }
        }
        return result;
    }
    
    return makeList(addString(reverseList(l1), reverseList(l2)));
};