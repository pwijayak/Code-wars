function gimme (triplet) {

    for (i=0;i<triplet.length;i++){
      if (triplet[i]!=Math.min(...triplet)&&triplet[i]!=Math.max(...triplet)){
        return i
      }
    }
    }