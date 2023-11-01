# example arr
arr = [[-1, 1, -7, -8],

       [-10, -8, -5, -2],

       [0, 9, 7, -1],

       [4, 4, -2, 1]]



def diagonalDifference(arr):

  rows = len(arr) - 1
  i=0
  j=rows
  sumRight = 0
  sumLeft = 0

  for x in arr:
    print('for loop',x)
    sumRight += x[i]
    i += 1
    sumLeft += x[j]
    j -= 1
    print(sumRight,sumLeft)
    
  sum = abs(sumLeft-sumRight)
  return sum