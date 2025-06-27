// Last updated: 6/27/2025, 12:45:33 PM
function lengthOfLongestSubstring(s: string): number {
    let longestValue = ''
    let potintialLonges = ''
    let charArray = s.split('');
    charArray.forEach((char)=>{
        if(potintialLonges.includes(char)){
            potintialLonges = potintialLonges.slice(potintialLonges.indexOf(char)+1) + char
        }
        else {
            potintialLonges += char
        }

        if (potintialLonges.length > longestValue.length){
            longestValue = potintialLonges
        }

    })
    return longestValue.length
};