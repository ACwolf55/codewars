
function disemvowel(str) {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    const censored = str.split('').filter((i) => {
     return vowels.includes(i)===false
    })
    return censored.join('')
  }
  