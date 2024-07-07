public class Bio {
    public String dnaToRna(String dna) {
    
   StringBuilder rna = new StringBuilder();
      
      for(int i=0;i<dna.length();i++){
          char nucleic = dna.charAt(i);
        
        if(nucleic=='T'){
          rna.append('U');
        }else{
          rna.append(nucleic);
        }
        
      }
      return rna.toString();
      }
}