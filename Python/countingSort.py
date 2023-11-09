def countingSort(arr):
  # create array that has 100 zeros
  zeros = []
  i = 1
  while i <= 100:
    zeros.append(0)
    i += 1
    
  # loop through arr
  for x in arr:
    # what ever number +=1 to the index of 100arrary
    zeros[x] += 1
     # return 100 array
  
  return zeros
