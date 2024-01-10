// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Input: "hello"
// Output: "holle"

// Using Two Pointer approch(in place reversal)
let str = 'AEIOU';
let newStr = '';
function reverseString(str) {
  let arr = str.split('');
  let i=0;
  let j = str.length - 1;
  while(i < j) {
    // while i is a vowel and j also a vowel then i++ and j-- and do swapping
    // while i is a vowel but j is not a vowel then i will be not increase and j will j--
    // while i is not  vowel but j is a vowel then i++ and j will not decrease
    // while i is not  vowel but j is not a vowel then i++ and j--
    const vowel = 'aeiouAEIOU';
    if(vowel.indexOf(str.charAt(i)) !== -1 && vowel.indexOf(str.charAt(j)) !== -1) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    } else if(vowel.indexOf(str.charAt(i)) === -1 && vowel.indexOf(str.charAt(j)) !== -1) {
      i++;
    } else if(vowel.indexOf(str.charAt(i)) !== -1 && vowel.indexOf(str.charAt(j)) === -1) {
      j--;
    } else {
      i++;
      j--;
    }
  }
  return arr.join('');
}
console.log('reverse str=>',reverseString(str));
