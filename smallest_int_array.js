function findSmallestInt(args){
    let smol = args[0]
      for(let i=1;i<args.length;i++){
        if(args[i]<smol)
        {smol=args[i]}
      }
      return smol
  }