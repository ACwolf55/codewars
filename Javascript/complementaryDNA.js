function DNAStrand(dna){
    let arr = []
    for(let i=0; i<dna.length;i++){
      switch(dna[i]) {
    case 'A':
      arr.push('T')
      break;
   case 'T':
      arr.push('A')
      break;
  case 'G':
      arr.push('C')
      break;
  case 'C':
      arr.push('G')
  } 
      }
  const flipDNA = arr.join('')
    return flipDNA
}
