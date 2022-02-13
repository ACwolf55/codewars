// *write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example
// anagram('finder', 'Friend')  --> true

const isAnagram = (str1,str2)=>{
let arr1 = [...str1.toLowerCase().trim()]
let arr2 = [...str2.toLowerCase().trim()]

let sameArr = 0

for(let i = 0; i<arr1.length;i++){
    for(let n = 0; n<arr2.length;n++){
        if(arr1[i]==arr2[n]){sameArr++}
    }
  }


  if(sameArr === str1.length && sameArr ===str2.length){
    return true
  }else{return false}

}
